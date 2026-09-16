import type { DestinationGuide } from '../types'

// Sources in data/SOURCES-lucerne.md (checked 16/09/2026). No number without a source.
export const lucerne: DestinationGuide = {
  slug: 'lucerne',
  stamp: 'generic',
  updated: '2026-09-16',
  meta: {
    title: { en: 'Where to stay in Lucerne: old town, lake front, two mountains', fr: 'Où dormir à Lucerne : vieille ville, quais, deux montagnes', de: 'Wo übernachten in Luzern: Altstadt, Seeufer, zwei Berge' },
    description: {
      en: 'Lucerne area by area: the old town around the Chapel Bridge, the station and lake front, and the Gütsch above town. Hotels with real addresses, the boats to Pilatus and Rigi, and what runs when.',
      fr: 'Lucerne secteur par secteur : la vieille ville autour du pont de la Chapelle, la gare et les quais, le Gütsch au-dessus de la ville. Hôtels avec adresses réelles, bateaux vers le Pilate et le Rigi, et ce qui fonctionne quand.',
      de: 'Luzern Ortsteil für Ortsteil: die Altstadt rund um die Kapellbrücke, Bahnhof und Seeufer, der Gütsch über der Stadt. Hotels mit echten Adressen, Schiffe zum Pilatus und zur Rigi, und was wann fährt.',
    },
  },
  eyebrow: { en: 'Central Switzerland · Lucerne', fr: 'Suisse centrale · Lucerne', de: 'Zentralschweiz · Luzern' },
  title: { en: 'Where to stay in Lucerne', fr: 'Où dormir à Lucerne', de: 'Wo übernachten in Luzern' },
  intro: {
    en: 'A lake city at 435 m, where the boat piers at Bahnhofquai sit directly opposite the main railway station. The Chapel Bridge, around 650 years old and 204 m long, crosses the Reuss at the edge of the old town, and the medieval Musegg wall runs for 800 m above it with nine surviving towers. From the same lake front, cogwheel railways climb to Mount Pilatus at 2132 m and the Rigi at 1798 m, both reachable by boat and train without a rental car.',
    fr: 'Une ville lacustre à 435 m d’altitude, où les embarcadères de Bahnhofquai se trouvent juste en face de la gare centrale. Le pont de la Chapelle, vieux d’environ 650 ans et long de 204 m, traverse la Reuss au bord de la vieille ville, et le mur médiéval de la Musegg s’étire sur 800 m au-dessus, avec neuf tours conservées. Depuis le même front de lac, des trains à crémaillère montent jusqu’au Pilate, à 2132 m, et au Rigi, à 1798 m, tous deux accessibles en bateau et en train sans voiture de location.',
    de: 'Eine Seestadt auf 435 m, wo die Schiffsstationen am Bahnhofquai direkt gegenüber dem Hauptbahnhof liegen. Die rund 650 Jahre alte, 204 m lange Kapellbrücke überquert die Reuss am Rand der Altstadt, und die mittelalterliche Museggmauer zieht sich darüber auf 800 m mit neun erhaltenen Türmen hin. Vom selben Seeufer aus fahren Zahnradbahnen auf den 2132 m hohen Pilatus und die 1798 m hohe Rigi, beide ohne Mietauto mit Schiff und Bahn erreichbar.',
  },
  quickAnswer: {
    en: 'Stay in Lucerne for an old town and a lake shore that sit around the same railway station, with cogwheel railways to two different mountains and boats on the Vierwaldstättersee. For a capital city built around parliament rather than peaks, stay in Bern instead.',
    fr: 'Dormez à Lucerne pour une vieille ville et un front de lac réunis autour de la même gare, avec des trains à crémaillère vers deux montagnes différentes et des bateaux sur le lac des Quatre-Cantons. Pour une ville fédérale construite autour du Parlement plutôt que des sommets, dormez plutôt à Berne.',
    de: 'Übernachten Sie in Luzern für eine Altstadt und ein Seeufer rund um denselben Bahnhof, mit Zahnradbahnen auf zwei verschiedene Berge und Schiffen auf dem Vierwaldstättersee. Für eine Bundesstadt, die sich um das Parlament statt um Gipfel dreht, übernachten Sie stattdessen in Bern.',
  },
  snapshot: {
    why: {
      en: 'Boats and two mountain railways start from the same lake front as the old town: Pilatus by cogwheel from Alpnachstad or cable car from Kriens, Rigi by cogwheel from Vitznau or Arth-Goldau.',
      fr: 'Bateaux et deux chemins de fer de montagne partent du même front de lac que la vieille ville : le Pilate en crémaillère depuis Alpnachstad ou en téléphérique depuis Kriens, le Rigi en crémaillère depuis Vitznau ou Arth-Goldau.',
      de: 'Boote und zwei Bergbahnen starten vom selben Seeufer wie die Altstadt: der Pilatus mit der Zahnradbahn ab Alpnachstad oder der Seilbahn ab Kriens, die Rigi mit der Zahnradbahn ab Vitznau oder Arth-Goldau.',
    },
    where: {
      en: 'Around the Chapel Bridge and the Musegg wall for the old town, along Bahnhofquai and Schweizerhofquai for the station and the lake, up on the Gütsch or out at Alpenquai for a quieter or a budget base.',
      fr: 'Autour du pont de la Chapelle et du mur de la Musegg pour la vieille ville, le long de Bahnhofquai et Schweizerhofquai pour la gare et le lac, sur le Gütsch ou du côté d’Alpenquai pour une base plus calme ou plus économique.',
      de: 'Rund um die Kapellbrücke und die Museggmauer für die Altstadt, entlang von Bahnhofquai und Schweizerhofquai für Bahnhof und See, oben auf dem Gütsch oder draussen am Alpenquai für eine ruhigere oder günstigere Basis.',
    },
    watch: {
      en: 'The Musegg wall and its towers close from November to March, and the Pilatus cogwheel railway runs only from May to November: outside those months the mountain is reached by the Kriens cable car instead.',
      fr: 'Le mur de la Musegg et ses tours ferment de novembre à mars, et le train à crémaillère du Pilate ne circule que de mai à novembre : en dehors de ces mois, la montagne se rejoint par le téléphérique de Kriens.',
      de: 'Die Museggmauer und ihre Türme sind von November bis März geschlossen, und die Pilatus-Zahnradbahn fährt nur von Mai bis November: ausserhalb dieser Monate erreicht man den Berg stattdessen mit der Seilbahn ab Kriens.',
    },
  },
  stats: [
    { value: '204', label: { en: 'metres, the length of the Chapel Bridge, about 650 years old', fr: 'mètres, la longueur du pont de la Chapelle, vieux d’environ 650 ans', de: 'Meter, die Länge der Kapellbrücke, rund 650 Jahre alt' } },
    { value: '2132', label: { en: 'metres, the summit of Mount Pilatus, reached by the steepest cogwheel railway in the world', fr: 'mètres, le sommet du Pilate, atteint par le train à crémaillère le plus raide du monde', de: 'Meter, der Gipfel des Pilatus, erreicht mit der steilsten Zahnradbahn der Welt' } },
    { value: '800', label: { en: 'metres of medieval wall above the old town, with nine towers', fr: 'mètres de mur médiéval au-dessus de la vieille ville, avec neuf tours', de: 'Meter mittelalterliche Mauer über der Altstadt, mit neun Türmen' } },
  ],
  hero: {
    photo: '/photos/lucerne.jpg',
    caption: { en: 'The Chapel Bridge and its Water Tower at dawn, over the Reuss.', fr: 'Le pont de la Chapelle et sa tour d’eau à l’aube, au-dessus de la Reuss.', de: 'Die Kapellbrücke und ihr Wasserturm bei Sonnenaufgang über der Reuss.' },
    credit: { author: 'Samuel Ferrara', license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/', source: 'https://commons.wikimedia.org/wiki/File:Kapellbr%C3%BCcke_Dawn.jpg' },
  },
  sectors: [
    {
      title: { en: 'The Old Town, right bank of the Reuss', fr: 'La vieille ville, rive droite de la Reuss', de: 'Altstadt, rechtes Reussufer' },
      walk: { en: 'Chapel Bridge and the Musegg wall', fr: 'Le pont de la Chapelle et le mur de la Musegg', de: 'Kapellbrücke und Museggmauer' },
      text: {
        en: 'The quarter around the Weinmarkt and the Chapel Bridge, with the medieval Musegg wall running along its upper edge. Hotel des Balances sits on the Weinmarkt itself, on the Reuss, and Hotel Wilden Mann is a few steps away on Bahnhofstrasse.',
        fr: 'Le quartier autour du Weinmarkt et du pont de la Chapelle, avec le mur médiéval de la Musegg qui court le long de sa bordure supérieure. L’Hôtel des Balances se trouve sur le Weinmarkt même, au bord de la Reuss, et l’Hôtel Wilden Mann est à quelques pas, sur la Bahnhofstrasse.',
        de: 'Das Quartier rund um den Weinmarkt und die Kapellbrücke, mit der mittelalterlichen Museggmauer entlang seines oberen Randes. Das Hotel des Balances liegt direkt am Weinmarkt an der Reuss, das Hotel Wilden Mann wenige Schritte entfernt an der Bahnhofstrasse.',
      },
      points: [
        { en: 'The Musegg wall runs 800 m above the quarter, with nine towers, three open to climb', fr: 'Le mur de la Musegg s’étend sur 800 m au-dessus du quartier, avec neuf tours, dont trois ouvertes à la visite', de: 'Die Museggmauer zieht sich auf 800 m über dem Quartier hin, mit neun Türmen, drei davon begehbar' },
        { en: 'Hotel des Balances stands on the Weinmarkt, on the Reuss', fr: 'L’Hôtel des Balances se dresse sur le Weinmarkt, au bord de la Reuss', de: 'Das Hotel des Balances steht am Weinmarkt, an der Reuss' },
      ],
    },
    {
      title: { en: 'The station and the lake front', fr: 'La gare et le front de lac', de: 'Bahnhof und Seeufer' },
      walk: { en: 'Bahnhofquai, Schweizerhofquai, Haldenstrasse', fr: 'Bahnhofquai, Schweizerhofquai, Haldenstrasse', de: 'Bahnhofquai, Schweizerhofquai, Haldenstrasse' },
      text: {
        en: 'The boat piers at Bahnhofquai sit directly opposite the main railway station, with Hotel Waldstätterhof a few steps away on Zentralstrasse. Along the north quay, Hotel Schweizerhof and the Art Deco Hotel Montana face the lake, and the Swiss Museum of Transport lies further along the same shore.',
        fr: 'Les embarcadères de Bahnhofquai se trouvent juste en face de la gare centrale, avec l’Hôtel Waldstätterhof à quelques pas sur la Zentralstrasse. Le long du quai nord, l’Hôtel Schweizerhof et l’Art Deco Hotel Montana font face au lac, et le Musée suisse des transports se trouve plus loin sur la même rive.',
        de: 'Die Schiffsstationen am Bahnhofquai liegen direkt gegenüber dem Hauptbahnhof, das Hotel Waldstätterhof wenige Schritte entfernt an der Zentralstrasse. Entlang des Nordquais liegen das Hotel Schweizerhof und das Art Deco Hotel Montana mit Seeblick, und das Verkehrshaus der Schweiz befindet sich weiter an derselben Uferseite.',
      },
      points: [
        { en: 'The boat piers are at Bahnhofquai, directly opposite the main station', fr: 'Les embarcadères se trouvent à Bahnhofquai, juste en face de la gare centrale', de: 'Die Schiffsstationen liegen am Bahnhofquai, direkt gegenüber dem Hauptbahnhof' },
        { en: 'The Swiss Museum of Transport is at Haldenstrasse 44, on the same shore', fr: 'Le Musée suisse des transports se trouve au Haldenstrasse 44, sur la même rive', de: 'Das Verkehrshaus der Schweiz liegt an der Haldenstrasse 44, an derselben Uferseite' },
      ],
    },
    {
      title: { en: 'Above the town and along the shore', fr: 'Au-dessus de la ville et le long de la rive', de: 'Über der Stadt und am Ufer entlang' },
      walk: { en: 'Gütsch and Alpenquai', fr: 'Le Gütsch et l’Alpenquai', de: 'Gütsch und Alpenquai' },
      text: {
        en: 'Château Gütsch sits on a hill above the city and is reached by its own funicular. On the south shore, Alpenquai is the lakeside, budget end of town, with Backpackers Lucerne directly on the water and the youth hostel further out, next to the Rotsee nature reserve.',
        fr: 'Le Château Gütsch se dresse sur une colline au-dessus de la ville et se rejoint par son propre funiculaire. Sur la rive sud, l’Alpenquai est le côté lacustre et économique de la ville, avec Backpackers Lucerne directement au bord de l’eau et l’auberge de jeunesse plus loin, à côté de la réserve naturelle du Rotsee.',
        de: 'Das Château Gütsch thront auf einem Hügel über der Stadt und wird mit einer eigenen Standseilbahn erreicht. Am Südufer liegt der Alpenquai, das seenahe, günstige Ende der Stadt, mit Backpackers Lucerne direkt am Wasser und der Jugendherberge weiter draussen, neben dem Naturschutzgebiet Rotsee.',
      },
      points: [
        { en: 'Château Gütsch is reached by its own Gütsch Funicular', fr: 'Le Château Gütsch se rejoint par son propre funiculaire, le Gütsch Funicular', de: 'Das Château Gütsch erreicht man mit der eigenen Gütschbahn' },
        { en: 'Backpackers Lucerne sits directly on the lake, at Alpenquai 42', fr: 'Backpackers Lucerne se trouve directement au bord du lac, au Alpenquai 42', de: 'Backpackers Lucerne liegt direkt am See, am Alpenquai 42' },
      ],
    },
  ],
  hotels: [
    {
      slug: 'lu-schweizerhof',
      name: 'Hotel Schweizerhof Luzern',
      url: 'https://www.schweizerhof-luzern.ch/',
      sector: { en: 'Schweizerhofquai, lake front', fr: 'Schweizerhofquai, front de lac', de: 'Schweizerhofquai, am Seeufer' },
      facts: [
        { en: '101 rooms and suites, between 25 and 65 m2', fr: '101 chambres et suites, de 25 à 65 m2', de: '101 Zimmer und Suiten, zwischen 25 und 65 m2' },
        { en: 'Run by the Hauser family for more than 180 years, five generations', fr: 'Dirigé par la famille Hauser depuis plus de 180 ans, sur cinq générations', de: 'Seit mehr als 180 Jahren und fünf Generationen in Familienbesitz der Hausers' },
      ],
    },
    {
      slug: 'lu-hotel-des-balances',
      name: 'Hotel des Balances',
      url: 'https://www.balances.ch/',
      sector: { en: 'Weinmarkt, old town', fr: 'Weinmarkt, vieille ville', de: 'Weinmarkt, Altstadt' },
      facts: [
        { en: 'On the Weinmarkt, in the middle of the old town, on the Reuss', fr: 'Sur le Weinmarkt, au coeur de la vieille ville, au bord de la Reuss', de: 'Am Weinmarkt, mitten in der Altstadt, an der Reuss' },
        { en: 'Four-star house with a restaurant and terrace on the river', fr: 'Établissement quatre étoiles avec restaurant et terrasse sur la rivière', de: 'Vier-Sterne-Haus mit Restaurant und Terrasse am Fluss' },
      ],
    },
    {
      slug: 'lu-wilden-mann',
      name: 'Hotel Wilden Mann',
      url: 'https://www.wilden-mann.ch/',
      sector: { en: 'Bahnhofstrasse, old town', fr: 'Bahnhofstrasse, vieille ville', de: 'Bahnhofstrasse, Altstadt' },
      facts: [
        { en: 'Bahnhofstrasse 30, in the old town', fr: 'Bahnhofstrasse 30, en vieille ville', de: 'Bahnhofstrasse 30, in der Altstadt' },
        { en: 'The house states 500 years of history, a member of Romantik Hotels', fr: 'La maison revendique 500 ans d’histoire, membre des Romantik Hotels', de: 'Das Haus gibt 500 Jahre Geschichte an, Mitglied der Romantik Hotels' },
      ],
    },
    {
      slug: 'lu-chateau-guetsch',
      name: 'Hotel Château Gütsch',
      url: 'https://www.chateau-guetsch.ch/',
      sector: { en: 'Above the town, on the Gütsch', fr: 'Au-dessus de la ville, sur le Gütsch', de: 'Über der Stadt, auf dem Gütsch' },
      facts: [
        { en: '37 individually designed rooms and suites', fr: '37 chambres et suites, chacune décorée différemment', de: '37 individuell gestaltete Zimmer und Suiten' },
        { en: 'Reached by its own Gütsch Funicular, over 140 years old', fr: 'Accessible par son propre funiculaire, la maison a plus de 140 ans', de: 'Erreichbar mit der eigenen Gütschbahn, über 140 Jahre alt' },
      ],
    },
    {
      slug: 'lu-hotel-montana',
      name: 'Art Deco Hotel Montana',
      url: 'https://www.hotel-montana.ch/',
      sector: { en: 'Adligenswilerstrasse, lake front', fr: 'Adligenswilerstrasse, front de lac', de: 'Adligenswilerstrasse, am Seeufer' },
      facts: [
        { en: 'Adligenswilerstrasse 22, above the lake front', fr: 'Adligenswilerstrasse 22, au-dessus du front de lac', de: 'Adligenswilerstrasse 22, über dem Seeufer' },
        { en: 'Beach Club in summer, Winter Grill in winter', fr: 'Beach Club en été, Winter Grill en hiver', de: 'Beach Club im Sommer, Winter Grill im Winter' },
      ],
    },
    {
      slug: 'lu-waldstaetterhof',
      name: 'Hotel Waldstätterhof',
      url: 'https://www.hotel-waldstaetterhof.ch/',
      sector: { en: 'Next to the station', fr: 'À côté de la gare', de: 'Neben dem Bahnhof' },
      facts: [
        { en: '91 rooms, from singles to suites', fr: '91 chambres, de la simple à la suite', de: '91 Zimmer, vom Einzelzimmer bis zur Suite' },
        { en: 'Zentralstrasse 4, right next to the railway station', fr: 'Zentralstrasse 4, juste à côté de la gare', de: 'Zentralstrasse 4, direkt neben dem Bahnhof' },
      ],
    },
    {
      slug: 'lu-backpackers',
      name: 'Backpackers Lucerne',
      url: 'https://www.backpackerslucerne.ch/',
      sector: { en: 'Alpenquai, on the lake', fr: 'Alpenquai, au bord du lac', de: 'Alpenquai, am See' },
      facts: [
        { en: 'Alpenquai 42, directly on Lake Lucerne', fr: 'Alpenquai 42, directement au bord du lac des Quatre-Cantons', de: 'Alpenquai 42, direkt am Vierwaldstättersee' },
        { en: 'Rooms from 4-bed and 3-bed dorms to doubles and singles', fr: 'Chambres du dortoir de 3 ou 4 lits à la simple et à la double', de: 'Zimmer vom 3er- und 4er-Schlafsaal bis zum Doppel- und Einzelzimmer' },
      ],
    },
    {
      slug: 'lu-youth-hostel',
      name: 'Lucerne Youth Hostel',
      url: 'https://www.youthhostel.ch/en/hostels/lucerne-youth-hostel',
      sector: { en: 'Sedelstrasse, by the Rotsee', fr: 'Sedelstrasse, près du Rotsee', de: 'Sedelstrasse, beim Rotsee' },
      facts: [
        { en: 'Sedelstrasse 12, next to the Rotsee nature reserve', fr: 'Sedelstrasse 12, à côté de la réserve naturelle du Rotsee', de: 'Sedelstrasse 12, neben dem Naturschutzgebiet Rotsee' },
        { en: 'Run by the Swiss Youth Hostels association, the Lucerne-Lake Lucerne guest card comes with the stay', fr: 'Géré par l’association Swiss Youth Hostels, la carte d’hôte Lucerne-lac des Quatre-Cantons est incluse dans le séjour', de: 'Geführt vom Verband Swiss Youth Hostels, die Gästekarte Luzern-Vierwaldstättersee ist im Aufenthalt inbegriffen' },
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
      { name: { en: 'Musegg wall and towers', fr: 'Mur et tours de la Musegg', de: 'Museggmauer und Türme' }, months: ['x', 'x', 'x', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'x', 'x'] },
      { name: { en: 'Pilatus cogwheel railway', fr: 'Train à crémaillère du Pilate', de: 'Pilatus-Zahnradbahn' }, months: ['x', 'x', 'x', 'x', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'x'] },
      { name: { en: 'Lake boats (SGV)', fr: 'Bateaux du lac (SGV)', de: 'Kursschiffe (SGV)' }, months: ['r', 'r', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'r'] },
    ],
    note: {
      en: '2026. Musegg wall and towers: closed November to March for winter maintenance. Pilatus cogwheel railway: season May to November. Lake boats: SGV runs year round with a reduced winter service. Sources: luzern.com, pilatus.ch, checked 16 September 2026.',
      fr: '2026. Mur et tours de la Musegg : fermés de novembre à mars pour l’entretien hivernal. Train à crémaillère du Pilate : saison de mai à novembre. Bateaux du lac : la SGV navigue toute l’année avec un service hivernal réduit. Sources : luzern.com, pilatus.ch, vérifiées le 16 septembre 2026.',
      de: '2026. Museggmauer und Türme: von November bis März wegen Winterwartung geschlossen. Pilatus-Zahnradbahn: Saison von Mai bis November. Kursschiffe: die SGV fährt ganzjährig mit reduziertem Winterfahrplan. Quellen: luzern.com, pilatus.ch, geprüft am 16. September 2026.',
    },
  },
  practical: {
    title: { en: 'The lake front, in practice', fr: 'Le front de lac, en pratique', de: 'Das Seeufer, in der Praxis' },
    items: [
      {
        title: { en: 'The guest card', fr: 'La carte d’hôte', de: 'Die Gästekarte' },
        text: {
          en: 'Anyone staying the night in a city hotel gets free travel on all buses and trains within the city zone for the stay, included with the room.',
          fr: 'Toute personne qui passe la nuit dans un hôtel de la ville bénéficie d’un accès gratuit à tous les bus et trains de la zone urbaine pendant son séjour, inclus avec la chambre.',
          de: 'Wer in einem Stadthotel übernachtet, erhält für die Dauer des Aufenthalts freie Fahrt auf allen Bussen und Zügen der Stadtzone, inklusive im Zimmerpreis.',
        },
      },
      {
        title: { en: 'Boats opposite the station', fr: 'Bateaux en face de la gare', de: 'Schiffe gegenüber dem Bahnhof' },
        text: {
          en: 'The lake boat piers at Bahnhofquai sit directly opposite the main railway station, so the lake, the trains and the old town are all reachable on foot from the same point.',
          fr: 'Les embarcadères de Bahnhofquai se trouvent juste en face de la gare centrale, si bien que le lac, les trains et la vieille ville sont tous accessibles à pied depuis le même point.',
          de: 'Die Schiffsstationen am Bahnhofquai liegen direkt gegenüber dem Hauptbahnhof, sodass See, Züge und Altstadt alle zu Fuss vom selben Punkt aus erreichbar sind.',
        },
      },
      {
        title: { en: 'City buses', fr: 'Bus urbains', de: 'Stadtbusse' },
        text: {
          en: 'City buses are run by VBL AG. With the guest card above, hotel guests do not need to buy separate tickets within the city zone.',
          fr: 'Les bus de la ville sont exploités par VBL AG. Grâce à la carte d’hôte, les clients d’un hôtel n’ont pas besoin d’acheter de billet séparé dans la zone urbaine.',
          de: 'Die Stadtbusse werden von der VBL AG betrieben. Dank der Gästekarte brauchen Hotelgäste innerhalb der Stadtzone kein separates Ticket.',
        },
      },
      {
        title: { en: 'Parking', fr: 'Stationnement', de: 'Parkplatz' },
        text: {
          en: 'Unlike several of the car-free villages on this site, Lucerne allows cars. The sources checked for this guide describe no dedicated visitor parking scheme, so arrange parking directly with your hotel.',
          fr: 'Contrairement à plusieurs villages sans voiture présentés sur ce site, Lucerne autorise les véhicules. Les sources consultées pour ce guide ne décrivent aucun dispositif de stationnement dédié aux visiteurs, à voir directement avec votre hôtel.',
          de: 'Anders als mehrere autofreie Dörfer auf dieser Seite lässt Luzern Autos zu. Die für diesen Ratgeber geprüften Quellen beschreiben kein eigenes Parkangebot für Gäste, das direkt mit dem Hotel zu klären ist.',
        },
      },
    ],
  },
  seasons: {
    summer: {
      title: { en: 'Summer in Lucerne', fr: 'L’été à Lucerne', de: 'Sommer in Luzern' },
      base: {
        en: 'Both mountain railways run in summer and the Musegg wall is open, so the lake front around Bahnhofquai and Schweizerhofquai is the practical base for reaching Pilatus by cogwheel and Rigi by boat and train.',
        fr: 'Les deux chemins de fer de montagne circulent en été et le mur de la Musegg est ouvert, si bien que le front de lac autour de Bahnhofquai et Schweizerhofquai est la base pratique pour rejoindre le Pilate en crémaillère et le Rigi en bateau et en train.',
        de: 'Beide Bergbahnen fahren im Sommer, und die Museggmauer ist geöffnet, sodass das Seeufer rund um Bahnhofquai und Schweizerhofquai die praktische Basis ist, um den Pilatus mit der Zahnradbahn und die Rigi mit Schiff und Bahn zu erreichen.',
      },
      facts: [
        { value: 'May → Nov', label: { en: 'Pilatus cogwheel railway operating season', fr: 'saison du train à crémaillère du Pilate', de: 'Betriebssaison der Pilatus-Zahnradbahn' } },
        { value: '12.8 → 12.9.2027', label: { en: 'Lucerne Festival Summer, at the KKL Luzern', fr: 'Lucerne Festival Summer, au KKL Luzern', de: 'Lucerne Festival Summer, im KKL Luzern' } },
        { value: '20 → 28.9.2026', label: { en: 'World Band Festival Lucerne', fr: 'World Band Festival Lucerne', de: 'World Band Festival Luzern' } },
      ],
      note: {
        en: 'Sources: luzern.com, pilatus.ch, lucernefestival.ch, checked 16 September 2026.',
        fr: 'Sources : luzern.com, pilatus.ch, lucernefestival.ch, vérifiées le 16 septembre 2026.',
        de: 'Quellen: luzern.com, pilatus.ch, lucernefestival.ch, geprüft am 16. September 2026.',
      },
    },
    winter: {
      title: { en: 'Winter in Lucerne', fr: 'L’hiver à Lucerne', de: 'Winter in Luzern' },
      base: {
        en: 'The Musegg wall and its towers close for the season and the Pilatus cogwheel railway stops running, though the cable car from Kriens keeps operating. The lake boats keep a reduced winter timetable, and the old town and the Swiss Museum of Transport stay open.',
        fr: 'Le mur de la Musegg et ses tours ferment pour la saison et le train à crémaillère du Pilate cesse de circuler, mais le téléphérique depuis Kriens continue de fonctionner. Les bateaux du lac gardent un horaire d’hiver réduit, et la vieille ville comme le Musée suisse des transports restent ouverts.',
        de: 'Die Museggmauer und ihre Türme schliessen für die Saison, und die Pilatus-Zahnradbahn stellt den Betrieb ein, während die Seilbahn ab Kriens weiterfährt. Die Kursschiffe fahren mit reduziertem Winterfahrplan, und Altstadt sowie Verkehrshaus bleiben geöffnet.',
      },
      facts: [
        { value: 'Nov → Mar', label: { en: 'Musegg wall and towers closed for winter maintenance', fr: 'mur et tours de la Musegg fermés pour l’entretien hivernal', de: 'Museggmauer und Türme wegen Winterwartung geschlossen' } },
        { value: 'Dec → Apr', label: { en: 'Pilatus cogwheel railway closed for the season', fr: 'train à crémaillère du Pilate fermé pour la saison', de: 'Pilatus-Zahnradbahn für die Saison geschlossen' } },
      ],
      note: {
        en: 'Sources: luzern.com, pilatus.ch, checked 16 September 2026.',
        fr: 'Sources : luzern.com, pilatus.ch, vérifiées le 16 septembre 2026.',
        de: 'Quellen: luzern.com, pilatus.ch, geprüft am 16. September 2026.',
      },
    },
  },
  doing: {
    title: { en: 'What to do in Lucerne', fr: 'Que faire à Lucerne', de: 'Was man in Luzern unternimmt' },
    intro: {
      en: 'Not a trail guide: named places and rides from Luzern Tourismus, Pilatus-Bahnen and Rigi Bahnen, checked on their own operator pages.',
      fr: 'Pas un guide de randonnée : des lieux et trajets nommés, repris de Luzern Tourismus, Pilatus-Bahnen et Rigi Bahnen, vérifiés sur leurs propres pages.',
      de: 'Kein Wanderführer: benannte Orte und Fahrten von Luzern Tourismus, den Pilatus-Bahnen und den Rigi Bahnen, auf deren eigenen Seiten geprüft.',
    },
    groups: [
      {
        kind: 'walk',
        title: { en: 'The wall and a guided hour', fr: 'Le mur et une heure guidée', de: 'Die Mauer und eine geführte Stunde' },
        items: [
          {
            name: 'The Musegg wall walk',
            meta: { en: '800 m · nine towers, three open · closed November to March', fr: '800 m · neuf tours, trois ouvertes · fermé de novembre à mars', de: '800 m · neun Türme, drei begehbar · von November bis März geschlossen' },
            text: {
              en: 'Built around 1400 after the Battle of Sempach, the wall carries nine surviving towers. The Zyt tower is 31 m tall, its clock face made large enough for fishermen to read from the lake.',
              fr: 'Construit vers 1400 après la bataille de Sempach, le mur porte neuf tours conservées. La tour de la Zyt mesure 31 m, son cadran assez grand pour être lu par les pêcheurs depuis le lac.',
              de: 'Um 1400 nach der Schlacht von Sempach erbaut, trägt die Mauer neun erhaltene Türme. Der Zytturm ist 31 m hoch, sein Zifferblatt gross genug, um von Fischern auf dem See abgelesen zu werden.',
            },
          },
          {
            name: { en: 'The guided city tour', fr: 'La visite guidée de la ville', de: 'Die geführte Stadtführung' },
            meta: { en: '1 h 30, 2 h on request · from CHF 20 per person · meets at Zentralstrasse 5', fr: '1 h 30, 2 h sur demande · dès 20 CHF par personne · départ Zentralstrasse 5', de: '1 Std. 30, auf Wunsch 2 Std. · ab CHF 20 pro Person · Treffpunkt Zentralstrasse 5' },
            text: {
              en: 'A guided walk through the old town available all year, reduced with the guest card given at check-in.',
              fr: 'Une visite guidée de la vieille ville disponible toute l’année, à tarif réduit avec la carte d’hôte remise à l’arrivée.',
              de: 'Eine ganzjährige geführte Tour durch die Altstadt, ermässigt mit der beim Check-in ausgegebenen Gästekarte.',
            },
          },
        ],
      },
      {
        kind: 'ride',
        title: { en: 'Two mountains, two railways', fr: 'Deux montagnes, deux chemins de fer', de: 'Zwei Berge, zwei Bahnen' },
        items: [
          {
            name: 'Mount Pilatus',
            meta: { en: '2132 m · cogwheel railway from Alpnachstad, 27 min up · May to November', fr: '2132 m · crémaillère depuis Alpnachstad, 27 min à la montée · de mai à novembre', de: '2132 m · Zahnradbahn ab Alpnachstad, 27 Min. bergauf · Mai bis November' },
            text: {
              en: 'The steepest cogwheel railway in the world, with a gradient of up to 48 per cent, climbing 1635 m over 4618 m of track. It opened in 1889, was electrified in 1937, and got new rolling stock in 2023.',
              fr: 'Le train à crémaillère le plus raide du monde, avec une pente atteignant 48 %, gravissant 1635 m sur 4618 m de voie. Il a ouvert en 1889, a été électrifié en 1937, et a reçu du nouveau matériel roulant en 2023.',
              de: 'Die steilste Zahnradbahn der Welt, mit einer Steigung von bis zu 48 Prozent, überwindet auf 4618 m Streckenlänge 1635 Höhenmeter. Eröffnet 1889, elektrifiziert 1937, seit 2023 mit neuem Rollmaterial.',
            },
          },
          {
            name: 'The Rigi',
            meta: { en: '1798 m at Rigi Kulm · from Vitznau about 30 min, from Arth-Goldau about 1 h', fr: '1798 m au Rigi Kulm · depuis Vitznau environ 30 min, depuis Arth-Goldau environ 1 h', de: '1798 m auf dem Rigi Kulm · ab Vitznau rund 30 Min., ab Arth-Goldau rund 1 Std.' },
            text: {
              en: 'Europe’s first mountain railway, opened from Vitznau in 1871 and electrified in 1907, becoming the world’s first electric standard-gauge cogwheel railway. The operator says up to 24 of the 26 Swiss cantons are visible on a clear day.',
              fr: 'Le premier chemin de fer de montagne d’Europe, ouvert depuis Vitznau en 1871 et électrifié en 1907, devenant la première crémaillère électrique à voie normale du monde. L’exploitant indique que jusqu’à 24 des 26 cantons suisses sont visibles par temps clair.',
              de: 'Die erste Bergbahn Europas, 1871 ab Vitznau eröffnet und 1907 elektrifiziert, damit die weltweit erste elektrische Zahnradbahn in Normalspur. Der Betreiber gibt an, dass bei klarer Sicht bis zu 24 der 26 Schweizer Kantone zu sehen sind.',
            },
          },
        ],
      },
      {
        kind: 'local',
        title: { en: 'On the Reuss', fr: 'Sur la Reuss', de: 'An der Reuss' },
        items: [
          {
            name: 'Chapel Bridge and the Water Tower',
            meta: { en: '204 m · around 650 years old · free, open at any time', fr: '204 m · environ 650 ans · gratuit, accessible en tout temps', de: '204 m · rund 650 Jahre alt · frei, jederzeit zugänglich' },
            text: {
              en: 'The bridge burned on the night of 18 August 1993, when 110 of the 147 panels then in place were affected. It was rebuilt in eight months and reopened on 14 April 1994. The adjoining Water Tower, 34.5 m high and built around 1290 to 1300, served as lookout, archive, treasury and, until the late 18th century, a prison.',
              fr: 'Le pont a brûlé dans la nuit du 18 août 1993, endommageant 110 des 147 panneaux alors en place. Il a été reconstruit en huit mois et rouvert le 14 avril 1994. La tour d’eau attenante, haute de 34,5 m et bâtie vers 1290-1300, a servi de poste de guet, d’archives, de trésor cantonal et, jusqu’à la fin du XVIIIe siècle, de prison.',
              de: 'Die Brücke brannte in der Nacht des 18. August 1993, wobei 110 der damals 147 vorhandenen Bildtafeln beschädigt wurden. Sie wurde in acht Monaten wieder aufgebaut und am 14. April 1994 wiedereröffnet. Der angrenzende, rund 1290 bis 1300 erbaute, 34,5 m hohe Wasserturm diente als Wachturm, Archiv, Kantonsschatzkammer und bis ins späte 18. Jahrhundert als Gefängnis.',
            },
          },
          {
            name: 'The Lion Monument',
            meta: { en: 'carved 1821 by Bertel Thorvaldsen · 10 by 6 metres', fr: 'sculpté en 1821 par Bertel Thorvaldsen · 10 sur 6 mètres', de: '1821 von Bertel Thorvaldsen gehauen · 10 auf 6 Meter' },
            text: {
              en: 'Cut into a sandstone cliff face in memory of about 1000 Swiss Guards killed at the Tuileries in Paris on 10 August 1792. Mark Twain called it the most mournful and moving piece of stone in the world.',
              fr: 'Taillé dans une paroi de grès à la mémoire d’environ 1000 gardes suisses tués aux Tuileries à Paris le 10 août 1792. Mark Twain l’a qualifié de pierre la plus triste et la plus émouvante du monde.',
              de: 'In eine Sandsteinwand gehauen, zur Erinnerung an rund 1000 Schweizergardisten, die am 10. August 1792 in den Tuilerien in Paris getötet wurden. Mark Twain nannte ihn den traurigsten und bewegendsten Stein der Welt.',
            },
          },
        ],
      },
      {
        kind: 'table',
        title: { en: 'Where to eat', fr: 'Où manger', de: 'Wo essen' },
        items: [
          {
            name: 'Buvette Inseli Lucerne',
            meta: { en: 'Inseli Park', fr: 'Parc Inseli', de: 'Inseli-Park' },
            text: {
              en: 'A coffee shop in the Inseli Park, listed by the tourist office for regional food and coffee.',
              fr: 'Un café dans le parc Inseli, répertorié par l’office du tourisme pour sa cuisine régionale et son café.',
              de: 'Ein Kaffeehaus im Inseli-Park, vom Tourismusbüro für regionale Küche und Kaffee gelistet.',
            },
          },
          {
            name: 'Seebad Lucerne',
            meta: { en: 'Nationalquai', fr: 'Nationalquai', de: 'Nationalquai' },
            text: {
              en: 'A bar at the lake bath on Nationalquai, serving Mediterranean and regional dishes.',
              fr: 'Un bar au bain du lac, sur le Nationalquai, avec une cuisine méditerranéenne et régionale.',
              de: 'Eine Bar beim Seebad am Nationalquai, mit mediterraner und regionaler Küche.',
            },
          },
        ],
      },
    ],
    note: {
      en: 'Times, fares and figures come from Luzern Tourismus, Pilatus-Bahnen and Rigi Bahnen, checked on 16 September 2026. We publish no ratings and no route descriptions: check conditions on the spot before you set off.',
      fr: 'Horaires, tarifs et chiffres proviennent de Luzern Tourismus, Pilatus-Bahnen et Rigi Bahnen, vérifiés le 16 septembre 2026. Nous ne publions ni notes ni descriptifs d’itinéraires : renseignez-vous sur place avant de partir.',
      de: 'Zeiten, Tarife und Zahlen stammen von Luzern Tourismus, den Pilatus-Bahnen und den Rigi Bahnen, geprüft am 16. September 2026. Wir veröffentlichen keine Bewertungen und keine Routenbeschreibungen: Erkundigen Sie sich vor Ort, bevor Sie losgehen.',
    },
  },
  faq: [
    {
      q: { en: 'How long is the train from Zurich?', fr: 'Combien de temps dure le train depuis Zurich ?', de: 'Wie lange dauert die Zugfahrt ab Zürich?' },
      a: {
        en: 'Direct IR and IC trains run every 30 minutes and take 45 to 50 minutes.',
        fr: 'Des trains IR et IC directs circulent toutes les 30 minutes et mettent 45 à 50 minutes.',
        de: 'Direkte IR- und IC-Züge fahren alle 30 Minuten und brauchen 45 bis 50 Minuten.',
      },
    },
    {
      q: { en: 'Do I need a ticket for the city buses?', fr: 'Faut-il un billet pour les bus de la ville ?', de: 'Braucht man ein Ticket für die Stadtbusse?' },
      a: {
        en: 'Not if you are staying the night in a city hotel: the guest card covers all buses and trains in the city zone for your stay.',
        fr: 'Pas si vous passez la nuit dans un hôtel de la ville : la carte d’hôte couvre tous les bus et trains de la zone urbaine pendant votre séjour.',
        de: 'Nicht, wenn Sie in einem Stadthotel übernachten: die Gästekarte deckt für die Dauer des Aufenthalts alle Busse und Züge der Stadtzone ab.',
      },
    },
    {
      q: { en: 'Are the lake boats covered by the Swiss Travel Pass?', fr: 'Les bateaux du lac sont-ils couverts par le Swiss Travel Pass ?', de: 'Sind die Kursschiffe im Swiss Travel Pass inbegriffen?' },
      a: {
        en: 'Yes, on all scheduled trips; special themed and culinary cruises are not. From Bahnhofquai it is 45 minutes to Weggis, 55 to Vitznau and 2 h 45 to Flüelen.',
        fr: 'Oui, sur toutes les liaisons régulières ; les croisières à thème ou culinaires ne le sont pas. Depuis Bahnhofquai, comptez 45 minutes jusqu’à Weggis, 55 jusqu’à Vitznau et 2 h 45 jusqu’à Flüelen.',
        de: 'Ja, auf allen Linienfahrten; thematische und kulinarische Kreuzfahrten nicht. Ab Bahnhofquai sind es 45 Minuten nach Weggis, 55 nach Vitznau und 2 Std. 45 nach Flüelen.',
      },
    },
    {
      q: { en: 'Pilatus or Rigi?', fr: 'Pilate ou Rigi ?', de: 'Pilatus oder Rigi?' },
      a: {
        en: 'Pilatus Kulm is 2132 m and is reached by the steepest cogwheel railway in the world, a gradient of up to 48 per cent, but only from May to November. Rigi Kulm is 1798 m, served all year by Europe’s first mountain railway, opened in 1871.',
        fr: 'Le Pilatus Kulm culmine à 2132 m et se rejoint par le train à crémaillère le plus raide du monde, jusqu’à 48 % de pente, mais seulement de mai à novembre. Le Rigi Kulm culmine à 1798 m et est desservi toute l’année par le premier chemin de fer de montagne d’Europe, ouvert en 1871.',
        de: 'Der Pilatus Kulm liegt auf 2132 m und wird mit der steilsten Zahnradbahn der Welt erreicht, mit bis zu 48 Prozent Steigung, aber nur von Mai bis November. Der Rigi Kulm liegt auf 1798 m und wird ganzjährig mit der ersten Bergbahn Europas bedient, eröffnet 1871.',
      },
    },
    {
      q: { en: 'What actually happened to the Chapel Bridge?', fr: 'Que s’est-il vraiment passé pour le pont de la Chapelle ?', de: 'Was ist mit der Kapellbrücke wirklich passiert?' },
      a: {
        en: 'It burned on the night of 18 August 1993, was rebuilt in eight months and reopened on 14 April 1994. Of the 147 painted panels in place before the fire, 110 were affected.',
        fr: 'Il a brûlé dans la nuit du 18 août 1993, a été reconstruit en huit mois et rouvert le 14 avril 1994. Sur les 147 panneaux peints en place avant l’incendie, 110 ont été endommagés.',
        de: 'Sie brannte in der Nacht des 18. August 1993, wurde in acht Monaten wieder aufgebaut und am 14. April 1994 wiedereröffnet. Von den 147 vor dem Brand vorhandenen Bildtafeln wurden 110 beschädigt.',
      },
    },
  ],
  neighbours: ['zurich', 'bern', 'andermatt', 'engelberg'],
}
