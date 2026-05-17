---
name: feedback-brand-identity
description: "Header logo is \"the\"+\"rk99\" (apple-text + iris-text); no \".com\"; no website chip; the domain itself opens the portfolio"
metadata: 
  node_type: memory
  type: feedback
  originSessionId: df7d3fab-7325-46c0-8e61-4bbe210ad754
---

**Brand lockup:** The site's logomark is split into two parts with two colors:
- `the` — uses `apple-text` class (silvery white-to-lavender gradient)
- `rk99` — uses `iris-text` class (cyan→violet→pink gradient)

The full domain is `therk99.com` (rk = Ranpariya Kaushik, 99 = his birth year suffix) but the `.com` is **not displayed** in any logo on the site. Both navbar and footer use just `the` + `rk99`.

**Why:** Kaushik's plan is to host the portfolio for free (likely Vercel/Netlify/GitHub Pages) and point the GoDaddy domain `therk99.com` at it. The domain IS the portfolio URL — so showing "therk99.com" as a separate link/chip in the social row or footer is redundant ("no need mention, my plan is portfolio host free and in this domain add this portfolio so domain opens this portfolio site"). Visiting `therk99.com` IS the action; advertising the URL on a page that lives at that URL is circular.

**How to apply:**
- Navbar brand: `<span class="apple-text">the</span><span class="iris-text">rk99</span>` (no `.com`).
- Footer brand: same lockup. Personal name "Kaushik Ranpariya" appears underneath, smaller.
- Hero social pill row: NO globe/website icon. The website is intentionally filtered out of the `SocialLinks` component's items list.
- Footer "REACH OUT" column: NO `therk99.com` line. Only email, phone, social icons, mini QR pill.
- The `website` field IS still set in `portfolio.json` (`https://therk99.com`) because it's encoded into the vCard QR data for scanners. It's just not surfaced visually.
- vCard QR section header is "QUICK CONNECT" not "VISIT MY SITE". The QR encodes the website URL inside the vCard but the visible card doesn't display the domain.
