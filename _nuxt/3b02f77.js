(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{507:function(t,n,e){"use strict";e(12),e(9),e(16),e(17);var r=e(0),a=(e(5),e(58),e(75),e(37),e(13),e(25),e(59),e(492),e(46),e(493),e(494),e(495),e(496),e(497),e(498),e(499),e(500),e(501),e(502),e(503),e(504),e(505),e(47),e(8),e(297),e(1)),o=e(86),c=e(2);function i(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?i(Object(e),!0).forEach((function(n){Object(r.a)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var u=["sm","md","lg","xl"],s=["start","end","center"];function f(t,n){return u.reduce((function(e,r){return e[t+Object(c.D)(r)]=n(),e}),{})}var p=function(t){return[].concat(s,["baseline","stretch"]).includes(t)},g=f("align",(function(){return{type:String,default:null,validator:p}})),d=function(t){return[].concat(s,["space-between","space-around"]).includes(t)},b=f("justify",(function(){return{type:String,default:null,validator:d}})),j=function(t){return[].concat(s,["space-between","space-around","stretch"]).includes(t)},v=f("alignContent",(function(){return{type:String,default:null,validator:j}})),y={align:Object.keys(g),justify:Object.keys(b),alignContent:Object.keys(v)},O={align:"align",justify:"justify",alignContent:"align-content"};function w(t,n,e){var r=O[t];if(null!=e){if(n){var a=n.replace(t,"");r+="-".concat(a)}return(r+="-".concat(e)).toLowerCase()}}var h=new Map;n.a=a.a.extend({name:"v-row",functional:!0,props:l(l(l({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:p}},g),{},{justify:{type:String,default:null,validator:d}},b),{},{alignContent:{type:String,default:null,validator:j}},v),render:function(t,n){var e=n.props,a=n.data,c=n.children,i="";for(var l in e)i+=String(e[l]);var u=h.get(i);if(!u){var s,f;for(f in u=[],y)y[f].forEach((function(t){var n=e[t],r=w(f,t,n);r&&u.push(r)}));u.push((s={"no-gutters":e.noGutters,"row--dense":e.dense},Object(r.a)(s,"align-".concat(e.align),e.align),Object(r.a)(s,"justify-".concat(e.justify),e.justify),Object(r.a)(s,"align-content-".concat(e.alignContent),e.alignContent),s)),h.set(i,u)}return t(e.tag,Object(o.a)(a,{staticClass:"row",class:u}),c)}})},597:function(t,n,e){"use strict";e.r(n);var r=e(593),a=e(507),o={name:"InspirePage"},c=e(61),i=Object(c.a)(o,(function(){var t=this,n=t._self._c;return n(a.a,[n(r.a,{staticClass:"text-center"},[n("img",{staticClass:"mb-5",attrs:{src:"/v.png",alt:"Vuetify.js"}}),t._v(" "),n("blockquote",{staticClass:"blockquote"},[t._v("\n      “First, solve the problem. Then, write the code.”\n      "),n("footer",[n("small",[n("em",[t._v("—John Johnson")])])])])])],1)}),[],!1,null,null,null);n.default=i.exports}}]);