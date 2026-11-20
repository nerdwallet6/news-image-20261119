// news-image-20261119 — "Sum up 19 November's world news in one image".
//
// The entry is one 1024x1024 front-page poster, entry.png, drawn for this
// competition. It sums up Thursday 19 November 2026: the first-ever
// three-way Trump–Xi–Putin summit in Shenzhen; the ICJ ruling that Myanmar
// committed genocide against the Rohingya; the worldwide launch of GTA VI;
// Anthropic's record $81bn IPO; Cyclone Akvan bearing down on India's east
// coast; Israeli tanks pushing deeper into central Gaza; Ukraine hitting
// the Kerch Bridge a third time this week; the US strike on Qeshm Island
// and the Houthi missile that damaged Riyadh's PIF Tower; the COP31
// deadlock in Antalya; and, in the footer, Bangladesh unrest, the record
// $190.4m Van Gogh sale, Denmark's Greenland security deal, Bitcoin
// dipping below $63,000, the Gas Husky tanker sinking, the IAEA on
// Yongbyon, the EU's proposed €45bn Ukraine loan, and the Jeffries
// Speaker nomination. Every fact was checked against reporting from
// 19 November 2026 before the poster was drawn.
//
// This program copies that finished poster, byte for byte, into the
// grader's output directory. It uses only the Node standard library,
// reaches no network, and writes identical bytes on every run.
//
// Try it locally with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ONE_MIB = 1048576;
const PNG_MAGIC = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a];

const repoRoot = dirname(fileURLToPath(import.meta.url));
const posterPath = join(repoRoot, "entry.png");
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outputPath = join(outputDir, "entry.png");

function loadPoster() {
  const data = readFileSync(posterPath);
  if (data.length === 0 || data.length > ONE_MIB) {
    throw new Error(
      `entry.png must be non-empty and at most 1 MiB, got ${data.length} bytes`,
    );
  }
  const looksLikePng = PNG_MAGIC.every((byte, i) => data[i] === byte);
  const looksLikeJpeg = data[0] === 0xff && data[1] === 0xd8;
  if (!looksLikePng && !looksLikeJpeg) {
    throw new Error("entry.png is neither a PNG nor a JPEG file");
  }
  return data;
}

const poster = loadPoster();
mkdirSync(outputDir, { recursive: true });
writeFileSync(outputPath, poster);
// Read the output back and compare it byte for byte with the source
// poster, so a truncated or corrupted write fails loudly instead of
// silently handing the grader a bad file.
const written = readFileSync(outputPath);
if (!written.equals(poster)) {
  throw new Error(
    `verification failed: ${outputPath} (${written.length} bytes) differs from entry.png (${poster.length} bytes) after write`,
  );
}
console.log(`wrote ${poster.length} bytes to ${outputPath}`);
