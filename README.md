# K22B Website

The website for **K22B** — a fast-shipping web-dev garage. Built with [Astro](https://astro.build/), hosted on GitHub Pages.

## Develop

```bash
npm install
npm run dev
```

Then open <http://localhost:4321/K22B> (Astro will bump to the next free port if 4321 is taken).

## Build

```bash
npm run build
```

Output lands in `dist/`.

## Deploy

Pushes to `main` are deployed automatically by `.github/workflows/deploy.yml` to GitHub Pages.

One-time GitHub setup: in the repo's **Settings → Pages**, set **Source** to *GitHub Actions*.

### Custom domain or user/org pages site

`astro.config.mjs` currently assumes the site lives at `https://siamrahman29.github.io/K22B/`.

- If you bind a custom domain, change `site` to that domain and set `base: '/'`.
- If you rename the repo, update `base` to match the new repo name.

## Structure

```
src/
├── layouts/Base.astro     # <head>, fonts, OG meta
├── pages/index.astro      # single-page entrypoint
├── components/
│   ├── Nav.astro
│   ├── Hero.astro
│   ├── About.astro
│   ├── Projects.astro    # KSRML + Flair Group cards
│   ├── Contact.astro
│   ├── Footer.astro
│   └── Decor.astro        # geometric SVG primitives (sparkle, zigzag, etc.)
└── styles/global.css      # design tokens + section styles
public/
├── logo.png
└── favicon.svg
```

To add a new project, append to the `projects` array in `src/components/Projects.astro`.
