<template>
  <apexchart
    :height="height"
    :width="width"
    :options="options"
    :series="data.series"
  ></apexchart>
</template>
<script lang="js">
export default {

  props:{
    height: {
      type: Number,
      default: 350
    },
    data:{
      type: Object,
      default: null
    }
  },
  data: function () {
    return {
      options:{
         chart: {
          height: 380,
          width: '100%',
          type: 'pie',
          background: 'transparent',
          toolbar: {
            show: true,

          },
          animation:{
            enabled: true,
            easing: 'easeinout',
            speed: 800,
            animateGradually: {
              enabled: true,
              delay: 150
              },
            dynamicAnimation: {
            enabled: true,
            speed: 350
        }
          },

        },
        stroke:{
          width: 0
        },
        labels: this.data.chartOptions.labels,
        dataLabels:{
          enabled: true,
          dropShadow: {
                blur: 0,
                opacity: 0.0
              }
        },
        fill:{
          colors: ['#44FF07', '#00A756'],
          type: 'solid'
        },
        plotOptions:{
          pie:{
            customScale: 0.8,
             startAngle: -45,
            donut:{
              labels:{
                show:true,
                total:{
                  showAlways: true,
                  show: false
                }
              }
            }

          }
        },
        legend: {
          position: "bottom",
          show: true,
           markers:{
            fillColors: ['#44FF07', '#00A756']
          },
          itemMargin: {
            horizontal: 5,
            vertical: 0
          },
        },

          title: {
              text: this.data.title,
              align: "left",
              margin: 0,
              offsetX: 0,
              offsetY: 0,
              floating: true,
              style:{
                fontSize: '14px',
                color: '#263238',
                fontWeight: '12'
                }
            },

      },

    };
  },
};
</script>
