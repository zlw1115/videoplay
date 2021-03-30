<template>
	<view>
		<main-big-button @click = "logout">退出登录</main-big-button>
	</view>
</template>

<script>
	import mainBigButton from '../../components/common/main-big-button.vue'
	export default {
		components:{
			mainBigButton
		},
		data() {
			return {
				
			}
		},
		methods: {
			logout(){
				this.$store.dispatch('logout').then(res=>{
					
					uni.showToast({
						title: '退出登录成功'
					});
					uni.switchTab({
						url:'../my/my'
					})
					
				})
			}
		}
	}
</script>

<style>

</style>
