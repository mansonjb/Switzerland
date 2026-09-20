'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { localePath, t, type Locale } from '@/lib/i18n'
import { getDict } from '@/lib/dict'
import type { Destination, RegionKey } from '@/data/types'
import { regionNames } from '@/data/destinations'

/** Sheet card: photo 4:5, name + altitude on a 2px rule. Links to the guide when published. */
export function DestinationCard({ dest, locale, live, priority = false }: { dest: Destination; locale: Locale; live: boolean; priority?: boolean }) {
  const d = getDict(locale)
  const body = (
    <>
      <div className="hatch relative aspect-[4/5] overflow-hidden rounded-2xl">
        <Image src={dest.photo} alt={t(dest.name, locale)} fill sizes="(min-width:1024px) 400px, 50vw" className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]" priority={priority} />
        {dest.carFree && <div className="absolute left-3 top-3 rounded-full bg-ink/90 px-3 py-1 font-display text-xs font-semibold uppercase tracking-[0.08em] text-white backdrop-blur-sm">{d.sell.carFreeFilter}</div>}
        {live ? (
          <div className="absolute bottom-3 right-3 flex items-center gap-2 rounded-full bg-lake px-3.5 py-2 font-display text-sm font-semibold uppercase tracking-[0.06em] text-white shadow-md transition-colors group-hover:bg-lake-dark">
            {d.sell.readGuide} <span aria-hidden>→</span>
          </div>
        ) : (
          <div className="absolute bottom-3 right-3 rounded-full bg-white/90 px-3.5 py-2 font-display text-sm font-semibold uppercase tracking-[0.06em] text-ink shadow-md backdrop-blur-sm">
            {d.inPreparation}
          </div>
        )}
      </div>
      <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 pt-1">
        <div className="min-w-0 font-display text-xl font-bold uppercase leading-[1.05] tracking-[0.01em] text-ink [overflow-wrap:anywhere] group-hover:text-lake">{t(dest.name, locale)}</div>
        <div className="shrink-0 font-display text-[17px] font-bold leading-[1.05] tabular-nums text-ink">{dest.altitude} {d.metres}</div>
      </div>
      <div className="text-sm text-muted">
        {t(regionNames[dest.region], locale)}
      </div>
    </>
  )
  return live ? (
    <Link href={localePath(locale, `/${dest.slug}`)} className="group flex flex-col gap-2.5 text-ink no-underline">
      {body}
    </Link>
  ) : (
    <div className="flex flex-col gap-2.5 text-ink">{body}</div>
  )
}

type Filter = 'all' | 'live' | 'car-free' | RegionKey

/** The stamp sheet with filter chips (all, car-free, by region). */
export function Sheet({ destinations, liveSlugs, locale, cols = 'md:grid-cols-3' }: { destinations: Destination[]; liveSlugs: string[]; locale: Locale; cols?: string }) {
  const d = getDict(locale)
  const [filter, setFilter] = useState<Filter>('all')
  const regions = [...new Set(destinations.map((x) => x.region))]
  const chips: { key: Filter; label: string; count: number }[] = [
    { key: 'all', label: d.sell.all, count: destinations.length },
    { key: 'live', label: d.sell.liveFilter, count: liveSlugs.length },
    { key: 'car-free', label: d.sell.carFreeFilter, count: destinations.filter((x) => x.carFree).length },
    ...regions.map((r) => ({ key: r as Filter, label: t(regionNames[r], locale), count: destinations.filter((x) => x.region === r).length })),
  ]
  const shown = destinations
    .filter((x) => filter === 'all' || (filter === 'live' ? liveSlugs.includes(x.slug) : filter === 'car-free' ? x.carFree : x.region === filter))
    .sort((a, b) => Number(liveSlugs.includes(b.slug)) - Number(liveSlugs.includes(a.slug)))

  return (
    <div>
      {chips.length > 3 && (
        <div className="-mx-4 mb-6 flex gap-2 overflow-x-auto px-4 pb-1 [scrollbar-width:none] md:mx-0 md:mb-8 md:flex-wrap md:px-0 [&::-webkit-scrollbar]:hidden">
          {chips.map((c) => (
            <button
              key={c.key}
              type="button"
              onClick={() => setFilter(c.key)}
              aria-pressed={filter === c.key}
              className={`shrink-0 cursor-pointer rounded-full border px-4 py-2 text-sm font-medium transition-colors ${filter === c.key ? 'border-ink bg-ink text-white' : 'border-rule bg-white text-ink hover:border-lake hover:text-lake'}`}
            >
              {c.label} <span className={filter === c.key ? 'text-white/70' : 'text-faint'}>{c.count}</span>
            </button>
          ))}
        </div>
      )}
      <div className={`grid grid-cols-2 gap-5 md:gap-10 ${cols}`}>
        {shown.map((x, i) => (
          <DestinationCard key={x.slug} dest={x} locale={locale} live={liveSlugs.includes(x.slug)} priority={i < 3} />
        ))}
      </div>
    </div>
  )
}
