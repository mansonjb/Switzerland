import type { L } from '@/lib/i18n'

export type RegionKey = 'bernese-oberland' | 'valais' | 'graubunden' | 'central' | 'eastern' | 'mittelland' | 'zurich' | 'lake-geneva' | 'ticino'

export type PhotoCredit = { author: string; license: string; licenseUrl: string; source: string }

/** One entry of the stamp sheet. Every destination exists here, `guide` pages are published one by one. */
export type Destination = {
  slug: string
  name: L
  region: RegionKey
  altitude: number
  photo: string
  credit?: PhotoCredit
  lat: number
  lng: number
  carFree: boolean
}

export type MonthState = 'o' | 'r' | 'x'

export type DestinationGuide = {
  slug: string
  stamp: 'wengen' | 'generic'
  meta: { title: L; description: L }
  eyebrow: L
  title: L
  intro: L
  quickAnswer: L
  stats: { value: string; label: L }[]
  hero: { photo: string; caption: L; credit?: PhotoCredit }
  sectors: { title: L; walk: L; text: L; points: L[] }[]
  hotels: { name: string; url: string; sector: L; facts: L[] }[]
  hotelsNote: L
  pass?: {
    title: L
    /** What the pass does on each leg. Single-leg fares are not published by operators, so none are shown. */
    rows: { section: L; coverage: 'included' | 'discount25' }[]
    fare: { label: L; without: string; with: string }
    note: L
  }
  calendar?: { title: L; rows: { name: L; months: MonthState[] }[]; note: L }
  practical?: { title: L; items: { title: L; text: L }[] }
  faq: { q: L; a: L }[]
  neighbours: string[]
  updated: string
}

export type Region = {
  slug: string
  key: RegionKey
  name: L
  meta: { title: L; description: L }
  intro: L
  quickAnswer: L
  destinations: string[]
  criteria: L[]
  rows: { slug: string; scores: number[]; forWhom: L }[]
  verdicts: { profile: L; slug: string; reason: L }[]
  note: L
  updated: string
}
