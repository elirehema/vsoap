<template>

    <apexchart
      type="donut"
      :height="height"
      :options="value.chartOptions"
      :series="value.series"
    ></apexchart>
</template>
<script>
export default {
  props:{
    data:{
      type: Object,
      default: null
    },
    height: {
      type: Number,
      default: 350
    },

  },
  data() {
    return {
      value: {
        series: [2, 98],
        chartOptions: {
          chart: {
            type: "donut",
          },
          plotOptions: {
            pie: {
              startAngle: -90,
              endAngle: 90,
              offsetY: 10,
              donut: {
                  labels: {
                    show: true,
                    name:{
                        show: true,
                        fontSize: "21px",
                        fontWeight: 21
                    },
                    value:{
                        show: false,
                      
                    },
                    total:{
                        show: true,
                        label: this.data.value,
                        fontSize: '39px',
                        fontFamily: '"Mulish", sans-serif',
                        fontWeight: 600,
                    }
                  }
                }
            },
          },
          grid: {
            padding: {
              bottom: -120,
            },
          },
          dataLabels: {
            enabled: false,
            formatter: function (val) {
              return val + "%";
            },
          },
          legend: {
          formatter: function (val, opts) {
            return val
          },
          position: "bottom",
          show: false
        },
          fill: {
            type: "solid",
            colors: ["#58508D", "#FFD700", "#BC5090", "#FF6361", "#FFA600"],
          },
          responsive: [
            {
              breakpoint: 480,
              options: {
                chart: {
                  width: 200,
                },
                legend: {
                  position: "bottom",
                },
              },
            },
          ],
        },
      },
    };
  },
};
</script>
