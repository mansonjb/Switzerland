import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { LOCALES, hasLocale, languageAlternates, localePath, t } from '@/lib/i18n'
import { getDict } from '@/lib/dict'
import { SITE_URL, SITE_NAME } from '@/lib/site'
import { getDestination, getRegion, hasGuide, publishedRegions } from '@/data'
import { Footer, Header } from '@/components/chrome'
import { Container, DestinationCard, Eyebrow, JsonLd, QuickAnswer, Section, Squares } from '@/components/blocks'

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
    openGraph: { title: t(region.meta.title, lang), description: t(region.meta.description, lang), url: localePath(lang, path), siteName: SITE_NAME, type: 'article' },
  }
}

export default async function RegionPage({ params }: PageProps<'/[lang]/regions/[region]'>) {
  const { lang, region: slug } = await params
  const region = getRegion(slug)
  if (!hasLocale(lang) || !region) notFound()
  const d = getDict(lang)
  const path = `/regions/${slug}`
  const dests = region.destinations.map((s) => getDestination(s)!)
  // Best pick per criterion = highest score (ties: first row)
  const best = region.criteria.map((_, k) => {
    let top = 0
    region.rows.forEach((r, i) => {
      if (r.scores[k] > region.rows[top].scores[k]) top = i
    })
    return top
  })

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: t(region.meta.title, lang),
        description: t(region.meta.description, lang),
        inLanguage: lang,
        dateModified: region.updated,
        mainEntityOfPage: `${SITE_URL}${localePath(lang, path)}`,
        publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
      },
      {
        '@type': 'ItemList',
        itemListElement: dests.map((x, i) => ({ '@type': 'ListItem', position: i + 1, name: t(x.name, lang), ...(hasGuide(x.slug) ? { url: `${SITE_URL}${localePath(lang, `/${x.slug}`)}` } : {}) })),
      },
    ],
  }

  const colHead = 'font-display text-[17px] font-semibold uppercase tracking-[0.06em] text-ink'

  return (
    <>
      <Header locale={lang} path={path} />
      <main className="flex-1">
        <JsonLd data={jsonLd} />
        <Container className="pt-6 md:pt-16">
          <Eyebrow>{t({ en: 'Region', fr: 'Région', de: 'Region' }, lang)}</Eyebrow>
          <h1 className="m-0 mt-1.5 font-display text-[40px] font-bold uppercase leading-[0.98] tracking-[0.01em] text-ink md:mt-2 md:text-[72px] md:leading-[0.96]">{t(region.name, lang)}</h1>
          <p className="mb-0 mt-4 max-w-[62ch] text-base leading-relaxed text-ink md:mt-5 md:text-lg">{t(region.intro, lang)}</p>
          <div className="mt-5 max-w-[900px] md:mt-10">
            <QuickAnswer locale={lang}>{t(region.quickAnswer, lang)}</QuickAnswer>
          </div>
        </Container>

        <Section title={t({ en: 'The sheet', fr: 'La planche', de: 'Der Bogen' }, lang)}>
          <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5 lg:gap-6">
            {dests.map((x, i) => (
              <DestinationCard key={x.slug} dest={x} locale={lang} priority={i < 2} />
            ))}
          </div>
        </Section>

        <Section title={t({ en: 'Choosing your base', fr: 'Tableau de choix', de: 'Basis wählen' }, lang)} gap="mb-5 md:mb-8">
          {/* Desktop table */}
          <div className="hidden overflow-x-auto lg:block">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-ink">
                  <th scope="col" className={`${colHead} w-[200px] px-4 py-3 text-left`}>{d.choice.village}</th>
                  {region.criteria.map((c, k) => (
                    <th key={k} scope="col" className={`${colHead} w-[138px] px-4 py-3 text-left`}>{t(c, lang)}</th>
                  ))}
                  <th scope="col" className={`${colHead} px-4 py-3 text-left`}>{d.choice.forWhom}</th>
                </tr>
              </thead>
              <tbody>
                {region.rows.map((row, i) => {
                  const x = getDestination(row.slug)!
                  return (
                    <tr key={row.slug} className={`border-b border-rule ${i % 2 ? 'bg-mist' : ''}`}>
                      <th scope="row" className="p-4 text-left font-normal">
                        <div className="font-display text-2xl font-bold uppercase leading-none tracking-[0.01em] text-ink">{t(x.name, lang)}</div>
                        <div className="mt-1 text-sm tabular-nums text-muted">{x.altitude} m</div>
                      </th>
                      {row.scores.map((s, k) => (
                        <td key={k} className="p-4">
                          <span className="flex items-center gap-2">
                            <Squares n={s} />
                            <span className={`size-[7px] rounded-full ${best[k] === i ? 'bg-swiss' : ''}`} aria-label={best[k] === i ? d.choice.legendBest : undefined} />
                          </span>
                        </td>
                      ))}
                      <td className="p-4 text-[15px] leading-normal text-ink">{t(row.forWhom, lang)}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
          {/* Mobile / tablet stacked rows */}
          <div className="flex flex-col lg:hidden">
            {region.rows.map((row, i) => {
              const x = getDestination(row.slug)!
              return (
                <div key={row.slug} className={`border-t border-rule px-0 py-4 ${i % 2 ? 'bg-mist' : ''}`}>
                  <div className="flex items-baseline gap-2">
                    <div className="font-display text-2xl font-bold uppercase leading-none text-ink">{t(x.name, lang)}</div>
                    <div className="text-[13px] tabular-nums text-muted">{x.altitude} m</div>
                  </div>
                  <div className="mt-3 flex flex-col gap-1.5">
                    {row.scores.map((s, k) => (
                      <div key={k} className="flex items-center gap-2.5">
                        <div className="w-[120px] text-[13px] text-muted">{t(region.criteria[k], lang)}</div>
                        <Squares n={s} />
                        <span className={`size-[7px] rounded-full ${best[k] === i ? 'bg-swiss' : ''}`} />
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 text-sm leading-normal text-ink">{t(row.forWhom, lang)}</div>
                </div>
              )
            })}
          </div>
          <div className="mt-4 flex flex-wrap gap-x-7 gap-y-2">
            <div className="flex items-center gap-2"><span className="size-[11px] bg-ink" /><span className="text-sm text-muted">{d.choice.legendFull}</span></div>
            <div className="flex items-center gap-2"><span className="size-[7px] rounded-full bg-swiss" /><span className="text-sm text-muted">{d.choice.legendBest}</span></div>
          </div>
          <p className="mb-0 mt-3 text-[13px] leading-normal text-muted md:text-sm">{t(region.note, lang)}</p>
        </Section>

        <Section title={t({ en: 'Verdict by traveller', fr: 'Verdict par profil', de: 'Empfehlung nach Reisetyp' }, lang)}>
          <div className="grid gap-6 pb-10 sm:grid-cols-2 md:pb-[104px] lg:grid-cols-4">
            {region.verdicts.map((v, i) => {
              const x = getDestination(v.slug)!
              return (
                <div key={i} className="border-t-2 border-ink pt-3.5 md:pt-4">
                  <Eyebrow>{t(v.profile, lang)}</Eyebrow>
                  <div className="mt-1 font-display text-[30px] font-bold uppercase leading-none tracking-[0.01em] text-ink md:mt-1.5 md:text-[34px]">{t(x.name, lang)}</div>
                  <p className="mb-0 mt-2 text-[15px] leading-relaxed text-ink md:mt-2.5">{t(v.reason, lang)}</p>
                  {hasGuide(v.slug) && (
                    <Link href={localePath(lang, `/${v.slug}`)} className="mt-4 inline-block border-b border-swiss text-[15px] font-medium text-swiss no-underline hover:border-swiss-dark hover:text-swiss-dark">
                      {d.seePage}
                    </Link>
                  )}
                </div>
              )
            })}
          </div>
        </Section>
      </main>
      <Footer locale={lang} />
    </>
  )
}
