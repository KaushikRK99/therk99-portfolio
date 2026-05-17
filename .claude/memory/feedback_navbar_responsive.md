---
name: feedback-navbar-responsive
description: "100vw includes scrollbar width on Windows — use inset-x positioning, not viewport-width calc"
metadata: 
  node_type: memory
  type: feedback
  originSessionId: df7d3fab-7325-46c0-8e61-4bbe210ad754
---

The fixed-position navbar was overflowing the right side of the viewport on Windows laptops (13–15"). Multiple "the navbar is cut off" reports before this was diagnosed.

**Why:** I had set `w-[calc(100vw-1rem)]` on the navbar pill. On Windows, `100vw` **includes the scrollbar width** (~17px), but `window.innerWidth` excludes it. So the navbar was always ~17px wider than the actual visible area, and content on the right got clipped. macOS uses overlay scrollbars so this bug doesn't reproduce there.

**How to apply:** For fixed-position elements that should span the viewport with margins, use `inset-x-N` (with `left` + `right` properties) instead of `w-[calc(100vw - ...)]`. The `left/right` properties respect the visible area on every OS:

```tsx
<header className="fixed top-2 sm:top-3 inset-x-2 sm:inset-x-3 mx-auto z-50 max-w-[1100px] rounded-2xl">
```

`inset-x-2` = `left: 8px; right: 8px;`. With `max-w-[1100px]` + `mx-auto`, the pill never crosses either edge.

**Other navbar lessons from this section:**
- Full desktop nav (brand + 6 links + button) needs ~640px to fit comfortably. Show it only at `xl` (1280px+); below that show hamburger. The 768–1279px range was the cramped middle that caused most overflow reports.
- When mobile menu is `open`, force the navbar to use the `glass` background even if `scrolled` is false — otherwise the dropdown links blend into the hero behind. Toggle: `scrolled || open ? 'glass shadow-glass' : 'bg-transparent'`.
- Brand identity: header text is `the` (apple-text) + `rk99` (iris-text). No `.com` suffix. See [[feedback_brand_identity]].
