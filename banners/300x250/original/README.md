# 300x250 Carousel Banner (v1)

This folder contains the first implementation pass for a Trade Desk-compatible HTML5 carousel creative using placeholder content.

## Files
- index.html: Primary HTML file (must remain at ZIP root when packaging).
- styles.css: Visual design and transitions.
- script.js: Carousel rotation and clickTAG handling.
- backup.svg: Static backup image placeholder.

## Compliance Notes
- Fixed ad size is 300x250.
- ad.size meta tag is present in index.html.
- clickTAG parameter is case-sensitive and opens in a new tab/window.
- No video tag usage.
- No dynamic/expandable behavior.

## TODO Before Trafficking
1. Replace placeholder copy with approved campaign copy.
2. Replace backup.svg with final backup image if JPG/PNG is required by trafficking policy.
3. Validate total file count and payload against campaign limits.
4. ZIP contents directly (do not include an extra top-level folder).

## clickTAG Testing
Append `?clickTAG=https%3A%2F%2Fwww.example.com` to the local URL query string.
Clicking the creative should open the decoded destination in a new tab/window.
