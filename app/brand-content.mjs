import { logoData } from "./brand-data.mjs";

const tokenCode = `:root {
  --color-background: #000000;
  --color-surface: #0d0d0d;
  --color-surface-raised: #1a1a1a;
  --color-text-primary: #ffffff;
  --color-text-secondary: #b6b6bd;
  --color-text-on-accent: #ffffff;
  --color-accent: #6026ec;
  --color-accent-base: #6026ec;
  --color-accent-hover: #7a45ff;
  --color-accent-light: #9b5cff;
  --color-accent-tint: rgba(96, 38, 236, 0.16);
  --color-green: #66d487;
  --color-accent-secondary: #66d487;
  --color-green-tint: rgba(102, 212, 135, 0.14);
  --color-violet: #6026ec;
  --color-panel-gray: #1a1a1a;
  --color-ink: #000000;
  --color-ink-soft: #0d0d0d;
  --color-border: rgba(255, 255, 255, 0.14);
  --color-border-strong: rgba(255, 255, 255, 0.28);
  --color-danger: #ff6b6b;
  --color-focus: #66d487;

  --gradient-brand: linear-gradient(135deg, #6026ec 0%, #9b5cff 100%);
  --gradient-hero: radial-gradient(120% 120% at 100% 0%, #1a0f3d 0%, #0a0620 45%, #000000 100%);
  --gradient-duotone: linear-gradient(135deg, #2ec5c5 0%, #6026ec 50%, #ff7a59 100%);

  --font-display: "Poppins", "Helvetica Neue", Arial, sans-serif;
  --font-serif: "Playfair Display", Georgia, "Times New Roman", serif;
  --font-body: "Inter", "Helvetica Neue", Arial, sans-serif;

  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-md: 1.125rem;
  --text-lg: 1.375rem;
  --text-xl: 1.75rem;
  --text-2xl: 2.25rem;
  --text-3xl: 3rem;
  --text-4xl: 3.75rem;
  --text-5xl: 5rem;
  --tracking-tight: -0.03em;
  --tracking-snug: -0.015em;
  --leading-tight: 1.05;
  --leading-snug: 1.35;
  --leading-normal: 1.6;

  --space-3xs: 0.25rem;
  --space-2xs: 0.5rem;
  --space-xs: 0.75rem;
  --space-sm: 1rem;
  --space-md: 1.5rem;
  --space-lg: 2.5rem;
  --space-xl: 4rem;
  --space-2xl: 6rem;
  --space-section: clamp(3.5rem, 6vw, 7rem);

  --container-width: 1280px;
  --container-narrow: 860px;
  --page-padding: clamp(1.25rem, 4vw, 3rem);
  --radius-small: 8px;
  --radius-medium: 16px;
  --radius-large: 24px;
  --radius-pill: 999px;
}`;

const implementationPrompt = `You are implementing the Rodrigo Cazuza design system for [PLATFORM / FORMAT].

PROJECT INPUTS
- Goal: [WHAT THIS MUST ACHIEVE]
- Deliverable: [WEBSITE, SOCIAL POST, EMAIL, DECK, PROPOSAL, AD, VIDEO COVER, FIGMA, CANVA, FRONT-END COMPONENT, OR OTHER]
- Audience: [PRIMARY AUDIENCE]
- Dimensions / breakpoint / duration: [REQUIREMENTS]
- Technology or production tool: [STACK / PLATFORM]
- Content supplied: [COPY, IMAGES, LOGOS, DATA]
- Accessibility, compliance, and deadline constraints: [CONSTRAINTS]

SOURCE OF TRUTH
Use only the confirmed design-system values below. Do not invent a color, font, logo version, spacing value, radius, or visual rule. If a required value is missing, mark it [NEEDS DECISION], preserve the placeholder, and ask a focused question before finalizing.

BRAND FOUNDATION
- Brand: Rodrigo Cazuza
- Positioning: multimedia design and front-end development shaped around strategy, story, and real-world production.
- Observed audience: businesses, brands, and collaborators needing brand systems, email campaigns, paid-media creative, social content, video, and websites. This audience is an inference, not a formally approved persona.
- Visual personality: strategic, clear, bold, editorial, practical.
- Do: connect strategy, design, and technical execution; explain usefulness; show process; combine visual impact with clear hierarchy; adapt one logic across channels.
- Avoid: decoration without function; disconnected production stages; nearly identical color variants without a role; direct green-to-violet contact without black separation.

CONFIRMED VISUAL TOKENS
- Background #000000; surface #0D0D0D; raised surface #1A1A1A.
- Primary text #FFFFFF; secondary text #B6B6BD.
- Violet #6026EC; hover #7A45FF; light violet #9B5CFF.
- Signal green #66D487.
- Logo-file lime #C1FF72 is file-specific and is not an approved UI token.
- Display: Poppins. Editorial accent: Playfair Display Italic. Body/interface: Inter.
- Spacing: 4, 8, 12, 16, 24, 40, 64, 96 px. Section spacing: clamp(56px, 6vw, 112px).
- Radius: 8, 16, 24 px; pill 999 px.
- Logo: current transparent 500 × 500 PNG, sampled #C1FF72. Use on near-black backgrounds only until a dark logo is supplied.

IMPLEMENTATION METHOD
1. Audit the requested platform, format, dimensions, safe areas, interaction states, and export limits.
2. Map every visual choice to a confirmed token or rule above.
3. Build hierarchy with Poppins for impact, Inter for reading, and Playfair Display Italic only for selective editorial emphasis.
4. Keep black dominant. Use green as a signal and violet for calls to action/focus. Separate green and violet with black.
5. Use only the spacing scale. Preserve a central readable content area and prevent horizontal overflow at every width.
6. Render actual reusable components when the format supports them: pill buttons, raised cards, eyebrow headings, and numbered expertise rows.
7. Adapt the composition to the channel's purpose instead of merely resizing it. Preserve brand hierarchy, contrast, and intent.
8. For unsupported or unobserved channels, label assumptions and keep unknowns as placeholders.

OUTPUT CONTRACT
Return:
A. a short requirement-to-token mapping;
B. the finished implementation or production-ready specification;
C. responsive / alternate-format behavior;
D. accessibility and contrast checks;
E. a list of every [NEEDS DECISION] item;
F. a final pre-publish checklist result.

FINAL QUALITY GATE
Confirm: correct positioning and audience; correct logo for its background; palette-only hex values; correct type roles; spacing-scale compliance; no direct green/violet contact; no horizontal overflow; reviewed copy and CTA; checked crop/overlay/alt text; channel-appropriate adaptation. Do not claim completion while an unknown value has been silently invented.`;

export const brandMarkup = String.raw`
  <button class="mobile-menu" type="button" aria-controls="sidebar" aria-expanded="false">
    <span>Index</span><span aria-hidden="true">☰</span>
  </button>
  <div class="nav-scrim" aria-hidden="true"></div>

  <aside class="sidebar" id="sidebar" aria-label="Design system navigation">
    <div class="sidebar-brand">
      <img src="${logoData}" alt="Rodrigo Cazuza" />
      <p>Brand system <span>v0.2</span></p>
    </div>
    <nav>
      <a href="#foundation"><span>01</span>Foundation</a>
      <a href="#logos"><span>02</span>Logos</a>
      <a href="#colors"><span>03</span>Colors</a>
      <a href="#typography"><span>04</span>Typography</a>
      <a href="#spacing"><span>05</span>Spacing</a>
      <a href="#components"><span>06</span>Components</a>
      <a href="#applications"><span>07</span>Applications</a>
      <a href="#implementation-prompt"><span>08</span>Mega prompt</a>
      <a href="#divergences"><span>09</span>Divergences</a>
      <a href="#open-decisions"><span>10</span>Open decisions</a>
      <a href="#tokens"><span>11</span>CSS tokens</a>
      <a href="#checklist"><span>12</span>Checklist</a>
    </nav>
    <div class="sidebar-foot">
      <span class="status-dot"></span>
      <p>Site audited<br><strong>19 Aug 2026</strong></p>
    </div>
  </aside>

  <main class="main-content">
    <div class="reading-shell">
      <header class="system-hero" id="top">
        <div class="hero-meta">
          <span class="source-tag source-confirmed">Extracted from the live site</span>
          <a href="https://rodrigocazuza.com" target="_blank" rel="noreferrer">rodrigocazuza.com ↗</a>
        </div>
        <p class="kicker">Rodrigo Cazuza / Personal identity</p>
        <h1>A system that makes the work feel as <em>clear</em> as it is.</h1>
        <p class="hero-lead">A navigable inventory of the patterns already present in the portfolio—without inventing colors, type, or spacing to fill gaps.</p>
        <div class="audit-summary" aria-label="Audit summary">
          <div><strong>3</strong><span>core type families</span></div>
          <div><strong>8</strong><span>spacing-scale steps</span></div>
          <div><strong>2</strong><span>primary accents</span></div>
          <div><strong>7</strong><span>open decisions</span></div>
        </div>
      </header>

      <div class="legend" aria-label="Evidence legend">
        <span><i class="legend-dot confirmed"></i>Confirmed on site</span>
        <span><i class="legend-dot file"></i>Sampled from file</span>
        <span><i class="legend-dot inference"></i>Flagged inference</span>
        <span><i class="legend-dot placeholder"></i>Placeholder</span>
      </div>

      <section class="doc-section" id="foundation">
        <div class="section-heading">
          <p class="section-index">01 / Foundation</p>
          <h2>The brand already presents itself as an <em>end-to-end</em> creative practice.</h2>
          <p>The published work connects strategy, design, marketing, development, and production—with clarity and usefulness as the standard.</p>
        </div>

        <div class="facts-grid">
          <article class="fact-card wide">
            <span class="source-tag source-confirmed">Confirmed</span>
            <p class="fact-label">Brand name</p>
            <h3>Rodrigo Cazuza</h3>
          </article>
          <article class="fact-card wide">
            <span class="source-tag source-confirmed">Faithful site translation</span>
            <p class="fact-label">What I do</p>
            <h3>Multimedia design and front-end development shaped around strategy, story, and real-world production.</h3>
          </article>
          <article class="fact-card">
            <span class="source-tag source-inference">Observed functional audience</span>
            <p class="fact-label">Who buys</p>
            <p>Businesses, brands, and collaborators who need brand systems, email campaigns, paid-media creative, social content, video, and websites.</p>
            <small>The site describes needs and deliverables but does not state a formal buyer persona. Validate before finalizing.</small>
          </article>
          <article class="fact-card">
            <span class="source-tag source-mixed">Channels</span>
            <p class="fact-label">Where it appears</p>
            <ul class="channel-list">
              <li><strong>Website</strong><span>confirmed and audited</span></li>
              <li><strong>Instagram</strong><span>referenced; screenshots pending</span></li>
              <li><strong>Proposals</strong><span>files pending</span></li>
            </ul>
          </article>
        </div>

        <div class="subsection">
          <h3>Visual personality in five adjectives</h3>
          <div class="adjective-row">
            <span>Strategic</span><span>Clear</span><span>Bold</span><span>Editorial</span><span>Practical</span>
          </div>
          <p class="evidence-note"><strong>Basis:</strong> “strategy,” “clear,” “useful,” “memorable,” the high-contrast type scale, and the Poppins + italic Playfair pairing observed on the site.</p>
        </div>

        <div class="do-dont-grid">
          <article class="principle-card do-card">
            <p class="principle-label">The brand does</p>
            <ul>
              <li>Connects strategy, design, and technical execution.</li>
              <li>Explains the usefulness of each deliverable.</li>
              <li>Shows the process, not only the final result.</li>
              <li>Combines visual impact with clear hierarchy.</li>
              <li>Adapts one logic across multiple channels.</li>
            </ul>
          </article>
          <article class="principle-card dont-card">
            <p class="principle-label">The brand avoids</p>
            <ul>
              <li>Separating the piece from its goal and audience.</li>
              <li>Treating design as decoration without function.</li>
              <li>Breaking the process into disconnected stages.</li>
              <li>Placing green directly against violet.</li>
              <li>Using near-identical variants without defined roles.</li>
            </ul>
          </article>
        </div>
      </section>

      <section class="doc-section" id="logos">
        <div class="section-heading">
          <p class="section-index">02 / Logos</p>
          <h2>One confirmed file. All other versions remain <em>placeholders.</em></h2>
          <p>The only brand asset recovered from the site is a 500 × 500 px transparent PNG. Its color was sampled directly from the opaque pixels.</p>
        </div>

        <div class="logo-grid">
          <figure class="logo-sample logo-on-dark">
            <div class="logo-stage"><img src="${logoData}" alt="Rodrigo Cazuza wordmark in lime green" /></div>
            <figcaption>
              <strong>Current wordmark / dark background</strong>
              <code>#C1FF72</code>
              <span>Contrast on black: 17.81:1</span>
            </figcaption>
          </figure>
          <figure class="logo-sample logo-on-light">
            <div class="logo-stage"><img src="${logoData}" alt="Rodrigo Cazuza lime wordmark on white" /></div>
            <figcaption>
              <strong>Same file / light background</strong>
              <code>#C1FF72</code>
              <span class="warning-text">Contrast on white: 1.18:1—not recommended</span>
            </figcaption>
          </figure>
          <figure class="logo-sample placeholder-sample">
            <div class="logo-stage"><div class="placeholder-mark">LOGO<br>DARK</div></div>
            <figcaption>
              <strong>Dark version for light backgrounds</strong>
              <code>[FILE PENDING]</code>
              <span>Not extracted from the site.</span>
            </figcaption>
          </figure>
          <figure class="logo-sample placeholder-sample dark-placeholder">
            <div class="logo-stage"><div class="placeholder-mark">MONO<br>GRAM</div></div>
            <figcaption>
              <strong>Monogram / avatar / favicon</strong>
              <code>[FILE PENDING]</code>
              <span>Not extracted from the site.</span>
            </figcaption>
          </figure>
        </div>

        <div class="rules-panel">
          <div>
            <p class="rule-number">01</p>
            <h3>Confirmed application</h3>
            <p>The site places the mark on black, left-aligned, with <code>object-fit: contain</code>. Its CSS box is 10.8rem × 3.12rem on desktop and 8.4rem × 2.7rem below 480 px.</p>
          </div>
          <div>
            <p class="rule-number">02</p>
            <h3>Confirmed restriction</h3>
            <p>The file's lime green loses legibility on white. Until an approved dark version exists, use this file only on near-black backgrounds.</p>
          </div>
          <div>
            <p class="rule-number">03</p>
            <h3>Rule still missing</h3>
            <p>Clear space, minimum width, and monochrome treatments are not encoded on the site. They remain open.</p>
          </div>
        </div>
      </section>

      <section class="doc-section" id="colors">
        <div class="section-heading">
          <p class="section-index">03 / Colors</p>
          <h2>Dominant black, signal green, and <em>electric</em> violet.</h2>
          <p>The names below are the site's real CSS variable names. The logo color is listed separately because the file has no equivalent token.</p>
        </div>

        <div class="color-grid">
          <article class="color-card dark-ink" style="--swatch:#000000"><div class="swatch"></div><div><strong>Canvas Black</strong><code>#000000</code><span>--color-background</span><p>Base for every screen.</p></div></article>
          <article class="color-card" style="--swatch:#0d0d0d"><div class="swatch"></div><div><strong>Surface</strong><code>#0D0D0D</code><span>--color-surface</span><p>Quiet sections and surfaces.</p></div></article>
          <article class="color-card" style="--swatch:#1a1a1a"><div class="swatch"></div><div><strong>Panel Gray</strong><code>#1A1A1A</code><span>--color-surface-raised</span><p>Raised cards and panels.</p></div></article>
          <article class="color-card light-swatch" style="--swatch:#ffffff"><div class="swatch"></div><div><strong>Paper White</strong><code>#FFFFFF</code><span>--color-text-primary</span><p>Headings and priority text.</p></div></article>
          <article class="color-card light-swatch" style="--swatch:#b6b6bd"><div class="swatch"></div><div><strong>Secondary Text</strong><code>#B6B6BD</code><span>--color-text-secondary</span><p>Supporting text and metadata.</p></div></article>
          <article class="color-card" style="--swatch:#6026ec"><div class="swatch"></div><div><strong>Electric Violet</strong><code>#6026EC</code><span>--color-accent</span><p>Calls to action, focus, emphasis.</p></div></article>
          <article class="color-card" style="--swatch:#7a45ff"><div class="swatch"></div><div><strong>Accent Hover</strong><code>#7A45FF</code><span>--color-accent-hover</span><p>CTA hover state.</p></div></article>
          <article class="color-card" style="--swatch:#9b5cff"><div class="swatch"></div><div><strong>Accent Light</strong><code>#9B5CFF</code><span>--color-accent-light</span><p>Borders and gradients.</p></div></article>
          <article class="color-card" style="--swatch:#66d487"><div class="swatch"></div><div><strong>Signal Green</strong><code>#66D487</code><span>--color-green</span><p>Headings, numbers, and links.</p></div></article>
          <article class="color-card logo-color" style="--swatch:#c1ff72"><div class="swatch"></div><div><strong>Logo Lime</strong><code>#C1FF72</code><span>no token—PNG file</span><p>Exact color of the current logo.</p></div></article>
          <article class="color-card" style="--swatch:#ff6b6b"><div class="swatch"></div><div><strong>Danger</strong><code>#FF6B6B</code><span>--color-danger</span><p>Error state.</p></div></article>
        </div>

        <aside class="usage-note">
          <strong>Rule written in the source CSS</strong>
          <p>Approximate ratio: 80% black / 12% green / 6% violet / 2% white-gray. Green and violet should not touch directly; separate them with black.</p>
        </aside>
      </section>

      <section class="doc-section" id="typography">
        <div class="section-heading">
          <p class="section-index">04 / Typography</p>
          <h2>Geometric sans for impact, italic serif for <em>editorial warmth.</em></h2>
        </div>

        <div class="type-families">
          <article>
            <span class="type-letter poppins">Aa</span>
            <div><h3>Poppins</h3><p>Display / headings / buttons</p><code>500 · 600 · 700 · 800</code></div>
          </article>
          <article>
            <span class="type-letter playfair">Aa</span>
            <div><h3>Playfair Display Italic</h3><p>Highlighted editorial words</p><code>500 · 600 · 700</code></div>
          </article>
          <article>
            <span class="type-letter inter">Aa</span>
            <div><h3>Inter</h3><p>Body / interface / supporting text</p><code>400 · 500 · 600 · 700</code></div>
          </article>
        </div>

        <div class="table-wrap">
          <table class="type-table">
            <thead><tr><th>Use</th><th>Family / weight</th><th>Desktop</th><th>Mobile</th><th>CSS source</th></tr></thead>
            <tbody>
              <tr><td>Hero H1</td><td>Poppins 800</td><td>115.86 px <small>@1363 px</small></td><td>62.4 px <small>@390 px</small></td><td><code>clamp(3.6rem,8.5vw,8.2rem)</code><br><code>clamp(3rem,16vw,5rem)</code> ≤540</td></tr>
              <tr><td>Page H1</td><td>Poppins 800</td><td>80 px</td><td>40 px</td><td><code>clamp(2.5rem,6vw,5rem)</code></td></tr>
              <tr><td>H2</td><td>Poppins 700</td><td>47.7 px <small>@1363 px</small></td><td>30.4 px</td><td><code>clamp(1.9rem,3.5vw,3rem)</code></td></tr>
              <tr><td>H3</td><td>Poppins 700</td><td>28 px</td><td>28 px</td><td><code>--text-xl</code></td></tr>
              <tr><td>Body large</td><td>Inter 400</td><td>18 px</td><td>18 px</td><td><code>--text-md</code></td></tr>
              <tr><td>Body</td><td>Inter 400</td><td>16 px</td><td>16 px</td><td><code>--text-base</code></td></tr>
              <tr><td>Small / nav</td><td>Poppins / Inter</td><td>14 px</td><td>14 px</td><td><code>--text-sm</code></td></tr>
              <tr><td>Eyebrow</td><td>Poppins 600</td><td>14 px</td><td>11.2 px <small>≤480</small></td><td><code>--text-sm</code> / <code>.7rem</code></td></tr>
            </tbody>
          </table>
        </div>
          <p class="evidence-note">Mobile sizes are calculated directly from the site's CSS formulas at a 390 px reference width; they are not a new scale.</p>
      </section>

      <section class="doc-section" id="spacing">
        <div class="section-heading">
          <p class="section-index">05 / Spacing</p>
          <h2>A compact, legible scale based on <em>rem.</em></h2>
          <p>Values assume the site's standard 16 px root.</p>
        </div>
        <div class="spacing-list">
          <div><code>--space-3xs</code><span>4 px</span><i style="--w:4px"></i></div>
          <div><code>--space-2xs</code><span>8 px</span><i style="--w:8px"></i></div>
          <div><code>--space-xs</code><span>12 px</span><i style="--w:12px"></i></div>
          <div><code>--space-sm</code><span>16 px</span><i style="--w:16px"></i></div>
          <div><code>--space-md</code><span>24 px</span><i style="--w:24px"></i></div>
          <div><code>--space-lg</code><span>40 px</span><i style="--w:40px"></i></div>
          <div><code>--space-xl</code><span>64 px</span><i style="--w:64px"></i></div>
          <div><code>--space-2xl</code><span>96 px</span><i style="--w:96px"></i></div>
          <div class="fluid-space"><code>--space-section</code><span>56–112 px</span><i style="--w:112px"></i><small><code>clamp(3.5rem,6vw,7rem)</code></small></div>
        </div>
        <div class="layout-tokens">
          <article><span>Content</span><strong>1280 px</strong><code>--container-width</code></article>
          <article><span>Narrow reading</span><strong>860 px</strong><code>--container-narrow</code></article>
          <article><span>Page padding</span><strong>20–48 px</strong><code>clamp(1.25rem,4vw,3rem)</code></article>
          <article><span>Mobile padding ≤480</span><strong>16 px</strong><code>confirmed override</code></article>
        </div>
      </section>

      <section class="doc-section" id="components">
        <div class="section-heading">
          <p class="section-index">06 / Components</p>
          <h2>The building blocks that create rhythm and make the language <em>recognizable.</em></h2>
        </div>

        <div class="component-board">
          <article class="component-demo button-demo">
            <div class="demo-label"><span>Buttons</span><code>radius 999px</code></div>
            <div class="demo-body">
              <a class="brand-btn brand-btn-primary" href="#components">View my work</a>
              <a class="brand-btn brand-btn-secondary" href="#components">Get in touch</a>
            </div>
            <p>Primary: violet + white. Secondary: transparent + light border. Poppins 600, 16 px, padding 0.85em × 1.8em.</p>
          </article>

          <article class="component-demo card-demo">
            <div class="demo-label"><span>Card</span><code>radius 16px</code></div>
            <div class="live-card">
              <div class="live-card-art"><span>BRAND SYSTEM</span><strong>BodyFactory</strong><i>B</i></div>
              <div class="live-card-copy"><span>Brand Systems</span><h3>Visual system source material.</h3><a href="#componentes">View project ↘</a></div>
            </div>
            <p>#1A1A1A panel, white border at 14%, 4:3 media, and elevation on hover.</p>
          </article>

          <article class="component-demo eyebrow-demo">
            <div class="demo-label"><span>Eyebrow</span><code>tracking .14em</code></div>
            <div class="demo-body vertical"><p class="live-eyebrow">WHAT I DO</p><h3>A little <em>about me.</em></h3></div>
            <p>2 px line, uppercase Poppins, and an editorial word in italic Playfair.</p>
          </article>

          <article class="component-demo list-demo">
            <div class="demo-label"><span>Expertise row</span><code>min-height 9rem</code></div>
            <a class="expertise-demo" href="#components"><span>01</span><strong>Brand Systems</strong><p>Identity, typography, color and guidelines.</p><i>↘</i></a>
            <p>Green number, large title, description, and arrow. On hover: violet background and vertical shift.</p>
          </article>
        </div>
      </section>

      <section class="doc-section" id="applications">
        <div class="section-heading">
          <p class="section-index">07 / Applications</p>
          <h2>What is already proven—and what still needs to be <em>observed.</em></h2>
        </div>
        <div class="applications-grid">
          <article class="application-card website-app">
            <div class="application-top"><span>Website</span><span class="source-tag source-confirmed">audited</span></div>
            <div class="mini-browser">
              <div class="browser-bar"><i></i><i></i><i></i><code>rodrigocazuza.com</code></div>
              <div class="browser-canvas">
                <p>HEY, I'M A</p><h3>Multimedia<br><em>Designer</em></h3><a>View my work</a>
              </div>
            </div>
            <ul><li>Dominant black background</li><li>Photographic hero with dark overlays</li><li>Violet CTA and green accents</li><li>Poppins + Playfair for editorial contrast</li><li>Modular cards, fine borders, and rounded corners</li></ul>
          </article>
          <article class="application-card pending-app">
            <div class="application-top"><span>Instagram</span><span class="source-tag source-placeholder">placeholder</span></div>
            <div class="placeholder-canvas square"><span>1:1</span><strong>SCREENSHOTS<br>PENDING</strong><i></i></div>
            <p>The site confirms Instagram production exists, but it does not support reliable extraction of the grid, margins, sizes, or recurring treatments from the personal profile.</p>
          </article>
          <article class="application-card pending-app">
            <div class="application-top"><span>Proposals</span><span class="source-tag source-placeholder">placeholder</span></div>
            <div class="placeholder-canvas page"><span>A4 / US Letter</span><strong>FILES<br>PENDING</strong><i></i></div>
            <p>No commercial proposal is published on the site. Cover, header, table, signature, and CTA treatments must be extracted from your files.</p>
          </article>
        </div>
      </section>

      <section class="doc-section" id="implementation-prompt">
        <div class="section-heading row-heading">
          <div><p class="section-index">08 / Implementation mega prompt</p><h2>Invoke the system on <em>any platform.</em></h2></div>
          <button class="copy-button" type="button" data-copy-target="implementation-prompt-code">Copy mega prompt</button>
        </div>
        <div class="prompt-card">
          <div class="prompt-intro">
            <span class="source-tag source-confirmed">Reusable implementation brief</span>
            <p>Replace the bracketed inputs, then paste the prompt into your production tool, AI workspace, developer brief, Figma task, or content workflow. It carries confirmed rules forward and forces unknown values to remain visible.</p>
          </div>
          <div class="code-panel prompt-code-panel"><pre><code id="implementation-prompt-code">${implementationPrompt}</code></pre></div>
        </div>
      </section>

      <section class="doc-section" id="divergences">
        <div class="section-heading">
          <p class="section-index">09 / Divergences</p>
          <h2>Variations found that require a <em>conscious</em> decision.</h2>
        </div>
        <div class="divergence-list">
          <article><span>High</span><div><h3>Two brand greens</h3><p><code>#C1FF72</code> in the logo PNG versus <code>#66D487</code> in the <code>--color-green</code> token. The difference is real and visible.</p></div></article>
          <article><span>Medium</span><div><h3>Near-duplicate violet</h3><p><code>#6026EC</code> is the official token, while CSS-generated covers use <code>#632CFF</code>.</p></div></article>
          <article><span>Medium</span><div><h3>Near-duplicate green</h3><p><code>#66D487</code> is the official token, while one generated cover uses <code>#62D385</code>.</p></div></article>
          <article><span>Medium</span><div><h3>Teal and coral pairs vary</h3><p>The duotone gradient uses <code>#2EC5C5</code> / <code>#FF7A59</code>; specific covers use <code>#45C4B5</code> / <code>#FF5737</code>.</p></div></article>
          <article><span>Low</span><div><h3>Loaded fonts without a core role</h3><p>Anton, Bodoni Moda, and Work Sans load on the site but do not appear in the personal brand's three type tokens; some usage belongs to client projects.</p></div></article>
          <article><span>High</span><div><h3>Square canvas for a horizontal lockup</h3><p>The current file is 500 × 500 px even though its content is a two-line wordmark. This complicates scaling and minimum-width rules.</p></div></article>
        </div>
      </section>

      <section class="doc-section" id="open-decisions">
        <div class="section-heading">
          <p class="section-index">10 / Open decisions</p>
          <h2>What is still missing for the system to become <em>complete.</em></h2>
        </div>
        <div class="pending-grid">
          <article><span>01</span><h3>Logo package</h3><p>Dark, white, monochrome, horizontal, symbol, favicon, and vector files.</p></article>
          <article><span>02</span><h3>Green rule</h3><p>Decide whether the logo moves to #66D487 or #C1FF72 becomes a distinct official token.</p></article>
          <article><span>03</span><h3>Instagram</h3><p>Feed screenshots, approved posts, Reels covers, Stories, and recurring formats.</p></article>
          <article><span>04</span><h3>Proposals</h3><p>One or more PDFs/screenshots to measure cover, grid, hierarchy, tables, and signature.</p></article>
          <article><span>05</span><h3>Logo clear space</h3><p>Define the protection unit, minimum width, and prohibited uses.</p></article>
          <article><span>06</span><h3>Photographic treatment</h3><p>Validate exposure, temperature, saturation, crop, and overlay across a larger sample.</p></article>
          <article><span>07</span><h3>Priority audience</h3><p>The site lists services but does not yet explicitly choose an ideal client or priority sector.</p></article>
        </div>
      </section>

      <section class="doc-section" id="tokens">
        <div class="section-heading row-heading">
          <div><p class="section-index">11 / CSS tokens</p><h2>Ready to copy.</h2></div>
          <button class="copy-button" type="button" data-copy-target="token-code">Copy CSS</button>
        </div>
        <div class="code-panel"><pre><code id="token-code">${tokenCode}</code></pre></div>
        <p class="evidence-note">This block transcribes the site's existing tokens. The logo's #C1FF72 was not automatically added because doing so requires a system decision.</p>
      </section>

      <section class="doc-section" id="checklist">
        <div class="section-heading">
          <p class="section-index">12 / Approval checklist</p>
          <h2>Before you <em>publish.</em></h2>
          <p>Progress is saved only in this browser.</p>
        </div>
        <div class="checklist-progress"><div><span></span></div><p><strong id="check-count">0</strong> of 12 checked</p></div>
        <form class="approval-list" id="approval-list">
          <label><input type="checkbox" data-check="positioning"><span>The positioning and “what I do” statement are correct for the channel.</span></label>
          <label><input type="checkbox" data-check="audience"><span>The content speaks to the approved priority audience.</span></label>
          <label><input type="checkbox" data-check="logo"><span>The logo version is correct for the background.</span></label>
          <label><input type="checkbox" data-check="contrast"><span>The logo and text pass contrast requirements.</span></label>
          <label><input type="checkbox" data-check="colors"><span>Every hexadecimal value belongs to the approved palette.</span></label>
          <label><input type="checkbox" data-check="type"><span>Poppins, Playfair, and Inter are used in their defined roles.</span></label>
          <label><input type="checkbox" data-check="spacing"><span>Spacing uses the 4, 8, 12, 16, 24, 40, 64, or 96 px scale.</span></label>
          <label><input type="checkbox" data-check="touch"><span>Green and violet do not touch directly without black separation.</span></label>
          <label><input type="checkbox" data-check="mobile"><span>The piece was checked on mobile and creates no horizontal scrolling.</span></label>
          <label><input type="checkbox" data-check="copy"><span>Hierarchy, CTA, spelling, and language have been reviewed.</span></label>
          <label><input type="checkbox" data-check="images"><span>Image, crop, overlay, and alternative text have been checked.</span></label>
          <label><input type="checkbox" data-check="channel"><span>The adaptation respects the channel's format and purpose.</span></label>
        </form>
        <button class="reset-checklist" type="button">Clear checklist</button>
      </section>

      <footer class="system-footer">
        <img src="${logoData}" alt="Rodrigo Cazuza" />
        <p>Working document · based on the live site and published logo file · placeholders await the remaining attachments.</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </div>
  </main>
`;

export const brandScript = String.raw`
(() => {
  const root = document.documentElement;
  const menu = document.querySelector('.mobile-menu');
  const sidebar = document.querySelector('.sidebar');
  const scrim = document.querySelector('.nav-scrim');
  const closeMenu = () => {
    root.classList.remove('menu-open');
    menu?.setAttribute('aria-expanded', 'false');
  };
  menu?.addEventListener('click', () => {
    const open = root.classList.toggle('menu-open');
    menu.setAttribute('aria-expanded', String(open));
  });
  scrim?.addEventListener('click', closeMenu);
  sidebar?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));

  const navLinks = [...document.querySelectorAll('.sidebar nav a')];
  const sections = navLinks.map((link) => document.querySelector(link.getAttribute('href'))).filter(Boolean);
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id));
      });
    }, { rootMargin: '-18% 0px -70% 0px' });
    sections.forEach((section) => observer.observe(section));
  }

  document.querySelectorAll('[data-copy-target]').forEach((button) => {
    button.addEventListener('click', async () => {
      const target = document.getElementById(button.dataset.copyTarget);
      if (!target) return;
      const originalLabel = button.dataset.originalLabel || button.textContent;
      button.dataset.originalLabel = originalLabel;
      try {
        await navigator.clipboard.writeText(target.textContent || '');
        button.textContent = 'Copied';
      } catch {
        const range = document.createRange();
        range.selectNodeContents(target);
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        button.textContent = 'Selected';
      }
      setTimeout(() => { button.textContent = originalLabel; }, 1800);
    });
  });

  const checks = [...document.querySelectorAll('[data-check]')];
  const count = document.getElementById('check-count');
  const bar = document.querySelector('.checklist-progress div span');
  const storageKey = 'rodrigo-brand-checklist-v01';
  const update = () => {
    const done = checks.filter((check) => check.checked).length;
    if (count) count.textContent = String(done);
    if (bar) bar.style.width = (done / checks.length * 100) + '%';
    try { localStorage.setItem(storageKey, JSON.stringify(checks.filter((check) => check.checked).map((check) => check.dataset.check))); } catch {}
  };
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || '[]');
    checks.forEach((check) => { check.checked = saved.includes(check.dataset.check); });
  } catch {}
  checks.forEach((check) => check.addEventListener('change', update));
  document.querySelector('.reset-checklist')?.addEventListener('click', () => { checks.forEach((check) => { check.checked = false; }); update(); });
  update();
})();
`;
