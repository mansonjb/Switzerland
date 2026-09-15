import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { hasLocale, languageAlternates, localePath, t, type L } from '@/lib/i18n'
import { fill, getDict } from '@/lib/dict'
import { SITE_URL, SITE_NAME } from '@/lib/site'
import { destinations, getDestination, getGuide, getRegion, hasGuide, publishedGuides, regionNames } from '@/data'
import { home } from '@/data/home'
import { AffiliateBar, Footer, Header } from '@/components/chrome'
import { BookingPanel, Container, CtaBand, Faq, JsonLd, PhotoHero, Section, Stats } from '@/components/blocks'
import { HotelButton, LiveMap, PlaceButton, StayFinder, StickyBookingBar } from '@/components/booking'
import { Sheet } from '@/components/sheet'
import { Stamp } from '@/components/stamp'

export async function generateMetadata({ params }: PageProps<'/[lang]'>): Promise<Metadata> {
  const { lang } = await params
  if (!hasLocale(lang)) return {}
  return {
    title: { absolute: t(home.meta.title, lang) },
    description: t(home.meta.description, lang),
    alternates: { canonical: localePath(lang), languages: languageAlternates('/') },
    openGraph: { title: t(home.meta.title, lang), description: t(home.meta.description, lang), url: localePath(lang), siteName: SITE_NAME, type: 'website', images: ['/photos/wengen-hero.jpg'] },
  }
}

function OutlineLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="inline-flex items-center justify-center gap-2 border border-ink px-5 py-3 text-center text-[15px] font-medium text-ink no-underline transition-colors hover:border-swiss hover:bg-swiss hover:text-white">
      {children}
    </Link>
  )
}

export default async function Home({ params }: PageProps<'/[lang]'>) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()
  const d = getDict(lang)
  const T = (v: L) => t(v, lang)
  const carFree = destinations.filter((x) => x.carFree).length
  const liveSlugs = publishedGuides().map((g) => g.slug)
  const wengen = getGuide('wengen')!
  const wengenDest = getDestination('wengen')!
  const wengenName = T(wengenDest.name)
  const places = destinations.map((x) => ({ value: T(x.name), label: `${T(x.name)} · ${T(regionNames[x.region])}` }))
  const colHead = 'px-4 py-3 text-left font-display text-[17px] font-semibold uppercase tracking-[0.06em] text-ink'

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'WebSite', name: SITE_NAME, url: SITE_URL, inLanguage: lang },
      { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
      { '@type': 'FAQPage', mainEntity: home.faq.map((f) => ({ '@type': 'Question', name: T(f.q), acceptedAnswer: { '@type': 'Answer', text: T(f.a) } })) },
    ],
  }

  const popular = [
    { href: localePath(lang, '/wengen'), label: T(wengen.title) },
    { href: localePath(lang, '/regions/bernese-oberland'), label: T({ en: 'Bernese Oberland: which base?', fr: 'Oberland bernois : quelle base ?', de: 'Berner Oberland: welcher Standort?' }) },
    { href: localePath(lang, '/wengen#swiss-travel-pass'), label: T({ en: 'Swiss Travel Pass to Wengen', fr: 'Swiss Travel Pass jusqu’à Wengen', de: 'Swiss Travel Pass bis Wengen' }) },
    { href: localePath(lang, '/wengen#seasons'), label: T({ en: 'Wengen low season', fr: 'Basse saison à Wengen', de: 'Zwischensaison in Wengen' }) },
    { href: localePath(lang, '/wengen#faq'), label: T({ en: 'Wengen or Mürren?', fr: 'Wengen ou Mürren ?', de: 'Wengen oder Mürren?' }) },
    { href: localePath(lang, '/wengen#car-free'), label: T({ en: 'Car-free Wengen in practice', fr: 'Wengen sans voiture, en pratique', de: 'Autofreies Wengen in der Praxis' }) },
  ]

  return (
    <>
      <Header locale={lang} path="/" />
      <AffiliateBar locale={lang} />
      <main className="flex-1">
        <JsonLd data={jsonLd} />

        {/* 1. Hero + search */}
        <PhotoHero photo="/photos/wengen-hero.jpg" alt={T(wengen.hero.caption)} credit={wengen.hero.credit}>
          <div className="text-[13px] font-medium uppercase tracking-[0.08em] text-white/75 md:text-sm">{T({ en: 'Independent guide · 15 destinations', fr: 'Guide indépendant · 15 destinations', de: 'Unabhängiger Reiseführer · 15 Reiseziele' })}</div>
          <h1 className="m-0 mt-3 max-w-[15ch] font-display text-[48px] font-bold uppercase leading-[0.94] tracking-[0.01em] text-white md:text-[80px] lg:text-[104px]">{T(home.title)}</h1>
          <p className="mb-0 mt-4 max-w-[62ch] text-lg leading-normal text-white md:mt-6 md:text-xl">{T(home.intro)}</p>
          <BookingPanel>
            <StayFinder places={places} placement="home-hero" labels={d.booking} lang={lang} />
          </BookingPanel>
        </PhotoHero>

        {/* 2. Quick picks */}
        <div className="border-b border-rule bg-mist">
          <Container className="flex gap-2 overflow-x-auto py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <span className="shrink-0 self-center pr-2 font-display text-sm font-semibold uppercase tracking-[0.08em] text-muted">{d.sell.popular}</span>
            {popular.map((p) => (
              <Link key={p.href} href={p.href} className="shrink-0 border border-rule bg-white px-3 py-1.5 text-sm font-medium text-ink no-underline transition-colors hover:border-ink">
                {p.label}
              </Link>
            ))}
          </Container>
        </div>

        {/* 3. How it works */}
        <Section title={d.sell.howTitle}>
          <ol className="m-0 grid list-none gap-6 p-0 md:grid-cols-3">
            {d.sell.how.map((s, i) => (
              <li key={i} className="border-t-2 border-ink pt-4">
                <div className="font-display text-5xl font-bold leading-none tabular-nums text-swiss">{String(i + 1).padStart(2, '0')}</div>
                <h3 className="mb-0 mt-3 font-display text-2xl font-bold uppercase leading-none text-ink">{s.t}</h3>
                <p className="mb-0 mt-2 text-[15px] leading-relaxed text-ink">{s.d}</p>
              </li>
            ))}
          </ol>
        </Section>

        {/* 4. Featured guide with its hotels */}
        <Section title={d.sell.featured} aside={<Link href={localePath(lang, '/wengen')} className="text-[15px] font-medium text-swiss no-underline hover:text-swiss-dark">{d.sell.readGuide} →</Link>}>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-12">
            <Link href={localePath(lang, '/wengen')} className="group relative block aspect-[4/3] overflow-hidden bg-ink no-underline lg:aspect-auto">
              <Image src={wengen.hero.photo} alt={T(wengen.hero.caption)} fill sizes="(min-width:1024px) 640px, 100vw" className="object-cover opacity-90 transition-transform duration-700 group-hover:scale-[1.03]" />
              <div className="absolute bottom-4 left-4 w-[120px] md:w-[150px]">
                <Stamp name={wengenName} subtitle={T(regionNames[wengenDest.region])} altitude={wengenDest.altitude} art={wengen.stamp} />
              </div>
            </Link>
            <div className="flex min-w-0 flex-col">
              <h3 className="m-0 font-display text-[36px] font-bold uppercase leading-none text-ink md:text-[48px]">{T(wengen.title)}</h3>
              <p className="mb-0 mt-4 text-lg leading-normal text-ink">{T(wengen.quickAnswer)}</p>
              <ul className="m-0 mt-6 flex list-none flex-col p-0">
                {wengen.hotels.map((h) => (
                  <li key={h.name} className="flex items-center gap-3 border-t border-rule py-3 md:gap-4">
                    <div className="hatch relative h-12 w-16 shrink-0 overflow-hidden md:h-14 md:w-20">
                      {h.photo && <Image src={h.photo} alt={h.name} fill sizes="80px" className="object-cover" />}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="truncate font-bold text-ink">{h.name}</div>
                      <div className="truncate text-[13px] text-muted">{T(h.sector)}</div>
                    </div>
                    <div className="w-[108px] shrink-0 md:w-[130px]">
                      <HotelButton hotel={h.name} place={wengenName} label={d.sell.checkPrices} primary={false} />
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-3">
                <PlaceButton place={wengenName} placement="home-featured" label={fill(d.sell.seeAll, { place: wengenName })} />
                <OutlineLink href={localePath(lang, '/wengen')}>{d.sell.readGuide}</OutlineLink>
              </div>
            </div>
          </div>
        </Section>

        {/* 5. Live map */}
        <Section id="map" title={fill(d.sell.liveMap, { place: T({ en: 'the Jungfrau region', fr: 'la région de la Jungfrau', de: 'der Jungfrauregion' }) })} gap="mb-5 md:mb-6">
          <p className="-mt-2 mb-5 max-w-[70ch] text-[15px] leading-relaxed text-muted">{d.sell.liveMapSub}</p>
          <LiveMap lat={46.63} lng={7.93} zoom={11} placement="home-map" lang={lang} title={fill(d.sell.hotelsIn, { place: 'Jungfrau' })} loadLabel={d.mapLoad} height={520} />
          <p className="mb-0 mt-3 text-[13px] text-muted md:text-sm">{d.mapNote}</p>
        </Section>

        {/* 6. The sheet */}
        <Section id="destinations" title={T(home.sheetTitle)} aside={<span className="text-xs text-muted md:text-[15px]">{T(home.sheetNote)}</span>}>
          <Sheet destinations={destinations} liveSlugs={liveSlugs} locale={lang} />
        </Section>

        {/* 7. Regions */}
        <Section title={T(home.regionsTitle)} gap="mb-0 md:mb-8">
          <div className="hidden lg:block">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-ink">
                  <th scope="col" className={`${colHead} w-[240px]`}>{T({ en: 'Region', fr: 'Région', de: 'Region' })}</th>
                  <th scope="col" className={`${colHead} w-[320px]`}>{T({ en: 'Possible bases', fr: 'Bases possibles', de: 'Mögliche Standorte' })}</th>
                  <th scope="col" className={`${colHead} w-[170px]`}>{T({ en: 'From Zurich HB', fr: 'Depuis Zurich HB', de: 'Ab Zürich HB' })}</th>
                  <th scope="col" className={colHead}>{T({ en: 'What you come for', fr: 'Ce que vous venez chercher', de: 'Was Sie erwartet' })}</th>
                  <th scope="col" className="w-[190px]" />
                </tr>
              </thead>
              <tbody>
                {home.regions.map((r, i) => {
                  const page = getRegion(r.slug)
                  return (
                    <tr key={r.slug} className={`border-b border-rule align-middle transition-colors hover:bg-mist ${i % 2 ? 'bg-mist/60' : ''}`}>
                      <th scope="row" className="p-4 text-left font-display text-2xl font-bold uppercase text-ink">
                        {page ? <Link href={localePath(lang, `/regions/${r.slug}`)} className="no-underline hover:text-swiss">{T(r.name)} →</Link> : T(r.name)}
                      </th>
                      <td className="p-4 text-[15px] text-ink">{T(r.bases)}</td>
                      <td className="p-4 font-display text-2xl font-bold tabular-nums text-ink">{r.fromZurich}</td>
                      <td className="p-4 text-[15px] text-ink">{T(r.why)}</td>
                      <td className="py-4 pr-4 text-right">
                        <PlaceButton place={T(r.bases).split(',')[0]} placement={`home-region-${r.slug}`} label={d.sell.checkPrices} variant="outline" />
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
          <div className="lg:hidden">
            {home.regions.map((r, i) => {
              const page = getRegion(r.slug)
              return (
                <div key={r.slug} className={`border-b border-rule py-4 ${i % 2 ? 'bg-mist/60' : ''}`}>
                  <div className="flex items-baseline justify-between gap-3">
                    <div className="font-display text-2xl font-bold uppercase leading-none text-ink">
                      {page ? <Link href={localePath(lang, `/regions/${r.slug}`)} className="no-underline">{T(r.name)} →</Link> : T(r.name)}
                    </div>
                    <div className="font-display text-xl font-bold tabular-nums text-ink">{r.fromZurich}</div>
                  </div>
                  <div className="mt-1.5 text-sm text-muted">{T(r.bases)}</div>
                  <div className="mt-1.5 text-sm leading-normal text-ink">{T(r.why)}</div>
                </div>
              )
            })}
          </div>
          <p className="mb-0 mt-4 text-[13px] text-muted md:text-sm">{T(home.regionsNote)}</p>
        </Section>

        <CtaBand title={T({ en: 'Know where you are going? See what is still available.', fr: 'Vous savez où aller ? Voyez ce qui est encore libre.', de: 'Wissen Sie, wohin? Sehen Sie, was noch frei ist.' })} text={d.sell.ctaBandText}>
          <PlaceButton place="" placement="home-band" label={T({ en: 'Hotels in Switzerland', fr: 'Hôtels en Suisse', de: 'Hotels in der Schweiz' })} variant="white" />
        </CtaBand>

        {/* 8. Car-free and pass */}
        <Container className="grid gap-8 pt-10 md:grid-cols-2 md:gap-16 md:pt-[104px]">
          <div id="car-free" className="scroll-mt-6">
            <h2 className="m-0 font-display text-[28px] font-semibold uppercase leading-[1.05] tracking-[0.01em] text-ink md:text-[40px]">{d.nav.carFree}</h2>
            <div className="mb-4 mt-3.5 h-px bg-rule md:mb-6 md:mt-5" />
            <p className="m-0 text-base leading-relaxed text-ink md:text-[17px]">{T(home.carFreeText)}</p>
            <div className="mt-6">
              <Stats locale={lang} big items={[{ value: String(carFree), label: { en: 'car-free villages on the sheet', fr: 'villages sans voiture sur la planche', de: 'autofreie Orte auf dem Bogen' } }, { value: String(destinations.length), label: { en: 'reachable by public transport', fr: 'accessibles en transports publics', de: 'mit dem ÖV erreichbar' } }]} />
            </div>
            {hasGuide('wengen') && <div className="mt-6"><OutlineLink href={localePath(lang, '/wengen#car-free')}>{T({ en: 'Car-free in practice: Wengen', fr: 'Sans voiture en pratique : Wengen', de: 'Autofrei in der Praxis: Wengen' })} →</OutlineLink></div>}
          </div>
          <div id="swiss-travel-pass" className="scroll-mt-6">
            <h2 className="m-0 font-display text-[28px] font-semibold uppercase leading-[1.05] tracking-[0.01em] text-ink md:text-[40px]">Swiss Travel Pass</h2>
            <div className="mb-4 mt-3.5 h-px bg-rule md:mb-6 md:mt-5" />
            <p className="m-0 text-base leading-relaxed text-ink md:text-[17px]">{T(home.passText)}</p>
            {wengen.pass && (
              <div className="mt-6">
                <Stats
                  locale={lang}
                  big
                  items={[
                    { value: wengen.pass.fare.without, label: { en: 'CHF, Interlaken Ost to Jungfraujoch return, summer 2026', fr: 'CHF, Interlaken Ost ⇄ Jungfraujoch, été 2026', de: 'CHF, Interlaken Ost ⇄ Jungfraujoch, Sommer 2026' } },
                    { value: wengen.pass.fare.with, label: { en: 'CHF, the same ticket with the pass', fr: 'CHF, le même billet avec le pass', de: 'CHF, dasselbe Ticket mit Pass' } },
                  ]}
                />
              </div>
            )}
            <div className="mt-6"><OutlineLink href={localePath(lang, '/wengen#swiss-travel-pass')}>{T({ en: 'See the full calculation', fr: 'Le calcul complet', de: 'Die ganze Rechnung' })} →</OutlineLink></div>
          </div>
        </Container>

        <Section title={T({ en: 'Frequently asked questions', fr: 'Questions fréquentes', de: 'Häufige Fragen' })} gap="mb-0">
          <div className="pb-24 md:pb-[120px]">
            <Faq items={home.faq} locale={lang} />
          </div>
        </Section>
      </main>
      <Footer locale={lang} />
      <StickyBookingBar place="" placement="home" title={T({ en: 'Hotels in Switzerland', fr: 'Hôtels en Suisse', de: 'Hotels in der Schweiz' })} cta={d.sell.stickyCta} lang={lang} watchId="hero" closeLabel={d.sell.close} />
    </>
  )
}
