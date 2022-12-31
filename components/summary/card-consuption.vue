<template>
    <v-card>
    <v-card-title>Consumption & Costs</v-card-title>
    <v-card-text>
        <v-data-table 
    :headers="headers"
    :items="consumptions"
    sort-by="calories"
    class="elevation-0"
        :hide-default-footer="true"
  >
  </v-data-table>
    </v-card-text>
    </v-card>
</template>
<script>
export default {
    data(){
        return{
            headers: [
        {
          text: "Date & TIme",
          align: "start",
          sortable: false,
          value: "date",
        },

        { text: "Energy [kWh]", value: "energy" },
        { text: "Total [$]", value: "total" },
      ],
            consumptions:[
               {
                date:"December 2022",
                energy: 492.3,
                total: 211.56
               },
               {
                date:"November 2022",
                energy: 403,
                total: 475.78
               },
               {
                date:"October 2022",
                energy: 313,
                total: 408.13
               },
               {
                date:"September 2022",
                energy: 413,
                total: 374.17
               },
               {
                date:"August 2022",
                energy: 297,
                total: 617.89
               },
               {
                date:"July 2022",
                energy: 103,
                total: 37.97
               },
               {
                date:"June 2022",
                energy: 400,
                total: 200.17
               },
               {
                date:"May 2022",
                energy: 413,
                total: 374.17
               },
               {
                date:"April 2022",
                energy: 413,
                total: 374.17
               }
            ]

        }
    }
}
</script>