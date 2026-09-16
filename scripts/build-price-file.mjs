/**
 * Turns a Booking scrape (scripts/scrape-booking-prices.mjs output) into
 * data/prices/<slug>.json, matching the hotels listed in data/guides/<slug>.ts.
 *
 * Matching is on the normalised hotel name: a guide hotel with no confident
 * match simply gets no price, and the page says so. Tier bands are the same on
 * every page (see CLAUDE.md): budget <= 280, mid <= 450, premium above.
 *
 * Usage:
 *   node scripts/build-price-file.mjs --slug zermatt \
 *     --agg /path/zermatt-booking-aggregated.json \
 *     --winter 2026-12-18,2027-02-17 --summer 2027-07-21
 */
import { readFile, writeFile } from "node:fs/promises";

const arg = (name, fallback = null) => {
  const i = process.argv.indexOf(`--${name}`);
  return i >= 0 && process.argv[i + 1] ? process.argv[i + 1] : fallback;
};
const SLUG = arg("slug");
const AGG = arg("agg");
const WINTER = (arg("winter") || "").split(",").filter(Boolean);
const SUMMER = (arg("summer") || "").split(",").filter(Boolean);
if (!SLUG || !AGG || !WINTER.length || !SUMMER.length) {
  throw new Error("need --slug, --agg, --winter, --summer");
}

const norm = (s) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/&/g, " and ")
    .replace(/\b(hotel|hôtel|the|resort|spa|restaurant|chalet|boutique|superior|zermatt|saas-fee|verbier|by|and)\b/g, " ")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();

const stat = (prices, dates) => {
  const vals = dates.map((d) => prices[d]).filter((v) => typeof v === "number");
  if (!vals.length) return null;
  const from = Math.min(...vals);
  const avg = Math.round(vals.reduce((a, b) => a + b, 0) / vals.length / 5) * 5;
  return { from, avg, samples: vals.length };
};

const tierOf = (avg) => (avg <= 280 ? "budget" : avg <= 450 ? "mid" : "premium");

const guide = await readFile(`data/guides/${SLUG}.ts`, "utf-8");
const hotels = [...guide.matchAll(/slug: '([a-z0-9-]+)',\s*\n\s*name: '([^']+)'/g)].map((m) => ({
  slug: m[1],
  name: m[2],
}));
if (!hotels.length) throw new Error(`no hotels parsed from data/guides/${SLUG}.ts`);

const agg = JSON.parse(await readFile(AGG, "utf-8"));
const scraped = agg.hotels.map((h) => ({ ...h, key: norm(h.name) }));

const out = [];
const missed = [];
for (const h of hotels) {
  const key = norm(h.name);
  let hit = scraped.find((s) => s.key === key);
  if (!hit) hit = scraped.find((s) => s.key.includes(key) || key.includes(s.key));
  if (!hit) {
    missed.push(h.name);
    continue;
  }
  const all = stat(hit.prices, [...WINTER, ...SUMMER]);
  if (!all) {
    missed.push(`${h.name} (matched, no price on the sample dates)`);
    continue;
  }
  out.push({
    slug: h.slug,
    bookingName: hit.name,
    tier: tierOf(all.avg),
    stars: hit.stars ?? null,
    bookingUrl: hit.bookingUrl,
    address: hit.address,
    prices: hit.prices,
    all,
    winter: stat(hit.prices, WINTER),
    summer: stat(hit.prices, SUMMER),
  });
}

const file = {
  scrapedOn: agg.scrapedOn,
  source: "Booking.com via Apify voyager/booking-scraper",
  currency: "CHF",
  occupancy: "2 adults, 1 room, 1 night",
  winterDates: WINTER,
  summerDates: SUMMER,
  hotels: out,
};
await writeFile(`data/prices/${SLUG}.json`, JSON.stringify(file, null, 2) + "\n");
console.log(`data/prices/${SLUG}.json: ${out.length} priced, ${missed.length} without a price`);
for (const m of missed) console.log(`  no price: ${m}`);
for (const h of out) console.log(`  ${h.tier.padEnd(8)} ${String(h.all.from).padStart(5)} / avg ${String(h.all.avg).padStart(5)}  ${h.bookingName}`);
