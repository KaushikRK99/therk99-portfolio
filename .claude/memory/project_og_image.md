---
name: project-og-image
description: OG/social preview image generated from SVG template + avatar.png base64 embed, rendered to 1200x630 PNG via sharp
metadata:
  type: project
---

The social-share preview image at `public/og-image.png` (1200×630) is **generated**, not hand-drawn. It uses the avatar.png embedded as a base64 data URI inside an SVG template, then rendered to PNG via the `sharp` library.

**Why:** Social link previews (WhatsApp, LinkedIn, Facebook, X, Discord, Slack) all expect a 1200×630 PNG/JPG. Programmatic generation means the image stays in sync with the brand (gradients, name, role, avatar) without needing Figma/Photoshop trips every time something changes.

**How to apply:**
- Edit the design in [scripts/og-template.svg](../../scripts/og-template.svg). Use Helvetica/Arial font-family (NOT Kanit) — `sharp` uses librsvg which can't load Google Fonts, so stick with system-available sans-serif fallbacks.
- Run `npm run build:og` to regenerate. The script:
  1. Reads `public/avatar.png`, base64-encodes it
  2. Reads the SVG template, replaces `AVATAR_DATA_URI` placeholder with the base64 data URI
  3. Writes the resolved SVG to `public/og-image.svg` (self-contained, also usable as OG image in modern previewers)
  4. Renders to `public/og-image.png` at exactly 1200×630 via sharp
- The OG meta tags in `index.html` reference `https://therk99.com/og-image.png` — don't change the path without updating both.

**Constraints learned:**
- Pill width must fit text + letter-spacing. The first attempt had `width=436` for "SENIOR FULL STACK DEVELOPER · 6+ YEARS" at font-size 16 + letter-spacing 4 — text overflowed by ~80px. Use font-size 15 + letter-spacing 3 + pill width ≥600px (or shorter text) to be safe.
- Sharp version `^0.34.5` works; pinned in devDependencies. Heavy native dep (~30MB on disk) but build-time only.
- Keep `og-image.svg` AND `og-image.png` in `public/` — some platforms (modern Twitter, Discord) handle SVG OG; older ones (Facebook, LinkedIn) need raster PNG.

If avatar is replaced (path is `profile.avatarImage` in [portfolio.json](../../src/data/portfolio.json), rendered by [Avatar3D.tsx](../../src/components/Avatar3D.tsx)), re-run `npm run build:og` to refresh the OG image.
