import type { DestinationGuide } from '../types'

// Every fact below is sourced in data/SOURCES.md (checked 15/09/2026). Do not add a number without a source.
export const wengen: DestinationGuide = {
  slug: 'wengen',
  stamp: 'wengen',
  updated: '2026-09-15',
  meta: {
    title: { en: 'Where to stay in Wengen: areas, hotels, car-free access', fr: 'Où dormir à Wengen : secteurs, hôtels, accès sans voiture', de: 'Wo übernachten in Wengen: Ortsteile, Hotels, autofreie Anreise' },
    description: {
      en: 'Wengen area by area: the station centre, the Männlichen cable car, the slope above the village. Nine hotels from budget to top end with dated prices, Swiss Travel Pass coverage and what closes when.',
      fr: 'Wengen secteur par secteur : le centre autour de la gare, le téléphérique du Männlichen, le versant au-dessus du village. Neuf hôtels du petit budget au haut de gamme, prix datés, la couverture du Swiss Travel Pass et ce qui ferme quand.',
      de: 'Wengen Ortsteil für Ortsteil: Bahnhofszentrum, Männlichenbahn, Hang oberhalb des Dorfes. Neun Hotels von günstig bis gehoben mit datierten Preisen, Swiss Travel Pass und was wann geschlossen ist.',
    },
  },
  eyebrow: { en: 'Bernese Oberland · Lauterbrunnen', fr: 'Oberland bernois · Lauterbrunnen', de: 'Berner Oberland · Lauterbrunnen' },
  title: { en: 'Where to stay in Wengen', fr: 'Où dormir à Wengen', de: 'Wo übernachten in Wengen' },
  intro: {
    en: 'A car-free village on a terrace above the Lauterbrunnen valley, reached only by the Wengernalp rack railway. Shops and hotels gather around the station, and the same line climbs on to Kleine Scheidegg, where trains leave for the Jungfraujoch.',
    fr: "Un village sans voiture posé sur une terrasse au-dessus de la vallée de Lauterbrunnen, accessible uniquement par le train à crémaillère de la Wengernalp. Commerces et hôtels se regroupent autour de la gare, et la même ligne continue jusqu'à la Kleine Scheidegg, d'où partent les trains du Jungfraujoch.",
    de: 'Ein autofreies Dorf auf einer Terrasse über dem Lauterbrunnental, nur mit der Zahnradbahn der Wengernalpbahn erreichbar. Läden und Hotels liegen rund um den Bahnhof, und dieselbe Linie fährt weiter zur Kleinen Scheidegg, wo die Züge aufs Jungfraujoch starten.',
  },
  quickAnswer: {
    en: 'Stay in Wengen for a car-free village with shops around the station, 12 minutes by train above Lauterbrunnen. If the Jungfraujoch is the main goal, Grindelwald gets you there faster.',
    fr: "Dormez à Wengen pour un village sans voiture avec des commerces autour de la gare, à 12 minutes de train au-dessus de Lauterbrunnen. Si le Jungfraujoch est l'objectif principal, Grindelwald y mène plus vite.",
    de: 'Übernachten Sie in Wengen für ein autofreies Dorf mit Läden rund um den Bahnhof, 12 Zugminuten über Lauterbrunnen. Ist das Jungfraujoch das Hauptziel, sind Sie ab Grindelwald schneller oben.',
  },
  snapshot: {
    why: {
      en: 'No cars, a real village around the station, and the Wengernalp line running on to Kleine Scheidegg and the Jungfraujoch trains.',
      fr: 'Pas de voitures, un vrai village autour de la gare, et la ligne de la Wengernalp qui continue vers la Kleine Scheidegg et les trains du Jungfraujoch.',
      de: 'Keine Autos, ein echtes Dorf rund um den Bahnhof und die Wengernalpbahn weiter zur Kleinen Scheidegg und zu den Jungfraujoch-Zügen.',
    },
    where: {
      en: 'Around the station for easy arrivals, up the main street for the Männlichen cable car, above the village for valley views.',
      fr: 'Autour de la gare pour arriver facilement, en remontant la rue principale pour le téléphérique du Männlichen, au-dessus du village pour la vue.',
      de: 'Rund um den Bahnhof für eine einfache Ankunft, die Dorfstrasse hinauf für die Männlichenbahn, oberhalb des Dorfes für die Talsicht.',
    },
    watch: {
      en: 'Low season roughly mid-April to late May and in November: many hotels close and lifts stop for maintenance.',
      fr: 'Basse saison environ de mi-avril à fin mai et en novembre : beaucoup d’hôtels ferment et les remontées s’arrêtent pour entretien.',
      de: 'Zwischensaison etwa Mitte April bis Ende Mai und im November: viele Hotels schliessen, Bahnen stehen für Revisionen still.',
    },
  },
  stats: [
    { value: '1274', label: { en: 'metres above sea level', fr: "mètres d'altitude", de: 'Meter über Meer' } },
    { value: '12', label: { en: 'minutes by train from Lauterbrunnen', fr: 'minutes de train depuis Lauterbrunnen', de: 'Zugminuten ab Lauterbrunnen' } },
    { value: '0', label: { en: 'private cars in the village', fr: 'voiture privée dans le village', de: 'Privatautos im Dorf' } },
  ],
  hero: {
    photo: '/photos/wengen-hero.jpg',
    caption: { en: 'Wengen seen from Isenfluh, with the Eiger, Mönch and Jungfrau behind.', fr: "Wengen vu d'Isenfluh, avec l'Eiger, le Mönch et la Jungfrau en arrière-plan.", de: 'Wengen von Isenfluh aus, dahinter Eiger, Mönch und Jungfrau.' },
    credit: { author: 'Parchaco', license: 'CC0 1.0', licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/', source: 'https://commons.wikimedia.org/wiki/File:Wengen_viewed_from_Isenfluh%2C_in_the_background%2C_the_Eiger%2C_M%C3%B6nch%2C_and_Jungfrau_peaks_rise.jpg' },
  },
  sectors: [
    {
      title: { en: 'Around the station', fr: 'Autour de la gare', de: 'Rund um den Bahnhof' },
      walk: { en: 'The village centre', fr: 'Le centre du village', de: 'Das Dorfzentrum' },
      text: {
        en: 'Shops, restaurants and a grocery store sit right by the station. The easiest base with luggage, and the liveliest in the evening.',
        fr: 'Commerces, restaurants et une épicerie se trouvent juste à côté de la gare. La base la plus simple avec des bagages, et la plus animée le soir.',
        de: 'Läden, Restaurants und ein Lebensmittelgeschäft liegen direkt beim Bahnhof. Die einfachste Basis mit Gepäck und abends am lebhaftesten.',
      },
      points: [
        { en: 'No transfer on arrival', fr: "Aucun transfert à l'arrivée", de: 'Kein Transfer bei der Ankunft' },
        { en: 'Free luggage trolleys at the station', fr: 'Chariots à bagages gratuits à la gare', de: 'Gratis Gepäckwagen am Bahnhof' },
      ],
    },
    {
      title: { en: 'Up the main street', fr: 'En remontant la rue principale', de: 'Die Dorfstrasse hinauf' },
      walk: { en: 'By the Männlichen cable car', fr: 'Près du téléphérique du Männlichen', de: 'Bei der Männlichenbahn' },
      text: {
        en: 'The Wengen to Männlichen cable car leaves from the centre, a short walk up the main street next to the tourist office. The practical choice for ridge walks in summer and the slopes in winter.',
        fr: "Le téléphérique Wengen-Männlichen part du centre, à quelques pas en remontant la rue principale, à côté de l'office du tourisme. Le choix pratique pour les randonnées de crête l'été et les pistes l'hiver.",
        de: 'Die Luftseilbahn Wengen-Männlichen fährt im Zentrum ab, ein paar Schritte die Dorfstrasse hinauf neben dem Tourismusbüro. Praktisch für Gratwanderungen im Sommer und die Pisten im Winter.',
      },
      points: [
        { en: 'Cable car in the village centre', fr: 'Téléphérique au centre du village', de: 'Seilbahn im Dorfzentrum' },
        { en: 'Summer 2026 season: 23 May to 25 October', fr: 'Saison été 2026 : du 23 mai au 25 octobre', de: 'Sommersaison 2026: 23. Mai bis 25. Oktober' },
      ],
    },
    {
      title: { en: 'Above the village', fr: 'Au-dessus du village', de: 'Oberhalb des Dorfes' },
      walk: { en: 'Uphill from the station', fr: 'En montée depuis la gare', de: 'Bergauf vom Bahnhof' },
      text: {
        en: 'The church stands on an outcrop at the north end of the village. Hotels and chalets on the slope look over the Lauterbrunnen valley, with a steep walk back up.',
        fr: "L'église se dresse sur un promontoire au nord du village. Hôtels et chalets du versant regardent la vallée de Lauterbrunnen, avec une montée raide au retour.",
        de: 'Die Kirche steht auf einem Felsvorsprung am Nordende des Dorfes. Hotels und Chalets am Hang blicken ins Lauterbrunnental, der Rückweg ist steil.',
      },
      points: [
        { en: 'Open views over the valley', fr: 'Vue dégagée sur la vallée', de: 'Freie Sicht ins Tal' },
        { en: 'A steep climb with suitcases', fr: 'Montée raide avec des valises', de: 'Steiler Aufstieg mit Koffern' },
      ],
    },
  ],
  hotels: [
    {
      slug: 'hotel-regina',
      name: 'Hotel Regina',
      photo: '/photos/hotels/hotel-regina.jpg',
      url: 'https://www.hotelregina.ch/en/index',
      sector: { en: 'Around the station', fr: 'Autour de la gare', de: 'Rund um den Bahnhof' },
      facts: [
        { en: 'Family hotel founded in 1894', fr: 'Hôtel familial fondé en 1894', de: 'Familienhotel, gegründet 1894' },
        { en: 'A short walk through the village from the station', fr: 'À quelques pas de la gare par le village', de: 'Wenige Schritte vom Bahnhof durchs Dorf' },
        { en: 'Seasonal closure: check dates on the hotel site', fr: "Fermeture saisonnière : dates sur le site de l'hôtel", de: 'Saisonale Schliessung: Daten auf der Hotelwebsite' },
      ],
    },
    {
      slug: 'hotel-silberhorn',
      name: 'Hotel Silberhorn',
      photo: '/photos/hotels/hotel-silberhorn.jpg',
      url: 'https://www.silberhorn.ch/en',
      sector: { en: 'Around the station', fr: 'Autour de la gare', de: 'Rund um den Bahnhof' },
      facts: [
        { en: '1 minute from the station, by the hotel’s own count', fr: "À 1 minute de la gare, selon l'hôtel", de: '1 Minute vom Bahnhof, laut Hotel' },
        { en: 'Porter service', fr: 'Service de bagagiste', de: 'Gepäckservice' },
        { en: 'Fondue restaurant in the hotel', fr: "Restaurant à fondue dans l'hôtel", de: 'Fondue-Restaurant im Haus' },
      ],
    },
    {
      slug: 'hotel-falken',
      name: 'Hotel Falken',
      photo: '/photos/hotels/hotel-falken.jpg',
      url: 'https://www.hotelfalken.com/history',
      sector: { en: 'Above the village', fr: 'Au-dessus du village', de: 'Oberhalb des Dorfes' },
      facts: [
        { en: 'Built in 1895', fr: 'Construit en 1895', de: 'Erbaut 1895' },
        { en: 'On the hillside above the station', fr: 'Sur le coteau au-dessus de la gare', de: 'Am Hang oberhalb des Bahnhofs' },
        { en: 'Short, steep walk up from the train', fr: 'Montée courte et raide depuis le train', de: 'Kurzer, steiler Weg vom Zug hinauf' },
      ],
    },
    {
      slug: 'grand-hotel-belvedere',
      name: 'Grand Hotel Belvédère',
      photo: '/photos/hotels/grand-hotel-belvedere.jpg',
      url: 'https://www.beaumier.com/en/properties/grand-hotel-belvedere/',
      sector: { en: 'Up the main street', fr: 'En remontant la rue principale', de: 'Die Dorfstrasse hinauf' },
      facts: [
        { en: '450 m from the station', fr: 'À 450 m de la gare', de: '450 m vom Bahnhof' },
        { en: 'Paid porter service from Lauterbrunnen, book ahead', fr: "Service de bagages payant depuis Lauterbrunnen, à réserver à l'avance", de: 'Kostenpflichtiger Gepäckservice ab Lauterbrunnen, im Voraus buchen' },
        { en: 'Seasonal closure: check dates on the hotel site', fr: "Fermeture saisonnière : dates sur le site de l'hôtel", de: 'Saisonale Schliessung: Daten auf der Hotelwebsite' },
      ],
    },
    {
      slug: 'hotel-bellevue',
      name: 'Hotel Bellevue',
      url: 'https://www.bellevue-wengen.ch/en/home/',
      photo: '/photos/hotels/hotel-bellevue.jpg',
      sector: { en: 'Edge of the village', fr: 'En bordure du village', de: 'Am Dorfrand' },
      facts: [
        { en: 'Traditional house built in 1890', fr: 'Maison traditionnelle construite en 1890', de: 'Traditionshaus, erbaut 1890' },
        { en: '34 rooms', fr: '34 chambres', de: '34 Zimmer' },
        { en: 'Open in the summer and winter seasons only', fr: 'Ouvert uniquement en saison d’été et d’hiver', de: 'Nur in der Sommer- und Wintersaison geöffnet' },
      ],
    },
    {
      slug: 'hotel-victoria-lauberhorn',
      name: 'Hotel Victoria Lauberhorn',
      url: 'https://www.faernresorts.com/wengen',
      photo: '/photos/hotels/hotel-victoria-lauberhorn.jpg',
      sector: { en: 'Around the station', fr: 'Autour de la gare', de: 'Rund um den Bahnhof' },
      facts: [
        { en: 'One minute from the station, by the hotel’s own count', fr: 'À une minute de la gare, selon l’hôtel', de: 'Eine Minute vom Bahnhof, laut Hotel' },
        { en: 'Wellness area of 1000 m² with an indoor pool', fr: 'Espace bien-être de 1000 m² avec piscine intérieure', de: '1000 m² Wellnessbereich mit Hallenbad' },
        { en: 'Welcoming guests since 1897, open all year', fr: 'Accueille des clients depuis 1897, ouvert toute l’année', de: 'Gäste seit 1897, ganzjährig geöffnet' },
      ],
    },
    {
      slug: 'braunbar-hotel-spa',
      name: 'Braunbär Hotel & Spa',
      url: 'https://www.braunbaerhotel.com/en/hotel',
      photo: '/photos/hotels/braunbar-hotel-spa.jpg',
      sector: { en: 'Up the main street', fr: 'En remontant la rue principale', de: 'Die Dorfstrasse hinauf' },
      facts: [
        { en: 'Directly opposite the Männlichen cable car', fr: 'Juste en face du téléphérique du Männlichen', de: 'Direkt gegenüber der Männlichenbahn' },
        { en: 'Spa with a pool', fr: 'Spa avec piscine', de: 'Spa mit Pool' },
      ],
    },
    {
      slug: 'hotel-schonegg',
      name: 'Hotel Schönegg',
      url: 'https://hotel-schoenegg.ch/en/',
      photo: '/photos/hotels/hotel-schonegg.jpg',
      sector: { en: 'Village centre', fr: 'Centre du village', de: 'Dorfzentrum' },
      facts: [
        { en: 'Founded in 1903, fully renovated in 2012', fr: 'Fondé en 1903, entièrement rénové en 2012', de: 'Gegründet 1903, 2012 komplett renoviert' },
        { en: 'Facing the Jungfrau massif', fr: 'Face au massif de la Jungfrau', de: 'Gegenüber dem Jungfraumassiv' },
        { en: 'Restaurant “1903” in the hotel', fr: 'Restaurant « 1903 » dans l’hôtel', de: 'Restaurant «1903» im Haus' },
      ],
    },
    {
      slug: 'beausite-park-hotel',
      name: 'Beausite Park Hotel & Spa',
      url: 'https://www.beausiteparkhotel.ch/en/',
      photo: '/photos/hotels/beausite-park-hotel.jpg',
      sector: { en: 'Free shuttle from the station', fr: 'Navette gratuite depuis la gare', de: 'Gratis Shuttle ab Bahnhof' },
      facts: [
        { en: 'Established in 1898', fr: 'Fondé en 1898', de: 'Gegründet 1898' },
        { en: 'Spa with sauna and pool', fr: 'Spa avec sauna et piscine', de: 'Spa mit Sauna und Pool' },
        { en: 'Closed for renovation, reopening on 20 December per the hotel', fr: 'Fermé pour rénovation, réouverture le 20 décembre selon l’hôtel', de: 'Wegen Renovierung geschlossen, Wiedereröffnung am 20. Dezember laut Hotel' },
      ],
    },
  ],
  hotelsNote: {
    en: 'Facts taken from each hotel’s own website on 15 September 2026. No ratings or reviews on this guide. Hotels set their own seasonal closing dates.',
    fr: "Faits relevés sur le site de chaque hôtel le 15 septembre 2026. Aucune note ni aucun avis sur ce guide. Chaque hôtel fixe ses propres dates de fermeture.",
    de: 'Fakten von der Website des jeweiligen Hotels, Stand 15. September 2026. Keine Bewertungen oder Rezensionen. Jedes Hotel legt seine Schliessungsdaten selbst fest.',
  },
  pass: {
    title: { en: 'Swiss Travel Pass, on the way up', fr: 'Swiss Travel Pass, dans la montée', de: 'Swiss Travel Pass, auf dem Weg nach oben' },
    rows: [
      { section: { en: 'Interlaken Ost to Lauterbrunnen', fr: 'Interlaken Ost → Lauterbrunnen', de: 'Interlaken Ost → Lauterbrunnen' }, coverage: 'included' },
      { section: { en: 'Lauterbrunnen to Wengen', fr: 'Lauterbrunnen → Wengen', de: 'Lauterbrunnen → Wengen' }, coverage: 'included' },
      { section: { en: 'Wengen to Kleine Scheidegg', fr: 'Wengen → Kleine Scheidegg', de: 'Wengen → Kleine Scheidegg' }, coverage: 'discount25' },
      { section: { en: 'Kleine Scheidegg to Jungfraujoch', fr: 'Kleine Scheidegg → Jungfraujoch', de: 'Kleine Scheidegg → Jungfraujoch' }, coverage: 'discount25' },
    ],
    fare: {
      label: { en: 'Interlaken Ost to Jungfraujoch, return, May to October 2026', fr: 'Interlaken Ost ⇄ Jungfraujoch, aller-retour, mai à octobre 2026', de: 'Interlaken Ost ⇄ Jungfraujoch, retour, Mai bis Oktober 2026' },
      without: '261.20',
      with: '177.20',
    },
    note: {
      en: 'Adult, 2nd class. The pass is valid free of charge as far as Wengen; above Wengen it gives 25% off. A seat reservation (CHF 10) is compulsory on the Jungfrau Railway from 1 May to 31 October. Fares as published for 2026, checked on 15 September 2026: confirm on jungfrau.ch before buying.',
      fr: "Adulte, 2e classe. Le pass est valable gratuitement jusqu'à Wengen ; au-dessus de Wengen, il donne 25 % de réduction. Une réservation de place (CHF 10) est obligatoire sur le chemin de fer de la Jungfrau du 1er mai au 31 octobre. Tarifs publiés pour 2026, relevés le 15 septembre 2026 : à confirmer sur jungfrau.ch avant achat.",
      de: 'Erwachsene, 2. Klasse. Der Pass gilt gratis bis Wengen, ab Wengen gibt es 25 % Ermässigung. Auf der Jungfraubahn ist vom 1. Mai bis 31. Oktober eine Sitzplatzreservation (CHF 10) obligatorisch. Tarife gemäss Veröffentlichung 2026, geprüft am 15. September 2026: vor dem Kauf auf jungfrau.ch bestätigen.',
    },
  },
  calendar: {
    title: { en: 'What runs, month by month', fr: 'Ce qui fonctionne, mois par mois', de: 'Was fährt, Monat für Monat' },
    rows: [
      { name: { en: 'Train Lauterbrunnen to Wengen', fr: 'Train Lauterbrunnen → Wengen', de: 'Bahn Lauterbrunnen → Wengen' }, months: ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'] },
      { name: { en: 'Train Wengen to Kleine Scheidegg', fr: 'Train Wengen → Kleine Scheidegg', de: 'Bahn Wengen → Kleine Scheidegg' }, months: ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'r', 'r'] },
      { name: { en: 'Wengen to Männlichen cable car', fr: 'Téléphérique Wengen → Männlichen', de: 'Luftseilbahn Wengen → Männlichen' }, months: ['o', 'o', 'o', 'r', 'r', 'o', 'o', 'o', 'o', 'r', 'x', 'r'] },
    ],
    note: {
      en: '2026 and start of winter 2026/27. Männlichen cable car: winter season until early April, summer season 23 May to 25 October 2026, winter from 12 December 2026. Wengen to Kleine Scheidegg: annual maintenance break around November, exact 2026 dates not yet published by the operator. Hotels and restaurants set their own dates: many close roughly from mid-April to late May and in November.',
      fr: "2026 et début de l'hiver 2026/27. Téléphérique du Männlichen : saison d'hiver jusqu'à début avril, saison d'été du 23 mai au 25 octobre 2026, hiver à partir du 12 décembre 2026. Wengen → Kleine Scheidegg : pause annuelle d'entretien vers novembre, dates 2026 pas encore publiées par l'exploitant. Hôtels et restaurants fixent leurs propres dates : beaucoup ferment environ de mi-avril à fin mai et en novembre.",
      de: '2026 und Beginn des Winters 2026/27. Männlichenbahn: Wintersaison bis Anfang April, Sommersaison 23. Mai bis 25. Oktober 2026, Winter ab 12. Dezember 2026. Wengen → Kleine Scheidegg: jährliche Revisionspause um November, genaue Daten 2026 vom Betreiber noch nicht veröffentlicht. Hotels und Restaurants legen ihre Daten selbst fest: viele schliessen etwa von Mitte April bis Ende Mai und im November.',
    },
  },
  practical: {
    title: { en: 'Car-free, in practice', fr: 'Sans voiture, en pratique', de: 'Autofrei, in der Praxis' },
    items: [
      {
        title: { en: 'Leave the car in Lauterbrunnen', fr: 'Laisser la voiture à Lauterbrunnen', de: 'Auto in Lauterbrunnen lassen' },
        text: {
          en: 'The road ends at Lauterbrunnen. The covered car park next to the station has 940 spaces. Check current rates before you go.',
          fr: "La route s'arrête à Lauterbrunnen. Le parking couvert à côté de la gare compte 940 places. Vérifiez les tarifs avant de partir.",
          de: 'Die Strasse endet in Lauterbrunnen. Das Parkhaus neben dem Bahnhof hat 940 Plätze. Aktuelle Tarife vorher prüfen.',
        },
      },
      {
        title: { en: 'Take the train up', fr: 'Monter en train', de: 'Mit dem Zug hinauf' },
        text: {
          en: 'The Wengernalp Railway climbs from Lauterbrunnen to Wengen in 12 minutes, from early morning to late evening. Check the timetable for your date.',
          fr: 'Le train de la Wengernalp monte de Lauterbrunnen à Wengen en 12 minutes, du petit matin au soir. Vérifiez l’horaire pour votre date.',
          de: 'Die Wengernalpbahn fährt in 12 Minuten von Lauterbrunnen nach Wengen, vom frühen Morgen bis spätabends. Fahrplan für Ihr Datum prüfen.',
        },
      },
      {
        title: { en: 'Luggage', fr: 'Bagages', de: 'Gepäck' },
        text: {
          en: 'Free trolleys and lockers at Wengen station. Many hotels send an electric vehicle to the station if you give them your train time.',
          fr: "Chariots gratuits et casiers à la gare de Wengen. Beaucoup d'hôtels envoient un véhicule électrique à la gare si vous donnez l'heure de votre train.",
          de: 'Gratis Gepäckwagen und Schliessfächer am Bahnhof Wengen. Viele Hotels schicken ein Elektrofahrzeug zum Bahnhof, wenn Sie Ihre Ankunftszeit mitteilen.',
        },
      },
      {
        title: { en: 'In the village', fr: 'Dans le village', de: 'Im Dorf' },
        text: {
          en: 'On foot. Only electric service and taxi vehicles drive in Wengen.',
          fr: 'À pied. Seuls des véhicules électriques de service et des taxis circulent à Wengen.',
          de: 'Zu Fuss. In Wengen fahren nur elektrische Dienst- und Taxifahrzeuge.',
        },
      },
    ],
  },
  seasons: {
    winter: {
      title: { en: 'Winter in Wengen', fr: 'L’hiver à Wengen', de: 'Winter in Wengen' },
      base: {
        en: 'Skiers do best near the station or up the main street: the Männlichen cable car and the Wengernalp train to Wengernalp and Kleine Scheidegg both lead into the Grindelwald-Wengen ski area.',
        fr: 'Pour skier, visez les abords de la gare ou le haut de la rue principale : le téléphérique du Männlichen et le train de la Wengernalp vers Wengernalp et la Kleine Scheidegg mènent tous deux au domaine Grindelwald-Wengen.',
        de: 'Skifahrer wohnen am besten beim Bahnhof oder die Dorfstrasse hinauf: Männlichenbahn und Wengernalpbahn nach Wengernalp und Kleine Scheidegg führen beide ins Skigebiet Grindelwald-Wengen.',
      },
      facts: [
        { value: '103 km', label: { en: 'of pistes in the Grindelwald-Wengen ski area', fr: 'de pistes sur le domaine Grindelwald-Wengen', de: 'Pisten im Skigebiet Grindelwald-Wengen' } },
        { value: '12.12 → 4.4', label: { en: 'Männlichen cable car, winter 2026/27', fr: 'téléphérique du Männlichen, hiver 2026/27', de: 'Männlichenbahn, Winter 2026/27' } },
        { value: '15-17.1', label: { en: 'Lauberhorn World Cup races 2027, finish at Innerwengen', fr: 'courses de Coupe du monde du Lauberhorn 2027, arrivée à Innerwengen', de: 'Lauberhorn-Weltcuprennen 2027, Ziel in Innerwengen' } },
        { value: '4.5 km', label: { en: 'Fox Run sledge run from Wengernalp', fr: 'piste de luge Fox Run depuis Wengernalp', de: 'Schlittelbahn Fox Run ab Wengernalp' } },
      ],
      note: {
        en: 'Lauberhorn tickets go on sale on 2 November 2026 on lauberhorn.ch. Sources: wengen.swiss, maennlichen.ch, lauberhorn.ch, checked 15 September 2026.',
        fr: 'Billets du Lauberhorn en vente dès le 2 novembre 2026 sur lauberhorn.ch. Sources : wengen.swiss, maennlichen.ch, lauberhorn.ch, vérifiées le 15 septembre 2026.',
        de: 'Lauberhorn-Tickets ab 2. November 2026 auf lauberhorn.ch. Quellen: wengen.swiss, maennlichen.ch, lauberhorn.ch, geprüft am 15. September 2026.',
      },
    },
    summer: {
      title: { en: 'Summer in Wengen', fr: 'L’été à Wengen', de: 'Sommer in Wengen' },
      base: {
        en: 'Hikers do best up the main street, a few steps from the Männlichen cable car for the ridge walks. For day trips down the valley, stay around the station.',
        fr: 'Pour randonner, le haut de la rue principale, à deux pas du téléphérique du Männlichen et des chemins de crête. Pour les excursions dans la vallée, restez près de la gare.',
        de: 'Wanderer wohnen am besten die Dorfstrasse hinauf, nah an der Männlichenbahn und den Gratwegen. Für Ausflüge ins Tal bleibt man beim Bahnhof.',
      },
      facts: [
        { value: '23.5 → 25.10', label: { en: 'Männlichen cable car, summer 2026', fr: 'téléphérique du Männlichen, été 2026', de: 'Männlichenbahn, Sommer 2026' } },
        { value: '30 min', label: { en: 'Royal Walk on the Männlichen, 120 m climb', fr: 'Royal Walk au Männlichen, 120 m de montée', de: 'Royal Walk auf dem Männlichen, 120 m Aufstieg' } },
        { value: '40 × 20 m', label: { en: 'outdoor pool in Wengen, open in summer since 1931', fr: 'piscine en plein air de Wengen, ouverte l’été depuis 1931', de: 'Freibad Wengen, im Sommer offen seit 1931' } },
        { value: '2222 m', label: { en: 'Männlichen top station, start of the panorama trail to Kleine Scheidegg', fr: 'gare du Männlichen, départ du sentier panoramique vers la Kleine Scheidegg', de: 'Bergstation Männlichen, Start des Panoramawegs zur Kleinen Scheidegg' } },
      ],
      note: {
        en: 'Summer 2027 lift dates are not published yet. Sources: wengen.swiss, maennlichen.ch, checked 15 September 2026.',
        fr: 'Les dates des remontées pour l’été 2027 ne sont pas encore publiées. Sources : wengen.swiss, maennlichen.ch, vérifiées le 15 septembre 2026.',
        de: 'Die Bahndaten für Sommer 2027 sind noch nicht veröffentlicht. Quellen: wengen.swiss, maennlichen.ch, geprüft am 15. September 2026.',
      },
    },
  },
  doing: {
    title: { en: 'What to do in Wengen', fr: 'Que faire à Wengen', de: 'Was man in Wengen unternimmt' },
    intro: {
      en: 'This is not a trail guide. A few named places, taken from the village and railway companies’ own pages, so you can picture your days before you book a room.',
      fr: 'Ce n’est pas un guide de randonnée. Quelques lieux nommés, repris des pages officielles du village et des compagnies de chemin de fer, pour vous représenter vos journées avant de réserver une chambre.',
      de: 'Das ist kein Wanderführer. Nur ein paar benannte Orte von den offiziellen Seiten des Dorfes und der Bahnen, damit Sie sich Ihre Tage vorstellen können, bevor Sie ein Zimmer buchen.',
    },
    groups: [
      {
        kind: 'walk',
        title: { en: 'Two walks that start with a train', fr: 'Deux marches qui commencent par un train', de: 'Zwei Wanderungen, die mit einer Bahn beginnen' },
        items: [
          {
            name: { en: 'Panoramaweg, Männlichen to Kleine Scheidegg', fr: 'Panoramaweg, du Männlichen à la Kleine Scheidegg', de: 'Panoramaweg, Männlichen bis Kleine Scheidegg' },
            meta: { en: '4.5 km · 1 h 20 downhill · mid-June to October', fr: '4,5 km · 1 h 20 en descente · de mi-juin à octobre', de: '4,5 km · 1 Std. 20 abwärts · Mitte Juni bis Oktober' },
            text: {
              en: 'The balcony path with the Eiger, Mönch and Jungfrau in front of you the whole way. The Männlichen company publishes 4.5 km and 1 h 20 going down, 2 h in the other direction. Cable car up from Wengen, train back from Kleine Scheidegg.',
              fr: 'Le chemin en balcon avec l’Eiger, le Mönch et la Jungfrau en face pendant tout le parcours. La compagnie du Männlichen annonce 4,5 km et 1 h 20 en descente, 2 h dans l’autre sens. Montée en télécabine depuis Wengen, retour en train depuis la Kleine Scheidegg.',
              de: 'Der Höhenweg mit Eiger, Mönch und Jungfrau die ganze Zeit vor Augen. Die Männlichenbahn gibt 4,5 km und 1 Std. 20 abwärts an, 2 Std. in der Gegenrichtung. Mit der Bahn ab Wengen hinauf, mit dem Zug ab Kleiner Scheidegg zurück.',
            },
          },
          {
            name: { en: 'Wengen to Lauterbrunnen through Wengwald', fr: 'De Wengen à Lauterbrunnen par Wengwald', de: 'Von Wengen nach Lauterbrunnen über Wengwald' },
            meta: { en: 'close to 500 m of descent · train back in 12 minutes', fr: 'près de 500 m de descente · retour en train en 12 minutes', de: 'knapp 500 m Abstieg · Rückfahrt in 12 Minuten' },
            text: {
              en: 'The old way down to the valley floor, past the Reformed church, which the Wengen tourist office gives as a drop of nearly 500 metres. You walk down, the train brings you back up.',
              fr: 'L’ancien chemin qui descend au fond de la vallée, en passant devant l’église réformée, que l’office du tourisme de Wengen annonce à près de 500 mètres de dénivelé. On descend à pied, le train remonte.',
              de: 'Der alte Weg hinunter ins Tal, an der reformierten Kirche vorbei, laut Tourismusbüro Wengen knapp 500 Höhenmeter. Hinunter zu Fuss, hinauf mit dem Zug.',
            },
          },
        ],
      },
      {
        kind: 'ride',
        title: { en: 'Above the village', fr: 'Au-dessus du village', de: 'Über dem Dorf' },
        items: [
          {
            name: 'Männlichen',
            meta: { en: '2230 m', fr: '2230 m', de: '2230 m' },
            text: {
              en: 'The cable car from Wengen reaches the ridge at 2230 m, where the Panoramaweg starts. Mountain restaurants at the top and at Kleine Scheidegg.',
              fr: 'La télécabine de Wengen atteint la crête à 2230 m, point de départ du Panoramaweg. Restaurants d’altitude au sommet et à la Kleine Scheidegg.',
              de: 'Die Bahn ab Wengen erreicht den Grat auf 2230 m, wo der Panoramaweg beginnt. Bergrestaurants oben und auf der Kleinen Scheidegg.',
            },
          },
          {
            name: { en: 'Kleine Scheidegg and the Jungfraujoch', fr: 'La Kleine Scheidegg et le Jungfraujoch', de: 'Kleine Scheidegg und Jungfraujoch' },
            meta: { en: '1 h 10 to 1 h 20 from Wengen', fr: '1 h 10 à 1 h 20 depuis Wengen', de: '1 Std. 10 bis 1 Std. 20 ab Wengen' },
            text: {
              en: 'You change at Kleine Scheidegg for the Jungfraubahn. Counting the connection, Wengen to the Jungfraujoch takes 1 h 10 to 1 h 20 one way.',
              fr: 'On change à la Kleine Scheidegg pour la Jungfraubahn. Correspondance comprise, Wengen au Jungfraujoch prend 1 h 10 à 1 h 20 à l’aller.',
              de: 'Umsteigen auf der Kleinen Scheidegg in die Jungfraubahn. Mit Anschluss dauert Wengen bis Jungfraujoch 1 Std. 10 bis 1 Std. 20 pro Weg.',
            },
          },
        ],
      },
      {
        kind: 'local',
        title: { en: 'What the valley is known for', fr: 'Ce qui fait la réputation de la vallée', de: 'Wofür das Tal bekannt ist' },
        items: [
          {
            name: { en: 'The Lauberhorn races', fr: 'Les courses du Lauberhorn', de: 'Die Lauberhornrennen' },
            meta: { en: '15 to 17 January 2027', fr: 'du 15 au 17 janvier 2027', de: '15. bis 17. Januar 2027' },
            text: {
              en: 'Super-G on the Friday, the downhill on the Saturday, slalom on the Sunday. The organisers call the Lauberhorn the longest downhill of the World Cup, and the village fills up months ahead.',
              fr: 'Super-G le vendredi, descente le samedi, slalom le dimanche. Les organisateurs présentent le Lauberhorn comme la plus longue descente de la Coupe du monde, et le village se remplit des mois à l’avance.',
              de: 'Super-G am Freitag, Abfahrt am Samstag, Slalom am Sonntag. Die Organisatoren nennen das Lauberhorn die längste Abfahrt im Weltcup, und das Dorf ist Monate im Voraus ausgebucht.',
            },
          },
          {
            name: { en: 'The waterfalls on the valley floor', fr: 'Les cascades au fond de la vallée', de: 'Die Wasserfälle im Talboden' },
            meta: { en: '12 minutes by train to Lauterbrunnen', fr: '12 minutes de train jusqu’à Lauterbrunnen', de: '12 Minuten mit dem Zug nach Lauterbrunnen' },
            text: {
              en: 'Lauterbrunnen counts 72 waterfalls. The Staubbach drops straight off the cliff at the edge of the village, and the ten Trümmelbach falls run inside the mountain, open from early April to early November.',
              fr: 'Lauterbrunnen compte 72 cascades. Le Staubbach tombe droit de la falaise à l’entrée du village, et les dix chutes du Trümmelbach coulent dans la montagne, ouvertes de début avril à début novembre.',
              de: 'Lauterbrunnen zählt 72 Wasserfälle. Der Staubbach fällt direkt über die Felswand am Dorfrand, und die zehn Trümmelbachfälle fliessen im Berginnern, geöffnet von Anfang April bis Anfang November.',
            },
          },
        ],
      },
      {
        kind: 'table',
        title: { en: 'Two tables in the village', fr: 'Deux tables au village', de: 'Zwei Adressen zum Essen' },
        items: [
          {
            name: 'Ristorante Pizzeria Steakhouse Da Sina',
            meta: { en: 'Italian', fr: 'italien', de: 'italienisch' },
            text: {
              en: 'Pizza, pasta and grilled meat, on the tourist office list of village restaurants.',
              fr: 'Pizzas, pâtes et grillades, dans la liste des restaurants du village tenue par l’office du tourisme.',
              de: 'Pizza, Pasta und Grilliertes, auf der Restaurantliste des Tourismusbüros.',
            },
          },
          {
            name: 'Restaurant Altitude',
            meta: { en: 'Swiss and Mediterranean', fr: 'suisse et méditerranéen', de: 'schweizerisch und mediterran' },
            text: {
              en: 'Swiss dishes given a Mediterranean turn, as the tourist office describes it. Useful on the evening you have had enough fondue.',
              fr: 'Des plats suisses tournés vers la Méditerranée, selon la description de l’office du tourisme. Utile le soir où vous en avez assez de la fondue.',
              de: 'Schweizer Gerichte mit mediterraner Note, wie es das Tourismusbüro beschreibt. Praktisch am Abend, an dem Sie genug Fondue hatten.',
            },
          },
        ],
      },
    ],
    note: {
      en: 'Times, seasons and dates come from the operators and the tourist offices, checked on 16 September 2026. We publish no ratings and no route descriptions: check conditions on the spot before you set off.',
      fr: 'Durées, saisons et dates viennent des exploitants et des offices du tourisme, vérifiées le 16 septembre 2026. Nous ne publions ni notes ni descriptifs d’itinéraires : renseignez-vous sur place avant de partir.',
      de: 'Zeiten, Saisons und Daten stammen von den Betreibern und Tourismusbüros, geprüft am 16. September 2026. Wir veröffentlichen keine Bewertungen und keine Routenbeschreibungen: Erkundigen Sie sich vor Ort, bevor Sie losgehen.',
    },
  },
  faq: [
    {
      q: { en: 'Can you drive to Wengen?', fr: 'Peut-on venir en voiture à Wengen ?', de: 'Kann man mit dem Auto nach Wengen fahren?' },
      a: {
        en: 'No. The road ends at Lauterbrunnen, where a covered car park sits next to the station. From there the train takes 12 minutes to Wengen.',
        fr: "Non. La route s'arrête à Lauterbrunnen, où un parking couvert jouxte la gare. De là, le train met 12 minutes jusqu'à Wengen.",
        de: 'Nein. Die Strasse endet in Lauterbrunnen, wo ein Parkhaus direkt beim Bahnhof steht. Von dort fährt der Zug in 12 Minuten nach Wengen.',
      },
    },
    {
      q: { en: 'Wengen or Mürren for a quiet stay?', fr: 'Wengen ou Mürren pour le calme ?', de: 'Wengen oder Mürren für Ruhe?' },
      a: {
        en: 'Both are car-free. Mürren is higher (1638 m against 1274 m) and is reached in two stages from Lauterbrunnen, which keeps it quieter. Wengen has more shops around its station.',
        fr: "Les deux sont sans voiture. Mürren est plus haut (1638 m contre 1274 m) et se rejoint en deux étapes depuis Lauterbrunnen, ce qui le rend plus calme. Wengen a davantage de commerces autour de sa gare.",
        de: 'Beide sind autofrei. Mürren liegt höher (1638 m gegenüber 1274 m) und wird ab Lauterbrunnen in zwei Etappen erreicht, das hält es ruhiger. Wengen hat mehr Läden rund um den Bahnhof.',
      },
    },
    {
      q: { en: 'How long from Wengen to the Jungfraujoch?', fr: 'Combien de temps de Wengen au Jungfraujoch ?', de: 'Wie lange von Wengen aufs Jungfraujoch?' },
      a: {
        en: 'About 1 hour 10 to 1 hour 20: around 30 minutes to Kleine Scheidegg, then 35 to 40 minutes on the Jungfrau Railway, plus the change. From Grindelwald Terminal, the Eiger Express route takes about 45 minutes.',
        fr: "Environ 1 h 10 à 1 h 20 : une trentaine de minutes jusqu'à la Kleine Scheidegg, puis 35 à 40 minutes sur le chemin de fer de la Jungfrau, plus la correspondance. Depuis Grindelwald Terminal, l'itinéraire par l'Eiger Express prend environ 45 minutes.",
        de: 'Etwa 1 Stunde 10 bis 1 Stunde 20: rund 30 Minuten bis zur Kleinen Scheidegg, dann 35 bis 40 Minuten mit der Jungfraubahn, plus Umsteigen. Ab Grindelwald Terminal dauert die Route mit dem Eiger Express etwa 45 Minuten.',
      },
    },
    {
      q: { en: 'Does the Swiss Travel Pass cover the train to Wengen?', fr: 'Le Swiss Travel Pass couvre-t-il le train jusqu’à Wengen ?', de: 'Gilt der Swiss Travel Pass bis Wengen?' },
      a: {
        en: 'Yes, as far as Wengen. Above Wengen, towards Kleine Scheidegg and the Jungfraujoch, the pass gives 25% off.',
        fr: "Oui, jusqu'à Wengen. Au-dessus de Wengen, vers la Kleine Scheidegg et le Jungfraujoch, le pass donne 25 % de réduction.",
        de: 'Ja, bis Wengen. Ab Wengen Richtung Kleine Scheidegg und Jungfraujoch gibt der Pass 25 % Ermässigung.',
      },
    },
    {
      q: { en: 'When is the low season in Wengen?', fr: 'Quelle est la basse saison à Wengen ?', de: 'Wann ist in Wengen Zwischensaison?' },
      a: {
        en: 'Roughly from mid-April to late May, and in November. Many hotels and restaurants close then, and lifts stop for maintenance: see the month-by-month table above.',
        fr: "Environ de mi-avril à fin mai, et en novembre. Beaucoup d'hôtels et de restaurants ferment, et les remontées s'arrêtent pour entretien : voir le tableau mois par mois ci-dessus.",
        de: 'Etwa von Mitte April bis Ende Mai sowie im November. Viele Hotels und Restaurants schliessen dann, und die Bahnen stehen für Revisionen still: siehe Tabelle Monat für Monat oben.',
      },
    },
  ],
  neighbours: ['murren', 'lauterbrunnen', 'grindelwald', 'gimmelwald'],
}
