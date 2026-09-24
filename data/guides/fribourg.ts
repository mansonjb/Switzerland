import type { DestinationGuide } from '../types'

// Sources in data/SOURCES-fribourg.md and data/research/fribourg.md (checked 16/09/2026). No number without a source.
// Note: this dossier had a thin pass (no web-search budget, JS-rendered listing pages returned nothing to
// WebFetch), so only 2 hotels and 2 sectors are used here rather than the usual 6-10 hotels and 3 sectors.
// See the final report for what was dropped.
export const fribourg: DestinationGuide = {
  slug: 'fribourg',
  stamp: 'generic',
  updated: '2026-09-20',
  meta: {
    title: { en: 'Where to stay in Fribourg: cathedral, fortifications', fr: 'Où dormir à Fribourg : cathédrale, fortifications', de: 'Wo übernachten in Freiburg: Kathedrale, Festungsanlagen' },
    description: {
      en: 'Where to sleep in Fribourg, from the Old Town below the cathedral to the station side, with sourced hotel facts, the fortifications walk and the City Card.',
      fr: 'Où dormir à Fribourg, de la vieille ville sous la cathédrale au côté gare, avec des faits d’hôtels sourcés, la marche des fortifications et la City Card.',
      de: 'Wo übernachten in Freiburg, von der Altstadt unterhalb der Kathedrale bis zur Bahnhofseite, mit belegten Hotelfakten und dem Rundgang um die Festung.',
    },
  },
  eyebrow: { en: 'Bern region · Fribourg', fr: 'Région de Berne · Fribourg', de: 'Region Bern · Freiburg' },
  title: { en: 'Where to stay in Fribourg', fr: 'Où dormir à Fribourg', de: 'Wo übernachten in Freiburg' },
  intro: {
    en: 'Fribourg sits at 581 metres, capital of the canton it governs and, with 38,039 residents as of December 2020, the largest city in it. The Sarine river cuts a gorge through the centre, dividing a French speaking half from a German speaking one, and the city sits on the railway line between Lausanne and Bern, roughly midway between the two. Fribourg is not car-free: the whole city is crossed by road and by TPF buses, and only the Old Town core is heavily pedestrianised. Since 2023 it has belonged to UNESCO’s Creative Cities Network for gastronomy, a status the tourist office pairs with its own label for the city, “Capital of Fondue.”',
    fr: "Fribourg se trouve à 581 mètres, capitale du canton qu’elle administre et, avec 38'039 habitants en décembre 2020, la plus grande ville de ce canton. La Sarine creuse une gorge en plein centre, séparant une moitié francophone d’une moitié germanophone, et la ville se trouve sur la ligne ferroviaire entre Lausanne et Berne, à peu près à mi-chemin entre les deux. Fribourg n’est pas sans voiture : toute la ville est traversée par la route et par les bus TPF, et seul le cœur de la vieille ville est fortement piétonnisé. Depuis 2023, elle appartient au Réseau des villes créatives de l’UNESCO pour la gastronomie, un statut que l’office du tourisme associe à son propre label pour la ville, « Capitale de la fondue ».",
    de: "Freiburg liegt auf 581 Metern, Hauptstadt des Kantons, den es verwaltet, und mit 38'039 Einwohnenden per Dezember 2020 die grösste Stadt darin. Die Saane gräbt sich mitten durchs Zentrum, trennt eine französischsprachige von einer deutschsprachigen Hälfte, und die Stadt liegt an der Bahnlinie zwischen Lausanne und Bern, ungefähr auf halbem Weg zwischen den beiden. Freiburg ist nicht autofrei: Die ganze Stadt wird von Strassen und von TPF-Bussen durchquert, nur der Kern der Altstadt ist stark fussgängerfreundlich gestaltet. Seit 2023 gehört sie dem Creative Cities Network der UNESCO für Gastronomie an, ein Status, den das Tourismusbüro mit seinem eigenen Label für die Stadt verbindet, „Hauptstadt des Fondues“.",
  },
  quickAnswer: {
    en: 'Stay in Fribourg for the cathedral tower and the medieval fortifications above the Sarine, plus a gastronomic identity the tourist office markets as “Capital of Fondue.” For a bigger choice of hotels and a wider rail network, sleep in Bern instead, on the same Lausanne-Bern line.',
    fr: 'Dormez à Fribourg pour la tour de la cathédrale et les fortifications médiévales dominant la Sarine, ainsi que pour une identité gastronomique que l’office du tourisme présente comme la « Capitale de la fondue ». Pour un choix d’hôtels plus large et un réseau ferroviaire plus étendu, dormez plutôt à Berne, sur la même ligne Lausanne-Berne.',
    de: 'Übernachten Sie in Freiburg wegen des Kathedralenturms und der mittelalterlichen Befestigungsanlagen über der Saane, sowie wegen einer gastronomischen Identität, die das Tourismusbüro als „Hauptstadt des Fondues“ vermarktet. Für eine grössere Hotelauswahl und ein dichteres Bahnnetz übernachten Sie besser in Bern, an derselben Strecke Lausanne-Bern.',
  },
  snapshot: {
    why: {
      en: 'Because Fribourg pairs a real cantonal capital with a medieval defensive ring and a cathedral tower rising straight out of the Sarine gorge: six towers, five gates, seven sections of wall and one Great Bulwark still stand from the 13th to 15th centuries, described by the tourist office as the most important ensemble of medieval military architecture in Switzerland. That mix of a working capital, a walkable fortress and a self-declared “Capital of Fondue” is what a stay here adds that a single-attraction town cannot.',
      fr: 'Parce que Fribourg associe une véritable capitale cantonale à une ceinture défensive médiévale et à une tour de cathédrale qui jaillit de la gorge de la Sarine : six tours, cinq portes, sept pans de muraille et un Grand Boulevard subsistent encore des XIIIe au XVe siècles, décrits par l’office du tourisme comme le plus important ensemble d’architecture militaire médiévale de Suisse. Ce mélange d’une capitale bien vivante, d’une forteresse qu’on parcourt à pied et d’une « Capitale de la fondue » autoproclamée, c’est ce qu’un séjour ici apporte qu’une ville tournée vers une seule attraction ne peut pas offrir.',
      de: 'Weil Freiburg eine echte Kantonshauptstadt mit einem mittelalterlichen Wehrring und einem Kathedralenturm verbindet, der direkt aus der Saaneschlucht aufragt: Sechs Türme, fünf Tore, sieben Mauerabschnitte und ein Grosser Bollwerk stehen noch aus dem 13. bis 15. Jahrhundert, vom Tourismusbüro als das bedeutendste Ensemble mittelalterlicher Militärarchitektur der Schweiz bezeichnet. Diese Mischung aus einer echten Hauptstadt, einer begehbaren Festung und einer selbsternannten „Hauptstadt des Fondues“ bietet ein Aufenthalt hier, was eine auf eine einzige Attraktion ausgerichtete Stadt nicht kann.',
    },
    where: {
      en: 'First stay or heavy bags: around Rue du Simplon, on the station side of the centre. Looking for character: the Old Town near Rue de Morat, below the cathedral and close to the fortifications.',
      fr: 'Premier séjour ou bagages lourds : autour de la Rue du Simplon, côté gare du centre. En quête de caractère : la vieille ville près de la Rue de Morat, sous la cathédrale et à deux pas des fortifications.',
      de: 'Erster Aufenthalt oder schweres Gepäck: rund um die Rue du Simplon, auf der Bahnhofseite des Zentrums. Auf der Suche nach Charakter: die Altstadt bei der Rue de Morat, unterhalb der Kathedrale und nahe den Festungsanlagen.',
    },
    watch: {
      en: 'The funicular stops for works from 27 August to 4 December 2026, and the cathedral tower and the fortifications each keep to their own seasonal window, March to November and 1 May to 1 November. If any of the three is the reason for your visit, check the dates before you book.',
      fr: 'Le funiculaire s’arrête pour travaux du 27 août au 4 décembre 2026, et la tour de la cathédrale comme les fortifications gardent chacune leur propre fenêtre saisonnière, de mars à novembre et du 1er mai au 1er novembre. Si l’un des trois est la raison de votre venue, vérifiez les dates avant de réserver.',
      de: 'Die Standseilbahn ruht wegen Bauarbeiten vom 27. August bis 4. Dezember 2026, und Kathedralenturm wie Festungsanlagen halten sich je an ihr eigenes Saisonfenster, März bis November beziehungsweise 1. Mai bis 1. November. Ist eines der drei der Grund für Ihren Besuch, prüfen Sie die Daten vor der Buchung.',
    },
  },
  story: {
    title: { en: 'Fribourg, before you book', fr: 'Fribourg, avant de réserver', de: 'Freiburg, bevor Sie buchen' },
    paragraphs: [
      {
        en: 'Fribourg is the capital of its canton, home to 38,039 residents as of December 2020 and, by that count, the largest city in it. The Sarine river cuts a gorge straight through the centre, splitting a French speaking half from a German speaking one, and the tourist office markets the city under its own label, “Capital of Fondue,” reinforced since 2023 by Fribourg’s entry into UNESCO’s Creative Cities Network for gastronomy. It sits on the railway line between Lausanne and Bern, roughly midway between the two.',
        fr: "Fribourg est la capitale de son canton, avec 38'039 habitants en décembre 2020 et, selon ce compte, la plus grande ville qui s’y trouve. La Sarine creuse une gorge en plein centre, séparant une moitié francophone d’une moitié germanophone, et l’office du tourisme présente la ville sous son propre label, « Capitale de la fondue », renforcé depuis 2023 par l’entrée de Fribourg au Réseau des villes créatives de l’UNESCO pour la gastronomie. Elle se trouve sur la ligne ferroviaire entre Lausanne et Berne, à peu près à mi-chemin entre les deux.",
        de: "Freiburg ist die Hauptstadt seines Kantons, mit 38'039 Einwohnenden per Dezember 2020 und damit dessen grösste Stadt. Die Saane gräbt sich mitten durchs Zentrum und trennt eine französischsprachige von einer deutschsprachigen Hälfte, und das Tourismusbüro vermarktet die Stadt unter ihrem eigenen Label, „Hauptstadt des Fondues“, seit 2023 verstärkt durch den Beitritt Freiburgs zum Creative Cities Network der UNESCO für Gastronomie. Sie liegt an der Bahnlinie zwischen Lausanne und Bern, ungefähr auf halbem Weg zwischen den beiden.",
      },
      {
        en: 'Where you sleep here comes down to two very different addresses on opposite sides of the centre. Hotel de la Rose stands at Rue de Morat 1, in a 17th-century building close to the historic centre below the cathedral. Alpha Hotel, on Rue du Simplon 13, sits a short walk from the station side instead. Fribourg itself is not car-free: the city is crossed by road and by TPF buses, and only the Old Town core is heavily pedestrianised.',
        fr: 'Ici, le choix du logement se résume à deux adresses très différentes, sur deux côtés opposés du centre. L’Hôtel de la Rose se trouve à la Rue de Morat 1, dans un bâtiment du XVIIe siècle proche du centre historique sous la cathédrale. L’Alpha Hotel, à la Rue du Simplon 13, se trouve à deux pas du côté gare à la place. Fribourg elle-même n’est pas sans voiture : la ville est traversée par la route et par les bus TPF, et seul le cœur de la vieille ville est fortement piétonnisé.',
        de: 'Wo man hier übernachtet, hängt von zwei sehr unterschiedlichen Adressen auf gegenüberliegenden Seiten des Zentrums ab. Das Hotel de la Rose liegt an der Rue de Morat 1, in einem Gebäude aus dem 17. Jahrhundert nahe dem historischen Zentrum unterhalb der Kathedrale. Das Alpha Hotel, an der Rue du Simplon 13, liegt stattdessen einen kurzen Fussweg von der Bahnhofseite entfernt. Freiburg selbst ist nicht autofrei: Die Stadt wird von Strassen und von TPF-Bussen durchquert, nur der Kern der Altstadt ist stark fussgängerfreundlich gestaltet.',
      },
      {
        en: 'The choice here is compact: a 17th-century, family-run in style, three-star house in the Old Town, Hotel de la Rose, and a station-side address, Alpha Hotel, on Rue du Simplon. Both sit within reach of the fortifications and the cathedral, and neither leans on a lake or a mountain view: the draw is the medieval centre itself, its cathedral tower and the walk around its walls.',
        fr: 'L’offre ici est resserrée : une maison trois étoiles de style familial, dans un bâtiment du XVIIe siècle en vieille ville, l’Hôtel de la Rose, et une adresse côté gare, l’Alpha Hotel, sur la Rue du Simplon. Les deux se trouvent à portée des fortifications et de la cathédrale, et aucune ne s’appuie sur un lac ou une vue de montagne : l’attrait, ici, c’est le centre médiéval lui-même, sa tour de cathédrale et la marche autour de ses murailles.',
        de: 'Das Angebot hier ist überschaubar: ein familiär geführtes Drei-Sterne-Haus aus dem 17. Jahrhundert in der Altstadt, das Hotel de la Rose, und eine Adresse auf der Bahnhofseite, das Alpha Hotel, an der Rue du Simplon. Beide liegen in Reichweite der Festungsanlagen und der Kathedrale, und keines stützt sich auf einen See oder eine Bergsicht: Der Reiz liegt im mittelalterlichen Zentrum selbst, seinem Kathedralenturm und dem Rundgang um seine Mauern.',
      },
      {
        en: 'Summer keeps everything running at once: the fortifications open 09:00 to 19:00 from 1 May to 1 November, the cathedral tower is included with the City Card from March to November, and the Motta swimming pool runs May to September. The funicular then stops for works from 27 August to 4 December 2026, and the cathedral tower closes for winter from December to February, so a City Card bought in the cheaper October-to-March window still covers the museums and the transport even with fewer things open outdoors.',
        fr: 'L’été fait tourner tout en même temps : les fortifications ouvrent de 09h00 à 19h00 du 1er mai au 1er novembre, la tour de la cathédrale est incluse dans la City Card de mars à novembre, et la piscine de la Motta fonctionne de mai à septembre. Le funiculaire s’arrête ensuite pour travaux du 27 août au 4 décembre 2026, et la tour de la cathédrale ferme pour l’hiver de décembre à février, si bien qu’une City Card achetée dans la fenêtre moins chère d’octobre à mars couvre encore les musées et les transports, même avec moins de choses ouvertes en plein air.',
        de: 'Im Sommer läuft alles gleichzeitig: Die Festungsanlagen sind von 09.00 bis 19.00 Uhr geöffnet, vom 1. Mai bis 1. November, der Kathedralenturm ist von März bis November in der City Card enthalten, und das Motta-Schwimmbad ist von Mai bis September geöffnet. Die Standseilbahn ruht danach wegen Bauarbeiten vom 27. August bis 4. Dezember 2026, und der Kathedralenturm schliesst für den Winter von Dezember bis Februar, sodass eine in der günstigeren Fenster Oktober bis März gekaufte City Card weiterhin Museen und Transport abdeckt, auch wenn im Freien weniger geöffnet ist.',
      },
    ],
  },
  stats: [
    { value: '581', label: { en: 'metres above sea level, city centre', fr: 'mètres d’altitude, centre-ville', de: 'Meter über Meer, Stadtzentrum' } },
    { value: '38039', label: { en: 'residents, the largest city in the canton (Dec 2020)', fr: 'habitants, la plus grande ville du canton (déc. 2020)', de: 'Einwohnende, grösste Stadt des Kantons (Dez. 2020)' } },
    { value: '2023', label: { en: 'the year Fribourg joined UNESCO’s Creative Cities Network for gastronomy', fr: 'année d’entrée de Fribourg au Réseau des villes créatives de l’UNESCO pour la gastronomie', de: 'Beitrittsjahr Freiburgs zum Creative Cities Network der UNESCO für Gastronomie' } },
  ],
  hero: {
    photo: '/photos/fribourg.jpg',
    caption: { en: 'The Grand-Rue, in Fribourg’s old town.', fr: 'La Grand-Rue, dans la vieille ville de Fribourg.', de: 'Die Grand-Rue, in der Altstadt von Freiburg.' },
    credit: { author: 'Joachim Kohler', license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/', source: 'https://commons.wikimedia.org/wiki/File:Fribourg_-_Grand-Rue.jpg' },
  },
  sectors: [
    {
      title: { en: 'The Old Town, near the cathedral', fr: 'La vieille ville, près de la cathédrale', de: 'Die Altstadt, nahe der Kathedrale' },
      walk: { en: 'Rue de Morat, below the cathedral', fr: 'Rue de Morat, sous la cathédrale', de: 'Rue de Morat, unterhalb der Kathedrale' },
      text: {
        en: 'The historic centre of Fribourg, close to the Cathedral of St Nicholas and the medieval fortifications. Hotel de la Rose stands at Rue de Morat 1, in a 17th-century building.',
        fr: 'Le centre historique de Fribourg, près de la cathédrale Saint-Nicolas et des fortifications médiévales. L’Hôtel de la Rose se trouve à la Rue de Morat 1, dans un bâtiment du XVIIe siècle.',
        de: 'Das historische Zentrum von Freiburg, nahe der Kathedrale St. Nikolaus und den mittelalterlichen Festungsanlagen. Das Hotel de la Rose liegt an der Rue de Morat 1, in einem Gebäude aus dem 17. Jahrhundert.',
      },
      points: [
        { en: 'Hotel de la Rose: 17th-century building, 3-star, family-run in style', fr: 'Hôtel de la Rose : bâtiment du XVIIe siècle, 3 étoiles, de style familial', de: 'Hotel de la Rose: Gebäude aus dem 17. Jahrhundert, 3 Sterne, familiär geführt' },
        { en: 'Rue de Morat 1, close to the historic centre', fr: 'Rue de Morat 1, près du centre historique', de: 'Rue de Morat 1, nahe dem historischen Zentrum' },
      ],
      story: {
        en: 'This is Fribourg’s postcard side, the historic centre close to the Cathedral of St Nicholas and the medieval fortifications. Hotel de la Rose sits right in it, at Rue de Morat 1, in a 17th-century building run in a family style at three-star level. Choose this side for the cathedral tower, the fortifications walk and the Old Town streets; the station itself is further off.',
        fr: 'C’est le visage carte postale de Fribourg, le centre historique proche de la cathédrale Saint-Nicolas et des fortifications médiévales. L’Hôtel de la Rose s’y trouve en plein cœur, à la Rue de Morat 1, dans un bâtiment du XVIIe siècle géré dans un style familial et classé 3 étoiles. On choisit ce côté pour la tour de la cathédrale, la marche des fortifications et les rues de la vieille ville ; la gare, elle, se trouve plus loin.',
        de: 'Das ist Freiburgs Postkartenseite, das historische Zentrum nahe der Kathedrale St. Nikolaus und den mittelalterlichen Festungsanlagen. Das Hotel de la Rose liegt mittendrin, an der Rue de Morat 1, in einem familiär geführten Gebäude aus dem 17. Jahrhundert auf Drei-Sterne-Niveau. Diese Seite wählt man wegen des Kathedralenturms, des Rundgangs um die Festungsanlagen und der Gassen der Altstadt; der Bahnhof selbst liegt weiter weg.',
      },
    },
    {
      title: { en: 'Station side, Rue du Simplon', fr: 'Côté gare, Rue du Simplon', de: 'Bahnhofseite, Rue du Simplon' },
      walk: { en: 'A short walk from the station side of the centre', fr: 'À deux pas du côté gare du centre', de: 'Kurzer Weg von der Bahnhofseite des Zentrums' },
      text: {
        en: 'Around Rue du Simplon, a short walk from the station side of the centre rather than the Old Town below the cathedral. Alpha Hotel stands at Rue du Simplon 13.',
        fr: 'Autour de la Rue du Simplon, à deux pas du côté gare du centre plutôt que de la vieille ville sous la cathédrale. L’Alpha Hotel se trouve à la Rue du Simplon 13.',
        de: 'Rund um die Rue du Simplon, kurzer Weg von der Bahnhofseite des Zentrums statt von der Altstadt unterhalb der Kathedrale. Das Alpha Hotel liegt an der Rue du Simplon 13.',
      },
      points: [
        { en: 'Alpha Hotel: Rue du Simplon 13', fr: 'Alpha Hotel : Rue du Simplon 13', de: 'Alpha Hotel: Rue du Simplon 13' },
        { en: 'A short walk from the station side of the centre', fr: 'À deux pas du côté gare du centre', de: 'Kurzer Weg von der Bahnhofseite des Zentrums' },
      ],
      story: {
        en: 'On the other side of the centre from the cathedral, around Rue du Simplon. Alpha Hotel stands here, a short walk from the station side rather than the Old Town below the cathedral. Choose this side for a practical base close to the trains; the fortifications and the cathedral tower are then a walk away rather than on the doorstep.',
        fr: 'De l’autre côté du centre par rapport à la cathédrale, autour de la Rue du Simplon. L’Alpha Hotel s’y trouve, à deux pas du côté gare plutôt que de la vieille ville sous la cathédrale. On choisit ce côté pour une base pratique près des trains ; les fortifications et la tour de la cathédrale se trouvent alors à distance de marche plutôt qu’à la porte.',
        de: 'Auf der anderen Seite des Zentrums, von der Kathedrale aus gesehen, rund um die Rue du Simplon. Das Alpha Hotel liegt hier, kurzer Weg von der Bahnhofseite statt von der Altstadt unterhalb der Kathedrale. Diese Seite wählt man für eine praktische Basis nahe den Zügen; Festungsanlagen und Kathedralenturm liegen dann einen Fussweg entfernt, nicht direkt vor der Tür.',
      },
    },
  ],
  hotels: [
    {
      slug: 'fribourg-hotel-de-la-rose',
      name: 'Hotel de la Rose',
      photo: '/photos/hotels/fribourg-hotel-de-la-rose.jpg',
      url: 'https://www.hoteldelarose.ch/en/',
      sector: { en: 'The Old Town, near the cathedral', fr: 'La vieille ville, près de la cathédrale', de: 'Die Altstadt, nahe der Kathedrale' },
      facts: [
        { en: 'Rue de Morat 1, close to the historic centre', fr: 'Rue de Morat 1, près du centre historique', de: 'Rue de Morat 1, nahe dem historischen Zentrum' },
        { en: '17th-century building', fr: 'Bâtiment du XVIIe siècle', de: 'Gebäude aus dem 17. Jahrhundert' },
        { en: '3-star, family-run in style', fr: '3 étoiles, de style familial', de: '3 Sterne, familiär geführt' },
      ],
      blurb: {
        en: 'Hotel de la Rose stands at Rue de Morat 1, in a 17th-century building close to Fribourg’s historic centre. A three-star house run in a family style, it suits a stay built around the cathedral and the fortifications rather than the station.',
        fr: 'L’Hôtel de la Rose se trouve à la Rue de Morat 1, dans un bâtiment du XVIIe siècle proche du centre historique de Fribourg. Maison 3 étoiles de style familial, elle convient à un séjour organisé autour de la cathédrale et des fortifications plutôt que de la gare.',
        de: 'Das Hotel de la Rose liegt an der Rue de Morat 1, in einem Gebäude aus dem 17. Jahrhundert nahe dem historischen Zentrum von Freiburg. Als familiär geführtes Drei-Sterne-Haus passt es zu einem Aufenthalt rund um Kathedrale und Festungsanlagen, nicht um den Bahnhof.',
      },
    },
    {
      slug: 'fribourg-alpha',
      name: 'Alpha Hotel',
      photo: '/photos/hotels/fribourg-alpha.jpg',
      url: 'https://www.alpha-hotel.ch/',
      sector: { en: 'Station side, Rue du Simplon', fr: 'Côté gare, Rue du Simplon', de: 'Bahnhofseite, Rue du Simplon' },
      facts: [
        { en: 'Rue du Simplon 13', fr: 'Rue du Simplon 13', de: 'Rue du Simplon 13' },
        { en: 'A short walk from the station side of the centre', fr: 'À deux pas du côté gare du centre', de: 'Kurzer Weg von der Bahnhofseite des Zentrums' },
      ],
      blurb: {
        en: 'Alpha Hotel stands at Rue du Simplon 13, a short walk from the station side of the centre rather than the Old Town below the cathedral. It suits a practical stay close to the trains, with the fortifications and the cathedral a walk further on.',
        fr: 'L’Alpha Hotel se trouve à la Rue du Simplon 13, à deux pas du côté gare du centre plutôt que de la vieille ville sous la cathédrale. Il convient à un séjour pratique près des trains, les fortifications et la cathédrale se trouvant un peu plus loin.',
        de: 'Das Alpha Hotel liegt an der Rue du Simplon 13, kurzer Weg von der Bahnhofseite des Zentrums statt von der Altstadt unterhalb der Kathedrale. Es passt zu einem praktischen Aufenthalt nahe den Zügen, mit Festungsanlagen und Kathedrale einen Fussweg weiter.',
      },
    },
    {
      slug: 'fribourg-du-faucon',
      name: 'Hôtel du Faucon',
      photo: '/photos/hotels/fribourg-du-faucon.jpg',
      url: 'https://hotel-du-faucon.ch/en/',
      sector: { en: 'Station side, Rue du Simplon', fr: 'Côté gare, rue du Simplon', de: 'Bahnhofseite, Rue du Simplon' },
      facts: [
        { en: 'Rue de Lausanne 76, on a cobbled pedestrian street a short walk from the centre and the station', fr: 'Rue de Lausanne 76, dans une rue piétonne pavée à quelques minutes du centre et de la gare', de: 'Rue de Lausanne 76, in einer gepflasterten Fussgängergasse, wenige Minuten von Zentrum und Bahnhof' },
        { en: '23 rooms, some with a kitchenette, pets taken at no extra charge', fr: '23 chambres, certaines avec kitchenette, animaux acceptés sans supplément', de: '23 Zimmer, einige mit Kitchenette, Haustiere ohne Aufpreis' },
        { en: 'Italian dining with the Restaurant Solemio', fr: 'Cuisine italienne avec le restaurant Solemio', de: 'Italienische Küche mit dem Restaurant Solemio' },
      ],
      blurb: {
        en: 'The Faucon sits on the cobbled Rue de Lausanne, the pedestrian street that climbs between the station and the old town, so both ends of the city are a walk away. Its 23 rooms include some with a kitchenette, pets stay at no extra charge, and the Italian Solemio handles dinner on the ground floor. It is the practical middle ground between sleeping by the platforms and sleeping under the cathedral.',
        fr: 'Le Faucon occupe la rue de Lausanne pavée, la rue piétonne qui grimpe entre la gare et la vieille ville : les deux extrémités de la ville se font à pied. Ses 23 chambres comptent des chambres avec kitchenette, les animaux sont acceptés sans supplément, et l’italien Solemio assure le dîner au rez-de-chaussée. C’est le juste milieu entre dormir au pied des quais et dormir sous la cathédrale.',
        de: 'Der Faucon liegt an der gepflasterten Rue de Lausanne, der Fussgängergasse zwischen Bahnhof und Altstadt, beide Enden der Stadt sind also zu Fuss erreichbar. Unter den 23 Zimmern haben einige eine Kitchenette, Haustiere sind ohne Aufpreis willkommen, und das italienische Solemio übernimmt im Erdgeschoss das Abendessen. Der praktische Mittelweg zwischen Schlafen am Perron und Schlafen unter der Kathedrale.',
      },
    },
    {
      slug: 'fribourg-mercure-remparts',
      name: 'Mercure Fribourg Centre Remparts',
      photo: '/photos/hotels/fribourg-mercure-remparts.jpg',
      url: 'https://all.accor.com/hotel/B971/index.en.shtml',
      sector: { en: 'The Old Town, near the cathedral', fr: 'La vieille ville, près de la cathédrale', de: 'Die Altstadt, nahe der Kathedrale' },
      facts: [
        { en: 'Chemin de Montrevers 1, opposite the Morat Gate, about seven minutes on foot from the historic centre', fr: 'Chemin de Montrevers 1, face à la Porte de Morat, à environ sept minutes à pied du centre historique', de: 'Chemin de Montrevers 1, gegenüber dem Murtentor, rund sieben Gehminuten vom historischen Zentrum' },
        { en: '63 rooms', fr: '63 chambres', de: '63 Zimmer' },
      ],
      blurb: {
        en: 'The largest address in this selection, with 63 rooms set against the medieval wall opposite the Morat Gate, about seven minutes on foot from the historic centre. The setting is quiet because the fortifications, not a main street, are what it faces. Take it when you want a full-service hotel and do not mind walking the last stretch into the old town.',
        fr: 'La plus grande adresse de cette sélection, avec 63 chambres adossées au rempart médiéval, face à la Porte de Morat, à environ sept minutes à pied du centre historique. Le calme vient de ce qu’elle regarde les fortifications et non une artère passante. À prendre quand on veut un hôtel avec tous les services et que les derniers mètres à pied ne dérangent pas.',
        de: 'Die grösste Adresse dieser Auswahl, mit 63 Zimmern an der mittelalterlichen Mauer gegenüber dem Murtentor, rund sieben Gehminuten vom historischen Zentrum. Die Ruhe kommt daher, dass es auf die Befestigung blickt und nicht auf eine Hauptstrasse. Passend, wenn man ein Haus mit vollem Service will und das letzte Stück zu Fuss nicht stört.',
      },
    },
  ],
  hotelsNote: {
    en: 'Only two hotels could be confirmed on their own websites for this guide, Hotel de la Rose and Alpha Hotel, both checked on 16 September 2026. No ratings or reviews on this guide, and no prices are shown here yet.',
    fr: 'Seuls deux hôtels ont pu être confirmés sur leur propre site pour ce guide, l’Hôtel de la Rose et l’Alpha Hotel, tous deux vérifiés le 16 septembre 2026. Aucune note ni aucun avis sur ce guide, et aucun prix n’y figure encore.',
    de: 'Für diesen Ratgeber liessen sich nur zwei Hotels auf der eigenen Website bestätigen, das Hotel de la Rose und das Alpha Hotel, beide geprüft am 16. September 2026. Keine Bewertungen oder Rezensionen auf dieser Seite, und noch keine Preise.',
  },
  calendar: {
    title: { en: 'What runs, month by month', fr: 'Ce qui fonctionne, mois par mois', de: 'Was geöffnet ist, Monat für Monat' },
    rows: [
      { name: { en: 'Tour of the fortifications', fr: 'Tour des fortifications', de: 'Rundgang um die Festungsanlagen' }, months: ['x', 'x', 'x', 'x', 'o', 'o', 'o', 'o', 'o', 'o', 'x', 'x'] },
      { name: { en: 'Cathedral tower climb', fr: 'Montée à la tour de la cathédrale', de: 'Turmbesteigung der Kathedrale' }, months: ['x', 'x', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'x'] },
      { name: { en: 'Fribourg funicular', fr: 'Funiculaire de Fribourg', de: 'Freiburger Standseilbahn' }, months: ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'r', 'x', 'x', 'x', 'r'] },
      { name: { en: 'Motta swimming pool', fr: 'Piscine de la Motta', de: 'Motta-Schwimmbad' }, months: ['x', 'x', 'x', 'x', 'o', 'o', 'o', 'o', 'o', 'x', 'x', 'x'] },
    ],
    note: {
      en: '2026. Fortifications: open 09:00 to 19:00, 1 May to 1 November. Cathedral tower climb: included with the Fribourg City Card, March to November. Funicular: unavailable 27 August to 4 December 2026 for works. Motta swimming pool: included with the City Card, May to September. Sources: fribourg.ch/en/fribourg/tour-of-the-fortifications, fribourg.ch/en/fribourg/fribourg-city-card/, checked 16 September 2026.',
      fr: '2026. Fortifications : ouvertes de 09h00 à 19h00, du 1er mai au 1er novembre. Montée à la tour de la cathédrale : incluse dans la City Card de Fribourg, de mars à novembre. Funiculaire : indisponible du 27 août au 4 décembre 2026 pour travaux. Piscine de la Motta : incluse dans la City Card, de mai à septembre. Sources : fribourg.ch/en/fribourg/tour-of-the-fortifications, fribourg.ch/en/fribourg/fribourg-city-card/, vérifiées le 16 septembre 2026.',
      de: '2026. Festungsanlagen: geöffnet 09.00 bis 19.00 Uhr, 1. Mai bis 1. November. Turmbesteigung der Kathedrale: in der Fribourg City Card enthalten, März bis November. Standseilbahn: nicht verfügbar 27. August bis 4. Dezember 2026 wegen Bauarbeiten. Motta-Schwimmbad: in der City Card enthalten, Mai bis September. Quellen: fribourg.ch/en/fribourg/tour-of-the-fortifications, fribourg.ch/en/fribourg/fribourg-city-card/, geprüft am 16. September 2026.',
    },
  },
  practical: {
    title: { en: 'Getting around Fribourg, in practice', fr: 'Se déplacer à Fribourg, en pratique', de: 'Unterwegs in Freiburg, in der Praxis' },
    items: [
      {
        title: { en: 'Fribourg is not car-free', fr: 'Fribourg n’est pas sans voiture', de: 'Freiburg ist nicht autofrei' },
        text: {
          en: 'Unlike several of the car-free villages covered on this site, Fribourg is crossed by road and by TPF buses across the whole city. Only the Old Town core, around the cathedral and the fortifications, is heavily pedestrianised, so expect ordinary traffic on the rest of the way in.',
          fr: 'Contrairement à plusieurs des villages sans voiture présentés sur ce site, Fribourg est traversée par la route et par les bus TPF dans toute la ville. Seul le cœur de la vieille ville, autour de la cathédrale et des fortifications, est fortement piétonnisé : attendez-vous à une circulation ordinaire sur le reste du trajet.',
          de: 'Anders als mehrere der autofreien Dörfer auf dieser Seite wird Freiburg in der ganzen Stadt von Strassen und von TPF-Bussen durchquert. Nur der Kern der Altstadt, rund um Kathedrale und Festungsanlagen, ist stark fussgängerfreundlich gestaltet: Rechnen Sie auf dem restlichen Weg mit gewöhnlichem Verkehr.',
        },
      },
      {
        title: { en: 'The Fribourg City Card', fr: 'La City Card de Fribourg', de: 'Die Fribourg City Card' },
        text: {
          en: 'The card covers seven museums, TPF zone 10 transport including the funicular, the cathedral tower climb from March to November, the Motta swimming pool from May to September, urban golf and pastry at Cafe Villars. Buy it before you start sightseeing rather than after, since it bundles nearly everything you would otherwise pay for one by one.',
          fr: 'La carte couvre sept musées, les transports de la zone TPF 10 y compris le funiculaire, la montée à la tour de la cathédrale de mars à novembre, la piscine de la Motta de mai à septembre, le golf urbain et la pâtisserie au Cafe Villars. Achetez-la avant de commencer vos visites plutôt qu’après, puisqu’elle regroupe presque tout ce que vous paieriez autrement séparément.',
          de: 'Die Karte deckt sieben Museen ab, den Verkehr der TPF-Zone 10 samt Standseilbahn, die Turmbesteigung der Kathedrale von März bis November, das Motta-Schwimmbad von Mai bis September, Citygolf und Gebäck im Cafe Villars. Kaufen Sie sie, bevor Sie mit der Besichtigung beginnen, nicht danach, da sie fast alles bündelt, was Sie sonst einzeln bezahlen würden.',
        },
      },
      {
        title: { en: 'The funicular stops for works', fr: 'Le funiculaire s’arrête pour travaux', de: 'Die Standseilbahn ruht wegen Bauarbeiten' },
        text: {
          en: 'The Fribourg funicular, part of TPF zone 10 and covered by the City Card, is scheduled to be unavailable from 27 August to 4 December 2026. Plan on the TPF buses covering the same zone if your stay falls within that window.',
          fr: 'Le funiculaire de Fribourg, qui fait partie de la zone TPF 10 et est couvert par la City Card, doit être indisponible du 27 août au 4 décembre 2026. Comptez sur les bus TPF de la même zone si votre séjour tombe dans cette période.',
          de: 'Die Freiburger Standseilbahn, Teil der TPF-Zone 10 und in der City Card enthalten, soll vom 27. August bis 4. Dezember 2026 ausser Betrieb sein. Rechnen Sie mit den TPF-Bussen derselben Zone, falls Ihr Aufenthalt in dieses Fenster fällt.',
        },
      },
      {
        title: { en: 'Seasonal hours on the cathedral and the walls', fr: 'Horaires saisonniers de la cathédrale et des remparts', de: 'Saisonale Öffnungszeiten von Kathedrale und Mauern' },
        text: {
          en: 'The cathedral tower climb runs only from March to November as part of the City Card, and the fortifications keep to 09:00 to 19:00 opening hours from 1 May to 1 November. Outside those windows, plan your visit around the Old Town streets rather than either attraction.',
          fr: 'La montée à la tour de la cathédrale ne fonctionne que de mars à novembre, dans le cadre de la City Card, et les fortifications gardent des horaires de 09h00 à 19h00 du 1er mai au 1er novembre. En dehors de ces fenêtres, organisez votre visite autour des rues de la vieille ville plutôt qu’autour de l’une ou l’autre attraction.',
          de: 'Die Turmbesteigung der Kathedrale läuft nur von März bis November im Rahmen der City Card, und die Festungsanlagen halten Öffnungszeiten von 09.00 bis 19.00 Uhr, vom 1. Mai bis 1. November. Ausserhalb dieser Fenster planen Sie Ihren Besuch besser rund um die Gassen der Altstadt statt um eine der beiden Attraktionen.',
        },
      },
    ],
  },
  seasons: {
    summer: {
      title: { en: 'Summer in Fribourg', fr: 'L’été à Fribourg', de: 'Sommer in Freiburg' },
      base: {
        en: 'Base yourself in the Old Town near the cathedral and the fortifications: both are fully open in summer, the fortifications from 09:00 to 19:00 and the cathedral tower as part of the City Card, and the Motta swimming pool runs from May to September. The funicular stops for works on 27 August, so a stay booked into early autumn should not count on it.',
        fr: 'Installez-vous en vieille ville, près de la cathédrale et des fortifications : les deux sont pleinement ouvertes l’été, les fortifications de 09h00 à 19h00 et la tour de la cathédrale dans le cadre de la City Card, et la piscine de la Motta fonctionne de mai à septembre. Le funiculaire s’arrête pour travaux le 27 août : un séjour prévu au début de l’automne ne doit pas compter dessus.',
        de: 'Wohnen Sie in der Altstadt, nahe Kathedrale und Festungsanlagen: Beide sind im Sommer voll geöffnet, die Festungsanlagen von 09.00 bis 19.00 Uhr und der Kathedralenturm im Rahmen der City Card, und das Motta-Schwimmbad ist von Mai bis September geöffnet. Die Standseilbahn ruht ab dem 27. August wegen Bauarbeiten: Ein Aufenthalt im frühen Herbst sollte nicht darauf zählen.',
      },
      facts: [
        { value: '09:00 → 19:00', label: { en: 'fortifications opening hours, 1 May to 1 November', fr: 'horaires des fortifications, du 1er mai au 1er novembre', de: 'Öffnungszeiten der Festungsanlagen, 1. Mai bis 1. November' } },
        { value: 'May → Sep', label: { en: 'Motta swimming pool, included with the City Card', fr: 'piscine de la Motta, incluse dans la City Card', de: 'Motta-Schwimmbad, in der City Card enthalten' } },
        { value: 'CHF 20', label: { en: 'City Card one-day price, adult, April to September', fr: 'prix City Card un jour, adulte, d’avril à septembre', de: 'Preis City Card ein Tag, Erwachsene, April bis September' } },
      ],
      note: {
        en: 'Sources: fribourg.ch/en/fribourg/tour-of-the-fortifications, fribourg.ch/en/fribourg/fribourg-city-card/, checked 16 September 2026.',
        fr: 'Sources : fribourg.ch/en/fribourg/tour-of-the-fortifications, fribourg.ch/en/fribourg/fribourg-city-card/, vérifiées le 16 septembre 2026.',
        de: 'Quellen: fribourg.ch/en/fribourg/tour-of-the-fortifications, fribourg.ch/en/fribourg/fribourg-city-card/, geprüft am 16. September 2026.',
      },
    },
    winter: {
      title: { en: 'Winter in Fribourg', fr: 'L’hiver à Fribourg', de: 'Winter in Freiburg' },
      base: {
        en: 'Base yourself near the station or the Old Town alike in winter, since the fortifications close outside their 1 May to 1 November window and the cathedral tower shuts from December to February. The funicular is also out of service until 4 December 2026, so factor the TPF buses covering zone 10 into any stay before that date.',
        fr: 'En hiver, installez-vous aussi bien près de la gare qu’en vieille ville, puisque les fortifications ferment en dehors de leur fenêtre du 1er mai au 1er novembre et que la tour de la cathédrale ferme de décembre à février. Le funiculaire est aussi hors service jusqu’au 4 décembre 2026 : comptez sur les bus TPF de la zone 10 pour tout séjour avant cette date.',
        de: 'Wohnen Sie im Winter sowohl nahe dem Bahnhof als auch in der Altstadt, denn die Festungsanlagen schliessen ausserhalb ihres Fensters vom 1. Mai bis 1. November, und der Kathedralenturm schliesst von Dezember bis Februar. Auch die Standseilbahn ist bis 4. Dezember 2026 ausser Betrieb: Rechnen Sie für jeden Aufenthalt vor diesem Datum mit den TPF-Bussen der Zone 10.',
      },
      facts: [
        { value: '27 Aug → 4 Dec', label: { en: 'funicular closed for works, 2026', fr: 'funiculaire fermé pour travaux, 2026', de: 'Standseilbahn wegen Bauarbeiten geschlossen, 2026' } },
        { value: 'Dec → Feb', label: { en: 'months the cathedral tower is closed', fr: 'mois de fermeture de la tour de la cathédrale', de: 'Monate, in denen der Kathedralenturm geschlossen ist' } },
        { value: 'CHF 15', label: { en: 'City Card one-day price, adult, October to March', fr: 'prix City Card un jour, adulte, d’octobre à mars', de: 'Preis City Card ein Tag, Erwachsene, Oktober bis März' } },
      ],
      note: {
        en: 'Sources: fribourg.ch/en/fribourg/fribourg-city-card/, fribourg.ch/en/fribourg/groups/st-nicholas-cathedral, checked 16 September 2026.',
        fr: 'Sources : fribourg.ch/en/fribourg/fribourg-city-card/, fribourg.ch/en/fribourg/groups/st-nicholas-cathedral, vérifiées le 16 septembre 2026.',
        de: 'Quellen: fribourg.ch/en/fribourg/fribourg-city-card/, fribourg.ch/en/fribourg/groups/st-nicholas-cathedral, geprüft am 16. September 2026.',
      },
    },
  },
  doing: {
    title: { en: 'What to do in Fribourg', fr: 'Que faire à Fribourg', de: 'Was man in Freiburg unternimmt' },
    intro: {
      en: 'Fribourg is not short of medieval streets to wander, but a handful of named places give a stay its shape: the fortifications above the Sarine, the cathedral tower in the Bourg district, and the funicular and old-town tour that connect them. These are the ones named by the city and its tourist office, with the figures they publish.',
      fr: 'Fribourg ne manque pas de ruelles médiévales à parcourir, mais quelques lieux nommés donnent sa forme à un séjour : les fortifications au-dessus de la Sarine, la tour de la cathédrale dans le quartier du Bourg, et le funiculaire et la visite de la vieille ville qui les relient. Ce sont ceux que nomment la ville et son office du tourisme, avec les chiffres qu’ils publient.',
      de: 'An mittelalterlichen Gassen zum Erkunden fehlt es Freiburg nicht, doch eine Handvoll benannter Orte prägt einen Aufenthalt: die Festungsanlagen über der Saane, der Kathedralenturm im Bourg-Quartier, sowie die Standseilbahn und die Altstadtführung, die sie verbinden. Das sind jene, die von der Stadt und ihrem Tourismusbüro genannt werden, mit den Zahlen, die sie veröffentlichen.',
    },
    groups: [
      {
        kind: 'walk',
        title: { en: 'The fortifications and the Old Town', fr: 'Les fortifications et la vieille ville', de: 'Festungsanlagen und Altstadt' },
        items: [
          {
            name: { en: 'Tour of the fortifications', fr: 'Tour des fortifications', de: 'Rundgang um die Festungsanlagen' },
            meta: { en: 'six towers, five gates · 13th-15th century', fr: 'six tours, cinq portes · XIIIe-XVe siècle', de: 'sechs Türme, fünf Tore · 13.-15. Jahrhundert' },
            text: {
              en: 'Fribourg’s medieval walls, six towers, five gates, seven sections of wall and one Great Bulwark, were built between the 13th and 15th centuries; the tourist office describes them as the most important ensemble of medieval military architecture in Switzerland. The full route takes about three hours, open 09:00 to 19:00 from 1 May to 1 November.',
              fr: 'Les remparts médiévaux de Fribourg, six tours, cinq portes, sept pans de muraille et un Grand Boulevard, ont été bâtis entre les XIIIe et XVe siècles ; l’office du tourisme les décrit comme le plus important ensemble d’architecture militaire médiévale de Suisse. Le parcours complet prend environ trois heures, ouvert de 09h00 à 19h00 du 1er mai au 1er novembre.',
              de: 'Freiburgs mittelalterliche Mauern, sechs Türme, fünf Tore, sieben Mauerabschnitte und ein Grosser Bollwerk, wurden zwischen dem 13. und 15. Jahrhundert erbaut; das Tourismusbüro bezeichnet sie als das bedeutendste Ensemble mittelalterlicher Militärarchitektur der Schweiz. Die komplette Runde dauert etwa drei Stunden, geöffnet von 09.00 bis 19.00 Uhr, vom 1. Mai bis 1. November.',
            },
          },
          {
            name: { en: 'Guided public tour of the Old Town', fr: 'Visite guidée publique de la vieille ville', de: 'Öffentliche Stadtführung durch die Altstadt' },
            meta: { en: 'run by the tourist office', fr: 'organisée par l’office du tourisme', de: 'vom Tourismusbüro organisiert' },
            text: {
              en: 'A scheduled walking tour of the Old Town, run by the Fribourg tourist office rather than a private operator. No fixed distance or duration is published for the route, so check the current calendar for the next departure.',
              fr: 'Une visite guidée programmée de la vieille ville, organisée par l’office du tourisme de Fribourg plutôt que par un prestataire privé. Aucune distance ni durée fixe n’est publiée pour ce parcours : vérifiez le calendrier en cours pour le prochain départ.',
              de: 'Eine geplante Führung durch die Altstadt, organisiert vom Freiburger Tourismusbüro und nicht von einem privaten Anbieter. Für die Route ist weder eine feste Distanz noch eine feste Dauer veröffentlicht: Prüfen Sie den aktuellen Kalender für den nächsten Termin.',
            },
          },
        ],
      },
      {
        kind: 'ride',
        title: { en: 'The cathedral tower and the funicular', fr: 'La tour de la cathédrale et le funiculaire', de: 'Kathedralenturm und Standseilbahn' },
        items: [
          {
            name: { en: 'Cathedral of St Nicholas', fr: 'Cathédrale Saint-Nicolas', de: 'Kathedrale St. Nikolaus' },
            meta: { en: 'Bourg district · Gothic', fr: 'quartier du Bourg · gothique', de: 'Bourg-Quartier · gotisch' },
            text: {
              en: 'In the Bourg district, the tourist office calls this Gothic building undoubtedly Fribourg’s most famous landmark. The Fribourg City Card includes the climb up the tower, open March to November, together with an audio guide.',
              fr: 'Dans le quartier du Bourg, l’office du tourisme qualifie ce bâtiment gothique de monument le plus célèbre de Fribourg, sans conteste. La City Card de Fribourg inclut la montée à la tour, ouverte de mars à novembre, avec un audioguide.',
              de: 'Im Bourg-Quartier nennt das Tourismusbüro dieses gotische Gebäude unbestritten das bekannteste Wahrzeichen Freiburgs. Die Fribourg City Card enthält die Turmbesteigung, geöffnet von März bis November, samt Audioguide.',
            },
          },
          {
            name: { en: 'Fribourg funicular', fr: 'Funiculaire de Fribourg', de: 'Freiburger Standseilbahn' },
            meta: { en: 'TPF zone 10 · closed 27 Aug to 4 Dec 2026', fr: 'zone TPF 10 · fermé du 27 août au 4 décembre 2026', de: 'TPF-Zone 10 · geschlossen 27. August bis 4. Dezember 2026' },
            text: {
              en: 'A public funicular counted within TPF zone 10 and covered by the Fribourg City Card. It is scheduled to be unavailable from 27 August to 4 December 2026, so check before you plan a day around it.',
              fr: 'Un funiculaire public compris dans la zone TPF 10 et couvert par la City Card de Fribourg. Il doit être indisponible du 27 août au 4 décembre 2026 : vérifiez avant d’organiser une journée autour de lui.',
              de: 'Eine öffentliche Standseilbahn, Teil der TPF-Zone 10 und in der Fribourg City Card enthalten. Sie soll vom 27. August bis 4. Dezember 2026 ausser Betrieb sein: Prüfen Sie das, bevor Sie einen Tag darum planen.',
            },
          },
        ],
      },
      {
        kind: 'local',
        title: { en: '“Capital of Fondue”', fr: '« Capitale de la fondue »', de: '„Hauptstadt des Fondues“' },
        items: [
          {
            name: { en: 'Capital of Fondue', fr: 'Capitale de la fondue', de: 'Hauptstadt des Fondues' },
            meta: { en: 'tourist office label · UNESCO gastronomy, since 2023', fr: 'label de l’office du tourisme · gastronomie UNESCO, depuis 2023', de: 'Label des Tourismusbüros · UNESCO-Gastronomie, seit 2023' },
            text: {
              en: 'The tourist office positions Fribourg as “Capital of Fondue,” a label reinforced by the city’s 2023 entry into UNESCO’s Creative Cities Network for gastronomy. Treat it as the city’s own branding rather than an independent ranking when you compare it with other food-focused destinations.',
              fr: 'L’office du tourisme présente Fribourg comme « Capitale de la fondue », un label renforcé par l’entrée de la ville en 2023 au Réseau des villes créatives de l’UNESCO pour la gastronomie. Considérez-le comme le positionnement propre de la ville plutôt que comme un classement indépendant lorsque vous la comparez à d’autres destinations gourmandes.',
              de: 'Das Tourismusbüro positioniert Freiburg als „Hauptstadt des Fondues“, ein Label, das durch den Beitritt der Stadt 2023 zum Creative Cities Network der UNESCO für Gastronomie verstärkt wird. Betrachten Sie es als eigenes Marketing der Stadt und nicht als unabhängiges Ranking, wenn Sie sie mit anderen kulinarisch ausgerichteten Zielen vergleichen.',
            },
          },
          {
            name: 'Cafe Villars',
            meta: { en: 'Fribourg City Card · pastry and candy', fr: 'City Card de Fribourg · pâtisserie et confiserie', de: 'Fribourg City Card · Gebäck und Süssigkeiten' },
            text: {
              en: 'Cafe Villars is the venue named on the Fribourg City Card for Swiss pastry and candy, one of the card’s benefits alongside seven museums and the funicular.',
              fr: 'Le Cafe Villars est l’adresse citée par la City Card de Fribourg pour la pâtisserie et la confiserie suisses, l’un des avantages de la carte aux côtés de sept musées et du funiculaire.',
              de: 'Das Cafe Villars ist die auf der Fribourg City Card genannte Adresse für Schweizer Gebäck und Süssigkeiten, eine der Karten-Leistungen neben sieben Museen und der Standseilbahn.',
            },
          },
        ],
      },
    ],
    note: {
      en: 'Sources: fribourg.ch/en/fribourg/tour-of-the-fortifications, fribourg.ch/en/fribourg/visits/guided-public-tours-of-the-old-town/, fribourg.ch/en/fribourg/groups/st-nicholas-cathedral, fribourg.ch/en/fribourg/fribourg-city-card/, fribourg.ch/en/fribourg/, checked 16 September 2026.',
      fr: 'Sources : fribourg.ch/en/fribourg/tour-of-the-fortifications, fribourg.ch/en/fribourg/visits/guided-public-tours-of-the-old-town/, fribourg.ch/en/fribourg/groups/st-nicholas-cathedral, fribourg.ch/en/fribourg/fribourg-city-card/, fribourg.ch/en/fribourg/, vérifiées le 16 septembre 2026.',
      de: 'Quellen: fribourg.ch/en/fribourg/tour-of-the-fortifications, fribourg.ch/en/fribourg/visits/guided-public-tours-of-the-old-town/, fribourg.ch/en/fribourg/groups/st-nicholas-cathedral, fribourg.ch/en/fribourg/fribourg-city-card/, fribourg.ch/en/fribourg/, geprüft am 16. September 2026.',
    },
  },
  faq: [
    {
      q: { en: 'What does the Fribourg City Card include?', fr: 'Que comprend la City Card de Fribourg ?', de: 'Was beinhaltet die Fribourg City Card?' },
      a: {
        en: 'The card gives access to seven museums, including the Art and History Museum and the Kaeserberg model railway, plus public transport within TPF zone 10, the funicular, the cathedral tower climb from March to November with an audio guide, the Motta swimming pool from May to September, urban golf and pastry at Cafe Villars. Buy it before you start sightseeing, since it bundles nearly everything you would otherwise pay for separately.',
        fr: 'La carte donne accès à sept musées, dont le Musée d’art et d’histoire et le réseau miniature de Kaeserberg, ainsi qu’aux transports publics de la zone TPF 10, au funiculaire, à la montée à la tour de la cathédrale de mars à novembre avec audioguide, à la piscine de la Motta de mai à septembre, au golf urbain et à la pâtisserie au Cafe Villars. Achetez-la avant de commencer vos visites, puisqu’elle regroupe presque tout ce que vous paieriez sinon séparément.',
        de: 'Die Karte gewährt Zugang zu sieben Museen, darunter das Museum für Kunst und Geschichte und die Modelleisenbahn Kaeserberg, dazu den öffentlichen Verkehr der TPF-Zone 10, die Standseilbahn, die Turmbesteigung der Kathedrale von März bis November mit Audioguide, das Motta-Schwimmbad von Mai bis September, Citygolf und Gebäck im Cafe Villars. Kaufen Sie sie, bevor Sie mit der Besichtigung beginnen, da sie fast alles bündelt, was Sie sonst einzeln bezahlen würden.',
      },
    },
    {
      q: { en: 'How much does the Fribourg City Card cost?', fr: 'Combien coûte la City Card de Fribourg ?', de: 'Wie viel kostet die Fribourg City Card?' },
      a: {
        en: 'A one-day card costs CHF 20 for an adult and CHF 10 for a child aged 6 to 16 from April to September, dropping to CHF 15 and CHF 5 from October to March; a two-day card runs CHF 30 and CHF 12 in summer and CHF 25 and CHF 10 in winter. Buying it in the cheaper October-to-March window still unlocks the same museums and transport, so a winter visit does not mean a shorter list.',
        fr: 'Une carte d’un jour coûte CHF 20 pour un adulte et CHF 10 pour un enfant de 6 à 16 ans d’avril à septembre, contre CHF 15 et CHF 5 d’octobre à mars ; une carte de deux jours revient à CHF 30 et CHF 12 en été, et CHF 25 et CHF 10 en hiver. L’acheter dans la fenêtre moins chère d’octobre à mars donne toujours accès aux mêmes musées et transports : une visite hivernale ne réduit donc pas la liste.',
        de: 'Eine Tageskarte kostet CHF 20 für Erwachsene und CHF 10 für Kinder von 6 bis 16 Jahren von April bis September, und CHF 15 beziehungsweise CHF 5 von Oktober bis März; eine Zweitageskarte kostet CHF 30 und CHF 12 im Sommer sowie CHF 25 und CHF 10 im Winter. Der Kauf im günstigeren Fenster Oktober bis März schaltet weiterhin dieselben Museen und denselben Verkehr frei, ein Winterbesuch bedeutet also keine kürzere Liste.',
      },
    },
    {
      q: { en: 'What are the fortifications you can walk around Fribourg?', fr: 'Quelles sont les fortifications que l’on peut parcourir à Fribourg ?', de: 'Was sind die Festungsanlagen, die man in Freiburg umrunden kann?' },
      a: {
        en: 'A medieval defensive circuit of six towers, five gates, seven sections of wall and one Great Bulwark, built between the 13th and 15th centuries and, according to the tourist office, the most important ensemble of medieval military architecture in Switzerland. The full route takes about three hours and is open from 09:00 to 19:00 between 1 May and 1 November, so plan the walk for the warmer months.',
        fr: 'Un circuit défensif médiéval de six tours, cinq portes, sept pans de muraille et un Grand Boulevard, bâti entre les XIIIe et XVe siècles et, selon l’office du tourisme, le plus important ensemble d’architecture militaire médiévale de Suisse. Le parcours complet prend environ trois heures et est ouvert de 09h00 à 19h00 entre le 1er mai et le 1er novembre : prévoyez donc cette marche pour les mois les plus chauds.',
        de: 'Ein mittelalterlicher Wehrgürtel aus sechs Türmen, fünf Toren, sieben Mauerabschnitten und einem Grossen Bollwerk, erbaut zwischen dem 13. und 15. Jahrhundert und laut Tourismusbüro das bedeutendste Ensemble mittelalterlicher Militärarchitektur der Schweiz. Die komplette Runde dauert etwa drei Stunden und ist von 09.00 bis 19.00 Uhr zwischen dem 1. Mai und dem 1. November geöffnet: Planen Sie den Rundgang also für die wärmeren Monate ein.',
      },
    },
    {
      q: { en: 'Why is Fribourg called the “Capital of Fondue”?', fr: 'Pourquoi Fribourg est-elle appelée la « Capitale de la fondue » ?', de: 'Warum wird Freiburg „Hauptstadt des Fondues“ genannt?' },
      a: {
        en: 'It is the tourist office’s own positioning for the city, reinforced since 2023 by Fribourg’s entry into UNESCO’s Creative Cities Network in the field of gastronomy. Treat it as the city’s own branding rather than an independent ranking when you compare it with other food-focused destinations.',
        fr: 'C’est le positionnement propre de l’office du tourisme pour la ville, renforcé depuis 2023 par l’entrée de Fribourg au Réseau des villes créatives de l’UNESCO dans le domaine de la gastronomie. Considérez-le comme le positionnement propre de la ville plutôt que comme un classement indépendant lorsque vous la comparez à d’autres destinations gourmandes.',
        de: 'Das ist die eigene Positionierung des Tourismusbüros für die Stadt, seit 2023 verstärkt durch Freiburgs Beitritt zum Creative Cities Network der UNESCO im Bereich Gastronomie. Betrachten Sie es als eigenes Marketing der Stadt und nicht als unabhängiges Ranking, wenn Sie sie mit anderen kulinarisch ausgerichteten Zielen vergleichen.',
      },
    },
    {
      q: { en: 'Is the Fribourg funicular running year round?', fr: 'Le funiculaire de Fribourg fonctionne-t-il toute l’année ?', de: 'Fährt die Freiburger Standseilbahn ganzjährig?' },
      a: {
        en: 'No, the Fribourg City Card page states that the funicular is unavailable from 27 August to 4 December 2026 for works. If those dates fall within your stay, plan on the TPF buses covering zone 10 instead, since the same City Card also covers them.',
        fr: 'Non, la page de la City Card de Fribourg indique que le funiculaire est indisponible du 27 août au 4 décembre 2026 pour travaux. Si ces dates tombent pendant votre séjour, comptez plutôt sur les bus TPF de la zone 10, également couverts par la même City Card.',
        de: 'Nein, die Seite der Fribourg City Card gibt an, dass die Standseilbahn vom 27. August bis 4. Dezember 2026 wegen Bauarbeiten nicht verfügbar ist. Fallen diese Daten in Ihren Aufenthalt, rechnen Sie stattdessen mit den TPF-Bussen der Zone 10, die ebenfalls von derselben City Card abgedeckt werden.',
      },
    },
  ],
  neighbours: ['bern', 'lausanne', 'gruyeres', 'neuchatel'],
}
