(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/Home/Home"],{"615c":function(e,t,o){"use strict";o.r(t);var n=o("ffc3"),a=o("bc13");for(var s in a)"default"!==s&&function(e){o.d(t,e,function(){return a[e]})}(s);o("9871");var i=o("2877"),u=Object(i["a"])(a["default"],n["a"],n["b"],!1,null,null,null);t["default"]=u.exports},8506:function(e,t,o){"use strict";(function(e){o("7e16"),o("921b");n(o("66fd"));var t=n(o("615c"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,o("6e42")["createPage"])},9871:function(e,t,o){"use strict";var n=o("a91e"),a=o.n(n);a.a},a91e:function(e,t,o){},ac23:function(e,t,o){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=s(o("26f4"));function s(e){return e&&e.__esModule?e:{default:e}}function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var u=function(){return o.e("components/uni-load-more").then(o.bind(null,"caa8"))},l={components:{uniLoadMore:u},data:function(){return{Dindex:[],CustomBar:this.CustomBar,modalName:null,AvatarUrl:"",TabCur:0,showAppFenxiang:!1,gaodu:0,msgNumber:0,weikong:!0,username:"游客",page:1,postList:[],scrollTop:0,showYs:!1,old:{scrollTop:0},status:"loading",statusTypes:[{value:"more",text:"加载前",checked:!0},{value:"loading",text:"加载中",checked:!1},{value:"noMore",text:"我是有底线的",checked:!1}],contentText:{contentdown:"查看更多",contentrefresh:"加载中",contentnomore:"我是有底线的"},zhongcao:"0",guanzhu:"0",userid:"0",fensi:"0",dengji:"0",tuijianren:0,systemConfig:"",index:!1,userInfo:[],postype:"new",menuList:["分享给朋友","生成海报","举报"],openmenu:!1,shebei:"",iosapy:"no",jubao:{postid:0,authorid:0},jubaoliyou:"",showJubao:!1}},onPullDownRefresh:function(){console.log(e("下拉刷新"," at pages\\Home\\Home.vue:367"))},onShow:function(){var t=this;try{a.default.token=n.getStorageSync("token"),a.default.token&&console.log(e("赋值后的Token："+a.default.token,a.default.token," at pages\\Home\\Home.vue:378"))}catch(o){n.showToast({title:"身份已失效，请重新登录",position:"bottom",icon:"none"}),console.log(e(o," at pages\\Home\\Home.vue:386"))}try{a.default.userinfo=n.getStorageSync("user"),a.default.userinfo&&console.log(e("赋值后的userinfo："+a.default.userinfo,a.default.userinfo," at pages\\Home\\Home.vue:392"))}catch(o){n.showToast({title:"身份已失效，请重新登录",position:"bottom",icon:"none"}),console.log(e(o," at pages\\Home\\Home.vue:400"))}n.request({method:"GET",url:"https://api.angeli.top/user.php?type=getMyNoRead",data:{auid:this.userid,token:a.default.token},header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){t.iosapy=e.data.data.pay,"1"==e.data.code&&(t.msgNumber=e.data.data.count)}}),n.request({method:"GET",url:"https://api.angeli.top/user.php?type=getMyinfo",data:{auid:this.userid,token:a.default.token},header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){"1"==e.data.code?(t.AvatarUrl=e.data.data.AvatarUrl,t.username=e.data.data.UserName,t.zhongcao=e.data.data.ZhongcaoCount,t.guanzhu=e.data.data.FollowedCount,t.fensi=e.data.data.FollowerCount,t.dengji=e.data.data.Rank,t.userid=e.data.data.Auid,t.userInfo=e.data.data,a.default.userinfo=e.data.data):(t.AvatarUrl="https://c-ssl.duitang.com/uploads/item/201807/01/20180701122340_uxlwc.thumb.700_0.jpeg",t.username="未登录",t.zhongcao=0,t.guanzhu=0,t.fensi=0,t.dengji=0,t.userid=0,t.userInfo=null)}})},onLoad:function(t){try{a.default.token=n.getStorageSync("token"),a.default.token&&console.log(e("赋值后的Token："+a.default.token,a.default.token," at pages\\Home\\Home.vue:467"))}catch(t){n.showToast({title:"身份已失效，请重新登录",position:"bottom",icon:"none"})}try{a.default.userinfo=n.getStorageSync("user"),a.default.userinfo&&console.log(e("赋值后的userinfo："+a.default.userinfo,a.default.userinfo," at pages\\Home\\Home.vue:481"))}catch(t){console.log(e(t," at pages\\Home\\Home.vue:484"))}var o=n.getStorageSync("showYs");"1"!=o&&(this.showYs=!0),a.default.update||setTimeout(this.getVersion,4e3),a.default.token||n.redirectTo({url:"../reg/reg"}),this.shebei=n.getSystemInfoSync().platform,n.getSystemInfo({success:function(t){var o={phonebrand:t.brand+t.model,phonesystem:t.system};a.default.system=JSON.stringify(o),console.log(e(a.default.system," at pages\\Home\\Home.vue:519"))}}),this.tuijianren=t.tuijianid,a.default.tgid=this.tuijianren,this.postList=[],console.log(e("推荐人ID",this.tuijianren," at pages\\Home\\Home.vue:525")),this.getPostData("new",0),this.getSysConfig("home_txt"),this.shebei=n.getSystemInfoSync().platform,console.log(e(this.shebei," at pages\\Home\\Home.vue:640")),console.log(e(a.default.token," at pages\\Home\\Home.vue:642"))},onReady:function(){this.getHei()},methods:{gethuodong:function(){n.navigateTo({url:"../menu/huodong"})},goys:function(){n.navigateTo({url:"../edit/edit?type=5"})},appFenxiang:function(t,o){switch(t){case 0:this.showAppFenxiang=!1;break;case 1:n.setClipboardData({data:"http://share.angeli.top/?postId="+this.postid,success:function(){console.log(e("success"," at pages\\Home\\Home.vue:667"))}}),console.log(e("复制链接"," at pages\\Home\\Home.vue:670"));break;case 2:console.log(e(this.Dindex.PictureId[0]," at pages\\Home\\Home.vue:673")),console.log(e(this.Dindex.Content," at pages\\Home\\Home.vue:674")),console.log(e("http://share.angeli.top/?postId="+this.Dindex.PostsId," at pages\\Home\\Home.vue:675")),n.share({provider:"weixin",scene:"WXSceneSession",type:5,imageUrl:this.Dindex.PictureId[0],title:this.Dindex.Content,miniProgram:{id:"gh_a38adc10b952",path:"pages/postinfo/postinfo?id="+this.Dindex.PostsId,type:0,webUrl:"http://share.angeli.top/?postId="+this.Dindex.PostsId},success:function(t){console.log(e(JSON.stringify(t)," at pages\\Home\\Home.vue:689"))},fail:function(t){console.log(e("fail:"+JSON.stringify(t)," at pages\\Home\\Home.vue:692"))}});break;case 3:n.share({provider:"weixin",scene:"WXSenceTimeline",type:0,href:"http://share.angeli.top/?postId="+this.Dindex.PostsId,title:this.Dindex.Content,summary:this.Dindex.Content,imageUrl:this.Dindex.PictureId[0],success:function(t){console.log(e("success:"+JSON.stringify(t)," at pages\\Home\\Home.vue:706"))},fail:function(t){console.log(e("fail:"+JSON.stringify(t)," at pages\\Home\\Home.vue:709"))}});break;case 4:n.share({provider:"qq",type:1,href:"http://share.angeli.top/?postId="+this.Dindex.PostsId,summary:this.Dindex.Content,title:this.Dindex.Content,imageUrl:this.Dindex.PictureId[0],success:function(t){console.log(e("success:"+JSON.stringify(t)," at pages\\Home\\Home.vue:722"))},fail:function(t){console.log(e("fail:"+JSON.stringify(t)," at pages\\Home\\Home.vue:725"))}});break;default:}},getVersion:function(){n.request({method:"GET",url:"https://api.angeli.top/post.php?type=getVersion",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){console.log(e(t," at pages\\Home\\Home.vue:741")),"1"==t.data.code&&a.default.Version<t.data.data.version&&(console.log(e(t.data.data," at pages\\Home\\Home.vue:744")),n.showModal({title:"应用更新",content:"发现安个利新版本，是否安装升级？",success:function(o){o.confirm&&(console.log(e(t.data.data.downloadUrl," at pages\\Home\\Home.vue:750")),plus.runtime.openURL(t.data.data.downloadUrl),a.default.update=!0)}}))}})},sendjubao:function(){this.$jubao(this.jubao.postid,a.default.userinfo.Auid,this.jubao.authorid,this.jubaoliyou),this.showJubao=!1,n.showToast({title:"举报成功",position:"bottom",icon:"none"})},plusbutton:function(){this.openmenu=!this.openmenu},guanzhua:function(){n.navigateTo({url:"../menu/guanzhu"})},jubaoliyouinput:function(e){this.jubaoliyou=e.target.value},fensia:function(){n.navigateTo({url:"../menu/newFans"})},aotuloding:function(){n.showToast(i({title:"刚刚出现问题，已经为你修复",position:"bottom",icon:"none"},"position","center")),this.getPostData("new",0)},getshop:function(){n.navigateTo({url:"../edit/edit?type=shop"})},getSysConfig:function(t){var o=this;n.request({method:"GET",url:"https://api.angeli.top/user.php?type=getSysConfig",data:{configName:t,token:a.default.token},header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){console.log(e(t," at pages\\Home\\Home.vue:813")),"1"==t.data.code&&(o.systemConfig=t.data.data,t.data.data?o.modalName="DialogModal2":o.modalName=""),console.log(e(o.msgNumber," at pages\\Home\\Home.vue:822"))},complete:function(){}})},getFriend:function(){n.navigateTo({url:"../menu/friend"})},getbieren:function(e){e==a.default.userinfo.Auid?n.navigateTo({url:"../i/i"}):n.navigateTo({url:"../i/bieren?auid="+e})},getShoucang:function(){n.navigateTo({url:"../menu/shoucang"})},getJifen:function(){n.navigateTo({url:"../menu/jifen"})},getMessage:function(){n.navigateTo({url:"../menu/Message"})},wallet:function(){n.navigateTo({url:"../menu/wallet"})},set:function(){n.navigateTo({url:"../set/set"})},logout:function(){n.clearStorage(),n.showToast(i({title:"已退出登录",position:"bottom",icon:"none"},"position","center")),a.default.userinfo=[],a.default.cookie="",this.modalName=null},cs:function(e){this.old.scrollTop=e.detail.scrollTop},sousuo:function(){n.navigateTo({url:"../sousuo/sousuo"})},getClass:function(e){n.navigateTo({url:"../classPost/classPost?id="+e})},showModal:function(t){var o=this;this.modalName=t.currentTarget.dataset.target,this.AvatarUrl=a.default.userinfo.AvatarUrl,this.username=a.default.userinfo.UserName,this.zhongcao=a.default.userinfo.ZhongcaoCount,this.guanzhu=a.default.userinfo.FollowedCount,this.fensi=a.default.userinfo.FollowerCount,this.dengji=a.default.userinfo.Rank,this.userid=a.default.userinfo.Auid,console.log(e("测试！：",this.username," at pages\\Home\\Home.vue:905")),n.request({method:"GET",url:"https://api.angeli.top/user.php?type=getMyNoRead",data:{auid:this.userid,token:a.default.token},header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){console.log(e(t," at pages\\Home\\Home.vue:918")),"1"==t.data.code?o.msgNumber=t.data.data.count:(n.navigateTo({url:"../reg/reg"}),o.AvatarUrl="https://c-ssl.duitang.com/uploads/item/201807/01/20180701122340_uxlwc.thumb.700_0.jpeg",o.username="未登录",o.zhongcao=0,o.guanzhu=0,o.fensi=0,o.dengji=0,o.userid=0,o.userInfo=null),console.log(e(o.msgNumber," at pages\\Home\\Home.vue:934"))},complete:function(){}})},hideModal:function(e){this.modalName=null,this.showYs=!1,n.setStorageSync("showYs","1")},tabSelect:function(t){this.TabCur=t,this.scrollTop=this.old.scrollTop,this.$nextTick(function(){this.scrollTop=0}),console.log(e(t," at pages\\Home\\Home.vue:952")),0==t?(this.getPostData("new",0),this.postype="new"):1==t?(this.postype="hot",this.getPostData("hot",0)):2==t&&(this.postype="guanzhu",this.getPostData("guanzhu",0))},Like:function(e,t,o,s,i){var u=this;if(""==a.default.token||null==a.default.token)return n.showToast({title:"你还没有登录，请登录后再来吧",position:"bottom",icon:"none"}),void setTimeout(function(){n.navigateTo({url:"../reg/reg"})},1200);if(t!=a.default.userinfo.Auid){if(!0===o)var l="del";else l="add";n.request({method:"GET",url:"https://api.angeli.top/post.php?type=Like",data:{fuid:t,postid:e,mode:l,token:a.default.token},header:{"content-type":"application/x-www-form-urlencoded",system:a.default.system},success:function(e){"1"==e.data.code?("add"==l?(u.postList[s].ZhongcaoCount=Number(i)+1,u.postList[s].Give=!0,n.showToast({title:"种草成功！",position:"bottom",icon:"none"})):(u.postList[s].ZhongcaoCount=Number(i)-1,u.postList[s].Give=!1,n.showToast({title:"取消种草成功！",position:"bottom",icon:"none"})),u.$forceUpdate()):n.showToast({title:"种草失败！",position:"bottom",icon:"none"})},complete:function(){}})}else n.showToast({title:"不能给自己种草",position:"bottom",icon:"none"})},caidan:function(t){var o=this;console.log(e(t," at pages\\Home\\Home.vue:1043")),this.Dindex=t,t.AuthorId==a.default.userinfo.Auid?this.menuList=["分享","举报","删除帖子"]:this.menuList=["分享","举报"],n.showActionSheet({itemList:this.menuList,success:function(e){switch(e.tapIndex){case 0:o.showAppFenxiang=!0;break;case 1:o.showJubao=!0,o.jubao.postid=t.PostsId,o.jubao.authorid=t.AuthorId;break;case 2:o.$delPost(t.PostsId);break;default:}},fail:function(t){console.log(e(t.errMsg," at pages\\Home\\Home.vue:1072"))}})},getHei:function(){var t=this,o=n.createSelectorQuery().select("#topbox");o.fields({size:!0,scrollOffset:!0},function(o){t.gaodu=o.height-5,console.log(e("总高度："+t.gaodu," at pages\\Home\\Home.vue:1084"))}).exec()},showImage:function(t,o){var a=t[o];n.previewImage({current:o,urls:t,longPressActions:{itemList:["保存图片"],success:function(t){n.downloadFile({url:a,success:function(t){console.log(e(t," at pages\\Home\\Home.vue:1099")),200===t.statusCode?n.saveImageToPhotosAlbum({filePath:t.tempFilePath,success:function(){n.showToast({title:"已保存",position:"bottom",icon:"none"})}}):n.showToast({title:"保存失败",position:"bottom",icon:"none"})}})},fail:function(t){console.log(e(t.errMsg," at pages\\Home\\Home.vue:1123"))}}})},getPostData:function(t,o){var s=this;console.log(e(t," at pages\\Home\\Home.vue:1129")),this.page=1,n.request({method:"GET",url:"https://api.angeli.top/post.php?type=outPostList",data:{page:1,postType:t,count:10,classId:o,token:a.default.token},header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){s.postList=[],console.log(e(t.data.data," at pages\\Home\\Home.vue:1147")),console.log(e("————————————帖子列表——————————"," at pages\\Home\\Home.vue:1148")),s.postList=t.data.data,console.log(e(s.postList," at pages\\Home\\Home.vue:1150")),s.weikong=!1,"1"!==t.data.code&&n.showToast({title:"获取帖子失败，建议重启",position:"bottom",icon:"none"}),0==t.data.data&&(s.weikong=!0)},complete:function(){s.$forceUpdate()}})},reguser:function(){"未登录"==this.username?n.navigateTo({url:"../reg/reg"}):n.navigateTo({url:"../i/i"})},getVip:function(){n.navigateTo({url:"../vip/vip"})},pluspost:function(){console.log(e("发帖：",a.default.userinfo.Auid," at pages\\Home\\Home.vue:1187")),""==a.default.token||null==a.default.token?(n.showToast({title:"你还没有登录，请登录后再来吧",position:"bottom",icon:"none"}),setTimeout(function(){n.navigateTo({url:"../reg/reg"})},1200)):n.navigateTo({url:"../post/post"})},EndLoding:function(t){var o=this;this.page++,console.log(e(this.scrollTop," at pages\\Home\\Home.vue:1208")),n.request({method:"GET",url:"https://api.angeli.top/post.php?type=outPostList",data:{page:this.page,postType:this.postype,sort:"PsotDate",count:10,token:a.default.token},header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){console.log(e("————————————帖子列表——————————"+o.page," at pages\\Home\\Home.vue:1223")),void 0==t.data.data.length?(o.page--,o.status="noMore"):(o.postList=o.postList.concat(t.data.data),o.status="loading",console.log(e(o.postList," at pages\\Home\\Home.vue:1230")))}})},getpostinfo:function(e){n.navigateTo({url:"../postinfo/postinfo?id="+e})}},onShareAppMessage:function(t){return"button"===t.from&&console.log(e(t.target," at pages\\Home\\Home.vue:1245")),{title:"超级无敌安个利",path:"/pages/Home/Home",desc:"超级无敌安个利"}}};t.default=l}).call(this,o("0de9")["default"],o("6e42")["default"])},bc13:function(e,t,o){"use strict";o.r(t);var n=o("ac23"),a=o.n(n);for(var s in n)"default"!==s&&function(e){o.d(t,e,function(){return n[e]})}(s);t["default"]=a.a},ffc3:function(e,t,o){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c;e._isMounted||(e.e0=function(t){e.showJubao=!1})},a=[];o.d(t,"a",function(){return n}),o.d(t,"b",function(){return a})}},[["8506","common/runtime","common/vendor"]]]);