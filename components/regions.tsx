import Image from 'next/image'
import Link from 'next/link'
import { localePath, t, type Locale } from '@/lib/i18n'
import { fill, getDict } from '@/lib/dict'
import { getDestination, hasGuide } from '@/data'
import type { Region } from '@/data/types'
import { PlaceButton } from './booking'

/** Facts about a region computed from the destination sheet, never typed by hand. */
export function regionFacts(region: Region) {
  const dests = region.destinations.map((s) => getDestination(s)!).filter(Boolean)
  const live = dests.filter((x) => hasGuide(x.slug))
  const alts = dests.map((x) => x.altitude)
  return { dests, live, carFree: dests.filter((x) => x.carFree).length, minAlt: Math.min(...alts), maxAlt: Math.max(...alts) }
}

/** One region: photo, what it is, its live guides as chips, and two real buttons. */
export function RegionCard({ region, locale, placement }: { region: Region; locale: Locale; placement: string }) {
  const d = getDict(locale)
  const T = (v: Parameters<typeof t>[0]) => t(v, locale)
  const { live, carFree, minAlt, maxAlt } = regionFacts(region)
  const name = T(region.name)
  const href = localePath(locale, `/regions/${region.slug}`)
  const lead = live[0]

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-rule bg-white shadow-[0_8px_24px_rgba(15,30,40,0.06)]">
      <Link href={href} className="relative block aspect-[16/9] overflow-hidden no-underline">
        <Image src={region.hero.photo} alt={T(region.hero.caption)} fill sizes="(min-width: 1024px) 600px, 100vw" className="object-cover transition-transform duration-500 hover:scale-[1.03]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <div className="absolute bottom-4 left-5 right-5">
          <div className="text-[12px] font-medium uppercase tracking-[0.08em] text-white/80">
            {live.length} {T({ en: 'guides', fr: 'guides', de: 'Reiseführer' })} · {fill(T({ en: '{a} to {b} m', fr: 'de {a} à {b} m', de: '{a} bis {b} m' }), { a: String(minAlt), b: String(maxAlt) })}
          </div>
          <h3 className="m-0 mt-1 font-display text-[32px] font-bold uppercase leading-none text-white md:text-[40px]">{name}</h3>
        </div>
      </Link>
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <p className="m-0 text-[15px] leading-relaxed text-ink md:text-base">{T(region.intro)}</p>
        {carFree > 0 && (
          <p className="mb-0 mt-3 text-[13px] font-medium text-muted">
            {carFree} {T(carFree === 1 ? { en: 'car-free village', fr: 'village sans voiture', de: 'autofreies Dorf' } : { en: 'car-free villages', fr: 'villages sans voiture', de: 'autofreie Dörfer' })}
          </p>
        )}
        <ul className="m-0 mt-4 flex list-none flex-wrap gap-2 p-0">
          {live.map((x) => (
            <li key={x.slug}>
              <Link href={localePath(locale, `/${x.slug}`)} className="inline-block rounded-full border border-rule bg-sand px-3 py-1.5 text-[13px] font-medium text-ink no-underline transition-colors hover:border-lake hover:bg-lake hover:text-white">
                {T(x.name)}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-auto flex flex-col gap-2.5 pt-6 sm:flex-row">
          <Link href={href} className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-lake px-5 py-3 text-[15px] font-bold text-white no-underline shadow-[0_6px_16px_rgba(14,95,110,0.22)] transition-colors hover:bg-lake-dark">
            {T({ en: 'See the region', fr: 'Voir la région', de: 'Region ansehen' })}
          </Link>
          {lead && (
            <span className="flex flex-1 [&>a]:w-full">
              <PlaceButton place={T(lead.name)} placement={placement} label={d.sell.checkPrices} variant="outline" geo={{ lang: locale, lat: region.map.lat, lng: region.map.lng }} />
            </span>
          )}
        </div>
      </div>
    </article>
  )
}
