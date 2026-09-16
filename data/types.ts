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
/** Kind of thing to do, drives the label on the card. */
export type DoingKind = 'walk' | 'ride' | 'local' | 'table'
export type Season = 'summer' | 'winter'

export type DestinationGuide = {
  slug: string
  stamp: 'wengen' | 'lauterbrunnen' | 'grindelwald' | 'murren' | 'interlaken' | 'generic'
  meta: { title: L; description: L }
  eyebrow: L
  title: L
  intro: L
  quickAnswer: L
  /** Three short editorial cards under the map: why go, where to sleep, what to watch out for. */
  snapshot: { why: L; where: L; watch: L }
  /** Long-form opening in real paragraphs: character of the place, how a stay works, when to go. Replaces `intro` on the page. */
  story?: { title: L; paragraphs: L[] }
  stats: { value: string; label: L }[]
  hero: { photo: string; caption: L; credit?: PhotoCredit }
  /** `story`, when present, is a full paragraph (who the area suits, the trade-off) shown instead of `text` and `points`. */
  sectors: { title: L; walk: L; text: L; points: L[]; story?: L }[]
  /** `blurb`, when present, is a short portrait in sentences shown instead of the `facts` bullets. */
  hotels: { slug: string; name: string; url: string; photo?: string; sector: L; facts: L[]; blurb?: L }[]
  hotelsNote: L
  pass?: {
    title: L
    /** What the pass does on each leg. Single-leg fares are not published by operators, so none are shown. */
    rows: { section: L; coverage: 'included' | 'discount25' | 'discount50' }[]
    fare: { label: L; without: string; with: string }
    note: L
  }
  calendar?: { title: L; rows: { name: L; months: MonthState[] }[]; note: L }
  practical?: { title: L; items: { title: L; text: L }[] }
  /** What there is to do: named places and walks, never a trail guide. Facts sourced in data/SOURCES-doing.md. */
  doing?: {
    title: L
    intro: L
    groups: { kind: DoingKind; title: L; items: { name: string | L; meta?: L; text: L }[] }[]
    note: L
  }
  /** Summer / winter switch: best base in the village and dated facts for each season. */
  seasons?: Record<Season, { title: L; base: L; facts: { value: string; label: L }[]; note: L }>
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
  hero: { photo: string; caption: L; credit?: PhotoCredit }
  map: { lat: number; lng: number; zoom: number }
  destinations: string[]
  criteria: L[]
  rows: { slug: string; scores: number[]; forWhom: L }[]
  verdicts: { profile: L; slug: string; reason: L }[]
  note: L
  updated: string
}
