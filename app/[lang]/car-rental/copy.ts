import type { L, Locale } from '@/lib/i18n'

export type Section = { id?: string; title: string; paras: string[] }

export type CarCopy = {
  intro: string[]
  form: { title: string; note: string; disclosure: string }
  carFree: { title: string; paras: string[]; chips: string }
  sections: Section[]
  faqTitle: string
}

/** Every figure here is sourced in data/SOURCES-car-rental.md. */
export const carCopy: Record<Locale, CarCopy> = {
  en: {
    intro: [
      'A car is not the obvious choice in Switzerland, and that is exactly why the question deserves a page. The trains reach almost every village in this guide, several of those villages ban cars altogether, and a week of city parking can cost more than the rental itself. Yet the moment your trip stops being one base and becomes a route, over passes, along lakes, into side valleys with four buses a day, the car earns its place.',
      'This page does two things. It lets you compare rental prices for your dates, and it tells you what nobody mentions at the counter: the vignette you need before you touch a motorway, the rules that catch visitors out, what happens to your route when the high passes close, the trains that carry cars under the Alps, and where you actually leave the car when your hotel is in a car-free village.',
    ],
    form: {
      title: 'Compare rental cars',
      note: 'Enter the pick-up place and your dates: the form compares the rental companies and you book on the partner site, at its price.',
      disclosure: 'Search form provided by GetRentacar through Travelpayouts. If you book through it we may earn a commission, and you pay the same price.',
    },
    carFree: {
      title: 'Where the car cannot follow you',
      chips: 'Car-free villages with a guide already online:',
      paras: [
        'Several destinations in this guide are car-free, and the rule is enforced at the road, not at the hotel door. Zermatt is the clearest case: private vehicles go no further than Täsch, where the Matterhorn Terminal holds 2100 covered spaces, with more than 1000 further spaces run by private operators in the village, and the shuttle train leaves every 20 minutes for a 12 minute run up to Zermatt. Saas-Fee stops you at the entrance to the village, where a multi-storey car park and an open car park take over. For Riederalp you leave the car down at Mörel-Filet, for the Rigi villages at the valley stations in Weggis or Vitznau.',
        'None of this makes a car pointless, but it changes the arithmetic. You are paying for the rental, for the valley car park by the day, and for the cable car or shuttle tickets that replace the last few kilometres. If your whole holiday sits in one of these villages, the train from the airport is usually the simpler answer. If the village is one stop on a longer loop, park below and take the mountain railway like everyone else.',
      ],
    },
    sections: [
      {
        id: 'need',
        title: 'Do you actually need a car?',
        paras: [
          'Start with the shape of the trip rather than the price. One base, reached by rail, with lifts and buses at the door, is the case where a rental spends the week in a garage: the Swiss Travel Pass covers trains, buses and boats, and the table on each destination page shows what it covers or discounts on the local mountain railways, so you can compare that figure against a week of rental, fuel and parking before you decide.',
          'A car changes the trip when the trip moves. Linking the Bernese Oberland to the Valais and then to Ticino in ten days, sleeping in a hamlet above the valley floor, starting a hike at the trailhead at seven in the morning, carrying ski gear for a family of four, coming back from a restaurant in the next village at eleven at night: these are the moments when the timetable stops helping and the car starts.',
          'There is also a middle route that visitors rarely consider. Take the train for the alpine part of the holiday, where the railway is the fastest way up anyway, then rent for the two or three days you spend crossing the country. Rental days are the expensive unit here, so buying only the days you use is usually cheaper than keeping a car parked while you are on a glacier.',
        ],
      },
      {
        id: 'pick-up',
        title: 'Where to pick the car up, and where to drop it',
        paras: [
          'Airports are the default: you land, you collect, you drive out. City branches are the alternative, and they suit the middle-route plan, because you can arrive by train and pick the car up in the middle of your stay. Check opening hours before you count on one, since town branches often close early on Saturday and stay shut on Sunday, while airport desks keep longer hours.',
          'A one-way rental, picking up in Geneva and dropping in Zurich, is the natural way to cross the country without doubling back, but it is rarely free: the one-way fee is set by the company and can be worth more than the extra train ticket it saves you. Ask for it as a figure, not as a policy, before you book.',
          'If your hotel is in a car-free village, plan the last leg before you leave the counter. You want to know which valley station you park at, what the day rate is there, and when the last train or cable car goes up, because a late landing plus a slow motorway can put you at the terminal after the mountain has closed for the night.',
        ],
      },
      {
        id: 'vignette',
        title: 'The motorway vignette, explained properly',
        paras: [
          'Switzerland does not charge tolls by the kilometre. Instead, every vehicle up to 3.5 tonnes that uses a motorway or an expressway carries a vignette that costs CHF 40. There is no day, week or month version: one price, whether you drive for an afternoon or a year. The vignette is valid from 1 December of the previous year to 31 January of the following one, which gives it fourteen months of life.',
          'Since August 2023 there are two forms. The classic sticker goes on the windscreen, and it belongs to that windscreen: it cannot be moved to another car. The e-vignette is bought online through the Via portal of the Federal Office for Customs and Border Security and is attached to the number plate instead, which is why nothing has to be stuck, scraped or replaced. Both cost the same.',
          'A trailer or a caravan needs its own vignette, even when the car pulling it already has one. Driving on a motorway without a vignette costs a CHF 200 fine plus the CHF 40 you were trying to avoid. Ordinary roads, including most of the pass roads that make the Alps worth driving, need no vignette at all, but a country crossing on them takes hours longer.',
          'A car rented in Switzerland normally comes with the vignette already valid, and it is worth confirming that when you collect it. If you rent across the border, in France, Germany, Italy or Austria, and drive into Switzerland, assume the car has nothing and buy the e-vignette before the first motorway sign.',
        ],
      },
      {
        id: 'rules',
        title: 'The rules that catch visitors out',
        paras: [
          'Speed limits are 120 km/h on motorways, 100 on expressways, 80 on roads outside built-up areas and 50 inside them, unless a sign says otherwise, and signs say otherwise often in villages and on mountain roads. Enforcement starts at the first kilometres per hour over the limit, cameras are common and fixed, and there is no informal margin to count on.',
          'Dipped headlights or daytime running lights have been compulsory day and night, all year, since 1 January 2014. It applies in bright July sunshine as much as in a tunnel, and it is the single rule visitors forget most often.',
          'The blood alcohol limit is 0.5 grams per kilogram. Drivers in their first years of licence and professional drivers must be alcohol free, which in practice means staying below 0.1. In a country where a mountain restaurant serves wine at lunch and the road home has hairpins, the safe version of this rule is simply not to drink and drive at all.',
          'Two habits are worth adding because they are local rather than legal. Postal buses on narrow mountain roads take the line they need and you give way to them. And on a single-track pass road, the vehicle going uphill has the right of way, which means reversing down to the last passing place is your job more often than you would like.',
        ],
      },
      {
        id: 'winter',
        title: 'Winter driving: tyres, chains and the passes that close',
        paras: [
          'Switzerland has no legal winter tyre obligation. What the law demands is that the driver keeps the vehicle under control and that the car is adapted to the conditions, which amounts to the same thing on a snowy morning above 1000 metres: an ill-equipped car in an accident becomes the driver’s problem, financially as well as legally. So ask the rental company, in writing if you can, whether the car has winter tyres for your dates.',
          'Snow chains are a separate rule. A round blue sign with a chain symbol means chains are compulsory on that stretch of road, and it appears where gradients make anything else pointless. If your hotel sits above a road that carries that sign, ask the company whether chains are in the boot and whether you are allowed to fit them.',
          'The high passes close under the autumn snow and reopen in late spring, which quietly rewrites any route planned on a summer map. In 2026 the Gotthard reopened on 8 May, the Furka, Grimsel and Nufenen on 29 May, and the Susten in mid-June. The Bernina, Julier, Maloja, Ofenpass, Simplon, Brünig and Lukmanier are kept open through the winter, weather permitting, which is what makes the Engadine and the south reachable at all in February.',
          'The practical consequence comes before you book the hotel, not after. A base two valleys away is thirty minutes in August and a long detour in January, so check whether the pass between them is open for your dates before the rooms are paid for.',
        ],
      },
      {
        id: 'car-trains',
        title: 'Car trains: driving under the Alps',
        paras: [
          'When a pass closes, the railway takes the car through the mountain instead. You drive on to a flat wagon, stay in the car, and come out the other side of the range. The Vereina is the busiest of them: from Selfranga near Klosters to Sagliains in the Lower Engadine, through a 19 kilometre tunnel, eighteen minutes, departures every half hour, and no reservation possible, so you queue and you go.',
          'The Lötschberg shuttle runs all year between Kandersteg and Goppenstein and is the short way from the Bernese Oberland into the Valais. The Furka car train, between Realp and Oberwald, keeps the Andermatt side connected to the upper Valais while the pass above it is shut for the winter. BLS also runs the Simplon shuttle towards Italy.',
          'Treat these as roads rather than as trains. There is no booking to make and no seat to choose, the fare is paid at the terminal, and the queue on a February Saturday behaves like a queue at a toll. The Gotthard road tunnel, open all year, is the one exception where the queue can be measured in hours on holiday departure days, and the car train through the Furka or the Lötschberg is often the calmer way to reach the same valleys.',
        ],
      },
      {
        id: 'parking',
        title: 'Parking, from city blue zones to valley terminals',
        paras: [
          'In towns, the colour of the bay tells you the rule. A blue zone is free for a limited time provided a blue parking disc sits behind your windscreen, Monday to Saturday during the day, and free in the evening and on Sunday. A white zone is paid, with the tariff and maximum duration on the sign. Discs are handed out free at petrol stations, police posts and many tourist offices, and a rental car often has one in the glovebox.',
          'City hotels rarely include parking, and the garage they point you to is charged by the day at city rates, which is the line most visitors leave out of the budget. Three nights in Zurich or Lucerne with a car can cost more in parking than the train tickets you would have bought instead.',
          'In the mountains, parking is a piece of infrastructure rather than a convenience. The valley terminals below the car-free villages are multi-storey buildings sized for a resort, they charge by the day, and in high season the covered levels fill. Book ahead where the terminal allows it, and budget the week, not the night.',
        ],
      },
      {
        id: 'checklist',
        title: 'What to settle before you book',
        paras: [
          'Ask about the young driver surcharge if anyone in the party is under 25, since minimum ages and extra fees are set by each company rather than by law. Check whose name the credit card has to be in, because the deposit is blocked on the driver’s card and a partner’s card is regularly refused at the counter.',
          'Say where you intend to drive. Crossing into Italy, France, Germany or Austria is usually allowed, sometimes for a fee, and occasionally excluded for certain categories, and the insurance follows the same rules as the permission. If the plan includes a car train, confirm that nothing in the contract forbids it.',
          'For a winter booking, put winter tyres, chains and a ski rack on the same list, and ask what happens if you return the car with snow damage. For a summer booking, the questions are simpler: fuel policy, one-way fee, and whether an automatic is guaranteed rather than merely requested.',
        ],
      },
    ],
    faqTitle: 'Car rental in Switzerland: frequent questions',
  },
  fr: {
    intro: [
      'La voiture n’est pas le choix évident en Suisse, et c’est précisément pour ça que la question mérite une page. Le train dessert presque tous les villages de ce guide, plusieurs de ces villages interdisent purement et simplement la voiture, et une semaine de parking en ville peut coûter plus cher que la location elle-même. Mais dès que le voyage cesse d’être un séjour dans une base pour devenir un itinéraire, par les cols, le long des lacs, dans des vallées latérales où passent quatre bus par jour, la voiture reprend tout son sens.',
      'Cette page fait deux choses. Elle vous laisse comparer les prix de location pour vos dates, et elle dit ce que personne ne mentionne au comptoir : la vignette à avoir avant de toucher une autoroute, les règles qui piègent les visiteurs, ce que deviennent vos itinéraires quand les grands cols ferment, les trains qui passent les voitures sous les Alpes, et où l’on laisse vraiment la voiture quand l’hôtel est dans un village sans voiture.',
    ],
    form: {
      title: 'Comparer les voitures de location',
      note: 'Indiquez le lieu de prise en charge et vos dates : le formulaire compare les loueurs et vous réservez sur le site partenaire, à son prix.',
      disclosure: 'Formulaire de recherche fourni par GetRentacar via Travelpayouts. Si vous réservez par ce biais nous pouvons toucher une commission, et vous payez le même prix.',
    },
    carFree: {
      title: 'Là où la voiture ne vous suit pas',
      chips: 'Les villages sans voiture dont le guide est déjà en ligne :',
      paras: [
        'Plusieurs destinations de ce guide sont sans voiture, et la règle s’applique sur la route, pas devant l’hôtel. Zermatt est le cas le plus net : les véhicules privés ne vont pas plus loin que Täsch, où le Matterhorn Terminal offre 2100 places couvertes, avec plus de 1000 places supplémentaires exploitées par des privés dans le village, et la navette ferroviaire part toutes les 20 minutes pour 12 minutes de montée jusqu’à Zermatt. Saas-Fee vous arrête à l’entrée du village, où un parking couvert et un parking en plein air prennent le relais. Pour Riederalp, on laisse la voiture en bas à Mörel-Filet, pour les villages du Rigi aux gares de départ de Weggis ou de Vitznau.',
        'Rien de tout cela ne rend la voiture inutile, mais le calcul change. Vous payez la location, le parking de vallée à la journée, et les billets de train ou de téléphérique qui remplacent les derniers kilomètres. Si tout le séjour tient dans l’un de ces villages, le train depuis l’aéroport est en général la réponse la plus simple. Si le village n’est qu’une étape d’une boucle plus longue, garez-vous en bas et montez en train de montagne comme tout le monde.',
      ],
    },
    sections: [
      {
        id: 'need',
        title: 'Avez-vous vraiment besoin d’une voiture ?',
        paras: [
          'Commencez par la forme du voyage plutôt que par le prix. Une seule base, atteinte en train, avec remontées et bus à la porte, c’est le cas où la location passe la semaine au garage : le Swiss Travel Pass couvre trains, bus et bateaux, et le tableau de chaque page destination indique ce qu’il couvre ou réduit sur les remontées du coin, de quoi comparer ce montant à une semaine de location, de carburant et de parking avant de trancher.',
          'La voiture change le voyage quand le voyage bouge. Relier l’Oberland bernois au Valais puis au Tessin en dix jours, dormir dans un hameau au-dessus du fond de vallée, partir en randonnée depuis le départ du sentier à sept heures du matin, transporter le matériel de ski d’une famille de quatre, rentrer à onze heures du soir d’un restaurant du village voisin : ce sont les moments où l’horaire cesse d’aider et où la voiture commence.',
          'Il existe aussi une voie intermédiaire à laquelle les visiteurs pensent rarement. Prenez le train pour la partie alpine du séjour, où le rail est de toute façon le moyen le plus rapide de monter, puis louez pour les deux ou trois jours de traversée du pays. Ici l’unité chère est le jour de location : n’acheter que les jours utiles revient en général moins cher que de laisser une voiture garée pendant que vous êtes sur un glacier.',
        ],
      },
      {
        id: 'pick-up',
        title: 'Où prendre la voiture, et où la rendre',
        paras: [
          'L’aéroport est le réflexe : on atterrit, on récupère, on part. Les agences de ville sont l’alternative, et elles vont bien avec la voie intermédiaire, puisque vous pouvez arriver en train et prendre la voiture au milieu du séjour. Vérifiez les horaires avant de compter dessus : les agences de ville ferment souvent tôt le samedi et restent fermées le dimanche, alors que les comptoirs d’aéroport ouvrent plus large.',
          'La location en aller simple, prise à Genève et rendue à Zurich, est la façon naturelle de traverser le pays sans revenir sur ses pas, mais elle est rarement gratuite : les frais d’aller simple sont fixés par le loueur et peuvent dépasser le billet de train qu’ils vous évitent. Demandez un montant, pas un principe, avant de réserver.',
          'Si l’hôtel est dans un village sans voiture, réglez le dernier tronçon avant de quitter le comptoir. Vous voulez savoir à quelle gare de vallée vous vous garez, quel est le tarif journalier là-bas, et à quelle heure part le dernier train ou le dernier téléphérique : un atterrissage tardif plus une autoroute lente peuvent vous déposer au terminal après la fermeture de la montagne.',
        ],
      },
      {
        id: 'vignette',
        title: 'La vignette autoroutière, expliquée pour de bon',
        paras: [
          'La Suisse ne fait pas payer au kilomètre. À la place, chaque véhicule jusqu’à 3,5 tonnes qui emprunte une autoroute ou une semi-autoroute porte une vignette à 40 CHF. Il n’existe ni version à la journée, ni à la semaine, ni au mois : un seul prix, que vous rouliez un après-midi ou un an. La vignette est valable du 1er décembre de l’année précédente au 31 janvier de l’année suivante, soit quatorze mois de vie.',
          'Depuis août 2023 elle existe sous deux formes. L’autocollant classique se pose sur le pare-brise, et il appartient à ce pare-brise : impossible de le transférer sur une autre voiture. La vignette électronique s’achète en ligne sur le portail Via de l’Office fédéral de la douane et de la sécurité des frontières et se rattache à la plaque d’immatriculation, donc il n’y a rien à coller, à gratter ni à remplacer. Les deux coûtent le même prix.',
          'Une remorque ou une caravane a besoin de sa propre vignette, même si la voiture qui la tracte en a déjà une. Rouler sur l’autoroute sans vignette coûte 200 CHF d’amende, plus les 40 CHF que vous vouliez éviter. Les routes ordinaires, y compris la plupart des routes de cols qui font l’intérêt des Alpes, n’exigent aucune vignette, mais traverser le pays par là prend des heures de plus.',
          'Une voiture louée en Suisse arrive normalement avec une vignette valable, et cela vaut la peine de le confirmer à la prise en charge. Si vous louez de l’autre côté de la frontière, en France, en Allemagne, en Italie ou en Autriche, partez du principe que la voiture n’a rien et achetez la vignette électronique avant le premier panneau d’autoroute.',
        ],
      },
      {
        id: 'rules',
        title: 'Les règles qui piègent les visiteurs',
        paras: [
          'Les limitations sont de 120 km/h sur autoroute, 100 sur semi-autoroute, 80 hors localité et 50 en localité, sauf indication contraire, et l’indication contraire est fréquente dans les villages et sur les routes de montagne. La sanction commence dès les premiers kilomètres-heure au-dessus de la limite, les radars sont nombreux et fixes, et il n’y a pas de marge officieuse sur laquelle compter.',
          'Les feux de croisement ou les feux de jour sont obligatoires de jour comme de nuit, toute l’année, depuis le 1er janvier 2014. Cela vaut en plein soleil de juillet comme dans un tunnel, et c’est la règle que les visiteurs oublient le plus souvent.',
          'Le taux d’alcool autorisé est de 0,5 gramme par kilo. Les conducteurs dans leurs premières années de permis et les conducteurs professionnels doivent être à jeun, ce qui revient en pratique à rester sous 0,1. Dans un pays où un restaurant d’altitude sert du vin à midi et où la route du retour est en lacets, la version sûre de cette règle est simplement de ne pas boire du tout avant de conduire.',
          'Deux habitudes méritent d’être ajoutées parce qu’elles sont locales plutôt que légales. Sur les routes de montagne étroites, les cars postaux prennent la trajectoire dont ils ont besoin et c’est à vous de leur céder le passage. Et sur une route de col à une voie, le véhicule qui monte a la priorité, ce qui veut dire reculer jusqu’à la dernière place d’évitement plus souvent que vous ne le voudriez.',
        ],
      },
      {
        id: 'winter',
        title: 'Conduire en hiver : pneus, chaînes et cols fermés',
        paras: [
          'La Suisse n’impose pas légalement les pneus hiver. Ce que la loi exige, c’est que le conducteur garde la maîtrise du véhicule et que la voiture soit adaptée aux conditions, ce qui revient au même un matin de neige au-dessus de 1000 mètres : une voiture mal équipée impliquée dans un accident devient le problème du conducteur, financièrement autant que juridiquement. Demandez donc au loueur, par écrit si possible, si la voiture a des pneus hiver pour vos dates.',
          'Les chaînes relèvent d’une autre règle. Un panneau rond bleu avec un symbole de chaîne signifie que les chaînes sont obligatoires sur ce tronçon, et il apparaît là où la pente rend tout le reste illusoire. Si votre hôtel se trouve au-dessus d’une route qui porte ce panneau, demandez au loueur si des chaînes sont dans le coffre et si vous avez le droit de les monter.',
          'Les grands cols ferment sous la neige d’automne et rouvrent à la fin du printemps, ce qui réécrit discrètement tout itinéraire dessiné sur une carte d’été. En 2026, le Gothard a rouvert le 8 mai, la Furka, le Grimsel et le Nufenen le 29 mai, et le Susten à la mi-juin. La Bernina, le Julier, la Maloja, l’Ofenpass, le Simplon, le Brünig et le Lukmanier sont maintenus ouverts tout l’hiver, météo permettant, et c’est ce qui rend l’Engadine et le sud accessibles en février.',
          'La conséquence pratique arrive avant la réservation de l’hôtel, pas après. Une base à deux vallées de là, c’est trente minutes en août et un long détour en janvier : vérifiez si le col entre les deux est ouvert à vos dates avant de payer les chambres.',
        ],
      },
      {
        id: 'car-trains',
        title: 'Les trains-autos : passer sous les Alpes',
        paras: [
          'Quand un col ferme, le rail fait passer la voiture à travers la montagne. Vous montez sur un wagon plat, vous restez dans la voiture, et vous ressortez de l’autre côté du massif. La Vereina est la plus fréquentée : de Selfranga près de Klosters à Sagliains en Basse-Engadine, par un tunnel de 19 kilomètres, dix-huit minutes, un départ toutes les demi-heures, et aucune réservation possible, donc on fait la queue et on part.',
          'La navette du Lötschberg circule toute l’année entre Kandersteg et Goppenstein : c’est le chemin court de l’Oberland bernois vers le Valais. Le train-auto de la Furka, entre Realp et Oberwald, garde le côté d’Andermatt relié au Haut-Valais pendant que le col au-dessus est fermé pour l’hiver. BLS exploite aussi la navette du Simplon vers l’Italie.',
          'Traitez-les comme des routes plutôt que comme des trains. Il n’y a rien à réserver ni de place à choisir, le prix se paie au terminal, et la file d’un samedi de février se comporte comme une file de péage. Le tunnel routier du Gothard, ouvert toute l’année, est l’exception où l’attente se compte en heures les jours de grands départs, et le train-auto de la Furka ou du Lötschberg est souvent la manière plus calme d’atteindre les mêmes vallées.',
        ],
      },
      {
        id: 'parking',
        title: 'Se garer, de la zone bleue au terminal de vallée',
        paras: [
          'En ville, la couleur de la case donne la règle. Une zone bleue est gratuite pendant une durée limitée à condition qu’un disque de stationnement bleu soit derrière le pare-brise, du lundi au samedi en journée, et gratuite le soir et le dimanche. Une zone blanche est payante, avec le tarif et la durée maximale sur le panneau. Les disques sont distribués gratuitement dans les stations-service, les postes de police et beaucoup d’offices du tourisme, et une voiture de location en a souvent un dans la boîte à gants.',
          'Les hôtels de ville incluent rarement le parking, et le garage qu’ils vous indiquent se paie à la journée au tarif urbain : c’est la ligne que les visiteurs oublient dans le budget. Trois nuits à Zurich ou à Lucerne avec une voiture peuvent coûter plus cher en parking que les billets de train que vous auriez pris à la place.',
          'En montagne, le parking est une infrastructure plutôt qu’un service. Les terminaux de vallée sous les villages sans voiture sont des bâtiments à plusieurs niveaux dimensionnés pour une station, ils se paient à la journée, et en haute saison les niveaux couverts se remplissent. Réservez à l’avance quand le terminal le permet, et budgétez la semaine, pas la nuit.',
        ],
      },
      {
        id: 'checklist',
        title: 'Ce qu’il faut régler avant de réserver',
        paras: [
          'Posez la question du supplément jeune conducteur si quelqu’un a moins de 25 ans dans le groupe : les âges minimums et les frais supplémentaires sont fixés par chaque loueur, pas par la loi. Vérifiez au nom de qui doit être la carte de crédit, car la caution est bloquée sur la carte du conducteur et la carte du conjoint est régulièrement refusée au comptoir.',
          'Dites où vous comptez rouler. Passer en Italie, en France, en Allemagne ou en Autriche est généralement autorisé, parfois contre supplément, et parfois exclu pour certaines catégories, et l’assurance suit les mêmes règles que l’autorisation. Si le programme comprend un train-auto, confirmez que rien dans le contrat ne l’interdit.',
          'Pour une réservation d’hiver, mettez pneus hiver, chaînes et porte-skis sur la même liste, et demandez ce qui se passe si vous rendez la voiture avec des dégâts liés à la neige. Pour l’été, les questions sont plus simples : politique de carburant, frais d’aller simple, et boîte automatique garantie plutôt que simplement demandée.',
        ],
      },
    ],
    faqTitle: 'Location de voiture en Suisse : questions fréquentes',
  },
  de: {
    intro: [
      'Das Auto ist in der Schweiz nicht die naheliegende Wahl, und genau deshalb verdient die Frage eine eigene Seite. Die Bahn erreicht fast jeden Ort in diesem Reiseführer, mehrere dieser Orte lassen gar keine Autos zu, und eine Woche Parkieren in der Stadt kann mehr kosten als die Miete selbst. Sobald die Reise aber kein Aufenthalt an einem Standort mehr ist, sondern eine Route über Pässe, den Seen entlang und in Seitentäler mit vier Bussen pro Tag, verdient sich das Auto seinen Platz.',
      'Diese Seite macht zweierlei. Sie lässt Sie Mietpreise für Ihre Daten vergleichen, und sie sagt, was am Schalter niemand erwähnt: die Vignette, die Sie vor der ersten Autobahn brauchen, die Regeln, über die Gäste stolpern, was mit Ihrer Route passiert, wenn die hohen Pässe schliessen, die Züge, die Autos unter den Alpen hindurchbringen, und wo Sie das Auto tatsächlich stehen lassen, wenn Ihr Hotel in einem autofreien Ort liegt.',
    ],
    form: {
      title: 'Mietwagen vergleichen',
      note: 'Geben Sie Abholort und Daten ein: Das Formular vergleicht die Vermieter, gebucht wird auf der Partnerseite zu deren Preis.',
      disclosure: 'Suchformular von GetRentacar über Travelpayouts. Wenn Sie darüber buchen, erhalten wir möglicherweise eine Provision, Ihr Preis bleibt gleich.',
    },
    carFree: {
      title: 'Wo das Auto nicht mitkommt',
      chips: 'Autofreie Orte, deren Seite bereits online ist:',
      paras: [
        'Mehrere Reiseziele in diesem Reiseführer sind autofrei, und die Regel gilt auf der Strasse, nicht erst vor dem Hotel. Zermatt ist der klarste Fall: Private Fahrzeuge kommen nur bis Täsch, wo das Matterhorn Terminal 2100 gedeckte Plätze bietet, dazu über 1000 weitere Plätze privater Anbieter im Dorf, und der Shuttlezug alle 20 Minuten abfährt und in 12 Minuten hinauf nach Zermatt fährt. Saas-Fee stoppt Sie am Dorfeingang, wo ein Parkhaus und ein offener Parkplatz übernehmen. Für die Riederalp lassen Sie das Auto unten in Mörel-Filet, für die Orte auf der Rigi an den Talstationen in Weggis oder Vitznau.',
        'Nichts davon macht ein Auto sinnlos, aber die Rechnung ändert sich. Sie zahlen die Miete, das Talparkhaus pro Tag und die Bahn- oder Seilbahntickets, die die letzten Kilometer ersetzen. Wenn der ganze Urlaub in einem dieser Orte stattfindet, ist die Bahn ab Flughafen meist die einfachere Antwort. Ist der Ort eine Station auf einer längeren Runde, parkieren Sie unten und fahren wie alle anderen mit der Bergbahn hinauf.',
      ],
    },
    sections: [
      {
        id: 'need',
        title: 'Brauchen Sie überhaupt ein Auto?',
        paras: [
          'Beginnen Sie mit der Form der Reise, nicht mit dem Preis. Ein Standort, mit der Bahn erreicht, Bergbahnen und Busse vor der Tür: Das ist der Fall, in dem der Mietwagen die Woche in der Garage steht. Der Swiss Travel Pass gilt in Zügen, Bussen und Schiffen, und die Tabelle auf jeder Reiseziel-Seite zeigt, was er bei den Bergbahnen vor Ort abdeckt oder vergünstigt, sodass Sie diesen Betrag mit einer Woche Miete, Treibstoff und Parkieren vergleichen können.',
          'Das Auto verändert die Reise, wenn die Reise sich bewegt. Das Berner Oberland mit dem Wallis und dann mit dem Tessin in zehn Tagen verbinden, in einem Weiler über dem Talboden schlafen, um sieben Uhr am Ausgangspunkt der Wanderung stehen, die Skiausrüstung einer vierköpfigen Familie transportieren, um elf Uhr nachts aus einem Restaurant im Nachbardorf zurückkommen: Das sind die Momente, in denen der Fahrplan aufhört zu helfen und das Auto anfängt.',
          'Es gibt noch einen mittleren Weg, an den Gäste selten denken. Nehmen Sie für den alpinen Teil die Bahn, die ohnehin am schnellsten hinaufführt, und mieten Sie nur für die zwei, drei Tage, an denen Sie das Land durchqueren. Die teure Einheit ist hier der Miettag: Nur die genutzten Tage zu kaufen ist meist günstiger, als ein Auto stehen zu lassen, während Sie auf einem Gletscher sind.',
        ],
      },
      {
        id: 'pick-up',
        title: 'Wo Sie das Auto übernehmen und wo Sie es zurückgeben',
        paras: [
          'Der Flughafen ist der Reflex: landen, übernehmen, losfahren. Stadtfilialen sind die Alternative und passen zum mittleren Weg, weil Sie mit der Bahn anreisen und das Auto mitten im Aufenthalt übernehmen können. Prüfen Sie die Öffnungszeiten, bevor Sie damit rechnen: Stadtfilialen schliessen samstags oft früh und bleiben sonntags zu, während die Schalter am Flughafen länger offen haben.',
          'Eine Einwegmiete, Übernahme in Genf, Rückgabe in Zürich, ist der natürliche Weg quer durchs Land, ohne zurückzufahren, aber sie ist selten gratis: Die Einweggebühr setzt der Vermieter fest und sie kann mehr ausmachen als das Bahnbillett, das sie Ihnen erspart. Lassen Sie sich einen Betrag nennen, keine Politik, bevor Sie buchen.',
          'Liegt das Hotel in einem autofreien Ort, klären Sie die letzte Etappe, bevor Sie den Schalter verlassen. Sie wollen wissen, an welcher Talstation Sie parkieren, was der Tagestarif dort ist und wann die letzte Bahn hinauffährt, denn eine späte Landung plus eine zähe Autobahn können Sie nach Betriebsschluss am Terminal absetzen.',
        ],
      },
      {
        id: 'vignette',
        title: 'Die Autobahnvignette, richtig erklärt',
        paras: [
          'Die Schweiz verrechnet keine Kilometer. Stattdessen trägt jedes Fahrzeug bis 3,5 Tonnen, das eine Autobahn oder Autostrasse benutzt, eine Vignette für CHF 40. Es gibt keine Tages-, Wochen- oder Monatsvariante: ein Preis, ob Sie einen Nachmittag oder ein Jahr fahren. Gültig ist sie vom 1. Dezember des Vorjahres bis zum 31. Januar des Folgejahres, also vierzehn Monate lang.',
          'Seit August 2023 gibt es zwei Formen. Der klassische Kleber kommt an die Windschutzscheibe und gehört zu dieser Scheibe: Er lässt sich nicht auf ein anderes Auto übertragen. Die E-Vignette kaufen Sie online über das Via-Portal des Bundesamts für Zoll und Grenzsicherheit, sie hängt am Kontrollschild, und damit muss nichts geklebt, gekratzt oder ersetzt werden. Beide kosten gleich viel.',
          'Ein Anhänger oder Wohnwagen braucht eine eigene Vignette, auch wenn das Zugfahrzeug bereits eine hat. Ohne Vignette auf der Autobahn kostet CHF 200 Busse plus die CHF 40, die Sie sparen wollten. Normale Strassen, auch die meisten Passstrassen, für die man in die Alpen fährt, brauchen keine Vignette, aber eine Landesdurchquerung über sie dauert Stunden länger.',
          'Ein in der Schweiz gemietetes Auto hat die gültige Vignette normalerweise schon, und es lohnt sich, das bei der Übernahme zu bestätigen. Mieten Sie jenseits der Grenze, in Frankreich, Deutschland, Italien oder Österreich, und fahren in die Schweiz, gehen Sie davon aus, dass nichts vorhanden ist, und kaufen Sie die E-Vignette vor dem ersten Autobahnschild.',
        ],
      },
      {
        id: 'rules',
        title: 'Die Regeln, über die Gäste stolpern',
        paras: [
          'Es gelten 120 km/h auf der Autobahn, 100 auf der Autostrasse, 80 ausserorts und 50 innerorts, sofern kein Signal etwas anderes sagt, und in Dörfern und auf Bergstrassen sagt es oft etwas anderes. Geahndet wird ab den ersten Stundenkilometern über dem Limit, Blitzer sind häufig und fest installiert, und auf eine inoffizielle Marge ist kein Verlass.',
          'Abblendlicht oder Tagfahrlicht ist seit dem 1. Januar 2014 Tag und Nacht das ganze Jahr Pflicht. Das gilt in der Julisonne genauso wie im Tunnel, und es ist die Regel, die Gäste am häufigsten vergessen.',
          'Die Blutalkoholgrenze liegt bei 0,5 Gramm pro Kilogramm. Fahrerinnen und Fahrer in den ersten Jahren nach der Prüfung sowie Berufsfahrende müssen nüchtern sein, praktisch unter 0,1. In einem Land, in dem ein Bergrestaurant mittags Wein ausschenkt und die Strasse nach Hause Kehren hat, lautet die sichere Fassung dieser Regel: vor dem Fahren gar nichts trinken.',
          'Zwei Gewohnheiten gehören dazu, weil sie lokal und nicht gesetzlich sind. Auf schmalen Bergstrassen nehmen Postautos die Linie, die sie brauchen, und Sie weichen aus. Und auf einer einspurigen Passstrasse hat das bergwärts fahrende Fahrzeug Vortritt, was heisst: Zurücksetzen bis zur letzten Ausweichstelle ist öfter Ihre Aufgabe, als Ihnen lieb ist.',
        ],
      },
      {
        id: 'winter',
        title: 'Winterfahren: Reifen, Ketten und geschlossene Pässe',
        paras: [
          'Die Schweiz kennt keine gesetzliche Winterreifenpflicht. Das Gesetz verlangt, dass die Lenkerin oder der Lenker das Fahrzeug beherrscht und dass das Auto den Verhältnissen angepasst ist, was an einem Schneemorgen über 1000 Metern auf dasselbe hinausläuft: Ein schlecht ausgerüstetes Auto wird im Unfall zum Problem der fahrenden Person, finanziell wie rechtlich. Fragen Sie den Vermieter also, wenn möglich schriftlich, ob das Auto für Ihre Daten Winterreifen hat.',
          'Schneeketten sind eine eigene Regel. Ein rundes blaues Signal mit Kettensymbol bedeutet Kettenpflicht auf diesem Abschnitt, und es steht dort, wo das Gefälle alles andere aussichtslos macht. Liegt Ihr Hotel über einer Strasse mit diesem Signal, fragen Sie, ob Ketten im Kofferraum sind und ob Sie sie montieren dürfen.',
          'Die hohen Pässe schliessen mit dem Herbstschnee und öffnen im späten Frühling wieder, was jede auf einer Sommerkarte gezeichnete Route still umschreibt. 2026 öffnete der Gotthard am 8. Mai, Furka, Grimsel und Nufenen am 29. Mai und der Susten Mitte Juni. Bernina, Julier, Maloja, Ofenpass, Simplon, Brünig und Lukmanier werden den Winter über offen gehalten, sofern das Wetter mitspielt, und erst das macht Engadin und Süden im Februar überhaupt erreichbar.',
          'Die praktische Folge kommt vor der Hotelbuchung, nicht danach. Ein Standort zwei Täler weiter ist im August dreissig Minuten entfernt und im Januar ein langer Umweg: Prüfen Sie, ob der Pass dazwischen an Ihren Daten offen ist, bevor die Zimmer bezahlt sind.',
        ],
      },
      {
        id: 'car-trains',
        title: 'Autoverlad: unter den Alpen hindurch',
        paras: [
          'Wenn ein Pass schliesst, bringt die Bahn das Auto durch den Berg. Sie fahren auf einen Flachwagen, bleiben im Auto und kommen auf der anderen Seite des Massivs heraus. Die Vereina ist die meistbefahrene: von Selfranga bei Klosters nach Sagliains im Unterengadin, durch einen 19 Kilometer langen Tunnel, achtzehn Minuten, Abfahrten alle halbe Stunde, Reservationen sind nicht möglich, also anstellen und fahren.',
          'Der Lötschberg-Autoverlad fährt das ganze Jahr zwischen Kandersteg und Goppenstein und ist der kurze Weg vom Berner Oberland ins Wallis. Der Furka-Autoverlad zwischen Realp und Oberwald hält die Andermatter Seite mit dem Oberwallis verbunden, während der Pass darüber im Winter geschlossen ist. Die BLS betreibt zudem den Simplon-Verlad Richtung Italien.',
          'Behandeln Sie das als Strassen, nicht als Züge. Es gibt nichts zu buchen und keinen Platz zu wählen, bezahlt wird am Terminal, und die Kolonne an einem Februarsamstag verhält sich wie eine Kolonne vor einer Mautstelle. Der Gotthard-Strassentunnel, das ganze Jahr offen, ist die Ausnahme, wo die Wartezeit an Reisetagen in Stunden gemessen wird, und der Autoverlad durch Furka oder Lötschberg ist oft der ruhigere Weg in dieselben Täler.',
        ],
      },
      {
        id: 'parking',
        title: 'Parkieren: von der blauen Zone zum Talterminal',
        paras: [
          'In der Stadt sagt die Farbe des Feldes, was gilt. Die blaue Zone ist für eine begrenzte Zeit gratis, sofern eine blaue Parkscheibe hinter der Windschutzscheibe liegt, montags bis samstags tagsüber, abends und sonntags frei. Die weisse Zone ist gebührenpflichtig, Tarif und Höchstdauer stehen auf dem Signal. Parkscheiben gibt es gratis an Tankstellen, auf Polizeiposten und in vielen Tourismusbüros, und im Mietwagen liegt oft eine im Handschuhfach.',
          'Stadthotels haben selten Parkplätze inklusive, und die Garage, die sie nennen, wird zum städtischen Tagestarif verrechnet: Das ist die Zeile, die im Budget fehlt. Drei Nächte in Zürich oder Luzern mit Auto können mehr Parkgebühren kosten als die Bahnbillette, die Sie stattdessen gelöst hätten.',
          'In den Bergen ist Parkieren Infrastruktur und keine Nebensache. Die Talterminals unter den autofreien Orten sind mehrgeschossige Bauten in Resortgrösse, sie kosten pro Tag, und in der Hochsaison füllen sich die gedeckten Ebenen. Reservieren Sie, wo das Terminal es zulässt, und rechnen Sie mit der Woche, nicht mit der Nacht.',
        ],
      },
      {
        id: 'checklist',
        title: 'Was Sie vor der Buchung klären',
        paras: [
          'Fragen Sie nach dem Jungfahrerzuschlag, wenn jemand unter 25 mitfährt: Mindestalter und Zusatzgebühren legt jeder Vermieter selbst fest, nicht das Gesetz. Klären Sie, auf welchen Namen die Kreditkarte lauten muss, denn die Kaution wird auf der Karte der fahrenden Person blockiert, und die Karte der Begleitung wird am Schalter regelmässig abgelehnt.',
          'Sagen Sie, wohin Sie fahren wollen. Die Fahrt nach Italien, Frankreich, Deutschland oder Österreich ist meist erlaubt, manchmal gegen Gebühr und gelegentlich für bestimmte Kategorien ausgeschlossen, und die Versicherung folgt derselben Regel wie die Erlaubnis. Ist ein Autoverlad geplant, lassen Sie sich bestätigen, dass der Vertrag ihn nicht ausschliesst.',
          'Für eine Winterbuchung gehören Winterreifen, Ketten und Skiträger auf dieselbe Liste, und fragen Sie, was gilt, wenn Sie das Auto mit Schneeschäden zurückgeben. Im Sommer sind die Fragen einfacher: Tankregelung, Einweggebühr und ob ein Automat garantiert und nicht nur gewünscht ist.',
        ],
      },
    ],
    faqTitle: 'Mietwagen in der Schweiz: häufige Fragen',
  },
}

export const carFaq: { q: L; a: L }[] = [
  {
    q: {
      en: 'Do I need the motorway vignette if I only drive mountain roads?',
      fr: 'Faut-il la vignette si je ne roule que sur les routes de montagne ?',
      de: 'Brauche ich die Vignette, wenn ich nur Bergstrassen fahre?',
    },
    a: {
      en: 'The vignette is required on motorways and expressways only, so a route made of pass roads and valley roads is legal without one. In practice you will use a motorway to leave the airport or cross the Mittelland, and a car rented in Switzerland already carries the sticker, so the question really only arises if you rent abroad and drive in.',
      fr: 'La vignette n’est exigée que sur les autoroutes et semi-autoroutes : un itinéraire fait de routes de cols et de fonds de vallée est donc légal sans elle. En pratique vous prendrez l’autoroute pour quitter l’aéroport ou traverser le Plateau, et une voiture louée en Suisse porte déjà la vignette, donc la question ne se pose vraiment que si vous louez à l’étranger et entrez en Suisse.',
      de: 'Die Vignette ist nur auf Autobahnen und Autostrassen nötig, eine Route aus Pass- und Talstrassen ist ohne sie also legal. In der Praxis fahren Sie zum Verlassen des Flughafens oder quer durchs Mittelland auf die Autobahn, und ein in der Schweiz gemietetes Auto trägt den Kleber bereits, die Frage stellt sich also vor allem bei Mieten im Ausland.',
    },
  },
  {
    q: {
      en: 'Are winter tyres included in a Swiss rental car?',
      fr: 'Les pneus hiver sont-ils inclus dans une location suisse ?',
      de: 'Sind Winterreifen im Schweizer Mietwagen inbegriffen?',
    },
    a: {
      en: 'There is no legal winter tyre obligation in Switzerland, which is precisely why you have to ask rather than assume. The law holds the driver responsible for keeping the car under control and adapted to conditions, so put the question to the rental company for your exact dates, and ask about chains too if your hotel sits above a road signed for them.',
      fr: 'Il n’existe pas d’obligation légale de pneus hiver en Suisse, et c’est justement pour cela qu’il faut demander plutôt que supposer. La loi rend le conducteur responsable de la maîtrise du véhicule et de son adaptation aux conditions : posez donc la question au loueur pour vos dates exactes, et demandez aussi les chaînes si votre hôtel est au-dessus d’une route qui les impose.',
      de: 'Eine gesetzliche Winterreifenpflicht gibt es in der Schweiz nicht, und genau deshalb muss man fragen statt annehmen. Das Gesetz macht die fahrende Person dafür verantwortlich, das Auto zu beherrschen und den Verhältnissen anzupassen: Stellen Sie die Frage für Ihre genauen Daten, und fragen Sie auch nach Ketten, wenn Ihr Hotel über einer Strasse mit Kettenpflicht liegt.',
    },
  },
  {
    q: {
      en: 'Can I drive to Zermatt, Wengen or Mürren?',
      fr: 'Peut-on rejoindre Zermatt, Wengen ou Mürren en voiture ?',
      de: 'Kann ich nach Zermatt, Wengen oder Mürren fahren?',
    },
    a: {
      en: 'No: these villages are car-free and the road stops in the valley below. For Zermatt you park at the Matterhorn Terminal in Täsch and take the shuttle train, which runs every 20 minutes and takes 12 minutes. Each destination page in this guide gives the arrival details for its own village, including where the parking is.',
      fr: 'Non : ces villages sont sans voiture et la route s’arrête dans la vallée en contrebas. Pour Zermatt, on se gare au Matterhorn Terminal de Täsch et on prend la navette ferroviaire, toutes les 20 minutes, 12 minutes de trajet. Chaque page destination de ce guide donne les détails d’arrivée de son village, parking compris.',
      de: 'Nein: Diese Orte sind autofrei, die Strasse endet unten im Tal. Für Zermatt parkieren Sie am Matterhorn Terminal in Täsch und nehmen den Shuttlezug, alle 20 Minuten, 12 Minuten Fahrt. Jede Reiseziel-Seite in diesem Reiseführer nennt die Anreise für ihren Ort, samt Parkierung.',
    },
  },
  {
    q: {
      en: 'Is it cheaper to rent for the whole trip or for a few days?',
      fr: 'Vaut-il mieux louer pour tout le séjour ou quelques jours ?',
      de: 'Lohnt sich die Miete für die ganze Reise oder nur für ein paar Tage?',
    },
    a: {
      en: 'Count the days the car actually moves. A week in a car-free village means seven rental days, seven days of valley parking and a car you reach by cable car, while the same trip with two rental days for the cross-country leg costs a fraction of that. Rent for the moving part of the holiday and let the railway handle the mountain part.',
      fr: 'Comptez les jours où la voiture roule vraiment. Une semaine dans un village sans voiture, c’est sept jours de location, sept jours de parking de vallée et une voiture qu’on rejoint en téléphérique, alors que le même voyage avec deux jours de location pour la traversée coûte une fraction de cela. Louez pour la partie mobile du séjour et laissez le rail s’occuper de la montagne.',
      de: 'Zählen Sie die Tage, an denen das Auto wirklich fährt. Eine Woche in einem autofreien Ort heisst sieben Miettage, sieben Tage Talparkhaus und ein Auto, das Sie mit der Seilbahn erreichen, während dieselbe Reise mit zwei Miettagen für die Querung einen Bruchteil kostet. Mieten Sie für den beweglichen Teil und überlassen Sie den Berg der Bahn.',
    },
  },
  {
    q: {
      en: 'What happens if the pass on my route is closed?',
      fr: 'Que faire si le col de mon itinéraire est fermé ?',
      de: 'Was tun, wenn der Pass auf meiner Route geschlossen ist?',
    },
    a: {
      en: 'You either go round, which can add hours, or you put the car on a train through the mountain. The Vereina links Klosters to the Lower Engadine in eighteen minutes, the Lötschberg shuttle connects Kandersteg to the Valais, and the Furka car train runs between Realp and Oberwald all year. None of them takes reservations, so you drive up, pay and load.',
      fr: 'Soit vous contournez, ce qui peut ajouter des heures, soit vous mettez la voiture sur un train à travers la montagne. La Vereina relie Klosters à la Basse-Engadine en dix-huit minutes, la navette du Lötschberg relie Kandersteg au Valais, et le train-auto de la Furka circule entre Realp et Oberwald toute l’année. Aucun ne prend de réservation : on se présente, on paie, on embarque.',
      de: 'Entweder fahren Sie aussen herum, was Stunden kosten kann, oder Sie verladen das Auto durch den Berg. Die Vereina verbindet Klosters in achtzehn Minuten mit dem Unterengadin, der Lötschberg-Verlad Kandersteg mit dem Wallis, und der Furka-Verlad fährt das ganze Jahr zwischen Realp und Oberwald. Reservationen gibt es nirgends: hinfahren, zahlen, verladen.',
    },
  },
]
