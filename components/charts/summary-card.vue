<template>
  <v-col class="pa-1" cols="12" xs="12" sm="12" md="3" lg="2">
    <v-card :color="data.color" class="mx-auto" elevation="1" >
      <v-card-title class="font-weight-bold text-h5 caption py-2  ma-0 pr-1 white--text "
        >{{ data.title }}</v-card-title
      >
      <v-divider color="white"></v-divider>
      <v-list-item >
        <v-list-item-content class="mt-1">
          <v-list-item-subtitle
            class="font-weight-black light-blue--text text-h4"
            >{{ data.value }}
          </v-list-item-subtitle>
          <v-list-item-subtitle class="font-weight-normal white--text caption  ma-0 pa-0">
            {{ data.subtitle }}
          </v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-icon>
          <v-avatar flat color="white" size="48" class="ml-0 mr-3">
                <v-icon :color="data.color" v-text="data.icon"></v-icon
              ></v-avatar>
         <!-- <v-icon dark v-text="data.icon" color="white" ></v-icon>-->
        </v-list-item-icon>
      </v-list-item>
    </v-card>
  </v-col>
</template>
<script>
export default {
  props: {
    data: {
      type: Object,
      default: null
    }
  },
  data: function() {
    return {
      pie_options: {
        series: [44, 55, 13, 33],
        chartOptions: {
          labels: ["Apple", "Mango", "Orange", "Watermelon"]
        }
      }
    };
  }
};
</script>
<style scoped>
.outlined {
  color: blue !important;
  border-color: blue !important;
}
</style>
