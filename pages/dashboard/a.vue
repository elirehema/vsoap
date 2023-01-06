<template>
  <v-container class="pa-0 ma-0" fluid>
    <v-row>
      <summarycard v-for="(summary, i) in summaries" :key="i" :data="summary" />
    </v-row>
    <v-row class="mt-4">

      <v-col cols="12" sm="12" md="8" class="pa-1 ma-0">
      <v-row>
      <v-col  v-for="i in 4" :key="i">
        <summary-card class="pa-0 my-1" v-if="sum" :item="sum" />

      </v-col>
      </v-row>
        <v-card color="#FAFAFA" class="pa-0 ma-0" rounded>
          <v-card-title>
            <v-icon large left>
              mdi-chart-multiple
            </v-icon>
            <span class="text-h6 font-weight-bold">Average power factor</span>
          </v-card-title>
          <v-card-text>
            <chart-line height="450" :data="splinedata" />
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" xs="12" md="4">
       <v-row>
        <v-col cols="12" xs="12" md="6">
          <chart-gradient-donut />
        </v-col>
        <v-col cols="12" sm="12" md="6">
          <chart-gradient-donut />
          
        </v-col>
        <v-col cols="12">
          <v-card>
            <chart-bar />
          </v-card>
        </v-col>
       </v-row>
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
      lineCap: "round",
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
            data: [0.15, 0.4, 0.41, 0.412, 0.40, 0.40, 0.499,],
          }
        ],
        categories: ["Jan", "Feb", "March", "April", "May", "Jun", "Jul"],
      },

      summaries: [
        {
          title: "Meters",
          measure: null,
          value: "2597",
          color: "primary",
          subtitle: "Number of registered meters",
          icon: "mdi-car-speed-limiter",
        },
     
        {
          title: "Gateways",
          measure: null,
          value: "924",
          color: "blue-grey darken-1",
          subtitle: "Number of registered gateways",
          icon: "mdi-radio-tower",
        },
        {
          title: "DCUs",
          measure: null,
          value: "439",
          color: "lime darken-1",
          subtitle: "Number of DCUs",
          icon: "mdi-car-speed-limiter",
        },
        {
          title: "Modems",
          measure: null,
          value: "12,376",
          color: "grey darken-1",
          subtitle: "Number of registered modems",
          icon: "mdi-car-speed-limiter",
        },
        {
          title: "Agents",
          measure: null,
          value: "20",
          color: "grey darken-1",
          subtitle: "Number of registered agents",
          icon: "mdi-account-group",
        },
        {
          title: "Installers",
          measure: null,
          value: "20",
          color: "grey darken-1",
          subtitle: "Number of registered installers",
          icon: "mdi-account-group",
        },
      ],
      piedata: {
        title: "Lorem Ispum dolor"
      }
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
};
</script>
