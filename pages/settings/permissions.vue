<template>
    <v-data-table
      v-if="permissions"
      :headers="headers"
      :items="permissions"
      sort-by="calories"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar color="primary" flat>
          <v-toolbar-title class="text-h4 white--text">Pemissions</v-toolbar-title>
        </v-toolbar>
      </template>
    </v-data-table>
    <skeleton-table-loader v-else />
  </template>
<script>
import { mapGetters } from 'vuex';
export default {
    data(){
        return{
            headers: [
        {
          text: "ID",
          align: "start",
          sortable: false,
          value: "id",
        },
        { text: "Permission Name", value: "name" },
        { text: "Entity", value: "entity" },
        { text: "Actions", value: "action", sortable: false },
      ],
        }
    },
    created(){
        this.$store.dispatch('_fetchpermissions')
    },
    methods:{

    },
    computed:{
        ...mapGetters({
            permissions:'permissions'
        })
    }
}
</script>