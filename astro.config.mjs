// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const isProd = process.env.DEPLOY_TARGET === 'production';

export default defineConfig({
  site: isProd ? 'https://avis-agence-seo.fr' : 'https://alti-web.github.io',
  base: isProd ? '/' : '/avis_agence_seo/',
  integrations: [sitemap()],
});
