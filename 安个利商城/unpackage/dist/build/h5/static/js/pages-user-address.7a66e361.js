(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-address"],{"2c68":function(e,t,i){"use strict";var n,a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"list"},e._l(e.addressList,function(t,n){return i("v-uni-view",{key:n,staticClass:"row",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.select(t)}}},[i("v-uni-view",{staticClass:"left"},[i("v-uni-view",{staticClass:"head"},[e._v(e._s(t.name.substring(0,1)))])],1),i("v-uni-view",{staticClass:"center"},[i("v-uni-view",{staticClass:"name-tel"},[i("v-uni-view",{staticClass:"name"},[e._v(e._s(t.name))]),i("v-uni-view",{staticClass:"tel"},[e._v(e._s(t.phone))]),"1"==t.isDefault?i("v-uni-view",{staticClass:"default"},[e._v("默认")]):e._e()],1),i("v-uni-view",{staticClass:"address"},[e._v(e._s(t.addressRegion)+e._s(t.detailed))])],1),i("v-uni-view",{staticClass:"right"},[i("v-uni-view",{staticClass:"icon bianji",on:{click:function(i){i.stopPropagation(),arguments[0]=i=e.$handleEvent(i),e.edit(t)}}})],1)],1)}),1)],1),i("v-uni-view",{staticClass:"add"},[i("v-uni-view",{staticClass:"btn",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.add.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"icon tianjia"}),e._v("新增地址")],1)],1)],1)},s=[];i.d(t,"b",function(){return a}),i.d(t,"c",function(){return s}),i.d(t,"a",function(){return n})},"3cf8":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n="1.25",a="",s="https://shop-api.angeli.top/api/",c=[],r={Version:n,Token:a,requestUrl:s,UserInfo:c};t.default=r},"3f5a":function(e,t,i){"use strict";var n=i("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(i("3cf8")),s={data:function(){return{isSelect:!1,addressList:[]}},onShow:function(){this.getAddress()},onLoad:function(e){"select"==e.type&&(this.isSelect=!0)},methods:{getAddress:function(){var e=this;uni.request({method:"POST",url:a.default.requestUrl+"getAddressList",data:{token:a.default.Token},header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){"1"==t.data.code?e.addressList=t.data.data:uni.showToast({title:t.data.msg,position:"bottom",icon:"none"}),console.log(t)}})},edit:function(e){uni.setStorage({key:"address",data:e,success:function(){uni.navigateTo({url:"edit?type=edit"})}})},add:function(){uni.navigateTo({url:"edit?type=add"})},select:function(e){this.isSelect&&uni.setStorage({key:"selectAddress",data:e,success:function(){uni.navigateBack()}})}}};t.default=s},"50a3":function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-view[data-v-15b400ec]{display:-webkit-box;display:-webkit-flex;display:flex}.add[data-v-15b400ec]{position:fixed;bottom:0;width:100%;height:%?120?%;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.add .btn[data-v-15b400ec]{box-shadow:%?0?% %?5?% %?10?% rgba(0,0,0,.4);width:70%;height:%?80?%;border-radius:%?80?%;background-color:#f06c7a;color:#fff;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?30?%}.add .btn .icon[data-v-15b400ec]{height:%?80?%;color:#fff;font-size:%?30?%;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.list[data-v-15b400ec]{margin-top:%?40?%;-webkit-flex-wrap:wrap;flex-wrap:wrap}.list .row[data-v-15b400ec]{width:96%;padding:%?20?% 2%}.list .row .left[data-v-15b400ec]{width:%?90?%;-webkit-flex-shrink:0;flex-shrink:0;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.list .row .left .head[data-v-15b400ec]{width:%?70?%;height:%?70?%;background:-webkit-linear-gradient(left,#ccc,#aaa);background:linear-gradient(90deg,#ccc,#aaa);color:#fff;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-radius:%?60?%;font-size:%?35?%}.list .row .center[data-v-15b400ec]{width:100%;-webkit-flex-wrap:wrap;flex-wrap:wrap}.list .row .center .name-tel[data-v-15b400ec]{width:100%;-webkit-box-align:baseline;-webkit-align-items:baseline;align-items:baseline}.list .row .center .name-tel .name[data-v-15b400ec]{font-size:%?34?%}.list .row .center .name-tel .tel[data-v-15b400ec]{margin-left:%?30?%;font-size:%?24?%;color:#777}.list .row .center .name-tel .default[data-v-15b400ec]{font-size:%?22?%;background-color:#f06c7a;color:#fff;padding:0 %?18?%;border-radius:%?24?%;margin-left:%?20?%}.list .row .center .address[data-v-15b400ec]{width:100%;font-size:%?24?%;-webkit-box-align:baseline;-webkit-align-items:baseline;align-items:baseline;color:#777}.list .row .right[data-v-15b400ec]{-webkit-flex-shrink:0;flex-shrink:0;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-left:%?20?%}.list .row .right .icon[data-v-15b400ec]{-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:%?80?%;height:%?60?%;border-left:solid %?1?% #aaa;font-size:%?40?%;color:#777}',""])},"61da":function(e,t,i){var n=i("50a3");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("13cf21aa",n,!0,{sourceMap:!1,shadowMode:!1})},"7fef":function(e,t,i){"use strict";var n=i("61da"),a=i.n(n);a.a},c8e5:function(e,t,i){"use strict";i.r(t);var n=i("2c68"),a=i("f71c");for(var s in a)"default"!==s&&function(e){i.d(t,e,function(){return a[e]})}(s);i("7fef");var c,r=i("f0c5"),o=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"15b400ec",null,!1,n["a"],c);t["default"]=o.exports},f71c:function(e,t,i){"use strict";i.r(t);var n=i("3f5a"),a=i.n(n);for(var s in n)"default"!==s&&function(e){i.d(t,e,function(){return n[e]})}(s);t["default"]=a.a}}]);