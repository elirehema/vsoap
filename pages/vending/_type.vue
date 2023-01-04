<template>
  <v-data-table
    v-if="vendings"
    :headers="headers"
    :items="vendings"
    sort-by="calories"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar color="primary" flat>
        <v-toolbar-title class="text-h5 font-weight-bold white--text"
          >Vending Requests</v-toolbar-title
        >

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
              {{ formTitle  }}
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
                    <v-select
                      v-model="editedItem.meterSerialNumber"
                      :items="meters"
                      :item-text="'code'"
                      :item-value="'serialNumber'"
                      label="Select Meter"
                      v-on:focus="$store.dispatch('_fetchmeters')"
                      :rules="[rules.required]"
                      name="editedItem.meterSerialNumber"
                      persistent-hint
                      single-line
                    >
                    </v-select>
                  </v-col>
                  <v-col cols="12" sm="12" md="6">
                    <v-text-field
                      v-model="editedItem.units"
                      label="Total Units" type="number"
                    ></v-text-field>
                  </v-col>
               
                  <v-col cols="12" sm="12" md="6">
                    <v-text-field
                      v-model="editedItem.transactionRef"
                      label="Transaction Reference"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="6">
                    <v-text-field
                      v-model="editedItem.paymentReference"
                      label="Payment Reference"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="6">
                    <v-text-field
                      v-model="editedItem.requestType"
                      label="Request Type (Read-Only)" readonly
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="6">
                    <v-text-field
                      value="kWh"
                      label="Unit Measure (Read-Only)" readonly
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
      </v-toolbar>
    </template>
    <template v-slot:item.units="{ item }">
    <span>{{ item.units }}-{{ item.UnitMeasure }}</span>
    </template>
    <template v-slot:no-data>
      <v-btn
        elevation="0"
        :loading="loading"
        :disabled="loading"
        @click="(loader = 'loading'), $store.dispatch('_fetchvendings')"
        small
        rounded
        class="white--text text-capitalize"
        color="blue-grey"
      >
        <v-icon left dark> mdi-cloud-download </v-icon>
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
      loading: false,
      dialog:false,
      headers: [
        {
          text: "ID",
          align: "start",
          sortable: false,
          value: "id",
        },

        { text: "Serial NO.", value: "meterSerialNumber" },
        { text: "Request Type", value: "requestType" },
        { text: "Units", value: "units" },
        { text: "Payment Ref", value: "paymentReference" },
        { text: "Transaction Ref", value: "transactionRef" },
      ],
      editedItem: {},
      defaultItem: {},
      vendings: null,
      rules: {
        required: (value) => !!value || "Field Required",
      },
    };
  },
  computed: {
    ...mapGetters({
      vending: "vendings",
      meters: "meters",
    }),
    formTitle() {
        var t = this.$route.params.type;
      var tp = "Reset token";
      switch (t) {
        case "tamper":
          tp =  "Clear tamper token";
          break;
        case "reset":
          tp =  "Reset token";
          break;
        case "credit":
          tp =  "Clear credit token";
          break;
      }
      return tp;
    },
    type() {
      var t = this.$route.params.type;
      var tp = "RESETTOKEN";
      switch (t) {
        case "tamper":
          tp = "CLEARTAMPERTOKEN";
          break;
        case "reset":
          tp = "RESETTOKEN";
          break;
        case "credit":
          tp = "CREDITTOKEN";
          break;
      }
      return tp;
    },
  },
  created() {
    this.$store.dispatch("_fetchvendings");
    this.editedItem.requestType = this.type
    this.getVendingsByType()
  },
  methods: {
    save() {
        this.$store.dispatch("_sendvendingrequest", this.editedItem)
        this.close()
    },
    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    async getVendingsByType(){
        await this.$axios.$get(`/api/vendings/types/${ this.type.toLowerCase()}`)
          .then((response) => {
            this.vendings = response
          }).catch((err) => {
          })  
    }
  },
};
</script>
