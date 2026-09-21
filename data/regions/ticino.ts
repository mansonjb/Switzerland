import type { Region } from '../types'

// Scores are editorial judgments built on the sourced facts of each destination page, not measurements.
export const ticino: Region = {
  slug: 'ticino',
  key: 'ticino',
  updated: '2026-09-16',
  name: { en: 'Ticino', fr: 'Tessin', de: 'Tessin' },
  meta: {
    title: { en: 'Ticino: Lugano, Locarno or Ascona?', fr: 'Tessin : Lugano, Locarno ou Ascona ?', de: 'Tessin: Lugano, Locarno oder Ascona?' },
    description: {
      en: 'Three possible bases on the Italian-speaking side compared on quiet, the lakefront, evenings out, arriving without a car and the mountain trips, with a verdict for each type of traveller.',
      fr: 'Trois bases possibles du côté italophone comparées sur le calme, le bord du lac, les sorties du soir, l’arrivée sans voiture et les excursions en montagne, avec un verdict par profil.',
      de: 'Drei mögliche Standorte auf der italienischsprachigen Seite im Vergleich: Ruhe, Seepromenade, Abende, Anreise ohne Auto und Bergausflüge, mit Empfehlung pro Reisetyp.',
    },
  },
  intro: {
    en: 'South of the Gotthard the language changes and so does the weather. Locarno and Ascona sit on Lake Maggiore, Lugano on its own lake behind the mountain, and Bellinzona guards the valley with its three castles. The choice is mostly between a working city, a lakeside promenade and a castle town.',
    fr: 'Au sud du Gothard, la langue change, et le temps aussi. Locarno et Ascona sont au bord du lac Majeur, Lugano sur son propre lac derrière la montagne, et Bellinzone garde la vallée avec ses trois châteaux. Le choix se fait surtout entre une ville active, une promenade au bord du lac et une ville de châteaux.',
    de: 'Südlich des Gotthards wechselt die Sprache und mit ihr das Wetter. Locarno und Ascona liegen am Lago Maggiore, Lugano an seinem eigenen See hinter dem Berg, und Bellinzona bewacht mit seinen drei Burgen das Tal. Die Wahl fällt meist zwischen einer lebendigen Stadt, einer Seepromenade und einer Burgenstadt.',
  },
  quickAnswer: {
    en: 'Stay in Lugano for a city with its own station and two funiculars, in Locarno for the old town and the Cardada cable car, and in Ascona for the lakefront promenade if you do not mind a bus to the nearest station.',
    fr: 'Dormez à Lugano pour une ville avec sa propre gare et deux funiculaires, à Locarno pour la vieille ville et le téléphérique de Cardada, et à Ascona pour la promenade au bord de l’eau si un bus jusqu’à la gare ne vous dérange pas.',
    de: 'Übernachten Sie in Lugano für eine Stadt mit eigenem Bahnhof und zwei Standseilbahnen, in Locarno für die Altstadt und die Cardada-Bahn, und in Ascona für die Seepromenade, wenn Ihnen ein Bus zum Bahnhof nichts ausmacht.',
  },
  hero: {
    photo: '/photos/lugano.jpg',
    caption: { en: 'Lugano on its lake, seen from the Sighignola ridge.', fr: 'Lugano sur son lac, vue depuis la crête de Sighignola.', de: 'Lugano an seinem See, von der Sighignola aus gesehen.' },
    credit: { author: 'Aconcagua', license: 'CC BY-SA 3.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/', source: 'https://commons.wikimedia.org/wiki/File:Lugano_from_Sighignola.jpg' },
  },
  // Centred between Lake Maggiore and Lake Lugano
  map: { lat: 46.1, lng: 8.85, zoom: 10 },
  destinations: ['lugano', 'locarno', 'ascona', 'bellinzona'],
  criteria: [
    { en: 'Quiet', fr: 'Calme', de: 'Ruhe' },
    { en: 'Lakefront', fr: 'Bord du lac', de: 'Seepromenade' },
    { en: 'Evenings out', fr: 'Sorties le soir', de: 'Abends unterwegs' },
    { en: 'Arriving by train', fr: 'Arriver en train', de: 'Anreise mit dem Zug' },
    { en: 'Mountain trips', fr: 'Excursions en montagne', de: 'Bergausflüge' },
  ],
  rows: [
    { slug: 'lugano', scores: [2, 4, 5, 5, 4], forWhom: { en: 'A city that works all year, direct trains, two funiculars', fr: 'Une ville qui vit toute l’année, des trains directs, deux funiculaires', de: 'Eine Stadt, die das ganze Jahr lebt, Direktzüge, zwei Standseilbahnen' } },
    { slug: 'locarno', scores: [3, 4, 4, 5, 5], forWhom: { en: 'The old town and Piazza Grande, its own station, Cardada above', fr: 'La vieille ville et la Piazza Grande, sa propre gare, Cardada au-dessus', de: 'Altstadt und Piazza Grande, eigener Bahnhof, Cardada darüber' } },
    { slug: 'ascona', scores: [4, 5, 3, 2, 3], forWhom: { en: 'The lakefront promenade, a slower pace, a short bus from the train', fr: 'La promenade au bord du lac, un rythme plus lent, un bus depuis le train', de: 'Die Seepromenade, langsameres Tempo, kurze Busfahrt ab dem Zug' } },
  ],
  verdicts: [
    { profile: { en: 'First visit', fr: 'Première fois', de: 'Erster Besuch' }, slug: 'lugano', reason: { en: 'Direct trains through the Gotthard base tunnel, a pedestrian centre, and the funiculars to Monte San Salvatore and Monte Brè.', fr: 'Des trains directs par le tunnel de base du Gothard, un centre piéton, et les funiculaires du Monte San Salvatore et du Monte Brè.', de: 'Direktzüge durch den Gotthard-Basistunnel, eine Fussgängerzone und die Bahnen auf Monte San Salvatore und Monte Brè.' } },
    { profile: { en: 'Without a car', fr: 'Sans voiture', de: 'Ohne Auto' }, slug: 'locarno', reason: { en: 'The station is in the town, the Centovalli line and the Cardada cable car both start from it.', fr: 'La gare est en ville, la ligne des Centovalli et le téléphérique de Cardada en partent.', de: 'Der Bahnhof liegt in der Stadt, Centovalli-Bahn und Cardada-Bahn starten dort.' } },
    { profile: { en: 'Quiet by the water', fr: 'Au calme au bord de l’eau', de: 'Ruhe am Wasser' }, slug: 'ascona', reason: { en: 'A lakefront of cafes with no through traffic, ten minutes by bus from Locarno station.', fr: 'Un bord de lac de terrasses sans circulation de transit, à dix minutes de bus de la gare de Locarno.', de: 'Eine Uferpromenade mit Cafés ohne Durchgangsverkehr, zehn Busminuten ab dem Bahnhof Locarno.' } },
  ],
  note: {
    en: 'Scores are our editorial reading of the facts on each destination page (transport, position, figures published by the operators), checked on 16 September 2026.',
    fr: 'Les notes sont notre lecture éditoriale des faits présentés sur chaque page destination (transports, situation, chiffres publiés par les exploitants), vérifiés le 16 septembre 2026.',
    de: 'Die Bewertungen sind unsere redaktionelle Einordnung der Fakten auf den Reiseziel-Seiten (Verkehr, Lage, von den Betreibern publizierte Zahlen), geprüft am 16. September 2026.',
  },
}
