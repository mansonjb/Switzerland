import type { DestinationGuide } from '../types'

// Sources in data/SOURCES-geneva.md (checked 16/09/2026). No number without a source.
export const geneva: DestinationGuide = {
  slug: 'geneva',
  stamp: 'generic',
  updated: '2026-09-16',
  meta: {
    title: { en: 'Where to stay in Geneva: old town, lakefront, Pâquis', fr: 'Où dormir à Genève : vieille ville, quais, Pâquis', de: 'Wo übernachten in Genf: Altstadt, Seeufer, Pâquis' },
    description: {
      en: 'Geneva area by area: the Vieille Ville around the cathedral, Pâquis near Cornavin station, and the Quai du Mont-Blanc lakefront. Real hotel addresses, the free Geneva Transport Card, and the Jet d’Eau.',
      fr: 'Genève secteur par secteur : la Vieille Ville autour de la cathédrale, les Pâquis près de la gare de Cornavin, et le Quai du Mont-Blanc au bord du lac. Adresses d’hôtels réelles, carte de transport gratuite, et le Jet d’Eau.',
      de: 'Genf Ortsteil für Ortsteil: die Altstadt rund um die Kathedrale, die Pâquis nahe dem Bahnhof Cornavin, und der Quai du Mont-Blanc am See. Hotels mit echten Adressen, die kostenlose Genfer Verkehrskarte, und der Jet d’Eau.',
    },
  },
  eyebrow: { en: 'Lake Geneva region · Geneva', fr: 'Région lémanique · Genève', de: 'Genferseeregion · Genf' },
  title: { en: 'Where to stay in Geneva', fr: 'Où dormir à Genève', de: 'Wo übernachten in Genf' },
  intro: {
    en: 'A lake city at 375 m, where the Rhône leaves Lake Geneva between the Old Town and Pâquis. Geneva Airport has its own railway station beneath the terminal, 7 minutes by train from Cornavin, with up to 7 trains an hour at peak times. Saint-Pierre Cathedral, at the top of the Old Town, has 157 steps up its towers to a 360-degree view over the city and the lake, and on the harbour the Jet d’Eau throws water 140 m into the air, weather permitting.',
    fr: 'Une ville de lac à 375 m d’altitude, où le Rhône quitte le lac Léman entre la Vieille Ville et les Pâquis. L’aéroport de Genève possède sa propre gare sous le terminal, à 7 minutes en train de Cornavin, avec jusqu’à 7 trains par heure aux heures de pointe. La cathédrale Saint-Pierre, au sommet de la Vieille Ville, compte 157 marches jusqu’à ses tours pour un panorama à 360 degrés sur la ville et le lac, et sur la rade, le Jet d’Eau projette l’eau à 140 m de hauteur, selon la météo.',
    de: 'Eine Seestadt auf 375 m, wo die Rhone den Genfersee zwischen der Altstadt und Pâquis verlässt. Der Flughafen Genf hat einen eigenen Bahnhof unter dem Terminal, 7 Minuten mit dem Zug bis Cornavin, mit bis zu 7 Zügen pro Stunde zu Spitzenzeiten. Die Kathedrale Saint-Pierre, oben in der Altstadt, hat 157 Stufen zu ihren Türmen mit einem 360-Grad-Blick über Stadt und See, und auf der Rade schiesst der Jet d’Eau, wetterabhängig, Wasser 140 m in die Höhe.',
  },
  quickAnswer: {
    en: 'Stay in Geneva for a free transport card that covers your whole stay from the airport onward, and an Old Town cathedral with a 360-degree view over the lake. For lake and river baths you can swim in for free within minutes of the station, stay in Zurich instead.',
    fr: 'Dormez à Genève pour une carte de transport gratuite qui couvre tout votre séjour dès l’aéroport, et une cathédrale de la Vieille Ville offrant une vue à 360 degrés sur le lac. Pour des bains de lac et de rivière où l’on peut nager gratuitement à quelques minutes de la gare, dormez plutôt à Zurich.',
    de: 'Übernachten Sie in Genf für eine kostenlose Verkehrskarte, die Ihren ganzen Aufenthalt ab dem Flughafen abdeckt, und eine Altstadtkathedrale mit 360-Grad-Blick über den See. Für See- und Flussbäder, in denen man wenige Minuten vom Bahnhof entfernt gratis schwimmen kann, übernachten Sie stattdessen in Zürich.',
  },
  snapshot: {
    why: {
      en: 'Every overnight guest receives a free Geneva Transport Card by email before arrival, covering buses, trams, trains within the zone and the Mouettes Genevoises shuttle boats for the whole stay, at no cost to the guest or the hotel.',
      fr: 'Chaque client passant une nuitée reçoit par courriel, avant son arrivée, une carte de transport genevoise gratuite, couvrant bus, trams, trains dans la zone et les Mouettes Genevoises pour toute la durée du séjour, sans frais pour le client ni pour l’hôtel.',
      de: 'Jeder Übernachtungsgast erhält vor der Anreise per E-Mail eine kostenlose Genfer Verkehrskarte, die Busse, Trams, Züge in der Zone und die Mouettes Genevoises für die ganze Aufenthaltsdauer abdeckt, ohne Kosten für Gast oder Hotel.',
    },
    where: {
      en: 'Around the Vieille Ville and Saint-Pierre Cathedral for the Old Town, in Pâquis between Cornavin station and the lake for the shortest walk to transport, or along the Quai du Mont-Blanc for the grand hotel row facing the Jet d’Eau.',
      fr: 'Autour de la Vieille Ville et de la cathédrale Saint-Pierre pour le coeur historique, aux Pâquis entre la gare de Cornavin et le lac pour la marche la plus courte vers les transports, ou le long du Quai du Mont-Blanc pour les grands hôtels face au Jet d’Eau.',
      de: 'Rund um die Altstadt und die Kathedrale Saint-Pierre für das historische Zentrum, in Pâquis zwischen dem Bahnhof Cornavin und dem See für den kürzesten Weg zu den Verkehrsmitteln, oder entlang des Quai du Mont-Blanc für die grossen Hotels gegenüber dem Jet d’Eau.',
    },
    watch: {
      en: 'The Jet d’Eau is weather-dependent and can be shut down in wind or cold, so it is not guaranteed to be running when you arrive.',
      fr: 'Le Jet d’Eau dépend de la météo et peut être arrêté en cas de vent ou de froid : rien ne garantit qu’il fonctionne à votre arrivée.',
      de: 'Der Jet d’Eau ist wetterabhängig und kann bei Wind oder Kälte abgeschaltet werden: Bei Ihrer Ankunft ist sein Betrieb nicht garantiert.',
    },
  },
  stats: [
    { value: '7', label: { en: 'minutes by train from Geneva Airport to Cornavin station', fr: 'minutes en train entre l’aéroport de Genève et la gare de Cornavin', de: 'Minuten mit dem Zug vom Flughafen Genf zum Bahnhof Cornavin' } },
    { value: '140', label: { en: 'metres high, the Jet d’Eau when it is running', fr: 'mètres de hauteur, le Jet d’Eau lorsqu’il fonctionne', de: 'Meter Höhe, der Jet d’Eau im Betrieb' } },
    { value: '157', label: { en: 'steps to the panorama atop Saint-Pierre Cathedral’s towers', fr: 'marches jusqu’au panorama, au sommet des tours de la cathédrale Saint-Pierre', de: 'Stufen zum Panorama auf den Türmen der Kathedrale Saint-Pierre' } },
  ],
  hero: {
    photo: '/photos/geneve.jpg',
    caption: { en: 'A view of Geneva, on the shore of Lake Geneva.', fr: 'Une vue de Genève, au bord du lac Léman.', de: 'Ein Blick auf Genf, am Ufer des Genfersees.' },
    credit: { author: 'Pmau', license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/', source: 'https://commons.wikimedia.org/wiki/File:Views_of_Geneva_2.jpg' },
  },
  sectors: [
    {
      title: { en: 'The Old Town: Vieille Ville', fr: 'La vieille ville', de: 'Altstadt: Vieille Ville' },
      walk: { en: 'Rue du Puits-Saint-Pierre, around the cathedral', fr: 'Rue du Puits-Saint-Pierre, autour de la cathédrale', de: 'Rue du Puits-Saint-Pierre, rund um die Kathedrale' },
      text: {
        en: 'The medieval hilltop core on the left bank, around Saint-Pierre Cathedral. Hotel Les Armures occupies a 17th-century building at Rue du Puits-Saint-Pierre 1, next to the Maison Tavel museum and the cathedral itself.',
        fr: 'Le coeur médiéval de la rive gauche, perché autour de la cathédrale Saint-Pierre. L’Hôtel Les Armures occupe un bâtiment du XVIIe siècle au Rue du Puits-Saint-Pierre 1, à côté du musée Maison Tavel et de la cathédrale elle-même.',
        de: 'Der mittelalterliche Kern auf dem linken Ufer, rund um die Kathedrale Saint-Pierre gelegen. Das Hotel Les Armures liegt in einem Gebäude aus dem 17. Jahrhundert an der Rue du Puits-Saint-Pierre 1, neben dem Museum Maison Tavel und der Kathedrale selbst.',
      },
      points: [
        { en: 'The closest sector to the cathedral, the Mur des Réformateurs and the Parc des Bastions', fr: 'Le secteur le plus proche de la cathédrale, du Mur des Réformateurs et du parc des Bastions', de: 'Der Kathedrale, der Mur des Réformateurs und dem Parc des Bastions am nächsten gelegene Bereich' },
        { en: 'No lake frontage in this sector', fr: 'Aucune façade sur le lac dans ce secteur', de: 'Kein Seeufer in diesem Bereich' },
      ],
    },
    {
      title: { en: 'Pâquis and the station', fr: 'Les Pâquis et la gare', de: 'Pâquis und der Bahnhof' },
      walk: { en: 'Rue de Berne and Rue Voltaire, between Cornavin and the lake', fr: 'Rue de Berne et Rue Voltaire, entre Cornavin et le lac', de: 'Rue de Berne und Rue Voltaire, zwischen Cornavin und dem See' },
      text: {
        en: 'The dense right-bank grid between Cornavin station and the harbour. 9Hotel Pâquis, at Rue de Berne 31, is 300 m from the station and 500 m from the lake; ibis Genève Centre Gare, at Rue Voltaire 10, is a 5-minute walk from the station, the city centre and the lake.',
        fr: 'La grille dense de la rive droite entre la gare de Cornavin et la rade. Le 9Hotel Pâquis, au Rue de Berne 31, se trouve à 300 m de la gare et 500 m du lac ; l’ibis Genève Centre Gare, au Rue Voltaire 10, est à 5 minutes à pied de la gare, du centre-ville et du lac.',
        de: 'Das dichte Strassenraster des rechten Ufers zwischen dem Bahnhof Cornavin und der Rade. Das 9Hotel Pâquis an der Rue de Berne 31 liegt 300 m vom Bahnhof und 500 m vom See entfernt; das ibis Genève Centre Gare an der Rue Voltaire 10 ist 5 Gehminuten von Bahnhof, Innenstadt und See entfernt.',
      },
      points: [
        { en: 'The shortest walk to the station and to Geneva Transport Card pickup', fr: 'La marche la plus courte vers la gare et la remise de la carte de transport', de: 'Der kürzeste Weg zum Bahnhof und zur Abholung der Verkehrskarte' },
        { en: 'The densest choice of budget to mid-range hotels', fr: 'Le choix le plus dense d’hôtels économiques à milieu de gamme', de: 'Die grösste Auswahl an Budget- bis Mittelklassehotels' },
      ],
    },
    {
      title: { en: 'Quai du Mont-Blanc, the lakefront', fr: 'Le Quai du Mont-Blanc, au bord du lac', de: 'Quai du Mont-Blanc, am See' },
      walk: { en: 'Quai du Mont-Blanc and Rue du Grand-Pré', fr: 'Quai du Mont-Blanc et Rue du Grand-Pré', de: 'Quai du Mont-Blanc und Rue du Grand-Pré' },
      text: {
        en: 'The grand hotel row along the harbour, facing the Jet d’Eau. Hotel Beau-Rivage, at Quai du Mont-Blanc 13, was built in 1865; ibis Genève Centre Nations, at Rue du Grand-Pré 33-35, sits toward the international organisations, a short walk from Cornavin, the UN and the CICG convention centre.',
        fr: 'La rangée de grands hôtels le long de la rade, face au Jet d’Eau. L’Hôtel Beau-Rivage, au Quai du Mont-Blanc 13, a été construit en 1865 ; l’ibis Genève Centre Nations, au Rue du Grand-Pré 33-35, se trouve du côté des organisations internationales, à quelques pas de Cornavin, de l’ONU et du centre de conférences CICG.',
        de: 'Die Reihe grosser Hotels entlang der Rade, dem Jet d’Eau gegenüber. Das Hotel Beau-Rivage am Quai du Mont-Blanc 13 wurde 1865 erbaut; das ibis Genève Centre Nations an der Rue du Grand-Pré 33-35 liegt auf der Seite der internationalen Organisationen, kurzer Weg zu Cornavin, zur UNO und zum Kongresszentrum CICG.',
      },
      points: [
        { en: 'The Beau-Rivage side has the harbour view and faces the Jet d’Eau', fr: 'Le côté Beau-Rivage offre la vue sur la rade et fait face au Jet d’Eau', de: 'Die Beau-Rivage-Seite bietet den Blick auf die Rade und liegt dem Jet d’Eau gegenüber' },
        { en: 'The Nations side sits closer to the international organisations than to the lake itself', fr: 'Le côté Nations se trouve plus près des organisations internationales que du lac lui-même', de: 'Die Nations-Seite liegt näher bei den internationalen Organisationen als beim See selbst' },
      ],
    },
  ],
  hotels: [
    {
      slug: 'ge-les-armures',
      name: 'Hotel Les Armures',
      url: 'https://www.lesarmures.ch/en/',
      sector: { en: 'Vieille Ville', fr: 'Vieille Ville', de: 'Vieille Ville' },
      facts: [
        { en: 'Rue du Puits-Saint-Pierre 1, in a 17th-century building', fr: 'Rue du Puits-Saint-Pierre 1, dans un bâtiment du XVIIe siècle', de: 'Rue du Puits-Saint-Pierre 1, in einem Gebäude aus dem 17. Jahrhundert' },
        { en: '32 rooms and suites, next to the Maison Tavel museum and Saint-Pierre Cathedral', fr: '32 chambres et suites, à côté du musée Maison Tavel et de la cathédrale Saint-Pierre', de: '32 Zimmer und Suiten, neben dem Museum Maison Tavel und der Kathedrale Saint-Pierre' },
      ],
    },
    {
      slug: 'ge-9hotel-paquis',
      name: '9Hotel Pâquis',
      url: 'https://9hotelpaquis.ch/',
      sector: { en: 'Pâquis, near the station', fr: 'Pâquis, près de la gare', de: 'Pâquis, nahe dem Bahnhof' },
      facts: [
        { en: 'Rue de Berne 31, 300 m from Cornavin station and 500 m from the lake', fr: 'Rue de Berne 31, à 300 m de la gare de Cornavin et 500 m du lac', de: 'Rue de Berne 31, 300 m vom Bahnhof Cornavin und 500 m vom See entfernt' },
        { en: '56 rooms in seven categories, with pool, sauna, jacuzzi and fitness room', fr: '56 chambres en sept catégories, avec piscine, sauna, jacuzzi et salle de fitness', de: '56 Zimmer in sieben Kategorien, mit Pool, Sauna, Jacuzzi und Fitnessraum' },
      ],
    },
    {
      slug: 'ge-ibis-centre-gare',
      name: 'ibis Genève Centre Gare',
      url: 'https://all.accor.com/hotel/2154/index.en.shtml',
      sector: { en: 'Pâquis, near the station', fr: 'Pâquis, près de la gare', de: 'Pâquis, nahe dem Bahnhof' },
      facts: [
        { en: 'Rue Voltaire 10, a 5-minute walk from Cornavin station, the city centre and the lake', fr: 'Rue Voltaire 10, à 5 minutes à pied de la gare de Cornavin, du centre-ville et du lac', de: 'Rue Voltaire 10, 5 Gehminuten vom Bahnhof Cornavin, der Innenstadt und dem See entfernt' },
        { en: '64 rooms', fr: '64 chambres', de: '64 Zimmer' },
      ],
    },
    {
      slug: 'ge-ibis-centre-nations',
      name: 'ibis Genève Centre Nations',
      url: 'https://all.accor.com/hotel/8069/index.en.shtml',
      sector: { en: 'Quai du Mont-Blanc, international side', fr: 'Quai du Mont-Blanc, côté international', de: 'Quai du Mont-Blanc, internationale Seite' },
      facts: [
        { en: 'Rue du Grand-Pré 33-35, a short walk from Cornavin, the UN and the CICG convention centre', fr: 'Rue du Grand-Pré 33-35, à quelques pas de Cornavin, de l’ONU et du centre de conférences CICG', de: 'Rue du Grand-Pré 33-35, kurzer Weg zu Cornavin, zur UNO und zum Kongresszentrum CICG' },
        { en: '216 rooms', fr: '216 chambres', de: '216 Zimmer' },
      ],
    },
    {
      slug: 'ge-beau-rivage',
      name: 'Hotel Beau-Rivage',
      url: 'https://www.beau-rivage.com/en/',
      sector: { en: 'Quai du Mont-Blanc, lakefront', fr: 'Quai du Mont-Blanc, au bord du lac', de: 'Quai du Mont-Blanc, am See' },
      facts: [
        { en: 'Quai du Mont-Blanc 13, built in 1865', fr: 'Quai du Mont-Blanc 13, construit en 1865', de: 'Quai du Mont-Blanc 13, erbaut 1865' },
        { en: 'Faces the Jet d’Eau across the harbour', fr: 'Fait face au Jet d’Eau, de l’autre côté de la rade', de: 'Blickt über die Rade hinweg auf den Jet d’Eau' },
      ],
    },
  ],
  hotelsNote: {
    en: 'Facts taken from each hotel’s own website on 16 September 2026. No ratings or reviews on this guide.',
    fr: 'Faits relevés sur le site de chaque hôtel le 16 septembre 2026. Aucune note ni aucun avis sur ce guide.',
    de: 'Fakten von der Website des jeweiligen Hotels, Stand 16. September 2026. Keine Bewertungen oder Rezensionen.',
  },
  practical: {
    title: { en: 'Airport, card, station', fr: 'Aéroport, carte, gare', de: 'Flughafen, Karte, Bahnhof' },
    items: [
      {
        title: { en: 'The Geneva Transport Card', fr: 'La carte de transport genevoise', de: 'Die Genfer Verkehrskarte' },
        text: {
          en: 'Free for every guest in approved accommodation: unlimited travel for the length of the stay on Unireso buses and trams, 2nd-class CFF trains within the zone, and the Mouettes Genevoises shuttle boats. It is sent by email up to 3 days before arrival, for use from the airport onward, and is personal and non-transferable.',
          fr: 'Gratuite pour chaque client d’un hébergement agréé : voyage illimité pendant toute la durée du séjour sur les bus et trams Unireso, les trains CFF de 2e classe dans la zone, et les Mouettes Genevoises. Elle est envoyée par courriel jusqu’à 3 jours avant l’arrivée, utilisable dès l’aéroport, et reste personnelle et incessible.',
          de: 'Kostenlos für jeden Gast einer anerkannten Unterkunft: unbegrenzte Fahrt während der gesamten Aufenthaltsdauer auf den Unireso-Bussen und -Trams, den SBB-Zügen 2. Klasse innerhalb der Zone, und den Mouettes Genevoises. Sie wird bis zu 3 Tage vor der Anreise per E-Mail verschickt, gültig bereits ab dem Flughafen, und ist persönlich und nicht übertragbar.',
        },
      },
      {
        title: { en: 'From the airport', fr: 'Depuis l’aéroport', de: 'Ab dem Flughafen' },
        text: {
          en: 'Geneva Airport has its own railway station beneath the terminal, a 5-minute walk from both Departures and Arrivals. Trains reach Cornavin in 7 minutes, with up to 7 an hour at peak times; a Unireso zone 10 ticket costs CHF 3, and a CHF 10 discount applies to any train ticket to or from the airport.',
          fr: 'L’aéroport de Genève possède sa propre gare sous le terminal, à 5 minutes à pied des niveaux Départs et Arrivées. Les trains atteignent Cornavin en 7 minutes, avec jusqu’à 7 trains par heure aux heures de pointe ; un billet Unireso zone 10 coûte 3 CHF, et une réduction de 10 CHF s’applique à tout billet de train depuis ou vers l’aéroport.',
          de: 'Der Flughafen Genf hat einen eigenen Bahnhof unter dem Terminal, 5 Gehminuten von Abflug- und Ankunftsebene entfernt. Die Züge erreichen Cornavin in 7 Minuten, mit bis zu 7 Zügen pro Stunde zu Spitzenzeiten; ein Unireso-Ticket der Zone 10 kostet CHF 3, und auf jedes Zugticket von oder zum Flughafen gibt es CHF 10 Rabatt.',
        },
      },
      {
        title: { en: 'Tourist information', fr: 'Information touristique', de: 'Touristeninformation' },
        text: {
          en: 'The tourist information point at Cornavin station is open Monday to Saturday 09:15-17:45 (from 10:00 on Thursdays) and Sunday 10:00-16:00.',
          fr: 'Le point d’information touristique de la gare de Cornavin est ouvert du lundi au samedi de 09h15 à 17h45 (dès 10h00 le jeudi) et le dimanche de 10h00 à 16h00.',
          de: 'Die Touristeninformation am Bahnhof Cornavin ist Montag bis Samstag von 09.15 bis 17.45 Uhr (donnerstags ab 10.00 Uhr) und Sonntag von 10.00 bis 16.00 Uhr geöffnet.',
        },
      },
      {
        title: { en: 'Parking', fr: 'Stationnement', de: 'Parkplatz' },
        text: {
          en: 'Unlike several of the car-free villages on this site, Geneva allows cars. The sources checked for this guide describe no dedicated visitor parking scheme, so arrange parking directly with your hotel.',
          fr: 'Contrairement à plusieurs villages sans voiture présentés sur ce site, Genève autorise les véhicules. Les sources consultées pour ce guide ne décrivent aucun dispositif de stationnement dédié aux visiteurs, à voir directement avec votre hôtel.',
          de: 'Anders als mehrere autofreie Dörfer auf dieser Seite lässt Genf Autos zu. Die für diesen Ratgeber geprüften Quellen beschreiben kein eigenes Parkangebot für Gäste, das direkt mit dem Hotel zu klären ist.',
        },
      },
    ],
  },
  seasons: {
    summer: {
      title: { en: 'Summer in Geneva', fr: 'L’été à Genève', de: 'Sommer in Genf' },
      base: {
        en: 'Longer opening hours take over at Saint-Pierre Cathedral’s towers, and the lakefront and the Parc des Bastions fill up while the Jet d’Eau runs, weather permitting.',
        fr: 'Des horaires d’ouverture prolongés s’appliquent aux tours de la cathédrale Saint-Pierre, et les quais ainsi que le parc des Bastions se remplissent tandis que le Jet d’Eau fonctionne, selon la météo.',
        de: 'An den Türmen der Kathedrale Saint-Pierre gelten längere Öffnungszeiten, und die Seepromenade sowie der Parc des Bastions füllen sich, während der Jet d’Eau wetterabhängig läuft.',
      },
      facts: [
        { value: '09:00-18:30', label: { en: 'Saint-Pierre Cathedral towers open April to September', fr: 'tours de la cathédrale Saint-Pierre ouvertes d’avril à septembre', de: 'Türme der Kathedrale Saint-Pierre von April bis September geöffnet' } },
        { value: 'CHF 7', label: { en: 'adult ticket to the towers, 157 steps to the panorama', fr: 'billet adulte pour les tours, 157 marches jusqu’au panorama', de: 'Erwachsenenticket für die Türme, 157 Stufen zum Panorama' } },
      ],
      note: {
        en: 'Sources: geneve.com, checked 16 September 2026.',
        fr: 'Sources : geneve.com, vérifiées le 16 septembre 2026.',
        de: 'Quellen: geneve.com, geprüft am 16. September 2026.',
      },
    },
    winter: {
      title: { en: 'Winter in Geneva', fr: 'L’hiver à Genève', de: 'Winter in Genf' },
      base: {
        en: 'The cathedral towers keep shorter hours, and the Course de l’Escalade fills the Old Town with a footrace and a festival weekend commemorating the failed 1602 surprise attack on the city.',
        fr: 'Les tours de la cathédrale gardent des horaires plus courts, et la Course de l’Escalade envahit la Vieille Ville avec une course à pied et un week-end festif commémorant l’attaque surprise manquée de 1602 contre la ville.',
        de: 'Die Kathedraltürme haben kürzere Öffnungszeiten, und die Course de l’Escalade füllt die Altstadt mit einem Volkslauf und einem Festwochenende zum Gedenken an den gescheiterten Überraschungsangriff von 1602 auf die Stadt.',
      },
      facts: [
        { value: 'Oct-Mar', label: { en: 'Saint-Pierre Cathedral towers open 10:00-17:30, shorter winter hours', fr: 'tours de la cathédrale Saint-Pierre ouvertes de 10h00 à 17h30, horaires d’hiver plus courts', de: 'Türme der Kathedrale Saint-Pierre von 10.00 bis 17.30 Uhr geöffnet, kürzere Winterzeiten' } },
        { value: '5-6 Dec 2026', label: { en: 'Course de l’Escalade through the Old Town, 48th edition', fr: 'Course de l’Escalade à travers la Vieille Ville, 48e édition', de: 'Course de l’Escalade durch die Altstadt, 48. Austragung' } },
      ],
      note: {
        en: 'Sources: geneve.ch, checked 16 September 2026.',
        fr: 'Sources : geneve.ch, vérifiées le 16 septembre 2026.',
        de: 'Quellen: geneve.ch, geprüft am 16. September 2026.',
      },
    },
  },
  doing: {
    title: { en: 'What to do in Geneva', fr: 'Que faire à Genève', de: 'Was man in Genf unternimmt' },
    intro: {
      en: 'Not a trail guide: named places from the City of Geneva and Genève Tourisme, checked on their own pages.',
      fr: 'Pas un guide de randonnée : des lieux nommés, repris de la Ville de Genève et de Genève Tourisme, vérifiés sur leurs propres pages.',
      de: 'Kein Wanderführer: benannte Orte von der Stadt Genf und Genève Tourisme, dort geprüft.',
    },
    groups: [
      {
        kind: 'walk',
        title: { en: 'Two short walks', fr: 'Deux courtes promenades', de: 'Zwei kurze Spaziergänge' },
        items: [
          {
            name: { en: 'Vieille Ville and Parc des Bastions', fr: 'La Vieille Ville et le parc des Bastions', de: 'Altstadt und Parc des Bastions' },
            meta: { en: 'open 24 hours · created 1726, redesigned 1849', fr: 'ouvert 24h/24 · créé en 1726, réaménagé en 1849', de: '24 Stunden geöffnet · angelegt 1726, umgestaltet 1849' },
            text: {
              en: 'The Old Town circuit runs past Saint-Pierre Cathedral and the Mur des Réformateurs, in the park since 1917, through Geneva’s largest and oldest city-centre park. It holds over 200 tree species, giant outdoor chessboards and a music kiosk.',
              fr: 'Le circuit de la Vieille Ville passe devant la cathédrale Saint-Pierre et le Mur des Réformateurs, présent dans le parc depuis 1917, à travers le plus grand et le plus ancien parc du centre-ville de Genève. Il compte plus de 200 espèces d’arbres, des échiquiers géants en plein air et un kiosque à musique.',
              de: 'Der Altstadtrundgang führt an der Kathedrale Saint-Pierre und der Mur des Réformateurs vorbei, seit 1917 im Park, durch Genfs grössten und ältesten Innenstadtpark. Er zählt über 200 Baumarten, riesige Schachbretter im Freien und einen Musikpavillon.',
            },
          },
          {
            name: { en: 'Quai du Mont-Blanc to the Jet d’Eau', fr: 'Du Quai du Mont-Blanc au Jet d’Eau', de: 'Vom Quai du Mont-Blanc zum Jet d’Eau' },
            meta: { en: 'along the harbour, the Rade', fr: 'le long de la rade', de: 'entlang der Rade' },
            text: {
              en: 'A lakefront promenade from the Beau-Rivage hotel row along the harbour to the Jet d’Eau on the Quai Gustave-Ador.',
              fr: 'Une promenade au bord du lac, depuis la rangée d’hôtels du Beau-Rivage le long de la rade jusqu’au Jet d’Eau, sur le Quai Gustave-Ador.',
              de: 'Eine Uferpromenade von der Hotelreihe des Beau-Rivage entlang der Rade bis zum Jet d’Eau am Quai Gustave-Ador.',
            },
          },
        ],
      },
      {
        kind: 'local',
        title: { en: 'A fountain and a tower', fr: 'Un jet d’eau et une tour', de: 'Eine Fontäne und ein Turm' },
        items: [
          {
            name: 'Jet d’Eau',
            meta: { en: '140 m · weather-dependent', fr: '140 m · selon la météo', de: '140 m · wetterabhängig' },
            text: {
              en: 'Two pump-motor groups of nearly 1000 kW combined project half a cubic metre of water a second, 500 litres, at 200 km/h. Created in 1886 as a pressure-release valve, moved to its current harbour site in 1891, illuminated at night since 1930.',
              fr: 'Deux groupes de pompes de près de 1000 kW au total projettent un demi-mètre cube d’eau par seconde, soit 500 litres, à 200 km/h. Créé en 1886 comme soupape de décharge industrielle, déplacé sur son site actuel de la rade en 1891, illuminé la nuit depuis 1930.',
              de: 'Zwei Pumpenaggregate mit zusammen fast 1000 kW stossen pro Sekunde einen halben Kubikmeter Wasser aus, 500 Liter, mit 200 km/h. 1886 als industrielles Überdruckventil geschaffen, 1891 an den heutigen Standort an der Rade verlegt, seit 1930 nachts beleuchtet.',
            },
          },
          {
            name: { en: 'Towers of Saint-Pierre Cathedral', fr: 'Tours de la cathédrale Saint-Pierre', de: 'Türme der Kathedrale Saint-Pierre' },
            meta: { en: '157 steps · CHF 7 adult, CHF 5 senior, CHF 4 youth', fr: '157 marches · 7 CHF adulte, 5 CHF senior, 4 CHF jeune', de: '157 Stufen · CHF 7 Erwachsene, CHF 5 Senioren, CHF 4 Jugendliche' },
            text: {
              en: '157 steps lead to a 360-degree panorama over the city and the lake, open 10:00-17:30 October to March and 09:00-18:30 April to September. A combined ticket with the archaeological site costs CHF 12.',
              fr: '157 marches mènent à un panorama à 360 degrés sur la ville et le lac, ouvert de 10h00 à 17h30 d’octobre à mars et de 09h00 à 18h30 d’avril à septembre. Un billet combiné avec le site archéologique coûte 12 CHF.',
              de: '157 Stufen führen zu einem 360-Grad-Panorama über Stadt und See, geöffnet von 10.00 bis 17.30 Uhr von Oktober bis März und von 09.00 bis 18.30 Uhr von April bis September. Ein Kombiticket mit der archäologischen Stätte kostet CHF 12.',
            },
          },
        ],
      },
      {
        kind: 'table',
        title: { en: 'Where to eat', fr: 'Où manger', de: 'Wo essen' },
        items: [
          {
            name: 'Restaurant de la Plage des Eaux-Vives',
            meta: { en: '900 m² lakeside terrace', fr: 'terrasse de 900 m² au bord du lac', de: '900 m² grosse Seeterrasse' },
            text: {
              en: 'Listed by Genève Tourisme among the city’s lakeview restaurants, with a view of the Jet d’Eau, indoor dining and beach refreshment options.',
              fr: 'Répertorié par Genève Tourisme parmi les restaurants de la ville avec vue sur le lac, avec vue sur le Jet d’Eau, restauration intérieure et options de restauration de plage.',
              de: 'Von Genève Tourisme unter den Restaurants der Stadt mit Seeblick gelistet, mit Blick auf den Jet d’Eau, Innengastronomie und Verpflegungsmöglichkeiten am Strand.',
            },
          },
          {
            name: 'Bains des Pâquis',
            meta: { en: 'right-bank lake baths', fr: 'bains du lac, rive droite', de: 'Seebad am rechten Ufer' },
            text: {
              en: 'A right-bank lake bath with a beach, restaurant, sauna and hammam, described by Genève Tourisme as an established Geneva institution.',
              fr: 'Un bain du lac sur la rive droite avec plage, restaurant, sauna et hammam, décrit par Genève Tourisme comme une institution genevoise bien établie.',
              de: 'Ein Seebad am rechten Ufer mit Strand, Restaurant, Sauna und Hamam, von Genève Tourisme als feste Genfer Institution beschrieben.',
            },
          },
        ],
      },
    ],
    note: {
      en: 'Times, prices and figures come from the City of Geneva and Genève Tourisme, checked on 16 September 2026. We publish no ratings and no route descriptions: check conditions on the spot before you set off.',
      fr: 'Horaires, tarifs et chiffres proviennent de la Ville de Genève et de Genève Tourisme, vérifiés le 16 septembre 2026. Nous ne publions ni notes ni descriptifs d’itinéraires : renseignez-vous sur place avant de partir.',
      de: 'Zeiten, Preise und Zahlen stammen von der Stadt Genf und Genève Tourisme, geprüft am 16. September 2026. Wir veröffentlichen keine Bewertungen und keine Routenbeschreibungen: Erkundigen Sie sich vor Ort, bevor Sie losgehen.',
    },
  },
  faq: [
    {
      q: { en: 'How fast is the train from Geneva Airport to the city centre?', fr: 'Le train entre l’aéroport de Genève et le centre-ville est-il rapide ?', de: 'Wie schnell ist der Zug vom Flughafen Genf ins Stadtzentrum?' },
      a: {
        en: '7 minutes to Cornavin station, with up to 7 trains an hour at peak times; the station sits directly beneath the airport terminal.',
        fr: '7 minutes jusqu’à la gare de Cornavin, avec jusqu’à 7 trains par heure aux heures de pointe ; la gare se trouve directement sous le terminal de l’aéroport.',
        de: '7 Minuten bis zum Bahnhof Cornavin, mit bis zu 7 Zügen pro Stunde zu Spitzenzeiten; der Bahnhof liegt direkt unter dem Flughafenterminal.',
      },
    },
    {
      q: { en: 'Do hotel guests get free public transport in Geneva?', fr: 'Les clients d’hôtel bénéficient-ils des transports publics gratuits à Genève ?', de: 'Erhalten Hotelgäste in Genf kostenlose öffentliche Verkehrsmittel?' },
      a: {
        en: 'Yes. Every guest in approved accommodation receives a free Geneva Transport Card by email before arrival, covering Unireso buses and trams, 2nd-class CFF trains in the zone and the Mouettes Genevoises boats for the whole stay, at no cost to the guest or the accommodation.',
        fr: 'Oui. Chaque client d’un hébergement agréé reçoit par courriel, avant son arrivée, une carte de transport genevoise gratuite, couvrant bus et trams Unireso, trains CFF de 2e classe dans la zone et les Mouettes Genevoises pour toute la durée du séjour, sans frais pour le client ni pour l’hébergement.',
        de: 'Ja. Jeder Gast einer anerkannten Unterkunft erhält vor der Anreise per E-Mail eine kostenlose Genfer Verkehrskarte, die Unireso-Busse und -Trams, SBB-Züge 2. Klasse in der Zone und die Mouettes Genevoises für die ganze Aufenthaltsdauer abdeckt, ohne Kosten für Gast oder Unterkunft.',
      },
    },
    {
      q: { en: 'Is the Jet d’Eau always running?', fr: 'Le Jet d’Eau fonctionne-t-il toujours ?', de: 'Läuft der Jet d’Eau immer?' },
      a: {
        en: 'No, it is weather-dependent: wind and cold can shut it down. When running it reaches 140 m, projecting 500 litres of water a second at 200 km/h.',
        fr: 'Non, il dépend de la météo : le vent et le froid peuvent l’arrêter. En fonctionnement, il atteint 140 m de hauteur, projetant 500 litres d’eau par seconde à 200 km/h.',
        de: 'Nein, er ist wetterabhängig: Wind und Kälte können ihn abschalten. Im Betrieb erreicht er 140 m Höhe und stösst 500 Liter Wasser pro Sekunde mit 200 km/h aus.',
      },
    },
    {
      q: { en: 'Are Lake Geneva boat cruises covered by the Swiss Travel Pass?', fr: 'Les croisières sur le lac Léman sont-elles couvertes par le Swiss Travel Pass ?', de: 'Sind Schifffahrten auf dem Genfersee vom Swiss Travel Pass gedeckt?' },
      a: {
        en: 'Yes, on all regular CGN cruises except special events, according to CGN’s own FAQ, including routes to French lakeside towns such as Evian-les-Bains and Yvoire.',
        fr: 'Oui, sur toutes les croisières régulières de la CGN à l’exception des événements spéciaux, selon la FAQ de la CGN elle-même, y compris les liaisons vers des villes françaises du lac comme Évian-les-Bains et Yvoire.',
        de: 'Ja, auf allen regulären CGN-Kreuzfahrten ausser Sonderveranstaltungen, laut der eigenen FAQ der CGN, einschliesslich der Verbindungen zu französischen Seeorten wie Évian-les-Bains und Yvoire.',
      },
    },
    {
      q: { en: 'What is the Escalade?', fr: 'Qu’est-ce que l’Escalade ?', de: 'Was ist die Escalade?' },
      a: {
        en: 'A December festival and footrace through the Old Town commemorating the failed 1602 surprise attack on Geneva; the 2026 race runs 5-6 December, with the wider festival weekend 11-13 December.',
        fr: 'Un festival de décembre et une course à pied à travers la Vieille Ville commémorant l’attaque surprise manquée de 1602 contre Genève ; la course 2026 se déroule les 5 et 6 décembre, avec le week-end festif élargi du 11 au 13 décembre.',
        de: 'Ein Dezemberfest und Volkslauf durch die Altstadt zum Gedenken an den gescheiterten Überraschungsangriff von 1602 auf Genf; der Lauf 2026 findet am 5. und 6. Dezember statt, das grössere Festwochenende vom 11. bis 13. Dezember.',
      },
    },
  ],
  neighbours: ['lausanne', 'montreux', 'vevey', 'villars'],
}
