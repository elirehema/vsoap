(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{495:function(t,e,i){"use strict";i.d(e,"a",(function(){return o}));var n=i(63),a=i(2),o=Object(a.i)("v-toolbar__title"),s=Object(a.i)("v-toolbar__items");n.a},497:function(t,e,i){var n=i(498);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,i(19).default)("52d9b218",n,!0,{sourceMap:!1})},498:function(t,e,i){var n=i(18)((function(t){return t[1]}));n.push([t.i,".v-dialog{border-radius:4px;margin:24px;overflow-y:auto;pointer-events:auto;transition:.3s cubic-bezier(.25,.8,.25,1);width:100%;z-index:inherit;outline:none;box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}.v-dialog:not(.v-dialog--fullscreen){max-height:90%}.v-dialog>*{width:100%}.v-dialog>.v-card>.v-card__title{font-size:1.25rem;font-weight:500;letter-spacing:.0125em;padding:16px 24px 10px}.v-dialog>.v-card>.v-card__subtitle,.v-dialog>.v-card>.v-card__text{padding:0 24px 20px}.v-dialog>.v-card>.v-card__actions{padding:8px 16px}.v-dialog__content{align-items:center;display:flex;height:100%;justify-content:center;left:0;pointer-events:none;position:fixed;top:0;transition:.2s cubic-bezier(.25,.8,.25,1),z-index 1ms;width:100%;z-index:6}.v-dialog__container{display:none}.v-dialog__container--attached{display:inline}.v-dialog--animated{animation-duration:.15s;animation-name:animate-dialog;animation-timing-function:cubic-bezier(.25,.8,.25,1)}.v-dialog--fullscreen{border-radius:0;margin:0;height:100%;position:fixed;overflow-y:auto;top:0;left:0}.v-dialog--fullscreen>.v-card{min-height:100%;min-width:100%;margin:0!important;padding:0!important}.v-dialog--scrollable,.v-dialog--scrollable>form{display:flex}.v-dialog--scrollable>.v-card,.v-dialog--scrollable>form>.v-card{display:flex;flex:1 1 100%;flex-direction:column;max-height:100%;max-width:100%}.v-dialog--scrollable>.v-card>.v-card__actions,.v-dialog--scrollable>.v-card>.v-card__title,.v-dialog--scrollable>form>.v-card>.v-card__actions,.v-dialog--scrollable>form>.v-card>.v-card__title{flex:0 0 auto}.v-dialog--scrollable>.v-card>.v-card__text,.v-dialog--scrollable>form>.v-card>.v-card__text{-webkit-backface-visibility:hidden;backface-visibility:hidden;flex:1 1 auto;overflow-y:auto}@keyframes animate-dialog{0%{transform:scale(1)}50%{transform:scale(1.03)}to{transform:scale(1)}}",""]),n.locals={},t.exports=n},519:function(t,e,i){"use strict";i(12),i(9),i(16),i(17);var n=i(0),a=(i(5),i(58),i(75),i(37),i(13),i(25),i(59),i(499),i(47),i(500),i(501),i(502),i(503),i(504),i(505),i(506),i(507),i(508),i(509),i(510),i(511),i(512),i(48),i(8),i(299),i(1)),o=i(86),s=i(2);function r(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function c(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?r(Object(i),!0).forEach((function(e){Object(n.a)(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var l=["sm","md","lg","xl"],d=["start","end","center"];function u(t,e){return l.reduce((function(i,n){return i[t+Object(s.D)(n)]=e(),i}),{})}var f=function(t){return[].concat(d,["baseline","stretch"]).includes(t)},v=u("align",(function(){return{type:String,default:null,validator:f}})),h=function(t){return[].concat(d,["space-between","space-around"]).includes(t)},p=u("justify",(function(){return{type:String,default:null,validator:h}})),m=function(t){return[].concat(d,["space-between","space-around","stretch"]).includes(t)},g=u("alignContent",(function(){return{type:String,default:null,validator:m}})),b={align:Object.keys(v),justify:Object.keys(p),alignContent:Object.keys(g)},x={align:"align",justify:"justify",alignContent:"align-content"};function y(t,e,i){var n=x[t];if(null!=i){if(e){var a=e.replace(t,"");n+="-".concat(a)}return(n+="-".concat(i)).toLowerCase()}}var O=new Map;e.a=a.a.extend({name:"v-row",functional:!0,props:c(c(c({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:f}},v),{},{justify:{type:String,default:null,validator:h}},p),{},{alignContent:{type:String,default:null,validator:m}},g),render:function(t,e){var i=e.props,a=e.data,s=e.children,r="";for(var c in i)r+=String(i[c]);var l=O.get(r);if(!l){var d,u;for(u in l=[],b)b[u].forEach((function(t){var e=i[t],n=y(u,t,e);n&&l.push(n)}));l.push((d={"no-gutters":i.noGutters,"row--dense":i.dense},Object(n.a)(d,"align-".concat(i.align),i.align),Object(n.a)(d,"justify-".concat(i.justify),i.justify),Object(n.a)(d,"align-content-".concat(i.alignContent),i.alignContent),d)),O.set(r,l)}return t(i.tag,Object(o.a)(a,{staticClass:"row",class:l}),s)}})},528:function(t,e,i){"use strict";var n=i(135),a=i(0),o=(i(26),i(76),i(62),i(58),i(75),i(5),i(171),i(13),i(12),i(9),i(16),i(8),i(17),i(497),i(604)),s=i(520),r=i(207),c=i(524),l=i(211),d=i(522),u=i(523),f=i(208),v=i(10),h=i(14),p=i(2);function m(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function g(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?m(Object(i),!0).forEach((function(e){Object(a.a)(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):m(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var b=Object(v.a)(r.a,c.a,l.a,d.a,u.a,s.a);e.a=b.extend({name:"v-dialog",directives:{ClickOutside:f.a},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:[String,Number],noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:[String,Number]},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,stackMinZIndex:200,previousActiveElement:null}},computed:{classes:function(){var t;return t={},Object(a.a)(t,"v-dialog ".concat(this.contentClass).trim(),!0),Object(a.a)(t,"v-dialog--active",this.isActive),Object(a.a)(t,"v-dialog--persistent",this.persistent),Object(a.a)(t,"v-dialog--fullscreen",this.fullscreen),Object(a.a)(t,"v-dialog--scrollable",this.scrollable),Object(a.a)(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null===(e=this.previousActiveElement)||void 0===e||e.focus())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(h.e)("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!=typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):l.a.options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$nextTick((function(){var e,i;(null===(e=t.$refs.dialog)||void 0===e?void 0:e.contains(document.activeElement))||(t.previousActiveElement=document.activeElement,null===(i=t.$refs.dialog)||void 0===i||i.focus()),t.bind()}))}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(t){if(t.keyCode===p.w.esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&this.$refs.dialog&&![document,this.$refs.dialog].includes(e)&&!this.$refs.dialog.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var i=this.$refs.dialog.querySelectorAll('button, [href], input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])'),a=Object(n.a)(i).find((function(t){return!t.hasAttribute("disabled")&&!t.matches('[tabindex="-1"]')}));a&&a.focus()}}},genContent:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement(o.a,{props:{root:!0,light:t.light,dark:t.dark}},[t.$createElement("div",{class:t.contentClasses,attrs:g({role:"dialog","aria-modal":t.hideOverlay?void 0:"true"},t.getScopeIdAttrs()),on:{keydown:t.onKeydown},style:{zIndex:t.activeZIndex},ref:"content"},[t.genTransition()])])]}))},genTransition:function(){var t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent:function(){var t={class:this.classes,attrs:{tabindex:this.isActive?0:void 0},ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style=g(g({},t.style),{},{maxWidth:Object(p.h)(this.maxWidth),width:Object(p.h)(this.width)})),this.$createElement("div",t,this.getContentSlot())}},render:function(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},[this.genActivator(),this.genContent()])}})},615:function(t,e,i){"use strict";i.r(e);var n=i(473),a=i(513),o=i(492),s=i(605),r=i(491),c=i(606),l=i(528),d=i(131),u=i(519),f=i(485),v=i(545),h=i(63),p=i(495),m=(i(38),i(12),i(65),i(13),i(9),i(5),i(16),i(8),i(17),i(0)),g=(i(172),i(114));function b(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function x(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?b(Object(i),!0).forEach((function(e){Object(m.a)(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):b(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var y={data:function(){return{dialog:!1,dialogDelete:!1,headers:[{text:"Site Name",align:"start",sortable:!1,value:"name"},{text:"Code",value:"code"},{text:"Location",value:"location"},{text:"Description",value:"description"},{text:"U.T",value:"settings.utilityTariff"},{text:"A.U.T",value:"settings.actualUtilityTariff"},{text:"G.T",value:"settings.generatorTariff"},{text:"A.G.T",value:"settings.actualGeneratorTariff"},{text:"P.R",value:"settings.platformRevenueShare"},{text:"A.R",value:"settings.amountRation"},{text:"Actions",value:"actions",sortable:!1}],desserts:[],editedIndex:-1,editedItem:{},defaultItem:{}}},computed:x(x({},Object(g.c)({sites:"sites"})),{},{formTitle:function(){return-1===this.editedIndex?"Register new site":"Update site infos"}}),created:function(){this.$store.dispatch("_fetchsites")},methods:{editItem:function(t){this.editedIndex=this.sites.indexOf(t),this.editedItem=Object.assign({},t),this.dialog=!0},deleteItem:function(t){this.editedIndex=this.sites.indexOf(t),this.editedItem=Object.assign({},t),this.dialogDelete=!0},deleteItemConfirm:function(){this.users.splice(this.editedIndex,1),this.closeDelete()},close:function(){var t=this;this.dialog=!1,this.$nextTick((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1}))},closeDelete:function(){var t=this;this.dialogDelete=!1,this.$nextTick((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1}))},handleRowClick:function(t){this.$router.push("/sites/".concat(t.id))},save:function(){this.editedIndex>-1?this.$store.dispatch("_updatesiteinformation",this.editedItem):this.$store.dispatch("_createnewsite",this.editedItem),this.close()}}},O=i(61),w=Object(O.a)(y,(function(){var t=this,e=t._self._c;return t.sites?e(c.a,{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.sites,"sort-by":"calories"},on:{"click:row":t.handleRowClick},scopedSlots:t._u([{key:"top",fn:function(){return[e(h.a,{attrs:{flat:"",color:"primary"}},[e(p.a,{staticClass:"text-h4 white--text"},[t._v("Sites")]),t._v(" "),e(f.a),t._v(" "),e(l.a,{attrs:{"max-width":"650px"},scopedSlots:t._u([{key:"activator",fn:function(i){var a=i.on,o=i.attrs;return[e(n.a,t._g(t._b({staticClass:"mb-2",attrs:{color:"success",dark:""}},"v-btn",o,!1),a),[e(d.a,{attrs:{left:""}},[t._v(" mdi-plus ")]),t._v("\n            Add Site\n          ")],1)]}}],null,!1,1663022185),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),e(a.a,[e(h.a,{attrs:{color:"primary",flat:"",dark:""}},[e(p.a,{staticClass:"text-h4 white--text"},[e("span",{staticClass:"text-h5"},[t._v(t._s(t.formTitle))])]),t._v(" "),e(f.a)],1),t._v(" "),e(o.b,[e(r.a,[e(u.a,[e(s.a,{attrs:{cols:"12",sm:"12",md:"6"}},[e(v.a,{attrs:{label:"Site Name"},model:{value:t.editedItem.name,callback:function(e){t.$set(t.editedItem,"name",e)},expression:"editedItem.name"}})],1),t._v(" "),e(s.a,{attrs:{cols:"12",sm:"12",md:"6"}},[e(v.a,{attrs:{label:"Site Code"},model:{value:t.editedItem.code,callback:function(e){t.$set(t.editedItem,"code",e)},expression:"editedItem.code"}})],1),t._v(" "),e(s.a,{attrs:{cols:"12",sm:"12",md:"6"}},[e(v.a,{attrs:{label:"Site Location"},model:{value:t.editedItem.location,callback:function(e){t.$set(t.editedItem,"location",e)},expression:"editedItem.location"}})],1),t._v(" "),e(s.a,{attrs:{cols:"12",sm:"12",md:"6"}},[e(v.a,{attrs:{label:"Other Descriptions"},model:{value:t.editedItem.description,callback:function(e){t.$set(t.editedItem,"description",e)},expression:"editedItem.description"}})],1)],1)],1)],1),t._v(" "),e(o.a,[e(f.a),t._v(" "),e(n.a,{attrs:{color:"blue darken-1",text:""},on:{click:t.close}},[t._v(" Cancel ")]),t._v(" "),e(n.a,{attrs:{color:"blue darken-1",text:""},on:{click:t.save}},[t._v(" Save ")])],1)],1)],1),t._v(" "),e(l.a,{attrs:{"max-width":"500px"},model:{value:t.dialogDelete,callback:function(e){t.dialogDelete=e},expression:"dialogDelete"}},[e(a.a,[e(o.c,{staticClass:"text-h5"},[t._v("Are you sure you want to delete this item?")]),t._v(" "),e(o.a,[e(f.a),t._v(" "),e(n.a,{attrs:{color:"blue darken-1",text:""},on:{click:t.closeDelete}},[t._v("Cancel")]),t._v(" "),e(n.a,{attrs:{color:"blue darken-1",text:""},on:{click:t.deleteItemConfirm}},[t._v("OK")]),t._v(" "),e(f.a)],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(i){var n=i.item;return[e(r.a,{on:{click:function(t){t.stopPropagation()}}},[e(d.a,{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.editItem(n)}}},[t._v(" mdi-pencil ")]),t._v(" "),e(d.a,{attrs:{small:""},on:{click:function(e){return t.deleteItem(n)}}},[t._v(" mdi-delete ")])],1)]}},{key:"no-data",fn:function(){return[e(n.a,{attrs:{color:"primary"}},[t._v(" Reset ")])]},proxy:!0}],null,!1,1089448744)}):e("skeleton-table-loader")}),[],!1,null,null,null);e.default=w.exports}}]);