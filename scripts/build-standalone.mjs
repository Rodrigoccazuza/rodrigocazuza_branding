import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { brandMarkup, brandScript } from "../app/brand-content.ts";

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, "..");
const output =
  "/workspace/scratch/f26503b6770c/Rodrigo-Cazuza-Brand-System.html";

let css = await readFile(join(root, "app/globals.css"), "utf8");
const fonts = [
  "inter-latin.woff2",
  "playfair-italic-latin.woff2",
  "poppins-500-latin.woff2",
  "poppins-600-latin.woff2",
  "poppins-700-latin.woff2",
  "poppins-800-latin.woff2",
];

for (const font of fonts) {
  const bytes = await readFile(join(root, "public/fonts", font));
  const data = `data:font/woff2;base64,${bytes.toString("base64")}`;
  css = css.replaceAll(`url("/fonts/${font}")`, `url("${data}")`);
}

const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="description" content="An audited visual system extracted from Rodrigo Cazuza's published portfolio.">
  <title>Rodrigo Cazuza Brand System</title>
  <style>${css}</style>
</head>
<body>
${brandMarkup}
<script>${brandScript}</script>
</body>
</html>`;

await writeFile(output, html, "utf8");
console.log(output);
