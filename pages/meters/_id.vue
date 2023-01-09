<template>
  <v-container fluid class="pa-0 ma-0" v-if="meter">
    <v-toolbar color="primary" dark flat prominent>
      <v-btn icon class="hidden-xs-only mt-2 ml-2">
        <v-icon x-large>mdi-dots-circle</v-icon>
      </v-btn>

      <v-toolbar-title class="text-h6 font-weight-bold">{{
        meter.code
      }}</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-dialog v-model="dialog" max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="success"
            dark
            class="mt-2 font-weight-bold ml-2"
            @click="request = requesttypes[3]"
            v-bind="attrs"
            v-on="on"
          >
            <v-icon left> mdi-plus </v-icon>
            Key Change token
          </v-btn> 

          <v-btn
            color="success"
            dark
            class="mt-2 font-weight-bold"
            @click="request = requesttypes[0]"
            v-bind="attrs"
            v-on="on"
          >
            <v-icon left> mdi-plus </v-icon>
            Clear tamper token
          </v-btn>
          <v-btn
            color="success"
            dark
            class="mt-2 mx-2 font-weight-bold"
            @click="request = requesttypes[1]"
            v-bind="attrs"
            v-on="on"
          >
            <v-icon left> mdi-plus </v-icon> Reset token
           
          </v-btn>

          <v-btn
            color="success"
            dark
            class="mt-2 font-weight-bold "
            @click="request = requesttypes[2]"
            v-bind="attrs"
            v-on="on"
          >
            <v-icon left> mdi-plus </v-icon>
            Credit token
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
                  <!-- <v-text-field
                      v-model="editedItem.requestType"
                      label="Request Type (Read-Only)" readonly
                    ></v-text-field>-->

                  <v-select
                    v-model="editedItem.requestType"
                    :items="requesttypes"
                    :item-text="'title'"
                    :item-value="'value'"
                    label="Select request type"
                    :rules="[rules.required]"
                    name="editedItem.requestType"
                    persistent-hint
                    single-line
                  >
                  </v-select>
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

      <template v-slot:extension>
        <v-tabs v-model="tab" align-with-title>
          <v-tabs-slider color="yellow"></v-tabs-slider>

          <v-tab v-for="tab in tabs" :key="tab">
            {{ tab }}
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>

    <v-tabs-items v-model="tab" class="mt-1">
      <v-tab-item>
        <tab-meter-overview />
      </v-tab-item>
      <v-tab-item>
        <skeleton-table-loader />
      </v-tab-item>
      <v-tab-item>
      <tab-vending :vendings="vendings"/>
      </v-tab-item>
    </v-tabs-items>
  </v-container>
  <skeleton-summary-card v-else />
</template>

<script>
import TabMeterOverview from "@/components/tabs/tab-meter-overview.vue";
import TabSiteMeters from "@/components/tabs/tab-site-meters.vue";
import TabSiteDCUs from "@/components/tabs/tab-site-dcus.vue";
import TabVendingComponent from "@/components/tabs/tab-vending-table.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    "tab-meter-overview": TabMeterOverview,
    "tab-site-meters": TabSiteMeters,
    "tab-site-dcus": TabSiteDCUs,
    "tab-vending": TabVendingComponent,
  },
  name: "IndexPage",
  data() {
    return {
      dialog: false,
      request: {},
      tab: null,
      tabs: ["Overview", "Messages", "Vendings"],
      meter: null,
      dcus: null,
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
        meters: "meters",
    }),
    formTitle() {
      this.editedItem.requestType = this.request.value;
      return this.request.title;
    },
  },
  created() {
    this.requestMeterById();
    this.getSiteDCUBySiteId();
  },
  methods: {
    async requestMeterById() {
      await this.$axios
        .$get(`/api/meters/${this.$route.params.id}`)
        .then((response) => {
          this.meter = response;
          this.editedItem.meterSerialNumber = response.serialNumber;
          this.getMeterVendings(response.serialNumber)
        })
        .catch((err) => {});
    },
  
    async getSiteDCUBySiteId() {
      await this.$axios
        .$get(`/api/sites/${this.$route.params.id}/dcu`)
        .then((response) => {
          this.dcus = response;
        })
        .catch((err) => {});
    },

    async getMeterVendings(serialNumber){
      await this.$axios
        .$get(`/api/vendings/meter/${serialNumber}`)
        .then((response) => {
          this.vendings = response;
        })
        .catch((err) => {});
    },
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
  },
};
</script>
