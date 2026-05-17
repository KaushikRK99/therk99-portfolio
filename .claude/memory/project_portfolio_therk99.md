---
name: project-portfolio-therk99
description: "Single-page React portfolio at d:\\Kaushik-Portfolio, to be hosted free and pointed at the GoDaddy domain therk99.com"
metadata: 
  node_type: memory
  type: project
  originSessionId: df7d3fab-7325-46c0-8e61-4bbe210ad754
---

Single-page personal portfolio for [[user-kaushik]] at `d:\Kaushik-Portfolio`. Originally scaffolded from the Arvind Singh "Building a Portfolio with AI" prompt guide (see [[reference_external_systems]]).

**Hosting plan:** Will be hosted free (Vercel/Netlify/GitHub Pages likely) and the GoDaddy domain `therk99.com` will be pointed at it. The domain IS the portfolio entry point — that's why there's no separate "Visit my website" chip or link anywhere in the UI.

**Why:** Kaushik wants a premium senior-developer portfolio that doubles as his freelance landing page. Must work as both a job-search tool (ATS resume download) and a freelance funnel (vCard QR, freelance availability badge, "Start a conversation" CTA).

**How to apply:** When making changes, remember the dual purpose. Recruiter-facing changes (resume download, experience clarity, ATS-friendly text) and client-facing changes (freelance services, contact options, scan-to-save QR) both matter. The site already includes both.

**Sections in order:** Hero (with avatar + freelance badge) → About → Experience → Services → Projects → Testimonials (marquee with full LinkedIn quotes) → Quick Connect (QR vCard) → Footer (CTA + nav + reach-out + mini QR pill).

**Design pivots that happened during build:**
1. v1 was purple/magenta/orange (rejected: didn't feel premium)
2. v2 was dark + gold (rejected: user picked their own palette)
3. v3 is the kept theme: **iridescent violet (#8B5CF6) + cyan (#22D3EE) + pink (#F472B6)** with **iOS-18 frosted glass** surfaces. See [[feedback_design_aesthetic]].

**Avatar:** A Pixar-style 3D-rendered male character PNG, head-and-shoulders, dark blazer + white shirt. Saved as `/public/avatar.png`. Don't apply 3D parallax tilt to it — see [[feedback_2d_avatar]].

**Freelance offerings advertised** (in profile.freelance.services): MVP build (4–8 weeks), AI/OpenAI integrations, Angular/React frontends, NestJS/Laravel/Django APIs, Firebase/GCP/AWS deployment, Stripe/PayPal payments wiring, performance audits.

**Data model:** All content lives in `src/data/portfolio.json`, consumed via the typed `usePortfolio()` hook in `src/hooks/usePortfolio.ts`. Never hardcode profile/experience/project text in components. Types in `src/types/portfolio.ts`.
