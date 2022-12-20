<template>
  <v-data-table
    :headers="headers"
    :items="customers"
    sort-by="calories"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat color="primary">
        <v-toolbar-title class="text-h4 white--text">Customers</v-toolbar-title>

        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="success"
              dark
              class="mb-2 px-4"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon left> mdi-plus </v-icon>
              Add Customer
            </v-btn>
          </template>
          <v-card>
            <v-toolbar color="primary" flat dark>
              <v-toolbar-title class="text-h4 white--text"
                ><span class="text-h5">{{ formTitle }}</span></v-toolbar-title
              >

              <v-spacer></v-spacer>
            </v-toolbar>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="12" md="6">
                    <v-text-field
                      v-model="editedItem.firstName"
                      label="First Name"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="6">
                    <v-text-field
                      v-model="editedItem.lastName"
                      label="Last Name"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="6">
                    <v-text-field
                      v-model="editedItem.mobileNumber"
                      label="Phone Number"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="6">
                    <v-text-field
                      v-model="editedItem.email"
                      label="Email Address"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="12">
                    <v-select
                      v-model="editedItem.meterId"
                      :items="meters"
                      :item-text="'meterNumber'"
                      :item-value="'id'"
                      label="Select Meter"
                      v-on:focus="$store.dispatch('_fetchmeters')"
                      :rules="[rules.required]"
                      name="editedItem.meterId"
                      persistent-hint
                      single-line
                    >
                    </v-select>
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
      <v-btn elevation="0"  
      :loading="loading"
      :disabled="loading"
       @click="(loader = 'loading'),($store.dispatch('_fetchcustomers'))"
       small rounded class="white--text text-capitalize" color="blue-grey">
        <v-icon
        left
        dark
      >
        mdi-cloud-download
      </v-icon>
      Reload  
      </v-btn>
    </template>
  </v-data-table>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      dialog: false,
      dialogDelete: false,
      headers: [
        {
          text: "First Name",
          align: "start",
          sortable: false,
          value: "firstName",
        },
        { text: "Display Name", value: "displayName" },
        { text: "Mobile No.", value: "mobileNumber" },
        { text: "Email", value: "email" },
        { text: "Meter ID", value: "MeterId" },
        { text: "Actions", value: "actions", sortable: false },
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {},
      defaultItem: {},
    };
  },
  computed: {
    ...mapGetters({
      customers: "customers",
      meters: "meters",
    }),
    formTitle() {
      return this.editedIndex === -1 ? "Add new  customer" : "Edit customer";
    },
  },
  created() {
    this.$store.dispatch("_fetchcustomers");
  },
  methods: {
    editItem(item) {
      this.editedIndex = this.customers.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.editedItem.meterId = item.MeterId;
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.customers.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.customers.splice(this.editedIndex, 1);
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

    save() {
      if (this.editedIndex > -1) {
        this.$store.dispatch("_updatecustomer", this.editedItem);
      } else {
        this.$store.dispatch("_addnewcustomer", this.editedItem);
      }
      this.close();
    },
  },
};
</script>
