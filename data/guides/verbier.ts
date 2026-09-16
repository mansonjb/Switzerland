import type { DestinationGuide } from '../types'

// Sources in data/SOURCES-verbier.md (checked 16/09/2026). No number without a source.
export const verbier: DestinationGuide = {
  slug: 'verbier',
  stamp: 'generic',
  updated: '2026-09-16',
  meta: {
    title: { en: 'Where to stay in Verbier: areas, hotels, access by road', fr: 'Où dormir à Verbier : secteurs, hôtels, accès routier', de: 'Wo übernachten in Verbier: Ortsteile, Hotels, Anreise per Strasse' },
    description: {
      en: 'Verbier area by area: Médran, Place Centrale, Les Creux. Hotels with dated facts, the road and rail routes from Le Châble, and the 4 Vallées ski area.',
      fr: 'Verbier secteur par secteur : Médran, Place Centrale, Les Creux. Hôtels avec faits datés, les accès routier et ferroviaire depuis Le Châble, et le domaine des 4 Vallées.',
      de: 'Verbier Ortsteil für Ortsteil: Médran, Place Centrale, Les Creux. Hotels mit datierten Fakten, Strasse und Bahn ab Le Châble, und das Skigebiet der 4 Vallées.',
    },
  },
  eyebrow: { en: 'Valais · Le Châble', fr: 'Valais · Le Châble', de: 'Wallis · Le Châble' },
  title: { en: 'Where to stay in Verbier', fr: 'Où dormir à Verbier', de: 'Wo übernachten in Verbier' },
  intro: {
    en: 'Verbier sits at 1500 m in the municipality of Val de Bagnes, and unlike most Valais mountain resorts it is reached by road as well as by rail: the tourist office lists car parks inside the village itself, at Catogne, Ermitage, Périn and Marais Vert. The nearest railhead is Le Châble, from where a gondola reaches the Médran lift station or a bus reaches the central square, both on the same fare, running from 05:10 to 23:55. The lift operator describes the 4 Vallées as the largest ski area entirely in Switzerland, with 410 km of slopes and a high point of 3330 m at Mont-Fort.',
    fr: 'Verbier se trouve à 1500 m, dans la commune de Val de Bagnes, et contrairement à la plupart des stations valaisannes, on y accède aussi bien par la route que par le rail : l’office du tourisme recense des parkings jusque dans le village même, à Catogne, Ermitage, Périn et Marais Vert. La gare la plus proche est Le Châble, d’où une télécabine rejoint la station de Médran et un bus la place centrale, au même tarif, en circulant de 5h10 à 23h55. L’exploitant des remontées présente les 4 Vallées comme le plus grand domaine skiable entièrement suisse, avec 410 km de pistes et un point culminant à 3330 m au Mont-Fort.',
    de: 'Verbier liegt auf 1500 m in der Gemeinde Val de Bagnes, und anders als die meisten Walliser Bergorte ist es sowohl per Strasse als auch per Bahn erreichbar: Das Tourismusbüro führt Parkplätze mitten im Dorf auf, bei Catogne, Ermitage, Périn und Marais Vert. Der nächste Bahnhof ist Le Châble, von wo eine Gondelbahn zur Station Médran fährt oder ein Bus zum Hauptplatz, beide zum selben Tarif, von 5.10 bis 23.55 Uhr. Der Bahnbetreiber bezeichnet die 4 Vallées als das grösste vollständig auf Schweizer Boden liegende Skigebiet, mit 410 Pistenkilometern und einem höchsten Punkt von 3330 m am Mont-Fort.',
  },
  quickAnswer: {
    en: 'Stay in Verbier for road access, the 410 km 4 Vallées ski area and the summer Verbier Festival. If you would rather leave the car altogether, Zermatt is car-free instead.',
    fr: 'Dormez à Verbier pour l’accès routier, le domaine des 4 Vallées et ses 410 km de pistes, et le Verbier Festival en été. Pour laisser la voiture de côté, Zermatt est sans voiture.',
    de: 'Übernachten Sie in Verbier für die Anreise per Strasse, das 410 km grosse Skigebiet der 4 Vallées und das sommerliche Verbier Festival. Wer ganz aufs Auto verzichten will, ist in Zermatt autofrei besser aufgehoben.',
  },
  snapshot: {
    why: {
      en: 'One of the few big Valais resorts reached directly by road, at the heart of the 4 Vallées, 410 km of pistes with a high point of 3330 m at Mont-Fort.',
      fr: 'L’une des rares grandes stations valaisannes accessibles directement par la route, au cœur des 4 Vallées, 410 km de pistes culminant à 3330 m au Mont-Fort.',
      de: 'Einer der wenigen grossen Walliser Orte mit direkter Strassenanbindung, mitten in den 4 Vallées, 410 Pistenkilometer mit dem höchsten Punkt auf 3330 m am Mont-Fort.',
    },
    where: {
      en: 'Médran for the shortest walk to the lifts and the gondola from Le Châble, Place Centrale for the shops and the tourist office, Les Creux for the quieter slope towards Savoleyres.',
      fr: 'Médran pour le trajet le plus court jusqu’aux remontées et la télécabine du Châble, Place Centrale pour les commerces et l’office du tourisme, Les Creux pour le versant plus calme vers Savoleyres.',
      de: 'Médran für den kürzesten Weg zu den Bahnen und die Gondelbahn ab Le Châble, Place Centrale für die Läden und das Tourismusbüro, Les Creux für den ruhigeren Hang Richtung Savoleyres.',
    },
    watch: {
      en: 'Winter 2026/27 opening and closing dates for the 4 Vallées were not yet published by the operator at the time of this check: confirm them before you book.',
      fr: 'Les dates d’ouverture et de fermeture de l’hiver 2026/27 pour les 4 Vallées n’étaient pas encore publiées par l’exploitant au moment de cette vérification : confirmez-les avant de réserver.',
      de: 'Die Öffnungs- und Schliessdaten für den Winter 2026/27 der 4 Vallées waren zum Zeitpunkt dieser Prüfung vom Betreiber noch nicht veröffentlicht: vor der Buchung bestätigen.',
    },
  },
  stats: [
    { value: '1500', label: { en: 'metres above sea level', fr: "mètres d'altitude", de: 'Meter über Meer' } },
    { value: '410', label: { en: 'km of pistes in the 4 Vallées', fr: 'km de pistes dans les 4 Vallées', de: 'Pistenkilometer in den 4 Vallées' } },
    { value: '500', label: { en: 'km of hiking trails in summer', fr: 'km de sentiers de randonnée en été', de: 'Wanderwegkilometer im Sommer' } },
  ],
  hero: {
    photo: '/photos/verbier.jpg',
    caption: { en: 'Verbier seen from the ski slopes, canton Valais.', fr: 'Verbier vu depuis les pistes de ski, canton du Valais.', de: 'Verbier, von den Skipisten aus gesehen, Kanton Wallis.' },
    credit: { author: 'Norbert Aepli (Noebu)', license: 'CC BY 2.5', licenseUrl: 'https://creativecommons.org/licenses/by/2.5/', source: 'https://commons.wikimedia.org/wiki/File:Verbier_Valais_029.JPG' },
  },
  sectors: [
    {
      title: { en: 'Médran', fr: 'Médran', de: 'Médran' },
      walk: { en: 'The foot of the lifts', fr: 'Au pied des remontées', de: 'Am Fuss der Bahnen' },
      text: {
        en: 'Rue de Médran runs down from the centre to the Médran lift station, where the gondola from Le Châble arrives and where the ski lifts leave for Les Ruinettes. Hôtel Mirabeau gives less than 1 minute on the flat from the lift departure.',
        fr: 'La Rue de Médran descend du centre vers la station de Médran, où arrive la télécabine du Châble et d’où partent les remontées vers Les Ruinettes. L’Hôtel Mirabeau indique moins d’1 minute à plat depuis le départ des remontées.',
        de: 'Die Rue de Médran führt vom Zentrum hinunter zur Station Médran, wo die Gondelbahn ab Le Châble ankommt und die Skilifte Richtung Les Ruinettes abfahren. Das Hôtel Mirabeau gibt weniger als 1 Minute ebenerdig vom Bahnabgang an.',
      },
      points: [
        { en: 'Gondola from Le Châble arrives here', fr: 'Le télécabine du Châble y arrive', de: 'Die Gondelbahn ab Le Châble kommt hier an' },
        { en: 'Ski lifts to Les Ruinettes leave from here', fr: 'Les remontées vers Les Ruinettes en partent', de: 'Die Skilifte Richtung Les Ruinettes fahren hier ab' },
      ],
    },
    {
      title: { en: 'Place Centrale', fr: 'Place Centrale', de: 'Place Centrale' },
      walk: { en: 'The village centre', fr: 'Le centre du village', de: 'Das Dorfzentrum' },
      text: {
        en: 'The shops, the bars and the tourist office. The bus from Le Châble sets down at Station Poste on the central square. Hotel Vanessa gives 50 m to the square and 350 m to the Médran lifts.',
        fr: 'Les commerces, les bars et l’office du tourisme. Le bus du Châble dépose à Station Poste, sur la place centrale. L’Hotel Vanessa indique 50 m jusqu’à la place et 350 m jusqu’aux remontées de Médran.',
        de: 'Die Läden, die Bars und das Tourismusbüro. Der Bus ab Le Châble hält bei Station Poste am Hauptplatz. Das Hotel Vanessa gibt 50 m bis zum Platz und 350 m bis zu den Médran-Bahnen an.',
      },
      points: [
        { en: 'Bus from Le Châble stops at Station Poste', fr: 'Le bus du Châble s’arrête à Station Poste', de: 'Der Bus ab Le Châble hält bei Station Poste' },
        { en: 'Hôtel Ermitage next to the tourist office', fr: 'Hôtel Ermitage à côté de l’office du tourisme', de: 'Hôtel Ermitage neben dem Tourismusbüro' },
      ],
    },
    {
      title: { en: 'Les Creux', fr: 'Les Creux', de: 'Les Creux' },
      walk: { en: 'The north side, towards Savoleyres', fr: 'Le versant nord, vers Savoleyres', de: 'Die Nordseite, Richtung Savoleyres' },
      text: {
        en: 'A quieter residential slope above and to the north of the centre, where the Verbier to Savoleyres cable car leaves. La Cordée des Alpes gives less than 500 m to the village centre and 15 minutes on foot, or 5 minutes by its own shuttle, to the lifts.',
        fr: 'Un versant résidentiel plus calme au-dessus et au nord du centre, d’où part le téléphérique de Verbier à Savoleyres. La Cordée des Alpes indique moins de 500 m du centre du village et 15 minutes à pied, ou 5 minutes avec sa propre navette, jusqu’aux remontées.',
        de: 'Ein ruhigerer Wohnhang oberhalb und nördlich des Zentrums, von dem die Seilbahn Verbier-Savoleyres abfährt. La Cordée des Alpes gibt weniger als 500 m zum Dorfzentrum und 15 Gehminuten oder 5 Minuten mit dem eigenen Shuttle zu den Bahnen an.',
      },
      points: [
        { en: 'Verbier to Savoleyres cable car leaves from this side', fr: 'Le téléphérique Verbier-Savoleyres part de ce côté', de: 'Die Seilbahn Verbier-Savoleyres fährt auf dieser Seite ab' },
        { en: 'Further from Médran, more walking or a hotel shuttle', fr: 'Plus loin de Médran, davantage de marche ou une navette d’hôtel', de: 'Weiter von Médran entfernt, mehr Fussweg oder ein Hotelshuttle' },
      ],
    },
  ],
  hotels: [
    {
      slug: 'verbier-w-verbier',
      name: 'W Verbier',
      photo: '/photos/hotels/verbier-w-verbier.jpg',
      url: 'https://www.marriott.com/en-us/hotels/gvawh-w-verbier/overview/',
      sector: { en: 'Médran', fr: 'Médran', de: 'Médran' },
      facts: [
        { en: 'Rue de Médran 70', fr: 'Rue de Médran 70', de: 'Rue de Médran 70' },
        { en: '123 bedrooms including 16 suites', fr: '123 chambres, dont 16 suites', de: '123 Zimmer, davon 16 Suiten' },
        { en: '1300 m² of pool and spa', fr: '1300 m² de piscine et de spa', de: '1300 m² Pool- und Spabereich' },
      ],
    },
    {
      slug: 'verbier-les-chamois',
      name: 'Hôtel Les Chamois',
      url: 'https://hotel-chamois.ch/en/',
      sector: { en: 'Médran', fr: 'Médran', de: 'Médran' },
      facts: [
        { en: 'Rue Medran 9, 1936 Verbier, run by the Oreiller family', fr: 'Rue Medran 9, 1936 Verbier, tenu par la famille Oreiller', de: 'Rue Medran 9, 1936 Verbier, geführt von der Familie Oreiller' },
        { en: 'A second restaurant, La Marmotte, at 1930 m', fr: 'Un second restaurant, La Marmotte, à 1930 m', de: 'Ein zweites Restaurant, La Marmotte, auf 1930 m' },
        { en: 'The site states the hotel reopens on 20 November 2026', fr: 'Le site indique une réouverture de l’hôtel le 20 novembre 2026', de: 'Die Website nennt eine Wiedereröffnung am 20. November 2026' },
      ],
    },
    {
      slug: 'verbier-mirabeau',
      name: 'Hôtel Mirabeau',
      url: 'https://mirabeauhotel.ch/',
      sector: { en: 'Médran', fr: 'Médran', de: 'Médran' },
      facts: [
        { en: '"Less than 1 minute flat walking" from the Médran lift departure and the town centre', fr: '« Moins d’1 minute à plat » du départ des remontées de Médran et du centre-ville', de: '„Weniger als 1 Minute ebenerdig“ vom Bahnabgang Médran und vom Zentrum' },
        { en: 'Built in 1973, main areas renovated in 2014', fr: 'Construit en 1973, parties communes rénovées en 2014', de: 'Erbaut 1973, Gemeinschaftsbereiche 2014 renoviert' },
        { en: 'Turkish bath and sauna', fr: 'Hammam et sauna', de: 'Hamam und Sauna' },
      ],
    },
    {
      slug: 'verbier-vanessa',
      name: 'Hotel Vanessa',
      photo: '/photos/hotels/verbier-vanessa.jpg',
      url: 'https://www.hotelvanessa.ch/en',
      sector: { en: 'Place Centrale', fr: 'Place Centrale', de: 'Place Centrale' },
      facts: [
        { en: 'Chemin des Vernes 1', fr: 'Chemin des Vernes 1', de: 'Chemin des Vernes 1' },
        { en: '53 suites', fr: '53 suites', de: '53 Suiten' },
        { en: '50 m from the central square, 350 m from the Médran lifts', fr: '50 m de la place centrale, 350 m des remontées de Médran', de: '50 m vom Hauptplatz, 350 m von den Médran-Bahnen' },
      ],
    },
    {
      slug: 'verbier-ermitage',
      name: 'Hôtel Ermitage Verbier',
      url: 'https://www.ermitage-verbier.ch/en/',
      sector: { en: 'Place Centrale', fr: 'Place Centrale', de: 'Place Centrale' },
      facts: [
        { en: 'Carrefour Central 18, next to the tourist office', fr: 'Carrefour Central 18, à côté de l’office du tourisme', de: 'Carrefour Central 18, neben dem Tourismusbüro' },
        { en: 'Wellness area with sauna, hammam and a massage room', fr: 'Espace bien-être avec sauna, hammam et salle de massage', de: 'Wellnessbereich mit Sauna, Hamam und Massageraum' },
        { en: 'Fitness room', fr: 'Salle de fitness', de: 'Fitnessraum' },
      ],
    },
    {
      slug: 'verbier-bristol',
      name: 'Hôtel Bristol Verbier',
      photo: '/photos/hotels/verbier-bristol.jpg',
      url: 'https://www.bristol-verbier.ch/',
      sector: { en: 'Les Creux', fr: 'Les Creux', de: 'Les Creux' },
      facts: [
        { en: 'Route des Creux 4', fr: 'Route des Creux 4', de: 'Route des Creux 4' },
        { en: 'Sauna and breakfast included', fr: 'Sauna et petit-déjeuner inclus', de: 'Sauna und Frühstück inbegriffen' },
        { en: 'Own restaurant, Tara Tata, and apartments as well as rooms', fr: 'Restaurant propre, Tara Tata, et appartements en plus des chambres', de: 'Eigenes Restaurant, Tara Tata, sowie Wohnungen zusätzlich zu den Zimmern' },
      ],
    },
    {
      slug: 'verbier-chalet-adrien',
      name: 'Hôtel Chalet d’Adrien',
      photo: '/photos/hotels/verbier-chalet-adrien.jpg',
      url: 'https://chalet-adrien.com/en/',
      sector: { en: 'Les Creux', fr: 'Les Creux', de: 'Les Creux' },
      facts: [
        { en: 'Chemin des Creux, 29 rooms and suites', fr: 'Chemin des Creux, 29 chambres et suites', de: 'Chemin des Creux, 29 Zimmer und Suiten' },
        { en: 'Swimming pool, spa and fitness room', fr: 'Piscine, spa et salle de fitness', de: 'Schwimmbad, Spa und Fitnessraum' },
        { en: 'Two restaurants, Le Grenier and La Table d’Adrien', fr: 'Deux restaurants, Le Grenier et La Table d’Adrien', de: 'Zwei Restaurants, Le Grenier und La Table d’Adrien' },
      ],
    },
    {
      slug: 'verbier-cordee-des-alpes',
      name: 'Hôtel La Cordée des Alpes',
      photo: '/photos/hotels/verbier-cordee-des-alpes.jpg',
      url: 'https://www.kvhotels.com/en/hotel-la-cordee-des-alpes-en/',
      sector: { en: 'Les Creux', fr: 'Les Creux', de: 'Les Creux' },
      facts: [
        { en: 'Rue du Centre Sportif 24, 32 rooms and suites plus 6 apartments', fr: 'Rue du Centre Sportif 24, 32 chambres et suites plus 6 appartements', de: 'Rue du Centre Sportif 24, 32 Zimmer und Suiten plus 6 Wohnungen' },
        { en: '15 m pool heated to 28°C', fr: 'Piscine de 15 m chauffée à 28°C', de: '15-m-Pool, beheizt auf 28°C' },
        { en: 'Less than 500 m to the village centre, 15 minutes on foot or 5 minutes by hotel shuttle to the lifts', fr: 'Moins de 500 m du centre du village, 15 minutes à pied ou 5 minutes en navette jusqu’aux remontées', de: 'Weniger als 500 m zum Dorfzentrum, 15 Gehminuten oder 5 Minuten mit dem Hotelshuttle zu den Bahnen' },
      ],
    },
  ],
  hotelsNote: {
    en: 'Facts taken from each hotel’s own website, or from the tourist office listing where the operator carries the hotel’s figures, on 16 September 2026. No ratings or reviews on this guide.',
    fr: 'Faits relevés sur le site de chaque hôtel, ou sur la fiche de l’office du tourisme lorsque l’exploitant reprend les chiffres de l’hôtel, le 16 septembre 2026. Aucune note ni aucun avis sur ce guide.',
    de: 'Fakten von der Website des jeweiligen Hotels, oder vom Eintrag des Tourismusbüros, wenn dieser die Zahlen des Hotels übernimmt, Stand 16. September 2026. Keine Bewertungen oder Rezensionen.',
  },
  practical: {
    title: { en: 'Getting to Verbier, in practice', fr: 'Rejoindre Verbier, en pratique', de: 'Anreise nach Verbier, in der Praxis' },
    items: [
      {
        title: { en: 'By train to Le Châble', fr: 'En train jusqu’au Châble', de: 'Mit dem Zug nach Le Châble' },
        text: {
          en: 'The nearest railhead. Published train times: Sion 1 h 10, Lausanne 1 h 40, Geneva 2 h 40, Zurich 4 h.',
          fr: 'La gare la plus proche. Temps de trajet publiés : Sion 1 h 10, Lausanne 1 h 40, Genève 2 h 40, Zurich 4 h.',
          de: 'Der nächstgelegene Bahnhof. Publizierte Fahrzeiten: Sitten 1 Std. 10, Lausanne 1 Std. 40, Genf 2 Std. 40, Zürich 4 Std.',
        },
      },
      {
        title: { en: 'The last leg, Le Châble to Verbier', fr: 'Le dernier tronçon, du Châble à Verbier', de: 'Die letzte Etappe, Le Châble nach Verbier' },
        text: {
          en: 'A gondola to Médran or a bus to Station Poste on the central square, at the same fare, what the tourist office calls the final 20 minutes. The gondola runs continuously from 05:10 to 23:55.',
          fr: 'Un télécabine jusqu’à Médran ou un bus jusqu’à Station Poste sur la place centrale, au même tarif, ce que l’office du tourisme appelle les 20 dernières minutes. Le télécabine circule en continu de 5h10 à 23h55.',
          de: 'Eine Gondelbahn nach Médran oder ein Bus bis Station Poste am Hauptplatz, zum selben Tarif, laut Tourismusbüro die letzten 20 Minuten. Die Gondelbahn fährt durchgehend von 5.10 bis 23.55 Uhr.',
        },
      },
      {
        title: { en: 'By car', fr: 'En voiture', de: 'Mit dem Auto' },
        text: {
          en: 'About 30 minutes by car from Martigny. Car parks inside Verbier at Catogne, Ermitage, Périn and Marais Vert; the car park at the foot of the lifts in Le Châble is free for up to 10 days.',
          fr: 'Environ 30 minutes de voiture depuis Martigny. Parkings dans Verbier même à Catogne, Ermitage, Périn et Marais Vert ; le parking au pied des remontées du Châble est gratuit jusqu’à 10 jours.',
          de: 'Rund 30 Autominuten ab Martigny. Parkplätze in Verbier selbst bei Catogne, Ermitage, Périn und Marais Vert; der Parkplatz am Fuss der Bahnen in Le Châble ist bis 10 Tage gratis.',
        },
      },
      {
        title: { en: 'The direct weekend train', fr: 'Le train direct du week-end', de: 'Der direkte Wochenendzug' },
        text: {
          en: 'The Verbier Express / VosAlpes Express runs from Geneva Airport and from Fribourg at weekends and on public holidays all year, with a 30% reduction on a 1-day or half-day ski pass.',
          fr: 'Le Verbier Express / VosAlpes Express relie l’aéroport de Genève et Fribourg les week-ends et jours fériés toute l’année, avec 30 % de réduction sur un forfait de ski d’1 jour ou d’une demi-journée.',
          de: 'Der Verbier Express / VosAlpes Express fährt ab dem Flughafen Genf und ab Freiburg an Wochenenden und Feiertagen das ganze Jahr, mit 30 % Ermässigung auf einen Tages- oder Halbtagesskipass.',
        },
      },
    ],
  },
  seasons: {
    winter: {
      title: { en: 'Winter in Verbier', fr: 'L’hiver à Verbier', de: 'Winter in Verbier' },
      base: {
        en: 'Skiers do best at Médran, the foot of the lifts to Les Ruinettes and beyond towards Mont-Fort.',
        fr: 'Pour skier, visez Médran, le pied des remontées vers Les Ruinettes et, au-delà, vers le Mont-Fort.',
        de: 'Skifahrer wohnen am besten bei Médran, am Fuss der Bahnen Richtung Les Ruinettes und weiter Richtung Mont-Fort.',
      },
      facts: [
        { value: '410 km', label: { en: 'of pistes in the 4 Vallées, the largest ski area entirely in Switzerland', fr: 'de pistes dans les 4 Vallées, le plus grand domaine entièrement suisse', de: 'Pisten in den 4 Vallées, dem grössten vollständig schweizerischen Skigebiet' } },
        { value: '3330 m', label: { en: 'Mont-Fort, the high point of the 4 Vallées', fr: 'Mont-Fort, point culminant des 4 Vallées', de: 'Mont-Fort, höchster Punkt der 4 Vallées' } },
        { value: '05:10 → 23:55', label: { en: 'the Le Châble to Verbier gondola, running all year', fr: 'télécabine du Châble à Verbier, toute l’année', de: 'Gondelbahn Le Châble–Verbier, ganzjährig' } },
      ],
      note: {
        en: 'Winter 2026/27 opening and closing dates for the 4 Vallées were not published at the time of this check. Sources: verbier4vallees.ch, verbier.ch, checked 16 September 2026.',
        fr: 'Les dates d’ouverture et de fermeture de l’hiver 2026/27 pour les 4 Vallées n’étaient pas publiées au moment de cette vérification. Sources : verbier4vallees.ch, verbier.ch, vérifiées le 16 septembre 2026.',
        de: 'Die Öffnungs- und Schliessdaten für den Winter 2026/27 der 4 Vallées waren zum Zeitpunkt dieser Prüfung nicht publiziert. Quellen: verbier4vallees.ch, verbier.ch, geprüft am 16. September 2026.',
      },
    },
    summer: {
      title: { en: 'Summer in Verbier', fr: 'L’été à Verbier', de: 'Sommer in Verbier' },
      base: {
        en: 'Hikers and bikers do best at Médran or Les Creux for quick access to the lifts; Place Centrale suits the Verbier Festival crowd best.',
        fr: 'Randonneurs et vététistes profitent au mieux de Médran ou des Creux, proches des remontées ; Place Centrale convient mieux au public du Verbier Festival.',
        de: 'Wanderer und Biker wohnen am besten bei Médran oder Les Creux, nahe an den Bahnen; die Place Centrale eignet sich am besten fürs Publikum des Verbier Festival.',
      },
      facts: [
        { value: '500 km', label: { en: 'of hiking trails', fr: 'de sentiers de randonnée', de: 'Wanderwege' } },
        { value: '19 km', label: { en: 'of downhill mountain-bike runs', fr: 'de pistes de VTT de descente', de: 'Mountainbike-Downhillstrecken' } },
        { value: '15.7 → 1.8', label: { en: 'Verbier Festival 2027', fr: 'Verbier Festival 2027', de: 'Verbier Festival 2027' } },
      ],
      note: {
        en: 'Sources: verbier.ch, verbierfestival.com, checked 16 September 2026.',
        fr: 'Sources : verbier.ch, verbierfestival.com, vérifiées le 16 septembre 2026.',
        de: 'Quellen: verbier.ch, verbierfestival.com, geprüft am 16. September 2026.',
      },
    },
  },
  doing: {
    title: { en: 'What to do in Verbier', fr: 'Que faire à Verbier', de: 'Was man in Verbier unternimmt' },
    intro: {
      en: 'Not a trail guide: a handful of named places from the tourist office and the lift operator, to see what a day here looks like.',
      fr: 'Pas un guide de randonnée : une poignée de lieux nommés, repris de l’office du tourisme et de l’exploitant des remontées, pour voir à quoi ressemble une journée ici.',
      de: 'Kein Wanderführer: eine Handvoll benannter Orte vom Tourismusbüro und vom Bahnbetreiber, damit Sie sehen, wie ein Tag hier aussieht.',
    },
    groups: [
      {
        kind: 'walk',
        title: { en: 'A long ridge route and a short loop', fr: 'Un long parcours de crête et une courte boucle', de: 'Eine lange Gratroute und eine kurze Runde' },
        items: [
          {
            name: 'Sentier des Chamois',
            meta: { en: '15.5 km · 5 h · 676 m of climb · very difficult', fr: '15,5 km · 5 h · 676 m de dénivelé · très difficile', de: '15,5 km · 5 Std. · 676 Hm · sehr schwierig' },
            text: {
              en: 'One way from Verbier, reached from Les Ruinettes or La Chaux, to Fionnay, climbing to 2265 m with a few exposed sections. A bus runs back down to Le Châble.',
              fr: 'À sens unique depuis Verbier, avec accès par Les Ruinettes ou La Chaux, jusqu’à Fionnay, montant à 2265 m avec quelques passages exposés. Un bus redescend ensuite jusqu’au Châble.',
              de: 'Einwegig ab Verbier, Zustieg über Les Ruinettes oder La Chaux, bis Fionnay, mit Anstieg auf 2265 m und einigen ausgesetzten Abschnitten. Ein Bus bringt danach zurück nach Le Châble.',
            },
          },
          {
            name: { en: '3-D Sculpture Park', fr: 'Le 3-D Sculpture Park', de: 'Der 3-D Sculpture Park' },
            meta: { en: '2.2 km · 1 h 15 · easy', fr: '2,2 km · 1 h 15 · facile', de: '2,2 km · 1 Std. 15 · leicht' },
            text: {
              en: 'A there-and-back walk at about 2300 m between La Chaux and Les Ruinettes, which the tourist office calls its most popular and easiest walk.',
              fr: 'Un aller-retour à environ 2300 m entre La Chaux et Les Ruinettes, que l’office du tourisme présente comme sa marche la plus fréquentée et la plus facile.',
              de: 'Ein Hin- und Rückweg auf rund 2300 m zwischen La Chaux und Les Ruinettes, den das Tourismusbüro als seine beliebteste und leichteste Wanderung bezeichnet.',
            },
          },
        ],
      },
      {
        kind: 'ride',
        title: { en: 'Above Verbier by lift', fr: 'Au-dessus de Verbier en remontée', de: 'Über Verbier mit der Bahn' },
        items: [
          {
            name: 'Mont-Fort',
            meta: { en: '3330 m · highest point of the 4 Vallées', fr: '3330 m · point culminant des 4 Vallées', de: '3330 m · höchster Punkt der 4 Vallées' },
            text: {
              en: 'Reached through Les Ruinettes, La Chaux and Col des Gentianes. In summer 2026 the cable car to the top ran 09:15 to 13:00 and 14:30 to 15:30.',
              fr: 'On y accède par Les Ruinettes, La Chaux et le Col des Gentianes. En été 2026, le téléphérique vers le sommet fonctionnait de 9h15 à 13h et de 14h30 à 15h30.',
              de: 'Zustieg über Les Ruinettes, La Chaux und Col des Gentianes. Im Sommer 2026 fuhr die Bahn zum Gipfel von 9.15 bis 13 Uhr und 14.30 bis 15.30 Uhr.',
            },
          },
          {
            name: { en: 'The Le Châble to Verbier gondola', fr: 'Le télécabine du Châble à Verbier', de: 'Die Gondelbahn Le Châble–Verbier' },
            meta: { en: '05:10 to 23:55, all year', fr: '5h10 à 23h55, toute l’année', de: '5.10 bis 23.55 Uhr, ganzjährig' },
            text: {
              en: 'The only lift in the resort counted as part of the regional public transport timetable, a status it has held since 12 December 2021, running continuously from Le Châble up to Médran.',
              fr: 'La seule remontée de la station comptée dans l’horaire des transports publics régionaux, un statut qu’elle détient depuis le 12 décembre 2021, en circulation continue du Châble jusqu’à Médran.',
              de: 'Die einzige Bahn im Ort, die zum regionalen Fahrplan des öffentlichen Verkehrs zählt, ein Status seit dem 12. Dezember 2021, mit durchgehendem Betrieb von Le Châble hinauf nach Médran.',
            },
          },
        ],
      },
      {
        kind: 'table',
        title: { en: 'Two tables in the resort', fr: 'Deux tables dans la station', de: 'Zwei Adressen zum Essen' },
        items: [
          {
            name: 'La Marlénaz',
            meta: { en: '1895 m', fr: '1895 m', de: '1895 m' },
            text: {
              en: 'On the heights above Verbier, traditional dishes and local produce with a view of the Combins massif.',
              fr: 'Sur les hauteurs de Verbier, une cuisine traditionnelle et des produits locaux avec vue sur le massif des Combins.',
              de: 'Oberhalb von Verbier, traditionelle Küche und regionale Produkte mit Blick auf das Combins-Massiv.',
            },
          },
          {
            name: 'Le Caveau',
            meta: { en: 'open all year', fr: 'ouvert toute l’année', de: 'ganzjährig geöffnet' },
            text: {
              en: 'In the resort for more than 50 years, serving local charcuterie and cheese from the mountain pastures of the region and of Verbier, plus salads and meat dishes.',
              fr: 'Dans la station depuis plus de 50 ans, avec charcuterie locale et fromage d’alpage de la région et de Verbier, ainsi que salades et plats de viande.',
              de: 'Seit mehr als 50 Jahren im Ort, mit regionaler Charcuterie und Alpkäse aus der Region und aus Verbier sowie Salaten und Fleischgerichten.',
            },
          },
        ],
      },
    ],
    note: {
      en: 'Times, distances and figures come from the tourist office and the lift operator, checked on 16 September 2026. We publish no ratings and no route descriptions: check conditions on the spot before you set off.',
      fr: 'Durées, distances et chiffres viennent de l’office du tourisme et de l’exploitant des remontées, vérifiés le 16 septembre 2026. Nous ne publions ni notes ni descriptifs d’itinéraires : renseignez-vous sur place avant de partir.',
      de: 'Zeiten, Distanzen und Zahlen stammen vom Tourismusbüro und vom Bahnbetreiber, geprüft am 16. September 2026. Wir veröffentlichen keine Bewertungen und keine Routenbeschreibungen: Erkundigen Sie sich vor Ort, bevor Sie losgehen.',
    },
  },
  faq: [
    {
      q: { en: 'Can you reach Verbier by train?', fr: 'Peut-on rejoindre Verbier en train ?', de: 'Kommt man mit dem Zug nach Verbier?' },
      a: {
        en: 'Not all the way. Trains run to Le Châble, then a gondola to Médran or a bus to Station Poste on the central square covers the last stretch, what the tourist office calls the final 20 minutes. Both cost the same fare.',
        fr: 'Pas jusqu’au bout. Les trains vont jusqu’au Châble, puis une télécabine jusqu’à Médran ou un bus jusqu’à Station Poste sur la place centrale couvre le dernier tronçon, ce que l’office du tourisme appelle les 20 dernières minutes. Les deux coûtent le même prix.',
        de: 'Nicht ganz. Die Züge fahren bis Le Châble, dann übernimmt eine Gondelbahn nach Médran oder ein Bus bis Station Poste am Hauptplatz die letzte Etappe, laut Tourismusbüro die letzten 20 Minuten. Beide kosten denselben Tarif.',
      },
    },
    {
      q: { en: 'How late does the gondola from Le Châble run?', fr: 'Jusqu’à quelle heure circule la télécabine du Châble ?', de: 'Wie spät fährt die Gondelbahn ab Le Châble?' },
      a: {
        en: 'Continuously from 05:10 to 23:55, all year, except on maintenance days when extra buses run instead.',
        fr: 'En continu de 5h10 à 23h55, toute l’année, sauf les jours de maintenance, où des bus supplémentaires circulent à la place.',
        de: 'Durchgehend von 5.10 bis 23.55 Uhr, ganzjährig, ausser an Wartungstagen, an denen stattdessen zusätzliche Busse fahren.',
      },
    },
    {
      q: { en: 'Should I stay in Verbier or down in Le Châble?', fr: 'Faut-il loger à Verbier ou en bas, au Châble ?', de: 'Besser in Verbier oder unten in Le Châble übernachten?' },
      a: {
        en: 'Le Châble has the train station and free parking for up to 10 days at the foot of the lifts; Verbier has the shops, the tourist office and the Médran lift station. The gondola links the two from 05:10 to 23:55.',
        fr: 'Le Châble a la gare et un parking gratuit jusqu’à 10 jours au pied des remontées ; Verbier a les commerces, l’office du tourisme et la station de Médran. Le télécabine relie les deux de 5h10 à 23h55.',
        de: 'Le Châble hat den Bahnhof und bis zu 10 Tage gratis Parkplätze am Fuss der Bahnen; Verbier hat die Läden, das Tourismusbüro und die Station Médran. Die Gondelbahn verbindet beide von 5.10 bis 23.55 Uhr.',
      },
    },
    {
      q: { en: 'Which part of Verbier is closest to the lifts?', fr: 'Quel secteur de Verbier est le plus proche des remontées ?', de: 'Welcher Ortsteil von Verbier liegt am nächsten bei den Bahnen?' },
      a: {
        en: 'Rue de Médran, which runs down to the Médran lift station. Hôtel Mirabeau states less than 1 minute on the flat from the departure; Hotel Vanessa, by the central square, gives 350 m.',
        fr: 'La Rue de Médran, qui descend vers la station de Médran. L’Hôtel Mirabeau indique moins d’1 minute à plat du départ ; l’Hotel Vanessa, près de la place centrale, indique 350 m.',
        de: 'Die Rue de Médran, die zur Station Médran hinunterführt. Das Hôtel Mirabeau nennt weniger als 1 Minute ebenerdig vom Bahnabgang; das Hotel Vanessa bei der Place Centrale gibt 350 m an.',
      },
    },
    {
      q: { en: 'Is there anything to do in Verbier in summer?', fr: 'Y a-t-il des activités à Verbier en été ?', de: 'Gibt es im Sommer etwas zu tun in Verbier?' },
      a: {
        en: 'The tourist office publishes 500 km of hiking trails and 19 km of downhill mountain-bike runs, and the Verbier Festival of classical music runs 15 July to 1 August 2027.',
        fr: 'L’office du tourisme recense 500 km de sentiers de randonnée et 19 km de pistes de VTT de descente, et le Verbier Festival de musique classique se tient du 15 juillet au 1er août 2027.',
        de: 'Das Tourismusbüro führt 500 km Wanderwege und 19 km Mountainbike-Downhillstrecken auf, und das Verbier Festival für klassische Musik läuft vom 15. Juli bis 1. August 2027.',
      },
    },
  ],
  neighbours: ['crans-montana', 'leukerbad', 'zermatt', 'saas-fee'],
}
