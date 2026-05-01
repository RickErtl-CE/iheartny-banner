---
name: "Build 300x250 Carousel"
description: "Build or update the first 300x250 HTML5 carousel banner package with clickTAG, fallback, and compliant file layout."
agent: "Banner Builder"
model: "GPT-5 (copilot)"
argument-hint: "Concept and frame copy (or ask for placeholders)"
---
Build the first 300x250 carousel creative in banners/300x250.

## Requirements
- Fixed dimensions: 300x250
- Include ad size meta tag: width=300,height=250
- Implement a 3-frame carousel with lightweight CSS/JS transitions
- Add clickTAG URL param handling (case-sensitive)
- Click opens in a new window/tab
- Include static backup image asset file
- Keep files trafficking-ready for ZIP packaging

## Output Contract
Create or update:
- banners/300x250/index.html
- banners/300x250/styles.css
- banners/300x250/script.js
- banners/300x250/backup.svg
- banners/300x250/README.md

## Placeholder Mode
If no brand assets are provided:
- Use placeholder headlines, subcopy, and CTA
- Use gradient or solid placeholder backgrounds
- Add TODO markers for asset replacement

## Return
- Files changed
- What was implemented
- Compliance checks performed
- Any assumptions
