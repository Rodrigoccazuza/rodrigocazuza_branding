// Regenerates app/brand-data.mjs from the portfolio's live wordmark files.
// Usage: node scripts/build-brand-assets.mjs /path/to/portfolio
import { readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const portfolio = process.argv[2];
if (!portfolio) throw new Error("Pass the portfolio repository path.");
const encode = async (file) => `data:image/png;base64,${(await readFile(join(portfolio, "images/site", file))).toString("base64")}`;

await writeFile(
  new URL("../app/brand-data.mjs", import.meta.url),
  "// Generated from the live-site PNGs (images/site/ in the portfolio repository).\n" +
    "// logoData: Signal Lime #C1FF72 wordmark for dark surfaces. logoInkData: Ink Green #17663A wordmark for light surfaces.\n" +
    `export const logoData = ${JSON.stringify(await encode("rodrigo-cazuza-wordmark.png"))};\n` +
    `export const logoInkData = ${JSON.stringify(await encode("rodrigo-cazuza-wordmark-ink-green.png"))};\n`,
  "utf8",
);
