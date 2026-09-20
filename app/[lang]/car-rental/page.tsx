import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { hasLocale, languageAlternates, localePath, t, type L } from '@/lib/i18n'
import { SITE_NAME, SITE_URL } from '@/lib/site'
import { H2, P, ProsePage } from '@/components/prose'
import { Faq, JsonLd } from '@/components/blocks'
import { CarWidget } from '@/components/car-widget'
import { destinations, publishedGuides } from '@/data'
import { carCopy, carFaq } from './copy'

const title = { en: 'Car rental in Switzerland', fr: 'Location de voiture en Suisse', de: 'Mietwagen in der Schweiz' }
const description = {
  en: 'Compare car rental prices in Switzerland, and get the rest straight: the CHF 40 vignette, winter tyres, closed passes, car trains, blue zone parking and the villages where the car stays in the valley.',
  fr: 'Comparez les prix de location de voiture en Suisse et réglez le reste : vignette à 40 CHF, pneus hiver, cols fermés, trains-autos, zones bleues et villages où la voiture reste dans la vallée.',
  de: 'Mietwagenpreise in der Schweiz vergleichen und den Rest klären: Vignette für CHF 40, Winterreifen, geschlossene Pässe, Autoverlad, blaue Zonen und Orte, wo das Auto im Tal bleibt.',
}

export async function generateMetadata({ params }: PageProps<'/[lang]/car-rental'>): Promise<Metadata> {
  const { lang } = await params
  if (!hasLocale(lang)) return {}
  return {
    title: t(title, lang),
    description: t(description, lang),
    alternates: { canonical: localePath(lang, '/car-rental'), languages: languageAlternates('/car-rental') },
    openGraph: { title: t(title, lang), description: t(description, lang), url: localePath(lang, '/car-rental'), siteName: SITE_NAME, type: 'article', images: ['/photos/andermatt.jpg'] },
  }
}

export default async function CarRental({ params }: PageProps<'/[lang]/car-rental'>) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()
  const c = carCopy[lang]
  const live = new Set(publishedGuides().map((g) => g.slug))
  const carFree = destinations.filter((d) => d.carFree && live.has(d.slug))
  const T = (l: L) => t(l, lang)
  return (
    <ProsePage locale={lang} path="/car-rental" title={T(title)} updated={T({ en: 'Updated 20 September 2026', fr: 'Mis à jour le 20 septembre 2026', de: 'Aktualisiert am 20. September 2026' })}>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          '@id': `${SITE_URL}${localePath(lang, '/car-rental')}#faq`,
          mainEntity: carFaq.map((f) => ({ '@type': 'Question', name: T(f.q), acceptedAnswer: { '@type': 'Answer', text: T(f.a) } })),
        }}
      />
      {c.intro.map((p) => <P key={p}>{p}</P>)}

      <section className="my-10 rounded-2xl border border-rule bg-paper p-4 shadow-[0_4px_18px_rgba(19,27,34,0.08)] md:p-8">
        <H2>{c.form.title}</H2>
        <p className="mb-5 mt-0 text-[15px] text-muted">{c.form.note}</p>
        <CarWidget />
        <p className="mb-0 mt-5 text-[13px] text-muted">{c.form.disclosure}</p>
      </section>

      {c.sections.slice(0, 1).map((s) => (
        <section key={s.id}>
          <H2 id={s.id}>{s.title}</H2>
          {s.paras.map((p) => <P key={p}>{p}</P>)}
        </section>
      ))}

      <H2 id="car-free">{c.carFree.title}</H2>
      {c.carFree.paras.map((p) => <P key={p}>{p}</P>)}
      <p className="mb-3 mt-6 text-[15px] font-medium text-muted">{c.carFree.chips}</p>
      <ul className="mb-6 mt-0 flex flex-wrap gap-2 p-0">
        {carFree.map((d) => (
          <li key={d.slug} className="list-none">
            <Link href={localePath(lang, `/${d.slug}`)} className="inline-block rounded-full bg-lake-soft px-4 py-2 text-[15px] font-medium text-lake-dark no-underline hover:bg-lake hover:text-white">
              {T(d.name)}
            </Link>
          </li>
        ))}
      </ul>

      {c.sections.slice(1).map((s) => (
        <section key={s.id}>
          <H2 id={s.id}>{s.title}</H2>
          {s.paras.map((p) => <P key={p}>{p}</P>)}
        </section>
      ))}

      <H2 id="faq">{c.faqTitle}</H2>
      <div className="mt-6">
        <Faq items={carFaq} locale={lang} />
      </div>

      <div className="mt-10 rounded-2xl border border-rule bg-sand p-5 md:p-7">
        <p className="m-0 text-base leading-relaxed text-ink md:text-[17px]">
          {T({
            en: 'Ready to compare? The search form is at the top of this page, and every destination page tells you whether the car can reach the village at all.',
            fr: 'Prêt à comparer ? Le formulaire de recherche est en haut de cette page, et chaque page destination dit si la voiture peut seulement atteindre le village.',
            de: 'Bereit zum Vergleichen? Das Suchformular steht oben auf dieser Seite, und jede Reiseziel-Seite sagt, ob das Auto den Ort überhaupt erreicht.',
          })}
        </p>
      </div>
    </ProsePage>
  )
}
