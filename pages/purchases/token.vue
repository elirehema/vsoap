<template>
  <v-data-table
    v-if="orders"
    :headers="headers"
    :items="orders"
    sort-by="calories"
    class="elevation-1"
    @click:row="handleRowClick"
  >
    <template v-slot:top>
      <v-toolbar color="primary" flat>
        <v-toolbar-title class="text-h5 font-weight-bold white--text"
          >Token Purchases</v-toolbar-title
        >

        <v-spacer></v-spacer>
      
        <v-dialog v-model="dialog" max-width="600px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="success"
              dark
              class="mb-2 px-4"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon left> mdi-plus </v-icon>
              Buy Token
            </v-btn>
          </template>
          <v-card>
            <v-toolbar color="primary" flat dark>
              <v-toolbar-title
                ><span class="text-h5">{{ formTitle }}</span></v-toolbar-title
              >
            </v-toolbar>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="12" md="4" v-if="false">
                    <v-select
                      v-model="editedItem.productId"
                      :items="products"
                      :item-text="'name'"
                      :item-value="'id'"
                      label="Select Product"
                      v-on:focus="$store.dispatch('_fetchproducts')"
                      :rules="[rules.required]"
                      name="editedItem.productId"
                      persistent-hint
                      readonly
                      single-line
                    >
                    </v-select>
                  </v-col>
                  <v-col cols="12" sm="12" md="6">
                    <v-autocomplete
                      v-model="editedItem.serialNumber"
                      :items="meters"
                      :item-text="'meterNumber'"
                      :item-value="'serialNumber'"
                      label="Select Meter"
                      v-on:focus="$store.dispatch('_fetchmeters')"
                      :rules="[rules.required]"
                      name="editedItem.productId"
                      persistent-hint
                      single-line
                    >
                    </v-autocomplete>
                  </v-col>
                  <v-col cols="12" sm="12" md="6">
                    <v-text-field
                      v-model="editedItem.msisdn"
                      label="Phone Number"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="6">
                    <v-text-field
                      v-model="editedItem.amount"
                      label="Amount "
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="6">
                    <v-text-field
                      v-model="editedItem.transactionRef"
                      label="Transaction Reference"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary lighten-1" small class="px-4" @click="close"> Cancel </v-btn>
              <v-btn color="warning darken-1" small class="px-4"  @click="save"> Purchase </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      
      </v-toolbar>
    </template>
    <template v-slot:item.updatedAt="{ item }">
      <span>{{ item.updatedAt | dateformat }}</span>
    </template>
    <template v-slot:item.createdAt="{ item }">
      <span>{{ item.createdAt | dateformat }}</span>
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
      headers: [
        { text: "Order No.#", value: "orderNumber" },
        { text: "Total Amount", value: "amount" },
        { text: "Status", value: "status" },
        { text: "Created On", value: "createdAt" },

        { text: "Updated On", value: "updatedAt" },
      ],
      ords: [],
      editedIndex: -1,
      rules: {
        required: value => !!value || "Field Required",
      },
      editedItem: {
        productId: 2,
      },
      paymentreq: {
        action: 400,
        orderId: null,
      },
      defaultItem: {
        productId: 2,
      },
    };
  },
  computed: {
    ...mapGetters({
      orders: "tokenpurchases",
      products: "products",
      meters: "meters",
    }),
    formTitle() {
      return this.editedIndex === -1 ? "Token Purchase" : "Edit customer";
    },
  },
  created() {
    this.$store.dispatch("_fetchtokenpurchases");
  },
  methods: {


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
      this.paymentreq.action = action;

      this.$store.dispatch("_makeorderpayment", this.paymentreq).then((res) => {
        this.editdialog = false;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        // this.$store.dispatch("_updateproduct", this.editedItem);
      } else {
        // var payload =[this.editedItem]
        this.$store.dispatch("_placenewtokenorder", this.editedItem);
      }
      this.close();
    },
    handleRowClick(v){
      this.$router.push(`/purchases/${v.id}`)
    },
    getStatusColor(v) {
      switch (v) {
        case "100":
          return "white";
          break;
        case "200":
          return "success lighten-3";
        case "300":
          return "blue lighten-3";

        case "400":
          return "teal";
        case "500":
          return "red lighten-4";
        default:
          return "white";
          break;
      }
    },
  },
};
</script>
