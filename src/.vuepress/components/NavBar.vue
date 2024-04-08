<template>
		<Navbar>
			<!-- <BlogHero />   -->

			<template #endBefore>
				<MusicPlayer />
			</template>
		</Navbar>
</template>
<script setup lang="ts">
import Navbar from 'vuepress-theme-hope/modules/navbar/components/Navbar.js';
import MusicPlayer from './MusicPlayer.vue';
import { onMounted } from 'vue';

onMounted(() => {
	// console.log(MusicPlayer,);
});
</script>

<style lang="scss" scoped></style>
