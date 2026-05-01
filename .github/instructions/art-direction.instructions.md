---
description: "Use when designing or reviewing banner layouts to enforce hierarchy decisions, whitespace discipline, and element prioritization before any CSS is written."
name: "Art Direction for Display Banners"
applyTo: "banners/**/*.css,banners/**/*.html"
---
# Art Direction for Display Banners

## Core Principle
A banner is not a webpage. Every pixel matters. Make hard choices.

## Hierarchy Rules for 300x250

A 300x250 canvas supports a maximum of **three visual layers**:

1. **Hero layer** — the photo. It sets mood. It gets the most space.
2. **Message layer** — one headline + one short support line. Maximum two text blocks in the content area.
3. **Action layer** — one CTA element + brand mark.

Everything else is either integrated into these three layers or removed.

## Element Budget

For 300x250, the hard cap is **6 visible elements** including:
- Background photo
- Brand logo
- Headline
- One support text line (subhead OR kicker, not both)
- CTA
- Navigation controls (minimal, unobtrusive)

If you have more than 6, cut or merge before writing CSS.

## Whitespace Rules
- No text element should be within 12px of another text element's bounding box unless they are a headline/subhead pair.
- Navigation controls must not share horizontal or vertical space with any text.
- The photo must have at least 40% unobstructed visible area after overlays.
- Bottom gradient overlays should cover no more than 45% of canvas height.

## Text Rules for Small Canvas
- Maximum 2 type sizes in the content area (headline + body).
- Minimum rendered text size: 11px for any visible text.
- No text element should require more than 2 lines at its container width.
- If a line wraps, the container is too narrow — widen it or cut words.

## Navigation Controls
- Arrows/dots must live in their own spatial lane — never floating over content text.
- Prefer minimal dot indicators over arrow buttons when possible.
- If arrows are used, they should be small (24px max), semi-transparent, and positioned where photo is unobstructed.

## Layout Decision Process
Before writing any CSS:
1. List every element the HTML contains.
2. Assign each to Hero / Message / Action layer or mark it for removal/hiding.
3. Sketch the vertical zone map (what lives at what Y range).
4. Confirm no two elements share the same zone unless they are in the same layer.
5. Only then write styles.

## Quality Gate
A layout passes review when:
- [ ] You can identify the headline within 0.5 seconds
- [ ] The photo dominates the canvas
- [ ] No text wraps unexpectedly
- [ ] Controls don't compete with the message
- [ ] The brand mark is visible but not dominant
- [ ] There is visible breathing room between every element group
