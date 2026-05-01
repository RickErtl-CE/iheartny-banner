# Copilot Project Instructions

This workspace builds HTML5 display creatives for The Trade Desk.

## Goals
- Produce plain HTML5 ad packages that are trafficking-ready.
- Enforce platform compliance from the creative specification document in this repo.
- Prefer reusable structures so multiple sizes can be generated from the same workflow.

## Global Constraints
- Do not create dynamic or expandable creatives.
- Do not use video tags.
- Audio must only play after explicit user interaction.
- Include an ad size meta tag in primary HTML:
  - `<meta name="ad.size" content="width=<W>,height=<H>"/>`
- Implement click-through via a case-sensitive URL parameter (default `clickTAG`).
- Click action must open destination in a new window/tab.
- Include a static backup image asset for trafficking.
- Keep files and file types compliant with the spec in this repo.

## Build Standards
- Primary HTML file must be at ZIP root.
- Keep file count low and avoid unnecessary dependencies.
- Use semantic, readable HTML/CSS/JS.
- Prefer no external libraries unless required.
- Comment only where logic is not obvious.

## Output Expectations
When producing a banner package, include:
1. Creative files (`index.html`, CSS, JS, images).
2. Backup image file.
3. Packaging checklist and validation notes.
4. Instructions for replacing placeholders with final assets.
