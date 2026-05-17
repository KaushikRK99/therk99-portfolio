---
name: project-future-features
description: Planned feature upgrades for after first deploy — admin panel, contact form + email automation, WhatsApp AI automation
metadata:
  type: project
---

Kaushik has a roadmap of feature upgrades planned for **~1 month after the first deploy** (current date: May 2026, so target window June–July 2026). These are NOT for the v1 launch — v1 ships first as a static portfolio.

**Why:** v1 is portfolio + freelance funnel. v2 is the operational layer that lets him manage the site without touching code/JSON and automates inbound lead handling.

**How to apply:** When these features come up in future conversations, build on the existing JSON-first data model — don't rip it out. The admin panel should READ FROM and WRITE TO `src/data/portfolio.json` (or a remote store that replaces it), and the existing `usePortfolio()` hook stays as the data accessor.

**Planned features:**

1. **Admin panel** — replace manual `portfolio.json` editing with a UI. Likely needs:
   - Auth (Firebase Auth — already in his stack)
   - Backend (Firebase Firestore — also in stack)
   - Migration path: keep `portfolio.json` as initial seed, then load from Firestore at runtime, with fallback to JSON if offline. Don't break the current `usePortfolio()` API.
   - Admin routes (e.g. `/admin`) gated by auth
   - Form-based editors for each JSON section (profile, experience, projects, testimonials, etc.)

2. **Contact form with email automation** — replace the current mailto-only flow with a server-side form:
   - Frontend form (probably in a new "Contact" section or modal)
   - Backend handler — Firebase Cloud Functions OR Vercel/Netlify Edge Function
   - Email service — likely Resend, SendGrid, or Gmail SMTP via Nodemailer (Kaushik knows nodemailer-style integrations)
   - Auto-reply to sender + notification to kaushikranpariya99@gmail.com
   - Spam protection (Turnstile or hCaptcha)

3. **WhatsApp AI automation** — inbound message routing:
   - WhatsApp Business API (Meta) or Twilio WhatsApp API
   - AI auto-responder using OpenAI (Kaushik already integrates OpenAI in his day job)
   - Probably classifies lead intent (recruiter / freelance client / spam) and routes accordingly
   - Could share the same backend as the contact form

**Tech assumptions for v2** (don't lock in yet, but likely):
- Firebase Auth + Firestore (Kaushik's primary stack)
- Cloud Functions for backend handlers
- OpenAI API for the WhatsApp classifier
- Keep the static site fast — admin/forms loaded lazily, no impact on first-paint

When Kaushik returns to start v2 work, re-read this and confirm the scope before building.
