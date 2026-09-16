import type { DestinationGuide } from '../types'

// Sources in data/SOURCES-saas-fee.md (checked 16/09/2026). No number without a source.
export const saasFee: DestinationGuide = {
  slug: 'saas-fee',
  stamp: 'generic',
  updated: '2026-09-16',
  meta: {
    title: { en: 'Where to stay in Saas-Fee: areas, hotels, car-free access', fr: 'Où dormir à Saas-Fee : secteurs, hôtels, accès sans voiture', de: 'Wo übernachten in Saas-Fee: Ortsteile, Hotels, autofreie Anreise' },
    description: {
      en: 'Saas-Fee area by area: Dorfplatz, Panoramastrasse, Wildistrasse. Hotels with dated facts, the Metro Alpin fares and the winter 2026/27 lift dates.',
      fr: 'Saas-Fee secteur par secteur : Dorfplatz, Panoramastrasse, Wildistrasse. Hôtels avec faits datés, tarifs du Metro Alpin et dates d’ouverture hiver 2026/27.',
      de: 'Saas-Fee Ortsteil für Ortsteil: Dorfplatz, Panoramastrasse, Wildistrasse. Hotels mit datierten Fakten, Tarife der Metro Alpin und die Bahndaten für Winter 2026/27.',
    },
  },
  eyebrow: { en: 'Valais · Visp', fr: 'Valais · Viège', de: 'Wallis · Visp' },
  title: { en: 'Where to stay in Saas-Fee', fr: 'Où dormir à Saas-Fee', de: 'Wo übernachten in Saas-Fee' },
  intro: {
    en: 'Saas-Fee lies at 1800 m at the foot of the Dom, 4545 m and the highest mountain entirely in Switzerland, and is car-free: drivers stop at the village entrance and unload at Terminal A or B. PostBus line 511 runs from Visp every half hour, and the tourist office gives about three hours from Zurich, Geneva, Basel or Milan airports. Inside the valley, 350 km of hiking paths and themed trails lead out from the village, and the Metro Alpin, which the tourist office calls the highest underground railway in the world, climbs to Mittelallalin at 3500 m.',
    fr: 'Saas-Fee se trouve à 1800 m, au pied du Dom, 4545 m et plus haute montagne entièrement suisse, et le village est sans voiture : les automobilistes s’arrêtent à l’entrée et déchargent au Terminal A ou B. La ligne de car postal 511 part de Viège toutes les demi-heures, et l’office du tourisme annonce environ trois heures depuis les aéroports de Zurich, Genève, Bâle ou Milan. Dans la vallée, 350 km de chemins de randonnée et de sentiers thématiques partent du village, et le Metro Alpin, que l’office du tourisme présente comme le plus haut chemin de fer souterrain du monde, grimpe jusqu’au Mittelallalin à 3500 m.',
    de: 'Saas-Fee liegt auf 1800 m am Fuss des Doms, 4545 m und der höchste Berg vollständig auf Schweizer Boden, und das Dorf ist autofrei: Autofahrer halten am Dorfeingang und laden am Terminal A oder B aus. Die Postautolinie 511 fährt ab Visp alle halbe Stunde, und das Tourismusbüro gibt rund drei Stunden ab den Flughäfen Zürich, Genf, Basel oder Mailand an. Im Tal führen 350 km Wanderwege und Themenpfade vom Dorf weg, und die Metro Alpin, laut Tourismusbüro die höchstgelegene unterirdische Bahn der Welt, steigt zum Mittelallalin auf 3500 m auf.',
  },
  quickAnswer: {
    en: 'Stay in Saas-Fee for the Metro Alpin and a compact, car-free village at 1800 m below the Dom. If you want a larger choice of hotels and a bigger ski area, Zermatt suits better.',
    fr: 'Dormez à Saas-Fee pour le Metro Alpin et un village compact et sans voiture à 1800 m au pied du Dom. Pour un choix d’hôtels plus large et un domaine skiable plus vaste, Zermatt convient mieux.',
    de: 'Übernachten Sie in Saas-Fee für die Metro Alpin und ein kompaktes, autofreies Dorf auf 1800 m am Fuss des Doms. Für eine grössere Hotelauswahl und ein grösseres Skigebiet ist Zermatt besser geeignet.',
  },
  snapshot: {
    why: {
      en: 'Car-free at 1800 m below the Dom, the Metro Alpin climbing inside the mountain to Mittelallalin at 3500 m, and 350 km of hiking paths and themed trails in the valley.',
      fr: 'Sans voiture à 1800 m au pied du Dom, le Metro Alpin qui grimpe à l’intérieur de la montagne jusqu’au Mittelallalin à 3500 m, et 350 km de chemins de randonnée et de sentiers thématiques dans la vallée.',
      de: 'Autofrei auf 1800 m am Fuss des Doms, die Metro Alpin, die im Berginnern zum Mittelallalin auf 3500 m führt, und 350 km Wanderwege und Themenpfade im Tal.',
    },
    where: {
      en: 'Dorfplatz and the centre for the shops and the main square, Panoramastrasse for the Alpin Express and Felskinn cable cars, Wildistrasse and Lomattenstrasse on the quieter upper edge towards the larch forest.',
      fr: 'Dorfplatz et le centre pour les commerces et la place principale, Panoramastrasse pour les téléphériques de l’Alpin Express et du Felskinn, Wildistrasse et Lomattenstrasse sur le versant plus calme vers la forêt de mélèzes.',
      de: 'Dorfplatz und Zentrum für die Läden und den Hauptplatz, Panoramastrasse für Alpin Express und Felskinnbahn, Wildistrasse und Lomattenstrasse am ruhigeren oberen Rand Richtung Lärchenwald.',
    },
    watch: {
      en: 'No buses run inside the village in summer and autumn, and the winter 2026/27 lift dates vary: Plattjen and Hannig open only from 19 December, weeks after the Alpin Express and the Metro Alpin.',
      fr: 'Aucun bus ne circule dans le village en été et en automne, et les dates d’ouverture hiver 2026/27 varient : Plattjen et Hannig n’ouvrent que le 19 décembre, plusieurs semaines après l’Alpin Express et le Metro Alpin.',
      de: 'Im Sommer und Herbst verkehrt im Dorf kein Bus, und die Bahndaten für Winter 2026/27 sind unterschiedlich: Plattjen und Hannig öffnen erst am 19. Dezember, Wochen nach Alpin Express und Metro Alpin.',
    },
  },
  stats: [
    { value: '1800', label: { en: 'metres above sea level', fr: "mètres d'altitude", de: 'Meter über Meer' } },
    { value: '3500', label: { en: 'm at Mittelallalin, top of the Metro Alpin', fr: 'm au Mittelallalin, sommet du Metro Alpin', de: 'm auf dem Mittelallalin, oben an der Metro Alpin' } },
    { value: '350', label: { en: 'km of hiking paths and themed trails', fr: 'km de chemins de randonnée et sentiers thématiques', de: 'km Wanderwege und Themenpfade' } },
  ],
  hero: {
    photo: '/photos/saasfee.jpg',
    caption: { en: 'Saas-Fee, the car-free village at 1800 m at the foot of the Dom (4545 m).', fr: 'Saas-Fee, le village sans voiture à 1800 m au pied du Dom (4545 m).', de: 'Saas-Fee, das autofreie Dorf auf 1800 m am Fuss des Doms (4545 m).' },
    credit: { author: 'Jamcib', license: 'Public domain', licenseUrl: 'https://commons.wikimedia.org/wiki/Commons:Licensing', source: 'https://commons.wikimedia.org/wiki/File:Vue_sur_Saas-Fee.JPG' },
  },
  sectors: [
    {
      title: { en: 'Dorfplatz and the centre', fr: 'Dorfplatz et le centre', de: 'Dorfplatz und Zentrum' },
      walk: { en: 'The main square and the shopping street', fr: 'La place principale et la rue commerçante', de: 'Der Hauptplatz und die Einkaufsstrasse' },
      text: {
        en: 'The main square and the shopping street, Obere Dorfstrasse and Dorfstrasse. The Dom Hotel stands at Dorfplatz 2. The village is compact and flat by Alpine standards, and no buses run inside it in summer.',
        fr: 'La place principale et la rue commerçante, Obere Dorfstrasse et Dorfstrasse. Le Dom Hotel se trouve au Dorfplatz 2. Le village est compact et plat pour une station alpine, et aucun bus n’y circule en été.',
        de: 'Der Hauptplatz und die Einkaufsstrasse, Obere Dorfstrasse und Dorfstrasse. Das Dom Hotel steht am Dorfplatz 2. Das Dorf ist für ein Alpendorf kompakt und flach, und im Sommer verkehrt darin kein Bus.',
      },
      points: [
        { en: 'The Dom Hotel at Dorfplatz 2', fr: 'Le Dom Hotel au Dorfplatz 2', de: 'Das Dom Hotel am Dorfplatz 2' },
        { en: 'No buses inside the village in summer', fr: 'Aucun bus dans le village en été', de: 'Im Sommer kein Bus im Dorf' },
      ],
    },
    {
      title: { en: 'Panoramastrasse and the lift side', fr: 'Panoramastrasse et le côté remontées', de: 'Panoramastrasse und die Bahnseite' },
      walk: { en: 'The end of the village for the Alpin Express', fr: 'L’extrémité du village côté Alpin Express', de: 'Das Dorfende Richtung Alpin Express' },
      text: {
        en: 'The Saastal Bergbahnen head office is at Panoramastrasse 5, and the wellnessHostel4000 at Panoramastrasse 1, next to the Aqua Allalin wellness centre. This is the end of the village for the Alpin Express and the Felskinn cable car, and for ski-in, ski-out addresses.',
        fr: 'Le siège de Saastal Bergbahnen se trouve au Panoramastrasse 5, et le wellnessHostel4000 au Panoramastrasse 1, à côté du centre de bien-être Aqua Allalin. C’est l’extrémité du village pour l’Alpin Express et le téléphérique du Felskinn, et pour les adresses ski-in, ski-out.',
        de: 'Der Hauptsitz von Saastal Bergbahnen liegt an der Panoramastrasse 5, das wellnessHostel4000 an der Panoramastrasse 1, neben dem Wellnesscenter Aqua Allalin. Hier endet das Dorf Richtung Alpin Express und Felskinnbahn, mit den Ski-in-Ski-out-Adressen.',
      },
      points: [
        { en: 'Alpin Express and Felskinn cable car at this end', fr: 'Alpin Express et téléphérique du Felskinn à cette extrémité', de: 'Alpin Express und Felskinnbahn an diesem Dorfende' },
        { en: 'Direct access to the Aqua Allalin wellness centre from wellnessHostel4000', fr: 'Accès direct au centre de bien-être Aqua Allalin depuis le wellnessHostel4000', de: 'Direkter Zugang zum Wellnesscenter Aqua Allalin ab dem wellnessHostel4000' },
      ],
    },
    {
      title: { en: 'Wildistrasse and the upper edge', fr: 'Wildistrasse et le versant supérieur', de: 'Wildistrasse und der obere Rand' },
      walk: { en: 'Towards the larch forest', fr: 'Vers la forêt de mélèzes', de: 'Richtung Lärchenwald' },
      text: {
        en: 'Quieter addresses above the village on Wildistrasse and Lomattenstrasse: the Waldhotel Fletschhorn at Wildistrasse 101 and The Capra at Lomattenstrasse 6. The Feehof sits instead on the northern edge of the village, on Dorfstrasse 28, near the entrance and the car park.',
        fr: 'Des adresses plus calmes au-dessus du village, sur Wildistrasse et Lomattenstrasse : le Waldhotel Fletschhorn au Wildistrasse 101 et The Capra au Lomattenstrasse 6. Le Feehof se trouve quant à lui à l’extrémité nord du village, au Dorfstrasse 28, près de l’entrée et du parking.',
        de: 'Ruhigere Adressen oberhalb des Dorfes an der Wildistrasse und der Lomattenstrasse: das Waldhotel Fletschhorn an der Wildistrasse 101 und The Capra an der Lomattenstrasse 6. Das Feehof liegt dagegen am Nordrand des Dorfes, an der Dorfstrasse 28, nahe dem Eingang und dem Parkhaus.',
      },
      points: [
        { en: 'Waldhotel Fletschhorn above the car-free centre', fr: 'Waldhotel Fletschhorn au-dessus du centre sans voiture', de: 'Waldhotel Fletschhorn oberhalb des autofreien Zentrums' },
        { en: 'Feehof on the northern edge, near the car park', fr: 'Feehof à l’extrémité nord, près du parking', de: 'Feehof am Nordrand, nahe dem Parkhaus' },
      ],
    },
  ],
  hotels: [
    {
      slug: 'saas-fee-the-capra',
      name: 'The Capra Saas-Fee',
      photo: '/photos/hotels/saas-fee-the-capra.jpg',
      url: 'https://www.capra.ch/',
      sector: { en: 'Wildistrasse and the upper edge', fr: 'Wildistrasse et le versant supérieur', de: 'Wildistrasse und der obere Rand' },
      facts: [
        { en: 'Lomattenstrasse 6, 3906 Saas-Fee', fr: 'Lomattenstrasse 6, 3906 Saas-Fee', de: 'Lomattenstrasse 6, 3906 Saas-Fee' },
        { en: 'Brasserie 1809 and a wine cellar', fr: 'Brasserie 1809 et une cave à vins', de: 'Brasserie 1809 und ein Weinkeller' },
        { en: 'Peak Health Spa, plus a private spa and a day spa', fr: 'Peak Health Spa, ainsi qu’un spa privé et un day spa', de: 'Peak Health Spa sowie ein privates Spa und ein Day-Spa' },
      ],
    },
    {
      slug: 'saas-fee-waldhotel-fletschhorn',
      name: 'Waldhotel Fletschhorn',
      url: 'https://www.fletschhorn.ch/',
      sector: { en: 'Wildistrasse and the upper edge', fr: 'Wildistrasse et le versant supérieur', de: 'Wildistrasse und der obere Rand' },
      facts: [
        { en: '14 rooms, up to 48 beds', fr: '14 chambres, jusqu’à 48 lits', de: '14 Zimmer, bis zu 48 Betten' },
        { en: 'Wildistrasse 101, above the car-free village centre', fr: 'Wildistrasse 101, au-dessus du centre sans voiture', de: 'Wildistrasse 101, oberhalb des autofreien Dorfzentrums' },
        { en: 'Open year round', fr: 'Ouvert toute l’année', de: 'Ganzjährig geöffnet' },
      ],
    },
    {
      slug: 'saas-fee-schweizerhof',
      name: 'Wellnesshotel Schweizerhof',
      photo: '/photos/hotels/saas-fee-schweizerhof.jpg',
      url: 'https://www.schweizerhof-saasfee.ch/en',
      sector: { en: 'Dorfplatz and the centre', fr: 'Dorfplatz et le centre', de: 'Dorfplatz und Zentrum' },
      facts: [
        { en: 'Haltenstrasse 10, 3906 Saas-Fee', fr: 'Haltenstrasse 10, 3906 Saas-Fee', de: 'Haltenstrasse 10, 3906 Saas-Fee' },
        { en: 'Wellness and spa area', fr: 'Espace bien-être et spa', de: 'Wellness- und Spabereich' },
        { en: 'Summer guests get the SaastalCard, with free cable cars in the valley', fr: 'Les clients d’été reçoivent la SaastalCard, avec les téléphériques gratuits dans la vallée', de: 'Sommergäste erhalten die SaastalCard mit gratis Talbahnen' },
      ],
    },
    {
      slug: 'saas-fee-saaserhof',
      name: 'Saaserhof',
      url: 'https://www.saaserhof.ch/',
      sector: { en: 'Panoramastrasse and the lift side', fr: 'Panoramastrasse et le côté remontées', de: 'Panoramastrasse und die Bahnseite' },
      facts: [
        { en: 'Directly on the piste, ski-in, ski-out, 2 minutes from the ski school meeting point', fr: 'Directement sur la piste, ski-in, ski-out, à 2 minutes du point de rendez-vous de l’école de ski', de: 'Direkt an der Piste, Ski-in, Ski-out, 2 Minuten zum Treffpunkt der Skischule' },
        { en: 'Spa of over 550 m², bio sauna, Finnish sauna, steam bath, 2 whirlpools and a fitness room, included with the stay', fr: 'Spa de plus de 550 m², sauna bio, sauna finlandais, bain de vapeur, 2 bains à remous et une salle de fitness, inclus dans le séjour', de: 'Spa über 550 m², Biosauna, finnische Sauna, Dampfbad, 2 Whirlpools und ein Fitnessraum, im Aufenthalt inbegriffen' },
        { en: 'Run by a local host couple', fr: 'Tenu par un couple d’hôtes local', de: 'Geführt von einem einheimischen Gastgeberpaar' },
      ],
    },
    {
      slug: 'saas-fee-wellnesshostel4000',
      name: 'wellnessHostel4000',
      photo: '/photos/hotels/saas-fee-wellnesshostel4000.jpg',
      url: 'https://www.youthhostel.ch/en/hostels/wellnesshostel4000-saas-fee',
      sector: { en: 'Panoramastrasse and the lift side', fr: 'Panoramastrasse et le côté remontées', de: 'Panoramastrasse und die Bahnseite' },
      facts: [
        { en: 'Panoramastrasse 1, 3906 Saas-Fee', fr: 'Panoramastrasse 1, 3906 Saas-Fee', de: 'Panoramastrasse 1, 3906 Saas-Fee' },
        { en: 'Multi-bed rooms, family rooms and double rooms, run by the Swiss Youth Hostels association', fr: 'Chambres multi-lits, familiales et doubles, gérées par l’association Swiss Youth Hostels', de: 'Mehrbett-, Familien- und Doppelzimmer, geführt vom Verein Swiss Youth Hostels' },
        { en: 'Direct access to the Aqua Allalin wellness centre, 1900 m² with an indoor pool and fitness room', fr: 'Accès direct au centre de bien-être Aqua Allalin, 1900 m² avec piscine intérieure et salle de fitness', de: 'Direkter Zugang zum Wellnesscenter Aqua Allalin, 1900 m² mit Hallenbad und Fitnessraum' },
      ],
    },
    {
      slug: 'saas-fee-feehof',
      name: 'Hotel Feehof',
      photo: '/photos/hotels/saas-fee-feehof.jpg',
      url: 'https://www.feehof.ch/',
      sector: { en: 'Wildistrasse and the upper edge', fr: 'Wildistrasse et le versant supérieur', de: 'Wildistrasse und der obere Rand' },
      facts: [
        { en: 'Dorfstrasse 28, 3906 Saas-Fee, near the village entrance and the car park', fr: 'Dorfstrasse 28, 3906 Saas-Fee, près de l’entrée du village et du parking', de: 'Dorfstrasse 28, 3906 Saas-Fee, nahe dem Dorfeingang und dem Parkhaus' },
        { en: 'Hotel garni with breakfast, plus 2-room, 3-room and duplex apartments', fr: 'Hôtel garni avec petit-déjeuner, plus des appartements de 2, 3 pièces et duplex', de: 'Hotel garni mit Frühstück, dazu 2-Zimmer-, 3-Zimmer- und Duplex-Wohnungen' },
        { en: 'Fireplace lounge, bar and an on-site kiosk', fr: 'Salon avec cheminée, bar et kiosque sur place', de: 'Cheminée-Lounge, Bar und Kiosk im Haus' },
      ],
    },
    {
      slug: 'saas-fee-dom-hotel',
      name: 'The Dom Hotel Saas-Fee',
      url: 'https://thedomhotel-saasfee.com/?lang=en',
      sector: { en: 'Dorfplatz and the centre', fr: 'Dorfplatz et le centre', de: 'Dorfplatz und Zentrum' },
      facts: [
        { en: 'Dorfplatz 2, 3906 Saas-Fee', fr: 'Dorfplatz 2, 3906 Saas-Fee', de: 'Dorfplatz 2, 3906 Saas-Fee' },
        { en: 'The Dom Bar', fr: 'Le Dom Bar', de: 'Die Dom Bar' },
        { en: 'Reopened on 11 December 2025', fr: 'Réouvert le 11 décembre 2025', de: 'Wiedereröffnet am 11. Dezember 2025' },
      ],
    },
    {
      slug: 'saas-fee-bristol',
      name: 'Hotel Bristol',
      url: 'https://www.hotel-bristol-saas-fee.ch/',
      sector: { en: 'Panoramastrasse and the lift side', fr: 'Panoramastrasse et le côté remontées', de: 'Panoramastrasse und die Bahnseite' },
      facts: [
        { en: 'Ski in and ski out: 1 minute to the ski lifts, 2 minutes to the cable cars, by the hotel’s own count', fr: 'Ski in et ski out : à 1 minute des remontées, 2 minutes des téléphériques, selon l’hôtel', de: 'Ski-in und Ski-out: 1 Minute zu den Skiliften, 2 Minuten zu den Bahnen, laut Hotel' },
        { en: 'Most rooms face south with a balcony, single rooms face north', fr: 'La plupart des chambres sont orientées sud avec balcon, les chambres simples sont orientées nord', de: 'Die meisten Zimmer liegen mit Balkon nach Süden, Einzelzimmer nach Norden' },
        { en: 'Own restaurant and wine list', fr: 'Restaurant et carte des vins propres', de: 'Eigenes Restaurant und eigene Weinkarte' },
      ],
    },
  ],
  hotelsNote: {
    en: 'Facts taken from each hotel’s own website on 16 September 2026. No ratings or reviews on this guide.',
    fr: 'Faits relevés sur le site de chaque hôtel le 16 septembre 2026. Aucune note ni aucun avis sur ce guide.',
    de: 'Fakten von der Website des jeweiligen Hotels, Stand 16. September 2026. Keine Bewertungen oder Rezensionen.',
  },
  calendar: {
    title: { en: 'What runs, month by month', fr: 'Ce qui fonctionne, mois par mois', de: 'Was fährt, Monat für Monat' },
    rows: [
      { name: { en: 'Alpin Express, Metro Alpin, Spielboden and Längfluh', fr: 'Alpin Express, Metro Alpin, Spielboden et Längfluh', de: 'Alpin Express, Metro Alpin, Spielboden und Längfluh' }, months: ['o', 'o', 'o', 'r', 'x', 'x', 'x', 'x', 'x', 'r', 'o', 'o'] },
      { name: { en: 'Felskinn and Spielboden, first section', fr: 'Felskinn et Spielboden, premier tronçon', de: 'Felskinn und Spielboden, erste Sektion' }, months: ['o', 'o', 'o', 'r', 'x', 'x', 'x', 'x', 'x', 'x', 'r', 'o'] },
      { name: { en: 'Plattjen', fr: 'Plattjen', de: 'Plattjen' }, months: ['o', 'o', 'o', 'r', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'r'] },
      { name: { en: 'Hannig', fr: 'Hannig', de: 'Hannig' }, months: ['o', 'o', 'o', 'r', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'r'] },
    ],
    note: {
      en: 'Winter 2026/27 lift dates published by saas-fee.ch: Alpin Express, Metro Alpin, Spielboden and Längfluh run 31 October 2026 to 18 April 2027; Felskinn and the first section of Spielboden run 2 November 2026 to 18 April 2027; Plattjen opens 19 December 2026 and closes 18 April 2027; Hannig opens 19 December 2026 and closes 11 April 2027. Checked 16 September 2026.',
      fr: 'Dates d’ouverture hiver 2026/27 publiées par saas-fee.ch : Alpin Express, Metro Alpin, Spielboden et Längfluh fonctionnent du 31 octobre 2026 au 18 avril 2027 ; Felskinn et le premier tronçon de Spielboden du 2 novembre 2026 au 18 avril 2027 ; Plattjen ouvre le 19 décembre 2026 et ferme le 18 avril 2027 ; Hannig ouvre le 19 décembre 2026 et ferme le 11 avril 2027. Vérifié le 16 septembre 2026.',
      de: 'Von saas-fee.ch publizierte Bahndaten Winter 2026/27: Alpin Express, Metro Alpin, Spielboden und Längfluh fahren vom 31. Oktober 2026 bis 18. April 2027; Felskinn und die erste Sektion von Spielboden vom 2. November 2026 bis 18. April 2027; Plattjen öffnet am 19. Dezember 2026 und schliesst am 18. April 2027; Hannig öffnet am 19. Dezember 2026 und schliesst am 11. April 2027. Geprüft am 16. September 2026.',
    },
  },
  practical: {
    title: { en: 'Car-free, in practice', fr: 'Sans voiture, en pratique', de: 'Autofrei, in der Praxis' },
    items: [
      {
        title: { en: 'Unload at the entrance', fr: 'Décharger à l’entrée', de: 'Am Eingang ausladen' },
        text: {
          en: 'Unload luggage at Terminal A or Terminal B, then park in the multi-storey Parkhaus Saas-Fee or the open car park. Published tariffs: summer free up to 30 minutes, then up to CHF 15 a day and CHF 105 a week; winter up to CHF 20 a day and CHF 140 a week.',
          fr: 'Déchargez les bagages au Terminal A ou B, puis garez-vous au parking couvert Parkhaus Saas-Fee ou au parking extérieur. Tarifs publiés : été gratuit jusqu’à 30 minutes, puis jusqu’à CHF 15 par jour et CHF 105 par semaine ; hiver jusqu’à CHF 20 par jour et CHF 140 par semaine.',
          de: 'Gepäck am Terminal A oder B ausladen, dann im Parkhaus Saas-Fee oder auf dem offenen Parkplatz parkieren. Publizierte Tarife: Sommer bis 30 Minuten gratis, danach bis CHF 15 pro Tag und CHF 105 pro Woche; Winter bis CHF 20 pro Tag und CHF 140 pro Woche.',
        },
      },
      {
        title: { en: 'From Visp by PostBus', fr: 'Depuis Viège en car postal', de: 'Ab Visp mit dem Postauto' },
        text: {
          en: 'PostBus line 511 runs from the rail gateway of Visp straight to Saas-Fee every half hour. About three hours in total from Zurich, Geneva, Basel or Milan airports.',
          fr: 'La ligne de car postal 511 relie la gare de Viège à Saas-Fee toutes les demi-heures. Environ trois heures au total depuis les aéroports de Zurich, Genève, Bâle ou Milan.',
          de: 'Die Postautolinie 511 fährt ab dem Bahnhof Visp alle halbe Stunde direkt nach Saas-Fee. Insgesamt rund drei Stunden ab den Flughäfen Zürich, Genf, Basel oder Mailand.',
        },
      },
      {
        title: { en: 'In the village', fr: 'Dans le village', de: 'Im Dorf' },
        text: {
          en: 'No buses run inside the village in summer and autumn; taxis and hotel transfers do the local work. Apartment guests are collected by the landlord with an electro-taxi, or a handcart is provided.',
          fr: 'Aucun bus ne circule dans le village en été et en automne ; taxis et navettes d’hôtel assurent les trajets locaux. Les clients en appartement sont pris en charge par le propriétaire en électro-taxi, ou reçoivent un chariot.',
          de: 'Im Sommer und Herbst verkehrt im Dorf kein Bus; Taxis und Hoteltransfers übernehmen die lokalen Wege. Ferienwohnungsgäste werden vom Vermieter mit einem Elektrotaxi abgeholt, oder es steht ein Handkarren bereit.',
        },
      },
      {
        title: { en: 'Paying for the lifts', fr: 'Payer les remontées', de: 'Die Bahnen bezahlen' },
        text: {
          en: 'The SaastalCard is free from your first overnight stay at a partner business and covers 9 mountain railways in the valley night for night, the Metro Alpin excepted, which needs a separate Metro Plus Ticket at CHF 50 for adults.',
          fr: 'La SaastalCard est gratuite dès la première nuit dans un établissement partenaire et couvre 9 remontées mécaniques de la vallée nuit pour nuit, à l’exception du Metro Alpin, qui nécessite un Metro Plus Ticket séparé à CHF 50 pour un adulte.',
          de: 'Die SaastalCard ist ab der ersten Übernachtung in einem Partnerbetrieb gratis und deckt 9 Bergbahnen im Tal Nacht für Nacht ab, ausgenommen die Metro Alpin, für die ein separates Metro Plus Ticket zu CHF 50 für Erwachsene nötig ist.',
        },
      },
    ],
  },
  seasons: {
    winter: {
      title: { en: 'Winter in Saas-Fee', fr: 'L’hiver à Saas-Fee', de: 'Winter in Saas-Fee' },
      base: {
        en: 'Skiers do best on Panoramastrasse: Saaserhof sits directly on the piste and Hotel Bristol gives 1 minute to the ski lifts.',
        fr: 'Pour skier, visez Panoramastrasse : le Saaserhof est directement sur la piste et l’Hotel Bristol indique 1 minute des remontées.',
        de: 'Skifahrer wohnen am besten an der Panoramastrasse: das Saaserhof liegt direkt an der Piste, das Hotel Bristol gibt 1 Minute zu den Skiliften an.',
      },
      facts: [
        { value: '31.10 → 18.4', label: { en: 'Alpin Express and Metro Alpin, winter 2026/27', fr: 'Alpin Express et Metro Alpin, hiver 2026/27', de: 'Alpin Express und Metro Alpin, Winter 2026/27' } },
        { value: '19.12 → 18.4', label: { en: 'Plattjen, winter 2026/27', fr: 'Plattjen, hiver 2026/27', de: 'Plattjen, Winter 2026/27' } },
        { value: '60 km', label: { en: 'winter hiking network', fr: 'de réseau de chemins d’hiver', de: 'Winterwanderwege' } },
        { value: 'CHF 59/79', label: { en: 'Metro Alpin one way / return, adult, winter 2026/27', fr: 'Metro Alpin aller simple / aller-retour, adulte, hiver 2026/27', de: 'Metro Alpin einfach / retour, Erwachsene, Winter 2026/27' } },
      ],
      note: {
        en: 'Sources: saas-fee.ch, checked 16 September 2026.',
        fr: 'Sources : saas-fee.ch, vérifiées le 16 septembre 2026.',
        de: 'Quellen: saas-fee.ch, geprüft am 16. September 2026.',
      },
    },
    summer: {
      title: { en: 'Summer in Saas-Fee', fr: 'L’été à Saas-Fee', de: 'Sommer in Saas-Fee' },
      base: {
        en: 'Hikers do best around Dorfplatz, flat and central for the 350 km network; Wildistrasse suits a quieter stay near the larch forest trails.',
        fr: 'Pour randonner, préférez Dorfplatz, plat et central pour le réseau de 350 km ; Wildistrasse convient pour un séjour plus calme près des sentiers de la forêt de mélèzes.',
        de: 'Wanderer wohnen am besten rund um den Dorfplatz, flach und zentral für das 350-km-Netz; die Wildistrasse eignet sich für einen ruhigeren Aufenthalt nahe den Wegen im Lärchenwald.',
      },
      facts: [
        { value: '350 km', label: { en: 'of hiking paths and themed trails', fr: 'de chemins de randonnée et sentiers thématiques', de: 'Wanderwege und Themenpfade' } },
        { value: '50 min', label: { en: 'on foot from the village to the Gletschergrotte restaurant at 2000 m', fr: 'à pied du village jusqu’au restaurant Gletschergrotte à 2000 m', de: 'zu Fuss vom Dorf zum Restaurant Gletschergrotte auf 2000 m' } },
        { value: 'CHF 62/83', label: { en: 'Metro Alpin one way / return, adult, summer 2026', fr: 'Metro Alpin aller simple / aller-retour, adulte, été 2026', de: 'Metro Alpin einfach / retour, Erwachsene, Sommer 2026' } },
        { value: '4545 m', label: { en: 'the Dom, the highest mountain entirely in Switzerland', fr: 'le Dom, la plus haute montagne entièrement suisse', de: 'der Dom, der höchste Berg ganz auf Schweizer Boden' } },
      ],
      note: {
        en: 'Sources: saas-fee.ch, checked 16 September 2026.',
        fr: 'Sources : saas-fee.ch, vérifiées le 16 septembre 2026.',
        de: 'Quellen: saas-fee.ch, geprüft am 16. September 2026.',
      },
    },
  },
  doing: {
    title: { en: 'What to do in Saas-Fee', fr: 'Que faire à Saas-Fee', de: 'Was man in Saas-Fee unternimmt' },
    intro: {
      en: 'Not a trail guide: a handful of named places from saas-fee.ch, to see what a day here looks like.',
      fr: 'Pas un guide de randonnée : une poignée de lieux nommés, repris de saas-fee.ch, pour voir à quoi ressemble une journée ici.',
      de: 'Kein Wanderführer: eine Handvoll benannter Orte von saas-fee.ch, damit Sie sehen, wie ein Tag hier aussieht.',
    },
    groups: [
      {
        kind: 'walk',
        title: { en: 'Two waymarked paths from the village', fr: 'Deux chemins balisés depuis le village', de: 'Zwei markierte Wege ab dem Dorf' },
        items: [
          {
            name: { en: 'Village to the Gletschergrotte', fr: 'Du village à la Gletschergrotte', de: 'Vom Dorf zur Gletschergrotte' },
            meta: { en: '50 min · summer · restaurant at 2000 m', fr: '50 min · été · restaurant à 2000 m', de: '50 Min. · Sommer · Restaurant auf 2000 m' },
            text: {
              en: 'A summer walk of 50 minutes on foot from the village down to the Gletschergrotte mountain restaurant at 2000 m, off the Spielboden to Saas-Fee trail.',
              fr: 'Une marche d’été de 50 minutes à pied depuis le village jusqu’au restaurant d’alpage de la Gletschergrotte à 2000 m, en contrebas du sentier Spielboden - Saas-Fee.',
              de: 'Eine Sommerwanderung von 50 Minuten zu Fuss vom Dorf hinunter zum Bergrestaurant Gletschergrotte auf 2000 m, abseits des Weges Spielboden-Saas-Fee.',
            },
          },
          {
            name: { en: 'Saas-Fee to Saas-Almagell', fr: 'De Saas-Fee à Saas-Almagell', de: 'Von Saas-Fee nach Saas-Almagell' },
            meta: { en: '40 min · woodland path', fr: '40 min · chemin en forêt', de: '40 Min. · Waldweg' },
            text: {
              en: 'A woodland path to the neighbouring village of Saas-Almagell, listed by the tourist office among its pushchair-friendly walks.',
              fr: 'Un chemin en forêt vers le village voisin de Saas-Almagell, répertorié par l’office du tourisme parmi les balades accessibles en poussette.',
              de: 'Ein Waldweg zum Nachbardorf Saas-Almagell, vom Tourismusbüro unter den kinderwagentauglichen Wegen gelistet.',
            },
          },
        ],
      },
      {
        kind: 'ride',
        title: { en: 'Two cable cars above the village', fr: 'Deux téléphériques au-dessus du village', de: 'Zwei Bahnen über dem Dorf' },
        items: [
          {
            name: 'Metro Alpin',
            meta: { en: 'Mittelallalin, 3500 m · about 40 min', fr: 'Mittelallalin, 3500 m · environ 40 min', de: 'Mittelallalin, 3500 m · rund 40 Min.' },
            text: {
              en: 'The tourist office calls it the highest underground railway in the world, running from Felskinn up inside the mountain to Mittelallalin at 3500 m, about 40 minutes from Saas-Fee including the transfer. At the top: the Ice Pavilion, a 5500 m³ cave in the Fee glacier.',
              fr: 'L’office du tourisme le présente comme le plus haut chemin de fer souterrain du monde, montant de Felskinn à l’intérieur de la montagne jusqu’au Mittelallalin à 3500 m, environ 40 minutes depuis Saas-Fee correspondance comprise. Au sommet : l’Ice Pavilion, une grotte de 5500 m³ dans le glacier du Fee.',
              de: 'Das Tourismusbüro nennt sie die höchstgelegene unterirdische Bahn der Welt, sie führt ab Felskinn im Berginnern zum Mittelallalin auf 3500 m, rund 40 Minuten ab Saas-Fee inklusive Umsteigen. Oben: der Ice Pavilion, eine 5500 m³ grosse Höhle im Feegletscher.',
            },
          },
          {
            name: 'Hannig',
            meta: { en: '2336 m · about 5 min by cable car', fr: '2336 m · environ 5 min de téléphérique', de: '2336 m · rund 5 Min. Bahnfahrt' },
            text: {
              en: 'A short ride to 2336 m and a newly renovated mountain restaurant with a large terrace.',
              fr: 'Une courte montée à 2336 m jusqu’à un restaurant d’alpage récemment rénové doté d’une grande terrasse.',
              de: 'Eine kurze Fahrt auf 2336 m zu einem neu renovierten Bergrestaurant mit grosser Terrasse.',
            },
          },
        ],
      },
      {
        kind: 'table',
        title: { en: 'Two mountain restaurants', fr: 'Deux restaurants d’alpage', de: 'Zwei Bergrestaurants' },
        items: [
          {
            name: 'Revolving Restaurant Allalin',
            meta: { en: 'Mittelallalin, 3500 m · turns 360° in an hour', fr: 'Mittelallalin, 3500 m · un tour à 360° par heure', de: 'Mittelallalin, 3500 m · dreht sich in einer Stunde um 360°' },
            text: {
              en: 'At the top of the Metro Alpin, 200 seats and regional and international dishes, open daily 09:00 to 15:30 with hot meals from 11:00 to 15:00.',
              fr: 'Au sommet du Metro Alpin, 200 places et une cuisine régionale et internationale, ouvert tous les jours de 9h à 15h30 avec des plats chauds de 11h à 15h.',
              de: 'Oben an der Metro Alpin, 200 Sitzplätze und regionale sowie internationale Küche, täglich geöffnet von 9 bis 15.30 Uhr, warme Küche von 11 bis 15 Uhr.',
            },
          },
          {
            name: { en: 'Mountain restaurant Spielboden', fr: 'Restaurant d’alpage Spielboden', de: 'Bergrestaurant Spielboden' },
            meta: { en: '2448 m · marmots in spring and summer', fr: '2448 m · marmottes au printemps et en été', de: '2448 m · Murmeltiere im Frühling und Sommer' },
            text: {
              en: 'Open in line with the Spielboden gondola timetable, with a large sun terrace and winter barbecues. In spring and summer, marmots gather below the restaurant, and bags of feed are sold there with a deposit.',
              fr: 'Ouvert selon l’horaire de la télécabine de Spielboden, avec une grande terrasse ensoleillée et des grillades l’hiver. Au printemps et en été, des marmottes se rassemblent en contrebas du restaurant, où des sachets de nourriture sont vendus contre une caution.',
              de: 'Geöffnet nach dem Fahrplan der Spielboden-Gondelbahn, mit grosser Sonnenterrasse und Winter-Grillabenden. Im Frühling und Sommer versammeln sich unterhalb des Restaurants Murmeltiere, Futtersäckchen werden dort gegen Depot verkauft.',
            },
          },
        ],
      },
    ],
    note: {
      en: 'Times, altitudes and figures come from saas-fee.ch, checked on 16 September 2026. We publish no ratings and no route descriptions: check conditions on the spot before you set off.',
      fr: 'Durées, altitudes et chiffres viennent de saas-fee.ch, vérifiés le 16 septembre 2026. Nous ne publions ni notes ni descriptifs d’itinéraires : renseignez-vous sur place avant de partir.',
      de: 'Zeiten, Höhen und Zahlen stammen von saas-fee.ch, geprüft am 16. September 2026. Wir veröffentlichen keine Bewertungen und keine Routenbeschreibungen: Erkundigen Sie sich vor Ort, bevor Sie losgehen.',
    },
  },
  faq: [
    {
      q: { en: 'Can I drive into Saas-Fee?', fr: 'Peut-on entrer en voiture à Saas-Fee ?', de: 'Kann man mit dem Auto nach Saas-Fee fahren?' },
      a: {
        en: 'No. Saas-Fee is car-free. You unload luggage at Terminal A or B at the village entrance and park in the multi-storey Parkhaus Saas-Fee or the open car park. Summer parking is free up to 30 minutes and up to CHF 15 a day; winter up to CHF 20 a day.',
        fr: 'Non. Saas-Fee est sans voiture. Vous déchargez les bagages au Terminal A ou B à l’entrée du village, puis vous garez-vous au parking couvert Parkhaus Saas-Fee ou au parking extérieur. Le stationnement d’été est gratuit jusqu’à 30 minutes puis jusqu’à CHF 15 par jour ; l’hiver jusqu’à CHF 20 par jour.',
        de: 'Nein. Saas-Fee ist autofrei. Sie laden das Gepäck am Terminal A oder B am Dorfeingang aus und parkieren im Parkhaus Saas-Fee oder auf dem offenen Parkplatz. Sommerparkieren ist bis 30 Minuten gratis, danach bis CHF 15 pro Tag; im Winter bis CHF 20 pro Tag.',
      },
    },
    {
      q: { en: 'How do I get there without a car?', fr: 'Comment y aller sans voiture ?', de: 'Wie komme ich ohne Auto hin?' },
      a: {
        en: 'Train to Visp, then PostBus line 511 to Saas-Fee, every half hour. About three hours in total from Zurich, Geneva, Basel or Milan airports.',
        fr: 'Train jusqu’à Viège, puis la ligne de car postal 511 jusqu’à Saas-Fee, toutes les demi-heures. Environ trois heures au total depuis les aéroports de Zurich, Genève, Bâle ou Milan.',
        de: 'Zug nach Visp, dann Postautolinie 511 nach Saas-Fee, alle halbe Stunde. Insgesamt rund drei Stunden ab den Flughäfen Zürich, Genf, Basel oder Mailand.',
      },
    },
    {
      q: { en: 'Do I pay for the cable cars?', fr: 'Les téléphériques sont-ils payants ?', de: 'Muss man für die Bahnen bezahlen?' },
      a: {
        en: 'Not for most of them if you stay the night: the SaastalCard covers 9 mountain railways in the valley for as many days as you have nights, the Metro Alpin excepted, which needs a Metro Plus Ticket at CHF 50 for adults.',
        fr: 'Pas pour la plupart si vous passez la nuit sur place : la SaastalCard couvre 9 remontées mécaniques de la vallée pour autant de jours que de nuits, à l’exception du Metro Alpin, qui nécessite un Metro Plus Ticket à CHF 50 pour un adulte.',
        de: 'Für die meisten nicht, wenn Sie übernachten: die SaastalCard deckt 9 Bergbahnen im Tal für so viele Tage wie Nächte ab, ausgenommen die Metro Alpin, für die ein Metro Plus Ticket zu CHF 50 für Erwachsene nötig ist.',
      },
    },
    {
      q: { en: 'What is at the top of the Metro Alpin?', fr: 'Qu’y a-t-il au sommet du Metro Alpin ?', de: 'Was gibt es oben an der Metro Alpin?' },
      a: {
        en: 'Mittelallalin at 3500 m: the Revolving Restaurant Allalin, which turns 360 degrees in an hour, and the Ice Pavilion, a 5500 m³ cave inside the Fee glacier. About 40 minutes from the village.',
        fr: 'Le Mittelallalin à 3500 m : le Revolving Restaurant Allalin, qui effectue un tour à 360 degrés par heure, et l’Ice Pavilion, une grotte de 5500 m³ dans le glacier du Fee. Environ 40 minutes depuis le village.',
        de: 'Der Mittelallalin auf 3500 m: das Revolving Restaurant Allalin, das sich in einer Stunde um 360 Grad dreht, und der Ice Pavilion, eine 5500 m³ grosse Höhle im Feegletscher. Rund 40 Minuten ab dem Dorf.',
      },
    },
    {
      q: { en: 'When do the lifts run in winter?', fr: 'Quand fonctionnent les remontées en hiver ?', de: 'Wann fahren die Bahnen im Winter?' },
      a: {
        en: 'The Alpin Express, Metro Alpin and the Spielboden-Längfluh line open on 31 October 2026 and close on 18 April 2027. Plattjen and Hannig open later, on 19 December 2026.',
        fr: 'L’Alpin Express, le Metro Alpin et la ligne Spielboden-Längfluh ouvrent le 31 octobre 2026 et ferment le 18 avril 2027. Plattjen et Hannig ouvrent plus tard, le 19 décembre 2026.',
        de: 'Alpin Express, Metro Alpin und die Linie Spielboden-Längfluh öffnen am 31. Oktober 2026 und schliessen am 18. April 2027. Plattjen und Hannig öffnen später, am 19. Dezember 2026.',
      },
    },
  ],
  neighbours: ['zermatt', 'grachen', 'crans-montana', 'leukerbad'],
}
