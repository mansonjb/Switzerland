import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { LOCALES, hasLocale, languageAlternates, localePath, t, type L } from '@/lib/i18n'
import { fill, getDict } from '@/lib/dict'
import { SITE_URL, SITE_NAME } from '@/lib/site'
import { getDestination, getGuide, hasGuide, publishedGuides, publishedRegions, regionNames } from '@/data'
import { Footer, Header } from '@/components/chrome'
import { BookingPanel, Container, CtaBand, Faq, JsonLd, NetworkLinks, OpeningCalendar, PassTable, PhotoHero, Section, SquareBullet, ThingsToDo } from '@/components/blocks'
import { LiveMap, PlaceButton, SeasonPanel, SeasonTabs, StayFinder, StickyBookingBar } from '@/components/booking'
import { SectionNav } from '@/components/section-nav'
import { HotelsBrowser, type HotelView } from '@/components/hotels'
import { getHotelPrice, getPriceFile } from '@/data/prices'
import { DestinationCard } from '@/components/sheet'
import { Stamp } from '@/components/stamp'

export const dynamicParams = false

export function generateStaticParams() {
  return LOCALES.flatMap((lang) => publishedGuides().map((g) => ({ lang, slug: g.slug })))
}

export async function generateMetadata({ params }: PageProps<'/[lang]/[slug]'>): Promise<Metadata> {
  const { lang, slug } = await params
  const guide = getGuide(slug)
  if (!hasLocale(lang) || !guide) return {}
  const path = `/${slug}`
  return {
    title: t(guide.meta.title, lang),
    description: t(guide.meta.description, lang),
    alternates: { canonical: localePath(lang, path), languages: languageAlternates(path) },
    openGraph: { title: t(guide.meta.title, lang), description: t(guide.meta.description, lang), url: localePath(lang, path), siteName: SITE_NAME, images: [guide.hero.photo], type: 'article' },
  }
}

export default async function DestinationPage({ params }: PageProps<'/[lang]/[slug]'>) {
  const { lang, slug } = await params
  const guide = getGuide(slug)
  const dest = getDestination(slug)
  if (!hasLocale(lang) || !guide || !dest) notFound()
  const d = getDict(lang)
  const T = (v: L) => t(v, lang)
  const name = T(dest.name)
  const path = `/${slug}`
  const region = publishedRegions().find((r) => r.key === dest.region)
  const nav = d.sell.onThisPage
  const navItems = [
    { id: 'map', label: nav.map },
    { id: 'overview', label: nav.overview },
    ...(guide.seasons ? [{ id: 'summer-winter', label: `${d.sell.seasons.summer} / ${d.sell.seasons.winter}` }] : []),
    { id: 'hotels', label: nav.hotels },
    { id: 'areas', label: nav.areas },
    ...(guide.doing ? [{ id: 'things-to-do', label: nav.doing }] : []),
    ...(guide.pass ? [{ id: 'swiss-travel-pass', label: nav.pass }] : []),
    ...(guide.calendar ? [{ id: 'seasons', label: nav.seasons }] : []),
    ...(guide.practical ? [{ id: 'car-free', label: nav.carFree }] : []),
    { id: 'faq', label: nav.faq },
  ]

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: T(guide.title),
        description: T(guide.meta.description),
        inLanguage: lang,
        dateModified: guide.updated,
        image: `${SITE_URL}${guide.hero.photo}`,
        mainEntityOfPage: `${SITE_URL}${localePath(lang, path)}`,
        about: { '@type': 'Place', name, geo: { '@type': 'GeoCoordinates', latitude: dest.lat, longitude: dest.lng, elevation: dest.altitude } },
        publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
      },
      {
        '@type': 'ItemList',
        name: fill(d.sell.hotelsIn, { place: name }),
        itemListElement: guide.hotels.map((h, i) => ({ '@type': 'ListItem', position: i + 1, item: { '@type': 'Hotel', name: h.name, url: h.url, address: { '@type': 'PostalAddress', addressLocality: name, addressCountry: 'CH' } } })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: SITE_NAME, item: `${SITE_URL}${localePath(lang)}` },
          ...(region ? [{ '@type': 'ListItem', position: 2, name: T(region.name), item: `${SITE_URL}${localePath(lang, `/regions/${region.slug}`)}` }] : []),
          { '@type': 'ListItem', position: region ? 3 : 2, name, item: `${SITE_URL}${localePath(lang, path)}` },
        ],
      },
      { '@type': 'FAQPage', mainEntity: guide.faq.map((f) => ({ '@type': 'Question', name: T(f.q), acceptedAnswer: { '@type': 'Answer', text: T(f.a) } })) },
    ],
  }

  const priceFile = getPriceFile(slug)
  const tierOrder = { budget: 0, mid: 1, premium: 2 }
  const hotelViews: HotelView[] = guide.hotels
    .map((h) => {
      const p = getHotelPrice(slug, h.slug)
      return {
        name: h.name,
        photo: h.photo,
        tier: p?.tier ?? 'mid',
        stars: p?.stars ?? null,
        sector: T(h.sector),
        facts: h.facts.map(T),
        price: { all: p?.all ?? null, summer: p?.summer ?? null, winter: p?.winter ?? null },
      }
    })
    .sort((a, b) => tierOrder[a.tier] - tierOrder[b.tier])

  const snapshot = [
    { label: { en: `Why ${name}`, fr: `Pourquoi ${name}`, de: `Warum ${name}` }, text: guide.snapshot.why, tone: 'bg-sand' },
    { label: { en: 'Where to sleep', fr: 'Où dormir', de: 'Wo schlafen' }, text: guide.snapshot.where, tone: 'bg-lake-soft' },
    { label: { en: 'Watch out', fr: 'Attention', de: 'Gut zu wissen' }, text: guide.snapshot.watch, tone: 'bg-sand' },
  ]

  return (
    <>
      <Header locale={lang} path={path} />
      <main className="flex-1">
        <JsonLd data={jsonLd} />

        {/* 1. Hero: photo, verdict, booking bar */}
        <PhotoHero photo={guide.hero.photo} alt={T(guide.hero.caption)} credit={guide.hero.credit}>
          <nav className="mb-5 flex flex-wrap items-center gap-2 text-[13px] text-white/75" aria-label="Breadcrumb">
            <Link href={localePath(lang)} className="text-white/75 no-underline hover:text-white">{SITE_NAME}</Link>
            <span aria-hidden>/</span>
            {region ? (
              <Link href={localePath(lang, `/regions/${region.slug}`)} className="text-white/75 no-underline hover:text-white">{T(region.name)}</Link>
            ) : (
              <span>{T(regionNames[dest.region])}</span>
            )}
            <span aria-hidden>/</span>
            <span className="text-white">{name}</span>
          </nav>
          <div className="grid items-end gap-6 md:grid-cols-[1fr_200px] lg:grid-cols-[1fr_240px] lg:gap-16">
            <div>
              <h1 className="m-0 font-display text-[44px] font-bold uppercase leading-[0.95] tracking-[0.01em] text-white md:text-[64px] lg:text-[80px]">{T(guide.title)}</h1>
              <p className="mb-0 mt-4 text-lg leading-normal text-white md:mt-5 md:text-xl">{T(guide.quickAnswer)}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {guide.stats.map((s, i) => (
                  <span key={i} className="inline-flex items-baseline gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-sm text-white backdrop-blur-sm">
                    <span className="font-display text-xl font-bold leading-none tabular-nums">{s.value}</span>
                    {T(s.label)}
                  </span>
                ))}
              </div>
            </div>
            <div className="hidden md:block">
              <Stamp name={name} subtitle={T(regionNames[dest.region])} altitude={dest.altitude} art={guide.stamp} />
            </div>
          </div>
          <BookingPanel>
            <StayFinder places={[{ value: name, label: name, href: '#hotels' }]} labels={d.booking} lang={lang} />
          </BookingPanel>
        </PhotoHero>

        <SectionNav items={navItems} />

        {/* 2. Live map, right after the hero: the highest converting block */}
        <section id="map" className="scroll-mt-14 pt-10 md:pt-16">
          <Container>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2 className="m-0 font-display text-[28px] font-semibold uppercase leading-[1.05] tracking-[0.01em] text-ink md:text-[40px]">{fill(d.sell.liveMap, { place: name })}</h2>
                <p className="mb-0 mt-2 text-[15px] leading-relaxed text-muted">{d.sell.liveMapSub}</p>
              </div>
              <PlaceButton place={name} placement={`${slug}-map`} label={fill(d.sell.seeAll, { place: name })} variant="outline" />
            </div>
            <div className="mt-5 md:mt-6">
              <LiveMap lat={dest.lat} lng={dest.lng} placement={`${slug}-map`} lang={lang} title={fill(d.sell.hotelsIn, { place: name })} loadLabel={d.mapLoad} />
            </div>
            <p className="mb-0 mt-3 text-[13px] text-muted md:text-sm">{d.mapNote}</p>
          </Container>
        </section>

        {/* 3. Snapshot */}
        <Section id="overview" title={T({ en: `${name} at a glance`, fr: `${name} en bref`, de: `${name} im Überblick` })}>
          <div className="grid gap-4 md:grid-cols-3 md:gap-6">
            {snapshot.map((c, i) => (
              <div key={i} className={`${c.tone} rounded-2xl border ${i === 2 ? 'border-caution/40' : 'border-rule'} p-5 md:p-6`}>
                <div className="font-display text-sm font-semibold uppercase tracking-[0.08em] text-muted">{T(c.label)}</div>
                <p className="mb-0 mt-2 text-base leading-relaxed text-ink">{T(c.text)}</p>
              </div>
            ))}
          </div>
          <p className="mb-0 mt-6 text-base leading-relaxed text-ink md:text-lg">{T(guide.intro)}</p>
        </Section>

        {/* 3b. Summer / winter */}
        {guide.seasons && (
          <Section id="summer-winter" title={d.sell.seasons.title} aside={<SeasonTabs labels={{ summer: d.sell.seasons.summer, winter: d.sell.seasons.winter }} />} gap="mb-0">
            <p className="mb-0 mt-4 text-[15px] text-muted">{d.sell.seasons.sub}</p>
            <SeasonPanel
              baseLabel={d.sell.seasons.base}
              content={{
                summer: { title: T(guide.seasons.summer.title), base: T(guide.seasons.summer.base), note: T(guide.seasons.summer.note), facts: guide.seasons.summer.facts.map((f) => ({ value: f.value, label: T(f.label) })) },
                winter: { title: T(guide.seasons.winter.title), base: T(guide.seasons.winter.base), note: T(guide.seasons.winter.note), facts: guide.seasons.winter.facts.map((f) => ({ value: f.value, label: T(f.label) })) },
              }}
            />
          </Section>
        )}

        {/* 4. Hotels: tiers, dated prices following the season */}
        <Section id="hotels" title={fill(d.sell.hotels.title, { count: String(hotelViews.length), place: name })}>
          <HotelsBrowser hotels={hotelViews} place={name} labels={d.sell.hotels} />
          <div className="mt-6 flex flex-col items-start justify-between gap-4 border-t border-rule pt-5 md:flex-row md:items-center">
            <p className="m-0 text-[13px] leading-normal text-muted md:text-sm">
              {priceFile ? fill(d.sell.hotels.note, { winter: String(priceFile.winterDates.length), summer: String(priceFile.summerDates.length), date: new Intl.DateTimeFormat(lang, { dateStyle: 'long' }).format(new Date(`${priceFile.scrapedOn}T12:00`)) }) : T(guide.hotelsNote)} {d.affiliateShort}
            </p>
            <PlaceButton place={name} placement={`${slug}-hotels`} label={fill(d.sell.seeAll, { place: name })} />
          </div>
        </Section>

        {/* 5. Areas */}
        <Section id="areas" title={T({ en: 'Where to stay, area by area', fr: 'Où dormir, secteur par secteur', de: 'Wo übernachten, Ortsteil für Ortsteil' })}>
          <div className="grid gap-6 md:grid-cols-3">
            {guide.sectors.map((s, i) => (
              <div key={i} className="flex flex-col rounded-2xl border border-rule bg-white p-5 md:p-6">
                <div className="flex size-9 items-center justify-center rounded-full bg-lake-soft font-display text-lg font-bold tabular-nums text-lake-dark">{String(i + 1).padStart(2, '0')}</div>
                <h3 className="mb-0 mt-2 font-display text-[22px] font-bold uppercase tracking-[0.01em] text-ink md:text-[26px]">{T(s.title)}</h3>
                <div className="mt-0.5 text-[13px] text-muted md:mt-1 md:text-sm">{T(s.walk)}</div>
                <p className="mb-0 mt-2.5 text-base leading-relaxed text-ink md:mt-4">{T(s.text)}</p>
                <ul className="m-0 mt-4 flex list-none flex-col gap-2 p-0">
                  {s.points.map((p, k) => (
                    <SquareBullet key={k} red>{T(p)}</SquareBullet>
                  ))}
                </ul>
                <a href="#map" className="mt-4 inline-flex w-fit items-center gap-2 border-b border-ink pb-0.5 text-[15px] font-medium text-ink no-underline hover:border-lake hover:text-lake">
                  {T({ en: 'See the hotels on the map', fr: 'Voir les hôtels sur la carte', de: 'Hotels auf der Karte' })} <span aria-hidden>↑</span>
                </a>
              </div>
            ))}
          </div>
        </Section>

        {/* 5b. What to do: named walks, rides, local things, tables */}
        {guide.doing && (
          <Section id="things-to-do" title={T(guide.doing.title)}>
            <ThingsToDo doing={guide.doing} locale={lang} />
          </Section>
        )}

        {guide.pass && (
          <Section id="swiss-travel-pass" title={T(guide.pass.title)} gap="mb-5 md:mb-8">
            <PassTable pass={guide.pass} locale={lang} />
          </Section>
        )}

        <CtaBand title={fill(d.sell.ctaBandTitle, { place: name })} text={d.sell.ctaBandText}>
          <PlaceButton place={name} placement={`${slug}-band`} label={fill(d.sell.seeAll, { place: name })} />
        </CtaBand>

        {guide.calendar && (
          <Section id="seasons" title={T(guide.calendar.title)} gap="mb-5 md:mb-8">
            <OpeningCalendar calendar={guide.calendar} locale={lang} />
          </Section>
        )}

        {guide.practical && (
          <Section id="car-free" title={T(guide.practical.title)}>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {guide.practical.items.map((p, i) => (
                <div key={i} className="rounded-2xl border border-rule bg-sand p-5">
                  <div className="flex size-9 items-center justify-center rounded-full bg-white font-display text-lg font-bold tabular-nums text-lake-dark">{i + 1}</div>
                  <h3 className="mb-0 mt-2.5 text-[17px] font-bold text-ink">{T(p.title)}</h3>
                  <p className="mb-0 mt-2 text-[15px] leading-relaxed text-ink">{T(p.text)}</p>
                </div>
              ))}
            </div>
          </Section>
        )}

        <Section id="faq" title={T({ en: 'Frequently asked questions', fr: 'Questions fréquentes', de: 'Häufige Fragen' })} gap="mb-0">
          <Faq items={guide.faq} locale={lang} />
        </Section>

        <NetworkLinks keyName={slug} locale={lang} title={d.sell.moreForTrip} />

        <Section title={T({ en: 'Nearby destinations', fr: 'Destinations voisines', de: 'Nahe Reiseziele' })} aside={region ? <Link href={localePath(lang, `/regions/${region.slug}`)} className="text-[15px] font-medium text-lake no-underline hover:text-lake-dark">{T({ en: `Compare the ${T(region.name)} bases`, fr: `Comparer les bases de l’${T(region.name)}`, de: `Standorte im ${T(region.name)} vergleichen` })} →</Link> : undefined}>
          <div className="grid grid-cols-2 gap-5 pb-24 md:gap-8 md:pb-[120px] lg:grid-cols-4">
            {guide.neighbours.map((s) => {
              const n = getDestination(s)
              return n ? <DestinationCard key={s} dest={n} locale={lang} live={hasGuide(s)} /> : null
            })}
          </div>
        </Section>
      </main>
      <Footer locale={lang} />
      <StickyBookingBar place={name} placement={slug} title={fill(d.sell.stickyTitle, { place: name })} cta={d.sell.stickyCta} lang={lang} watchId="hero" closeLabel={d.sell.close} />
    </>
  )
}
