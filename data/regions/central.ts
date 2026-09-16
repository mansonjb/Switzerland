import type { Region } from '../types'

// Scores are editorial judgments built on the sourced facts of each destination page, not measurements.
export const central: Region = {
  slug: 'central',
  key: 'central',
  updated: '2026-09-16',
  name: { en: 'Central Switzerland', fr: 'Suisse centrale', de: 'Zentralschweiz' },
  meta: {
    title: { en: 'Central Switzerland: Lucerne, Engelberg, Andermatt or Weggis?', fr: 'Suisse centrale : Lucerne, Engelberg, Andermatt ou Weggis ?', de: 'Zentralschweiz: Luzern, Engelberg, Andermatt oder Weggis?' },
    description: {
      en: 'Four possible bases around Lake Lucerne compared on quiet, views, evenings out, getting around without a car and the ski area, with a verdict for each type of traveller.',
      fr: 'Quatre bases possibles autour du lac des Quatre-Cantons comparées sur le calme, la vue, les sorties du soir, les déplacements sans voiture et le domaine skiable, avec un verdict par profil.',
      de: 'Vier mögliche Standorte am Vierwaldstättersee im Vergleich: Ruhe, Aussicht, Abende, Unterwegssein ohne Auto und Skigebiet, mit Empfehlung pro Reisetyp.',
    },
  },
  intro: {
    en: 'One lake, a city at its end and three villages around it, all linked by boat, rack railway and cable car. You can sleep in the city and take the mountain as a day trip, or sleep on the mountain and come down for the evening.',
    fr: 'Un lac, une ville à son extrémité et trois villages autour, tous reliés par bateau, train à crémaillère et téléphérique. On peut dormir en ville et monter à la journée, ou dormir en montagne et redescendre le soir.',
    de: 'Ein See, eine Stadt an seinem Ende und drei Orte ringsum, verbunden durch Schiff, Zahnradbahn und Seilbahn. Man kann in der Stadt schlafen und den Berg als Tagesausflug nehmen, oder am Berg schlafen und abends hinunterfahren.',
  },
  quickAnswer: {
    en: 'Stay in Lucerne for the station, the boats and the widest choice of rooms, in Weggis for a quiet lakeside village ten minutes under the Rigi, in Engelberg for the Titlis glacier, and in Andermatt for the biggest ski area and the Glacier Express.',
    fr: 'Dormez à Lucerne pour la gare, les bateaux et le plus grand choix de chambres, à Weggis pour un village calme au bord de l’eau à dix minutes sous le Rigi, à Engelberg pour le glacier du Titlis, et à Andermatt pour le plus grand domaine skiable et le Glacier Express.',
    de: 'Übernachten Sie in Luzern für Bahnhof, Schiffe und die grösste Zimmerauswahl, in Weggis für ein ruhiges Seedorf zehn Minuten unter der Rigi, in Engelberg für den Titlis-Gletscher und in Andermatt für das grösste Skigebiet und den Glacier Express.',
  },
  hero: {
    photo: '/photos/lucerne.jpg',
    caption: { en: 'Lucerne and the Chapel Bridge at the end of the lake.', fr: 'Lucerne et le pont de la Chapelle, au bout du lac.', de: 'Luzern und die Kapellbrücke am Ende des Sees.' },
    credit: { author: 'Samuel Ferrara', license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/', source: 'https://commons.wikimedia.org/wiki/File:Kapellbr%C3%BCcke_Dawn.jpg' },
  },
  // Centred on Lake Lucerne, between the city and the Gotthard
  map: { lat: 46.87, lng: 8.5, zoom: 9 },
  destinations: ['lucerne', 'weggis', 'engelberg', 'andermatt', 'vitznau', 'brunnen', 'rigi-kaltbad', 'stoos', 'zug', 'einsiedeln'],
  criteria: [
    { en: 'Quiet', fr: 'Calme', de: 'Ruhe' },
    { en: 'Views', fr: 'Vue', de: 'Aussicht' },
    { en: 'Evenings out', fr: 'Sorties le soir', de: 'Abends unterwegs' },
    { en: 'Without a car', fr: 'Sans voiture', de: 'Ohne Auto' },
    { en: 'Ski area', fr: 'Domaine skiable', de: 'Skigebiet' },
  ],
  rows: [
    { slug: 'lucerne', scores: [1, 3, 5, 5, 1], forWhom: { en: 'Arriving by train, museums, boats, the widest choice of hotels', fr: 'Arriver en train, musées, bateaux, le plus grand choix d’hôtels', de: 'Anreise mit dem Zug, Museen, Schiffe, grösste Hotelauswahl' } },
    { slug: 'weggis', scores: [4, 4, 2, 4, 1], forWhom: { en: 'A quiet lakeside village, the Rigi cable car, mild weather', fr: 'Un village calme au bord du lac, le téléphérique du Rigi, un climat doux', de: 'Ein ruhiges Seedorf, die Rigi-Bahn, mildes Klima' } },
    { slug: 'engelberg', scores: [3, 5, 3, 4, 4], forWhom: { en: 'The Titlis glacier, the monastery, skiing without a car', fr: 'Le glacier du Titlis, l’abbaye, le ski sans voiture', de: 'Titlis-Gletscher, Kloster, Skifahren ohne Auto' } },
    { slug: 'andermatt', scores: [3, 5, 3, 4, 5], forWhom: { en: 'The biggest ski area of the four, the Glacier Express, the passes', fr: 'Le plus grand domaine des quatre, le Glacier Express, les cols', de: 'Das grösste Skigebiet der vier, der Glacier Express, die Pässe' } },
  ],
  verdicts: [
    { profile: { en: 'First visit', fr: 'Première fois', de: 'Erster Besuch' }, slug: 'lucerne', reason: { en: 'Everything leaves from the city: the boats, the trains to Engelberg and Andermatt, and the two rack railways up the Rigi and Pilatus.', fr: 'Tout part de la ville : les bateaux, les trains pour Engelberg et Andermatt, et les deux crémaillères du Rigi et du Pilate.', de: 'Alles startet in der Stadt: die Schiffe, die Züge nach Engelberg und Andermatt und die beiden Zahnradbahnen auf Rigi und Pilatus.' } },
    { profile: { en: 'Quiet', fr: 'Calme', de: 'Ruhe' }, slug: 'weggis', reason: { en: 'On the lake shore under the Rigi, with the boat to Lucerne and a cable car to a car-free village above.', fr: 'Au bord du lac sous le Rigi, avec le bateau pour Lucerne et un téléphérique vers un village sans voiture au-dessus.', de: 'Am Seeufer unter der Rigi, mit dem Schiff nach Luzern und einer Bahn zu einem autofreien Dorf darüber.' } },
    { profile: { en: 'Skiing', fr: 'Pour skier', de: 'Zum Skifahren' }, slug: 'andermatt', reason: { en: 'The Andermatt, Sedrun and Disentis area is the largest here, and the village sits where three mountain passes meet.', fr: 'Le domaine Andermatt, Sedrun et Disentis est le plus grand du secteur, et le village se trouve au croisement de trois cols.', de: 'Das Gebiet Andermatt, Sedrun und Disentis ist hier das grösste, und das Dorf liegt am Kreuz dreier Pässe.' } },
    { profile: { en: 'A glacier in summer', fr: 'Un glacier en été', de: 'Ein Gletscher im Sommer' }, slug: 'engelberg', reason: { en: 'The Titlis cable car reaches 3020 m and runs through the summer, with the Benedictine monastery down in the village.', fr: 'Le téléphérique du Titlis atteint 3020 m et fonctionne l’été, avec l’abbaye bénédictine en bas dans le village.', de: 'Die Titlisbahn erreicht 3020 m und fährt auch im Sommer, unten im Dorf das Benediktinerkloster.' } },
  ],
  note: {
    en: 'Scores are our editorial reading of the facts on each destination page (transport, altitude, figures published by the operators), checked on 16 September 2026.',
    fr: 'Les notes sont notre lecture éditoriale des faits présentés sur chaque page destination (transports, altitude, chiffres publiés par les exploitants), vérifiés le 16 septembre 2026.',
    de: 'Die Bewertungen sind unsere redaktionelle Einordnung der Fakten auf den Reiseziel-Seiten (Verkehr, Höhe, von den Betreibern publizierte Zahlen), geprüft am 16. September 2026.',
  },
}
