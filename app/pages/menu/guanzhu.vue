<template>
	<view>
		<cu-custom bgColor="bg-white" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">我关注的</block>
		</cu-custom>
		<view v-for="(list,index) in msgList" :key="index">
			<view class="listBox">
				<view class="userBox">
					<view class="touxiang" :style="{'background-image':'url('+list.beiguanzhuId.AuthorAvatarUrl+')'}" @click="getbieren(list.beiguanzhuId.Auid)"></view>
					<view class="info">
						<text>{{list.beiguanzhuId.AuthorName}}\n</text>
						<text>ID:{{list.beiguanzhuId.Auid}}</text>
					</view>
					<view class="guanzhu" @tap="getChat(list.beiguanzhuId.Auid)">
						私信
					</view>
				</view>
				<view class="plnr">
					<text>{{list.beiguanzhuId.ms}}</text>
				</view>
			</view>
			<view class="menusolid"></view>
		</view>
	</view>
</template>

<script>
	import server from '../../server.js';
	export default {
		data() {
			return {
				TabCur:0,
				msgList:[]
			}
		},
		onLoad:function(){
			uni.showLoading({
				title: '加载中'
			});
			uni.request({
				method:'GET',
				url: "https://api.angeli.top/user.php?type=getMyFans",
				data: {
					token:server.token
				},
				header: {
					'content-type': 'application/x-www-form-urlencoded',
					
				},
				success: (res) => {
					console.log(res)
					if(res.data.code=="1"){
						this.msgList=res.data.data
						this.markMsg()
					}else{
						uni.showToast({
							title: "暂无新粉丝通知",
							position:'bottom',
							icon:'none'
						})
					}
					
				},
				complete() {
					uni.hideLoading();
				}
			});
		},
		methods: {
			getChat:function(id){
				
				let go=parseInt(id)+parseInt(server.userinfo.Auid);
				uni.navigateTo({
					url: '../menu/chat?id='+go+'&toid='+id
				});
			},
			tabSelect(e) {
				this.TabCur = e
			},
			getbieren:function(e){
				uni.navigateTo({
					url: '../i/bieren?auid='+e
				})
			},
			getPostInfo:function(e){
				uni.navigateTo({
					url: '../postinfo/postinfo?id='+e
				});
			},
			markMsg:function(){
				uni.request({
					method:'GET',
					url: "https://api.angeli.top/user.php?type=mark&class=fans", //请求标记已读消息
					data: {
						token:server.token
					},
					header: {
						'content-type': 'application/x-www-form-urlencoded',
						
					},
					success: (res) => {
						console.log(res)
						if(res.data.code=="1"){
							console.log('已将信息标记为已读')
						}else{
							console.log('标记已读失败！')
						}
						
					},
					complete() {
						
					}
				});
			}
		},
		onBackPress:function(){
			console.log('返回')
			uni.request({
				method:'GET',
				url: "https://api.angeli.top/user.php?type=mark&class=fans", //请求标记已读消息
				data: {
					token:server.token
				},
				header: {
					'content-type': 'application/x-www-form-urlencoded',
					
				},
				success: (res) => {
					console.log(res)
					if(res.data.code=="1"){
						console.log('已将信息标记为已读')
					}else{
						console.log('标记已读失败！')
					}
					
				},
				complete() {
					
				}
			});
		}
	}
</script>

<style>
page{
	background-color: #FFFFFF;
}
.guanzhuX{
	margin-left: auto;
	height:49upx;
	width:116upx;
	border-radius:36upx;
	background:rgba(229,228,234,1);
	box-shadow:0px 1px 1px rgba(229,228,234,0.3);
	text-align: center;
	line-height: 49upx;
	color: #999999;
}
.guanzhu{
	margin-left: auto;
	height:49upx;
	width:116upx;
	border-radius:36upx;
	background:rgba(121,196,152,1);
	box-shadow:0px 1px 1px rgba(121,196,152,0.3);
	text-align: center;
	line-height: 49upx;
	color: #FFFFFF;
}
.mynr{
	padding: 8upx;
	height: 49upx;
	margin-left: 86upx;
	background:rgba(247,248,250,1);
	font-size:24upx;
	font-weight:400;
	color:rgba(54,54,54,1);
}
.mynr text:nth-child(1){
	color:#79C498;
}
.plnr{
	margin-top: 5upx;
	margin-left: 86upx;
	margin-bottom: 8upx;
	font-size:28upx;
	font-weight:400;
	color:rgba(54,54,54,1);
}
.info text:nth-child(2){
	font-size:22upx;
	font-weight:400;
	color:rgba(0,0,0,0.60);
	opacity:1;
}
.info text:nth-child(1){
	font-size:24upx;
	font-weight:400;
	color:rgba(0,0,0,1);
}
.touxiang{
	height: 70upx;
	width: 70upx;
	border-radius: 50%;
	background-image: url('http://img1.imgtn.bdimg.com/it/u=2317060666,1193629305&fm=26&gp=0.jpg');
	background-size: 100% 100%;
	margin-right: 16upx;
	line-height: 38upx;
}
.userBox{
	display: flex;
	
}
.listBox{
	padding: 16upx 38upx;
	height: 151upx;
}
</style>
