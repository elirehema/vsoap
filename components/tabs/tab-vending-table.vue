<template>

<v-data-table
    v-if="vendings"
    :headers="headers"
    :items="vendings"
    sort-by="calories"
    class="elevation-1"
    item-key="id"
    :single-expand="singleExpand"
    :expanded.sync="expanded"
    show-expand
  > 
  <template v-slot:no-data>
      <v-btn
        elevation="0"
        :loading="loading"
        :disabled="loading"
        @click="(loader = 'loading'), $store.dispatch('_fetchvendings')"
        small
        rounded
        class="white--text text-capitalize"
        color="blue-grey"
      >
        <v-icon left dark> mdi-cloud-download </v-icon>
        Reload
      </v-btn>
    </template>
    <template v-slot:expanded-item="{ headers, item }">
      <td :colspan="2">
        Token: <span class="font-weight-bold primary--text">{{ item.response.token }}</span>
      </td>
      <td :colspan="1">
        <span class="font-weight-bold">Serial No.:</span> {{ item.response.meterSerialNumber}}
      </td>
      <td :colspan="1">
        Status: <v-icon :color="item.response.status === 200 ? 'blue':'black'" small right> {{ item.response.status === 200 ?  'mdi-check-decagram' : 'mdi-close-circle'}}</v-icon>
      </td>
      <td :colspan="2">
        <span class="font-weight-bold">Description:</span> {{ item.response.description}}
      </td>
      
    </template>
    
  </v-data-table>
  <skeleton-table-loader v-else />
</template>

<script>
export default {
    props:{
        vendings:{
            type: Array,
            default: null
        }
    },
  data() {
    return {
      loading: false,
      dialog: false,
      expanded: [],
      singleExpand: true,
      headers: [
        {
          text: "ID",
          align: "start",
          sortable: false,
          value: "id",
        },

        { text: "Serial NO.", value: "meterSerialNumber" },
        { text: "Vending Type", value: "requestType" },
        { text: "Units", value: "units" },
        { text: "Payment Ref", value: "paymentReference" },
        { text: "Transaction Ref", value: "transactionRef" },
        { text: '', value: 'data-table-expand' },
      ],
      editedItem: {},
      defaultItem: {},
      vendings: null,
      rules: {
        required: (value) => !!value || "Field Required",
      },
    };
}
}
  </script>