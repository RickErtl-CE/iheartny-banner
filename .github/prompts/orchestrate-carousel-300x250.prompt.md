---
name: "Orchestrate 300x250 Carousel"
description: "Run the full multi-agent workflow for a 300x250 carousel banner: strategy, copy, build, QA, and packaging."
agent: "agent"
model: "GPT-5 (copilot)"
argument-hint: "Paste campaign brief or objectives"
---
Create a 300x250 HTML5 carousel banner package using the project agent team.

## Inputs
- Campaign brief: ${input:brief}
- Target size: 300x250
- Output path: banners/300x250
- Placeholder mode: enabled unless explicit assets are provided

## Workflow
1. Invoke Creative Strategist to produce a 3-frame concept and frame intent.
2. Invoke Carousel Copywriter to produce primary and alternate frame copy.
3. Invoke Banner Builder to implement/update files in banners/300x250.
4. Invoke Banner QA Validator to check compliance and list issues.
5. Invoke Banner Packager to produce trafficking-ready manifest/checklist.

## Rules
- Follow Trade Desk HTML5 compliance instructions in this repo.
- Use clickTAG (case-sensitive) with new-window behavior.
- Keep implementation plain HTML/CSS/JS.

## Final Response Format
- Strategy summary
- Copy summary
- Files changed
- QA verdict
- Packaging checklist
- Remaining gaps
