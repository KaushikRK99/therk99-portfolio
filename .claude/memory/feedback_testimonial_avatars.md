---
name: feedback-testimonial-avatars
description: "Testimonial avatars: image-first with initials-fallback; LinkedIn photos saved as /public/testimonials/<id>.jpeg"
metadata: 
  node_type: memory
  type: feedback
  originSessionId: df7d3fab-7325-46c0-8e61-4bbe210ad754
---

Testimonials display LinkedIn recommendation photos. Each entry in `testimonials[]` has an optional `image` field. Renderer logic:

1. If `image` is set AND the file loads → render `<img>` (12×12 rounded, object-cover, subtle ring)
2. If `image` is missing OR fails to load (`onError` fires) → fall back to **initials** (first letter of first + last name) in a gradient circle using `linear-gradient(135deg, ${avatarColor}, #22D3EE)`

**Why:** Kaushik has LinkedIn recommender photos for the current 2 endorsers (John Danquah-Boateng, Vasco Cavalheiro) and plans to add 2 more recommendations in the future. He wants a single render path that works whether or not a photo file exists yet, so adding a new recommendation never breaks the UI.

**How to apply:**
- Photo files go in `/public/testimonials/<id>.jpeg` (note: `.jpeg`, not `.jpg` — Kaushik corrected this in the README).
- Current photos expected: `/public/testimonials/john.jpeg` and `/public/testimonials/vasco.jpeg`. Until those files are dropped in, cards render `JD` and `VC` initials.
- When adding a new testimonial, append an object to `testimonials[]` in `portfolio.json`. Required fields: `id`, `quote` (full text, use `\n\n` between paragraphs), `name`, `role`, `avatarColor` (hex used for fallback gradient), `relationship` ("How they worked with you · Month Year"). Optional: `image`.
- Public folder has a README ([public/testimonials/README.md](public/testimonials/README.md)) documenting this — keep it in sync if the format changes.

**Testimonial card layout:** 520px wide on desktop (420px mobile), paragraphs preserved as separate `<p>` blocks with italics. Marquee duration 55s (testimonials are wide cards; this maps to readable ~25 px/s scroll). Cards use `glass glass-hover-glow` styling.

**Full LinkedIn text is used verbatim** in `quote`. Earlier I had abbreviated/summarized quotes and Kaushik corrected: "Vasco and John recommendation add full not short". Always use the complete LinkedIn recommendation text — see [[reference_external_systems]] for source.
