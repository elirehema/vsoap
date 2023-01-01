<template>
  <v-data-table
    v-if="dcus"
    :headers="headers"
    :items="dcus"
    sort-by="calories"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar color="primary" flat>
        <v-toolbar-title class="text-h5 font-weight-bold white--text"
          >DCUs</v-toolbar-title
        >
      </v-toolbar>
    </template>
    <template v-slot:item.status="{ item }">
        <v-icon small v-if="item.active" color="green"> mdi-check-decagram</v-icon>
        <v-icon small v-else color="black darken-1"> mdi-close-circle</v-icon>
      </template>
  </v-data-table>
  <skeleton-table-loader v-else />
</template>
<script>
export default {
  props: {
    dcus: {
      type: Array,
      default: null,
    },
  },
  data() {
    return {
      headers: [
        {
          text: "ID",
          align: "start",
          sortable: false,
          value: "id",
        },
        { text: "Name", value: "name" },
        { text: "Device ID", value: "deviceId" },
        { text: "Type", value: "type" },
        { text: "Site", value: "site.name" },
        { text: "Status", value: "status" },
        
      ],
    };
  },
};
</script>
