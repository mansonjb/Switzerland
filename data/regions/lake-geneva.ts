import type { Region } from '../types'

// Scores are editorial judgments built on the sourced facts of each destination page, not measurements.
export const lakeGeneva: Region = {
  slug: 'lake-geneva',
  key: 'lake-geneva',
  updated: '2026-09-16',
  name: { en: 'Lake Geneva region', fr: 'Région lémanique', de: 'Genferseegebiet' },
  meta: {
    title: { en: 'Lake Geneva: Geneva, Lausanne, Montreux or Vevey?', fr: 'Lac Léman : Genève, Lausanne, Montreux ou Vevey ?', de: 'Genfersee: Genf, Lausanne, Montreux oder Vevey?' },
    description: {
      en: 'Four possible bases on the same lake compared on quiet, the lakefront, evenings out, getting around without a car and what there is to visit, with a verdict for each type of traveller.',
      fr: 'Quatre bases possibles sur le même lac comparées sur le calme, le bord de l’eau, les sorties du soir, les déplacements sans voiture et ce qu’il y a à visiter, avec un verdict par profil.',
      de: 'Vier mögliche Standorte am selben See im Vergleich: Ruhe, Seeufer, Abende, Unterwegssein ohne Auto und was es zu besichtigen gibt, mit Empfehlung pro Reisetyp.',
    },
  },
  intro: {
    en: 'One long lake with four towns strung along its north shore, on the same railway line and the same boat network, and two mountain resorts in the Vaud Alps above it. From Geneva to Vevey the pace drops and the vineyards start; above Aigle, Villars and Les Diablerets trade the lake for the mountain.',
    fr: 'Un long lac, quatre villes alignées sur sa rive nord, sur la même ligne de train et le même réseau de bateaux, et deux stations des Alpes vaudoises au-dessus. De Genève à Vevey le rythme ralentit et les vignes commencent ; au-dessus d’Aigle, Villars et Les Diablerets échangent le lac contre la montagne.',
    de: 'Ein langer See mit vier Städten entlang seines Nordufers, an derselben Bahnlinie und demselben Schiffsnetz, und darüber zwei Ferienorte in den Waadtländer Alpen. Von Genf bis Vevey wird das Tempo ruhiger und die Reben beginnen; oberhalb von Aigle tauschen Villars und Les Diablerets den See gegen den Berg.',
  },
  quickAnswer: {
    en: 'Stay in Geneva if you fly in or work there, in Lausanne for a full city with a metro down to the water, in Montreux for the lakefront and Chillon castle, and in Vevey for a market town at the foot of the Lavaux vineyards.',
    fr: 'Dormez à Genève si vous arrivez en avion ou y travaillez, à Lausanne pour une vraie ville avec un métro qui descend au lac, à Montreux pour le bord de l’eau et le château de Chillon, et à Vevey pour une ville de marché au pied du Lavaux.',
    de: 'Übernachten Sie in Genf bei Anreise per Flug oder aus geschäftlichen Gründen, in Lausanne für eine richtige Stadt mit einer Metro hinunter zum See, in Montreux für die Uferpromenade und das Schloss Chillon, und in Vevey für eine Marktstadt am Fuss der Lavaux-Rebberge.',
  },
  hero: {
    photo: '/photos/montreux.jpg',
    caption: { en: 'Montreux and the lake seen from Clarens.', fr: 'Montreux et le lac vus depuis Clarens.', de: 'Montreux und der See von Clarens aus gesehen.' },
    credit: { author: 'Florian Pépellin', license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/', source: 'https://commons.wikimedia.org/wiki/File:Panorama_Montreux_et_L%C3%A9man_depuis_Clarens_(juin_2019).JPG' },
  },
  // Centred on the lake, between Lausanne and Montreux
  map: { lat: 46.45, lng: 6.7, zoom: 10 },
  destinations: ['geneva', 'lausanne', 'vevey', 'montreux', 'villars', 'les-diablerets'],
  criteria: [
    { en: 'Quiet', fr: 'Calme', de: 'Ruhe' },
    { en: 'Lakefront', fr: 'Bord du lac', de: 'Seeufer' },
    { en: 'Evenings out', fr: 'Sorties le soir', de: 'Abends unterwegs' },
    { en: 'Without a car', fr: 'Sans voiture', de: 'Ohne Auto' },
    { en: 'Things to visit', fr: 'À visiter', de: 'Sehenswertes' },
  ],
  rows: [
    { slug: 'geneva', scores: [1, 3, 5, 5, 4], forWhom: { en: 'Flying in, the international district, the widest choice of rooms', fr: 'Arriver en avion, le quartier international, le plus grand choix de chambres', de: 'Anreise per Flug, das internationale Quartier, grösste Zimmerauswahl' } },
    { slug: 'lausanne', scores: [2, 4, 5, 5, 5], forWhom: { en: 'A full city, the metro to Ouchy, museums, a base for the vineyards', fr: 'Une vraie ville, le métro jusqu’à Ouchy, les musées, une base pour le vignoble', de: 'Eine richtige Stadt, die Metro nach Ouchy, Museen, Basis für die Rebberge' } },
    { slug: 'montreux', scores: [3, 5, 4, 5, 5], forWhom: { en: 'The promenade, Chillon castle, the mountain railway behind the town', fr: 'La promenade, le château de Chillon, le train de montagne derrière la ville', de: 'Die Promenade, Schloss Chillon, die Bergbahn hinter der Stadt' } },
    { slug: 'vevey', scores: [4, 5, 3, 5, 4], forWhom: { en: 'A market town, Chaplin’s house, the Lavaux terraces on foot', fr: 'Une ville de marché, la maison de Chaplin, les terrasses de Lavaux à pied', de: 'Eine Marktstadt, Chaplins Haus, die Lavaux-Terrassen zu Fuss' } },
  ],
  verdicts: [
    { profile: { en: 'First visit', fr: 'Première fois', de: 'Erster Besuch' }, slug: 'lausanne', reason: { en: 'The most complete of the four: a metro from the station down to the lake, museums, and trains along the shore in both directions.', fr: 'La plus complète des quatre : un métro de la gare jusqu’au lac, des musées, et des trains le long de la rive dans les deux sens.', de: 'Die vollständigste der vier: eine Metro vom Bahnhof hinunter zum See, Museen und Züge dem Ufer entlang in beide Richtungen.' } },
    { profile: { en: 'On the water', fr: 'Au bord de l’eau', de: 'Am Wasser' }, slug: 'montreux', reason: { en: 'The promenade runs from the town to Chillon castle, and the boats and the mountain railway both leave from the front.', fr: 'La promenade va de la ville au château de Chillon, et les bateaux comme le train de montagne partent du bord du lac.', de: 'Die Promenade führt von der Stadt zum Schloss Chillon, und Schiffe wie Bergbahn starten am Ufer.' } },
    { profile: { en: 'Quiet and vineyards', fr: 'Calme et vignoble', de: 'Ruhe und Rebberge' }, slug: 'vevey', reason: { en: 'The smallest of the four, at the foot of the Lavaux terraces, with the market square and Chaplin’s World above the town.', fr: 'La plus petite des quatre, au pied des terrasses de Lavaux, avec la place du marché et Chaplin’s World au-dessus de la ville.', de: 'Die kleinste der vier, am Fuss der Lavaux-Terrassen, mit dem Marktplatz und Chaplin’s World über der Stadt.' } },
    { profile: { en: 'Flying in', fr: 'Arrivée en avion', de: 'Anreise per Flug' }, slug: 'geneva', reason: { en: 'The airport is a few minutes from the main station by train, and the lake shore starts where the old town ends.', fr: 'L’aéroport est à quelques minutes de la gare principale en train, et la rive du lac commence là où finit la vieille ville.', de: 'Der Flughafen liegt wenige Zugminuten vom Hauptbahnhof, und das Seeufer beginnt dort, wo die Altstadt endet.' } },
  ],
  note: {
    en: 'Scores are our editorial reading of the facts on each destination page (transport, position, opening seasons), checked on 16 September 2026.',
    fr: 'Les notes sont notre lecture éditoriale des faits présentés sur chaque page destination (transports, situation, saisons d’ouverture), vérifiés le 16 septembre 2026.',
    de: 'Die Bewertungen sind unsere redaktionelle Einordnung der Fakten auf den Reiseziel-Seiten (Verkehr, Lage, Öffnungszeiten), geprüft am 16. September 2026.',
  },
}
