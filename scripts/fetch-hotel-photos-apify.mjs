/**
 * Real hotel photo scraper via Apify (compass/crawler-google-places actor),
 * adapted from the staysinnambia project's fetch-lodge-photos-apify.mjs.
 *
 * Each entry is a single NAMED real property in Wengen, Switzerland, so this
 * just searches for "<hotel name>, Wengen, Switzerland" and takes the best
 * matching single result.
 *
 * Setup: APIFY_TOKEN is read from staysinnambia/.env.local at runtime (this
 * project has no .env.local of its own and none is written here).
 *
 * This project has no `sharp` dependency installed, so this script requires
 * NODE_PATH to point at a node_modules that has it (e.g. staysinnambia's):
 *
 *   NODE_PATH="/Users/jean-baptistemanson/Desktop/CLAUDE NEW SESSION/staysinnambia/node_modules" \
 *     node scripts/fetch-hotel-photos-apify.mjs
 *
 * Usage:
 *   node scripts/fetch-hotel-photos-apify.mjs                 all hotels
 *   node scripts/fetch-hotel-photos-apify.mjs --filter hotel-regina
 *   node scripts/fetch-hotel-photos-apify.mjs --dry            preview only, no download
 *   node scripts/fetch-hotel-photos-apify.mjs --candidates 5   save N candidate photos per hotel for review
 *   node scripts/fetch-hotel-photos-apify.mjs --finalize hotel-regina 3   copy candidate #3 to the final path
 */
import sharp from "sharp";
import { copyFile, mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const IMG_DIR = path.join(ROOT, "public", "photos", "hotels");
const CANDIDATES_DIR = path.join(ROOT, "scripts", "photo-candidates");
const OUT = path.join(ROOT, "scripts", "hotel-photo-results.json");
const TOKEN_ENV_FILE = path.join(
  "/Users/jean-baptistemanson/Desktop/CLAUDE NEW SESSION/staysinnambia",
  ".env.local"
);
const ACTOR = "compass~crawler-google-places";

const argv = process.argv.slice(2);
const DRY = argv.includes("--dry");
const filterArg = (() => {
  const i = argv.indexOf("--filter");
  return i >= 0 && argv[i + 1] ? argv[i + 1].split(",").map((s) => s.trim()) : null;
})();
const candidatesArg = (() => {
  const i = argv.indexOf("--candidates");
  return i >= 0 && argv[i + 1] ? parseInt(argv[i + 1], 10) : null;
})();
const finalizeArg = (() => {
  const i = argv.indexOf("--finalize");
  return i >= 0 && argv[i + 1] && argv[i + 2] ? { slug: argv[i + 1], index: parseInt(argv[i + 2], 10) } : null;
})();

const HOTELS = [
  { slug: "hotel-regina", name: "Hotel Regina Wengen" },
  { slug: "hotel-silberhorn", name: "Hotel Silberhorn Wengen" },
  { slug: "hotel-falken", name: "Hotel Falken Wengen" },
  { slug: "grand-hotel-belvedere", name: "Grand Hotel Belvédère Wengen" },
  { slug: "hotel-bellevue", name: "Hotel Bellevue Traditional Swiss Hideaway Wengen" },
  { slug: "hotel-victoria-lauberhorn", name: "Hotel Victoria Lauberhorn Wengen" },
  { slug: "braunbar-hotel-spa", name: "Braunbär Hotel Spa Wengen" },
  { slug: "hotel-schonegg", name: "Hotel Schönegg Wengen" },
  { slug: "beausite-park-hotel", name: "Beausite Park Hotel Spa Wengen" },
  { slug: "murren-hotel-regina", name: "Hotel Regina Mürren" },
  { slug: "murren-hotel-jungfrau", name: "Hotel Jungfrau Mürren" },
  { slug: "murren-hotel-alpenruh", name: "Hotel Alpenruh Mürren" },
  { slug: "murren-hotel-blumental", name: "Hotel Blumental Mürren" },
  { slug: "murren-hotel-eiger", name: "Eiger Mürren Swiss Quality Hotel" },
  { slug: "murren-hotel-palace", name: "Hotel Mürren Palace" },
  { slug: "lb-hotel-silberhorn", name: "Hotel Silberhorn Lauterbrunnen" },
  { slug: "lb-hotel-staubbach", name: "Hotel Staubbach Lauterbrunnen" },
  { slug: "lb-hotel-oberland", name: "Hotel Oberland Lauterbrunnen" },
  { slug: "lb-hotel-jungfrau", name: "Hotel Restaurant Jungfrau Lauterbrunnen" },
  { slug: "lb-hotel-steinbock", name: "Hotel Restaurant Steinbock Lauterbrunnen" },
  { slug: "lb-horner-pub", name: "Horner Pub Hotel Lauterbrunnen" },
  { slug: "il-hotel-du-lac", name: "Hotel Du Lac Interlaken" },
  { slug: "il-hotel-metropole", name: "Hotel Metropole Interlaken" },
  { slug: "il-hotel-lotschberg", name: "Hotel Lötschberg Interlaken" },
  { slug: "il-hotel-krebs", name: "Hotel Krebs Interlaken" },
  { slug: "il-hotel-beausite", name: "Hotel Beausite Interlaken" },
  { slug: "il-carlton-europe", name: "Carlton Europe Vintage Adults Hotel Interlaken" },
  { slug: "il-victoria-jungfrau", name: "Victoria Jungfrau Grand Hotel Spa Interlaken" },
  { slug: "gw-hotel-wetterhorn", name: "Hotel Wetterhorn Grindelwald" },
  { slug: "gw-hotel-gletschergarten", name: "Hotel Gletschergarten Grindelwald" },
  { slug: "gw-sunstar-hotel", name: "Sunstar Hotel Spa Grindelwald" },
  { slug: "gw-schweizerhof", name: "Romantik Hotel Schweizerhof Grindelwald" },
];

async function loadToken() {
  if (process.env.APIFY_TOKEN) return process.env.APIFY_TOKEN.trim();
  const env = await readFile(TOKEN_ENV_FILE, "utf-8").catch(() => "");
  const m = env.match(/APIFY_TOKEN=(.+)/);
  if (m) return m[1].trim();
  throw new Error(`APIFY_TOKEN not set and not found in ${TOKEN_ENV_FILE}`);
}

async function runActor(searchString, token) {
  const url = `https://api.apify.com/v2/acts/${ACTOR}/run-sync-get-dataset-items?token=${token}`;
  const input = {
    searchStringsArray: [searchString],
    maxCrawledPlacesPerSearch: 3,
    maxImages: process.env.MAX_IMAGES ? parseInt(process.env.MAX_IMAGES, 10) : 8,
    language: "en",
    skipClosedPlaces: true,
    scrapePlaceDetailPage: true,
  };
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  });
  if (!res.ok) throw new Error(`Apify HTTP ${res.status}: ${(await res.text()).slice(0, 300)}`);
  return res.json();
}

function normalize(item) {
  return {
    name: item.title || item.name,
    imageUrl: item.imageUrl || (item.imageUrls && item.imageUrls[0]) || null,
    imageUrls: item.imageUrls || [],
    website: item.website || "",
    address: item.address || "",
    rating: item.totalScore ?? null,
    reviewCount: item.reviewsCount ?? 0,
    url: item.url || "",
  };
}

async function downloadPhoto(imageUrl, outPath) {
  const img = await fetch(imageUrl);
  if (!img.ok) throw new Error(`photo HTTP ${img.status}`);
  const buf = Buffer.from(await img.arrayBuffer());
  await sharp(buf)
    .resize(1200, 800, { fit: "cover", position: "centre" })
    .jpeg({ quality: 80, progressive: true, mozjpeg: true })
    .toFile(outPath);
}

async function main() {
  await mkdir(IMG_DIR, { recursive: true });

  if (finalizeArg) {
    const src = path.join(CANDIDATES_DIR, `${finalizeArg.slug}-${finalizeArg.index}.jpg`);
    const dest = path.join(IMG_DIR, `${finalizeArg.slug}.jpg`);
    await copyFile(src, dest);
    console.log(`Finalized ${finalizeArg.slug}: candidate #${finalizeArg.index} -> ${dest}`);
    return;
  }

  const token = await loadToken();

  let work = HOTELS;
  if (filterArg) work = HOTELS.filter((h) => filterArg.includes(h.slug));

  if (candidatesArg) {
    await mkdir(CANDIDATES_DIR, { recursive: true });
    for (const hotel of work) {
      const searchString = `${hotel.name}, Switzerland`;
      console.log(`\n${hotel.slug}: searching "${searchString}"`);
      let raw;
      try {
        raw = await runActor(searchString, token);
      } catch (e) {
        console.error(`  ! ${e.message}`);
        continue;
      }
      const candidates = raw.map(normalize);
      if (!candidates.length) {
        console.log("  no results");
        continue;
      }
      const best = candidates[0];
      const pool = [best.imageUrl, ...best.imageUrls].filter(Boolean);
      const unique = [...new Set(pool)].slice(0, candidatesArg);
      console.log(`  best match: "${best.name}" (${best.address}) — downloading ${unique.length} candidate photo(s)`);
      for (let i = 0; i < unique.length; i++) {
        const outPath = path.join(CANDIDATES_DIR, `${hotel.slug}-${i + 1}.jpg`);
        try {
          await downloadPhoto(unique[i], outPath);
          console.log(`    saved candidate ${i + 1}: ${outPath}`);
        } catch (e) {
          console.error(`    ! candidate ${i + 1} failed: ${e.message}`);
        }
      }
      await new Promise((r) => setTimeout(r, 200));
    }
    console.log("\nDone. Review candidates in scripts/photo-candidates/, then run --finalize <slug> <index>.");
    return;
  }

  const results = [];
  for (const hotel of work) {
    const searchString = `${hotel.name}, Switzerland`;
    console.log(`\n${hotel.slug}: searching "${searchString}"`);
    let raw;
    try {
      raw = await runActor(searchString, token);
    } catch (e) {
      console.error(`  ! ${e.message}`);
      results.push({ ...hotel, status: "search-failed", error: e.message });
      continue;
    }

    const candidates = raw.map(normalize);
    if (!candidates.length) {
      console.log("  no results");
      results.push({ ...hotel, status: "no-results" });
      continue;
    }

    const best = candidates[0];
    console.log(`  best match: "${best.name}" (${best.reviewCount} reviews, ${best.address}) — photo: ${best.imageUrl ? "yes" : "no"}`);

    if (!best.imageUrl) {
      results.push({ ...hotel, status: "no-photo", matchedName: best.name, matchedAddress: best.address });
      continue;
    }

    const imgPath = path.join(IMG_DIR, `${hotel.slug}.jpg`);
    if (!DRY) {
      try {
        await downloadPhoto(best.imageUrl, imgPath);
        console.log(`  saved ${imgPath}`);
      } catch (e) {
        console.error(`  ! photo download failed: ${e.message}`);
        results.push({ ...hotel, status: "download-failed", matchedName: best.name, error: e.message });
        continue;
      }
    }

    results.push({
      ...hotel,
      status: DRY ? "dry-run-match" : "downloaded",
      matchedName: best.name,
      matchedAddress: best.address,
      sourceImageUrl: best.imageUrl,
      sourceUrl: best.url,
      localPath: `/photos/hotels/${hotel.slug}.jpg`,
    });
    await new Promise((r) => setTimeout(r, 200));
  }

  await writeFile(OUT, JSON.stringify(results, null, 2) + "\n");
  console.log(`\nWrote ${OUT}`);
  console.log(`\nSummary: ${results.filter((r) => r.status === "downloaded" || r.status === "dry-run-match").length}/${work.length} matched`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
