<template>
  <v-data-table
    v-if="meters"
    :headers="headers"
    :items="meters"
    sort-by="calories"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar color="primary" flat>
        <v-toolbar-title class="text-h5 font-weight-bold white--text"
          >Meters</v-toolbar-title
        >
      </v-toolbar>
    </template>
  </v-data-table>
  <skeleton-table-loader v-else />
</template>
<script>
export default {
  props: {
    meters: {
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
  
          { text: "Serial No.", value: "serialNumber" },
          { text: "Meter Number", value: "meterNumber" },
          { text: "Credit Balance", value: "creditBalance" },
          { text: "Description", value: "description" },
          { text: "Site Code", value: "site.code" },
          { text: "Meter Code", value: "code" },
        ],
    };
  },
};
</script>
