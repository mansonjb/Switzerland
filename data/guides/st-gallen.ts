import type { DestinationGuide } from '../types'

// Sources in data/SOURCES-st-gallen.md (checked 16/09/2026). No number without a source.
export const stGallen: DestinationGuide = {
  slug: 'st-gallen',
  stamp: 'generic',
  updated: '2026-09-16',
  meta: {
    title: { en: 'Where to stay in St. Gallen: Abbey, station, OLMA', fr: 'Où dormir à Saint-Gall : abbaye, gare, OLMA', de: 'Wo übernachten in St. Gallen: Stiftsbezirk, Bahnhof, OLMA' },
    description: {
      en: 'St. Gallen area by area: the Abbey District and its 111 bay windows, the Bahnhofplatz station quarter, and the OLMA and university side. Hotels with real addresses, the Abbey Library, and the free Mobility Ticket.',
      fr: 'Saint-Gall secteur par secteur : le quartier de l’abbaye et ses 111 encorbellements, le quartier de la gare autour du Bahnhofplatz, et le côté OLMA et université. Hôtels avec adresses réelles, la bibliothèque de l’abbaye, et le billet de mobilité gratuit.',
      de: 'St. Gallen Ortsteil für Ortsteil: der Stiftsbezirk mit seinen 111 Erkern, das Bahnhofsquartier am Bahnhofplatz, und die Seite von OLMA und Universität. Hotels mit echten Adressen, die Stiftsbibliothek, und das kostenlose Mobility Ticket.',
    },
  },
  eyebrow: { en: 'Eastern Switzerland · St. Gallen', fr: 'Suisse orientale · Saint-Gall', de: 'Ostschweiz · St. Gallen' },
  title: { en: 'Where to stay in St. Gallen', fr: 'Où dormir à Saint-Gall', de: 'Wo übernachten in St. Gallen' },
  intro: {
    en: 'A textile-merchant city at 669 m, where the Abbey District, a UNESCO World Heritage site since 1983, sits inside the medieval old town, itself ringed by 111 carved bay windows. The Abbey Library, a Rococo hall built 1758 to 1767 by architect Peter Thumb, holds around 170,000 books, including over 400 volumes more than 1000 years old. The whole district is a five-minute walk from the main train station.',
    fr: 'Une ville de marchands textiles à 669 m d’altitude, où le quartier de l’abbaye, classé au patrimoine mondial de l’UNESCO depuis 1983, se trouve au coeur de la vieille ville médiévale, elle-même ceinturée de 111 encorbellements sculptés. La bibliothèque de l’abbaye, une salle rococo construite de 1758 à 1767 par l’architecte Peter Thumb, compte environ 170 000 livres, dont plus de 400 volumes vieux de plus de 1000 ans. L’ensemble du quartier se trouve à cinq minutes à pied de la gare principale.',
    de: 'Eine Textilkaufmannsstadt auf 669 m, wo der Stiftsbezirk, seit 1983 UNESCO-Weltkulturerbe, mitten in der mittelalterlichen Altstadt liegt, die ihrerseits von 111 geschnitzten Erkern umringt wird. Die Stiftsbibliothek, ein Rokokosaal, 1758 bis 1767 vom Architekten Peter Thumb erbaut, beherbergt rund 170 000 Bücher, darunter über 400 Bände, die mehr als 1000 Jahre alt sind. Der ganze Bezirk liegt fünf Gehminuten vom Hauptbahnhof entfernt.',
  },
  quickAnswer: {
    en: 'Stay in St. Gallen for a Baroque Abbey Library holding 1000-year-old manuscripts and a free transport ticket covering the whole region out to Lake Constance. For lake and river baths you can swim in for free, stay in Zurich instead.',
    fr: 'Dormez à Saint-Gall pour une bibliothèque baroque de l’abbaye abritant des manuscrits vieux de 1000 ans, et un billet de transport gratuit couvrant toute la région jusqu’au lac de Constance. Pour des bains de lac et de rivière où l’on peut nager gratuitement, dormez plutôt à Zurich.',
    de: 'Übernachten Sie in St. Gallen für eine barocke Stiftsbibliothek mit 1000 Jahre alten Handschriften und ein kostenloses Verkehrsticket, das die ganze Region bis zum Bodensee abdeckt. Für See- und Flussbäder, in denen man gratis schwimmen kann, übernachten Sie stattdessen in Zürich.',
  },
  snapshot: {
    why: {
      en: 'Participating hotels give every guest the Mobility Ticket St.Gallen-Bodensee, free public transport from arrival to departure across the city and out to Lake Constance.',
      fr: 'Les hôtels participants offrent à chaque client le Mobility Ticket St.Gallen-Bodensee, transports publics gratuits de l’arrivée au départ, dans la ville et jusqu’au lac de Constance.',
      de: 'Teilnehmende Hotels geben jedem Gast das Mobility Ticket St.Gallen-Bodensee, kostenloser öffentlicher Verkehr von der Ankunft bis zur Abreise, in der Stadt und bis zum Bodensee.',
    },
    where: {
      en: 'In the Abbey District and Old Town for the cathedral and the bay windows, around Bahnhofplatz for the shortest walk to the trains, or on the OLMA and university side for the exhibition grounds and Drei Weieren.',
      fr: 'Dans le quartier de l’abbaye et la vieille ville pour la cathédrale et les encorbellements, autour du Bahnhofplatz pour la marche la plus courte vers les trains, ou du côté d’OLMA et de l’université pour le parc des expositions et les Drei Weieren.',
      de: 'Im Stiftsbezirk und der Altstadt für Kathedrale und Erker, rund um den Bahnhofplatz für den kürzesten Weg zu den Zügen, oder auf der Seite von OLMA und Universität für das Messegelände und die Drei Weieren.',
    },
    watch: {
      en: 'The Abbey Library closes for about three weeks each November or December, with no exact 2026 dates published, so check before planning a visit around it.',
      fr: 'La bibliothèque de l’abbaye ferme environ trois semaines chaque novembre ou décembre, sans dates exactes publiées pour 2026 : à vérifier avant d’organiser une visite autour d’elle.',
      de: 'Die Stiftsbibliothek schliesst jedes Jahr im November oder Dezember für etwa drei Wochen, ohne veröffentlichte genaue Daten für 2026: vor der Planung eines Besuchs prüfen.',
    },
  },
  stats: [
    { value: '111', label: { en: 'carved bay windows (Erker) in the old town', fr: 'encorbellements sculptés dans la vieille ville', de: 'geschnitzte Erker in der Altstadt' } },
    { value: '170,000', label: { en: 'books in the Abbey Library, inside the UNESCO Abbey District', fr: 'livres dans la bibliothèque de l’abbaye, au coeur du quartier UNESCO', de: 'Bücher in der Stiftsbibliothek, im UNESCO-Stiftsbezirk' } },
    { value: '1758-1767', label: { en: 'the years the Rococo Abbey Library hall was built, by architect Peter Thumb', fr: 'les années de construction de la salle rococo de la bibliothèque de l’abbaye, par l’architecte Peter Thumb', de: 'die Jahre, in denen der Rokokosaal der Stiftsbibliothek vom Architekten Peter Thumb erbaut wurde' } },
  ],
  hero: {
    photo: '/photos/st-gallen.jpg',
    caption: { en: 'St. Gallen seen from the Drei Weieren, the city’s ponds above the old town.', fr: 'Saint-Gall vue depuis les Drei Weieren, les étangs de la ville au-dessus de la vieille ville.', de: 'St. Gallen, von den Drei Weieren über der Altstadt aus gesehen.' },
    credit: { author: 'albinfo', license: 'CC BY-SA 3.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/', source: 'https://commons.wikimedia.org/wiki/File:St.Gallen_vonDreiweieren_09.jpg' },
  },
  sectors: [
    {
      title: { en: 'The Abbey District and Old Town', fr: 'Le quartier de l’abbaye et la vieille ville', de: 'Stiftsbezirk und Altstadt' },
      walk: { en: 'Berneggstrasse and Webergasse', fr: 'Berneggstrasse et Webergasse', de: 'Berneggstrasse und Webergasse' },
      text: {
        en: 'The cathedral, the Abbey Library and the 111 bay windows are all here. Einstein St.Gallen, at Berneggstrasse 2, is about 3 minutes from the train station and next to the Abbey District; Hotel Dom, at Webergasse 22, describes itself as being in the middle of the monastery quarter.',
        fr: 'La cathédrale, la bibliothèque de l’abbaye et les 111 encorbellements se trouvent tous ici. L’Einstein St.Gallen, au Berneggstrasse 2, est à environ 3 minutes de la gare et jouxte le quartier de l’abbaye ; l’Hôtel Dom, au Webergasse 22, se décrit comme au coeur du quartier du couvent.',
        de: 'Kathedrale, Stiftsbibliothek und die 111 Erker liegen alle hier. Das Einstein St.Gallen an der Berneggstrasse 2 ist rund 3 Minuten vom Bahnhof entfernt und grenzt an den Stiftsbezirk; das Hotel Dom an der Webergasse 22 beschreibt sich selbst als mitten im Klosterquartier.',
      },
      points: [
        { en: 'About 3 minutes on foot from the train station to Einstein St.Gallen, next to the Abbey District', fr: 'Environ 3 minutes à pied entre la gare et l’Einstein St.Gallen, qui jouxte le quartier de l’abbaye', de: 'Rund 3 Gehminuten vom Bahnhof zum Einstein St.Gallen, das an den Stiftsbezirk grenzt' },
        { en: 'Hotel Dom sits in the middle of the monastery quarter', fr: 'L’Hôtel Dom se trouve au coeur du quartier du couvent', de: 'Das Hotel Dom liegt mitten im Klosterquartier' },
      ],
    },
    {
      title: { en: 'The station quarter, Bahnhofplatz', fr: 'Le quartier de la gare, Bahnhofplatz', de: 'Bahnhofsquartier, Bahnhofplatz' },
      walk: { en: 'Bahnhofplatz, in the pedestrian zone', fr: 'Bahnhofplatz, en zone piétonne', de: 'Bahnhofplatz, in der Fussgängerzone' },
      text: {
        en: 'Hotel Metropol, at Bahnhofplatz 3, stands directly across from the main station and is the only 3-star hotel in the pedestrian zone in the heart of town. Hotel Walhalla, a few steps from the station, first opened as a hotel in 1887.',
        fr: 'L’Hôtel Metropol, au Bahnhofplatz 3, se dresse juste en face de la gare centrale et reste le seul hôtel 3 étoiles de la zone piétonne, au coeur de la ville. L’Hôtel Walhalla, à quelques pas de la gare, a ouvert ses portes en tant qu’hôtel en 1887.',
        de: 'Das Hotel Metropol am Bahnhofplatz 3 steht direkt gegenüber dem Hauptbahnhof und ist das einzige 3-Sterne-Hotel in der Fussgängerzone im Herzen der Stadt. Das Hotel Walhalla, wenige Schritte vom Bahnhof entfernt, eröffnete 1887 erstmals als Hotel.',
      },
      points: [
        { en: 'Hotel Metropol is the only 3-star hotel in the pedestrian zone in the heart of St. Gallen', fr: 'L’Hôtel Metropol est le seul hôtel 3 étoiles de la zone piétonne, au coeur de Saint-Gall', de: 'Das Hotel Metropol ist das einzige 3-Sterne-Hotel in der Fussgängerzone im Herzen von St. Gallen' },
        { en: 'Hotel Walhalla has operated since 1887, a few steps from the station', fr: 'L’Hôtel Walhalla fonctionne depuis 1887, à quelques pas de la gare', de: 'Das Hotel Walhalla besteht seit 1887, wenige Schritte vom Bahnhof entfernt' },
      ],
    },
    {
      title: { en: 'OLMA, the university and Drei Weieren', fr: 'OLMA, l’université et les Drei Weieren', de: 'OLMA, Universität und Drei Weieren' },
      walk: { en: 'St Jakob-Strasse and Jüchstrasse', fr: 'St Jakob-Strasse et Jüchstrasse', de: 'St Jakob-Strasse und Jüchstrasse' },
      text: {
        en: 'Radisson Blu Hotel St. Gallen, at St Jakob-Strasse 55, stands directly across from the OLMA exhibition grounds, 0.39 km from the University of St. Gallen and 1.80 km from Drei Weieren. St. Gallen Youth Hostel, further out at Jüchstrasse 25, looks as far as Lake Constance, with Drei Weieren 18 minutes away on foot.',
        fr: 'Le Radisson Blu Hotel St. Gallen, au St Jakob-Strasse 55, se dresse juste en face du parc des expositions OLMA, à 0,39 km de l’Université de Saint-Gall et 1,80 km des Drei Weieren. L’auberge de jeunesse de Saint-Gall, plus excentrée au Jüchstrasse 25, offre une vue jusqu’au lac de Constance, avec les Drei Weieren à 18 minutes à pied.',
        de: 'Das Radisson Blu Hotel St. Gallen an der St Jakob-Strasse 55 steht direkt gegenüber dem OLMA-Messegelände, 0,39 km von der Universität St. Gallen und 1,80 km von den Drei Weieren entfernt. Die Jugendherberge St. Gallen, weiter draussen an der Jüchstrasse 25, blickt bis zum Bodensee, die Drei Weieren liegen 18 Gehminuten entfernt.',
      },
      points: [
        { en: 'Radisson Blu sits directly opposite the OLMA exhibition grounds', fr: 'Le Radisson Blu se trouve juste en face du parc des expositions OLMA', de: 'Das Radisson Blu liegt direkt gegenüber dem OLMA-Messegelände' },
        { en: 'The Youth Hostel is 18 minutes on foot from Drei Weieren, with a view as far as Lake Constance', fr: 'L’auberge de jeunesse est à 18 minutes à pied des Drei Weieren, avec une vue jusqu’au lac de Constance', de: 'Die Jugendherberge liegt 18 Gehminuten von den Drei Weieren entfernt, mit Blick bis zum Bodensee' },
      ],
    },
  ],
  hotels: [
    {
      slug: 'sg-einstein',
      name: 'Einstein St.Gallen',
      url: 'https://einstein.ch/en/',
      sector: { en: 'Berneggstrasse, Abbey District edge', fr: 'Berneggstrasse, en bordure du quartier de l’abbaye', de: 'Berneggstrasse, am Rand des Stiftsbezirks' },
      facts: [
        { en: 'Berneggstrasse 2, about 3 minutes’ walk from the train station, next to the monastery district', fr: 'Berneggstrasse 2, à environ 3 minutes à pied de la gare, à côté du quartier du couvent', de: 'Berneggstrasse 2, rund 3 Gehminuten vom Bahnhof, neben dem Klosterbezirk' },
        { en: 'Michelin-starred restaurant Einstein Gourmet, with 2 stars and 18 Gault Millau points', fr: 'Le restaurant étoilé Einstein Gourmet, avec 2 étoiles Michelin et 18 points Gault Millau', de: 'Das Michelin-Sterne-Restaurant Einstein Gourmet, mit 2 Sternen und 18 Gault-Millau-Punkten' },
      ],
    },
    {
      slug: 'sg-dom',
      name: 'Hotel Dom',
      url: 'https://hoteldom.ch/en/',
      sector: { en: 'Webergasse, monastery quarter', fr: 'Webergasse, quartier du couvent', de: 'Webergasse, Klosterquartier' },
      facts: [
        { en: 'Webergasse 22, its attic reconstruction completed in 2019', fr: 'Webergasse 22, dont la reconstruction des combles a été achevée en 2019', de: 'Webergasse 22, Dachausbau 2019 abgeschlossen' },
        { en: 'Run under Stiftung Förderraum, with around 55 people with increased support needs training or working at the hotel', fr: 'Géré par la Stiftung Förderraum, avec environ 55 personnes ayant des besoins de soutien accrus en formation ou en poste à l’hôtel', de: 'Geführt unter der Stiftung Förderraum, mit rund 55 Menschen mit erhöhtem Unterstützungsbedarf, die im Hotel ausgebildet werden oder arbeiten' },
      ],
    },
    {
      slug: 'sg-metropol',
      name: 'Hotel Metropol',
      url: 'https://www.hotel-metropol.ch/',
      sector: { en: 'Bahnhofplatz, opposite the station', fr: 'Bahnhofplatz, en face de la gare', de: 'Bahnhofplatz, gegenüber dem Bahnhof' },
      facts: [
        { en: 'Bahnhofplatz 3, the only 3-star hotel in the pedestrian zone in the heart of St. Gallen', fr: 'Bahnhofplatz 3, seul hôtel 3 étoiles de la zone piétonne au coeur de Saint-Gall', de: 'Bahnhofplatz 3, einziges 3-Sterne-Hotel in der Fussgängerzone im Herzen von St. Gallen' },
        { en: '32 rooms, restaurant O’Premier with views over the station square', fr: '32 chambres, restaurant O’Premier avec vue sur la place de la gare', de: '32 Zimmer, Restaurant O’Premier mit Blick über den Bahnhofplatz' },
      ],
    },
    {
      slug: 'sg-walhalla',
      name: 'Hotel Walhalla',
      url: 'https://hotelwalhalla.ch/',
      sector: { en: 'A few steps from the station', fr: 'À quelques pas de la gare', de: 'Wenige Schritte vom Bahnhof' },
      facts: [
        { en: 'First opened as a hotel in 1887, 100 rooms', fr: 'Ouvert pour la première fois comme hôtel en 1887, 100 chambres', de: 'Erstmals 1887 als Hotel eröffnet, 100 Zimmer' },
        { en: 'Brasserie Walhalla and the Walhalla Bar, six conference rooms', fr: 'La Brasserie Walhalla et le Walhalla Bar, six salles de conférence', de: 'Brasserie Walhalla und Walhalla Bar, sechs Konferenzräume' },
      ],
    },
    {
      slug: 'sg-radisson-blu',
      name: 'Radisson Blu Hotel, St. Gallen',
      url: 'https://www.radissonhotels.com/en-us/hotels/radisson-blu-st-gallen',
      sector: { en: 'St Jakob-Strasse, opposite OLMA', fr: 'St Jakob-Strasse, en face d’OLMA', de: 'St Jakob-Strasse, gegenüber OLMA' },
      facts: [
        { en: 'St Jakob-Strasse 55, opposite the OLMA exhibition grounds, Green Key certified', fr: 'St Jakob-Strasse 55, en face du parc des expositions OLMA, certifié Green Key', de: 'St Jakob-Strasse 55, gegenüber dem OLMA-Messegelände, Green-Key-zertifiziert' },
        { en: '0.39 km from the University of St. Gallen, 1.80 km from Drei Weieren, free public transport for hotel guests', fr: 'À 0,39 km de l’Université de Saint-Gall, 1,80 km des Drei Weieren, transports publics gratuits pour les clients de l’hôtel', de: '0,39 km von der Universität St. Gallen, 1,80 km von den Drei Weieren, kostenloser öffentlicher Verkehr für Hotelgäste' },
      ],
    },
    {
      slug: 'sg-youth-hostel',
      name: 'St. Gallen Youth Hostel',
      url: 'https://www.youthhostel.ch/en/hostels/st-gallen-youth-hostel',
      sector: { en: 'Jüchstrasse', fr: 'Jüchstrasse', de: 'Jüchstrasse' },
      facts: [
        { en: 'Jüchstrasse 25, 20 rooms and 87 beds, 4 to 6 bed dorms plus double and twin rooms', fr: 'Jüchstrasse 25, 20 chambres et 87 lits, dortoirs de 4 à 6 lits ainsi que chambres doubles et twin', de: 'Jüchstrasse 25, 20 Zimmer und 87 Betten, 4- bis 6-Bett-Zimmer sowie Doppel- und Zweibettzimmer' },
        { en: 'A 10-minute walk to the centre, Drei Weieren 18 minutes on foot, barrier-free access', fr: 'À 10 minutes à pied du centre, les Drei Weieren à 18 minutes à pied, accès sans obstacle', de: '10 Gehminuten zum Zentrum, Drei Weieren 18 Gehminuten entfernt, barrierefreier Zugang' },
      ],
    },
  ],
  hotelsNote: {
    en: 'Facts taken from each hotel’s own website on 16 September 2026. No ratings or reviews on this guide.',
    fr: 'Faits relevés sur le site de chaque hôtel le 16 septembre 2026. Aucune note ni aucun avis sur ce guide.',
    de: 'Fakten von der Website des jeweiligen Hotels, Stand 16. September 2026. Keine Bewertungen oder Rezensionen.',
  },
  practical: {
    title: { en: 'Ticket, trains, buses', fr: 'Billet, trains, bus', de: 'Ticket, Züge, Busse' },
    items: [
      {
        title: { en: 'The Mobility Ticket St.Gallen-Bodensee', fr: 'Le Mobility Ticket St.Gallen-Bodensee', de: 'Das Mobility Ticket St.Gallen-Bodensee' },
        text: {
          en: 'Given by participating accommodation providers, this guest card covers free public transport in OSTWIND fare zones 210, 211 and 231, the city and the region out to Lake Constance, valid from the day of arrival to the day of departure.',
          fr: 'Remise par les hébergements participants, cette carte d’hôte couvre les transports publics gratuits dans les zones tarifaires OSTWIND 210, 211 et 231, la ville et la région jusqu’au lac de Constance, valable du jour de l’arrivée au jour du départ.',
          de: 'Von teilnehmenden Unterkünften ausgegeben, deckt diese Gästekarte den kostenlosen öffentlichen Verkehr in den OSTWIND-Tarifzonen 210, 211 und 231 ab, in der Stadt und der Region bis zum Bodensee, gültig vom Anreise- bis zum Abreisetag.',
        },
      },
      {
        title: { en: 'From Zurich', fr: 'Depuis Zurich', de: 'Ab Zürich' },
        text: {
          en: 'Direct trains from Zurich HB take around an hour. From Zurich Airport, the route is an IC1 train to St. Gallen then bus 6 to Olma Messen, about an hour in total; by car it is around 80 km, about an hour via the A1.',
          fr: 'Les trains directs depuis Zurich HB mettent environ une heure. Depuis l’aéroport de Zurich, le trajet se fait en train IC1 jusqu’à Saint-Gall puis en bus 6 jusqu’à Olma Messen, environ une heure au total ; en voiture, comptez environ 80 km, soit environ une heure par l’A1.',
          de: 'Direkte Züge ab Zürich HB brauchen rund eine Stunde. Ab dem Flughafen Zürich führt die Strecke mit dem IC1 nach St. Gallen und dann mit Bus 6 zu den Olma Messen, insgesamt rund eine Stunde; mit dem Auto sind es rund 80 km, etwa eine Stunde über die A1.',
        },
      },
      {
        title: { en: 'City transport', fr: 'Transports urbains', de: 'Öffentlicher Verkehr' },
        text: {
          en: 'VBSG, the city bus operator, covers over 300 stops on 11 trolleybus and bus lines.',
          fr: 'VBSG, l’exploitant des bus urbains, dessert plus de 300 arrêts sur 11 lignes de trolleybus et de bus.',
          de: 'Die VBSG, der städtische Busbetreiber, bedient über 300 Haltestellen auf 11 Trolleybus- und Buslinien.',
        },
      },
      {
        title: { en: 'Parking', fr: 'Stationnement', de: 'Parkplatz' },
        text: {
          en: 'Unlike several of the car-free villages on this site, St. Gallen allows cars. The sources checked for this guide describe no dedicated visitor parking scheme, so arrange parking directly with your hotel.',
          fr: 'Contrairement à plusieurs villages sans voiture présentés sur ce site, Saint-Gall autorise les véhicules. Les sources consultées pour ce guide ne décrivent aucun dispositif de stationnement dédié aux visiteurs, à voir directement avec votre hôtel.',
          de: 'Anders als mehrere autofreie Dörfer auf dieser Seite lässt St. Gallen Autos zu. Die für diesen Ratgeber geprüften Quellen beschreiben kein eigenes Parkangebot für Gäste, das direkt mit dem Hotel zu klären ist.',
        },
      },
    ],
  },
  seasons: {
    summer: {
      title: { en: 'Summer in St. Gallen', fr: 'L’été à Saint-Gall', de: 'Sommer in St. Gallen' },
      base: {
        en: 'Longer cathedral evening hours and the walk up to Drei Weieren, the city’s ponds, make the most of the warm months.',
        fr: 'Des horaires du soir prolongés à la cathédrale et la montée vers les Drei Weieren, les étangs de la ville, profitent pleinement des mois chauds.',
        de: 'Längere Abendöffnungszeiten der Kathedrale und der Aufstieg zu den Drei Weieren, den Stadtweihern, nutzen die warmen Monate.',
      },
      facts: [
        { value: 'until 19:00', label: { en: 'Cathedral stays open later on summer evenings (until 18:30 the rest of the year)', fr: 'la cathédrale reste ouverte plus tard les soirs d’été (jusqu’à 18h30 le reste de l’année)', de: 'Kathedrale an Sommerabenden länger geöffnet (sonst bis 18.30 Uhr)' } },
        { value: '1h40', label: { en: 'Weiherweg route 1 to Drei Weieren, the city’s ponds above the old town', fr: 'route Weiherweg 1 vers les Drei Weieren, les étangs de la ville au-dessus de la vieille ville', de: 'Weiherweg-Route 1 zu den Drei Weieren, den Stadtweihern über der Altstadt' } },
      ],
      note: {
        en: 'Sources: stadt.sg.ch, checked 16 September 2026.',
        fr: 'Sources : stadt.sg.ch, vérifiées le 16 septembre 2026.',
        de: 'Quellen: stadt.sg.ch, geprüft am 16. September 2026.',
      },
    },
    winter: {
      title: { en: 'Winter in St. Gallen', fr: 'L’hiver à Saint-Gall', de: 'Winter in St. Gallen' },
      base: {
        en: 'The Abbey Library takes its annual break of about three weeks, while the Textile Museum keeps its Tuesday to Sunday hours through the season, closing only on 24 and 25 December.',
        fr: 'La bibliothèque de l’abbaye prend sa pause annuelle d’environ trois semaines, tandis que le musée du textile conserve ses horaires du mardi au dimanche toute la saison, fermé seulement les 24 et 25 décembre.',
        de: 'Die Stiftsbibliothek macht ihre jährliche Pause von etwa drei Wochen, während das Textilmuseum seine Öffnungszeiten von Dienstag bis Sonntag während der ganzen Saison beibehält, nur am 24. und 25. Dezember geschlossen.',
      },
      facts: [
        { value: '~3 weeks', label: { en: 'Abbey Library closes each year in November or December', fr: 'la bibliothèque de l’abbaye ferme chaque année en novembre ou décembre', de: 'Stiftsbibliothek schliesst jedes Jahr im November oder Dezember' } },
        { value: '24-25 Dec', label: { en: 'Textile Museum closes only for Christmas, otherwise open Tuesday to Sunday all year', fr: 'le musée du textile ferme seulement à Noël, ouvert sinon du mardi au dimanche toute l’année', de: 'Textilmuseum schliesst nur an Weihnachten, sonst ganzjährig Dienstag bis Sonntag geöffnet' } },
      ],
      note: {
        en: 'Sources: myswitzerland.com, textilmuseum.ch, checked 16 September 2026.',
        fr: 'Sources : myswitzerland.com, textilmuseum.ch, vérifiées le 16 septembre 2026.',
        de: 'Quellen: myswitzerland.com, textilmuseum.ch, geprüft am 16. September 2026.',
      },
    },
  },
  doing: {
    title: { en: 'What to do in St. Gallen', fr: 'Que faire à Saint-Gall', de: 'Was man in St. Gallen unternimmt' },
    intro: {
      en: 'Not a trail guide: named places from the City of St. Gallen, Switzerland Tourism and the Textile Museum, checked on their own pages.',
      fr: 'Pas un guide de randonnée : des lieux nommés, repris de la Ville de Saint-Gall, de Suisse Tourisme et du musée du textile, vérifiés sur leurs propres pages.',
      de: 'Kein Wanderführer: benannte Orte von der Stadt St. Gallen, Schweiz Tourismus und dem Textilmuseum, dort geprüft.',
    },
    groups: [
      {
        kind: 'walk',
        title: { en: 'Two walks from the centre', fr: 'Deux promenades depuis le centre', de: 'Zwei Spaziergänge ab dem Zentrum' },
        items: [
          {
            name: { en: 'Stadtspaziergang, the self-guided city walk', fr: 'Le Stadtspaziergang, la promenade urbaine en autonomie', de: 'Der Stadtspaziergang' },
            meta: { en: 'about 1.5 hours', fr: 'environ 1h30', de: 'rund 1,5 Stunden' },
            text: {
              en: 'A self-guided route through the old town, past its main sights.',
              fr: 'Un parcours en autonomie à travers la vieille ville, devant ses principaux sites.',
              de: 'Eine selbstgeführte Route durch die Altstadt, an ihren wichtigsten Sehenswürdigkeiten vorbei.',
            },
          },
          {
            name: { en: 'Weiherweg route 1 to Drei Weieren', fr: 'Route Weiherweg 1 vers les Drei Weieren', de: 'Weiherweg-Route 1 zu den Drei Weieren' },
            meta: { en: '1 hour 40 minutes, shortest of five official Weiherweg routes', fr: '1h40, la plus courte des cinq routes Weiherweg officielles', de: '1 Stunde 40, kürzeste der fünf offiziellen Weiherweg-Routen' },
            text: {
              en: 'The shortest of five official routes up to the three ponds above the city.',
              fr: 'La plus courte de cinq itinéraires officiels menant aux trois étangs au-dessus de la ville.',
              de: 'Die kürzeste von fünf offiziellen Routen zu den drei Weihern über der Stadt.',
            },
          },
        ],
      },
      {
        kind: 'local',
        title: { en: 'The Abbey and the cathedral', fr: 'L’abbaye et la cathédrale', de: 'Stiftsbibliothek und Kathedrale' },
        items: [
          {
            name: { en: 'Abbey Library (Stiftsbibliothek)', fr: 'La bibliothèque de l’abbaye (Stiftsbibliothek)', de: 'Die Stiftsbibliothek' },
            meta: { en: 'built 1758-1767 · adults CHF 18, students CHF 12, under 16 free with a parent', fr: 'construite 1758-1767 · adultes 18 CHF, étudiants 12 CHF, gratuit moins de 16 ans accompagné', de: 'erbaut 1758-1767 · Erwachsene CHF 18, Studierende CHF 12, unter 16 gratis in Begleitung' },
            text: {
              en: 'A Rococo hall by architect Peter Thumb, holding around 170,000 books, including over 400 volumes more than 1000 years old, and a 2,700-year-old Egyptian mummy, Shepenese.',
              fr: 'Une salle rococo de l’architecte Peter Thumb, abritant environ 170 000 livres, dont plus de 400 volumes vieux de plus de 1000 ans, et une momie égyptienne de 2700 ans, Shepenese.',
              de: 'Ein Rokokosaal des Architekten Peter Thumb, mit rund 170 000 Büchern, darunter über 400 Bände, die mehr als 1000 Jahre alt sind, sowie einer 2700 Jahre alten ägyptischen Mumie, Shepenese.',
            },
          },
          {
            name: { en: 'St. Gallen Cathedral', fr: 'La cathédrale de Saint-Gall', de: 'Die Kathedrale St. Gallen' },
            meta: { en: 'Baroque, two towers, free entry', fr: 'baroque, deux tours, entrée gratuite', de: 'barock, zwei Türme, freier Eintritt' },
            text: {
              en: 'A Baroque cathedral with two towers, part of the Abbey District’s UNESCO listing since 1983.',
              fr: 'Une cathédrale baroque à deux tours, partie du classement UNESCO du quartier de l’abbaye depuis 1983.',
              de: 'Eine barocke Kathedrale mit zwei Türmen, Teil des seit 1983 UNESCO-gelisteten Stiftsbezirks.',
            },
          },
        ],
      },
      {
        kind: 'local',
        title: { en: 'What is typical of the place', fr: 'Ce qui est typique de la ville', de: 'Was für die Stadt typisch ist' },
        items: [
          {
            name: { en: 'The 111 bay windows (Erker)', fr: 'Les 111 encorbellements (Erker)', de: 'Die 111 Erker' },
            meta: { en: 'late Middle Ages to modern times', fr: 'de la fin du Moyen Âge à l’époque moderne', de: 'vom Spätmittelalter bis in die Neuzeit' },
            text: {
              en: 'Carved bay windows across the old town, historically the mark of the town’s textile merchants.',
              fr: 'Des encorbellements sculptés à travers la vieille ville, historiquement la marque des marchands textiles de la ville.',
              de: 'Geschnitzte Erker in der ganzen Altstadt, historisch das Erkennungszeichen der Textilkaufleute der Stadt.',
            },
          },
          {
            name: 'Textile Museum',
            meta: { en: 'Vadianstrasse 2 · adults CHF 12, students to 26 CHF 5, under 18 free', fr: 'Vadianstrasse 2 · adultes 12 CHF, étudiants jusqu’à 26 ans 5 CHF, gratuit moins de 18 ans', de: 'Vadianstrasse 2 · Erwachsene CHF 12, Studierende bis 26 CHF 5, unter 18 gratis' },
            text: {
              en: 'Open Tuesday to Sunday, 10:00 to 17:00, closed only on 24 and 25 December.',
              fr: 'Ouvert du mardi au dimanche, de 10h00 à 17h00, fermé uniquement les 24 et 25 décembre.',
              de: 'Geöffnet Dienstag bis Sonntag, 10.00 bis 17.00 Uhr, nur am 24. und 25. Dezember geschlossen.',
            },
          },
        ],
      },
      {
        kind: 'table',
        title: { en: 'Where to eat', fr: 'Où manger', de: 'Wo essen' },
        items: [
          {
            name: 'Wirtschaft zur alten Post',
            meta: { en: 'next to the Abbey District', fr: 'à côté du quartier de l’abbaye', de: 'neben dem Stiftsbezirk' },
            text: {
              en: 'Listed by St.Gallen-Bodensee Tourismus among the city’s restaurants, next to the Abbey District.',
              fr: 'Répertorié par St.Gallen-Bodensee Tourismus parmi les restaurants de la ville, à côté du quartier de l’abbaye.',
              de: 'Von St.Gallen-Bodensee Tourismus unter den Restaurants der Stadt gelistet, neben dem Stiftsbezirk.',
            },
          },
          {
            name: 'Schützengarten',
            meta: { en: 'at the main train station', fr: 'à la gare principale', de: 'am Hauptbahnhof' },
            text: {
              en: 'A brewery, restaurant and bar at the main train station, home of the Schützengarten brewery.',
              fr: 'Une brasserie, un restaurant et un bar à la gare principale, siège de la brasserie Schützengarten.',
              de: 'Eine Brauerei, ein Restaurant und eine Bar am Hauptbahnhof, Sitz der Brauerei Schützengarten.',
            },
          },
        ],
      },
    ],
    note: {
      en: 'Times, prices and figures come from the City of St. Gallen, Switzerland Tourism, St.Gallen-Bodensee Tourismus and the Textile Museum, checked on 16 September 2026. We publish no ratings and no route descriptions: check conditions on the spot before you set off.',
      fr: 'Horaires, tarifs et chiffres proviennent de la Ville de Saint-Gall, de Suisse Tourisme, de St.Gallen-Bodensee Tourismus et du musée du textile, vérifiés le 16 septembre 2026. Nous ne publions ni notes ni descriptifs d’itinéraires : renseignez-vous sur place avant de partir.',
      de: 'Zeiten, Preise und Zahlen stammen von der Stadt St. Gallen, Schweiz Tourismus, St.Gallen-Bodensee Tourismus und dem Textilmuseum, geprüft am 16. September 2026. Wir veröffentlichen keine Bewertungen und keine Routenbeschreibungen: Erkundigen Sie sich vor Ort, bevor Sie losgehen.',
    },
  },
  faq: [
    {
      q: { en: 'How do I get from Zurich to St. Gallen?', fr: 'Comment se rendre de Zurich à Saint-Gall ?', de: 'Wie kommt man von Zürich nach St. Gallen?' },
      a: {
        en: 'Direct trains run about every 20 to 30 minutes and take around an hour.',
        fr: 'Des trains directs circulent environ toutes les 20 à 30 minutes et mettent environ une heure.',
        de: 'Direkte Züge verkehren etwa alle 20 bis 30 Minuten und brauchen rund eine Stunde.',
      },
    },
    {
      q: { en: 'Is the cathedral free to visit?', fr: 'L’entrée à la cathédrale est-elle gratuite ?', de: 'Ist der Eintritt in die Kathedrale kostenlos?' },
      a: {
        en: 'Yes, at any time outside services, roughly 06:00 or 07:00 to 18:30 or 19:00 depending on the day and season, and 07:30-20:30 on Sunday.',
        fr: 'Oui, en dehors des offices, environ de 06h00 ou 07h00 à 18h30 ou 19h00 selon le jour et la saison, et de 07h30 à 20h30 le dimanche.',
        de: 'Ja, ausserhalb der Gottesdienste, je nach Tag und Saison etwa von 06.00 oder 07.00 bis 18.30 oder 19.00 Uhr, sonntags von 07.30 bis 20.30 Uhr.',
      },
    },
    {
      q: { en: 'What does the Abbey Library cost?', fr: 'Combien coûte la visite de la bibliothèque de l’abbaye ?', de: 'Was kostet der Besuch der Stiftsbibliothek?' },
      a: {
        en: 'The combined Abbey ticket, cathedral and library, is CHF 18 for adults, CHF 12 for students and apprentices, and free for children under 16 with a parent.',
        fr: 'Le billet combiné de l’abbaye, cathédrale et bibliothèque, coûte 18 CHF pour un adulte, 12 CHF pour les étudiants et apprentis, et est gratuit pour les moins de 16 ans accompagnés.',
        de: 'Das kombinierte Stiftsticket, Kathedrale und Bibliothek, kostet CHF 18 für Erwachsene, CHF 12 für Studierende und Lernende, und ist gratis für Kinder unter 16 in Begleitung eines Elternteils.',
      },
    },
    {
      q: { en: 'Do I need a bus ticket if I’m staying the night?', fr: 'Faut-il un billet de bus en cas de nuitée ?', de: 'Braucht man ein Busticket bei einer Übernachtung?' },
      a: {
        en: 'No: participating hotels issue the Mobility Ticket St.Gallen-Bodensee, free public transport in the city and out to Lake Constance for the length of the stay.',
        fr: 'Non : les hôtels participants remettent le Mobility Ticket St.Gallen-Bodensee, transports publics gratuits en ville et jusqu’au lac de Constance pour toute la durée du séjour.',
        de: 'Nein: Teilnehmende Hotels geben das Mobility Ticket St.Gallen-Bodensee aus, kostenloser öffentlicher Verkehr in der Stadt und bis zum Bodensee für die ganze Aufenthaltsdauer.',
      },
    },
    {
      q: { en: 'What are the bay windows all over the old town?', fr: 'Que sont les encorbellements partout dans la vieille ville ?', de: 'Was haben die Erker überall in der Altstadt auf sich?' },
      a: {
        en: 'The 111 carved Erker, mostly built by the town’s historic textile merchants.',
        fr: 'Les 111 Erker sculptés, construits pour la plupart par les marchands textiles historiques de la ville.',
        de: 'Die 111 geschnitzten Erker, grösstenteils von den historischen Textilkaufleuten der Stadt errichtet.',
      },
    },
  ],
  neighbours: ['appenzell', 'wildhaus', 'stein-am-rhein', 'zurich'],
}
