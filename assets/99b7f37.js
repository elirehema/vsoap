(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{605:function(e,t,n){"use strict";n.r(t);var i=n(474),a=n(525),r=n(493),s=n(599),o=n(597),c=n(131),d=n(486),l=n(65),u=n(509),m=(n(13),n(8),n(10),n(4),n(17),n(9),n(18),n(5)),f=n(0),p=(n(39),n(172),n(114));function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){Object(f.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var x={data:function(){return{dialog:!1,dialogDelete:!1,headers:[{text:"Serial No.#",value:"serialNumber"},{text:"Total Amount",value:"amount"},{text:"MSISDN",value:"msisdn"},{text:"Transaction Ref",value:"transactionRef"},{text:"Created On",value:"createdAt"},{text:"Updated On",value:"updatedAt"},{text:"Actions",value:"actions",sortable:!1}],ords:[],payments:null,editedIndex:-1,editedItem:{amount:0,productId:0},defaultItem:{}}},computed:v(v({},Object(p.c)({products:"products"})),{},{formTitle:function(){return-1===this.editedIndex?"Place new order":"Edit customer"}}),created:function(){this.fetchpayments()},methods:{editItem:function(e){this.editedIndex=this.payments.indexOf(e),this.editedItem=Object.assign({},e),this.editedItem.meterId=e.MeterId,this.dialog=!0},deleteItem:function(e){this.editedIndex=this.payments.indexOf(e),this.editedItem=Object.assign({},e),this.dialogDelete=!0},deleteItemConfirm:function(){this.payments.splice(this.editedIndex,1),this.closeDelete()},close:function(){var e=this;this.dialog=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},closeDelete:function(){var e=this;this.dialogDelete=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},addProduct:function(){this.ords.push(this.editedItem)},save:function(){this.editedIndex>-1&&this.$store.dispatch("_updateproduct",this.editedItem),this.close()},fetchpayments:function(){var e=this;return Object(m.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.$get("/api/payments").then((function(t){e.payments=t}));case 2:case"end":return t.stop()}}),t)})))()}}},y=n(64),b=Object(y.a)(x,(function(){var e=this,t=e._self._c;return e.payments?t(s.a,{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.payments,"sort-by":"calories"},scopedSlots:e._u([{key:"top",fn:function(){return[t(l.a,{attrs:{flat:"",color:"primary"}},[t(u.a,{staticClass:"text-h4 white--text"},[e._v("Payment Notifications")]),e._v(" "),t(d.a),e._v(" "),t(o.a,{attrs:{"max-width":"500px"},model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}},[t(a.a,[t(r.c,{staticClass:"text-h5"},[e._v("Are you sure you want to delete this item?")]),e._v(" "),t(r.a,[t(d.a),e._v(" "),t(i.a,{attrs:{color:"blue darken-1",text:""},on:{click:e.closeDelete}},[e._v("Cancel")]),e._v(" "),t(i.a,{attrs:{color:"blue darken-1",text:""},on:{click:e.deleteItemConfirm}},[e._v("OK")]),e._v(" "),t(d.a)],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(n){var i=n.item;return[t(c.a,{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editItem(i)}}},[e._v(" mdi-pencil ")]),e._v(" "),t(c.a,{attrs:{small:""},on:{click:function(t){return e.deleteItem(i)}}},[e._v(" mdi-delete ")])]}},{key:"no-data",fn:function(){return[t(i.a,{attrs:{color:"primary"}},[e._v(" Reset ")])]},proxy:!0}],null,!1,1627517588)}):t("skeleton-table-loader")}),[],!1,null,null,null);t.default=b.exports}}]);