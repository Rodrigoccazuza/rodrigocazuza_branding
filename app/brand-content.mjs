import { logoData, logoInkData } from "./brand-data.mjs";

const tokenCode = `/* Rodrigo Cazuza Website Design System v1.0
   Source: rodrigocazuza.com (css/neu-system.css + css/site-refinements.css), audited 11 Oct 2026.
   Light is the default theme; dark is opt-in via html.neu-dark (saved as localStorage "rc-theme"). */

:root {
  color-scheme: light;

  /* Surface + text */
  --neu-bg: #e6e7eb;            /* the one surface every element is cut from */
  --neu-bg-deep: #dcdee3;       /* media wells, image placeholders */
  --neu-text: #2b2d33;          /* headings, primary text (11.14:1) */
  --neu-text-2: #5d616b;        /* body, supporting text (5.02:1) */
  --neu-text-3: #7c808a;        /* metadata, handles, large text only (3.2:1) */
  --border: rgba(43, 45, 51, .08);

  /* Brand accents */
  --neu-violet: #6026ec;        /* Electric Violet: CTAs, links, focus, emphasis */
  --neu-violet-2: #7a45ff;      /* violet hover */
  --neu-green: #66d487;         /* Signal Green: fills, dots, rims, footer panel */
  --neu-green-text: #17663a;    /* Ink Green: green as text on the light surface */
  --neu-green-ink: #1d7a42;
  --logo-lime: #c1ff72;         /* wordmark file color on dark surfaces only */

  /* Depth: light source top-left. Raised = extruded, inset = pressed. */
  --neu-dark: rgba(158, 164, 178, .62);
  --neu-light: rgba(255, 255, 255, .95);
  --neu-raised-xs: 3px 3px 7px var(--neu-dark), -3px -3px 7px var(--neu-light);
  --neu-raised-sm: 5px 5px 12px var(--neu-dark), -5px -5px 12px var(--neu-light);
  --neu-raised: 9px 9px 22px var(--neu-dark), -9px -9px 22px var(--neu-light);
  --neu-raised-hover: 12px 12px 28px var(--neu-dark), -12px -12px 28px var(--neu-light);
  --neu-inset-sm: inset 3px 3px 7px var(--neu-dark), inset -3px -3px 7px var(--neu-light);
  --neu-inset: inset 5px 5px 11px var(--neu-dark), inset -5px -5px 11px var(--neu-light);
  --green-rim: 0 0 0 2px rgba(102, 212, 135, .75);
  --green-glow: 0 18px 38px -16px rgba(102, 212, 135, .7);

  /* Gradients */
  --gradient-primary: linear-gradient(145deg, #7340f5, #5520d6);
  --gradient-primary-hover: linear-gradient(145deg, #8455ff, #6026ec);
  --gradient-visit: linear-gradient(145deg, #7be29a, #55c477);
  --gradient-footer-panel: linear-gradient(150deg, #78de97 0%, #66d487 45%, #57c978 100%);

  /* Typography */
  --font-display: "Poppins", "Helvetica Neue", Arial, sans-serif;
  --font-serif: "Playfair Display", Georgia, "Times New Roman", serif;
  --font-body: "Inter", "Helvetica Neue", Arial, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --font-dot: "Array", "Arial Black", sans-serif;          /* hero "DESIGNER" only */
  --font-script: "Shrikhand", "Playfair Display", serif;   /* hero rotating role only */

  /* Spacing: 4px base */
  --space-1: 4px;  --space-2: 8px;   --space-3: 12px;  --space-4: 16px;
  --space-5: 20px; --space-6: 24px;  --space-8: 32px;  --space-10: 40px;
  --space-12: 48px; --space-16: 64px; --space-20: 80px; --space-24: 96px;
  --gutter: clamp(20px, 4vw, 48px);
  --section-y: clamp(56px, 6vw + 20px, 104px);
  --card-gap: clamp(16px, 2vw, 24px);
  --card-pad: clamp(20px, 2.4vw, 32px);
  --container-width: 1280px;

  /* Radius: 0.75 x the first neumorphic pass */
  --radius-xs: 6px;  --radius-sm: 10px; --radius-md: 15px;
  --radius-lg: 21px; --radius-xl: 27px; --radius-pill: 999px;

  /* Motion */
  --neu-ease: cubic-bezier(.22, .61, .36, 1);
  --ease-stack: cubic-bezier(.23, 1, .32, 1);
  --ease-wipe: cubic-bezier(.76, 0, .24, 1);
  --duration-fast: .25s;
  --duration-base: .35s;
  --duration-slow: .45s;
  --duration-emphasis: .5s;
}

:root[data-theme="dark"], html.neu-dark {
  color-scheme: dark;
  --neu-bg: #23252a;
  --neu-bg-deep: #1d1f23;
  --neu-text: #eceef2;
  --neu-text-2: #aeb2bc;
  --neu-text-3: #8d929c;
  --neu-violet: #a88cff;
  --neu-green-text: #6fdc91;
  --neu-dark: rgba(0, 0, 0, .55);
  --neu-light: rgba(255, 255, 255, .055);
  --border: rgba(255, 255, 255, .08);
}`;

export const themeInitScript = String.raw`
(() => {
  try {
    const savedTheme = localStorage.getItem('rodrigo-brand-theme');
    document.documentElement.dataset.theme = savedTheme === 'dark' ? 'dark' : 'light';
  } catch {
    document.documentElement.dataset.theme = 'light';
  }
})();
`;

const implementationPrompt = `You are implementing the Rodrigo Cazuza Website Design System v1.0 for [PLATFORM / FORMAT].

PROJECT INPUTS
- Goal: [WHAT THIS MUST ACHIEVE]
- Deliverable: [PAGE, SECTION, COMPONENT, EMAIL, SOCIAL POST, DECK, FIGMA FILE, OR OTHER]
- Audience: [PRIMARY AUDIENCE]
- Breakpoints / dimensions: [390 MOBILE, 768 TABLET, 1440 DESKTOP, OR CHANNEL SIZE]
- Theme: [LIGHT (DEFAULT) / DARK / BOTH]
- Content supplied: [COPY, IMAGES, LOGOS, DATA]
- Constraints: [ACCESSIBILITY, DEADLINE, STACK]

SOURCE OF TRUTH
Use only the values below. Never invent a color, font, radius, shadow, or spacing value. If a value is missing, write [NEEDS DECISION] and ask one focused question.

DESIGN LANGUAGE: SOFT NEUMORPHISM
- Every element is cut from one surface: light #E6E7EB, dark #23252A.
- Depth comes from paired shadows with a top-left light source. Raised = extruded (cards, buttons, chips). Inset = pressed (inputs, selected and active states, media wells).
- No borders on cards. Separation comes from shadow, not lines.
- Accents are signals, not backgrounds: Electric Violet #6026EC (dark theme #A88CFF) for actions, links, focus and emphasis; Signal Green #66D487 for fills, dots, hover rims and the footer panel. Green as text on light uses Ink Green #17663A.

TYPE ROLES
- Poppins 500-800: display, headings, buttons, labels. Headings use negative tracking (-0.015em to -0.06em).
- Inter 400-700: body and interface copy (16px / 1.6).
- Playfair Display Italic 500: one or two editorial accent words per heading, colored violet.
- JetBrains Mono 500-700: handles, dates, metadata eyebrows.
- Array (dot display) and Shrikhand: hero only. Do not reuse elsewhere.
- Eyebrows: Poppins 600, 14px (11.2px mobile), uppercase, tracking 0.14em, no leading dash.

TOKENS
- Spacing 4px base: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96.
- Gutter clamp(20px, 4vw, 48px). Section padding clamp(56px, 6vw + 20px, 104px). Card gap clamp(16px, 2vw, 24px). Card padding clamp(20px, 2.4vw, 32px).
- Radius: 6 (xs), 10 (sm: media frames, thumbnails), 15 (md: tiles, rows, inputs), 21 (lg: panels, compact cards), 27 (xl: hero cards, players, footer), 999 (buttons, chips only).
- Shadows: raised-xs 3/7, raised-sm 5/12, raised 9/22, raised-hover 12/28, inset-sm 3/7, inset 5/11.
- Motion: ease cubic-bezier(.22,.61,.36,1); 0.25s fades, 0.35s color/shadow, 0.45s lift, 0.5s emphasis. Hover lift -2px (buttons) or -4px (cards). Respect prefers-reduced-motion.

COMPONENT RULES
- Primary button: violet gradient pill, white Poppins 600, raised violet shadow; hover lifts 1-2px; active is pressed.
- Secondary button: surface pill, raised-sm; hover adds the green rim and Ink Green text.
- Live-site button ("Visit website"): green gradient pill with #0E2A18 text.
- Cards: surface + raised shadow + radius-xl; hover lifts 4px and adds green rim + green glow.
- Section labels: raised pill, green dot, uppercase eyebrow.
- Inputs: pressed (inset) wells, radius-md, 16px text; focus adds a 2px violet ring.

OUTPUT CONTRACT
Return: A. requirement-to-token mapping; B. the implementation or spec; C. mobile / tablet / desktop behavior; D. contrast and accessibility checks for both themes; E. every [NEEDS DECISION] item; F. the pre-publish checklist result.

QUALITY GATE
Confirm: one surface per theme; no card borders; correct logo per surface (Lime on dark, Ink Green on light); only listed hex values; type in its role; spacing and radius on scale; no horizontal overflow at 360-1440px; visible focus; reduced-motion respected. Do not claim completion while a value was silently invented.`;

const swatch = (name, hex, token, role, ratio, extra = "") =>
  `<article class="swatch-card${extra}" style="--swatch:${hex}"><div class="swatch-chip"></div><div class="swatch-copy"><strong>${name}</strong><code>${hex.toUpperCase()}</code><span>${token}</span><p>${role}</p>${ratio ? `<small>${ratio}</small>` : ""}</div></article>`;

export const brandMarkup = String.raw`
  <button class="mobile-menu" type="button" aria-controls="sidebar" aria-expanded="false">
    <span>Index</span><span aria-hidden="true">☰</span>
  </button>
  <div class="nav-scrim" aria-hidden="true"></div>

  <aside class="sidebar" id="sidebar" aria-label="Design system navigation">
    <div class="sidebar-brand">
      <img class="logo-light" src="${logoInkData}" alt="Rodrigo Cazuza" />
      <img class="logo-dark" src="${logoData}" alt="" aria-hidden="true" />
      <p>Website design system <span>v1.0</span></p>
    </div>
    <nav>
      <a href="#foundation"><span>01</span>Foundation</a>
      <a href="#logo"><span>02</span>Logo</a>
      <a href="#color"><span>03</span>Color</a>
      <a href="#typography"><span>04</span>Typography</a>
      <a href="#layout"><span>05</span>Layout &amp; grid</a>
      <a href="#spacing"><span>06</span>Spacing</a>
      <a href="#radius"><span>07</span>Radius</a>
      <a href="#elevation"><span>08</span>Elevation</a>
      <a href="#motion"><span>09</span>Motion</a>
      <a href="#icons"><span>10</span>Iconography</a>
      <a href="#buttons"><span>11</span>Buttons</a>
      <a href="#components"><span>12</span>Components</a>
      <a href="#forms"><span>13</span>Forms</a>
      <a href="#accessibility"><span>14</span>Accessibility</a>
      <a href="#implementation-prompt"><span>15</span>Mega prompt</a>
      <a href="#divergences"><span>16</span>Divergences</a>
      <a href="#tokens"><span>17</span>CSS tokens</a>
      <a href="#checklist"><span>18</span>Checklist</a>
    </nav>
    <button class="theme-toggle" type="button" data-theme-toggle aria-pressed="false" aria-label="Switch to dark mode">
      <span class="theme-toggle-track" aria-hidden="true"><i></i></span>
      <span data-theme-label>Dark mode</span>
    </button>
    <div class="sidebar-foot">
      <span class="status-dot"></span>
      <p>Measured on the live site<br><strong>11 Oct 2026</strong></p>
    </div>
  </aside>

  <main class="main-content">
    <div class="reading-shell">
      <header class="system-hero" id="top">
        <div class="hero-meta">
          <span class="source-tag source-confirmed">Measured at 390 · 768 · 1440 px</span>
          <a href="https://rodrigocazuza.com" target="_blank" rel="noopener noreferrer">rodrigocazuza.com ↗</a>
        </div>
        <p class="kicker">Rodrigo Cazuza / Website design system</p>
        <h1>One soft surface, two signals, and a <em>clear</em> hierarchy.</h1>
        <p class="hero-lead">The complete visual language of rodrigocazuza.com: tokens, type, layout, depth, motion, and every component, documented from the production site in light and dark themes.</p>
        <div class="audit-summary" aria-label="System summary">
          <div><strong>2</strong><span>themes, one surface each</span></div>
          <div><strong>6</strong><span>type families with fixed roles</span></div>
          <div><strong>12</strong><span>spacing steps on a 4px base</span></div>
          <div><strong>6</strong><span>radius tokens</span></div>
        </div>
      </header>

      <div class="legend" aria-label="Evidence legend">
        <span><i class="legend-dot confirmed"></i>Measured on site</span>
        <span><i class="legend-dot file"></i>Sampled from file</span>
        <span><i class="legend-dot inference"></i>Recommendation</span>
        <span><i class="legend-dot placeholder"></i>Open decision</span>
      </div>

      <!-- 01 FOUNDATION -->
      <section class="doc-section" id="foundation">
        <div class="section-heading">
          <p class="section-index">01 / Foundation</p>
          <h2>Tactile, calm, and built to make the work the <em>loudest</em> thing on screen.</h2>
          <p>The site moved from a black, high-contrast canvas to soft neumorphism: every element is pressed out of, or into, a single surface. Color is reserved for meaning.</p>
        </div>
        <div class="principles-grid">
          <article class="neu-card"><span class="principle-num">01</span><h3>One surface</h3><p>Background, cards, buttons, and inputs share one tone per theme. Hierarchy comes from depth, not from new colors.</p></article>
          <article class="neu-card"><span class="principle-num">02</span><h3>Light from the top left</h3><p>Every shadow pair is a dark shadow down-right and a light highlight up-left. Never mix directions.</p></article>
          <article class="neu-card"><span class="principle-num">03</span><h3>Raised acts, pressed is chosen</h3><p>Raised means interactive. Pressed (inset) means selected, active, or an input waiting for text.</p></article>
          <article class="neu-card"><span class="principle-num">04</span><h3>Two signals</h3><p>Electric Violet asks for action. Signal Green confirms hover, progress, and success. Neither becomes a page background.</p></article>
          <article class="neu-card"><span class="principle-num">05</span><h3>Editorial type</h3><p>Heavy Poppins headings with tight tracking, one italic Playfair word for warmth, and Inter for reading.</p></article>
          <article class="neu-card"><span class="principle-num">06</span><h3>Motion with intent</h3><p>Short, eased lifts and reveals that explain state. Everything settles; nothing loops for decoration except the tool marquee.</p></article>
        </div>
        <div class="subsection">
          <h3>Personality</h3>
          <div class="adjective-row"><span>Strategic</span><span>Clear</span><span>Tactile</span><span>Editorial</span><span>Practical</span></div>
          <p class="evidence-note"><strong>Positioning:</strong> multimedia design and front-end development shaped around strategy, story, and real-world production. Based in New York City.</p>
        </div>
        <div class="do-dont-grid">
          <article class="principle-card do-card">
            <p class="principle-label">Do</p>
            <ul>
              <li>Cut every component from the theme surface.</li>
              <li>Use raised for interactive, inset for selected or input.</li>
              <li>Keep accents small: buttons, dots, rims, one italic word.</li>
              <li>Let the portfolio media carry the color.</li>
              <li>Check both themes and three breakpoints.</li>
            </ul>
          </article>
          <article class="principle-card dont-card">
            <p class="principle-label">Don't</p>
            <ul>
              <li>Add borders around cards or new background tints.</li>
              <li>Use Signal Green #66D487 as text on the light surface.</li>
              <li>Stack more than one italic accent word per heading.</li>
              <li>Use pill radius on cards or panels.</li>
              <li>Start section labels with a dash or rule.</li>
            </ul>
          </article>
        </div>
      </section>

      <!-- 02 LOGO -->
      <section class="doc-section" id="logo">
        <div class="section-heading">
          <p class="section-index">02 / Logo</p>
          <h2>One wordmark, two colors, chosen by the <em>surface.</em></h2>
          <p>The two-line lowercase wordmark ships as a 500 × 500 px transparent PNG in two colorways. The theme picks the file automatically in the navigation.</p>
        </div>
        <div class="logo-grid">
          <figure class="logo-sample logo-on-light">
            <div class="logo-stage"><img src="${logoInkData}" alt="Rodrigo Cazuza wordmark in Ink Green on the light surface" /></div>
            <figcaption><strong>Ink Green / light theme</strong><code>#17663A</code><span>rodrigo-cazuza-wordmark-ink-green.png · 5.67:1 on #E6E7EB</span></figcaption>
          </figure>
          <figure class="logo-sample logo-on-dark">
            <div class="logo-stage"><img src="${logoData}" alt="Rodrigo Cazuza wordmark in Signal Lime on the dark surface" /></div>
            <figcaption><strong>Signal Lime / dark theme</strong><code>#C1FF72</code><span>rodrigo-cazuza-wordmark.png · use on #23252A or darker</span></figcaption>
          </figure>
          <figure class="logo-sample logo-on-green">
            <div class="logo-stage"><img src="${logoInkData}" alt="Rodrigo Cazuza wordmark in Ink Green on Signal Green" /></div>
            <figcaption><strong>Ink Green / Signal Green panel</strong><code>#17663A on #66D487</code><span>Footer and green panels</span></figcaption>
          </figure>
        </div>
        <div class="spec-table-wrap">
          <table class="spec-table">
            <thead><tr><th>Placement</th><th>Rendered box</th><th>File</th><th>Notes</th></tr></thead>
            <tbody>
              <tr><td>Navigation</td><td>86 × 42 px (all breakpoints)</td><td>Ink Green (light) / Lime (dark)</td><td>Left-aligned in the floating nav pill, <code>object-fit: contain</code>.</td></tr>
              <tr><td>Favicon</td><td>500 × 279 px source</td><td><code>images/site/logo.png</code></td><td>Lime on transparent. Apple touch icon 180 × 180 px.</td></tr>
              <tr><td>Footer identity</td><td>Text lockup</td><td>Poppins 800, lowercase</td><td>“Rodrigo Cazuza.” at 72 px desktop / 40 px mobile, tracking −0.06em.</td></tr>
              <tr><td>Preloader</td><td>Name + 3D portrait</td><td>Character render</td><td>Name and progress count beneath a bottom-up portrait reveal.</td></tr>
            </tbody>
          </table>
        </div>
        <div class="rules-panel">
          <div><p class="rule-number">01</p><h3>Match the surface</h3><p>Ink Green on light surfaces and green panels. Signal Lime on dark surfaces only (17.8:1 on black, 1.18:1 on white).</p></div>
          <div><p class="rule-number">02</p><h3>Minimum size</h3><p>Do not render the wordmark box below 86 px wide, its navigation size.</p></div>
          <div><p class="rule-number">03</p><h3>Clear space</h3><p><span class="source-tag source-placeholder">Open</span> Recommended: one lowercase “o” height on every side. Not yet encoded on the site.</p></div>
        </div>
      </section>

      <!-- 03 COLOR -->
      <section class="doc-section" id="color">
        <div class="section-heading">
          <p class="section-index">03 / Color</p>
          <h2>A single surface per theme, with violet and green as <em>signals.</em></h2>
          <p>Light is the default. The saved choice is applied before first paint and switched with a 0.45 s cross-fade.</p>
        </div>
        <div class="theme-groups" aria-label="Theme color groups">
          <article class="theme-group theme-group-light">
            <div><span>Light theme · default</span><strong>Mist surface</strong></div>
            <div class="theme-group-swatches"><i style="--tone:#e6e7eb"></i><i style="--tone:#dcdee3"></i><i style="--tone:#2b2d33"></i><i style="--tone:#6026ec"></i><i style="--tone:#66d487"></i></div>
            <p>Surface #E6E7EB, wells #DCDEE3, ink #2B2D33, violet #6026EC, green #66D487.</p>
          </article>
          <article class="theme-group theme-group-dark">
            <div><span>Dark theme · html.neu-dark</span><strong>Graphite surface</strong></div>
            <div class="theme-group-swatches"><i style="--tone:#23252a"></i><i style="--tone:#1d1f23"></i><i style="--tone:#eceef2"></i><i style="--tone:#a88cff"></i><i style="--tone:#6fdc91"></i></div>
            <p>Surface #23252A, wells #1D1F23, text #ECEEF2, violet lifts to #A88CFF, green text #6FDC91.</p>
          </article>
        </div>

        <h3 class="group-title">Surface &amp; text · light</h3>
        <div class="color-grid">
          ${swatch("Mist Surface", "#e6e7eb", "--neu-bg", "Page, cards, buttons, inputs.", "")}
          ${swatch("Mist Deep", "#dcdee3", "--neu-bg-deep", "Media wells and image placeholders.", "")}
          ${swatch("Ink", "#2b2d33", "--neu-text", "Headings and primary text.", "11.14:1 on surface")}
          ${swatch("Slate", "#5d616b", "--neu-text-2", "Body and supporting copy.", "5.02:1 on surface")}
          ${swatch("Steel", "#7c808a", "--neu-text-3", "Metadata and handles, 18px+ or decorative.", "3.2:1 on surface")}
        </div>
        <h3 class="group-title">Surface &amp; text · dark</h3>
        <div class="color-grid">
          ${swatch("Graphite Surface", "#23252a", "--neu-bg", "Page, cards, buttons, inputs.", "")}
          ${swatch("Graphite Deep", "#1d1f23", "--neu-bg-deep", "Media wells.", "")}
          ${swatch("Frost", "#eceef2", "--neu-text", "Headings and primary text.", "13.2:1 on surface")}
          ${swatch("Fog", "#aeb2bc", "--neu-text-2", "Body copy.", "7.22:1 on surface")}
          ${swatch("Ash", "#8d929c", "--neu-text-3", "Metadata.", "4.91:1 on surface")}
        </div>
        <h3 class="group-title">Brand accents</h3>
        <div class="color-grid">
          ${swatch("Electric Violet", "#6026ec", "--neu-violet", "Primary CTA, links, focus ring, italic accent.", "5.69:1 on light · white text 7.03:1")}
          ${swatch("Violet Hover", "#7a45ff", "--neu-violet-2", "Hover for violet text and fills.", "")}
          ${swatch("Violet (dark theme)", "#a88cff", "--neu-violet · dark", "Links and accents on graphite.", "5.74:1 on dark")}
          ${swatch("Signal Green", "#66d487", "--neu-green", "Fills, status dots, hover rim, footer panel.", "Fill only on light: 1.5:1 as text")}
          ${swatch("Ink Green", "#17663a", "--neu-green-text", "Green text and logo on light.", "5.67:1 on light")}
          ${swatch("Mint (dark theme)", "#6fdc91", "--neu-green-text · dark", "Green text on graphite.", "9.0:1 on dark")}
          ${swatch("Signal Lime", "#c1ff72", "logo file only", "Wordmark on dark surfaces.", "Not a UI token")}
        </div>
        <h3 class="group-title">Footer &amp; feedback</h3>
        <div class="color-grid">
          ${swatch("Night Card", "#0b0b0c", "footer CTA", "Fixed dark CTA card in both themes, violet + green radial glows.", "#F4F5F7 text 18.03:1")}
          ${swatch("Forest Ink", "#0d2416", "--ft-ink", "Footer headings on the green panel.", "8.85:1 on #66D487")}
          ${swatch("Moss", "#1f4a2e", "--ft-ink-2", "Footer body and links.", "5.46:1 on #66D487")}
          ${swatch("Visit Ink", "#0e2a18", "Visit button text", "Text on the green live-site button.", "8.31:1 on #66D487")}
          ${swatch("Content gap", "#5a3d12", ".content-gap", "Inline notice for missing content.", "")}
        </div>
        <h3 class="group-title">Platform colors · Elsewhere section only</h3>
        <div class="color-grid">
          ${swatch("Behance", "#1769ff", "--platform", "Icon + hover fill.", "")}
          ${swatch("YouTube", "#ff0033", "--platform", "Icon + hover fill.", "")}
          ${swatch("GitHub", "#181717", "--platform", "Light theme. Dark theme uses #F0F2F5.", "")}
          ${swatch("LinkedIn", "#0a66c2", "--platform", "Icon + hover fill.", "")}
        </div>
        <div class="gradient-row">
          <div style="background:linear-gradient(145deg,#7340f5,#5520d6)"><span>Primary button</span><code>145° #7340F5 → #5520D6</code></div>
          <div style="background:linear-gradient(145deg,#8455ff,#6026ec)"><span>Primary hover</span><code>145° #8455FF → #6026EC</code></div>
          <div class="ink" style="background:linear-gradient(145deg,#7be29a,#55c477)"><span>Visit website</span><code>145° #7BE29A → #55C477</code></div>
          <div class="ink" style="background:linear-gradient(150deg,#78de97 0%,#66d487 45%,#57c978 100%)"><span>Footer panel</span><code>150° #78DE97 → #66D487 → #57C978</code></div>
        </div>
        <aside class="usage-note"><strong>Ratio</strong><p>Roughly 90% surface, 5% ink, 3% violet, 2% green. Color from portfolio media is welcome; UI color is not.</p></aside>
      </section>

      <!-- 04 TYPOGRAPHY -->
      <section class="doc-section" id="typography">
        <div class="section-heading">
          <p class="section-index">04 / Typography</p>
          <h2>Heavy geometric headings, a warm italic, and a quiet <em>reading</em> face.</h2>
        </div>
        <div class="type-families">
          <article class="neu-card"><span class="type-letter poppins">Aa</span><div><h3>Poppins</h3><p>Display, headings, buttons, nav, labels</p><code>500 · 600 · 700 · 800</code></div></article>
          <article class="neu-card"><span class="type-letter inter">Aa</span><div><h3>Inter</h3><p>Body, descriptions, form fields</p><code>400 · 500 · 600 · 700</code></div></article>
          <article class="neu-card"><span class="type-letter playfair">Aa</span><div><h3>Playfair Display Italic</h3><p>One accent word per heading, violet</p><code>500 · 600</code></div></article>
          <article class="neu-card"><span class="type-letter mono">Aa</span><div><h3>JetBrains Mono</h3><p>Handles, dates, career eyebrows</p><code>500 · 700</code></div></article>
          <article class="neu-card"><span class="type-letter dot">DS</span><div><h3>Array</h3><p>Hero “DESIGNER” dot display only</p><code>400 · Fontshare</code></div></article>
          <article class="neu-card"><span class="type-letter script">Aa</span><div><h3>Shrikhand</h3><p>Hero rotating role word only</p><code>400 · Google Fonts</code></div></article>
        </div>

        <div class="type-specimen neu-card">
          <p class="spec-eyebrow">Design systems</p>
          <p class="spec-h1">A little <em>about me.</em></p>
          <p class="spec-h2">Web experiences built with intent</p>
          <p class="spec-h3">Tainá Photography Brand Manual</p>
          <p class="spec-body">I create brand systems, email campaigns, paid social assets, websites, and video content that help businesses communicate clearly and grow.</p>
          <p class="spec-mono">@rodrigoccazuza · October 2025 to Present</p>
        </div>

        <div class="spec-table-wrap">
          <table class="spec-table type-table">
            <thead><tr><th>Role</th><th>Family / weight</th><th>Mobile 390</th><th>Tablet 768</th><th>Desktop 1440</th><th>Tracking / case</th></tr></thead>
            <tbody>
              <tr><td>Hero dot display</td><td>Array 700</td><td>62.4 / 56</td><td>120 / 108</td><td>250 / 210</td><td>−0.018em · upper · Signal Green</td></tr>
              <tr><td>Hero kicker</td><td>Poppins 800</td><td>27.3 / 30</td><td>43 / 47.3</td><td>53.3 / 54.9</td><td>−0.055em</td></tr>
              <tr><td>Hero rotating role</td><td>Shrikhand 400</td><td>35.1</td><td>31</td><td>73.4</td><td>+0.035em · violet</td></tr>
              <tr><td>Page H1 (Contact)</td><td>Poppins 800 + Playfair</td><td>—</td><td>—</td><td>100.8</td><td>−0.03em</td></tr>
              <tr><td>About H2</td><td>Poppins 700</td><td>46 / 44.2</td><td>46.1 / 44.2</td><td>86.4 / 82.9</td><td>−0.055em</td></tr>
              <tr><td>Section H2</td><td>Poppins 700</td><td>32 / 35.8</td><td>32 / 35.8</td><td>56 / 62.7</td><td>−0.015em</td></tr>
              <tr><td>Showcase H3 (Email)</td><td>Poppins 700</td><td>36 / 37.8</td><td>38.4 / 40.3</td><td>72 / 75.6</td><td>−0.015em</td></tr>
              <tr><td>Footer CTA H2</td><td>Poppins 700</td><td>31.4 / 28.9</td><td>32.3 / 29.7</td><td>60.5 / 55.6</td><td>−0.015em</td></tr>
              <tr><td>Detail H3</td><td>Poppins 700</td><td>36 / 37.8</td><td>36 / 37.8</td><td>36 / 37.8</td><td>−0.015em</td></tr>
              <tr><td>Card title</td><td>Poppins 700</td><td>16.8 / 17.6</td><td>17.7 / 18.5</td><td>24 / 25.2</td><td>−0.015em</td></tr>
              <tr><td>Platform card name</td><td>Poppins 700</td><td>18 / 19.8</td><td>22 / 24.2</td><td>27.4 / 30.1</td><td>−0.02em</td></tr>
              <tr><td>Hero statement title</td><td>Poppins 700</td><td>15 / 20.1</td><td>16 / 20.8</td><td>24 / 31.2</td><td>−0.02em</td></tr>
              <tr><td>Body</td><td>Inter 400</td><td>16 / 25.6</td><td>16 / 25.6</td><td>16 / 25.6</td><td>0</td></tr>
              <tr><td>Body small</td><td>Inter 400</td><td>13 / 20.8</td><td>13 / 20.8</td><td>13 / 20.8</td><td>0</td></tr>
              <tr><td>Eyebrow / section label</td><td>Poppins 600</td><td>11.2</td><td>14</td><td>14</td><td>+0.11–0.14em · upper</td></tr>
              <tr><td>Nav link</td><td>Poppins 600</td><td>17 / 27.2 (menu)</td><td>17 / 27.2 (menu)</td><td>14 / 22.4</td><td>0</td></tr>
              <tr><td>Button</td><td>Poppins 600</td><td>13 / 20.8</td><td>13 / 20.8</td><td>13 / 20.8</td><td>0 · sentence case</td></tr>
              <tr><td>Chip / tag</td><td>Inter 400</td><td>12 / 19.2</td><td>12 / 19.2</td><td>12 / 19.2</td><td>0</td></tr>
              <tr><td>Mono meta</td><td>JetBrains Mono 700</td><td>11</td><td>11</td><td>11–13</td><td>+0.1em · upper for eyebrows</td></tr>
            </tbody>
          </table>
        </div>
        <p class="evidence-note">Sizes are computed px (size / line-height) measured on the production home, Experience, and Contact pages. Fluid headings use <code>clamp()</code>; body copy stays at 16 px on every breakpoint.</p>
      </section>

      <!-- 05 LAYOUT -->
      <section class="doc-section" id="layout">
        <div class="section-heading">
          <p class="section-index">05 / Layout &amp; grid</p>
          <h2>Three working breakpoints, one fluid <em>container.</em></h2>
          <p>Layouts are CSS Grid with <code>minmax(0, 1fr)</code> tracks. Gutters and section rhythm are fluid between the breakpoints instead of jumping.</p>
        </div>
        <div class="breakpoint-row">
          <article class="neu-card"><span>Mobile</span><strong>≤ 560 px</strong><p>Reference 390 px. Single column, compact rows, menu button.</p></article>
          <article class="neu-card"><span>Tablet</span><strong>561 – 1024 px</strong><p>Reference 768 px. Two-column grids; nav collapses at 860 px.</p></article>
          <article class="neu-card"><span>Desktop</span><strong>≥ 1025 px</strong><p>Reference 1440 px. Full nav, 3–4 column grids, split layouts.</p></article>
        </div>
        <div class="spec-table-wrap">
          <table class="spec-table">
            <thead><tr><th>Token</th><th>Rule</th><th>390</th><th>768</th><th>1440</th></tr></thead>
            <tbody>
              <tr><td><code>--container-width</code></td><td>1280px max</td><td>fluid</td><td>fluid</td><td>1120 content box</td></tr>
              <tr><td><code>--gutter</code></td><td>clamp(20px, 4vw, 48px)</td><td>20</td><td>30.7</td><td>48</td></tr>
              <tr><td><code>--section-y</code></td><td>clamp(56px, 6vw + 20px, 104px)</td><td>56</td><td>66</td><td>104</td></tr>
              <tr><td><code>--card-gap</code></td><td>clamp(16px, 2vw, 24px)</td><td>16</td><td>16</td><td>24</td></tr>
              <tr><td><code>--card-pad</code></td><td>clamp(20px, 2.4vw, 32px)</td><td>20</td><td>20</td><td>32</td></tr>
            </tbody>
          </table>
        </div>
        <h3 class="group-title">Section grids</h3>
        <div class="spec-table-wrap">
          <table class="spec-table grid-table">
            <thead><tr><th>Section</th><th>Mobile</th><th>Tablet</th><th>Desktop</th></tr></thead>
            <tbody>
              <tr><td>About</td><td><span class="cols c1"></span>1 col</td><td><span class="cols c2"></span>0.64fr / 1fr</td><td><span class="cols c2"></span>0.64fr / 1fr</td></tr>
              <tr><td>Websites (sticky stack)</td><td><span class="cols c1"></span>stacked cards</td><td><span class="cols c1"></span>stacked cards</td><td><span class="cols c1"></span>900 px cards, scale on scroll</td></tr>
              <tr><td>Design systems</td><td><span class="cols c1"></span>card, then details</td><td><span class="cols c1"></span>card, then details</td><td><span class="cols c2"></span>1.1fr / 0.9fr</td></tr>
              <tr><td>System elements list</td><td><span class="cols c1"></span>1 col</td><td><span class="cols c2"></span>2 col</td><td><span class="cols c2"></span>2 col</td></tr>
              <tr><td>Email deck</td><td><span class="cols c1"></span>stacked cards</td><td><span class="cols c1"></span>stacked cards</td><td><span class="cols c1"></span>stacked cards + controls</td></tr>
              <tr><td>Social &amp; Ads folders</td><td><span class="cols c1"></span>1 col</td><td><span class="cols c2"></span>2 col</td><td><span class="cols c2"></span>2 col</td></tr>
              <tr><td>Video rails</td><td><span class="cols rail"></span>horizontal scroll</td><td><span class="cols rail"></span>horizontal scroll</td><td><span class="cols rail"></span>horizontal scroll</td></tr>
              <tr><td>YouTube</td><td><span class="cols c1"></span>16:9 player, list</td><td><span class="cols c1"></span>player, 2-col list</td><td><span class="cols c2"></span>1.55fr / 0.75fr</td></tr>
              <tr><td>Campaigns</td><td><span class="cols c1"></span>1 col</td><td><span class="cols c2"></span>2 col</td><td><span class="cols c3"></span>3 col</td></tr>
              <tr><td>Elsewhere (platforms)</td><td><span class="cols c1"></span>rows</td><td><span class="cols c2"></span>2 col</td><td><span class="cols c4"></span>4 col (≥ 1101 px)</td></tr>
              <tr><td>Footer columns</td><td><span class="cols c1"></span>1 col</td><td><span class="cols c2"></span>2 col</td><td><span class="cols c4"></span>1 / 0.8 / 1.5 / 1fr</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- 06 SPACING -->
      <section class="doc-section" id="spacing">
        <div class="section-heading">
          <p class="section-index">06 / Spacing</p>
          <h2>A 4 px base with four <em>fluid</em> rhythm tokens.</h2>
        </div>
        <div class="spacing-list">
          <div><code>--space-1</code><span>4</span><i style="--w:4px"></i></div>
          <div><code>--space-2</code><span>8</span><i style="--w:8px"></i></div>
          <div><code>--space-3</code><span>12</span><i style="--w:12px"></i></div>
          <div><code>--space-4</code><span>16</span><i style="--w:16px"></i></div>
          <div><code>--space-5</code><span>20</span><i style="--w:20px"></i></div>
          <div><code>--space-6</code><span>24</span><i style="--w:24px"></i></div>
          <div><code>--space-8</code><span>32</span><i style="--w:32px"></i></div>
          <div><code>--space-10</code><span>40</span><i style="--w:40px"></i></div>
          <div><code>--space-12</code><span>48</span><i style="--w:48px"></i></div>
          <div><code>--space-16</code><span>64</span><i style="--w:64px"></i></div>
          <div><code>--space-20</code><span>80</span><i style="--w:80px"></i></div>
          <div><code>--space-24</code><span>96</span><i style="--w:96px"></i></div>
        </div>
        <div class="spec-table-wrap">
          <table class="spec-table">
            <thead><tr><th>Element</th><th>Padding (T R B L)</th><th>Gap / margin</th></tr></thead>
            <tbody>
              <tr><td>Section</td><td><code>--section-y</code> 0</td><td>Label → content 24–40 px</td></tr>
              <tr><td>Floating nav pill</td><td>9 10 9 22 (desktop) · 7 7 7 18 (mobile)</td><td>68 / 60 px tall</td></tr>
              <tr><td>Primary / secondary button</td><td>11 22 (desktop) · 9 13 (mobile)</td><td>Icon gap 0.45em · button gap 10 px</td></tr>
              <tr><td>Section label pill</td><td>12 16</td><td>margin-bottom 24–40 px</td></tr>
              <tr><td>Website card copy</td><td>20 <code>--card-pad</code> <code>--card-pad</code></td><td>16 px between title and button</td></tr>
              <tr><td>Campaign card</td><td>20 24</td><td>grid gap <code>--card-gap</code></td></tr>
              <tr><td>Platform card</td><td>32 (desktop) · 16 20 16 16 (mobile)</td><td>24 px inner rhythm</td></tr>
              <tr><td>Playlist row</td><td>8</td><td>16 px thumb gap · 12 px list gap</td></tr>
              <tr><td>Timeline entry</td><td>24 24 (desktop) · 20 16 (mobile)</td><td>32 px rail inset</td></tr>
              <tr><td>Contact form card</td><td>clamp(22px, 3.2vw, 40px)</td><td>14 px label rhythm · 6 px label to field</td></tr>
              <tr><td>Footer panel</td><td>72 (desktop) · 32 (mobile)</td><td>Bottom strip 18 / 22 px</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- 07 RADIUS -->
      <section class="doc-section" id="radius">
        <div class="section-heading">
          <p class="section-index">07 / Radius</p>
          <h2>Slightly sharper, still <em>friendly.</em></h2>
          <p>The scale is 0.75 × the first neumorphic pass (36 / 28 / 20 / 14 → 27 / 21 / 15 / 10). Pills are only for things you press.</p>
        </div>
        <div class="radius-grid">
          <article><i style="--r:6px"></i><code>--radius-xs</code><strong>6 px</strong><p>Small badges, inline code.</p></article>
          <article><i style="--r:10px"></i><code>--radius-sm</code><strong>10 px</strong><p>Media frames, email cards, thumbnails, rail cards.</p></article>
          <article><i style="--r:15px"></i><code>--radius-md</code><strong>15 px</strong><p>Tiles, playlist rows, campaign cards, inputs, preview wells.</p></article>
          <article><i style="--r:21px"></i><code>--radius-lg</code><strong>21 px</strong><p>Panels, stat tiles, mobile cards, icon chips, menu panel.</p></article>
          <article><i style="--r:27px"></i><code>--radius-xl</code><strong>27 px</strong><p>Website and platform cards, players, form card, footer.</p></article>
          <article><i style="--r:999px"></i><code>--radius-pill</code><strong>999 px</strong><p>Buttons, nav, chips, labels, filters only.</p></article>
        </div>
      </section>

      <!-- 08 ELEVATION -->
      <section class="doc-section" id="elevation">
        <div class="section-heading">
          <p class="section-index">08 / Elevation</p>
          <h2>Depth is a pair of shadows from <em>one</em> light.</h2>
        </div>
        <div class="elevation-grid">
          <article><div class="elev" style="box-shadow:var(--neu-raised-xs)"></div><code>--neu-raised-xs</code><p>3 / 7 · chips, labels, small arrows</p></article>
          <article><div class="elev" style="box-shadow:var(--neu-raised-sm)"></div><code>--neu-raised-sm</code><p>5 / 12 · buttons, tiles, icon chips</p></article>
          <article><div class="elev" style="box-shadow:var(--neu-raised)"></div><code>--neu-raised</code><p>9 / 22 · cards, nav, panels</p></article>
          <article><div class="elev" style="box-shadow:var(--neu-raised-hover)"></div><code>--neu-raised-hover</code><p>12 / 28 · hovered cards</p></article>
          <article><div class="elev" style="box-shadow:var(--neu-inset-sm)"></div><code>--neu-inset-sm</code><p>3 / 7 · active chips, preview wells</p></article>
          <article><div class="elev" style="box-shadow:var(--neu-inset)"></div><code>--neu-inset</code><p>5 / 11 · inputs, selected rows, pressed</p></article>
          <article><div class="elev" style="box-shadow:var(--neu-raised-hover),var(--green-rim),var(--green-glow)"></div><code>hover signal</code><p>raised-hover + 2 px green rim + green glow</p></article>
          <article><div class="elev violet" style="box-shadow:6px 6px 14px rgba(96,38,236,.35),-6px -6px 14px var(--neu-light),inset 1px 1px 0 rgba(255,255,255,.25)"></div><code>primary button</code><p>violet drop + light lift + 1 px top highlight</p></article>
        </div>
      </section>

      <!-- 09 MOTION -->
      <section class="doc-section" id="motion">
        <div class="section-heading">
          <p class="section-index">09 / Motion</p>
          <h2>Short, eased, and always <em>settling.</em></h2>
          <p>CSS transitions handle state; GSAP 3 + ScrollTrigger handle entrances. With <code>prefers-reduced-motion: reduce</code>, transitions drop to 0.01 ms and transforms are removed.</p>
        </div>
        <div class="motion-grid">
          <article class="neu-card"><div class="motion-demo"><i class="m-lift"></i></div><h3>Lift</h3><p>Cards −4 px, buttons −1 to −2 px · 0.45 s <code>--neu-ease</code></p></article>
          <article class="neu-card"><div class="motion-demo"><i class="m-press"></i></div><h3>Press</h3><p>Raised → inset on <code>:active</code> and selection · 0.35 s</p></article>
          <article class="neu-card"><div class="motion-demo"><i class="m-reveal"></i></div><h3>Reveal</h3><p>GSAP from y 18–34 px, opacity 0 · 0.55–0.95 s · power2/3.out · stagger 0.06–0.12 s</p></article>
          <article class="neu-card"><div class="motion-demo"><i class="m-marquee"></i></div><h3>Marquee</h3><p>Tool chips scroll continuously; pause on hover and focus</p></article>
        </div>
        <div class="spec-table-wrap">
          <table class="spec-table">
            <thead><tr><th>Token / pattern</th><th>Value</th><th>Used for</th></tr></thead>
            <tbody>
              <tr><td><code>--neu-ease</code></td><td>cubic-bezier(.22, .61, .36, 1)</td><td>Every lift, press, nav morph, timeline</td></tr>
              <tr><td><code>--ease-stack</code></td><td>cubic-bezier(.23, 1, .32, 1) · 360 ms</td><td>Email card stack</td></tr>
              <tr><td>Design system stack</td><td>cubic-bezier(.22, 1, .36, 1) · 200 ms</td><td>Card swap on scroll, swipe, dots</td></tr>
              <tr><td><code>--ease-wipe</code></td><td>cubic-bezier(.76, 0, .24, 1) · 0.9 s</td><td>Preloader lift and wipe</td></tr>
              <tr><td>Fast</td><td>0.25 s ease</td><td>Fades, color</td></tr>
              <tr><td>Base</td><td>0.35 s</td><td>Shadow and color changes, chips</td></tr>
              <tr><td>Slow</td><td>0.45 s</td><td>Card lifts, theme cross-fade</td></tr>
              <tr><td>Emphasis</td><td>0.5 s</td><td>Timeline focus, tool tile grow</td></tr>
              <tr><td>Timeline rail</td><td>Fills 0 → 1 as the list passes 55% of the viewport</td><td>Experience page</td></tr>
              <tr><td>Hero portrait</td><td>Three.js model follows the pointer and scroll</td><td>Home hero (click-through)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- 10 ICONS -->
      <section class="doc-section" id="icons">
        <div class="section-heading">
          <p class="section-index">10 / Iconography</p>
          <h2>One outline icon set, sized to its <em>container.</em></h2>
          <p>Bootstrap Icons 1.11.3 (icon font from jsDelivr). Icons inherit text color, are <code>aria-hidden</code>, and never carry meaning alone.</p>
        </div>
        <div class="icon-grid">
          <div><span class="glyph">↗</span><code>bi-arrow-up-right</code><p>External / next page</p></div>
          <div><span class="glyph">↓</span><code>bi-arrow-down</code><p>Scroll to section</p></div>
          <div><span class="glyph">→</span><code>bi-arrow-right</code><p>Forward CTA, carousel next</p></div>
          <div><span class="glyph">←</span><code>bi-arrow-left</code><p>Carousel previous</p></div>
          <div><span class="glyph">☾</span><code>theme toggle</code><p>Moon / sun in a 44 px raised circle</p></div>
          <div><span class="glyph">⊕</span><code>bi-zoom-in</code><p>Open media viewer</p></div>
          <div><span class="glyph">✕</span><code>bi-x-lg</code><p>Close dialog</p></div>
          <div><span class="glyph">♪</span><code>bi-volume-mute-fill</code><p>Video mute toggle</p></div>
        </div>
        <div class="spec-table-wrap">
          <table class="spec-table">
            <thead><tr><th>Context</th><th>Icon size</th><th>Container</th></tr></thead>
            <tbody>
              <tr><td>Inside buttons</td><td>1em of button text</td><td>gap 0.45em, nudges 2 px on hover</td></tr>
              <tr><td>Round controls</td><td>16–18 px</td><td>38–44 px circle, raised-sm</td></tr>
              <tr><td>Platform cards</td><td>30 px desktop / 24 px mobile</td><td>64 / 52 px tile, radius-lg / radius-md</td></tr>
              <tr><td>Card arrows</td><td>16 px</td><td>36 px circle, raised-xs</td></tr>
              <tr><td>Platform icons</td><td><code>bi-behance</code>, <code>bi-youtube</code>, <code>bi-github</code>, <code>bi-linkedin</code></td><td>Official platform colors</td></tr>
              <tr><td>Tool logos</td><td>56 × 56 source images</td><td>Marquee chips and Experience tool grid</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- 11 BUTTONS -->
      <section class="doc-section" id="buttons">
        <div class="section-heading">
          <p class="section-index">11 / Buttons</p>
          <h2>Every action is a pill you can <em>press.</em></h2>
        </div>
        <div class="button-board">
          <article class="neu-card">
            <div class="demo-label"><span>Primary</span><code>.btn.btn-primary</code></div>
            <div class="demo-body"><a class="ds-btn ds-btn-primary" href="#buttons">View my work <b>↓</b></a></div>
            <p>Violet gradient, white Poppins 600 13 px, 11 × 22 px padding (9 × 13 mobile, full width in the hero). Hover: lift −2 px, brighter gradient. Active: inset violet shadow.</p>
          </article>
          <article class="neu-card">
            <div class="demo-label"><span>Secondary</span><code>.btn.btn-secondary</code></div>
            <div class="demo-body"><a class="ds-btn ds-btn-secondary" href="#buttons">Get in touch <b>↗</b></a></div>
            <p>Surface pill, raised-sm, Ink text. Hover: raised + green rim, Ink Green text. Active: inset-sm.</p>
          </article>
          <article class="neu-card">
            <div class="demo-label"><span>Live site</span><code>.stack-copy .btn-primary</code></div>
            <div class="demo-body"><a class="ds-btn ds-btn-visit" href="#buttons">Visit website <b>↗</b></a></div>
            <p>Signal Green gradient with #0E2A18 Poppins 800 12 px. Reserved for opening a live website.</p>
          </article>
          <article class="neu-card">
            <div class="demo-label"><span>Nav CTA</span><code>.nav-links .btn-primary</code></div>
            <div class="demo-body"><a class="ds-btn ds-btn-nav" href="#buttons">Get in contact <b>↗</b></a></div>
            <p>Compact violet pill, Poppins 700 12 px, 10 × 20 px, inside the floating nav.</p>
          </article>
          <article class="neu-card">
            <div class="demo-label"><span>Round control</span><code>44 px circle</code></div>
            <div class="demo-body"><button class="ds-round" type="button" aria-label="Previous">←</button><button class="ds-round" type="button" aria-label="Next">→</button><button class="ds-round" type="button" aria-label="Theme">☾</button></div>
            <p>Theme toggle, carousel arrows, menu, mute. Raised-sm; pressed on active.</p>
          </article>
          <article class="neu-card">
            <div class="demo-label"><span>Chips &amp; filters</span><code>radius 999px</code></div>
            <div class="demo-body"><span class="ds-chip is-active">All</span><span class="ds-chip">Video Journal</span><span class="ds-chip">Creative Process</span></div>
            <p>Raised-xs, 12 px. Active filter is inset-sm with violet text. Hover fills Signal Green with Forest Ink text.</p>
          </article>
        </div>
        <div class="spec-table-wrap">
          <table class="spec-table">
            <thead><tr><th>State</th><th>Primary</th><th>Secondary / chip</th></tr></thead>
            <tbody>
              <tr><td>Rest</td><td>Gradient + violet drop shadow</td><td>Surface + raised-sm / raised-xs</td></tr>
              <tr><td>Hover</td><td>translateY(−1 to −2px), deeper glow</td><td>raised + green rim; chip fills #66D487</td></tr>
              <tr><td>Focus-visible</td><td colspan="2">2 px violet outline, 3 px offset</td></tr>
              <tr><td>Active</td><td>Inset violet shadow</td><td>inset-sm</td></tr>
              <tr><td>Disabled</td><td colspan="2"><code>.is-disabled</code> + <code>aria-disabled="true"</code>, no hover motion</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- 12 COMPONENTS -->
      <section class="doc-section" id="components">
        <div class="section-heading">
          <p class="section-index">12 / Components</p>
          <h2>The pieces that make the portfolio <em>recognizable.</em></h2>
        </div>
        <div class="component-grid">
          <article class="component-demo">
            <div class="demo-label"><span>Section label</span><code>.portfolio-category-label</code></div>
            <div class="demo-body"><span class="ds-label"><i></i>Design systems</span></div>
            <p>Raised-xs pill, 12 × 16 px, green status dot, uppercase Poppins 600. No leading dash.</p>
          </article>
          <article class="component-demo">
            <div class="demo-label"><span>Floating navigation</span><code>.site-header .nav-bar</code></div>
            <div class="demo-body"><div class="ds-nav"><span class="ds-nav-logo"></span><span class="ds-nav-links"><b>Home</b><span>Work</span><span>Experience</span></span><span class="ds-btn ds-btn-nav sm">Get in contact</span><span class="ds-round sm">☾</span></div></div>
            <p>Raised pill (68 px desktop / 60 px mobile) with an inset link group, a scroll-progress line from violet to green, and a menu button below 860 px.</p>
          </article>
          <article class="component-demo">
            <div class="demo-label"><span>Website card</span><code>.stack-project</code></div>
            <div class="ds-website">
              <div class="ds-browser"><span>● ● ●</span><span>Website redesign</span><span>08</span></div>
              <div class="ds-preview"></div>
              <div class="ds-website-copy"><div><strong>Prisma Provider</strong><small>Immigration-support website redesign.</small></div><span class="ds-btn ds-btn-visit sm">Visit ↗</span></div>
            </div>
            <p>radius-xl card, browser strip with green dots and index, inset preview well (radius-md), sticky stack that scales to 0.94 as the next card arrives.</p>
          </article>
          <article class="component-demo">
            <div class="demo-label"><span>Platform card</span><code>.social-platform-card</code></div>
            <div class="ds-platform">
              <span class="ds-platform-icon">Bē</span>
              <div><strong>Behance</strong><small>Brand, campaign, and visual design case studies.</small></div>
              <div class="ds-platform-meta"><code>@rodrigoccazuza</code><span class="ds-round xs">↗</span></div>
            </div>
            <p>Raised card, icon tile in the platform color. Hover: lift −4 px, 2 px platform-color rim, icon tile fills and tilts −6°.</p>
          </article>
          <article class="component-demo">
            <div class="demo-label"><span>Playlist row</span><code>.youtube-playlist-item</code></div>
            <div class="ds-row"><span class="ds-thumb"></span><div><strong>The raw reality of documenting the process</strong><small>Creator Journal</small></div></div>
            <div class="ds-row is-selected"><span class="ds-thumb"></span><div><strong>Vlogged for 90+ days with my Osmo Pocket 3</strong><small>Video Journal · selected</small></div></div>
            <p>radius-md, 8 px padding, 112 × 72 thumbnail (radius-sm). Selected row is inset; hover lifts above neighbours.</p>
          </article>
          <article class="component-demo">
            <div class="demo-label"><span>Campaign card</span><code>.compact-campaign-card</code></div>
            <div class="ds-campaigns"><span>Black Friday<b>↗</b></span><span>Spring Sale<b>↗</b></span></div>
            <p>radius-md, 20 × 24 px, title and arrow on one centered row; 1 / 2 / 3 columns.</p>
          </article>
          <article class="component-demo">
            <div class="demo-label"><span>Timeline entry</span><code>.comp-exp-list li</code></div>
            <div class="ds-timeline"><div><time>2024 — 2025</time><strong>Supplemental Instruction Leader</strong></div><div class="is-hover"><time>Oct 2025 – Present</time><strong>Multimedia Designer &amp; Marketing Manager</strong></div></div>
            <p>Rail fills violet → green on scroll. Hover/focus: raised card, green rim, translateX(8px) scale(1.02), violet title, glowing node.</p>
          </article>
          <article class="component-demo">
            <div class="demo-label"><span>Stat &amp; skill tile</span><code>.comp-stats &gt; div</code></div>
            <div class="ds-stats"><span><b>5+</b>years</span><span class="is-hover"><b>60+</b>campaigns</span></div>
            <p>radius-lg, raised-sm. Hover fills Signal Green, Forest Ink text, scale 1.035.</p>
          </article>
          <article class="component-demo">
            <div class="demo-label"><span>Media stacks</span><code>email · design systems</code></div>
            <div class="ds-stack"><i></i><i></i><i></i></div>
            <p>Email: front card + up to four peeking, drag to throw, 360 ms. Design systems: one landscape card (1.63:1), pagination dots, wheel/swipe/keys. Both render their final structure on first paint.</p>
          </article>
          <article class="component-demo dark-demo">
            <div class="demo-label"><span>Footer</span><code>.site-footer</code></div>
            <div class="ds-footer"><div class="ds-footer-cta"><small>Have a project in mind?</small><strong>Ready to bring your vision to <em>life?</em></strong></div><div class="ds-footer-panel"><strong>Rodrigo Cazuza.</strong><span>GitHub</span><span>LinkedIn</span></div></div>
            <p>Fixed in both themes: Night Card CTA (radius-xl) + Signal Green panel with Forest Ink text and green social pills.</p>
          </article>
        </div>
      </section>

      <!-- 13 FORMS -->
      <section class="doc-section" id="forms">
        <div class="section-heading">
          <p class="section-index">13 / Forms</p>
          <h2>Inputs are pressed wells waiting to be <em>filled.</em></h2>
        </div>
        <div class="form-demo neu-card">
          <p class="form-title">We're ready. <em>Let's talk.</em></p>
          <label>Full name<input type="text" placeholder="Your full name here" /></label>
          <label>Email address<input type="email" placeholder="you@company.com" /></label>
          <label>Project details<textarea rows="3" placeholder="Tell me about the project"></textarea></label>
          <span class="ds-btn ds-btn-primary">Send message →</span>
        </div>
        <div class="spec-table-wrap">
          <table class="spec-table">
            <thead><tr><th>Part</th><th>Spec</th></tr></thead>
            <tbody>
              <tr><td>Form card</td><td>Raised, radius-xl, padding clamp(22px, 3.2vw, 40px), single column</td></tr>
              <tr><td>Label</td><td>Inter 700, 12 px, uppercase, +0.08em, Ink Green, 6 px left inset, 14 px above / 6 px below</td></tr>
              <tr><td>Input</td><td>Inset well, radius-md, 15 × 18 px padding, Inter 16 px (prevents iOS zoom), full width</td></tr>
              <tr><td>Textarea</td><td>Same well, min-height 150 px, vertical resize</td></tr>
              <tr><td>Placeholder</td><td>Steel #7C808A</td></tr>
              <tr><td>Focus</td><td>Inset + 2 px violet ring (rgba(96, 38, 236, .45)), no outline jump</td></tr>
              <tr><td>Submit</td><td>Primary button, 15 × 26 px; full width ≤ 640 px</td></tr>
              <tr><td>Heading</td><td>Poppins 800 100.8 px desktop; “Let's talk.” Playfair Italic in Signal Green #66D487 (both themes)</td></tr>
              <tr><td>Service</td><td>Formspree endpoint with honeypot field; redirects to <code>/contact/thanks/</code></td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- 14 ACCESSIBILITY -->
      <section class="doc-section" id="accessibility">
        <div class="section-heading">
          <p class="section-index">14 / Accessibility</p>
          <h2>Soft surfaces, <em>firm</em> contrast.</h2>
        </div>
        <div class="spec-table-wrap">
          <table class="spec-table">
            <thead><tr><th>Pair</th><th>Ratio</th><th>Result</th></tr></thead>
            <tbody>
              <tr><td>Ink #2B2D33 on Mist #E6E7EB</td><td>11.14:1</td><td class="pass">AAA</td></tr>
              <tr><td>Slate #5D616B on Mist</td><td>5.02:1</td><td class="pass">AA</td></tr>
              <tr><td>Steel #7C808A on Mist</td><td>3.2:1</td><td class="warn">AA large only</td></tr>
              <tr><td>Violet #6026EC on Mist</td><td>5.69:1</td><td class="pass">AA</td></tr>
              <tr><td>Ink Green #17663A on Mist</td><td>5.67:1</td><td class="pass">AA</td></tr>
              <tr><td>White on Violet #6026EC</td><td>7.03:1</td><td class="pass">AAA</td></tr>
              <tr><td>Forest Ink #0D2416 on Signal Green</td><td>8.85:1</td><td class="pass">AAA</td></tr>
              <tr><td>Frost #ECEEF2 on Graphite #23252A</td><td>13.2:1</td><td class="pass">AAA</td></tr>
              <tr><td>Violet #A88CFF on Graphite</td><td>5.74:1</td><td class="pass">AA</td></tr>
              <tr><td>Signal Green #66D487 on Mist</td><td>1.5:1</td><td class="fail">Fill only. Exception: Contact “Let's talk.”</td></tr>
            </tbody>
          </table>
        </div>
        <ul class="a11y-list">
          <li>Skip link to <code>#main-content</code>; one H1 per page.</li>
          <li>Focus: 2 px violet outline, 3 px offset, on every interactive element; timeline entries are focusable.</li>
          <li>Every content image and video has a descriptive label (“BodyFactory Botox Ad: Before and After, Day 0 vs. Day 14”). Logos and tool icons beside their names stay decorative.</li>
          <li>External links open in a new tab with <code>rel="noopener noreferrer"</code> and a visually hidden “(opens in a new tab)”.</li>
          <li>Reduced motion disables transitions, lifts, the marquee, and scroll-scrubbed motion.</li>
          <li>Forced-colors mode adds 1 px CanvasText borders to cards, buttons, and inputs.</li>
          <li>No horizontal scroll from 360 to 1440 px (verified on 5 routes).</li>
        </ul>
      </section>

      <!-- 15 PROMPT -->
      <section class="doc-section" id="implementation-prompt">
        <div class="section-heading row-heading">
          <div><p class="section-index">15 / Implementation mega prompt</p><h2>Apply the system on <em>any platform.</em></h2></div>
          <button class="copy-button" type="button" data-copy-target="implementation-prompt-code">Copy mega prompt</button>
        </div>
        <div class="prompt-card">
          <div class="prompt-intro">
            <span class="source-tag source-confirmed">Reusable brief</span>
            <p>Fill the bracketed inputs and paste it into a design tool, AI workspace, or developer ticket. Unknown values stay visible as [NEEDS DECISION].</p>
          </div>
          <div class="code-panel prompt-code-panel"><pre><code id="implementation-prompt-code">${implementationPrompt}</code></pre></div>
        </div>
      </section>

      <!-- 16 DIVERGENCES -->
      <section class="doc-section" id="divergences">
        <div class="section-heading">
          <p class="section-index">16 / Divergences</p>
          <h2>Where production still differs from the <em>system.</em></h2>
        </div>
        <div class="divergence-list">
          <article><span>Medium</span><div><h3>“Let's talk.” in Signal Green on light</h3><p>Approved exception at 1.5:1 on #E6E7EB. Recommended alternative: Ink Green #17663A in light, Signal Green in dark.</p></div></article>
          <article><span>Medium</span><div><h3>Nav CTA violet</h3><p>The nav button renders flat <code>#7121CA</code> instead of the primary gradient. Align to <code>--gradient-primary</code>.</p></div></article>
          <article><span>Low</span><div><h3>Filter chips fall back to Arial</h3><p>YouTube filter buttons do not inherit the font. Set <code>font: inherit</code> (Inter 12 px).</p></div></article>
          <article><span>Medium</span><div><h3>Fragmented breakpoints</h3><p>Legacy layers still use 480–1100 px in 14 variants. Consolidate to 560 / 860 / 1024 / 1100.</p></div></article>
          <article><span>Low</span><div><h3>Folder illustration radius</h3><p>Social &amp; Ads folder fronts keep 14 px and their own orange #F2AB39; intentional as an illustration.</p></div></article>
          <article><span>Low</span><div><h3>Override layers</h3><p>~25 cascading stylesheets with <code>!important</code>. Tokens live in <code>neu-system.css</code> + <code>site-refinements.css</code>; older files should be retired.</p></div></article>
        </div>
      </section>

      <!-- 17 TOKENS -->
      <section class="doc-section" id="tokens">
        <div class="section-heading row-heading">
          <div><p class="section-index">17 / CSS tokens</p><h2>Ready to copy.</h2></div>
          <button class="copy-button" type="button" data-copy-target="token-code">Copy CSS</button>
        </div>
        <div class="code-panel"><pre><code id="token-code">${tokenCode}</code></pre></div>
      </section>

      <!-- 18 CHECKLIST -->
      <section class="doc-section" id="checklist">
        <div class="section-heading">
          <p class="section-index">18 / Pre-publish checklist</p>
          <h2>Before you <em>ship.</em></h2>
          <p>Progress is saved only in this browser.</p>
        </div>
        <div class="checklist-progress"><div><span></span></div><p><strong id="check-count">0</strong> of 12 checked</p></div>
        <form class="approval-list" id="approval-list">
          <label><input type="checkbox" data-check="surface"><span>Every component uses the theme surface; no card borders or new tints.</span></label>
          <label><input type="checkbox" data-check="depth"><span>Shadows follow the top-left light; raised = interactive, inset = selected or input.</span></label>
          <label><input type="checkbox" data-check="logo"><span>Ink Green logo on light, Signal Lime on dark.</span></label>
          <label><input type="checkbox" data-check="colors"><span>Every hex value is in the palette; green text on light uses Ink Green.</span></label>
          <label><input type="checkbox" data-check="type"><span>Poppins, Inter, Playfair, and Mono are in their roles; one italic accent word per heading.</span></label>
          <label><input type="checkbox" data-check="spacing"><span>Spacing is on the 4 px scale or a fluid token.</span></label>
          <label><input type="checkbox" data-check="radius"><span>Radius uses the six tokens; pills only on pressable things.</span></label>
          <label><input type="checkbox" data-check="themes"><span>Checked in light and dark themes.</span></label>
          <label><input type="checkbox" data-check="breakpoints"><span>Checked at 390, 768, and 1440 px with no horizontal scroll.</span></label>
          <label><input type="checkbox" data-check="focus"><span>Focus is visible and hover states have a keyboard equivalent.</span></label>
          <label><input type="checkbox" data-check="media"><span>Images and videos have descriptive alt text or labels.</span></label>
          <label><input type="checkbox" data-check="motion"><span>Motion is eased, short, and disabled for reduced motion.</span></label>
        </form>
        <button class="reset-checklist" type="button">Clear checklist</button>
      </section>

      <footer class="system-footer">
        <img class="logo-light" src="${logoInkData}" alt="Rodrigo Cazuza" />
        <img class="logo-dark" src="${logoData}" alt="" aria-hidden="true" />
        <p>Website design system v1.0 · measured from rodrigocazuza.com on 11 Oct 2026 · source: <code>css/neu-system.css</code> + <code>css/site-refinements.css</code>.</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </div>
  </main>
`;

export const brandScript = String.raw`
(() => {
  const root = document.documentElement;
  const themeButtons = [...document.querySelectorAll('[data-theme-toggle]')];
  const themeColor = document.querySelector('meta[name="theme-color"]');
  const setTheme = (theme, persist = true) => {
    const nextTheme = theme === 'dark' ? 'dark' : 'light';
    root.dataset.theme = nextTheme;
    if (themeColor) themeColor.setAttribute('content', nextTheme === 'dark' ? '#23252a' : '#e6e7eb');
    themeButtons.forEach((button) => {
      const isDark = nextTheme === 'dark';
      button.setAttribute('aria-pressed', String(isDark));
      button.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
      const label = button.querySelector('[data-theme-label]');
      if (label) label.textContent = isDark ? 'Light mode' : 'Dark mode';
    });
    if (persist) {
      try { localStorage.setItem('rodrigo-brand-theme', nextTheme); } catch {}
    }
  };
  setTheme(root.dataset.theme, false);
  themeButtons.forEach((button) => button.addEventListener('click', () => {
    setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark');
  }));

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
  const storageKey = 'rodrigo-brand-checklist-v1';
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
