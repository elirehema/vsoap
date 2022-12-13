<template>
    <v-data-table
    v-if="sites"
      :headers="headers"
      :items="sites"
      sort-by="calories"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar
          flat
        >
          <v-toolbar-title>Sites</v-toolbar-title>
         
          <v-spacer></v-spacer>
          <v-dialog
            v-model="dialog"
            max-width="500px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="primary"
                dark rounded
                class="mb-2"
                v-bind="attrs"
                v-on="on"
              >
                Add User
              </v-btn>
            </template>
            <v-card>
              <v-toolbar
        color="primary" flat
        dark
      >
  
        <v-toolbar-title><span class="text-h5">{{ formTitle }}</span></v-toolbar-title>
  
        <v-spacer></v-spacer>
  
       
      </v-toolbar>
  
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col
                      cols="12"
                      sm="12"
                      md="6"
                    >
                      <v-text-field
                        v-model="editedItem.name"
                        label="Site Name"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="12"
                      md="6"
                    >
                      <v-text-field
                        v-model="editedItem.code"
                        label="Site Code"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="12"
                      md="6"
                    >
                      <v-text-field
                        v-model="editedItem.location"
                        label="Site Location"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="12"
                      md="6"
                    >
                      <v-text-field
                        v-model="editedItem.description"
                        label="Other Descriptions"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
  
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="blue darken-1"
                  text
                  @click="close"
                >
                  Cancel
                </v-btn>
                <v-btn
                  color="blue darken-1"
                  text
                  @click="save"
                >
                  Save
                </v-btn>
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
        <v-icon
          small
          class="mr-2"
          @click="editItem(item)"
        >
          mdi-pencil
        </v-icon>
        <v-icon
          small
          @click="deleteItem(item)"
        >
          mdi-delete
        </v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn
          color="primary"
        >
          Reset
        </v-btn>
      </template>
    </v-data-table>
    <skeleton-table-loader v-else />
  </template>
  <script>
  import { mapGetters } from "vuex"
  export default {
    data () {
      return {
        dialog: false,
        dialogDelete: false,
        headers: [
          {
            text: 'Site Name',
            align: 'start',
            sortable: false,
            value: 'name',
          },

          { text: 'Code', value: 'code' },
          { text: 'Location', value: 'location' },
          { text: 'Description', value: 'description' },
          { text: 'U.T', value: 'settings.utilityTariff'},
          { text: 'A.U.T', value: 'settings.actualUtilityTariff' },
          { text: 'G.T', value:'settings.generatorTariff'},
          { text: 'A.G.T', value: 'settings.actualGeneratorTariff'},
          { text: 'P.R', value: 'settings.platformRevenueShare' },
          { text: 'A.R', value: 'settings.amountRation' },
          { text: 'Actions', value: 'actions', sortable: false },
        ],
        desserts: [],
        editedIndex: -1,
        editedItem:{},
        defaultItem:{}
      }
    },
    computed:{
      ...mapGetters({
        sites:'sites'
      }),
      formTitle () {
          return this.editedIndex === -1 ? 'Add new site' : 'Edit site'
        },
    },
    created () {
       this.$store.dispatch('_fetchsites')
    },
    methods: {
      editItem (item) {
          this.editedIndex = this.sites.indexOf(item)
          this.editedItem = Object.assign({}, item)
          this.dialog = true
        },
  
        deleteItem (item) {
          this.editedIndex = this.sites.indexOf(item)
          this.editedItem = Object.assign({}, item)
          this.dialogDelete = true
        },
  
        deleteItemConfirm () {
          this.users.splice(this.editedIndex, 1)
          this.closeDelete()
        },
  
        close () {
          this.dialog = false
          this.$nextTick(() => {
            this.editedItem = Object.assign({}, this.defaultItem)
            this.editedIndex = -1
          })
        },
  
        closeDelete () {
          this.dialogDelete = false
          this.$nextTick(() => {
            this.editedItem = Object.assign({}, this.defaultItem)
            this.editedIndex = -1
          })
        },
  
        save () {
          if (this.editedIndex > -1) {
            this.$store.dispatch('_updatesiteinformation', this.editedItem)
          } else {
            this.$store.dispatch('_createnewsite',this.editedItem)
          }
          this.close()
        },
    }
  }
  </script>
  