<template>
	<view>
		<!-- 横向滑动 -->
		<scroll-view class="scroll-view_H" scroll-x="true">
			<view class="pai">
				<!-- 导航 -->
				<view v-for="(item,index) in arr" :key="index" :class="active===index?'left':''" @click="dianji(index,item)">
					<view class="kuan">{{item.name}}</view>
				</view>
			</view>
		</scroll-view>
		<view class="gao">
			<view class="gaos">{{obj.name}}</view>
			<view class="help">{{obj.front_desc}}</view>
		</view>
		<view class="fixe">
			<view v-for="(item1,index1) in add" :key="index1" class="index2">
				<image :src="item1.list_pic_url" mode="" class="img"></image>
				<view class="names">{{item1.name}}</view>
				<view class="color">￥{{item1.retail_price}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "",
		components: {

		},
		props: {},
		data() {
			return {
				arr:[],
				active:0,
				id:'',
				obj:'',
				add:[],
			}
		},
		methods: {
			// 点击根据下标变化
			dianji(index,item){
				this.active = index
				this.id = item.id
				this.getData()
			},
			// 数据请求
			getData(){
				// 加载中
				uni.showLoading({
					title: '加载中',
				})
				uni.request({
					url: `/api/goods/goodsList?categoryId=${this.id}`,
					method: 'GET',
					data: {},
					success: res => {
						// 取消加载
						uni.hideLoading()
						// console.log(res)
						this.obj = res.data.currentNav
						this.add = res.data.data
					},
					fail: () => {},
					complete: () => {}
				});
			}
		},
		mounted() {

		},
		onLoad(options) {
			// 接受传过来的数据
		// console.log(options)
		this.id = options.id
		this.active = Number(options.index1) 
		this.arr = JSON.parse(options.ass)
		this.getData()
		},
		filters: {

		},
		computed: {

		},
		watch: {

		},
		directives: {

		}
	}
</script>

<style scoped lang="scss">
	.pai {
		display: flex;
	}
	.kuan {
		width: 150rpx;
		height: 80rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		font-weight: 700;
	}
	.left {
		border-bottom: 5rpx solid red;
		color: red;
	}
	.gao {
		width: 100%;
		height: 200rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		border-bottom: 2rpx solid #ccc;
	}
	.gaos {
		font-size: 32rpx;
		font-weight: 700;
	}
	.help {
		color: #ccc;
		margin-top: 20rpx;
		font-size: 28rpx;
	}
	.fixe {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
	}
	.index2 {
		width: 375rpx;
		height: 450rpx;
		border: 1rpx solid #eee;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.img {
		width: 350rpx;
		height: 300rpx;
	} 
	.names {
		width: 375rpx;
		text-align: center;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap
	}
	.color {
		color: rgb(220,52,30);
		margin-top: 20rpx;
	}
</style>
