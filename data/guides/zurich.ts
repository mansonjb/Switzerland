import type { DestinationGuide } from '../types'

// Sources in data/SOURCES-zurich.md (checked 16/09/2026). No number without a source.
export const zurich: DestinationGuide = {
  slug: 'zurich',
  stamp: 'generic',
  updated: '2026-09-16',
  meta: {
    title: { en: 'Where to stay in Zurich: old town, lake, river baths', fr: 'Où dormir à Zurich : vieille ville, lac, bains fluviaux', de: 'Wo übernachten in Zürich: Altstadt, See, Flussbäder' },
    description: {
      en: 'Zurich area by area: Niederdorf and the old town, the lake basin around Bürkliplatz, Zurich West and the Hürlimann site. Hotels with real addresses, the lake and river baths, and the airport link.',
      fr: 'Zurich secteur par secteur : Niederdorf et la vieille ville, le bassin du lac autour de Bürkliplatz, Zurich West et le site Hürlimann. Hôtels avec adresses réelles, bains du lac et de la rivière, liaison avec l’aéroport.',
      de: 'Zürich Ortsteil für Ortsteil: Niederdorf und die Altstadt, das Seebecken rund um Bürkliplatz, Zürich West und das Hürlimann-Areal. Hotels mit echten Adressen, Seebäder und Flussbäder, Verbindung zum Flughafen.',
    },
  },
  eyebrow: { en: 'Zurich region · Zurich', fr: 'Région de Zurich · Zurich', de: 'Region Zürich · Zürich' },
  title: { en: 'Where to stay in Zurich', fr: 'Où dormir à Zurich', de: 'Wo übernachten in Zürich' },
  intro: {
    en: 'A lake and river city at 408 m, 10 to 15 minutes by train from Zurich Airport to the main station. The old town’s pedestrian Niederdorf runs 597 m, about 3 minutes on foot, from the station, and along the lower lake basin the Flussbad Oberer Letten gives free access to a 400 m swimming channel in the Limmat. The Grossmünster’s Karlsturm climbs 187 steps to six panoramic windows over it all.',
    fr: 'Une ville de lac et de rivière à 408 m d’altitude, à 10 à 15 minutes en train de l’aéroport de Zurich à la gare centrale. Le Niederdorf, promenade piétonne de la vieille ville, s’étire sur 597 m, environ 3 minutes à pied, depuis la gare, et le long du bassin inférieur du lac, le Flussbad Oberer Letten donne un accès gratuit à un chenal de baignade de 400 m dans la Limmat. Le Karlsturm du Grossmünster grimpe sur 187 marches jusqu’à six fenêtres panoramiques dominant l’ensemble.',
    de: 'Eine See- und Flussstadt auf 408 m, 10 bis 15 Minuten mit dem Zug vom Flughafen Zürich zum Hauptbahnhof. Das autofreie Niederdorf in der Altstadt zieht sich auf 597 m, rund 3 Gehminuten, vom Bahnhof hin, und am unteren Seebecken bietet das Flussbad Oberer Letten freien Zugang zu einem 400 m langen Schwimmkanal in der Limmat. Der Karlsturm des Grossmünsters führt über 187 Stufen zu sechs Panoramafenstern über alledem.',
  },
  quickAnswer: {
    en: 'Stay in Zurich for a lake and river you can actually swim in, with free public baths a few minutes from the main station and an airport 10 to 15 minutes away by train. For an old town built around two mountain railways instead of a lake, stay in Lucerne.',
    fr: 'Dormez à Zurich pour un lac et une rivière où l’on peut vraiment se baigner, avec des bains publics gratuits à quelques minutes de la gare centrale et un aéroport à 10 à 15 minutes en train. Pour une vieille ville organisée autour de deux chemins de fer de montagne plutôt que d’un lac, dormez à Lucerne.',
    de: 'Übernachten Sie in Zürich für einen See und einen Fluss, in denen man tatsächlich schwimmen kann, mit kostenlosen öffentlichen Bädern wenige Minuten vom Hauptbahnhof und einem Flughafen 10 bis 15 Minuten entfernt mit dem Zug. Für eine Altstadt rund um zwei Bergbahnen statt einen See übernachten Sie in Luzern.',
  },
  snapshot: {
    why: {
      en: 'The lake and river baths put swimming at the centre of the city rather than at its edge, and the Zürich Card covers the whole transport network plus free entry to two of the main sights.',
      fr: 'Les bains du lac et de la rivière placent la baignade au coeur de la ville plutôt qu’en périphérie, et la Zürich Card couvre tout le réseau de transport ainsi que l’entrée gratuite à deux des principaux sites.',
      de: 'Die See- und Flussbäder rücken das Schwimmen ins Zentrum der Stadt statt an ihren Rand, und die Zürich Card deckt das gesamte Verkehrsnetz sowie den freien Eintritt zu zwei der wichtigsten Sehenswürdigkeiten ab.',
    },
    where: {
      en: 'Around Niederdorf and Rennweg for the old town, along Bürkliplatz and the lake quays for the baths and the boats, in Zurich West or the Hürlimann Areal for a converted industrial or brewery setting.',
      fr: 'Autour du Niederdorf et de la Rennweg pour la vieille ville, le long de Bürkliplatz et des quais du lac pour les bains et les bateaux, à Zurich West ou sur le site Hürlimann pour un cadre industriel ou brassicole reconverti.',
      de: 'Rund um Niederdorf und Rennweg für die Altstadt, entlang von Bürkliplatz und den Seequais für Bäder und Boote, in Zürich West oder im Hürlimann-Areal für ein umgenutztes Industrie- oder Brauereigelände.',
    },
    watch: {
      en: 'Exact opening dates for the lake and river baths are set by the city’s sports department each year and were not published on the pages checked here, so confirm locally before planning a swim.',
      fr: 'Les dates d’ouverture exactes des bains du lac et de la rivière sont fixées chaque année par le service des sports de la ville et n’étaient pas publiées sur les pages consultées ici : à confirmer sur place avant de prévoir une baignade.',
      de: 'Die genauen Öffnungsdaten der See- und Flussbäder werden jedes Jahr vom städtischen Sportamt festgelegt und waren auf den hier geprüften Seiten nicht veröffentlicht: vor Ort bestätigen, bevor man einen Badetag plant.',
    },
  },
  stats: [
    { value: '10-15', label: { en: 'minutes by train from Zurich Airport to the main station', fr: 'minutes en train entre l’aéroport de Zurich et la gare centrale', de: 'Minuten mit dem Zug vom Flughafen Zürich zum Hauptbahnhof' } },
    { value: '400', label: { en: 'metres of free swimming channel in the Limmat, at Flussbad Oberer Letten', fr: 'mètres de chenal de baignade gratuit dans la Limmat, au Flussbad Oberer Letten', de: 'Meter kostenloser Schwimmkanal in der Limmat, im Flussbad Oberer Letten' } },
    { value: '178', label: { en: 'steps up the Uetliberg observation tower, 70 m tall', fr: 'marches pour monter à la tour d’observation de l’Uetliberg, haute de 70 m', de: 'Stufen auf den 70 m hohen Aussichtsturm auf dem Uetliberg' } },
  ],
  hero: {
    photo: '/photos/zurich.jpg',
    caption: { en: 'The Limmat, the Grossmünster and the old town, seen from across the river.', fr: 'La Limmat, le Grossmünster et la vieille ville, vus depuis l’autre rive.', de: 'Die Limmat, das Grossmünster und die Altstadt, von der anderen Flussseite aus gesehen.' },
    credit: { author: 'Chensiyuan', license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/', source: 'https://commons.wikimedia.org/wiki/File:1_zurich_panorama_grossmunster_limmat_river_2012.jpg' },
  },
  sectors: [
    {
      title: { en: 'The Old Town: Niederdorf, Lindenhof, Rennweg', fr: 'La vieille ville : Niederdorf, Lindenhof, Rennweg', de: 'Altstadt: Niederdorf, Lindenhof, Rennweg' },
      walk: { en: '597 m, about 3 minutes, from the main station', fr: '597 m, environ 3 minutes, depuis la gare centrale', de: '597 m, rund 3 Minuten, vom Hauptbahnhof' },
      text: {
        en: 'The pedestrian Niederdorf runs parallel to the Limmatquai, shops by day and bars in the evening. Hotel addresses here include the Widder at Rennweg 7, made up of nine historic buildings, and Storchen at Weinplatz 2, on the river facing the Grossmünster.',
        fr: 'Le Niederdorf piéton longe le Limmatquai, avec ses commerces le jour et ses bars le soir. On y trouve notamment le Widder, Rennweg 7, formé de neuf bâtiments historiques, et le Storchen, Weinplatz 2, sur la rivière face au Grossmünster.',
        de: 'Das autofreie Niederdorf verläuft parallel zum Limmatquai, tagsüber mit Läden, abends mit Bars. Hier liegen unter anderem der Widder an der Rennweg 7, aus neun historischen Gebäuden bestehend, und der Storchen am Weinplatz 2, am Fluss gegenüber dem Grossmünster.',
      },
      points: [
        { en: '597 m, about 3 minutes on foot, from Zurich main station', fr: '597 m, environ 3 minutes à pied, depuis la gare centrale de Zurich', de: '597 m, rund 3 Gehminuten, vom Zürcher Hauptbahnhof' },
        { en: 'The Swiss National Museum is 137 m from the main station', fr: 'Le Musée national suisse se trouve à 137 m de la gare centrale', de: 'Das Schweizerische Landesmuseum liegt 137 m vom Hauptbahnhof entfernt' },
      ],
    },
    {
      title: { en: 'The lake basin: Bürkliplatz and the quays', fr: 'Le bassin du lac : Bürkliplatz et les quais', de: 'Seebecken: Bürkliplatz und die Quais' },
      walk: { en: 'Mythenquai, Utoquai, Seefeld', fr: 'Mythenquai, Utoquai, Seefeld', de: 'Mythenquai, Utoquai, Seefeld' },
      text: {
        en: 'The lakeside park runs along Mythenquai, General-Guisan-Quai, Utoquai and Seefeldquai, with Bürkliplatz at the centre and the boat departure point. Baur au Lac stands in its own park on the shore at Talstrasse 1, and the lake baths, Seebad Enge, Seebad Utoquai and Strandbad Mythenquai, line the same quays.',
        fr: 'Le parc riverain longe Mythenquai, General-Guisan-Quai, Utoquai et Seefeldquai, avec Bürkliplatz en son centre et comme point de départ des bateaux. Le Baur au Lac se dresse dans son propre parc au bord du lac, Talstrasse 1, et les bains du lac, Seebad Enge, Seebad Utoquai et Strandbad Mythenquai, bordent les mêmes quais.',
        de: 'Der Seeuferpark verläuft entlang Mythenquai, General-Guisan-Quai, Utoquai und Seefeldquai, mit dem Bürkliplatz als Zentrum und Anlegestelle der Schiffe. Der Baur au Lac steht in seinem eigenen Park am Ufer, Talstrasse 1, und die Seebäder, Seebad Enge, Seebad Utoquai und Strandbad Mythenquai, säumen dieselben Quais.',
      },
      points: [
        { en: 'Bürkliplatz is the centre of the lakeside promenade and the boat departure point', fr: 'Bürkliplatz est le centre de la promenade du lac et le point de départ des bateaux', de: 'Der Bürkliplatz ist das Zentrum der Seepromenade und Ausgangspunkt der Schiffe' },
        { en: 'Seebad Enge, at Mythenquai 9, has 44 m lanes and entry for CHF 8', fr: 'Le Seebad Enge, Mythenquai 9, propose des couloirs de 44 m pour 8 CHF l’entrée', de: 'Das Seebad Enge, Mythenquai 9, bietet 44 m lange Bahnen, Eintritt CHF 8' },
      ],
    },
    {
      title: { en: 'Zurich West and the Hürlimann Areal', fr: 'Zurich West et le site Hürlimann', de: 'Zürich West und das Hürlimann-Areal' },
      walk: { en: 'Pfingstweidstrasse and Brandschenkestrasse', fr: 'Pfingstweidstrasse et Brandschenkestrasse', de: 'Pfingstweidstrasse und Brandschenkestrasse' },
      text: {
        en: 'Zurich West is the former industrial quarter along Pfingstweidstrasse, home to the 25hours Hotel Zurich West. On the old Hürlimann brewery site, the B2 Boutique Hotel gives direct access to the Hürlimannbad & Spa and its rooftop pool. The youth hostel sits further south, at Mutschellenstrasse 114.',
        fr: 'Zurich West est l’ancien quartier industriel le long de la Pfingstweidstrasse, où se trouve le 25hours Hotel Zurich West. Sur l’ancien site de la brasserie Hürlimann, le B2 Boutique Hotel donne un accès direct au Hürlimannbad & Spa et à sa piscine sur le toit. L’auberge de jeunesse se trouve plus au sud, Mutschellenstrasse 114.',
        de: 'Zürich West ist das frühere Industriequartier entlang der Pfingstweidstrasse, wo das 25hours Hotel Zurich West liegt. Auf dem alten Hürlimann-Brauereiareal bietet das B2 Boutique Hotel direkten Zugang zum Hürlimannbad & Spa mit seinem Dach-Pool. Die Jugendherberge liegt weiter südlich, an der Mutschellenstrasse 114.',
      },
      points: [
        { en: 'The B2 Boutique Hotel gives direct access to the Hürlimannbad & Spa rooftop pool', fr: 'Le B2 Boutique Hotel donne un accès direct à la piscine sur le toit du Hürlimannbad & Spa', de: 'Das B2 Boutique Hotel bietet direkten Zugang zum Dach-Pool des Hürlimannbad & Spa' },
        { en: '25hours Hotel Zurich West is at Pfingstweidstrasse 102', fr: 'Le 25hours Hotel Zurich West se trouve Pfingstweidstrasse 102', de: 'Das 25hours Hotel Zurich West liegt an der Pfingstweidstrasse 102' },
      ],
    },
  ],
  hotels: [
    {
      slug: 'zh-baur-au-lac',
      name: 'Baur au Lac',
      url: 'https://www.bauraulac.ch/',
      sector: { en: 'Talstrasse, lake basin', fr: 'Talstrasse, bassin du lac', de: 'Talstrasse, Seebecken' },
      facts: [
        { en: 'Opened in 1844, run by the seventh generation of the same family', fr: 'Ouvert en 1844, dirigé par la septième génération de la même famille', de: 'Eröffnet 1844, in siebter Generation von derselben Familie geführt' },
        { en: 'Talstrasse 1, in its own park on the shore of Lake Zurich', fr: 'Talstrasse 1, dans son propre parc au bord du lac de Zurich', de: 'Talstrasse 1, im eigenen Park am Ufer des Zürichsees' },
      ],
    },
    {
      slug: 'zh-storchen',
      name: 'Storchen Zürich',
      photo: '/photos/hotels/zh-storchen.jpg',
      url: 'https://www.storchen.ch/',
      sector: { en: 'Weinplatz, on the Limmat', fr: 'Weinplatz, sur la Limmat', de: 'Weinplatz, an der Limmat' },
      facts: [
        { en: '64 rooms and suites', fr: '64 chambres et suites', de: '64 Zimmer und Suiten' },
        { en: 'Weinplatz 2, on the river with a view of the Grossmünster', fr: 'Weinplatz 2, sur la rivière avec vue sur le Grossmünster', de: 'Weinplatz 2, am Fluss mit Blick auf das Grossmünster' },
      ],
    },
    {
      slug: 'zh-widder',
      name: 'Widder Hotel',
      photo: '/photos/hotels/zh-widder.jpg',
      url: 'https://www.widderhotel.com/',
      sector: { en: 'Rennweg, old town', fr: 'Rennweg, vieille ville', de: 'Rennweg, Altstadt' },
      facts: [
        { en: 'Made up of nine historic buildings in the old town', fr: 'Composé de neuf bâtiments historiques en vieille ville', de: 'Besteht aus neun historischen Gebäuden in der Altstadt' },
        { en: '49 rooms and suites plus five residences, at Rennweg 7', fr: '49 chambres et suites, plus cinq résidences, Rennweg 7', de: '49 Zimmer und Suiten sowie fünf Residenzen, an der Rennweg 7' },
      ],
    },
    {
      slug: 'zh-marktgasse',
      name: 'Hotel Marktgasse',
      photo: '/photos/hotels/zh-marktgasse.jpg',
      url: 'https://www.marktgassehotel.ch/',
      sector: { en: 'Marktgasse, old town', fr: 'Marktgasse, vieille ville', de: 'Marktgasse, Altstadt' },
      facts: [
        { en: '39 individually furnished rooms, from a Tiny Room to a Historic Double Room', fr: '39 chambres meublées individuellement, de la Tiny Room à la Historic Double Room', de: '39 individuell eingerichtete Zimmer, vom Tiny Room bis zum Historic Double Room' },
        { en: 'Marktgasse 17, in a restored 15th-century building the hotel calls one of the oldest inns in Zurich', fr: 'Marktgasse 17, dans un bâtiment restauré du XVe siècle que l’hôtel présente comme l’une des plus anciennes auberges de Zurich', de: 'Marktgasse 17, in einem restaurierten Gebäude aus dem 15. Jahrhundert, das das Hotel als eines der ältesten Gasthäuser Zürichs bezeichnet' },
      ],
    },
    {
      slug: 'zh-adler',
      name: 'Hotel Adler',
      photo: '/photos/hotels/zh-adler.jpg',
      url: 'https://www.hotel-adler.ch/',
      sector: { en: 'Rosengasse, Niederdorf', fr: 'Rosengasse, Niederdorf', de: 'Rosengasse, Niederdorf' },
      facts: [
        { en: 'Rosengasse 10, in the middle of the old town', fr: 'Rosengasse 10, au coeur de la vieille ville', de: 'Rosengasse 10, mitten in der Altstadt' },
        { en: 'Ten room categories, from Standard Single to Grand Family Room, all air-conditioned', fr: 'Dix catégories de chambres, de la Standard Single à la Grand Family Room, toutes climatisées', de: 'Zehn Zimmerkategorien, vom Standard Single bis zum Grand Family Room, alle klimatisiert' },
      ],
    },
    {
      slug: 'zh-b2-boutique',
      name: 'B2 Boutique Hotel + Spa',
      url: 'https://www.b2hotel.ch/',
      sector: { en: 'Hürlimann Areal', fr: 'Site Hürlimann', de: 'Hürlimann-Areal' },
      facts: [
        { en: '60 rooms and suites, on the old Hürlimann brewery site', fr: '60 chambres et suites, sur l’ancien site de la brasserie Hürlimann', de: '60 Zimmer und Suiten, auf dem alten Hürlimann-Brauereiareal' },
        { en: 'A library with 33 000 books and direct access to the Hürlimannbad & Spa rooftop pool', fr: 'Une bibliothèque de 33 000 livres et un accès direct à la piscine sur le toit du Hürlimannbad & Spa', de: 'Eine Bibliothek mit 33 000 Büchern und direkter Zugang zum Dach-Pool des Hürlimannbad & Spa' },
      ],
    },
    {
      slug: 'zh-25hours-west',
      name: '25hours Hotel Zurich West',
      url: 'https://www.25hours-hotels.com/en/hotels/zurich/zurich-west',
      sector: { en: 'Pfingstweidstrasse, Zurich West', fr: 'Pfingstweidstrasse, Zurich West', de: 'Pfingstweidstrasse, Zürich West' },
      facts: [
        { en: '123 rooms and suites, at Pfingstweidstrasse 102', fr: '123 chambres et suites, Pfingstweidstrasse 102', de: '123 Zimmer und Suiten, an der Pfingstweidstrasse 102' },
        { en: 'Interiors by Alfredo Häberli on a sport theme, with sports equipment in every room', fr: 'Décoration d’Alfredo Häberli sur le thème du sport, avec du matériel sportif dans chaque chambre', de: 'Interieur von Alfredo Häberli zum Thema Sport, mit Sportgeräten in jedem Zimmer' },
      ],
    },
    {
      slug: 'zh-youth-hostel',
      name: 'Zurich Youth Hostel',
      url: 'https://www.youthhostel.ch/en/hostels/zurich-youth-hostel',
      sector: { en: 'Mutschellenstrasse, Wollishofen', fr: 'Mutschellenstrasse, Wollishofen', de: 'Mutschellenstrasse, Wollishofen' },
      facts: [
        { en: 'Mutschellenstrasse 114, with restaurant, bar and 24-hour reception', fr: 'Mutschellenstrasse 114, avec restaurant, bar et réception ouverte 24 heures sur 24', de: 'Mutschellenstrasse 114, mit Restaurant, Bar und 24-Stunden-Rezeption' },
        { en: 'Barrier-free access, run by the Swiss Youth Hostels association', fr: 'Accès sans obstacle, géré par l’association Swiss Youth Hostels', de: 'Barrierefreier Zugang, geführt vom Verband Swiss Youth Hostels' },
      ],
    },
  ],
  hotelsNote: {
    en: 'Facts taken from each hotel’s own website on 16 September 2026. No ratings or reviews on this guide.',
    fr: 'Faits relevés sur le site de chaque hôtel le 16 septembre 2026. Aucune note ni aucun avis sur ce guide.',
    de: 'Fakten von der Website des jeweiligen Hotels, Stand 16. September 2026. Keine Bewertungen oder Rezensionen.',
  },
  practical: {
    title: { en: 'Airport, card, network', fr: 'Aéroport, carte, réseau', de: 'Flughafen, Karte, Netz' },
    items: [
      {
        title: { en: 'The Zürich Card', fr: 'La Zürich Card', de: 'Die Zürich Card' },
        text: {
          en: 'Unlimited second-class travel on the whole city transport network for 24 or 72 hours, including the airport transfer, plus free entry to the Grossmünster tower and the Swiss National Museum.',
          fr: 'Voyage illimité en 2e classe sur tout le réseau de transport urbain pendant 24 ou 72 heures, transfert depuis l’aéroport inclus, avec entrée gratuite à la tour du Grossmünster et au Musée national suisse.',
          de: 'Unbegrenzte Fahrt in der 2. Klasse auf dem gesamten städtischen Verkehrsnetz für 24 oder 72 Stunden, inklusive Flughafentransfer, mit freiem Eintritt zum Grossmünster-Turm und zum Landesmuseum.',
        },
      },
      {
        title: { en: 'From the airport', fr: 'Depuis l’aéroport', de: 'Ab dem Flughafen' },
        text: {
          en: 'Trains run every 5 to 10 minutes between 05:00 and midnight, 10 to 15 minutes to the main station, CHF 7 single or CHF 14 for a day pass. Tram 10 takes about 35 minutes, a taxi 10 to 20 minutes for CHF 45 to 70.',
          fr: 'Les trains circulent toutes les 5 à 10 minutes entre 05h00 et minuit, 10 à 15 minutes jusqu’à la gare centrale, 7 CHF le billet simple ou 14 CHF la carte journalière. Le tram 10 met environ 35 minutes, un taxi 10 à 20 minutes pour 45 à 70 CHF.',
          de: 'Die Züge fahren alle 5 bis 10 Minuten zwischen 05.00 Uhr und Mitternacht, 10 bis 15 Minuten bis zum Hauptbahnhof, CHF 7 für ein Einzelbillett oder CHF 14 für eine Tageskarte. Tram 10 braucht rund 35 Minuten, ein Taxi 10 bis 20 Minuten für CHF 45 bis 70.',
        },
      },
      {
        title: { en: 'One ticket for everything', fr: 'Un seul billet pour tout', de: 'Ein Ticket für alles' },
        text: {
          en: 'The Zurich Transport Association, ZVV, unifies trams, buses, trains, boats, funiculars and cable cars under a single ticket.',
          fr: 'La communauté tarifaire zurichoise, ZVV, réunit trams, bus, trains, bateaux, funiculaires et téléphériques sous un seul billet.',
          de: 'Der Zürcher Verkehrsverbund ZVV vereint Trams, Busse, Züge, Boote, Standseilbahnen und Seilbahnen unter einem einzigen Ticket.',
        },
      },
      {
        title: { en: 'Parking', fr: 'Stationnement', de: 'Parkplatz' },
        text: {
          en: 'Unlike several of the car-free villages on this site, Zurich allows cars. The sources checked for this guide describe no dedicated visitor parking scheme, so arrange parking directly with your hotel.',
          fr: 'Contrairement à plusieurs villages sans voiture présentés sur ce site, Zurich autorise les véhicules. Les sources consultées pour ce guide ne décrivent aucun dispositif de stationnement dédié aux visiteurs, à voir directement avec votre hôtel.',
          de: 'Anders als mehrere autofreie Dörfer auf dieser Seite lässt Zürich Autos zu. Die für diesen Ratgeber geprüften Quellen beschreiben kein eigenes Parkangebot für Gäste, das direkt mit dem Hotel zu klären ist.',
        },
      },
    ],
  },
  seasons: {
    summer: {
      title: { en: 'Summer in Zurich', fr: 'L’été à Zurich', de: 'Sommer in Zürich' },
      base: {
        en: 'The lake and river baths are the season’s main event: Flussbad Oberer Letten, Seebad Enge and the women-only Frauenbad all open for swimming, and the Street Parade fills the lake basin in August.',
        fr: 'Les bains du lac et de la rivière sont le grand rendez-vous de la saison : le Flussbad Oberer Letten, le Seebad Enge et le Frauenbad, réservé aux femmes, ouvrent tous à la baignade, et la Street Parade envahit le bassin du lac en août.',
        de: 'Die See- und Flussbäder sind das grosse Ereignis der Saison: Flussbad Oberer Letten, Seebad Enge und das Frauenbad, nur für Frauen, öffnen zum Schwimmen, und im August füllt die Street Parade das Seebecken.',
      },
      facts: [
        { value: '400 m', label: { en: 'free swimming channel in the Limmat at Flussbad Oberer Letten', fr: 'chenal de baignade gratuit dans la Limmat, au Flussbad Oberer Letten', de: 'kostenloser Schwimmkanal in der Limmat, im Flussbad Oberer Letten' } },
        { value: 'CHF 8', label: { en: 'entry to Seebad Enge, with 44 m lanes on Mythenquai', fr: 'entrée au Seebad Enge, avec des couloirs de 44 m sur le Mythenquai', de: 'Eintritt ins Seebad Enge, mit 44 m langen Bahnen am Mythenquai' } },
        { value: '8.8.2026', label: { en: 'Street Parade, around the lake basin', fr: 'Street Parade, autour du bassin du lac', de: 'Street Parade, rund um das Seebecken' } },
      ],
      note: {
        en: 'Sources: zuerich.com, checked 16 September 2026.',
        fr: 'Sources : zuerich.com, vérifiées le 16 septembre 2026.',
        de: 'Quellen: zuerich.com, geprüft am 16. September 2026.',
      },
    },
    winter: {
      title: { en: 'Winter in Zurich', fr: 'L’hiver à Zurich', de: 'Winter in Zürich' },
      base: {
        en: 'The lake and river baths close for the season and shorter museum and tower hours take over: the Grossmünster’s Karlsturm keeps to 10:00-17:00, and ZSG boats still sail from Bürkliplatz.',
        fr: 'Les bains du lac et de la rivière ferment pour la saison, et les horaires hivernaux plus courts des musées et de la tour prennent le relais : le Karlsturm du Grossmünster reste ouvert de 10h00 à 17h00, et les bateaux de la ZSG continuent de naviguer depuis Bürkliplatz.',
        de: 'Die See- und Flussbäder schliessen für die Saison, und die kürzeren Winteröffnungszeiten von Museen und Turm übernehmen: der Karlsturm des Grossmünsters bleibt von 10.00 bis 17.00 Uhr geöffnet, und die ZSG-Boote fahren weiterhin ab Bürkliplatz.',
      },
      facts: [
        { value: 'Nov → Feb', label: { en: 'Grossmünster tower open Monday to Saturday 10:00 to 17:00 (10:00 to 18:00 March to October)', fr: 'tour du Grossmünster ouverte du lundi au samedi de 10h00 à 17h00 (10h00 à 18h00 de mars à octobre)', de: 'Grossmünster-Turm Montag bis Samstag 10.00 bis 17.00 Uhr geöffnet (10.00 bis 18.00 Uhr von März bis Oktober)' } },
        { value: 'All year', label: { en: 'ZSG lake and river cruises keep running from Bürkliplatz', fr: 'les croisières ZSG sur le lac et la rivière continuent depuis Bürkliplatz', de: 'ZSG-Kreuzfahrten auf See und Fluss fahren weiterhin ab Bürkliplatz' } },
      ],
      note: {
        en: 'Sources: zuerich.com, zsg.ch, checked 16 September 2026.',
        fr: 'Sources : zuerich.com, zsg.ch, vérifiées le 16 septembre 2026.',
        de: 'Quellen: zuerich.com, zsg.ch, geprüft am 16. September 2026.',
      },
    },
  },
  doing: {
    title: { en: 'What to do in Zurich', fr: 'Que faire à Zurich', de: 'Was man in Zürich unternimmt' },
    intro: {
      en: 'Not a trail guide: named places and rides from Zürich Tourismus and the ZSG boat operator, checked on their own pages.',
      fr: 'Pas un guide de randonnée : des lieux et trajets nommés, repris de Zürich Tourismus et de l’exploitant de bateaux ZSG, vérifiés sur leurs propres pages.',
      de: 'Kein Wanderführer: benannte Orte und Fahrten von Zürich Tourismus und dem Schifffahrtsbetreiber ZSG, auf deren eigenen Seiten geprüft.',
    },
    groups: [
      {
        kind: 'walk',
        title: { en: 'Two short walks', fr: 'Deux courtes promenades', de: 'Zwei kurze Spaziergänge' },
        items: [
          {
            name: { en: 'The Planet Trail on the Uetliberg', fr: 'Le sentier des planètes sur l’Uetliberg', de: 'Der Planetenweg auf dem Uetliberg' },
            meta: { en: 'about 2 hours · scale 1 metre to 1 million km', fr: 'environ 2 heures · échelle 1 mètre pour 1 million de km', de: 'rund 2 Stunden · Massstab 1 Meter zu 1 Million km' },
            text: {
              en: 'An easy family walk from the sun to Pluto past the eight planets, laid out at a scale of one metre to one million kilometres.',
              fr: 'Une promenade familiale facile, du soleil à Pluton en passant par les huit planètes, à l’échelle d’un mètre pour un million de kilomètres.',
              de: 'Ein einfacher Familienspaziergang von der Sonne bis Pluto entlang der acht Planeten, im Massstab ein Meter zu einer Million Kilometer.',
            },
          },
          {
            name: { en: 'Niederdorf, the old town promenade', fr: 'Le Niederdorf, promenade de la vieille ville', de: 'Niederdorf, die Altstadtpromenade' },
            meta: { en: '597 m · about 3 minutes from the main station', fr: '597 m · environ 3 minutes depuis la gare centrale', de: '597 m · rund 3 Minuten vom Hauptbahnhof' },
            text: {
              en: 'A pedestrian route parallel to the Limmatquai, running through Niederdorf and Oberdorf as far as Bellevue.',
              fr: 'Un parcours piéton parallèle au Limmatquai, traversant le Niederdorf et l’Oberdorf jusqu’à Bellevue.',
              de: 'Eine Fussgängerroute parallel zum Limmatquai, durch Niederdorf und Oberdorf bis zum Bellevue.',
            },
          },
        ],
      },
      {
        kind: 'ride',
        title: { en: 'On the water', fr: 'Sur l’eau', de: 'Auf dem Wasser' },
        items: [
          {
            name: { en: 'The lake cruises', fr: 'Les croisières sur le lac', de: 'Die Seerundfahrten' },
            meta: { en: 'from Bürkliplatz · mini cruise 1 h to long cruise 4.5 h', fr: 'depuis Bürkliplatz · mini-croisière 1 h à grande croisière 4h30', de: 'ab Bürkliplatz · Mini-Rundfahrt 1 Std. bis grosse Rundfahrt 4.5 Std.' },
            text: {
              en: 'ZSG runs a mini cruise of 1 hour, a short cruise of 1.5 hours, a standard cruise of 2 hours, and a weekend upper-lake cruise of 3 hours, up to a long cruise of 4.5 hours with catering on board.',
              fr: 'La ZSG propose une mini-croisière d’1 heure, une courte croisière d’1h30, une croisière standard de 2 heures et, le week-end, une croisière du lac supérieur de 3 heures, jusqu’à une grande croisière de 4h30 avec restauration à bord.',
              de: 'Die ZSG bietet eine einstündige Mini-Rundfahrt, eine 1,5-stündige Kurzfahrt, eine zweistündige Standardfahrt und am Wochenende eine dreistündige Fahrt auf den oberen See, bis hin zu einer 4,5-stündigen langen Fahrt mit Bordverpflegung.',
            },
          },
          {
            name: { en: 'The Limmat river cruise', fr: 'La croisière sur la Limmat', de: 'Die Limmatschifffahrt' },
            meta: { en: 'from the Landesmuseum · about 1 hour', fr: 'depuis le Landesmuseum · environ 1 heure', de: 'ab dem Landesmuseum · rund 1 Stunde' },
            text: {
              en: 'A shorter cruise along the river itself, departing from beside the Swiss National Museum.',
              fr: 'Une croisière plus courte le long de la rivière elle-même, au départ du Musée national suisse.',
              de: 'Eine kürzere Fahrt entlang des Flusses selbst, mit Abfahrt beim Landesmuseum.',
            },
          },
        ],
      },
      {
        kind: 'local',
        title: { en: 'A tower and three baths', fr: 'Une tour et trois bains', de: 'Ein Turm und drei Bäder' },
        items: [
          {
            name: 'Grossmünster, Karlsturm',
            meta: { en: '187 steps · CHF 5, free with the Zürich Card', fr: '187 marches · 5 CHF, gratuit avec la Zürich Card', de: '187 Stufen · CHF 5, gratis mit der Zürich Card' },
            text: {
              en: 'The church stands on the graves of the city’s patron saints, Felix and Regula. The Karlsturm’s platform has six large panoramic windows, with stained glass by Sigmar Polke and choir windows by Augusto Giacometti inside.',
              fr: 'L’église se dresse sur les tombes des saints patrons de la ville, Félix et Régule. La plateforme du Karlsturm compte six grandes fenêtres panoramiques, avec des vitraux de Sigmar Polke et les vitraux du choeur d’Augusto Giacometti à l’intérieur.',
              de: 'Die Kirche steht auf den Gräbern der Stadtpatrone Felix und Regula. Die Plattform des Karlsturms hat sechs grosse Panoramafenster, im Innern Glasfenster von Sigmar Polke und Chorfenster von Augusto Giacometti.',
            },
          },
          {
            name: { en: 'The lake and river baths', fr: 'Les bains du lac et de la rivière', de: 'See- und Flussbäder' },
            meta: { en: 'Flussbad Oberer Letten, Seebad Enge, Frauenbad Stadthausquai', fr: 'Flussbad Oberer Letten, Seebad Enge, Frauenbad Stadthausquai', de: 'Flussbad Oberer Letten, Seebad Enge, Frauenbad Stadthausquai' },
            text: {
              en: 'Flussbad Oberer Letten gives free access to a 400 m channel in the Limmat. Seebad Enge, built in 1959/60, has 44 m lanes for CHF 8. The Frauenbad at Stadthausquai, women only since 1837 and rebuilt in 1888, becomes the Barfussbar three evenings a week, when men are admitted too.',
              fr: 'Le Flussbad Oberer Letten donne un accès gratuit à un chenal de 400 m dans la Limmat. Le Seebad Enge, construit en 1959/60, propose des couloirs de 44 m pour 8 CHF. Le Frauenbad de Stadthausquai, réservé aux femmes depuis 1837 et reconstruit en 1888, devient le Barfussbar trois soirs par semaine, où les hommes sont alors admis aussi.',
              de: 'Das Flussbad Oberer Letten bietet freien Zugang zu einem 400 m langen Kanal in der Limmat. Das 1959/60 erbaute Seebad Enge hat 44 m lange Bahnen für CHF 8. Das Frauenbad am Stadthausquai, seit 1837 nur für Frauen und 1888 neu gebaut, wird an drei Abenden pro Woche zur Barfussbar, an denen auch Männer zugelassen sind.',
            },
          },
        ],
      },
      {
        kind: 'table',
        title: { en: 'Where to eat', fr: 'Où manger', de: 'Wo essen' },
        items: [
          {
            name: 'Restaurant Bar Seebad Enge',
            meta: { en: 'Mythenquai 9', fr: 'Mythenquai 9', de: 'Mythenquai 9' },
            text: {
              en: 'Listed by Zürich Tourismus among the city’s bars and lounges, at the lake bath itself, with a sauna outside the swimming season.',
              fr: 'Répertorié par Zürich Tourismus parmi les bars et lounges de la ville, au bain du lac même, avec un sauna hors saison de baignade.',
              de: 'Von Zürich Tourismus unter den Bars und Lounges der Stadt gelistet, direkt beim Seebad, mit Sauna ausserhalb der Badesaison.',
            },
          },
          {
            name: 'Swiss Chuchi, at Hotel Adler',
            meta: { en: 'Rosengasse 10 · Mon-Fri 11:30-23:15, Sat-Sun 12:00-23:15', fr: 'Rosengasse 10 · lun-ven 11h30-23h15, sam-dim 12h00-23h15', de: 'Rosengasse 10 · Mo-Fr 11.30-23.15, Sa-So 12.00-23.15' },
            text: {
              en: 'The hotel states it began as the first fondue parlour in Zurich’s old town and now serves Swiss cheese and meat specialities.',
              fr: 'L’hôtel indique avoir débuté comme le premier restaurant de fondue de la vieille ville de Zurich, et sert aujourd’hui des spécialités suisses au fromage et à la viande.',
              de: 'Das Hotel gibt an, als erste Fondue-Stube der Zürcher Altstadt begonnen zu haben, und serviert heute Schweizer Käse- und Fleischspezialitäten.',
            },
          },
        ],
      },
    ],
    note: {
      en: 'Times, fares and figures come from Zürich Tourismus and ZSG, checked on 16 September 2026. We publish no ratings and no route descriptions: check conditions on the spot before you set off.',
      fr: 'Horaires, tarifs et chiffres proviennent de Zürich Tourismus et de la ZSG, vérifiés le 16 septembre 2026. Nous ne publions ni notes ni descriptifs d’itinéraires : renseignez-vous sur place avant de partir.',
      de: 'Zeiten, Tarife und Zahlen stammen von Zürich Tourismus und der ZSG, geprüft am 16. September 2026. Wir veröffentlichen keine Bewertungen und keine Routenbeschreibungen: Erkundigen Sie sich vor Ort, bevor Sie losgehen.',
    },
  },
  faq: [
    {
      q: { en: 'How do I get from the airport into town?', fr: 'Comment rejoindre le centre depuis l’aéroport ?', de: 'Wie kommt man vom Flughafen in die Stadt?' },
      a: {
        en: 'By train in 10 to 15 minutes, every 5 to 10 minutes from 05:00 to midnight, CHF 7 single or CHF 14 for a day pass, free with the Zürich Card. Tram 10 takes about 35 minutes, a taxi CHF 45 to 70.',
        fr: 'En train en 10 à 15 minutes, toutes les 5 à 10 minutes de 05h00 à minuit, 7 CHF le billet simple ou 14 CHF la carte journalière, gratuit avec la Zürich Card. Le tram 10 met environ 35 minutes, un taxi coûte 45 à 70 CHF.',
        de: 'Mit dem Zug in 10 bis 15 Minuten, alle 5 bis 10 Minuten von 05.00 Uhr bis Mitternacht, CHF 7 für ein Einzelbillett oder CHF 14 für eine Tageskarte, gratis mit der Zürich Card. Tram 10 braucht rund 35 Minuten, ein Taxi CHF 45 bis 70.',
      },
    },
    {
      q: { en: 'Can you really swim in the city?', fr: 'Peut-on vraiment se baigner en ville ?', de: 'Kann man in der Stadt wirklich schwimmen?' },
      a: {
        en: 'Yes. The Flussbad Oberer Letten has a 400 m swimming channel in the Limmat with free entry, less than a kilometre from the main station; Seebad Enge on Mythenquai has 44 m lanes and charges CHF 8.',
        fr: 'Oui. Le Flussbad Oberer Letten offre un chenal de baignade de 400 m dans la Limmat, gratuit, à moins d’un kilomètre de la gare centrale ; le Seebad Enge, sur le Mythenquai, propose des couloirs de 44 m pour 8 CHF.',
        de: 'Ja. Das Flussbad Oberer Letten hat einen 400 m langen Schwimmkanal in der Limmat mit freiem Eintritt, weniger als einen Kilometer vom Hauptbahnhof entfernt; das Seebad Enge am Mythenquai hat 44 m lange Bahnen und kostet CHF 8.',
      },
    },
    {
      q: { en: 'What is the Frauenbad?', fr: 'Qu’est-ce que le Frauenbad ?', de: 'Was ist das Frauenbad?' },
      a: {
        en: 'An art nouveau open-air bath for women at Stadthausquai, first built in 1837 and rebuilt in 1888, which turns into the Barfussbar three evenings a week, when men are also admitted.',
        fr: 'Un bain en plein air Art nouveau réservé aux femmes, sur le Stadthausquai, construit en 1837 puis reconstruit en 1888, qui devient le Barfussbar trois soirs par semaine, où les hommes sont alors admis aussi.',
        de: 'Ein Jugendstil-Freibad für Frauen am Stadthausquai, erstmals 1837 erbaut und 1888 neu gebaut, das an drei Abenden pro Woche zur Barfussbar wird, an denen auch Männer zugelassen sind.',
      },
    },
    {
      q: { en: 'Is the Zürich Card worth it?', fr: 'La Zürich Card en vaut-elle la peine ?', de: 'Lohnt sich die Zürich Card?' },
      a: {
        en: 'It gives unlimited travel on the city network for 24 or 72 hours plus the airport transfer, and free entry to the Grossmünster tower and the Swiss National Museum, which otherwise cost CHF 5 and CHF 13.',
        fr: 'Elle donne un accès illimité au réseau de transport urbain pendant 24 ou 72 heures, transfert depuis l’aéroport inclus, ainsi que l’entrée gratuite à la tour du Grossmünster et au Musée national suisse, qui coûtent sinon 5 et 13 CHF.',
        de: 'Sie ermöglicht unbegrenzte Fahrten auf dem städtischen Netz für 24 oder 72 Stunden inklusive Flughafentransfer, sowie freien Eintritt zum Grossmünster-Turm und zum Landesmuseum, die sonst CHF 5 und CHF 13 kosten.',
      },
    },
    {
      q: { en: 'What happens at Sechseläuten?', fr: 'Que se passe-t-il à Sechseläuten ?', de: 'Was passiert an Sechseläuten?' },
      a: {
        en: 'On the Monday after the vernal equinox, around 3500 guild members parade from 15:00 and the Böögg, a 3.40 m snowman packed with fireworks, is burned at 18:00. In 2026 it falls on 20 April.',
        fr: 'Le lundi suivant l’équinoxe de printemps, environ 3500 membres des corporations défilent dès 15h00 et le Böögg, un bonhomme de neige de 3,40 m bourré de feux d’artifice, est brûlé à 18h00. En 2026, la date tombe le 20 avril.',
        de: 'Am Montag nach der Frühlings-Tagundnachtgleiche ziehen rund 3500 Zünfter ab 15.00 Uhr durch die Stadt, und um 18.00 Uhr wird der Böögg verbrannt, ein 3,40 m grosser, mit Feuerwerk gefüllter Schneemann. 2026 fällt der Tag auf den 20. April.',
      },
    },
  ],
  neighbours: ['lucerne', 'bern', 'appenzell'],
}
