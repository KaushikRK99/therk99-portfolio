---
name: reference-external-systems
description: "External URLs and source documents for Kaushik's portfolio — LinkedIn, domain registrar, source resume PDF, original prompt guide"
metadata: 
  node_type: memory
  type: reference
  originSessionId: df7d3fab-7325-46c0-8e61-4bbe210ad754
---

**Personal domain (GoDaddy):** `therk99.com` — registered, plan is to point at the free-hosted portfolio. See [[feedback_brand_identity]] for how it's used (or not displayed) in the UI.

**LinkedIn profile:** https://www.linkedin.com/in/kaushik-ranpariya-125a04164 — Kaushik's full profile; source of the testimonial text. Username slug shown on LinkedIn screenshots is "Kaushik Ranpariya · Full Stack Developer | MEAN Stack Developer | Laravel Developer | Angular | NodeJs | AI".

**LinkedIn recommenders** (both received April 2026, both 1st-degree connections, listed in Pending tab):
- **John Danquah-Boateng** — Full-Stack Software Engineer · AI · AWS · GCP. Worked with Kaushik on the same team at OnlineCourseHost, later managed him as Development Lead. Recommendation dated April 17, 2026.
- **Vasco Cavalheiro** — Founder of OnlineCourseHost.com (AI-powered online course platform) and Angular University. Managed Kaushik directly. Recommendation dated April 16, 2026.

Two more recommendations are **pending future addition** — Kaushik plans to add them when he receives them. The testimonials JSON structure + render code is already set up to handle N entries; just append. See [[feedback_testimonial_avatars]] for the schema.

**Source resume PDF:** Kaushik provided his own PDF resume (`Kaushik_Ranpariya_Resume_Modern_Detailed_260416_142017.pdf`) as the reference content for the ATS resume in the portfolio. The structure (Header → Summary → Core Skills 6-card → Tech Snapshot 5-cat → Professional Experience → Key Achievements → Education) mirrors that PDF.

**Source prompt guide:** The portfolio was originally scaffolded from the Arvind Singh "Building a Portfolio with AI" prompt guide PDF — same author who wrote the architecture (React 18, TypeScript, Vite, Tailwind, Framer Motion, lucide-react, JSON-first data layer, typed `usePortfolio()` hook, sticky project cards, marquee testimonials, 3D avatar in hero). Kaushik adopted that scaffold and then diverged on theme and avatar.

**Current employer:** OnlineCourseHost.com / Vasco Cavalheiro IT Services SPRL — Brussels, Belgium (remote). Site: onlinecoursehost.com. Sister product Angular University: angular-university.io.
