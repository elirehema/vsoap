(window.webpackJsonp=window.webpackJsonp||[]).push([[58,60],{574:function(t,e,a){"use strict";a.r(e);var s=a(483),i=a(505),r=a(501),n=a(527),o=a(500),c=a(641),l=a(545),d=a(131),u=a(528),m=a(565),p=a(495),v=a(579),f=a(62),h=a(503),_=(a(39),a(13),a(12),a(8),a(5),a(16),a(9),a(17),a(3)),b=a(0),x=(a(26),a(114));function k(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function g(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?k(Object(a),!0).forEach((function(e){Object(b.a)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):k(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var O={data:function(){return{dialog:!1,permissiondialog:!1,editedIndex:-1,editedItem:{name:"",permissions:44444444444},perms:[],defaultItem:{name:"",permissions:[]},rules:{required:function(t){return!!t||"Field Required"}},headers:[{text:"ID",align:"start",sortable:!1,value:"id"},{text:"Role Name",value:"name"},{text:"Active",value:"status"},{text:"Created On",value:"createdAt"},{text:"Updated On",value:"updatedAt"},{text:"Actions",value:"actions",sortable:!1}]}},created:function(){this.$store.dispatch("_fetchroles")},computed:g(g({},Object(x.c)({roles:"roles",permissions:"permissions"})),{},{formTitle:function(){return-1===this.editedIndex?"Add new role":"Edit role"}}),methods:{editItem:function(t){this.editedIndex=this.roles.indexOf(t),this.editedItem=Object.assign({},t),this.dialog=!0},activateRole:function(t,e){this.$store.dispatch("_activaterole",{roleId:t.id,action:e?"activate":"deactivate"})},addPermissions:function(t){var e=this;return Object(_.a)(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.$axios.$get("/api/roles/".concat(t.id)).then((function(a){e.perms=a.ids,e.editedItem.permissions=a.ids,e.permissiondialog=!0,e.editedItem=Object.assign({},t)})).catch((function(t){}));case 2:case"end":return a.stop()}}),a)})))()},close:function(){var t=this;this.dialog=!1,this.permissiondialog=!1,this.$nextTick((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1}))},addpermission:function(){this.$store.dispatch("_addpermissions",{id:this.editedItem.id,data:this.perms}),this.close()},save:function(){this.editedIndex>-1?this.$store.dispatch("_updaterole",{name:this.editedItem.name,id:this.editedItem.id}):this.$store.dispatch("_createrole",{name:this.editedItem.name}),this.close()}}},w=a(61),I=Object(w.a)(O,(function(){var t=this,e=t._self._c;return t.roles?e(c.a,{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.roles,"sort-by":"calories"},scopedSlots:t._u([{key:"top",fn:function(){return[e(f.a,{attrs:{color:"primary",flat:""}},[e(h.a,{staticClass:"text-h5 font-weight-bold white--text"},[t._v("Roles")]),t._v(" "),e(p.a),t._v(" "),e(l.a,{attrs:{"max-width":"650px"},scopedSlots:t._u([{key:"activator",fn:function(a){var i=a.on,r=a.attrs;return[e(s.a,t._g(t._b({staticClass:"mb-2",attrs:{color:"success",dark:""}},"v-btn",r,!1),i),[e(d.a,{attrs:{left:""}},[t._v(" mdi-plus ")]),t._v("\n            Add new Role\n          ")],1)]}}],null,!1,2818229450),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),e(i.a,[e(f.a,{attrs:{color:"primary",flat:"",dark:""}},[e(h.a,{staticClass:"text-h4 white--text"},[e("span",{staticClass:"text-h5"},[t._v(t._s(t.formTitle))])]),t._v(" "),e(p.a)],1),t._v(" "),e(r.b,[e(o.a,[e(u.a,[e(n.a,{attrs:{cols:"12",sm:"12"}},[e(v.a,{attrs:{label:"Role Name"},model:{value:t.editedItem.name,callback:function(e){t.$set(t.editedItem,"name",e)},expression:"editedItem.name"}})],1)],1)],1)],1),t._v(" "),e(r.a,[e(p.a),t._v(" "),e(s.a,{attrs:{color:"blue darken-1",text:""},on:{click:t.close}},[t._v(" Cancel ")]),t._v(" "),e(s.a,{attrs:{color:"blue darken-1",text:""},on:{click:t.save}},[t._v(" Save ")])],1)],1)],1),t._v(" "),e(l.a,{attrs:{"max-width":"650px"},model:{value:t.permissiondialog,callback:function(e){t.permissiondialog=e},expression:"permissiondialog"}},[e(i.a,[e(f.a,{attrs:{color:"primary",flat:"",dark:""}},[e(h.a,{staticClass:"text-h4 white--text"},[e("span",{staticClass:"text-h5"},[t._v("Add Permissions")])]),t._v(" "),e(p.a)],1),t._v(" "),e(r.b,[e(o.a,[e(u.a,[e(n.a,{attrs:{cols:"12",sm:"12"}},[e(m.a,{attrs:{multiple:"",chips:"",items:t.permissions,"item-text":"name","item-value":"id",label:"Select Permission",rules:[t.rules.required],"persistent-hint":"","small-chips":""},on:{focus:function(e){return t.$store.dispatch("_fetchpermissions")}},model:{value:t.perms,callback:function(e){t.perms=e},expression:"perms"}})],1)],1)],1)],1),t._v(" "),e(r.a,[e(p.a),t._v(" "),e(s.a,{attrs:{color:"blue darken-1",text:""},on:{click:t.close}},[t._v(" Cancel ")]),t._v(" "),e(s.a,{attrs:{color:"blue darken-1",text:""},on:{click:t.addpermission}},[t._v(" Save ")])],1)],1)],1)],1)]},proxy:!0},{key:"item.updatedAt",fn:function(a){var s=a.item;return[e("span",[t._v(t._s(t._f("dateformat")(s.updatedAt)))])]}},{key:"item.createdAt",fn:function(a){var s=a.item;return[e("span",[t._v(t._s(t._f("dateformat")(s.createdAt)))])]}},{key:"item.actions",fn:function(a){var i=a.item;return[e(d.a,{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.editItem(i)}}},[t._v(" mdi-pencil ")]),t._v(" "),e(s.a,{staticClass:"text-capitalize",attrs:{color:"blue",dark:"","x-small":""},on:{click:function(e){return t.addPermissions(i)}}},[t._v(" Add Permissions ")]),t._v(" "),i.active?e(s.a,{staticClass:"text-capitalize",attrs:{color:"warning","x-small":""},on:{click:function(e){return t.activateRole(i,!1)}}},[t._v(" De-activate ")]):e(s.a,{staticClass:"text-capitalize",attrs:{color:"gold","x-small":""},on:{click:function(e){return t.activateRole(i,!0)}}},[t._v(" activate ")])]}},{key:"item.status",fn:function(a){return[a.item.active?e(d.a,{attrs:{small:"",color:"blue"}},[t._v(" mdi-check-decagram")]):e(d.a,{attrs:{small:"",color:"black darken-1"}},[t._v(" mdi-close-circle")])]}}],null,!1,3343474576)}):e("skeleton-table-loader")}),[],!1,null,null,null);e.default=I.exports},651:function(t,e,a){"use strict";a.r(e);var s={components:{"roles-component":a(574).default}},i=a(61),r=Object(i.a)(s,(function(){return(0,this._self._c)("roles-component")}),[],!1,null,null,null);e.default=r.exports}}]);