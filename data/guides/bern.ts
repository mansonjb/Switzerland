import type { DestinationGuide } from '../types'

// Sources in data/SOURCES-bern.md (checked 16/09/2026). No number without a source.
export const bern: DestinationGuide = {
  slug: 'bern',
  stamp: 'generic',
  updated: '2026-09-16',
  meta: {
    title: { en: 'Where to stay in Bern: old town, arcades, BearPark', fr: 'Où dormir à Berne : vieille ville, arcades, parc aux ours', de: 'Wo übernachten in Bern: Altstadt, Lauben, Bärenpark' },
    description: {
      en: 'Bern area by area: the old town between the station and the Zytglogge, the lower old town towards the BearPark, and the Marzili on the Aare. Hotels with real addresses, the arcades, and the free Parliament tour.',
      fr: 'Berne secteur par secteur : la vieille ville entre la gare et la Zytglogge, la basse vieille ville vers le parc aux ours, et le Marzili au bord de l’Aar. Hôtels avec adresses réelles, les arcades, et la visite gratuite du Parlement.',
      de: 'Bern Ortsteil für Ortsteil: die Altstadt zwischen Bahnhof und Zytglogge, die untere Altstadt Richtung Bärenpark, und das Marzili an der Aare. Hotels mit echten Adressen, die Lauben, und die kostenlose Parlamentsführung.',
    },
  },
  eyebrow: { en: 'Bern region · Bern', fr: 'Région de Berne · Berne', de: 'Region Bern · Bern' },
  title: { en: 'Where to stay in Bern', fr: 'Où dormir à Berne', de: 'Wo übernachten in Bern' },
  intro: {
    en: 'The old town sits at 542 m on a hill wrapped by the Aare, and has been a UNESCO World Heritage site since 1983. About six kilometres of covered arcades run through it, past sandstone houses and historic fountains, down to the Nydeggbrücke and the BearPark, 5000 m2 open every day of the year. Free guided tours of the Parliament Building, about an hour long, run most days when the chambers are not sitting.',
    fr: 'La vieille ville se dresse à 542 m sur une colline enveloppée par l’Aar, et figure au patrimoine mondial de l’UNESCO depuis 1983. Environ six kilomètres d’arcades couvertes la traversent, entre maisons de grès et fontaines historiques, jusqu’au pont de Nydegg et au parc aux ours, 5000 m2 ouverts tous les jours de l’année. Des visites guidées gratuites du Palais fédéral, d’environ une heure, ont lieu la plupart des jours quand les chambres ne siègent pas.',
    de: 'Die Altstadt liegt auf 542 m auf einem von der Aare umschlungenen Hügel und steht seit 1983 auf der UNESCO-Weltkulturerbeliste. Rund sechs Kilometer überdachte Lauben durchziehen sie, vorbei an Sandsteinhäusern und historischen Brunnen, hinunter zur Nydeggbrücke und zum Bärenpark, 5000 m2, an jedem Tag des Jahres geöffnet. Kostenlose, rund einstündige Führungen durchs Bundeshaus finden an den meisten Tagen statt, an denen das Parlament nicht tagt.',
  },
  quickAnswer: {
    en: 'Stay in Bern for a UNESCO old town you can walk end to end under six kilometres of arcades, with free access to Parliament and bears living by the river. For lake boats and two mountain railways instead of a capital’s politics, stay in Lucerne.',
    fr: 'Dormez à Berne pour une vieille ville classée à l’UNESCO que l’on parcourt d’un bout à l’autre sous six kilomètres d’arcades, avec un accès gratuit au Parlement et des ours vivant au bord de la rivière. Pour des bateaux sur un lac et deux chemins de fer de montagne plutôt que la politique d’une capitale, dormez à Lucerne.',
    de: 'Übernachten Sie in Bern für eine UNESCO-Altstadt, die man unter sechs Kilometern Lauben von einem Ende zum anderen durchquert, mit freiem Zugang zum Parlament und Bären, die am Fluss leben. Für Kursschiffe auf einem See und zwei Bergbahnen statt der Politik einer Bundesstadt übernachten Sie in Luzern.',
  },
  snapshot: {
    why: {
      en: 'The old town, the arcades and the Bundeshaus all sit within walking distance of each other, with the BearPark reachable on foot across the Nydeggbrücke.',
      fr: 'La vieille ville, les arcades et le Palais fédéral se trouvent tous à distance de marche les uns des autres, le parc aux ours se rejoignant à pied en traversant le pont de Nydegg.',
      de: 'Altstadt, Lauben und Bundeshaus liegen alle in Gehdistanz zueinander, der Bärenpark ist zu Fuss über die Nydeggbrücke erreichbar.',
    },
    where: {
      en: 'Around Bahnhofplatz and Zeughausgasse for the upper old town and the station, along Gerechtigkeitsgasse for the sandstone arcades and the BearPark, down in the Marzili on the Aare or out at the Engehalbinsel for something quieter.',
      fr: 'Autour de Bahnhofplatz et Zeughausgasse pour la haute vieille ville et la gare, le long de la Gerechtigkeitsgasse pour les arcades de grès et le parc aux ours, en contrebas au Marzili sur l’Aar ou du côté de l’Engehalbinsel pour plus de calme.',
      de: 'Rund um Bahnhofplatz und Zeughausgasse für die obere Altstadt und den Bahnhof, entlang der Gerechtigkeitsgasse für die Sandsteinlauben und den Bärenpark, unten im Marzili an der Aare oder draussen auf der Engehalbinsel für mehr Ruhe.',
    },
    watch: {
      en: 'Parliament tours stop entirely while the chambers are sitting, and may be restricted during ceiling lighting work from January to February 2027, so check the calendar before planning a visit around them.',
      fr: 'Les visites du Parlement s’arrêtent complètement quand les chambres siègent, et pourraient être restreintes pendant des travaux d’éclairage de plafond de janvier à février 2027 : à vérifier avant d’organiser une visite autour d’elles.',
      de: 'Die Parlamentsführungen finden gar nicht statt, wenn die Kammern tagen, und könnten während der Deckenbeleuchtungsarbeiten von Januar bis Februar 2027 eingeschränkt sein: vor der Planung eines Besuchs den Kalender prüfen.',
    },
  },
  stats: [
    { value: '6', label: { en: 'kilometres of covered arcades through the UNESCO old town', fr: 'kilomètres d’arcades couvertes à travers la vieille ville classée UNESCO', de: 'Kilometer überdachte Lauben durch die UNESCO-Altstadt' } },
    { value: '1983', label: { en: 'the year Bern’s old town joined the UNESCO World Heritage list', fr: 'l’année où la vieille ville de Berne a rejoint le patrimoine mondial de l’UNESCO', de: 'das Jahr, in dem die Berner Altstadt auf die UNESCO-Welterbeliste kam' } },
    { value: '5000', label: { en: 'square metres, the size of the BearPark, open every day of the year', fr: 'mètres carrés, la surface du parc aux ours, ouvert tous les jours de l’année', de: 'Quadratmeter, die Grösse des Bärenparks, an jedem Tag des Jahres geöffnet' } },
  ],
  hero: {
    photo: '/photos/berne.jpg',
    caption: { en: 'The old town of Bern, wrapped by the Aare.', fr: 'La vieille ville de Berne, enveloppée par l’Aar.', de: 'Die Berner Altstadt, von der Aare umschlungen.' },
    credit: { author: 'H. Helmlechner', license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/', source: 'https://commons.wikimedia.org/wiki/File:Bern_Panorama_07.jpg' },
  },
  sectors: [
    {
      title: { en: 'The old town between the station and the Zytglogge', fr: 'La vieille ville entre la gare et la Zytglogge', de: 'Altstadt zwischen Bahnhof und Zytglogge' },
      walk: { en: 'Bahnhofplatz, Zeughausgasse, Hirschengraben', fr: 'Bahnhofplatz, Zeughausgasse, Hirschengraben', de: 'Bahnhofplatz, Zeughausgasse, Hirschengraben' },
      text: {
        en: 'The arcaded half of the old town closest to the railway station. Hotel Schweizerhof Bern stands on Bahnhofplatz itself, Hotel National is two minutes from the station on Hirschengraben by its own count, and Hotel Kreuz sits on Zeughausgasse in the old town centre.',
        fr: 'La moitié arcadée de la vieille ville la plus proche de la gare. L’Hôtel Schweizerhof Bern se trouve directement sur Bahnhofplatz, l’Hôtel National est à deux minutes de la gare sur la Hirschengraben selon ses propres indications, et l’Hôtel Kreuz se dresse sur la Zeughausgasse, au coeur de la vieille ville.',
        de: 'Die Laubenseite der Altstadt, die dem Bahnhof am nächsten liegt. Das Hotel Schweizerhof Bern steht direkt am Bahnhofplatz, das Hotel National liegt laut eigenen Angaben zwei Minuten vom Bahnhof an der Hirschengraben, und das Hotel Kreuz an der Zeughausgasse, mitten in der Altstadt.',
      },
      points: [
        { en: 'The covered arcades run about six kilometres through the old town', fr: 'Les arcades couvertes s’étendent sur environ six kilomètres à travers la vieille ville', de: 'Die überdachten Lauben ziehen sich rund sechs Kilometer durch die Altstadt' },
        { en: 'Hotel Schweizerhof Bern is at Bahnhofplatz 11, on the station square', fr: 'L’Hôtel Schweizerhof Bern se trouve au Bahnhofplatz 11, sur la place de la gare', de: 'Das Hotel Schweizerhof Bern liegt am Bahnhofplatz 11, am Bahnhofplatz' },
      ],
    },
    {
      title: { en: 'The lower old town towards the BearPark', fr: 'La basse vieille ville, vers le parc aux ours', de: 'Untere Altstadt Richtung Bärenpark' },
      walk: { en: 'Gerechtigkeitsgasse and the Nydeggbrücke', fr: 'Gerechtigkeitsgasse et le pont de Nydegg', de: 'Gerechtigkeitsgasse und Nydeggbrücke' },
      text: {
        en: 'Sandstone arcades continue down Gerechtigkeitsgasse, where Boutique Hotel Belle Époque states the BearPark is 3 minutes away on foot. Across the Nydeggbrücke lie the BearPark itself, the Altes Tramdepot brewery restaurant, and the Rosengarten above them.',
        fr: 'Les arcades de grès se poursuivent en descendant la Gerechtigkeitsgasse, où le Boutique Hotel Belle Époque indique que le parc aux ours est à 3 minutes à pied. De l’autre côté du pont de Nydegg se trouvent le parc aux ours lui-même, le restaurant-brasserie Altes Tramdepot, et le Rosengarten au-dessus.',
        de: 'Die Sandsteinlauben setzen sich die Gerechtigkeitsgasse hinunter fort, wo das Boutique Hotel Belle Époque den Bärenpark mit 3 Gehminuten angibt. Auf der anderen Seite der Nydeggbrücke liegen der Bärenpark selbst, das Braurestaurant Altes Tramdepot, und darüber der Rosengarten.',
      },
      points: [
        { en: 'Boutique Hotel Belle Époque is 3 minutes on foot from the BearPark', fr: 'Le Boutique Hotel Belle Époque se trouve à 3 minutes à pied du parc aux ours', de: 'Das Boutique Hotel Belle Époque liegt 3 Gehminuten vom Bärenpark entfernt' },
        { en: 'The BearPark covers about 5000 m2 and is open around the clock, every day of the year', fr: 'Le parc aux ours couvre environ 5000 m2 et reste ouvert en continu, tous les jours de l’année', de: 'Der Bärenpark umfasst rund 5000 m2 und ist rund um die Uhr geöffnet, an jedem Tag des Jahres' },
      ],
    },
    {
      title: { en: 'Below the old town on the Aare', fr: 'Sous la vieille ville, au bord de l’Aar', de: 'Unter der Altstadt an der Aare' },
      walk: { en: 'Marzili and the Engehalbinsel', fr: 'Le Marzili et l’Engehalbinsel', de: 'Marzili und Engehalbinsel' },
      text: {
        en: 'The Marzili quarter sits directly on the Aare beneath the old town, with the youth hostel at Weihergasse 4 looking up at the Federal Palace. Further out, Innere Enge sits in its own grounds at Engestrasse 54, with Marians Jazzroom in the basement, and the Bellevue Palace stands on the terrace above the river, next to the Bundeshaus.',
        fr: 'Le quartier du Marzili se trouve directement au bord de l’Aar, sous la vieille ville, avec l’auberge de jeunesse au Weihergasse 4, qui regarde vers le Palais fédéral. Plus loin, l’Innere Enge occupe son propre parc à l’Engestrasse 54, avec le Marians Jazzroom au sous-sol, et le Bellevue Palace se dresse sur la terrasse au-dessus de la rivière, à côté du Palais fédéral.',
        de: 'Das Marzili-Quartier liegt direkt an der Aare unterhalb der Altstadt, die Jugendherberge an der Weihergasse 4 blickt zum Bundeshaus hinauf. Weiter draussen liegt das Innere Enge in eigenem Grund an der Engestrasse 54, im Untergeschoss das Marians Jazzroom, und der Bellevue Palace steht auf der Terrasse über dem Fluss, neben dem Bundeshaus.',
      },
      points: [
        { en: 'The Bern Youth Hostel is at Weihergasse 4, in the Marzili on the Aare', fr: 'L’auberge de jeunesse de Berne se trouve au Weihergasse 4, dans le Marzili au bord de l’Aar', de: 'Die Jugendherberge Bern liegt an der Weihergasse 4, im Marzili an der Aare' },
        { en: 'Bellevue Palace stands at Kochergasse 3-5, next to the Federal Palace', fr: 'Le Bellevue Palace se dresse au Kochergasse 3-5, à côté du Palais fédéral', de: 'Der Bellevue Palace steht an der Kochergasse 3-5, neben dem Bundeshaus' },
      ],
    },
  ],
  hotels: [
    {
      slug: 'be-bellevue-palace',
      name: 'Bellevue Palace',
      url: 'https://www.bellevue-palace.ch/',
      sector: { en: 'Kochergasse, by the Federal Palace', fr: 'Kochergasse, près du Palais fédéral', de: 'Kochergasse, beim Bundeshaus' },
      facts: [
        { en: 'Kochergasse 3-5, described by the hotel as the official guesthouse of the Swiss government', fr: 'Kochergasse 3-5, présenté par l’hôtel comme l’hôte officiel du gouvernement suisse', de: 'Kochergasse 3-5, laut Hotel das offizielle Gästehaus der Schweizer Regierung' },
        { en: 'More than 150 years of history', fr: 'Plus de 150 ans d’histoire', de: 'Über 150 Jahre Geschichte' },
      ],
    },
    {
      slug: 'be-schweizerhof',
      name: 'Hotel Schweizerhof Bern & Spa',
      url: 'https://www.schweizerhof-bern.ch/',
      sector: { en: 'Bahnhofplatz, station square', fr: 'Bahnhofplatz, place de la gare', de: 'Bahnhofplatz, am Bahnhof' },
      facts: [
        { en: 'Bahnhofplatz 11, on the station square', fr: 'Bahnhofplatz 11, sur la place de la gare', de: 'Bahnhofplatz 11, am Bahnhofplatz' },
        { en: 'Sky Terrace rooftop bar over the roofs of Bern, and a spa', fr: 'Bar sur le toit Sky Terrace dominant les toits de Berne, et un spa', de: 'Sky Terrace, eine Dachbar über den Dächern von Bern, und ein Spa' },
      ],
    },
    {
      slug: 'be-belle-epoque',
      name: 'Boutique Hotel Belle Époque',
      url: 'https://www.belle-epoque.ch/',
      sector: { en: 'Gerechtigkeitsgasse, lower old town', fr: 'Gerechtigkeitsgasse, basse vieille ville', de: 'Gerechtigkeitsgasse, untere Altstadt' },
      facts: [
        { en: '17 rooms in four categories, at Gerechtigkeitsgasse 18', fr: '17 chambres en quatre catégories, au Gerechtigkeitsgasse 18', de: '17 Zimmer in vier Kategorien, an der Gerechtigkeitsgasse 18' },
        { en: 'Rooms look onto the sandstone arcades, 3 minutes on foot from the BearPark', fr: 'Les chambres donnent sur les arcades de grès, à 3 minutes à pied du parc aux ours', de: 'Zimmer mit Blick auf die Sandsteinlauben, 3 Gehminuten vom Bärenpark' },
      ],
    },
    {
      slug: 'be-kreuz',
      name: 'Hotel Kreuz Bern',
      url: 'https://www.kreuzbern.ch/',
      sector: { en: 'Zeughausgasse, old town', fr: 'Zeughausgasse, vieille ville', de: 'Zeughausgasse, Altstadt' },
      facts: [
        { en: 'Zeughausgasse 41, in the old town centre', fr: 'Zeughausgasse 41, au coeur de la vieille ville', de: 'Zeughausgasse 41, im Zentrum der Altstadt' },
        { en: 'A small roof terrace, free for guests', fr: 'Une petite terrasse sur le toit, gratuite pour les clients', de: 'Eine kleine Dachterrasse, kostenlos für Gäste' },
      ],
    },
    {
      slug: 'be-national',
      name: 'Hotel National Bern',
      url: 'https://www.nationalbern.ch/',
      sector: { en: 'Hirschengraben', fr: 'Hirschengraben', de: 'Hirschengraben' },
      facts: [
        { en: 'Hirschengraben 24, two minutes from the main railway station by the hotel’s own count', fr: 'Hirschengraben 24, à deux minutes de la gare centrale selon l’hôtel', de: 'Hirschengraben 24, laut Hotel zwei Minuten vom Hauptbahnhof' },
        { en: 'A theatre hall in the house, restaurant with seasonal Swiss dishes', fr: 'Une salle de théâtre dans la maison, restaurant aux plats suisses de saison', de: 'Ein Theatersaal im Haus, Restaurant mit saisonalen Schweizer Gerichten' },
      ],
    },
    {
      slug: 'be-hotel-bern',
      name: 'Hotel Bern',
      url: 'https://www.hotelbern.ch/',
      sector: { en: 'City centre', fr: 'Centre-ville', de: 'Stadtzentrum' },
      facts: [
        { en: 'Five minutes on foot from the railway station', fr: 'Cinq minutes à pied de la gare', de: 'Fünf Gehminuten vom Bahnhof' },
        { en: 'Attika Bar, a rooftop bar with a view over the city', fr: 'L’Attika Bar, un bar sur le toit avec vue sur la ville', de: 'Attika Bar, eine Dachbar mit Blick über die Stadt' },
      ],
    },
    {
      slug: 'be-innere-enge',
      name: 'Hotel Innere Enge',
      url: 'http://innere-enge.ch/',
      sector: { en: 'Engehalbinsel', fr: 'Engehalbinsel', de: 'Engehalbinsel' },
      facts: [
        { en: 'Engestrasse 54, in its own grounds on the Engehalbinsel', fr: 'Engestrasse 54, dans son propre parc sur l’Engehalbinsel', de: 'Engestrasse 54, im eigenen Grund auf der Engehalbinsel' },
        { en: 'Marians Jazzroom in the basement, two concerts an evening, September to May', fr: 'Le Marians Jazzroom au sous-sol, deux concerts par soir, de septembre à mai', de: 'Marians Jazzroom im Untergeschoss, zwei Konzerte pro Abend, September bis Mai' },
      ],
    },
    {
      slug: 'be-youth-hostel',
      name: 'Bern Youth Hostel',
      url: 'https://www.youthhostel.ch/en/hostels/bern-youth-hostel',
      sector: { en: 'Marzili, on the Aare', fr: 'Marzili, au bord de l’Aar', de: 'Marzili, an der Aare' },
      facts: [
        { en: 'Weihergasse 4, in the Marzili quarter, directly below the old town', fr: 'Weihergasse 4, dans le quartier du Marzili, juste sous la vieille ville', de: 'Weihergasse 4, im Marzili-Quartier, direkt unterhalb der Altstadt' },
        { en: 'A yurt for groups of up to 20, 24-hour reception, large terrace', fr: 'Une yourte pour des groupes jusqu’à 20 personnes, réception 24h/24, grande terrasse', de: 'Eine Jurte für Gruppen bis 20 Personen, 24-Stunden-Rezeption, grosse Terrasse' },
      ],
    },
  ],
  hotelsNote: {
    en: 'Facts taken from each hotel’s own website on 16 September 2026. No ratings or reviews on this guide.',
    fr: 'Faits relevés sur le site de chaque hôtel le 16 septembre 2026. Aucune note ni aucun avis sur ce guide.',
    de: 'Fakten von der Website des jeweiligen Hotels, Stand 16. September 2026. Keine Bewertungen oder Rezensionen.',
  },
  calendar: {
    title: { en: 'What runs, month by month', fr: 'Ce qui fonctionne, mois par mois', de: 'Was läuft, Monat für Monat' },
    rows: [
      { name: { en: 'Marians Jazzroom', fr: 'Marians Jazzroom', de: 'Marians Jazzroom' }, months: ['o', 'o', 'o', 'o', 'o', 'x', 'x', 'x', 'o', 'o', 'o', 'o'] },
      { name: { en: 'Rosengarten veranda, fondue', fr: 'Véranda du Rosengarten, fondue', de: 'Rosengarten-Veranda, Fondue' }, months: ['o', 'r', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'r', 'o', 'o'] },
    ],
    note: {
      en: '2026/27. Marians Jazzroom: season September to May, closed June to August. Restaurant Rosengarten: fondue on the veranda from mid-October to the end of February. Sources: innere-enge.ch, rosengarten.be, checked 16 September 2026.',
      fr: '2026/27. Marians Jazzroom : saison de septembre à mai, fermé de juin à août. Restaurant Rosengarten : fondue sur la véranda de mi-octobre à fin février. Sources : innere-enge.ch, rosengarten.be, vérifiées le 16 septembre 2026.',
      de: '2026/27. Marians Jazzroom: Saison von September bis Mai, geschlossen von Juni bis August. Restaurant Rosengarten: Fondue auf der Veranda von Mitte Oktober bis Ende Februar. Quellen: innere-enge.ch, rosengarten.be, geprüft am 16. September 2026.',
    },
  },
  practical: {
    title: { en: 'The old town, in practice', fr: 'La vieille ville, en pratique', de: 'Die Altstadt, in der Praxis' },
    items: [
      {
        title: { en: 'City transport', fr: 'Transports urbains', de: 'Öffentlicher Verkehr' },
        text: {
          en: 'Trams and buses are run by BERNMOBIL, with tickets sold through the Libero network. No zone map or price was published on the pages checked for this guide.',
          fr: 'Les trams et bus sont exploités par BERNMOBIL, les billets se vendant via le réseau tarifaire Libero. Aucun plan de zones ni tarif n’était publié sur les pages consultées pour ce guide.',
          de: 'Trams und Busse werden von BERNMOBIL betrieben, die Billette werden über den Tarifverbund Libero verkauft. Auf den für diesen Ratgeber geprüften Seiten war weder ein Zonenplan noch ein Tarif veröffentlicht.',
        },
      },
      {
        title: { en: 'Close to the station', fr: 'Près de la gare', de: 'Nahe am Bahnhof' },
        text: {
          en: 'Several hotels sit within a few minutes of the main station: Hotel Schweizerhof Bern is on Bahnhofplatz itself, Hotel National two minutes away, Hotel Bern five minutes away.',
          fr: 'Plusieurs hôtels se trouvent à quelques minutes de la gare centrale : l’Hôtel Schweizerhof Bern est sur Bahnhofplatz même, l’Hôtel National à deux minutes, l’Hôtel Bern à cinq minutes.',
          de: 'Mehrere Hotels liegen wenige Minuten vom Hauptbahnhof entfernt: das Hotel Schweizerhof Bern direkt am Bahnhofplatz, das Hotel National zwei Minuten entfernt, das Hotel Bern fünf Minuten entfernt.',
        },
      },
      {
        title: { en: 'Parking', fr: 'Stationnement', de: 'Parkplatz' },
        text: {
          en: 'Unlike several of the car-free villages on this site, Bern allows cars. The sources checked for this guide describe no dedicated visitor parking scheme, so arrange parking directly with your hotel.',
          fr: 'Contrairement à plusieurs villages sans voiture présentés sur ce site, Berne autorise les véhicules. Les sources consultées pour ce guide ne décrivent aucun dispositif de stationnement dédié aux visiteurs, à voir directement avec votre hôtel.',
          de: 'Anders als mehrere autofreie Dörfer auf dieser Seite lässt Bern Autos zu. Die für diesen Ratgeber geprüften Quellen beschreiben kein eigenes Parkangebot für Gäste, das direkt mit dem Hotel zu klären ist.',
        },
      },
    ],
  },
  seasons: {
    summer: {
      title: { en: 'Summer in Bern', fr: 'L’été à Berne', de: 'Sommer in Bern' },
      base: {
        en: 'Summer in Bern centres on the Aare, which Switzerland Tourism describes as turquoise-blue and used for swimming and rafting. The Marzili quarter, directly below the old town, puts you steps from the river, while Marians Jazzroom is closed for the season.',
        fr: 'L’été à Berne tourne autour de l’Aar, que Suisse Tourisme décrit comme turquoise et utilisée pour la baignade et le rafting. Le quartier du Marzili, juste sous la vieille ville, vous place à quelques pas de la rivière, tandis que le Marians Jazzroom est fermé pour la saison.',
        de: 'Der Sommer in Bern dreht sich um die Aare, die Schweiz Tourismus als türkisblau beschreibt und die zum Schwimmen und Rafting genutzt wird. Das Marzili-Quartier, direkt unterhalb der Altstadt, bringt Sie in wenige Schritte Nähe zum Fluss, während das Marians Jazzroom für die Saison geschlossen ist.',
      },
      facts: [
        { value: 'Jun → Aug', label: { en: 'Marians Jazzroom closed for the season, it resumes in September', fr: 'Marians Jazzroom fermé pour la saison, reprise en septembre', de: 'Marians Jazzroom für die Saison geschlossen, Wiedereröffnung im September' } },
        { value: '365 days', label: { en: 'BearPark open every day of the year, staff on site 08:00 to 17:00', fr: 'parc aux ours ouvert tous les jours de l’année, personnel sur place de 08h00 à 17h00', de: 'Bärenpark an jedem Tag des Jahres geöffnet, Personal vor Ort von 08.00 bis 17.00 Uhr' } },
      ],
      note: {
        en: 'Sources: myswitzerland.com, tierpark-bern.ch, innere-enge.ch, checked 16 September 2026.',
        fr: 'Sources : myswitzerland.com, tierpark-bern.ch, innere-enge.ch, vérifiées le 16 septembre 2026.',
        de: 'Quellen: myswitzerland.com, tierpark-bern.ch, innere-enge.ch, geprüft am 16. September 2026.',
      },
    },
    winter: {
      title: { en: 'Winter in Bern', fr: 'L’hiver à Berne', de: 'Winter in Bern' },
      base: {
        en: 'Restaurant Rosengarten opens its veranda for fondue through the coldest months, and Marians Jazzroom is back in full swing with two concerts a night. The BearPark and the arcades stay open regardless of season.',
        fr: 'Le restaurant Rosengarten ouvre sa véranda à la fondue durant les mois les plus froids, et le Marians Jazzroom bat à nouveau son plein avec deux concerts par soir. Le parc aux ours et les arcades restent ouverts quelle que soit la saison.',
        de: 'Das Restaurant Rosengarten öffnet seine Veranda für Fondue während der kältesten Monate, und das Marians Jazzroom läuft wieder mit zwei Konzerten pro Abend auf Hochtouren. Bärenpark und Lauben bleiben unabhängig von der Saison geöffnet.',
      },
      facts: [
        { value: 'mid-Oct → end Feb', label: { en: 'Restaurant Rosengarten serves fondue on the veranda', fr: 'le restaurant Rosengarten sert la fondue sur la véranda', de: 'Restaurant Rosengarten serviert Fondue auf der Veranda' } },
        { value: 'Sep → May', label: { en: 'Marians Jazzroom season, two concerts an evening, Tuesday to Saturday', fr: 'saison du Marians Jazzroom, deux concerts par soir, du mardi au samedi', de: 'Saison des Marians Jazzroom, zwei Konzerte pro Abend, Dienstag bis Samstag' } },
      ],
      note: {
        en: 'Sources: rosengarten.be, innere-enge.ch, checked 16 September 2026.',
        fr: 'Sources : rosengarten.be, innere-enge.ch, vérifiées le 16 septembre 2026.',
        de: 'Quellen: rosengarten.be, innere-enge.ch, geprüft am 16. September 2026.',
      },
    },
  },
  doing: {
    title: { en: 'What to do in Bern', fr: 'Que faire à Berne', de: 'Was man in Bern unternimmt' },
    intro: {
      en: 'Not a trail guide: named places from Switzerland Tourism, the Federal Assembly, Tierpark Bern, Zentrum Paul Klee and the restaurants’ own sites, checked on their own pages.',
      fr: 'Pas un guide de randonnée : des lieux nommés, repris de Suisse Tourisme, de l’Assemblée fédérale, du Tierpark Bern, du Zentrum Paul Klee et des sites des restaurants, vérifiés sur leurs propres pages.',
      de: 'Kein Wanderführer: benannte Orte von Schweiz Tourismus, der Bundesversammlung, dem Tierpark Bern, dem Zentrum Paul Klee und den eigenen Seiten der Restaurants, dort geprüft.',
    },
    groups: [
      {
        kind: 'walk',
        title: { en: 'Arcades to the bears', fr: 'Des arcades aux ours', de: 'Von den Lauben zu den Bären' },
        items: [
          {
            name: { en: 'The arcades of the old town', fr: 'Les arcades de la vieille ville', de: 'Die Lauben der Altstadt' },
            meta: { en: 'about six kilometres · UNESCO old town', fr: 'environ six kilomètres · vieille ville UNESCO', de: 'rund sechs Kilometer · UNESCO-Altstadt' },
            text: {
              en: 'Sandstone houses, historic fountains and vaulted cellars holding shops, studios and bars line the covered arcades that run through the whole old town.',
              fr: 'Maisons de grès, fontaines historiques et caves voûtées abritant boutiques, ateliers et bars bordent les arcades couvertes qui traversent toute la vieille ville.',
              de: 'Sandsteinhäuser, historische Brunnen und gewölbte Keller mit Läden, Ateliers und Bars säumen die überdachten Lauben, die sich durch die ganze Altstadt ziehen.',
            },
          },
          {
            name: { en: 'Across the Nydeggbrücke to the BearPark', fr: 'De l’autre côté du pont de Nydegg, vers le parc aux ours', de: 'Über die Nydeggbrücke zum Bärenpark' },
            meta: { en: 'about 5000 m2 · 3 minutes on foot from Gerechtigkeitsgasse · open 365 days a year', fr: 'environ 5000 m2 · 3 minutes à pied depuis Gerechtigkeitsgasse · ouvert 365 jours par an', de: 'rund 5000 m2 · 3 Gehminuten von der Gerechtigkeitsgasse · 365 Tage im Jahr geöffnet' },
            text: {
              en: 'The park runs from the former bear pit down to the bank of the Aare. Restaurant Rosengarten, a few steps further up, looks back over the old town.',
              fr: 'Le parc s’étend de l’ancienne fosse aux ours jusqu’au bord de l’Aar. Le restaurant Rosengarten, quelques pas plus haut, offre une vue sur la vieille ville.',
              de: 'Der Park zieht sich von der ehemaligen Bärengrube hinunter bis zum Aareufer. Das Restaurant Rosengarten, ein paar Schritte weiter oben, blickt zurück auf die Altstadt.',
            },
          },
        ],
      },
      {
        kind: 'local',
        title: { en: 'Parliament and a painter', fr: 'Le Parlement et un peintre', de: 'Parlament und ein Maler' },
        items: [
          {
            name: { en: 'The Parliament Building', fr: 'Le Palais fédéral', de: 'Das Bundeshaus' },
            meta: { en: 'free · about 60 minutes · Tuesday to Saturday, outside sessions', fr: 'gratuit · environ 60 minutes · du mardi au samedi, hors sessions', de: 'gratis · rund 60 Minuten · Dienstag bis Samstag, ausserhalb der Sessionen' },
            text: {
              en: 'Guided tours run in German, French, Italian and, on Saturdays, English. Anyone aged 16 or over needs an ID document at security, and there are no tours while Parliament is sitting.',
              fr: 'Les visites guidées se déroulent en allemand, français, italien et, le samedi, en anglais. Toute personne de 16 ans ou plus doit présenter une pièce d’identité à la sécurité, et aucune visite n’a lieu quand le Parlement siège.',
              de: 'Die Führungen finden auf Deutsch, Französisch, Italienisch und samstags auf Englisch statt. Wer 16 Jahre oder älter ist, braucht bei der Sicherheitskontrolle einen Ausweis, und während der Session finden keine Führungen statt.',
            },
          },
          {
            name: 'Zentrum Paul Klee',
            meta: { en: 'Monument im Fruchtland 3 · Tuesday to Sunday, 10:00 to 17:00', fr: 'Monument im Fruchtland 3 · du mardi au dimanche, 10h00 à 17h00', de: 'Monument im Fruchtland 3 · Dienstag bis Sonntag, 10.00 bis 17.00 Uhr' },
            text: {
              en: 'Holds the world’s largest collection of works by Paul Klee, founded by Maurice E. and Martha Müller together with the heirs of Paul Klee.',
              fr: 'Abrite la plus grande collection au monde d’oeuvres de Paul Klee, fondée par Maurice E. et Martha Müller avec les héritiers de Paul Klee.',
              de: 'Beherbergt die weltweit grösste Sammlung von Werken Paul Klees, gegründet von Maurice E. und Martha Müller zusammen mit den Erben Paul Klees.',
            },
          },
        ],
      },
      {
        kind: 'table',
        title: { en: 'Where to eat', fr: 'Où manger', de: 'Wo essen' },
        items: [
          {
            name: 'Altes Tramdepot',
            meta: { en: 'Grosser Muristalden 6 · daily 11:00 to 00:30, kitchen to 23:00', fr: 'Grosser Muristalden 6 · tous les jours de 11h00 à 00h30, cuisine jusqu’à 23h00', de: 'Grosser Muristalden 6 · täglich 11.00 bis 00.30 Uhr, Küche bis 23.00 Uhr' },
            text: {
              en: 'A brewery restaurant by the BearPark that brews its own Tram beers on site, with an ice cream workshop and the Zollhaus hotel under the same roof.',
              fr: 'Un restaurant-brasserie près du parc aux ours, qui brasse sur place ses propres bières Tram, avec un atelier de glaces et l’hôtel Zollhaus sous le même toit.',
              de: 'Ein Braurestaurant beim Bärenpark, das seine eigenen Tram-Biere vor Ort braut, mit einer Eiswerkstatt und dem Hotel Zollhaus unter demselben Dach.',
            },
          },
          {
            name: 'Restaurant Rosengarten',
            meta: { en: 'Alter Aargauerstalden 31b · daily 09:00 to 23:30', fr: 'Alter Aargauerstalden 31b · tous les jours de 09h00 à 23h30', de: 'Alter Aargauerstalden 31b · täglich 09.00 bis 23.30 Uhr' },
            text: {
              en: 'A terrace and veranda over the old town, with traditional and Mediterranean dishes and its own beer, WIRTBIER, brewed with other local houses.',
              fr: 'Une terrasse et une véranda dominant la vieille ville, avec une cuisine traditionnelle et méditerranéenne et sa propre bière, la WIRTBIER, brassée avec d’autres maisons locales.',
              de: 'Eine Terrasse und Veranda über der Altstadt, mit traditioneller und mediterraner Küche und dem eigenen Bier WIRTBIER, gebraut mit anderen lokalen Häusern.',
            },
          },
        ],
      },
    ],
    note: {
      en: 'Times and figures come from Switzerland Tourism, the Federal Assembly, Tierpark Bern, Zentrum Paul Klee, Altes Tramdepot and Restaurant Rosengarten, checked on 16 September 2026. Bern Welcome’s own site could not be reached for this guide, so some commonly cited facts, such as the Zytglogge tour and the Bern Ticket, are not published here. We publish no ratings and no route descriptions: check conditions on the spot before you set off.',
      fr: 'Horaires et chiffres proviennent de Suisse Tourisme, de l’Assemblée fédérale, du Tierpark Bern, du Zentrum Paul Klee, de l’Altes Tramdepot et du Restaurant Rosengarten, vérifiés le 16 septembre 2026. Le site de Bern Welcome n’a pas pu être consulté pour ce guide, si bien que certains faits couramment cités, comme la visite de la Zytglogge ou le Bern Ticket, n’y figurent pas. Nous ne publions ni notes ni descriptifs d’itinéraires : renseignez-vous sur place avant de partir.',
      de: 'Zeiten und Zahlen stammen von Schweiz Tourismus, der Bundesversammlung, dem Tierpark Bern, dem Zentrum Paul Klee, dem Altes Tramdepot und dem Restaurant Rosengarten, geprüft am 16. September 2026. Die Seite von Bern Welcome konnte für diesen Ratgeber nicht erreicht werden, weshalb einige oft genannte Fakten, etwa die Zytglogge-Führung oder das Bern Ticket, hier fehlen. Wir veröffentlichen keine Bewertungen und keine Routenbeschreibungen: Erkundigen Sie sich vor Ort, bevor Sie losgehen.',
    },
  },
  faq: [
    {
      q: { en: 'Why is Bern’s old town a World Heritage site?', fr: 'Pourquoi la vieille ville de Berne est-elle classée au patrimoine mondial ?', de: 'Warum ist die Berner Altstadt ein Weltkulturerbe?' },
      a: {
        en: 'It has been on the UNESCO list since 1983, for its sandstone houses, its fountains and its roughly six kilometres of covered arcades.',
        fr: 'Elle figure sur la liste de l’UNESCO depuis 1983, pour ses maisons de grès, ses fontaines et ses quelque six kilomètres d’arcades couvertes.',
        de: 'Sie steht seit 1983 auf der UNESCO-Liste, wegen ihrer Sandsteinhäuser, ihrer Brunnen und ihrer rund sechs Kilometer überdachten Lauben.',
      },
    },
    {
      q: { en: 'Can you visit the Swiss parliament?', fr: 'Peut-on visiter le Parlement suisse ?', de: 'Kann man das Schweizer Parlament besuchen?' },
      a: {
        en: 'Yes, and the guided tour is free. It lasts about an hour and runs Tuesday to Saturday when Parliament is not sitting, in English on Saturdays. Anyone 16 or over needs an ID document.',
        fr: 'Oui, et la visite guidée est gratuite. Elle dure environ une heure et a lieu du mardi au samedi quand le Parlement ne siège pas, en anglais le samedi. Toute personne de 16 ans ou plus doit présenter une pièce d’identité.',
        de: 'Ja, und die Führung ist kostenlos. Sie dauert rund eine Stunde und findet Dienstag bis Samstag statt, wenn das Parlament nicht tagt, samstags auf Englisch. Wer 16 Jahre oder älter ist, braucht einen Ausweis.',
      },
    },
    {
      q: { en: 'Where are the bears?', fr: 'Où sont les ours ?', de: 'Wo sind die Bären?' },
      a: {
        en: 'In the BearPark across the Nydeggbrücke, about 5000 m2 running from the old bear pit down to the bank of the Aare. It is open 365 days a year, around the clock, with staff on site from 08:00 to 17:00.',
        fr: 'Dans le parc aux ours, de l’autre côté du pont de Nydegg, environ 5000 m2 s’étendant de l’ancienne fosse aux ours jusqu’au bord de l’Aar. Il est ouvert 365 jours par an, en continu, avec du personnel sur place de 08h00 à 17h00.',
        de: 'Im Bärenpark auf der anderen Seite der Nydeggbrücke, rund 5000 m2, die sich von der alten Bärengrube bis zum Aareufer erstrecken. Er ist 365 Tage im Jahr rund um die Uhr geöffnet, mit Personal vor Ort von 08.00 bis 17.00 Uhr.',
      },
    },
    {
      q: { en: 'What is at the Zentrum Paul Klee?', fr: 'Que voir au Zentrum Paul Klee ?', de: 'Was gibt es im Zentrum Paul Klee?' },
      a: {
        en: 'The world’s largest collection of works by Paul Klee, at Monument im Fruchtland 3, open Tuesday to Sunday 10:00 to 17:00 and closed on Mondays.',
        fr: 'La plus grande collection au monde d’oeuvres de Paul Klee, au Monument im Fruchtland 3, ouvert du mardi au dimanche de 10h00 à 17h00 et fermé le lundi.',
        de: 'Die weltweit grösste Sammlung von Werken Paul Klees, am Monument im Fruchtland 3, geöffnet Dienstag bis Sonntag 10.00 bis 17.00 Uhr, montags geschlossen.',
      },
    },
    {
      q: { en: 'How old is the cathedral?', fr: 'Quel âge a la cathédrale ?', de: 'Wie alt ist das Münster?' },
      a: {
        en: 'The cornerstone of Bern Minster was laid in 1421.',
        fr: 'La première pierre de la cathédrale de Berne a été posée en 1421.',
        de: 'Der Grundstein des Berner Münsters wurde 1421 gelegt.',
      },
    },
  ],
  neighbours: ['interlaken', 'zurich', 'lucerne', 'gruyeres'],
}
