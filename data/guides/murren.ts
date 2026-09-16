import type { DestinationGuide } from '../types'

// Sources in data/SOURCES-oberland.md (checked 16/09/2026). No number without a source.
export const murren: DestinationGuide = {
  slug: 'murren',
  stamp: 'murren',
  updated: '2026-09-16',
  meta: {
    title: { en: 'Where to stay in Mürren: car-free village above Lauterbrunnen', fr: 'Où dormir à Mürren : village sans voiture au-dessus de Lauterbrunnen', de: 'Wo übernachten in Mürren: autofreies Dorf über Lauterbrunnen' },
    description: {
      en: 'A terrace village with no road at all, reached by cable car or mountain train. Where to sleep between the two stations, hotels with dated prices, the Schilthorn fare and what runs when.',
      fr: 'Un village en terrasse sans aucune route, accessible en téléphérique ou en train de montagne. Où dormir entre les deux stations, hôtels avec prix datés, le tarif du Schilthorn et ce qui fonctionne quand.',
      de: 'Ein Terrassendorf ganz ohne Strasse, erreichbar mit Seilbahn oder Bergbahn. Wo man zwischen den beiden Stationen wohnt, Hotels mit datierten Preisen, der Schilthorn-Tarif und was wann fährt.',
    },
  },
  eyebrow: { en: 'Bernese Oberland · Lauterbrunnen', fr: 'Oberland bernois · Lauterbrunnen', de: 'Berner Oberland · Lauterbrunnen' },
  title: { en: 'Where to stay in Mürren', fr: 'Où dormir à Mürren', de: 'Wo übernachten in Mürren' },
  intro: {
    en: 'Mürren has 432 residents, about 1495 tourist beds and no road: you arrive by cable car and mountain train from Lauterbrunnen, or by bus to Stechelberg and the cable car up through Gimmelwald. Its own tourist office calls it the highest permanently inhabited village in the canton of Bern, and the Schilthorn cable car leaves from the village itself.',
    fr: 'Mürren compte 432 habitants, environ 1495 lits touristiques et aucune route : on arrive en téléphérique puis en train de montagne depuis Lauterbrunnen, ou en bus jusqu’à Stechelberg puis en téléphérique par Gimmelwald. Son office du tourisme le présente comme le plus haut village habité à l’année du canton de Berne, et le téléphérique du Schilthorn part du village même.',
    de: 'Mürren hat 432 Einwohnerinnen und Einwohner, rund 1495 Gästebetten und keine Strasse: Man kommt mit Seilbahn und Bergbahn ab Lauterbrunnen oder mit dem Bus nach Stechelberg und der Seilbahn über Gimmelwald. Das eigene Tourismusbüro nennt es das höchstgelegene ganzjährig bewohnte Dorf im Kanton Bern, und die Schilthornbahn fährt im Dorf selbst ab.',
  },
  quickAnswer: {
    en: 'Stay in Mürren for a village with no road at all and the Schilthorn cable car at the end of the lane, 20 minutes above Lauterbrunnen. If you want shops, a bigger choice of hotels and a faster way to the Jungfraujoch, Wengen or Grindelwald suit better.',
    fr: 'Dormez à Mürren pour un village sans aucune route, avec le téléphérique du Schilthorn au bout de la rue, à 20 minutes au-dessus de Lauterbrunnen. Si vous voulez des commerces, plus de choix d’hôtels et un accès plus rapide au Jungfraujoch, Wengen ou Grindelwald conviennent mieux.',
    de: 'Übernachten Sie in Mürren für ein Dorf ganz ohne Strasse, mit der Schilthornbahn am Ende der Gasse, 20 Minuten über Lauterbrunnen. Wer Läden, mehr Hotelauswahl und einen schnelleren Weg aufs Jungfraujoch will, ist in Wengen oder Grindelwald besser aufgehoben.',
  },
  snapshot: {
    why: {
      en: 'No road, 432 residents, and the cable car to Piz Gloria at 2970 m leaving from the village. The Allmendhubel funicular starts in the centre.',
      fr: 'Aucune route, 432 habitants, et le téléphérique du Piz Gloria à 2970 m qui part du village. Le funiculaire de l’Allmendhubel démarre au centre.',
      de: 'Keine Strasse, 432 Einwohner und die Bahn zum Piz Gloria auf 2970 m ab dem Dorf. Die Allmendhubelbahn startet im Zentrum.',
    },
    where: {
      en: 'The village runs between two stations: the mountain train from Grütschalp at one end, the Schilthorn cable car at the other, the sports centre and most restaurants in between.',
      fr: 'Le village s’étire entre deux stations : le train de montagne de Grütschalp d’un côté, le téléphérique du Schilthorn de l’autre, le centre sportif et la plupart des restaurants entre les deux.',
      de: 'Das Dorf liegt zwischen zwei Stationen: die Bergbahn von Grütschalp am einen Ende, die Schilthornbahn am anderen, dazwischen Sportzentrum und die meisten Restaurants.',
    },
    watch: {
      en: 'Getting here is always two legs, and each has maintenance breaks: the Schilthorn cable car runs a replacement bus from 19 to 30 October 2026.',
      fr: 'On arrive toujours en deux étapes, et chacune a ses coupures d’entretien : le téléphérique du Schilthorn passe en bus de remplacement du 19 au 30 octobre 2026.',
      de: 'Die Anreise geht immer über zwei Etappen, und jede hat Revisionspausen: die Schilthornbahn fährt vom 19. bis 30. Oktober 2026 mit Ersatzbus.',
    },
  },
  stats: [
    { value: '1638', label: { en: 'metres above sea level, as the cable car company gives it', fr: "mètres d'altitude, selon la compagnie du téléphérique", de: 'Meter über Meer, laut Bahngesellschaft' } },
    { value: '432', label: { en: 'residents at the end of 2023', fr: 'habitants fin 2023', de: 'Einwohner Ende 2023' } },
    { value: '53', label: { en: 'minutes from Interlaken Ost', fr: 'minutes depuis Interlaken Ost', de: 'Minuten ab Interlaken Ost' } },
  ],
  hero: {
    photo: '/photos/murren-hero.jpg',
    caption: { en: 'Mürren on its terrace above the Lauterbrunnen valley.', fr: 'Mürren sur sa terrasse au-dessus de la vallée de Lauterbrunnen.', de: 'Mürren auf seiner Terrasse über dem Lauterbrunnental.' },
    credit: { author: 'Chensiyuan', license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/', source: 'https://commons.wikimedia.org/wiki/File:1_M%C3%BCrren_2022.jpg' },
  },
  sectors: [
    {
      title: { en: 'By the mountain train station', fr: 'Près de la gare du train de montagne', de: 'Bei der Bergbahnstation' },
      walk: { en: 'North end of the village', fr: 'Extrémité nord du village', de: 'Nordende des Dorfes' },
      text: {
        en: 'Where the train from Grütschalp arrives, so the shortest transfer if you come up from Lauterbrunnen by cable car. The village lane starts here.',
        fr: 'Là où arrive le train de Grütschalp, donc le transfert le plus court si vous montez de Lauterbrunnen en téléphérique. La rue du village part d’ici.',
        de: 'Hier kommt die Bahn von Grütschalp an, also der kürzeste Umstieg, wenn Sie mit der Seilbahn ab Lauterbrunnen hochfahren. Hier beginnt die Dorfgasse.',
      },
      points: [
        { en: 'About 20 minutes from Lauterbrunnen by this route', fr: 'Environ 20 minutes depuis Lauterbrunnen par cette voie', de: 'Rund 20 Minuten ab Lauterbrunnen auf diesem Weg' },
        { en: 'Luggage comes up on the same train', fr: 'Les bagages montent par le même train', de: 'Das Gepäck fährt mit demselben Zug hinauf' },
      ],
    },
    {
      title: { en: 'The centre and the sports centre', fr: 'Le centre et le centre sportif', de: 'Zentrum und Sportzentrum' },
      walk: { en: 'Between the two stations', fr: 'Entre les deux stations', de: 'Zwischen den beiden Stationen' },
      text: {
        en: 'The Alpine Sports Centre at Höhematte, the tourist office and most restaurants. The Allmendhubel funicular leaves from here, four minutes to 1907 m.',
        fr: 'Le centre sportif alpin à Höhematte, l’office du tourisme et la plupart des restaurants. Le funiculaire de l’Allmendhubel part d’ici, quatre minutes jusqu’à 1907 m.',
        de: 'Das Alpine Sportzentrum an der Höhematte, das Tourismusbüro und die meisten Restaurants. Die Allmendhubelbahn fährt hier ab, vier Minuten auf 1907 m.',
      },
      points: [
        { en: 'Indoor pool of 25 by 11 metres at the sports centre', fr: 'Piscine intérieure de 25 sur 11 mètres au centre sportif', de: 'Hallenbad von 25 auf 11 Meter im Sportzentrum' },
        { en: 'Funicular to Allmendhubel in 4 minutes', fr: 'Funiculaire de l’Allmendhubel en 4 minutes', de: 'Standseilbahn auf den Allmendhubel in 4 Minuten' },
      ],
    },
    {
      title: { en: 'By the Schilthorn cable car', fr: 'Près du téléphérique du Schilthorn', de: 'Bei der Schilthornbahn' },
      walk: { en: 'South end of the village', fr: 'Extrémité sud du village', de: 'Südende des Dorfes' },
      text: {
        en: 'The base of the cable car to Birg and Piz Gloria, and where the Stechelberg route arrives. First on the mountain in the morning, quiet in the evening.',
        fr: 'Le pied du téléphérique vers Birg et le Piz Gloria, et le point d’arrivée de la voie par Stechelberg. Premier en montagne le matin, calme le soir.',
        de: 'Der Fuss der Bahn nach Birg und zum Piz Gloria, und die Ankunft der Route über Stechelberg. Morgens als Erste am Berg, abends ruhig.',
      },
      points: [
        { en: 'Cable cars every 20 minutes, 09:00 to 17:00 in the published schedule', fr: 'Téléphérique toutes les 20 minutes, de 9h00 à 17h00 selon l’horaire publié', de: 'Bahnen alle 20 Minuten, 09:00 bis 17:00 laut publiziertem Fahrplan' },
        { en: 'The Stechelberg section is the steepest aerial cableway in the world', fr: 'Le tronçon de Stechelberg est le téléphérique le plus raide du monde', de: 'Die Sektion ab Stechelberg ist die steilste Luftseilbahn der Welt' },
      ],
    },
  ],
  hotels: [
    {
      slug: 'murren-hotel-regina',
      name: 'Hotel Regina',
      url: 'https://www.reginamuerren.ch/',
      photo: '/photos/hotels/murren-hotel-regina.jpg',
      sector: { en: 'Between the two stations', fr: 'Entre les deux stations', de: 'Zwischen den beiden Stationen' },
      facts: [
        { en: 'Opened as a guest house in 1896, member of Swiss Historic Hotels', fr: 'Ouvert comme pension en 1896, membre des Swiss Historic Hotels', de: 'Als Pension 1896 eröffnet, Mitglied der Swiss Historic Hotels' },
        { en: '10 minutes on foot from the mountain train, 5 from the cable car', fr: 'À 10 minutes à pied du train de montagne, 5 du téléphérique', de: '10 Gehminuten von der Bergbahn, 5 von der Seilbahn' },
        { en: 'Free access to the village pool, seasonal opening', fr: 'Accès libre à la piscine du village, ouverture saisonnière', de: 'Freier Eintritt ins Dorfbad, saisonal geöffnet' },
      ],
    },
    {
      slug: 'murren-hotel-jungfrau',
      name: 'Hotel Jungfrau',
      url: 'https://hoteljungfrau.ch/en/',
      photo: '/photos/hotels/murren-hotel-jungfrau.jpg',
      sector: { en: 'Centre, by the funicular', fr: 'Centre, près du funiculaire', de: 'Zentrum, bei der Standseilbahn' },
      facts: [
        { en: 'Allmendhubel funicular 200 m away, mountain train 400 m', fr: 'Funiculaire de l’Allmendhubel à 200 m, train de montagne à 400 m', de: 'Allmendhubelbahn 200 m entfernt, Bergbahn 400 m' },
        { en: 'Free entry to the sports centre pool', fr: 'Entrée libre à la piscine du centre sportif', de: 'Gratis Eintritt ins Hallenbad des Sportzentrums' },
        { en: 'Bar built into an old Schilthorn cable car', fr: 'Bar aménagé dans une ancienne cabine du Schilthorn', de: 'Bar in einer alten Schilthorn-Kabine' },
      ],
    },
    {
      slug: 'murren-hotel-alpenruh',
      name: 'Hotel Alpenruh',
      url: 'https://alpenruh-muerren.ch/en/Offer/Hotel',
      photo: '/photos/hotels/murren-hotel-alpenruh.jpg',
      sector: { en: 'By the Schilthorn cable car', fr: 'Près du téléphérique du Schilthorn', de: 'Bei der Schilthornbahn' },
      facts: [
        { en: '26 rooms, 21 with a balcony facing the Eiger, Mönch and Jungfrau', fr: '26 chambres, 21 avec balcon face à l’Eiger, au Mönch et à la Jungfrau', de: '26 Zimmer, 21 mit Balkon gegen Eiger, Mönch und Jungfrau' },
        { en: 'Next to the cable car station', fr: 'À côté de la station du téléphérique', de: 'Direkt neben der Seilbahnstation' },
        { en: 'First house on this site in 1900, rebuilt after the 1919 fire', fr: 'Première maison sur ce site en 1900, reconstruite après l’incendie de 1919', de: 'Erstes Haus an dieser Stelle 1900, nach dem Brand 1919 neu gebaut' },
      ],
    },
    {
      slug: 'murren-hotel-blumental',
      name: 'Hotel Blumental',
      url: 'https://blumental-muerren.ch/en/Offer/Hotel',
      photo: '/photos/hotels/murren-hotel-blumental.jpg',
      sector: { en: 'Village centre', fr: 'Centre du village', de: 'Dorfzentrum' },
      facts: [
        { en: '20 rooms plus 6 in the chalet next door', fr: '20 chambres et 6 de plus dans le chalet voisin', de: '20 Zimmer und 6 weitere im Chalet nebenan' },
        { en: 'Restaurant and the Bliemli Chäller cellar', fr: 'Restaurant et cave Bliemli Chäller', de: 'Restaurant und Bliemli Chäller' },
        { en: 'Annual closure announced from 19 October to 18 December 2026', fr: 'Fermeture annuelle annoncée du 19 octobre au 18 décembre 2026', de: 'Betriebsferien angekündigt vom 19. Oktober bis 18. Dezember 2026' },
      ],
    },
    {
      slug: 'murren-hotel-eiger',
      name: 'Eiger Mürren Swiss Quality Hotel',
      url: 'https://hoteleiger.com/en/',
      photo: '/photos/hotels/murren-hotel-eiger.jpg',
      sector: { en: 'By the mountain train station', fr: 'Près de la gare du train de montagne', de: 'Bei der Bergbahnstation' },
      facts: [
        { en: 'Sauna world and indoor pool', fr: 'Espace sauna et piscine intérieure', de: 'Saunawelt und Hallenbad' },
        { en: 'Restaurant and bar with a sun terrace', fr: 'Restaurant et bar avec terrasse au soleil', de: 'Restaurant und Bar mit Sonnenterrasse' },
      ],
    },
    {
      slug: 'murren-hotel-palace',
      name: 'Hotel Mürren Palace',
      url: 'https://hotel-muerren-palace.ch/en/muerren-palace/',
      photo: '/photos/hotels/murren-hotel-palace.jpg',
      sector: { en: 'Highest point of the terrace', fr: 'Point le plus haut de la terrasse', de: 'Höchster Punkt der Terrasse' },
      facts: [
        { en: 'Standing on the terrace since 1874', fr: 'Sur la terrasse depuis 1874', de: 'Seit 1874 auf der Terrasse' },
        { en: 'Renovation with a new wing started in 2024', fr: 'Rénovation avec une nouvelle aile commencée en 2024', de: 'Renovation mit neuem Anbau seit 2024' },
      ],
    },
  ],
  hotelsNote: {
    en: 'Facts taken from each hotel’s own website on 16 September 2026. No ratings or reviews on this guide.',
    fr: 'Faits relevés sur le site de chaque hôtel le 16 septembre 2026. Aucune note ni aucun avis sur ce guide.',
    de: 'Fakten von der Website des jeweiligen Hotels, Stand 16. September 2026. Keine Bewertungen oder Rezensionen.',
  },
  pass: {
    title: { en: 'Swiss Travel Pass, up to Piz Gloria', fr: 'Swiss Travel Pass, jusqu’au Piz Gloria', de: 'Swiss Travel Pass, hinauf zum Piz Gloria' },
    rows: [
      { section: { en: 'Interlaken Ost to Lauterbrunnen', fr: 'Interlaken Ost → Lauterbrunnen', de: 'Interlaken Ost → Lauterbrunnen' }, coverage: 'included' },
      { section: { en: 'Lauterbrunnen to Mürren, either route', fr: 'Lauterbrunnen → Mürren, par les deux voies', de: 'Lauterbrunnen → Mürren, beide Wege' }, coverage: 'included' },
      { section: { en: 'Mürren to Birg and Schilthorn', fr: 'Mürren → Birg et Schilthorn', de: 'Mürren → Birg und Schilthorn' }, coverage: 'discount25' },
    ],
    fare: {
      label: { en: 'Mürren to Schilthorn, return, adult fare valid to 12 December 2026', fr: 'Mürren ⇄ Schilthorn, aller-retour, tarif adulte valable jusqu’au 12 décembre 2026', de: 'Mürren ⇄ Schilthorn retour, Erwachsenentarif gültig bis 12. Dezember 2026' },
      without: '91.40',
      with: '45.70',
    },
    note: {
      en: 'Adult return to the summit. On this cable car the Swiss Travel Pass, the Half Fare Card and the GA travelcard all pay CHF 45.70 instead of CHF 91.40, so half price rather than the 25% that applies on the Jungfraujoch line. The Berner Oberland Pass travels free. Fares published by the operator and valid to 12 December 2026, checked on 16 September 2026.',
      fr: "Aller-retour adulte jusqu'au sommet. Sur ce téléphérique, le Swiss Travel Pass, l'abonnement demi-tarif et l'AG paient tous CHF 45.70 au lieu de CHF 91.40, soit la moitié, et non les 25 % de la ligne du Jungfraujoch. Le Berner Oberland Pass voyage gratuitement. Tarifs publiés par l'exploitant, valables jusqu'au 12 décembre 2026, vérifiés le 16 septembre 2026.",
      de: 'Erwachsenen-Retour auf den Gipfel. Auf dieser Bahn zahlen Swiss Travel Pass, Halbtax und GA gleichermassen CHF 45.70 statt CHF 91.40, also den halben Preis und nicht die 25 % der Jungfraujoch-Linie. Der Berner Oberland Pass fährt gratis. Vom Betreiber publizierte Tarife, gültig bis 12. Dezember 2026, geprüft am 16. September 2026.',
    },
  },
  calendar: {
    title: { en: 'What runs, month by month', fr: 'Ce qui fonctionne, mois par mois', de: 'Was fährt, Monat für Monat' },
    rows: [
      { name: { en: 'Schilthorn cable car', fr: 'Téléphérique du Schilthorn', de: 'Schilthornbahn' }, months: ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'r', 'o', 'o'] },
      { name: { en: 'Cable car to Grütschalp for the train', fr: 'Téléphérique de Grütschalp pour le train', de: 'Seilbahn Grütschalp für die Bahn' }, months: ['o', 'o', 'o', 'r', 'x', 'x', 'r', 'o', 'o', 'r', 'o', 'o'] },
      { name: { en: 'Allmendhubel funicular', fr: 'Funiculaire de l’Allmendhubel', de: 'Allmendhubelbahn' }, months: ['o', 'o', 'o', 'r', 'x', 'r', 'o', 'o', 'o', 'r', 'x', 'r'] },
      { name: { en: 'Mürren to Schilthorn ski area', fr: 'Domaine skiable Mürren-Schilthorn', de: 'Skigebiet Mürren-Schilthorn' }, months: ['o', 'o', 'o', 'r', 'x', 'x', 'x', 'x', 'x', 'x', 'r', 'o'] },
    ],
    note: {
      en: 'Ski area 2026/27: 21 November 2026 to 2 May 2027. Allmendhubel funicular: summer from mid June to mid October, winter from mid December to early April. Schilthorn cable car: replacement bus from 19 to 30 October 2026 and from 26 April to 7 May 2027. Grütschalp cable car: replacement works announced from 13 April to 10 July 2026, in which case use the Stechelberg route. Checked 16 September 2026.',
      fr: "Domaine skiable 2026/27 : du 21 novembre 2026 au 2 mai 2027. Funiculaire de l'Allmendhubel : été de mi-juin à mi-octobre, hiver de mi-décembre à début avril. Téléphérique du Schilthorn : bus de remplacement du 19 au 30 octobre 2026 et du 26 avril au 7 mai 2027. Téléphérique de Grütschalp : travaux annoncés du 13 avril au 10 juillet 2026, passez alors par Stechelberg. Vérifié le 16 septembre 2026.",
      de: 'Skigebiet 2026/27: 21. November 2026 bis 2. Mai 2027. Allmendhubelbahn: Sommer von Mitte Juni bis Mitte Oktober, Winter von Mitte Dezember bis Anfang April. Schilthornbahn: Ersatzbus vom 19. bis 30. Oktober 2026 und vom 26. April bis 7. Mai 2027. Grütschalpbahn: Arbeiten angekündigt vom 13. April bis 10. Juli 2026, dann über Stechelberg fahren. Geprüft am 16. September 2026.',
    },
  },
  practical: {
    title: { en: 'Car-free, in practice', fr: 'Sans voiture, en pratique', de: 'Autofrei, in der Praxis' },
    items: [
      {
        title: { en: 'Leave the car below', fr: 'Laisser la voiture en bas', de: 'Das Auto unten lassen' },
        text: {
          en: 'Park in the multi-storey car park below Lauterbrunnen station, or at Stechelberg at the foot of the Schilthorn cable car.',
          fr: 'Garez-vous dans le parking couvert sous la gare de Lauterbrunnen, ou à Stechelberg au pied du téléphérique du Schilthorn.',
          de: 'Parkieren Sie im Parkhaus unter dem Bahnhof Lauterbrunnen oder in Stechelberg am Fuss der Schilthornbahn.',
        },
      },
      {
        title: { en: 'Route one, about 20 minutes', fr: 'Voie 1, environ 20 minutes', de: 'Weg 1, rund 20 Minuten' },
        text: {
          en: 'Cable car from Lauterbrunnen to Grütschalp, then the mountain train along the terrace to Mürren.',
          fr: 'Téléphérique de Lauterbrunnen à Grütschalp, puis le train de montagne le long de la terrasse jusqu’à Mürren.',
          de: 'Seilbahn von Lauterbrunnen nach Grütschalp, dann die Bergbahn der Terrasse entlang nach Mürren.',
        },
      },
      {
        title: { en: 'Route two, about 30 minutes', fr: 'Voie 2, environ 30 minutes', de: 'Weg 2, rund 30 Minuten' },
        text: {
          en: 'PostBus from Lauterbrunnen to Stechelberg, then the cable car up through Gimmelwald. The way in when the Grütschalp line is closed.',
          fr: 'Car postal de Lauterbrunnen à Stechelberg, puis le téléphérique par Gimmelwald. La voie d’accès quand la ligne de Grütschalp est fermée.',
          de: 'Postauto von Lauterbrunnen nach Stechelberg, dann die Seilbahn über Gimmelwald. Der Weg, wenn die Linie Grütschalp geschlossen ist.',
        },
      },
      {
        title: { en: 'In the village', fr: 'Dans le village', de: 'Im Dorf' },
        text: {
          en: 'On foot from end to end. From Interlaken Ost the whole trip takes 53 minutes.',
          fr: 'À pied d’un bout à l’autre. Depuis Interlaken Ost, le trajet complet prend 53 minutes.',
          de: 'Zu Fuss von einem Ende zum anderen. Ab Interlaken Ost dauert die ganze Reise 53 Minuten.',
        },
      },
    ],
  },
  seasons: {
    winter: {
      title: { en: 'Winter in Mürren', fr: 'L’hiver à Mürren', de: 'Winter in Mürren' },
      base: {
        en: 'The ski area starts above the village and the toboggan run ends in it. Sleep near the Schilthorn cable car to be first up, or by the sports centre if you swim more than you ski.',
        fr: 'Le domaine skiable commence au-dessus du village et la piste de luge y redescend. Dormez près du téléphérique du Schilthorn pour monter en premier, ou près du centre sportif si vous nagez plus que vous ne skiez.',
        de: 'Das Skigebiet beginnt über dem Dorf und die Schlittelbahn endet darin. Nah bei der Schilthornbahn wohnen, um als Erste oben zu sein, oder beim Sportzentrum, wenn Sie mehr schwimmen als Ski fahren.',
      },
      facts: [
        { value: '51 km', label: { en: 'of pistes in the Mürren to Schilthorn ski area', fr: 'de pistes sur le domaine Mürren-Schilthorn', de: 'Pisten im Skigebiet Mürren-Schilthorn' } },
        { value: '21.11 → 2.5', label: { en: 'ski season 2026/27', fr: 'saison de ski 2026/27', de: 'Skisaison 2026/27' } },
        { value: '3 km', label: { en: 'toboggan run from Allmendhubel down to the village', fr: 'de piste de luge de l’Allmendhubel jusqu’au village', de: 'Schlittelbahn vom Allmendhubel ins Dorf' } },
        { value: '20-23.1', label: { en: 'Inferno races 2027, capped at 1850 skiers', fr: 'courses Inferno 2027, limitées à 1850 skieurs', de: 'Inferno-Rennen 2027, auf 1850 Fahrer begrenzt' } },
      ],
      note: {
        en: 'Sources: muerren.swiss, schilthorn.ch, inferno-muerren.ch, checked 16 September 2026.',
        fr: 'Sources : muerren.swiss, schilthorn.ch, inferno-muerren.ch, vérifiées le 16 septembre 2026.',
        de: 'Quellen: muerren.swiss, schilthorn.ch, inferno-muerren.ch, geprüft am 16. September 2026.',
      },
    },
    summer: {
      title: { en: 'Summer in Mürren', fr: 'L’été à Mürren', de: 'Sommer in Mürren' },
      base: {
        en: 'Walks leave from the funicular in the middle of the village, and the pool is next door. Anywhere on the terrace works: the village is one lane long.',
        fr: 'Les randonnées partent du funiculaire au milieu du village, et la piscine est juste à côté. N’importe quel point de la terrasse convient : le village tient en une rue.',
        de: 'Die Wanderungen starten bei der Standseilbahn mitten im Dorf, das Hallenbad liegt nebenan. Auf der Terrasse passt jede Lage: das Dorf ist eine Gasse lang.',
      },
      facts: [
        { value: '1907 m', label: { en: 'Allmendhubel, four minutes up by funicular', fr: 'Allmendhubel, quatre minutes de funiculaire', de: 'Allmendhubel, vier Minuten mit der Standseilbahn' } },
        { value: '2970 m', label: { en: 'Piz Gloria at the top of the Schilthorn cable car', fr: 'Piz Gloria au sommet du téléphérique du Schilthorn', de: 'Piz Gloria am Ende der Schilthornbahn' } },
        { value: '25 × 11 m', label: { en: 'indoor pool at the Alpine Sports Centre', fr: 'piscine intérieure du centre sportif alpin', de: 'Hallenbad im Alpinen Sportzentrum' } },
        { value: '1495', label: { en: 'tourist beds in the whole village', fr: 'lits touristiques dans tout le village', de: 'Gästebetten im ganzen Dorf' } },
      ],
      note: {
        en: 'The funicular runs in summer from mid June to mid October. Sources: muerren.swiss, jungfrauregion.swiss, schilthorn.ch, checked 16 September 2026.',
        fr: 'Le funiculaire fonctionne l’été de mi-juin à mi-octobre. Sources : muerren.swiss, jungfrauregion.swiss, schilthorn.ch, vérifiées le 16 septembre 2026.',
        de: 'Die Standseilbahn fährt im Sommer von Mitte Juni bis Mitte Oktober. Quellen: muerren.swiss, jungfrauregion.swiss, schilthorn.ch, geprüft am 16. September 2026.',
      },
    },
  },
  doing: {
    title: { en: 'What to do in Mürren', fr: 'Que faire à Mürren', de: 'Was man in Mürren unternimmt' },
    intro: {
      en: 'Not a trail guide: a handful of named places from the Schilthorn company and the tourist office, to see what a day here looks like.',
      fr: 'Pas un guide de randonnée : une poignée de lieux nommés, repris de la compagnie du Schilthorn et de l’office du tourisme, pour voir à quoi ressemble une journée ici.',
      de: 'Kein Wanderführer: eine Handvoll benannter Orte von der Schilthornbahn und vom Tourismusbüro, damit Sie sehen, wie ein Tag hier aussieht.',
    },
    groups: [
      {
        kind: 'walk',
        title: { en: 'Two signposted walks from the village', fr: 'Deux marches balisées depuis le village', de: 'Zwei markierte Wanderungen ab dem Dorf' },
        items: [
          {
            name: 'Northface Trail',
            meta: { en: '2 h 30 · medium · 12 information boards', fr: '2 h 30 · moyen · 12 panneaux d’information', de: '2 Std. 30 · mittel · 12 Infotafeln' },
            text: {
              en: 'A loop that leaves from the Schilthorn cable car station in Mürren and comes back down from Allmendhubel by funicular. The Schilthorn company gives 2 h 30 at medium difficulty, with twelve panels on the history of these mountains.',
              fr: 'Une boucle qui part de la station du téléphérique du Schilthorn à Mürren et redescend de l’Allmendhubel en funiculaire. La compagnie du Schilthorn annonce 2 h 30 de difficulté moyenne, avec douze panneaux sur l’histoire de ces montagnes.',
              de: 'Eine Runde ab der Schilthornbahn-Station in Mürren, zurück vom Allmendhubel mit der Standseilbahn. Die Schilthornbahn gibt 2 Std. 30 bei mittlerer Schwierigkeit an, mit zwölf Tafeln zur Geschichte dieser Berge.',
            },
          },
          {
            name: { en: 'Mountain View Trail, Allmendhubel to Grütschalp', fr: 'Mountain View Trail, de l’Allmendhubel à Grütschalp', de: 'Mountain View Trail, Allmendhubel bis Grütschalp' },
            meta: { en: '2 h · medium', fr: '2 h · moyen', de: '2 Std. · mittel' },
            text: {
              en: 'Alpine meadows and forest facing the Eiger, Mönch and Jungfrau, ending at Grütschalp where the mountain train takes you back to Mürren.',
              fr: 'Alpages et forêt face à l’Eiger, au Mönch et à la Jungfrau, avec arrivée à Grütschalp où le train de montagne ramène à Mürren.',
              de: 'Alpweiden und Wald mit Blick auf Eiger, Mönch und Jungfrau, bis Grütschalp, wo die Bergbahn zurück nach Mürren fährt.',
            },
          },
        ],
      },
      {
        kind: 'ride',
        title: { en: 'The cable car at the end of the lane', fr: 'Le téléphérique au bout de la rue', de: 'Die Bahn am Ende der Gasse' },
        items: [
          {
            name: 'Schilthorn, Piz Gloria',
            meta: { en: '2970 m · revolving restaurant', fr: '2970 m · restaurant tournant', de: '2970 m · Drehrestaurant' },
            text: {
              en: 'Two cable car sections above the village lead to the 360 degree restaurant at 2970 m, with the viewing terraces and the Bond exhibition at the top.',
              fr: 'Deux tronçons de téléphérique au-dessus du village mènent au restaurant à 360 degrés à 2970 m, avec les terrasses panoramiques et l’exposition Bond au sommet.',
              de: 'Zwei Bahnsektionen über dem Dorf führen zum 360-Grad-Restaurant auf 2970 m, mit Aussichtsterrassen und der Bond-Ausstellung.',
            },
          },
          {
            name: { en: 'Birg and the Thrill Walk', fr: 'Birg et le Thrill Walk', de: 'Birg und der Thrill Walk' },
            meta: { en: '2677 m', fr: '2677 m', de: '2677 m' },
            text: {
              en: 'The middle station at 2677 m, where a walkway is fixed to the vertical rock below the platform. You can stop there on the way up or down.',
              fr: 'La station intermédiaire à 2677 m, où une passerelle est fixée à la paroi verticale sous la plateforme. On peut s’y arrêter à la montée comme à la descente.',
              de: 'Die Mittelstation auf 2677 m, wo ein Steg an der senkrechten Wand unter der Plattform hängt. Halt auf dem Weg hinauf oder hinunter möglich.',
            },
          },
        ],
      },
      {
        kind: 'local',
        title: { en: 'Small things that fill a half day', fr: 'De quoi remplir une demi-journée', de: 'Kleines für einen halben Tag' },
        items: [
          {
            name: { en: 'Allmendhubel flower trail', fr: 'Le sentier des fleurs de l’Allmendhubel', de: 'Der Blumenweg auf dem Allmendhubel' },
            meta: { en: '20 min · circular · pushchairs', fr: '20 min · en boucle · poussettes', de: '20 Min. · Rundweg · Kinderwagen' },
            text: {
              en: 'A short circuit at the top of the funicular, with up to 150 different mountain flowers in summer, next to the panorama restaurant, the playground and the water maze.',
              fr: 'Un petit circuit au sommet du funiculaire, avec jusqu’à 150 fleurs de montagne différentes en été, à côté du restaurant panoramique, de la place de jeux et du labyrinthe d’eau.',
              de: 'Ein kurzer Rundweg oben an der Standseilbahn, im Sommer mit bis zu 150 verschiedenen Bergblumen, neben Panoramarestaurant, Spielplatz und Wasserlabyrinth.',
            },
          },
          {
            name: { en: 'The Alpine Sports Centre', fr: 'Le centre sportif alpin', de: 'Das Alpine Sportzentrum' },
            meta: { en: 'indoor pool, 25 by 11 m', fr: 'piscine intérieure de 25 sur 11 m', de: 'Hallenbad, 25 auf 11 m' },
            text: {
              en: 'The village sports centre at Höhematte, the answer to a grey afternoon. Some hotels include entry for their guests.',
              fr: 'Le centre sportif du village à Höhematte, la solution d’un après-midi gris. Certains hôtels en offrent l’entrée à leurs clients.',
              de: 'Das Sportzentrum an der Höhematte, die Antwort auf einen grauen Nachmittag. Einige Hotels bieten ihren Gästen den Eintritt an.',
            },
          },
        ],
      },
      {
        kind: 'table',
        title: { en: 'Two tables in the village', fr: 'Deux tables au village', de: 'Zwei Adressen zum Essen' },
        items: [
          {
            name: 'Stägerstübli',
            meta: { en: 'Swiss cooking, centre of the village', fr: 'cuisine suisse, au centre du village', de: 'Schweizer Küche, im Dorfzentrum' },
            text: {
              en: 'A small family run dining room in the middle of Mürren, listed by the tourist office among the village restaurants.',
              fr: 'Une petite salle familiale au milieu de Mürren, inscrite par l’office du tourisme parmi les restaurants du village.',
              de: 'Eine kleine, familiär geführte Stube mitten in Mürren, vom Tourismusbüro unter den Dorfrestaurants aufgeführt.',
            },
          },
          {
            name: 'Tham’s Snack',
            meta: { en: 'Asian', fr: 'asiatique', de: 'asiatisch' },
            text: {
              en: 'Spring rolls, rice dishes and noodle soups, the quick option when you come down off the mountain.',
              fr: 'Rouleaux de printemps, plats de riz et soupes de nouilles, l’option rapide en redescendant de la montagne.',
              de: 'Frühlingsrollen, Reisgerichte und Nudelsuppen, die schnelle Variante nach der Rückkehr vom Berg.',
            },
          },
        ],
      },
    ],
    note: {
      en: 'Times, seasons and figures come from the Schilthorn company and the Mürren tourist office, checked on 16 September 2026. We publish no ratings and no route descriptions: check conditions on the spot before you set off.',
      fr: 'Durées, saisons et chiffres viennent de la compagnie du Schilthorn et de l’office du tourisme de Mürren, vérifiés le 16 septembre 2026. Nous ne publions ni notes ni descriptifs d’itinéraires : renseignez-vous sur place avant de partir.',
      de: 'Zeiten, Saisons und Zahlen stammen von der Schilthornbahn und vom Tourismusbüro Mürren, geprüft am 16. September 2026. Wir veröffentlichen keine Bewertungen und keine Routenbeschreibungen: Erkundigen Sie sich vor Ort, bevor Sie losgehen.',
    },
  },
  faq: [
    {
      q: { en: 'Is Mürren really car-free?', fr: 'Mürren est-il vraiment sans voiture ?', de: 'Ist Mürren wirklich autofrei?' },
      a: {
        en: 'Yes. There is no road to the village: you come from Lauterbrunnen by public transport, on foot or by bike, and inside the village you walk.',
        fr: 'Oui. Aucune route ne mène au village : on vient de Lauterbrunnen en transports publics, à pied ou à vélo, et dans le village on marche.',
        de: 'Ja. Es führt keine Strasse ins Dorf: Man kommt von Lauterbrunnen mit dem öffentlichen Verkehr, zu Fuss oder mit dem Velo, und im Dorf geht man zu Fuss.',
      },
    },
    {
      q: { en: 'How do I get to Mürren from Interlaken?', fr: 'Comment rejoindre Mürren depuis Interlaken ?', de: 'Wie komme ich von Interlaken nach Mürren?' },
      a: {
        en: 'Train to Lauterbrunnen, then either the Grütschalp cable car and the mountain train, about 20 minutes, or the bus to Stechelberg and the cable car through Gimmelwald, about 30 minutes. From Interlaken Ost the whole trip takes 53 minutes.',
        fr: 'Train jusqu’à Lauterbrunnen, puis soit le téléphérique de Grütschalp et le train de montagne, environ 20 minutes, soit le bus jusqu’à Stechelberg et le téléphérique par Gimmelwald, environ 30 minutes. Depuis Interlaken Ost, le trajet complet prend 53 minutes.',
        de: 'Zug nach Lauterbrunnen, dann entweder Grütschalpbahn und Bergbahn, rund 20 Minuten, oder Bus nach Stechelberg und Seilbahn über Gimmelwald, rund 30 Minuten. Ab Interlaken Ost dauert die ganze Reise 53 Minuten.',
      },
    },
    {
      q: { en: 'What does the Schilthorn cost with a Swiss Travel Pass?', fr: 'Combien coûte le Schilthorn avec un Swiss Travel Pass ?', de: 'Was kostet das Schilthorn mit dem Swiss Travel Pass?' },
      a: {
        en: 'The adult return from Mürren is CHF 91.40 at the published 2026 fare, or CHF 45.70 with the Swiss Travel Pass, the Half Fare Card or the GA travelcard. The Berner Oberland Pass travels free.',
        fr: 'L’aller-retour adulte depuis Mürren coûte CHF 91.40 au tarif publié 2026, ou CHF 45.70 avec le Swiss Travel Pass, l’abonnement demi-tarif ou l’AG. Le Berner Oberland Pass voyage gratuitement.',
        de: 'Die Erwachsenen-Retourfahrt ab Mürren kostet laut publiziertem Tarif 2026 CHF 91.40, mit Swiss Travel Pass, Halbtax oder GA CHF 45.70. Der Berner Oberland Pass fährt gratis.',
      },
    },
    {
      q: { en: 'Mürren or Wengen?', fr: 'Mürren ou Wengen ?', de: 'Mürren oder Wengen?' },
      a: {
        en: 'Both are car-free. Mürren is higher, smaller, reached in two legs, and has the Schilthorn cable car in the village. Wengen is bigger, has more shops around its station and sits on the line towards the Jungfraujoch.',
        fr: 'Les deux sont sans voiture. Mürren est plus haut, plus petit, s’atteint en deux étapes et a le téléphérique du Schilthorn dans le village. Wengen est plus grand, a plus de commerces autour de sa gare et se trouve sur la ligne du Jungfraujoch.',
        de: 'Beide sind autofrei. Mürren liegt höher, ist kleiner, wird in zwei Etappen erreicht und hat die Schilthornbahn im Dorf. Wengen ist grösser, hat mehr Läden rund um den Bahnhof und liegt an der Linie Richtung Jungfraujoch.',
      },
    },
    {
      q: { en: 'Is there a pool in Mürren?', fr: 'Y a-t-il une piscine à Mürren ?', de: 'Gibt es in Mürren ein Schwimmbad?' },
      a: {
        en: 'Yes, at the Alpine Sports Centre on the Höhematte: an indoor pool of 25 by 11 metres, a children’s pool and a spa.',
        fr: 'Oui, au centre sportif alpin de la Höhematte : une piscine intérieure de 25 sur 11 mètres, un bassin pour enfants et un spa.',
        de: 'Ja, im Alpinen Sportzentrum an der Höhematte: ein Hallenbad von 25 auf 11 Metern, ein Kinderbecken und ein Spa.',
      },
    },
  ],
  neighbours: ['wengen', 'lauterbrunnen', 'gimmelwald', 'grindelwald'],
}
