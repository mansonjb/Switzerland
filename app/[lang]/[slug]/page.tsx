import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { LOCALES, hasLocale, languageAlternates, localePath, t } from '@/lib/i18n'
import { getDict } from '@/lib/dict'
import { SITE_URL, SITE_NAME, stay22MapSrc } from '@/lib/site'
import { getDestination, getGuide, publishedGuides, regionNames, publishedRegions } from '@/data'
import { AffiliateBar, Footer, Header } from '@/components/chrome'
import { Container, Credit, DestinationCard, Eyebrow, Faq, HotelCard, JsonLd, OpeningCalendar, PassTable, QuickAnswer, Section, SquareBullet, Stats } from '@/components/blocks'
import { Stamp } from '@/components/stamp'
import { Stay22Map } from '@/components/stay22-map'

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
  const name = t(dest.name, lang)
  const path = `/${slug}`
  const region = publishedRegions().find((r) => r.key === dest.region)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: t(guide.title, lang),
        description: t(guide.meta.description, lang),
        inLanguage: lang,
        dateModified: guide.updated,
        image: `${SITE_URL}${guide.hero.photo}`,
        mainEntityOfPage: `${SITE_URL}${localePath(lang, path)}`,
        about: { '@type': 'Place', name, geo: { '@type': 'GeoCoordinates', latitude: dest.lat, longitude: dest.lng, elevation: dest.altitude } },
        publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: SITE_NAME, item: `${SITE_URL}${localePath(lang)}` },
          ...(region ? [{ '@type': 'ListItem', position: 2, name: t(region.name, lang), item: `${SITE_URL}${localePath(lang, `/regions/${region.slug}`)}` }] : []),
          { '@type': 'ListItem', position: region ? 3 : 2, name, item: `${SITE_URL}${localePath(lang, path)}` },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: guide.faq.map((f) => ({ '@type': 'Question', name: t(f.q, lang), acceptedAnswer: { '@type': 'Answer', text: t(f.a, lang) } })),
      },
    ],
  }

  return (
    <>
      <Header locale={lang} path={path} />
      <AffiliateBar locale={lang} />
      <main className="flex-1">
        <JsonLd data={jsonLd} />
        <Container className="grid items-start gap-6 pt-6 md:grid-cols-[240px_1fr] md:gap-12 md:pt-16 lg:grid-cols-[320px_1fr] lg:gap-16">
          <div className="w-[200px] md:w-full">
            <Stamp name={name} subtitle={t(guide.eyebrow, lang)} altitude={dest.altitude} art={guide.stamp} />
          </div>
          <div>
            <div className="hidden md:block">
              <Eyebrow>{t(regionNames[dest.region], lang)}</Eyebrow>
            </div>
            <h1 className="m-0 font-display text-[40px] font-bold uppercase leading-[0.98] tracking-[0.01em] text-ink md:mt-2 md:text-[56px] lg:text-[72px] lg:leading-[0.96]">{t(guide.title, lang)}</h1>
            <p className="mb-0 mt-4 max-w-[62ch] text-base leading-relaxed text-ink md:mt-6 md:text-lg">{t(guide.intro, lang)}</p>
            <div className="mt-5 md:mt-10">
              <QuickAnswer locale={lang}>{t(guide.quickAnswer, lang)}</QuickAnswer>
            </div>
            <div className="mt-5 md:mt-6">
              <Stats items={guide.stats} locale={lang} />
            </div>
          </div>
        </Container>

        <Container className="pt-10 md:pt-16">
          <div className="hatch relative aspect-[3/2] overflow-hidden md:aspect-[21/9]">
            <Image src={guide.hero.photo} alt={t(guide.hero.caption, lang)} fill priority sizes="(min-width:1280px) 1216px, 100vw" className="object-cover" />
          </div>
          <Credit caption={t(guide.hero.caption, lang)} credit={guide.hero.credit} />
        </Container>

        <Section title={t({ en: 'Where to stay, area by area', fr: 'Où dormir, secteur par secteur', de: 'Wo übernachten, Ortsteil für Ortsteil' }, lang)}>
          <div className="grid gap-6 md:grid-cols-3">
            {guide.sectors.map((s, i) => (
              <div key={i} className="border-t-2 border-ink pt-3.5 md:pt-5">
                <h3 className="m-0 font-display text-[22px] font-bold uppercase tracking-[0.01em] text-ink md:text-[26px]">{t(s.title, lang)}</h3>
                <div className="mt-0.5 text-[13px] text-muted md:mt-1 md:text-sm">{t(s.walk, lang)}</div>
                <p className="mb-0 mt-2.5 text-base leading-relaxed text-ink md:mt-4">{t(s.text, lang)}</p>
                <ul className="m-0 mt-4 flex list-none flex-col gap-2 p-0">
                  {s.points.map((p, k) => (
                    <SquareBullet key={k} red>{t(p, lang)}</SquareBullet>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section title={t({ en: `${guide.hotels.length} addresses, checked`, fr: `${guide.hotels.length} adresses, vérifiées`, de: `${guide.hotels.length} Adressen, geprüft` }, lang)}>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {guide.hotels.map((h) => (
              <HotelCard key={h.name} hotel={h} place={name} locale={lang} />
            ))}
          </div>
          <p className="mb-0 mt-6 text-[13px] leading-normal text-muted md:text-sm">{t(guide.hotelsNote, lang)}</p>
        </Section>

        {guide.pass && (
          <Section id="swiss-travel-pass" title={t(guide.pass.title, lang)} gap="mb-5 md:mb-8">
            <PassTable pass={guide.pass} locale={lang} />
          </Section>
        )}

        {guide.calendar && (
          <Section title={t(guide.calendar.title, lang)} gap="mb-5 md:mb-8">
            <OpeningCalendar calendar={guide.calendar} locale={lang} />
          </Section>
        )}

        {guide.practical && (
          <Section id="car-free" title={t(guide.practical.title, lang)}>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {guide.practical.items.map((p, i) => (
                <div key={i} className="border-t-2 border-ink pt-4">
                  <div className="font-display text-4xl font-bold leading-none tabular-nums text-swiss">{i + 1}</div>
                  <h3 className="mb-0 mt-2.5 text-[17px] font-bold text-ink">{t(p.title, lang)}</h3>
                  <p className="mb-0 mt-2 text-[15px] leading-relaxed text-ink">{t(p.text, lang)}</p>
                </div>
              ))}
            </div>
          </Section>
        )}

        <Section title={t({ en: 'Places to stay on the map', fr: 'Les hébergements sur la carte', de: 'Unterkünfte auf der Karte' }, lang)} gap="mb-6">
          <Stay22Map src={stay22MapSrc(dest.lat, dest.lng, slug, lang)} title={t({ en: `Hotels in ${name}`, fr: `Hôtels à ${name}`, de: `Hotels in ${name}` }, lang)} loadLabel={d.mapLoad} />
          <p className="mb-0 mt-3 text-[13px] text-muted md:text-sm">{d.mapNote}</p>
        </Section>

        <Section title={t({ en: 'Frequently asked questions', fr: 'Questions fréquentes', de: 'Häufige Fragen' }, lang)} gap="mb-0">
          <Faq items={guide.faq} locale={lang} />
        </Section>

        <Section title={t({ en: 'Nearby destinations', fr: 'Destinations voisines', de: 'Nahe Reiseziele' }, lang)}>
          <div className="grid grid-cols-2 gap-5 pb-10 md:gap-8 md:pb-[104px] lg:grid-cols-4">
            {guide.neighbours.map((s) => {
              const n = getDestination(s)
              return n ? <DestinationCard key={s} dest={n} locale={lang} /> : null
            })}
          </div>
        </Section>
      </main>
      <Footer locale={lang} />
    </>
  )
}
