<template>
	<view>
		<view class="position-fixed top-0 left-0 right-0 bottom-0 animated faster fadeIn " style="background-color:rgba(0,0,0,0.3) ; z-index: 1000;"
		 v-if="status" @click.stop="hide">
			<slot></slot>
		</view>
	</view>



</template>

<script>
	export default {
		data() {
			return {
				status: false
			}
		},
		methods: {
			// 显示
			show() {
				this.status = true
			},
			// 隐藏
			hide() {
				this.status = false
			}

		}

	}
</script>

<style>
</style>
