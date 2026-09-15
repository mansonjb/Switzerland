import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { hasLocale, languageAlternates, localePath, t, type L } from '@/lib/i18n'
import { getDict } from '@/lib/dict'
import { SITE_URL, SITE_NAME } from '@/lib/site'
import { destinations, getGuide, getRegion, hasGuide } from '@/data'
import { home } from '@/data/home'
import { Footer, Header } from '@/components/chrome'
import { Container, DestinationCard, Faq, JsonLd, Section, Stats } from '@/components/blocks'

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

function OutlineButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="mt-4 block border border-ink px-5 py-3 text-center text-[15px] font-medium text-ink no-underline transition-colors hover:border-swiss hover:bg-swiss hover:text-white md:mt-6 md:inline-block">
      {children}
    </Link>
  )
}

export default async function Home({ params }: PageProps<'/[lang]'>) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()
  const d = getDict(lang)
  const carFree = destinations.filter((x) => x.carFree).length
  const wengen = getGuide('wengen')
  const colHead = 'px-4 py-3 text-left font-display text-[17px] font-semibold uppercase tracking-[0.06em] text-ink'
  const T = (v: L) => t(v, lang)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'WebSite', name: SITE_NAME, url: SITE_URL, inLanguage: lang },
      { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
      { '@type': 'FAQPage', mainEntity: home.faq.map((f) => ({ '@type': 'Question', name: T(f.q), acceptedAnswer: { '@type': 'Answer', text: T(f.a) } })) },
    ],
  }

  return (
    <>
      <Header locale={lang} path="/" />
      <main className="flex-1">
        <JsonLd data={jsonLd} />
        <Container className="pt-10 md:pt-[104px]">
          <h1 className="m-0 max-w-[16ch] font-display text-[44px] font-bold uppercase leading-[0.96] tracking-[0.01em] text-ink md:text-[72px] lg:text-[96px] lg:leading-[0.94]">{T(home.title)}</h1>
          <p className="mb-0 mt-4 max-w-[62ch] text-base leading-relaxed text-ink md:mt-6 md:text-lg">{T(home.intro)}</p>
        </Container>

        <Section id="destinations" title={T(home.sheetTitle)} aside={<span className="text-xs text-muted md:text-[15px]">{T(home.sheetNote)}</span>}>
          <div className="grid grid-cols-2 gap-5 md:grid-cols-3 md:gap-10">
            {destinations.map((x, i) => (
              <DestinationCard key={x.slug} dest={x} locale={lang} priority={i < 3} />
            ))}
          </div>
        </Section>

        <Section title={T(home.regionsTitle)} gap="mb-0 md:mb-8">
          <div className="hidden lg:block">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-ink">
                  <th scope="col" className={`${colHead} w-[240px]`}>{T({ en: 'Region', fr: 'Région', de: 'Region' })}</th>
                  <th scope="col" className={`${colHead} w-[340px]`}>{T({ en: 'Possible bases', fr: 'Bases possibles', de: 'Mögliche Standorte' })}</th>
                  <th scope="col" className={`${colHead} w-[200px]`}>{T({ en: 'From Zurich HB', fr: 'Depuis Zurich HB', de: 'Ab Zürich HB' })}</th>
                  <th scope="col" className={colHead}>{T({ en: 'What you come for', fr: 'Ce que vous venez chercher', de: 'Was Sie erwartet' })}</th>
                </tr>
              </thead>
              <tbody>
                {home.regions.map((r, i) => {
                  const page = getRegion(r.slug)
                  return (
                    <tr key={r.slug} className={`border-b border-rule align-baseline ${i % 2 ? 'bg-mist' : ''}`}>
                      <th scope="row" className="p-4 text-left font-display text-2xl font-bold uppercase text-ink">
                        {page ? <Link href={localePath(lang, `/regions/${r.slug}`)} className="no-underline hover:text-swiss">{T(r.name)}</Link> : T(r.name)}
                      </th>
                      <td className="p-4 text-[15px] text-ink">{T(r.bases)}</td>
                      <td className="p-4 font-display text-2xl font-bold tabular-nums text-ink">{r.fromZurich}</td>
                      <td className="p-4 text-[15px] text-ink">{T(r.why)}</td>
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
                <div key={r.slug} className={`border-b border-rule py-4 ${i % 2 ? 'bg-mist' : ''}`}>
                  <div className="flex items-baseline justify-between gap-3">
                    <div className="font-display text-2xl font-bold uppercase leading-none text-ink">
                      {page ? <Link href={localePath(lang, `/regions/${r.slug}`)} className="no-underline">{T(r.name)}</Link> : T(r.name)}
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

        <Container className="grid gap-8 pt-10 md:grid-cols-2 md:gap-16 md:pt-[104px]">
          <div id="car-free" className="scroll-mt-6">
            <h2 className="m-0 font-display text-[28px] font-semibold uppercase leading-[1.05] tracking-[0.01em] text-ink md:text-[40px]">{d.nav.carFree}</h2>
            <div className="mb-4 mt-3.5 h-px bg-rule md:mb-6 md:mt-5" />
            <p className="m-0 text-base leading-relaxed text-ink md:text-[17px]">{T(home.carFreeText)}</p>
            <div className="mt-6">
              <Stats locale={lang} big items={[{ value: String(carFree), label: { en: 'car-free villages on the sheet', fr: 'villages sans voiture sur la planche', de: 'autofreie Orte auf dem Bogen' } }, { value: String(destinations.length), label: { en: 'reachable by public transport', fr: 'accessibles en transports publics', de: 'mit dem ÖV erreichbar' } }]} />
            </div>
            {hasGuide('wengen') && <OutlineButton href={localePath(lang, '/wengen#car-free')}>{T({ en: 'Car-free in practice: Wengen', fr: 'Sans voiture en pratique : Wengen', de: 'Autofrei in der Praxis: Wengen' })}</OutlineButton>}
          </div>
          <div id="swiss-travel-pass" className="scroll-mt-6">
            <h2 className="m-0 font-display text-[28px] font-semibold uppercase leading-[1.05] tracking-[0.01em] text-ink md:text-[40px]">Swiss Travel Pass</h2>
            <div className="mb-4 mt-3.5 h-px bg-rule md:mb-6 md:mt-5" />
            <p className="m-0 text-base leading-relaxed text-ink md:text-[17px]">{T(home.passText)}</p>
            {wengen?.pass && (
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
            {hasGuide('wengen') && <OutlineButton href={localePath(lang, '/wengen#swiss-travel-pass')}>{T({ en: 'See the full calculation', fr: 'Le calcul complet', de: 'Die ganze Rechnung' })}</OutlineButton>}
          </div>
        </Container>

        <Section title={T({ en: 'Frequently asked questions', fr: 'Questions fréquentes', de: 'Häufige Fragen' })} gap="mb-0">
          <div className="pb-10 md:pb-[104px]">
            <Faq items={home.faq} locale={lang} />
          </div>
        </Section>
      </main>
      <Footer locale={lang} />
    </>
  )
}
