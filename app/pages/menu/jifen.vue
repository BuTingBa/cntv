<template>
	<view>
		<cu-custom bgColor="bg-white" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">种草排行</block>
		</cu-custom>
		<view class="jifenTop">
			<image :src="userinfo.AvatarUrl" mode="aspectFill" class="jinfenTouxiang"></image>
			<view class="name">{{userinfo.UserName}}</view>
			<view class="jifenMy">
				<view class="titleText">
					<text>{{userinfo.ZhongcaoCount}}\n</text>
					<text>种草总数</text>
				</view>
				<view class="titleText">
					<text>{{topList.index}}\n</text>
					<text>本周排名</text>
				</view>
				<view class="titleText">
					<text>{{topList.count}}\n</text>
					<text>本周种草</text>
				</view>
			</view>
		</view>
		<view class="jifenTiele">
			本周排行榜  <text class="cuIcon-question" style="font-size: 38upx;margin-left: 8upx;" @click="showtishi"> </text>
		</view>
		<!-- <view class="myJifen">
			<text class="lpaihang">1254</text>
			<image class="listTouxiang" src="" mode=""></image>
			<text class="username">我是你爸爸</text>
			<view class="jifen">132分</view>
		</view> -->
		<view class="jifenListBox">
			<view class="jifenList" v-for="(list,index) in topList.data" :key="index">
				<view class="myJifen" @click="getBire(list.AuId.Auid)">
					<template  v-if="index==0"><view class="lpaihang1"></view></template>
					<template  v-if="index==1"><view class="lpaihang2"></view></template>
					<template  v-if="index==2"><view class="lpaihang3"></view></template>
					<template  v-if="index!==0&&index!==1&&index!==2"><view class="lpaihang">{{index+1}}</view></template>
					<image class="listTouxiang" :src="list.AuId.AuthorAvatarUrl" mode=""></image>
					<text class="username">{{list.AuId.AuthorName}}</text>
					<view class="jifen">{{list.index}}个种草</view>
				</view>
				<view class="menusolid"></view>
			</view>
		</view>
	</view>
</template>
 
<script>
	import server from '../../server.js';
	export default {
		data() {
			return {
				topList:[],
				userinfo:[]
			}
		},
		onLoad:function(){
			this.getTop();
			this.userinfo=server.userinfo;
			
		},
		methods: {
			getBire:function(e){
				uni.navigateTo({
					url: '../i/bieren?auid='+e
				})
			},
			showtishi:function(){
				
				uni.showModal({
				    title: '关于排行榜',
				    content: '1、每周排行第一的用户可以获得3个月会员以及受邀加入专属微信群。\r\n2、每周排行第二名获得2个月会员。\r\n3、每周排行第三名获得1个月会员。\r\n4、每周记录时间为周日晚上23点59分。\r\n5、每周奖励发放时间为周一。',
					showCancel:false,
				    success: function (res) {
				        if (res.confirm) {
				            console.log('用户点击确定');
				        } else if (res.cancel) {
				            console.log('用户点击取消');
				        }
				    }
				});
				
			},
			getTop:function(){
				uni.showLoading({
					title: '获取数据中'
				});
				uni.request({
					method:'GET',
					url: "https://api.angeli.top/post.php?type=weekTop", //仅为示例，并非真实接口地址。
					data:{
						token:server.token
					},
					header: {
						'content-type': 'application/x-www-form-urlencoded',
						
					},
					success: (res) => {
						if(res.data.code=="1"){
							this.topList=res.data.data
						}else{
							uni.showToast({
								title: "获取失败！",
								position:'bottom',
								icon:'none'
							});
						}
					},
					complete() {
						uni.hideLoading();
					}
				});
			}
			
		}
	}
</script>

<style>

.jifenListBox{
	margin-top: 9upx;
	
}
.username{
	font-size:28upx;
	font-weight:400;
	line-height:40upx;
	color:rgba(54,54,54,1);
}
.jifen{
	margin-left: auto;
	font-size:28upx;
	font-weight:400;
	line-height:40upx;
	color:rgba(54,54,54,1);
}
.lpaihang1{
	height: 46upx;
	width: 46upx;
	background-image: url('../../static/top1.png');
	background-size: 100% 100% ;
}
.lpaihang2{
	height: 46upx;
	width: 46upx;
	background-image: url('../../static/top2.png');
	background-size: 100% 100% ;
}
.lpaihang3{
	height: 46upx;
	width: 46upx;
	background-image: url('../../static/top3.png');
	background-size: 100% 100% ;
}
.lpaihang{
	height: 46upx;
	width: 46upx;
	line-height: 46upx;
	text-align: center;
	font-size:26upx;
	font-weight:500;

}
.listTouxiang{
	height: 70upx;
	width: 70upx;
	background-color: #1CBBB4;
	margin-left: 25upx;
	margin-right: 27upx;
	margin-top: 12upx;
	margin-bottom: 12upx;
	border-radius: 50%;
}
.myJifen{
	height: 102upx;
	padding: 16upx 38upx;
	background-color: #FFFFFF;
	font-size:28upx;
	font-weight:400;
	line-height:102upx;
	color:rgba(54,54,54,1);
	display: flex;
	align-items:center;
	
}
.jifenTiele{
	
	padding: 16upx 38upx;
	background-color: #FFFFFF;
	font-size:32upx;
	font-weight:500;
	line-height:45upx;
	color:rgba(54,54,54,1);
	padding-top: 26upx;
}
.titleText text:nth-child(1){
	font-size:28upx;
	font-weight:500;
	line-height:40upx;
	color:rgba(0,0,0,1);
}
.titleText text:nth-child(2){
	font-size:24upx;
	font-weight:400;
	line-height:33upx;
	color:rgba(153,153,153,1);
}
.jifenMy{
	height: 72upx;
	text-align: center;
	display: flex;
	justify-content:space-between;
	margin-top: 32upx;
	padding: 0upx 100upx;
	
}
.name{
	font-size:28upx;
	font-weight:500;
	line-height:40px;
	color:rgba(54,54,54,1);
}
.jinfenTouxiang{
	height: 128upx;
	width: 128upx;
	margin-top: 49upx;
	border-radius: 50%;
	background-color: #1CBBB4;
}
.jifenTop{
	height:373upx;
	background:rgba(255,255,255,1);
	text-align: center;
	
}
</style>
