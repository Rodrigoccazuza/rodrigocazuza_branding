# Rodrigo Cazuza Design System

Version 1.0 of the website design system and style guide for [rodrigocazuza.com](https://rodrigocazuza.com). Every value is measured from the production site at 390, 768, and 1440 px, in light and dark themes, and mirrors the site's source tokens in `css/neu-system.css` and `css/site-refinements.css`.

## Live documentation

[rodrigoccazuza.github.io/rodrigocazuza_branding](https://rodrigoccazuza.github.io/rodrigocazuza_branding/)

## What it documents

| # | Section | Contents |
| --- | --- | --- |
| 01 | Foundation | Soft-neumorphism principles, personality, do / don't |
| 02 | Logo | Ink Green (#17663A) and Signal Lime (#C1FF72) wordmarks, placements, sizes |
| 03 | Color | Light Mist and dark Graphite surfaces, text, violet + green signals, footer, platform colors, gradients |
| 04 | Typography | Poppins, Inter, Playfair Display Italic, JetBrains Mono, Array, Shrikhand; full type scale per breakpoint |
| 05 | Layout & grid | Breakpoints, container, fluid gutters, every section grid on mobile / tablet / desktop |
| 06 | Spacing | 4 px scale, fluid rhythm tokens, component padding |
| 07 | Radius | 6 / 10 / 15 / 21 / 27 / 999 px with usage |
| 08 | Elevation | Raised and inset shadow pairs, hover signal |
| 09 | Motion | Easings, durations, lift / press / reveal / marquee patterns, reduced motion |
| 10 | Iconography | Bootstrap Icons 1.11.3, sizes and containers |
| 11 | Buttons | Primary, secondary, live-site, nav CTA, round controls, chips, states |
| 12 | Components | Section label, nav, website card, platform card, playlist row, campaign card, timeline, stat tile, media stacks, footer |
| 13 | Forms | Contact form wells, labels, focus, submit |
| 14 | Accessibility | Contrast table, focus, alt text, motion, forced colors |
| 15–18 | Tools | Implementation mega prompt, known divergences, copy-ready CSS tokens, pre-publish checklist |

## Core tokens

```css
--neu-bg: #e6e7eb;        /* dark: #23252a */
--neu-text: #2b2d33;      /* dark: #eceef2 */
--neu-violet: #6026ec;    /* dark: #a88cff */
--neu-green: #66d487;
--neu-green-text: #17663a; /* dark: #6fdc91 */
--neu-raised: 9px 9px 22px var(--neu-dark), -9px -9px 22px var(--neu-light);
--gutter: clamp(20px, 4vw, 48px);
--section-y: clamp(56px, 6vw + 20px, 104px);
--radius-xl: 27px;
--neu-ease: cubic-bezier(.22, .61, .36, 1);
```

The full set is in the documentation's **CSS tokens** section.

## Run locally

Requirements: Node.js 22.13 or newer.

```bash
node scripts/build-standalone.mjs   # writes index.html (GitHub Pages entry)
npm run build                       # writes dist/index.html (Hostinger)
```

Hostinger settings: Framework `Other`, build command `npm run build`, output directory `dist`.

Pushing changes under `app/`, `public/fonts/`, or the build script to `main` regenerates `index.html` through the GitHub Actions workflow.

To refresh the embedded logos from the portfolio repository:

```bash
node scripts/build-brand-assets.mjs /path/to/portfolio
```

## Project structure

- `app/brand-content.mjs` / `app/brand-content.ts`: documentation content, tokens, mega prompt, and page script (keep both identical)
- `app/globals.css`: the documentation site, styled with the system it documents
- `app/brand-data.mjs`: embedded Ink Green and Signal Lime wordmarks
- `public/fonts/`: bundled Poppins, Inter, Playfair Display Italic, JetBrains Mono, Shrikhand, and Array
- `scripts/build-standalone.mjs`: standalone offline HTML generator

## Changelog

- **1.0 · 11 Oct 2026**: Rebuilt for the neumorphic redesign: light default theme, new surface and text palette, Ink Green logo, 4 px spacing scale, 25% tighter radius scale, elevation, motion, icons, buttons, components, forms, and accessibility documentation.
- **0.2 · 19 Aug 2026**: Audit of the original black-canvas site with light and dark modes.
