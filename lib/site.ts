export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.staysinswitzerland.com').replace(/\/$/, '')
export const SITE_NAME = 'Stays in Switzerland'

/** Stay22 partner id (account level, shared across the network). */
export const STAY22_AID = 'eijeanbaptistemanson'
/** LetMeAllez id for this site (Stay22 hub, 15/09/2026). Public value, safe in code. */
export const STAY22_LMA_ID = process.env.NEXT_PUBLIC_STAY22_LMA_ID || '6aa966fbda41f0b09452de67'
/** GA4 property (public value). Loaded only after consent, see components/consent.tsx. */
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-JPZ3R8QSEM'
/** Microsoft Clarity project (public value). Loaded only after consent too. */
export const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID || 'ylsx8ydzv3'

const CAMPAIGN = 'staysinswitzerland'

export type StayDates = { checkin: string; checkout: string }

/** Prices on this site are collected in CHF, so the partner pages open in CHF too. */
const CURRENCY = 'CHF'
/** Stay22 reads campaign labels separated by underscores. */
const camp = (placement: string) => `${CAMPAIGN}_${placement.replace(/-/g, '_')}`

function dateParams(q: URLSearchParams, dates?: StayDates | null) {
  if (dates?.checkin && dates?.checkout) {
    q.set('checkin', dates.checkin)
    q.set('checkout', dates.checkout)
  }
}

/** Stay22 Allez deep link to one hotel (redirects to the best booking platform for the visitor). */
export function allezHotelLink(hotelName: string, place: string, placement: string, dates?: StayDates | null, opts?: { lang?: string; lat?: number; lng?: number }): string {
  const q = new URLSearchParams({ aid: STAY22_AID, campaign: camp(placement), hotelname: hotelName, address: `${place} Switzerland`, currency: CURRENCY, adults: '2' })
  // Coordinates disambiguate hotels whose name exists in several villages.
  if (opts?.lat && opts?.lng) { q.set('lat', String(opts.lat)); q.set('lng', String(opts.lng)) }
  if (opts?.lang) q.set('lang', opts.lang)
  dateParams(q, dates)
  return `https://www.stay22.com/allez/roam?${q.toString()}`
}

/** Stay22 Allez deep link to all places to stay around a destination. */
export function allezPlaceLink(place: string, placement: string, dates?: StayDates | null, opts?: { lang?: string; lat?: number; lng?: number }): string {
  const q = new URLSearchParams({ aid: STAY22_AID, campaign: camp(placement), address: place ? `${place} Switzerland` : 'Switzerland', currency: CURRENCY, adults: '2' })
  if (opts?.lat && opts?.lng) { q.set('lat', String(opts.lat)); q.set('lng', String(opts.lng)) }
  if (opts?.lang) q.set('lang', opts.lang)
  dateParams(q, dates)
  return `https://www.stay22.com/allez/roam?${q.toString()}`
}

export function stay22MapSrc(lat: number, lng: number, placement: string, lang: string, dates?: StayDates | null, zoom?: number): string {
  // The map's own UI language is `ljs`, not `lang` (Stay22 Maps parameters).
  const q = new URLSearchParams({ aid: STAY22_AID, lat: String(lat), lng: String(lng), campaign: camp(placement), maincolor: '0E5F6E', ljs: lang, currency: CURRENCY, adults: '2' })
  if (zoom) q.set('zoom', String(zoom))
  dateParams(q, dates)
  return `https://www.stay22.com/embed/gm?${q.toString()}`
}
