---
name: feedback-print-resume
description: ATS-friendly 2-page resume; use React Portal + display:none on body children; never page-break-inside-avoid on sections
metadata: 
  node_type: memory
  type: feedback
  originSessionId: df7d3fab-7325-46c0-8e61-4bbe210ad754
---

The "Download Resume" button triggers `window.print()` and the user saves as PDF. Resume must be **ATS-friendly** (Arial/Helvetica, plain black-on-white, standard section headings, no images/tables for layout) AND must fit in **2 pages** with all content present.

**Lesson 1: Use React Portal + `display: none` on body children.**

Original approach used `visibility: hidden` on `body *` to hide everything except `.print-resume`. That made the resume the only visible content, but `visibility: hidden` keeps elements in the layout flow — the hero, sections, footer, and Three.js canvas all kept their heights. Print preview showed **17 pages** of mostly blank space.

Fix: render `ResumePrintView` via `createPortal(<ResumeBody />, document.body)` so it's a direct child of `<body>`. Then in print CSS:
```css
body > * { display: none !important; }
body > .print-resume { display: block !important; }
```
`display: none` removes elements from layout entirely. Result: exactly 2 pages.

**Lesson 2: Don't `page-break-inside: avoid` on sections — only on individual items.**

Setting `page-break-inside: avoid` on `.print-resume section` forced entire sections (like "Professional Experience") to jump to the next page if they didn't fully fit, leaving a giant blank block on page 1. Kaushik flagged this with "first page blank space awkward".

Fix: apply `page-break-inside: avoid` only to `.pr-job` and `.pr-edu` so individual jobs/degrees stay together, but let sections flow across pages naturally. Add `page-break-after: avoid` on h2 headings so a section title can't be orphaned at the bottom of a page.

**Lesson 3: 9.5pt is the floor for ATS-friendly resumes.**

Body text at 9.5pt with line-height 1.32 fits Kaushik's full content (6 core skill cards, 5 tech snapshot lines, 3 jobs with 11 bullets, 5 achievements, 1 education entry) in 2 pages with 0.4"–0.45" page margins. Going below 9.5pt risks ATS scanner issues.

**How to apply:** When updating resume content or layout, preserve these patterns. The resume **does not include** the freelance services section anymore — Kaushik asked it removed because the portfolio site itself already advertises freelance offerings.

**Resume structure (matches Kaushik's own PDF resume):** Header (name, title, tagline, contact lines) → Professional Summary → Core Skills (6-card 2-col grid) → Technology Snapshot (5 categorized lines) → Professional Experience (3 jobs, flex header: role+company left, period+summary right) → Key Achievements (5 bullets) → Education.
