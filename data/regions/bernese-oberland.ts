import type { Region } from '../types'

// Scores are editorial judgments built on the sourced facts (data/SOURCES.md), not measurements.
export const berneseOberland: Region = {
  slug: 'bernese-oberland',
  key: 'bernese-oberland',
  updated: '2026-09-15',
  name: { en: 'Bernese Oberland', fr: 'Oberland bernois', de: 'Berner Oberland' },
  meta: {
    title: { en: 'Bernese Oberland: Interlaken, Lauterbrunnen, Wengen, Mürren or Grindelwald?', fr: 'Oberland bernois : Interlaken, Lauterbrunnen, Wengen, Mürren ou Grindelwald ?', de: 'Berner Oberland: Interlaken, Lauterbrunnen, Wengen, Mürren oder Grindelwald?' },
    description: {
      en: 'Five possible bases for the Jungfrau region compared on quiet, views, nightlife, car-free access and the trip to the Jungfraujoch, with a verdict for each type of traveller.',
      fr: "Cinq bases possibles pour la région de la Jungfrau comparées sur le calme, la vue, la vie nocturne, l'accès sans voiture et le trajet vers le Jungfraujoch, avec un verdict par profil.",
      de: 'Fünf mögliche Standorte in der Jungfrauregion im Vergleich: Ruhe, Aussicht, Ausgehen, autofreier Zugang und Weg aufs Jungfraujoch, mit Empfehlung pro Reisetyp.',
    },
  },
  intro: {
    en: 'Five possible bases in the same corner of the Alps, linked by train and cable car. The choice comes down to three things: altitude, whether cars can reach the village, and how long it takes to get to the Jungfraujoch.',
    fr: "Cinq bases possibles dans le même coin des Alpes, reliées par le train et le téléphérique. Le choix se joue sur trois choses : l'altitude, l'accès ou non des voitures, et le temps pour rejoindre le Jungfraujoch.",
    de: 'Fünf mögliche Standorte in derselben Ecke der Alpen, verbunden durch Bahn und Seilbahn. Die Wahl hängt an drei Dingen: Höhe, ob Autos ins Dorf fahren, und wie lange es aufs Jungfraujoch dauert.',
  },
  quickAnswer: {
    en: 'Stay in Lauterbrunnen for a central base in the valley, Wengen for a car-free village with shops, Mürren for quiet, Grindelwald for the fastest trip to the Jungfraujoch, and Interlaken if you arrive late by train.',
    fr: "Dormez à Lauterbrunnen pour une base centrale dans la vallée, à Wengen pour un village sans voiture avec des commerces, à Mürren pour le calme, à Grindelwald pour le trajet le plus rapide vers le Jungfraujoch, et à Interlaken si vous arrivez tard en train.",
    de: 'Übernachten Sie in Lauterbrunnen für einen zentralen Standort im Tal, in Wengen für ein autofreies Dorf mit Läden, in Mürren für Ruhe, in Grindelwald für den schnellsten Weg aufs Jungfraujoch und in Interlaken bei später Ankunft mit dem Zug.',
  },
  hero: {
    photo: '/photos/wengen-hero.jpg',
    caption: { en: 'Wengen above the Lauterbrunnen valley, with the Eiger, Mönch and Jungfrau.', fr: "Wengen au-dessus de la vallée de Lauterbrunnen, avec l'Eiger, le Mönch et la Jungfrau.", de: 'Wengen über dem Lauterbrunnental, mit Eiger, Mönch und Jungfrau.' },
    credit: { author: 'Parchaco', license: 'CC0 1.0', licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/', source: 'https://commons.wikimedia.org/wiki/File:Wengen_viewed_from_Isenfluh%2C_in_the_background%2C_the_Eiger%2C_M%C3%B6nch%2C_and_Jungfrau_peaks_rise.jpg' },
  },
  // Centred between Interlaken and Grindelwald, over the Lauterbrunnen valley
  map: { lat: 46.63, lng: 7.93, zoom: 11 },
  destinations: ['interlaken', 'lauterbrunnen', 'wengen', 'murren', 'grindelwald', 'gstaad', 'adelboden', 'kandersteg', 'brienz', 'meiringen', 'thun', 'spiez'],
  criteria: [
    { en: 'Quiet', fr: 'Calme', de: 'Ruhe' },
    { en: 'Views', fr: 'Vue', de: 'Aussicht' },
    { en: 'Nightlife', fr: 'Vie nocturne', de: 'Ausgehen' },
    { en: 'Car-free', fr: 'Sans voiture', de: 'Autofrei' },
    { en: 'Jungfraujoch', fr: 'Jungfraujoch', de: 'Jungfraujoch' },
  ],
  rows: [
    { slug: 'interlaken', scores: [1, 2, 5, 1, 2], forWhom: { en: 'Late arrival, first night, widest choice of rooms', fr: 'Arrivée tardive, première nuit, le plus grand choix de chambres', de: 'Späte Ankunft, erste Nacht, grösste Zimmerauswahl' } },
    { slug: 'lauterbrunnen', scores: [3, 4, 2, 1, 3], forWhom: { en: 'Valley floor and waterfalls, central base, families', fr: 'Fond de vallée et cascades, base centrale, familles', de: 'Talboden und Wasserfälle, zentraler Standort, Familien' } },
    { slug: 'wengen', scores: [4, 4, 3, 5, 3], forWhom: { en: 'Car-free village with shops around the station', fr: 'Village sans voiture avec commerces autour de la gare', de: 'Autofreies Dorf mit Läden rund um den Bahnhof' } },
    { slug: 'murren', scores: [5, 5, 1, 5, 2], forWhom: { en: 'Complete quiet, hiking, longer stays', fr: 'Calme complet, randonnée, séjours longs', de: 'Absolute Ruhe, Wandern, längere Aufenthalte' } },
    { slug: 'grindelwald', scores: [2, 4, 4, 1, 5], forWhom: { en: 'Fastest route to the Jungfraujoch, large ski area', fr: 'Accès le plus rapide au Jungfraujoch, grand domaine skiable', de: 'Schnellster Weg aufs Jungfraujoch, grosses Skigebiet' } },
  ],
  verdicts: [
    { profile: { en: 'First visit', fr: 'Première fois', de: 'Erster Besuch' }, slug: 'lauterbrunnen', reason: { en: 'In the middle of the valley: Wengen is 12 minutes away by train, Mürren about 20 minutes by cable car and train.', fr: 'Au milieu de la vallée : Wengen est à 12 minutes de train, Mürren à une vingtaine de minutes en téléphérique et train.', de: 'Mitten im Tal: Wengen liegt 12 Zugminuten entfernt, Mürren rund 20 Minuten mit Seilbahn und Bahn.' } },
    { profile: { en: 'Car-free', fr: 'Sans voiture', de: 'Autofrei' }, slug: 'wengen', reason: { en: 'No cars in the village, but shops and restaurants right by the station.', fr: 'Aucune voiture dans le village, mais des commerces et restaurants juste à côté de la gare.', de: 'Keine Autos im Dorf, aber Läden und Restaurants direkt beim Bahnhof.' } },
    { profile: { en: 'Quiet', fr: 'Calme', de: 'Ruhe' }, slug: 'murren', reason: { en: 'The highest of the five at 1638 m, car-free, and reached in two stages from Lauterbrunnen.', fr: 'Le plus haut des cinq à 1638 m, sans voiture, et accessible en deux étapes depuis Lauterbrunnen.', de: 'Mit 1638 m der höchste der fünf, autofrei und ab Lauterbrunnen in zwei Etappen erreichbar.' } },
    { profile: { en: 'Jungfraujoch', fr: 'Jungfraujoch', de: 'Jungfraujoch' }, slug: 'grindelwald', reason: { en: 'From Grindelwald Terminal, the Eiger Express route reaches the Jungfraujoch in about 45 minutes.', fr: "Depuis Grindelwald Terminal, l'itinéraire par l'Eiger Express atteint le Jungfraujoch en 45 minutes environ.", de: 'Ab Grindelwald Terminal erreicht man das Jungfraujoch mit dem Eiger Express in etwa 45 Minuten.' } },
  ],
  note: {
    en: 'Scores are our editorial reading of the facts on each destination page (altitude, road access, timetables), checked on 15 September 2026.',
    fr: 'Les notes sont notre lecture éditoriale des faits présentés sur chaque page destination (altitude, accès routier, horaires), vérifiés le 15 septembre 2026.',
    de: 'Die Bewertungen sind unsere redaktionelle Einordnung der Fakten auf den Reiseziel-Seiten (Höhe, Strassenzugang, Fahrpläne), geprüft am 15. September 2026.',
  },
}
