---
name: feedback-design-aesthetic
description: Iridescent violet/cyan/pink + iOS-18 frosted glass is the kept aesthetic; gold was rejected; visible motion preferred
metadata: 
  node_type: memory
  type: feedback
  originSessionId: df7d3fab-7325-46c0-8e61-4bbe210ad754
---

The current aesthetic — **iridescent violet (`#8B5CF6`) → cyan (`#22D3EE`) → pink (`#F472B6`) gradient with iOS-18 frosted glass surfaces** — was arrived at after rejecting two earlier directions.

**Why:** Kaushik explicitly rejected the gold-on-black version ("not fulfill my exact requirement, please change gold color, choose yourself, also dark as is also add glass UI like iPhone latest UI feel"). He wanted the **Apple/iPhone-Vision-Pro glass aesthetic** specifically. The iris gradient maps to "premium AI/SaaS product" branding which matches his work.

**How to apply:**
- Headlines use `apple-text` class (silvery white-to-lavender gradient like Apple's own marketing). NOT colored gradients on big headlines — colored gradients are for shorter text, eyebrows, and accents.
- Accent gradient `iris-bg` (cyan → violet → pink) is used for buttons, the avatar ring, the "iris-text" sweep on the footer hero, eyebrow markers, and the scrollbar thumb.
- Cards use the `glass` / `glass-strong` classes — heavy backdrop-blur (22–28px) + saturate(180–200%) + 1px white inner highlight + subtle white border. Never use solid panels.
- Color tone preference: cool / cold dark base (`#06–08 black with violet tint`), never warm dark.
- Visible motion > subtle motion. When animations were too slow (e.g. marquee 90s) Kaushik perceived them as broken/"stuck". Default to 40–60s for marquees, not 90+. See [[feedback_animation_visibility]].
- No square corner shadows on hover. If using `Tilt` from react-parallax-tilt, the shadow won't follow the 3D transform and looks awkward — prefer the simple `lift` / `glass-hover-glow` CSS approach. See [[feedback_hover_effects]].
- Scrollbar must be thin (6px), gradient pill thumb, transparent track, NO up/down arrow buttons. Hide all `::-webkit-scrollbar-button` variants with `!important`.
- Cursor: custom violet glow ring + dot with lerp, expands on hovering interactive elements. Must be smooth (0.22 lerp factor on transform3d works, lower causes stutter).
