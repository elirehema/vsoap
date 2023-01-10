<template>
  <v-data-table
    v-if="vendings"
    :headers="headers"
    :items="vendings"
    sort-by="calories"
    class="elevation-1"
    item-key="id"
    :single-expand="singleExpand"
    :expanded.sync="expanded"
    show-expand
  >
    <template v-slot:top>
      <v-toolbar color="primary" flat>
        <v-toolbar-title class="text-h5 font-weight-bold white--text">
          {{ formTitle }} Vending Requests</v-toolbar-title
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
              {{ formTitle }}
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
                      label="Total Units"
                      type="number"
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
                      label="Request Type (Read-Only)"
                      readonly
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="6">
                    <v-text-field
                      value="kWh"
                      label="Unit Measure (Read-Only)"
                      readonly
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
    <template v-slot:expanded-item="{ headers, item }">
      <td :colspan="2">
        Token: <span class="font-weight-bold primary--text">{{ item.response.token }}</span>
      </td>
      <td :colspan="1">
        <span class="font-weight-bold">Serial No.:</span> {{ item.response.meterSerialNumber}}
      </td>
      <td :colspan="1">
        Status: <v-icon :color="item.response.status === 200 ? 'blue':'black'" small right> {{ item.response.status === 200 ?  'mdi-check-decagram' : 'mdi-close-circle'}}</v-icon>
      </td>
      <td :colspan="2">
        <span class="font-weight-bold">Description:</span> &nbsp;{{ item.response.description}}
      </td>
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
      dialog: false,
      expanded: [],
      singleExpand: true,
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
        { text: '', value: 'data-table-expand' },
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
          tp = "Clear tamper token";
          break;
        case "reset":
          tp = "Reset token";
          break;
        case "credit":
          tp = "Credit token";
          break;
        case "key":
          tp = "Key Change Token";
          break;
      }
      return tp;
    },
    type() {
      var t = this.$route.params.type;
      var tp = "ResetToken";
      switch (t) {
        case "tamper":
          tp = "ClearTamperToken";
          break;
        case "reset":
          tp = "ResetToken";
          break;
        case "credit":
          tp = "CreditToken";
          break;
        case "key":
          tp = "KeyChangeToken";
          break;
      }
      return tp;
    },
  },
  created() {
    this.$store.dispatch("_fetchvendings");
    this.editedItem.requestType = this.type;
    this.getVendingsByType();
  },
  methods: {
    save() {
      this.$store.dispatch("_sendvendingrequest", this.editedItem).then(()=>{
        this.close();
      });
      
    },
    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
     
      this.getVendingsByType();
      
    },
    async getVendingsByType() {
      await this.$axios
        .$get(`/api/vendings/types/${this.type.toLowerCase()}`)
        .then((response) => {
          this.vendings = response;
        })
        .catch((err) => {});
    },
  },
};
</script>
