(window.webpackJsonp=window.webpackJsonp||[]).push([[32,29],{495:function(t,e,r){"use strict";r.d(e,"a",(function(){return o})),r.d(e,"b",(function(){return c})),r.d(e,"c",(function(){return s}));var a=r(497),n=r(2),o=Object(n.i)("v-card__actions"),i=Object(n.i)("v-card__subtitle"),c=Object(n.i)("v-card__text"),s=Object(n.i)("v-card__title");a.a},497:function(t,e,r){"use strict";r(13),r(12),r(8),r(5),r(16),r(9),r(17);var a=r(0),n=(r(26),r(207),r(208),r(501),r(209)),o=r(517),i=r(87),c=r(10);function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){Object(a.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}e.a=Object(c.a)(o.a,i.a,n.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return l(l({"v-card":!0},i.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},n.a.options.computed.classes.call(this))},styles:function(){var t=l({},n.a.options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=o.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),r=e.tag,a=e.data;return a.style=this.styles,this.isClickable&&(a.attrs=a.attrs||{},a.attrs.tabindex=0),t(r,this.setBackgroundColor(this.color,a),[this.genProgress(),this.$slots.default])}})},501:function(t,e,r){var a=r(502);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,r(19).default)("61d1dd60",a,!0,{sourceMap:!1})},502:function(t,e,r){var a=r(18)((function(t){return t[1]}));a.push([t.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card>.v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card>.v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;overflow-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip):not(.v-avatar),.v-card>:first-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),a.locals={},t.exports=a},523:function(t,e,r){"use strict";r(12),r(8),r(16),r(17);var a=r(0),n=(r(5),r(26),r(13),r(25),r(59),r(503),r(47),r(504),r(505),r(506),r(507),r(508),r(509),r(510),r(511),r(512),r(513),r(514),r(515),r(516),r(48),r(58),r(9),r(66),r(301),r(1)),o=r(86),i=r(2);function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){Object(a.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var l=["sm","md","lg","xl"],u=l.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),d=l.reduce((function(t,e){return t["offset"+Object(i.D)(e)]={type:[String,Number],default:null},t}),{}),p=l.reduce((function(t,e){return t["order"+Object(i.D)(e)]={type:[String,Number],default:null},t}),{}),v={col:Object.keys(u),offset:Object.keys(d),order:Object.keys(p)};function f(t,e,r){var a=t;if(null!=r&&!1!==r){if(e){var n=e.replace(t,"");a+="-".concat(n)}return"col"!==t||""!==r&&!0!==r?(a+="-".concat(r)).toLowerCase():a.toLowerCase()}}var b=new Map;e.a=n.a.extend({name:"v-col",functional:!0,props:s(s(s(s({cols:{type:[Boolean,String,Number],default:!1}},u),{},{offset:{type:[String,Number],default:null}},d),{},{order:{type:[String,Number],default:null}},p),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var r=e.props,n=e.data,i=e.children,c=(e.parent,"");for(var s in r)c+=String(r[s]);var l=b.get(c);if(!l){var u,d;for(d in l=[],v)v[d].forEach((function(t){var e=r[t],a=f(d,t,e);a&&l.push(a)}));var p=l.some((function(t){return t.startsWith("col-")}));l.push((u={col:!p||!r.cols},Object(a.a)(u,"col-".concat(r.cols),r.cols),Object(a.a)(u,"offset-".concat(r.offset),r.offset),Object(a.a)(u,"order-".concat(r.order),r.order),Object(a.a)(u,"align-self-".concat(r.alignSelf),r.alignSelf),u)),b.set(c,l)}return t(r.tag,Object(o.a)(n,{class:l}),i)}})},524:function(t,e,r){var a=r(540);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,r(19).default)("539ea948",a,!0,{sourceMap:!1})},525:function(t,e,r){"use strict";r(12),r(8),r(16),r(17);var a=r(0),n=(r(5),r(58),r(75),r(37),r(13),r(25),r(59),r(503),r(47),r(504),r(505),r(506),r(507),r(508),r(509),r(510),r(511),r(512),r(513),r(514),r(515),r(516),r(48),r(9),r(301),r(1)),o=r(86),i=r(2);function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){Object(a.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var l=["sm","md","lg","xl"],u=["start","end","center"];function d(t,e){return l.reduce((function(r,a){return r[t+Object(i.D)(a)]=e(),r}),{})}var p=function(t){return[].concat(u,["baseline","stretch"]).includes(t)},v=d("align",(function(){return{type:String,default:null,validator:p}})),f=function(t){return[].concat(u,["space-between","space-around"]).includes(t)},b=d("justify",(function(){return{type:String,default:null,validator:f}})),g=function(t){return[].concat(u,["space-between","space-around","stretch"]).includes(t)},h=d("alignContent",(function(){return{type:String,default:null,validator:g}})),m={align:Object.keys(v),justify:Object.keys(b),alignContent:Object.keys(h)},y={align:"align",justify:"justify",alignContent:"align-content"};function _(t,e,r){var a=y[t];if(null!=r){if(e){var n=e.replace(t,"");a+="-".concat(n)}return(a+="-".concat(r)).toLowerCase()}}var O=new Map;e.a=n.a.extend({name:"v-row",functional:!0,props:s(s(s({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:p}},v),{},{justify:{type:String,default:null,validator:f}},b),{},{alignContent:{type:String,default:null,validator:g}},h),render:function(t,e){var r=e.props,n=e.data,i=e.children,c="";for(var s in r)c+=String(r[s]);var l=O.get(c);if(!l){var u,d;for(d in l=[],m)m[d].forEach((function(t){var e=r[t],a=_(d,t,e);a&&l.push(a)}));l.push((u={"no-gutters":r.noGutters,"row--dense":r.dense},Object(a.a)(u,"align-".concat(r.align),r.align),Object(a.a)(u,"justify-".concat(r.justify),r.justify),Object(a.a)(u,"align-content-".concat(r.alignContent),r.alignContent),u)),O.set(c,l)}return t(r.tag,Object(o.a)(n,{staticClass:"row",class:l}),i)}})},532:function(t,e,r){"use strict";r.r(e);var a=r(198),n=r(497),o=r(523),i=r(551),c=r(131),s=r(130),l=r(39),u={props:{item:{type:Object,default:null}},data:function(){return{}}},d=(r(539),r(61)),p=Object(d.a)(u,(function(){var t=this,e=t._self._c;return e(o.a,[e(i.a,{scopedSlots:t._u([{key:"default",fn:function(r){var o=r.hover;return[e(n.a,t._g({staticClass:"mx-auto",attrs:{flat:"",elevation:"1"}},o),[e(s.a,[e(l.a,[e(l.c,{staticClass:"font-weight-black text-h5"},[t._v(t._s(t.item.amount))]),t._v(" "),e(l.b,{staticClass:"font-weight-bold black--text my-1"},[t._v("Credit Balance")])],1),t._v(" "),e(a.a,{staticClass:"ml-0 mr-3",attrs:{color:"success",size:"48"}},[e(c.a,{attrs:{color:"white"}},[t._v("mdi-currency-rub")])],1)],1)],1)]}}])})],1)}),[],!1,null,"37f20037",null);e.default=p.exports},539:function(t,e,r){"use strict";r(524)},540:function(t,e,r){var a=r(18)((function(t){return t[1]}));a.push([t.i,".outlined[data-v-37f20037]{color:#00f!important;border-color:#00f!important}",""]),a.locals={},t.exports=a},551:function(t,e,r){"use strict";var a=r(543),n=r(55),o=r(10),i=r(14);e.a=Object(o.a)(a.a,n.a).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(t=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(t)&&1===t.length&&(t=t[0]),t&&!Array.isArray(t)&&t.tag?(this.disabled||(t.data=t.data||{},this._g(t.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),t):(Object(i.c)("v-hover should only contain a single element",this),t)):(Object(i.c)("v-hover is missing a default scopedSlot or bound value",this),null);var t}})},565:function(t,e,r){"use strict";r.r(e);var a=r(497),n=r(495),o=r(523),i=r(494),c=r(131),s=r(525),l=(r(13),r(12),r(8),r(5),r(16),r(9),r(17),r(0)),u=r(532),d=r(114);function p(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}var v=[["#222"],["#42b3f4"],["red","orange","yellow"],["purple","violet"],["#00c6ff","#F0F","#FF0"],["#f72047","#ffd200","#1feaea"]],f={components:{"summary-card":u.default},name:"IndexPage",data:function(){return{width:2,radius:10,padding:8,meters:null,lineCap:"round",gradient:v[5],value:[0,2,5,9,5,10,3,5,0,0,1,8,2,9,0],gradientDirection:"top",gradients:v,fill:!1,type:"trend",autoLineWidth:!1,splinedata:{series:[{name:"Average power factor",data:[.15,.4,.41,.412,.4,.4,.499]}],categories:["Jan","Feb","March","April","May","Jun","Jul"]},summaries:[{title:"Clients",measure:null,value:"2597",color:"primary",subtitle:"Total number of registered clients",icon:"mdi-account-group"},{title:"Payments",measure:null,value:"TZS 1,283,924",color:"blue-grey darken-1",subtitle:"Total amount paid",icon:"mdi-currency-cny"},{title:"Credits",measure:null,value:"Tsh 1,300,230",color:"lime darken-1",subtitle:"Total amount of balance",icon:"mdi-credit-card-refresh-outline"},{title:"Meters",measure:null,value:"12,376",color:"grey darken-1",subtitle:"Meters assigned in this site",icon:"mdi-car-speed-limiter"},{title:"DCUs",measure:null,value:"31",color:"grey darken-1",subtitle:"Number of DCUs in this site",icon:"mdi-router-network"},{title:"Power factor",measure:null,value:"1.7 PF",color:"grey darken-1",subtitle:"Last average power factor recorded",icon:"mdi-home-battery-outline"}],piedata:{title:"Lorem Ispum dolor"},powers:[{min:"12:18:42",max:"0.40",line:"Line 1",value:"0"},{min:"12:18:42",max:"0.03",line:"Line 2",value:"0"},{min:"12:18:42",max:"0.04",line:"Line 3",value:"0"},{min:"12:18:42",max:"0.47",line:"TOTAL ",value:"0"}],voltages:[{title:"Voltage",min:"12:18:42",max:"0.40",line:"Line 1",value:"0 V"},{title:"Voltage",min:"12:18:42",max:"0.03",line:"Line 2",value:"0 V"},{title:"Voltage",min:"12:18:42",max:"0.04",line:"Line 3",value:"0 V"},{title:"Current",min:"12:18:42",max:"0.47",line:"CURRENT ",value:"0 A"}]}},computed:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?p(Object(r),!0).forEach((function(e){Object(l.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},Object(d.c)({sum:"statistics"})),created:function(){this.$store.dispatch("_fetchstatistics")},methods:{}},b=f,g=r(61),h=Object(g.a)(b,(function(){var t=this,e=t._self._c;return e(i.a,{staticClass:"pa-0 ma-0 pt-4",attrs:{fluid:""}},[e(s.a,t._l(t.summaries,(function(t,r){return e("summarycard",{key:r,attrs:{data:t}})})),1),t._v(" "),e(s.a,{staticClass:"mt-4"},[e(o.a,{staticClass:"pa-1 ma-0",attrs:{cols:"12",sm:"12",md:"8"}},[e("summary-consumption")],1),t._v(" "),e(o.a,{staticClass:"pa-1 ma-0",attrs:{cols:"12",sm:"12",md:"4"}},[e(a.a,[e(n.c,{staticClass:"text-h6"},[t._v("Average consumption and cost")]),t._v(" "),e(n.b,[e("chart-column",{attrs:{height:"465"}})],1)],1)],1),t._v(" "),e(o.a,{attrs:{cols:"12",sm:"12",md:"8"}},[e(s.a,t._l(t.powers,(function(t,r){return e(o.a,{key:r,attrs:{cols:"12",sm:"12",md:"4",lg:"3"}},[e("summary-power",{attrs:{power:t}})],1)})),1),t._v(" "),e(s.a,t._l(t.voltages,(function(t,r){return e(o.a,{key:r,attrs:{cols:"12",sm:"12",md:"4",lg:"3"}},[e("summary-voltage",{attrs:{voltage:t}})],1)})),1)],1),t._v(" "),e(o.a,{attrs:{cols:"12",xs:"12",md:"4"}},[e(s.a,{attrs:{no:"",gutt:""}},[e(o.a,{attrs:{cols:"12",xs:"12",md:"6"}},[e(a.a,{attrs:{color:"white",height:"295px"}},[e(n.b,[e("chart-gradient-donut")],1)],1)],1),t._v(" "),e(o.a,{attrs:{cols:"12",xs:"12",md:"6"}},[e(a.a,{attrs:{color:"white",height:"295px"}},[e(n.b,[e("chart-gradient-donut")],1)],1)],1),t._v(" "),e(o.a,{attrs:{cols:"12",sm:"12",md:"12"}},[e(a.a,{staticClass:"pa-0 ma-0",attrs:{color:"#FAFAFA",rounded:""}},[e(n.c,[e(c.a,{attrs:{left:""}},[t._v(" mdi-finance ")]),t._v(" "),e("span",{staticClass:"text-h6"},[t._v("Average power factor in year")])],1),t._v(" "),e(n.b,[e("chart-line",{attrs:{height:"450",data:t.splinedata}})],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=h.exports}}]);