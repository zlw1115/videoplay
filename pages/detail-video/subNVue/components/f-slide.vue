<template>
	<view style="height: 44px;" class="flex align-center position-relative" @touchstart="touchstart" @touchmove="touchmove"
	 @touchend="touchend" @thouchcancel="thouchcancel">
		<view class="flex-1 rounded" style="height: 3px;background-color: rgba(255,255,255,0.5);">
			<view class="bg-main" style="height: 3px;" :style="activeStyle"></view>
		</view>
		<view class="position-absolute rounded-circle bg-main-hover" style="width: 15px; height: 15px;" :style="activeDotStyle"></view>
	</view>
</template>

<script>
	export default {
		inject: ['v'],
		props: {
			currentTime: {
				type: Number,
				default: 0
			},
			duration: {
				type: Number,
				default: 0
			}
		},
		data() {
			return {
				width: 0, //进度条宽度
				activeWidth: 0, //当前宽度
				moveStatus: false, //判断是否在移动状态
				left:0
			}
		},
		created() {
			if (!this.v.fullScreenStatus) {
				this.width = this.v.windowWidth - 44 - 44 - 80 - 15
				this.left = 44

			} else {
				this.width = this.v.windowHeight - 30 - 15
				this.left = 15
			}
			// this.height = this.v.windowHeight
			this.active()
		},
		computed: {
			activeStyle() {
				return `width:${this.activeWidth}px;`
			},
			activeDotStyle() {
				return `left:${this.activeWidth}px;`
			},
			current() {
				return this.width == 0 ? 0 : (this.activeWidth / this.width) * this.duration
			}
		},
		watch: {
			currentTime(newValue, oldValue) {
				if (!this.moveStatus) {
					this.active()
				}
			}
		},
		methods: {
			active() {
				this.activeWidth = this.duration == 0 ? 0 : (this.currentTime / this.duration) * this.width
			},
			touchstart(e) {
				if (this.duration === 0) return
				// e.changedTouches[0].screenX
				this.moveStatus = true
				this.activeWidth = e.changedTouches[0].screenX - this.left
			},
			touchmove(e) {
				if (this.duration === 0) return
				let d = e.changedTouches[0].screenX - this.left
				if (d <= 0) {
					this.activeWidth = 0
				} else if (d >= this.width) {
					this.activeWidth = this.width
				} else {
					this.activeWidth = d
				}
				this.$emit('update', this.current)
			},
			touchend(e) {
				if (this.duration === 0) return
				this.moveStatus = false
				this.$emit('change', this.current)
			},
			// 被中断事件
			thouchcancel(e) {
				this.touchend()
			}
		}


	}
</script>

<style>

</style>
