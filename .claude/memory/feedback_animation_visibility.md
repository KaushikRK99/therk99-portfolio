---
name: feedback-animation-visibility
description: Animations must be perceptibly moving; never put marquee CSS in inline <style> tags — HMR drops it
metadata: 
  node_type: memory
  type: feedback
  originSessionId: df7d3fab-7325-46c0-8e61-4bbe210ad754
---

Two related lessons about animation behavior on this project:

**1. "Stuck" = too slow.** When marquee animation duration was set to 90s, Kaushik reported the testimonials section was "stuck, why don't work after you update". The animation was actually running but moved so slowly it looked frozen. Lowered to 55s and motion became visible.

**Why:** Premium feel doesn't mean slow. For a horizontal marquee of testimonial cards ~520px wide, anything over 60s reads as broken. Sweet spot is 40–60s.

**How to apply:** When picking marquee/scroll animation durations, calculate pixels-per-second based on track width. Sub-15 px/s feels stuck; 20–40 px/s is the visible-but-not-distracting range.

**2. Inline `<style>` tags inside React components don't HMR reliably.** I had the marquee duration override inside the `TestimonialsSection` component as `<style>{`...`}</style>`. After editing it, Vite's HMR sometimes failed to swap the styles in, leaving stale CSS. Looked like the change "didn't apply" even though the file was saved.

**Why:** Vite's CSS HMR works on stylesheets imported via the module graph (e.g. `src/index.css`). Inline `<style>` in JSX is just a regular DOM element — when React re-renders, the new style tag may be inserted but the old one isn't always cleaned up, and browser style application is non-deterministic.

**How to apply:** Put ALL CSS in `src/index.css` (or imported stylesheets). Never `<style>{`...`}</style>` inside components. If you need component-local styles, use Tailwind classes or extract to a dedicated CSS file imported at the top.

**Other animation preferences** (validated):
- Custom cursor lerp factor: **0.22** is smooth without lag. Lower (0.1) feels sticky/laggy. Use `requestAnimationFrame` + `transform3d` for GPU acceleration.
- Reveal animations: word-by-word stagger with `rotateX(-40deg)` initial + clip-path overflow + `cubic-bezier(0.22, 1, 0.36, 1)` is the kept pattern (`AnimatedHeading.tsx`).
- `prefers-reduced-motion` override is fine for shimmer effects, but DO NOT disable marquees with it — marquees are content, not decoration.
