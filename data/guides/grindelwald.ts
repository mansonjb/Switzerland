import type { DestinationGuide } from '../types'

// Sources in data/SOURCES-oberland.md (checked 16/09/2026). No number without a source.
export const grindelwald: DestinationGuide = {
  slug: 'grindelwald',
  stamp: 'grindelwald',
  updated: '2026-09-16',
  meta: {
    title: { en: 'Where to stay in Grindelwald: areas, hotels, car access', fr: 'Où dormir à Grindelwald : secteurs, hôtels, accès en voiture', de: 'Wo übernachten in Grindelwald: Ortsteile, Hotels, Anreise mit Auto' },
    description: {
      en: 'Grindelwald area by area: the Terminal transport hub, the village centre and Grund below it. Hotels from budget to top end with dated prices, lift times up to the Jungfraujoch and what runs when.',
      fr: "Grindelwald secteur par secteur : le pôle de transport du Terminal, le centre du village et Grund en contrebas. Hôtels du petit budget au haut de gamme avec prix datés, horaires des remontées vers le Jungfraujoch et ce qui fonctionne quand.",
      de: 'Grindelwald Ortsteil für Ortsteil: der Verkehrsknotenpunkt Terminal, das Dorfzentrum und Grund weiter unten im Tal. Hotels von günstig bis gehoben mit datierten Preisen, Fahrzeiten hinauf zum Jungfraujoch und was wann läuft.',
    },
  },
  eyebrow: { en: 'Bernese Oberland · Interlaken-Oberhasli', fr: 'Oberland bernois · Interlaken-Oberhasli', de: 'Berner Oberland · Interlaken-Oberhasli' },
  title: { en: 'Where to stay in Grindelwald', fr: 'Où dormir à Grindelwald', de: 'Wo übernachten in Grindelwald' },
  intro: {
    en: "Grindelwald sits at about 1,034 m in the Bernese Oberland, the only base in this cluster of villages that cars can reach directly. Grindelwald Terminal, the transport hub with the region's biggest car park, sends the Eiger Express gondola up toward the Jungfraujoch, while the older village centre around the railway station keeps the shops, restaurants and most of the hotels.",
    fr: "Grindelwald se trouve à environ 1034 m dans l'Oberland bernois, la seule base de ce groupe de villages accessible directement en voiture. Le Terminal de Grindelwald, pôle de transport doté du plus grand parking de la région, envoie la télécabine Eiger Express vers le Jungfraujoch, tandis que le centre historique autour de la gare regroupe commerces, restaurants et la plupart des hôtels.",
    de: 'Grindelwald liegt auf rund 1034 m im Berner Oberland, als einziger Standort dieser Dörfergruppe direkt mit dem Auto erreichbar. Das Grindelwald Terminal, der Verkehrsknotenpunkt mit dem grössten Parkhaus der Region, schickt die Eiger-Express-Gondelbahn hinauf Richtung Jungfraujoch, während sich im älteren Dorfzentrum rund um den Bahnhof Läden, Restaurants und die meisten Hotels befinden.',
  },
  quickAnswer: {
    en: 'Stay in Grindelwald if you want to arrive by car or take the fastest route up: the Eiger Express gondola from Grindelwald Terminal reaches the Jungfraujoch in about 45 minutes. For a car-free village, sleep in Wengen or Mürren instead.',
    fr: "Dormez à Grindelwald si vous voulez arriver en voiture ou emprunter l'itinéraire le plus rapide vers le sommet : la télécabine Eiger Express, depuis le Terminal de Grindelwald, atteint le Jungfraujoch en environ 45 minutes. Pour un village sans voiture, dormez plutôt à Wengen ou à Mürren.",
    de: 'Übernachten Sie in Grindelwald, wenn Sie mit dem Auto anreisen oder den schnellsten Weg nach oben wollen: Die Eiger-Express-Gondelbahn ab Grindelwald Terminal erreicht das Jungfraujoch in etwa 45 Minuten. Für ein autofreies Dorf schlafen Sie besser in Wengen oder Mürren.',
  },
  snapshot: {
    why: {
      en: 'Full road access with two dedicated car parks, and the fastest lift route to the Jungfraujoch: the Eiger Express gondola from Grindelwald Terminal.',
      fr: "Un accès routier complet avec deux parkings dédiés, et l'itinéraire le plus rapide vers le Jungfraujoch : la télécabine Eiger Express depuis le Terminal de Grindelwald.",
      de: 'Volle Strassenanbindung mit zwei eigenen Parkhäusern, und die schnellste Bahnverbindung zum Jungfraujoch: die Eiger-Express-Gondelbahn ab Grindelwald Terminal.',
    },
    where: {
      en: 'Near Grindelwald Terminal for the Eiger Express and the gondola to Männlichen, around the village centre and station for shops and restaurants, in Grund for a quieter lower-valley address.',
      fr: "Près du Terminal de Grindelwald pour l'Eiger Express et la télécabine vers le Männlichen, autour du centre du village et de la gare pour les commerces et les restaurants, à Grund pour une adresse plus calme en contrebas.",
      de: 'Beim Grindelwald Terminal für den Eiger Express und die Gondelbahn nach Männlichen, rund um Dorfzentrum und Bahnhof für Läden und Restaurants, in Grund für eine ruhigere Adresse weiter unten im Tal.',
    },
    watch: {
      en: 'Grindelwald has two quiet shoulder periods, roughly late April into May and in November, when hotels, restaurants and some lifts close for maintenance: confirm dates before booking.',
      fr: "Grindelwald connaît deux périodes creuses, environ de fin avril à mai et en novembre, durant lesquelles hôtels, restaurants et certaines remontées ferment pour entretien : vérifiez les dates avant de réserver.",
      de: 'Grindelwald hat zwei ruhige Zwischensaisons, etwa von Ende April bis Mai und im November, wenn Hotels, Restaurants und einige Bahnen für Revisionen schliessen: Daten vor der Buchung prüfen.',
    },
  },
  stats: [
    { value: '1034', label: { en: 'metres above sea level', fr: "mètres d'altitude", de: 'Meter über Meer' } },
    { value: '15', label: { en: 'minutes by gondola from the Terminal to Eigergletscher', fr: 'minutes de télécabine du Terminal à Eigergletscher', de: 'Gondelminuten vom Terminal nach Eigergletscher' } },
    { value: '1000', label: { en: 'parking spaces at Grindelwald Terminal', fr: 'places de parking au Terminal de Grindelwald', de: 'Parkplätze am Grindelwald Terminal' } },
  ],
  hero: {
    photo: '/photos/grindelwald-hero.jpg',
    caption: { en: 'Grindelwald in its valley, below the peaks of the Bernese Oberland.', fr: "Grindelwald dans sa vallée, au pied des sommets de l'Oberland bernois.", de: 'Grindelwald im Tal, unterhalb der Gipfel des Berner Oberlands.' },
    credit: { author: 'Cristo Vlahos', license: 'CC BY-SA 3.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/', source: 'https://commons.wikimedia.org/wiki/File:Grindelwald_View_02.jpg' },
  },
  sectors: [
    {
      title: { en: 'Grindelwald Terminal', fr: 'Le Terminal de Grindelwald', de: 'Grindelwald Terminal' },
      walk: { en: 'The transport hub', fr: 'Le pôle de transport', de: 'Der Verkehrsknotenpunkt' },
      text: {
        en: "The modern hub of the valley, with the base station of the Eiger Express gondola, the Grindelwald–Männlichen gondola and the region's largest car park. The BOB train from Interlaken Ost also stops here before continuing to the older village station.",
        fr: "Le pôle moderne de la vallée, avec la gare de départ de la télécabine Eiger Express, celle de la télécabine Grindelwald-Männlichen et le plus grand parking de la région. Le train BOB depuis Interlaken Ost s'y arrête aussi avant de continuer vers la gare historique du village.",
        de: 'Der moderne Knotenpunkt des Tals, mit der Talstation der Eiger-Express-Gondelbahn, jener der Gondelbahn Grindelwald-Männlichen und dem grössten Parkhaus der Region. Auch der BOB-Zug ab Interlaken Ost hält hier, bevor er weiter zum historischen Dorfbahnhof fährt.',
      },
      points: [
        { en: 'Grindelwald Terminal car park, 1,000 spaces', fr: 'Parking du Terminal de Grindelwald, 1000 places', de: 'Parkhaus Grindelwald Terminal, 1000 Plätze' },
        { en: 'Eiger Express gondola to Eigergletscher in 15 minutes', fr: "Télécabine Eiger Express jusqu'à Eigergletscher en 15 minutes", de: 'Eiger-Express-Gondelbahn nach Eigergletscher in 15 Minuten' },
      ],
    },
    {
      title: { en: 'The village centre', fr: 'Le centre du village', de: 'Das Dorfzentrum' },
      walk: { en: 'Around the station', fr: 'Autour de la gare', de: 'Rund um den Bahnhof' },
      text: {
        en: 'Shops, restaurants and the tourist office line Dorfstrasse, the main street around the railway station. Most hotels sit here, some just steps from the platform.',
        fr: "Commerces, restaurants et office du tourisme bordent la Dorfstrasse, la rue principale autour de la gare. La plupart des hôtels s'y trouvent, certains à quelques pas seulement du quai.",
        de: 'Läden, Restaurants und das Tourismusbüro säumen die Dorfstrasse, die Hauptstrasse rund um den Bahnhof. Die meisten Hotels liegen hier, manche nur wenige Schritte vom Perron entfernt.',
      },
      points: [
        { en: 'Some hotels about 100 m from the train station, by their own count', fr: 'Certains hôtels à une centaine de mètres de la gare, selon leurs propres indications', de: 'Manche Hotels laut eigenen Angaben rund 100 m vom Bahnhof entfernt' },
        { en: 'Parkhaus Eiger+, 252 spaces', fr: 'Parkhaus Eiger+, 252 places', de: 'Parkhaus Eiger+, 252 Plätze' },
      ],
    },
    {
      title: { en: 'Grund', fr: 'Grund', de: 'Grund' },
      walk: { en: 'The lower valley', fr: 'Le bas de la vallée', de: 'Das untere Tal' },
      text: {
        en: 'Below the village centre, on the line toward Kleine Scheidegg, with its own Grindelwald Grund station. Quieter than the centre, a short ride or walk from the shops.',
        fr: "En contrebas du centre du village, sur la ligne vers la Kleine Scheidegg, avec sa propre gare de Grindelwald Grund. Plus calme que le centre, à quelques minutes de trajet ou de marche des commerces.",
        de: 'Unterhalb des Dorfzentrums, an der Linie Richtung Kleine Scheidegg, mit eigenem Bahnhof Grindelwald Grund. Ruhiger als das Zentrum, wenige Minuten mit Bahn oder zu Fuss von den Läden entfernt.',
      },
      points: [
        { en: 'Grindelwald Grund railway station, on the line to Kleine Scheidegg', fr: 'Gare de Grindelwald Grund, sur la ligne vers la Kleine Scheidegg', de: 'Bahnhof Grindelwald Grund, an der Linie zur Kleinen Scheidegg' },
        { en: 'Quieter than the village centre', fr: 'Plus calme que le centre du village', de: 'Ruhiger als das Dorfzentrum' },
      ],
    },
  ],
  hotels: [
    {
      slug: 'gw-hotel-wetterhorn',
      name: 'Hotel Wetterhorn',
      url: 'https://wetterhorn-hotel.ch/',
      photo: '/photos/hotels/gw-hotel-wetterhorn.jpg',
      sector: { en: 'Obere Gletscherstrasse, near Grund', fr: 'Obere Gletscherstrasse, près de Grund', de: 'Obere Gletscherstrasse, bei Grund' },
      facts: [
        { en: '10 rooms with the Stepfi ski run at the door', fr: '10 chambres avec la piste Stepfi à la porte', de: '10 Zimmer mit der Stepfi-Abfahrt vor der Tür' },
        { en: 'Bus for Kleine Scheidegg, Männlichen and First stops outside', fr: 'Le bus pour la Kleine Scheidegg, le Männlichen et First s’arrête devant', de: 'Bus nach Kleine Scheidegg, Männlichen und First hält davor' },
        { en: 'Closed for maintenance from 28 October to 15 November 2026', fr: 'Fermé pour entretien du 28 octobre au 15 novembre 2026', de: 'Betriebsunterbruch vom 28. Oktober bis 15. November 2026' },
      ],
    },
    {
      slug: 'gw-hotel-gletschergarten',
      name: 'Hotel Gletschergarten',
      url: 'https://hotel-gletschergarten.ch/en/hotel-en/',
      photo: '/photos/hotels/gw-hotel-gletschergarten.jpg',
      sector: { en: 'Obere Gletscherstrasse, near Grund', fr: 'Obere Gletscherstrasse, près de Grund', de: 'Obere Gletscherstrasse, bei Grund' },
      facts: [
        { en: 'Built in 1899, fourth generation of the same family', fr: 'Construit en 1899, quatrième génération de la même famille', de: '1899 erbaut, vierte Generation derselben Familie' },
        { en: '26 rooms, free entry to the sports centre pool and ice rink', fr: '26 chambres, entrée libre à la piscine et à la patinoire du centre sportif', de: '26 Zimmer, freier Eintritt in Hallenbad und Eisbahn des Sportzentrums' },
        { en: 'Pick-up from the station on request', fr: 'Navette depuis la gare sur demande', de: 'Abholung am Bahnhof auf Anfrage' },
      ],
    },
    {
      slug: 'gw-sunstar-hotel',
      name: 'Sunstar Hotel & Spa Grindelwald',
      url: 'https://grindelwald.sunstar.ch/en/',
      photo: '/photos/hotels/gw-sunstar-hotel.jpg',
      sector: { en: 'Village, opposite the First cable car', fr: 'Village, face au téléphérique de First', de: 'Dorf, gegenüber der Firstbahn' },
      facts: [
        { en: 'Open all year', fr: 'Ouvert toute l’année', de: 'Ganzjährig geöffnet' },
        { en: 'Pool, log sauna and Roman thermal bath', fr: 'Piscine, sauna en rondins et bain thermal romain', de: 'Hallenbad, Blockhaussauna und römisches Thermalbad' },
        { en: 'Opposite the First cable car station', fr: 'En face de la station du téléphérique de First', de: 'Gegenüber der Talstation der Firstbahn' },
      ],
    },
    {
      slug: 'gw-schweizerhof',
      name: 'Romantik Hotel Schweizerhof',
      url: 'https://www.hotel-schweizerhof.com/en/',
      photo: '/photos/hotels/gw-schweizerhof.jpg',
      sector: { en: 'Village centre, by the station', fr: 'Centre du village, près de la gare', de: 'Dorfzentrum, beim Bahnhof' },
      facts: [
        { en: 'Rebuilt in 1893 after the village fire of 1892', fr: 'Reconstruit en 1893 après l’incendie du village de 1892', de: '1893 nach dem Dorfbrand von 1892 neu gebaut' },
        { en: 'About 100 metres from the railway station', fr: 'À une centaine de mètres de la gare', de: 'Rund 100 Meter vom Bahnhof' },
        { en: 'Indoor pool, spa and four restaurants', fr: 'Piscine intérieure, spa et quatre restaurants', de: 'Hallenbad, Spa und vier Restaurants' },
      ],
    },
  ],
  hotelsNote: {
    en: 'Facts taken from each hotel’s own website on 16 September 2026. No ratings or reviews on this guide.',
    fr: "Faits relevés sur le site de chaque hôtel le 16 septembre 2026. Aucune note ni aucun avis sur ce guide.",
    de: 'Fakten von der Website des jeweiligen Hotels, Stand 16. September 2026. Keine Bewertungen oder Rezensionen.',
  },
  calendar: {
    title: { en: 'What runs, month by month', fr: 'Ce qui fonctionne, mois par mois', de: 'Was fährt, Monat für Monat' },
    rows: [
      { name: { en: 'Eiger Express gondola (Terminal to Eigergletscher)', fr: 'Télécabine Eiger Express (Terminal → Eigergletscher)', de: 'Eiger-Express-Gondelbahn (Terminal → Eigergletscher)' }, months: ['o', 'o', 'o', 'r', 'o', 'o', 'o', 'o', 'o', 'o', 'r', 'o'] },
      { name: { en: 'Train Grindelwald to Kleine Scheidegg', fr: 'Train Grindelwald → Kleine Scheidegg', de: 'Bahn Grindelwald → Kleine Scheidegg' }, months: ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'r', 'r', 'o'] },
      { name: { en: 'Grindelwald–Männlichen gondola', fr: 'Télécabine Grindelwald-Männlichen', de: 'Gondelbahn Grindelwald-Männlichen' }, months: ['o', 'o', 'o', 'r', 'r', 'o', 'o', 'o', 'o', 'r', 'r', 'o'] },
      { name: { en: 'Pfingstegg cable car', fr: 'Téléphérique du Pfingstegg', de: 'Pfingsteggbahn' }, months: ['x', 'x', 'x', 'r', 'o', 'o', 'o', 'o', 'o', 'r', 'x', 'x'] },
    ],
    note: {
      en: '2026 and start of winter 2026/27. Eiger Express: maintenance closures 20 to 24 April and 9 to 20 November 2026, confirm exact dates on jungfrau.ch. Grindelwald to Kleine Scheidegg line: maintenance break 26 October to 6 November 2026. Grindelwald–Männlichen gondola: summer season 23 May to 25 October 2026, winter season 21 November 2026 to 25 April 2027. Pfingstegg cable car: summer season 25 April to 25 October 2026, mountain restaurant open from 9 May, toboggan run from mid-May depending on the weather. Hotels and restaurants set their own dates: many close roughly from late April to May and in November.',
      fr: "2026 et début de l'hiver 2026/27. Eiger Express : fermetures d'entretien du 20 au 24 avril et du 9 au 20 novembre 2026, dates à confirmer sur jungfrau.ch. Ligne Grindelwald → Kleine Scheidegg : pause d'entretien du 26 octobre au 6 novembre 2026. Télécabine Grindelwald-Männlichen : saison d'été du 23 mai au 25 octobre 2026, saison d'hiver du 21 novembre 2026 au 25 avril 2027. Téléphérique du Pfingstegg : saison d'été du 25 avril au 25 octobre 2026, restaurant d'altitude ouvert dès le 9 mai, piste de luge dès la mi-mai selon la météo. Hôtels et restaurants fixent leurs propres dates : beaucoup ferment environ de fin avril à mai et en novembre.",
      de: '2026 und Beginn des Winters 2026/27. Eiger Express: Revisionsschliessungen vom 20. bis 24. April und vom 9. bis 20. November 2026, genaue Daten auf jungfrau.ch bestätigen. Linie Grindelwald → Kleine Scheidegg: Revisionspause vom 26. Oktober bis 6. November 2026. Gondelbahn Grindelwald-Männlichen: Sommersaison 23. Mai bis 25. Oktober 2026, Wintersaison 21. November 2026 bis 25. April 2027. Pfingsteggbahn: Sommersaison 25. April bis 25. Oktober 2026, Bergrestaurant ab 9. Mai geöffnet, Schlittelbahn ab Mitte Mai je nach Wetter. Hotels und Restaurants legen ihre Daten selbst fest: viele schliessen etwa von Ende April bis Mai und im November.',
    },
  },
  practical: {
    title: { en: 'Arriving by car, in practice', fr: 'Arriver en voiture, en pratique', de: 'Mit dem Auto ankommen, in der Praxis' },
    items: [
      {
        title: { en: 'Park at the Terminal or in the village', fr: 'Se garer au Terminal ou au village', de: 'Am Terminal oder im Dorf parkieren' },
        text: {
          en: 'Grindelwald Terminal has 1,000 parking spaces next to the Eiger Express, and Parkhaus Eiger+ in the village centre has 252. Both are transfer points onward by lift or train.',
          fr: "Le Terminal de Grindelwald compte 1000 places de parking à côté de l'Eiger Express, et le Parkhaus Eiger+ dans le centre du village en compte 252. Les deux servent de points de transfert vers les remontées ou le train.",
          de: 'Das Grindelwald Terminal hat 1000 Parkplätze neben dem Eiger Express, das Parkhaus Eiger+ im Dorfzentrum 252. Beide dienen als Umsteigepunkt zu Bahn oder Zug.',
        },
      },
      {
        title: { en: 'Take the Eiger Express up', fr: "Monter avec l'Eiger Express", de: 'Mit dem Eiger Express hinauf' },
        text: {
          en: 'The gondola climbs from Grindelwald Terminal to Eigergletscher in 15 minutes. With the Jungfrau Railway on from there, the whole trip to the Jungfraujoch takes about 45 minutes.',
          fr: "La télécabine grimpe du Terminal de Grindelwald à Eigergletscher en 15 minutes. Avec le chemin de fer de la Jungfrau qui prend le relais, le trajet complet jusqu'au Jungfraujoch dure environ 45 minutes.",
          de: 'Die Gondelbahn steigt vom Grindelwald Terminal in 15 Minuten nach Eigergletscher. Mit der anschliessenden Jungfraubahn dauert die ganze Fahrt zum Jungfraujoch etwa 45 Minuten.',
        },
      },
      {
        title: { en: 'Cross to Männlichen', fr: 'Traverser vers le Männlichen', de: 'Hinüber zum Männlichen' },
        text: {
          en: 'The Grindelwald–Männlichen gondola leaves from the Terminal for the ridge at Männlichen, on the way to Kleine Scheidegg and Wengen.',
          fr: "La télécabine Grindelwald-Männlichen part du Terminal pour la crête du Männlichen, en direction de la Kleine Scheidegg et de Wengen.",
          de: 'Die Gondelbahn Grindelwald-Männlichen fährt ab dem Terminal zum Grat beim Männlichen, Richtung Kleine Scheidegg und Wengen.',
        },
      },
      {
        title: { en: 'By train from Interlaken', fr: 'En train depuis Interlaken', de: 'Mit dem Zug ab Interlaken' },
        text: {
          en: 'The Berner Oberland Railway runs direct from Interlaken Ost, about 29 minutes to Grindelwald Terminal and 34 to the village station.',
          fr: "Le chemin de fer de l'Oberland bernois part directement d'Interlaken Ost, environ 29 minutes jusqu'au Terminal de Grindelwald et 34 jusqu'à la gare du village.",
          de: 'Die Berner Oberland-Bahn fährt direkt ab Interlaken Ost, rund 29 Minuten bis zum Grindelwald Terminal und 34 bis zum Dorfbahnhof.',
        },
      },
    ],
  },
  seasons: {
    winter: {
      title: { en: 'Winter in Grindelwald', fr: "L'hiver à Grindelwald", de: 'Winter in Grindelwald' },
      base: {
        en: 'Skiers do best near the Terminal, where the Eiger Express and the Grindelwald–Männlichen gondola both lead into the Grindelwald-Wengen ski area. The village centre stays close enough for evenings out.',
        fr: "Pour skier, visez les abords du Terminal, d'où l'Eiger Express et la télécabine Grindelwald-Männlichen mènent tous deux au domaine skiable Grindelwald-Wengen. Le centre du village reste assez proche pour les soirées.",
        de: 'Skifahrer wohnen am besten beim Terminal, von wo Eiger Express und die Gondelbahn Grindelwald-Männlichen beide ins Skigebiet Grindelwald-Wengen führen. Das Dorfzentrum bleibt nah genug für den Abend.',
      },
      facts: [
        { value: '103 km', label: { en: 'of pistes in the Grindelwald-Wengen ski area', fr: 'de pistes sur le domaine Grindelwald-Wengen', de: 'Pisten im Skigebiet Grindelwald-Wengen' } },
        { value: '21.11 → 25.4', label: { en: 'Grindelwald–Männlichen gondola, winter 2026/27', fr: 'télécabine Grindelwald-Männlichen, hiver 2026/27', de: 'Gondelbahn Grindelwald-Männlichen, Winter 2026/27' } },
        { value: '18-24.1', label: { en: 'World Snow Festival 2027, 42nd edition', fr: 'World Snow Festival 2027, 42e édition', de: 'World Snow Festival 2027, 42. Ausgabe' } },
        { value: '35 min', label: { en: 'by bus to the Bussalp toboggan run', fr: 'de bus jusqu’à la piste de luge de Bussalp', de: 'mit dem Bus zur Schlittelbahn Bussalp' } },
      ],
      note: {
        en: 'Sources: jungfrauregion.swiss, maennlichen.ch, grindelwald.swiss, checked 16 September 2026.',
        fr: 'Sources : jungfrauregion.swiss, maennlichen.ch, grindelwald.swiss, vérifiées le 16 septembre 2026.',
        de: 'Quellen: jungfrauregion.swiss, maennlichen.ch, grindelwald.swiss, geprüft am 16. September 2026.',
      },
    },
    summer: {
      title: { en: 'Summer in Grindelwald', fr: "L'été à Grindelwald", de: 'Sommer in Grindelwald' },
      base: {
        en: 'Hikers do best near the Terminal or the village centre, both close to the Firstbahn gondola. For an afternoon by the water, the Hellbach outdoor pool sits at the foot of the Eiger north face.',
        fr: "Pour randonner, restez près du Terminal ou du centre du village, tous deux proches de la télécabine du First. Pour un après-midi au bord de l'eau, la piscine en plein air de Hellbach se trouve au pied de la face nord de l'Eiger.",
        de: 'Wanderer wohnen am besten beim Terminal oder im Dorfzentrum, beide nah an der Firstbahn. Für einen Nachmittag am Wasser liegt das Freibad Hellbach am Fuss der Eiger-Nordwand.',
      },
      facts: [
        { value: '25 min', label: { en: 'gondola ride from Grindelwald to First, 2166 m', fr: 'de télécabine de Grindelwald au First, 2166 m', de: 'Gondelfahrt von Grindelwald zum First, 2166 m' } },
        { value: '2h', label: { en: 'hike from First to Bachalpsee and back, per jungfrau.ch', fr: 'de marche du First au Bachalpsee, aller-retour, selon jungfrau.ch', de: 'Wanderung vom First zum Bachalpsee und zurück, laut jungfrau.ch' } },
        { value: '45 m', label: { en: 'First Cliff Walk footbridge, about 20 minutes to cross', fr: 'passerelle du First Cliff Walk, environ 20 minutes pour la traverser', de: 'Hängebrücke First Cliff Walk, etwa 20 Minuten Überquerung' } },
        { value: '25 m', label: { en: 'pool at the Hellbach outdoor baths, plus a 45 m slide', fr: 'bassin des bains en plein air de Hellbach, avec un toboggan de 45 m', de: 'Becken im Freibad Hellbach, dazu eine 45-m-Rutsche' } },
      ],
      note: {
        en: 'Sources: jungfrau.ch, grindelwald.swiss, checked 16 September 2026.',
        fr: 'Sources : jungfrau.ch, grindelwald.swiss, vérifiées le 16 septembre 2026.',
        de: 'Quellen: jungfrau.ch, grindelwald.swiss, geprüft am 16. September 2026.',
      },
    },
  },
  faq: [
    {
      q: { en: 'Can you drive to Grindelwald?', fr: 'Peut-on venir en voiture à Grindelwald ?', de: 'Kann man mit dem Auto nach Grindelwald fahren?' },
      a: {
        en: 'Yes. Unlike Wengen and Mürren, Grindelwald has full road access, with 1,000 parking spaces at Grindelwald Terminal and 252 more at Parkhaus Eiger+ in the village centre.',
        fr: "Oui. Contrairement à Wengen et Mürren, Grindelwald est accessible par la route, avec 1000 places de parking au Terminal de Grindelwald et 252 de plus au Parkhaus Eiger+, dans le centre du village.",
        de: 'Ja. Im Gegensatz zu Wengen und Mürren ist Grindelwald mit dem Auto erreichbar, mit 1000 Parkplätzen am Grindelwald Terminal und weiteren 252 im Parkhaus Eiger+ im Dorfzentrum.',
      },
    },
    {
      q: { en: 'How long is the train from Interlaken to Grindelwald?', fr: 'Combien de temps de train entre Interlaken et Grindelwald ?', de: 'Wie lange dauert die Zugfahrt von Interlaken nach Grindelwald?' },
      a: {
        en: 'About 29 minutes to Grindelwald Terminal, and around 34 minutes on to the main village station, on the direct Berner Oberland Railway.',
        fr: "Environ 29 minutes jusqu'au Terminal de Grindelwald, et environ 34 minutes jusqu'à la gare principale du village, sur la ligne directe du chemin de fer de l'Oberland bernois.",
        de: 'Rund 29 Minuten bis zum Grindelwald Terminal und etwa 34 Minuten bis zum Hauptbahnhof des Dorfes, auf der direkten Berner Oberland-Bahn.',
      },
    },
    {
      q: { en: "What's the fastest way up to the Jungfraujoch from Grindelwald?", fr: 'Quel est le moyen le plus rapide de monter au Jungfraujoch depuis Grindelwald ?', de: 'Wie kommt man von Grindelwald am schnellsten aufs Jungfraujoch?' },
      a: {
        en: 'The Eiger Express gondola from Grindelwald Terminal to Eigergletscher, in 15 minutes, then the Jungfrau Railway on to the Jungfraujoch. The whole trip takes about 45 minutes.',
        fr: "La télécabine Eiger Express, du Terminal de Grindelwald à Eigergletscher, en 15 minutes, puis le chemin de fer de la Jungfrau jusqu'au Jungfraujoch. Le trajet complet dure environ 45 minutes.",
        de: 'Die Eiger-Express-Gondelbahn vom Grindelwald Terminal nach Eigergletscher, in 15 Minuten, dann die Jungfraubahn weiter zum Jungfraujoch. Die ganze Fahrt dauert etwa 45 Minuten.',
      },
    },
    {
      q: { en: 'Is Grindelwald one village or several areas?', fr: 'Grindelwald est-il un seul village ou plusieurs quartiers ?', de: 'Ist Grindelwald ein Dorf oder mehrere Ortsteile?' },
      a: {
        en: 'Three areas in practice: Grindelwald Terminal, the transport hub for the Eiger Express and the Männlichen gondola; the village centre around the railway station, with most shops and hotels; and Grund, lower in the valley on the line to Kleine Scheidegg.',
        fr: "Trois secteurs en pratique : le Terminal de Grindelwald, pôle de transport pour l'Eiger Express et la télécabine du Männlichen ; le centre du village autour de la gare, avec la plupart des commerces et des hôtels ; et Grund, plus bas dans la vallée sur la ligne vers la Kleine Scheidegg.",
        de: 'In der Praxis drei Ortsteile: das Grindelwald Terminal, Verkehrsknotenpunkt für Eiger Express und Männlichenbahn; das Dorfzentrum rund um den Bahnhof mit den meisten Läden und Hotels; und Grund, weiter unten im Tal an der Linie zur Kleinen Scheidegg.',
      },
    },
    {
      q: { en: 'What can I do at First without skiing?', fr: 'Que faire au First sans skier ?', de: 'Was kann man auf dem First ohne Skifahren unternehmen?' },
      a: {
        en: 'The Firstbahn gondola reaches First, at 2,166 m, in 25 minutes. From there: the First Cliff Walk footbridge, about 20 minutes to cross, the First Flyer mountain coaster, and the hike to Bachalpsee lake, about 2 hours return.',
        fr: "La télécabine du First atteint le sommet, à 2166 m, en 25 minutes. De là : la passerelle du First Cliff Walk, environ 20 minutes pour la traverser, la luge sur rail First Flyer, et la randonnée jusqu'au lac de Bachalpsee, environ 2 heures aller-retour.",
        de: 'Die Firstbahn erreicht den First, auf 2166 m, in 25 Minuten. Von dort aus: die Hängebrücke First Cliff Walk, etwa 20 Minuten Überquerung, die Sommerrodelbahn First Flyer, und die Wanderung zum Bachalpsee, etwa 2 Stunden retour.',
      },
    },
  ],
  neighbours: ['wengen', 'lauterbrunnen', 'murren', 'interlaken'],
}
