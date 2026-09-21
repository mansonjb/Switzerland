import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { hasLocale, languageAlternates, localePath, t, type Locale } from '@/lib/i18n'
import { H2, P, ProsePage } from '@/components/prose'
import { ConsentReset } from '@/components/consent'
import { getDict } from '@/lib/dict'
import { destinations, publishedGuides } from '@/data'

const title = { en: 'Legal notice and privacy', fr: 'Mentions légales et confidentialité', de: 'Impressum und Datenschutz' }

export async function generateMetadata({ params }: PageProps<'/[lang]/legal'>): Promise<Metadata> {
  const { lang } = await params
  if (!hasLocale(lang)) return {}
  return { title: t(title, lang), robots: { index: false, follow: true }, alternates: { canonical: localePath(lang, '/legal'), languages: languageAlternates('/legal') } }
}

// Publisher identity. TODO before launch: add the full legal identity required by LCEN art. 6 (FR) and UWG art. 3 al. 1 let. s (CH).
const PUBLISHER = {
  name: 'Jean-Baptiste Manson',
  status: { en: 'Sole trader (entrepreneur individuel), France', fr: 'Entrepreneur individuel, France', de: 'Einzelunternehmer (entrepreneur individuel), Frankreich' },
  email: 'contact@staysinswitzerland.com',
}

const HOST = 'Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA'

const body: Record<Locale, React.JSX.Element> = {
  en: (
    <>
      <H2>Publisher</H2>
      <P>{PUBLISHER.name}, {t(PUBLISHER.status, 'en')}. Contact: {PUBLISHER.email}. Publication director: {PUBLISHER.name}.</P>
      <H2>Hosting</H2>
      <P>{HOST}.</P>
      <H2>Commercial nature</H2>
      <P>This site contains affiliate links. Bookings made through them may earn the publisher a commission, at no extra cost to you. See the methodology page.</P>
      <H2 id="privacy">Privacy</H2>
      <P>The site itself sets no advertising cookie and runs no account system. Our host keeps technical logs (IP address, pages requested) for security, for a limited period. When you open the Stay22 map or follow an availability link, Stay22 and the booking platform process data under their own privacy policies, including cookies used to attribute a booking.</P>
      <P>Audience measurement uses Google Analytics 4 (Google Ireland Ltd) and runs only after you accept it in the banner: before that, no Google script is loaded and no cookie is set. It counts pages viewed and visits, with IP addresses anonymised, and its cookies (_ga) last up to 14 months. Microsoft Clarity (Microsoft Ireland Operations Ltd) runs under the same consent and records clicks, scrolling and mouse movements to show how pages are used, with text typed into fields masked. Data may be transferred to the United States under the EU-US Data Privacy Framework. This applies to visitors from the EU (GDPR) and Switzerland (FADP).</P>
      <ConsentReset label={getDict('en').consent.change} />
      <P>You can ask for access to, correction or deletion of any personal data we hold by writing to {PUBLISHER.email}. You may also complain to the CNIL (France) or the FDPIC (Switzerland).</P>
      <H2>Photos</H2>
      <P>Destination photos come from Wikimedia Commons under free licences. Authors and licences are listed below.</P>
    </>
  ),
  fr: (
    <>
      <H2>Éditeur</H2>
      <P>{PUBLISHER.name}, {t(PUBLISHER.status, 'fr')}. Contact : {PUBLISHER.email}. Directeur de la publication : {PUBLISHER.name}.</P>
      <H2>Hébergement</H2>
      <P>{HOST}.</P>
      <H2>Caractère commercial</H2>
      <P>Ce site contient des liens d&apos;affiliation. Les réservations effectuées par ces liens peuvent rapporter une commission à l&apos;éditeur, sans surcoût pour vous. Voir la page méthodologie.</P>
      <H2 id="privacy">Confidentialité</H2>
      <P>Le site ne dépose aucun cookie publicitaire et ne gère aucun compte. Notre hébergeur conserve des journaux techniques (adresse IP, pages demandées) pour la sécurité, pendant une durée limitée. Quand vous ouvrez la carte Stay22 ou suivez un lien de disponibilités, Stay22 et la plateforme de réservation traitent des données selon leurs propres politiques, y compris des cookies servant à attribuer une réservation.</P>
      <P>La mesure d&apos;audience utilise Google Analytics 4 (Google Ireland Ltd) et ne fonctionne qu&apos;après votre accord dans le bandeau : avant cela, aucun script Google n&apos;est chargé et aucun cookie n&apos;est déposé. Elle compte les pages vues et les visites, avec des adresses IP anonymisées, et ses cookies (_ga) durent au plus 14 mois. Microsoft Clarity (Microsoft Ireland Operations Ltd) fonctionne sous le même consentement et enregistre les clics, le défilement et les mouvements de souris pour montrer comment les pages sont utilisées, le texte saisi dans les champs étant masqué. Des données peuvent être transférées aux États-Unis dans le cadre du Data Privacy Framework UE-États-Unis. Cela vaut pour les visiteurs de l&apos;UE (RGPD) et de Suisse (nLPD).</P>
      <ConsentReset label={getDict('fr').consent.change} />
      <P>Vous pouvez demander l&apos;accès, la rectification ou la suppression de vos données en écrivant à {PUBLISHER.email}. Vous pouvez aussi saisir la CNIL (France) ou le PFPDT (Suisse).</P>
      <H2>Photos</H2>
      <P>Les photos des destinations proviennent de Wikimedia Commons sous licences libres. Auteurs et licences sont listés ci-dessous.</P>
    </>
  ),
  de: (
    <>
      <H2>Herausgeber</H2>
      <P>{PUBLISHER.name}, {t(PUBLISHER.status, 'de')}. Kontakt: {PUBLISHER.email}. Verantwortlich für den Inhalt: {PUBLISHER.name}.</P>
      <H2>Hosting</H2>
      <P>{HOST}.</P>
      <H2>Kommerzieller Charakter</H2>
      <P>Diese Website enthält Affiliate-Links. Buchungen über diese Links können dem Herausgeber eine Provision einbringen, ohne Mehrkosten für Sie. Siehe Seite Methodik.</P>
      <H2 id="privacy">Datenschutz</H2>
      <P>Die Website selbst setzt keine Werbe-Cookies und führt keine Benutzerkonten. Unser Hoster speichert technische Protokolle (IP-Adresse, abgerufene Seiten) aus Sicherheitsgründen für begrenzte Zeit. Wenn Sie die Stay22-Karte öffnen oder einem Verfügbarkeits-Link folgen, verarbeiten Stay22 und die Buchungsplattform Daten gemäss ihren eigenen Datenschutzrichtlinien, einschliesslich Cookies zur Zuordnung einer Buchung.</P>
      <P>Die Reichweitenmessung nutzt Google Analytics 4 (Google Ireland Ltd) und läuft erst, nachdem Sie im Banner zugestimmt haben: Vorher wird kein Google-Skript geladen und kein Cookie gesetzt. Sie zählt Seitenaufrufe und Besuche, mit anonymisierten IP-Adressen, und ihre Cookies (_ga) bleiben höchstens 14 Monate. Microsoft Clarity (Microsoft Ireland Operations Ltd) läuft mit derselben Einwilligung und zeichnet Klicks, Scrollen und Mausbewegungen auf, um zu zeigen, wie die Seiten genutzt werden; in Felder eingegebener Text wird maskiert. Daten können im Rahmen des EU-US Data Privacy Framework in die USA übermittelt werden. Das gilt für Besucher aus der EU (DSGVO) und der Schweiz (DSG).</P>
      <ConsentReset label={getDict('de').consent.change} />
      <P>Auskunft, Berichtigung oder Löschung Ihrer Daten können Sie unter {PUBLISHER.email} verlangen. Beschwerden sind bei der CNIL (Frankreich) oder beim EDÖB (Schweiz) möglich.</P>
      <H2>Fotos</H2>
      <P>Die Fotos der Reiseziele stammen von Wikimedia Commons unter freien Lizenzen. Urheber und Lizenzen sind unten aufgeführt.</P>
    </>
  ),
}

function PhotoCredits({ locale }: { locale: Locale }) {
  const items = [
    ...destinations.map((d) => ({ name: t(d.name, locale), credit: d.credit })),
    ...publishedGuides().map((g) => ({ name: t(g.hero.caption, locale), credit: g.hero.credit })),
  ].filter((x) => x.credit)
  return (
    <>
      <H2 id="photo-credits">{t({ en: 'Photo credits', fr: 'Crédits photos', de: 'Bildnachweis' }, locale)}</H2>
      <P>{t({ en: 'Photos are resized and cropped. Adapted CC BY-SA photos are shared under the same licence.', fr: 'Les photos sont redimensionnées et recadrées. Les photos CC BY-SA adaptées sont partagées sous la même licence.', de: 'Die Fotos sind verkleinert und zugeschnitten. Bearbeitete CC-BY-SA-Fotos stehen unter derselben Lizenz.' }, locale)}</P>
      <ul className="m-0 mb-4 list-none p-0">
        {items.map((x, i) => (
          <li key={i} className="border-t border-rule py-2 text-[15px] leading-normal text-ink">
            {x.name}:{' '}
            <a href={x.credit!.source} rel="nofollow noopener" target="_blank" className="underline">{x.credit!.author}</a>,{' '}
            <a href={x.credit!.licenseUrl} rel="nofollow noopener" target="_blank" className="underline">{x.credit!.license}</a>, Wikimedia Commons
          </li>
        ))}
      </ul>
      <P>{t({ en: 'Hotel photos come from the hotels’ public Google Maps listings.', fr: 'Les photos des hôtels proviennent de leurs fiches publiques Google Maps.', de: 'Die Hotelfotos stammen aus den öffentlichen Google-Maps-Einträgen der Hotels.' }, locale)}</P>
    </>
  )
}

export default async function Legal({ params }: PageProps<'/[lang]/legal'>) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()
  return (
    <ProsePage locale={lang} path="/legal" title={t(title, lang)} updated={t({ en: 'Updated 15 September 2026', fr: 'Mis à jour le 15 septembre 2026', de: 'Aktualisiert am 15. September 2026' }, lang)}>
      {body[lang]}
      <PhotoCredits locale={lang} />
    </ProsePage>
  )
}
