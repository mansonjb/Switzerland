import type { DestinationGuide } from '../types'

// Sources in data/SOURCES-oberland.md (checked 16/09/2026). No number without a source.
export const interlaken: DestinationGuide = {
  slug: 'interlaken',
  stamp: 'interlaken',
  updated: '2026-09-16',
  meta: {
    title: { en: 'Where to stay in Interlaken: areas, hotels, two stations', fr: 'Où dormir à Interlaken : secteurs, hôtels, deux gares', de: 'Wo übernachten in Interlaken: Ortsteile, Hotels, zwei Bahnhöfe' },
    description: {
      en: 'Interlaken area by area: around Interlaken Ost, the Höheweg between the stations, Interlaken West and Unterseen. Hotels with dated prices, the Harder Kulm funicular, boats on both lakes and what runs when.',
      fr: 'Interlaken secteur par secteur : autour d’Interlaken Ost, la Höheweg entre les deux gares, Interlaken West et Unterseen. Hôtels avec prix datés, le funiculaire du Harder Kulm, les bateaux sur les deux lacs et ce qui fonctionne quand.',
      de: 'Interlaken Ortsteil für Ortsteil: rund um Interlaken Ost, die Höheweg zwischen den Bahnhöfen, Interlaken West und Unterseen. Hotels mit datierten Preisen, die Harderbahn, Boote auf beiden Seen und was wann fährt.',
    },
  },
  eyebrow: { en: 'Bernese Oberland · Interlaken', fr: 'Oberland bernois · Interlaken', de: 'Berner Oberland · Interlaken' },
  title: { en: 'Where to stay in Interlaken', fr: 'Où dormir à Interlaken', de: 'Wo übernachten in Interlaken' },
  intro: {
    en: 'The regional hub between two lakes, with a station at each end of town: Interlaken Ost for trains towards Lauterbrunnen and Grindelwald, Interlaken West for the road towards Bern. Lake Thun lies to the west, Lake Brienz to the east, and paragliders drift down onto the Höhematte meadow in between.',
    fr: 'Le carrefour régional entre deux lacs, avec une gare à chaque bout de la ville : Interlaken Ost pour les trains vers Lauterbrunnen et Grindelwald, Interlaken West pour la route vers Berne. Le lac de Thoune s’étend à l’ouest, le lac de Brienz à l’est, et les parapentistes se posent entre les deux, sur la prairie de la Höhematte.',
    de: 'Die regionale Drehscheibe zwischen zwei Seen, mit je einem Bahnhof an jedem Ende der Stadt: Interlaken Ost für die Züge nach Lauterbrunnen und Grindelwald, Interlaken West für die Strasse Richtung Bern. Der Thunersee liegt im Westen, der Brienzersee im Osten, dazwischen landen die Gleitschirmflieger auf der Höhematte.',
  },
  quickAnswer: {
    en: 'Stay in Interlaken for the widest choice of direct trains to the rest of Switzerland, boats on both lakes, and a base that isn’t up a cable car or cog railway. For the shortest way up towards the Jungfraujoch, Lauterbrunnen and Grindelwald sit closer to the mountain railways.',
    fr: 'Dormez à Interlaken pour le plus large choix de trains directs vers le reste de la Suisse, des bateaux sur les deux lacs, et une base qui ne nécessite ni téléphérique ni crémaillère. Pour monter le plus vite vers le Jungfraujoch, Lauterbrunnen et Grindelwald sont plus proches des chemins de fer de montagne.',
    de: 'Übernachten Sie in Interlaken für die grösste Auswahl an direkten Zügen in die übrige Schweiz, Boote auf beiden Seen und eine Basis ohne Seilbahn oder Zahnradbahn. Für den kürzesten Weg zum Jungfraujoch liegen Lauterbrunnen und Grindelwald näher an den Bergbahnen.',
  },
  snapshot: {
    why: {
      en: 'Two stations, two lakes, and the valley floor: Interlaken Ost sends trains up to Lauterbrunnen and Grindelwald, while boats leave for Lake Thun and Lake Brienz.',
      fr: 'Deux gares, deux lacs, et le fond de vallée : Interlaken Ost envoie les trains vers Lauterbrunnen et Grindelwald, tandis que les bateaux partent pour le lac de Thoune et le lac de Brienz.',
      de: 'Zwei Bahnhöfe, zwei Seen und der Talboden: Ab Interlaken Ost fahren die Züge nach Lauterbrunnen und Grindelwald, und die Boote legen zu Thunersee und Brienzersee ab.',
    },
    where: {
      en: 'Around Interlaken Ost for the mountain trains and the Harder Kulm funicular, along the Höheweg for shops and the paragliding meadow, around Interlaken West and Unterseen for the lake and the old town.',
      fr: 'Autour d’Interlaken Ost pour les trains de montagne et le funiculaire du Harder Kulm, le long de la Höheweg pour les commerces et la prairie des parapentistes, autour d’Interlaken West et Unterseen pour le lac et la vieille ville.',
      de: 'Rund um Interlaken Ost für die Bergbahnen und die Harderbahn, entlang der Höheweg für Läden und die Gleitschirmwiese, rund um Interlaken West und Unterseen für den See und die Altstadt.',
    },
    watch: {
      en: 'The Harder Kulm funicular runs 3 April to 29 November 2026 only, and Lake Brienz boats stop for the winter from 7 December.',
      fr: 'Le funiculaire du Harder Kulm ne fonctionne que du 3 avril au 29 novembre 2026, et les bateaux du lac de Brienz s’arrêtent pour l’hiver dès le 7 décembre.',
      de: 'Die Harderbahn fährt nur vom 3. April bis 29. November 2026, und die Boote auf dem Brienzersee stellen den Betrieb ab dem 7. Dezember für den Winter ein.',
    },
  },
  stats: [
    { value: '35000', label: { en: 'paraglider landings a year at the Höhematte', fr: 'atterrissages de parapentistes par an sur la Höhematte', de: 'Gleitschirmlandungen pro Jahr auf der Höhematte' } },
    { value: '8', label: { en: 'minutes up the Harder Kulm funicular', fr: 'minutes de funiculaire jusqu’au Harder Kulm', de: 'Minuten mit der Harderbahn hinauf' } },
    { value: '2', label: { en: 'lakes around town, Thun and Brienz', fr: 'lacs autour de la ville, Thoune et Brienz', de: 'Seen rund um die Stadt, Thuner- und Brienzersee' } },
  ],
  hero: {
    photo: '/photos/interlaken-hero.jpg',
    caption: { en: 'The Goldswil viaduct, with Interlaken and its two lakes beyond.', fr: 'Le viaduc de Goldswil, avec Interlaken et ses deux lacs au loin.', de: 'Der Goldswil-Viadukt, dahinter Interlaken mit seinen beiden Seen.' },
    credit: { author: 'Rectilinium', license: 'CC0 1.0', licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/', source: 'https://commons.wikimedia.org/wiki/File:Goldswil-Viadukt_Panorama_mit_Interlaken_im_Hintergrund_2.jpg' },
  },
  sectors: [
    {
      title: { en: 'Around Interlaken Ost', fr: 'Autour d’Interlaken Ost', de: 'Rund um Interlaken Ost' },
      walk: { en: 'Trains to Lauterbrunnen and Grindelwald', fr: 'Trains vers Lauterbrunnen et Grindelwald', de: 'Züge nach Lauterbrunnen und Grindelwald' },
      text: {
        en: 'The station where the mountain trains start, with the Harder Kulm funicular valley station and the Aare river close by. The practical base for day trips into the Jungfrau region.',
        fr: 'La gare où démarrent les trains de montagne, avec la station de départ du funiculaire du Harder Kulm et l’Aar à deux pas. La base pratique pour les excursions à la journée dans la région de la Jungfrau.',
        de: 'Der Bahnhof, an dem die Bergbahnen starten, mit der Talstation der Harderbahn und der Aare gleich nebenan. Die praktische Basis für Tagesausflüge in die Jungfrauregion.',
      },
      points: [
        { en: 'Trains for Lauterbrunnen and Grindelwald leave from here', fr: 'Les trains pour Lauterbrunnen et Grindelwald partent d’ici', de: 'Hier fahren die Züge nach Lauterbrunnen und Grindelwald ab' },
        { en: 'Luggage lockers open around the clock, large lockers CHF 10 for 24 hours', fr: 'Casiers à bagages ouverts en continu, grand casier CHF 10 les 24 heures', de: 'Gepäckschliessfächer rund um die Uhr offen, grosses Fach CHF 10 für 24 Stunden' },
      ],
    },
    {
      title: { en: 'Höheweg, between the stations', fr: 'La Höheweg, entre les deux gares', de: 'Höheweg, zwischen den Bahnhöfen' },
      walk: { en: 'Shops and the paragliding meadow', fr: 'Commerces et prairie des parapentistes', de: 'Läden und Gleitschirmwiese' },
      text: {
        en: 'The promenade linking Interlaken Ost and Interlaken West, past the Höhematte meadow where paragliders land after flying off the surrounding peaks. Shops, restaurants and the grand hotels of the belle époque line the street.',
        fr: 'La promenade qui relie Interlaken Ost à Interlaken West, le long de la prairie de la Höhematte où atterrissent les parapentistes venus des sommets alentour. Commerces, restaurants et grands hôtels de la Belle Époque bordent la rue.',
        de: 'Die Promenade zwischen Interlaken Ost und Interlaken West, vorbei an der Höhematte, wo die Gleitschirmflieger von den umliegenden Gipfeln landen. Läden, Restaurants und die Grandhotels der Belle Époque säumen die Strasse.',
      },
      points: [
        { en: '35 000 paraglider landings a year at the Höhematte', fr: '35 000 atterrissages de parapentistes par an sur la Höhematte', de: '35 000 Gleitschirmlandungen pro Jahr auf der Höhematte' },
        { en: 'Midway between the two stations', fr: 'À mi-chemin entre les deux gares', de: 'Auf halbem Weg zwischen den beiden Bahnhöfen' },
      ],
    },
    {
      title: { en: 'Interlaken West and Unterseen', fr: 'Interlaken West et Unterseen', de: 'Interlaken West und Unterseen' },
      walk: { en: 'Lake Thun and the old town', fr: 'Le lac de Thoune et la vieille ville', de: 'Thunersee und Altstadt' },
      text: {
        en: 'Interlaken West is the departure point for the Lake Thun boats and the road towards Bern, with the old town of Unterseen just across the river. Quieter than the Höheweg, and closer to the water.',
        fr: 'Interlaken West est le point de départ des bateaux du lac de Thoune et de la route vers Berne, avec la vieille ville d’Unterseen juste de l’autre côté de la rivière. Plus calme que la Höheweg, et plus proche de l’eau.',
        de: 'Interlaken West ist der Ausgangspunkt für die Boote auf dem Thunersee und die Strasse Richtung Bern, mit der Altstadt von Unterseen gleich auf der anderen Flussseite. Ruhiger als die Höheweg und näher am Wasser.',
      },
      points: [
        { en: 'Lake Thun boats sail year round', fr: 'Les bateaux du lac de Thoune naviguent toute l’année', de: 'Die Boote auf dem Thunersee fahren das ganze Jahr' },
        { en: 'Road access towards Bern or Lucerne', fr: 'Accès routier vers Berne ou Lucerne', de: 'Strassenzugang Richtung Bern oder Luzern' },
      ],
    },
  ],
  hotels: [
    {
      slug: 'il-hotel-du-lac',
      name: 'Hotel Du Lac',
      url: 'https://www.dulac-interlaken.ch/',
      photo: '/photos/hotels/il-hotel-du-lac.jpg',
      sector: { en: 'By Interlaken Ost', fr: 'Près d’Interlaken Ost', de: 'Bei Interlaken Ost' },
      facts: [
        { en: 'One minute from Interlaken Ost station, by the hotel’s own count', fr: 'À une minute de la gare d’Interlaken Ost, selon l’hôtel', de: 'Eine Minute vom Bahnhof Interlaken Ost, laut Hotel' },
        { en: 'Established in 1888, 35 rooms over the river', fr: 'Fondé en 1888, 35 chambres au-dessus de la rivière', de: 'Gegründet 1888, 35 Zimmer über dem Fluss' },
      ],
    },
    {
      slug: 'il-carlton-europe',
      name: 'Carlton Europe Vintage Adults Hotel',
      url: 'https://www.carltoneurope.ch/en',
      photo: '/photos/hotels/il-carlton-europe.jpg',
      sector: { en: 'Höheweg, towards Interlaken Ost', fr: 'Höheweg, côté Interlaken Ost', de: 'Höheweg, Richtung Interlaken Ost' },
      facts: [
        { en: 'Welcoming guests since 1898, on the Höheweg', fr: 'Accueille des clients depuis 1898, sur le Höheweg', de: 'Gäste seit 1898, am Höheweg' },
        { en: 'Adults only, from 16 years', fr: 'Réservé aux adultes, dès 16 ans', de: 'Nur für Erwachsene, ab 16 Jahren' },
      ],
    },
    {
      slug: 'il-hotel-krebs',
      name: 'Hotel Krebs',
      url: 'https://www.krebshotel.ch/',
      photo: '/photos/hotels/il-hotel-krebs.jpg',
      sector: { en: 'Interlaken West', fr: 'Interlaken West', de: 'Interlaken West' },
      facts: [
        { en: 'On Bahnhofstrasse, a few steps from Interlaken West', fr: 'Sur la Bahnhofstrasse, à quelques pas d’Interlaken West', de: 'An der Bahnhofstrasse, wenige Schritte von Interlaken West' },
        { en: 'More than 150 years in the same family tradition', fr: 'Plus de 150 ans de tradition familiale', de: 'Über 150 Jahre Familientradition' },
      ],
    },
    {
      slug: 'il-hotel-lotschberg',
      name: 'Hotel Lötschberg',
      url: 'https://www.lotschberg.ch/en',
      photo: '/photos/hotels/il-hotel-lotschberg.jpg',
      sector: { en: 'Interlaken West', fr: 'Interlaken West', de: 'Interlaken West' },
      facts: [
        { en: 'Built in 1906, art nouveau turret', fr: 'Construit en 1906, tourelle Art nouveau', de: '1906 erbaut, Jugendstil-Türmchen' },
        { en: 'A few minutes on foot from Interlaken West station', fr: 'À quelques minutes à pied de la gare d’Interlaken West', de: 'Wenige Gehminuten vom Bahnhof Interlaken West' },
      ],
    },
    {
      slug: 'il-hotel-beausite',
      name: 'Hotel Beausite',
      url: 'https://www.beausite.ch/en/',
      photo: '/photos/hotels/il-hotel-beausite.jpg',
      sector: { en: 'Unterseen, by the old town', fr: 'Unterseen, près de la vieille ville', de: 'Unterseen, bei der Altstadt' },
      facts: [
        { en: '50 rooms, each decorated differently', fr: '50 chambres, décorées chacune différemment', de: '50 Zimmer, jedes anders eingerichtet' },
        { en: 'A few minutes from the old town of Unterseen', fr: 'À quelques minutes de la vieille ville d’Unterseen', de: 'Wenige Minuten von der Altstadt Unterseen' },
      ],
    },
    {
      slug: 'il-victoria-jungfrau',
      name: 'Victoria-Jungfrau Grand Hotel & Spa',
      url: 'https://www.victoria-jungfrau.ch/en/the-hotel/',
      photo: '/photos/hotels/il-victoria-jungfrau.jpg',
      sector: { en: 'Höheweg, facing the Höhematte', fr: 'Höheweg, face à la Höhematte', de: 'Höheweg, gegenüber der Höhematte' },
      facts: [
        { en: 'Founded in 1856, 216 rooms on the Höheweg', fr: 'Fondé en 1856, 216 chambres sur le Höheweg', de: 'Gegründet 1856, 216 Zimmer am Höheweg' },
        { en: 'Spa of 5500 square metres', fr: 'Spa de 5500 mètres carrés', de: 'Spa mit 5500 Quadratmetern' },
      ],
    },
  ],
  hotelsNote: {
    en: 'Facts taken from each hotel’s own website on 16 September 2026. No ratings or reviews on this guide.',
    fr: 'Faits relevés sur le site de chaque hôtel le 16 septembre 2026. Aucune note ni aucun avis sur ce guide.',
    de: 'Fakten von der Website des jeweiligen Hotels, Stand 16. September 2026. Keine Bewertungen oder Rezensionen.',
  },
  pass: {
    title: { en: 'Swiss Travel Pass, from the rail hub', fr: 'Swiss Travel Pass, depuis le carrefour ferroviaire', de: 'Swiss Travel Pass, ab der Bahn-Drehscheibe' },
    rows: [
      { section: { en: 'Interlaken to Lauterbrunnen and Grindelwald', fr: 'Interlaken → Lauterbrunnen et Grindelwald', de: 'Interlaken → Lauterbrunnen und Grindelwald' }, coverage: 'included' },
      { section: { en: 'Above Wengen and Grindelwald', fr: 'Au-dessus de Wengen et Grindelwald', de: 'Oberhalb von Wengen und Grindelwald' }, coverage: 'discount25' },
      { section: { en: 'Kleine Scheidegg to Jungfraujoch', fr: 'Kleine Scheidegg → Jungfraujoch', de: 'Kleine Scheidegg → Jungfraujoch' }, coverage: 'discount25' },
    ],
    fare: {
      label: { en: 'Interlaken Ost to Jungfraujoch, return, May to October 2026', fr: 'Interlaken Ost ⇄ Jungfraujoch, aller-retour, mai à octobre 2026', de: 'Interlaken Ost ⇄ Jungfraujoch, retour, Mai bis Oktober 2026' },
      without: '261.20',
      with: '177.20',
    },
    note: {
      en: 'Adult, 2nd class. The pass is valid free of charge as far as Wengen and Grindelwald; above them it gives a discount, published as 25%, which is worth confirming at the counter. Fares as published for 2026, checked 16 September 2026: confirm on jungfrau.ch before buying.',
      fr: 'Adulte, 2e classe. Le pass est valable gratuitement jusqu’à Wengen et Grindelwald ; au-dessus, il donne une réduction, publiée à 25 %, qu’il vaut mieux confirmer au guichet. Tarifs publiés pour 2026, relevés le 16 septembre 2026 : à confirmer sur jungfrau.ch avant achat.',
      de: 'Erwachsene, 2. Klasse. Der Pass gilt gratis bis Wengen und Grindelwald, darüber gibt es eine Ermässigung, publiziert mit 25 %, die man am Schalter bestätigen lassen sollte. Tarife gemäss Veröffentlichung 2026, geprüft am 16. September 2026: vor dem Kauf auf jungfrau.ch bestätigen.',
    },
  },
  calendar: {
    title: { en: 'What runs, month by month', fr: 'Ce qui fonctionne, mois par mois', de: 'Was fährt, Monat für Monat' },
    rows: [
      { name: { en: 'Harder Kulm funicular', fr: 'Funiculaire du Harder Kulm', de: 'Harderbahn' }, months: ['x', 'x', 'x', 'r', 'o', 'o', 'o', 'o', 'o', 'o', 'r', 'x'] },
      { name: { en: 'Lake Brienz boats', fr: 'Bateaux du lac de Brienz', de: 'Boote auf dem Brienzersee' }, months: ['x', 'x', 'x', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'r'] },
      { name: { en: 'Lake Thun boats', fr: 'Bateaux du lac de Thoune', de: 'Boote auf dem Thunersee' }, months: ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'] },
      { name: { en: 'Trains to Lauterbrunnen and Grindelwald', fr: 'Trains vers Lauterbrunnen et Grindelwald', de: 'Züge nach Lauterbrunnen und Grindelwald' }, months: ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'] },
    ],
    note: {
      en: '2026 and start of winter 2026/27. Harder Kulm funicular: season 3 April to 29 November 2026, evening rides with alphorn concerts 18 April to 25 October. Lake Brienz boats: BLS states cruises do not run in winter, with no service from 7 December; the exact spring resumption date is not yet published. Lake Thun boats and the trains to Lauterbrunnen and Grindelwald run year round. Sources: jungfrau.ch, bls-schiff.ch, sbb.ch, checked 16 September 2026.',
      fr: '2026 et début de l’hiver 2026/27. Funiculaire du Harder Kulm : saison du 3 avril au 29 novembre 2026, sorties en soirée avec concerts de cor des Alpes du 18 avril au 25 octobre. Bateaux du lac de Brienz : BLS indique que les croisières ne circulent pas en hiver, sans service à partir du 7 décembre ; la date exacte de reprise au printemps n’est pas encore publiée. Les bateaux du lac de Thoune et les trains vers Lauterbrunnen et Grindelwald circulent toute l’année. Sources : jungfrau.ch, bls-schiff.ch, sbb.ch, vérifiées le 16 septembre 2026.',
      de: '2026 und Beginn des Winters 2026/27. Harderbahn: Saison 3. April bis 29. November 2026, Abendfahrten mit Alphornkonzerten 18. April bis 25. Oktober. Boote auf dem Brienzersee: BLS gibt an, dass die Kreuzfahrten im Winter nicht verkehren, kein Betrieb ab 7. Dezember; das genaue Datum der Wiederaufnahme im Frühling ist noch nicht veröffentlicht. Die Boote auf dem Thunersee und die Züge nach Lauterbrunnen und Grindelwald verkehren ganzjährig. Quellen: jungfrau.ch, bls-schiff.ch, sbb.ch, geprüft am 16. September 2026.',
    },
  },
  practical: {
    title: { en: 'Two stations, in practice', fr: 'Deux gares, en pratique', de: 'Zwei Bahnhöfe, in der Praxis' },
    items: [
      {
        title: { en: 'Ost or West', fr: 'Ost ou West', de: 'Ost oder West' },
        text: {
          en: 'Trains from Lauterbrunnen, Grindelwald and the Jungfrau region use Interlaken Ost. Lake Thun boats and the road towards Bern use Interlaken West.',
          fr: 'Les trains en provenance de Lauterbrunnen, de Grindelwald et de la région de la Jungfrau arrivent à Interlaken Ost. Les bateaux du lac de Thoune et la route vers Berne partent d’Interlaken West.',
          de: 'Züge aus Lauterbrunnen, Grindelwald und der Jungfrauregion nutzen Interlaken Ost. Die Boote auf dem Thunersee und die Strasse Richtung Bern nutzen Interlaken West.',
        },
      },
      {
        title: { en: 'Luggage at Interlaken Ost', fr: 'Bagages à Interlaken Ost', de: 'Gepäck in Interlaken Ost' },
        text: {
          en: 'Ticket counter 06:10 to 18:40, luggage service and lost and found 07:30 to 16:30, flight-luggage check-in to Zurich Airport in the same hours. Luggage lockers are open around the clock, 140 units, large lockers CHF 10 for 24 hours.',
          fr: 'Guichet billets de 06h10 à 18h40, service bagages et objets trouvés de 07h30 à 16h30, enregistrement des bagages d’avion pour l’aéroport de Zurich aux mêmes horaires. Casiers à bagages ouverts en continu, 140 unités, grand casier CHF 10 les 24 heures.',
          de: 'Billettschalter von 06.10 bis 18.40 Uhr, Gepäckservice und Fundbüro von 07.30 bis 16.30 Uhr, Flug-Gepäckaufgabe nach Zürich Flughafen zu denselben Zeiten. Gepäckschliessfächer rund um die Uhr offen, 140 Stück, grosses Fach CHF 10 für 24 Stunden.',
        },
      },
      {
        title: { en: 'Boats on both lakes', fr: 'Bateaux sur les deux lacs', de: 'Boote auf beiden Seen' },
        text: {
          en: 'BLS Schifffahrt sails Lake Thun year round and Lake Brienz from spring to autumn, with no Lake Brienz service from 7 December.',
          fr: 'BLS Schifffahrt navigue sur le lac de Thoune toute l’année et sur le lac de Brienz du printemps à l’automne, sans service sur le lac de Brienz à partir du 7 décembre.',
          de: 'BLS Schifffahrt fährt ganzjährig auf dem Thunersee und vom Frühling bis zum Herbst auf dem Brienzersee, ohne Betrieb auf dem Brienzersee ab dem 7. Dezember.',
        },
      },
      {
        title: { en: 'The Harder Kulm funicular', fr: 'Le funiculaire du Harder Kulm', de: 'Die Harderbahn' },
        text: {
          en: 'From Interlaken Ost, the funicular climbs 755 m in 8 minutes to a glass-floor viewing platform over both lakes. Season 2026: daily 3 April to 29 November, evening rides 18 April to 25 October.',
          fr: 'Depuis Interlaken Ost, le funiculaire grimpe de 755 m en 8 minutes jusqu’à une plateforme au sol vitré dominant les deux lacs. Saison 2026 : tous les jours du 3 avril au 29 novembre, sorties en soirée du 18 avril au 25 octobre.',
          de: 'Ab Interlaken Ost steigt die Bahn in 8 Minuten 755 Höhenmeter zu einer Aussichtsplattform mit Glasboden über beiden Seen. Saison 2026: täglich vom 3. April bis 29. November, Abendfahrten vom 18. April bis 25. Oktober.',
        },
      },
    ],
  },
  seasons: {
    winter: {
      title: { en: 'Winter in Interlaken', fr: 'L’hiver à Interlaken', de: 'Winter in Interlaken' },
      base: {
        en: 'Interlaken stays the rail hub for the ski areas above: trains keep running to Lauterbrunnen and Grindelwald all winter. The Harder Kulm funicular is closed for the season, and Lake Brienz boats stop, while Lake Thun keeps a winter timetable with floating restaurants.',
        fr: 'Interlaken reste le carrefour ferroviaire des domaines skiables au-dessus : les trains vers Lauterbrunnen et Grindelwald circulent tout l’hiver. Le funiculaire du Harder Kulm est fermé pour la saison, et les bateaux du lac de Brienz s’arrêtent, tandis que le lac de Thoune garde un horaire d’hiver avec des restaurants flottants.',
        de: 'Interlaken bleibt die Bahn-Drehscheibe für die Skigebiete darüber: Die Züge nach Lauterbrunnen und Grindelwald verkehren den ganzen Winter. Die Harderbahn ist für die Saison geschlossen, und die Boote auf dem Brienzersee stellen den Betrieb ein, während der Thunersee einen Winterfahrplan mit schwimmenden Restaurants behält.',
      },
      facts: [
        { value: '7 Dec', label: { en: 'Lake Brienz boats stop for the winter', fr: 'les bateaux du lac de Brienz s’arrêtent pour l’hiver', de: 'Boote auf dem Brienzersee stellen den Winterbetrieb ein' } },
        { value: '8.12 → 22.3', label: { en: 'BLS winter floating restaurants on Lake Thun, 2025/26', fr: 'restaurants flottants d’hiver de BLS sur le lac de Thoune, 2025/26', de: 'BLS-Winterrestaurantschiffe auf dem Thunersee, 2025/26' } },
        { value: '29.11', label: { en: 'last day of the Harder Kulm funicular before its winter closure', fr: 'dernier jour du funiculaire du Harder Kulm avant sa fermeture hivernale', de: 'letzter Tag der Harderbahn vor der Winterschliessung' } },
        { value: '140', label: { en: 'luggage lockers at Interlaken Ost, open around the clock', fr: 'casiers à bagages à Interlaken Ost, ouverts en continu', de: 'Gepäckschliessfächer in Interlaken Ost, rund um die Uhr offen' } },
      ],
      note: {
        en: 'Sources: bls-schiff.ch, jungfrau.ch, sbb.ch, checked 16 September 2026.',
        fr: 'Sources : bls-schiff.ch, jungfrau.ch, sbb.ch, vérifiées le 16 septembre 2026.',
        de: 'Quellen: bls-schiff.ch, jungfrau.ch, sbb.ch, geprüft am 16. September 2026.',
      },
    },
    summer: {
      title: { en: 'Summer in Interlaken', fr: 'L’été à Interlaken', de: 'Sommer in Interlaken' },
      base: {
        en: 'The lakes and the Harder Kulm are in full swing: stay around Interlaken Ost for the funicular and the trains onward to Lauterbrunnen and Grindelwald, or around Interlaken West for the Lake Thun boats and Unterseen’s old town.',
        fr: 'Les lacs et le Harder Kulm tournent à plein régime : logez autour d’Interlaken Ost pour le funiculaire et les trains vers Lauterbrunnen et Grindelwald, ou autour d’Interlaken West pour les bateaux du lac de Thoune et la vieille ville d’Unterseen.',
        de: 'Seen und Harder Kulm laufen auf Hochtouren: Wer bei Interlaken Ost wohnt, hat die Bahn und die Züge nach Lauterbrunnen und Grindelwald vor der Tür, wer bei Interlaken West wohnt, die Boote auf dem Thunersee und die Altstadt von Unterseen.',
      },
      facts: [
        { value: '3.4 → 29.11', label: { en: 'Harder Kulm funicular, season 2026', fr: 'funiculaire du Harder Kulm, saison 2026', de: 'Harderbahn, Saison 2026' } },
        { value: '18.4 → 25.10', label: { en: 'Harder Kulm evening rides with alphorn concerts, 2026', fr: 'sorties en soirée du Harder Kulm avec concerts de cor des Alpes, 2026', de: 'Harderbahn-Abendfahrten mit Alphornkonzerten, 2026' } },
        { value: '35000', label: { en: 'paraglider landings a year at the Höhematte', fr: 'atterrissages de parapentistes par an sur la Höhematte', de: 'Gleitschirmlandungen pro Jahr auf der Höhematte' } },
        { value: '8 min', label: { en: 'up the Harder Kulm funicular, 755 m of ascent', fr: 'en funiculaire jusqu’au Harder Kulm, 755 m de dénivelé', de: 'mit der Harderbahn hinauf, 755 Höhenmeter' } },
      ],
      note: {
        en: 'Sources: jungfrau.ch, checked 16 September 2026.',
        fr: 'Sources : jungfrau.ch, vérifiées le 16 septembre 2026.',
        de: 'Quellen: jungfrau.ch, geprüft am 16. September 2026.',
      },
    },
  },
  faq: [
    {
      q: { en: 'Which station do I arrive at, Ost or West?', fr: 'À quelle gare arrive-t-on, Ost ou West ?', de: 'An welchem Bahnhof kommt man an, Ost oder West?' },
      a: {
        en: 'Trains from Lauterbrunnen, Grindelwald and the Jungfrau region use Interlaken Ost. Lake Thun boats and the road towards Bern use Interlaken West.',
        fr: 'Les trains en provenance de Lauterbrunnen, de Grindelwald et de la région de la Jungfrau arrivent à Interlaken Ost. Les bateaux du lac de Thoune et la route vers Berne partent d’Interlaken West.',
        de: 'Züge aus Lauterbrunnen, Grindelwald und der Jungfrauregion nutzen Interlaken Ost. Die Boote auf dem Thunersee und die Strasse Richtung Bern nutzen Interlaken West.',
      },
    },
    {
      q: { en: 'Can I see both lakes from Interlaken?', fr: 'Peut-on voir les deux lacs depuis Interlaken ?', de: 'Sieht man von Interlaken aus beide Seen?' },
      a: {
        en: 'Yes. Lake Thun lies west of town and Lake Brienz east; BLS Schifffahrt sails both, though Lake Brienz cruises stop for the winter from 7 December.',
        fr: 'Oui. Le lac de Thoune s’étend à l’ouest de la ville et le lac de Brienz à l’est ; BLS Schifffahrt navigue sur les deux, mais les croisières sur le lac de Brienz s’arrêtent pour l’hiver dès le 7 décembre.',
        de: 'Ja. Der Thunersee liegt westlich der Stadt, der Brienzersee östlich; BLS Schifffahrt fährt auf beiden, doch die Kreuzfahrten auf dem Brienzersee stellen ab dem 7. Dezember den Winterbetrieb ein.',
      },
    },
    {
      q: { en: 'How do I get up the Harder Kulm?', fr: 'Comment monter au Harder Kulm ?', de: 'Wie kommt man auf den Harder Kulm?' },
      a: {
        en: 'By the funicular from Interlaken Ost, 8 minutes for 755 m of ascent. Season 2026: daily 3 April to 29 November, evening rides 18 April to 25 October.',
        fr: 'Par le funiculaire depuis Interlaken Ost, 8 minutes pour 755 m de dénivelé. Saison 2026 : tous les jours du 3 avril au 29 novembre, sorties en soirée du 18 avril au 25 octobre.',
        de: 'Mit der Bahn ab Interlaken Ost, 8 Minuten für 755 Höhenmeter. Saison 2026: täglich vom 3. April bis 29. November, Abendfahrten vom 18. April bis 25. Oktober.',
      },
    },
    {
      q: { en: 'Does the Swiss Travel Pass cover the way to the Jungfraujoch?', fr: 'Le Swiss Travel Pass couvre-t-il la route vers le Jungfraujoch ?', de: 'Gilt der Swiss Travel Pass auf dem Weg zum Jungfraujoch?' },
      a: {
        en: 'The valley legs to Wengen and Grindelwald are free with the pass. Above them, it gives a discount, published as 25%, worth confirming at a Jungfrau Railways counter.',
        fr: 'Les tronçons de vallée vers Wengen et Grindelwald sont gratuits avec le pass. Au-dessus, il donne une réduction, publiée à 25 %, qu’il vaut mieux confirmer à un guichet des Jungfraubahnen.',
        de: 'Die Talabschnitte nach Wengen und Grindelwald sind mit dem Pass gratis. Darüber gibt es eine Ermässigung, publiziert mit 25 %, die man an einem Schalter der Jungfraubahnen bestätigen sollte.',
      },
    },
    {
      q: { en: 'Can you drive to Interlaken?', fr: 'Peut-on venir en voiture à Interlaken ?', de: 'Kann man mit dem Auto nach Interlaken fahren?' },
      a: {
        en: 'Yes. Interlaken is reached by road via Bern or Lucerne, or from the south over the seasonal Grimsel or Simplon passes, the Simplon route continuing on the Lötschberg car-carrying train.',
        fr: 'Oui. Interlaken se rejoint par la route via Berne ou Lucerne, ou depuis le sud par les cols saisonniers du Grimsel ou du Simplon, la route du Simplon se poursuivant sur le train-navette du Lötschberg.',
        de: 'Ja. Interlaken erreicht man auf der Strasse über Bern oder Luzern, oder von Süden über die saisonalen Pässe Grimsel oder Simplon, wobei die Simplonroute mit der Autoverladung am Lötschberg weitergeht.',
      },
    },
  ],
  neighbours: ['lauterbrunnen', 'wengen', 'grindelwald', 'murren'],
}
