(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/postinfo/postinfo"],{"149e":function(t,o,e){"use strict";e.r(o);var i=e("c758"),n=e.n(i);for(var s in i)"default"!==s&&function(t){e.d(o,t,function(){return i[t]})}(s);o["default"]=n.a},2827:function(t,o,e){"use strict";var i=e("e290"),n=e.n(i);n.a},"2a87":function(t,o,e){"use strict";(function(t){e("7e16"),e("921b");i(e("66fd"));var o=i(e("bb4d"));function i(t){return t&&t.__esModule?t:{default:t}}t(o.default)}).call(this,e("543d")["createPage"])},"68d0":function(t,o,e){"use strict";var i=function(){var t=this,o=t.$createElement;t._self._c},n=[];e.d(o,"a",function(){return i}),e.d(o,"b",function(){return n})},bb4d:function(t,o,e){"use strict";e.r(o);var i=e("68d0"),n=e("149e");for(var s in n)"default"!==s&&function(t){e.d(o,t,function(){return n[t]})}(s);e("2827");var a=e("2877"),u=Object(a["a"])(n["default"],i["a"],i["b"],!1,null,null,null);o["default"]=u.exports},c758:function(t,o,e){"use strict";(function(t){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var i=n(e("26f4"));function n(t){return t&&t.__esModule?t:{default:t}}var s={data:function(){return{postInfo:[],pllist:[],dslist:[],showVip:!1,InputBottom:0,plnr:"",xzId:1,postid:"",setvar:"",Give:"0",huifu:!1,gaodu:"-710px",yanse:"rgba(0,0,0,0)",pluid:"",monnumber:1}},onShareAppMessage:function(t){return"button"===t.from&&console.log(t.target),{title:this.postInfo.Content,path:"/pages/postinfo/postinfo?id="+this.postid,desc:this.postInfo.Content,imageUrl:this.postInfo.PictureId[0]}},onLoad:function(o){var e=this;console.log(o.id),this.postid=o.id,this.getdsList(this.postid),t.showLoading({title:"加载中"}),t.request({method:"GET",url:"https://api.angeli.top/post.php?type=outPostInfo",data:{id:o.id},header:{"content-type":"application/x-www-form-urlencoded",Cookie:i.default.cookie},success:function(n){console.log("————————————帖子详情——————————"),e.postInfo=n.data.data,console.log(e.postInfo),t.request({method:"GET",url:"https://api.angeli.top/post.php?type=getpl",data:{postid:o.id},header:{"content-type":"application/x-www-form-urlencoded",Cookie:i.default.cookie},success:function(t){console.log("————————————评论详情——————————"),e.pllist=t.data.data,console.log(e.pllist)},complete:function(){t.hideLoading()}})},complete:function(){}}),console.log(this.dslist)},methods:{getClass:function(o){t.navigateTo({url:"../classPost/classPost?id="+o})},caidan:function(o){var e=this;console.log(o),this.Dindex=o,o.AuthorId==i.default.userinfo.Auid?this.menuList=["生成海报","举报","删除帖子"]:this.menuList=["生成海报","举报"],t.showActionSheet({itemList:this.menuList,success:function(n){switch(n.tapIndex){case 0:t.showToast({title:"生成海报还在内测中",position:"bottom",icon:"none"});break;case 1:t.showToast({title:"举报成功",position:"bottom",icon:"none"}),e.$jubao(o.PostsId,i.default.userinfo.Auid,o.AuthorId,"没有理由");break;case 2:t.showToast({title:"已删除",position:"bottom",icon:"none"}),e.$delPost(o.PostsId);break;default:}},fail:function(t){console.log(t.errMsg)}})},getbieren:function(o){o==i.default.userinfo.Auid?t.navigateTo({url:"../i/i"}):t.navigateTo({url:"../i/bieren?auid="+o})},getdsList:function(o){var e=this;t.request({method:"GET",url:"https://api.angeli.top/post.php?type=getDashangList&postId="+o,data:{},header:{"content-type":"application/x-www-form-urlencoded",Cookie:i.default.cookie},success:function(t){"1"==t.data.code?(e.dslist=t.data.data,console.log("打赏输出"),console.log(e.dslist),e.$forceUpdate()):e.dslist=0},complete:function(){}})},getList:function(){t.navigateTo({url:"dashang?id="+this.postid})},getDashang:function(){var o=this;this.postInfo.AuthorId!=i.default.userinfo.Auid?(console.log(this.monnumber),t.request({method:"GET",url:"https://api.angeli.top/post.php?type=dashang",data:{toid:this.postInfo.AuthorId,postid:this.postid,number:this.monnumber},header:{"content-type":"application/x-www-form-urlencoded",Cookie:i.default.cookie},success:function(e){"1"==e.data.code?(o.showVip=!1,o.gaodu="-710px",o.yanse="rgba(0,0,0,0)",t.showToast({title:"打赏成功！",position:"bottom",icon:"none"}),o.$forceUpdate()):t.showToast({title:e.data.msg,position:"bottom",icon:"none"})},complete:function(){}})):t.showToast({title:"不能给自己打赏",position:"bottom",icon:"none"})},hideVip:function(){this.showVip=!1,this.gaodu="-710px",this.yanse="rgba(0,0,0,0)"},xuanze:function(t){switch(t){case 1:this.monnumber=1;break;case 2:this.monnumber=5;break;case 3:this.monnumber=10;break;case 4:this.monnumber=20;break;default:this.monnumber=1;break}this.xzId=t},showKaitong:function(){this.showVip=!0,this.gaodu="0px",this.yanse="rgba(0,0,0,0.4)"},Like:function(o,e,n,s){var a=this;if(""==i.default.userinfo.Auid||null==i.default.userinfo.Auid)return t.showToast({title:"你还没有登录，请登录后再来吧",position:"bottom",icon:"none"}),void setTimeout(function(){t.navigateTo({url:"../reg/reg"})},1200);if(e!=i.default.userinfo.Auid){if(!0===n)var u="del";else u="add";t.request({method:"GET",url:"https://api.angeli.top/post.php?type=Like",data:{fuid:e,postid:o,mode:u},header:{"content-type":"application/x-www-form-urlencoded",Cookie:i.default.cookie},success:function(o){"1"==o.data.code?("add"==u?(a.postInfo.Give=!0,a.postInfo.ZhongcaoCount=Number(s)+1,t.showToast({title:"种草成功！",position:"bottom",icon:"none"})):(a.postInfo.Give=!1,a.postInfo.ZhongcaoCount=Number(s)-1,t.showToast({title:"取消种草成功！",position:"bottom",icon:"none"})),a.$forceUpdate()):t.showToast({title:"种草失败！",position:"bottom",icon:"none"})},complete:function(){}})}else t.showToast({title:"不能给自己种草",position:"bottom",icon:"none"})},InputFocus:function(t){this.InputBottom=t.detail.height},InputBlur:function(t){this.InputBottom=0},pinglun:function(t){this.plnr=t.target.value,0==this.plnr.indexOf("@")?this.huifu=!0:this.huifu=!1},onShareAppMessage:function(t){return"button"===t.from&&console.log(t.target),{title:this.postInfo.Content,path:"/pages/postinfo/postinfo?id="+this.postid,desc:this.postInfo.Content,imageUrl:this.postInfo.PictureId[0]}},showImage:function(o,e){t.previewImage({current:e,urls:o,longPressActions:{itemList:["发送给朋友","保存图片","收藏"],success:function(o){t.showToast({title:"选中了第"+(o.tapIndex+1)+"个按钮",position:"bottom",icon:"none"}),console.log("选中了第"+(o.tapIndex+1)+"个按钮")},fail:function(t){console.log(t.errMsg)}}})},sendpl:function(o){var e=this;if(console.log(this.plnr),"null"!=this.plnr&&""!=this.plnr)if(this.plnr.length>300||this.plnr.length<1)t.showToast({title:"内容最少1个字，最多300字",position:"bottom",icon:"none",mask:!0});else if(this.huifuid&&1==this.huifu){var n=this.plnr.substring(0,this.plnr.indexOf(":")+1),s=this.plnr.replace(n,"");t.showLoading({title:"正在提交数据"}),t.request({method:"POST",url:"https://api.angeli.top/post.php?type=hfpl",data:{id:this.huifuid,txt:s,postid:this.postid,uid:this.pluid,auid:i.default.userinfo.Auid},header:{"content-type":"application/x-www-form-urlencoded",Cookie:i.default.cookie},success:function(o){"1"==o.data.code&&(e.setvar="",t.request({method:"GET",url:"https://api.angeli.top/post.php?type=getpl",data:{postid:e.postid},header:{"content-type":"application/x-www-form-urlencoded",Cookie:i.default.cookie},success:function(t){console.log("————————————评论详情——————————"),e.pllist=t.data.data,e.plnr,console.log(e.pllist)}})),t.showToast({title:o.data.msg,position:"bottom",icon:"none",duration:2e3,mask:!0}),setTimeout(function(){t.hideLoading()},2e3)},complete:function(){t.hideLoading()}})}else t.showLoading({title:"正在提交数据"}),t.request({method:"POST",url:"https://api.angeli.top/post.php?type=pl",data:{auid:i.default.userinfo.Auid,txt:this.plnr,postid:this.postid,uid:this.postInfo.AuthorId},header:{"content-type":"application/x-www-form-urlencoded",Cookie:i.default.cookie},success:function(o){"1"==o.data.code&&(e.setvar="",t.request({method:"GET",url:"https://api.angeli.top/post.php?type=getpl",data:{postid:e.postid},header:{"content-type":"application/x-www-form-urlencoded",Cookie:i.default.cookie},success:function(t){console.log("————————————评论详情——————————"),e.pllist=t.data.data,console.log(e.pllist),e.plnr}})),t.showToast({title:o.data.msg,position:"bottom",icon:"none",duration:2e3,mask:!0}),setTimeout(function(){t.hideLoading()},2e3)},complete:function(){t.hideLoading()}});else t.showToast({title:"请输入评论内容！",position:"bottom",icon:"none",mask:!0})},dianzan:function(o,e){var n=this;console.log("点赞"),t.request({method:"GET",url:"https://api.angeli.top/post.php?type=dianzan",data:{postid:o},header:{"content-type":"application/x-www-form-urlencoded",Cookie:i.default.cookie},success:function(o){if("1"==o.data.code){var i=n.pllist[e].Give;console.log(i),i++,console.log(i),n.$set(n.pllist[e],"Give",i)}t.showToast({title:o.data.msg,position:"bottom",icon:"none",duration:2e3})}})},huifua:function(t,o,e,i){this.huifuid=t,this.setvar="@"+o+": ",this.huifu=!0,this.pluid=i,console.log("回复",t,o)}}};o.default=s}).call(this,e("543d")["default"])},e290:function(t,o,e){}},[["2a87","common/runtime","common/vendor"]]]);