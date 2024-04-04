<template>
	<!-- <KeepAlive> -->
	<div class="music-player">
		<video
			class="player"
			ref="player"
			:src="musicUrl"
			@play="startRotation"
			@pause="stopRotation"
		></video>
		<img
			alt=""
			title="开始放歌"
			class="disc"
			src="../public/assets/cd.png"
			:class="{ rotating: isPlaying, shaking: isHovered }"
			@click="togglePlayback"
			@mouseover="startShaking"
			@mouseleave="stopShaking"
		/>
	</div>
	<!-- </KeepAlive> -->
</template>

<script>
export default {
	data() {
		return {
			musicUrl:
				'https://cdn.jsdelivr.net/gh/MelodyLLL/cdnImg/img/3117279751.mp3',
			isPlaying: false,
			rotationInterval: null,
			isHovered: false,
		};
	},
	methods: {
		startRotation() {
			this.isPlaying = true;
			this.rotationInterval = setInterval(() => {
				// Rotate the disc here
			}, 100);
		},
		stopRotation() {
			this.isPlaying = false;
			clearInterval(this.rotationInterval);
		},
		togglePlayback() {
			const player = this.$refs.player;
			if (player.paused) {
				player.play();
			} else {
				player.pause();
			}
		},
		startShaking() {
			this.isHovered = true;
		},
		stopShaking() {
			this.isHovered = false;
		},
	},
	mounted() {
		this.$refs.player.addEventListener('canplay', () => {
			this.$refs.player.play();
		});
	},
};
</script>

<style scoped lang="scss">
.music-player {
	position: relative;
	display: flex;
	align-items: center;
	height: var(--navbar-height);
	& .player {
		width: 50px;
		height: var(--navbar-height);
	}
}

.disc {
	cursor: pointer;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 50px;
	height: 50px;
	/* border-radius: 50% */
	/* background-image: url(../public/assets/cd.png); */
	/* z-index: 999; */
	transition: transform 0.5s linear;
	&:hover {
		/* Add shaking effect here */
		animation: shake 0.5s linear infinite;
	}
}

@keyframes shake {
	0% {
		transform: translate(-50%, -50%) rotate(0deg);
	}
	25% {
		transform: translate(-50%, -50%) rotate(-15deg);
	}
	50% {
		transform: translate(-50%, -50%) rotate(15deg);
	}
	75% {
		transform: translate(-50%, -50%) rotate(-15deg);
	}
	100% {
		transform: translate(-50%, -50%) rotate(0deg);
	}
}

.disc.rotating {
	animation: rotate 2s linear infinite;
}

@keyframes rotate {
	from {
		transform: translate(-50%, -50%) rotate(0deg);
	}
	to {
		transform: translate(-50%, -50%) rotate(360deg);
	}
}
</style>
