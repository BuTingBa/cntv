(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{1523:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={data:function(){return{timer:"",num:5}},onLoad:function(){var t=this;this.timer=setInterval(function(){t.num--,console.log(t.num),0==t.num&&(clearInterval(t.timer),t.num="",uni.navigateTo({url:"../Home/Home"}))},1e3)},methods:{countDown:function(){clearInterval(this.timer),this.num="",uni.redirectTo({url:"../Home/Home"})}}};n.default=i},"43ed":function(t,n,e){"use strict";var i=e("e1f6"),a=e.n(i);a.a},"5e15":function(t,n,e){"use strict";e.r(n);var i=e("69ba"),a=e("6de2");for(var u in a)"default"!==u&&function(t){e.d(n,t,function(){return a[t]})}(u);e("43ed");var o=e("2877"),r=Object(o["a"])(a["default"],i["a"],i["b"],!1,null,"b53e2886",null);n["default"]=r.exports},"69ba":function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"content"},[e("v-uni-image",{staticClass:"logding",attrs:{src:"../../static/g.png"}}),e("v-uni-view",{staticClass:"anniu"},[e("v-uni-button",{staticClass:"mini-btn",attrs:{type:"default",size:"mini",plain:"true"},on:{click:function(n){n=t.$handleEvent(n),t.countDown(n)}}},[t._v("跳过"+t._s(t.num))])],1)],1)},a=[];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return a})},"6de2":function(t,n,e){"use strict";e.r(n);var i=e("1523"),a=e.n(i);for(var u in i)"default"!==u&&function(t){e.d(n,t,function(){return i[t]})}(u);n["default"]=a.a},"89f3":function(t,n,e){n=t.exports=e("2350")(!1),n.push([t.i,".content[data-v-b53e2886]{width:100%;height:100vh}.logding[data-v-b53e2886]{width:100%;height:100vh}.anniu[data-v-b53e2886]{position:absolute;bottom:30px;right:10px}",""])},e1f6:function(t,n,e){var i=e("89f3");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("bcd1cab2",i,!0,{sourceMap:!1,shadowMode:!1})}}]);