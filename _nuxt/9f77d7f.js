(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{517:function(t,e,a){"use strict";a(12),a(9),a(16),a(17);var r=a(0),n=(a(5),a(58),a(75),a(37),a(13),a(25),a(59),a(497),a(47),a(498),a(499),a(500),a(501),a(502),a(503),a(504),a(505),a(506),a(507),a(508),a(509),a(510),a(48),a(8),a(299),a(1)),s=a(86),i=a(2);function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function c(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){Object(r.a)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var l=["sm","md","lg","xl"],d=["start","end","center"];function u(t,e){return l.reduce((function(a,r){return a[t+Object(i.D)(r)]=e(),a}),{})}var m=function(t){return[].concat(d,["baseline","stretch"]).includes(t)},f=u("align",(function(){return{type:String,default:null,validator:m}})),p=function(t){return[].concat(d,["space-between","space-around"]).includes(t)},v=u("justify",(function(){return{type:String,default:null,validator:p}})),h=function(t){return[].concat(d,["space-between","space-around","stretch"]).includes(t)},b=u("alignContent",(function(){return{type:String,default:null,validator:h}})),g={align:Object.keys(f),justify:Object.keys(v),alignContent:Object.keys(b)},_={align:"align",justify:"justify",alignContent:"align-content"};function y(t,e,a){var r=_[t];if(null!=a){if(e){var n=e.replace(t,"");r+="-".concat(n)}return(r+="-".concat(a)).toLowerCase()}}var O=new Map;e.a=n.a.extend({name:"v-row",functional:!0,props:c(c(c({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:m}},f),{},{justify:{type:String,default:null,validator:p}},v),{},{alignContent:{type:String,default:null,validator:h}},b),render:function(t,e){var a=e.props,n=e.data,i=e.children,o="";for(var c in a)o+=String(a[c]);var l=O.get(o);if(!l){var d,u;for(u in l=[],g)g[u].forEach((function(t){var e=a[t],r=y(u,t,e);r&&l.push(r)}));l.push((d={"no-gutters":a.noGutters,"row--dense":a.dense},Object(r.a)(d,"align-".concat(a.align),a.align),Object(r.a)(d,"justify-".concat(a.justify),a.justify),Object(r.a)(d,"align-content-".concat(a.alignContent),a.alignContent),d)),O.set(o,l)}return t(a.tag,Object(s.a)(n,{staticClass:"row",class:l}),i)}})},614:function(t,e,a){"use strict";a.r(e);var r=a(474),n=a(516),s=a(492),i=a(533),o=a(600),c=a(491),l=a(601),d=a(599),u=a(131),m=a(517),f=a(551),p=a(485),v=a(594),h=a(65),b=a(496),g=(a(13),a(12),a(9),a(5),a(16),a(8),a(17),a(0)),_=(a(171),a(114));function y(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function O(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?y(Object(a),!0).forEach((function(e){Object(g.a)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):y(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var k={data:function(){return{dialog:!1,dialogDelete:!1,editdialog:!1,headers:[{text:"Order No.#",value:"orderNumber"},{text:"Total Amount",value:"amount"},{text:"Status",value:"status"},{text:"Created On",value:"createdAt"},{text:"Updated On",value:"updatedAt"}],ords:[],editedIndex:-1,editedItem:{productId:2},paymentreq:{action:400,orderId:null},defaultItem:{productId:2}}},computed:O(O({},Object(_.c)({orders:"tokenpurchases",products:"products",meters:"meters"})),{},{formTitle:function(){return-1===this.editedIndex?"Place new order":"Edit customer"}}),created:function(){this.$store.dispatch("_fetchtokenpurchases")},methods:{editItem:function(t){this.editedIndex=this.orders.indexOf(t),this.editedItem=Object.assign({},t),this.editedItem.meterId=t.MeterId,this.paymentreq.orderId=this.editedItem.id,this.editdialog=!0},deleteItem:function(t){this.editedIndex=this.orders.indexOf(t),this.editedItem=Object.assign({},t),this.dialogDelete=!0},deleteItemConfirm:function(){this.orders.splice(this.editedIndex,1),this.closeDelete()},close:function(){var t=this;this.dialog=!1,this.$nextTick((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1}))},closeDelete:function(){var t=this;this.dialogDelete=!1,this.$nextTick((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1}))},addProduct:function(){this.ords.push(this.editedItem)},makeOrderPayment:function(t){var e=this;this.paymentreq.action=t,this.$store.dispatch("_makeorderpayment",this.paymentreq).then((function(t){e.editdialog=!1}))},save:function(){this.editedIndex>-1||this.$store.dispatch("_placenewtokenorder",this.editedItem),this.close()},handleRowClick:function(t){this.$router.push("/purchases/".concat(t.id))},getStatusColor:function(t){switch(t){case"100":default:return"white";case"200":return"success lighten-3";case"300":return"blue lighten-3";case"400":return"teal";case"500":return"red lighten-4"}}}},I=a(61),x=Object(I.a)(k,(function(){var t=this,e=t._self._c;return t.orders?e(l.a,{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.orders,"sort-by":"calories"},on:{"click:row":t.handleRowClick},scopedSlots:t._u([{key:"top",fn:function(){return[e(h.a,{attrs:{color:"primary",flat:""}},[e(b.a,{staticClass:"text-h4 white--text"},[t._v("Token Purchases")]),t._v(" "),e(p.a),t._v(" "),e(d.a,{attrs:{"max-width":"500px"},scopedSlots:t._u([null],null,!0),model:{value:t.editdialog,callback:function(e){t.editdialog=e},expression:"editdialog"}},[t._v(" "),e(n.a,[e(h.a,{attrs:{color:"primary",flat:"",dark:""}},[e(b.a,[e("span",{staticClass:"text-h5"},[t._v(t._s(t.formTitle))])]),t._v(" "),e(p.a)],1),t._v(" "),e(s.b,[e(c.a,[e(m.a,{staticClass:"d-flex justify-space-between"},["100"==t.editedItem.statusCode?e(o.a,{attrs:{cols:"12",sm:"12",md:"4"}},[e(r.a,{staticClass:"px-8",attrs:{small:"",color:"blue lighten-2",dark:""},on:{click:function(e){return t.makeOrderPayment(200)}}},[e(u.a,{attrs:{left:""}},[t._v("mdi-check-all")]),t._v("\n                    Approve")],1)],1):t._e(),t._v(" "),"200"==t.editedItem.statusCode?e(o.a,{attrs:{cols:"12",sm:"12",md:"4"}},[e(r.a,{staticClass:"px-8",attrs:{small:"",color:"success"},on:{click:function(e){return t.makeOrderPayment(300)}}},[e(u.a,{attrs:{left:""}},[t._v("mdi-progress-check")]),t._v("Process")],1)],1):t._e(),t._v(" "),"300"==t.editedItem.statusCode?e(o.a,{attrs:{cols:"12",sm:"12",md:"4"}},[e(r.a,{staticClass:"px-8",attrs:{small:"",color:"success"},on:{click:function(e){return t.makeOrderPayment(400)}}},[e(u.a,{attrs:{left:""}},[t._v("mdi-account-credit-card")]),t._v("Make\n                    Payment")],1)],1):t._e(),t._v(" "),"400"!=t.editedItem.statusCode?e(o.a,{attrs:{cols:"12",sm:"12",md:"4"}},[e(r.a,{staticClass:"px-8",attrs:{small:"",color:"warning"},on:{click:function(e){return t.makeOrderPayment(500)}}},[t._v("Cancel")])],1):t._e()],1)],1)],1),t._v(" "),e(s.a,[e(p.a),t._v(" "),e(r.a,{attrs:{color:"blue darken-1",text:""},on:{click:function(e){t.editdialog=!t.editdialog}}},[t._v("\n              Cancel\n            ")])],1)],1)],1),t._v(" "),e(d.a,{attrs:{"max-width":"50%"},scopedSlots:t._u([{key:"activator",fn:function(a){var n=a.on,s=a.attrs;return[e(r.a,t._g(t._b({staticClass:"mb-2 px-4",attrs:{color:"success",dark:""}},"v-btn",s,!1),n),[e(u.a,{attrs:{left:""}},[t._v(" mdi-plus ")]),t._v("\n            Buy Token\n          ")],1)]}}],null,!1,3421704071),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),e(n.a,[e(h.a,{attrs:{color:"primary",flat:"",dark:""}},[e(b.a,[e("span",{staticClass:"text-h5"},[t._v(t._s(t.formTitle))])]),t._v(" "),e(p.a),t._v(" "),e(r.a,{attrs:{color:"white",icon:""},on:{click:t.addProduct}},[e(u.a,[t._v("mdi-plus")])],1)],1),t._v(" "),e(s.b,[e(c.a,[e(m.a,[e(o.a,{attrs:{cols:"12",sm:"12",md:"4"}},[e(f.a,{attrs:{items:t.products,"item-text":"name","item-value":"id",label:"Select Product",rules:[t.rules.required],name:"editedItem.productId","persistent-hint":"",readonly:"","single-line":""},on:{focus:function(e){return t.$store.dispatch("_fetchproducts")}},model:{value:t.editedItem.productId,callback:function(e){t.$set(t.editedItem,"productId",e)},expression:"editedItem.productId"}})],1),t._v(" "),e(o.a,{attrs:{cols:"12",sm:"12",md:"4"}},[e(f.a,{attrs:{items:t.meters,"item-text":"meterNumber","item-value":"serialNumber",label:"Select Meter",rules:[t.rules.required],name:"editedItem.productId","persistent-hint":"","single-line":""},on:{focus:function(e){return t.$store.dispatch("_fetchmeters")}},model:{value:t.editedItem.serialNumber,callback:function(e){t.$set(t.editedItem,"serialNumber",e)},expression:"editedItem.serialNumber"}})],1),t._v(" "),e(o.a,{attrs:{cols:"12",sm:"12",md:"4"}},[e(v.a,{attrs:{label:"Phone Number"},model:{value:t.editedItem.msisdn,callback:function(e){t.$set(t.editedItem,"msisdn",e)},expression:"editedItem.msisdn"}})],1),t._v(" "),e(o.a,{attrs:{cols:"12",sm:"12",md:"6"}},[e(v.a,{attrs:{label:"Amount "},model:{value:t.editedItem.amount,callback:function(e){t.$set(t.editedItem,"amount",e)},expression:"editedItem.amount"}})],1),t._v(" "),e(o.a,{attrs:{cols:"12",sm:"12",md:"6"}},[e(v.a,{attrs:{label:"Transaction Reference"},model:{value:t.editedItem.transactionRef,callback:function(e){t.$set(t.editedItem,"transactionRef",e)},expression:"editedItem.transactionRef"}})],1)],1)],1)],1),t._v(" "),e(s.a,[e(p.a),t._v(" "),e(r.a,{attrs:{color:"blue darken-1",text:""},on:{click:t.close}},[t._v(" Cancel ")]),t._v(" "),e(r.a,{attrs:{color:"blue darken-1",text:""},on:{click:t.save}},[t._v(" Save ")])],1)],1)],1),t._v(" "),e(d.a,{attrs:{"max-width":"500px"},model:{value:t.dialogDelete,callback:function(e){t.dialogDelete=e},expression:"dialogDelete"}},[e(n.a,[e(s.c,{staticClass:"text-h5"},[t._v("Are you sure you want to delete this item?")]),t._v(" "),e(s.a,[e(p.a),t._v(" "),e(r.a,{attrs:{color:"blue darken-1",text:""},on:{click:t.closeDelete}},[t._v("Cancel")]),t._v(" "),e(r.a,{attrs:{color:"blue darken-1",text:""},on:{click:t.deleteItemConfirm}},[t._v("OK")]),t._v(" "),e(p.a)],1)],1)],1)],1)]},proxy:!0},{key:"item.updatedAt",fn:function(a){var r=a.item;return[e("span",[t._v(t._s(t._f("dateformat")(r.updatedAt)))])]}},{key:"item.createdAt",fn:function(a){var r=a.item;return[e("span",[t._v(t._s(t._f("dateformat")(r.createdAt)))])]}},{key:"item.status",fn:function(a){var r=a.item;return[e(i.a,{attrs:{small:"",color:"success",label:"","text-color":"white"}},[e(u.a,{attrs:{color:t.getStatusColor(r.statusCode),left:""}},[t._v("\n        mdi-label\n      ")]),t._v("\n      "+t._s(r.status.toUpperCase())+"\n    ")],1)]}},{key:"no-data",fn:function(){return[e(r.a,{attrs:{color:"primary"}},[t._v(" Reset ")])]},proxy:!0}],null,!1,3941069124)}):e("skeleton-table-loader")}),[],!1,null,null,null);e.default=x.exports}}]);