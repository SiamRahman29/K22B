# Vento showcase media

Drop files here with the **exact names** below and they replace the placeholders
on the `/vento` page automatically, no code changes needed. Any missing file just keeps
its styled placeholder, so you can add media incrementally.

## Format guide

- **Looping clips** (`*.mp4`): short, **silent**, **seamless loops**. They autoplay
  muted with no controls: treat them like a moving screenshot, ~6–12s.
  Export H.264 MP4, ~1280×800 (16:10) or 1600×900. Keep each under ~3–4 MB.
- **The demo** (`demo.mp4`): a real video **with** playback controls. This one can
  have length and detail. See the shot list below.
- **Screenshots** (`*.png`): crisp, high-DPI stills. Use a clean, realistic dataset.
  Hide anything you don't want public.
- **Posters** (`*-poster.png`): first-frame still shown before a video loads.

Record at a consistent window size and zoom so everything lines up. Retina/2× looks best.

## Files the page expects

| File                 | Type            | Where            | Aspect |
| -------------------- | --------------- | ---------------- | ------ |
| `hero.mp4`           | looping clip    | Hero             | 16:10  |
| `hero-poster.png`    | poster still    | Hero             | 16:10  |
| `inventory.mp4`      | looping clip    | Feature 01       | 16:10  |
| `manufacture.mp4`    | looping clip    | Feature 02       | 16:10  |
| `invoice.png`        | screenshot      | Feature 03       | 16:10  |
| `customers.mp4`      | looping clip    | Feature 04       | 16:10  |
| `roles.png`          | screenshot      | Feature 05       | 16:10  |
| `history.mp4`        | looping clip    | Feature 06       | 16:10  |
| `demo.mp4`           | video (controls)| Demo section     | 16:9   |
| `demo-poster.png`    | poster still    | Demo section     | 16:9   |
| `gallery-1.png`      | screenshot      | Gallery          | 4:3    |
| `gallery-2.mp4`      | looping clip    | Gallery          | 4:3    |
| `gallery-3.png`      | screenshot      | Gallery          | 4:3    |
| `gallery-4.png`      | screenshot      | Gallery          | 4:3    |
| `gallery-5.mp4`      | looping clip    | Gallery          | 4:3    |
| `gallery-6.png`      | screenshot      | Gallery          | 4:3    |

## Shot list (what to capture)

- **hero.mp4**: a slow, calm pass over the dashboard: a gentle scroll or a couple
  of hovers. Ambient, not a task. This sets the tone; keep it smooth.
- **inventory.mp4**: the raw-materials (or products) list: filter/search, then open
  one item so its unit **and** weight are visible.
- **manufacture.mp4**: the hero flow: pick a product, enter a batch quantity, run it,
  and let stock visibly deduct. This is the money shot.
- **invoice.png**: a generated PDF invoice rendered on your letterhead (the branded
  document, not the form).
- **customers.mp4**: open a customer and scroll their sales history.
- **roles.png**: the admin panel showing users with different role badges (or the
  role dropdown open).
- **history.mp4**: an item's activity timeline / a manufacture run's detail, scrolled.
- **demo.mp4**: the full loop, ~60–90s: stock intake → build/confirm a recipe → run a
  manufacture batch → record a sale → download the branded invoice. Silent is fine;
  on-screen captions help. This is the one with controls, so it can breathe.
- **gallery-1** products & recipes · **gallery-2** adjusting stock (clip) ·
  **gallery-3** sales & delivery receipts · **gallery-4** categories ·
  **gallery-5** language switch (clip) · **gallery-6** admin & settings.

Tips: seed realistic names/quantities before recording; a wrong record on screen is
forever. To convert a screen recording to a lean loop:
`ffmpeg -i in.mov -vf "fps=30,scale=1600:-2" -an -movflags +faststart -crf 26 out.mp4`

## Changing a slot

Edit `src/pages/vento.astro` (the `features` array and the `<MediaSlot>` tags) to
change a slot's file, type (`kind` / `loop`), label, or aspect. The slot component is
`src/components/MediaSlot.astro`.
