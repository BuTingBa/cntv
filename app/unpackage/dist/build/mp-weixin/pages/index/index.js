(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{5843:function(t,n,e){"use strict";e.r(n);var u=e("bc72"),o=e("593f");for(var r in o)"default"!==r&&function(t){e.d(n,t,function(){return o[t]})}(r);e("e078");var a=e("2877"),c=Object(a["a"])(o["default"],u["a"],u["b"],!1,null,null,null);n["default"]=c.exports},"593f":function(t,n,e){"use strict";e.r(n);var u=e("794a"),o=e.n(u);for(var r in u)"default"!==r&&function(t){e.d(n,t,function(){return u[t]})}(r);n["default"]=o.a},"794a":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{timer:"",num:5}},onLoad:function(){var n=this;t.getStorage({key:"showAD",success:function(t){console.log(t.data),"true"==t.data||n.countDown()}}),this.timer=setInterval(function(){n.num--,console.log(n.num),0==n.num&&(clearInterval(n.timer),n.num="",t.redirectTo({url:"../Home/Home?id=1"}))},1e3)},methods:{countDown:function(){clearInterval(this.timer),this.num="",t.redirectTo({url:"../Home/Home?id=1"})}}};n.default=e}).call(this,e("543d")["default"])},"921e":function(t,n,e){"use strict";(function(t){e("7e16"),e("921b");u(e("66fd"));var n=u(e("5843"));function u(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},bc72:function(t,n,e){"use strict";var u=function(){var t=this,n=t.$createElement;t._self._c},o=[];e.d(n,"a",function(){return u}),e.d(n,"b",function(){return o})},e078:function(t,n,e){"use strict";var u=e("e7df"),o=e.n(u);o.a},e7df:function(t,n,e){}},[["921e","common/runtime","common/vendor"]]]);