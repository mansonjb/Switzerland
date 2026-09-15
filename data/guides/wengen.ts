import type { DestinationGuide } from '../types'

// Every fact below is sourced in data/SOURCES.md (checked 15/09/2026). Do not add a number without a source.
export const wengen: DestinationGuide = {
  slug: 'wengen',
  stamp: 'wengen',
  updated: '2026-09-15',
  meta: {
    title: { en: 'Where to stay in Wengen: areas, hotels, car-free access', fr: 'Où dormir à Wengen : secteurs, hôtels, accès sans voiture', de: 'Wo übernachten in Wengen: Ortsteile, Hotels, autofreie Anreise' },
    description: {
      en: 'Wengen area by area: the station centre, the Männlichen cable car, the slope above the village. Four hotels with checked facts, Swiss Travel Pass coverage and what closes when.',
      fr: 'Wengen secteur par secteur : le centre autour de la gare, le téléphérique du Männlichen, le versant au-dessus du village. Quatre hôtels, la couverture du Swiss Travel Pass et ce qui ferme quand.',
      de: 'Wengen Ortsteil für Ortsteil: Bahnhofszentrum, Männlichenbahn, Hang oberhalb des Dorfes. Vier Hotels mit geprüften Fakten, Swiss Travel Pass und was wann geschlossen ist.',
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
  ],
  hotelsNote: {
    en: 'Facts taken from each hotel’s own website on 15 September 2026. No prices, ratings or reviews on this guide. Hotels set their own seasonal closing dates.',
    fr: "Faits relevés sur le site de chaque hôtel le 15 septembre 2026. Aucun prix, aucune note, aucun avis sur ce guide. Chaque hôtel fixe ses propres dates de fermeture.",
    de: 'Fakten von der Website des jeweiligen Hotels, Stand 15. September 2026. Keine Preise, Bewertungen oder Rezensionen. Jedes Hotel legt seine Schliessungsdaten selbst fest.',
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
      en: '2026 and start of winter 2026/27. Männlichen cable car: winter season until early April, summer season 23 May to 25 October 2026, winter from 12 December 2026. Wengen to Kleine Scheidegg: annual maintenance closure, announced for 9 November to 4 December 2026. Hotels and restaurants set their own dates: many close roughly from mid-April to late May and in November.',
      fr: "2026 et début de l'hiver 2026/27. Téléphérique du Männlichen : saison d'hiver jusqu'à début avril, saison d'été du 23 mai au 25 octobre 2026, hiver à partir du 12 décembre 2026. Wengen → Kleine Scheidegg : fermeture annuelle pour entretien, annoncée du 9 novembre au 4 décembre 2026. Hôtels et restaurants fixent leurs propres dates : beaucoup ferment environ de mi-avril à fin mai et en novembre.",
      de: '2026 und Beginn des Winters 2026/27. Männlichenbahn: Wintersaison bis Anfang April, Sommersaison 23. Mai bis 25. Oktober 2026, Winter ab 12. Dezember 2026. Wengen → Kleine Scheidegg: jährlicher Revisionsunterbruch, angekündigt vom 9. November bis 4. Dezember 2026. Hotels und Restaurants legen ihre Daten selbst fest: viele schliessen etwa von Mitte April bis Ende Mai und im November.',
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
