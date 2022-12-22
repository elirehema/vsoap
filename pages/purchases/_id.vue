<template>
  <v-card v-if="order" class="pa-5">
    <v-row class="mt-5">
      <v-col cols="12" class="d-flex justify-between ">
        <span class="text-h4 font-weight-bold"># {{ order.orderNumber }}</span>
        <v-chip
          color="yellow darken-1"
           medium
          class="black--text font-weight-bold ml-4"
        >
          {{ order.status }}</v-chip
        >
      </v-col>
      <v-col cols="12">
        <span class="font-weight-bold ">{{
          order.createdAt | dateformat
        }}</span>
        <v-chip
        
          color="teal lighten-1"
          dark
          class="white--text font-weight-bold"
        >
          {{ order.status }}</v-chip
        >
      </v-col>
    </v-row>
  </v-card>

  <skeleton-table-loader v-else />
</template>
<script>
export default {
  data() {
    return {
      order: null,
      tokens: null,
      credits: null,
    };
  },
  created() {
    this.requestOrderById();
  },
  methods: {
    async requestOrderById() {
      await this.$axios
        .$get(`/api/orders/${this.$route.params.id}`)
        .then((response) => {
          this.order = response.order;
          this.credits = response.credits;
          this.tokens = response.tokens;
        })
        .catch((err) => {});
    },
  },
};
</script>
