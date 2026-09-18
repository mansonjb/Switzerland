import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { hasLocale, languageAlternates, localePath, t, type Locale } from '@/lib/i18n'
import { H2, P, ProsePage } from '@/components/prose'
import { CarWidget } from '@/components/car-widget'
import { destinations, publishedGuides } from '@/data'

const title = { en: 'Car rental in Switzerland', fr: 'Location de voiture en Suisse', de: 'Mietwagen in der Schweiz' }
const description = {
  en: 'Compare car rental prices in Switzerland, and check first whether your village is car-free: in Zermatt, Wengen or Mürren the car stays in the valley.',
  fr: 'Comparez les prix de location de voiture en Suisse, et vérifiez d’abord si votre village est sans voiture : à Zermatt, Wengen ou Mürren, la voiture reste dans la vallée.',
  de: 'Vergleichen Sie Mietwagenpreise in der Schweiz und prüfen Sie zuerst, ob Ihr Ort autofrei ist: In Zermatt, Wengen oder Mürren bleibt das Auto im Tal.',
}

export async function generateMetadata({ params }: PageProps<'/[lang]/car-rental'>): Promise<Metadata> {
  const { lang } = await params
  if (!hasLocale(lang)) return {}
  return { title: t(title, lang), description: t(description, lang), alternates: { canonical: localePath(lang, '/car-rental'), languages: languageAlternates('/car-rental') } }
}

const copy: Record<Locale, { intro: string; formTitle: string; formNote: string; whenTitle: string; when: string[]; carFreeTitle: string; carFree: string; vignetteTitle: string; vignette: string; disclosure: string }> = {
  en: {
    intro: 'A car makes sense in Switzerland when you link several valleys in one trip or stay somewhere the trains do not reach easily. Before you book one, check the page of your destination: several of the villages in this guide are car-free, and there the car spends the whole stay in a car park down in the valley.',
    formTitle: 'Compare rental cars',
    formNote: 'Enter the pick-up place and your dates: the form compares the rental companies and you book on the partner site at its price.',
    whenTitle: 'When a car helps, and when it does not',
    when: [
      'A car is worth it for a road trip that strings together lakes and passes, or for a base outside the villages with a station. It lets you change plans with the weather and reach trailheads early.',
      'It is less useful for a stay in one resort served by rail. The Swiss Travel Pass covers trains, buses and boats, and each of our destination pages shows what it covers on the local mountain lifts, so compare that cost with the rental before you decide.',
    ],
    carFreeTitle: 'Car-free villages in this guide',
    carFree: 'In these places you park in the valley and finish by train or cable car. Each page explains how to get there.',
    vignetteTitle: 'The motorway vignette',
    vignette: 'Driving on Swiss motorways requires the vignette, which costs CHF 40 and is valid for the calendar year. A car rented in Switzerland normally has one; ask the rental company if you pick the car up across the border.',
    disclosure: 'The search form is provided by GetRentacar through Travelpayouts. If you book through it, we may earn a commission. You pay the same price.',
  },
  fr: {
    intro: 'Une voiture a du sens en Suisse quand on relie plusieurs vallées dans le même voyage ou qu’on loge là où le train passe mal. Avant d’en réserver une, regardez la page de votre destination : plusieurs villages de ce guide sont sans voiture, et la voiture y passe tout le séjour dans un parking de la vallée.',
    formTitle: 'Comparer les voitures de location',
    formNote: 'Indiquez le lieu de prise en charge et vos dates : le formulaire compare les loueurs et vous réservez sur le site partenaire, à son prix.',
    whenTitle: 'Quand la voiture aide, et quand elle ne sert à rien',
    when: [
      'La voiture vaut la peine pour un road trip qui enchaîne lacs et cols, ou pour une base hors des villages desservis par une gare. Elle permet de changer de programme selon la météo et d’arriver tôt au départ des randonnées.',
      'Elle sert moins pour un séjour dans une seule station desservie par le rail. Le Swiss Travel Pass couvre trains, bus et bateaux, et chaque page destination indique ce qu’il couvre sur les remontées du coin : comparez ce coût à celui de la location avant de trancher.',
    ],
    carFreeTitle: 'Les villages sans voiture de ce guide',
    carFree: 'Ici, on se gare dans la vallée et on termine en train ou en téléphérique. Chaque page explique comment y accéder.',
    vignetteTitle: 'La vignette autoroutière',
    vignette: 'Rouler sur les autoroutes suisses impose la vignette, qui coûte 40 CHF et vaut pour l’année civile. Une voiture louée en Suisse l’a normalement ; demandez au loueur si vous prenez la voiture de l’autre côté de la frontière.',
    disclosure: 'Le formulaire de recherche est fourni par GetRentacar via Travelpayouts. Si vous réservez par ce biais, nous pouvons toucher une commission. Vous payez le même prix.',
  },
  de: {
    intro: 'Ein Auto lohnt sich in der Schweiz, wenn Sie auf einer Reise mehrere Täler verbinden oder dort wohnen, wo die Bahn schlecht hinkommt. Prüfen Sie vor der Buchung die Seite Ihres Reiseziels: Mehrere Orte in diesem Reiseführer sind autofrei, dort steht das Auto den ganzen Aufenthalt über in einem Parkhaus im Tal.',
    formTitle: 'Mietwagen vergleichen',
    formNote: 'Geben Sie Abholort und Daten ein: Das Formular vergleicht die Vermieter, gebucht wird auf der Partnerseite zu deren Preis.',
    whenTitle: 'Wann das Auto hilft und wann nicht',
    when: [
      'Ein Auto lohnt sich für einen Roadtrip über Seen und Pässe oder für eine Unterkunft abseits der Orte mit Bahnhof. So passen Sie das Programm dem Wetter an und sind früh am Ausgangspunkt der Wanderung.',
      'Weniger nützlich ist es für einen Aufenthalt in einem einzigen Ort mit Bahnanschluss. Der Swiss Travel Pass gilt in Zügen, Bussen und Schiffen, und jede Reiseziel-Seite zeigt, was er bei den Bergbahnen vor Ort abdeckt: Vergleichen Sie diese Kosten mit der Miete, bevor Sie entscheiden.',
    ],
    carFreeTitle: 'Autofreie Orte in diesem Reiseführer',
    carFree: 'Hier parkieren Sie im Tal und fahren mit Bahn oder Seilbahn weiter. Jede Seite erklärt die Anreise.',
    vignetteTitle: 'Die Autobahnvignette',
    vignette: 'Auf Schweizer Autobahnen ist die Vignette Pflicht, sie kostet CHF 40 und gilt für das Kalenderjahr. Ein in der Schweiz gemieteter Wagen hat sie normalerweise; fragen Sie beim Vermieter nach, wenn Sie das Auto jenseits der Grenze abholen.',
    disclosure: 'Das Suchformular stammt von GetRentacar über Travelpayouts. Wenn Sie darüber buchen, erhalten wir möglicherweise eine Provision. Ihr Preis bleibt gleich.',
  },
}

export default async function CarRental({ params }: PageProps<'/[lang]/car-rental'>) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()
  const c = copy[lang]
  const live = new Set(publishedGuides().map((g) => g.slug))
  const carFree = destinations.filter((d) => d.carFree && live.has(d.slug))
  return (
    <ProsePage locale={lang} path="/car-rental" title={t(title, lang)} updated={t({ en: 'Updated 18 September 2026', fr: 'Mis à jour le 18 septembre 2026', de: 'Aktualisiert am 18. September 2026' }, lang)}>
      <P>{c.intro}</P>
      <section className="my-10 rounded-2xl border border-rule bg-paper p-4 shadow-[0_4px_18px_rgba(19,27,34,0.08)] md:p-8">
        <H2>{c.formTitle}</H2>
        <p className="mb-5 mt-0 text-[15px] text-muted">{c.formNote}</p>
        <CarWidget />
        <p className="mb-0 mt-5 text-[13px] text-muted">{c.disclosure}</p>
      </section>
      <H2>{c.whenTitle}</H2>
      {c.when.map((p) => <P key={p}>{p}</P>)}
      <H2>{c.carFreeTitle}</H2>
      <P>{c.carFree}</P>
      <ul className="mb-4 mt-0 flex flex-wrap gap-2 p-0">
        {carFree.map((d) => (
          <li key={d.slug} className="list-none">
            <Link href={localePath(lang, `/${d.slug}`)} className="inline-block rounded-full bg-lake-soft px-4 py-2 text-[15px] font-medium text-lake-dark no-underline hover:bg-lake hover:text-white">
              {t(d.name, lang)}
            </Link>
          </li>
        ))}
      </ul>
      <H2>{c.vignetteTitle}</H2>
      <P>{c.vignette}</P>
    </ProsePage>
  )
}
