(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/set/set"],{"343b":function(e,t,o){"use strict";o.r(t);var n=o("47ff"),a=o.n(n);for(var u in n)"default"!==u&&function(e){o.d(t,e,function(){return n[e]})}(u);t["default"]=a.a},"47ff":function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(o("26f4"));function a(e){return e&&e.__esModule?e:{default:e}}function u(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var i={data:function(){return{shadow:!0,isShowAD:!0,modalName:""}},onLoad:function(){var t=this;e.getStorage({key:"showAD",success:function(e){console.log(e.data),"true"==e.data?(t.isShowAD=!0,t.shadow=!0):(t.isShowAD=!1,t.shadow=!1)}}),n.default.userinfo.VIPEndTime>0?this.isShowAD=!1:(this.isShowAD=!0,this.shadow=!1)},methods:{getyinsi:function(){e.navigateTo({url:"../edit/edit?type=5"})},kaitong:function(){this.modalName="",e.navigateTo({url:"../vip/vip"})},userAnquan:function(){e.navigateTo({url:"../anquan/anquan"})},logout:function(){e.clearStorage(),e.showToast(u({title:"即将退出登录",position:"bottom",icon:"none"},"position","center")),n.default.userinfo=[],n.default.cookie="",setTimeout(function(){e.redirectTo({url:"../Home/Home"})},2e3)},SetShadow:function(t){this.shadow=t.detail.value,0==this.shadow?(console.log("先冲会员"),n.default.userinfo.VIPEndTime>0?e.setStorage({key:"showAD",data:"false",success:function(){console.log("success")}}):(this.modalName="Image",e.setStorage({key:"showAD",data:"true",success:function(){console.log("success")}}))):e.setStorage({key:"showAD",data:"true",success:function(){console.log("success")}}),console.log(this.shadow)},guanbi:function(){n.default.userinfo.VIPEndTime<=0&&(this.modalName="Image")},getInfo:function(){e.navigateTo({url:"../editinfo/editinfo"})},getAbout:function(){e.navigateTo({url:"../about/about"})}}};t.default=i}).call(this,o("543d")["default"])},"702c":function(e,t,o){"use strict";o.r(t);var n=o("ad41"),a=o("343b");for(var u in a)"default"!==u&&function(e){o.d(t,e,function(){return a[e]})}(u);o("9f26");var i=o("2877"),s=Object(i["a"])(a["default"],n["a"],n["b"],!1,null,null,null);t["default"]=s.exports},"86a6":function(e,t,o){},"9f26":function(e,t,o){"use strict";var n=o("86a6"),a=o.n(n);a.a},ad41:function(e,t,o){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c;e._isMounted||(e.e0=function(t){e.modalName=""})},a=[];o.d(t,"a",function(){return n}),o.d(t,"b",function(){return a})},e0de:function(e,t,o){"use strict";(function(e){o("7e16"),o("921b");n(o("66fd"));var t=n(o("702c"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,o("543d")["createPage"])}},[["e0de","common/runtime","common/vendor"]]]);