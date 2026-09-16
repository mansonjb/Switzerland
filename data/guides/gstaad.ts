import type { DestinationGuide } from '../types'

// Sources in data/SOURCES-gstaad.md (checked 16/09/2026). No number without a source.
export const gstaad: DestinationGuide = {
  slug: 'gstaad',
  stamp: 'generic',
  updated: '2026-09-16',
  meta: {
    title: { en: 'Where to stay in Gstaad: areas, hotels, the MOB line', fr: 'Où dormir à Gstaad : secteurs, hôtels, la ligne MOB', de: 'Wo übernachten in Gstaad: Ortsteile, Hotels, die MOB-Linie' },
    description: {
      en: 'Gstaad area by area: the Promenade, the slope above the village, the Saanen-Schönried side. Hotels with sourced facts, the GoldenPass Express and the ski area figures.',
      fr: 'Gstaad secteur par secteur : la Promenade, le versant au-dessus du village, le côté Saanen-Schönried. Hôtels avec faits sourcés, le GoldenPass Express et les chiffres du domaine skiable.',
      de: 'Gstaad Ortsteil für Ortsteil: die Promenade, der Hang oberhalb des Dorfes, die Seite Saanen-Schönried. Hotels mit belegten Fakten, der GoldenPass Express und die Zahlen des Skigebiets.',
    },
  },
  eyebrow: { en: 'Bernese Oberland · Saanen', fr: 'Oberland bernois · Saanen', de: 'Berner Oberland · Saanen' },
  title: { en: 'Where to stay in Gstaad', fr: 'Où dormir à Gstaad', de: 'Wo übernachten in Gstaad' },
  intro: {
    en: 'Gstaad sits in the Saanenland at 1050 m, a village of the municipality of Saanen on the metre-gauge MOB line that links Château-d’Oex, Rougemont, Saanen, Gstaad, Schönried, Saanenmöser and Zweisimmen roughly every half hour. The GoldenPass Express runs four times a day straight through from Montreux to Interlaken Ost, on variable-gauge bogies that need no change of train, the whole run about 3 h 15 for 115.34 km. Nine winter sports areas share 200 km of ski slopes between 1000 and 3000 m, among them Glacier 3000, the only glacier ski area in the Bernese Oberland. Gstaad is reached by road: the shops and hotels of the Promenade sit at the foot of the railway station.',
    fr: 'Gstaad se trouve dans le Saanenland à 1050 m d’altitude, village de la commune de Saanen sur la ligne à voie métrique du MOB qui relie Château-d’Oex, Rougemont, Saanen, Gstaad, Schönried, Saanenmöser et Zweisimmen environ toutes les demi-heures. Le GoldenPass Express relie quatre fois par jour Montreux à Interlaken Ost sans changement de train, grâce à des bogies à écartement variable, pour un trajet d’environ 3 h 15 sur 115,34 km. Neuf secteurs skiables se partagent 200 km de pistes entre 1000 et 3000 m d’altitude, dont le Glacier 3000, seul domaine skiable glaciaire de l’Oberland bernois. Gstaad est accessible par la route : commerces et hôtels de la Promenade se regroupent au pied de la gare.',
    de: 'Gstaad liegt im Saanenland auf 1050 m, ein Dorf der Gemeinde Saanen an der Schmalspurlinie der MOB, die Château-d’Oex, Rougemont, Saanen, Gstaad, Schönried, Saanenmöser und Zweisimmen etwa im Halbstundentakt verbindet. Der GoldenPass Express fährt viermal täglich ohne Umsteigen von Montreux nach Interlaken Ost, dank Drehgestellen mit variabler Spurweite, die ganze Fahrt dauert rund 3 Std. 15 auf 115,34 km. Neun Wintersportgebiete teilen sich 200 km Pisten zwischen 1000 und 3000 m, darunter das Glacier 3000, das einzige Gletscherskigebiet im Berner Oberland. Gstaad ist mit dem Auto erreichbar: Läden und Hotels der Promenade liegen unterhalb des Bahnhofs.',
  },
  quickAnswer: {
    en: 'Stay in Gstaad for the Promenade shops, the historic grand hotels and the GoldenPass Express calling right in the village. For a base on the same line with lower prices, sleep in Adelboden instead.',
    fr: 'Dormez à Gstaad pour les commerces de la Promenade, les grands hôtels historiques et le GoldenPass Express qui s’arrête au village même. Pour une base sur la même ligne à prix plus doux, dormez plutôt à Adelboden.',
    de: 'Übernachten Sie in Gstaad für die Läden der Promenade, die historischen Grandhotels und den GoldenPass Express, der direkt im Dorf hält. Für eine Basis an derselben Linie zu günstigeren Preisen übernachten Sie besser in Adelboden.',
  },
  snapshot: {
    why: {
      en: 'The Promenade’s historic grand hotels, the GoldenPass Express calling in the village four times a day, and Glacier 3000, the only glacier ski area in the Bernese Oberland.',
      fr: 'Les grands hôtels historiques de la Promenade, le GoldenPass Express qui s’arrête au village quatre fois par jour, et le Glacier 3000, seul domaine skiable glaciaire de l’Oberland bernois.',
      de: 'Die historischen Grandhotels der Promenade, der viermal täglich im Dorf haltende GoldenPass Express, und das Glacier 3000, das einzige Gletscherskigebiet im Berner Oberland.',
    },
    where: {
      en: 'The Promenade for shops and the station, the slope above the village for the big spa hotels, and the Saanen-Schönried-Saanenmöser side for the Rinderberg and Horneggli cable cars.',
      fr: 'La Promenade pour les commerces et la gare, le versant au-dessus du village pour les grands hôtels-spa, et le côté Saanen-Schönried-Saanenmöser pour les télécabines du Rinderberg et du Horneggli.',
      de: 'Die Promenade für Läden und Bahnhof, der Hang oberhalb des Dorfes für die grossen Spa-Hotels, und die Seite Saanen-Schönried-Saanenmöser für die Bahnen von Rinderberg und Horneggli.',
    },
    watch: {
      en: 'The GstaadCard gives free public transport during your stay, but it is not valid on the four daily GoldenPass Express trains. Grand hotels publish their own closed periods between seasons.',
      fr: 'La GstaadCard donne les transports publics gratuits pendant le séjour, mais elle n’est pas valable sur les quatre trains quotidiens du GoldenPass Express. Les grands hôtels publient leurs propres périodes de fermeture entre les saisons.',
      de: 'Die GstaadCard gibt während des Aufenthalts freie Fahrt im öffentlichen Verkehr, gilt aber nicht auf den vier täglichen GoldenPass-Express-Zügen. Die Grandhotels veröffentlichen ihre eigenen Schliesszeiten zwischen den Saisons.',
    },
  },
  stats: [
    { value: '1050', label: { en: 'metres above sea level', fr: "mètres d'altitude", de: 'Meter über Meer' } },
    { value: '200', label: { en: 'km of ski slopes over nine winter sports areas', fr: 'km de pistes sur neuf secteurs skiables', de: 'Pistenkilometer über neun Wintersportgebiete' } },
    { value: '4', label: { en: 'GoldenPass Express trains a day, Montreux to Interlaken with no change', fr: 'trains GoldenPass Express par jour, Montreux–Interlaken sans changement', de: 'GoldenPass-Express-Züge pro Tag, Montreux–Interlaken ohne Umsteigen' } },
  ],
  hero: {
    photo: '/photos/gstaad.jpg',
    caption: { en: 'Gstaad in winter, with the village church tower.', fr: 'Gstaad en hiver, avec le clocher du village.', de: 'Gstaad im Winter, mit dem Dorfkirchturm.' },
    credit: { author: 'GstaadTourismus', license: 'CC BY-SA 3.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/', source: 'https://commons.wikimedia.org/wiki/File:GstaadPanoramaVillage.jpg' },
  },
  sectors: [
    {
      title: { en: 'The Promenade', fr: 'La Promenade', de: 'Die Promenade' },
      walk: { en: 'The village centre', fr: 'Le centre du village', de: 'Das Dorfzentrum' },
      text: {
        en: 'Gstaad’s shopping street, with the railway station at its foot: Hotel Olden stands directly on the Promenade and Posthotel Rössli at number 10. Both the GoldenPass Express and the MOB Panoramic call here.',
        fr: 'La rue commerçante de Gstaad, avec la gare à son pied : l’Hôtel Olden se trouve directement sur la Promenade et le Posthotel Rössli au numéro 10. Le GoldenPass Express et le MOB Panoramic s’y arrêtent tous les deux.',
        de: 'Die Einkaufsstrasse von Gstaad, mit dem Bahnhof an ihrem Fuss: Das Hotel Olden steht direkt an der Promenade, das Posthotel Rössli an der Nummer 10. Hier halten sowohl der GoldenPass Express als auch der MOB Panoramic.',
      },
      points: [
        { en: 'GoldenPass Express and MOB Panoramic both call here', fr: 'Le GoldenPass Express et le MOB Panoramic s’y arrêtent', de: 'GoldenPass Express und MOB Panoramic halten hier' },
        { en: 'Shops and restaurants along the street', fr: 'Commerces et restaurants tout au long de la rue', de: 'Läden und Restaurants entlang der Strasse' },
      ],
    },
    {
      title: { en: 'Above the village', fr: 'Au-dessus du village', de: 'Oberhalb des Dorfes' },
      walk: { en: 'Palacestrasse and Oberbort', fr: 'Palacestrasse et Oberbort', de: 'Palacestrasse und Oberbort' },
      text: {
        en: 'The upper part of the village, on the slope, where the Gstaad Palace stands at Palacestrasse 28 and Le Grand Bellevue with its 3000 square metre spa. Distances down to the station are not published by these hotels.',
        fr: 'La partie haute du village, sur le versant, où se dresse le Gstaad Palace au 28 de la Palacestrasse, ainsi que Le Grand Bellevue et son spa de 3000 mètres carrés. Les distances jusqu’à la gare ne sont pas publiées par ces hôtels.',
        de: 'Der obere Teil des Dorfes, am Hang, wo das Gstaad Palace an der Palacestrasse 28 steht, sowie Le Grand Bellevue mit seinem 3000 Quadratmeter grossen Spa. Die Entfernungen zum Bahnhof werden von diesen Hotels nicht angegeben.',
      },
      points: [
        { en: 'Gstaad Palace at Palacestrasse 28', fr: 'Gstaad Palace au 28 de la Palacestrasse', de: 'Gstaad Palace an der Palacestrasse 28' },
        { en: 'Le Grand Bellevue spa of 3000 m²', fr: 'Spa de 3000 m² au Grand Bellevue', de: '3000 m² grosses Spa im Grand Bellevue' },
      ],
    },
    {
      title: { en: 'Saanen, Schönried, Saanenmöser', fr: 'Saanen, Schönried, Saanenmöser', de: 'Saanen, Schönried, Saanenmöser' },
      walk: { en: 'Along the MOB line', fr: 'Le long de la ligne du MOB', de: 'Entlang der MOB-Linie' },
      text: {
        en: 'Three stops on the same MOB line as Gstaad, served roughly every half hour. The Horneggli and Rinderberg cable cars start on this side of the valley, and the Golfhotel Les Hauts de Gstaad sits right beside Saanenmöser station.',
        fr: 'Trois arrêts sur la même ligne du MOB que Gstaad, desservis environ toutes les demi-heures. Les télécabines du Horneggli et du Rinderberg partent de ce côté de la vallée, et le Golfhotel Les Hauts de Gstaad se trouve juste à côté de la gare de Saanenmöser.',
        de: 'Drei Haltestellen an derselben MOB-Linie wie Gstaad, etwa im Halbstundentakt bedient. Die Bahnen von Horneggli und Rinderberg starten auf dieser Talseite, und das Golfhotel Les Hauts de Gstaad liegt direkt neben dem Bahnhof Saanenmöser.',
      },
      points: [
        { en: 'Horneggli and Rinderberg cable cars start on this side', fr: 'Les télécabines du Horneggli et du Rinderberg partent de ce côté', de: 'Die Bahnen Horneggli und Rinderberg starten auf dieser Seite' },
        { en: 'Half-hourly MOB service to Gstaad', fr: 'Service MOB à la demi-heure vers Gstaad', de: 'Halbstündlicher MOB-Verkehr nach Gstaad' },
      ],
    },
  ],
  hotels: [
    {
      slug: 'gstaad-palace',
      name: 'Gstaad Palace',
      url: 'https://www.palace.ch/en/',
      sector: { en: 'Above the village', fr: 'Au-dessus du village', de: 'Oberhalb des Dorfes' },
      facts: [
        { en: 'Palacestrasse 28, owned by the Scherz family for three generations', fr: 'Palacestrasse 28, propriété de la famille Scherz depuis trois générations', de: 'Palacestrasse 28, seit drei Generationen im Besitz der Familie Scherz' },
        { en: 'Publishes its own seasons: summer 19 June to 6 September 2026, winter 15 December 2026 to 7 March 2027', fr: 'Publie ses propres saisons : été du 19 juin au 6 septembre 2026, hiver du 15 décembre 2026 au 7 mars 2027', de: 'Veröffentlicht eigene Saisons: Sommer 19. Juni bis 6. September 2026, Winter 15. Dezember 2026 bis 7. März 2027' },
      ],
    },
    {
      slug: 'gstaad-le-grand-bellevue',
      name: 'Le Grand Bellevue',
      url: 'https://bellevue-gstaad.ch/',
      sector: { en: 'Above the village', fr: 'Au-dessus du village', de: 'Oberhalb des Dorfes' },
      facts: [
        { en: 'Le Grand Spa of 3000 m² with 17 wellness zones', fr: 'Le Grand Spa de 3000 m² avec 17 espaces bien-être', de: 'Le Grand Spa mit 3000 m² und 17 Wellnessbereichen' },
        { en: 'Suites from 57 to 180 m²', fr: 'Suites de 57 à 180 m²', de: 'Suiten von 57 bis 180 m²' },
        { en: 'Swiss Open tennis centre court on site', fr: 'Court central du Swiss Open sur place', de: 'Center Court des Swiss Open vor Ort' },
      ],
    },
    {
      slug: 'gstaad-hotel-olden',
      name: 'Hotel Olden',
      url: 'https://www.hotelolden.com/en/',
      sector: { en: 'The Promenade', fr: 'La Promenade', de: 'Die Promenade' },
      facts: [
        { en: 'Directly on the Promenade in Gstaad', fr: 'Directement sur la Promenade de Gstaad', de: 'Direkt an der Promenade in Gstaad' },
        { en: 'Reopens for winter on 3 December 2026', fr: 'Rouvre pour l’hiver le 3 décembre 2026', de: 'Öffnet für den Winter wieder am 3. Dezember 2026' },
        { en: 'Publishes weekly closing days for the 2026 summer season', fr: 'Publie ses jours de fermeture hebdomadaires pour l’été 2026', de: 'Veröffentlicht wöchentliche Schliesstage für den Sommer 2026' },
      ],
    },
    {
      slug: 'gstaad-bernerhof',
      name: 'Bernerhof Gstaad',
      url: 'https://www.bernerhof-gstaad.ch/en/',
      sector: { en: 'The Promenade', fr: 'La Promenade', de: 'Die Promenade' },
      facts: [
        { en: 'On the Promenade, 3780 Gstaad', fr: 'Sur la Promenade, 3780 Gstaad', de: 'An der Promenade, 3780 Gstaad' },
        { en: 'In business for more than 120 years', fr: 'En activité depuis plus de 120 ans', de: 'Seit mehr als 120 Jahren in Betrieb' },
        { en: 'Four restaurants under one roof: Blun-Chi, La Gare, Pizza.Basta. and The Lounge', fr: 'Quatre restaurants sous un même toit : Blun-Chi, La Gare, Pizza.Basta. et The Lounge', de: 'Vier Restaurants unter einem Dach: Blun-Chi, La Gare, Pizza.Basta. und The Lounge' },
      ],
    },
    {
      slug: 'gstaad-posthotel-rossli',
      name: 'Posthotel Rössli',
      url: 'https://www.posthotelroessli.ch/en',
      sector: { en: 'The Promenade', fr: 'La Promenade', de: 'Die Promenade' },
      facts: [
        { en: 'Founded in 1845, described by the house as the oldest hotel in Gstaad', fr: 'Fondé en 1845, présenté par la maison comme le plus ancien hôtel de Gstaad', de: 'Gegründet 1845, laut Haus das älteste Hotel in Gstaad' },
        { en: 'Promenade 10', fr: 'Promenade 10', de: 'Promenade 10' },
        { en: 'Fourth generation of the Widmer family', fr: 'Quatrième génération de la famille Widmer', de: 'Vierte Generation der Familie Widmer' },
      ],
    },
    {
      slug: 'gstaad-gstaaderhof',
      name: 'Hotel Gstaaderhof',
      url: 'https://www.gstaaderhof.ch/en/',
      sector: { en: 'Village centre, Lauenenstrasse', fr: 'Centre du village, Lauenenstrasse', de: 'Dorfzentrum, Lauenenstrasse' },
      facts: [
        { en: 'Lauenenstrasse 19', fr: 'Lauenenstrasse 19', de: 'Lauenenstrasse 19' },
        { en: 'The cable cars are “a mere 10-minute walk away”, by the hotel’s own account', fr: 'Les télécabines sont « à 10 minutes de marche seulement », selon l’hôtel', de: 'Die Bahnen sind laut Hotel «nur 10 Gehminuten entfernt»' },
        { en: 'Two restaurants, Müli and Saagi Stübli', fr: 'Deux restaurants, Müli et Saagi Stübli', de: 'Zwei Restaurants, Müli und Saagi Stübli' },
      ],
    },
    {
      slug: 'gstaad-huus-gstaad',
      name: 'HUUS Gstaad',
      url: 'https://huusgstaad.com/en/',
      sector: { en: 'Saanen / Schönried side', fr: 'Côté Saanen / Schönried', de: 'Seite Saanen / Schönried' },
      facts: [
        { en: 'Schönriedstrasse 74, 3792 Saanen-Gstaad', fr: 'Schönriedstrasse 74, 3792 Saanen-Gstaad', de: 'Schönriedstrasse 74, 3792 Saanen-Gstaad' },
        { en: 'On-site ski and bike shop', fr: 'Magasin de ski et de vélo sur place', de: 'Ski- und Veloshop im Haus' },
        { en: 'States it has the largest conference and event facilities in the Gstaad region', fr: 'Indique disposer des plus grandes installations de conférence et d’événements de la région de Gstaad', de: 'Gibt an, über die grössten Konferenz- und Eventräume der Region Gstaad zu verfügen' },
      ],
    },
    {
      slug: 'gstaad-golfhotel-les-hauts',
      name: 'Golfhotel Les Hauts de Gstaad & SPA',
      url: 'https://www.golfhotel.ch/en/',
      sector: { en: 'Saanenmöser', fr: 'Saanenmöser', de: 'Saanenmöser' },
      facts: [
        { en: 'Bahnhofstrasse 7, 3777 Saanenmöser, beside the station', fr: 'Bahnhofstrasse 7, 3777 Saanenmöser, à côté de la gare', de: 'Bahnhofstrasse 7, 3777 Saanenmöser, neben dem Bahnhof' },
        { en: 'Open all year', fr: 'Ouvert toute l’année', de: 'Ganzjährig geöffnet' },
        { en: 'Indoor pool, sauna, steam bath and gym', fr: 'Piscine intérieure, sauna, bain de vapeur et salle de sport', de: 'Hallenbad, Sauna, Dampfbad und Fitnessraum' },
      ],
    },
  ],
  hotelsNote: {
    en: 'Facts taken from each hotel’s own website on 16 September 2026. No ratings or reviews on this guide. Hotels set their own seasonal closing dates.',
    fr: 'Faits relevés sur le site de chaque hôtel le 16 septembre 2026. Aucune note ni aucun avis sur ce guide. Chaque hôtel fixe ses propres dates de fermeture.',
    de: 'Fakten von der Website des jeweiligen Hotels, Stand 16. September 2026. Keine Bewertungen oder Rezensionen. Jedes Hotel legt seine Schliessungsdaten selbst fest.',
  },
  practical: {
    title: { en: 'Getting to Gstaad', fr: 'Venir à Gstaad', de: 'Anreise nach Gstaad' },
    items: [
      {
        title: { en: 'By rail', fr: 'En train', de: 'Mit der Bahn' },
        text: {
          en: 'About 1 h 53 from Bern with one change, 1 h 19 direct from Spiez on the GoldenPass Express, 1 h 50 direct from Interlaken Ost. Zweisimmen to Gstaad on the MOB takes about 20 minutes, half-hourly.',
          fr: 'Environ 1 h 53 depuis Berne avec un changement, 1 h 19 directement depuis Spiez sur le GoldenPass Express, 1 h 50 directement depuis Interlaken Ost. Zweisimmen–Gstaad sur le MOB prend environ 20 minutes, à la demi-heure.',
          de: 'Rund 1 Std. 53 ab Bern mit einem Umsteigen, 1 Std. 19 direkt ab Spiez mit dem GoldenPass Express, 1 Std. 50 direkt ab Interlaken Ost. Zweisimmen–Gstaad mit der MOB dauert rund 20 Minuten, im Halbstundentakt.',
        },
      },
      {
        title: { en: 'The GoldenPass Express', fr: 'Le GoldenPass Express', de: 'Der GoldenPass Express' },
        text: {
          en: 'Four trains a day run Montreux to Gstaad to Interlaken with no change, using variable-gauge bogies. Three classes are offered, 2nd, 1st and Prestige, with reservation compulsory in Prestige.',
          fr: 'Quatre trains par jour relient Montreux à Interlaken en passant par Gstaad, sans changement, grâce à des bogies à écartement variable. Trois classes sont proposées, 2e, 1re et Prestige, la réservation étant obligatoire en Prestige.',
          de: 'Viermal täglich verkehren Züge ohne Umsteigen von Montreux über Gstaad nach Interlaken, dank Drehgestellen mit variabler Spurweite. Es gibt drei Klassen, 2., 1. und Prestige, in der Prestige-Klasse ist eine Reservation obligatorisch.',
        },
      },
      {
        title: { en: 'By road', fr: 'En voiture', de: 'Mit dem Auto' },
        text: {
          en: 'Gstaad is reached by road, including the Col du Pillon route linking it to Les Diablerets and the Rhone valley. Parking capacity and tariffs in the village are not published by the tourist office.',
          fr: 'Gstaad est accessible par la route, notamment par le col du Pillon qui le relie aux Diablerets et à la vallée du Rhône. La capacité et les tarifs de stationnement dans le village ne sont pas publiés par l’office du tourisme.',
          de: 'Gstaad ist mit dem Auto erreichbar, unter anderem über den Col du Pillon, der es mit Les Diablerets und dem Rhonetal verbindet. Parkkapazität und -tarife im Dorf werden vom Tourismusbüro nicht veröffentlicht.',
        },
      },
      {
        title: { en: 'The GstaadCard', fr: 'La GstaadCard', de: 'Die GstaadCard' },
        text: {
          en: 'Given with an overnight stay, it includes 2nd class public transport within the Gstaad Card area between the Saanenland and the Simmental, including the PostBus routes to Turbach, Lauenen and Gsteig. It is not valid on the GoldenPass Express.',
          fr: 'Remise avec une nuitée, elle inclut les transports publics de 2e classe dans la zone GstaadCard entre le Saanenland et le Simmental, y compris les lignes de bus postal vers Turbach, Lauenen et Gsteig. Elle n’est pas valable sur le GoldenPass Express.',
          de: 'Bei einer Übernachtung erhalten, umfasst sie den öffentlichen Verkehr 2. Klasse im GstaadCard-Gebiet zwischen Saanenland und Simmental, einschliesslich der Postautolinien nach Turbach, Lauenen und Gsteig. Sie gilt nicht auf dem GoldenPass Express.',
        },
      },
    ],
  },
  seasons: {
    winter: {
      title: { en: 'Winter in Gstaad', fr: 'L’hiver à Gstaad', de: 'Winter in Gstaad' },
      base: {
        en: 'Skiers heading for the Rinderberg or Horneggli sectors do best on the Saanen-Schönried-Saanenmöser side of the valley, where these cable cars start. The Promenade and the slope above the village keep you closest to the station and the GoldenPass Express.',
        fr: 'Pour skier au Rinderberg ou au Horneggli, mieux vaut loger du côté Saanen-Schönried-Saanenmöser, d’où partent ces télécabines. La Promenade et le versant au-dessus du village restent les plus proches de la gare et du GoldenPass Express.',
        de: 'Wer Richtung Rinderberg oder Horneggli skifahren will, wohnt am besten auf der Seite Saanen-Schönried-Saanenmöser, wo diese Bahnen starten. Die Promenade und der Hang oberhalb des Dorfes liegen am nächsten beim Bahnhof und beim GoldenPass Express.',
      },
      facts: [
        { value: '200 km', label: { en: 'of ski slopes, nine winter sports areas, 1000 to 3000 m', fr: 'de pistes, neuf secteurs skiables, de 1000 à 3000 m', de: 'Pisten, neun Wintersportgebiete, 1000 bis 3000 m' } },
        { value: '9', label: { en: 'winter sports areas, including the Glacier 3000', fr: 'secteurs skiables, dont le Glacier 3000', de: 'Wintersportgebiete, darunter das Glacier 3000' } },
      ],
      note: {
        en: 'Winter 2026/27 opening and closing dates for the Gstaad lifts were not published by Bergbahnen Destination Gstaad at the time of checking. Sources: gstaad.ch, checked 16 September 2026.',
        fr: 'Les dates d’ouverture et de fermeture 2026/27 des remontées de Gstaad n’étaient pas publiées par Bergbahnen Destination Gstaad au moment de la vérification. Sources : gstaad.ch, vérifiées le 16 septembre 2026.',
        de: 'Die Öffnungs- und Schliessdaten 2026/27 der Gstaader Bahnen waren zum Zeitpunkt der Prüfung von Bergbahnen Destination Gstaad noch nicht veröffentlicht. Quellen: gstaad.ch, geprüft am 16. September 2026.',
      },
    },
    summer: {
      title: { en: 'Summer in Gstaad', fr: 'L’été à Gstaad', de: 'Sommer in Gstaad' },
      base: {
        en: 'Hikers heading for the Wispile do best on the Promenade, a walk from the village gondola. For the Horneggli or Rinderberg, stay on the Saanen-Schönried-Saanenmöser side instead.',
        fr: 'Pour rejoindre le Wispile, mieux vaut loger sur la Promenade, à distance de marche de la télécabine du village. Pour le Horneggli ou le Rinderberg, préférez le côté Saanen-Schönried-Saanenmöser.',
        de: 'Wer zum Wispile will, wohnt am besten an der Promenade, in Gehdistanz zur Dorfbahn. Für Horneggli oder Rinderberg eignet sich die Seite Saanen-Schönried-Saanenmöser besser.',
      },
      facts: [
        { value: '8.6', label: { en: 'Wispile gondola open for summer 2026, from Gstaad village', fr: 'télécabine du Wispile ouverte pour l’été 2026, depuis le village', de: 'Wispilebahn ab Dorf, offen für den Sommer 2026' } },
        { value: '13.6', label: { en: 'Rinderberg and Horneggli gondolas running daily for summer 2026', fr: 'télécabines du Rinderberg et du Horneggli en service quotidien pour l’été 2026', de: 'Rinderberg- und Hornegglibahn täglich für den Sommer 2026' } },
        { value: '13.1 km', label: { en: 'longest published hike, Wispile to Lauenen via Chrine, 3 h 50', fr: 'plus longue randonnée publiée, du Wispile à Lauenen via Chrine, 3 h 50', de: 'längste publizierte Wanderung, Wispile nach Lauenen via Chrine, 3 Std. 50' } },
      ],
      note: {
        en: 'Closing dates for the 2026 summer cable cars are not published. Sources: gstaad.ch, bergbahnen-gstaad.ch, checked 16 September 2026.',
        fr: 'Les dates de fermeture des télécabines pour l’été 2026 ne sont pas publiées. Sources : gstaad.ch, bergbahnen-gstaad.ch, vérifiées le 16 septembre 2026.',
        de: 'Die Schliessdaten der Sommerbahnen 2026 sind nicht veröffentlicht. Quellen: gstaad.ch, bergbahnen-gstaad.ch, geprüft am 16. September 2026.',
      },
    },
  },
  doing: {
    title: { en: 'What to do in Gstaad', fr: 'Que faire à Gstaad', de: 'Was man in Gstaad unternimmt' },
    intro: {
      en: 'Not a trail guide: a handful of named places from Gstaad Saanenland Tourismus and Bergbahnen Destination Gstaad, to see what a day here looks like.',
      fr: 'Pas un guide de randonnée : quelques lieux nommés, repris de Gstaad Saanenland Tourismus et de Bergbahnen Destination Gstaad, pour voir à quoi ressemble une journée ici.',
      de: 'Kein Wanderführer: eine Handvoll benannter Orte von Gstaad Saanenland Tourismus und Bergbahnen Destination Gstaad, damit Sie sehen, wie ein Tag hier aussieht.',
    },
    groups: [
      {
        kind: 'walk',
        title: { en: 'Two hikes with published distances', fr: 'Deux randonnées aux distances publiées', de: 'Zwei Wanderungen mit publizierten Distanzen' },
        items: [
          {
            name: 'Gstaader Runde',
            meta: { en: '1 h 20 · 4.9 km · easy', fr: '1 h 20 · 4,9 km · facile', de: '1 Std. 20 · 4,9 km · leicht' },
            text: {
              en: 'A loop around the village, signed W56 on the tourist office’s own hiking map and rated easy.',
              fr: 'Une boucle autour du village, signalée W56 sur la carte de randonnée de l’office du tourisme et classée facile.',
              de: 'Eine Runde um das Dorf, auf der Wanderkarte des Tourismusbüros als W56 ausgeschildert und als leicht eingestuft.',
            },
          },
          {
            name: { en: 'Wispile to Lauenen via Chrine', fr: 'Du Wispile à Lauenen par Chrine', de: 'Vom Wispile nach Lauenen über Chrine' },
            meta: { en: '3 h 50 · 13.1 km · 115 m up, 786 m down', fr: '3 h 50 · 13,1 km · 115 m de montée, 786 m de descente', de: '3 Std. 50 · 13,1 km · 115 Hm auf, 786 Hm ab' },
            text: {
              en: 'From the Wispile mountain station down past Chrine and Lake Lauenen to the village of Lauenen, with a PostBus back to Gstaad. The tourist office gives a high point of 1917 m and a low point of 1236 m.',
              fr: 'De la station du Wispile jusqu’au village de Lauenen, en passant par Chrine et le lac de Lauenen, avec un retour à Gstaad en bus postal. L’office du tourisme indique un point culminant à 1917 m et un point bas à 1236 m.',
              de: 'Von der Bergstation Wispile über Chrine und den Lauenensee hinunter ins Dorf Lauenen, mit dem Postauto zurück nach Gstaad. Das Tourismusbüro gibt einen Hochpunkt von 1917 m und einen Tiefpunkt von 1236 m an.',
            },
          },
        ],
      },
      {
        kind: 'ride',
        title: { en: 'Two gondolas on opposite sides of the valley', fr: 'Deux télécabines de part et d’autre de la vallée', de: 'Zwei Gondelbahnen auf beiden Talseiten' },
        items: [
          {
            name: 'Wispile',
            meta: { en: '1907 m · summer 2026 from 8 June', fr: '1907 m · été 2026 dès le 8 juin', de: '1907 m · Sommer 2026 ab 8. Juni' },
            text: {
              en: 'The gondola from Gstaad village reaches the Wispile mountain restaurant at 1907 m, the starting point for the walk to Lauenen. Bergbahnen Destination Gstaad opened it for summer 2026 on 8 June.',
              fr: 'La télécabine depuis le village de Gstaad rejoint le restaurant d’altitude du Wispile à 1907 m, point de départ de la marche vers Lauenen. Bergbahnen Destination Gstaad l’a ouverte pour l’été 2026 le 8 juin.',
              de: 'Die Bahn ab dem Dorf Gstaad erreicht das Bergrestaurant Wispile auf 1907 m, den Ausgangspunkt der Wanderung nach Lauenen. Bergbahnen Destination Gstaad eröffnete sie für den Sommer 2026 am 8. Juni.',
            },
          },
          {
            name: 'Rinderberg',
            meta: { en: 'from Zweisimmen · daily from 13 June 2026', fr: 'depuis Zweisimmen · quotidien dès le 13 juin 2026', de: 'ab Zweisimmen · täglich ab 13. Juni 2026' },
            text: {
              en: 'The Rinderberg gondola leaves from Zweisimmen and forms part of the Rinderberg, Saanersloch and Horneggli winter sector. It ran daily for summer 2026 from 13 June, the same date as the Horneggli gondola from Schönried.',
              fr: 'La télécabine du Rinderberg part de Zweisimmen et fait partie du secteur hivernal Rinderberg-Saanersloch-Horneggli. Elle a fonctionné quotidiennement pour l’été 2026 dès le 13 juin, comme la télécabine du Horneggli depuis Schönried.',
              de: 'Die Rinderbergbahn startet in Zweisimmen und gehört zum Wintersektor Rinderberg-Saanersloch-Horneggli. Sie fuhr im Sommer 2026 ab dem 13. Juni täglich, gleichzeitig mit der Hornegglibahn ab Schönried.',
            },
          },
        ],
      },
      {
        kind: 'table',
        title: { en: 'Two addresses from the destination’s own listing', fr: 'Deux adresses de la liste officielle de la destination', de: 'Zwei Adressen aus der offiziellen Liste der Destination' },
        items: [
          {
            name: 'Restaurant Rialto',
            meta: { en: 'Gstaad', fr: 'Gstaad', de: 'Gstaad' },
            text: {
              en: 'The Gstaad tourist office describes a daily slate of specials, seasonal dishes with an Asian accent, and an all-day terrace.',
              fr: 'L’office du tourisme de Gstaad décrit une ardoise de suggestions quotidiennes, des plats de saison à l’accent asiatique et une terrasse ouverte toute la journée.',
              de: 'Das Tourismusbüro Gstaad beschreibt täglich wechselnde Tagesangebote auf einer Tafel, saisonale Gerichte mit asiatischer Note und eine ganztägig geöffnete Terrasse.',
            },
          },
          {
            name: 'Restaurant Sonnenhof',
            meta: { en: 'between Saanen and Schönried', fr: 'entre Saanen et Schönried', de: 'zwischen Saanen und Schönried' },
            text: {
              en: 'Set just off the road between Saanen and Schönried, with a terrace facing Gstaad. The listing describes cooking inspired by Italian and French cuisine.',
              fr: 'Installé en retrait de la route entre Saanen et Schönried, avec une terrasse face à Gstaad. La fiche décrit une cuisine d’inspiration italienne et française.',
              de: 'Etwas abseits der Strasse zwischen Saanen und Schönried gelegen, mit Terrasse Richtung Gstaad. Der Eintrag beschreibt eine von der italienischen und französischen Küche inspirierte Kochkunst.',
            },
          },
        ],
      },
      {
        kind: 'local',
        title: { en: 'What makes Gstaad a resort', fr: 'Ce qui fait de Gstaad une station', de: 'Was Gstaad zum Kurort macht' },
        items: [
          {
            name: { en: 'The MOB panoramic line', fr: 'La ligne panoramique du MOB', de: 'Die Panoramalinie der MOB' },
            meta: { en: '115.34 km, Montreux to Interlaken', fr: '115,34 km, Montreux–Interlaken', de: '115,34 km, Montreux–Interlaken' },
            text: {
              en: 'The metre-gauge MOB links Château-d’Oex, Rougemont, Saanen, Gstaad, Schönried, Saanenmöser and Zweisimmen roughly every half hour. Four times a day the GoldenPass Express continues through to Interlaken Ost and Montreux with no change of train, on bogies that switch gauge automatically.',
              fr: 'La ligne à voie métrique du MOB relie Château-d’Oex, Rougemont, Saanen, Gstaad, Schönried, Saanenmöser et Zweisimmen environ toutes les demi-heures. Quatre fois par jour, le GoldenPass Express continue jusqu’à Interlaken Ost et Montreux sans changement de train, grâce à des bogies à écartement automatique.',
              de: 'Die Schmalspurlinie der MOB verbindet Château-d’Oex, Rougemont, Saanen, Gstaad, Schönried, Saanenmöser und Zweisimmen etwa im Halbstundentakt. Viermal täglich fährt der GoldenPass Express ohne Umsteigen weiter bis Interlaken Ost und Montreux, dank Drehgestellen mit automatischer Spurwechselung.',
            },
          },
          {
            name: 'Glacier 3000',
            meta: { en: 'Col du Pillon', fr: 'Col du Pillon', de: 'Col du Pillon' },
            text: {
              en: 'Gstaad Saanenland Tourismus names Glacier 3000, reached from the Col du Pillon, as the only glacier ski area in the Bernese Oberland. It is one of nine winter sports areas sharing the region’s 200 km of pistes.',
              fr: 'Gstaad Saanenland Tourismus présente le Glacier 3000, accessible depuis le col du Pillon, comme le seul domaine skiable glaciaire de l’Oberland bernois. Il fait partie des neuf secteurs skiables qui se partagent les 200 km de pistes de la région.',
              de: 'Gstaad Saanenland Tourismus bezeichnet das Glacier 3000, erreichbar ab dem Col du Pillon, als das einzige Gletscherskigebiet im Berner Oberland. Es ist eines von neun Wintersportgebieten, die sich die 200 Pistenkilometer der Region teilen.',
            },
          },
        ],
      },
    ],
    note: {
      en: 'Distances, altitudes and dates come from Gstaad Saanenland Tourismus and Bergbahnen Destination Gstaad, checked on 16 September 2026. We publish no ratings and no route descriptions: check conditions on the spot before you set off.',
      fr: 'Distances, altitudes et dates viennent de Gstaad Saanenland Tourismus et de Bergbahnen Destination Gstaad, vérifiées le 16 septembre 2026. Nous ne publions ni notes ni descriptifs d’itinéraires : renseignez-vous sur place avant de partir.',
      de: 'Distanzen, Höhen und Daten stammen von Gstaad Saanenland Tourismus und Bergbahnen Destination Gstaad, geprüft am 16. September 2026. Wir veröffentlichen keine Bewertungen und keine Routenbeschreibungen: Erkundigen Sie sich vor Ort, bevor Sie losgehen.',
    },
  },
  faq: [
    {
      q: { en: 'How do I get to Gstaad by train?', fr: 'Comment se rendre à Gstaad en train ?', de: 'Wie komme ich mit dem Zug nach Gstaad?' },
      a: {
        en: 'On the MOB from Zweisimmen or Montreux, roughly every half hour on the main axis. From Bern it takes about 1 h 53 with one change, from Spiez 1 h 19 direct on the GoldenPass Express, from Interlaken Ost 1 h 50 direct.',
        fr: 'Sur le MOB depuis Zweisimmen ou Montreux, environ toutes les demi-heures sur l’axe principal. Depuis Berne, comptez environ 1 h 53 avec un changement, depuis Spiez 1 h 19 direct sur le GoldenPass Express, depuis Interlaken Ost 1 h 50 direct.',
        de: 'Mit der MOB ab Zweisimmen oder Montreux, auf der Hauptachse etwa im Halbstundentakt. Ab Bern dauert es rund 1 Std. 53 mit einem Umsteigen, ab Spiez 1 Std. 19 direkt mit dem GoldenPass Express, ab Interlaken Ost 1 Std. 50 direkt.',
      },
    },
    {
      q: { en: 'Is Gstaad car-free?', fr: 'Gstaad est-il sans voiture ?', de: 'Ist Gstaad autofrei?' },
      a: {
        en: 'No. Gstaad is reached by road and cars come into the village; the Promenade is its pedestrian shopping street.',
        fr: 'Non. Gstaad est accessible par la route et les voitures entrent dans le village ; la Promenade en est la rue commerçante piétonne.',
        de: 'Nein. Gstaad ist mit dem Auto erreichbar, Fahrzeuge fahren ins Dorf hinein; die Promenade ist die Fussgängerzone mit den Geschäften.',
      },
    },
    {
      q: { en: 'How big is the Gstaad ski area?', fr: 'Quelle est la taille du domaine skiable de Gstaad ?', de: 'Wie gross ist das Skigebiet von Gstaad?' },
      a: {
        en: 'Gstaad Saanenland Tourismus publishes 200 km of ski slopes between 1000 and 3000 m, spread over nine winter sports areas, including Glacier 3000, the only glacier ski area in the Bernese Oberland.',
        fr: 'Gstaad Saanenland Tourismus annonce 200 km de pistes entre 1000 et 3000 m, répartis sur neuf secteurs skiables, dont le Glacier 3000, seul domaine skiable glaciaire de l’Oberland bernois.',
        de: 'Gstaad Saanenland Tourismus gibt 200 km Pisten zwischen 1000 und 3000 m an, verteilt auf neun Wintersportgebiete, darunter das Glacier 3000, das einzige Gletscherskigebiet im Berner Oberland.',
      },
    },
    {
      q: { en: 'What is the GoldenPass Express, and does my guest card cover it?', fr: 'Qu’est-ce que le GoldenPass Express, et ma carte d’hôte le couvre-t-elle ?', de: 'Was ist der GoldenPass Express, und deckt ihn meine Gästekarte ab?' },
      a: {
        en: 'It is the through train Montreux to Gstaad to Interlaken, four times a day, using variable-gauge bogies so no change of train is needed, about 3 h 15 for 115.34 km. The GstaadCard is not valid on it.',
        fr: 'C’est le train direct Montreux–Gstaad–Interlaken, quatre fois par jour, grâce à des bogies à écartement variable qui évitent tout changement, pour un trajet d’environ 3 h 15 sur 115,34 km. La GstaadCard n’y est pas valable.',
        de: 'Das ist der Durchgangszug Montreux–Gstaad–Interlaken, viermal täglich, dank Drehgestellen mit variabler Spurweite ohne Umsteigen, rund 3 Std. 15 auf 115,34 km. Die GstaadCard gilt dort nicht.',
      },
    },
    {
      q: { en: 'When do the Gstaad cable cars open in summer?', fr: 'Quand ouvrent les télécabines de Gstaad en été ?', de: 'Wann öffnen die Gstaader Bahnen im Sommer?' },
      a: {
        en: 'In 2026 the Wispile gondola from Gstaad ran from 8 June, Rinderberg from Zweisimmen and Horneggli from Schönried daily from 13 June, and La Videmanette from Rougemont from 27 June.',
        fr: 'En 2026, la télécabine du Wispile depuis Gstaad a fonctionné dès le 8 juin, celles du Rinderberg depuis Zweisimmen et du Horneggli depuis Schönried quotidiennement dès le 13 juin, et celle de La Videmanette depuis Rougemont dès le 27 juin.',
        de: 'Im Jahr 2026 fuhr die Wispilebahn ab Gstaad ab dem 8. Juni, Rinderberg ab Zweisimmen und Horneggli ab Schönried täglich ab dem 13. Juni, und La Videmanette ab Rougemont ab dem 27. Juni.',
      },
    },
  ],
  neighbours: ['adelboden', 'kandersteg', 'lenk', 'spiez'],
}
