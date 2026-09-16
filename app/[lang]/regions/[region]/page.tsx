import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { LOCALES, hasLocale, languageAlternates, localePath, t, type L } from '@/lib/i18n'
import { fill, getDict } from '@/lib/dict'
import { SITE_URL, SITE_NAME } from '@/lib/site'
import { getDestination, getRegion, hasGuide, publishedGuides, publishedRegions } from '@/data'
import { Footer, Header } from '@/components/chrome'
import { BookingPanel, Container, CtaBand, Eyebrow, JsonLd, NetworkLinks, PhotoHero, Section, Squares } from '@/components/blocks'
import { LiveMap, PlaceButton, StayFinder, StickyBookingBar } from '@/components/booking'
import { SectionNav } from '@/components/section-nav'
import { Sheet } from '@/components/sheet'

export const dynamicParams = false

export function generateStaticParams() {
  return LOCALES.flatMap((lang) => publishedRegions().map((r) => ({ lang, region: r.slug })))
}

export async function generateMetadata({ params }: PageProps<'/[lang]/regions/[region]'>): Promise<Metadata> {
  const { lang, region: slug } = await params
  const region = getRegion(slug)
  if (!hasLocale(lang) || !region) return {}
  const path = `/regions/${slug}`
  return {
    title: t(region.meta.title, lang),
    description: t(region.meta.description, lang),
    alternates: { canonical: localePath(lang, path), languages: languageAlternates(path) },
    openGraph: { title: t(region.meta.title, lang), description: t(region.meta.description, lang), url: localePath(lang, path), siteName: SITE_NAME, type: 'article', images: [region.hero.photo] },
  }
}

export default async function RegionPage({ params }: PageProps<'/[lang]/regions/[region]'>) {
  const { lang, region: slug } = await params
  const region = getRegion(slug)
  if (!hasLocale(lang) || !region) notFound()
  const d = getDict(lang)
  const T = (v: L) => t(v, lang)
  const path = `/regions/${slug}`
  const regionName = T(region.name)
  const dests = region.destinations.map((s) => getDestination(s)!)
  const places = dests.map((x) => ({ value: T(x.name), label: T(x.name), href: hasGuide(x.slug) ? `${localePath(lang, `/${x.slug}`)}#hotels` : '#map' }))
  const liveSlugs = publishedGuides().map((g) => g.slug)
  // Best pick per criterion = highest score (ties: first row)
  const best = region.criteria.map((_, k) => {
    let top = 0
    region.rows.forEach((r, i) => {
      if (r.scores[k] > region.rows[top].scores[k]) top = i
    })
    return top
  })
  const nav = d.sell.onThisPage

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'Article', headline: T(region.meta.title), description: T(region.meta.description), inLanguage: lang, dateModified: region.updated, mainEntityOfPage: `${SITE_URL}${localePath(lang, path)}`, publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL } },
      { '@type': 'ItemList', itemListElement: dests.map((x, i) => ({ '@type': 'ListItem', position: i + 1, name: T(x.name), ...(hasGuide(x.slug) ? { url: `${SITE_URL}${localePath(lang, `/${x.slug}`)}` } : {}) })) },
      { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: SITE_NAME, item: `${SITE_URL}${localePath(lang)}` }, { '@type': 'ListItem', position: 2, name: regionName, item: `${SITE_URL}${localePath(lang, path)}` }] },
    ],
  }

  const colHead = 'font-display text-[17px] font-semibold uppercase tracking-[0.06em] text-ink'

  return (
    <>
      <Header locale={lang} path={path} />
      <main className="flex-1">
        <JsonLd data={jsonLd} />

        <PhotoHero photo={region.hero.photo} alt={T(region.hero.caption)} credit={region.hero.credit}>
          <nav className="mb-5 flex flex-wrap items-center gap-2 text-[13px] text-white/75" aria-label="Breadcrumb">
            <Link href={localePath(lang)} className="text-white/75 no-underline hover:text-white">{SITE_NAME}</Link>
            <span aria-hidden>/</span>
            <span className="text-white">{regionName}</span>
          </nav>
          <div className="text-[13px] font-medium uppercase tracking-[0.08em] text-white/75 md:text-sm">{T({ en: 'Region', fr: 'Région', de: 'Region' })} · {dests.length} {T({ en: 'bases', fr: 'bases', de: 'Standorte' })}</div>
          <h1 className="m-0 mt-2 font-display text-[44px] font-bold uppercase leading-[0.95] tracking-[0.01em] text-white md:text-[72px] lg:text-[88px]">{regionName}</h1>
          <p className="mb-0 mt-4 text-lg leading-normal text-white md:text-xl">{T(region.quickAnswer)}</p>
          <BookingPanel>
            <StayFinder places={places} labels={d.booking} lang={lang} />
          </BookingPanel>
        </PhotoHero>

        <SectionNav items={[{ id: 'map', label: nav.map }, { id: 'villages', label: nav.sheet }, { id: 'compare', label: nav.choice }, { id: 'verdict', label: nav.verdict }]} />

        <section id="map" className="scroll-mt-14 pt-10 md:pt-16">
          <Container>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2 className="m-0 font-display text-[28px] font-semibold uppercase leading-[1.05] tracking-[0.01em] text-ink md:text-[40px]">{fill(d.sell.liveMap, { place: regionName })}</h2>
                <p className="mb-0 mt-2 text-[15px] leading-relaxed text-muted">{d.sell.liveMapSub}</p>
              </div>
            </div>
            <div className="mt-5 md:mt-6">
              <LiveMap lat={region.map.lat} lng={region.map.lng} zoom={region.map.zoom} placement={`${slug}-map`} lang={lang} title={fill(d.sell.hotelsIn, { place: regionName })} loadLabel={d.mapLoad} />
            </div>
            <p className="mb-0 mt-3 text-[13px] text-muted md:text-sm">{d.mapNote}</p>
            <p className="mb-0 mt-6 text-base leading-relaxed text-ink md:text-lg">{T(region.intro)}</p>
          </Container>
        </section>

        <Section id="villages" title={T({ en: 'The sheet', fr: 'La planche', de: 'Der Bogen' })}>
          <Sheet destinations={dests} liveSlugs={liveSlugs} locale={lang} cols="md:grid-cols-3 lg:grid-cols-5" />
        </Section>

        <Section id="compare" title={T({ en: 'Choosing your base', fr: 'Tableau de choix', de: 'Basis wählen' })} gap="mb-5 md:mb-8">
          <div className="hidden overflow-x-auto lg:block">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-ink">
                  <th scope="col" className={`${colHead} w-[190px] px-4 py-3 text-left`}>{d.choice.village}</th>
                  {region.criteria.map((c, k) => (
                    <th key={k} scope="col" className={`${colHead} w-[128px] px-3 py-3 text-left`}>{T(c)}</th>
                  ))}
                  <th scope="col" className={`${colHead} px-4 py-3 text-left`}>{d.choice.forWhom}</th>
                  <th scope="col" className="w-[170px]" />
                </tr>
              </thead>
              <tbody>
                {region.rows.map((row, i) => {
                  const x = getDestination(row.slug)!
                  return (
                    <tr key={row.slug} className={`border-b border-rule transition-colors hover:bg-mist ${i % 2 ? 'bg-mist/60' : ''}`}>
                      <th scope="row" className="p-4 text-left font-normal">
                        {hasGuide(row.slug) ? (
                          <Link href={localePath(lang, `/${row.slug}`)} className="font-display text-2xl font-bold uppercase leading-none tracking-[0.01em] text-ink no-underline hover:text-lake">{T(x.name)} →</Link>
                        ) : (
                          <div className="font-display text-2xl font-bold uppercase leading-none tracking-[0.01em] text-ink">{T(x.name)}</div>
                        )}
                        <div className="mt-1 text-sm tabular-nums text-muted">{x.altitude} m</div>
                      </th>
                      {row.scores.map((s, k) => (
                        <td key={k} className="px-3 py-4">
                          <span className="flex items-center gap-2">
                            <Squares n={s} />
                            <span className={`size-[7px] rounded-full ${best[k] === i ? 'bg-lake' : ''}`} />
                          </span>
                        </td>
                      ))}
                      <td className="p-4 text-[15px] leading-normal text-ink">{T(row.forWhom)}</td>
                      <td className="py-4 pr-4 text-right">
                        <PlaceButton place={T(x.name)} placement={`${slug}-table`} label={d.sell.checkPrices} variant="outline" />
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
          <div className="flex flex-col lg:hidden">
            {region.rows.map((row, i) => {
              const x = getDestination(row.slug)!
              return (
                <div key={row.slug} className={`border-t border-rule py-4 ${i % 2 ? 'bg-mist/60' : ''}`}>
                  <div className="flex items-baseline gap-2">
                    <div className="font-display text-2xl font-bold uppercase leading-none text-ink">{T(x.name)}</div>
                    <div className="text-[13px] tabular-nums text-muted">{x.altitude} m</div>
                  </div>
                  <div className="mt-3 flex flex-col gap-1.5">
                    {row.scores.map((s, k) => (
                      <div key={k} className="flex items-center gap-2.5">
                        <div className="w-[120px] text-[13px] text-muted">{T(region.criteria[k])}</div>
                        <Squares n={s} />
                        <span className={`size-[7px] rounded-full ${best[k] === i ? 'bg-lake' : ''}`} />
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 text-sm leading-normal text-ink">{T(row.forWhom)}</div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <PlaceButton place={T(x.name)} placement={`${slug}-table`} label={d.sell.checkPrices} variant="outline" />
                    {hasGuide(row.slug) && (
                      <Link href={localePath(lang, `/${row.slug}`)} className="inline-flex items-center px-3 py-3 text-[15px] font-medium text-lake no-underline">{d.sell.readGuide} →</Link>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
          <div className="mt-4 flex flex-wrap gap-x-7 gap-y-2">
            <div className="flex items-center gap-2"><span className="size-[11px] bg-ink" /><span className="text-sm text-muted">{d.choice.legendFull}</span></div>
            <div className="flex items-center gap-2"><span className="size-[7px] rounded-full bg-lake" /><span className="text-sm text-muted">{d.choice.legendBest}</span></div>
          </div>
          <p className="mb-0 mt-3 text-[13px] leading-normal text-muted md:text-sm">{T(region.note)}</p>
        </Section>

        <Section id="verdict" title={T({ en: 'Verdict by traveller', fr: 'Verdict par profil', de: 'Empfehlung nach Reisetyp' })}>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {region.verdicts.map((v, i) => {
              const x = getDestination(v.slug)!
              return (
                <div key={i} className="flex flex-col border border-rule p-5 transition-colors hover:border-ink">
                  <Eyebrow>{T(v.profile)}</Eyebrow>
                  <div className="mt-1.5 font-display text-[34px] font-bold uppercase leading-none tracking-[0.01em] text-ink">{T(x.name)}</div>
                  <p className="mb-4 mt-2.5 text-[15px] leading-relaxed text-ink">{T(v.reason)}</p>
                  <div className="mt-auto flex flex-col gap-2">
                    <PlaceButton place={T(x.name)} placement={`${slug}-verdict`} label={fill(d.sell.hotelsIn, { place: T(x.name) })} />
                    {hasGuide(v.slug) && (
                      <Link href={localePath(lang, `/${v.slug}`)} className="py-1 text-center text-[15px] font-medium text-ink no-underline hover:text-lake">{d.sell.readGuide} →</Link>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </Section>

        <CtaBand title={fill(d.sell.ctaBandTitle, { place: regionName })} text={d.sell.ctaBandText}>
          <PlaceButton place={T(dests[1].name)} placement={`${slug}-band`} label={fill(d.sell.hotelsIn, { place: regionName })} />
        </CtaBand>

        <NetworkLinks keyName={slug} locale={lang} title={d.sell.moreForTrip} />
        <div className="pb-24 md:pb-[120px]" />
      </main>
      <Footer locale={lang} />
      <StickyBookingBar place={T(dests[1].name)} placement={slug} title={fill(d.sell.stickyTitle, { place: regionName })} cta={d.sell.stickyCta} lang={lang} watchId="hero" closeLabel={d.sell.close} />
    </>
  )
}
