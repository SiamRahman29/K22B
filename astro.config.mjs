import { defineConfig } from 'astro/config';

// If hosted at https://<user>.github.io/K22B/, keep `base: '/K22B'`.
// If you bind a custom domain or use a user/org pages site (root), set base to '/'.
export default defineConfig({
  site: 'https://siamrahman29.github.io',
  base: '/K22B',
  trailingSlash: 'ignore',
  build: {
    assets: 'assets',
  },
});
