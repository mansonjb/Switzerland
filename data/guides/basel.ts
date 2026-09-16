import type { DestinationGuide } from '../types'

// Sources in data/SOURCES-basel.md (checked 16/09/2026). No number without a source.
export const basel: DestinationGuide = {
  slug: 'basel',
  stamp: 'generic',
  updated: '2026-09-16',
  meta: {
    title: { en: 'Where to stay in Basel: old town, Rhine, Kleinbasel', fr: 'Où dormir à Bâle : vieille ville, Rhin, Kleinbasel', de: 'Wo übernachten in Basel: Altstadt, Rhein, Kleinbasel' },
    description: {
      en: 'Basel area by area: Grossbasel’s old town on the Rhine, Kleinbasel across the river, and the St. Alban quarter. Hotels with real addresses, the four Rhine ferries, and the free BaselCard.',
      fr: 'Bâle secteur par secteur : la vieille ville de Grossbasel sur le Rhin, Kleinbasel de l’autre côté du fleuve, et le quartier de St. Alban. Hôtels avec adresses réelles, les quatre bacs du Rhin, et la BaselCard gratuite.',
      de: 'Basel Ortsteil für Ortsteil: die Altstadt von Grossbasel am Rhein, Kleinbasel auf der anderen Flussseite, und das Quartier St. Alban. Hotels mit echten Adressen, die vier Rheinfähren, und die kostenlose BaselCard.',
    },
  },
  eyebrow: { en: 'Basel region · Basel', fr: 'Région de Bâle · Bâle', de: 'Region Basel · Basel' },
  title: { en: 'Where to stay in Basel', fr: 'Où dormir à Bâle', de: 'Wo übernachten in Basel' },
  intro: {
    en: 'A Rhine city at 261 m, split by the river into Grossbasel on the left bank, with the old town and the Münster, and Kleinbasel on the right. The Mittlere Brücke, completed in 1905 with a predecessor dating to around 1220, carries traffic across, while four historic passenger ferries, cable-guided and powered only by the current, cross on foot nearby. A narrow stair of about 250 steps climbs each of the Münster’s two towers, the Georgsturm and the Martinsturm, for a view over the city.',
    fr: 'Une ville du Rhin à 261 m d’altitude, coupée en deux par le fleuve : Grossbasel sur la rive gauche, avec la vieille ville et le Münster, et Kleinbasel sur la rive droite. Le Mittlere Brücke, achevé en 1905 avec un prédécesseur datant d’environ 1220, porte la circulation d’une rive à l’autre, tandis que quatre bacs historiques, guidés par câble et mus par le seul courant, permettent de traverser à pied non loin de là. Un escalier étroit d’environ 250 marches grimpe dans chacune des deux tours du Münster, le Georgsturm et le Martinsturm, pour une vue sur la ville.',
    de: 'Eine Rheinstadt auf 261 m, vom Fluss geteilt in Grossbasel am linken Ufer, mit Altstadt und Münster, und Kleinbasel am rechten Ufer. Die Mittlere Brücke, 1905 fertiggestellt mit einer Vorgängerin von etwa 1220, trägt den Verkehr über den Fluss, während vier historische Fähren, seilgeführt und allein von der Strömung angetrieben, in der Nähe zu Fuss übersetzen. Eine schmale Treppe von rund 250 Stufen führt auf jeden der beiden Münstertürme, Georgsturm und Martinsturm, hinauf, mit Blick über die Stadt.',
  },
  quickAnswer: {
    en: 'Stay in Basel for a Rhine you cross on foot by four historic cable ferries, and a free BaselCard covering public transport for your whole stay. For an old town built around a lake and cruise boats instead of a river, stay in Lucerne.',
    fr: 'Dormez à Bâle pour un Rhin que l’on traverse à pied sur quatre bacs historiques guidés par câble, et une BaselCard gratuite couvrant les transports publics pour tout votre séjour. Pour une vieille ville construite autour d’un lac et de bateaux de croisière plutôt que d’un fleuve, dormez à Lucerne.',
    de: 'Übernachten Sie in Basel für einen Rhein, den man zu Fuss auf vier historischen, seilgeführten Fähren überquert, und eine kostenlose BaselCard, die den öffentlichen Verkehr für Ihren ganzen Aufenthalt abdeckt. Für eine Altstadt rund um einen See mit Kursschiffen statt einen Fluss übernachten Sie in Luzern.',
  },
  snapshot: {
    why: {
      en: 'The BaselCard comes free with every hotel, hostel, B&B or apartment booking and covers public transport for the whole stay, including the transfer from the airport or station, plus 25% off museums, the zoo and more.',
      fr: 'La BaselCard est offerte avec toute réservation d’hôtel, d’auberge, de chambre d’hôtes ou d’appartement, et couvre les transports publics pour tout le séjour, transfert depuis l’aéroport ou la gare inclus, avec 25% de réduction sur les musées, le zoo et plus encore.',
      de: 'Die BaselCard ist bei jeder Buchung eines Hotels, Hostels, B&B oder einer Wohnung inbegriffen und deckt den öffentlichen Verkehr für den ganzen Aufenthalt ab, inklusive Transfer vom Flughafen oder Bahnhof, mit 25% Rabatt auf Museen, den Zoo und mehr.',
    },
    where: {
      en: 'On the Rhine in Grossbasel’s old town for the Münster and the arcaded streets, across the river in Kleinbasel for the Messe Basel and a Herzog & de Meuron design hotel, or in the St. Alban quarter, Basel’s Little Venice, close to Kunstmuseum Basel | Gegenwart.',
      fr: 'Sur le Rhin, dans la vieille ville de Grossbasel, pour le Münster et les rues à arcades, de l’autre côté du fleuve à Kleinbasel pour la Messe Basel et un hôtel design signé Herzog & de Meuron, ou dans le quartier de St. Alban, la « petite Venise » de Bâle, près du Kunstmuseum Basel | Gegenwart.',
      de: 'Am Rhein, in der Altstadt von Grossbasel, für das Münster und die Lauben, auf der anderen Flussseite in Kleinbasel für die Messe Basel und ein von Herzog & de Meuron gestaltetes Designhotel, oder im Quartier St. Alban, Basels „Klein-Venedig“, nahe dem Kunstmuseum Basel | Gegenwart.',
    },
    watch: {
      en: 'The Rhine ferries do not accept TNW or SBB tickets, nor the BaselCard: a crossing is paid on board, CHF 2 for adults, and the service is suspended entirely above 7.90 m water level.',
      fr: 'Les bacs du Rhin n’acceptent ni les billets TNW ou CFF, ni la BaselCard : la traversée se paie à bord, 2 CHF pour un adulte, et le service est totalement suspendu au-delà de 7,90 m de niveau d’eau.',
      de: 'Die Rheinfähren akzeptieren weder TNW- noch SBB-Billette, noch die BaselCard: Die Überfahrt wird an Bord bezahlt, CHF 2 für Erwachsene, und der Betrieb wird oberhalb von 7,90 m Wasserstand ganz eingestellt.',
    },
  },
  stats: [
    { value: '250', label: { en: 'steps up each Münster tower, the Georgsturm or the Martinsturm', fr: 'marches pour grimper dans chaque tour du Münster, Georgsturm ou Martinsturm', de: 'Stufen auf jeden Münsterturm, Georgsturm oder Martinsturm' } },
    { value: '4', label: { en: 'historic Rhine ferries, cable-guided and powered only by the current', fr: 'bacs historiques sur le Rhin, guidés par câble et mus par le seul courant', de: 'historische Rheinfähren, seilgeführt und allein von der Strömung angetrieben' } },
    { value: '1905', label: { en: 'the year the Mittlere Brücke, crossing the Rhine, was completed', fr: 'l’année d’achèvement du Mittlere Brücke, qui traverse le Rhin', de: 'das Jahr der Fertigstellung der Mittleren Brücke über den Rhein' } },
  ],
  hero: {
    photo: '/photos/basel.jpg',
    caption: { en: 'Basel Münster above the Rhine, seen from the Pfalz terrace.', fr: 'Le Münster de Bâle au-dessus du Rhin, vu depuis la terrasse de la Pfalz.', de: 'Das Basler Münster über dem Rhein, von der Pfalz-Terrasse aus gesehen.' },
    credit: { author: 'Taxiarchos228 (Wladyslaw Sojka)', license: 'Free Art License', licenseUrl: 'http://artlibre.org/licence/lal/en/', source: 'https://commons.wikimedia.org/wiki/File:Basel_-_M%C3%BCnsterpfalz1.jpg' },
  },
  sectors: [
    {
      title: { en: 'Grossbasel, the old town on the Rhine', fr: 'Grossbasel, la vieille ville sur le Rhin', de: 'Grossbasel, die Altstadt am Rhein' },
      walk: { en: 'Blumenrain and the old town streets', fr: 'Blumenrain et les rues de la vieille ville', de: 'Blumenrain und die Altstadtgassen' },
      text: {
        en: 'The left bank’s medieval core, around the Münster. Grand Hotel Les Trois Rois stands at Blumenrain 8, perched right on the Rhine; Der Teufelhof Basel occupies two combined 18th-century town houses in the old town, with its own theatre and two restaurants.',
        fr: 'Le coeur médiéval de la rive gauche, autour du Münster. Le Grand Hotel Les Trois Rois se dresse au Blumenrain 8, perché directement sur le Rhin ; le Der Teufelhof Basel occupe deux maisons de ville du XVIIIe siècle réunies, en vieille ville, avec son propre théâtre et deux restaurants.',
        de: 'Der mittelalterliche Kern des linken Ufers, rund um das Münster. Das Grand Hotel Les Trois Rois steht am Blumenrain 8, direkt am Rhein gelegen; der Teufelhof Basel belegt zwei zusammengelegte Stadthäuser aus dem 18. Jahrhundert in der Altstadt, mit eigenem Theater und zwei Restaurants.',
      },
      points: [
        { en: 'Les Trois Rois sits at Blumenrain 8, right on the Rhine in the heart of the Old Town', fr: 'Les Trois Rois se trouve au Blumenrain 8, directement sur le Rhin, au coeur de la vieille ville', de: 'Les Trois Rois liegt am Blumenrain 8, direkt am Rhein, mitten in der Altstadt' },
        { en: 'Der Teufelhof combines two 18th-century town houses with its own in-house theatre', fr: 'Der Teufelhof réunit deux maisons du XVIIIe siècle avec son propre théâtre', de: 'Der Teufelhof vereint zwei Stadthäuser aus dem 18. Jahrhundert mit eigenem Theater' },
      ],
    },
    {
      title: { en: 'Kleinbasel, the Rhine’s right bank', fr: 'Kleinbasel, la rive droite du Rhin', de: 'Kleinbasel, das rechte Rheinufer' },
      walk: { en: 'Rheingasse and the Rhine promenade', fr: 'Rheingasse et la promenade du Rhin', de: 'Rheingasse und die Rheinpromenade' },
      text: {
        en: 'Hotel Krafft, at Rheingasse 12, sits directly on the Rhine promenade in the lively Rheingasse, hosting guests since 1873. Volkshaus Basel, designed by Herzog & de Meuron, is a few minutes’ walk from the Rhine and the Messe Basel exhibition grounds.',
        fr: 'L’Hôtel Krafft, au Rheingasse 12, se trouve directement sur la promenade du Rhin, dans la vivante Rheingasse, où l’on accueille des hôtes depuis 1873. Le Volkshaus Basel, conçu par Herzog & de Meuron, se trouve à quelques minutes à pied du Rhin et du parc des expositions de la Messe Basel.',
        de: 'Das Hotel Krafft am Rheingasse 12 liegt direkt an der Rheinpromenade, in der lebendigen Rheingasse, und beherbergt seit 1873 Gäste. Das von Herzog & de Meuron entworfene Volkshaus Basel liegt wenige Gehminuten vom Rhein und dem Messegelände der Messe Basel entfernt.',
      },
      points: [
        { en: 'Hotel Krafft has hosted guests on the Rhine promenade since 1873', fr: 'L’Hôtel Krafft accueille des hôtes sur la promenade du Rhin depuis 1873', de: 'Das Hotel Krafft beherbergt seit 1873 Gäste an der Rheinpromenade' },
        { en: 'Volkshaus Basel is a few minutes’ walk from the Rhine and the Messe Basel exhibition grounds', fr: 'Le Volkshaus Basel se trouve à quelques minutes à pied du Rhin et du parc des expositions de la Messe Basel', de: 'Das Volkshaus Basel liegt wenige Gehminuten vom Rhein und dem Messegelände der Messe Basel entfernt' },
      ],
    },
    {
      title: { en: 'St. Alban, Basel’s Little Venice', fr: 'St. Alban, la « petite Venise » de Bâle', de: 'St. Alban, Basels „Klein-Venedig“' },
      walk: { en: 'Maja Sacher-Platz, along the St. Alban-Rhein', fr: 'Maja Sacher-Platz, le long du St. Alban-Rhein', de: 'Maja Sacher-Platz, entlang des St. Alban-Rheins' },
      text: {
        en: 'Basel Youth Hostel, at Maja Sacher-Platz 10, sits in the St. Alban quarter, 2 minutes’ walk from Kunstmuseum Basel | Gegenwart and 2 minutes from the St. Alban-Rhine ferry. The district itself is described by the tourist office as narrow alleys past ancient houses and mills, never far from the water.',
        fr: 'L’auberge de jeunesse de Bâle, au Maja Sacher-Platz 10, se trouve dans le quartier de St. Alban, à 2 minutes à pied du Kunstmuseum Basel | Gegenwart et 2 minutes du bac du St. Alban-Rhein. Le quartier lui-même est décrit par l’office du tourisme comme des ruelles étroites longeant d’anciennes maisons et des moulins, jamais loin de l’eau.',
        de: 'Die Basler Jugendherberge am Maja Sacher-Platz 10 liegt im Quartier St. Alban, 2 Gehminuten vom Kunstmuseum Basel | Gegenwart und 2 Minuten von der St. Alban-Rhein-Fähre entfernt. Das Quartier selbst wird vom Tourismusbüro als enge Gassen an alten Häusern und Mühlen vorbei beschrieben, nie weit vom Wasser.',
      },
      points: [
        { en: '2 minutes’ walk from Kunstmuseum Basel | Gegenwart', fr: 'À 2 minutes à pied du Kunstmuseum Basel | Gegenwart', de: '2 Gehminuten vom Kunstmuseum Basel | Gegenwart entfernt' },
        { en: '2 minutes’ walk from the St. Alban-Rhine ferry crossing', fr: 'À 2 minutes à pied du bac du St. Alban-Rhein', de: '2 Gehminuten von der St. Alban-Rhein-Fähre entfernt' },
      ],
    },
  ],
  hotels: [
    {
      slug: 'bs-trois-rois',
      name: 'Grand Hotel Les Trois Rois',
      url: 'https://lestroisrois.com',
      sector: { en: 'Blumenrain, old town on the Rhine', fr: 'Blumenrain, vieille ville sur le Rhin', de: 'Blumenrain, Altstadt am Rhein' },
      facts: [
        { en: 'First documented as the inn "Drei Könige" in 1681, with three carved king figures added to the facade in 1754', fr: 'D’abord mentionné comme auberge « Drei Könige » en 1681, avec trois statues de rois sculptées ajoutées à la façade en 1754', de: 'Erstmals 1681 als Gasthaus „Drei Könige“ erwähnt, mit drei geschnitzten Königsfiguren, die 1754 an der Fassade angebracht wurden' },
        { en: 'Restaurant Cheval Blanc by Peter Knogl holds 3 Michelin stars, and the hotel itself holds 3 Keys in the Michelin Guide', fr: 'Le restaurant Cheval Blanc de Peter Knogl détient 3 étoiles Michelin, et l’hôtel lui-même 3 Clés au Guide Michelin', de: 'Das Restaurant Cheval Blanc von Peter Knogl trägt 3 Michelin-Sterne, das Hotel selbst 3 Schlüssel im Guide Michelin' },
      ],
    },
    {
      slug: 'bs-krafft',
      name: 'Hotel Krafft',
      url: 'https://krafftbasel.ch',
      sector: { en: 'Rheingasse, Kleinbasel', fr: 'Rheingasse, Kleinbasel', de: 'Rheingasse, Kleinbasel' },
      facts: [
        { en: 'Rheingasse 12, directly on the Rhine promenade, hosting guests since 1873', fr: 'Rheingasse 12, directement sur la promenade du Rhin, accueillant des hôtes depuis 1873', de: 'Rheingasse 12, direkt an der Rheinpromenade, seit 1873 Gäste beherbergend' },
        { en: 'A 4-star boutique hotel across five floors, part of the Krafft Gruppe', fr: 'Un hôtel boutique 4 étoiles sur cinq étages, membre du Krafft Gruppe', de: 'Ein 4-Sterne-Boutiquehotel über fünf Stockwerke, Teil der Krafft Gruppe' },
      ],
    },
    {
      slug: 'bs-teufelhof',
      name: 'Der Teufelhof Basel',
      url: 'https://teufelhof.com',
      sector: { en: 'Old town, Grossbasel', fr: 'Vieille ville, Grossbasel', de: 'Altstadt, Grossbasel' },
      facts: [
        { en: 'Two combined 18th-century town houses in the old town', fr: 'Deux maisons de ville du XVIIIe siècle réunies, en vieille ville', de: 'Zwei zusammengelegte Stadthäuser aus dem 18. Jahrhundert in der Altstadt' },
        { en: 'Its own in-house theatre plus two restaurants, Atelier and Bel Etage', fr: 'Son propre théâtre, ainsi que deux restaurants, Atelier et Bel Etage', de: 'Eigenes Theater im Haus sowie zwei Restaurants, Atelier und Bel Etage' },
      ],
    },
    {
      slug: 'bs-volkshaus',
      name: 'Volkshaus Basel',
      url: 'https://volkshaus-basel.ch',
      sector: { en: 'Kleinbasel', fr: 'Kleinbasel', de: 'Kleinbasel' },
      facts: [
        { en: 'A 4-star boutique and design hotel designed by Herzog & de Meuron', fr: 'Un hôtel boutique et design 4 étoiles conçu par Herzog & de Meuron', de: 'Ein 4-Sterne-Boutique- und Designhotel, entworfen von Herzog & de Meuron' },
        { en: 'A few minutes’ walk from the Rhine and the Messe Basel exhibition grounds, with a Brasserie, IMI Bar and a tree-covered inner courtyard', fr: 'À quelques minutes à pied du Rhin et du parc des expositions de la Messe Basel, avec une Brasserie, l’IMI Bar et une cour intérieure arborée', de: 'Wenige Gehminuten vom Rhein und dem Messegelände der Messe Basel entfernt, mit Brasserie, IMI Bar und einem begrünten Innenhof' },
      ],
    },
    {
      slug: 'bs-youth-hostel',
      name: 'Basel Youth Hostel',
      url: 'https://www.youthhostel.ch/en/hostels/basel',
      sector: { en: 'St. Alban quarter', fr: 'Quartier de St. Alban', de: 'Quartier St. Alban' },
      facts: [
        { en: 'Maja Sacher-Platz 10, 66 rooms and 234 beds, 4 to 6 bed dorms plus family and double rooms', fr: 'Maja Sacher-Platz 10, 66 chambres et 234 lits, dortoirs de 4 à 6 lits ainsi que chambres familiales et doubles', de: 'Maja Sacher-Platz 10, 66 Zimmer und 234 Betten, 4- bis 6-Bett-Zimmer sowie Familien- und Doppelzimmer' },
        { en: '2 minutes’ walk to Kunstmuseum Basel | Gegenwart and 2 minutes to the St. Alban-Rhine ferry, BaselCard included', fr: 'À 2 minutes à pied du Kunstmuseum Basel | Gegenwart et 2 minutes du bac du St. Alban-Rhein, BaselCard incluse', de: '2 Gehminuten zum Kunstmuseum Basel | Gegenwart und 2 Minuten zur St. Alban-Rhein-Fähre, BaselCard inbegriffen' },
      ],
    },
  ],
  hotelsNote: {
    en: 'Facts taken from each hotel’s own website on 16 September 2026. No ratings or reviews on this guide.',
    fr: 'Faits relevés sur le site de chaque hôtel le 16 septembre 2026. Aucune note ni aucun avis sur ce guide.',
    de: 'Fakten von der Website des jeweiligen Hotels, Stand 16. September 2026. Keine Bewertungen oder Rezensionen.',
  },
  practical: {
    title: { en: 'Card, ferries, river', fr: 'Carte, bacs, fleuve', de: 'Karte, Fähren, Fluss' },
    items: [
      {
        title: { en: 'The BaselCard', fr: 'La BaselCard', de: 'Die BaselCard' },
        text: {
          en: 'Free with every booking at a Basel hotel, hostel, B&B or apartment: a personal card given at check-in covers public transport for the length of the stay, up to 30 days, including the transfer from the airport or station, in TNW zones 10, 11, 13/EuroAirport, 14 and 15. It also gives 25% off museums, Basel Zoo, Theater Basel’s evening box office, the sightseeing bus, the public Old Town walking tour, the Jakob’s Leckerli workshop tour, Basler Personenschifffahrt day boat trips, the Reigoldswil-Wasserfallen cable car and Nordstern, plus a CHF 25 a day e-bike rental at the SBB station.',
          fr: 'Offerte avec toute réservation d’hôtel, d’auberge, de chambre d’hôtes ou d’appartement à Bâle : une carte personnelle remise à l’arrivée couvre les transports publics pour toute la durée du séjour, jusqu’à 30 jours, transfert depuis l’aéroport ou la gare inclus, dans les zones TNW 10, 11, 13/EuroAirport, 14 et 15. Elle donne aussi 25% de réduction sur les musées, le zoo de Bâle, la billetterie du soir du Theater Basel, le bus touristique, la visite guidée publique de la vieille ville, l’atelier Jakob’s Leckerli, les croisières journalières de la Basler Personenschifffahrt, le téléphérique Reigoldswil-Wasserfallen et le Nordstern, ainsi qu’une location de vélo électrique à 25 CHF par jour à la gare CFF.',
          de: 'Kostenlos bei jeder Buchung eines Basler Hotels, Hostels, B&B oder einer Ferienwohnung: Eine persönliche Karte beim Check-in deckt den öffentlichen Verkehr für die gesamte Aufenthaltsdauer ab, bis zu 30 Tage, inklusive Transfer vom Flughafen oder Bahnhof, in den TNW-Zonen 10, 11, 13/EuroAirport, 14 und 15. Sie gibt zudem 25% Rabatt auf Museen, den Zoo Basel, die Abendkasse des Theater Basel, den Stadtrundfahrtbus, die öffentliche Altstadtführung, die Jakob’s-Leckerli-Werkstattführung, Tagesfahrten der Basler Personenschifffahrt, die Seilbahn Reigoldswil-Wasserfallen und das Nordstern, sowie ein E-Bike für CHF 25 pro Tag am SBB-Bahnhof.',
        },
      },
      {
        title: { en: 'The Rhine ferries', fr: 'Les bacs du Rhin', de: 'Die Rheinfähren' },
        text: {
          en: 'Four historic passenger ferries, cable-guided and powered only by the current: Wild Maa in St. Alban, Leu at the Münster, Vogel Gryff in Klingental and Ueli in St. Johann. On the Leu, a crossing costs CHF 2 for adults and CHF 1 for children, dogs or bikes; TNW and SBB tickets, and the BaselCard, are not valid on board.',
          fr: 'Quatre bacs historiques, guidés par câble et mus par le seul courant : le Wild Maa à St. Alban, le Leu au Münster, le Vogel Gryff à Klingental et l’Ueli à St. Johann. Sur le Leu, la traversée coûte 2 CHF pour un adulte et 1 CHF pour un enfant, un chien ou un vélo ; les billets TNW et CFF, ainsi que la BaselCard, n’y sont pas valables.',
          de: 'Vier historische Fähren, seilgeführt und allein von der Strömung angetrieben: der Wild Maa in St. Alban, der Leu beim Münster, der Vogel Gryff im Klingental und der Ueli in St. Johann. Beim Leu kostet die Überfahrt CHF 2 für Erwachsene und CHF 1 für Kinder, Hunde oder Velos; TNW- und SBB-Billette sowie die BaselCard sind an Bord nicht gültig.',
        },
      },
      {
        title: { en: 'Crossing the Rhine', fr: 'Traverser le Rhin', de: 'Den Rhein überqueren' },
        text: {
          en: 'The river splits the city into Grossbasel on the left bank and Kleinbasel on the right. The Mittlere Brücke, completed in 1905 with a predecessor dating to around 1220, carries road traffic across; on foot, the four cable ferries offer a shorter, older route.',
          fr: 'Le fleuve coupe la ville en deux : Grossbasel sur la rive gauche et Kleinbasel sur la rive droite. Le Mittlere Brücke, achevé en 1905 avec un prédécesseur datant d’environ 1220, porte la circulation routière d’une rive à l’autre ; à pied, les quatre bacs offrent un trajet plus court et plus ancien.',
          de: 'Der Fluss teilt die Stadt in Grossbasel am linken und Kleinbasel am rechten Ufer. Die Mittlere Brücke, 1905 fertiggestellt mit einer Vorgängerin von etwa 1220, trägt den Strassenverkehr über den Fluss; zu Fuss bieten die vier Fähren einen kürzeren, älteren Weg.',
        },
      },
      {
        title: { en: 'Parking', fr: 'Stationnement', de: 'Parkplatz' },
        text: {
          en: 'Unlike several of the car-free villages on this site, Basel allows cars. The sources checked for this guide describe no dedicated visitor parking scheme, so arrange parking directly with your hotel.',
          fr: 'Contrairement à plusieurs villages sans voiture présentés sur ce site, Bâle autorise les véhicules. Les sources consultées pour ce guide ne décrivent aucun dispositif de stationnement dédié aux visiteurs, à voir directement avec votre hôtel.',
          de: 'Anders als mehrere autofreie Dörfer auf dieser Seite lässt Basel Autos zu. Die für diesen Ratgeber geprüften Quellen beschreiben kein eigenes Parkangebot für Gäste, das direkt mit dem Hotel zu klären ist.',
        },
      },
    ],
  },
  seasons: {
    summer: {
      title: { en: 'Summer in Basel', fr: 'L’été à Bâle', de: 'Sommer in Basel' },
      base: {
        en: 'The Rhine ferries run their longest hours of the year, and the Münster stays open latest, both extending further still during the Basler Herbstmesse.',
        fr: 'Les bacs du Rhin fonctionnent selon leurs horaires les plus longs de l’année, et le Münster reste ouvert le plus tard, les deux s’étendant encore davantage pendant la Basler Herbstmesse.',
        de: 'Die Rheinfähren verkehren mit den längsten Zeiten des Jahres, und das Münster bleibt am längsten offen, beide noch länger während der Basler Herbstmesse.',
      },
      facts: [
        { value: '09:00-20:00', label: { en: 'Rhine ferries run daily (summer timetable, extended to 22:00 during the Basler Herbstmesse)', fr: 'les bacs du Rhin circulent tous les jours (horaire d’été, prolongé jusqu’à 22h00 pendant la Basler Herbstmesse)', de: 'Rheinfähren verkehren täglich (Sommerfahrplan, während der Basler Herbstmesse bis 22.00 Uhr verlängert)' } },
        { value: '10:00-17:00', label: { en: 'Basel Münster open Monday to Friday (summer hours)', fr: 'Münster de Bâle ouvert du lundi au vendredi (horaires d’été)', de: 'Basler Münster Montag bis Freitag geöffnet (Sommerzeiten)' } },
      ],
      note: {
        en: 'Sources: baslermuenster.ch, leu-faehri.ch, checked 16 September 2026.',
        fr: 'Sources : baslermuenster.ch, leu-faehri.ch, vérifiées le 16 septembre 2026.',
        de: 'Quellen: baslermuenster.ch, leu-faehri.ch, geprüft am 16. September 2026.',
      },
    },
    winter: {
      title: { en: 'Winter in Basel', fr: 'L’hiver à Bâle', de: 'Winter in Basel' },
      base: {
        en: 'The Rhine ferries switch to shorter winter hours, and Basel Museums Night opens over 40 museums and cultural sites on a single ticket in January.',
        fr: 'Les bacs du Rhin passent à des horaires d’hiver plus courts, et la Basel Museums Night ouvre plus de 40 musées et lieux culturels sur un seul billet en janvier.',
        de: 'Die Rheinfähren wechseln auf kürzere Winterzeiten, und die Basel Museums Night öffnet im Januar über 40 Museen und Kulturstätten mit einem einzigen Ticket.',
      },
      facts: [
        { value: '22 Jan 2027', label: { en: 'Basel Museums Night, single ticket for over 40 museums and cultural sites, 26th edition', fr: 'Basel Museums Night, billet unique pour plus de 40 musées et lieux culturels, 26e édition', de: 'Basel Museums Night, ein Ticket für über 40 Museen und Kulturstätten, 26. Austragung' } },
        { value: '11:00-17:00', label: { en: 'Rhine ferries run daily (winter timetable, suspended above 7.90 m water level)', fr: 'les bacs du Rhin circulent tous les jours (horaire d’hiver, suspendu au-delà de 7,90 m de niveau d’eau)', de: 'Rheinfähren verkehren täglich (Winterfahrplan, oberhalb von 7,90 m Wasserstand eingestellt)' } },
      ],
      note: {
        en: 'Sources: leu-faehri.ch, youthhostel.ch, checked 16 September 2026.',
        fr: 'Sources : leu-faehri.ch, youthhostel.ch, vérifiées le 16 septembre 2026.',
        de: 'Quellen: leu-faehri.ch, youthhostel.ch, geprüft am 16. September 2026.',
      },
    },
  },
  doing: {
    title: { en: 'What to do in Basel', fr: 'Que faire à Bâle', de: 'Was man in Basel unternimmt' },
    intro: {
      en: 'Not a trail guide: named places from Basel Tourismus, Basel Münster, Kunstmuseum Basel and the Fähri-Verein, checked on their own pages.',
      fr: 'Pas un guide de randonnée : des lieux nommés, repris de Basel Tourismus, du Münster de Bâle, du Kunstmuseum Basel et du Fähri-Verein, vérifiés sur leurs propres pages.',
      de: 'Kein Wanderführer: benannte Orte von Basel Tourismus, dem Basler Münster, dem Kunstmuseum Basel und dem Fähri-Verein, dort geprüft.',
    },
    groups: [
      {
        kind: 'walk',
        title: { en: 'Two ways into the Old Town', fr: 'Deux façons de découvrir la vieille ville', de: 'Zwei Wege in die Altstadt' },
        items: [
          {
            name: { en: 'Signed Old Town audio walking tour', fr: 'Circuit audio-guidé de la vieille ville', de: 'Signalisierter Altstadt-Audiorundgang' },
            meta: { en: 'self-guided · 60 to 120 minutes', fr: 'en autonomie · 60 à 120 minutes', de: 'auf eigene Faust · 60 bis 120 Minuten' },
            text: {
              en: 'A self-guided route past the main sights of the Old Town, with an audio guide, taking 60 to 120 minutes.',
              fr: 'Un parcours en autonomie devant les principaux sites de la vieille ville, avec un guide audio, d’une durée de 60 à 120 minutes.',
              de: 'Eine selbstgeführte Route an den wichtigsten Sehenswürdigkeiten der Altstadt vorbei, mit Audioguide, 60 bis 120 Minuten lang.',
            },
          },
          {
            name: { en: '"Stories of Basel’s Old Town" guided tour', fr: 'Visite guidée « Stories of Basel’s Old Town »', de: 'Führung „Stories of Basel’s Old Town“' },
            meta: { en: 'from CHF 25 · 25% off with the BaselCard', fr: 'dès 25 CHF · 25% de réduction avec la BaselCard', de: 'ab CHF 25 · 25% Rabatt mit der BaselCard' },
            text: {
              en: 'A guided walk covering the Münster, the Barfüsserkirche and the Town Hall.',
              fr: 'Une visite guidée couvrant le Münster, la Barfüsserkirche et l’Hôtel de Ville.',
              de: 'Eine Führung zu Münster, Barfüsserkirche und Rathaus.',
            },
          },
        ],
      },
      {
        kind: 'local',
        title: { en: 'A tower climb and four ferries', fr: 'Une tour à gravir et quatre bacs', de: 'Ein Turmaufstieg und vier Fähren' },
        items: [
          {
            name: { en: 'Basel Münster towers', fr: 'Les tours du Münster de Bâle', de: 'Die Türme des Basler Münsters' },
            meta: { en: 'about 250 steps · CHF 6 adult, CHF 4 reduced, free under 14', fr: 'environ 250 marches · 6 CHF adulte, 4 CHF réduit, gratuit moins de 14 ans', de: 'rund 250 Stufen · CHF 6 Erwachsene, CHF 4 reduziert, gratis unter 14' },
            text: {
              en: 'A narrow stair of about 250 steps climbs the Georgsturm or the Martinsturm; last entry is 30 minutes before the Münster closes, with no entry 12:00-12:20 during midday prayers.',
              fr: 'Un escalier étroit d’environ 250 marches grimpe dans le Georgsturm ou le Martinsturm ; la dernière entrée a lieu 30 minutes avant la fermeture du Münster, sans accès de 12h00 à 12h20 pendant la prière de midi.',
              de: 'Eine schmale Treppe von rund 250 Stufen führt auf den Georgsturm oder den Martinsturm; letzter Einlass 30 Minuten vor Münsterschluss, kein Einlass von 12.00 bis 12.20 Uhr während des Mittagsgebets.',
            },
          },
          {
            name: { en: 'The four Basel ferries', fr: 'Les quatre bacs de Bâle', de: 'Die vier Basler Fähren' },
            meta: { en: 'Wild Maa, Leu, Vogel Gryff, Ueli', fr: 'Wild Maa, Leu, Vogel Gryff, Ueli', de: 'Wild Maa, Leu, Vogel Gryff, Ueli' },
            text: {
              en: 'Cable-guided, current-powered crossings with no motor, one per historic crossing point; the Leu charges CHF 2 per adult crossing, with TNW and SBB tickets, and the BaselCard, not accepted on board.',
              fr: 'Des traversées guidées par câble, mues par le seul courant, sans moteur, une par point de passage historique ; le Leu facture 2 CHF par traversée pour un adulte, les billets TNW et CFF ainsi que la BaselCard n’étant pas acceptés à bord.',
              de: 'Seilgeführte, allein von der Strömung angetriebene Überfahrten ohne Motor, eine pro historischer Übergangsstelle; der Leu verlangt CHF 2 pro Überfahrt für Erwachsene, TNW- und SBB-Billette sowie die BaselCard werden an Bord nicht akzeptiert.',
            },
          },
        ],
      },
      {
        kind: 'local',
        title: { en: 'What is typical of the place', fr: 'Ce qui est typique de la ville', de: 'Was für die Stadt typisch ist' },
        items: [
          {
            name: 'Kunstmuseum Basel',
            meta: { en: 'St. Alban-Graben 8 · adults CHF 25 to CHF 30', fr: 'St. Alban-Graben 8 · adultes 25 à 30 CHF', de: 'St. Alban-Graben 8 · Erwachsene CHF 25 bis 30' },
            text: {
              en: 'Adults over 20 pay CHF 30 for a special exhibition and the collection together, or CHF 25 for the collection and exhibitions only; the collection is free Tuesday, Thursday and Friday 17:00-18:00, Wednesday 17:00-20:00, and every first Sunday of the month.',
              fr: 'Les adultes de plus de 20 ans paient 30 CHF pour une exposition temporaire et la collection ensemble, ou 25 CHF pour la collection et les expositions seules ; la collection est gratuite le mardi, jeudi et vendredi de 17h00 à 18h00, le mercredi de 17h00 à 20h00, et chaque premier dimanche du mois.',
              de: 'Erwachsene über 20 zahlen CHF 30 für Sonderausstellung und Sammlung zusammen, oder CHF 25 für Sammlung und Ausstellungen allein; die Sammlung ist gratis am Dienstag, Donnerstag und Freitag 17.00 bis 18.00 Uhr, am Mittwoch 17.00 bis 20.00 Uhr, und jeden ersten Sonntag im Monat.',
            },
          },
          {
            name: { en: 'The Old Town’s fountains and gates', fr: 'Les fontaines et portes de la vieille ville', de: 'Brunnen und Tore der Altstadt' },
            meta: { en: 'over 200 fountains · Spalentor, one of eight original gates', fr: 'plus de 200 fontaines · Spalentor, une des huit portes d’origine', de: 'über 200 Brunnen · Spalentor, eines von acht ursprünglichen Toren' },
            text: {
              en: 'The Old Town holds over 200 fountains, the Pfalz terrace behind the Münster, and the Spalentor, one of the original eight city gates.',
              fr: 'La vieille ville compte plus de 200 fontaines, la terrasse de la Pfalz derrière le Münster, et le Spalentor, l’une des huit portes d’origine de la ville.',
              de: 'Die Altstadt zählt über 200 Brunnen, die Pfalz-Terrasse hinter dem Münster, und das Spalentor, eines der ursprünglich acht Stadttore.',
            },
          },
        ],
      },
      {
        kind: 'table',
        title: { en: 'Where to eat', fr: 'Où manger', de: 'Wo essen' },
        items: [
          {
            name: { en: 'Restaurant and Brasserie at Hotel Krafft', fr: 'Restaurant et Brasserie de l’Hôtel Krafft', de: 'Restaurant und Brasserie im Hotel Krafft' },
            meta: { en: 'Rheingasse 12, on the Rhine promenade', fr: 'Rheingasse 12, sur la promenade du Rhin', de: 'Rheingasse 12, an der Rheinpromenade' },
            text: {
              en: 'The hotel’s own restaurant on the Rhine promenade, hosting guests since 1873.',
              fr: 'Le restaurant de l’hôtel lui-même, sur la promenade du Rhin, accueillant des hôtes depuis 1873.',
              de: 'Das hoteleigene Restaurant an der Rheinpromenade, seit 1873 mit Gästen.',
            },
          },
          {
            name: { en: 'Brasserie and IMI Bar at Volkshaus Basel', fr: 'Brasserie et IMI Bar du Volkshaus Basel', de: 'Brasserie und IMI Bar im Volkshaus Basel' },
            meta: { en: 'Kleinbasel', fr: 'Kleinbasel', de: 'Kleinbasel' },
            text: {
              en: 'Built around a tree-covered inner courtyard, at the Herzog & de Meuron-designed Volkshaus Basel.',
              fr: 'Construits autour d’une cour intérieure arborée, au Volkshaus Basel conçu par Herzog & de Meuron.',
              de: 'Rund um einen begrünten Innenhof angelegt, im von Herzog & de Meuron entworfenen Volkshaus Basel.',
            },
          },
        ],
      },
    ],
    note: {
      en: 'Times, prices and figures come from Basel Tourismus, Basel Münster, Kunstmuseum Basel and the Fähri-Verein, checked on 16 September 2026. We publish no ratings and no route descriptions: check conditions on the spot before you set off.',
      fr: 'Horaires, tarifs et chiffres proviennent de Basel Tourismus, du Münster de Bâle, du Kunstmuseum Basel et du Fähri-Verein, vérifiés le 16 septembre 2026. Nous ne publions ni notes ni descriptifs d’itinéraires : renseignez-vous sur place avant de partir.',
      de: 'Zeiten, Preise und Zahlen stammen von Basel Tourismus, dem Basler Münster, dem Kunstmuseum Basel und dem Fähri-Verein, geprüft am 16. September 2026. Wir veröffentlichen keine Bewertungen und keine Routenbeschreibungen: Erkundigen Sie sich vor Ort, bevor Sie losgehen.',
    },
  },
  faq: [
    {
      q: { en: 'What does the BaselCard actually cover?', fr: 'Que couvre exactement la BaselCard ?', de: 'Was deckt die BaselCard eigentlich ab?' },
      a: {
        en: 'Free public transport for your whole stay, up to 30 days, including the transfer from the airport or station, plus 25% off museums, the zoo, boat trips, the Old Town walking tour and more. It comes free with any Basel hotel, hostel or B&B booking.',
        fr: 'Les transports publics gratuits pour tout votre séjour, jusqu’à 30 jours, transfert depuis l’aéroport ou la gare inclus, ainsi que 25% de réduction sur les musées, le zoo, les croisières, la visite guidée de la vieille ville et plus encore. Elle est offerte avec toute réservation d’hôtel, d’auberge ou de chambre d’hôtes à Bâle.',
        de: 'Kostenloser öffentlicher Verkehr für Ihren ganzen Aufenthalt, bis zu 30 Tage, inklusive Transfer vom Flughafen oder Bahnhof, sowie 25% Rabatt auf Museen, den Zoo, Bootsfahrten, die Altstadtführung und mehr. Sie ist bei jeder Buchung eines Basler Hotels, Hostels oder B&B inbegriffen.',
      },
    },
    {
      q: { en: 'Can I use the BaselCard on the Rhine ferries?', fr: 'Peut-on utiliser la BaselCard sur les bacs du Rhin ?', de: 'Kann man die BaselCard auf den Rheinfähren nutzen?' },
      a: {
        en: 'No, the ferries explicitly do not accept TNW or SBB tickets, or the BaselCard: a crossing costs CHF 2 for adults, paid on board.',
        fr: 'Non, les bacs n’acceptent explicitement ni les billets TNW ou CFF, ni la BaselCard : la traversée coûte 2 CHF pour un adulte, payable à bord.',
        de: 'Nein, die Fähren akzeptieren ausdrücklich weder TNW- noch SBB-Billette, noch die BaselCard: Die Überfahrt kostet CHF 2 für Erwachsene, zu bezahlen an Bord.',
      },
    },
    {
      q: { en: 'Is the Münster free to visit?', fr: 'L’entrée au Münster est-elle gratuite ?', de: 'Ist der Eintritt ins Münster kostenlos?' },
      a: {
        en: 'Yes, within its opening hours. Climbing the towers, about 250 steps, costs CHF 6 for adults, CHF 4 reduced, and is free under 14.',
        fr: 'Oui, pendant ses heures d’ouverture. Grimper dans les tours, environ 250 marches, coûte 6 CHF pour un adulte, 4 CHF en tarif réduit, et est gratuit pour les moins de 14 ans.',
        de: 'Ja, innerhalb der Öffnungszeiten. Der Turmaufstieg, rund 250 Stufen, kostet CHF 6 für Erwachsene, CHF 4 reduziert, und ist gratis für Kinder unter 14.',
      },
    },
    {
      q: { en: 'When is Kunstmuseum Basel’s collection free?', fr: 'Quand la collection du Kunstmuseum Basel est-elle gratuite ?', de: 'Wann ist die Sammlung des Kunstmuseum Basel gratis?' },
      a: {
        en: 'Tuesday, Thursday and Friday 17:00-18:00, Wednesday 17:00-20:00, and every first Sunday of the month.',
        fr: 'Le mardi, jeudi et vendredi de 17h00 à 18h00, le mercredi de 17h00 à 20h00, et chaque premier dimanche du mois.',
        de: 'Dienstag, Donnerstag und Freitag 17.00 bis 18.00 Uhr, Mittwoch 17.00 bis 20.00 Uhr, und jeden ersten Sonntag im Monat.',
      },
    },
    {
      q: { en: 'How do the four Basel ferries work?', fr: 'Comment fonctionnent les quatre bacs de Bâle ?', de: 'Wie funktionieren die vier Basler Fähren?' },
      a: {
        en: 'They are guided across the Rhine by an overhead cable, using only the current for power, no motor: Wild Maa, Leu, Vogel Gryff and Ueli, one per historic crossing point.',
        fr: 'Ils sont guidés à travers le Rhin par un câble aérien, mus uniquement par le courant, sans moteur : le Wild Maa, le Leu, le Vogel Gryff et l’Ueli, un par point de passage historique.',
        de: 'Sie werden von einem Seil über den Rhein geführt, angetrieben allein von der Strömung, ohne Motor: Wild Maa, Leu, Vogel Gryff und Ueli, je einer pro historischer Übergangsstelle.',
      },
    },
  ],
  neighbours: ['zurich', 'bern', 'fribourg', 'neuchatel'],
}
