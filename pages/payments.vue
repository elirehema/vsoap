<template>
    <v-data-table
      v-if="payments"
      :headers="headers"
      :items="payments"
      sort-by="calories"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat color="primary">
          <v-toolbar-title class="text-h5 font-weight-bold white--text">Payment Notifications</v-toolbar-title>
  
          <v-spacer></v-spacer>
         
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
          { text: "Serial No.#", value: "serialNumber" },
          { text: "Total Amount", value: "amount" },
          { text: "MSISDN", value: "msisdn" },
          { text: "Transaction Ref", value: "transactionRef" },
          { text: "Created On", value: "createdAt" },
  
          { text: "Updated On", value: "updatedAt" },
          { text: "Actions", value: "actions", sortable: false },
        ],
        ords: [],
        payments: null,
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
        //payments: "payments",
        products: "products",
      }),
      formTitle() {
        return this.editedIndex === -1 ? "Place new order" : "Edit customer";
      },
    },
    created() {
      this.fetchpayments()
     //this.$store.dispatch("_fetchpayments");
    },
    methods: {
      editItem(item) {
        this.editedIndex = this.payments.indexOf(item);
        this.editedItem = Object.assign({}, item);
        this.editedItem.meterId = item.MeterId;
        this.dialog = true;
      },
  
      deleteItem(item) {
        this.editedIndex = this.payments.indexOf(item);
        this.editedItem = Object.assign({}, item);
        this.dialogDelete = true;
      },
  
      deleteItemConfirm() {
        this.payments.splice(this.editedIndex, 1);
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
      async fetchpayments(){
        await this.$axios.$get('/api/payments').then((res)=>{
          console.log(res)
          this.payments = res;
        })
      }
    },
  };
  </script>
  