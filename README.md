# Rodrigo Cazuza Brand System

A navigable design system extracted from the visual patterns already published at [rodrigocazuza.com](https://rodrigocazuza.com). The system documents confirmed values, flags divergences, and keeps unverified decisions as placeholders instead of inventing new brand rules.

## Live site

[Open the published brand system](https://rodrigo-cazuza-brand-system.rcarvalhocazuza.chatgpt.site)

## Included

- brand foundation, audience, and visual personality
- confirmed and pending logo applications
- exact color values and CSS variable names
- desktop and mobile typography scales
- spacing tokens with visual references
- rendered buttons, cards, eyebrows, and expertise rows
- channel applications and known divergences
- reusable implementation mega prompt
- copy-ready CSS tokens
- interactive pre-publish checklist

## Run locally

Requirements: Node.js 22.13 or newer, plus a Linux environment with `flock`, `curl`, and GNU `timeout`.

```bash
npm ci
npm run dev
```

Build the static Hostinger artifact:

```bash
npm run build
```

The publishable website is generated at `dist/index.html`. In Hostinger, use:

- Framework: `Other`
- Build command: `npm run build`
- Output directory: `dist`
- Entry file: leave blank

The original Vinext/OpenAI Sites artifact remains available when needed:

```bash
npm run build:sites
```

## Project structure

- `app/brand-content.ts` — audited content, CSS tokens, implementation prompt, and interactions
- `app/globals.css` — responsive visual system
- `app/brand-data.mjs` — embedded logo asset
- `public/fonts/` — locally bundled brand typefaces
- `scripts/build-standalone.mjs` — standalone offline HTML and Hostinger `dist/` generator
- `.openai/hosting.json` — Sites deployment configuration

## Evidence status

The website is the current source of truth. Instagram and proposal patterns remain placeholders until approved screenshots and files are supplied. The logo package, clear-space rules, priority audience, and photographic treatment also remain open decisions.
