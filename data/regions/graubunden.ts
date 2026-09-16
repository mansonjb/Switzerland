import type { Region } from '../types'

// Scores are editorial judgments built on the sourced facts of each destination page, not measurements.
export const graubunden: Region = {
  slug: 'graubunden',
  key: 'graubunden',
  updated: '2026-09-16',
  name: { en: 'Graubünden', fr: 'Grisons', de: 'Graubünden' },
  meta: {
    title: { en: 'Graubünden: Davos, St. Moritz or Pontresina?', fr: 'Grisons : Davos, Saint-Moritz ou Pontresina ?', de: 'Graubünden: Davos, St. Moritz oder Pontresina?' },
    description: {
      en: 'Six possible bases in Graubünden compared on quiet, views, nightlife, getting around without a car and the size of the ski area, with a verdict for each type of traveller.',
      fr: 'Six bases possibles aux Grisons comparées sur le calme, la vue, la vie nocturne, les déplacements sans voiture et la taille du domaine skiable, avec un verdict par profil.',
      de: 'Sechs mögliche Standorte in Graubünden im Vergleich: Ruhe, Aussicht, Ausgehen, Unterwegssein ohne Auto und Grösse des Skigebiets, mit Empfehlung pro Reisetyp.',
    },
  },
  intro: {
    en: 'The largest Swiss canton, reached by the Rhaetian Railway, where the valleys sit high: Davos is a working town at 1560 m, the Engadin villages sit above 1800 m around a chain of lakes. The choice comes down to how lively you want the evening and how far you want to travel each morning.',
    fr: 'Le plus grand canton suisse, desservi par le chemin de fer rhétique, où les vallées sont déjà hautes : Davos est une vraie ville à 1560 m, les villages d’Engadine sont au-dessus de 1800 m autour d’une chaîne de lacs. Le choix se joue sur l’animation du soir et la distance à parcourir chaque matin.',
    de: 'Der grösste Schweizer Kanton, erschlossen von der Rhätischen Bahn, mit hoch gelegenen Tälern: Davos ist eine richtige Stadt auf 1560 m, die Engadiner Dörfer liegen über 1800 m an einer Seenkette. Die Wahl hängt daran, wie lebhaft der Abend sein soll und wie weit Sie morgens fahren wollen.',
  },
  quickAnswer: {
    en: 'Stay in Davos for a town with everything open and two big ski areas, in St. Moritz for the lake and the Bernina line, and in Pontresina for the same valley at a quieter address.',
    fr: 'Dormez à Davos pour une ville où tout reste ouvert et deux grands domaines, à Saint-Moritz pour le lac et la ligne de la Bernina, et à Pontresina pour la même vallée à une adresse plus calme.',
    de: 'Übernachten Sie in Davos für eine Stadt, in der alles offen ist, und zwei grosse Skigebiete, in St. Moritz für den See und die Berninalinie, und in Pontresina für dasselbe Tal an ruhigerer Adresse.',
  },
  hero: {
    photo: '/photos/stmoritz.jpg',
    caption: { en: 'St. Moritz above its lake in the Upper Engadin.', fr: 'Saint-Moritz au-dessus de son lac, en Haute-Engadine.', de: 'St. Moritz über seinem See im Oberengadin.' },
    credit: { author: 'ProjectManager', license: 'Public domain', licenseUrl: 'https://commons.wikimedia.org/wiki/Commons:Licensing', source: 'https://commons.wikimedia.org/wiki/File:St._Moritz_2007.jpg' },
  },
  // Centred between Davos and the Upper Engadin
  map: { lat: 46.65, lng: 9.85, zoom: 9 },
  destinations: ['davos', 'st-moritz', 'pontresina', 'klosters', 'arosa', 'lenzerheide', 'laax', 'flims', 'scuol', 'sils-maria', 'chur'],
  criteria: [
    { en: 'Quiet', fr: 'Calme', de: 'Ruhe' },
    { en: 'Views', fr: 'Vue', de: 'Aussicht' },
    { en: 'Nightlife', fr: 'Vie nocturne', de: 'Ausgehen' },
    { en: 'Without a car', fr: 'Sans voiture', de: 'Ohne Auto' },
    { en: 'Ski area', fr: 'Domaine skiable', de: 'Skigebiet' },
  ],
  rows: [
    { slug: 'davos', scores: [2, 3, 4, 4, 5], forWhom: { en: 'A town that stays open all year, two separate ski mountains', fr: 'Une ville ouverte toute l’année, deux montagnes à ski distinctes', de: 'Eine Stadt, die das ganze Jahr offen ist, zwei getrennte Skiberge' } },
    { slug: 'st-moritz', scores: [2, 5, 5, 4, 5], forWhom: { en: 'The lake, the Bernina line, the busiest evenings in the Engadin', fr: 'Le lac, la ligne de la Bernina, les soirées les plus animées de l’Engadine', de: 'Der See, die Berninalinie, die lebhaftesten Abende im Engadin' } },
    { slug: 'pontresina', scores: [5, 5, 2, 4, 4], forWhom: { en: 'The same valley without the crowd, walkers and glacier trips', fr: 'La même vallée sans la foule, marcheurs et sorties sur les glaciers', de: 'Dasselbe Tal ohne Trubel, Wanderer und Gletscherausflüge' } },
    { slug: 'klosters', scores: [4, 4, 2, 4, 5], forWhom: { en: 'The quiet side of the Parsenn, chalets rather than blocks', fr: 'Le versant calme du Parsenn, des chalets plutôt que des immeubles', de: 'Die ruhige Seite des Parsenn, Chalets statt Blöcke' } },
    { slug: 'arosa', scores: [4, 5, 2, 5, 4], forWhom: { en: 'End of the valley, reached by the narrow gauge line from Chur', fr: 'Bout de la vallée, desservi par la ligne à voie étroite depuis Coire', de: 'Talende, erreichbar mit der Schmalspurbahn ab Chur' } },
    { slug: 'laax', scores: [3, 4, 3, 3, 5], forWhom: { en: 'Snowboarding and the Vorderrhein side, lifts from the village', fr: 'Le snowboard et le versant du Rhin antérieur, remontées depuis le village', de: 'Snowboard und die Vorderrhein-Seite, Bahnen ab dem Dorf' } },
  ],
  verdicts: [
    { profile: { en: 'First visit', fr: 'Première fois', de: 'Erster Besuch' }, slug: 'st-moritz', reason: { en: 'The lake, the Corviglia funicular from the village and the Bernina line all start where you sleep.', fr: 'Le lac, le funiculaire de Corviglia depuis le village et la ligne de la Bernina partent là où vous dormez.', de: 'Der See, die Corviglia-Bahn ab dem Dorf und die Berninalinie beginnen dort, wo Sie schlafen.' } },
    { profile: { en: 'Quiet', fr: 'Calme', de: 'Ruhe' }, slug: 'pontresina', reason: { en: 'Ten minutes from St. Moritz by train, at the mouth of the Roseg valley, with the Diavolezza and Muottas Muragl lifts close by.', fr: 'À dix minutes de Saint-Moritz en train, à l’entrée du val Roseg, avec les remontées de Diavolezza et de Muottas Muragl à proximité.', de: 'Zehn Zugminuten von St. Moritz, am Eingang zum Val Roseg, mit Diavolezza und Muottas Muragl in der Nähe.' } },
    { profile: { en: 'A long stay', fr: 'Séjour long', de: 'Längerer Aufenthalt' }, slug: 'davos', reason: { en: 'A real town: shops, a hospital, an ice rink and two ski mountains, so a week of bad weather still works.', fr: 'Une vraie ville : commerces, hôpital, patinoire et deux montagnes à ski, donc une semaine de mauvais temps reste tenable.', de: 'Eine richtige Stadt: Läden, Spital, Eisbahn und zwei Skiberge, so übersteht man auch eine Schlechtwetterwoche.' } },
  ],
  note: {
    en: 'Scores are our editorial reading of the facts on each destination page (altitude, transport, figures published by the lift companies), checked on 16 September 2026.',
    fr: 'Les notes sont notre lecture éditoriale des faits présentés sur chaque page destination (altitude, transports, chiffres publiés par les remontées), vérifiés le 16 septembre 2026.',
    de: 'Die Bewertungen sind unsere redaktionelle Einordnung der Fakten auf den Reiseziel-Seiten (Höhe, Verkehr, von den Bahnen publizierte Zahlen), geprüft am 16. September 2026.',
  },
}
