<template>
  <v-data-table v-if="orders" :headers="headers" :items="orders" sort-by="calories" class="elevation-1">
    <template v-slot:top>
      <v-toolbar color="primary" flat>
        <v-toolbar-title class="text-h4 white--text">Token Purchases</v-toolbar-title>

        <v-spacer></v-spacer>
        <v-dialog v-model="editdialog" max-width="500px">
          <template v-if="false" v-slot:activator="{ on, attrs }">
            <v-btn color="success" dark class="mb-2 px-4" v-bind="attrs" v-on="on">
              <v-icon left> mdi-plus </v-icon>
              Create new purchase
            </v-btn>
          </template>
          <v-card>
            <v-toolbar color="primary" flat dark>
              <v-toolbar-title><span class="text-h5">{{ formTitle }}</span></v-toolbar-title>

              <v-spacer></v-spacer>

            </v-toolbar>

            <v-card-text>
              <v-container>
                <v-row class="d-flex justify-space-between">
                  <v-col v-if="editedItem.statusCode =='100'" cols="12" sm="12" md="4">
                    <v-btn small class="px-8" color="blue lighten-2" @click="makeOrderPayment(200)" dark>
                    <v-icon left>mdi-check-all</v-icon>
                    Approve</v-btn>
                  </v-col>
                  <v-col v-if="editedItem.statusCode =='200'" cols="12" sm="12" md="4">
                    <v-btn small class="px-8" color="success" @click="makeOrderPayment(300)">
                      <v-icon left>mdi-progress-check</v-icon>Process</v-btn>
                  </v-col>
                  <v-col v-if="editedItem.statusCode =='300'" cols="12" sm="12" md="4">
                    <v-btn small class="px-8" color="success" @click="makeOrderPayment(400)">
                    <v-icon left>mdi-account-credit-card</v-icon>Make Payment</v-btn>
                  </v-col>
                  <v-col v-if="editedItem.statusCode !='400'" cols="12" sm="12" md="4">
                    <v-btn small class="px-8" color="warning" @click="makeOrderPayment(500)">Cancel</v-btn>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="editdialog = !editdialog"> Cancel </v-btn>
            
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="success" dark class="mb-2 px-4" v-bind="attrs" v-on="on">
              <v-icon left> mdi-plus </v-icon>
             Buy Token
            </v-btn>
          </template>
          <v-card>
            <v-toolbar color="primary" flat dark>
              <v-toolbar-title><span class="text-h5">{{ formTitle }}</span></v-toolbar-title>

              <v-spacer></v-spacer>
              <v-btn color="white" @click="addProduct" icon>
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </v-toolbar>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="12" md="6">
                    <v-select v-model="editedItem.productId" :items="products" :item-text="'name'" :item-value="'id'"
                      label="Select Product" v-on:focus="$store.dispatch('_fetchproducts')" :rules="[rules.required]"
                      name="editedItem.productId" persistent-hint single-line>
                    </v-select>
                  </v-col>
                  <v-col cols="12" sm="12" md="6">
                    <v-text-field v-model="editedItem.amount" label="Product Code"></v-text-field>
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
            <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-container v-if="item.status != 'paid'">
        <v-icon small class="mr-2" v-on:click="editItem(item)"> mdi-pencil </v-icon>

      </v-container>
    </template>
    <template v-slot:item.status="{ item }">
      <v-chip small color="success" label text-color="white">
        <v-icon :color="getStatusColor(item.statusCode)" left>
          mdi-label
        </v-icon>
        {{ item.status.toUpperCase() }}
      </v-chip>
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
      editdialog: false,
      headers: [
        { text: "Order No.#", value: "orderNumber" },
        { text: "Total Amount", value: "amount" },
        { text: "Control Number", value: "controlNumber" },
        { text: "Status", value: "status" },
        { text: "Created On", value: "createdAt" },
        { text: "Customer Id", value: "CustomerId" },

        { text: "Updated On", value: "updatedAt" },
        { text: "Actions", value: "actions", sortable: false },
      ],
      ords: [],
      editedIndex: -1,
      editedItem: {},
      paymentreq: {
        action: 400,
        orderId: null
      },
      defaultItem: {},
    };
  },
  computed: {
    ...mapGetters({
      orders: "orderslist",
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
      console.log(item)
      
      this.editedItem = Object.assign({}, item);
   
      this.editedItem.meterId = item.MeterId;
      this.paymentreq.orderId = this.editedItem.id
      this.editdialog = true;
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
    addProduct() {
      this.ords.push(this.editedItem);
    },
    makeOrderPayment(action) {
      this.paymentreq.action = action

      this.$store.dispatch("_makeorderpayment", this.paymentreq).then((res) => {
        this.editdialog = false
      });
    },

    save() {
      if (this.editedIndex > -1) {
        this.$store.dispatch("_updateproduct", this.editedItem);
      } else {
        console.log(this.ords);
        //this.$store.dispatch("_addnewproduct", this.editedItem);
      }
      this.close();
    },
    getStatusColor(v){
      switch (v) {
        case '100':
          return 'white'
          break;
      case '200':
        return 'success lighten-3'
        case '300':
        return 'blue lighten-3'

        case '400':
          return 'teal'
          case '500':
          return 'red lighten-4'
        default:
          return 'white'
          break;
      }
    }
  },
};
</script>
