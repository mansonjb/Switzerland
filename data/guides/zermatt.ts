import type { DestinationGuide } from '../types'

// Sources in data/SOURCES-zermatt.md (checked 16/09/2026). No number without a source.
export const zermatt: DestinationGuide = {
  slug: 'zermatt',
  stamp: 'generic',
  updated: '2026-09-16',
  meta: {
    title: { en: 'Where to stay in Zermatt: areas, hotels, car-free access', fr: 'Où dormir à Zermatt : secteurs, hôtels, accès sans voiture', de: 'Wo übernachten in Zermatt: Ortsteile, Hotels, autofreie Anreise' },
    description: {
      en: 'Zermatt area by area: Bahnhofstrasse, the old village, Winkelmatten. Hotels with dated facts, the Gornergrat and Matterhorn Glacier Paradise fares, and what runs when.',
      fr: 'Zermatt secteur par secteur : Bahnhofstrasse, le vieux village, Winkelmatten. Hôtels avec faits datés, tarifs du Gornergrat et du Matterhorn Glacier Paradise, et ce qui fonctionne quand.',
      de: 'Zermatt Ortsteil für Ortsteil: Bahnhofstrasse, das alte Dorf, Winkelmatten. Hotels mit datierten Fakten, Tarife von Gornergrat und Matterhorn Glacier Paradise, und was wann fährt.',
    },
  },
  eyebrow: { en: 'Valais · Visp', fr: 'Valais · Viège', de: 'Wallis · Visp' },
  title: { en: 'Where to stay in Zermatt', fr: 'Où dormir à Zermatt', de: 'Wo übernachten in Zermatt' },
  intro: {
    en: 'Zermatt sits at 1608 m in the Mattertal, and is car-free by rule: private vehicles go only as far as Täsch, from where a shuttle train reaches the village in 12 minutes, every 20 minutes. Zermatt Tourismus gives about 3.5 hours by train from Zurich Airport and about 4 hours from Geneva or Basel, with trains running every half hour to the valley. The Gornergrat cog railway leaves from a valley station 50 metres from Zermatt’s own station, and the ski area spans 360 km of pistes across Switzerland and Italy.',
    fr: 'Zermatt se trouve à 1608 m dans le Mattertal, et la voiture privée n’est autorisée que jusqu’à Täsch : de là, un train-navette rejoint le village en 12 minutes, toutes les 20 minutes. Zermatt Tourismus annonce environ 3 h 30 de train depuis l’aéroport de Zurich et environ 4 heures depuis Genève ou Bâle, avec des trains toutes les demi-heures jusqu’à la vallée. Le train à crémaillère du Gornergrat part d’une gare aval à 50 mètres de la gare de Zermatt, et le domaine skiable compte 360 km de pistes entre la Suisse et l’Italie.',
    de: 'Zermatt liegt auf 1608 m im Mattertal, und private Fahrzeuge dürfen nur bis Täsch fahren: von dort bringt ein Pendelzug alle 20 Minuten in 12 Minuten ins Dorf. Zermatt Tourismus gibt rund 3,5 Stunden Zugfahrt ab dem Flughafen Zürich und rund 4 Stunden ab Genf oder Basel an, mit Zügen alle halbe Stunde ins Tal. Die Gornergratbahn fährt ab einer Talstation 50 Meter vom Bahnhof Zermatt, und das Skigebiet umfasst 360 Pistenkilometer zwischen der Schweiz und Italien.',
  },
  quickAnswer: {
    en: 'Stay in Zermatt for direct access to the Gornergrat and Matterhorn Glacier Paradise cable cars, and a village that is car-free by rule at 1608 m. For a smaller, quieter base in the same region, Grächen suits better.',
    fr: 'Dormez à Zermatt pour un accès direct aux téléphériques du Gornergrat et du Matterhorn Glacier Paradise, dans un village sans voiture par règlement, à 1608 m. Pour une base plus petite et plus calme dans la même région, Grächen convient mieux.',
    de: 'Übernachten Sie in Zermatt für den direkten Zugang zu Gornergrat und Matterhorn Glacier Paradise, in einem Dorf, das laut Vorschrift autofrei ist, auf 1608 m. Für eine kleinere, ruhigere Basis in derselben Region ist Grächen besser geeignet.',
  },
  snapshot: {
    why: {
      en: 'Car-free by rule, the Gornergrat cog railway leaving 50 m from the station, and Matterhorn Glacier Paradise at 3883 m, called by the operator Europe’s highest mountain station.',
      fr: 'Sans voiture par règlement, le train à crémaillère du Gornergrat à 50 m de la gare, et le Matterhorn Glacier Paradise à 3883 m, présenté par l’exploitant comme la plus haute gare de montagne d’Europe.',
      de: 'Autofrei laut Vorschrift, die Gornergratbahn 50 m vom Bahnhof entfernt, und das Matterhorn Glacier Paradise auf 3883 m, vom Betreiber als höchstgelegene Bergstation Europas bezeichnet.',
    },
    where: {
      en: 'Bahnhofstrasse for the big historic hotels close to the station, Hinterdorf and Kirchplatz for the old village and the Matterhorn Museum, Winkelmatten for the free e-bus and the Glacier Paradise valley station.',
      fr: 'La Bahnhofstrasse pour les grands hôtels historiques près de la gare, Hinterdorf et Kirchplatz pour le vieux village et le Matterhorn Museum, Winkelmatten pour l’e-bus gratuit et la gare aval du Glacier Paradise.',
      de: 'Die Bahnhofstrasse für die grossen historischen Hotels nahe dem Bahnhof, Hinterdorf und Kirchplatz für das alte Dorf und das Matterhorn Museum, Winkelmatten für den Gratis-E-Bus und die Talstation des Glacier Paradise.',
    },
    watch: {
      en: 'The Gornergrat Bahn’s summer timetable runs 20 April to 1 November 2026 only, with a construction closure from 2 to 14 November 2026: check the dates before building a trip around it.',
      fr: 'L’horaire d’été du Gornergrat Bahn ne court que du 20 avril au 1er novembre 2026, avec une fermeture pour travaux du 2 au 14 novembre 2026 : vérifiez les dates avant d’organiser un séjour autour de ce train.',
      de: 'Der Sommerfahrplan der Gornergratbahn gilt nur vom 20. April bis 1. November 2026, mit einer Bauunterbrechung vom 2. bis 14. November 2026: Daten vor der Planung prüfen.',
    },
  },
  stats: [
    { value: '1608', label: { en: 'metres above sea level', fr: "mètres d'altitude", de: 'Meter über Meer' } },
    { value: '12', label: { en: 'minutes from Täsch by shuttle train, every 20 minutes', fr: 'minutes depuis Täsch en train-navette, toutes les 20 minutes', de: 'Minuten ab Täsch mit dem Pendelzug, alle 20 Minuten' } },
    { value: '360', label: { en: 'km of pistes across Switzerland and Italy', fr: 'km de pistes entre la Suisse et l’Italie', de: 'Pistenkilometer zwischen der Schweiz und Italien' } },
  ],
  hero: {
    photo: '/photos/zermatt.jpg',
    caption: { en: 'Zermatt in the Mattertal, canton Valais, at 1608 m.', fr: 'Zermatt dans le Mattertal, canton du Valais, à 1608 m.', de: 'Zermatt im Mattertal, Kanton Wallis, auf 1608 m.' },
    credit: { author: 'Jérémy Toma', license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/', source: 'https://commons.wikimedia.org/wiki/File:Zermatt_%28VS%29.jpg' },
  },
  sectors: [
    {
      title: { en: 'Bahnhofstrasse and the station', fr: 'La Bahnhofstrasse et la gare', de: 'Bahnhofstrasse und der Bahnhof' },
      walk: { en: 'The main street south of the station', fr: 'La rue principale au sud de la gare', de: 'Die Hauptstrasse südlich des Bahnhofs' },
      text: {
        en: 'The main street runs south from the station, past the village’s big historic houses: the Zermatterhof at Bahnhofstrasse 55, the Mont Cervin Palace at Bahnhofstrasse 31 and the Monte Rosa at Bahnhofstrasse 80. The Gornergrat Bahn valley station is 50 metres from Zermatt railway station.',
        fr: 'La rue principale part de la gare vers le sud, longeant les grandes maisons historiques du village : le Zermatterhof au 55 de la Bahnhofstrasse, le Mont Cervin Palace au 31 et le Monte Rosa au 80. La gare aval du Gornergrat Bahn se trouve à 50 mètres de la gare de Zermatt.',
        de: 'Die Hauptstrasse führt vom Bahnhof nach Süden, vorbei an den grossen historischen Häusern des Dorfes: dem Zermatterhof an der Bahnhofstrasse 55, dem Mont Cervin Palace an der Bahnhofstrasse 31 und dem Monte Rosa an der Bahnhofstrasse 80. Die Talstation der Gornergratbahn liegt 50 Meter vom Bahnhof Zermatt entfernt.',
      },
      points: [
        { en: 'Gornergrat valley station 50 m from the railway station', fr: 'Gare aval du Gornergrat à 50 m de la gare ferroviaire', de: 'Gornergrat-Talstation 50 m vom Bahnhof' },
        { en: 'The Zermatterhof gives about 10 minutes on foot from the station', fr: 'Le Zermatterhof indique environ 10 minutes à pied de la gare', de: 'Das Zermatterhof gibt rund 10 Gehminuten vom Bahnhof an' },
      ],
    },
    {
      title: { en: 'Hinterdorf and Kirchplatz', fr: 'Hinterdorf et Kirchplatz', de: 'Hinterdorf und Kirchplatz' },
      walk: { en: 'The old village', fr: 'Le vieux village', de: 'Das alte Dorf' },
      text: {
        en: 'More than 30 barns, stores, stables and houses stand here, built between the 16th and 18th centuries in larch, many raised on stone slabs on stilts. The Matterhorn Museum Zermatlantis stands on the adjoining Kirchplatz.',
        fr: 'Plus de 30 granges, greniers, étables et maisons se dressent ici, construits entre le 16e et le 18e siècle en mélèze, beaucoup posés sur des dalles de pierre surélevées. Le Matterhorn Museum Zermatlantis se trouve sur la Kirchplatz voisine.',
        de: 'Hier stehen mehr als 30 Stadel, Speicher, Ställe und Häuser aus Lärchenholz, erbaut zwischen dem 16. und 18. Jahrhundert, viele auf Steinplatten aufgeständert. Das Matterhorn Museum Zermatlantis liegt am angrenzenden Kirchplatz.',
      },
      points: [
        { en: 'More than 30 buildings from the 16th to 18th centuries', fr: 'Plus de 30 bâtiments du 16e au 18e siècle', de: 'Mehr als 30 Gebäude aus dem 16. bis 18. Jahrhundert' },
        { en: 'Matterhorn Museum Zermatlantis on Kirchplatz', fr: 'Matterhorn Museum Zermatlantis sur la Kirchplatz', de: 'Matterhorn Museum Zermatlantis am Kirchplatz' },
      ],
    },
    {
      title: { en: 'Winkelmatten and the south end', fr: 'Winkelmatten et l’extrémité sud', de: 'Winkelmatten und das Südende' },
      walk: { en: 'Uphill, towards Matterhorn Glacier Paradise', fr: 'En amont, vers le Matterhorn Glacier Paradise', de: 'Bergwärts, Richtung Matterhorn Glacier Paradise' },
      text: {
        en: 'The residential end of the village, uphill and south of the centre, served by a free e-bus on 2 routes. The valley station for the Matterhorn Glacier Paradise cable cars is at this end of the village.',
        fr: 'L’extrémité résidentielle du village, en amont et au sud du centre, desservie par un e-bus gratuit sur 2 lignes. La gare aval des téléphériques du Matterhorn Glacier Paradise se trouve à cette extrémité du village.',
        de: 'Das Wohnquartier am Südende des Dorfes, bergwärts vom Zentrum, bedient von einem Gratis-E-Bus auf 2 Linien. An diesem Ende des Dorfes liegt die Talstation der Matterhorn-Glacier-Paradise-Bahnen.',
      },
      points: [
        { en: 'Free e-bus on 2 routes', fr: 'E-bus gratuit sur 2 lignes', de: 'Gratis-E-Bus auf 2 Linien' },
        { en: 'Matterhorn Glacier Paradise valley station at this end', fr: 'Gare aval du Matterhorn Glacier Paradise à cette extrémité', de: 'Talstation Matterhorn Glacier Paradise an diesem Ende' },
      ],
    },
  ],
  hotels: [
    {
      slug: 'zermatt-zermatterhof',
      name: 'Grand Hotel Zermatterhof',
      url: 'https://www.zermatterhof.ch/',
      sector: { en: 'Bahnhofstrasse and the station', fr: 'La Bahnhofstrasse et la gare', de: 'Bahnhofstrasse und der Bahnhof' },
      facts: [
        { en: 'Built 1876 to 1879, owned by the Burgergemeinde Zermatt', fr: 'Construit de 1876 à 1879, propriété de la Burgergemeinde Zermatt', de: 'Erbaut 1876 bis 1879, im Besitz der Burgergemeinde Zermatt' },
        { en: 'Bahnhofstrasse 55, about 10 minutes on foot from the station', fr: 'Bahnhofstrasse 55, à environ 10 minutes à pied de la gare', de: 'Bahnhofstrasse 55, rund 10 Gehminuten vom Bahnhof' },
        { en: 'Restaurant Alpine Gourmet Prato Borni', fr: 'Restaurant Alpine Gourmet Prato Borni', de: 'Restaurant Alpine Gourmet Prato Borni' },
      ],
    },
    {
      slug: 'zermatt-mont-cervin-palace',
      name: 'Mont Cervin Palace',
      photo: '/photos/hotels/zermatt-mont-cervin-palace.jpg',
      url: 'https://www.montcervinpalace.ch/',
      sector: { en: 'Bahnhofstrasse and the station', fr: 'La Bahnhofstrasse et la gare', de: 'Bahnhofstrasse und der Bahnhof' },
      facts: [
        { en: 'Bahnhofstrasse 31', fr: 'Bahnhofstrasse 31', de: 'Bahnhofstrasse 31' },
        { en: 'Restaurants Grill Le Cervin, Ristorante Capri and Joseph’s Bar & Terrace', fr: 'Restaurants Grill Le Cervin, Ristorante Capri et Joseph’s Bar & Terrace', de: 'Restaurants Grill Le Cervin, Ristorante Capri und Joseph’s Bar & Terrace' },
        { en: 'Le Club wellness area with Nescens treatments', fr: 'Espace bien-être Le Club avec soins Nescens', de: 'Wellnessbereich Le Club mit Nescens-Behandlungen' },
      ],
    },
    {
      slug: 'zermatt-monte-rosa',
      name: 'Hotel Monte Rosa',
      photo: '/photos/hotels/zermatt-monte-rosa.jpg',
      url: 'https://www.monterosazermatt.ch/',
      sector: { en: 'Bahnhofstrasse and the station', fr: 'La Bahnhofstrasse et la gare', de: 'Bahnhofstrasse und der Bahnhof' },
      facts: [
        { en: 'Bahnhofstrasse 80', fr: 'Bahnhofstrasse 80', de: 'Bahnhofstrasse 80' },
        { en: 'Restaurant Belle Époque, Whymper Stube, Edward’s Bar-Café and 1818 Eat & Drink', fr: 'Restaurant Belle Époque, Whymper Stube, Edward’s Bar-Café et 1818 Eat & Drink', de: 'Restaurant Belle Époque, Whymper Stube, Edward’s Bar-Café und 1818 Eat & Drink' },
        { en: 'A Whymper Suite, named for the mountaineer', fr: 'Une suite Whymper, du nom de l’alpiniste', de: 'Eine Whymper-Suite, benannt nach dem Bergsteiger' },
      ],
    },
    {
      slug: 'zermatt-walliserhof',
      name: 'Hotel Walliserhof Zermatt',
      photo: '/photos/hotels/zermatt-walliserhof.jpg',
      url: 'https://www.walliserhof-zermatt.ch/en/',
      sector: { en: 'Bahnhofstrasse and the station', fr: 'La Bahnhofstrasse et la gare', de: 'Bahnhofstrasse und der Bahnhof' },
      facts: [
        { en: 'Bahnhofstrasse 30, about 250 m from the station', fr: 'Bahnhofstrasse 30, à environ 250 m de la gare', de: 'Bahnhofstrasse 30, rund 250 m vom Bahnhof' },
        { en: '23 rooms, run by the same family since 1938, third generation since 2015', fr: '23 chambres, tenu par la même famille depuis 1938, troisième génération depuis 2015', de: '23 Zimmer, seit 1938 in derselben Familie, dritte Generation seit 2015' },
        { en: 'Mini spa for guests and the Theodors Stuba restaurant, fondue and raclette', fr: 'Mini-spa réservé aux clients et restaurant Theodors Stuba, fondue et raclette', de: 'Mini-Spa für Gäste und Restaurant Theodors Stuba, Fondue und Raclette' },
      ],
    },
    {
      slug: 'zermatt-alex-alpine-resort',
      name: 'Alex Alpine Resort',
      photo: '/photos/hotels/zermatt-alex-alpine-resort.jpg',
      url: 'https://www.hotelalexzermatt.com/',
      sector: { en: 'Village centre', fr: 'Centre du village', de: 'Dorfzentrum' },
      facts: [
        { en: 'Large indoor pool, sauna area and massages', fr: 'Grande piscine intérieure, espace sauna et massages', de: 'Grosses Hallenbad, Saunabereich und Massagen' },
        { en: 'Restaurants Alex Grill, Bodega Bacchus and Le Jardin', fr: 'Restaurants Alex Grill, Bodega Bacchus et Le Jardin', de: 'Restaurants Alex Grill, Bodega Bacchus und Le Jardin' },
      ],
    },
    {
      slug: 'zermatt-alpine-hotel-perren',
      name: 'Alpine Hotel Perren',
      url: 'https://www.hotel-perren.ch/',
      sector: { en: 'Near the Sunnegga funicular', fr: 'Près du funiculaire de Sunnegga', de: 'Bei der Sunnegga-Standseilbahn' },
      facts: [
        { en: '72 rooms, in the same family since 1956', fr: '72 chambres, dans la même famille depuis 1956', de: '72 Zimmer, seit 1956 in derselben Familie' },
        { en: '5 minutes to the railway station, 3 minutes to the Sunnegga valley station, by the hotel’s own count', fr: 'À 5 minutes de la gare et 3 minutes de la station aval de Sunnegga, selon l’hôtel', de: '5 Minuten zum Bahnhof, 3 Minuten zur Talstation Sunnegga, laut Hotel' },
        { en: 'Two restaurants including the Alpine Brasserie La Barrique', fr: 'Deux restaurants, dont l’Alpine Brasserie La Barrique', de: 'Zwei Restaurants, darunter die Alpine Brasserie La Barrique' },
      ],
    },
    {
      slug: 'zermatt-allalin',
      name: 'Swiss Alpine Hotel Allalin',
      photo: '/photos/hotels/zermatt-allalin.jpg',
      url: 'https://www.hotel-allalin.ch/',
      sector: { en: 'Kirchstrasse, old village side', fr: 'Kirchstrasse, côté vieux village', de: 'Kirchstrasse, alte Dorfseite' },
      facts: [
        { en: 'Kirchstrasse 40', fr: 'Kirchstrasse 40', de: 'Kirchstrasse 40' },
        { en: 'Spa (Alpine Recovery) completely renovated in 2024', fr: 'Spa (Alpine Recovery) entièrement rénové en 2024', de: 'Spa (Alpine Recovery) 2024 komplett erneuert' },
        { en: 'Family business, 40th anniversary marked in 2018', fr: 'Entreprise familiale, 40 ans d’existence marqués en 2018', de: 'Familienbetrieb, 40-jähriges Bestehen 2018 gefeiert' },
      ],
    },
    {
      slug: 'zermatt-the-omnia',
      name: 'THE OMNIA',
      photo: '/photos/hotels/zermatt-the-omnia.jpg',
      url: 'https://the-omnia.com/',
      sector: { en: 'On the rock above the centre', fr: 'Sur le rocher au-dessus du centre', de: 'Auf dem Felsen über dem Zentrum' },
      facts: [
        { en: 'Triftweg 40, described by the hotel as perched on the rock in the centre of Zermatt', fr: 'Triftweg 40, que l’hôtel décrit comme perché sur le rocher au centre de Zermatt', de: 'Triftweg 40, laut Hotel auf dem Felsen im Zentrum von Zermatt gelegen' },
        { en: 'Spa reserved for hotel guests', fr: 'Spa réservé aux clients de l’hôtel', de: 'Spa nur für Hotelgäste' },
        { en: 'Nine categories of room and suite', fr: 'Neuf catégories de chambres et suites', de: 'Neun Zimmer- und Suitenkategorien' },
      ],
    },
    {
      slug: 'zermatt-cervo',
      name: 'CERVO Mountain Resort',
      url: 'https://cervo.swiss/',
      sector: { en: 'At the foot of the piste, Sunnegga side', fr: 'Au pied des pistes, côté Sunnegga', de: 'Am Pistenrand, Sunnegga-Seite' },
      facts: [
        { en: '54 rooms and suites plus 7 lodges, in 4 categories', fr: '54 chambres et suites, plus 7 lodges répartis en 4 catégories', de: '54 Zimmer und Suiten sowie 7 Lodges in 4 Kategorien' },
        { en: 'Ski-in, ski-out', fr: 'Ski-in, ski-out', de: 'Ski-in, Ski-out' },
        { en: 'Restaurants Ferdinand, Madre Nostra and Bazaar, plus the Ātman Mountain Spa', fr: 'Restaurants Ferdinand, Madre Nostra et Bazaar, et le Ātman Mountain Spa', de: 'Restaurants Ferdinand, Madre Nostra und Bazaar sowie das Ātman Mountain Spa' },
      ],
    },
    {
      slug: 'zermatt-riffelalp-resort',
      name: 'Riffelalp Resort 2222m',
      url: 'https://www.riffelalp.com/',
      sector: { en: 'On the Gornergrat line, above the village', fr: 'Sur la ligne du Gornergrat, au-dessus du village', de: 'An der Gornergratbahn, oberhalb des Dorfes' },
      facts: [
        { en: 'At 2222 m, reached by the Gornergrat railway, 600 m above Zermatt', fr: 'À 2222 m, desservi par le chemin de fer du Gornergrat, 600 m au-dessus de Zermatt', de: 'Auf 2222 m, erreichbar mit der Gornergratbahn, 600 m über Zermatt' },
        { en: 'States it has the highest spa in Europe, for hotel guests only', fr: 'Annonce le spa le plus haut d’Europe, réservé aux clients de l’hôtel', de: 'Gibt das höchstgelegene Spa Europas an, nur für Hotelgäste' },
        { en: 'Restaurants Alexandre, Al Bosco and Walliserkeller; open summer 19 June to 21 September and winter 11 December to 4 April 2026/27', fr: 'Restaurants Alexandre, Al Bosco et Walliserkeller ; ouvert l’été du 19 juin au 21 septembre et l’hiver du 11 décembre au 4 avril 2026/27', de: 'Restaurants Alexandre, Al Bosco und Walliserkeller; geöffnet Sommer 19. Juni bis 21. September und Winter 11. Dezember bis 4. April 2026/27' },
      ],
    },
    {
      slug: 'zermatt-youth-hostel',
      name: 'Zermatt Youth Hostel',
      photo: '/photos/hotels/zermatt-youth-hostel.jpg',
      url: 'https://www.youthhostel.ch/en/hostels/zermatt-youth-hostel',
      sector: { en: 'Near the village square', fr: 'Près de la place du village', de: 'Nahe dem Dorfplatz' },
      facts: [
        { en: 'Run by the Swiss Youth Hostels association', fr: 'Géré par l’association Swiss Youth Hostels', de: 'Geführt vom Verein Swiss Youth Hostels' },
        { en: 'Family rooms and double rooms, barrier-free access', fr: 'Chambres familiales et doubles, accès sans obstacles', de: 'Familien- und Doppelzimmer, hindernisfreier Zugang' },
        { en: 'A few minutes on foot from the village centre, with a view of the Matterhorn', fr: 'À quelques minutes à pied du centre du village, avec vue sur le Cervin', de: 'Wenige Gehminuten vom Dorfzentrum, mit Blick aufs Matterhorn' },
      ],
    },
  ],
  hotelsNote: {
    en: 'Facts taken from each hotel’s own website on 16 September 2026. No ratings or reviews on this guide.',
    fr: 'Faits relevés sur le site de chaque hôtel le 16 septembre 2026. Aucune note ni aucun avis sur ce guide.',
    de: 'Fakten von der Website des jeweiligen Hotels, Stand 16. September 2026. Keine Bewertungen oder Rezensionen.',
  },
  pass: {
    title: { en: 'Swiss Travel Pass, on the mountain railways', fr: 'Swiss Travel Pass, sur les remontées', de: 'Swiss Travel Pass, auf den Bergbahnen' },
    rows: [
      { section: { en: 'Gornergrat Bahn to Gornergrat', fr: 'Gornergrat Bahn → Gornergrat', de: 'Gornergratbahn → Gornergrat' }, coverage: 'discount25' },
      { section: { en: 'Matterhorn Glacier Paradise cable cars', fr: 'Téléphériques du Matterhorn Glacier Paradise', de: 'Matterhorn-Glacier-Paradise-Bahnen' }, coverage: 'discount25' },
    ],
    fare: {
      label: { en: 'Matterhorn Glacier Paradise, adult return, 2026 fare', fr: 'Matterhorn Glacier Paradise, aller-retour adulte, tarif 2026', de: 'Matterhorn Glacier Paradise, Erwachsenen-Retour, Tarif 2026' },
      without: '120.00',
      with: '60.00',
    },
    note: {
      en: 'Adult return to Matterhorn Glacier Paradise costs from CHF 120.00, half that with the Swiss Travel Pass or the Half Fare Card. The Gornergrat Bahn gives the same 50% off with the Swiss Travel Pass, the Half Fare Card or the GA travelcard. Both discounts are published by the operators, checked on 16 September 2026; rail coverage as far as Zermatt was not confirmed on an official page during this check and is not stated here.',
      fr: 'L’aller-retour adulte jusqu’au Matterhorn Glacier Paradise coûte à partir de CHF 120.00, soit la moitié avec le Swiss Travel Pass ou l’abonnement demi-tarif. Le Gornergrat Bahn accorde la même réduction de 50 % avec le Swiss Travel Pass, l’abonnement demi-tarif ou l’AG. Ces deux réductions sont publiées par les exploitants, vérifiées le 16 septembre 2026 ; la couverture du rail jusqu’à Zermatt n’a pas été confirmée sur une page officielle lors de cette vérification et n’est pas indiquée ici.',
      de: 'Die Erwachsenen-Retourfahrt zum Matterhorn Glacier Paradise kostet ab CHF 120.00, mit Swiss Travel Pass oder Halbtax die Hälfte. Die Gornergratbahn gewährt dieselben 50 % mit Swiss Travel Pass, Halbtax oder GA. Beide Ermässigungen sind von den Betreibern publiziert, geprüft am 16. September 2026; die Zuggültigkeit bis Zermatt wurde bei dieser Prüfung auf keiner offiziellen Seite bestätigt und wird hier nicht angegeben.',
    },
  },
  calendar: {
    title: { en: 'What runs, month by month', fr: 'Ce qui fonctionne, mois par mois', de: 'Was fährt, Monat für Monat' },
    rows: [
      { name: { en: 'Ski season, overall', fr: 'Saison de ski, ensemble du domaine', de: 'Skisaison, gesamtes Gebiet' }, months: ['o', 'o', 'o', 'o', 'r', 'x', 'x', 'x', 'x', 'x', 'o', 'o'] },
      { name: { en: 'Sunnegga / Rothorn sector', fr: 'Secteur Sunnegga / Rothorn', de: 'Sektor Sunnegga / Rothorn' }, months: ['o', 'o', 'o', 'r', 'x', 'x', 'x', 'x', 'x', 'x', 'r', 'o'] },
      { name: { en: 'Gornergrat sector', fr: 'Secteur du Gornergrat', de: 'Sektor Gornergrat' }, months: ['o', 'o', 'o', 'r', 'x', 'x', 'x', 'x', 'x', 'x', 'r', 'o'] },
    ],
    note: {
      en: 'Ski season 2026/27: 1 November 2026 to 3 May 2027 overall; Sunnegga/Rothorn sector 28 November 2026 to 11 April 2027; Gornergrat sector 28 November 2026 to 18 April 2027. The Gornergrat Bahn’s own summer timetable for sightseeing runs 20 April to 1 November 2026, with a construction closure from 2 to 14 November 2026. Checked 16 September 2026.',
      fr: 'Saison de ski 2026/27 : du 1er novembre 2026 au 3 mai 2027 pour l’ensemble du domaine ; secteur Sunnegga/Rothorn du 28 novembre 2026 au 11 avril 2027 ; secteur du Gornergrat du 28 novembre 2026 au 18 avril 2027. L’horaire d’été touristique propre au Gornergrat Bahn court du 20 avril au 1er novembre 2026, avec une fermeture pour travaux du 2 au 14 novembre 2026. Vérifié le 16 septembre 2026.',
      de: 'Skisaison 2026/27: 1. November 2026 bis 3. Mai 2027 für das gesamte Gebiet; Sektor Sunnegga/Rothorn 28. November 2026 bis 11. April 2027; Sektor Gornergrat 28. November 2026 bis 18. April 2027. Der eigene Sommerfahrplan der Gornergratbahn für Ausflüge läuft vom 20. April bis 1. November 2026, mit einer Bauunterbrechung vom 2. bis 14. November 2026. Geprüft am 16. September 2026.',
    },
  },
  practical: {
    title: { en: 'Car-free, in practice', fr: 'Sans voiture, en pratique', de: 'Autofrei, in der Praxis' },
    items: [
      {
        title: { en: 'Leave the car in Täsch', fr: 'Laisser la voiture à Täsch', de: 'Das Auto in Täsch lassen' },
        text: {
          en: 'Private vehicles go no further than Täsch. Park at the Matterhorn Terminal Täsch, 2100 covered spaces plus more than 1000 private spaces in the village.',
          fr: 'Les véhicules privés ne vont pas plus loin que Täsch. Garez-vous au Matterhorn Terminal Täsch, 2100 places couvertes plus plus de 1000 places privées dans le village.',
          de: 'Private Fahrzeuge fahren nicht weiter als bis Täsch. Parkieren Sie am Matterhorn Terminal Täsch, 2100 gedeckte Plätze plus über 1000 private Plätze im Dorf.',
        },
      },
      {
        title: { en: 'Shuttle train up', fr: 'Train-navette pour monter', de: 'Mit dem Pendelzug hinauf' },
        text: {
          en: 'A shuttle train runs from Täsch to the centre of Zermatt every 20 minutes, a 12-minute ride.',
          fr: 'Un train-navette relie Täsch au centre de Zermatt toutes les 20 minutes, en 12 minutes de trajet.',
          de: 'Ein Pendelzug fährt alle 20 Minuten von Täsch ins Zentrum von Zermatt, eine 12-minütige Fahrt.',
        },
      },
      {
        title: { en: 'By rail from the airports', fr: 'En train depuis les aéroports', de: 'Mit der Bahn ab den Flughäfen' },
        text: {
          en: 'About 3.5 hours by train from Zurich Airport, about 4 hours from Geneva or Basel, with trains running every half hour to the valley.',
          fr: 'Environ 3 h 30 de train depuis l’aéroport de Zurich, environ 4 heures depuis Genève ou Bâle, avec des trains toutes les demi-heures jusqu’à la vallée.',
          de: 'Rund 3,5 Stunden Zugfahrt ab dem Flughafen Zürich, rund 4 Stunden ab Genf oder Basel, mit Zügen alle halbe Stunde ins Tal.',
        },
      },
      {
        title: { en: 'In the village', fr: 'Dans le village', de: 'Im Dorf' },
        text: {
          en: 'Electric taxis, horse-drawn carriages, bicycles and a free e-bus on 2 routes. No private cars.',
          fr: 'Taxis électriques, calèches, vélos et un e-bus gratuit sur 2 lignes. Aucune voiture privée.',
          de: 'Elektrotaxis, Pferdekutschen, Velos und ein Gratis-E-Bus auf 2 Linien. Keine Privatautos.',
        },
      },
    ],
  },
  seasons: {
    winter: {
      title: { en: 'Winter in Zermatt', fr: 'L’hiver à Zermatt', de: 'Winter in Zermatt' },
      base: {
        en: 'Skiers do best on the Sunnegga side: the Alpine Hotel Perren gives 3 minutes to the valley station and CERVO Mountain Resort sits ski-in, ski-out at the foot of the piste.',
        fr: 'Pour skier, visez le côté Sunnegga : l’Alpine Hotel Perren indique 3 minutes de la station aval et le CERVO Mountain Resort se trouve ski-in, ski-out au pied des pistes.',
        de: 'Skifahrer wohnen am besten auf der Sunnegga-Seite: das Alpine Hotel Perren gibt 3 Minuten zur Talstation an, und das CERVO Mountain Resort liegt ski-in, ski-out am Pistenrand.',
      },
      facts: [
        { value: '360 km', label: { en: 'of pistes across Switzerland and Italy', fr: 'de pistes entre la Suisse et l’Italie', de: 'Pisten zwischen der Schweiz und Italien' } },
        { value: '52', label: { en: 'lifts, per Zermatt Bergbahnen', fr: 'remontées mécaniques, selon Zermatt Bergbahnen', de: 'Bahnen, laut Zermatt Bergbahnen' } },
        { value: '1.11 → 3.5', label: { en: 'ski season 2026/27', fr: 'saison de ski 2026/27', de: 'Skisaison 2026/27' } },
        { value: '365', label: { en: 'days a year with skiing on the glacier, per the operator', fr: 'jours par an de ski sur le glacier, selon l’exploitant', de: 'Tage im Jahr Gletscherskifahren, laut Betreiber' } },
      ],
      note: {
        en: 'Sources: matterhornparadise.ch, checked 16 September 2026.',
        fr: 'Sources : matterhornparadise.ch, vérifiées le 16 septembre 2026.',
        de: 'Quellen: matterhornparadise.ch, geprüft am 16. September 2026.',
      },
    },
    summer: {
      title: { en: 'Summer in Zermatt', fr: 'L’été à Zermatt', de: 'Sommer in Zermatt' },
      base: {
        en: 'Hikers do best around Sunnegga for the 5-Seenweg and the lakes, or by the station for the Gornergrat Bahn; Bahnhofstrasse suits day trips into the valley.',
        fr: 'Pour randonner, préférez le secteur de Sunnegga pour le 5-Seenweg et les lacs, ou les abords de la gare pour le Gornergrat Bahn ; la Bahnhofstrasse convient aux excursions dans la vallée.',
        de: 'Wanderer wohnen am besten bei Sunnegga für den 5-Seenweg und die Seen, oder beim Bahnhof für die Gornergratbahn; die Bahnhofstrasse eignet sich für Ausflüge ins Tal.',
      },
      facts: [
        { value: '33 min', label: { en: 'Gornergrat Bahn, from Zermatt to 3089 m', fr: 'Gornergrat Bahn, de Zermatt à 3089 m', de: 'Gornergratbahn, von Zermatt auf 3089 m' } },
        { value: '11 km', label: { en: '5-Seenweg, from Blauherd down to Sunnegga', fr: '5-Seenweg, de Blauherd à Sunnegga', de: '5-Seenweg, von Blauherd nach Sunnegga' } },
        { value: '3883 m', label: { en: 'Matterhorn Glacier Paradise, about 40 minutes from the village', fr: 'Matterhorn Glacier Paradise, à environ 40 minutes du village', de: 'Matterhorn Glacier Paradise, rund 40 Minuten vom Dorf' } },
        { value: '20.4 → 1.11', label: { en: 'Gornergrat Bahn summer 2026 timetable', fr: 'horaire d’été 2026 du Gornergrat Bahn', de: 'Sommerfahrplan 2026 der Gornergratbahn' } },
      ],
      note: {
        en: 'Sources: gornergrat.ch, matterhornparadise.ch, myswitzerland.com, checked 16 September 2026.',
        fr: 'Sources : gornergrat.ch, matterhornparadise.ch, myswitzerland.com, vérifiées le 16 septembre 2026.',
        de: 'Quellen: gornergrat.ch, matterhornparadise.ch, myswitzerland.com, geprüft am 16. September 2026.',
      },
    },
  },
  doing: {
    title: { en: 'What to do in Zermatt', fr: 'Que faire à Zermatt', de: 'Was man in Zermatt unternimmt' },
    intro: {
      en: 'Not a trail guide: a handful of named places from Zermatt Bergbahnen, the Gornergrat Bahn and Zermatt Tourismus, to see what a day here looks like.',
      fr: 'Pas un guide de randonnée : une poignée de lieux nommés, repris de Zermatt Bergbahnen, du Gornergrat Bahn et de Zermatt Tourismus, pour voir à quoi ressemble une journée ici.',
      de: 'Kein Wanderführer: eine Handvoll benannter Orte von Zermatt Bergbahnen, der Gornergratbahn und Zermatt Tourismus, damit Sie sehen, wie ein Tag hier aussieht.',
    },
    groups: [
      {
        kind: 'walk',
        title: { en: 'A lakeside trail and a walk through the old quarter', fr: 'Un sentier au fil des lacs et une marche dans le vieux quartier', de: 'Ein Seenweg und ein Spaziergang durchs alte Dorf' },
        items: [
          {
            name: '5-Seenweg',
            meta: { en: '11 km · 3 h 15 · 380 m up, 660 m down', fr: '11 km · 3 h 15 · 380 m de montée, 660 m de descente', de: '11 km · 3 Std. 15 · 380 Hm auf, 660 Hm ab' },
            text: {
              en: 'From Blauherd down to Sunnegga past five lakes, Stellisee, Grindjisee, Grünsee, Moosjisee and Leisee. Switzerland Tourism signs it as Zermatt hike number 11.',
              fr: 'De Blauherd à Sunnegga en passant devant cinq lacs, le Stellisee, le Grindjisee, le Grünsee, le Moosjisee et le Leisee. Suisse Tourisme le signale comme la randonnée numéro 11 de Zermatt.',
              de: 'Von Blauherd hinunter nach Sunnegga, vorbei an fünf Seen: Stellisee, Grindjisee, Grünsee, Moosjisee und Leisee. Schweiz Tourismus führt ihn als Zermatt-Wanderung Nummer 11.',
            },
          },
          {
            name: { en: 'A walk through Hinterdorf', fr: 'Une marche dans Hinterdorf', de: 'Ein Rundgang durch Hinterdorf' },
            meta: { en: '16th to 18th century · more than 30 buildings', fr: '16e au 18e siècle · plus de 30 bâtiments', de: '16. bis 18. Jahrhundert · mehr als 30 Gebäude' },
            text: {
              en: 'More than 30 barns, stores, stables and houses stand in the old quarter, built between the 16th and 18th centuries in larch, many raised on stone slabs on stilts.',
              fr: 'Plus de 30 granges, greniers, étables et maisons se dressent dans le vieux quartier, construits entre le 16e et le 18e siècle en mélèze, beaucoup posés sur des dalles de pierre surélevées.',
              de: 'Im alten Dorfteil stehen mehr als 30 Stadel, Speicher, Ställe und Häuser aus Lärchenholz, erbaut zwischen dem 16. und 18. Jahrhundert, viele auf Steinplatten aufgeständert.',
            },
          },
        ],
      },
      {
        kind: 'ride',
        title: { en: 'Two summits above the village', fr: 'Deux sommets au-dessus du village', de: 'Zwei Gipfel über dem Dorf' },
        items: [
          {
            name: 'Gornergrat Bahn',
            meta: { en: '3089 m · 33 minutes', fr: '3089 m · 33 minutes', de: '3089 m · 33 Minuten' },
            text: {
              en: 'The cog railway climbs from a valley station 50 m from Zermatt station to Gornergrat at 3089 m in 33 minutes, past Findelbach, Riffelalp, Riffelberg and Rotenboden, with a view of 28 to 29 four-thousand-metre peaks.',
              fr: 'Le train à crémaillère grimpe d’une gare aval à 50 m de la gare de Zermatt jusqu’au Gornergrat à 3089 m en 33 minutes, en passant par Findelbach, Riffelalp, Riffelberg et Rotenboden, avec une vue sur 28 à 29 sommets de plus de quatre mille mètres.',
              de: 'Die Zahnradbahn steigt von einer Talstation 50 m vom Bahnhof Zermatt in 33 Minuten zum Gornergrat auf 3089 m, vorbei an Findelbach, Riffelalp, Riffelberg und Rotenboden, mit Sicht auf 28 bis 29 Viertausender.',
            },
          },
          {
            name: 'Matterhorn Glacier Paradise',
            meta: { en: '3883 m · about 40 minutes', fr: '3883 m · environ 40 minutes', de: '3883 m · rund 40 Minuten' },
            text: {
              en: 'Described by the operator as Europe’s highest mountain station, reached in about 40 minutes from Zermatt including transfers. At the top: a 360-degree viewing platform, the Glacier Palace, the Cinema Lounge and the Crystal Ride cabins.',
              fr: 'Présenté par l’exploitant comme la plus haute gare de montagne d’Europe, atteint en environ 40 minutes depuis Zermatt, transferts compris. Au sommet : une plateforme panoramique à 360 degrés, le Glacier Palace, le Cinema Lounge et les cabines Crystal Ride.',
              de: 'Vom Betreiber als höchstgelegene Bergstation Europas bezeichnet, in rund 40 Minuten ab Zermatt erreichbar, Transfers eingerechnet. Oben: eine 360-Grad-Aussichtsplattform, der Glacier Palace, die Cinema Lounge und die Crystal-Ride-Kabinen.',
            },
          },
        ],
      },
      {
        kind: 'table',
        title: { en: 'Two mountain restaurants in Findeln', fr: 'Deux restaurants d’alpage à Findeln', de: 'Zwei Bergrestaurants in Findeln' },
        items: [
          {
            name: 'Chez Vrony',
            meta: { en: 'Findeln · 2100 m', fr: 'Findeln · 2100 m', de: 'Findeln · 2100 m' },
            text: {
              en: 'Family run for more than 100 years, serving fish, game, fondue and raclette from its own organic produce alongside Alpine recipes. Hot meals daily from 11:30 to 16:00.',
              fr: 'Tenu par la même famille depuis plus de 100 ans, avec poisson, gibier, fondue et raclette issus de ses propres produits biologiques, selon des recettes alpines. Repas chauds tous les jours de 11 h 30 à 16 h.',
              de: 'Seit mehr als 100 Jahren in Familienhand, mit Fisch, Wild, Fondue und Raclette aus eigenen Bio-Produkten nach alpinen Rezepten. Warme Küche täglich von 11.30 bis 16 Uhr.',
            },
          },
          {
            name: 'Findlerhof',
            meta: { en: 'Findeln · 2051 m', fr: 'Findeln · 2051 m', de: 'Findeln · 2051 m' },
            text: {
              en: 'At 2051 m above Zermatt, in the middle of a hiking and skiing area, listed among the Zermatt Tourismus mountain restaurants.',
              fr: 'À 2051 m au-dessus de Zermatt, au milieu d’une zone de randonnée et de ski, répertorié parmi les restaurants d’alpage de Zermatt Tourismus.',
              de: 'Auf 2051 m über Zermatt, mitten in einem Wander- und Skigebiet, gelistet unter den Bergrestaurants von Zermatt Tourismus.',
            },
          },
        ],
      },
    ],
    note: {
      en: 'Times, altitudes and figures come from Zermatt Bergbahnen, the Gornergrat Bahn and Zermatt Tourismus, checked on 16 September 2026. We publish no ratings and no route descriptions: check conditions on the spot before you set off.',
      fr: 'Durées, altitudes et chiffres viennent de Zermatt Bergbahnen, du Gornergrat Bahn et de Zermatt Tourismus, vérifiés le 16 septembre 2026. Nous ne publions ni notes ni descriptifs d’itinéraires : renseignez-vous sur place avant de partir.',
      de: 'Zeiten, Höhen und Zahlen stammen von Zermatt Bergbahnen, der Gornergratbahn und Zermatt Tourismus, geprüft am 16. September 2026. Wir veröffentlichen keine Bewertungen und keine Routenbeschreibungen: Erkundigen Sie sich vor Ort, bevor Sie losgehen.',
    },
  },
  faq: [
    {
      q: { en: 'Can I drive to Zermatt?', fr: 'Peut-on venir en voiture à Zermatt ?', de: 'Kann man mit dem Auto nach Zermatt fahren?' },
      a: {
        en: 'No. Zermatt Tourismus states the village is car-free and private vehicles are only allowed as far as Täsch. Park at the Matterhorn Terminal Täsch, 2100 covered spaces, and take the shuttle train, every 20 minutes, 12 minutes to the village.',
        fr: 'Non. Zermatt Tourismus indique que le village est sans voiture et que les véhicules privés ne sont autorisés que jusqu’à Täsch. Garez-vous au Matterhorn Terminal Täsch, 2100 places couvertes, et prenez le train-navette, toutes les 20 minutes, 12 minutes jusqu’au village.',
        de: 'Nein. Zermatt Tourismus erklärt das Dorf für autofrei, private Fahrzeuge sind nur bis Täsch erlaubt. Parkieren Sie am Matterhorn Terminal Täsch, 2100 gedeckte Plätze, und nehmen Sie den Pendelzug, alle 20 Minuten, 12 Minuten bis ins Dorf.',
      },
    },
    {
      q: { en: 'How long does it take from Zurich Airport?', fr: 'Combien de temps depuis l’aéroport de Zurich ?', de: 'Wie lange dauert es ab dem Flughafen Zürich?' },
      a: {
        en: 'About 3.5 hours by train, according to Zermatt Tourismus, and about 4 hours from Geneva or Basel airports. Trains run every half hour.',
        fr: 'Environ 3 h 30 de train, selon Zermatt Tourismus, et environ 4 heures depuis les aéroports de Genève ou Bâle. Les trains circulent toutes les demi-heures.',
        de: 'Rund 3,5 Stunden mit dem Zug, laut Zermatt Tourismus, und rund 4 Stunden ab den Flughäfen Genf oder Basel. Die Züge fahren alle halbe Stunde.',
      },
    },
    {
      q: { en: 'How high is the Gornergrat and how long is the ride?', fr: 'À quelle altitude est le Gornergrat et combien dure la montée ?', de: 'Wie hoch liegt der Gornergrat und wie lange dauert die Fahrt?' },
      a: {
        en: 'The Gornergrat station stands at 3089 m and the cog railway takes 33 minutes from a valley station 50 m from Zermatt’s main railway station.',
        fr: 'La gare du Gornergrat se trouve à 3089 m et le train à crémaillère met 33 minutes depuis une gare aval à 50 m de la gare principale de Zermatt.',
        de: 'Die Station Gornergrat liegt auf 3089 m, die Zahnradbahn braucht 33 Minuten ab einer Talstation 50 m vom Hauptbahnhof Zermatt.',
      },
    },
    {
      q: { en: 'Does the Swiss Travel Pass cover the mountain railways in Zermatt?', fr: 'Le Swiss Travel Pass couvre-t-il les remontées de Zermatt ?', de: 'Gilt der Swiss Travel Pass für die Bergbahnen in Zermatt?' },
      a: {
        en: 'Not free. It gives 50% off the Gornergrat Bahn and 50% off Matterhorn Glacier Paradise.',
        fr: 'Pas gratuitement. Il donne 50 % de réduction sur le Gornergrat Bahn et 50 % sur le Matterhorn Glacier Paradise.',
        de: 'Nicht gratis. Er gibt 50 % Ermässigung auf die Gornergratbahn und 50 % auf das Matterhorn Glacier Paradise.',
      },
    },
    {
      q: { en: 'When does the ski season run?', fr: 'Quand se déroule la saison de ski ?', de: 'Wann läuft die Skisaison?' },
      a: {
        en: '1 November 2026 to 3 May 2027 overall; the Sunnegga/Rothorn sector runs 28 November 2026 to 11 April 2027 and the Gornergrat sector 28 November 2026 to 18 April 2027.',
        fr: 'Du 1er novembre 2026 au 3 mai 2027 pour l’ensemble du domaine ; le secteur Sunnegga/Rothorn du 28 novembre 2026 au 11 avril 2027 et le secteur du Gornergrat du 28 novembre 2026 au 18 avril 2027.',
        de: 'Vom 1. November 2026 bis 3. Mai 2027 für das gesamte Gebiet; der Sektor Sunnegga/Rothorn läuft vom 28. November 2026 bis 11. April 2027 und der Sektor Gornergrat vom 28. November 2026 bis 18. April 2027.',
      },
    },
  ],
  neighbours: ['saas-fee', 'grachen', 'crans-montana', 'leukerbad'],
}
