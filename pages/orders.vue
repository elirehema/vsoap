<template>
  <v-data-table
    v-if="orders"
    :headers="headers"
    :items="orders"
    sort-by="calories"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar color="primary" flat>
        <v-toolbar-title class="text-h4 white--text">Orders</v-toolbar-title>

        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              class="mb-2 px-4"
              v-bind="attrs"
              v-on="on"
            >
              Place new order
            </v-btn>
          </template>
          <v-card>
            <v-toolbar color="primary" flat dark>
              <v-toolbar-title
                ><span class="text-h5">{{ formTitle }}</span></v-toolbar-title
              >

              <v-spacer></v-spacer>
              <v-btn color="white" @click="addProduct" icon>
              <v-icon>mdi-plus</v-icon>
              </v-btn>
            </v-toolbar>

            <v-card-text>
              <v-container>
                <v-row v-for="order in ords" :key="order.productId">
                  <v-col  cols="12" sm="12" md="6">
                    <v-select
                      v-model="order.editedItem.productId"
                      :items="products"
                      :item-text="'name'"
                      :item-value="'id'"
                      label="Select Product"
                      v-on:focus="$store.dispatch('_fetchproducts')"
                      :rules="[rules.required]"
                      name="editedItem.productId"
                      persistent-hint
                      single-line
                    >
                    </v-select>
                  </v-col>
                  <v-col cols="12" sm="12" md="6">
                    <v-text-field
                      v-model="order.editedItem.amount"
                      label="Product Code"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close"> Cancel </v-btn>
              <v-btn color="blue darken-1" text @click="save"> Save </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5"
              >Are you sure you want to delete this item?</v-card-title
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete"
                >Cancel</v-btn
              >
              <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                >OK</v-btn
              >
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
      <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary"> Reset </v-btn>
    </template>
  </v-data-table>
  <skeleton-table-loader v-else />
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      dialog: false,
      dialogDelete: false,
      headers: [
        { text: "Order No.#", value: "orderNumber" },
        { text: "Total Amount", value: "amount" },
        { text: "Status", value: "status" },
        { text: "Created On", value: "createdAt" },
        { text: "Customer Id", value: "CustomerId" },

        { text: "Updated On", value: "updatedAt" },
        { text: "Actions", value: "actions", sortable: false },
      ],
      ords: [],
      editedIndex: -1,
      editedItem: {
        amount: 0,
        productId: 0
      },
      defaultItem: {},
    };
  },
  computed: {
    ...mapGetters({
      orders: "orders",
      products: "products",
    }),
    formTitle() {
      return this.editedIndex === -1 ? "Place new order" : "Edit customer";
    },
  },
  created() {
    this.$store.dispatch("_fetchorders");
  },
  methods: {
    editItem(item) {
      this.editedIndex = this.orders.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.editedItem.meterId = item.MeterId;
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.orders.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.orders.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    addProduct(){
      this.ords.push(this.editedItem)
    },

    save() {
      if (this.editedIndex > -1) {
        this.$store.dispatch("_updateproduct", this.editedItem);
      } else {
        console.log(this.ords)
        //this.$store.dispatch("_addnewproduct", this.editedItem);
      }
      this.close();
    },
  },
};
</script>
