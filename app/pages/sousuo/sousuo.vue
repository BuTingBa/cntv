<template>
	<view>
		<cu-custom bgColor="bg-white" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">搜索</block>
		</cu-custom>
		<view class="cu-bar bg-white search "  id="topbox" style="box-shadow:0 0rpx 0rpx rgba(0, 0, 0, 0.1);" >
			<view class="search-form round">
				<text class="cuIcon-search"></text>
				<input type="text" focus="true" placeholder="搜索帖子/用户" confirm-type="search" @input="input" @confirm="sososo"></input>
			</view>
			<view class="action anniu" @tap="sososo">
				搜索
			</view>
		</view>
		<!-- <view :style="[{height:gaodu+ 'px'}]"></view> -->
		<block v-if="home==true">
			<view class="Top">
				<view class="TopName">话题分类</view>
				<scroll-view class="lunbo " scroll-x="true" @scroll="log">
					<view class="bianju"></view>
					<view class="lunboItem radius shadow-blur " v-for="(typea,index) in classList" :key="index" :style="{'background-image':'url('+typea.ClassImage+')'}" @tap="getPOST(typea.ClassId)">
						<view class="text-c">{{typea.ClassName}}</view>
					</view>
					<view class="bianju"></view>
				</scroll-view>
			</view>
			<view class="tuijianBox">
				<view class="TopName">每日推荐</view>
				
				<view class="tuijian" v-for="(list,index) in hotList" :key="index">
					<view class="userinfo">
						<view class="touxiang" :style="{'background-image':'url('+list.AuId.AuthorAvatarUrl+')'}"  @click="getbieren(list.AuId.Auid)"></view>
						<view class="name">{{list.AuId.AuthorName}}</view>
						<view class="guanzhuuser" @click="adduser(list.AuId.Auid,index)">
							<view :class="list.AuId.isGz?'anniuguanzhuXZ':'anniuguanzhu'">{{list.AuId.isGz?'取消关注':'+关注'}}</view>
						</view>
						<view class="zhongcao">{{list.AuId.Auid}}</view>
					</view>
					<view class="miaoshu">{{list.AuId.ms}}</view>
				</view>
				
				
			</view>
		</block>
		<block v-if="home==false">
			<view class="daohang">
				<view class="hang" :class="TabCur==0?'hangIng':''" @tap="tabSelect(0)">帖子</view>
				<view class="hang" :class="TabCur==1?'hangIng':''" @tap="tabSelect(1)">用户</view>
			</view>
			<block v-if="TabCur==0">
				<template  v-if="weikong==false">
				<view class="postBox">
					<view class="postList" v-for="(list,index) in postList" :key="index">
						<view class="user">
							<view class="touxiang" :style="{'background-image':'url('+list.AuthorInfo.AuthorAvatarUrl+')'}"  @click="getbieren(list.AuthorId)"></view>
							<view class="userName">{{list.AuthorInfo.AuthorName}}</view>
							<view class="postDate">{{list.PsotDate}}</view>
						</view>
						<view class="postText" @tap="getpostinfo(list.PostsId)">
							<text >{{list.Content}}</text>
						</view>
						<block v-if="list.PictureId[0].length>5">
							<view class="postImage" >
								<image v-for="(img,id) in list.PictureId" :key="id" class="postImageItem" :src="img"  @tap="showImage(list.PictureId,id)" mode="aspectFill"></image>
							</view>
						</block>
						<view class="postBottom">
							<view class="postClass" @tap="getClass(list.Tag.ClassId)">#{{list.Tag.ClassName}}</view>
							<view>
								<view :class="[list.Give?'likeing':'like']"  @click="Like(list.PostsId,list.AuthorId,list.Give,index,list.ZhongcaoCount)"></view><view class="postviewcount" v-if="list.ZhongcaoCount>0" @click="Like(list.PostsId,list.AuthorId,list.Give,index,list.ZhongcaoCount)">{{list.ZhongcaoCount}}</view>
							</view>
							<view class="postMenu" @click="caidan(list)"><image src="../../static/caidan.png" mode="aspectFit" style="height: 40upx;"></image>
							</view>
						</view>
					</view>
					<uni-load-more :status="status" />
				</view>
				</template >
				<template v-else>
					<view class="nullBox">
						<image src="../../static/null.png" mode="" class="nullImg"></image>
						<text class="nullText">\n没有搜索到相关帖子</text>
					</view>
				</template>
			</block>
			<block v-if="TabCur==1">
				<template  v-if="weikong==false">
					<view class="userbox" v-for="(user,id) in userList" :key="id">
						<view class="userGuanzhu">
							<view class="touxiang" :style="{'background-image':'url('+user.AvatarUrl+')'}"  @click="getbieren(user.Auid)"></view>
							<view class="userName">{{user.name}}</view>
							<view class="guanzhuanniu">关注</view>
							<view class="usermiaoshu">{{user.miaoshu}}</view>
						</view>
						<view style="height: 1upx;background-color:#F7F8FA;"></view>
					</view>
				</template >
				<template v-else>
					<view class="nullBox">
						<image src="../../static/null.png" mode="" class="nullImg"></image>
						<text class="nullText">\n没有搜索到相关用户</text>
					</view>
				</template>
			</block>
		</block>
		
	</view>
</template>

<script>
	import server from '../../server.js';
	import uniLoadMore from '@/components/uni-load-more.vue';
	export default {
		components: {
			uniLoadMore,
		},
		data() {
			return {
				gaodu:0,
				classList:[],
				home:true,
				TabCur:0,
				inputVal:"",
				postList:[],
				userList:[],
				Dindex:[],
				showAppFenxiang:false,
				page:1,
				status: 'loading',
				statusTypes: [{
					value: 'more',
					text: '加载前',
					checked: true
				}, {
					value: 'loading',
					text: '加载中',
					checked: false
				}, {
					value: 'noMore',
					text: '我是有底线的',
					checked: false
				}],
				contentText: {
					contentdown: '查看更多',
					contentrefresh: '加载中',
					contentnomore: '我是有底线的'
				},
				weikong:true,
				hotList:[]
			}
		},
		onReady: function() {
			this.getHei()	
		},
		onLoad:function(){
			uni.request({
				method:'GET',
				url: 'https://api.angeli.top/post.php?type=getClassList', //仅为示例，并非真实接口地址。
				header: {
					'content-type': 'application/x-www-form-urlencoded',
				},
				success: (res) => {
					this.classList=res.data.data;
					console.log(this.classList);
				}
			});
			this.getDayHot();
		},
		onReachBottom:function(){
			this.page++;
			uni.request({
				method:'GET',
				url: 'https://api.angeli.top/post.php?type=searchPosts', //仅为示例，并非真实接口地址。
				data: {
					keyword: this.inputVal,
					count:20,
					page:this.page,
					token:server.token
				},
				header: {
					'content-type': 'application/x-www-form-urlencoded',
				},
				success: (res) => {
					console.log("————————————帖子列表——————————"+this.page);
					if(res.data.data.length==undefined){
						this.page--;
						this.status ="noMore";
					}else{
						this.postList=this.postList.concat(res.data.data);
						this.status ="loading";
						this.$forceUpdate()
						console.log(this.postList);
					}
					
				}
			});
			
		},
		methods: {
			appFenxiang:function(id,type){
				switch (id){
					case 0:
						this.showAppFenxiang=false
						break;
					case 1:
						uni.setClipboardData({
							data: 'http://share.angeli.top/?postId='+this.postid,
							success: function () {
								console.log('success');
							}
						});
						console.log('复制链接')
						break;
					case 2:
						console.log(this.Dindex.PictureId[0])
						console.log(this.Dindex.Content)
						console.log('http://share.angeli.top/?postId='+this.Dindex.PostsId)
						uni.share({
						    provider: 'weixin',
						    scene: "WXSceneSession",
						    type: 5,
						    imageUrl: this.Dindex.PictureId[0],
						    title: this.Dindex.Content,
						    miniProgram: {
						        id: 'gh_a38adc10b952',
						        path: 'pages/postinfo/postinfo?id='+this.Dindex.PostsId,
						        type: 0,
						        webUrl: 'http://share.angeli.top/?postId='+this.Dindex.PostsId
						    },
						    success: ret => {
						        console.log(JSON.stringify(ret));
						    },
							fail: function (err) {
							    console.log("fail:" + JSON.stringify(err));
							}
						});
						break;
					case 3:
						uni.share({
						    provider: "weixin",
						    scene: "WXSenceTimeline",
						    type: 0,
						    href: 'http://share.angeli.top/?postId='+this.Dindex.PostsId,
						    title: this.Dindex.Content,
						    summary: this.Dindex.Content,
						    imageUrl: this.Dindex.PictureId[0],
						    success: function (res) {
						        console.log("success:" + JSON.stringify(res));
						    },
						    fail: function (err) {
						        console.log("fail:" + JSON.stringify(err));
						    }
						});
						break;
					case 4:
						uni.share({
						    provider: "qq",
						    type: 1,
							href:'http://share.angeli.top/?postId='+this.Dindex.PostsId,
						    summary: this.Dindex.Content,
							title:this.Dindex.Content,
							imageUrl: this.Dindex.PictureId[0],
						    success: function (res) {
						        console.log("success:" + JSON.stringify(res));
						    }, 
						    fail: function (err) {
						        console.log("fail:" + JSON.stringify(err));
						    }
						});
						break;
					default:
						
				}
			},
			sososo:function(event){
				//this.inputVal=event.detail.value;
				this.home=false;
				this.requestSousuo(0)
			},
			getDayHot:function(){
				uni.request({
					method:'GET',
					url: 'https://api.angeli.top/user.php?type=getDayHot', //仅为示例，并非真实接口地址。
					data:{
						token:server.token
					},
					header: {
						'content-type': 'application/x-www-form-urlencoded',
						'system':server.system
					},
					success: (res) => {
						this.hotList=res.data.data.data;
						console.log(this.hotList);
					}
				});
			},
			requestSousuo:function(type){
				if(type==0){
					uni.showLoading({
						title: '搜索中..',
						mask:true
					});
					uni.request({
						method:'GET',
						url: 'https://api.angeli.top/post.php?type=searchPosts', //仅为示例，并非真实接口地址。
						data: {
							keyword: this.inputVal,
							count:20,
							page:this.page,
							token:server.token
						},
						header: {
							'content-type': 'application/x-www-form-urlencoded',
							'system':server.system
						},
						success: (res) => {
							this.postList=[]
							console.log(res.data.data);
							console.log("————————————帖子列表——————————");
							this.postList=res.data.data;
							console.log(this.postList);
							this.weikong=false
							if(res.data.code!=="1"){
								this.weikong=true
							}
							if(res.data.data==false){
								this.weikong=true
							}
							if(res.data.data.length<21){
								this.status ="noMore";
							}
							this.$forceUpdate();
						},
						complete() {
							uni.hideLoading()
						}
					});
				}else{
					uni.showLoading({
						title: '搜索中..',
						mask:true
					});
					uni.request({
						method:'GET',
						url: 'https://api.angeli.top/user.php?type=search', //仅为示例，并非真实接口地址。
						data: {
							keyword: this.inputVal,
							token:server.token
						},
						header: {
							'content-type': 'application/x-www-form-urlencoded',
							'system':server.system
						},
						success: (res) => {
							this.userList=[]
							console.log(res.data.data);
							console.log("————————————搜索用户列表——————————");
							this.userList=res.data.data;
							console.log(this.userList);
							this.weikong=false
							if(res.data.code!=="1"){
								this.weikong=true
							}
							if(res.data.data==false){
								this.weikong=true
							}
							if(res.data.data.length<21){
								this.status ="noMore";
							}
							this.$forceUpdate();
						},
						complete() {
							uni.hideLoading()
						}
					});
				}
				
			},
			getPOST:function(id){
				uni.navigateTo({
					url: '../classPost/classPost?id='+id
				})
			},
			getpostinfo:function(id){
				uni.navigateTo({
					url: '../postinfo/postinfo?id='+id
				});
			},
			getClass:function(id){
				uni.navigateTo({
					url: '../classPost/classPost?id='+id
				})
			},
			Like:function(postid,auid,give,index,zc){
				if(auid==server.userinfo.Auid){
					uni.showToast({
						title: "不能给自己种草",
						position:'bottom',
						icon:'none'
					});
					return;
				}
				
				if(give===true){
					var modea='del'
				}else{
					var modea='add'
				}
				uni.request({
					method:'GET',
					url: "https://api.angeli.top/post.php?type=Like", //仅为示例，并非真实接口地址。
					data: {
						fuid: auid,
						postid:postid,
						mode:modea,
						token:server.token
					},
					header: {
						'content-type': 'application/x-www-form-urlencoded',
			
					},
					success: (res) => {
						if(res.data.code=="1"){
							if(modea=='add'){
								this.postList[index].ZhongcaoCount=Number(zc)+1;
								this.postList[index].Give=true;
								uni.showToast({
									title: "种草成功！",
									position:'bottom',
									icon:'none'
								});
							}else{
								this.postList[index].ZhongcaoCount=Number(zc)-1;
								this.postList[index].Give=false;
								uni.showToast({
									title: "取消种草成功！",
									position:'bottom',
									icon:'none'
								});
							}
							
							this.$forceUpdate()
						}else{
							
							uni.showToast({
								title: "种草失败！",
								position:'bottom',
								icon:'none'
							});
						}
					},
					complete() {
						
					}
				});
			},
			zan:function(){
				uni.showToast({
					title: "点赞",
					position:'bottom',
					icon:'none'
				});
			},
			caidan:function(resa){
				if(resa.AuthorId==server.userinfo.Auid){
					this.menuList=['分享', '举报','删除帖子']
				}else{
					this.menuList=['分享', '举报']
				}
				uni.showActionSheet({
					itemList:this.menuList,
					success: (res) =>{
						switch(res.tapIndex){
							case 0:
								this.showAppFenxiang=true
								break;
							case 1:
								uni.showToast({
									title:'举报成功',
									position:'bottom',
									icon:'none'
								});
								this.$jubao(resa.PostsId,server.userinfo.Auid,resa.AuthorId,'没有理由');
								break;
							case 2:
								this.$delPost(resa.PostsId);
								break;
							default:
								
						}
					},
					fail: function (res) {
						console.log(res.errMsg);
					}
				});
			},
			tabSelect(e) {
				this.TabCur = e
				this.requestSousuo(e)
			},
			input:function(event){
				this.inputVal=event.detail.value;
				this.home=true;
				console.log(this.inputVal)
			},
			getbieren:function(e){
				uni.navigateTo({
					url: '../i/bieren?auid='+e
				})
			},
			getHei(){
				let view = uni.createSelectorQuery().select("#topbox");
				view.fields({
				  size: true,
				  scrollOffset: true
				}, data => {
				  this.gaodu=data.height;
				  console.log("总高度：" + this.gaodu);
				}).exec();
			},
			log:function(e){
				console.log(e)
			},
			showImage(res,c){
				var imageurl=res[c];
				uni.previewImage({
					current:c,
					urls: res,
					longPressActions: {
					itemList: ['保存图片'],
						success: (resa) => {
							
							uni.downloadFile({
							    url: imageurl, 
							    success: (res) => {
									console.log(res)
							        if (res.statusCode === 200) {
							           uni.saveImageToPhotosAlbum({
										   filePath: res.tempFilePath,
										   success: function () {
											  uni.showToast({
											  	title: '已保存',
											  	position:'bottom',
											  	icon:'none'
											  });
										   }
									   });
							        }else{
										uni.showToast({
											title: '保存失败',
											position:'bottom',
											icon:'none'
										});
									}
							    }
							});
							
						},
						fail: function (res) {
							console.log(res.errMsg);
						}    
					}
				})
			},
			adduser:function(uid,index){
				uni.request({
					method:'GET',
					url: 'https://api.angeli.top/user.php?type=gzORungz', //仅为示例，并非真实接口地址。
					data: {
						uid: uid,
						token:server.token
					},
					header: {
						'content-type': 'application/x-www-form-urlencoded',
					
					},
					success: (res) => {
						uni.showToast({
							title: res.data.msg,
							position:'bottom',
							icon:'none'
						});
						if(res.data.msg=='关注成功'){
							this.hotList[index].AuId.isGz=true;
						}else{
							this.hotList[index].AuId.isGz=false;
						}
					}
				}); 
			}
		}
	}
</script>

<style>

.usermiaoshu{
	opacity: 0.4;
	font-size: 24upx;
	grid-column-start: 2;
	grid-column-end: 3;
}
.guanzhuanniu{
	width: 116upx;
	height: 49upx;
	grid-column-start: 3;
	grid-column-end: 4;
	grid-row-start: 1;
	grid-row-end: 3; 
	border-radius:25xp;
	text-align: center;
	line-height: 49upx;
	font-size: 24upx;
	border-radius: 25upx;
	background-color: #79C498;
}
.userbox{
	margin: 1upx;
	padding: 0upx 30upx;
	padding-top: 18upx;
}
.lunbo{	
	white-space: nowrap;
	width: 100%;
	height: 220upx;
}
.hangIng{
	font-weight: 600;
	color: #443259;
	border-bottom:2px solid #443259;
}
.name{
	justify-self: start ;
	padding-left: 20upx;
	font-weight: 700;
}
.daohang{
		margin-top: 5upx;
		padding: 10upx;
		height: 50upx;
		display: flex;
		justify-content: space-around;
		background-color: #FFFFFF;
		font-size: 28upx;
}
.hang{
		margin-left: 20upx;
		text-align: center;
		height: 48upx;
		width:80upx;
		padding-bottom: 5upx;
	}
.tuijian{
	margin-top: 10upx;
	padding-top: 20upx;
	padding-bottom: 20upx;
	height: 200upx;
	padding-left: 28upx;
	padding-right: 28upx;
	margin-left: 35upx;
	margin-right: 35upx;
	background-color: #F7F8FA;
}
.miaoshu{
	margin-top: 20upx;
}

.userinfo{
	display: grid;
	grid-template-columns: 18% 60% 22%;
	grid-template-rows: 50% 50%;
	justify-items: center;
	align-items:center;
}
.anniuguanzhu{
	background-color: #79C498;
	height: 60upx;
	font-size: 25upx;
	vertical-align:auto;
	color: #FFFFFF;
	width: 130upx;
	border-radius: 30upx;
	text-align: center;
	line-height: 60upx;
}
.anniuguanzhuXZ{
	background-color: #E5E4EA;
	height: 60upx;
	font-size: 25upx;
	vertical-align:auto;
	color: #999999;
	width: 130upx;
	border-radius: 30upx;
	text-align: center;
	line-height: 60upx;
}
.touxiang{
	/* grid-column-start: 1;
	grid-column-end: 3; */
	grid-row-start: 1;
	grid-row-end: 3;
	background-size: 100% auto;
	border-radius:50%;
	height: 90upx;
	width: 90upx;
	background-image: url("https://pic.qqtn.com/up/2017-11/15114902797453337.gif");
}
.userGuanzhu{
	display: grid;
	grid-template-columns: 20% 60% 20%;
	grid-template-rows: 50% 50%;
	align-items:center;
	padding-bottom: 18upx;
	}
.guanzhuuser{
	grid-row-start: 1;
	grid-row-end: 3;
	
}

.zhongcao{
	grid-column-start: 2;
	grid-column-end: 3;
	grid-row-start: 2;
	grid-row-end: 3;
	justify-self: start;
	padding-left: 20upx;
	
}
.text-c{
	position:absolute;
	text-align: center;
	font-size: 28upx;
	padding-top: 30upx;
	line-height: 200upx;
	color:#FFFFFF;
	padding-left: 112upx;
}
.lunboItem{
	display: inline-grid;
	background-color: #FFFFFF;
	background-size: 100% auto;
	border-radius:7px;
	height: 200upx;
	width: 329upx;
	margin-left: 15upx;
}
.shadow-blur::before {
	content: "";
	display: block;
	background: inherit;
	filter: blur(5upx);
	position: absolute;
	width: 90%;
	height: 100%;
	top: 10upx;
	left: 10upx;
	z-index: -1;
	opacity: 0.4;
	transform-origin: 0 0;
	border-radius: inherit;
	transform: scale(1, 1);
}
.bianju{
	display: inline-grid;
	width: 20upx;
	height: 200upx;
	background-color: #FFFFFF;
}
.TopName{
	font-size: 28upx;
	margin-left: 35upx;
	margin-bottom: 20upx;
	
}
.Top{
	width: 100%;
}
.anniu{
	height: 80upx;
	width: 80upx;
	text-align: center;
	font-size: 32upx;
}
page{
	background-color: #FFFFFF;
}
</style>
