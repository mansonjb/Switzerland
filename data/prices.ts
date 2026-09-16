import type { Season } from './types'
import wengen from './prices/wengen.json'
import murren from './prices/murren.json'
import grindelwald from './prices/grindelwald.json'
import lauterbrunnen from './prices/lauterbrunnen.json'
import interlaken from './prices/interlaken.json'
import zermatt from './prices/zermatt.json'
import saasFee from './prices/saas-fee.json'
import verbier from './prices/verbier.json'
import lucerne from './prices/lucerne.json'
import zurich from './prices/zurich.json'
import bern from './prices/bern.json'
import lausanne from './prices/lausanne.json'
import montreux from './prices/montreux.json'
import andermatt from './prices/andermatt.json'
import ascona from './prices/ascona.json'
import engelberg from './prices/engelberg.json'
import locarno from './prices/locarno.json'
import vevey from './prices/vevey.json'
import weggis from './prices/weggis.json'

/** Real nightly prices scraped from Booking.com on dated samples (2 adults, 1 room, 1 night).
 *  Regenerate with scripts/scrape-booking-prices.mjs, never edit numbers by hand. */
export type PriceStat = { from: number; avg: number; samples: number } | null
export type HotelPrice = { slug: string; tier: 'budget' | 'mid' | 'premium'; stars: number | null; all: PriceStat } & Record<Season, PriceStat>
export type PriceFile = { scrapedOn: string; source: string; winterDates: string[]; summerDates: string[]; hotels: HotelPrice[] }

const FILES: Record<string, PriceFile> = {
  wengen: wengen as unknown as PriceFile,
  murren: murren as unknown as PriceFile,
  grindelwald: grindelwald as unknown as PriceFile,
  lauterbrunnen: lauterbrunnen as unknown as PriceFile,
  interlaken: interlaken as unknown as PriceFile,
  zermatt: zermatt as unknown as PriceFile,
  'saas-fee': saasFee as unknown as PriceFile,
  verbier: verbier as unknown as PriceFile,
  lucerne: lucerne as unknown as PriceFile,
  zurich: zurich as unknown as PriceFile,
  bern: bern as unknown as PriceFile,
  lausanne: lausanne as unknown as PriceFile,
  montreux: montreux as unknown as PriceFile,
  andermatt: andermatt as unknown as PriceFile,
  ascona: ascona as unknown as PriceFile,
  engelberg: engelberg as unknown as PriceFile,
  locarno: locarno as unknown as PriceFile,
  vevey: vevey as unknown as PriceFile,
  weggis: weggis as unknown as PriceFile,
}

export const getPriceFile = (destination: string): PriceFile | undefined => FILES[destination]
export const getHotelPrice = (destination: string, hotel: string) => FILES[destination]?.hotels.find((h) => h.slug === hotel)
