---
name: feedback-2d-avatar
description: Avatar is a 2D Pixar-style PNG — never apply 3D rotateX/rotateY tilt; use float/sway instead
metadata: 
  node_type: memory
  type: feedback
  originSessionId: df7d3fab-7325-46c0-8e61-4bbe210ad754
---

The hero avatar is a **2D Pixar-style PNG** of Kaushik (head + shoulders, dark blazer, white shirt). It lives at `/public/avatar.png`. Earlier in the session I built an SVG character with cursor-tracking eyes — that was discarded when Kaushik provided his actual avatar image.

**Why:** Kaushik tested cursor-tracking 3D parallax tilt (`rotateX` / `rotateY` toward cursor) on the PNG and reported the result felt "awkward because PNG character transparent, image is not 3D, mean not 3D illustration, 2D illustration". A flat illustration can't fake depth from rotation — it just looks like the photo is bending uncannily.

**How to apply:**
- The avatar uses the `avatar-idle` CSS keyframe — gentle vertical float (~10px) + ±0.7° sway every 7s. That's it.
- NO `rotateX` / `rotateY` based on cursor position. NO `react-parallax-tilt` wrapper on the avatar.
- The motion around the avatar comes from the **orbit tags** (`AvatarOrbitTags.tsx`) — 8 glass code-tag pills (`</>`, `{ }`, `( )`, `=>`, `#`, `[ ]`, `fn`, `*`) orbiting at different speeds/radii. That's the "alive" feeling; the avatar itself stays still.
- Orbit radius scales responsively via `--orbit-r: clamp(7.5rem, 17vw, 12rem)`.
- The avatar container has a violet glow halo behind, gradient ground shadow under, and a top-left highlight overlay for polish.
- If Kaushik provides a different avatar image, just swap the PNG — don't reintroduce SVG eye-tracking unless he explicitly asks.
