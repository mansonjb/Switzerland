import type { L } from '@/lib/i18n'

// Every figure on this page is in data/SOURCES-swiss-travel-pass.md (official pages, checked 21 September 2026).

export const stp = {
  meta: {
    title: { en: 'Swiss Travel Pass 2026: prices, what it covers, is it worth it', fr: 'Swiss Travel Pass 2026 : prix, ce qu’il couvre, est-il rentable', de: 'Swiss Travel Pass 2026: Preise, was er abdeckt, lohnt er sich' } as L,
    description: {
      en: 'The 2026 Swiss Travel Pass prices, consecutive and Flex, what it includes, the three mountains it covers in full and when the Half Fare Card wins instead.',
      fr: 'Les prix 2026 du Swiss Travel Pass, jours consécutifs et Flex, ce qu’il inclut, les trois montagnes entièrement couvertes et quand le demi-tarif gagne.',
      de: 'Die Swiss-Travel-Pass-Preise 2026, Tage am Stück und Flex, was er einschliesst, die drei voll abgedeckten Berge und wann sich das Halbtax mehr lohnt.',
    } as L,
  },
  h1: { en: 'Swiss Travel Pass: what it covers and whether it pays off', fr: 'Swiss Travel Pass : ce qu’il couvre et s’il est rentable', de: 'Swiss Travel Pass: was er abdeckt und ob er sich lohnt' } as L,
  lede: {
    en: 'One ticket for trains, buses and boats across Switzerland, city transport in more than 90 towns and entry to more than 500 museums. Whether it pays off depends on how much you move and which mountains you want to climb.',
    fr: 'Un seul billet pour les trains, cars et bateaux de toute la Suisse, les transports urbains de plus de 90 villes et l’entrée de plus de 500 musées. Sa rentabilité dépend de la distance que vous parcourez et des montagnes que vous voulez gravir.',
    de: 'Ein Ticket für Bahn, Bus und Schiff in der ganzen Schweiz, den Stadtverkehr in über 90 Orten und den Eintritt in mehr als 500 Museen. Ob er sich lohnt, hängt davon ab, wie viel Sie unterwegs sind und auf welche Berge Sie wollen.',
  } as L,
  quick: {
    en: 'Take the pass if you change base during the trip and ride long train legs on most days. If you stay in one village and mostly go up its mountains, the Swiss Half Fare Card at CHF 150 for a month often works out cheaper, since mountain railways such as Pilatus and the Gornergrat give the same 50% with either card.',
    fr: 'Prenez le pass si vous changez de base pendant le voyage et faites de longs trajets en train la plupart des jours. Si vous restez dans un seul village et montez surtout sur ses sommets, la carte demi-tarif à CHF 150 pour un mois revient souvent moins cher, car des remontées comme le Pilatus et le Gornergrat accordent les mêmes 50 % avec l’une ou l’autre carte.',
    de: 'Nehmen Sie den Pass, wenn Sie während der Reise den Standort wechseln und an den meisten Tagen lange Zugstrecken fahren. Bleiben Sie in einem Ort und fahren vor allem auf dessen Berge, ist die Halbtax-Karte für CHF 150 pro Monat oft günstiger, denn Bergbahnen wie Pilatus und Gornergrat geben mit beiden Karten dieselben 50 %.',
  } as L,
  covers: {
    title: { en: 'What the pass covers', fr: 'Ce que couvre le pass', de: 'Was der Pass abdeckt' } as L,
    items: [
      {
        v: '∞',
        t: { en: 'Trains, buses and boats', fr: 'Trains, cars et bateaux', de: 'Bahn, Bus und Schiff' } as L,
        d: { en: 'Unlimited travel on the Swiss public transport network, panorama trains included at the base fare.', fr: 'Voyages illimités sur le réseau suisse des transports publics, trains panoramiques compris au tarif de base.', de: 'Unbeschränkt auf dem Schweizer ÖV-Netz, Panoramazüge zum Grundtarif inbegriffen.' } as L,
      },
      {
        v: '90+',
        t: { en: 'Towns and cities', fr: 'Villes', de: 'Städte und Orte' } as L,
        d: { en: 'Trams and buses in more than 90 towns and cities, so the airport transfer and city hops cost nothing extra.', fr: 'Trams et bus dans plus de 90 villes : le trajet depuis l’aéroport et les déplacements en ville ne coûtent rien de plus.', de: 'Tram und Bus in über 90 Städten und Orten, Flughafentransfer und Stadtfahrten kosten also nichts extra.' } as L,
      },
      {
        v: '500+',
        t: { en: 'Museums', fr: 'Musées', de: 'Museen' } as L,
        d: { en: 'Free entry to more than 500 museums, from the Château de Chillon and the Swiss National Museum to the Olympic Museum and Gruyères Castle.', fr: 'Entrée libre dans plus de 500 musées, du château de Chillon et du Musée national suisse au Musée olympique et au château de Gruyères.', de: 'Freier Eintritt in über 500 Museen, vom Schloss Chillon und dem Landesmuseum bis zum Olympischen Museum und Schloss Greyerz.' } as L,
      },
      {
        v: '3',
        t: { en: 'Mountains fully included', fr: 'Montagnes entièrement incluses', de: 'Berge voll inbegriffen' } as L,
        d: { en: 'Rigi, Stanserhorn and Stoos cost nothing more with the pass. On other mountain excursions it gives up to 50% off.', fr: 'Le Rigi, le Stanserhorn et le Stoos ne coûtent rien de plus avec le pass. Sur les autres excursions en montagne, il donne jusqu’à 50 % de réduction.', de: 'Rigi, Stanserhorn und Stoos kosten mit dem Pass nichts zusätzlich. Auf anderen Bergausflügen gibt er bis zu 50 % Rabatt.' } as L,
      },
    ],
    watch: {
      en: 'What it does not cover: seat reservations on the panorama trains. On the Glacier Express the reservation is CHF 54 per person and journey, mandatory, and no travel card reduces it.',
      fr: 'Ce qu’il ne couvre pas : les réservations de place dans les trains panoramiques. Sur le Glacier Express, la réservation coûte CHF 54 par personne et par trajet, elle est obligatoire et aucune carte ne la réduit.',
      de: 'Was er nicht abdeckt: Sitzplatzreservierungen in den Panoramazügen. Im Glacier Express kostet die obligatorische Reservierung CHF 54 pro Person und Fahrt, und keine Karte ermässigt sie.',
    } as L,
  },
  prices: {
    title: { en: '2026 prices', fr: 'Prix 2026', de: 'Preise 2026' } as L,
    consecutive: { en: 'Swiss Travel Pass, consecutive days', fr: 'Swiss Travel Pass, jours consécutifs', de: 'Swiss Travel Pass, aufeinanderfolgende Tage' } as L,
    flex: { en: 'Swiss Travel Pass Flex, days of your choice within one month', fr: 'Swiss Travel Pass Flex, jours au choix dans un délai d’un mois', de: 'Swiss Travel Pass Flex, frei wählbare Tage innerhalb eines Monats' } as L,
    days: { en: 'Days', fr: 'Jours', de: 'Tage' } as L,
    adult2: { en: '2nd class', fr: '2e classe', de: '2. Klasse' } as L,
    adult1: { en: '1st class', fr: '1re classe', de: '1. Klasse' } as L,
    youth2: { en: 'Youth, 2nd', fr: 'Jeune, 2e', de: 'Jugend, 2.' } as L,
    youth1: { en: 'Youth, 1st', fr: 'Jeune, 1re', de: 'Jugend, 1.' } as L,
    note: {
      en: 'CHF per person, 2026 fares. Youth means up to the 25th birthday. Children from 6 to 15 travel free with a parent who holds a pass (Swiss Family Card, issued free), and children under 6 need no ticket at all.',
      fr: 'CHF par personne, tarifs 2026. « Jeune » signifie jusqu’au 25e anniversaire. Les enfants de 6 à 15 ans voyagent gratuitement avec un parent titulaire d’un pass (Swiss Family Card, délivrée gratuitement), et les moins de 6 ans n’ont besoin d’aucun billet.',
      de: 'CHF pro Person, Tarife 2026. Jugend heisst bis zum 25. Geburtstag. Kinder von 6 bis 15 Jahren reisen gratis mit einem Elternteil mit Pass (Swiss Family Card, kostenlos), Kinder unter 6 brauchen gar kein Billett.',
    } as L,
  },
  consecutive: [
    ['3', '254', '405', '179', '285'],
    ['4', '309', '492', '218', '346'],
    ['6', '399', '634', '282', '447'],
    ['8', '439', '697', '311', '492'],
    ['15', '499', '787', '356', '557'],
  ],
  flex: [
    ['3', '289', '461', '204', '335'],
    ['4', '349', '555', '246', '390'],
    ['6', '424', '674', '300', '475'],
    ['8', '459', '729', '325', '514'],
    ['15', '519', '819', '370', '580'],
  ],
  half: {
    title: { en: 'Pass or Half Fare Card?', fr: 'Pass ou carte demi-tarif ?', de: 'Pass oder Halbtax?' } as L,
    paras: [
      {
        en: 'The Swiss Half Fare Card costs CHF 150 and runs for one whole month. It gives up to 50% off trains, buses and boats, panorama trains, mountain railways and gondolas, and city transport in the same 90-plus towns. It is sold only to visitors who live outside Switzerland and Liechtenstein, and it comes with the free Family Card for children from 6 to 15.',
        fr: 'La carte demi-tarif pour visiteurs coûte CHF 150 et vaut un mois entier. Elle donne jusqu’à 50 % de réduction sur les trains, cars et bateaux, les trains panoramiques, les remontées mécaniques et les transports urbains des mêmes 90 villes et plus. Elle n’est vendue qu’aux visiteurs qui résident hors de Suisse et du Liechtenstein, et elle donne droit à la Family Card gratuite pour les enfants de 6 à 15 ans.',
        de: 'Die Swiss Half Fare Card kostet CHF 150 und gilt einen ganzen Monat. Sie gibt bis zu 50 % Rabatt auf Bahn, Bus und Schiff, Panoramazüge, Bergbahnen und Gondeln sowie den Stadtverkehr in denselben über 90 Orten. Sie wird nur an Gäste mit Wohnsitz ausserhalb der Schweiz und Liechtensteins verkauft und schliesst die kostenlose Family Card für Kinder von 6 bis 15 ein.',
      } as L,
      {
        en: 'On the mountains the two cards often give the same thing: Pilatus and the Gornergrat take 50% off with either one. So the pass only pulls ahead on the valley legs. Add up your train journeys between bases, halve them for the Half Fare Card, add CHF 150, and compare with the pass price for your number of days.',
        fr: 'En montagne, les deux cartes donnent souvent la même chose : le Pilatus et le Gornergrat accordent 50 % avec l’une comme avec l’autre. Le pass ne prend donc l’avantage que sur les trajets de vallée. Additionnez vos trajets en train entre les bases, divisez par deux pour la carte demi-tarif, ajoutez CHF 150, et comparez avec le prix du pass pour votre nombre de jours.',
        de: 'Am Berg bringen die beiden Karten oft dasselbe: Pilatus und Gornergrat geben mit beiden 50 %. Der Pass liegt also nur bei den Talfahrten vorn. Zählen Sie Ihre Zugfahrten zwischen den Standorten zusammen, halbieren Sie sie für die Halbtax, rechnen Sie CHF 150 dazu und vergleichen Sie mit dem Passpreis für Ihre Anzahl Tage.',
      } as L,
    ],
  },
  examples: {
    title: { en: 'Real fares, destination by destination', fr: 'Des tarifs réels, destination par destination', de: 'Echte Tarife, Ort für Ort' } as L,
    intro: {
      en: 'Fares checked with the operators for our guides, with and without the pass. Each guide details what the pass does on every leg.',
      fr: 'Des tarifs vérifiés auprès des exploitants pour nos guides, avec et sans le pass. Chaque guide détaille ce que fait le pass sur chaque tronçon.',
      de: 'Bei den Betreibern für unsere Reiseführer geprüfte Tarife, mit und ohne Pass. Jeder Reiseführer zeigt Strecke für Strecke, was der Pass bewirkt.',
    } as L,
    without: { en: 'Without', fr: 'Sans', de: 'Ohne' } as L,
    with: { en: 'With the pass', fr: 'Avec le pass', de: 'Mit Pass' } as L,
    pilatus: { en: 'Pilatus, Kriens to Pilatus Kulm and back, adult', fr: 'Pilatus, Kriens ⇄ Pilatus Kulm, adulte', de: 'Pilatus, Kriens ⇄ Pilatus Kulm, Erwachsene' } as L,
    guide: { en: 'See the guide', fr: 'Voir le guide', de: 'Zum Reiseführer' } as L,
  },
  buy: {
    title: { en: 'Buying and activating', fr: 'Acheter et activer', de: 'Kaufen und aktivieren' } as L,
    items: [
      {
        t: { en: 'Where to buy', fr: 'Où l’acheter', de: 'Wo kaufen' } as L,
        d: { en: 'Online on SBB.ch or at a staffed ticket office in Switzerland, up to 11 months ahead.', fr: 'En ligne sur SBB.ch ou à un guichet desservi en Suisse, jusqu’à 11 mois à l’avance.', de: 'Online auf SBB.ch oder an einem bedienten Schalter in der Schweiz, bis 11 Monate im Voraus.' } as L,
      },
      {
        t: { en: 'On your phone', fr: 'Sur votre téléphone', de: 'Auf dem Handy' } as L,
        d: { en: 'The consecutive pass shows in the SBB Mobile app only if you bought it on SBB.ch while signed in, with the same login. A pass bought as a guest or through a reseller cannot be added later.', fr: 'Le pass à jours consécutifs n’apparaît dans l’app SBB Mobile que s’il a été acheté sur SBB.ch en étant connecté, avec le même identifiant. Un pass acheté en invité ou chez un revendeur ne peut pas être ajouté après coup.', de: 'Der Pass für aufeinanderfolgende Tage erscheint in der SBB-Mobile-App nur, wenn Sie ihn eingeloggt auf SBB.ch gekauft haben, mit demselben Login. Ein als Gast oder bei einem Wiederverkäufer gekaufter Pass lässt sich nachträglich nicht hinzufügen.' } as L,
      },
      {
        t: { en: 'Flex days', fr: 'Jours Flex', de: 'Flex-Tage' } as L,
        d: { en: 'With the Flex pass, activate each travel day at activateyourpass.com before the first journey of that day. A day you have not activated is not covered.', fr: 'Avec le pass Flex, activez chaque jour de voyage sur activateyourpass.com avant le premier trajet de la journée. Un jour non activé n’est pas couvert.', de: 'Beim Flex-Pass jeden Reisetag vor der ersten Fahrt des Tages auf activateyourpass.com aktivieren. Ein nicht aktivierter Tag ist nicht gedeckt.' } as L,
      },
    ],
    cta: { en: 'Buy on SBB.ch', fr: 'Acheter sur SBB.ch', de: 'Auf SBB.ch kaufen' } as L,
  },
  faq: [
    {
      q: { en: 'Which mountains are free with the Swiss Travel Pass?', fr: 'Quelles montagnes sont gratuites avec le Swiss Travel Pass ?', de: 'Welche Berge sind mit dem Swiss Travel Pass gratis?' } as L,
      a: { en: 'Three: the Rigi, the Stanserhorn and Stoos, with nothing more to pay. On other mountain railways, such as Pilatus or the Gornergrat, the pass gives up to 50% off, so plan those as a separate cost.', fr: 'Trois : le Rigi, le Stanserhorn et le Stoos, sans rien payer de plus. Sur d’autres remontées, comme le Pilatus ou le Gornergrat, le pass donne jusqu’à 50 % de réduction : prévoyez-les comme un coût à part.', de: 'Drei: Rigi, Stanserhorn und Stoos, ohne Aufpreis. Auf anderen Bergbahnen, etwa Pilatus oder Gornergrat, gibt der Pass bis zu 50 % Rabatt, planen Sie diese also als eigene Kosten ein.' } as L,
    },
    {
      q: { en: 'Does the pass cover the Glacier Express?', fr: 'Le pass couvre-t-il le Glacier Express ?', de: 'Deckt der Pass den Glacier Express ab?' } as L,
      a: { en: 'The travel itself, yes, but not the seat reservation, which is mandatory and costs CHF 54 per person and journey in 1st or 2nd class. No travel card reduces that fee, so add it to the budget.', fr: 'Le trajet lui-même, oui, mais pas la réservation de place, obligatoire, qui coûte CHF 54 par personne et par trajet en 1re comme en 2e classe. Aucune carte ne réduit ce montant : ajoutez-le au budget.', de: 'Die Fahrt selbst ja, die obligatorische Sitzplatzreservierung nicht: Sie kostet CHF 54 pro Person und Fahrt in der 1. wie der 2. Klasse. Keine Karte ermässigt sie, also im Budget einplanen.' } as L,
    },
    {
      q: { en: 'Do children need a pass?', fr: 'Les enfants ont-ils besoin d’un pass ?', de: 'Brauchen Kinder einen Pass?' } as L,
      a: { en: 'Children under 6 need no ticket at all. From 6 to 15 they travel free with a parent holding a Swiss Travel Pass or Half Fare Card, on the free Swiss Family Card, so a family usually buys passes for the adults only.', fr: 'Les moins de 6 ans n’ont besoin d’aucun billet. De 6 à 15 ans, ils voyagent gratuitement avec un parent titulaire d’un Swiss Travel Pass ou d’une carte demi-tarif, grâce à la Swiss Family Card gratuite : une famille n’achète donc en général des pass que pour les adultes.', de: 'Kinder unter 6 brauchen kein Billett. Von 6 bis 15 reisen sie gratis mit einem Elternteil mit Swiss Travel Pass oder Halbtax, auf der kostenlosen Swiss Family Card; eine Familie kauft also meist nur Pässe für die Erwachsenen.' } as L,
    },
    {
      q: { en: 'Consecutive or Flex?', fr: 'Jours consécutifs ou Flex ?', de: 'Aufeinanderfolgend oder Flex?' } as L,
      a: { en: 'The Flex pass lets you pick your travel days within one month, for a few francs more: CHF 289 against CHF 254 for three days in 2nd class. It pays off when you spend quiet days in one village between long transfers, as long as you activate each travel day before your first journey.', fr: 'Le pass Flex permet de choisir ses jours de voyage dans un délai d’un mois, pour un peu plus cher : CHF 289 contre CHF 254 pour trois jours en 2e classe. Il devient intéressant quand on passe des journées tranquilles dans un village entre de longs trajets, à condition d’activer chaque jour de voyage avant le premier départ.', de: 'Mit dem Flex-Pass wählen Sie Ihre Reisetage innerhalb eines Monats, gegen etwas Aufpreis: CHF 289 statt CHF 254 für drei Tage in der 2. Klasse. Er lohnt sich, wenn Sie zwischen langen Fahrten ruhige Tage in einem Ort verbringen, sofern Sie jeden Reisetag vor der ersten Fahrt aktivieren.' } as L,
    },
    {
      q: { en: 'Can I use the Half Fare Card if I live in Switzerland?', fr: 'Puis-je prendre la carte demi-tarif visiteurs si j’habite en Suisse ?', de: 'Kann ich die Swiss Half Fare Card nutzen, wenn ich in der Schweiz wohne?' } as L,
      a: { en: 'No. The CHF 150 Swiss Half Fare Card is sold only to people who live outside Switzerland and Liechtenstein, and you must carry your passport or ID for inspection.', fr: 'Non. La carte demi-tarif à CHF 150 pour visiteurs n’est vendue qu’aux personnes résidant hors de Suisse et du Liechtenstein, et il faut avoir son passeport ou sa pièce d’identité sur soi lors des contrôles.', de: 'Nein. Die Swiss Half Fare Card für CHF 150 wird nur an Personen mit Wohnsitz ausserhalb der Schweiz und Liechtensteins verkauft, und Pass oder ID müssen bei Kontrollen dabei sein.' } as L,
    },
  ],
}
