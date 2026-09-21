import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { hasLocale, languageAlternates, localePath, t, type L } from '@/lib/i18n'
import { fill, getDict } from '@/lib/dict'
import { SITE_URL, SITE_NAME } from '@/lib/site'
import { publishedRegions } from '@/data'
import { Footer, Header } from '@/components/chrome'
import { CtaBand, JsonLd, PhotoHero, Section } from '@/components/blocks'
import { PlaceButton } from '@/components/booking'
import { RegionCard, regionFacts } from '@/components/regions'

const meta = {
  title: { en: 'Where to stay in Switzerland, region by region', fr: 'Où dormir en Suisse, région par région', de: 'Wo übernachten in der Schweiz, Region für Region' } as L,
  description: {
    en: 'The eight regions of Switzerland side by side: which villages and towns to sleep in, how many are car-free, the altitude range, and a comparison page for each region.',
    fr: 'Les huit régions de Suisse côte à côte : dans quels villages et villes dormir, combien sont sans voiture, l’écart d’altitude, et une page comparative pour chaque région.',
    de: 'Die acht Regionen der Schweiz im Vergleich: in welchen Orten man übernachtet, wie viele autofrei sind, die Höhenlage und eine Vergleichsseite pro Region.',
  } as L,
}

export async function generateMetadata({ params }: PageProps<'/[lang]/regions'>): Promise<Metadata> {
  const { lang } = await params
  if (!hasLocale(lang)) return {}
  return {
    title: t(meta.title, lang),
    description: t(meta.description, lang),
    alternates: { canonical: localePath(lang, '/regions'), languages: languageAlternates('/regions') },
    openGraph: { title: t(meta.title, lang), description: t(meta.description, lang), url: localePath(lang, '/regions'), siteName: SITE_NAME, type: 'website', images: ['/photos/lauterbrunnen.jpg'] },
  }
}

export default async function RegionsIndex({ params }: PageProps<'/[lang]/regions'>) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()
  const d = getDict(lang)
  const T = (v: L) => t(v, lang)
  const regions = publishedRegions()
  const rows = regions.map((r) => ({ r, ...regionFacts(r) }))
  const totalGuides = rows.reduce((n, x) => n + x.live.length, 0)
  const colHead = 'p-4 text-left font-display text-[15px] font-semibold uppercase tracking-[0.06em] text-ink'

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'CollectionPage', name: T(meta.title), description: T(meta.description), inLanguage: lang, url: `${SITE_URL}${localePath(lang, '/regions')}` },
      { '@type': 'ItemList', itemListElement: regions.map((r, i) => ({ '@type': 'ListItem', position: i + 1, name: T(r.name), url: `${SITE_URL}${localePath(lang, `/regions/${r.slug}`)}` })) },
      { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: SITE_NAME, item: `${SITE_URL}${localePath(lang)}` }, { '@type': 'ListItem', position: 2, name: T({ en: 'Regions', fr: 'Régions', de: 'Regionen' }), item: `${SITE_URL}${localePath(lang, '/regions')}` }] },
    ],
  }

  return (
    <>
      <Header locale={lang} path="/regions" />
      <main className="flex-1">
        <JsonLd data={jsonLd} />
        <PhotoHero photo="/photos/lauterbrunnen.jpg" alt={T({ en: 'The Lauterbrunnen valley', fr: 'La vallée de Lauterbrunnen', de: 'Das Lauterbrunnental' })}>
          <nav className="mb-5 flex flex-wrap items-center gap-2 text-[13px] text-white/75" aria-label="Breadcrumb">
            <Link href={localePath(lang)} className="text-white/75 no-underline hover:text-white">{SITE_NAME}</Link>
            <span aria-hidden>/</span>
            <span className="text-white">{T({ en: 'Regions', fr: 'Régions', de: 'Regionen' })}</span>
          </nav>
          <div className="text-[13px] font-medium uppercase tracking-[0.08em] text-white/75 md:text-sm">
            {regions.length} {T({ en: 'regions', fr: 'régions', de: 'Regionen' })} · {totalGuides} {T({ en: 'guides', fr: 'guides', de: 'Reiseführer' })}
          </div>
          <h1 className="m-0 mt-2 font-display text-[44px] font-bold uppercase leading-[0.95] tracking-[0.01em] text-white md:text-[72px] lg:text-[88px]">{T(meta.title)}</h1>
          <p className="mb-0 mt-4 text-lg leading-normal text-white md:text-xl">
            {T({
              en: 'Switzerland is small enough to cross in a day by train, but each region makes for a different trip: glaciers and car-free villages, the Italian-speaking lakes, old towns and wine terraces. Pick the region first, then the village inside it.',
              fr: 'La Suisse se traverse en une journée de train, mais chaque région fait un voyage différent : glaciers et villages sans voiture, lacs italophones, vieilles villes et vignes en terrasses. Choisissez d’abord la région, puis le village à l’intérieur.',
              de: 'Die Schweiz lässt sich mit dem Zug an einem Tag durchqueren, doch jede Region ergibt eine andere Reise: Gletscher und autofreie Dörfer, die italienischsprachigen Seen, Altstädte und Rebterrassen. Wählen Sie zuerst die Region, dann den Ort darin.',
            })}
          </p>
        </PhotoHero>

        <Section id="regions" title={T({ en: 'The eight regions', fr: 'Les huit régions', de: 'Die acht Regionen' })}>
          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            {regions.map((r) => (
              <RegionCard key={r.slug} region={r} locale={lang} placement={`regions-${r.slug}`} />
            ))}
          </div>
        </Section>

        <Section id="compare" title={T({ en: 'At a glance', fr: 'En un coup d’œil', de: 'Auf einen Blick' })} gap="mb-4 md:mb-6">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse">
              <thead>
                <tr className="border-b border-ink">
                  <th scope="col" className={colHead}>{T({ en: 'Region', fr: 'Région', de: 'Region' })}</th>
                  <th scope="col" className={colHead}>{T({ en: 'Guides', fr: 'Guides', de: 'Reiseführer' })}</th>
                  <th scope="col" className={colHead}>{T({ en: 'Car-free villages', fr: 'Villages sans voiture', de: 'Autofreie Dörfer' })}</th>
                  <th scope="col" className={colHead}>{T({ en: 'Altitude of the bases', fr: 'Altitude des bases', de: 'Höhe der Standorte' })}</th>
                  <th scope="col" className="p-4" />
                </tr>
              </thead>
              <tbody>
                {rows.map(({ r, live, carFree, minAlt, maxAlt }, i) => (
                  <tr key={r.slug} className={`border-b border-rule align-middle ${i % 2 ? 'bg-mist/60' : ''}`}>
                    <th scope="row" className="p-4 text-left font-display text-2xl font-bold uppercase text-ink">{T(r.name)}</th>
                    <td className="p-4 font-display text-2xl font-bold tabular-nums text-ink">{live.length}</td>
                    <td className="p-4 font-display text-2xl font-bold tabular-nums text-ink">{carFree}</td>
                    <td className="p-4 text-[15px] tabular-nums text-ink">{fill(T({ en: '{a} to {b} m', fr: 'de {a} à {b} m', de: '{a} bis {b} m' }), { a: String(minAlt), b: String(maxAlt) })}</td>
                    <td className="p-4 text-right">
                      <Link href={localePath(lang, `/regions/${r.slug}`)} className="inline-flex items-center justify-center rounded-full bg-lake px-5 py-2.5 text-[14px] font-bold text-white no-underline transition-colors hover:bg-lake-dark">
                        {T({ en: 'Compare the bases', fr: 'Comparer les bases', de: 'Standorte vergleichen' })}
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mb-0 mt-4 text-[13px] text-muted md:text-sm">
            {T({
              en: 'Counts and altitudes come from the destination sheet of this site: the altitude is the village or town itself, not its ski area or summit.',
              fr: 'Nombres et altitudes tirés de la planche des destinations de ce site : l’altitude est celle du village ou de la ville, pas de son domaine skiable ni de son sommet.',
              de: 'Zahlen und Höhen stammen aus dem Reiseziel-Bogen dieser Website: Die Höhe ist die des Ortes selbst, nicht die seines Skigebiets oder Gipfels.',
            })}
          </p>
        </Section>

        <CtaBand title={T({ en: 'Already know the region? See what is still available.', fr: 'Vous savez déjà quelle région ? Voyez ce qui est encore libre.', de: 'Region schon gewählt? Sehen Sie, was noch frei ist.' })} text={d.sell.ctaBandText}>
          <PlaceButton place="" placement="regions-band" label={T({ en: 'Hotels in Switzerland', fr: 'Hôtels en Suisse', de: 'Hotels in der Schweiz' })} variant="white" geo={{ lang }} />
        </CtaBand>
      </main>
      <Footer locale={lang} />
    </>
  )
}
