import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { hasLocale, languageAlternates, localePath, t, type Locale } from '@/lib/i18n'
import { H2, P, ProsePage } from '@/components/prose'

const title = { en: 'Methodology', fr: 'Méthodologie', de: 'Methodik' }
const description = {
  en: 'How Stays in Switzerland picks destinations and hotels, where the facts come from, and how the guide is funded.',
  fr: "Comment Stays in Switzerland choisit ses destinations et ses hôtels, d'où viennent les faits, et comment le guide est financé.",
  de: 'Wie Stays in Switzerland Reiseziele und Hotels auswählt, woher die Fakten stammen und wie der Reiseführer finanziert wird.',
}

export async function generateMetadata({ params }: PageProps<'/[lang]/about'>): Promise<Metadata> {
  const { lang } = await params
  if (!hasLocale(lang)) return {}
  return { title: t(title, lang), description: t(description, lang), alternates: { canonical: localePath(lang, '/about'), languages: languageAlternates('/about') } }
}

const body: Record<Locale, React.JSX.Element> = {
  en: (
    <>
      <H2>What this guide does</H2>
      <P>Stays in Switzerland answers one question per destination: which village or area to sleep in, and why. Each page compares the areas, lists a few hotels with checkable facts, and shows the numbers that settle the choice: travel times, Swiss Travel Pass cost, seasonal closures, car-free access.</P>
      <H2>Where the facts come from</H2>
      <P>Timetables and fares come from the official operators (SBB, Jungfrau Railways and the local cable cars). Altitudes come from the federal map service swisstopo. Hotel facts (position, opening periods, services) come from each hotel&apos;s own website. Every figure carries the date it was checked, and seasonal data is re-checked before each season.</P>
      <P>We have not stayed in every hotel listed, and we do not claim to. We publish no ratings or reviews. Hotel prices are the lowest and average nightly rates seen on Booking.com for 2 adults on several winter and summer dates, shown with the collection date; they are indicative and the live price depends on your dates.</P>
      <H2>How destinations and hotels are chosen</H2>
      <P>A destination is added when it has a real choice of base to explain and enough verifiable information to fill a useful page. Hotels are picked to cover each area of the village, not for commercial reasons. No hotel pays to appear.</P>
      <H2 id="affiliate">Affiliate links and funding</H2>
      <P>The guide is funded by affiliate links. When you click an availability button or use the map and then book, the booking platform may pay us a commission through our partner Stay22. You pay the same price. These links are marked as sponsored in the page code and flagged next to the hotel list on every destination page. The car rental search form works the same way, through GetRentacar and Travelpayouts.</P>
      <H2>Independence</H2>
      <P>Stays in Switzerland is an independent guide. It is not affiliated with the Swiss Confederation, any canton or commune, Switzerland Tourism, or any transport operator. Place names and product names such as Swiss Travel Pass are used only to describe them.</P>
      <H2>Corrections</H2>
      <P>Spotted an outdated timetable or a hotel that has closed? Write to contact@staysinswitzerland.com and we will check and correct it.</P>
    </>
  ),
  fr: (
    <>
      <H2>Ce que fait ce guide</H2>
      <P>Stays in Switzerland répond à une question par destination : dans quel village ou quel secteur dormir, et pourquoi. Chaque page compare les secteurs, liste quelques hôtels avec des faits vérifiables, et affiche les chiffres qui tranchent : temps de trajet, coût avec le Swiss Travel Pass, fermetures de saison, accès sans voiture.</P>
      <H2>D&apos;où viennent les faits</H2>
      <P>Horaires et tarifs viennent des opérateurs officiels (CFF, Jungfraubahnen et remontées locales). Les altitudes viennent du service cartographique fédéral swisstopo. Les faits sur les hôtels (situation, périodes d&apos;ouverture, services) viennent du site de chaque établissement. Chaque chiffre porte sa date de relevé, et les données de saison sont revérifiées avant chaque saison.</P>
      <P>Nous n&apos;avons pas séjourné dans chaque hôtel cité, et nous ne le prétendons pas. Nous ne publions ni notes ni avis. Les prix des hôtels sont le tarif le plus bas et la moyenne par nuit relevés sur Booking.com pour 2 adultes, sur plusieurs dates d&apos;hiver et d&apos;été, avec la date du relevé ; ils sont indicatifs et le vrai prix dépend de vos dates.</P>
      <H2>Comment destinations et hôtels sont choisis</H2>
      <P>Une destination entre dans le guide quand elle pose un vrai choix de base à expliquer, avec assez d&apos;informations vérifiables pour une page utile. Les hôtels sont choisis pour couvrir chaque secteur du village, pas pour des raisons commerciales. Aucun hôtel ne paie pour apparaître.</P>
      <H2 id="affiliate">Liens affiliés et financement</H2>
      <P>Le guide est financé par des liens d&apos;affiliation. Si vous cliquez sur un bouton de disponibilités ou utilisez la carte puis réservez, la plateforme de réservation peut nous verser une commission via notre partenaire Stay22. Vous payez le même prix. Ces liens sont marqués comme sponsorisés dans le code de la page et signalés à côté de la liste d&apos;hôtels de chaque page destination. Le formulaire de location de voiture fonctionne de la même façon, via GetRentacar et Travelpayouts.</P>
      <H2>Indépendance</H2>
      <P>Stays in Switzerland est un guide indépendant, sans lien avec la Confédération suisse, les cantons ou communes, Suisse Tourisme ou les entreprises de transport. Les noms de lieux et de produits comme Swiss Travel Pass sont utilisés uniquement pour les désigner.</P>
      <H2>Corrections</H2>
      <P>Un horaire dépassé, un hôtel fermé ? Écrivez à contact@staysinswitzerland.com, nous vérifions et corrigeons.</P>
    </>
  ),
  de: (
    <>
      <H2>Was dieser Reiseführer macht</H2>
      <P>Stays in Switzerland beantwortet pro Reiseziel eine Frage: in welchem Ort oder Ortsteil übernachten, und warum. Jede Seite vergleicht die Ortsteile, nennt einige Hotels mit überprüfbaren Fakten und zeigt die Zahlen, die entscheiden: Reisezeiten, Kosten mit dem Swiss Travel Pass, saisonale Schliessungen, autofreier Zugang.</P>
      <H2>Woher die Fakten stammen</H2>
      <P>Fahrpläne und Tarife stammen von den offiziellen Betreibern (SBB, Jungfraubahnen und lokale Bergbahnen). Höhenangaben stammen vom Kartendienst des Bundes swisstopo. Hotelfakten (Lage, Öffnungszeiten, Leistungen) stammen von der Website des jeweiligen Hotels. Jede Zahl trägt ihr Prüfdatum, saisonale Daten werden vor jeder Saison neu geprüft.</P>
      <P>Wir haben nicht in jedem genannten Hotel übernachtet und behaupten das auch nicht. Wir veröffentlichen keine Bewertungen oder Rezensionen. Hotelpreise sind der tiefste und der durchschnittliche Nachtpreis auf Booking.com für 2 Erwachsene an mehreren Winter- und Sommerdaten, mit Erhebungsdatum; sie sind Richtwerte, der echte Preis hängt von Ihren Daten ab.</P>
      <H2>Wie Reiseziele und Hotels ausgewählt werden</H2>
      <P>Ein Reiseziel kommt dazu, wenn es eine echte Standortwahl zu erklären gibt und genug überprüfbare Informationen für eine nützliche Seite vorliegen. Hotels werden so gewählt, dass sie jeden Ortsteil abdecken, nicht aus kommerziellen Gründen. Kein Hotel bezahlt für seine Nennung.</P>
      <H2 id="affiliate">Affiliate-Links und Finanzierung</H2>
      <P>Der Reiseführer finanziert sich über Affiliate-Links. Wenn Sie auf eine Verfügbarkeits-Schaltfläche klicken oder die Karte nutzen und danach buchen, kann uns die Buchungsplattform über unseren Partner Stay22 eine Provision zahlen. Ihr Preis bleibt gleich. Diese Links sind im Seitencode als gesponsert markiert und auf jeder Reiseziel-Seite bei der Hotelliste gekennzeichnet. Das Suchformular für Mietwagen funktioniert gleich, über GetRentacar und Travelpayouts.</P>
      <H2>Unabhängigkeit</H2>
      <P>Stays in Switzerland ist ein unabhängiger Reiseführer, ohne Verbindung zur Schweizerischen Eidgenossenschaft, zu Kantonen oder Gemeinden, zu Schweiz Tourismus oder zu Transportunternehmen. Orts- und Produktnamen wie Swiss Travel Pass werden nur zur Bezeichnung verwendet.</P>
      <H2>Korrekturen</H2>
      <P>Veralteter Fahrplan oder geschlossenes Hotel entdeckt? Schreiben Sie an contact@staysinswitzerland.com, wir prüfen und korrigieren.</P>
    </>
  ),
}

export default async function About({ params }: PageProps<'/[lang]/about'>) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()
  return (
    <ProsePage locale={lang} path="/about" title={t(title, lang)} updated={t({ en: 'Updated 15 September 2026', fr: 'Mis à jour le 15 septembre 2026', de: 'Aktualisiert am 15. September 2026' }, lang)}>
      {body[lang]}
    </ProsePage>
  )
}
