import type { Season } from './types'
import wengen from './prices/wengen.json'

/** Real nightly prices scraped from Booking.com on dated samples (2 adults, 1 room, 1 night).
 *  Regenerate with scripts/scrape-booking-prices.mjs, never edit numbers by hand. */
export type PriceStat = { from: number; avg: number; samples: number } | null
export type HotelPrice = { slug: string; tier: 'budget' | 'mid' | 'premium'; stars: number | null; all: PriceStat } & Record<Season, PriceStat>
export type PriceFile = { scrapedOn: string; source: string; winterDates: string[]; summerDates: string[]; hotels: HotelPrice[] }

const FILES: Record<string, PriceFile> = { wengen: wengen as unknown as PriceFile }

export const getPriceFile = (destination: string): PriceFile | undefined => FILES[destination]
export const getHotelPrice = (destination: string, hotel: string) => FILES[destination]?.hotels.find((h) => h.slug === hotel)
