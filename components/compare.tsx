import Link from 'next/link'
import { localePath, t, type L, type Locale } from '@/lib/i18n'
import { fill } from '@/lib/dict'
import { getDestination, hasGuide } from '@/data'
import { priceRows } from '@/lib/price-index'
import type { Destination } from '@/data/types'

/** The neighbours a traveller actually weighs against this village, on the four
 *  facts that decide it. Every cell is read from the destination sheet or the
 *  scraped prices, and the differences are computed, never written by hand. */

const copy = {
  title: { en: '{place} or one of its neighbours?', fr: '{place} ou l’un de ses voisins ?', de: '{place} oder einer seiner Nachbarn?' } as L,
  lead: {
    en: 'Travellers rarely choose {place} in isolation, they choose it over the village down the line. Here is the same set of facts for each of them.',
    fr: 'On choisit rarement {place} seul, on le choisit plutôt que le village suivant sur la ligne. Voici les mêmes éléments pour chacun d’eux.',
    de: 'Man wählt {place} selten für sich allein, sondern gegenüber dem nächsten Ort auf der Strecke. Hier dieselben Angaben für jeden von ihnen.',
  } as L,
  here: { en: 'This page', fr: 'Cette page', de: 'Diese Seite' } as L,
  place: { en: 'Village or town', fr: 'Village ou ville', de: 'Ort' } as L,
  altitude: { en: 'Altitude', fr: 'Altitude', de: 'Höhe' } as L,
  access: { en: 'Cars', fr: 'Voitures', de: 'Autos' } as L,
  carFree: { en: 'Car-free', fr: 'Sans voiture', de: 'Autofrei' } as L,
  cars: { en: 'Reachable by road', fr: 'Accessible en voiture', de: 'Mit dem Auto erreichbar' } as L,
  night: { en: 'Typical night', fr: 'Nuit type', de: 'Typische Nacht' } as L,
  noPrice: { en: 'Not enough prices', fr: 'Pas assez de prix', de: 'Zu wenige Preise' } as L,
  cheaper: { en: '{n}% cheaper', fr: '{n}% moins cher', de: '{n}% günstiger' } as L,
  dearer: { en: '{n}% dearer', fr: '{n}% plus cher', de: '{n}% teurer' } as L,
  higher: { en: '{n} m higher', fr: '{n} m plus haut', de: '{n} m höher' } as L,
  lower: { en: '{n} m lower', fr: '{n} m plus bas', de: '{n} m tiefer' } as L,
  noCars: { en: 'no cars', fr: 'sans voiture', de: 'ohne Auto' } as L,
  withCars: { en: 'open to cars', fr: 'ouvert aux voitures', de: 'für Autos offen' } as L,
  note: {
    en: 'Prices are the middle night among the hotels sampled in each place, from the same dated Booking.com readings as the price index.',
    fr: 'Les prix correspondent à la nuit médiane parmi les hôtels relevés dans chaque lieu, issus des mêmes relevés datés de Booking.com que l’indice des prix.',
    de: 'Die Preise sind die mittlere Nacht unter den erhobenen Hotels je Ort, aus denselben datierten Booking.com-Messungen wie der Preisindex.',
  } as L,
  seeIndex: { en: 'See every town compared', fr: 'Voir toutes les villes comparées', de: 'Alle Orte im Vergleich' } as L,
}

/** The facts that separate a neighbour from the page you are on, strongest first. */
function differences(here: Destination, there: Destination, herePrice: number | null, therePrice: number | null, locale: Locale): string[] {
  const T = (v: L) => t(v, locale)
  const out: string[] = []
  if (herePrice && therePrice) {
    const delta = Math.round((therePrice / herePrice - 1) * 100)
    if (Math.abs(delta) >= 15) out.push(fill(T(delta < 0 ? copy.cheaper : copy.dearer), { n: String(Math.abs(delta)) }))
  }
  if (there.carFree !== here.carFree) out.push(T(there.carFree ? copy.noCars : copy.withCars))
  const rise = there.altitude - here.altitude
  if (Math.abs(rise) >= 300) out.push(fill(T(rise > 0 ? copy.higher : copy.lower), { n: String(Math.abs(rise)) }))
  return out
}

export function NeighbourCompare({ slug, neighbours, locale }: { slug: string; neighbours: string[]; locale: Locale }) {
  const T = (v: L) => t(v, locale)
  const here = getDestination(slug)
  const others = neighbours.map((s) => getDestination(s)).filter((d): d is Destination => Boolean(d) && hasGuide(d!.slug))
  if (!here || !others.length) return null

  const prices = new Map(priceRows().map((r) => [r.dest.slug, r.all.typical]))
  const price = (d: Destination) => prices.get(d.slug) ?? null
  const chf = (n: number) => (locale === 'fr' ? `${n} CHF` : `CHF ${n}`)
  const name = (d: Destination) => t(d.name, locale)
  const colHead = 'p-3 text-left font-display text-[13px] font-semibold uppercase tracking-[0.06em] text-ink md:p-4 md:text-[15px]'
  const cell = 'p-3 text-[15px] text-ink md:p-4'
  const rows = [here, ...others]

  return (
    <>
      <p className="m-0 mb-6 max-w-[70ch] text-[15px] leading-relaxed text-ink md:text-base">{fill(T(copy.lead), { place: name(here) })}</p>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[580px] border-collapse">
          <thead>
            <tr className="border-b border-ink">
              <th scope="col" className={colHead}>{T(copy.place)}</th>
              <th scope="col" className={colHead}>{T(copy.night)}</th>
              <th scope="col" className={colHead}>{T(copy.altitude)}</th>
              <th scope="col" className={colHead}>{T(copy.access)}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((d, i) => {
              const self = d.slug === here.slug
              const diffs = self ? [] : differences(here, d, price(here), price(d), locale)
              return (
                <tr key={d.slug} className={`border-b border-rule ${self ? 'bg-sand' : i % 2 ? 'bg-mist/60' : ''}`}>
                  <th scope="row" className="p-3 text-left font-normal md:p-4">
                    {self ? (
                      <span className="font-display text-lg font-bold uppercase text-ink">{name(d)}</span>
                    ) : (
                      <Link href={localePath(locale, `/${d.slug}`)} className="font-display text-lg font-bold uppercase text-ink no-underline hover:text-lake">{name(d)}</Link>
                    )}
                    {(self || diffs.length > 0) && (
                      <div className="mt-0.5 text-[12px] font-medium uppercase tracking-[0.06em] text-muted">
                        {self ? T(copy.here) : diffs.join(' · ')}
                      </div>
                    )}
                  </th>
                  <td className={`${cell} font-display text-lg font-bold tabular-nums`}>
                    {price(d) ? chf(price(d)!) : <span className="font-sans text-[14px] font-normal text-muted">{T(copy.noPrice)}</span>}
                  </td>
                  <td className={`${cell} tabular-nums`}>{d.altitude} m</td>
                  <td className={cell}>{T(d.carFree ? copy.carFree : copy.cars)}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex flex-wrap items-baseline justify-between gap-3">
        <p className="m-0 max-w-[70ch] text-[13px] text-muted md:text-sm">{T(copy.note)}</p>
        <Link href={localePath(locale, '/hotel-prices')} className="shrink-0 text-[15px] font-medium text-lake no-underline hover:text-lake-dark">{T(copy.seeIndex)} →</Link>
      </div>
    </>
  )
}

export { copy as compareCopy }
