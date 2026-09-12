# Vento showcase media

The `/vento` page is built around four screen recordings. Drop files here with the
**exact names** below and they replace the placeholders automatically, no code
changes needed. Any missing file just keeps its styled placeholder, so you can add
media incrementally.

## Files the page expects

| File                  | What it shows                                      | Where          |
| --------------------- | -------------------------------------------------- | -------------- |
| `hero.mp4`            | Raw material to sale, the full run                  | Hero           |
| `hero-poster.jpg`     | First-frame still for the hero                      | Hero           |
| `orders.mp4`          | Orders, sales, invoices, delivery receipts          | Orders section |
| `orders-poster.jpg`   | Poster still                                        | Orders section |
| `supply.mp4`          | Suppliers, supplies, proof of purchase              | Supply section |
| `supply-poster.jpg`   | Poster still                                        | Supply section |
| `admin.mp4`           | Wastage convention, letterheads, invites, বাংলা      | Admin section  |
| `admin-poster.jpg`    | Poster still                                        | Admin section  |

All four play with controls, so they can run long. Record at a consistent window
size and zoom; the page renders them at the source aspect ratio (1287 × 795).

## What each recording covers

- **hero.mp4** — one unbroken sitting: the dashboard, registering raw materials by
  unit and by weight, registering a product with its recipe and defect rate, running
  a manufacture batch, registering a customer, and recording a priced sale.
  The chapter cards on the page seek this file, so **if you re-record it, update the
  `at` seconds in the `chapters` array** in `src/pages/vento.astro`.
- **orders.mp4** — recording an order against a customer with a due date, watching
  the in-stock / short-on-stock flag, fulfilling it as a sale, then downloading the
  PDF invoice and preparing a delivery receipt.
- **supply.mp4** — an item's activity history, the supplier book, recording a supply
  that raises stock, and attaching a proof-of-purchase image.
- **admin.mp4** — the wastage convention, document letterheads, one-time invite
  codes, user roles, category lists, and the English / Bangla switch.

## Converting a screen recording

```
ffmpeg -i "Raw material to sales.mov" \
  -vf "scale=1280:-2" -c:v libx264 -crf 27 -preset slow -pix_fmt yuv420p \
  -an -movflags +faststart public/vento/hero.mp4

ffmpeg -ss 1 -i public/vento/hero.mp4 -frames:v 1 -q:v 4 public/vento/hero-poster.jpg
```

Screen content compresses well, so a five-minute run lands in a few megabytes. Keep
the whole folder comfortably small: these files ship in the Pages build.

Seed realistic names and quantities before recording, and hide anything you do not
want public. A wrong record on screen is forever.

## Changing a slot

Edit `src/pages/vento.astro`: `heroMedia` for the hero, the `sections` array for the
other three (file, poster, caption, copy), and `chapters` for the hero's chapter
cards. The slot component itself is `src/components/MediaSlot.astro`.
