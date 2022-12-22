<template>
  <v-row justify="start">
    <v-col cols="12" sm="12" md="4">
      <div v-if="sum">
        <summary-card :item="sum"></summary-card>
      </div>
      <skeleton-summary-card v-else></skeleton-summary-card>
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
          name: 'series1',
          data: [31, 40, 28, 51, 42, 109, 100]
        }, {
          name: 'series2',
          data: [11, 32, 45, 32, 34, 52, 41]
        }],
        categories: ["Jan", "Feb", "March", "April", "May", "Jun", "Jul"]
      }
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
