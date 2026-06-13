import { defineConfig } from 'astro/config';

// Served from the custom domain k22b.space at root, so base is '/'.
// If you ever revert to https://<user>.github.io/K22B/, set base back to '/K22B'.
export default defineConfig({
  site: 'https://k22b.space',
  base: '/',
  trailingSlash: 'ignore',
  build: {
    assets: 'assets',
  },
});
