<template>
	<view>
		<!-- #ifdef MP -->
		<!-- 导航栏 -->
		<view class="flex align-center fixed-top bg-white" style="height: 44px;">
			<!-- 搜索框 -->
			<view class="mx-2 flex align-center bg-light flex-1 rounded-circle px-2" style="background-color: #f6f7f8; color: #959FA0;">
				<text class="iconfont iconsousuokuang"></text>
				<text>精彩热搜</text>
			</view>
		</view>
		<view style="height: 44px;"></view>
		<!-- #endif -->

		<card title="热门分类" :showRefresh="false">
			<scroll-view scroll-x="true" class="scroll-row">
				<icon-cate v-for="(item,index) in list" :key="index" :item="item" :index="index"></icon-cate>
			</scroll-view>
		</card>

		<view class="f-divider"></view>

		<card title="全部分类" :showRefresh="false">
			<icon-cate v-for="(item,index) in list" :key="index" :item="item" :index="index"></icon-cate>
		</card>
	</view>
</template>

<script>
	import card from '@/components/common/card.vue'
	import iconCate from '@/components/common/icon-cate.vue'
	export default {
		components: {
			card,
			iconCate
		},
		data() {
			return {
				list: []
			}
		},
		onLoad() {
			this.getData()
		},
		onPullDownRefresh() {
			this.getData().then(res => {
				uni.showToast({
					title: '刷新成功',
					icon: "none"
				});
				uni.stopPullDownRefresh()
			}).catch(err => {
				uni.stopPullDownRefresh()
			})
		},
		methods: {
			getData() {
				uni.showLoading()
				return this.$H.get('/category').then(res => {
					this.list = res
					uni.hideLoading()
				}).catch(err => {
					uni.hideLoading()
				})

			}
		}
	}
</script>

<style>

</style>
