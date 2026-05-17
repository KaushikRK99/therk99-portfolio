# Project memory for future Claude sessions

This is **Kaushik Ranpariya's personal portfolio**, deployed at `therk99.com`. Single-page React app, will be hosted free (Vercel/Netlify/GitHub Pages) and pointed at the GoDaddy domain.

## Detailed memory

Full structured memory lives in [.claude/memory/](.claude/memory/). Index: [MEMORY.md](.claude/memory/MEMORY.md). Read the specific file before touching the related area — these contain hard-won lessons from earlier sessions that took multiple iterations to get right.

- [user_kaushik.md](.claude/memory/user_kaushik.md) — who Kaushik is, stack, career, communication style
- [project_portfolio_therk99.md](.claude/memory/project_portfolio_therk99.md) — project goal, hosting plan, design-pivot history
- [project_seo_setup.md](.claude/memory/project_seo_setup.md) — meta, OG, JSON-LD schemas, robots/sitemap/manifest, noscript, deploy SEO checklist
- [project_og_image.md](.claude/memory/project_og_image.md) — OG image generator (SVG template + sharp → 1200×630 PNG); `npm run build:og`
- [project_future_features.md](.claude/memory/project_future_features.md) — v2 roadmap: admin panel, contact form + email, WhatsApp AI automation (~June 2026)
- [feedback_design_aesthetic.md](.claude/memory/feedback_design_aesthetic.md) — iridescent violet/cyan + iOS-18 glass (gold theme was rejected)
- [feedback_2d_avatar.md](.claude/memory/feedback_2d_avatar.md) — avatar is a 2D PNG; **no 3D tilt**, float/sway only
- [feedback_animation_visibility.md](.claude/memory/feedback_animation_visibility.md) — marquees 40–60s; don't use inline `<style>` in JSX (HMR breaks)
- [feedback_navbar_responsive.md](.claude/memory/feedback_navbar_responsive.md) — `100vw` includes scrollbar on Windows; use `inset-x`
- [feedback_print_resume.md](.claude/memory/feedback_print_resume.md) — Portal + `display:none`; never `page-break-inside:avoid` on sections
- [feedback_hover_effects.md](.claude/memory/feedback_hover_effects.md) — drop `react-parallax-tilt` on flat content
- [feedback_brand_identity.md](.claude/memory/feedback_brand_identity.md) — logo is `the`+`rk99` (no `.com`); domain itself opens the site
- [feedback_testimonial_avatars.md](.claude/memory/feedback_testimonial_avatars.md) — `/public/testimonials/<id>.jpeg`; image-with-initials-fallback
- [reference_external_systems.md](.claude/memory/reference_external_systems.md) — LinkedIn URL, recommender identities, source PDF resume

## Hard rules — don't violate without asking

1. **No `.com` in the header/footer brand**. Logo is `the` (apple-text) + `rk99` (iris-text). The domain itself opens the portfolio — no visible "therk99.com" chip anywhere.
2. **No 3D parallax tilt on the avatar PNG**. It's a 2D Pixar-style illustration; `rotateX/rotateY` toward cursor looks uncanny. Only `avatar-idle` keyframe (float + sway) is allowed.
3. **No `react-parallax-tilt` on flat-content cards** (vCard, avatar). Shadows don't follow 3D transforms — corners look broken. Use `glass-hover-glow` lift instead.
4. **No inline `<style>{...}</style>` tags inside React components**. Vite HMR drops them silently. All CSS in `src/index.css`.
5. **No `w-[calc(100vw - ...)]` on fixed-position elements**. On Windows, `100vw` includes the scrollbar and the element overflows the visible viewport. Use `inset-x-N` + `mx-auto` + `max-w-`.
6. **No `page-break-inside: avoid` on resume sections**. That forces giant blank space on page 1. Apply only to `.pr-job` and `.pr-edu`.
7. **No website / globe link in social rows**. The website is intentionally excluded from `SocialLinks.tsx` items. It's still in the vCard QR data, just not visible.
8. **No reduction of testimonial text**. Use full LinkedIn recommendations verbatim, paragraphs separated by `\n\n`.
9. **ATS resume body text floor: 9.5pt Arial**. Don't go below.

## Stack snapshot

React 18 · TypeScript · Vite · Tailwind CSS · Framer Motion · lucide-react · react-three-fiber v8 (React 18 compat) · @react-three/drei · three.js v0.165 · react-parallax-tilt · react-qr-code · Kanit font.

## Where things live

- `src/data/portfolio.json` — all content (profile, skills, coreSkills, experience, services, projects, education, testimonials, achievements). Edit this, not components.
- `src/types/portfolio.ts` — typed schema for the JSON.
- `src/hooks/usePortfolio.ts` — typed accessor.
- `src/lib/vcard.ts` — vCard builder used by both the big QR section and the footer mini-pill.
- `src/components/` — all React components (one file per section).
- `public/avatar.png` — hero avatar (user-provided).
- `public/testimonials/<id>.jpeg` — LinkedIn recommender photos (optional; falls back to initials).
