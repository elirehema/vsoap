<template>
  <v-container class="pa-0 ma-0 pt-4" fluid>
    <v-row>
      <summarycard v-for="(summary, i) in summaries" :key="i" :data="summary" />
    </v-row>
    <v-row class="mt-4">
      <v-col cols="12" sm="12" md="8">
        <v-row>
          <v-col
            v-for="(power, i) in powers"
            :key="i"
            cols="12"
            sm="12"
            md="4"
            lg="3"
          >
            <summary-power :power="power" />
          </v-col>
        </v-row>
        <v-row>
          <v-col
            v-for="(voltage, i) in voltages"
            :key="i"
            cols="12"
            sm="12"
            md="4"
            lg="3"
          >
            <summary-voltage :voltage="voltage" />
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="12" xs="12" md="4">
        <v-row no gutt>
         <!-- <v-col cols="12" xs="12" md="6">
            <v-card color="white" height="295px">
              <v-card-text>
                <chart-gradient-donut />
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" xs="12" md="6">
            <v-card color="white" height="295px">
              <v-card-text>
                <chart-gradient-donut />
              </v-card-text>
            </v-card>
          </v-col>-->
          <v-col cols="12" sm="12" md="12">
            <v-card color="#FAFAFA" class="pa-0 ma-0" rounded>
              <v-card-title>
                <v-icon left> mdi-finance </v-icon>
                <span class="text-h6">Average power factor in year</span>
              </v-card-title>
              <v-card-text>
                <chart-line :height="490" :data="splinedata" />
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" sm="12" md="4" class="pa-1 ma-0">
        <v-card>
          <v-card-title class="text-h6"
            >Average consumption and cost</v-card-title
          >
          <v-card-text>
            <chart-column :height="465" />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SummaryCard from "~/components/summary_card.vue";
import { mapGetters } from "vuex";
const gradients = [
  ["#222"],
  ["#42b3f4"],
  ["red", "orange", "yellow"],
  ["purple", "violet"],
  ["#00c6ff", "#F0F", "#FF0"],
  ["#f72047", "#ffd200", "#1feaea"],
];
export default {
  components: {
    "summary-card": SummaryCard,
  },
  name: "IndexPage",
  data() {
    return {
      width: 2,
      radius: 10,
      padding: 8,
      meters: null,
      lineCap: "round",
      dialog:false,
      gradient: gradients[5],
      value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
      gradientDirection: "top",
      gradients,
      fill: false,
      type: "trend",
      autoLineWidth: false,
     
      splinedata: {
        series: [
          {
            name: "Average power factor",
            data: [0.15, 0.4, 0.41, 0.412, 0.4, 0.4, 0.499],
          },
        ],
        categories: ["Jan", "Feb", "March", "April", "May", "Jun", "Jul"],
      },

      summaries: [
        {
          title: "Units",
          measure: null,
          value: "2.7 kWh",
          color: "primary",
          subtitle: "Totat units",
          icon: "mdi-altimeter",
        },

        {
          title: "Total Payments",
          measure: null,
          value: "TZS 1,283,924",
          color: "blue-grey darken-1",
          subtitle: "Total amount paid",
          icon: "mdi-currency-cny",
        },
        {
          title: "Balance",
          measure: null,
          value: "Tsh 1,300,230",
          color: "lime darken-1",
          subtitle: "Total balance in amount",
          icon: "mdi-credit-card-refresh-outline",
        },
        {
          title: "Downlinks",
          measure: null,
          value: "12,376",
          color: "grey darken-1",
          subtitle: "No of downlinks sent to thhis meter",
          icon: "mdi-car-speed-limiter",
        },
        {
          title: "Readings",
          measure: null,
          value: "31",
          color: "grey darken-1",
          subtitle: "Number of readings from this meter",
          icon: "mdi-router-network",
        },
        {
          title: "Power factor",
          measure: null,
          value: "1.7 PF",
          color: "grey darken-1",
          subtitle: "Last average power factor recorded",
          icon: "mdi-home-battery-outline",
        },
      ],
      piedata: {
        title: "Lorem Ispum dolor",
      },
      powers: [
        {
          min: "12:18:42",
          max: "0.40",
          line: "Line 1",
          value: "0",
        },
        {
          min: "12:18:42",
          max: "0.03",
          line: "Line 2",
          value: "0",
        },
        {
          min: "12:18:42",
          max: "0.04",
          line: "Line 3",
          value: "0",
        },
        {
          min: "12:18:42",
          max: "0.47",
          line: "TOTAL ",
          value: "0",
        },
      ],
      voltages: [
        {
          title: "Voltage",
          min: "12:18:42",
          max: "0.40",
          line: "Line 1",
          value: "0 V",
        },
        {
          title: "Voltage",
          min: "12:18:42",
          max: "0.03",
          line: "Line 2",
          value: "0 V",
        },
        {
          title: "Voltage",
          min: "12:18:42",
          max: "0.04",
          line: "Line 3",
          value: "0 V",
        },
        {
          title: "Current",
          min: "12:18:42",
          max: "0.47",
          line: "CURRENT ",
          value: "0 A",
        },
      ],
    };
  },
  computed: {
    ...mapGetters({
      sum: "statistics",
    }),
  },
  created() {
    this.$store.dispatch("_fetchstatistics");
  },
  methods: {},
};
</script>
