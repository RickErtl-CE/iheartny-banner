---
description: "Use when building, reviewing, or packaging Trade Desk HTML5 creatives, including clickTAG logic, ad-size metadata, file limits, and ZIP packaging rules."
name: "Trade Desk HTML5 Compliance"
applyTo: "banners/**/*.html,banners/**/*.css,banners/**/*.js,.github/prompts/*.prompt.md"
---
# Trade Desk HTML5 Compliance

Use this checklist when generating or validating creatives.

## Creative Behavior
- HTML5 creatives must be plain iframe-safe pages.
- No dynamic or expandable creative behavior.
- No autoplay audio.
- Avoid video tags.

## HTML Requirements
- Include `ad.size` meta tag in the primary HTML file.
- Keep primary HTML in ZIP root.
- If no `ad.size` tag exists, dimensions must be declared manually in platform UI.

## Click-through Requirements
- Use a case-sensitive click tag parameter.
- Default parameter name should be `clickTAG` unless otherwise specified.
- Open click-through in a new window/tab.

## Packaging Requirements
- Allowed file types in package: HTML, JS, CSS, MP4, JPG, JPEG, GIF, PNG, SVG.
- ZIP should contain the assets directly, not a nested top-level folder.
- Include static backup image asset.
- Keep file count and byte size conservative.

## Performance Guidance
- Keep initial payload lean.
- Use sprite sheets or shared assets when useful.
- Avoid unnecessary requests.
