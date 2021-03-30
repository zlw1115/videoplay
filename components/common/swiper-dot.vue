<template>
	<view class="position-relative">
		<!-- <swiper :current="current" circular @change="changeSwiper" :autoplay="true" :interval="3000" :duration="150" style="height: 250rpx">
			<swiper-item v-for="(item,index) in swipers" :key="index">
				<view class="swiper-item">
					<image :src="item.src" mode="" style="height: 250rpx;width: 100%;" class="rounded-lg"></image>
				</view>
			</swiper-item>
		</swiper> -->
		<slot></slot>
		<view class="flex align-center text-white rounded-bottom-lg px-2" style="height: 70rpx;
		position: absolute;bottom: 0;left: 0;right: 0;
		background-image: linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,0.8));">
			<view style="width: 80%;" class="text-ellipsis">{{info[current] ? info[current].title:'暂无描述'}}</view>
			<view style="width: 20%;" class="flex align-center justify-end flex-shrink">
				<view v-for="(item,index) in info" :key="index" class="rounded-circle ml-1" :style="index===current? 'width: 16rpx;height: 16rpx;background-color: rgba(255,255,255,1);':'width: 16rpx;height: 16rpx;background-color: rgba(255,255,255,0.5);'">

				</view>

			</view>
		</view>
	</view>

</template>

<script>
	export default{
		props:{
			info:Array,
			current:{
				type:Number,
				default:0
			}
		}
	}
</script>

<style>
</style>
