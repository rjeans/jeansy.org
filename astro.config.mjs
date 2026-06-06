import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  adapter: cloudflare(),
  integrations: [tailwind(), mdx(), sitemap({
    lastmod: new Date(),
    filter: (page) => !page.includes('/wc2026'),
  })],
  site: 'https://jeansy.org',
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true
    }
  }
});