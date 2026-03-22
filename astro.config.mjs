import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://mooneyar.github.io',
  base: '/geneseo-jam-fund-site',
  build: {
    assets: '_assets',
  },
});
