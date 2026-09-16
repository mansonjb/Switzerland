import type { Region } from '../types'

// Scores are editorial judgments built on the sourced facts of each destination page, not measurements.
export const valais: Region = {
  slug: 'valais',
  key: 'valais',
  updated: '2026-09-16',
  name: { en: 'Valais', fr: 'Valais', de: 'Wallis' },
  meta: {
    title: { en: 'Valais: Zermatt, Saas-Fee or Verbier?', fr: 'Valais : Zermatt, Saas-Fee ou Verbier ?', de: 'Wallis: Zermatt, Saas-Fee oder Verbier?' },
    description: {
      en: 'Three possible bases in the Valais compared on quiet, views, nightlife, car-free access and the size of the ski area, with a verdict for each type of traveller.',
      fr: 'Trois bases possibles en Valais comparées sur le calme, la vue, la vie nocturne, l’accès sans voiture et la taille du domaine skiable, avec un verdict par profil.',
      de: 'Drei mögliche Standorte im Wallis im Vergleich: Ruhe, Aussicht, Ausgehen, autofreier Zugang und Grösse des Skigebiets, mit Empfehlung pro Reisetyp.',
    },
  },
  intro: {
    en: 'The Valais is the driest and highest of the Swiss cantons for holidays: two of its best known villages let no private car in at all, the third is reached by road. The choice comes down to how you arrive, how high you sleep, and what you want on the mountain.',
    fr: 'Le Valais est le canton le plus sec et le plus haut perché pour les vacances : deux de ses villages les plus connus n’acceptent aucune voiture privée, le troisième est accessible par la route. Le choix se joue sur la façon d’arriver, l’altitude où l’on dort, et ce que l’on cherche en montagne.',
    de: 'Das Wallis ist der trockenste und höchstgelegene Ferienkanton der Schweiz: Zwei seiner bekanntesten Dörfer lassen gar kein Privatauto herein, das dritte ist per Strasse erreichbar. Die Wahl hängt an der Anreise, an der Höhe, auf der Sie schlafen, und daran, was Sie am Berg suchen.',
  },
  quickAnswer: {
    en: 'Stay in Zermatt for the Matterhorn and the Gornergrat railway, in Saas-Fee for a smaller car-free village under the glaciers, and in Verbier if you want to drive up to a 410 km ski area.',
    fr: 'Dormez à Zermatt pour le Cervin et le train du Gornergrat, à Saas-Fee pour un village sans voiture plus petit sous les glaciers, et à Verbier si vous voulez monter en voiture au pied d’un domaine de 410 km.',
    de: 'Übernachten Sie in Zermatt für Matterhorn und Gornergratbahn, in Saas-Fee für ein kleineres autofreies Dorf unter den Gletschern, und in Verbier, wenn Sie mit dem Auto zu einem 410 km grossen Skigebiet fahren wollen.',
  },
  hero: {
    photo: '/photos/zermatt.jpg',
    caption: { en: 'Zermatt at 1608 m in the Mattertal, under the Matterhorn.', fr: 'Zermatt à 1608 m dans le Mattertal, sous le Cervin.', de: 'Zermatt auf 1608 m im Mattertal, unter dem Matterhorn.' },
    credit: { author: 'Jérémy Toma', license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/', source: 'https://commons.wikimedia.org/wiki/File:Zermatt_%28VS%29.jpg' },
  },
  // Centred between the Mattertal, the Saastal and the Bagnes valley
  map: { lat: 46.15, lng: 7.55, zoom: 9 },
  destinations: ['zermatt', 'saas-fee', 'verbier', 'crans-montana', 'leukerbad', 'grachen', 'bettmeralp', 'riederalp', 'zinal', 'champery', 'sion'],
  criteria: [
    { en: 'Quiet', fr: 'Calme', de: 'Ruhe' },
    { en: 'Views', fr: 'Vue', de: 'Aussicht' },
    { en: 'Nightlife', fr: 'Vie nocturne', de: 'Ausgehen' },
    { en: 'Car-free', fr: 'Sans voiture', de: 'Autofrei' },
    { en: 'Ski area', fr: 'Domaine skiable', de: 'Skigebiet' },
  ],
  rows: [
    { slug: 'zermatt', scores: [3, 5, 4, 5, 5], forWhom: { en: 'The Matterhorn in front of you, the Gornergrat railway, no cars', fr: 'Le Cervin en face, le train du Gornergrat, pas de voitures', de: 'Das Matterhorn vor Augen, die Gornergratbahn, keine Autos' } },
    { slug: 'saas-fee', scores: [4, 5, 2, 5, 3], forWhom: { en: 'A smaller car-free village ringed by glaciers, families', fr: 'Un village sans voiture plus petit, cerné de glaciers, familles', de: 'Ein kleineres autofreies Dorf im Gletscherkranz, Familien' } },
    { slug: 'verbier', scores: [2, 4, 5, 1, 5], forWhom: { en: 'Arriving by car, the 4 Vallées, going out in the evening', fr: 'Arriver en voiture, les 4 Vallées, sortir le soir', de: 'Anreise mit dem Auto, die 4 Vallées, Ausgehen am Abend' } },
  ],
  verdicts: [
    { profile: { en: 'First visit', fr: 'Première fois', de: 'Erster Besuch' }, slug: 'zermatt', reason: { en: 'The mountain everyone comes for, a village with no cars, and the cog railway to the Gornergrat leaving 50 m from the station.', fr: 'La montagne que tout le monde vient voir, un village sans voitures, et le train à crémaillère du Gornergrat à 50 m de la gare.', de: 'Der Berg, für den alle kommen, ein Dorf ohne Autos und die Gornergratbahn 50 m vom Bahnhof entfernt.' } },
    { profile: { en: 'With children', fr: 'Avec des enfants', de: 'Mit Kindern' }, slug: 'saas-fee', reason: { en: 'Everything is within the village, cars stay in the garage at the entrance, and the glaciers start above the last houses.', fr: 'Tout est dans le village, les voitures restent au garage à l’entrée, et les glaciers commencent au-dessus des dernières maisons.', de: 'Alles liegt im Dorf, die Autos bleiben im Parkhaus am Eingang, und die Gletscher beginnen über den letzten Häusern.' } },
    { profile: { en: 'Arriving by car', fr: 'En voiture', de: 'Mit dem Auto' }, slug: 'verbier', reason: { en: 'You can park in the village itself, and the lifts open onto the 410 km of the 4 Vallées.', fr: 'On se gare dans le village même, et les remontées ouvrent sur les 410 km des 4 Vallées.', de: 'Man parkiert im Dorf selbst, und die Bahnen führen in die 410 km der 4 Vallées.' } },
  ],
  note: {
    en: 'Scores are our editorial reading of the facts on each destination page (altitude, road access, ski area figures published by the lift companies), checked on 16 September 2026.',
    fr: 'Les notes sont notre lecture éditoriale des faits présentés sur chaque page destination (altitude, accès routier, chiffres des domaines publiés par les remontées), vérifiés le 16 septembre 2026.',
    de: 'Die Bewertungen sind unsere redaktionelle Einordnung der Fakten auf den Reiseziel-Seiten (Höhe, Strassenzugang, von den Bahnen publizierte Skigebietszahlen), geprüft am 16. September 2026.',
  },
}
