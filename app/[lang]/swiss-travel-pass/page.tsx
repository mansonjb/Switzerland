import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { hasLocale, languageAlternates, localePath, t, type L } from '@/lib/i18n'
import { getDict } from '@/lib/dict'
import { SITE_URL, SITE_NAME } from '@/lib/site'
import { getDestination, hasGuide, publishedGuides } from '@/data'
import { Footer, Header } from '@/components/chrome'
import { CtaBand, Faq, JsonLd, PhotoHero, QuickAnswer, Section } from '@/components/blocks'
import { PlaceButton } from '@/components/booking'
import { stp } from './copy'

const PATH = '/swiss-travel-pass'
const SBB = 'https://www.sbb.ch/en/offers/swiss-travel-pass'

export async function generateMetadata({ params }: PageProps<'/[lang]/swiss-travel-pass'>): Promise<Metadata> {
  const { lang } = await params
  if (!hasLocale(lang)) return {}
  return {
    title: t(stp.meta.title, lang),
    description: t(stp.meta.description, lang),
    alternates: { canonical: localePath(lang, PATH), languages: languageAlternates(PATH) },
    openGraph: { title: t(stp.meta.title, lang), description: t(stp.meta.description, lang), url: localePath(lang, PATH), siteName: SITE_NAME, type: 'article', images: ['/photos/rigi-kaltbad.jpg'] },
  }
}

export default async function SwissTravelPassPage({ params }: PageProps<'/[lang]/swiss-travel-pass'>) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()
  const d = getDict(lang)
  const T = (v: L) => t(v, lang)
  const hero = getDestination('rigi-kaltbad')

  // Fares already checked for the guides, one row per distinct fare (the Jungfraujoch fare sits in three guides).
  const seen = new Set<string>()
  const examples = publishedGuides()
    .filter((g) => g.pass)
    .flatMap((g) => {
      const key = g.pass!.fare.label.en
      if (seen.has(key)) return []
      seen.add(key)
      return [{ slug: g.slug, name: T(getDestination(g.slug)!.name), label: T(g.pass!.fare.label), without: g.pass!.fare.without, with: g.pass!.fare.with }]
    })
  const freeMountains = ['rigi-kaltbad', 'stoos'].filter(hasGuide)

  const th = 'p-3 text-left font-display text-[13px] font-semibold uppercase tracking-[0.06em] text-ink md:p-4 md:text-[15px]'
  const PriceTable = ({ title, rows }: { title: L; rows: string[][] }) => (
    <div className="rounded-2xl border border-rule bg-white p-4 md:p-6">
      <h3 className="m-0 mb-3 font-display text-xl font-bold uppercase text-ink md:text-2xl">{T(title)}</h3>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[420px] border-collapse tabular-nums">
          <thead>
            <tr className="border-b border-ink">
              <th scope="col" className={th}>{T(stp.prices.days)}</th>
              <th scope="col" className={`${th} text-right`}>{T(stp.prices.adult2)}</th>
              <th scope="col" className={`${th} text-right`}>{T(stp.prices.adult1)}</th>
              <th scope="col" className={`${th} text-right`}>{T(stp.prices.youth2)}</th>
              <th scope="col" className={`${th} text-right`}>{T(stp.prices.youth1)}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={r[0]} className={`border-b border-rule ${i % 2 ? 'bg-sand' : ''}`}>
                <th scope="row" className="p-3 text-left font-display text-xl font-bold text-ink md:p-4 md:text-2xl">{r[0]}</th>
                {r.slice(1).map((v, k) => (
                  <td key={k} className={`p-3 text-right font-display text-xl font-bold md:p-4 md:text-2xl ${k === 0 ? 'text-lake' : 'text-ink'}`}>{v}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'Article', headline: T(stp.meta.title), description: T(stp.meta.description), inLanguage: lang, dateModified: '2026-09-21', mainEntityOfPage: `${SITE_URL}${localePath(lang, PATH)}`, publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL } },
      { '@type': 'FAQPage', mainEntity: stp.faq.map((f) => ({ '@type': 'Question', name: T(f.q), acceptedAnswer: { '@type': 'Answer', text: T(f.a) } })) },
      { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: SITE_NAME, item: `${SITE_URL}${localePath(lang)}` }, { '@type': 'ListItem', position: 2, name: 'Swiss Travel Pass', item: `${SITE_URL}${localePath(lang, PATH)}` }] },
    ],
  }

  const solid = 'inline-flex items-center justify-center gap-2 rounded-full bg-lake px-6 py-3 text-[15px] font-bold text-white no-underline shadow-[0_6px_16px_rgba(14,95,110,0.22)] transition-colors hover:bg-lake-dark'
  const outline = 'inline-flex items-center justify-center whitespace-nowrap rounded-full border border-rule bg-white px-5 py-2.5 text-[14px] font-bold text-ink no-underline transition-colors hover:border-lake hover:bg-lake hover:text-white'

  return (
    <>
      <Header locale={lang} path={PATH} />
      <main className="flex-1">
        <JsonLd data={jsonLd} />
        <PhotoHero photo={hero?.photo ?? '/photos/rigi-kaltbad.jpg'} alt="Rigi" credit={hero?.credit}>
          <nav className="mb-5 flex flex-wrap items-center gap-2 text-[13px] text-white/75" aria-label="Breadcrumb">
            <Link href={localePath(lang)} className="text-white/75 no-underline hover:text-white">{SITE_NAME}</Link>
            <span aria-hidden>/</span>
            <span className="text-white">Swiss Travel Pass</span>
          </nav>
          <div className="text-[13px] font-medium uppercase tracking-[0.08em] text-white/75 md:text-sm">{T({ en: 'Practical guide · 2026 fares', fr: 'Guide pratique · tarifs 2026', de: 'Praktischer Ratgeber · Tarife 2026' })}</div>
          <h1 className="m-0 mt-2 font-display text-[40px] font-bold uppercase leading-[0.95] tracking-[0.01em] text-white md:text-[64px] lg:text-[80px]">{T(stp.h1)}</h1>
          <p className="mb-0 mt-4 text-lg leading-normal text-white md:text-xl">{T(stp.lede)}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#prices" className={solid}>{T({ en: 'See the 2026 prices', fr: 'Voir les prix 2026', de: 'Preise 2026 ansehen' })}</a>
            <a href={SBB} target="_blank" rel="noopener" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-[15px] font-bold text-ink no-underline transition-colors hover:bg-lake hover:text-white">{T(stp.buy.cta)}</a>
          </div>
        </PhotoHero>

        <Section id="verdict" title={T({ en: 'Is it worth it?', fr: 'Est-il rentable ?', de: 'Lohnt er sich?' })} gap="mb-6">
          <QuickAnswer locale={lang}>{T(stp.quick)}</QuickAnswer>
        </Section>

        <Section id="covers" title={T(stp.covers.title)}>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stp.covers.items.map((x, i) => (
              <div key={i} className="rounded-2xl border border-rule bg-sand p-5 md:p-6">
                <div className="font-display text-[44px] font-bold leading-none text-lake md:text-[56px]">{x.v}</div>
                <div className="mt-2 font-display text-lg font-bold uppercase text-ink md:text-xl">{T(x.t)}</div>
                <p className="mb-0 mt-2 text-[15px] leading-relaxed text-ink">{T(x.d)}</p>
              </div>
            ))}
          </div>
          {freeMountains.length > 0 && (
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="text-[15px] text-ink">{T({ en: 'Sleep on a free mountain:', fr: 'Dormir sur une montagne incluse :', de: 'Auf einem inbegriffenen Berg schlafen:' })}</span>
              {freeMountains.map((s) => (
                <Link key={s} href={localePath(lang, `/${s}`)} className={outline}>{T(getDestination(s)!.name)}</Link>
              ))}
            </div>
          )}
          <p className="mb-0 mt-6 rounded-2xl border border-caution/40 bg-caution/10 p-4 text-[15px] leading-relaxed text-ink md:p-5">{T(stp.covers.watch)}</p>
        </Section>

        <Section id="prices" title={T(stp.prices.title)}>
          <div className="grid gap-6 xl:grid-cols-2">
            <PriceTable title={stp.prices.consecutive} rows={stp.consecutive} />
            <PriceTable title={stp.prices.flex} rows={stp.flex} />
          </div>
          <p className="mb-0 mt-4 text-[13px] leading-normal text-muted md:text-sm">{T(stp.prices.note)}</p>
        </Section>

        <Section id="half-fare" title={T(stp.half.title)}>
          {stp.half.paras.map((p, i) => (
            <p key={i} className="mb-4 mt-0 text-base leading-relaxed text-ink md:text-[17px]">{T(p)}</p>
          ))}
        </Section>

        <Section id="examples" title={T(stp.examples.title)}>
          <p className="mb-5 mt-0 text-base leading-relaxed text-ink md:text-[17px]">{T(stp.examples.intro)}</p>
          <div className="overflow-x-auto rounded-2xl border border-rule bg-white">
            <table className="w-full min-w-[640px] border-collapse tabular-nums">
              <thead>
                <tr className="border-b border-ink">
                  <th scope="col" className={th}>{T({ en: 'Fare', fr: 'Tarif', de: 'Tarif' })}</th>
                  <th scope="col" className={`${th} text-right`}>{T(stp.examples.without)}</th>
                  <th scope="col" className={`${th} text-right`}>{T(stp.examples.with)}</th>
                  <th scope="col" className="p-3 md:p-4" />
                </tr>
              </thead>
              <tbody>
                {examples.map((x, i) => (
                  <tr key={x.slug} className={`border-b border-rule align-middle ${i % 2 ? 'bg-sand' : ''}`}>
                    <th scope="row" className="p-3 text-left text-[15px] font-medium text-ink md:p-4">
                      <span className="block font-display text-lg font-bold uppercase">{x.name}</span>
                      {x.label}
                    </th>
                    <td className="p-3 text-right font-display text-xl font-bold text-ink md:p-4 md:text-2xl">{x.without}</td>
                    <td className="p-3 text-right font-display text-xl font-bold text-open md:p-4 md:text-2xl">{x.with}</td>
                    <td className="p-3 text-right md:p-4">
                      <Link href={localePath(lang, `/${x.slug}#swiss-travel-pass`)} className={outline}>{T(stp.examples.guide)}</Link>
                    </td>
                  </tr>
                ))}
                <tr className={`border-b border-rule align-middle ${examples.length % 2 ? 'bg-sand' : ''}`}>
                  <th scope="row" className="p-3 text-left text-[15px] font-medium text-ink md:p-4">
                    <span className="block font-display text-lg font-bold uppercase">Pilatus</span>
                    {T(stp.examples.pilatus)}
                  </th>
                  <td className="p-3 text-right font-display text-xl font-bold text-ink md:p-4 md:text-2xl">84.00</td>
                  <td className="p-3 text-right font-display text-xl font-bold text-open md:p-4 md:text-2xl">42.00</td>
                  <td className="p-3 md:p-4" />
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mb-0 mt-4 text-[13px] leading-normal text-muted md:text-sm">
            {T({ en: 'CHF, adult. Fares as published by each operator, checked in September 2026.', fr: 'CHF, adulte. Tarifs publiés par chaque exploitant, vérifiés en septembre 2026.', de: 'CHF, Erwachsene. Tarife gemäss den Betreibern, geprüft im September 2026.' })}
          </p>
        </Section>

        <Section id="buy" title={T(stp.buy.title)}>
          <div className="grid gap-4 md:grid-cols-3">
            {stp.buy.items.map((x, i) => (
              <div key={i} className="rounded-2xl border border-rule bg-white p-5 md:p-6">
                <div className="font-display text-xl font-bold uppercase text-ink">{T(x.t)}</div>
                <p className="mb-0 mt-2 text-[15px] leading-relaxed text-ink">{T(x.d)}</p>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <a href={SBB} target="_blank" rel="noopener" className={solid}>{T(stp.buy.cta)}</a>
          </div>
        </Section>

        <Section id="faq" title={T({ en: 'Frequently asked questions', fr: 'Questions fréquentes', de: 'Häufige Fragen' })} gap="mb-0">
          <Faq items={stp.faq} locale={lang} />
        </Section>

        <CtaBand title={T({ en: 'Pass sorted? Now pick where to sleep.', fr: 'Le pass est réglé ? Choisissez où dormir.', de: 'Pass geklärt? Jetzt die Unterkunft wählen.' })} text={d.sell.ctaBandText}>
          <div className="flex flex-wrap gap-3">
            <Link href={localePath(lang, '/regions')} className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-[15px] font-bold text-ink no-underline transition-colors hover:bg-lake hover:text-white">
              {T({ en: 'Choose a region', fr: 'Choisir une région', de: 'Region wählen' })}
            </Link>
            <PlaceButton place="" placement="stp-band" label={T({ en: 'Hotels in Switzerland', fr: 'Hôtels en Suisse', de: 'Hotels in der Schweiz' })} geo={{ lang }} />
          </div>
        </CtaBand>
      </main>
      <Footer locale={lang} />
    </>
  )
}
