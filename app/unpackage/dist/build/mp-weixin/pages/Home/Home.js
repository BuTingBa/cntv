(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/Home/Home"],{"615c":function(t,o,e){"use strict";e.r(o);var n=e("ffc3"),s=e("bc13");for(var a in s)"default"!==a&&function(t){e.d(o,t,function(){return s[t]})}(a);e("9871");var i=e("2877"),u=Object(i["a"])(s["default"],n["a"],n["b"],!1,null,null,null);o["default"]=u.exports},8506:function(t,o,e){"use strict";(function(t){e("7e16"),e("921b");n(e("66fd"));var o=n(e("615c"));function n(t){return t&&t.__esModule?t:{default:t}}t(o.default)}).call(this,e("543d")["createPage"])},9871:function(t,o,e){"use strict";var n=e("a91e"),s=e.n(n);s.a},a91e:function(t,o,e){},ac23:function(t,o,e){"use strict";(function(t){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var n=s(e("26f4"));function s(t){return t&&t.__esModule?t:{default:t}}function a(t,o,e){return o in t?Object.defineProperty(t,o,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[o]=e,t}var i=function(){return e.e("components/uni-load-more").then(e.bind(null,"caa8"))},u={components:{uniLoadMore:i},data:function(){return{Dindex:[],CustomBar:this.CustomBar,modalName:null,AvatarUrl:"",TabCur:0,showAppFenxiang:!1,gaodu:0,msgNumber:0,weikong:!0,username:"游客",page:1,postList:[],scrollTop:0,showYs:!1,old:{scrollTop:0},status:"loading",statusTypes:[{value:"more",text:"加载前",checked:!0},{value:"loading",text:"加载中",checked:!1},{value:"noMore",text:"我是有底线的",checked:!1}],contentText:{contentdown:"查看更多",contentrefresh:"加载中",contentnomore:"我是有底线的"},zhongcao:"0",guanzhu:"0",userid:"0",fensi:"0",dengji:"0",tuijianren:0,systemConfig:"",index:!1,userInfo:[],postype:"new",menuList:["分享给朋友","生成海报","举报"],openmenu:!1,shebei:"",iosapy:"no",jubao:{postid:0,authorid:0},jubaoliyou:"",showJubao:!1}},onPullDownRefresh:function(){console.log("下拉刷新")},onShow:function(){var o=this;t.request({method:"GET",url:"https://api.angeli.top/user.php?type=getMyNoRead",data:{auid:this.userid,token:n.default.token},header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){o.iosapy=t.data.data.pay,"1"==t.data.code&&(o.msgNumber=t.data.data.count)}})},onLoad:function(o){var e=this;this.shebei=t.getSystemInfoSync().platform,t.getSystemInfo({success:function(t){var o={phonebrand:t.brand+t.model,phonesystem:t.system};n.default.system=JSON.stringify(o),console.log(n.default.system)}}),this.tuijianren=o.tuijianid,n.default.tgid=this.tuijianren,this.postList=[],console.log("推荐人ID",this.tuijianren),""==n.default.token||null==n.default.token?t.login({provider:"weixin",success:function(o){console.log(o),t.request({method:"POST",url:"https://api.angeli.top/reg.php?type=wxlogin",data:{code:o.code,tuijianId:e.tuijianren},header:{"content-type":"application/x-www-form-urlencoded",system:n.default.system},success:function(o){console.log(o),"0"==o.data.code?(n.default.usersk=o.data.data.session_key,t.showToast({title:"欢迎你，游客",position:"bottom",icon:"none"}),e.AvatarUrl="https://sz.oss.data.angeli.top/angeli-image/1562320238188110.png"):"1"!=o.data.code&&"2"!=o.data.code||(e.AvatarUrl=o.data.data.AvatarUrl,e.username=o.data.data.UserName,e.zhongcao=o.data.data.ZhongcaoCount,e.guanzhu=o.data.data.FollowedCount,e.fensi=o.data.data.FollowerCount,e.dengji=o.data.data.Rank,e.userid=o.data.data.Auid,e.userInfo=o.data.data,n.default.token=o.data.token,n.default.userinfo=o.data.data,"2"==o.data.code?t.showToast({title:o.data.msg,position:"bottom",icon:"none"}):e.userInfo.VIPEndTime>0?t.showToast({title:"欢迎VIP："+e.username,position:"bottom",icon:"none"}):(t.showToast({title:"欢迎你,"+e.username,position:"bottom",icon:"none"}),e.getPostData("new",0)))},complete:function(){e.getPostData("new",0)},fail:function(o){t.showToast({title:"未知原因，登录失败！",position:"bottom",icon:"none"}),e.getPostData("new",0)}})},fail:function(o){t.showToast({title:"登录失败呢！关闭之后重新打开吧！",position:"bottom"}),console.error("授权登录失败："+JSON.stringify(o)),e.getPostData("new",0)}}):(n.default.userinfo.VIPEndTime>0?t.showToast({title:"欢迎VIP："+n.default.userinfo.username,position:"bottom",icon:"none"}):t.showToast({title:"欢迎你,"+n.default.userinfo.username,position:"bottom",icon:"none"}),this.getPostData("new",0)),this.getSysConfig("home_txt"),this.shebei=t.getSystemInfoSync().platform,console.log(this.shebei),console.log(n.default.token)},onReady:function(){this.getHei()},methods:{gethuodong:function(){t.navigateTo({url:"../menu/huodong"})},goys:function(){t.navigateTo({url:"../edit/edit?type=5"})},appFenxiang:function(o,e){switch(o){case 0:this.showAppFenxiang=!1;break;case 1:t.setClipboardData({data:"http://share.angeli.top/?postId="+this.postid,success:function(){console.log("success")}}),console.log("复制链接");break;case 2:console.log(this.Dindex.PictureId[0]),console.log(this.Dindex.Content),console.log("http://share.angeli.top/?postId="+this.Dindex.PostsId),t.share({provider:"weixin",scene:"WXSceneSession",type:5,imageUrl:this.Dindex.PictureId[0],title:this.Dindex.Content,miniProgram:{id:"gh_a38adc10b952",path:"pages/postinfo/postinfo?id="+this.Dindex.PostsId,type:0,webUrl:"http://share.angeli.top/?postId="+this.Dindex.PostsId},success:function(t){console.log(JSON.stringify(t))},fail:function(t){console.log("fail:"+JSON.stringify(t))}});break;case 3:t.share({provider:"weixin",scene:"WXSenceTimeline",type:0,href:"http://share.angeli.top/?postId="+this.Dindex.PostsId,title:this.Dindex.Content,summary:this.Dindex.Content,imageUrl:this.Dindex.PictureId[0],success:function(t){console.log("success:"+JSON.stringify(t))},fail:function(t){console.log("fail:"+JSON.stringify(t))}});break;case 4:t.share({provider:"qq",type:1,href:"http://share.angeli.top/?postId="+this.Dindex.PostsId,summary:this.Dindex.Content,title:this.Dindex.Content,imageUrl:this.Dindex.PictureId[0],success:function(t){console.log("success:"+JSON.stringify(t))},fail:function(t){console.log("fail:"+JSON.stringify(t))}});break;default:}},getVersion:function(){t.request({method:"GET",url:"https://api.angeli.top/post.php?type=getVersion",header:{"content-type":"application/x-www-form-urlencoded"},success:function(o){console.log(o),"1"==o.data.code&&n.default.Version<o.data.data.version&&(console.log(o.data.data),t.showModal({title:"应用更新",content:"发现安个利新版本，是否安装升级？",success:function(t){t.confirm&&(console.log(o.data.data.downloadUrl),plus.runtime.openURL(o.data.data.downloadUrl),n.default.update=!0)}}))}})},sendjubao:function(){this.$jubao(this.jubao.postid,n.default.userinfo.Auid,this.jubao.authorid,this.jubaoliyou),this.showJubao=!1,t.showToast({title:"举报成功",position:"bottom",icon:"none"})},plusbutton:function(){this.openmenu=!this.openmenu},guanzhua:function(){t.navigateTo({url:"../menu/guanzhu"})},jubaoliyouinput:function(t){this.jubaoliyou=t.target.value},fensia:function(){t.navigateTo({url:"../menu/newFans"})},aotuloding:function(){t.showToast(a({title:"刚刚出现问题，已经为你修复",position:"bottom",icon:"none"},"position","center")),this.getPostData("new",0)},getshop:function(){t.navigateTo({url:"../edit/edit?type=shop"})},getSysConfig:function(o){var e=this;t.request({method:"GET",url:"https://api.angeli.top/user.php?type=getSysConfig",data:{configName:o,token:n.default.token},header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){console.log(t),"1"==t.data.code&&(e.systemConfig=t.data.data,t.data.data?e.modalName="DialogModal2":e.modalName=""),console.log(e.msgNumber)},complete:function(){}})},getFriend:function(){t.navigateTo({url:"../menu/friend"})},getbieren:function(o){o==n.default.userinfo.Auid?t.navigateTo({url:"../i/i"}):t.navigateTo({url:"../i/bieren?auid="+o})},getShoucang:function(){t.navigateTo({url:"../menu/shoucang"})},getJifen:function(){t.navigateTo({url:"../menu/jifen"})},getMessage:function(){t.navigateTo({url:"../menu/Message"})},wallet:function(){t.navigateTo({url:"../menu/wallet"})},set:function(){t.navigateTo({url:"../set/set"})},logout:function(){t.clearStorage(),t.showToast(a({title:"已退出登录",position:"bottom",icon:"none"},"position","center")),n.default.userinfo=[],n.default.cookie="",this.modalName=null},cs:function(t){this.old.scrollTop=t.detail.scrollTop},sousuo:function(){t.navigateTo({url:"../sousuo/sousuo"})},getClass:function(o){t.navigateTo({url:"../classPost/classPost?id="+o})},showModal:function(o){var e=this;this.modalName=o.currentTarget.dataset.target,this.AvatarUrl=n.default.userinfo.AvatarUrl,this.username=n.default.userinfo.UserName,this.zhongcao=n.default.userinfo.ZhongcaoCount,this.guanzhu=n.default.userinfo.FollowedCount,this.fensi=n.default.userinfo.FollowerCount,this.dengji=n.default.userinfo.Rank,this.userid=n.default.userinfo.Auid,console.log("测试！：",this.username),t.request({method:"GET",url:"https://api.angeli.top/user.php?type=getMyNoRead",data:{auid:this.userid,token:n.default.token},header:{"content-type":"application/x-www-form-urlencoded"},success:function(o){console.log(o),"1"==o.data.code?e.msgNumber=o.data.data.count:(t.navigateTo({url:"../reg/reg"}),e.AvatarUrl="https://c-ssl.duitang.com/uploads/item/201807/01/20180701122340_uxlwc.thumb.700_0.jpeg",e.username="未登录",e.zhongcao=0,e.guanzhu=0,e.fensi=0,e.dengji=0,e.userid=0,e.userInfo=null),console.log(e.msgNumber)},complete:function(){}})},hideModal:function(o){this.modalName=null,this.showYs=!1,t.setStorageSync("showYs","1")},tabSelect:function(t){this.TabCur=t,this.scrollTop=this.old.scrollTop,this.$nextTick(function(){this.scrollTop=0}),console.log(t),0==t?(this.getPostData("new",0),this.postype="new"):1==t?(this.postype="hot",this.getPostData("hot",0)):2==t&&(this.postype="guanzhu",this.getPostData("guanzhu",0))},Like:function(o,e,s,a,i){var u=this;if(""==n.default.token||null==n.default.token)return t.showToast({title:"你还没有登录，请登录后再来吧",position:"bottom",icon:"none"}),void setTimeout(function(){t.navigateTo({url:"../reg/reg"})},1200);if(e!=n.default.userinfo.Auid){if(!0===s)var l="del";else l="add";t.request({method:"GET",url:"https://api.angeli.top/post.php?type=Like",data:{fuid:e,postid:o,mode:l,token:n.default.token},header:{"content-type":"application/x-www-form-urlencoded",system:n.default.system},success:function(o){"1"==o.data.code?("add"==l?(u.postList[a].ZhongcaoCount=Number(i)+1,u.postList[a].Give=!0,t.showToast({title:"种草成功！",position:"bottom",icon:"none"})):(u.postList[a].ZhongcaoCount=Number(i)-1,u.postList[a].Give=!1,t.showToast({title:"取消种草成功！",position:"bottom",icon:"none"})),u.$forceUpdate()):t.showToast({title:"种草失败！",position:"bottom",icon:"none"})},complete:function(){}})}else t.showToast({title:"不能给自己种草",position:"bottom",icon:"none"})},caidan:function(o){var e=this;console.log(o),this.Dindex=o,o.AuthorId==n.default.userinfo.Auid?this.menuList=["分享","举报","删除帖子"]:this.menuList=["分享","举报"],t.showActionSheet({itemList:this.menuList,success:function(t){switch(t.tapIndex){case 0:e.showAppFenxiang=!0;break;case 1:e.showJubao=!0,e.jubao.postid=o.PostsId,e.jubao.authorid=o.AuthorId;break;case 2:e.$delPost(o.PostsId);break;default:}},fail:function(t){console.log(t.errMsg)}})},getHei:function(){var o=this,e=t.createSelectorQuery().select("#topbox");e.fields({size:!0,scrollOffset:!0},function(t){o.gaodu=t.height-5,console.log("总高度："+o.gaodu)}).exec()},showImage:function(o,e){var n=o[e];t.previewImage({current:e,urls:o,longPressActions:{itemList:["保存图片"],success:function(o){t.downloadFile({url:n,success:function(o){console.log(o),200===o.statusCode?t.saveImageToPhotosAlbum({filePath:o.tempFilePath,success:function(){t.showToast({title:"已保存",position:"bottom",icon:"none"})}}):t.showToast({title:"保存失败",position:"bottom",icon:"none"})}})},fail:function(t){console.log(t.errMsg)}}})},getPostData:function(o,e){var s=this;console.log(o),this.page=1,t.request({method:"GET",url:"https://api.angeli.top/post.php?type=outPostList",data:{page:1,postType:o,count:10,classId:e,token:n.default.token},header:{"content-type":"application/x-www-form-urlencoded"},success:function(o){s.postList=[],console.log(o.data.data),console.log("————————————帖子列表——————————"),s.postList=o.data.data,console.log(s.postList),s.weikong=!1,"1"!==o.data.code&&t.showToast({title:"获取帖子失败，建议重启",position:"bottom",icon:"none"}),0==o.data.data&&(s.weikong=!0)},complete:function(){s.$forceUpdate()}})},reguser:function(){"未登录"==this.username?t.navigateTo({url:"../reg/reg"}):t.navigateTo({url:"../i/i"})},getVip:function(){t.navigateTo({url:"../vip/vip"})},pluspost:function(){console.log("发帖：",n.default.userinfo.Auid),""==n.default.token||null==n.default.token?(t.showToast({title:"你还没有登录，请登录后再来吧",position:"bottom",icon:"none"}),setTimeout(function(){t.navigateTo({url:"../reg/reg"})},1200)):t.navigateTo({url:"../post/post"})},EndLoding:function(o){var e=this;this.page++,console.log(this.scrollTop),t.request({method:"GET",url:"https://api.angeli.top/post.php?type=outPostList",data:{page:this.page,postType:this.postype,sort:"PsotDate",count:10,token:n.default.token},header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){console.log("————————————帖子列表——————————"+e.page),void 0==t.data.data.length?(e.page--,e.status="noMore"):(e.postList=e.postList.concat(t.data.data),e.status="loading",console.log(e.postList))}})},getpostinfo:function(o){t.navigateTo({url:"../postinfo/postinfo?id="+o})}},onShareAppMessage:function(t){return"button"===t.from&&console.log(t.target),{title:"超级无敌安个利",path:"/pages/Home/Home",desc:"超级无敌安个利"}}};o.default=u}).call(this,e("543d")["default"])},bc13:function(t,o,e){"use strict";e.r(o);var n=e("ac23"),s=e.n(n);for(var a in n)"default"!==a&&function(t){e.d(o,t,function(){return n[t]})}(a);o["default"]=s.a},ffc3:function(t,o,e){"use strict";var n=function(){var t=this,o=t.$createElement;t._self._c;t._isMounted||(t.e0=function(o){t.showJubao=!1})},s=[];e.d(o,"a",function(){return n}),e.d(o,"b",function(){return s})}},[["8506","common/runtime","common/vendor"]]]);