<template>
  <v-container class="pa-0 ma-0" fluid>
   <vendor-dashboard v-if="$rules.hasRealm('VENDOR')"/>
   <tenant-dashboard v-if="$rules.hasRealm('TENANT')"/>
  </v-container>

</template>

<script>
import TenantDashboardComponent from "@/pages/dashboard/tenant.vue"
import VendorDashboardComponent from "@/pages/dashboard/vendor.vue"

export default {
  components: {
    'vendor-dashboard': VendorDashboardComponent,
    'tenant-dashboard' : TenantDashboardComponent
  },
};
</script>
