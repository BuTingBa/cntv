(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/post/post"],{"03fe":function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},s=[];o.d(e,"a",function(){return n}),o.d(e,"b",function(){return s})},"512c":function(t,e,o){},"6ffb":function(t,e,o){"use strict";o.r(e);var n=o("baa1"),s=o.n(n);for(var a in n)"default"!==a&&function(t){o.d(e,t,function(){return n[t]})}(a);e["default"]=s.a},a506:function(t,e,o){"use strict";var n=o("512c"),s=o.n(n);s.a},baa1:function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n,s=i(o("a34a")),a=i(o("26f4"));function i(t){return t&&t.__esModule?t:{default:t}}function u(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function r(t,e,o,n,s,a,i){try{var u=t[a](i),r=u.value}catch(c){return void o(c)}u.done?e(r):Promise.resolve(r).then(n,s)}function c(t){return function(){var e=this,o=arguments;return new Promise(function(n,s){var a=t.apply(e,o);function i(t){r(a,n,s,i,u,"next",t)}function u(t){r(a,n,s,i,u,"throw",t)}i(void 0)})}}var l=(n={data:function(){return{CustomBar:this.CustomBar,modalName:null,postcontent:"null",huati:"",huatiname:"选择话题",oosArr:[],upImgOos:{aliConfig:{AccessKeySecret:"Us5V1E9tD2bSYFWYWYsHES4lNdAXRi",OSSAccessKeyId:"LTAI9dyLJEiv09Ss",oosDirectory:"angeli-image",url:"https://sz.oss.data.angeli.top/"},notli:!0,count:9,upTextDesc:"",upBgColor:"#EFEFF4",upIconColor:"#fff",upSvgIconName:"icon-addicon",isAddImage:!0}}},onBackPress:function(){t.redirectTo({url:"../Home/Home?type=plusPost"})},onShow:function(){console.log(a.default.postClass),this.huati=a.default.postClass.ClassId,this.huatiname=a.default.postClass.ClassName},onLoad:function(t){}},u(n,"onBackPress",function(e){t.redirectTo({url:"../Home/Home?type=plusPost"})}),u(n,"methods",{getClassList:function(){t.navigateTo({url:"../huati/huati"})},uImageTap:function(){this.$refs.uImage.uploadimage(this.upImgOos)},delImgInfo:function(){var t=c(s.default.mark(function t(e){return s.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:console.log("你删除的图片地址为:",e,this.oosArr.splice(e.index,1));case 1:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),upOosData:function(){var e=c(s.default.mark(function e(o){var n,a,i;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:n=[],a=0,i=o.length;case 2:if(!(a<i)){e.next=15;break}if(e.prev=3,""==o[a].path_server){e.next=7;break}return e.next=7,n.push(o[a].path_server.split(","));case 7:e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](3),console.log("上传失败...");case 12:a++,e.next=2;break;case 15:this.oosArr=n,n.length==this.upImgOos.count&&t.showToast({title:"上传成功",icon:"none"});case 17:case"end":return e.stop()}},e,this,[[3,9]])}));function o(t){return e.apply(this,arguments)}return o}(),textareaAInput:function(t){this.postcontent=t.target.value},sendpost:function(e){console.log(this.postcontent),"null"!=this.postcontent&&""!=this.postcontent?this.postcontent.length>2e3||this.postcontent.length<10?t.showToast({title:"内容最少10个字，最多2000个字",position:"bottom",icon:"none",mask:!0}):"选择话题"!=this.huati?(t.showLoading({title:"发送帖子中..",mask:!0}),t.request({method:"POST",url:"https://api.angeli.top/post.php?type=addPost",data:{imageList:this.oosArr.join().split(","),txt:this.postcontent,huati:this.huati},header:{"content-type":"application/x-www-form-urlencoded",Cookie:a.default.cookie},success:function(e){t.showToast({title:e.data.msg,position:"bottom",icon:"none",duration:2e3,mask:!0}),"2"==e.data.code&&t.showToast({title:e.data.msg,position:"bottom",icon:"none",duration:2e3,mask:!0}),"1"==e.data.code&&setTimeout(function(){t.hideLoading(),t.redirectTo({url:"../Home/Home?type=plusPost"})},2e3)},complete:function(){}})):t.showToast({title:"你还没有选择话题",position:"bottom",icon:"none",mask:!0}):t.showToast({title:"请输入文字内容！",position:"bottom",icon:"none",mask:!0})}}),n);e.default=l}).call(this,o("543d")["default"])},f7fd:function(t,e,o){"use strict";(function(t){o("7e16"),o("921b");n(o("66fd"));var e=n(o("fcb0"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,o("543d")["createPage"])},fcb0:function(t,e,o){"use strict";o.r(e);var n=o("03fe"),s=o("6ffb");for(var a in s)"default"!==a&&function(t){o.d(e,t,function(){return s[t]})}(a);o("a506");var i=o("2877"),u=Object(i["a"])(s["default"],n["a"],n["b"],!1,null,null,null);e["default"]=u.exports}},[["f7fd","common/runtime","common/vendor"]]]);