<template>
    <v-data-table
      v-if="dcus"
      :headers="headers"
      :items="dcus"
      sort-by="calories"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar color="primary" flat>
          <v-toolbar-title class="text-h5 font-weight-bold white--text">DCUs</v-toolbar-title>
  
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="600px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="success"
                dark
                class="mb-2 font-weight-bold"
                v-bind="attrs"
                v-on="on"
              >
                <v-icon left> mdi-plus </v-icon>
                Add new DCU
              </v-btn>
            </template>
            <v-card>
              <v-toolbar color="primary" flat dark>
                <v-toolbar-title
                  ><span class="text-h5">{{ formTitle }}</span></v-toolbar-title
                >
  
                <v-spacer></v-spacer>
              </v-toolbar>
  
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="12" md="6">
                      <v-text-field
                        v-model="editedItem.name"
                        label="Device Name"
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12" md="6">
                      <v-text-field
                        v-model="editedItem.type"
                        label="Device Type"
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12" md="6">
                      <v-text-field
                        v-model="editedItem.deviceId"
                        label="Device ID"
                        required
                      ></v-text-field>
                    </v-col>
                  
                  
                    <v-col cols="12" sm="12" md="6">
                      <v-autocomplete
                        v-model="editedItem.siteId"
                        :items="sites"
                        :item-text="'name'"
                        :item-value="'id'"
                        label="Select Site"
                        v-on:focus="$store.dispatch('_fetchsites')"
                        :rules="[(v) => !!v || 'Amount is required']"
                        name="editedItem.siteId"
                        persistent-hint
                        single-line
                      >
                      </v-autocomplete>
                    </v-col>
                    <v-col cols="12" sm="12" md="6">
                      <v-checkbox
                        v-model="editedItem.active"
                        label="Is Active ?"
                      ></v-checkbox>
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
      <template v-slot:item.status="{ item }">
        <v-icon small v-if="item.active" color="green"> mdi-check-decagram</v-icon>
        <v-icon small v-else color="black darken-1"> mdi-close-circle</v-icon>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
        <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn elevation="0"  
        :loading="loading"
        :disabled="loading"
         @click="(loader = 'loading'),($store.dispatch('_fetchdcus'))"
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
    <skeleton-table-loader v-else />
  </template>
  <script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      dialog: false,
      dialogDelete: false,
      loading: false,
      headers: [
        {
          text: "ID",
          align: "start",
          sortable: false,
          value: "id",
        },
        { text: "Name", value: "name" },
        { text: "Device ID", value: "deviceId" },
        { text: "Type", value: "type" },
        { text: "Site", value: "site.name" },
        { text: "Status", value: "status" },
        {
          text: "Actions",
          value: "actions",
          sortable: false
        },
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        active: true
      },
      defaultItem: {
        active: true
      },
    };
  },
  computed: {
    ...mapGetters({
      dcus: "dcus",
      sites:"sites"
    }),
    formTitle() {
      return this.editedIndex === -1 ? "Register new DCU" : "Update DCU";
    },
  },
  created() {
    this.$store.dispatch("_fetchdcus");
  },
  methods: {
    editItem(item) {
      this.editedIndex = this.dcus.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.dcus.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.dcus.splice(this.editedIndex, 1);
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
        this.$store.dispatch("_updatedcu", this.editedItem);
      } else {
        this.$store.dispatch("_adddcu", this.editedItem);
      }
      this.close();
    },
  },
};
</script>
  