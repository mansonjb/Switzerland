/** The price index: every figure on /hotel-prices is computed here from the
 *  scraped Booking files, never typed by hand. Regenerate the underlying data
 *  with scripts/scrape-booking-prices.mjs and these numbers follow.
 *
 *  A town is only published when at least PRICE_MIN_HOTELS of its hotels have a
 *  price for the column in question. Below that, one luxury hotel with a single
 *  sample moves the median far enough to be misleading, so the cell stays empty.
 */
import { getPriceFile, type PriceStat } from '@/data/prices'
import { destinations, regionNames } from '@/data/destinations'
import { getGuide, hasGuide } from '@/data'
import type { Destination, RegionKey, Season } from '@/data/types'
import type { L } from '@/lib/i18n'

export const PRICE_MIN_HOTELS = 3

export type PriceCell = { typical: number; from: number; hotels: number }
export type PriceRow = {
  dest: Destination
  hotels: number
  samples: number
  all: PriceCell
  winter: PriceCell | null
  summer: PriceCell | null
}

const median = (values: number[]): number => {
  const s = [...values].sort((a, b) => a - b)
  const mid = Math.floor(s.length / 2)
  return s.length % 2 ? s[mid] : Math.round((s[mid - 1] + s[mid]) / 2)
}

const cell = (stats: (PriceStat | undefined)[]): PriceCell | null => {
  const kept = stats.filter((s): s is NonNullable<PriceStat> => Boolean(s))
  if (kept.length < PRICE_MIN_HOTELS) return null
  return { typical: median(kept.map((s) => s.avg)), from: Math.min(...kept.map((s) => s.from)), hotels: kept.length }
}

/** One row per published destination that clears the gate, cheapest first. */
export function priceRows(): PriceRow[] {
  const rows: PriceRow[] = []
  for (const dest of destinations) {
    if (!hasGuide(dest.slug)) continue
    const file = getPriceFile(dest.slug)
    if (!file) continue
    const all = cell(file.hotels.map((h) => h.all))
    if (!all) continue
    rows.push({
      dest,
      hotels: file.hotels.length,
      samples: file.hotels.reduce((n, h) => n + (h.all?.samples ?? 0), 0),
      all,
      winter: cell(file.hotels.map((h) => h.winter)),
      summer: cell(file.hotels.map((h) => h.summer)),
    })
  }
  return rows.sort((a, b) => a.all.typical - b.all.typical)
}

/** Headline numbers for the opening answer. */
export function priceHeadline(rows: PriceRow[]) {
  const typical = median(rows.map((r) => r.all.typical))
  const sorted = [...rows].sort((a, b) => a.all.typical - b.all.typical)
  return { towns: rows.length, typical, cheapest: sorted[0], dearest: sorted[sorted.length - 1] }
}

export type SeasonRow = { row: PriceRow; winter: PriceCell; summer: PriceCell; delta: number }

/** Towns priced in both seasons, dearest-in-winter first. `delta` is the winter
 *  premium in percent: positive means winter costs more than summer. */
export function seasonRows(rows: PriceRow[]): SeasonRow[] {
  return rows
    .filter((r): r is PriceRow & { winter: PriceCell; summer: PriceCell } => Boolean(r.winter && r.summer))
    .map((r) => ({ row: r, winter: r.winter, summer: r.summer, delta: Math.round((r.winter.typical / r.summer.typical - 1) * 100) }))
    .sort((a, b) => b.delta - a.delta)
}

export type CheaperPair = { row: PriceRow; alternatives: { row: PriceRow; save: number }[] }

/** For each town, the neighbours that cost at least `threshold` less. Only the
 *  neighbours already listed in the guide, so the pair is one a traveller can
 *  actually swap: straight-line distance says nothing about an Alpine journey. */
export function cheaperNeighbours(rows: PriceRow[], threshold = 0.25): CheaperPair[] {
  const by = new Map(rows.map((r) => [r.dest.slug, r]))
  const pairs: CheaperPair[] = []
  for (const row of rows) {
    const alternatives = (getGuide(row.dest.slug)?.neighbours ?? [])
      .map((slug) => by.get(slug))
      .filter((r): r is PriceRow => Boolean(r) && r!.all.typical <= row.all.typical * (1 - threshold))
      .map((r) => ({ row: r, save: Math.round((1 - r.all.typical / row.all.typical) * 100) }))
      .sort((a, b) => b.save - a.save)
    if (alternatives.length) pairs.push({ row, alternatives })
  }
  return pairs.sort((a, b) => b.alternatives[0].save - a.alternatives[0].save)
}

export const PRICE_MIN_TOWNS_PER_REGION = 4

export type RegionPrice = { key: RegionKey; name: L; typical: number; towns: PriceRow[] }

/** Regions carrying enough towns to be compared, cheapest first. Below the
 *  threshold a region is one resort wearing a region's name. */
export function regionPrices(rows: PriceRow[]): RegionPrice[] {
  const byKey = new Map<RegionKey, PriceRow[]>()
  for (const row of rows) byKey.set(row.dest.region, [...(byKey.get(row.dest.region) ?? []), row])
  return [...byKey.entries()]
    .filter(([, towns]) => towns.length >= PRICE_MIN_TOWNS_PER_REGION)
    .map(([key, towns]) => ({ key, name: regionNames[key], typical: median(towns.map((t) => t.all.typical)), towns }))
    .sort((a, b) => a.typical - b.typical)
}

/** How the figures were gathered, for the method note and the Dataset markup. */
export function priceMethod() {
  const files = destinations.filter((d) => hasGuide(d.slug)).map((d) => getPriceFile(d.slug)).filter((f) => Boolean(f))
  const dates = (key: 'winterDates' | 'summerDates') => [...new Set(files.flatMap((f) => f![key]))].sort()
  const scraped = [...new Set(files.map((f) => f!.scrapedOn))].sort()
  return {
    towns: files.length,
    hotels: files.reduce((n, f) => n + f!.hotels.length, 0),
    samples: files.reduce((n, f) => n + f!.hotels.reduce((m, h) => m + (h.all?.samples ?? 0), 0), 0),
    winterDates: dates('winterDates'),
    summerDates: dates('summerDates'),
    scrapedFrom: scraped[0],
    scrapedTo: scraped[scraped.length - 1],
    occupancy: files[0]!.occupancy,
  }
}

export type { Season }
