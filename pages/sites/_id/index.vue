<template>
    <v-container fluid class="pa-0 ma-0" v-if="site">
    <v-toolbar
      color="primary"
      dark
      flat
      prominent
    >
    <v-btn
              icon
              class="hidden-xs-only"
            >
              <v-icon>mdi-office-building-marker-outline</v-icon>
            </v-btn>

      <v-toolbar-title class="text-h6 font-weight-bold">{{ site.name }}</v-toolbar-title>

      <v-spacer></v-spacer>


      <template v-slot:extension>
        <v-tabs
          v-model="tab"
          align-with-title
        >
          <v-tabs-slider color="yellow"></v-tabs-slider>

          <v-tab
            v-for="tab in tabs"
            :key="tab"
          >
            {{ tab }}
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>

    <v-tabs-items v-model="tab" class="mt-1">
      <v-tab-item>
        <tab-site-overview/>
      </v-tab-item>
      <v-tab-item>
      <tab-site-meters :meters="meters"/>
      </v-tab-item>
      <v-tab-item>
      <tab-site-dcus :dcus="dcus"/>
      </v-tab-item>
    </v-tabs-items>
  </v-container>
  <skeleton-summary-card v-else />

</template>

<script>
import TabSiteOverview from "@/components/tabs/tab-site-overview.vue";
import TabSiteMeters from "@/components/tabs/tab-site-meters.vue";
import TabSiteDCUs from "@/components/tabs/tab-site-dcus.vue";
export default {
  components: {
    'tab-site-overview': TabSiteOverview,
    'tab-site-meters': TabSiteMeters,
    'tab-site-dcus': TabSiteDCUs
  },
  name: "IndexPage",
  data() {
    return {
      tab: null,
      tabs:['Overview','Meters','DCUs','Readings'],
      site: null,
      meters: null,
      dcus: null
    };
  },
  computed: {},
  created() {
    this.requestSiteById();
    this.getSiteMetersBySiteId();
    this.getSiteDCUBySiteId()
  },
  methods: {
    async requestSiteById() {
        await this.$axios
          .$get(`/api/sites/${this.$route.params.id}`)
          .then((response) => {
            this.site = response;
          })
          .catch((err) => {});
      },
      async getSiteMetersBySiteId() {
        await this.$axios
          .$get(`/api/sites/${this.$route.params.id}/meters`)
          .then((response) => {
            this.meters = response;
          })
          .catch((err) => {});
      },
      async getSiteDCUBySiteId() {
        await this.$axios
          .$get(`/api/sites/${this.$route.params.id}/dcu`)
          .then((response) => {
            this.dcus = response;
          })
          .catch((err) => {});
      },
  },
};
</script>
