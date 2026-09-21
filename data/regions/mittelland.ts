import type { Region } from '../types'

// Scores are editorial judgments built on the sourced facts of each destination page, not measurements.
export const mittelland: Region = {
  slug: 'swiss-plateau',
  key: 'mittelland',
  updated: '2026-09-20',
  name: { en: 'Swiss Plateau', fr: 'Plateau suisse', de: 'Mittelland' },
  meta: {
    title: { en: 'Swiss Plateau: Bern, Basel, Fribourg or Neuchâtel?', fr: 'Plateau suisse : Berne, Bâle, Fribourg ou Neuchâtel ?', de: 'Mittelland: Bern, Basel, Freiburg oder Neuenburg?' },
    description: {
      en: 'Five bases on the Swiss Plateau compared on quiet, old town, evenings out, getting around without a car and water, with a verdict for each kind of traveller.',
      fr: 'Cinq bases du Plateau suisse comparées sur le calme, la vieille ville, les sorties du soir, les déplacements sans voiture et l’eau, avec un verdict par profil.',
      de: 'Fünf Standorte im Mittelland im Vergleich: Ruhe, Altstadt, Abende, Unterwegssein ohne Auto und Wasser, mit einer Empfehlung pro Reisetyp.',
    },
  },
  intro: {
    en: 'Between the Jura and the Alps lies the part of Switzerland where people actually live: capital cities, university towns and a language border that runs through the middle of it. Everything here is half an hour from everything else by train, so the choice is about the kind of town you want to walk out into in the evening.',
    fr: 'Entre le Jura et les Alpes s’étend la Suisse où l’on vit vraiment : des villes capitales, des villes universitaires et une frontière des langues qui la traverse. Tout y est à une demi-heure de train de tout, si bien que le choix porte sur le genre de ville où l’on sort le soir.',
    de: 'Zwischen Jura und Alpen liegt die Schweiz, in der tatsächlich gelebt wird: Hauptstädte, Universitätsstädte und eine Sprachgrenze mittendrin. Alles ist hier eine halbe Zugstunde von allem entfernt, die Wahl betrifft also die Art Stadt, in die man abends hinaustritt.',
  },
  quickAnswer: {
    en: 'Sleep in Bern for the arcaded old town and the federal capital, in Basel for museums and a city that ends at two borders, in Fribourg for medieval fortifications above a river gorge, in Neuchâtel for a lakefront with a castle over it, and in Gruyères for a walled village that empties in the evening.',
    fr: 'Dormez à Berne pour la vieille ville à arcades et la capitale fédérale, à Bâle pour les musées et une ville qui finit à deux frontières, à Fribourg pour les fortifications médiévales au-dessus des gorges, à Neuchâtel pour un front de lac dominé par un château, et à Gruyères pour un village fortifié qui se vide le soir.',
    de: 'Übernachten Sie in Bern für die Laubengassen und die Bundesstadt, in Basel für Museen und eine Stadt, die an zwei Grenzen endet, in Freiburg für mittelalterliche Befestigungen über der Schlucht, in Neuenburg für eine Seepromenade mit Schloss darüber, und in Greyerz für ein Mauerdorf, das abends leer wird.',
  },
  hero: {
    photo: '/photos/berne.jpg',
    caption: { en: 'Bern and the bend of the Aare around the old town.', fr: 'Berne et la boucle de l’Aare autour de la vieille ville.', de: 'Bern und die Aareschlaufe um die Altstadt.' },
    credit: { author: 'H. Helmlechner', license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/', source: 'https://commons.wikimedia.org/wiki/File:Bern_Panorama_07.jpg' },
  },
  // Centred between Bern, Fribourg and the lake of Neuchâtel
  map: { lat: 46.9, lng: 7.2, zoom: 9 },
  destinations: ['bern', 'basel', 'fribourg', 'neuchatel', 'gruyeres', 'chateau-d-oex'],
  criteria: [
    { en: 'Quiet', fr: 'Calme', de: 'Ruhe' },
    { en: 'Old town', fr: 'Vieille ville', de: 'Altstadt' },
    { en: 'Evenings out', fr: 'Sorties le soir', de: 'Abends unterwegs' },
    { en: 'Without a car', fr: 'Sans voiture', de: 'Ohne Auto' },
    { en: 'Water', fr: 'L’eau', de: 'Wasser' },
  ],
  rows: [
    { slug: 'bern', scores: [2, 5, 4, 5, 3], forWhom: { en: 'Arcades in the rain, the federal capital, trains in every direction', fr: 'Les arcades sous la pluie, la capitale fédérale, des trains dans toutes les directions', de: 'Lauben bei Regen, die Bundesstadt, Züge in alle Richtungen' } },
    { slug: 'basel', scores: [2, 4, 5, 5, 4], forWhom: { en: 'Museums, a Rhine you can swim down, a city that ends at two borders', fr: 'Les musées, un Rhin qu’on descend à la nage, une ville qui finit à deux frontières', de: 'Museen, ein Rhein zum Hinunterschwimmen, eine Stadt an zwei Grenzen' } },
    { slug: 'fribourg', scores: [3, 5, 3, 4, 3], forWhom: { en: 'Medieval fortifications, a cathedral tower over the Sarine, the language border', fr: 'Les fortifications médiévales, la tour de la cathédrale au-dessus de la Sarine, la frontière des langues', de: 'Mittelalterliche Befestigungen, der Kathedralturm über der Saane, die Sprachgrenze' } },
    { slug: 'neuchatel', scores: [3, 4, 3, 4, 5], forWhom: { en: 'A lakefront in the middle of town, boats from the centre, a castle above it', fr: 'Un front de lac en plein centre, les bateaux du centre-ville, un château au-dessus', de: 'Eine Seepromenade mitten in der Stadt, Schiffe ab dem Zentrum, ein Schloss darüber' } },
    { slug: 'gruyeres', scores: [5, 5, 1, 3, 1], forWhom: { en: 'A walled village with a castle, quiet once the day visitors leave', fr: 'Un village fortifié avec son château, calme une fois les visiteurs d’un jour repartis', de: 'Ein Mauerdorf mit Schloss, ruhig, sobald die Tagesgäste weg sind' } },
  ],
  verdicts: [
    { profile: { en: 'First visit', fr: 'Première fois', de: 'Erster Besuch' }, slug: 'bern', reason: { en: 'The old town is a walkable loop inside a bend of the Aare, and the station puts Basel, Fribourg, Neuchâtel and the Bernese Oberland within easy reach for the day.', fr: 'La vieille ville forme une boucle à pied dans un méandre de l’Aare, et la gare met Bâle, Fribourg, Neuchâtel et l’Oberland bernois à portée de journée.', de: 'Die Altstadt ist eine Runde zu Fuss in einer Aareschlaufe, und vom Bahnhof sind Basel, Freiburg, Neuenburg und das Berner Oberland als Tagesziel gut erreichbar.' } },
    { profile: { en: 'Museums and nightlife', fr: 'Musées et vie nocturne', de: 'Museen und Ausgang' }, slug: 'basel', reason: { en: 'The museum density and the evening options are the highest of the five, and the city keeps working on both sides of the Rhine.', fr: 'La densité de musées et les sorties du soir sont les plus fortes des cinq, et la ville vit des deux côtés du Rhin.', de: 'Museumsdichte und Abendangebot sind die grössten der fünf, und die Stadt lebt auf beiden Rheinseiten.' } },
    { profile: { en: 'On the water', fr: 'Au bord de l’eau', de: 'Am Wasser' }, slug: 'neuchatel', reason: { en: 'The harbour row faces the lake in the middle of town, and the LNM boats leave from the same centre as the shops and the castle.', fr: 'La rangée du port fait face au lac en plein centre, et les bateaux LNM partent du même centre que les commerces et le château.', de: 'Die Hafenzeile blickt mitten in der Stadt auf den See, und die LNM-Schiffe legen dort ab, wo auch Läden und Schloss sind.' } },
    { profile: { en: 'Quiet', fr: 'Le calme', de: 'Ruhe' }, slug: 'gruyeres', reason: { en: 'The walled village keeps only a handful of hotels, so the evening belongs to the people who stayed the night rather than to the coaches.', fr: 'Le village fortifié ne compte qu’une poignée d’hôtels : le soir appartient à ceux qui y dorment, pas aux autocars.', de: 'Das Mauerdorf hat nur eine Handvoll Hotels, der Abend gehört also denen, die dort übernachten, nicht den Cars.' } },
  ],
  note: {
    en: 'Scores are our editorial reading of the facts on each destination page (transport, altitude, figures published by the operators), checked on 20 September 2026.',
    fr: 'Les notes sont notre lecture éditoriale des faits présentés sur chaque page destination (transports, altitude, chiffres publiés par les exploitants), vérifiés le 20 septembre 2026.',
    de: 'Die Bewertungen sind unsere redaktionelle Einordnung der Fakten auf den Reiseziel-Seiten (Verkehr, Höhe, von den Betreibern publizierte Zahlen), geprüft am 20. September 2026.',
  },
}
