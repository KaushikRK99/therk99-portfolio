# Kaushik Ranpariya — Portfolio

Personal portfolio site for **Kaushik Ranpariya**, Senior Full Stack Developer. Single page, dark + iridescent (violet → cyan → pink) with iOS-style frosted glass surfaces. Built for therk99.com.

**Live:** Will be deployed at [therk99.com](https://therk99.com).

---

## What's in it

A single page with the following sections, all built around a JSON-first data model:

| Section | Highlights |
|---|---|
| **Hero** | 2D Pixar-style avatar PNG centered in an orbit of glass code-tag pills (`</>`, `{ }`, `=>`, etc.), real WebGL background scene (rotating violet metallic orb, neon rings, refractive crystals), staggered word-reveal headline, pulsing "Available for freelance" badge, custom violet glow cursor with magnetic CTA buttons |
| **About** | Bio bound to JSON, glass card with stat tiles, full skills grid (5 categories) |
| **Experience** | 3 jobs with numbered glass cards on an iris-gradient timeline rail, highlight bullets, period + location chips |
| **Services** | 4 service lanes with mouse-tracking radial spotlight, iris-gradient icon tiles |
| **Projects** | Sticky scrollable cards (highlighted project pinned first), gradient image-area fallback, "LIVE PROJECT" buttons hidden when no link |
| **Testimonials** | Horizontal marquee of full LinkedIn recommendations with profile photos (fallback to initials), pause on hover |
| **Quick Connect** | 3D-feeling glass vCard with scannable QR (vCard 3.0), "Download .vcf" button, mouse-tracking spotlight |
| **Footer** | Iris-shimmer CTA, navigate column, reach-out column with email/phone/socials, mini QR pill, freelance availability indicator |

Plus: scroll progress bar, custom cursor, ATS-friendly printable resume reachable from a "Download Resume" button.

---

## Tech stack

- **React 18** + **TypeScript** + **Vite 5**
- **Tailwind CSS 3** (custom iris palette + glass utilities)
- **Framer Motion** (reveals, springs, scroll progress)
- **react-three-fiber v8** + **@react-three/drei** + **three.js v0.165** (hero 3D scene, React 18 compatible versions)
- **react-parallax-tilt** (tilt on project cards only)
- **react-qr-code** (vCard generation)
- **lucide-react** (icons)
- **Kanit** + **JetBrains Mono** from Google Fonts

---

## Scripts

```bash
npm install        # install dependencies
npm run dev        # start dev server on http://localhost:5173 (or next free port)
npm run build      # production build to ./dist
npm run preview    # preview production build
npm run lint       # ESLint
npm run build:og   # regenerate public/og-image.png (1200×630 social share preview)
```

Build output is around **113 KB gzipped** for the main bundle, plus a lazy-loaded **244 KB gzipped** chunk for the Three.js hero scene (only fetched after first paint).

---

## Project structure

```
.
├── CLAUDE.md                       # Project memory for AI agents
├── .claude/memory/                 # Structured memory files (14 .md — MEMORY.md index + 13 detail files)
├── index.html
├── public/
│   ├── avatar.png                  # Hero portrait (3D-rendered Pixar style)
│   ├── favicon.svg
│   ├── og-image.png                # 1200×630 social share preview (generated)
│   ├── og-image.svg                # Source SVG (generated, avatar embedded)
│   ├── robots.txt                  # Crawler directives
│   ├── sitemap.xml                 # Sitemap with image entries
│   ├── manifest.webmanifest        # PWA manifest
│   └── testimonials/               # LinkedIn recommender photos (.jpeg)
│       ├── README.md
│       ├── john.jpeg
│       ├── vasco.jpeg
│       ├── abisola.jpeg            # awaiting future JSON entry
│       └── martha.jpeg             # awaiting future JSON entry
├── scripts/
│   ├── og-template.svg             # OG image SVG template (edit + npm run build:og)
│   └── build-og.mjs                # Renderer (sharp)
├── src/
│   ├── components/
│   │   ├── Navbar.tsx              # Floating glass pill, hamburger < xl, glass on scroll OR open
│   │   ├── HeroSection.tsx         # Avatar + 3D scene + intro
│   │   ├── Hero3DScene.tsx         # Lazy-loaded Three.js scene
│   │   ├── Avatar3D.tsx            # 2D PNG with orbit halo (no rotateX/Y!)
│   │   ├── AvatarOrbitTags.tsx     # 8 glass tags orbiting the avatar
│   │   ├── AboutSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── TestimonialsSection.tsx # Marquee with full LinkedIn quotes
│   │   ├── QRContactSection.tsx    # Big vCard QR
│   │   ├── QRMiniPill.tsx          # Mini QR in footer
│   │   ├── Footer.tsx
│   │   ├── SocialLinks.tsx
│   │   ├── MagneticButton.tsx
│   │   ├── AnimatedHeading.tsx     # Word-by-word reveal
│   │   ├── CustomCursor.tsx
│   │   ├── ScrollProgress.tsx
│   │   └── ResumePrintView.tsx     # Portal-rendered ATS resume for print
│   ├── data/
│   │   └── portfolio.json          # ALL content
│   ├── hooks/
│   │   └── usePortfolio.ts         # Typed accessor
│   ├── lib/
│   │   └── vcard.ts                # vCard 3.0 builder + download helper
│   ├── types/
│   │   └── portfolio.ts            # TypeScript schema
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css                   # Theme tokens, glass classes, print CSS, marquee, scrollbar
├── tailwind.config.js              # Iris palette, glass shadows, animation keyframes
├── postcss.config.js
├── vite.config.ts
└── tsconfig.json
```

---

## Editing content

Everything that shows up on the page is in [`src/data/portfolio.json`](src/data/portfolio.json):

### profile
Name, tagline, role, specialization, location, years, bio, avatar path, freelance availability flags, freelance offerings, social URLs. The `website` URL is encoded into the vCard QR but **not displayed visually** anywhere on the site (the domain itself opens the site, so showing it as a link is redundant).

### skills / coreSkills
- `skills.categories` — flat tag-grouping shown in About section and "Technology Snapshot" in resume.
- `coreSkills` — 6 grouped cards shown in the printed resume's "Core Skills" section (matches the layout of Kaushik's source PDF resume).

### experience
Array of jobs. Each has `company`, `role`, `period`, `location`, `summary`, and `highlights[]`. Listed top-to-bottom in the order given.

### services
4 cards in the Services section. Edit titles/descriptions; icons cycle through `Code2, Brain, Cloud, CreditCard`.

### projects
Set `highlight: true` to pin a project first. Leave `link: ""` to hide the "LIVE PROJECT" button automatically. `image: ""` falls back to a generated gradient panel with the project's first word in shimmer text.

### education / achievements
Plain arrays; render in About + Resume only.

### testimonials
Each entry:
```json
{
  "id": "unique-slug",
  "image": "/testimonials/their-id.jpeg",
  "quote": "Full LinkedIn recommendation. Use \\n\\n between paragraphs.",
  "name": "Full Name",
  "role": "Title · Company",
  "avatarColor": "#22D3EE",
  "relationship": "How they worked with you · Month Year"
}
```
- `image` is optional. If missing or 404, the card falls back to the person's initials in a gradient circle.
- Marquee scales to any count — append new entries freely. The marquee duplicates the array internally for seamless looping.
- Photo files live in [`public/testimonials/`](public/testimonials/README.md).

---

## Avatar

The hero avatar is a 3D-rendered Pixar-style portrait PNG at `public/avatar.png`. Replace with your own at the same path. **Don't** add cursor-tracking 3D parallax tilt to the avatar — a 2D illustration can't fake depth from rotation and looks uncanny. The motion in the hero comes from the orbiting code tags around the avatar, not the avatar itself.

---

## Resume (ATS-friendly)

Clicking **Download Resume** triggers `window.print()`. The page is rendered through a React Portal into `document.body` so that print CSS can hide everything else with `display: none` and show only `.print-resume`. Output is a **2-page A4 PDF** with:

- Arial 9.5pt body, line-height 1.32, 0.4–0.45in margins
- Sections: Professional Summary → Core Skills (6-card 2-col grid) → Technology Snapshot → Professional Experience → Key Achievements → Education
- ATS-safe: black text on white, standard `<ul>` bullets, no images, no tables for layout, standard section headings

Browser will offer "Save as PDF" in the print destination dropdown.

---

## Design tokens

| Token | Value |
|---|---|
| Background | `#06–08 black` (deep void with violet tint) |
| Heading gradient (apple-text) | `linear-gradient(180deg, #FFFFFF, #B5B1D6)` |
| Iris gradient | `linear-gradient(135deg, #22D3EE, #8B5CF6, #F472B6)` |
| Glass | `rgba(15,12,24,0.55)` + `backdrop-filter: blur(22px) saturate(180%)` + inset highlight |
| Primary font | **Kanit** (display + body) |
| Mono font | **JetBrains Mono** (orbit tags, monospace chips) |

Full token list in [`tailwind.config.js`](tailwind.config.js) and [`src/index.css`](src/index.css).

---

## Deploy

The site is a static SPA — works on any host. Plan is to deploy free (Vercel / Netlify / GitHub Pages) and point the GoDaddy domain `therk99.com` at it.

```bash
npm run build
# upload ./dist to your host
```

Vercel / Netlify will auto-detect Vite. For GitHub Pages, add a build action that publishes `dist/`.

---

## For future Claude sessions

If you're an AI agent reading this: see [`CLAUDE.md`](CLAUDE.md) at the project root for hard rules + a pointer to the detailed memory at [`.claude/memory/`](.claude/memory/). Some non-obvious constraints (like "no 3D tilt on the avatar" or "no `100vw` calc on the navbar") took multiple iterations to land — please respect them.

---

## Author

**Kaushik Ranpariya** — Senior Full Stack Developer, Rajkot, Gujarat, India

- Email: **kaushikranpariya99@gmail.com**
- Phone / WhatsApp: **+91 7016543701**
- LinkedIn: [linkedin.com/in/kaushik-ranpariya-125a04164](https://www.linkedin.com/in/kaushik-ranpariya-125a04164)
- Domain: [therk99.com](https://therk99.com)

Open to senior full-stack roles **and** freelance product engagements (SaaS MVPs, AI/OpenAI integrations, Angular/React frontends, NestJS/Laravel/Django APIs, Firebase/GCP/AWS deployment, Stripe/PayPal wiring, performance audits).
