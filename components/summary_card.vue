<template>
    <v-col>
      <v-hover>
        <template v-slot:default="{ hover }">
          <v-card class="mx-auto" flat elevation="1" v-on="hover">
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title
                  class="font-weight-black text-h5"
                  
                >{{item.amount}}</v-list-item-title>
                <v-list-item-subtitle
                  class="font-weight-bold black--text my-1"
                 
                >Credit Balance</v-list-item-subtitle>
              </v-list-item-content>
              <v-avatar color="success" size="48" class="ml-0 mr-3">
                <v-icon color="white" >mdi-currency-rub</v-icon
              ></v-avatar>
            </v-list-item>
          </v-card>
        </template>
      </v-hover>
    </v-col>
  </template>
  <script>
  export default {
    props: {
      item: {
        type: Object,
        default: null,
      },
    },
    data: function () {
      return {};
    },
  };
  </script>
  <style scoped>
  .outlined {
    color: blue !important;
    border-color: blue !important;
  }
  </style>