---
name: project-seo-setup
description: Comprehensive SEO setup on therk99.com — meta tags, OG, Twitter, JSON-LD Person/WebSite/ProfessionalService/BreadcrumbList, robots.txt, sitemap.xml, manifest, noscript fallback
metadata:
  type: project
---

The portfolio is set up for aggressive search visibility — primary goal is **ranking on Google for "Kaushik Ranpariya" + secondary keywords like "Senior Full Stack Developer Rajkot", "Angular freelance developer India", "MEAN stack developer for hire"**.

**Why:** The site is both a job-search asset and a freelance funnel. Recruiters search by name; potential clients search by skill/role/location. Both must find this site at the top of SERP. See [[project-portfolio-therk99]] for the dual-purpose context.

**How to apply:**

**1. `index.html` is the SEO core** — it contains:
- Primary meta: `<title>` (≤60 chars), `<meta name="description">` (≤160 chars), keywords, author, robots directive with `max-image-preview:large`, canonical to `https://therk99.com/`, theme-color, color-scheme, referrer policy
- Geo: `geo.region=IN-GJ`, `geo.placename`, `ICBM` coords for Rajkot — helps local search results in India
- Hreflang for English + x-default
- Full Open Graph (og:type, og:url, og:title, og:description, og:image with width/height/alt) — controls Facebook, LinkedIn, WhatsApp preview cards
- Twitter Card (summary_large_image) — controls X/Twitter previews
- Four JSON-LD structured-data blocks: **Person**, **WebSite**, **ProfessionalService**, **BreadcrumbList** — feeds Google's Knowledge Panel, rich results, and breadcrumb display
- `<noscript>` block with full SEO content (h1, role, location, contact) — fallback for non-JS crawlers AND a content layer Google can index even before React hydrates

**2. `public/robots.txt`** — allows all crawlers, explicitly whitelists Google/Bing/DuckDuck/LinkedIn/Twitter/Facebook/WhatsApp bots, points to sitemap.

**3. `public/sitemap.xml`** — single URL entry with hreflang alternates + two image references (avatar.png, og-image.png) using `<image:image>` schema so Google indexes the avatar in image search.

**4. `public/manifest.webmanifest`** — PWA manifest with name, short_name `therk99`, theme_color, icons, categories `["business","productivity","developer"]`. Lets the site be "installed" on mobile + provides additional metadata to search engines and Apple/Android.

**5. Avatar alt text** is SEO-strong: `"Kaushik Ranpariya — Senior Full Stack Developer · Rajkot, India"`. The image also has explicit `width`/`height` to prevent layout shift (CLS — Core Web Vitals ranking factor).

**Things still TODO before/after first deploy:**
- Create `og-image.png` (1200×630px) and save to `/public/og-image.png`. Currently referenced in OG/Twitter meta but the file doesn't exist yet — social previews will fall back to nothing until this is added. Brand: dark background, "the rk99" lockup with iridescent gradient, name + role + photo.
- Submit `https://therk99.com/sitemap.xml` to [Google Search Console](https://search.google.com/search-console) and [Bing Webmaster Tools](https://www.bing.com/webmasters) once deployed.
- Verify domain ownership in Google Search Console (TXT DNS record on GoDaddy).
- Consider switching from CSR to SSG/SSR (e.g. `vite-plugin-prerender` or migrate to Next.js) if SEO ranking proves slow with the current React SPA — Google handles SPA JS but other engines (Yandex, Baidu) and social previewers don't always run JS, so the JSON-LD + noscript content is the bridge.
- Add a `404.html` if hosting platform requires it (most don't for SPAs).

**SEO content distributed through the site (already there):**
- Hero badge: "SENIOR FULL STACK DEVELOPER · 6+ YEARS"
- Hero badge: "AVAILABLE FOR FREELANCE"
- Tagline mentions "SaaS, e-learning, AI-powered platforms, full-time and freelance"
- Location chip: "Rajkot, Gujarat, India"
- Specialization chip: "Angular · Node.js · NestJS · Laravel · Django · AI"
- About bio includes all stack keywords and "Available for full-time roles and freelance product engagements"
- Services section uses ATS-friendly keyword headings ("AI & LLM Integrations", "Cloud, Firebase & GCP", etc.)
- Testimonials use full LinkedIn text (long-form indexable content with social proof)
- Footer "FREELANCE SLOTS OPEN" indicator
- All sections have semantic `<section id="...">` so anchor links work in BreadcrumbList schema
