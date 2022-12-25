<template>
  <apexchart
    :height="height"
    width="300"
    :options="options"
    :series="series"
  ></apexchart>
</template>
<script lang="js">
export default {
    props: {
        height: {
            type: Number,
            default: 350
        },
        data: {
            type: Object,
            default: null
        }
    },
    data() {
        return {
  
        series: [44, 55, 41, 17, 15],
          options: {
            chart: {
              width: 380,
              type: 'donut',
            },
            plotOptions: {
              pie: {
                startAngle: -90,
                endAngle: 270,
                donut:{
                    size: '5%'
                }
              }
            },
            dataLabels: {
              enabled: false
            },
            fill: {
              type: 'gradient',
            },
            legend: {
              formatter: function(val, opts) {
                return val + " - " + opts.w.globals.series[opts.seriesIndex]
              }
            },
            title: {
              text: 'Gradient Donut with custom Start-angle'
            },
            responsive: [{
              breakpoint: 480,
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
