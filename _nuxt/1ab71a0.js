(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{646:function(e,t,i){"use strict";i.r(t);var s=i(639),a=i(483),r=i(505),n=i(501),l=i(527),d=i(500),o=i(641),c=i(545),m=i(131),u=i(528),p=i(565),f=i(495),v=i(579),h=i(62),b=i(503),I=(i(12),i(65),i(13),i(8),i(5),i(16),i(9),i(17),i(0)),_=(i(173),i(114));function x(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,s)}return i}function g(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?x(Object(i),!0).forEach((function(t){Object(I.a)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):x(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var k={data:function(){return{dialog:!1,dialogDelete:!1,loading:!1,headers:[{text:"ID",align:"start",sortable:!1,value:"id"},{text:"Serial No.",value:"serialNumber"},{text:"Meter Number",value:"meterNumber"},{text:"Credit Balance",value:"creditBalance"},{text:"Description",value:"description"},{text:"Site Code",value:"site.code"},{text:"Meter Code",value:"code"},{text:"Actions",value:"actions",sortable:!1}],desserts:[],editedIndex:-1,rules:{required:function(e){return!!e||"Field Required"}},editedItem:{siteId:0,meterTypeId:0,mechantType:"No value"},defaultItem:{mechantType:"No value"}}},computed:g(g({},Object(_.c)({meters:"meters",sites:"sites",types:"metertypes"})),{},{formTitle:function(){return-1===this.editedIndex?"Register new meter":"Update meter infos"}}),created:function(){this.$store.dispatch("_fetchmeters")},methods:{editItem:function(e){this.editedIndex=this.meters.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0},deleteItem:function(e){this.editedIndex=this.meters.indexOf(e),this.editedItem=Object.assign({},e),this.dialogDelete=!0},deleteItemConfirm:function(){this.users.splice(this.editedIndex,1),this.closeDelete()},close:function(){var e=this;this.dialog=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},closeDelete:function(){var e=this;this.dialogDelete=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},handleRowClick:function(e){this.$router.push("/meters/".concat(e.id))},save:function(){this.editedIndex>-1?this.$store.dispatch("_updatemeterinformation",this.editedItem):this.$store.dispatch("_addnewmeter",this.editedItem),this.close()}}},y=i(61),O=Object(y.a)(k,(function(){var e=this,t=e._self._c;return e.meters&&e.$rules.hasPermission("meter.read")?t(o.a,{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.meters,"sort-by":"calories"},on:{"click:row":e.handleRowClick},scopedSlots:e._u([{key:"top",fn:function(){return[t(h.a,{attrs:{color:"primary",flat:""}},[t(b.a,{staticClass:"text-h5 font-weight-bold white--text"},[e._v("Meters")]),e._v(" "),t(f.a),e._v(" "),t(c.a,{attrs:{"max-width":"600px"},scopedSlots:e._u([{key:"activator",fn:function(i){var s=i.on,r=i.attrs;return[e.$rules.hasPermission("meter.create")?t(a.a,e._g(e._b({staticClass:"mb-2 font-weight-bold",attrs:{color:"success",dark:""}},"v-btn",r,!1),s),[t(m.a,{attrs:{left:""}},[e._v(" mdi-plus ")]),e._v("\n            Add new meter\n          ")],1):e._e()]}}],null,!1,4239412122),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" "),t(r.a,[t(h.a,{attrs:{color:"primary",flat:"",dark:""}},[t(b.a,[t("span",{staticClass:"text-h5"},[e._v(e._s(e.formTitle))])]),e._v(" "),t(f.a)],1),e._v(" "),t(n.b,[t(d.a,[t(u.a,[t(l.a,{attrs:{cols:"12",sm:"12",md:"6"}},[t(v.a,{attrs:{label:"Serial Number"},model:{value:e.editedItem.serialNumber,callback:function(t){e.$set(e.editedItem,"serialNumber",t)},expression:"editedItem.serialNumber"}})],1),e._v(" "),t(l.a,{attrs:{cols:"12",sm:"12",md:"6"}},[t(v.a,{attrs:{label:"Meter Number"},model:{value:e.editedItem.meterNumber,callback:function(t){e.$set(e.editedItem,"meterNumber",t)},expression:"editedItem.meterNumber"}})],1),e._v(" "),t(l.a,{attrs:{cols:"12",sm:"12",md:"6"}},[t(v.a,{attrs:{label:"Meter Code"},model:{value:e.editedItem.code,callback:function(t){e.$set(e.editedItem,"code",t)},expression:"editedItem.code"}})],1),e._v(" "),t(l.a,{attrs:{cols:"12",sm:"12",md:"6"}},[t(v.a,{attrs:{label:"Other Descriptions"},model:{value:e.editedItem.description,callback:function(t){e.$set(e.editedItem,"description",t)},expression:"editedItem.description"}})],1),e._v(" "),t(l.a,{attrs:{cols:"12",sm:"12",md:"6"}},[t(p.a,{attrs:{items:e.types,"item-text":"type","item-value":"id",label:"Select Meter Type",rules:[e.rules.required],name:"editedItem.meterTypeId","persistent-hint":"","single-line":""},on:{focus:function(t){return e.$store.dispatch("_fetchmetertypes")}},model:{value:e.editedItem.meterTypeId,callback:function(t){e.$set(e.editedItem,"meterTypeId",t)},expression:"editedItem.meterTypeId"}})],1),e._v(" "),t(l.a,{attrs:{cols:"12",sm:"12",md:"6"}},[t(s.a,{attrs:{items:e.sites,"item-text":"name","item-value":"id",label:"Select Site",rules:[e.rules.required],name:"editedItem.siteId","persistent-hint":"","single-line":""},on:{focus:function(t){return e.$store.dispatch("_fetchsites")}},model:{value:e.editedItem.siteId,callback:function(t){e.$set(e.editedItem,"siteId",t)},expression:"editedItem.siteId"}})],1)],1)],1)],1),e._v(" "),t(n.a,[t(f.a),e._v(" "),t(a.a,{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v(" Cancel ")]),e._v(" "),t(a.a,{attrs:{color:"blue darken-1",text:""},on:{click:e.save}},[e._v(" Save ")])],1)],1)],1),e._v(" "),t(c.a,{attrs:{"max-width":"500px"},model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}},[t(r.a,[t(n.c,{staticClass:"text-h5"},[e._v("Are you sure you want to delete this item?")]),e._v(" "),t(n.a,[t(f.a),e._v(" "),t(a.a,{attrs:{color:"blue darken-1",text:""},on:{click:e.closeDelete}},[e._v("Cancel")]),e._v(" "),t(a.a,{attrs:{color:"blue darken-1",text:""},on:{click:e.deleteItemConfirm}},[e._v("OK")]),e._v(" "),t(f.a)],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(i){var s=i.item;return[t(d.a,{on:{click:function(e){e.stopPropagation()}}},[e.$rules.hasPermission("meter.update")?t(m.a,{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editItem(s)}}},[e._v(" mdi-pencil ")]):e._e(),e._v(" "),e.$rules.hasPermission("meter.delete")?t(m.a,{attrs:{small:""},on:{click:function(t){return e.deleteItem(s)}}},[e._v(" mdi-delete ")]):e._e()],1)]}},{key:"no-data",fn:function(){return[t(a.a,{staticClass:"white--text text-capitalize",attrs:{elevation:"0",loading:e.loading,disabled:e.loading,small:"",rounded:"",color:"blue-grey"},on:{click:function(t){e.loader="loading",e.$store.dispatch("_fetchmeters")}}},[t(m.a,{attrs:{left:"",dark:""}},[e._v("\n      mdi-cloud-download\n    ")]),e._v("\n    Reload  \n    ")],1)]},proxy:!0}],null,!1,3204670631)}):t("skeleton-table-loader")}),[],!1,null,null,null);t.default=O.exports}}]);