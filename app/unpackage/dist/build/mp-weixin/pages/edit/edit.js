(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/edit/edit"],{"1c93":function(t,e,n){"use strict";n.r(e);var a=n("e2a1"),o=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);e["default"]=o.a},"1e41":function(t,e,n){"use strict";(function(t){n("7e16"),n("921b");a(n("66fd"));var e=a(n("6aa3"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"6aa3":function(t,e,n){"use strict";n.r(e);var a=n("bbdc"),o=n("1c93");for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);n("a614");var u=n("2877"),s=Object(u["a"])(o["default"],a["a"],a["b"],!1,null,null,null);e["default"]=s.exports},a614:function(t,e,n){"use strict";var a=n("ee63"),o=n.n(a);o.a},bbdc:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o})},e2a1:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=o(n("26f4"));function o(t){return t&&t.__esModule?t:{default:t}}var i={data:function(){return{type:1,title:"安个利",upNameNumber:0,newName:""}},onLoad:function(t){console.log(t.type),this.type=t.type,"1"==t.type&&(this.title="修改名字",this.getNumber()),"2"==t.type&&(this.title="个性签名"),"3"==t.type&&(this.title="等级特权"),"4"==t.type&&(this.title="关于安个利"),"5"==t.type&&(this.title="安个利隐私政策"),"6"==t.type&&(this.title="安个利用户协议")},methods:{inputing:function(t){this.newName=t.detail.value,console.log(t.detail)},setName:function(){t.request({method:"GET",url:"https://api.angeli.top/user.php?type=setName",data:{auid:a.default.userinfo.Auid,newName:this.newName},header:{"content-type":"application/x-www-form-urlencoded",Cookie:a.default.cookie},success:function(e){t.showToast({title:e.data.msg,position:"bottom",icon:"none"})}})},getNumber:function(){var e=this;t.request({method:"GET",url:"https://api.angeli.top/user.php?type=getNameCount",data:{auid:a.default.userinfo.Auid},header:{"content-type":"application/x-www-form-urlencoded",Cookie:a.default.cookie},success:function(t){"1"==t.data.code&&(e.upNameNumber=t.data.data,console.log(e.upNameNumber,t.data.data))}})},setms:function(){t.request({method:"GET",url:"https://api.angeli.top/user.php?type=setms",data:{auid:a.default.userinfo.Auid,ms:this.newName},header:{"content-type":"application/x-www-form-urlencoded",Cookie:a.default.cookie},success:function(e){t.showToast({title:e.data.msg,position:"bottom",icon:"none"})}})}}};e.default=i}).call(this,n("543d")["default"])},ee63:function(t,e,n){}},[["1e41","common/runtime","common/vendor"]]]);