export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.staysinswitzerland.com').replace(/\/$/, '')
export const SITE_NAME = 'Stays in Switzerland'

/** Stay22 partner id (account level, shared across the network). */
export const STAY22_AID = 'eijeanbaptistemanson'
/** LetMeAllez id for this site (Stay22 hub, 15/09/2026). Public value, safe in code. */
export const STAY22_LMA_ID = process.env.NEXT_PUBLIC_STAY22_LMA_ID || '6aa966fbda41f0b09452de67'
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || ''
export const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID || ''

const CAMPAIGN = 'staysinswitzerland'

export function allezHotelLink(hotelName: string, place: string, placement: string): string {
  const q = new URLSearchParams({
    aid: STAY22_AID,
    campaign: `${CAMPAIGN}-${placement}`,
    hotelname: hotelName,
    address: `${place} Switzerland`,
  })
  return `https://www.stay22.com/allez/roam?${q.toString()}`
}

export function stay22MapSrc(lat: number, lng: number, placement: string, lang: string): string {
  const q = new URLSearchParams({
    aid: STAY22_AID,
    lat: String(lat),
    lng: String(lng),
    campaign: `${CAMPAIGN}-${placement}`,
    maincolor: 'DA291C',
    lang,
  })
  return `https://www.stay22.com/embed/gm?${q.toString()}`
}
