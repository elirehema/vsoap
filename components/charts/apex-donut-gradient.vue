<template>
  <v-card color="#FAFAFA">
    <apexchart :height="height" :options="options" :series="series"></apexchart>
  </v-card>
</template>
<script lang="js">
export default {
  props: {
    height: {
      type: Number,
      default: 250
    },
    data: {
      type: Object,
      default: null
    }
  },
  data() {
    return {

      series: [39, 61],
      options: {
        chart: {
          width: 30,
          type: 'donut',
        },
        plotOptions: {
          pie: {
            startAngle: -90,
            endAngle: 270,
            donut: {
              size: '5%'
            }
          }
        },
        labels:['Purchases', 'Credits'],
        dataLabels: {
          enabled: true,
          formatter: function (val) {
            return val + "%"
          },
          style: {
            fontSize: '12px',
            fontFamily: 'Mulish, sans-serif',
            fontWeight: 'normal',
            colors: undefined
          },
          background: {
            enabled: false
          },
          dropShadow: {
            enabled: false,
            top: 0,
            left: 0,
            blur: 0,
            color: '#fff',
            opacity: 0.45

          }
        },
        fill: {
          type: 'gradient',
        },
        legend: {
          formatter: function (val, opts) {
            return val
          },
          position: "bottom",
          show: true
        },
        fill:{
          type: 'solid',
          colors: ['#44FF07', '#58508D','#BC5090', '#FF6361', '#FFA600']
        },
        responsive: [{
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      },



    }

  }
}
</script>
