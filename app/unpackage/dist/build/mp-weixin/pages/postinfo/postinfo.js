(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/postinfo/postinfo"],{"053f":function(t,o,e){"use strict";e.r(o);var i=e("fd48"),n=e("6cd1");for(var s in n)"default"!==s&&function(t){e.d(o,t,function(){return n[t]})}(s);e("6b9c");var a=e("2877"),p=Object(a["a"])(n["default"],i["a"],i["b"],!1,null,null,null);o["default"]=p.exports},"6b9c":function(t,o,e){"use strict";var i=e("e515"),n=e.n(i);n.a},"6cd1":function(t,o,e){"use strict";e.r(o);var i=e("a162"),n=e.n(i);for(var s in i)"default"!==s&&function(t){e.d(o,t,function(){return i[t]})}(s);o["default"]=n.a},a162:function(t,o,e){"use strict";(function(t){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var i=n(e("9ca3"));function n(t){return t&&t.__esModule?t:{default:t}}var s={data:function(){return{postInfo:[],pllist:[],InputBottom:0,plnr:"",postid:"",setvar:"",Give:"0",huifu:!1,pluid:""}},onShareAppMessage:function(t){return"button"===t.from&&console.log(t.target),{title:this.postInfo.Content,path:"/pages/postinfo/postinfo?id="+this.postid,desc:this.postInfo.Content,imageUrl:this.postInfo.PictureId[0]}},onLoad:function(o){var e=this;console.log(o.id),this.postid=o.id,t.request({method:"GET",url:"https://api.angeli.top/post.php?type=outPostInfo",data:{id:o.id},header:{"content-type":"application/x-www-form-urlencoded",Cookie:i.default.cookie},success:function(n){console.log("————————————帖子详情——————————"),e.postInfo=n.data.data,console.log(e.postInfo),t.request({method:"GET",url:"https://api.angeli.top/post.php?type=getpl",data:{postid:o.id},header:{"content-type":"application/x-www-form-urlencoded",Cookie:i.default.cookie},success:function(t){console.log("————————————评论详情——————————"),e.pllist=t.data.data,console.log(e.pllist)}})}})},methods:{Like:function(o,e,n){var s=this;if(!0===n)var a="del";else a="add";t.request({method:"GET",url:"https://api.angeli.top/post.php?type=Like",data:{fuid:e,postid:o,mode:a},header:{"content-type":"application/x-www-form-urlencoded",Cookie:i.default.cookie},success:function(o){"1"==o.data.code?("add"==a?(s.postInfo.Give=!0,t.showToast({title:"种草成功！",position:"bottom",icon:"none"})):(s.postInfo.Give=!1,t.showToast({title:"取消种草成功！",position:"bottom",icon:"none"})),s.$forceUpdate()):t.showToast({title:"种草失败！",position:"bottom",icon:"none"})},complete:function(){}})},InputFocus:function(t){this.InputBottom=t.detail.height},InputBlur:function(t){this.InputBottom=0},pinglun:function(t){this.plnr=t.target.value,0==this.plnr.indexOf("@")?this.huifu=!0:this.huifu=!1},onShareAppMessage:function(t){return"button"===t.from&&console.log(t.target),{title:this.postInfo.Content,path:"/pages/postinfo/postinfo?id="+this.postid,desc:this.postInfo.Content,imageUrl:this.postInfo.PictureId[0]}},showImage:function(o,e){t.previewImage({current:e,urls:o,longPressActions:{itemList:["发送给朋友","保存图片","收藏"],success:function(o){t.showToast({title:"选中了第"+(o.tapIndex+1)+"个按钮",position:"bottom",icon:"none"}),console.log("选中了第"+(o.tapIndex+1)+"个按钮")},fail:function(t){console.log(t.errMsg)}}})},sendpl:function(o){var e=this;if(console.log(this.plnr),"null"!=this.plnr&&""!=this.plnr)if(this.plnr.length>300||this.plnr.length<1)t.showToast({title:"内容最少1个字，最多300字",position:"bottom",icon:"none",mask:!0});else if(this.huifuid&&1==this.huifu){var n=this.plnr.substring(0,this.plnr.indexOf(":")+1),s=this.plnr.replace(n,"");t.request({method:"POST",url:"https://api.angeli.top/post.php?type=hfpl",data:{id:this.huifuid,txt:s,postid:this.postid,uid:this.pluid,auid:i.default.userinfo.Auid},header:{"content-type":"application/x-www-form-urlencoded",Cookie:i.default.cookie},success:function(o){"1"==o.data.code&&(e.setvar="",t.request({method:"GET",url:"https://api.angeli.top/post.php?type=getpl",data:{postid:e.postid},header:{"content-type":"application/x-www-form-urlencoded",Cookie:i.default.cookie},success:function(t){console.log("————————————评论详情——————————"),e.pllist=t.data.data,console.log(e.pllist)}})),t.showToast({title:o.data.msg,position:"bottom",icon:"none",duration:2e3,mask:!0})}})}else t.request({method:"POST",url:"https://api.angeli.top/post.php?type=pl",data:{auid:i.default.userinfo.Auid,txt:this.plnr,postid:this.postid},header:{"content-type":"application/x-www-form-urlencoded",Cookie:i.default.cookie},success:function(o){"1"==o.data.code&&(e.setvar="",t.request({method:"GET",url:"https://api.angeli.top/post.php?type=getpl",data:{postid:e.postid},header:{"content-type":"application/x-www-form-urlencoded",Cookie:i.default.cookie},success:function(t){console.log("————————————评论详情——————————"),e.pllist=t.data.data,console.log(e.pllist)}})),t.showToast({title:o.data.msg,position:"bottom",icon:"none",duration:2e3,mask:!0})}});else t.showToast({title:"请输入评论内容！",position:"bottom",icon:"none",mask:!0})},dianzan:function(o,e){var n=this;console.log("点赞"),t.request({method:"GET",url:"https://api.angeli.top/post.php?type=dianzan",data:{postid:o},header:{"content-type":"application/x-www-form-urlencoded",Cookie:i.default.cookie},success:function(o){if("1"==o.data.code){var i=n.pllist[e].Give;console.log(i),i++,console.log(i),n.$set(n.pllist[e],"Give",i)}t.showToast({title:o.data.msg,position:"bottom",icon:"none",duration:2e3})}})},huifua:function(t,o,e,i){this.huifuid=t,this.setvar="@"+o+": ",this.huifu=!0,this.pluid=i,console.log("回复",t,o)}}};o.default=s}).call(this,e("543d")["default"])},e515:function(t,o,e){},fd48:function(t,o,e){"use strict";var i=function(){var t=this,o=t.$createElement;t._self._c},n=[];e.d(o,"a",function(){return i}),e.d(o,"b",function(){return n})}},[["6c37","common/runtime","common/vendor"]]]);