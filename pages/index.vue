<template>
<v-container class="pa-0 ma-0" fluid>
<v-row>
  <summarycard v-for="(summary,i) in summaries" :key="i" :data="summary"/>
</v-row>
  <v-row justify="start">
    <v-col cols="12" sm="12" md="4">
      <div v-if="sum">
        <summary-card :item="sum"></summary-card>
        
      </div>
      <skeleton-summary-card v-else></skeleton-summary-card>
    </v-col>
    <v-col cols="12" sm="12" md="12">
      
    </v-col>
    <v-col cols="12" sm="12" md="4">
      <v-card min-height="400" flat outlined>
        <v-sparkline :value="value" :gradient="gradient" :smooth="radius || false" :padding="padding"
          :line-width="width" :stroke-linecap="lineCap" :gradient-direction="gradientDirection" :fill="fill"
          :type="type" :auto-line-width="autoLineWidth" auto-draw />
      </v-card>
    </v-col>
    <v-col cols="12" sm="12" md="4">
      <v-card flat outlined class="pa-2">
        <chart-bar />
      </v-card>
    </v-col>
    <v-col cols="12" sm="12" md="4">
      <v-card rounded  class="pa-2">
        <chart-area-spline :data="splinedata" />
      </v-card>
    </v-col>
  </v-row>
</v-container>
</template>

<script>
import SummaryCard from '~/components/summary_card.vue'
import { mapGetters } from 'vuex'
const gradients = [
  ['#222'],
  ['#42b3f4'],
  ['red', 'orange', 'yellow'],
  ['purple', 'violet'],
  ['#00c6ff', '#F0F', '#FF0'],
  ['#f72047', '#ffd200', '#1feaea']
]
export default {
  components: {
    'summary-card': SummaryCard
  },
  name: 'IndexPage',
  data() {
    return {
      width: 2,
      radius: 10,
      padding: 8,
      lineCap: 'round',
      gradient: gradients[5],
      value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
      gradientDirection: 'top',
      gradients,
      fill: false,
      type: 'trend',
      autoLineWidth: false,
      splinedata: {
        series: [{
          name: 'Credit Purchases',
          data: [31, 40, 28, 51, 42, 109, 100]
        }, {
          name: 'Token Purchases',
          data: [11, 32, 45, 32, 34, 52, 41]
        }],
        categories: ["Jan", "Feb", "March", "April", "May", "Jun", "Jul"]
      },
      

      summaries:[{
        title: "Tenants",
        measure: null,
        value: "2597",
        color: "primary",
        subtitle: "Total number of registered tenants",
        icon:'mdi-home-group'

      },
      {
        title: "Landloards",
        measure: null,
        value: "265",
        color: "#26c6da",
        subtitle: "Total number of registered landloards",
        icon:'mdi-account-tie'

      },
      {
        title: "Patners",
        measure: null,
        value: "0",
        color: "lime darken-1",
        subtitle: "Number of registered partners",
        icon:'mdi-account-multiple-plus-outline'

      },
      {
        title: "Payments",
        measure: null,
        value: "TZS 1283924",
        color: "blue-grey darken-1",
        subtitle: "Total amount paid",
        icon:'mdi-currency-cny'

      },
      {
        title: "Meters",
        measure: null,
        value: "12,376",
        color: "grey darken-1",
        subtitle: "Number of registered meters",
        icon:'mdi-car-speed-limiter'

      },
      {
        title: "Sites",
        measure: null,
        value: "376",
        color: "grey darken-1",
        subtitle: "Number of registered sites",
        icon:'mdi-office-building-marker-outline'

      }
    
    ]
    }
  },
  computed: {
    ...mapGetters({
      sum: 'statistics'
    })
  },
  created() {
    this.$store.dispatch('_fetchstatistics')
  }
}
</script>
