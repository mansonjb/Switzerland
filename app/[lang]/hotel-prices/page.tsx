import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { hasLocale, languageAlternates, localePath, t, type L, type Locale } from '@/lib/i18n'
import { fill, getDict } from '@/lib/dict'
import { SITE_URL, SITE_NAME } from '@/lib/site'
import { cheaperNeighbours, priceHeadline, priceMethod, priceRows, regionPrices, seasonRows, PRICE_MIN_HOTELS } from '@/lib/price-index'
import { Footer, Header } from '@/components/chrome'
import { CtaBand, Eyebrow, Faq, JsonLd, PhotoHero, QuickAnswer, Section } from '@/components/blocks'
import { PlaceButton } from '@/components/booking'
import { copy } from './copy'

const PATH = '/hotel-prices'
const HERO = '/photos/murren.jpg'

/** The figures every section shares, computed once from the scraped files. */
function data(lang: Locale) {
  const rows = priceRows()
  const head = priceHeadline(rows)
  const method = priceMethod()
  const regions = regionPrices(rows)
  const seasons = seasonRows(rows)
  const topWinter = seasons[0]
  const topSummer = seasons[seasons.length - 1]
  const name = (slug: string) => t(rows.find((r) => r.dest.slug === slug)!.dest.name, lang)
  return {
    rows,
    head,
    method,
    regions,
    seasons,
    swaps: cheaperNeighbours(rows),
    vars: {
      towns: String(head.towns),
      typical: String(head.typical),
      cheapest: name(head.cheapest.dest.slug),
      cheapestPrice: String(head.cheapest.all.typical),
      dearest: name(head.dearest.dest.slug),
      dearestPrice: String(head.dearest.all.typical),
      hotels: String(method.hotels),
      samples: String(method.samples),
      min: String(PRICE_MIN_HOTELS),
      occupancy: t(
        { en: 'two adults, one room, one night', fr: 'deux adultes, une chambre, une nuit', de: 'zwei Erwachsene, ein Zimmer, eine Nacht' },
        lang,
      ),
      scrapedFrom: day(method.scrapedFrom, lang),
      scrapedTo: day(method.scrapedTo, lang),
      winterDates: list(method.winterDates.map((d) => day(d, lang)), lang),
      summerDates: list(method.summerDates.map((d) => day(d, lang)), lang),
      topWinter: name(topWinter.row.dest.slug),
      topWinterPct: String(topWinter.delta),
      topSummer: name(topSummer.row.dest.slug),
      topSummerPct: String(Math.abs(topSummer.delta)),
      cheapRegion: t(regions[0].name, lang),
      cheapRegionPrice: String(regions[0].typical),
      dearRegion: t(regions[regions.length - 1].name, lang),
      dearRegionPrice: String(regions[regions.length - 1].typical),
    } as Record<string, string>,
  }
}

const day = (iso: string, lang: Locale) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString(lang === 'en' ? 'en-GB' : lang, { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })

const list = (items: string[], lang: Locale) => {
  if (items.length < 2) return items.join('')
  const and = { en: 'and', fr: 'et', de: 'und' }[lang]
  return `${items.slice(0, -1).join(', ')} ${and} ${items[items.length - 1]}`
}

export async function generateMetadata({ params }: PageProps<'/[lang]/hotel-prices'>): Promise<Metadata> {
  const { lang } = await params
  if (!hasLocale(lang)) return {}
  const { vars } = data(lang)
  const title = t(copy.meta.title, lang)
  const description = fill(t(copy.meta.description, lang), vars)
  return {
    title,
    description,
    alternates: { canonical: localePath(lang, PATH), languages: languageAlternates(PATH) },
    openGraph: { title, description, url: localePath(lang, PATH), siteName: SITE_NAME, type: 'website', images: [HERO] },
  }
}

export default async function HotelPrices({ params }: PageProps<'/[lang]/hotel-prices'>) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()
  const d = getDict(lang)
  const T = (v: L) => t(v, lang)
  const F = (v: L, vars: Record<string, string>) => fill(T(v), vars)
  const { rows, head, method, regions, seasons, swaps, vars } = data(lang)
  // French writes the amount before the unit, English and German after it.
  const chf = (n: number) => (lang === 'fr' ? `${n} CHF` : `CHF ${n}`)
  const colHead = 'p-3 text-left font-display text-[13px] font-semibold uppercase tracking-[0.06em] text-ink md:p-4 md:text-[15px]'
  const cell = 'p-3 text-[15px] tabular-nums text-ink md:p-4'
  const empty = F(copy.table.noneTitle, vars)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Dataset',
        name: T(copy.meta.title),
        description: F(copy.meta.description, vars),
        url: `${SITE_URL}${localePath(lang, PATH)}`,
        inLanguage: lang,
        creator: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
        dateModified: method.scrapedTo,
        temporalCoverage: `${method.winterDates[0]}/${method.summerDates[method.summerDates.length - 1]}`,
        spatialCoverage: { '@type': 'Country', name: 'Switzerland' },
        variableMeasured: T({ en: 'Nightly hotel rate in CHF for two adults in one room', fr: 'Tarif hôtelier par nuit en CHF pour deux adultes en chambre double', de: 'Hotelpreis pro Nacht in CHF für zwei Erwachsene im Doppelzimmer' }),
      },
      {
        '@type': 'FAQPage',
        mainEntity: copy.faq.items.map((item) => ({
          '@type': 'Question',
          name: T(item.q),
          acceptedAnswer: { '@type': 'Answer', text: F(item.a, vars) },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: SITE_NAME, item: `${SITE_URL}${localePath(lang)}` },
          { '@type': 'ListItem', position: 2, name: T(copy.breadcrumb), item: `${SITE_URL}${localePath(lang, PATH)}` },
        ],
      },
    ],
  }

  return (
    <>
      <Header locale={lang} path={PATH} />
      <main className="flex-1">
        <JsonLd data={jsonLd} />
        <PhotoHero photo={HERO} alt={T({ en: 'The village of Mürren above the Lauterbrunnen valley', fr: 'Le village de Mürren au-dessus de la vallée de Lauterbrunnen', de: 'Das Dorf Mürren über dem Lauterbrunnental' })}>
          <nav className="mb-5 flex flex-wrap items-center gap-2 text-[13px] text-white/75" aria-label="Breadcrumb">
            <Link href={localePath(lang)} className="text-white/75 no-underline hover:text-white">{SITE_NAME}</Link>
            <span aria-hidden>/</span>
            <span className="text-white">{T(copy.breadcrumb)}</span>
          </nav>
          <div className="text-[13px] font-medium uppercase tracking-[0.08em] text-white/75 md:text-sm">
            {F({ en: '{towns} towns · {hotels} hotels · {samples} dated prices', fr: '{towns} villes · {hotels} hôtels · {samples} prix datés', de: '{towns} Orte · {hotels} Hotels · {samples} datierte Preise' }, vars)}
          </div>
          <h1 className="m-0 mt-2 font-display text-[40px] font-bold uppercase leading-[0.95] tracking-[0.01em] text-white md:text-[64px] lg:text-[80px]">{T(copy.h1)}</h1>
          <p className="mb-0 mt-4 text-lg leading-normal text-white md:text-xl">{F(copy.intro, vars)}</p>
        </PhotoHero>

        <Section id="answer" title={T({ en: 'The short answer', fr: 'La réponse courte', de: 'Die kurze Antwort' })}>
          <QuickAnswer locale={lang}>{F(copy.quickAnswer, vars)}</QuickAnswer>
        </Section>

        <Section id="regions" title={T(copy.region.title)} gap="mb-4 md:mb-6">
          <p className="m-0 mb-6 max-w-[70ch] text-[15px] leading-relaxed text-ink md:text-base">{T(copy.region.lead)}</p>
          <ul className="m-0 grid list-none gap-3 p-0 sm:grid-cols-2 lg:grid-cols-3">
            {regions.map((r) => {
              const sorted = [...r.towns].sort((a, b) => a.all.typical - b.all.typical)
              return (
                <li key={r.key} className="rounded-2xl border border-rule bg-white p-5">
                  <div className="font-display text-xl font-bold uppercase leading-tight text-ink">{T(r.name)}</div>
                  <div className="mt-1 font-display text-3xl font-bold tabular-nums text-lake">{chf(r.typical)}</div>
                  <div className="mt-1 text-[13px] text-muted">
                    {fill(T(copy.region.towns), { n: String(r.towns.length) })} · {fill(T(copy.region.range), { min: String(sorted[0].all.typical), max: String(sorted[sorted.length - 1].all.typical) })}
                  </div>
                </li>
              )
            })}
          </ul>
        </Section>

        <Section id="table" title={T(copy.table.title)} gap="mb-4 md:mb-6">
          <p className="m-0 mb-6 max-w-[70ch] text-[15px] leading-relaxed text-ink md:text-base">{T(copy.table.lead)}</p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse">
              <thead>
                <tr className="border-b border-ink">
                  <th scope="col" className={colHead}>{T(copy.table.town)}</th>
                  <th scope="col" className={colHead}>{T(copy.table.typical)}</th>
                  <th scope="col" className={colHead}>{T(copy.table.from)}</th>
                  <th scope="col" className={colHead}>{T(copy.table.winter)}</th>
                  <th scope="col" className={colHead}>{T(copy.table.summer)}</th>
                  <th scope="col" className={colHead}>{T(copy.table.hotels)}</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr key={r.dest.slug} className={`border-b border-rule ${i % 2 ? 'bg-mist/60' : ''}`}>
                    <th scope="row" className="p-3 text-left font-normal md:p-4">
                      <Link href={localePath(lang, `/${r.dest.slug}`)} className="font-display text-lg font-bold uppercase text-ink no-underline hover:text-lake">{T(r.dest.name)}</Link>
                      {r.dest.carFree && <span className="ml-2 align-middle text-[11px] font-medium uppercase tracking-[0.06em] text-muted">{' '}({T(copy.table.carFree)})</span>}
                    </th>
                    <td className={`${cell} font-display text-xl font-bold`}>{chf(r.all.typical)}</td>
                    <td className={cell}>{chf(r.all.from)}</td>
                    <td className={cell}>{r.winter ? chf(r.winter.typical) : <span className="text-muted" title={empty}>{T(copy.table.none)}</span>}</td>
                    <td className={cell}>{r.summer ? chf(r.summer.typical) : <span className="text-muted" title={empty}>{T(copy.table.none)}</span>}</td>
                    <td className={`${cell} text-muted`}>{r.hotels}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section id="seasons" title={T(copy.season.title)} gap="mb-4 md:mb-6">
          <p className="m-0 mb-6 max-w-[70ch] text-[15px] leading-relaxed text-ink md:text-base">{F(copy.season.lead, vars)}</p>
          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            {[
              { label: T(copy.season.winterUp), items: seasons.filter((s) => s.delta > 0) },
              { label: T(copy.season.summerUp), items: [...seasons].reverse().filter((s) => s.delta < 0) },
            ].map((group) => (
              <div key={group.label}>
                <h3 className="m-0 mb-3 font-display text-xl font-bold uppercase text-ink">{group.label}</h3>
                <ul className="m-0 list-none p-0">
                  {group.items.map((s) => (
                    <li key={s.row.dest.slug} className="flex items-baseline justify-between gap-4 border-b border-rule py-2.5">
                      <Link href={localePath(lang, `/${s.row.dest.slug}`)} className="text-[15px] font-medium text-ink no-underline hover:text-lake">{T(s.row.dest.name)}</Link>
                      <span className="shrink-0 text-[13px] tabular-nums text-muted">
                        {chf(s.winter.typical)} / {chf(s.summer.typical)}
                        <strong className="ml-3 font-display text-base font-bold text-ink">{s.delta > 0 ? '+' : ''}{s.delta}%</strong>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mb-0 mt-4 text-[13px] text-muted md:text-sm">{fill(T(copy.season.note), { n: String(seasons.length) })}</p>
        </Section>

        <Section id="swap" title={T(copy.swap.title)} gap="mb-4 md:mb-6">
          <p className="m-0 mb-6 max-w-[70ch] text-[15px] leading-relaxed text-ink md:text-base">{T(copy.swap.lead)}</p>
          <ul className="m-0 grid list-none gap-4 p-0 md:grid-cols-2">
            {swaps.map(({ row, alternatives }) => (
              <li key={row.dest.slug} className="rounded-2xl border border-rule bg-white p-5">
                <div className="text-[13px] font-medium uppercase tracking-[0.06em] text-muted">
                  {fill(T(copy.swap.insteadOf), { place: T(row.dest.name) })} · {chf(row.all.typical)}
                </div>
                <ul className="m-0 mt-3 flex list-none flex-wrap gap-2 p-0">
                  {alternatives.map((alt) => (
                    <li key={alt.row.dest.slug}>
                      <Link href={localePath(lang, `/${alt.row.dest.slug}`)} className="inline-flex items-baseline gap-2 rounded-full border border-rule bg-sand px-3 py-1.5 text-[14px] text-ink no-underline transition-colors hover:border-lake hover:bg-lake hover:text-white">
                        <span className="font-medium">{T(alt.row.dest.name)}</span>
                        <span className="tabular-nums">{chf(alt.row.all.typical)}</span>
                        <strong className="font-display font-bold">{fill(T(copy.swap.save), { n: String(alt.save) })}</strong>
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <p className="mb-0 mt-5 max-w-[70ch] text-[15px] leading-relaxed text-ink md:text-base">{T(copy.swap.caveat)}</p>
        </Section>

        <Section id="method" title={T(copy.method.title)}>
          <Eyebrow>{T(copy.eyebrow)}</Eyebrow>
          <p className="m-0 mt-3 max-w-[70ch] text-[15px] leading-relaxed text-ink md:text-base">{F(copy.method.body, vars)}</p>
          <p className="m-0 mt-4 max-w-[70ch] text-[15px] leading-relaxed text-ink md:text-base">{T(copy.method.limits)}</p>
        </Section>

        <Section id="faq" title={T(copy.faq.title)}>
          <Faq items={copy.faq.items.map((item) => ({ q: item.q, a: { en: fill(item.a.en, vars), fr: fill(item.a.fr, vars), de: item.a.de ? fill(item.a.de, vars) : undefined } as L }))} locale={lang} />
        </Section>

        <CtaBand title={T(copy.ctaTitle)} text={d.sell.ctaBandText}>
          <PlaceButton place="" placement="hotel-prices-band" label={T({ en: 'Hotels in Switzerland', fr: 'Hôtels en Suisse', de: 'Hotels in der Schweiz' })} variant="white" geo={{ lang }} />
        </CtaBand>
      </main>
      <Footer locale={lang} />
    </>
  )
}
