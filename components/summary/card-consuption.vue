<template>
    <v-card>
    <v-card-title>Consumption & Costs</v-card-title>
    <v-card-text>
        <v-data-table 
    :headers="headers"
    :items="consumptions"
    sort-by="calories"
    class="elevation-0"
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
                date:"December 2020",
                energy: 492.3,
                total: 211.56
               },
               {
                date:"November 2020",
                energy: 403,
                total: 475.78
               }
            ]

        }
    }
}
</script>