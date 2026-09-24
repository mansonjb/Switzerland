import type { DestinationGuide } from '../types'

// Sources in data/SOURCES-basel.md (checked 16/09/2026). No number without a source.
export const basel: DestinationGuide = {
  slug: 'basel',
  stamp: 'generic',
  updated: '2026-09-16',
  meta: {
    title: { en: 'Where to stay in Basel: old town, Rhine, Kleinbasel', fr: 'Où dormir à Bâle : vieille ville, Rhin, Kleinbasel', de: 'Wo übernachten in Basel: Altstadt, Rhein, Kleinbasel' },
    description: {
      en: 'Where to sleep in Basel, from the old town on the Rhine to Kleinbasel and St. Alban, with dated hotel prices and the free BaselCard for transport.',
      fr: 'Où dormir à Bâle, de la vieille ville sur le Rhin à Kleinbasel et à St. Alban, avec des prix d’hôtels datés et la BaselCard gratuite pour les transports.',
      de: 'Wo übernachten in Basel, von der Altstadt am Rhein über Kleinbasel bis St. Alban, mit datierten Hotelpreisen und der kostenlosen BaselCard für Ihre Fahrten.',
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
      en: 'Because every booking already comes with a free BaselCard that covers public transport for the whole stay, including the transfer from the airport or the station, plus 25% off museums, the zoo and more: there is no ticket to work out before you have even reached the hotel.',
      fr: 'Parce que chaque réservation donne droit à une BaselCard gratuite, qui couvre les transports publics pour tout le séjour, transfert depuis l’aéroport ou la gare inclus, avec 25% de réduction sur les musées, le zoo et plus encore : aucun billet à chercher avant même d’avoir rejoint l’hôtel.',
      de: 'Weil jede Buchung bereits eine kostenlose BaselCard mitbringt, die den öffentlichen Verkehr für den ganzen Aufenthalt abdeckt, Transfer vom Flughafen oder Bahnhof inklusive, dazu 25% Rabatt auf Museen, den Zoo und mehr: Sie müssen sich um kein Ticket kümmern, noch bevor Sie im Hotel sind.',
    },
    where: {
      en: 'On the Rhine in Grossbasel’s old town for the Münster and the arcaded streets, across the river in Kleinbasel for the Messe Basel and a Herzog & de Meuron design hotel, or in the St. Alban quarter, Basel’s Little Venice, close to Kunstmuseum Basel | Gegenwart.',
      fr: 'Sur le Rhin, dans la vieille ville de Grossbasel, pour le Münster et les rues à arcades, de l’autre côté du fleuve à Kleinbasel pour la Messe Basel et un hôtel design signé Herzog & de Meuron, ou dans le quartier de St. Alban, la « petite Venise » de Bâle, près du Kunstmuseum Basel | Gegenwart.',
      de: 'Am Rhein, in der Altstadt von Grossbasel, für das Münster und die Lauben, auf der anderen Flussseite in Kleinbasel für die Messe Basel und ein von Herzog & de Meuron gestaltetes Designhotel, oder im Quartier St. Alban, Basels „Klein-Venedig“, nahe dem Kunstmuseum Basel | Gegenwart.',
    },
    watch: {
      en: 'The Rhine ferries do not accept TNW or SBB tickets, nor the BaselCard: keep CHF 2 in cash for the crossing, and do not count on them above 7.90 m water level, when the service stops entirely.',
      fr: 'Les bacs du Rhin n’acceptent ni les billets TNW ou CFF, ni la BaselCard : gardez 2 CHF en liquide pour la traversée, et ne comptez pas dessus au-delà de 7,90 m de niveau d’eau, où le service s’arrête entièrement.',
      de: 'Die Rheinfähren akzeptieren weder TNW- noch SBB-Billette, noch die BaselCard: Halten Sie CHF 2 in bar für die Überfahrt bereit, und verlassen Sie sich oberhalb von 7,90 m Wasserstand nicht auf sie, wenn der Betrieb ganz eingestellt wird.',
    },
  },
  story: {
    title: { en: 'Basel, before you book', fr: 'Bâle, avant de réserver', de: 'Basel, bevor Sie buchen' },
    paragraphs: [
      {
        en: 'Basel sits on the Rhine at 261 metres, and the river runs the show more than any single street. Grossbasel’s old town climbs the left bank around the Münster, Kleinbasel spreads across the water on the right, and four historic ferries, guided by an overhead cable and pushed only by the current, still carry pedestrians between the two for CHF 2 a crossing. However you arrive, at the airport or the station, the free BaselCard that comes with your room already covers the transfer into town.',
        fr: 'Bâle s’étend sur le Rhin à 261 mètres d’altitude, et c’est le fleuve qui mène la danse, plus qu’aucune rue en particulier. La vieille ville de Grossbasel grimpe sur la rive gauche autour du Münster, Kleinbasel s’étale sur l’autre rive, et quatre bacs historiques, guidés par câble et mus par le seul courant, font encore traverser les piétons d’une rive à l’autre pour 2 CHF. Quel que soit votre point d’arrivée, aéroport ou gare, la BaselCard gratuite fournie avec la chambre couvre déjà le transfert jusqu’en ville.',
        de: 'Basel liegt am Rhein auf 261 Metern, und der Fluss gibt hier den Ton an, mehr als jede einzelne Strasse. Die Altstadt von Grossbasel steigt am linken Ufer rund um das Münster an, Kleinbasel breitet sich am rechten Ufer aus, und vier historische Fähren, seilgeführt und allein von der Strömung angetrieben, bringen Fussgänger für CHF 2 noch immer von einem Ufer zum anderen. Wie auch immer Sie ankommen, am Flughafen oder am Bahnhof: Die kostenlose BaselCard, die mit dem Zimmer kommt, deckt den Transfer in die Stadt bereits ab.',
      },
      {
        en: 'Where you sleep depends on which bank of the Rhine you want to wake up on. Grossbasel, the left bank, is the medieval old town around the Münster, its Pfalz terrace and its Spalentor gate, with hotels standing right on the water at Blumenrain. Kleinbasel, across the river, sits along the lively Rheingasse promenade and closer to the Messe Basel exhibition grounds. A third choice, the St. Alban quarter, is narrow alleys past ancient houses and mills, never far from the water, and the closest base to Kunstmuseum Basel | Gegenwart.',
        fr: 'Le choix de l’hébergement dépend de la rive du Rhin où vous voulez vous réveiller. Grossbasel, rive gauche, est la vieille ville médiévale autour du Münster, avec sa terrasse de la Pfalz et sa porte du Spalentor, et des hôtels posés directement sur l’eau au Blumenrain. Kleinbasel, de l’autre côté du fleuve, longe la vivante promenade de la Rheingasse, plus proche du parc des expositions de la Messe Basel. Troisième option, le quartier de St. Alban, ce sont des ruelles étroites longeant d’anciennes maisons et des moulins, jamais loin de l’eau, la base la plus proche du Kunstmuseum Basel | Gegenwart.',
        de: 'Wo Sie schlafen, hängt davon ab, an welchem Rheinufer Sie aufwachen möchten. Grossbasel, das linke Ufer, ist die mittelalterliche Altstadt rund um das Münster, mit Pfalz-Terrasse und Spalentor, und Hotels, die direkt am Wasser am Blumenrain stehen. Kleinbasel, auf der anderen Flussseite, liegt an der lebendigen Rheingasse-Promenade, näher am Messegelände der Messe Basel. Eine dritte Wahl, das Quartier St. Alban, sind enge Gassen an alten Häusern und Mühlen vorbei, nie weit vom Wasser, die Basis, die am nächsten am Kunstmuseum Basel | Gegenwart liegt.',
      },
      {
        en: 'The range runs from a historic grand hotel to a hostel with a river view. Grand Hotel Les Trois Rois, first recorded as an inn in 1681 and home to a three-Michelin-star restaurant, is the most expensive address in our dated prices. Basel Youth Hostel, two minutes from Kunstmuseum Basel | Gegenwart, is the least expensive. Between them sit two boutique addresses, Hotel Krafft on the Rhine promenade since 1873 and the Herzog & de Meuron-designed Volkshaus, plus Der Teufelhof in its pair of eighteenth-century town houses.',
        fr: 'L’offre va d’un grand hôtel historique à une auberge de jeunesse avec vue sur le fleuve. Le Grand Hotel Les Trois Rois, mentionné dès 1681 comme auberge et abritant un restaurant trois étoiles Michelin, ressort comme l’adresse la plus chère dans nos relevés de prix datés. L’auberge de jeunesse de Bâle, à deux minutes du Kunstmuseum Basel | Gegenwart, est la moins chère. Entre les deux se trouvent deux adresses boutique, l’Hôtel Krafft sur la promenade du Rhin depuis 1873 et le Volkshaus conçu par Herzog & de Meuron, ainsi que Der Teufelhof dans ses deux maisons du XVIIIe siècle.',
        de: 'Das Angebot reicht vom historischen Grandhotel bis zur Jugendherberge mit Flussblick. Das Grand Hotel Les Trois Rois, erstmals 1681 als Gasthaus erwähnt und Sitz eines Drei-Sterne-Restaurants, ist in unseren datierten Preisen die teuerste Adresse. Die Basler Jugendherberge, zwei Minuten vom Kunstmuseum Basel | Gegenwart, ist die günstigste. Dazwischen liegen zwei Boutique-Adressen, das Hotel Krafft seit 1873 an der Rheinpromenade und das von Herzog & de Meuron entworfene Volkshaus, sowie der Teufelhof in seinen zwei Stadthäusern aus dem 18. Jahrhundert.',
      },
      {
        en: 'Basel has no single high season: the Rhine ferries run their longest hours in summer, extended even further during the Basler Herbstmesse, while winter brings the shorter timetable and, in January, the Basel Museums Night opens more than forty museums and cultural sites on one ticket. During Fasnacht the Münster itself keeps to a shortened 11:00 to 14:00 opening. However you time it, the transfer from the airport or the station is already covered by the free BaselCard that comes with your booking.',
        fr: 'Bâle n’a pas de haute saison unique : les bacs du Rhin circulent selon leurs horaires les plus longs l’été, encore prolongés pendant la Basler Herbstmesse, tandis que l’hiver amène l’horaire réduit et, en janvier, la Basel Museums Night ouvre plus de quarante musées et lieux culturels sur un seul billet. Pendant Fasnacht, le Münster lui-même se limite à une ouverture réduite de 11h00 à 14h00. Quelle que soit la période choisie, le transfert depuis l’aéroport ou la gare est déjà couvert par la BaselCard gratuite fournie avec votre réservation.',
        de: 'Basel kennt keine einzelne Hochsaison: Die Rheinfähren verkehren im Sommer mit ihren längsten Zeiten, während der Basler Herbstmesse noch verlängert, während der Winter den kürzeren Fahrplan bringt und im Januar die Basel Museums Night über vierzig Museen und Kulturstätten mit einem einzigen Ticket öffnet. Während der Fasnacht beschränkt sich das Münster selbst auf verkürzte Öffnungszeiten von 11.00 bis 14.00 Uhr. Wie auch immer Sie die Reise timen: Der Transfer vom Flughafen oder Bahnhof ist mit der kostenlosen BaselCard, die zu Ihrer Buchung gehört, bereits abgedeckt.',
      },
    ],
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
      story: {
        en: 'This is Basel’s medieval heart, wrapped around the Münster on the left bank of the Rhine. Grand Hotel Les Trois Rois, an inn already recorded here in 1681, stands right on the water at Blumenrain, and a few streets back Der Teufelhof combines two eighteenth-century town houses with its own theatre. Choose this side for the old town on your doorstep and the river a few steps away, in exchange for the Messe Basel exhibition grounds and the lively Rheingasse lying across the water.',
        fr: 'C’est le cœur médiéval de Bâle, enroulé autour du Münster sur la rive gauche du Rhin. Le Grand Hotel Les Trois Rois, une auberge déjà mentionnée ici en 1681, se dresse directement sur l’eau au Blumenrain, et quelques rues plus loin, Der Teufelhof réunit deux maisons du XVIIIe siècle avec son propre théâtre. On choisit ce côté pour avoir la vieille ville sous la porte et le fleuve à quelques pas, en échange du parc des expositions de la Messe Basel et de la vivante Rheingasse, restés de l’autre côté de l’eau.',
        de: 'Das ist Basels mittelalterliches Herz, rund um das Münster am linken Rheinufer. Das Grand Hotel Les Trois Rois, ein bereits 1681 erwähntes Gasthaus, steht direkt am Wasser am Blumenrain, und ein paar Strassen weiter vereint der Teufelhof zwei Stadthäuser aus dem 18. Jahrhundert mit eigenem Theater. Man wählt diese Seite für die Altstadt vor der Tür und den Fluss wenige Schritte entfernt, im Tausch gegen das Messegelände der Messe Basel und die lebendige Rheingasse auf der anderen Flussseite.',
      },
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
      story: {
        en: 'Cross the river and Basel turns livelier. Hotel Krafft has stood on the Rhine promenade in the lively Rheingasse since 1873, and a few minutes further on, the Herzog & de Meuron-designed Volkshaus sits close to the Messe Basel exhibition grounds. This side suits a stay built around the fair or an evening on the promenade, in exchange for a short walk or a ferry crossing back to the old town’s sights.',
        fr: 'Traversez le fleuve et Bâle devient plus animée. L’Hôtel Krafft se dresse sur la promenade du Rhin, dans la vivante Rheingasse, depuis 1873, et quelques minutes plus loin, le Volkshaus conçu par Herzog & de Meuron se trouve tout près du parc des expositions de la Messe Basel. Ce côté convient à un séjour organisé autour du salon ou d’une soirée sur la promenade, contre une courte marche ou une traversée en bac pour rejoindre les sites de la vieille ville.',
        de: 'Wer den Fluss überquert, findet ein lebendigeres Basel. Das Hotel Krafft steht seit 1873 an der Rheinpromenade in der lebendigen Rheingasse, und ein paar Minuten weiter liegt das von Herzog & de Meuron entworfene Volkshaus nahe dem Messegelände der Messe Basel. Diese Seite passt zu einem Aufenthalt rund um die Messe oder einen Abend an der Promenade, dafür braucht es einen kurzen Fussweg oder eine Fährüberfahrt zurück zu den Sehenswürdigkeiten der Altstadt.',
      },
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
      story: {
        en: 'South of the old town, St. Alban keeps the name Basel’s Little Venice, its narrow alleys running past ancient houses and mills that are never far from the water. Basel Youth Hostel sits at its centre, two minutes from Kunstmuseum Basel | Gegenwart and two minutes from the St. Alban-Rhine ferry. It suits a quieter stay close to the art museum, in exchange for a short ferry ride or walk to reach the Münster and the main old town streets.',
        fr: 'Au sud de la vieille ville, St. Alban porte le surnom de petite Venise de Bâle, ses ruelles étroites longeant d’anciennes maisons et des moulins jamais loin de l’eau. L’auberge de jeunesse de Bâle se trouve en son cœur, à deux minutes du Kunstmuseum Basel | Gegenwart et deux minutes du bac du St. Alban-Rhein. Ce quartier convient à un séjour plus calme, proche du musée d’art, contre une courte traversée en bac ou une marche pour rejoindre le Münster et les rues principales de la vieille ville.',
        de: 'Südlich der Altstadt trägt St. Alban den Namen Basels Klein-Venedig, seine engen Gassen führen an alten Häusern und Mühlen vorbei, die nie weit vom Wasser liegen. Die Basler Jugendherberge liegt in seiner Mitte, zwei Minuten vom Kunstmuseum Basel | Gegenwart und zwei Minuten von der St. Alban-Rhein-Fähre entfernt. Das Quartier passt zu einem ruhigeren Aufenthalt nahe dem Kunstmuseum, dafür braucht es eine kurze Fährüberfahrt oder einen Fussweg zum Münster und den Hauptstrassen der Altstadt.',
      },
    },
  ],
  hotels: [
    {
      slug: 'bs-trois-rois',
      name: 'Grand Hotel Les Trois Rois',
      photo: '/photos/hotels/bs-trois-rois.jpg',
      url: 'https://lestroisrois.com',
      sector: { en: 'Blumenrain, old town on the Rhine', fr: 'Blumenrain, vieille ville sur le Rhin', de: 'Blumenrain, Altstadt am Rhein' },
      facts: [
        { en: 'First documented as the inn "Drei Könige" in 1681, with three carved king figures added to the facade in 1754', fr: 'D’abord mentionné comme auberge « Drei Könige » en 1681, avec trois statues de rois sculptées ajoutées à la façade en 1754', de: 'Erstmals 1681 als Gasthaus „Drei Könige“ erwähnt, mit drei geschnitzten Königsfiguren, die 1754 an der Fassade angebracht wurden' },
        { en: 'Restaurant Cheval Blanc by Peter Knogl holds 3 Michelin stars, and the hotel itself holds 3 Keys in the Michelin Guide', fr: 'Le restaurant Cheval Blanc de Peter Knogl détient 3 étoiles Michelin, et l’hôtel lui-même 3 Clés au Guide Michelin', de: 'Das Restaurant Cheval Blanc von Peter Knogl trägt 3 Michelin-Sterne, das Hotel selbst 3 Schlüssel im Guide Michelin' },
      ],
      blurb: {
        en: 'First documented as the inn Drei Könige in 1681, with three carved king figures added to the facade in 1754, the Grand Hotel Les Trois Rois stands at Blumenrain 8, right on the Rhine in the old town. Restaurant Cheval Blanc, run by Peter Knogl, holds three Michelin stars, and the hotel itself carries three Michelin Keys. In this selection of dated prices, it is the most expensive address.',
        fr: 'D’abord mentionné comme auberge « Drei Könige » en 1681, avec trois statues de rois sculptées ajoutées à la façade en 1754, le Grand Hotel Les Trois Rois se dresse au Blumenrain 8, directement sur le Rhin, en vieille ville. Le restaurant Cheval Blanc, tenu par Peter Knogl, détient trois étoiles Michelin, et l’hôtel lui-même porte trois Clés au Guide Michelin. Dans notre sélection de prix datés, c’est l’adresse la plus chère.',
        de: 'Erstmals 1681 als Gasthaus „Drei Könige“ erwähnt, mit drei geschnitzten Königsfiguren, die 1754 an der Fassade angebracht wurden, steht das Grand Hotel Les Trois Rois am Blumenrain 8, direkt am Rhein in der Altstadt. Das Restaurant Cheval Blanc von Peter Knogl trägt drei Michelin-Sterne, das Hotel selbst drei Schlüssel im Guide Michelin. In unserer Auswahl datierter Preise ist es die teuerste Adresse.',
      },
    },
    {
      slug: 'bs-krafft',
      name: 'Hotel Krafft',
      photo: '/photos/hotels/bs-krafft.jpg',
      url: 'https://krafftbasel.ch',
      sector: { en: 'Rheingasse, Kleinbasel', fr: 'Rheingasse, Kleinbasel', de: 'Rheingasse, Kleinbasel' },
      facts: [
        { en: 'Rheingasse 12, directly on the Rhine promenade, hosting guests since 1873', fr: 'Rheingasse 12, directement sur la promenade du Rhin, accueillant des hôtes depuis 1873', de: 'Rheingasse 12, direkt an der Rheinpromenade, seit 1873 Gäste beherbergend' },
        { en: 'A 4-star boutique hotel across five floors, part of the Krafft Gruppe', fr: 'Un hôtel boutique 4 étoiles sur cinq étages, membre du Krafft Gruppe', de: 'Ein 4-Sterne-Boutiquehotel über fünf Stockwerke, Teil der Krafft Gruppe' },
      ],
      blurb: {
        en: 'On the Rhine promenade in the lively Rheingasse, Hotel Krafft has welcomed guests since 1873. It is a four-star boutique hotel across five floors, part of the Krafft Gruppe, and suits a stay that puts you right on the water in Kleinbasel rather than in the old town across the river.',
        fr: 'Sur la promenade du Rhin, dans la vivante Rheingasse, l’Hôtel Krafft accueille des hôtes depuis 1873. C’est un hôtel boutique 4 étoiles sur cinq étages, membre du Krafft Gruppe, qui convient à un séjour posé directement sur l’eau à Kleinbasel plutôt qu’en vieille ville, de l’autre côté du fleuve.',
        de: 'An der Rheinpromenade, in der lebendigen Rheingasse, beherbergt das Hotel Krafft seit 1873 Gäste. Es ist ein 4-Sterne-Boutiquehotel über fünf Stockwerke, Teil der Krafft Gruppe, und passt zu einem Aufenthalt direkt am Wasser in Kleinbasel statt in der Altstadt auf der anderen Flussseite.',
      },
    },
    {
      slug: 'bs-teufelhof',
      name: 'Der Teufelhof Basel',
      photo: '/photos/hotels/bs-teufelhof.jpg',
      url: 'https://teufelhof.com',
      sector: { en: 'Old town, Grossbasel', fr: 'Vieille ville, Grossbasel', de: 'Altstadt, Grossbasel' },
      facts: [
        { en: 'Two combined 18th-century town houses in the old town', fr: 'Deux maisons de ville du XVIIIe siècle réunies, en vieille ville', de: 'Zwei zusammengelegte Stadthäuser aus dem 18. Jahrhundert in der Altstadt' },
        { en: 'Its own in-house theatre plus two restaurants, Atelier and Bel Etage', fr: 'Son propre théâtre, ainsi que deux restaurants, Atelier et Bel Etage', de: 'Eigenes Theater im Haus sowie zwei Restaurants, Atelier und Bel Etage' },
      ],
      blurb: {
        en: 'Der Teufelhof occupies two combined eighteenth-century town houses in the old town, with its own in-house theatre and two restaurants, Atelier and Bel Etage. It suits a stay built around culture and dinner without leaving the building, at a notably lower price than the grand hotels nearby.',
        fr: 'Der Teufelhof occupe deux maisons de ville du XVIIIe siècle réunies, en vieille ville, avec son propre théâtre et deux restaurants, Atelier et Bel Etage. Il convient à un séjour construit autour de la culture et du dîner sans quitter le bâtiment, à un prix nettement inférieur à celui des grands hôtels voisins.',
        de: 'Der Teufelhof belegt zwei zusammengelegte Stadthäuser aus dem 18. Jahrhundert in der Altstadt, mit eigenem Theater im Haus und zwei Restaurants, Atelier und Bel Etage. Er passt zu einem Aufenthalt rund um Kultur und Abendessen, ohne das Haus zu verlassen, zu einem deutlich niedrigeren Preis als die Grandhotels in der Nähe.',
      },
    },
    {
      slug: 'bs-volkshaus',
      name: 'Volkshaus Basel',
      photo: '/photos/hotels/bs-volkshaus.jpg',
      url: 'https://volkshaus-basel.ch',
      sector: { en: 'Kleinbasel', fr: 'Kleinbasel', de: 'Kleinbasel' },
      facts: [
        { en: 'A 4-star boutique and design hotel designed by Herzog & de Meuron', fr: 'Un hôtel boutique et design 4 étoiles conçu par Herzog & de Meuron', de: 'Ein 4-Sterne-Boutique- und Designhotel, entworfen von Herzog & de Meuron' },
        { en: 'A few minutes’ walk from the Rhine and the Messe Basel exhibition grounds, with a Brasserie, IMI Bar and a tree-covered inner courtyard', fr: 'À quelques minutes à pied du Rhin et du parc des expositions de la Messe Basel, avec une Brasserie, l’IMI Bar et une cour intérieure arborée', de: 'Wenige Gehminuten vom Rhein und dem Messegelände der Messe Basel entfernt, mit Brasserie, IMI Bar und einem begrünten Innenhof' },
      ],
      blurb: {
        en: 'Designed by Herzog & de Meuron, the Volkshaus stands in Kleinbasel a few minutes’ walk from the Rhine and the Messe Basel exhibition grounds. Its own Brasserie and IMI Bar open onto a tree-covered inner courtyard, an easy choice for a stay built around the fair or an evening in rather than out.',
        fr: 'Conçu par Herzog & de Meuron, le Volkshaus se trouve à Kleinbasel, à quelques minutes à pied du Rhin et du parc des expositions de la Messe Basel. Sa Brasserie et son IMI Bar donnent sur une cour intérieure arborée, un choix facile pour un séjour organisé autour du salon ou une soirée passée sur place plutôt qu’en ville.',
        de: 'Das von Herzog & de Meuron entworfene Volkshaus liegt in Kleinbasel, wenige Gehminuten vom Rhein und dem Messegelände der Messe Basel entfernt. Die hauseigene Brasserie und die IMI Bar öffnen sich zu einem begrünten Innenhof, eine einfache Wahl für einen Aufenthalt rund um die Messe oder einen Abend im Haus statt auswärts.',
      },
    },
    {
      slug: 'bs-youth-hostel',
      name: 'Basel Youth Hostel',
      photo: '/photos/hotels/bs-youth-hostel.jpg',
      url: 'https://www.youthhostel.ch/en/hostels/basel',
      sector: { en: 'St. Alban quarter', fr: 'Quartier de St. Alban', de: 'Quartier St. Alban' },
      facts: [
        { en: 'Maja Sacher-Platz 10, 66 rooms and 234 beds, 4 to 6 bed dorms plus family and double rooms', fr: 'Maja Sacher-Platz 10, 66 chambres et 234 lits, dortoirs de 4 à 6 lits ainsi que chambres familiales et doubles', de: 'Maja Sacher-Platz 10, 66 Zimmer und 234 Betten, 4- bis 6-Bett-Zimmer sowie Familien- und Doppelzimmer' },
        { en: '2 minutes’ walk to Kunstmuseum Basel | Gegenwart and 2 minutes to the St. Alban-Rhine ferry, BaselCard included', fr: 'À 2 minutes à pied du Kunstmuseum Basel | Gegenwart et 2 minutes du bac du St. Alban-Rhein, BaselCard incluse', de: '2 Gehminuten zum Kunstmuseum Basel | Gegenwart und 2 Minuten zur St. Alban-Rhein-Fähre, BaselCard inbegriffen' },
      ],
      blurb: {
        en: 'Two minutes from Kunstmuseum Basel | Gegenwart and two minutes from the St. Alban-Rhine ferry, Basel Youth Hostel offers 66 rooms and 234 beds, from four- to six-bed dorms to family and double rooms. It is the least expensive address in this selection, in the St. Alban quarter, close to the art museum and the water.',
        fr: 'À deux minutes du Kunstmuseum Basel | Gegenwart et deux minutes du bac du St. Alban-Rhein, l’auberge de jeunesse de Bâle propose 66 chambres et 234 lits, de dortoirs de quatre à six lits aux chambres familiales et doubles. C’est l’adresse la moins chère de cette sélection, dans le quartier de St. Alban, près du musée d’art et de l’eau.',
        de: 'Zwei Minuten vom Kunstmuseum Basel | Gegenwart und zwei Minuten von der St. Alban-Rhein-Fähre entfernt, bietet die Basler Jugendherberge 66 Zimmer und 234 Betten, von 4- bis 6-Bett-Zimmern bis zu Familien- und Doppelzimmern. Sie ist die günstigste Adresse dieser Auswahl, im Quartier St. Alban, nahe dem Kunstmuseum und dem Wasser.',
      },
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
          en: 'Book any Basel hotel, hostel, B&B or apartment and a personal BaselCard is waiting at check-in, already covering public transport for the whole stay, up to 30 days, including the transfer from the airport or station: there is no ticket to buy for that first ride into town. It also brings 25% off museums, Basel Zoo, Theater Basel’s evening box office, the sightseeing bus, the public Old Town walking tour, the Jakob’s Leckerli workshop tour, Basler Personenschifffahrt day boat trips, the Reigoldswil-Wasserfallen cable car and Nordstern, plus a CHF 25 a day e-bike rental at the SBB station, worth weighing against any paid alternative before you book one separately.',
          fr: 'Réservez n’importe quel hôtel, auberge, B&B ou appartement à Bâle, et une BaselCard personnelle vous attend à l’arrivée, couvrant déjà les transports publics pour tout le séjour, jusqu’à 30 jours, transfert depuis l’aéroport ou la gare inclus : aucun billet à acheter pour ce premier trajet jusqu’en ville. Elle donne aussi 25% de réduction sur les musées, le zoo de Bâle, la billetterie du soir du Theater Basel, le bus touristique, la visite guidée publique de la vieille ville, l’atelier Jakob’s Leckerli, les croisières journalières de la Basler Personenschifffahrt, le téléphérique Reigoldswil-Wasserfallen et le Nordstern, ainsi qu’une location de vélo électrique à 25 CHF par jour à la gare CFF, à comparer à toute alternative payante avant d’en réserver une séparément.',
          de: 'Buchen Sie irgendein Basler Hotel, Hostel, B&B oder eine Wohnung, und beim Check-in wartet eine persönliche BaselCard, die den öffentlichen Verkehr für den ganzen Aufenthalt bereits abdeckt, bis zu 30 Tage, inklusive Transfer vom Flughafen oder Bahnhof: Für diese erste Fahrt in die Stadt ist kein Ticket zu kaufen. Sie bringt zudem 25% Rabatt auf Museen, den Zoo Basel, die Abendkasse des Theater Basel, den Stadtrundfahrtbus, die öffentliche Altstadtführung, die Jakob’s-Leckerli-Werkstattführung, Tagesfahrten der Basler Personenschifffahrt, die Seilbahn Reigoldswil-Wasserfallen und das Nordstern, dazu ein E-Bike für CHF 25 pro Tag am SBB-Bahnhof, das sich lohnt, gegen jede bezahlte Alternative abzuwägen, bevor Sie eines separat buchen.',
        },
      },
      {
        title: { en: 'The Rhine ferries', fr: 'Les bacs du Rhin', de: 'Die Rheinfähren' },
        text: {
          en: 'Four historic passenger ferries cross the Rhine by cable and current alone, with no motor: the Wild Maa in St. Alban, the Leu at the Münster, the Vogel Gryff in Klingental and the Ueli in St. Johann. Carry cash for the crossing, CHF 2 for adults and CHF 1 for children, dogs or bikes on the Leu, since TNW and SBB tickets and the BaselCard are not valid on board.',
          fr: 'Quatre bacs historiques traversent le Rhin par câble et par le seul courant, sans moteur : le Wild Maa à St. Alban, le Leu au Münster, le Vogel Gryff à Klingental et l’Ueli à St. Johann. Prévoyez du liquide pour la traversée, 2 CHF pour un adulte et 1 CHF pour un enfant, un chien ou un vélo sur le Leu, car les billets TNW et CFF ainsi que la BaselCard n’y sont pas valables.',
          de: 'Vier historische Fähren überqueren den Rhein allein mit Seil und Strömung, ohne Motor: der Wild Maa in St. Alban, der Leu beim Münster, der Vogel Gryff im Klingental und der Ueli in St. Johann. Nehmen Sie Bargeld für die Überfahrt mit, CHF 2 für Erwachsene und CHF 1 für Kinder, Hunde oder Velos beim Leu, denn TNW- und SBB-Billette sowie die BaselCard gelten an Bord nicht.',
        },
      },
      {
        title: { en: 'Crossing the Rhine', fr: 'Traverser le Rhin', de: 'Den Rhein überqueren' },
        text: {
          en: 'The river splits the city into Grossbasel on the left bank and Kleinbasel on the right. The Mittlere Brücke, completed in 1905 with a predecessor dating to around 1220, carries road traffic across; on foot, the four cable ferries cut straight across at points the bridge does not reach, and once they stop for the night or for high water, the bridge becomes the only way over.',
          fr: 'Le fleuve coupe la ville en deux : Grossbasel sur la rive gauche et Kleinbasel sur la rive droite. Le Mittlere Brücke, achevé en 1905 avec un prédécesseur datant d’environ 1220, porte la circulation routière d’une rive à l’autre ; à pied, les quatre bacs traversent directement à des points que le pont n’atteint pas, et une fois qu’ils s’arrêtent pour la nuit ou pour cause de crue, le pont devient le seul passage.',
          de: 'Der Fluss teilt die Stadt in Grossbasel am linken und Kleinbasel am rechten Ufer. Die Mittlere Brücke, 1905 fertiggestellt mit einer Vorgängerin von etwa 1220, trägt den Strassenverkehr über den Fluss; zu Fuss queren die vier Fähren direkt an Stellen, die die Brücke nicht erreicht, und sobald sie für die Nacht oder wegen Hochwasser einstellen, bleibt die Brücke der einzige Weg hinüber.',
        },
      },
      {
        title: { en: 'Parking', fr: 'Stationnement', de: 'Parkplatz' },
        text: {
          en: 'Basel allows cars, and the sources checked for this guide describe no citywide visitor parking scheme. Arrange a space directly with your hotel when you book, rather than counting on finding one once you arrive in the old town or Kleinbasel.',
          fr: 'Bâle autorise les voitures, et les sources vérifiées pour ce guide ne décrivent aucun dispositif de stationnement dédié aux visiteurs à l’échelle de la ville. Prévoyez une place directement avec votre hôtel au moment de la réservation, plutôt que de compter en trouver une une fois arrivé en vieille ville ou à Kleinbasel.',
          de: 'Basel lässt Autos zu, und die für diesen Ratgeber geprüften Quellen beschreiben kein stadtweites Parkangebot für Gäste. Klären Sie einen Stellplatz direkt mit Ihrem Hotel bei der Buchung, statt bei der Ankunft in der Altstadt oder in Kleinbasel darauf zu hoffen, einen zu finden.',
        },
      },
    ],
  },
  seasons: {
    summer: {
      title: { en: 'Summer in Basel', fr: 'L’été à Bâle', de: 'Sommer in Basel' },
      base: {
        en: 'Summer is when Basel runs longest outdoors: the Rhine ferries keep their longest hours of the year and the Münster stays open latest, both stretching further again during the Basler Herbstmesse. Book near a ferry crossing, in Kleinbasel or St. Alban, and you can cross the river on foot into the evening instead of planning around the bridge.',
        fr: 'L’été, Bâle vit le plus longtemps dehors : les bacs du Rhin circulent selon leurs horaires les plus longs de l’année et le Münster reste ouvert le plus tard, les deux s’étirant encore pendant la Basler Herbstmesse. Réservez près d’un point de passage des bacs, à Kleinbasel ou à St. Alban, et vous pourrez traverser le fleuve à pied jusqu’en soirée, sans planifier autour du pont.',
        de: 'Im Sommer lebt Basel am längsten im Freien: Die Rheinfähren verkehren mit den längsten Zeiten des Jahres, und das Münster bleibt am längsten offen, beide noch länger während der Basler Herbstmesse. Buchen Sie nahe einer Fährstelle, in Kleinbasel oder St. Alban, und Sie können den Fluss bis in den Abend zu Fuss überqueren, statt sich nach der Brücke zu richten.',
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
        en: 'Winter trims the ferries back to their shorter timetable and suspends them entirely above 7.90 m of water, so do not plan a stay around crossing on foot: the Mittlere Brücke becomes the reliable route between the banks. January adds a reason to come regardless, when the Basel Museums Night opens more than forty museums and cultural sites on a single ticket.',
        fr: 'L’hiver réduit les bacs à leur horaire plus court et suspend totalement le service au-delà de 7,90 m de niveau d’eau : ne comptez donc pas sur une traversée à pied pour organiser votre séjour, le Mittlere Brücke devient le passage fiable entre les deux rives. Janvier apporte tout de même une raison de venir, quand la Basel Museums Night ouvre plus de quarante musées et lieux culturels sur un seul billet.',
        de: 'Der Winter kürzt die Fähren auf ihren kürzeren Fahrplan und stellt den Betrieb oberhalb von 7,90 m Wasserstand ganz ein: Planen Sie den Aufenthalt daher nicht um eine Überfahrt zu Fuss, die Mittlere Brücke wird zum verlässlichen Weg zwischen den Ufern. Der Januar liefert trotzdem einen Grund zu kommen, wenn die Basel Museums Night über vierzig Museen und Kulturstätten mit einem einzigen Ticket öffnet.',
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
      en: 'Basel is not short of things to do, but a handful of places give a stay its shape, checked directly with Basel Tourismus, Basel Münster, Kunstmuseum Basel and the Fähri-Verein. These are the ones we would build a day around.',
      fr: 'Bâle ne manque pas d’activités, mais quelques lieux donnent sa forme à un séjour, vérifiés directement auprès de Basel Tourismus, du Münster de Bâle, du Kunstmuseum Basel et du Fähri-Verein. Voici ceux autour desquels nous construirions une journée.',
      de: 'An Aktivitäten fehlt es in Basel nicht, doch einige Orte prägen einen Aufenthalt, direkt geprüft bei Basel Tourismus, dem Basler Münster, dem Kunstmuseum Basel und dem Fähri-Verein. Das sind jene, um die wir einen Tag bauen würden.',
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
              en: 'This self-guided route strings together the Old Town’s main sights with an audio guide, and takes anywhere from 60 to 120 minutes depending on how many stops you make. It suits a first afternoon when you would rather set your own pace than follow a group.',
              fr: 'Ce parcours en autonomie relie les principaux sites de la vieille ville avec un guide audio, et dure de 60 à 120 minutes selon le nombre d’arrêts. Il convient à un premier après-midi où l’on préfère avancer à son rythme plutôt que suivre un groupe.',
              de: 'Diese selbstgeführte Route verbindet die wichtigsten Sehenswürdigkeiten der Altstadt mit einem Audioguide und dauert je nach Zahl der Stopps 60 bis 120 Minuten. Sie passt zu einem ersten Nachmittag, an dem man lieber im eigenen Tempo geht als einer Gruppe zu folgen.',
            },
          },
          {
            name: { en: '"Stories of Basel’s Old Town" guided tour', fr: 'Visite guidée « Stories of Basel’s Old Town »', de: 'Führung „Stories of Basel’s Old Town“' },
            meta: { en: 'from CHF 25 · 25% off with the BaselCard', fr: 'dès 25 CHF · 25% de réduction avec la BaselCard', de: 'ab CHF 25 · 25% Rabatt mit der BaselCard' },
            text: {
              en: 'A guide leads you to the Münster, the Barfüsserkirche and the Town Hall, filling in what the self-guided walk leaves out. It costs from CHF 25 per person, with 25% off for anyone holding the BaselCard that comes with your stay.',
              fr: 'Un guide vous conduit au Münster, à la Barfüsserkirche et à l’Hôtel de Ville, en complétant ce que le parcours en autonomie laisse de côté. Elle coûte à partir de 25 CHF par personne, avec 25% de réduction pour les détenteurs de la BaselCard fournie avec le séjour.',
              de: 'Ein Guide führt Sie zum Münster, zur Barfüsserkirche und zum Rathaus und ergänzt, was der selbstgeführte Rundgang auslässt. Sie kostet ab CHF 25 pro Person, mit 25% Rabatt für alle, die die zum Aufenthalt gehörende BaselCard besitzen.',
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
              en: 'A narrow stair of about 250 steps climbs either the Georgsturm or the Martinsturm, for a view over the city. Time it well: last entry is 30 minutes before the Münster closes, and the towers close again from 12:00 to 12:20 for midday prayers.',
              fr: 'Un escalier étroit d’environ 250 marches grimpe dans le Georgsturm ou le Martinsturm, pour une vue sur la ville. Choisissez bien votre moment : la dernière entrée a lieu 30 minutes avant la fermeture du Münster, et les tours ferment à nouveau de 12h00 à 12h20 pendant la prière de midi.',
              de: 'Eine schmale Treppe von rund 250 Stufen führt auf den Georgsturm oder den Martinsturm, für einen Blick über die Stadt. Planen Sie den Zeitpunkt gut: Letzter Einlass ist 30 Minuten vor Münsterschluss, und die Türme schliessen von 12.00 bis 12.20 Uhr erneut für das Mittagsgebet.',
            },
          },
          {
            name: { en: 'The four Basel ferries', fr: 'Les quatre bacs de Bâle', de: 'Die vier Basler Fähren' },
            meta: { en: 'Wild Maa, Leu, Vogel Gryff, Ueli', fr: 'Wild Maa, Leu, Vogel Gryff, Ueli', de: 'Wild Maa, Leu, Vogel Gryff, Ueli' },
            text: {
              en: 'Four crossings, Wild Maa, Leu, Vogel Gryff and Ueli, are guided across the Rhine by an overhead cable and powered only by the current, with no motor. On the Leu, an adult crossing costs CHF 2, paid on board in cash, since neither TNW and SBB tickets nor the BaselCard are accepted.',
              fr: 'Quatre traversées, Wild Maa, Leu, Vogel Gryff et Ueli, sont guidées à travers le Rhin par un câble aérien, mues par le seul courant, sans moteur. Sur le Leu, la traversée adulte coûte 2 CHF, payable en liquide à bord, car ni les billets TNW ou CFF, ni la BaselCard n’y sont acceptés.',
              de: 'Vier Überfahrten, Wild Maa, Leu, Vogel Gryff und Ueli, werden von einem Seil über den Rhein geführt und allein von der Strömung angetrieben, ohne Motor. Beim Leu kostet die Erwachsenen-Überfahrt CHF 2, bar an Bord zu zahlen, denn weder TNW- und SBB-Billette noch die BaselCard werden akzeptiert.',
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
              en: 'A ticket covering a special exhibition and the collection costs CHF 30 for adults over 20, or CHF 25 for the collection and exhibitions alone. Time a visit for Tuesday, Thursday or Friday between 17:00 and 18:00, Wednesday evening until 20:00, or the first Sunday of the month, when the collection itself is free.',
              fr: 'Un billet couvrant une exposition temporaire et la collection coûte 30 CHF pour les adultes de plus de 20 ans, ou 25 CHF pour la collection et les expositions seules. Choisissez votre visite le mardi, jeudi ou vendredi entre 17h00 et 18h00, le mercredi soir jusqu’à 20h00, ou le premier dimanche du mois, quand la collection elle-même est gratuite.',
              de: 'Ein Ticket für Sonderausstellung und Sammlung zusammen kostet CHF 30 für Erwachsene über 20, oder CHF 25 für Sammlung und Ausstellungen allein. Planen Sie den Besuch am Dienstag, Donnerstag oder Freitag zwischen 17.00 und 18.00 Uhr, am Mittwochabend bis 20.00 Uhr, oder am ersten Sonntag im Monat, wenn die Sammlung selbst gratis ist.',
            },
          },
          {
            name: { en: 'The Old Town’s fountains and gates', fr: 'Les fontaines et portes de la vieille ville', de: 'Brunnen und Tore der Altstadt' },
            meta: { en: 'over 200 fountains · Spalentor, one of eight original gates', fr: 'plus de 200 fontaines · Spalentor, une des huit portes d’origine', de: 'über 200 Brunnen · Spalentor, eines von acht ursprünglichen Toren' },
            text: {
              en: 'More than 200 fountains are scattered through the Old Town, alongside the Pfalz terrace behind the Münster and the Spalentor, one of the city’s original eight gates. None of it needs a ticket, so it folds easily into a walk between the tower climb and a ferry crossing.',
              fr: 'Plus de 200 fontaines parsèment la vieille ville, avec la terrasse de la Pfalz derrière le Münster et le Spalentor, l’une des huit portes d’origine de la ville. Rien de tout cela ne nécessite de billet, ce qui s’intègre facilement à une promenade entre l’ascension de la tour et une traversée en bac.',
              de: 'Mehr als 200 Brunnen verteilen sich in der Altstadt, dazu die Pfalz-Terrasse hinter dem Münster und das Spalentor, eines der ursprünglich acht Stadttore. Nichts davon braucht ein Ticket, es lässt sich also leicht in einen Spaziergang zwischen Turmaufstieg und Fährüberfahrt einbauen.',
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
              en: 'Hotel Krafft’s own restaurant sits on the Rhine promenade, in a house that has welcomed guests since 1873. It puts dinner a few steps from the water, right where the promenade meets the lively Rheingasse.',
              fr: 'Le restaurant de l’Hôtel Krafft se trouve sur la promenade du Rhin, dans une maison qui accueille des hôtes depuis 1873. Il place le dîner à quelques pas de l’eau, à l’endroit où la promenade rejoint la vivante Rheingasse.',
              de: 'Das eigene Restaurant des Hotels Krafft liegt an der Rheinpromenade, in einem Haus, das seit 1873 Gäste beherbergt. Es rückt das Abendessen wenige Schritte vom Wasser, genau dort, wo die Promenade auf die lebendige Rheingasse trifft.',
            },
          },
          {
            name: { en: 'Brasserie and IMI Bar at Volkshaus Basel', fr: 'Brasserie et IMI Bar du Volkshaus Basel', de: 'Brasserie und IMI Bar im Volkshaus Basel' },
            meta: { en: 'Kleinbasel', fr: 'Kleinbasel', de: 'Kleinbasel' },
            text: {
              en: 'The Brasserie and IMI Bar at the Herzog & de Meuron-designed Volkshaus open onto a tree-covered inner courtyard. It suits an evening that stays close to Kleinbasel and the Messe Basel grounds rather than crossing back to the old town.',
              fr: 'La Brasserie et l’IMI Bar du Volkshaus conçu par Herzog & de Meuron donnent sur une cour intérieure arborée. Ils conviennent à une soirée qui reste proche de Kleinbasel et du parc de la Messe Basel plutôt que de retraverser vers la vieille ville.',
              de: 'Die Brasserie und die IMI Bar im von Herzog & de Meuron entworfenen Volkshaus öffnen sich zu einem begrünten Innenhof. Sie passen zu einem Abend, der nahe bei Kleinbasel und dem Messegelände der Messe Basel bleibt, statt zurück in die Altstadt zu queren.',
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
        en: 'Free public transport for your whole stay, up to 30 days, including the transfer from the airport or station, plus 25% off museums, the zoo, boat trips, the Old Town walking tour and more. It comes free with any Basel hotel, hostel or B&B booking, so budget only for the crossings and admissions it does not cover, such as the Rhine ferries.',
        fr: 'Les transports publics gratuits pour tout votre séjour, jusqu’à 30 jours, transfert depuis l’aéroport ou la gare inclus, ainsi que 25% de réduction sur les musées, le zoo, les croisières, la visite guidée de la vieille ville et plus encore. Elle est offerte avec toute réservation d’hôtel, d’auberge ou de chambre d’hôtes à Bâle, ne budgétez donc que les traversées et entrées qu’elle ne couvre pas, comme les bacs du Rhin.',
        de: 'Kostenloser öffentlicher Verkehr für Ihren ganzen Aufenthalt, bis zu 30 Tage, inklusive Transfer vom Flughafen oder Bahnhof, sowie 25% Rabatt auf Museen, den Zoo, Bootsfahrten, die Altstadtführung und mehr. Sie ist bei jeder Buchung eines Basler Hotels, Hostels oder B&B inbegriffen, budgetieren Sie also nur für das, was sie nicht abdeckt, etwa die Rheinfähren.',
      },
    },
    {
      q: { en: 'Can I use the BaselCard on the Rhine ferries?', fr: 'Peut-on utiliser la BaselCard sur les bacs du Rhin ?', de: 'Kann man die BaselCard auf den Rheinfähren nutzen?' },
      a: {
        en: 'No: the ferries explicitly do not accept TNW or SBB tickets, or the BaselCard, and a crossing is paid on board, CHF 2 for adults. Carry a few francs in coins if a ferry crossing is part of your day, since none of the passes sold in the city work on board.',
        fr: 'Non : les bacs n’acceptent explicitement ni les billets TNW ou CFF, ni la BaselCard, et la traversée se paie à bord, 2 CHF pour un adulte. Gardez quelques francs en pièces si une traversée fait partie de votre journée, car aucun des titres de transport vendus en ville n’y fonctionne.',
        de: 'Nein: Die Fähren akzeptieren ausdrücklich weder TNW- noch SBB-Billette, noch die BaselCard, und die Überfahrt wird an Bord bezahlt, CHF 2 für Erwachsene. Halten Sie ein paar Franken in Münzen bereit, wenn eine Fährüberfahrt zu Ihrem Tag gehört, denn keines der in der Stadt verkauften Tickets gilt an Bord.',
      },
    },
    {
      q: { en: 'Is the Münster free to visit?', fr: 'L’entrée au Münster est-elle gratuite ?', de: 'Ist der Eintritt ins Münster kostenlos?' },
      a: {
        en: 'Yes, within its opening hours, which shorten in winter and during Fasnacht. Climbing the towers, about 250 steps, costs CHF 6 for adults and CHF 4 reduced, free under 14, so budget only for the climb, and check the current hours before you plan your visit around it.',
        fr: 'Oui, pendant ses horaires d’ouverture, qui se réduisent en hiver et pendant Fasnacht. Grimper dans les tours, environ 250 marches, coûte 6 CHF pour un adulte et 4 CHF en tarif réduit, gratuit pour les moins de 14 ans : ne budgétez donc que l’ascension, et vérifiez les horaires en vigueur avant d’organiser votre visite autour.',
        de: 'Ja, innerhalb der Öffnungszeiten, die im Winter und während der Fasnacht kürzer ausfallen. Der Turmaufstieg, rund 250 Stufen, kostet CHF 6 für Erwachsene und CHF 4 reduziert, gratis unter 14 Jahren: Budgetieren Sie also nur den Aufstieg, und prüfen Sie die aktuellen Öffnungszeiten, bevor Sie Ihren Besuch danach planen.',
      },
    },
    {
      q: { en: 'When is Kunstmuseum Basel’s collection free?', fr: 'Quand la collection du Kunstmuseum Basel est-elle gratuite ?', de: 'Wann ist die Sammlung des Kunstmuseum Basel gratis?' },
      a: {
        en: 'Tuesday, Thursday and Friday 17:00-18:00, Wednesday 17:00-20:00, and every first Sunday of the month. Plan a late-afternoon visit around one of these windows and you see the permanent collection without buying a ticket, though a special exhibition next to it is charged separately.',
        fr: 'Le mardi, jeudi et vendredi de 17h00 à 18h00, le mercredi de 17h00 à 20h00, et chaque premier dimanche du mois. Planifiez une visite en fin d’après-midi autour de l’un de ces créneaux et vous voyez la collection permanente sans acheter de billet, même si une exposition temporaire à côté reste payante séparément.',
        de: 'Dienstag, Donnerstag und Freitag 17.00 bis 18.00 Uhr, Mittwoch 17.00 bis 20.00 Uhr, und jeden ersten Sonntag im Monat. Planen Sie einen Besuch am späten Nachmittag um eines dieser Fenster herum, und Sie sehen die Sammlung ohne Ticket, auch wenn eine Sonderausstellung daneben separat kostet.',
      },
    },
    {
      q: { en: 'How do the four Basel ferries work?', fr: 'Comment fonctionnent les quatre bacs de Bâle ?', de: 'Wie funktionieren die vier Basler Fähren?' },
      a: {
        en: 'They are guided across the Rhine by an overhead cable, using only the current for power, no motor: Wild Maa, Leu, Vogel Gryff and Ueli, one per historic crossing point. Because they run on the current alone, they are the first service suspended once the Rhine rises above 7.90 m, so keep the Mittlere Brücke in mind as the backup.',
        fr: 'Ils sont guidés à travers le Rhin par un câble aérien, mus uniquement par le courant, sans moteur : le Wild Maa, le Leu, le Vogel Gryff et l’Ueli, un par point de passage historique. Comme ils ne fonctionnent qu’au courant, ce sont les premiers services suspendus dès que le Rhin dépasse 7,90 m, gardez donc le Mittlere Brücke en tête comme solution de repli.',
        de: 'Sie werden von einem Seil über den Rhein geführt, angetrieben allein von der Strömung, ohne Motor: Wild Maa, Leu, Vogel Gryff und Ueli, je einer pro historischer Übergangsstelle. Weil sie nur mit der Strömung fahren, sind sie der erste Betrieb, der eingestellt wird, sobald der Rhein über 7,90 m steigt, behalten Sie also die Mittlere Brücke als Ausweichroute im Kopf.',
      },
    },
  ],
  neighbours: ['zurich', 'bern', 'fribourg', 'neuchatel'],
}
