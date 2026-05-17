---
name: feedback-hover-effects
description: "Drop react-parallax-tilt on 2D/flat content; hover shadows must follow border-radius; remove decorative \"vCard 3.0\" type labels"
metadata: 
  node_type: memory
  type: feedback
  originSessionId: df7d3fab-7325-46c0-8e61-4bbe210ad754
---

Multiple hover-effect adjustments came up during the build. The throughline: **hover effects should reinforce a card's geometry, not fight it**.

**Tilt + shadows is awkward on flat content.** The vCard QR section originally used `<Tilt tiltMaxAngleX={14}>` from `react-parallax-tilt`. When tilted, the CSS box-shadow stayed in the 2D plane (shadows don't follow 3D transforms in CSS) — corners looked square against the rounded card. Kaushik flagged this with "corner not round means shadow, view awkward".

**Why:** `transform: rotateY()` rotates the element's render but the shadow is rasterized before transform. There's no way to make a 3D-rotated card's drop-shadow track its rounded corners.

**How to apply:**
- On flat content (QR cards, the avatar, anything that's essentially a 2D rectangle with rounded corners), use the `glass-hover-glow` CSS class with `lift` / `-translate-y-1.5` and a radial-gradient spotlight following the cursor. NO `react-parallax-tilt` wrapper.
- Tilt is fine on the abstract project cards in the Projects section because their internal layered content (number/title/stack) creates parallax depth that justifies the rotation.
- Hover glow effects should use `box-shadow` (which respects `border-radius`), not absolute-positioned divs that need to match radius manually.

**Bottom-label decorations.** The vCard had two visual decorations at the bottom: "vCard 3.0" + "READY TO SCAN" with pulsing dot. Kaushik asked to remove the "vCard 3.0" label specifically — when he asks to remove a label, remove it cleanly rather than minimizing it.

**Scroll cue position.** The "SCROLL" arrow indicator originally was bottom-center, which collided with the "View Projects" / "Download Resume" CTA buttons. Moved to `bottom-6 right-6 lg:right-10` and made it `hidden md:flex` (no mouse cue on touch devices). Anchor decorative cues to corners, not center.
