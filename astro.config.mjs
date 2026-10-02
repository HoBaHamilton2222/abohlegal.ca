import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Tailwind runs through PostCSS (postcss.config.mjs); global.css holds the
// @tailwind directives and is imported by BaseLayout.
export default defineConfig({
  site: 'https://www.abohlegal.ca',
  integrations: [
    sitemap(),
  ],
});
