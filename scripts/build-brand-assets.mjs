import { readFile, writeFile } from "node:fs/promises";

const logoPath =
  "/workspace/scratch/f26503b6770c/rodrigo-cazuza-wordmark.png";
const targetPath =
  "/workspace/sites/rodrigo-cazuza-brand-system/app/brand-data.mjs";

const logo = await readFile(logoPath);
const data = `data:image/png;base64,${logo.toString("base64")}`;
await writeFile(
  targetPath,
  `// Generated from the exact live-site PNG.\nexport const logoData = ${JSON.stringify(data)};\n`,
  "utf8",
);
