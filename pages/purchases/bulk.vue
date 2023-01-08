<template>
  <v-data-table
    v-if="orders"
    :headers="headers"
    :items="orders"
    sort-by="calories"
    class="elevation-1"
    @click:row="handleRowClick"
  >
    <template v-slot:top>
      <v-toolbar color="primary" flat>
        <v-toolbar-title class="text-h5 font-weight-bold white--text"
          >Bulk Purchases</v-toolbar-title
        >

        <v-spacer></v-spacer>
        <v-dialog v-model="editdialog" max-width="500px">
          <template v-if="false" v-slot:activator="{ on, attrs }">
            <v-btn color="success" dark class="mb-2 px-4" v-bind="attrs" v-on="on">
              <v-icon left> mdi-plus </v-icon>
              Create new Purchase
            </v-btn>
          </template>
          <v-card>
            <v-toolbar color="primary" flat dark>
              <v-toolbar-title
                ><span class="text-h5">{{ formTitle }}</span></v-toolbar-title
              >

              <v-spacer></v-spacer>
            </v-toolbar>

            <v-card-text>
              <v-container>
                <v-row class="d-flex justify-space-between py-3">
                  <v-col cols="12" sm="12" v-if="editedItem.statusCode == '200'">
                    <v-text-field
                      v-model="paymentreq.controlNumber"
                      label="Control number"
                      :readOnly="!generatebutton"
                      :rules="[(v) => !!v || 'Control Number is required']"
                      clearable
                      @click:clear="generatebutton = true"
                    ></v-text-field>
                  </v-col>
                  <v-col v-if="editedItem.statusCode == '100'" cols="12" sm="12">
                    <v-btn
                      small
                      class="px-8"
                      color="blue lighten-2"
                      @click="makeOrderPayment(200)"
                      dark
                      block
                    >
                      <v-icon left>mdi-check-all</v-icon>
                      Approve</v-btn
                    >
                  </v-col>
                  <v-col v-if="editedItem.statusCode == '200'" cols="12" sm="12">
                    <v-btn
                      small
                      class="px-8"
                      color="success"
                      block
                      @click="makeOrderPayment(300)"
                    >
                      <v-icon left>mdi-progress-check</v-icon>Process</v-btn
                    >
                  </v-col>
                  <v-col v-if="editedItem.statusCode == '300'" cols="12" sm="12">
                    <v-btn
                      small
                      class="px-8"
                      color="success"
                      @click="makeOrderPayment(400)"
                      block
                    >
                      <v-icon left>mdi-account-credit-card</v-icon>Make Payment</v-btn
                    >
                  </v-col>
                  <v-col v-if="editedItem.statusCode != '400'" cols="12" sm="12">
                    <v-btn
                      small
                      class="px-8"
                      color="warning"
                      @click="makeOrderPayment(500)"
                      block
                      >Cancel purchase</v-btn
                    >
                  </v-col>
                  <v-col cols="12" sm="12" v-if="editedItem.statusCode == '200'">
                    <v-btn
                      block
                      v-if="generatebutton"
                      color="primary lighten-1"
                      small
                      class="px-3"
                      @click="generateControlNumber"
                      :loading="loading"
                      :disabled="loading"
                      >Generate Control Number</v-btn
                    >
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="editdialog = !editdialog">
                Close
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="success" dark class="mb-2 px-4" v-bind="attrs" v-on="on">
              <v-icon left> mdi-plus </v-icon>
              Initiate bulk credit purchase
            </v-btn>
          </template>
          <v-card>
            <v-toolbar color="primary" flat dark>
              <v-toolbar-title
                ><span class="text-h5">{{ formTitle }}</span></v-toolbar-title
              >

              <v-spacer></v-spacer>
            </v-toolbar>

            <v-card-text>
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-container>
                  <v-row class="mt-5">
                    <v-col cols="12" sm="12" md="6" v-if="false">
                      <v-select
                        v-model="editedItem.productId"
                        :items="products"
                        :item-text="'name'"
                        :item-value="'id'"
                        label="Select Product"
                        v-on:focus="$store.dispatch('_fetchproducts')"
                        :rules="[rules.required]"
                        name="editedItem.productId"
                        persistent-hint
                        readonly
                        single-line
                      >
                      </v-select>
                    </v-col>
                    <v-col cols="12" sm="12">
                      <v-text-field
                        v-model="editedItem.amount"
                        label="Credit amount"
                        :rules="[(v) => !!v || 'Amount is required']"
                        clearable
                        type="number"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12" v-if="false">
                      <v-text-field
                        v-model="editedItem.controlNumber"
                        label="Control number"
                        :readOnly="!generatebutton"
                        :rules="[(v) => !!v || 'Control Number is required']"
                        clearable
                        @click:clear="generatebutton = true"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-form>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue lighten-1" dark small class="px-5" @click="close">
                Cancel
              </v-btn>
              <v-btn
                v-if="false"
                color="primary lighten-1"
                small
                class="px-3"
                @click="generateControlNumber"
                :loading="loading"
                :disabled="loading"
                >Generate Control Number</v-btn
              >
              <v-btn color="warning darken-1" small class="px-5" @click="save">
                Place
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5"
              >Are you sure you want to delete this item?</v-card-title
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-container @click.stop v-if="item.status != 'paid'">
        <v-icon small class="mr-2" v-on:click="editItem(item)"> mdi-pencil </v-icon>
      </v-container>
    </template>
    <template v-slot:item.status="{ item }">
      <v-chip small color="success" label text-color="white">
        <v-icon :color="getStatusColor(item.statusCode)" left> mdi-label </v-icon>
        {{ item.status.toUpperCase() }}
      </v-chip>
    </template>
    <template v-slot:item.updatedAt="{ item }">
      <span>{{ item.updatedAt | dateformat }}</span>
    </template>
    <template v-slot:item.orderNumber="{ item }">
      <span style="max-width: 150px" class="d-inline-block text-truncate">{{
        item.orderNumber
      }}</span>
    </template>
    <template v-slot:item.createdAt="{ item }">
      <span>{{ item.createdAt | dateformat }}</span>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary"> Reset </v-btn>
    </template>
  </v-data-table>
  <skeleton-table-loader v-else />
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      dialog: false,
      dialogDelete: false,
      editdialog: false,
      valid: true,
      loading: false,
      generatebutton: true,
      headers: [
        { text: "Order No.#", value: "orderNumber" },
        { text: "Total Amount", value: "amount" },
        { text: "Control Number", value: "controlNumber" },
        { text: "Status", value: "status" },
        { text: "Created On", value: "createdAt" },
        { text: "Customer Id", value: "CustomerId" },

        { text: "Updated On", value: "updatedAt" },
        { text: "Actions", value: "actions", sortable: false },
      ],
      ords: [],
      editedIndex: -1,
      rules: {
        required: (value) => !!value || "Field Required",
      },
      editedItem: {
        productId: 1,
        controlNumber: "",
      },
      paymentreq: {
        action: 400,
        orderId: null,
        controlNumber: "",
      },
      defaultItem: {
        productId: 1,
        controlNumber: "",
      },
    };
  },
  computed: {
    ...mapGetters({
      orders: "bulkpurchases",
      products: "products",
    }),
    formTitle() {
      return this.editedIndex === -1
        ? "Initiate Bulk Credit Purchase order"
        : "Update purchase";
    },
  },
  created() {
    this.$store.dispatch("_fetchbulkpurchases");
  },
  methods: {
    editItem(item) {
      this.editedIndex = this.orders.indexOf(item);
      console.log(item);

      this.editedItem = Object.assign({}, item);

      this.editedItem.meterId = item.MeterId;
      this.paymentreq.controlNumber = item.controlNumber;
      this.paymentreq.orderId = this.editedItem.id;
      this.editdialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.orders.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.orders.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    handleRowClick(v) {
      this.$router.push(`/purchases/${v.id}`);
    },
    addProduct() {
      this.ords.push(this.editedItem);
    },
    makeOrderPayment(action) {
      this.paymentreq.action = action;
      this.$store.dispatch("_makeorderpayment", this.paymentreq).then((res) => {
        this.editdialog = false;
      });
    },

    async generateControlNumber() {
      this.loading = true;
      await this.$axios
        .$post("/api/orders/generate")
        .then((response) => {
          this.paymentreq.controlNumber = response.controlNumber;
          //this.generatebutton = false;
          this.loading = false;
        })
        .catch((err) => {});
    },
    save() {
      if (this.editedIndex > -1) {
        this.$store.dispatch("_updateproduct", this.editedItem);
        this.close();
      } else {
        if (this.$refs.form.validate()) {
          var payload = [this.editedItem];
          this.$store.dispatch("_placenewbulkorder", payload);
          this.close();
        }
      }
    },
    getStatusColor(v) {
      switch (v) {
        case "100":
          return "white";
          break;
        case "200":
          return "success lighten-3";
        case "300":
          return "blue lighten-3";

        case "400":
          return "teal";
        case "500":
          return "red lighten-4";
        default:
          return "white";
          break;
      }
    },
  },
};
</script>
