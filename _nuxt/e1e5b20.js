(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{528:function(t,e,a){var r=a(538);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,a(19).default)("539ea948",r,!0,{sourceMap:!1})},537:function(t,e,a){"use strict";a(528)},538:function(t,e,a){var r=a(18)((function(t){return t[1]}));r.push([t.i,".outlined[data-v-37f20037]{color:#00f!important;border-color:#00f!important}",""]),r.locals={},t.exports=r},539:function(t,e,a){"use strict";a.r(e);var r=a(197),s=a(516),n=a(599),i=a(587),l=a(131),o=a(130),c=a(38),u={props:{item:{type:Object,default:null}},data:function(){return{}}},d=(a(537),a(61)),m=Object(d.a)(u,(function(){var t=this,e=t._self._c;return e(n.a,[e(i.a,{scopedSlots:t._u([{key:"default",fn:function(a){var n=a.hover;return[e(s.a,t._g({staticClass:"mx-auto",attrs:{flat:"",elevation:"1"}},n),[e(o.a,[e(c.a,[e(c.c,{staticClass:"font-weight-black text-h5"},[t._v(t._s(t.item.amount))]),t._v(" "),e(c.b,{staticClass:"font-weight-bold black--text my-1"},[t._v("Credit Balance")])],1),t._v(" "),e(r.a,{staticClass:"ml-0 mr-3",attrs:{color:"success",size:"48"}},[e(l.a,{attrs:{color:"white"}},[t._v("mdi-currency-rub")])],1)],1)],1)]}}])})],1)}),[],!1,null,"37f20037",null);e.default=m.exports},615:function(t,e,a){"use strict";a.r(e);var r=a(516),s=a(492),n=a(599),i=a(491),l=a(131),o=a(517),c=(a(13),a(12),a(9),a(5),a(16),a(8),a(17),a(0)),u=a(539),d=a(114);function m(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}var f=[["#222"],["#42b3f4"],["red","orange","yellow"],["purple","violet"],["#00c6ff","#F0F","#FF0"],["#f72047","#ffd200","#1feaea"]],p={components:{"summary-card":u.default},name:"IndexPage",data:function(){return{width:2,radius:10,padding:8,lineCap:"round",gradient:f[5],value:[0,2,5,9,5,10,3,5,0,0,1,8,2,9,0],gradientDirection:"top",gradients:f,fill:!1,type:"trend",autoLineWidth:!1,splinedata:{series:[{name:"Credit Purchases",data:[31,40,28,51,42,109,100]},{name:"Token Purchases",data:[11,32,45,32,34,52,41]}],categories:["Jan","Feb","March","April","May","Jun","Jul"]},summaries:[{title:"Tenants",measure:null,value:"2597",color:"primary",subtitle:"Total number of registered tenants",icon:"mdi-home-group"},{title:"Landloards",measure:null,value:"265",color:"#26c6da",subtitle:"Total number of registered landloards",icon:"mdi-account-tie"},{title:"Patners",measure:null,value:"1",color:"lime darken-1",subtitle:"Number of registered partners",icon:"mdi-account-multiple-plus-outline"},{title:"Payments",measure:null,value:"TZS 1,283,924",color:"blue-grey darken-1",subtitle:"Total amount paid",icon:"mdi-currency-cny"},{title:"Meters",measure:null,value:"12,376",color:"grey darken-1",subtitle:"Number of registered meters",icon:"mdi-car-speed-limiter"},{title:"Sites",measure:null,value:"376",color:"grey darken-1",subtitle:"Number of registered sites",icon:"mdi-office-building-marker-outline"}],piedata:{title:"Lorem Ispum dolor"}}},computed:function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?m(Object(a),!0).forEach((function(e){Object(c.a)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}({},Object(d.c)({sum:"statistics"})),created:function(){this.$store.dispatch("_fetchstatistics")}},b=p,v=a(61),g=Object(v.a)(b,(function(){var t=this,e=t._self._c;return e(i.a,{staticClass:"pa-0 ma-0",attrs:{fluid:""}},[e(o.a,t._l(t.summaries,(function(t,a){return e("summarycard",{key:a,attrs:{data:t}})})),1),t._v(" "),e(o.a,{staticClass:"mt-4"},[e(n.a,{staticClass:"pa-1 ma-0",attrs:{cols:"12",sm:"12",md:"8"}},[e(o.a,t._l(4,(function(a){return e(n.a,{key:a},[t.sum?e("summary-card",{staticClass:"pa-0 my-1",attrs:{item:t.sum}}):t._e()],1)})),1),t._v(" "),e(r.a,{staticClass:"pa-0 ma-0",attrs:{color:"#FAFAFA",rounded:""}},[e(s.c,[e(l.a,{attrs:{large:"",left:""}},[t._v("\n            mdi-chart-multiple\n          ")]),t._v(" "),e("span",{staticClass:"text-h6 font-weight-bold"},[t._v("Credit Vs Token purchases")])],1),t._v(" "),e(s.b,[e("chart-area-spline",{attrs:{height:"450",data:t.splinedata}})],1)],1)],1),t._v(" "),e(n.a,{attrs:{cols:"12",xs:"12",md:"4"}},[e(o.a,[e(n.a,{attrs:{cols:"12",xs:"12",md:"6"}},[e("chart-gradient-donut")],1),t._v(" "),e(n.a,{attrs:{cols:"12",sm:"12",md:"6"}},[e("chart-gradient-donut")],1),t._v(" "),e(n.a,{attrs:{cols:"12"}},[e(r.a,[e("chart-bar")],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=g.exports;installComponents(g,{SummaryCard:a(539).default})}}]);