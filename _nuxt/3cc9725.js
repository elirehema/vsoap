(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{517:function(e,t,a){"use strict";a(12),a(9),a(16),a(17);var n=a(0),r=(a(5),a(58),a(75),a(37),a(13),a(25),a(59),a(498),a(47),a(499),a(500),a(501),a(502),a(503),a(504),a(505),a(506),a(507),a(508),a(509),a(510),a(511),a(48),a(8),a(299),a(1)),i=a(86),s=a(2);function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var c=["sm","md","lg","xl"],d=["start","end","center"];function u(e,t){return c.reduce((function(a,n){return a[e+Object(s.D)(n)]=t(),a}),{})}var m=function(e){return[].concat(d,["baseline","stretch"]).includes(e)},f=u("align",(function(){return{type:String,default:null,validator:m}})),p=function(e){return[].concat(d,["space-between","space-around"]).includes(e)},v=u("justify",(function(){return{type:String,default:null,validator:p}})),b=function(e){return[].concat(d,["space-between","space-around","stretch"]).includes(e)},g=u("alignContent",(function(){return{type:String,default:null,validator:b}})),h={align:Object.keys(f),justify:Object.keys(v),alignContent:Object.keys(g)},y={align:"align",justify:"justify",alignContent:"align-content"};function O(e,t,a){var n=y[e];if(null!=a){if(t){var r=t.replace(e,"");n+="-".concat(r)}return(n+="-".concat(a)).toLowerCase()}}var x=new Map;t.a=r.a.extend({name:"v-row",functional:!0,props:o(o(o({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:m}},f),{},{justify:{type:String,default:null,validator:p}},v),{},{alignContent:{type:String,default:null,validator:b}},g),render:function(e,t){var a=t.props,r=t.data,s=t.children,l="";for(var o in a)l+=String(a[o]);var c=x.get(l);if(!c){var d,u;for(u in c=[],h)h[u].forEach((function(e){var t=a[e],n=O(u,e,t);n&&c.push(n)}));c.push((d={"no-gutters":a.noGutters,"row--dense":a.dense},Object(n.a)(d,"align-".concat(a.align),a.align),Object(n.a)(d,"justify-".concat(a.justify),a.justify),Object(n.a)(d,"align-content-".concat(a.alignContent),a.alignContent),d)),x.set(l,c)}return e(a.tag,Object(i.a)(r,{staticClass:"row",class:c}),s)}})},615:function(e,t,a){"use strict";a.r(t);var n=a(474),r=a(516),i=a(492),s=a(604),l=a(491),o=a(605),c=a(603),d=a(131),u=a(517),m=a(485),f=a(537),p=a(65),v=a(496),b=(a(13),a(12),a(9),a(5),a(16),a(8),a(17),a(0)),g=(a(171),a(114));function h(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function y(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?h(Object(a),!0).forEach((function(t){Object(b.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):h(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var O={data:function(){return{dialog:!1,dialogDelete:!1,headers:[{text:"First Name",align:"start",sortable:!1,value:"firstName"},{text:"Display Name",value:"displayName"},{text:"Mobile No.",value:"mobileNumber"},{text:"Email",value:"email"},{text:"Created On",value:"CreatedAt"},{text:"Actions",value:"actions",sortable:!1}],loading:!1,desserts:[],editedIndex:-1,editedItem:{},defaultItem:{}}},computed:y(y({},Object(g.c)({users:"users"})),{},{formTitle:function(){return-1===this.editedIndex?"Add new user":"Edit user"}}),created:function(){this.$store.dispatch("_fetchusers")},methods:{editItem:function(e){this.editedIndex=this.users.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0},deleteItem:function(e){this.editedIndex=this.users.indexOf(e),this.editedItem=Object.assign({},e),this.dialogDelete=!0},deleteItemConfirm:function(){this.users.splice(this.editedIndex,1),this.closeDelete()},close:function(){var e=this;this.dialog=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},closeDelete:function(){var e=this;this.dialogDelete=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},save:function(){this.editedIndex>-1?this.$store.dispatch("_updateuserinformation",this.editedItem):this.$store.dispatch("_createnewuser",this.editedItem),this.close()}}},x=a(61),j=Object(x.a)(O,(function(){var e=this,t=e._self._c;return t(o.a,{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.users,"sort-by":"calories"},scopedSlots:e._u([{key:"top",fn:function(){return[t(p.a,{attrs:{flat:"",color:"primary"}},[t(v.a,{staticClass:"text-h4 white--text"},[e._v("System Users")]),e._v(" "),t(m.a),e._v(" "),t(c.a,{attrs:{"max-width":"500px"},scopedSlots:e._u([{key:"activator",fn:function(a){var r=a.on,i=a.attrs;return[t(n.a,e._g(e._b({staticClass:"mb-2",attrs:{color:"success",dark:""}},"v-btn",i,!1),r),[t(d.a,{attrs:{left:""}},[e._v(" mdi-plus ")]),e._v("\n            Add User\n          ")],1)]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" "),t(r.a,[t(p.a,{attrs:{color:"primary",flat:"",dark:""}},[t(v.a,{staticClass:"text-h4 white--text"},[t("span",{staticClass:"text-h5"},[e._v(e._s(e.formTitle))])]),e._v(" "),t(m.a)],1),e._v(" "),t(i.b,[t(l.a,[t(u.a,[t(s.a,{attrs:{cols:"12",sm:"6",md:"4"}},[t(f.a,{attrs:{label:"Username"},model:{value:e.editedItem.username,callback:function(t){e.$set(e.editedItem,"username",t)},expression:"editedItem.username"}})],1),e._v(" "),t(s.a,{attrs:{cols:"12",sm:"6",md:"4"}},[t(f.a,{attrs:{label:"First Name"},model:{value:e.editedItem.firstName,callback:function(t){e.$set(e.editedItem,"firstName",t)},expression:"editedItem.firstName"}})],1),e._v(" "),t(s.a,{attrs:{cols:"12",sm:"6",md:"4"}},[t(f.a,{attrs:{label:"Last Name"},model:{value:e.editedItem.lastName,callback:function(t){e.$set(e.editedItem,"lastName",t)},expression:"editedItem.lastName"}})],1),e._v(" "),t(s.a,{attrs:{cols:"12",sm:"6",md:"4"}},[t(f.a,{attrs:{label:"Phone Number"},model:{value:e.editedItem.mobileNumber,callback:function(t){e.$set(e.editedItem,"mobileNumber",t)},expression:"editedItem.mobileNumber"}})],1),e._v(" "),t(s.a,{attrs:{cols:"12",sm:"6",md:"4"}},[t(f.a,{attrs:{label:"Email Address"},model:{value:e.editedItem.email,callback:function(t){e.$set(e.editedItem,"email",t)},expression:"editedItem.email"}})],1),e._v(" "),t(s.a,{attrs:{cols:"12",sm:"6",md:"4"}},[t(f.a,{attrs:{label:"Password"},model:{value:e.editedItem.password,callback:function(t){e.$set(e.editedItem,"password",t)},expression:"editedItem.password"}})],1)],1)],1)],1),e._v(" "),t(i.a,[t(m.a),e._v(" "),t(n.a,{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v(" Cancel ")]),e._v(" "),t(n.a,{attrs:{color:"blue darken-1",text:""},on:{click:e.save}},[e._v(" Save ")])],1)],1)],1),e._v(" "),t(c.a,{attrs:{"max-width":"500px"},model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}},[t(r.a,[t(i.c,{staticClass:"text-h5"},[e._v("Are you sure you want to delete this item?")]),e._v(" "),t(i.a,[t(m.a),e._v(" "),t(n.a,{attrs:{color:"blue darken-1",text:""},on:{click:e.closeDelete}},[e._v("Cancel")]),e._v(" "),t(n.a,{attrs:{color:"blue darken-1",text:""},on:{click:e.deleteItemConfirm}},[e._v("OK")]),e._v(" "),t(m.a)],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(a){var n=a.item;return[t(d.a,{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editItem(n)}}},[e._v(" mdi-pencil ")]),e._v(" "),t(d.a,{attrs:{small:""},on:{click:function(t){return e.deleteItem(n)}}},[e._v(" mdi-delete ")])]}},{key:"item.CreatedAt",fn:function(a){var n=a.item;return[t("span",[e._v(e._s(e._f("dateformat")(n.CreatedAt)))])]}},{key:"no-data",fn:function(){return[t(n.a,{staticClass:"white--text text-capitalize",attrs:{elevation:"0",loading:e.loading,disabled:e.loading,small:"",rounded:"",color:"blue-grey"},on:{click:function(t){e.loader="loading",e.$store.dispatch("_fetchusers")}}},[t(d.a,{attrs:{left:"",dark:""}},[e._v("\n      mdi-cloud-download\n    ")]),e._v("\n    Reload  \n    ")],1)]},proxy:!0}])})}),[],!1,null,null,null);t.default=j.exports}}]);