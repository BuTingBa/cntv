(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-user"],{"1a8a":function(e,t,i){"use strict";var n,a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[i("v-uni-view",{staticClass:"header",class:{status:e.isH5Plus}},[i("v-uni-view",{staticClass:"userinfo"},[i("v-uni-view",{staticClass:"face"},[i("v-uni-image",{attrs:{src:e.userinfo.AvatarUrl}})],1),i("v-uni-view",{staticClass:"info"},[i("v-uni-view",{staticClass:"username"},[e._v(e._s(e.userinfo.UserName))]),i("v-uni-view",{staticClass:"integral"},[e._v("等级:"+e._s(e.userinfo.Rank))])],1)],1),i("v-uni-view",{staticClass:"setting"},[i("v-uni-image",{attrs:{src:"../../static/HM-PersonalCenter/setting.png"}})],1)],1),i("v-uni-view",{staticClass:"orders"},[i("v-uni-view",{staticClass:"box"},e._l(e.orderTypeLise,function(t,n){return i("v-uni-view",{key:t.name,staticClass:"label",attrs:{"hover-class":"hover"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toOrderType(n)}}},[i("v-uni-view",{staticClass:"icon"},[t.badge>0?i("v-uni-view",{staticClass:"badge"},[e._v(e._s(t.badge))]):e._e(),i("v-uni-image",{attrs:{src:"../../static/HM-PersonalCenter/"+t.icon}})],1),e._v(e._s(t.name))],1)}),1)],1),e._l(e.severList,function(t,n){return i("v-uni-view",{key:n,staticClass:"list"},e._l(t,function(n,a){return i("v-uni-view",{key:n.name,staticClass:"li",class:{noborder:a==t.length-1},attrs:{"hover-class":"hover"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toPage(n.name)}}},[i("v-uni-view",{staticClass:"icon"},[i("v-uni-image",{attrs:{src:"../../static/HM-PersonalCenter/sever/"+n.icon}})],1),i("v-uni-view",{staticClass:"text"},[e._v(e._s(n.name))]),i("v-uni-image",{staticClass:"to",attrs:{src:"../../static/HM-PersonalCenter/to.png"}})],1)}),1)})],2)},s=[];i.d(t,"b",function(){return a}),i.d(t,"c",function(){return s}),i.d(t,"a",function(){return n})},"2f7c":function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-2b4339c6]{background-color:#fff}.header[data-v-2b4339c6]{background-color:#ff6364;width:92%;height:30vw;padding:0 4%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.header.status[data-v-2b4339c6]{padding-top:0}.header .userinfo[data-v-2b4339c6]{margin-top:%?40?%;width:90%;display:-webkit-box;display:-webkit-flex;display:flex}.header .userinfo .face[data-v-2b4339c6]{-webkit-flex-shrink:0;flex-shrink:0;width:15vw;height:15vw}.header .userinfo .face uni-image[data-v-2b4339c6]{width:100%;height:100%;border-radius:100%}.header .userinfo .info[data-v-2b4339c6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-flow:wrap;flex-flow:wrap;padding-left:%?30?%}.header .userinfo .info .username[data-v-2b4339c6]{width:100%;color:#fff;font-size:%?40?%}.header .userinfo .info .integral[data-v-2b4339c6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 %?20?%;height:%?40?%;color:#fff;background-color:rgba(0,0,0,.1);border-radius:%?20?%;font-size:%?24?%}.header .setting[data-v-2b4339c6]{-webkit-flex-shrink:0;flex-shrink:0;width:6vw;height:6vw}.header .setting uni-image[data-v-2b4339c6]{width:100%;height:100%}.hover[data-v-2b4339c6]{background-color:#eee}.orders[data-v-2b4339c6]{background-color:#ff6364;width:92%;height:11vw;padding:0 4%;margin-bottom:calc(11vw + %?40?%);display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start;border-radius:0 0 100% 100%;margin-top:%?-1?%}.orders .box[data-v-2b4339c6]{width:98%;padding:0 1%;height:22vw;background-color:#fefefe;border-radius:%?24?%;box-shadow:0 0 %?20?% rgba(0,0,0,.15);margin-bottom:%?40?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.orders .box .label[data-v-2b4339c6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-flow:wrap;flex-flow:wrap;width:100%;height:16vw;color:#666;font-size:%?26?%}.orders .box .label .icon[data-v-2b4339c6]{position:relative;width:7vw;height:7vw;margin:0 1vw}.orders .box .label .icon .badge[data-v-2b4339c6]{position:absolute;width:4vw;height:4vw;background-color:#ec6d2c;top:-1vw;right:-1vw;border-radius:100%;font-size:%?20?%;color:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;z-index:10}.orders .box .label .icon uni-image[data-v-2b4339c6]{width:7vw;height:7vw;z-index:9}.list[data-v-2b4339c6]{width:100%;border-bottom:solid %?26?% #f1f1f1}.list .li[data-v-2b4339c6]{width:92%;height:%?100?%;padding:0 4%;border-bottom:solid %?1?% #e7e7e7;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.list .li.noborder[data-v-2b4339c6]{border-bottom:0}.list .li .icon[data-v-2b4339c6]{-webkit-flex-shrink:0;flex-shrink:0;width:%?50?%;height:%?50?%}.list .li .icon uni-image[data-v-2b4339c6]{width:%?50?%;height:%?50?%}.list .li .text[data-v-2b4339c6]{padding-left:%?20?%;width:100%;color:#666}.list .li .to[data-v-2b4339c6]{-webkit-flex-shrink:0;flex-shrink:0;width:%?40?%;height:%?40?%}body.?%PAGE?%[data-v-2b4339c6]{background-color:#fff}',""])},"3cf8":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n="1.25",a="",s="https://shop-api.angeli.top/api/",r=[],o={Version:n,Token:a,requestUrl:s,UserInfo:r};t.default=o},"8d9f":function(e,t,i){var n=i("2f7c");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("4c98dbdf",n,!0,{sourceMap:!1,shadowMode:!1})},b6fe:function(e,t,i){"use strict";var n=i("8d9f"),a=i.n(n);a.a},bb12:function(e,t,i){"use strict";i.r(t);var n=i("1a8a"),a=i("c84f");for(var s in a)"default"!==s&&function(e){i.d(t,e,function(){return a[e]})}(s);i("b6fe");var r,o=i("f0c5"),l=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"2b4339c6",null,!1,n["a"],r);t["default"]=l.exports},c84f:function(e,t,i){"use strict";i.r(t);var n=i("da3e"),a=i.n(n);for(var s in n)"default"!==s&&function(e){i.d(t,e,function(){return n[e]})}(s);t["default"]=a.a},da3e:function(e,t,i){"use strict";var n=i("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(i("3cf8")),s={data:function(){return{isH5Plus:!1,userinfo:[],orderTypeLise:[{name:"待付款",icon:"l1.png",badge:1},{name:"待发货",icon:"l2.png",badge:2},{name:"待收货",icon:"l3.png",badge:6},{name:"退换货",icon:"l5.png",badge:0}],severList:[[{name:"全部订单",icon:"l1.png",badge:1},{name:"收货地址",icon:"addr.png"},{name:"优惠券",icon:"momey.png"},{name:"抽奖",icon:"choujiang.png"},{name:"在线客服",icon:"kefu.png"}]]}},onLoad:function(){this.userinfo=a.default.UserInfo},methods:{toOrderType:function(e){console.log(e),uni.setStorageSync("tbIndex",e),uni.navigateTo({url:"order_list?tbIndex="+e})},toPage:function(e){"收货地址"==e&&uni.navigateTo({url:"./address"})}}};t.default=s}}]);