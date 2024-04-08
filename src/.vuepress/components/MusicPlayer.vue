<template>
	<div class="music-player">
		<video
			class="player"
			ref="playerRef"
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
</template>

<script>
import { ref, reactive, watchEffect, onMounted } from 'vue';

export default {
	name: 'MusicPlayer',
	setup() {
		const musicUrl = ref(
			'https://cdn.jsdelivr.net/gh/MelodyLLL/cdnImg/img/3117279751.mp3'
		);
		const isPlaying = ref(false);
		const rotationInterval = ref(null);
		const isHovered = ref(false);

		const playerRef = ref(null);

		const startRotation = () => {
			isPlaying.value = true;
			rotationInterval.value = setInterval(() => {
				// Rotate the disc here
			}, 100);
		};

		const stopRotation = () => {
			isPlaying.value = false;
			clearInterval(rotationInterval.value);
		};

		const togglePlayback = () => {
			const player = playerRef.value;
			if (player.paused) {
				player.play();
			} else {
				player.pause();
			}
		};

		const startShaking = () => {
			isHovered.value = true;
		};

		const stopShaking = () => {
			isHovered.value = false;
		};

		onMounted(() => {
			const player = playerRef.value;
			if (!player) return;
			player.addEventListener('canplay', () => {
				if (player.paused) {
					player.play();
				}
			});
		});

		return {
			playerRef,
			musicUrl,
			isPlaying,
			rotationInterval,
			isHovered,
			startRotation,
			stopRotation,
			togglePlayback,
			startShaking,
			stopShaking,
		};
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
	transition: transform 0.5s linear;
	&:hover {
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
