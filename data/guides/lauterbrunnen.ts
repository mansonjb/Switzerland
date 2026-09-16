import type { DestinationGuide } from '../types'

// Sources in data/SOURCES-oberland.md (checked 16/09/2026). No number without a source.
export const lauterbrunnen: DestinationGuide = {
  slug: 'lauterbrunnen',
  stamp: 'lauterbrunnen',
  updated: '2026-09-16',
  meta: {
    title: { en: 'Where to stay in Lauterbrunnen: areas, hotels, parking', fr: 'Où dormir à Lauterbrunnen : secteurs, hôtels, parking', de: 'Wo übernachten in Lauterbrunnen: Ortsteile, Hotels, Parkhaus' },
    description: {
      en: 'The valley floor base you can drive to: station area, the walk to the Staubbach Fall, the road to Stechelberg. Hotels with dated prices, trains to Wengen and Mürren, what opens when.',
      fr: 'La base de fond de vallée accessible en voiture : quartier de la gare, le chemin de la cascade du Staubbach, la route de Stechelberg. Hôtels avec prix datés, trains vers Wengen et Mürren, ce qui ouvre quand.',
      de: 'Die Talbasis, die man mit dem Auto erreicht: Bahnhofsquartier, Weg zum Staubbachfall, Strasse nach Stechelberg. Hotels mit datierten Preisen, Bahnen nach Wengen und Mürren, was wann offen ist.',
    },
  },
  eyebrow: { en: 'Bernese Oberland · Lauterbrunnen valley', fr: 'Oberland bernois · Vallée de Lauterbrunnen', de: 'Berner Oberland · Lauterbrunnental' },
  title: { en: 'Where to stay in Lauterbrunnen', fr: 'Où dormir à Lauterbrunnen', de: 'Wo übernachten in Lauterbrunnen' },
  intro: {
    en: 'The village sits at 795 m on the floor of a valley with 72 waterfalls, and it is the one base here you can reach by car. The station is the hinge of the whole area: the Wengernalp railway climbs to Wengen and Kleine Scheidegg, the cable car crosses to Grütschalp for Mürren, and the bus runs down the valley to Stechelberg and the Schilthorn.',
    fr: 'Le village est posé à 795 m au fond d’une vallée aux 72 cascades, et c’est la seule base du secteur accessible en voiture. La gare est la charnière de toute la région : le train de la Wengernalp monte à Wengen et à la Kleine Scheidegg, le téléphérique traverse vers Grütschalp pour Mürren, et le bus descend la vallée jusqu’à Stechelberg et au Schilthorn.',
    de: 'Das Dorf liegt auf 795 m im Talboden mit 72 Wasserfällen und ist der einzige Standort hier, den man mit dem Auto erreicht. Der Bahnhof ist das Scharnier der ganzen Region: die Wengernalpbahn steigt nach Wengen und zur Kleinen Scheidegg, die Seilbahn quert nach Grütschalp Richtung Mürren, und der Bus fährt talauswärts nach Stechelberg und zum Schilthorn.',
  },
  quickAnswer: {
    en: 'Stay in Lauterbrunnen if you arrive by car: the covered car park is at the station, and from there Wengen is 12 minutes by train and Kleine Scheidegg 42. If you want a car-free village, sleep in Wengen or Mürren instead.',
    fr: 'Dormez à Lauterbrunnen si vous arrivez en voiture : le parking couvert est à la gare, et de là Wengen est à 12 minutes de train, la Kleine Scheidegg à 42. Si vous voulez un village sans voiture, dormez plutôt à Wengen ou à Mürren.',
    de: 'Übernachten Sie in Lauterbrunnen, wenn Sie mit dem Auto anreisen: das Parkhaus steht am Bahnhof, und von dort sind es 12 Zugminuten nach Wengen und 42 zur Kleinen Scheidegg. Wer ein autofreies Dorf will, schläft besser in Wengen oder Mürren.',
  },
  snapshot: {
    why: {
      en: 'The only base in the valley you can drive to, with 940 covered parking spaces at the station and trains, cable car and bus leaving from the same square.',
      fr: 'La seule base de la vallée accessible en voiture, avec 940 places de parking couvertes à la gare et les trains, le téléphérique et le bus au départ de la même place.',
      de: 'Der einzige Standort im Tal für Autofahrer, mit 940 gedeckten Parkplätzen am Bahnhof und Zügen, Seilbahn und Bus ab demselben Platz.',
    },
    where: {
      en: 'Around the station for arrivals and departures, towards the Staubbach Fall for the village itself, along the valley road for quiet and the Stechelberg bus.',
      fr: 'Autour de la gare pour les arrivées et les départs, vers la cascade du Staubbach pour le village lui-même, le long de la route de la vallée pour le calme et le bus de Stechelberg.',
      de: 'Rund um den Bahnhof für An- und Abreise, Richtung Staubbachfall fürs Dorfleben, entlang der Talstrasse für Ruhe und den Bus nach Stechelberg.',
    },
    watch: {
      en: 'The Grütschalp cable car, the usual route to Mürren, has a long closure announced for spring 2026: check the operator before you book those dates.',
      fr: 'Le téléphérique de Grütschalp, la voie habituelle vers Mürren, a une longue fermeture annoncée au printemps 2026 : vérifiez auprès de l’exploitant avant de réserver ces dates.',
      de: 'Die Grütschalpbahn, der übliche Weg nach Mürren, hat im Frühjahr 2026 eine lange Schliessung angekündigt: vor der Buchung dieser Daten beim Betreiber prüfen.',
    },
  },
  stats: [
    { value: '795', label: { en: 'metres above sea level', fr: "mètres d'altitude", de: 'Meter über Meer' } },
    { value: '940', label: { en: 'covered parking spaces at the station', fr: 'places de parking couvertes à la gare', de: 'gedeckte Parkplätze am Bahnhof' } },
    { value: '72', label: { en: 'waterfalls in the valley', fr: 'cascades dans la vallée', de: 'Wasserfälle im Tal' } },
  ],
  hero: {
    photo: '/photos/lauterbrunnen-hero.jpg',
    caption: { en: 'The Lauterbrunnen valley, with Wengen on the terrace above.', fr: 'La vallée de Lauterbrunnen, avec Wengen sur la terrasse au-dessus.', de: 'Das Lauterbrunnental, darüber Wengen auf der Terrasse.' },
    credit: { author: 'Chensiyuan', license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/', source: 'https://commons.wikimedia.org/wiki/File:1_lauterbrunnen_valley_wengen_2022.jpg' },
  },
  sectors: [
    {
      title: { en: 'Around the station', fr: 'Autour de la gare', de: 'Rund um den Bahnhof' },
      walk: { en: 'Trains, cable car and bus', fr: 'Trains, téléphérique et bus', de: 'Bahn, Seilbahn und Bus' },
      text: {
        en: 'The covered car park, the Wengernalp platform and the bus stop for Stechelberg all sit on the same square. The practical choice if you are moving around the region every day.',
        fr: 'Le parking couvert, le quai de la Wengernalp et l’arrêt du bus de Stechelberg sont sur la même place. Le choix pratique si vous bougez dans la région chaque jour.',
        de: 'Parkhaus, Perron der Wengernalpbahn und Bushaltestelle nach Stechelberg liegen am selben Platz. Praktisch, wenn Sie täglich in der Region unterwegs sind.',
      },
      points: [
        { en: 'Luggage lockers open around the clock at the station', fr: 'Casiers à bagages ouverts en continu à la gare', de: 'Gepäckschliessfächer am Bahnhof rund um die Uhr' },
        { en: 'Flight luggage check-in to Zurich Airport at the counter', fr: "Enregistrement des bagages d'avion pour l'aéroport de Zurich au guichet", de: 'Flug-Gepäckaufgabe nach Zürich Flughafen am Schalter' },
      ],
    },
    {
      title: { en: 'Towards the Staubbach Fall', fr: 'Vers la cascade du Staubbach', de: 'Richtung Staubbachfall' },
      walk: { en: 'The village itself', fr: 'Le village lui-même', de: 'Das Dorf selbst' },
      text: {
        en: 'The row of houses under the cliff, with the shops and restaurants and the waterfall at the end of the street. Short walks, the busiest part in summer.',
        fr: 'La rangée de maisons sous la falaise, avec les commerces, les restaurants et la cascade au bout de la rue. Tout est à quelques pas, c’est la partie la plus animée en été.',
        de: 'Die Häuserzeile unter der Felswand, mit Läden, Restaurants und dem Wasserfall am Ende der Strasse. Kurze Wege, im Sommer der belebteste Teil.',
      },
      points: [
        { en: 'Walking distance to the fall from the village centre', fr: 'Cascade à quelques minutes du centre du village', de: 'Wasserfall zu Fuss ab Dorfzentrum' },
        { en: 'The path behind the fall is a summer route only', fr: 'Le chemin derrière la cascade n’est ouvert qu’en été', de: 'Der Weg hinter dem Fall ist nur im Sommer offen' },
      ],
    },
    {
      title: { en: 'The valley road to Stechelberg', fr: 'La route de la vallée vers Stechelberg', de: 'Die Talstrasse nach Stechelberg' },
      walk: { en: 'Bus line 141', fr: 'Ligne de bus 141', de: 'Buslinie 141' },
      text: {
        en: 'South of the village, along the road to the Schilthorn cable car at Stechelberg, passing the Trümmelbach Falls. Quieter, and the alternative way up to Mürren.',
        fr: 'Au sud du village, le long de la route menant au téléphérique du Schilthorn à Stechelberg, en passant par les chutes du Trümmelbach. Plus calme, et l’autre voie de montée vers Mürren.',
        de: 'Südlich des Dorfes entlang der Strasse zur Schilthornbahn in Stechelberg, vorbei an den Trümmelbachfällen. Ruhiger, und der zweite Weg hinauf nach Mürren.',
      },
      points: [
        { en: 'Trümmelbach Falls on the way, open from April to November', fr: 'Chutes du Trümmelbach sur le trajet, ouvertes d’avril à novembre', de: 'Trümmelbachfälle am Weg, offen von April bis November' },
        { en: 'Schilthorn cable car from Stechelberg to Mürren and Piz Gloria', fr: 'Téléphérique du Schilthorn depuis Stechelberg vers Mürren et le Piz Gloria', de: 'Schilthornbahn ab Stechelberg nach Mürren und zum Piz Gloria' },
      ],
    },
  ],
  hotels: [
    {
      slug: 'lb-hotel-oberland',
      name: 'Hotel Oberland',
      url: 'https://www.hoteloberland.ch/hotel',
      photo: '/photos/hotels/lb-hotel-oberland.jpg',
      sector: { en: 'Around the station', fr: 'Autour de la gare', de: 'Rund um den Bahnhof' },
      facts: [
        { en: 'Five-minute walk from the station, by the hotel’s own count', fr: 'À cinq minutes à pied de la gare, selon l’hôtel', de: 'Fünf Gehminuten vom Bahnhof, laut Hotel' },
        { en: '30 rooms, 24 in the old house and 6 in the annexe', fr: '30 chambres, 24 dans la maison ancienne et 6 dans l’annexe', de: '30 Zimmer, 24 im alten Haus und 6 im Anbau' },
      ],
    },
    {
      slug: 'lb-hotel-staubbach',
      name: 'Hotel Staubbach',
      url: 'https://www.staubbach.com/en/summer/',
      photo: '/photos/hotels/lb-hotel-staubbach.jpg',
      sector: { en: 'Towards the Staubbach Fall', fr: 'Vers la cascade du Staubbach', de: 'Richtung Staubbachfall' },
      facts: [
        { en: 'At Im Rohr, under the cliff by the waterfall', fr: 'À Im Rohr, sous la falaise près de la cascade', de: 'Im Rohr, unter der Felswand beim Wasserfall' },
        { en: '8 room categories, including connecting rooms for four', fr: '8 catégories de chambres, dont des chambres communicantes pour quatre', de: '8 Zimmerkategorien, darunter Verbindungszimmer für vier' },
      ],
    },
    {
      slug: 'lb-hotel-jungfrau',
      name: 'Hotel Restaurant Jungfrau',
      url: 'https://lauterbrunnen-jungfrau.ch/en/',
      photo: '/photos/hotels/lb-hotel-jungfrau.jpg',
      sector: { en: 'Around the station', fr: 'Autour de la gare', de: 'Rund um den Bahnhof' },
      facts: [
        { en: 'At Fuhren, between the station and the village centre', fr: 'À Fuhren, entre la gare et le centre du village', de: 'In Fuhren, zwischen Bahnhof und Dorfzentrum' },
        { en: 'Restaurant in the house', fr: 'Restaurant dans la maison', de: 'Restaurant im Haus' },
      ],
    },
    {
      slug: 'lb-hotel-steinbock',
      name: 'Hotel Restaurant Steinbock',
      url: 'https://steinbocklauterbrunnen.ch/',
      photo: '/photos/hotels/lb-hotel-steinbock.jpg',
      sector: { en: 'Around the station', fr: 'Autour de la gare', de: 'Rund um den Bahnhof' },
      facts: [
        { en: 'Rooms in the house and in an annexe by the station', fr: 'Chambres dans la maison et dans une annexe près de la gare', de: 'Zimmer im Haus und in einer Dependance beim Bahnhof' },
        { en: 'Restaurant tables by phone only', fr: 'Réservation de table par téléphone uniquement', de: 'Tischreservation nur telefonisch' },
      ],
    },
    {
      slug: 'lb-horner-pub',
      name: 'Horner Pub & Hotel',
      url: 'https://www.hornerpub.ch/en/',
      photo: '/photos/hotels/lb-horner-pub.jpg',
      sector: { en: 'Village centre', fr: 'Centre du village', de: 'Dorfzentrum' },
      facts: [
        { en: 'Running since 1996, the village pub with rooms above', fr: 'Ouvert depuis 1996, le pub du village avec des chambres au-dessus', de: 'Seit 1996 der Dorfpub mit Zimmern darüber' },
        { en: 'Four rooms look onto the Staubbach Fall', fr: 'Quatre chambres donnent sur la cascade du Staubbach', de: 'Vier Zimmer blicken auf den Staubbachfall' },
      ],
    },
  ],
  hotelsNote: {
    en: 'Facts taken from each hotel’s own website on 16 September 2026. No ratings or reviews on this guide.',
    fr: 'Faits relevés sur le site de chaque hôtel le 16 septembre 2026. Aucune note ni aucun avis sur ce guide.',
    de: 'Fakten von der Website des jeweiligen Hotels, Stand 16. September 2026. Keine Bewertungen oder Rezensionen.',
  },
  pass: {
    title: { en: 'Swiss Travel Pass, from the valley floor', fr: 'Swiss Travel Pass, depuis le fond de vallée', de: 'Swiss Travel Pass, ab Talboden' },
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
      en: 'Adult, 2nd class. The pass is valid free of charge as far as Wengen and Grindelwald; above them it gives a discount, published as 25%, which is worth confirming at the counter. Separately, the Schilthorn return from Stechelberg costs CHF 115.00 for an adult at the published 2026 fare. Fares checked on 16 September 2026.',
      fr: "Adulte, 2e classe. Le pass est valable gratuitement jusqu'à Wengen et Grindelwald ; au-dessus, il donne une réduction, publiée à 25 %, qu'il vaut mieux confirmer au guichet. À part, l'aller-retour du Schilthorn depuis Stechelberg coûte CHF 115.00 pour un adulte au tarif publié 2026. Tarifs vérifiés le 16 septembre 2026.",
      de: 'Erwachsene, 2. Klasse. Der Pass gilt gratis bis Wengen und Grindelwald, darüber gibt es eine Ermässigung, publiziert mit 25 %, die man am Schalter bestätigen lassen sollte. Separat kostet die Schilthorn-Retourfahrt ab Stechelberg laut publiziertem Tarif 2026 CHF 115.00 für Erwachsene. Tarife geprüft am 16. September 2026.',
    },
  },
  calendar: {
    title: { en: 'What runs, month by month', fr: 'Ce qui fonctionne, mois par mois', de: 'Was fährt, Monat für Monat' },
    rows: [
      { name: { en: 'Train Lauterbrunnen to Wengen', fr: 'Train Lauterbrunnen → Wengen', de: 'Bahn Lauterbrunnen → Wengen' }, months: ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'] },
      { name: { en: 'Cable car to Grütschalp for Mürren', fr: 'Téléphérique de Grütschalp vers Mürren', de: 'Seilbahn Grütschalp Richtung Mürren' }, months: ['o', 'o', 'o', 'r', 'x', 'x', 'r', 'o', 'o', 'r', 'o', 'o'] },
      { name: { en: 'Schilthorn cable car from Stechelberg', fr: 'Téléphérique du Schilthorn depuis Stechelberg', de: 'Schilthornbahn ab Stechelberg' }, months: ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'r', 'o', 'o'] },
      { name: { en: 'Trümmelbach Falls', fr: 'Chutes du Trümmelbach', de: 'Trümmelbachfälle' }, months: ['x', 'x', 'x', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'r', 'x'] },
    ],
    note: {
      en: 'Trümmelbach Falls: daily from the beginning of April to November, 09:00 to 17:00, and 08:30 to 18:00 in July and August; the exact season edges depend on the weather. Grütschalp cable car: replacement works announced from 13 April to 10 July 2026, with a further autumn break; check the operator before booking. Schilthorn cable car: replacement bus on 19 to 30 October 2026. Checked 16 September 2026.',
      fr: "Chutes du Trümmelbach : tous les jours du début avril à novembre, de 9h00 à 17h00, et de 8h30 à 18h00 en juillet et août ; les bornes exactes de saison dépendent de la météo. Téléphérique de Grütschalp : travaux de remplacement annoncés du 13 avril au 10 juillet 2026, plus une coupure d'automne ; vérifiez auprès de l'exploitant avant de réserver. Téléphérique du Schilthorn : bus de remplacement du 19 au 30 octobre 2026. Vérifié le 16 septembre 2026.",
      de: 'Trümmelbachfälle: täglich von Anfang April bis November, 09:00 bis 17:00 Uhr, im Juli und August 08:30 bis 18:00 Uhr; die genauen Saisonränder hängen vom Wetter ab. Grütschalpbahn: Ersatzarbeiten angekündigt vom 13. April bis 10. Juli 2026, dazu ein Unterbruch im Herbst; vor der Buchung beim Betreiber prüfen. Schilthornbahn: Ersatzbus vom 19. bis 30. Oktober 2026. Geprüft am 16. September 2026.',
    },
  },
  practical: {
    title: { en: 'Arriving by car, in practice', fr: 'Arriver en voiture, en pratique', de: 'Mit dem Auto ankommen, in der Praxis' },
    items: [
      {
        title: { en: 'Park at the station', fr: 'Se garer à la gare', de: 'Am Bahnhof parkieren' },
        text: {
          en: 'The covered car park next to the station has 940 spaces and is the transfer point for the car-free villages. Check current rates before you go.',
          fr: 'Le parking couvert à côté de la gare compte 940 places et sert de point de transfert vers les villages sans voiture. Vérifiez les tarifs avant de partir.',
          de: 'Das Parkhaus neben dem Bahnhof hat 940 Plätze und ist der Umsteigepunkt zu den autofreien Dörfern. Aktuelle Tarife vorher prüfen.',
        },
      },
      {
        title: { en: 'Up to Wengen', fr: 'Monter à Wengen', de: 'Hinauf nach Wengen' },
        text: {
          en: 'The Wengernalp railway takes 12 minutes to Wengen and 42 to Kleine Scheidegg, on the longest cog railway in the world.',
          fr: 'Le train de la Wengernalp met 12 minutes jusqu’à Wengen et 42 jusqu’à la Kleine Scheidegg, sur le plus long chemin de fer à crémaillère du monde.',
          de: 'Die Wengernalpbahn braucht 12 Minuten nach Wengen und 42 zur Kleinen Scheidegg, auf der längsten Zahnradbahn der Welt.',
        },
      },
      {
        title: { en: 'Across to Mürren', fr: 'Traverser vers Mürren', de: 'Hinüber nach Mürren' },
        text: {
          en: 'Cable car to Grütschalp, then the little railway to Mürren. When the cable car is closed, take the bus to Stechelberg and the Schilthorn cable car instead.',
          fr: 'Téléphérique jusqu’à Grütschalp, puis le petit train jusqu’à Mürren. Quand le téléphérique est fermé, prenez le bus pour Stechelberg et le téléphérique du Schilthorn.',
          de: 'Seilbahn nach Grütschalp, dann die kleine Bahn nach Mürren. Ist die Seilbahn geschlossen, nehmen Sie den Bus nach Stechelberg und die Schilthornbahn.',
        },
      },
      {
        title: { en: 'Down the valley', fr: 'Descendre la vallée', de: 'Talauswärts' },
        text: {
          en: 'Bus 141 leaves opposite the station for Stechelberg and passes the Trümmelbach Falls on the way.',
          fr: 'Le bus 141 part en face de la gare pour Stechelberg et passe devant les chutes du Trümmelbach.',
          de: 'Bus 141 fährt gegenüber dem Bahnhof nach Stechelberg und kommt an den Trümmelbachfällen vorbei.',
        },
      },
    ],
  },
  seasons: {
    winter: {
      title: { en: 'Winter in Lauterbrunnen', fr: 'L’hiver à Lauterbrunnen', de: 'Winter in Lauterbrunnen' },
      base: {
        en: 'The valley is the parking level, not the ski level: you sleep at 795 m and ride up to Wengen, Kleine Scheidegg or Mürren each morning. Stay near the station to keep the mornings short.',
        fr: 'La vallée est le niveau du parking, pas celui du ski : on dort à 795 m et on monte chaque matin à Wengen, à la Kleine Scheidegg ou à Mürren. Logez près de la gare pour raccourcir les matins.',
        de: 'Das Tal ist die Parkebene, nicht die Skiebene: Sie schlafen auf 795 m und fahren jeden Morgen hinauf nach Wengen, zur Kleinen Scheidegg oder nach Mürren. Nah am Bahnhof wohnen verkürzt die Morgen.',
      },
      facts: [
        { value: '12 min', label: { en: 'by train to Wengen, the first ski gateway', fr: 'de train jusqu’à Wengen, première porte du ski', de: 'Zugminuten nach Wengen, dem ersten Skizugang' } },
        { value: '42 min', label: { en: 'by train to Kleine Scheidegg', fr: 'de train jusqu’à la Kleine Scheidegg', de: 'Zugminuten zur Kleinen Scheidegg' } },
        { value: '2970 m', label: { en: 'Schilthorn summit, reached by cable car from Stechelberg', fr: 'sommet du Schilthorn, par téléphérique depuis Stechelberg', de: 'Gipfel Schilthorn, per Seilbahn ab Stechelberg' } },
        { value: '115.00', label: { en: 'CHF, Stechelberg to Schilthorn return, published 2026 adult fare', fr: 'CHF, aller-retour Stechelberg ⇄ Schilthorn, tarif adulte publié 2026', de: 'CHF, Stechelberg ⇄ Schilthorn retour, publizierter Erwachsenentarif 2026' } },
      ],
      note: {
        en: 'Trümmelbach Falls are closed in winter. Sources: jungfrau.ch, schilthorn.ch, truemmelbachfaelle.ch, checked 16 September 2026.',
        fr: 'Les chutes du Trümmelbach sont fermées en hiver. Sources : jungfrau.ch, schilthorn.ch, truemmelbachfaelle.ch, vérifiées le 16 septembre 2026.',
        de: 'Die Trümmelbachfälle sind im Winter geschlossen. Quellen: jungfrau.ch, schilthorn.ch, truemmelbachfaelle.ch, geprüft am 16. September 2026.',
      },
    },
    summer: {
      title: { en: 'Summer in Lauterbrunnen', fr: 'L’été à Lauterbrunnen', de: 'Sommer in Lauterbrunnen' },
      base: {
        en: 'This is the waterfall season and the village fills up: sleep towards the Staubbach Fall to walk everywhere, or along the valley road for quiet and the Trümmelbach bus.',
        fr: 'C’est la saison des cascades et le village se remplit : dormez vers la cascade du Staubbach pour tout faire à pied, ou le long de la route de la vallée pour le calme et le bus du Trümmelbach.',
        de: 'Das ist die Wasserfallsaison und das Dorf füllt sich: Richtung Staubbachfall wohnen, um alles zu Fuss zu machen, oder an der Talstrasse für Ruhe und den Bus zum Trümmelbach.',
      },
      facts: [
        { value: '72', label: { en: 'waterfalls in the valley', fr: 'cascades dans la vallée', de: 'Wasserfälle im Tal' } },
        { value: '10', label: { en: 'glacier waterfalls inside the mountain at Trümmelbach', fr: 'cascades glaciaires dans la montagne au Trümmelbach', de: 'Gletscherwasserfälle im Berg beim Trümmelbach' } },
        { value: '4 min', label: { en: 'cable car ride to Grütschalp, then the train to Mürren', fr: 'de téléphérique jusqu’à Grütschalp, puis le train pour Mürren', de: 'Seilbahnfahrt nach Grütschalp, dann die Bahn nach Mürren' } },
        { value: '09:00', label: { en: 'Trümmelbach opening time, 08:30 in July and August', fr: 'ouverture du Trümmelbach, 8h30 en juillet et août', de: 'Öffnung Trümmelbach, im Juli und August 08:30' } },
      ],
      note: {
        en: 'Trümmelbach Falls run daily from the beginning of April to November. Babies under 4 and dogs are not admitted. Sources: truemmelbachfaelle.ch, jungfrau.ch, checked 16 September 2026.',
        fr: 'Les chutes du Trümmelbach sont ouvertes tous les jours du début avril à novembre. Les bébés de moins de 4 ans et les chiens ne sont pas admis. Sources : truemmelbachfaelle.ch, jungfrau.ch, vérifiées le 16 septembre 2026.',
        de: 'Die Trümmelbachfälle sind täglich von Anfang April bis November offen. Babys unter 4 Jahren und Hunde sind nicht zugelassen. Quellen: truemmelbachfaelle.ch, jungfrau.ch, geprüft am 16. September 2026.',
      },
    },
  },
  faq: [
    {
      q: { en: 'Can I drive to Lauterbrunnen?', fr: 'Peut-on venir en voiture à Lauterbrunnen ?', de: 'Kann man mit dem Auto nach Lauterbrunnen fahren?' },
      a: {
        en: 'Yes. The village is on the road network and the covered car park at the station has 940 spaces. Wengen and Mürren, higher up, are car-free and reached by train or cable car.',
        fr: 'Oui. Le village est sur le réseau routier et le parking couvert de la gare compte 940 places. Wengen et Mürren, plus haut, sont sans voiture et se rejoignent en train ou en téléphérique.',
        de: 'Ja. Das Dorf liegt am Strassennetz und das Parkhaus am Bahnhof hat 940 Plätze. Wengen und Mürren weiter oben sind autofrei und werden mit Bahn oder Seilbahn erreicht.',
      },
    },
    {
      q: { en: 'How do I get to Mürren from Lauterbrunnen?', fr: 'Comment rejoindre Mürren depuis Lauterbrunnen ?', de: 'Wie komme ich von Lauterbrunnen nach Mürren?' },
      a: {
        en: 'Two ways: the cable car to Grütschalp then the little railway, or the bus down the valley to Stechelberg and the Schilthorn cable car. The cable car has a long closure announced for spring 2026, so check before you travel.',
        fr: 'Deux voies : le téléphérique jusqu’à Grütschalp puis le petit train, ou le bus au fond de la vallée jusqu’à Stechelberg et le téléphérique du Schilthorn. Le téléphérique a une longue fermeture annoncée au printemps 2026, vérifiez avant de partir.',
        de: 'Zwei Wege: die Seilbahn nach Grütschalp und dann die kleine Bahn, oder der Bus talauswärts nach Stechelberg und die Schilthornbahn. Für die Seilbahn ist im Frühjahr 2026 eine lange Schliessung angekündigt, also vorher prüfen.',
      },
    },
    {
      q: { en: 'When are the Trümmelbach Falls open?', fr: 'Quand les chutes du Trümmelbach sont-elles ouvertes ?', de: 'Wann sind die Trümmelbachfälle offen?' },
      a: {
        en: 'Daily from the beginning of April to November, 09:00 to 17:00, and 08:30 to 18:00 in July and August. The exact first and last days depend on the weather.',
        fr: 'Tous les jours du début avril à novembre, de 9h00 à 17h00, et de 8h30 à 18h00 en juillet et août. Les premiers et derniers jours dépendent de la météo.',
        de: 'Täglich von Anfang April bis November, 09:00 bis 17:00 Uhr, im Juli und August 08:30 bis 18:00 Uhr. Die genauen ersten und letzten Tage hängen vom Wetter ab.',
      },
    },
    {
      q: { en: 'Lauterbrunnen or Wengen?', fr: 'Lauterbrunnen ou Wengen ?', de: 'Lauterbrunnen oder Wengen?' },
      a: {
        en: 'Lauterbrunnen if you drive or want the valley floor and the waterfalls at the door. Wengen if you want a car-free village on a terrace, 12 minutes higher up the same railway.',
        fr: 'Lauterbrunnen si vous êtes en voiture ou si vous voulez le fond de vallée et les cascades à la porte. Wengen si vous voulez un village sans voiture sur une terrasse, 12 minutes plus haut sur la même ligne.',
        de: 'Lauterbrunnen, wenn Sie mit dem Auto kommen oder den Talboden mit den Wasserfällen vor der Tür wollen. Wengen, wenn Sie ein autofreies Dorf auf der Terrasse wollen, 12 Minuten höher an derselben Bahn.',
      },
    },
    {
      q: { en: 'How long to Kleine Scheidegg and the Jungfraujoch?', fr: 'Combien de temps jusqu’à la Kleine Scheidegg et au Jungfraujoch ?', de: 'Wie lange bis Kleine Scheidegg und Jungfraujoch?' },
      a: {
        en: 'Kleine Scheidegg is 42 minutes by the Wengernalp railway. From there the Jungfrau Railway takes 35 to 40 minutes more to the Jungfraujoch, plus the change.',
        fr: 'La Kleine Scheidegg est à 42 minutes par le train de la Wengernalp. De là, le chemin de fer de la Jungfrau met 35 à 40 minutes de plus jusqu’au Jungfraujoch, plus la correspondance.',
        de: 'Die Kleine Scheidegg liegt 42 Minuten mit der Wengernalpbahn entfernt. Von dort braucht die Jungfraubahn weitere 35 bis 40 Minuten aufs Jungfraujoch, plus Umsteigen.',
      },
    },
  ],
  neighbours: ['wengen', 'murren', 'interlaken', 'grindelwald'],
}
