'use client'

import Image from 'next/image'
import { useState } from 'react'
import { HotelButton, useSeason, type Season } from './booking'

export type Tier = 'budget' | 'mid' | 'premium'

/** A hotel already translated server-side. Prices come from dated Booking.com samples (data/prices). */
export type HotelView = {
  name: string
  photo?: string
  tier: Tier
  stars: number | null
  sector: string
  facts: string[]
  price: Record<Season, { from: number; avg: number } | null> & { all: { from: number; avg: number } | null }
}

export type HotelsLabels = {
  all: string
  tiers: Record<Tier, string>
  from: string
  perNight: string
  average: string
  seasonAvg: Record<Season, string>
  noSeason: string
  noPrice: string
  cta: string
  stars: string
}

const TIER_STYLE: Record<Tier, string> = {
  budget: 'bg-open text-white',
  mid: 'bg-white text-ink',
  premium: 'bg-ink text-white',
}

const chf = (n: number) => `CHF ${n.toLocaleString('de-CH')}`

export function HotelsBrowser({ hotels, place, labels }: { hotels: HotelView[]; place: string; labels: HotelsLabels }) {
  const [season] = useSeason()
  const [tier, setTier] = useState<Tier | 'all'>('all')
  const tiers: Tier[] = ['budget', 'mid', 'premium']
  // A hotel with no collected price is not sorted into a price tier, it only shows under All.
  const shown = hotels.filter((h) => tier === 'all' || (h.price.all !== null && h.tier === tier))

  return (
    <div>
      <div className="-mx-4 mb-6 flex gap-2 overflow-x-auto px-4 [scrollbar-width:none] md:mx-0 md:flex-wrap md:px-0 [&::-webkit-scrollbar]:hidden">
        {(['all', ...tiers] as const).map((k) => {
          const count = k === 'all' ? hotels.length : hotels.filter((h) => h.price.all !== null && h.tier === k).length
          if (!count) return null
          return (
            <button
              key={k}
              type="button"
              onClick={() => setTier(k)}
              aria-pressed={tier === k}
              className={`shrink-0 cursor-pointer border px-3.5 py-2 text-sm font-medium transition-colors ${tier === k ? 'border-ink bg-ink text-white' : 'border-rule bg-white text-ink hover:border-ink'}`}
            >
              {k === 'all' ? labels.all : labels.tiers[k]} <span className={tier === k ? 'text-white/70' : 'text-faint'}>{count}</span>
            </button>
          )
        })}
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {shown.map((h) => {
          const p = h.price[season] ?? h.price.all
          return (
            <article key={h.name} className="group flex flex-col border border-rule bg-white transition-colors hover:border-ink">
              <div className="hatch relative aspect-[3/2] overflow-hidden">
                {h.photo && <Image src={h.photo} alt={h.name} fill sizes="(min-width:1024px) 300px, (min-width:640px) 50vw, 100vw" className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]" />}
                {h.price.all && <div className={`absolute left-0 top-0 px-2.5 py-1.5 font-display text-xs font-semibold uppercase tracking-[0.08em] ${TIER_STYLE[h.tier]}`}>{labels.tiers[h.tier]}</div>}
              </div>
              <div className="flex flex-1 flex-col gap-3 p-4 md:p-5">
                <div>
                  <h3 className="m-0 font-display text-2xl font-bold uppercase leading-none tracking-[0.01em] text-ink">{h.name}</h3>
                  <div className="mt-1 text-[13px] text-muted">
                    {h.sector}
                    {h.stars ? ` · ${h.stars} ${labels.stars}` : ''}
                  </div>
                </div>
                {!p && <div className="border-y border-rule py-3 text-[13px] text-muted">{labels.noPrice}</div>}
                {p && (
                  <div className="border-y border-rule py-3">
                    <div className="text-[12px] font-medium uppercase tracking-[0.08em] text-muted">{labels.from}</div>
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-display text-[34px] font-bold leading-none tabular-nums text-ink">{chf(p.from)}</span>
                      <span className="text-sm text-muted">{labels.perNight}</span>
                    </div>
                    <div className="mt-1 text-[13px] text-muted">
                      {h.price[season] ? labels.seasonAvg[season] : labels.average} <span className="font-semibold tabular-nums text-ink">{chf(p.avg)}</span>
                      {!h.price[season] && <span className="block text-faint">{labels.noSeason}</span>}
                    </div>
                  </div>
                )}
                <ul className="m-0 flex list-none flex-col gap-2 p-0">
                  {h.facts.map((f, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="mt-[7px] size-1.5 shrink-0 bg-ink" aria-hidden />
                      <span className="text-[15px] leading-normal text-ink">{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-2">
                  <HotelButton hotel={h.name} place={place} label={labels.cta} />
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </div>
  )
}
