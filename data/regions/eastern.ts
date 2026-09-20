import type { Region } from '../types'

// Scores are editorial judgments built on the sourced facts of each destination page, not measurements.
export const eastern: Region = {
  slug: 'eastern-switzerland',
  key: 'eastern',
  updated: '2026-09-20',
  name: { en: 'Eastern Switzerland', fr: 'Suisse orientale', de: 'Ostschweiz' },
  meta: {
    title: { en: 'Eastern Switzerland: St. Gallen, Appenzell, Schaffhausen?', fr: 'Suisse orientale : Saint-Gall, Appenzell, Schaffhouse ?', de: 'Ostschweiz: St. Gallen, Appenzell oder Schaffhausen?' },
    description: {
      en: 'Five bases in Eastern Switzerland compared on quiet, old town, evenings out, getting around without a car and the mountains, with a verdict for each kind of traveller.',
      fr: 'Cinq bases de Suisse orientale comparées sur le calme, la vieille ville, les sorties du soir, les déplacements sans voiture et la montagne, avec un verdict par profil.',
      de: 'Fünf Standorte in der Ostschweiz im Vergleich: Ruhe, Altstadt, Abende, Unterwegssein ohne Auto und Berge, mit einer Empfehlung pro Reisetyp.',
    },
  },
  intro: {
    en: 'This corner of the country trades glaciers for painted facades, abbey libraries and a river that becomes a waterfall. The distances are short, the trains are frequent, and one base can cover the Rhine towns, the Appenzell hills and the Alpstein without ever changing hotel.',
    fr: 'Ce coin du pays échange les glaciers contre des façades peintes, une bibliothèque abbatiale et un fleuve qui se jette en cascade. Les distances sont courtes, les trains fréquents, et une seule base couvre les villes du Rhin, les collines d’Appenzell et l’Alpstein sans changer d’hôtel.',
    de: 'Diese Ecke des Landes tauscht Gletscher gegen bemalte Fassaden, eine Stiftsbibliothek und einen Fluss, der zum Wasserfall wird. Die Wege sind kurz, die Züge häufig, und ein Standort deckt Rheinstädte, Appenzeller Hügel und Alpstein ab, ohne das Hotel zu wechseln.',
  },
  quickAnswer: {
    en: 'Sleep in St. Gallen for the abbey precinct, the widest choice of rooms and the fastest connections, in Schaffhausen or Stein am Rhein for painted old towns on the Rhine, in Appenzell for the Landsgemeinde square and the Alpstein, and in Wildhaus when the mountains are the reason for the trip.',
    fr: 'Dormez à Saint-Gall pour l’enclos abbatial, le plus grand choix de chambres et les meilleures correspondances, à Schaffhouse ou à Stein am Rhein pour des vieilles villes peintes au bord du Rhin, à Appenzell pour la place de la Landsgemeinde et l’Alpstein, et à Wildhaus quand la montagne est la raison du voyage.',
    de: 'Übernachten Sie in St. Gallen für den Stiftsbezirk, die grösste Zimmerauswahl und die schnellsten Verbindungen, in Schaffhausen oder Stein am Rhein für bemalte Altstädte am Rhein, in Appenzell für den Landsgemeindeplatz und den Alpstein, und in Wildhaus, wenn die Berge der Grund der Reise sind.',
  },
  hero: {
    photo: '/photos/schaffhausen.jpg',
    caption: { en: 'Schaffhausen from the Munot, with the Rhine below.', fr: 'Schaffhouse vue du Munot, le Rhin en contrebas.', de: 'Schaffhausen vom Munot aus, darunter der Rhein.' },
    credit: { author: 'Dgot69', license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/', source: 'https://commons.wikimedia.org/wiki/File:Munot.jpg' },
  },
  // Centred between the Rhine towns and the Alpstein
  map: { lat: 47.45, lng: 9.15, zoom: 9 },
  destinations: ['st-gallen', 'appenzell', 'schaffhausen', 'stein-am-rhein', 'wildhaus', 'braunwald'],
  criteria: [
    { en: 'Quiet', fr: 'Calme', de: 'Ruhe' },
    { en: 'Old town', fr: 'Vieille ville', de: 'Altstadt' },
    { en: 'Evenings out', fr: 'Sorties le soir', de: 'Abends unterwegs' },
    { en: 'Without a car', fr: 'Sans voiture', de: 'Ohne Auto' },
    { en: 'Mountains', fr: 'Montagne', de: 'Berge' },
  ],
  rows: [
    { slug: 'st-gallen', scores: [2, 4, 5, 5, 2], forWhom: { en: 'The abbey precinct and its library, the widest choice of hotels, fast trains in every direction', fr: 'L’enclos abbatial et sa bibliothèque, le plus grand choix d’hôtels, des trains rapides dans toutes les directions', de: 'Stiftsbezirk und Stiftsbibliothek, grösste Hotelauswahl, schnelle Züge in alle Richtungen' } },
    { slug: 'schaffhausen', scores: [3, 5, 3, 4, 1], forWhom: { en: 'Oriel windows under the Munot, the Rhine Falls nearby, a town you cross on foot', fr: 'Les encorbellements sous le Munot, les chutes du Rhin tout près, une ville qui se traverse à pied', de: 'Erker unter dem Munot, der Rheinfall in der Nähe, eine Stadt, die man zu Fuss durchquert' } },
    { slug: 'stein-am-rhein', scores: [4, 5, 2, 4, 1], forWhom: { en: 'Painted facades on the riverbank, a small town that empties after the day trippers leave', fr: 'Des façades peintes au bord de l’eau, une petite ville qui se vide après les excursionnistes', de: 'Bemalte Fassaden am Ufer, ein Städtchen, das sich nach den Tagesgästen leert' } },
    { slug: 'appenzell', scores: [4, 4, 2, 4, 4], forWhom: { en: 'The Landsgemeinde square, the Hoher Kasten cable car, walks into the Alpstein', fr: 'La place de la Landsgemeinde, le téléphérique du Hoher Kasten, les marches dans l’Alpstein', de: 'Der Landsgemeindeplatz, die Hoher-Kasten-Bahn, Wanderungen im Alpstein' } },
    { slug: 'wildhaus', scores: [4, 1, 2, 3, 5], forWhom: { en: 'The Churfirsten on one side, the Alpstein on the other, and the region’s largest ski area', fr: 'Les Churfirsten d’un côté, l’Alpstein de l’autre, et le plus grand domaine skiable de la région', de: 'Die Churfirsten auf der einen, der Alpstein auf der anderen Seite, dazu das grösste Skigebiet der Region' } },
  ],
  verdicts: [
    { profile: { en: 'First visit', fr: 'Première fois', de: 'Erster Besuch' }, slug: 'st-gallen', reason: { en: 'The abbey precinct is in the middle of the city, the hotels are the most numerous here, and the trains to Appenzell, Schaffhausen and the Alpstein all leave from the same station.', fr: 'L’enclos abbatial est au cœur de la ville, les hôtels y sont les plus nombreux, et les trains vers Appenzell, Schaffhouse et l’Alpstein partent tous de la même gare.', de: 'Der Stiftsbezirk liegt mitten in der Stadt, die Hotelauswahl ist hier am grössten, und die Züge nach Appenzell, Schaffhausen und in den Alpstein fahren alle ab demselben Bahnhof.' } },
    { profile: { en: 'A painted old town', fr: 'Une vieille ville peinte', de: 'Eine bemalte Altstadt' }, slug: 'stein-am-rhein', reason: { en: 'The Rathausplatz facades are the reason people come, and sleeping in town means seeing them in the evening, once the day boats have gone.', fr: 'Les façades du Rathausplatz sont la raison de la visite, et y dormir permet de les voir le soir, une fois les bateaux de la journée repartis.', de: 'Die Fassaden am Rathausplatz sind der Grund des Besuchs, und wer hier übernachtet, sieht sie am Abend, wenn die Tagesschiffe weg sind.' } },
    { profile: { en: 'Mountains', fr: 'La montagne', de: 'Berge' }, slug: 'wildhaus', reason: { en: 'The village sits at the Toggenburg pass between the Churfirsten and the Alpstein, with its own gondola and the Chäserrugg cable car a short PostAuto ride away in Unterwasser.', fr: 'Le village est posé au col du Toggenburg entre les Churfirsten et l’Alpstein, avec sa propre télécabine et le téléphérique du Chäserrugg à un court trajet de car postal, à Unterwasser.', de: 'Das Dorf liegt am Toggenburgerpass zwischen Churfirsten und Alpstein, mit eigener Gondelbahn und der Chäserrugg-Bahn eine kurze Postautofahrt entfernt in Unterwasser.' } },
    { profile: { en: 'Tradition', fr: 'La tradition', de: 'Tradition' }, slug: 'appenzell', reason: { en: 'The Landsgemeinde has been documented here since 1403 and still votes in the open air on the last Sunday of April, with hotels looking straight onto the square.', fr: 'La Landsgemeinde est documentée ici depuis 1403 et vote toujours en plein air le dernier dimanche d’avril, avec des hôtels qui donnent directement sur la place.', de: 'Die Landsgemeinde ist hier seit 1403 belegt und stimmt noch immer am letzten Aprilsonntag unter freiem Himmel ab, mit Hotels direkt am Platz.' } },
  ],
  note: {
    en: 'Scores are our editorial reading of the facts on each destination page (transport, altitude, figures published by the operators), checked on 20 September 2026.',
    fr: 'Les notes sont notre lecture éditoriale des faits présentés sur chaque page destination (transports, altitude, chiffres publiés par les exploitants), vérifiés le 20 septembre 2026.',
    de: 'Die Bewertungen sind unsere redaktionelle Einordnung der Fakten auf den Reiseziel-Seiten (Verkehr, Höhe, von den Betreibern publizierte Zahlen), geprüft am 20. September 2026.',
  },
}
