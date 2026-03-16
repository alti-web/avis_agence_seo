// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
  site: isGitHubPages ? 'https://alti-web.github.io' : 'https://avis-agence-seo.fr',
  base: isGitHubPages ? '/avis_agence_seo/' : '/',
  integrations: [sitemap()],
});
