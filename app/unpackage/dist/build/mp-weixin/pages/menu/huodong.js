(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/menu/huodong"],{"0736":function(t,e,n){"use strict";var o=n("f9b8"),i=n.n(o);i.a},"17bd":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("26f4"));function i(t){return t&&t.__esModule?t:{default:t}}var u={data:function(){return{MsgList:[],auid:0,val:"",value:"",tuijianren:0}},onLoad:function(e){var n=this;console.log(e),console.log("推荐人："+e.tuijianid),this.getMyMsg(),e.tuijianid&&(this.tuijianren=e.tuijianid,o.default.tgid=this.tuijianren),t.login({provider:"weixin",success:function(e){console.log(e),t.request({method:"POST",url:"https://api.angeli.top/reg.php?type=wxlogin",data:{code:e.code,tuijianId:n.tuijianren},header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){console.log(t),o.default.usersk=t.data.data.session_key,o.default.cookie=t.header["Set-Cookie"],"0"!=t.data.code&&(console.log("已经存在有账号了，就不要注册了"),n.tuijianren=0,console.log(n.tuijianren),o.default.userinfo=t.data.data),console.log("输出登录结果"),console.log(t)}})}})},onShow:function(){},methods:{getreg:function(){t.navigateTo({url:"../reg/reg"})},input:function(t){this.val=t.target.value},login:function(){},getme:function(){t.navigateTo({url:"../i/i"})},markmsg:function(){t.request({method:"GET",url:"https://api.angeli.top/user.php?type=mark&class=system",data:{msgId:this.msgid},header:{"content-type":"application/x-www-form-urlencoded",Cookie:o.default.cookie},success:function(t){console.log(t),"1"==t.data.code?console.log("已将信息标记为已读"):console.log("标记已读失败！")},complete:function(){}})},InputFocus:function(t){this.InputBottom=t.detail.height},InputBlur:function(t){this.InputBottom=0},getMyMsg:function(){var e=this;t.request({method:"GET",url:"https://api.angeli.top/user.php?type=getMyTG",data:{},header:{"content-type":"application/x-www-form-urlencoded",Cookie:o.default.cookie},success:function(t){console.log(t),"1"==t.data.code&&(e.MsgList=t.data.data),console.log(e.MsgList)}})}},onShareAppMessage:function(t){return console.log("MyId:"+o.default.userinfo.Auid),"button"===t.from&&console.log(t.target),{title:"给你安利一个好东西",path:"/pages/menu/huodong?tuijianid="+o.default.userinfo.Auid}}};e.default=u}).call(this,n("543d")["default"])},"651d":function(t,e,n){"use strict";(function(t){n("7e16"),n("921b");o(n("66fd"));var e=o(n("d4c4"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"8c9c":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return i})},d166:function(t,e,n){"use strict";n.r(e);var o=n("17bd"),i=n.n(o);for(var u in o)"default"!==u&&function(t){n.d(e,t,function(){return o[t]})}(u);e["default"]=i.a},d4c4:function(t,e,n){"use strict";n.r(e);var o=n("8c9c"),i=n("d166");for(var u in i)"default"!==u&&function(t){n.d(e,t,function(){return i[t]})}(u);n("0736");var a=n("2877"),c=Object(a["a"])(i["default"],o["a"],o["b"],!1,null,null,null);e["default"]=c.exports},f9b8:function(t,e,n){}},[["651d","common/runtime","common/vendor"]]]);