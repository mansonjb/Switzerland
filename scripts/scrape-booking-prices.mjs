/**
 * Real Booking.com nightly-price scraper for Wengen, Switzerland (3823 Wengen).
 *
 * Method: Apify actor `voyager/booking-scraper` (voyager~booking-scraper),
 * one run per sample stay date, search = "Wengen, Switzerland", currency CHF,
 * language en-gb, 2 adults, 1 room, 1 night. A couple of well-known Wengen
 * hotels (e.g. Hotel Falken) don't surface in the generic "Wengen, Switzerland"
 * search on Booking.com, so we also run a few known direct hotel URLs per date
 * (EXTRA_START_URLS below) and merge them in. Every result is filtered to
 * addresses in "3823 Wengen" (excludes Lauterbrunnen / Interlaken / Grindelwald).
 *
 * Setup: APIFY_TOKEN is read from staysinnambia/.env.local at runtime (this
 * project has no .env.local of its own and none is written here). The token
 * is never printed or copied into this project.
 *
 * Output: writes ONLY to the scratch directory below (never into this repo).
 * Inspect the aggregated file, then hand-curate the final
 * data/prices/wengen.json (tier assignment, facts, photos are a separate,
 * manual step per the task brief).
 *
 * Usage:
 *   SCRATCH_DIR=/path/to/scratch node scripts/scrape-booking-prices.mjs
 *   SCRATCH_DIR=/path/to/scratch node scripts/scrape-booking-prices.mjs --dates 2026-12-18
 */
import { readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";

const TOKEN_ENV_FILE =
  "/Users/jean-baptistemanson/Desktop/CLAUDE NEW SESSION/staysinnambia/.env.local";
const ACTOR = "voyager~booking-scraper";
const SCRATCH_DIR =
  process.env.SCRATCH_DIR ||
  (() => {
    throw new Error("Set SCRATCH_DIR env var to an out-of-repo scratch directory");
  })();
const PLACE = (() => { const i = process.argv.indexOf("--place"); return i >= 0 && process.argv[i + 1] ? process.argv[i + 1] : "Wengen"; })();
const SLUG = PLACE.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-");
const OUT_AGG = path.join(SCRATCH_DIR, `${SLUG}-booking-aggregated.json`);
const OUT_RAW = path.join(SCRATCH_DIR, `${SLUG}-booking-raw.json`);

const ALL_DATES = [
  ["2026-12-18", "2026-12-19"],
  ["2027-01-20", "2027-01-21"],
  ["2027-02-17", "2027-02-18"],
  ["2027-06-23", "2027-06-24"],
  ["2027-07-21", "2027-07-22"],
  ["2027-09-08", "2027-09-09"],
];

// Known Wengen properties that don't reliably surface in a generic
// "Wengen, Switzerland" Booking.com search, scraped via direct hotel URL too.
const EXTRA_START_URLS = PLACE === "Wengen" ? ["https://www.booking.com/hotel/ch/falken-wengen.html"] : [];

const argv = process.argv.slice(2);
const datesArg = (() => {
  const i = argv.indexOf("--dates");
  return i >= 0 && argv[i + 1] ? argv[i + 1].split(",") : null;
})();
const DATES = datesArg
  ? ALL_DATES.filter((d) => datesArg.includes(d[0]))
  : ALL_DATES;

async function loadToken() {
  if (process.env.APIFY_TOKEN) return process.env.APIFY_TOKEN.trim();
  const env = await readFile(TOKEN_ENV_FILE, "utf-8");
  const m = env.match(/APIFY_TOKEN=(.+)/);
  if (!m) throw new Error(`APIFY_TOKEN not found in ${TOKEN_ENV_FILE}`);
  return m[1].trim();
}

async function runActor(input, token) {
  const url = `https://api.apify.com/v2/acts/${ACTOR}/run-sync-get-dataset-items?token=${token}`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  });
  if (!res.ok) {
    throw new Error(`Apify HTTP ${res.status}: ${(await res.text()).slice(0, 300)}`);
  }
  return res.json();
}

function isWengen(item) {
  const full = item.address?.full || "";
  if (!new RegExp(PLACE.replace("ü", "[uü]"), "i").test(full)) return false;
  return true;
}

function normType(t) {
  if (!t) return "hotel";
  const s = String(t).toLowerCase();
  if (s.includes("aparthotel")) return "hotel";
  if (s.includes("apart")) return "apartment";
  if (s.includes("guest") || s.includes("homestay") || s.includes("bed and breakfast"))
    return "guesthouse";
  if (s.includes("hostel")) return "hostel";
  return "hotel";
}

async function main() {
  const token = await loadToken();
  await mkdir(SCRATCH_DIR, { recursive: true });

  const byUrl = new Map();
  const rawByDate = {};

  for (const [checkIn, checkOut] of DATES) {
    console.log(`\n=== ${checkIn} -> ${checkOut} ===`);
    const results = [];

    try {
      const r1 = await runActor(
        {
          search: `${PLACE}, Switzerland`,
          maxItems: 60,
          currency: "CHF",
          language: "en-gb",
          checkIn,
          checkOut,
          rooms: 1,
          adults: 2,
          children: 0,
        },
        token
      );
      results.push(...r1);
      console.log(`  generic search: ${r1.length} raw results`);
    } catch (e) {
      console.error("  ! generic search failed:", e.message);
    }

    for (const extraUrl of EXTRA_START_URLS) {
      try {
        const r2 = await runActor(
          {
            startUrls: [{ url: extraUrl }],
            maxItems: 5,
            currency: "CHF",
            language: "en-gb",
            checkIn,
            checkOut,
            rooms: 1,
            adults: 2,
            children: 0,
          },
          token
        );
        results.push(...r2);
        console.log(`  extra url ${extraUrl}: ${r2.length} raw result(s)`);
      } catch (e) {
        console.error(`  ! extra url ${extraUrl} failed:`, e.message);
      }
    }

    rawByDate[checkIn] = results;

    const wengenResults = results.filter(isWengen);
    console.log(`  -> ${wengenResults.length} in 3823 Wengen`);

    for (const item of wengenResults) {
      const key = (item.url || "").split("?")[0];
      if (!key) continue;
      if (!byUrl.has(key)) {
        byUrl.set(key, {
          name: item.name,
          stars: item.stars ?? null,
          type: normType(item.type),
          bookingUrl: key,
          address: item.address?.full || "",
          prices: {},
        });
      }
      const entry = byUrl.get(key);
      const price = typeof item.price === "number" ? Math.round(item.price) : null;
      entry.prices[checkIn] = price;
    }

    await new Promise((r) => setTimeout(r, 500));
  }

  const allDates = ALL_DATES.map((d) => d[0]);
  const hotels = [];
  for (const entry of byUrl.values()) {
    for (const d of allDates) if (!(d in entry.prices)) entry.prices[d] = null;
    const nonNull = allDates.map((d) => entry.prices[d]).filter((p) => typeof p === "number");
    const fromCHF = nonNull.length ? Math.min(...nonNull) : null;
    const avgRaw = nonNull.length ? nonNull.reduce((a, b) => a + b, 0) / nonNull.length : null;
    const avgCHF = avgRaw != null ? Math.round(avgRaw / 5) * 5 : null;
    hotels.push({ ...entry, fromCHF, avgCHF, samples: nonNull.length });
  }
  hotels.sort((a, b) => (b.avgCHF ?? -1) - (a.avgCHF ?? -1));

  await writeFile(
    OUT_AGG,
    JSON.stringify(
      { scrapedOn: new Date().toISOString().slice(0, 10), datesRequested: allDates, hotels },
      null,
      2
    )
  );
  await writeFile(OUT_RAW, JSON.stringify(rawByDate, null, 2));

  console.log(`\nWrote ${OUT_AGG}`);
  console.log(`Wrote ${OUT_RAW}`);
  console.log(`\n${hotels.length} distinct Wengen (3823) properties found:\n`);
  for (const h of hotels) {
    console.log(
      `  ${h.name} | ${h.type} | ${h.stars ?? "?"}* | from ${h.fromCHF ?? "n/a"} | avg ${
        h.avgCHF ?? "n/a"
      } | samples ${h.samples}/${allDates.length}`
    );
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
