(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{5843:function(t,e,n){"use strict";n.r(e);var a=n("9bb4"),o=n("593f");for(var u in o)"default"!==u&&function(t){n.d(e,t,function(){return o[t]})}(u);n("e078");var i=n("2877"),r=Object(i["a"])(o["default"],a["a"],a["b"],!1,null,null,null);e["default"]=r.exports},"593f":function(t,e,n){"use strict";n.r(e);var a=n("794a"),o=n.n(a);for(var u in a)"default"!==u&&function(t){n.d(e,t,function(){return a[t]})}(u);e["default"]=o.a},"794a":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{timer:"",num:5,image:"../../static/g.png"}},onLoad:function(){var e=this;t.request({method:"GET",url:"https://api.angeli.top/user.php?type=getSysConfig",data:{configName:"home_imageurl"},header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){console.log(t),"1"==t.data.code&&(e.systemConfig=t.data.data,t.data.data?e.image=t.data.data:e.image=""),console.log(e.image)},complete:function(){}})},onReady:function(){var e=this;t.getStorage({key:"showAD",success:function(t){console.log(t.data),"true"==t.data||e.countDown()}}),this.timer=setInterval(function(){e.num--,console.log(e.num),0==e.num&&(clearInterval(e.timer),e.num="",t.redirectTo({url:"../Home/Home?id=1"}))},1e3)},methods:{countDown:function(){clearInterval(this.timer),this.num="",t.redirectTo({url:"../Home/Home?id=1"})}}};e.default=n}).call(this,n("543d")["default"])},"921e":function(t,e,n){"use strict";(function(t){n("7e16"),n("921b");a(n("66fd"));var e=a(n("5843"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"9bb4":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o})},e078:function(t,e,n){"use strict";var a=n("e7df"),o=n.n(a);o.a},e7df:function(t,e,n){}},[["921e","common/runtime","common/vendor"]]]);