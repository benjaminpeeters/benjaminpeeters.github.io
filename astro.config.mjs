// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import rehypeCitation from 'rehype-citation';

// https://astro.build/config
export default defineConfig({
	site: 'https://benjaminpeeters.github.io',
	i18n: {
		locales: ['en', 'fr', 'zh'],
		defaultLocale: 'en',
		routing: {
			prefixDefaultLocale: false, // en = /, fr = /fr/, zh = /zh/
		},
	},
	markdown: {
		rehypePlugins: [
			[
				rehypeCitation,
				{
					bibliography: './src/publications.bib',
					csl: 'apa', // APA citation style
					linkCitations: true,
				},
			],
		],
	},
	integrations: [
		mdx(),
		sitemap(),
	],
	server: {
		port: 8003,
	},
});
