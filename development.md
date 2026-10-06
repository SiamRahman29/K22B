# Development

The website for **K22B**, a software garage for the manufacturing industry, and its website studio, K22B Studio. Built with [Astro](https://astro.build/), hosted on GitHub Pages.

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
├── pages/
│   ├── index.astro        # K22B parent homepage
│   ├── studio.astro       # K22B Studio (websites)
│   └── vento.astro        # Vento product showcase
├── components/
│   ├── Nav.astro          # shared nav; links/CTA/sub-brand via props
│   ├── HomeHero.astro     # parent hero
│   ├── Products.astro     # Vento, Remy, Noyta cards + try/tailor/own steps
│   ├── StudioTeaser.astro # homepage pointer to /studio
│   ├── HomeAbout.astro    # parent about
│   ├── Hero.astro         # Studio hero
│   ├── About.astro        # Studio about
│   ├── Projects.astro     # Studio work: KSRML + Flair Group cards
│   ├── Contact.astro
│   ├── Footer.astro
│   └── Decor.astro        # geometric SVG primitives (sparkle, zigzag, etc.)
└── styles/global.css      # design tokens + section styles
public/
└── logo.png
```

To add client work, append to the `projects` array in `src/components/Projects.astro`. To add or update a product, edit the `products` array in `src/components/Products.astro`.
