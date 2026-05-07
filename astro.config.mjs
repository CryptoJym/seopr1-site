import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://seopr1.com',
  output: 'static',
  trailingSlash: 'never',
  build: {
    format: 'directory',
    assets: '_astro',
  },
  compressHTML: true,
  devToolbar: {
    enabled: false,
  },
});
