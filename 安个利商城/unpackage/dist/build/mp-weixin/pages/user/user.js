(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/user"],{"40a4":function(n,e,t){"use strict";var a=t("d846"),i=t.n(a);i.a},9591:function(n,e,t){"use strict";var a=function(){var n=this,e=n.$createElement;n._self._c},i=[];t.d(e,"a",function(){return a}),t.d(e,"b",function(){return i})},a575:function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={data:function(){return{isH5Plus:!1,userinfo:{},orderTypeLise:[{name:"待付款",icon:"l1.png",badge:1},{name:"待发货",icon:"l2.png",badge:2},{name:"待收货",icon:"l3.png",badge:6},{name:"退换货",icon:"l5.png",badge:0}],severList:[[{name:"全部订单",icon:"l1.png",badge:1},{name:"收货地址",icon:"addr.png"},{name:"优惠券",icon:"momey.png"},{name:"抽奖",icon:"choujiang.png"},{name:"在线客服",icon:"kefu.png"}]]}},onLoad:function(){this.init()},methods:{init:function(){this.userinfo={face:"../../static/HM-PersonalCenter/face.jpeg",username:"不停",integral:"6666"}},toOrderType:function(e){n.setStorageSync("tbIndex",e),n.navigateTo({url:"order_list?tbIndex="+e})},toPage:function(n,e){}}};e.default=t}).call(this,t("543d")["default"])},bb12:function(n,e,t){"use strict";t.r(e);var a=t("9591"),i=t("c84f");for(var o in i)"default"!==o&&function(n){t.d(e,n,function(){return i[n]})}(o);t("40a4");var u=t("2877"),r=Object(u["a"])(i["default"],a["a"],a["b"],!1,null,null,null);e["default"]=r.exports},c84f:function(n,e,t){"use strict";t.r(e);var a=t("a575"),i=t.n(a);for(var o in a)"default"!==o&&function(n){t.d(e,n,function(){return a[n]})}(o);e["default"]=i.a},d846:function(n,e,t){},fd64:function(n,e,t){"use strict";(function(n){t("8980"),t("921b");a(t("66fd"));var e=a(t("bb12"));function a(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("543d")["createPage"])}},[["fd64","common/runtime","common/vendor"]]]);