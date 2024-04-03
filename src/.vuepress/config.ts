import { getDirname, path } from 'vuepress/utils';
import { defineUserConfig } from 'vuepress';
import { viteBundler } from "@vuepress/bundler-vite";
import theme from './theme.js';
const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
	base: '/',
	locales: {
		// "/": {
		//   lang: "en-US",
		//   title: "Blog Demo",
		//   description: "A blog demo for vuepress-theme-hope",
		// },
		'/': {
			lang: 'zh-CN',
			title: '世界上最最爱炮炮🐈',
			description: 'vuepress-theme-hope 的博客演示',
		},
	},
	theme,
  bundler: viteBundler(),
	alias: {
		'@theme-hope/modules/blog/components/BlogHero': path.resolve(
			__dirname,
			'./components/BlogHero.vue'
		),
	},

	// Enable it with pwa
	// shouldPrefetch: false,
});
