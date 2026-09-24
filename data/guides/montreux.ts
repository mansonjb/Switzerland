import type { DestinationGuide } from '../types'

// Sources in data/SOURCES-montreux.md (checked 16/09/2026). No number without a source.
export const montreux: DestinationGuide = {
  slug: 'montreux',
  stamp: 'generic',
  updated: '2026-09-16',
  meta: {
    title: { en: 'Where to stay in Montreux: the quai or the old town', fr: 'Où dormir à Montreux : le quai ou la vieille ville', de: 'Wo übernachten in Montreux: Seepromenade oder Altstadt' },
    description: {
      en: 'Montreux in three areas: the lakefront quai and Casino district, the quieter old town on the hill, and Territet towards Chillon Castle, with real hotels.',
      fr: 'Montreux en trois secteurs : le quai et le quartier du Casino, la vieille ville sur la colline, et Territet vers le château de Chillon, avec de vrais hôtels.',
      de: 'Montreux in drei Ortsteilen: die Seepromenade mit dem Casino-Viertel, die ruhigere Altstadt auf dem Hügel und Territet Richtung Schloss Chillon.',
    },
  },
  eyebrow: { en: 'Lake Geneva · Montreux', fr: 'Lac Léman · Montreux', de: 'Genfersee · Montreux' },
  title: { en: 'Where to stay in Montreux', fr: 'Où dormir à Montreux', de: 'Wo übernachten in Montreux' },
  intro: {
    en: 'A lakeside town at 396 m, on the shore of Lake Geneva between Vevey and Chillon Castle, 20 minutes from Lausanne and 6 from Vevey by direct train. The Montreux Jazz Festival, founded in 1967, holds its 61st edition from 2 to 17 July 2027, and from the same station the GoldenPass Express reaches Interlaken in 3 h 15 with no change of train, switching gauge at Zweisimmen. CGN boats call at both Montreux and Chillon.',
    fr: 'Ville au bord du Léman, à 396 m, entre Vevey et le château de Chillon, à 20 minutes de Lausanne et 6 de Vevey en train direct. Le Montreux Jazz Festival, fondé en 1967, tient sa 61e édition du 2 au 17 juillet 2027, et depuis la même gare, le GoldenPass Express rejoint Interlaken en 3 h 15 sans changement de train, grâce à un changement d’écartement à Zweisimmen. Les bateaux de la CGN font escale à Montreux comme à Chillon.',
    de: 'Eine Stadt am Ufer des Genfersees, auf 396 m, zwischen Vevey und dem Schloss Chillon, 20 Minuten von Lausanne und 6 von Vevey mit dem direkten Zug entfernt. Das 1967 gegründete Montreux Jazz Festival feiert seine 61. Ausgabe vom 2. bis 17. Juli 2027, und vom selben Bahnhof aus erreicht der GoldenPass Express Interlaken in 3 Std. 15 ohne Umsteigen, dank Spurwechsel in Zweisimmen. CGN-Schiffe legen sowohl in Montreux als auch in Chillon an.',
  },
  quickAnswer: {
    en: 'Stay in Montreux for the lakefront quai, the Montreux Jazz Festival and Chillon Castle a short ride away, with a direct GoldenPass Express train on to Interlaken. For a full lake city with the Olympic Museum, stay in Lausanne instead, and for Chaplin’s World and a quieter market town, choose Vevey.',
    fr: 'Dormez à Montreux pour le quai, le Montreux Jazz Festival et le château de Chillon à quelques minutes, avec un train GoldenPass Express direct jusqu’à Interlaken. Pour une ville lacustre complète avec le Musée olympique, préférez Lausanne, et pour Chaplin’s World et une ville de marché plus tranquille, choisissez Vevey.',
    de: 'Übernachten Sie in Montreux für die Seepromenade, das Montreux Jazz Festival und das Schloss Chillon in kurzer Entfernung, mit einem direkten GoldenPass-Express-Zug weiter nach Interlaken. Für eine vollständige Seestadt mit dem Olympischen Museum übernachten Sie stattdessen in Lausanne, und für Chaplin’s World und eine ruhigere Marktstadt wählen Sie Vevey.',
  },
  snapshot: {
    why: {
      en: 'Because everything you came for starts at the same station: the lakefront quai, the Montreux Jazz Festival stages, the Rochers-de-Naye cog railway and the GoldenPass Express to Interlaken. That means a stay here needs no car and no separate transfers, with Chillon Castle just a short ride further along the shore.',
      fr: 'Parce que tout ce qui vous amène ici part de la même gare : le quai, les scènes du Montreux Jazz Festival, le train à crémaillère des Rochers-de-Naye et le GoldenPass Express vers Interlaken. Cela veut dire un séjour sans voiture ni correspondance séparée, avec le château de Chillon à quelques minutes de plus le long de la rive.',
      de: 'Weil alles, weswegen Sie herkommen, vom selben Bahnhof abfährt: die Seepromenade, die Bühnen des Montreux Jazz Festival, die Rochers-de-Naye-Zahnradbahn und der GoldenPass Express nach Interlaken. Das bedeutet einen Aufenthalt ohne Auto und ohne separate Umstiege, mit dem Schloss Chillon nur eine kurze Fahrt weiter am Ufer.',
    },
    where: {
      en: 'First stay or want the water: the quai around the Casino, from Territet to Clarens. Looking for quiet: the old town around Rue du Temple and Rue du Pont, closer to the station than to the lake. Here for Chillon Castle: Territet or Veytaux, on the lake road south of town.',
      fr: 'Premier séjour ou envie du lac : le quai autour du Casino, de Territet à Clarens. En quête de calme : la vieille ville, autour de la rue du Temple et de la rue du Pont, plus proche de la gare que du lac. Venu pour le château de Chillon : Territet ou Veytaux, sur la route du lac au sud de la ville.',
      de: 'Erster Besuch oder Lust auf den See: die Promenade rund um das Casino, von Territet bis Clarens. Auf der Suche nach Ruhe: die Altstadt rund um die Rue du Temple und die Rue du Pont, näher am Bahnhof als am See. Wegen des Schlosses Chillon hier: Territet oder Veytaux, an der Seestrasse südlich der Stadt.',
    },
    watch: {
      en: 'The Rochers-de-Naye cog railway is closed for works from 14 September to 17 October 2026 and again from 1 April to 21 May 2027, so check the calendar before planning a trip to the top.',
      fr: 'Le train à crémaillère des Rochers-de-Naye est fermé pour travaux du 14 septembre au 17 octobre 2026, puis à nouveau du 1er avril au 21 mai 2027 : vérifiez le calendrier avant de prévoir une montée au sommet.',
      de: 'Die Rochers-de-Naye-Zahnradbahn ist vom 14. September bis 17. Oktober 2026 und erneut vom 1. April bis 21. Mai 2027 wegen Bauarbeiten gesperrt: Prüfen Sie den Kalender, bevor Sie eine Fahrt zum Gipfel planen.',
    },
  },
  story: {
    title: { en: 'Montreux, before you book', fr: 'Montreux, avant de réserver', de: 'Montreux, bevor Sie buchen' },
    paragraphs: [
      {
        en: 'Montreux sits on the shore of Lake Geneva at 396 metres, between Vevey and Chillon Castle, and the town reveals itself gradually: the train from Geneva airport takes 1 h 14 direct on the IR 90, or 1 h 22 on the IR 95, and from Lausanne it is a direct 20 minutes. Every arrival lands at the same station, with the lakefront quai a short walk below and the old town rising on the hill behind it, so the first choice you make is which of the two you want outside your door.',
        fr: 'Montreux se trouve au bord du Léman, à 396 mètres, entre Vevey et le château de Chillon, et la ville se découvre par étapes : le train depuis l’aéroport de Genève met 1 h 14 en IR 90 direct, ou 1 h 22 en IR 95, et il ne faut que 20 minutes depuis Lausanne, en direct. Chaque arrivée se fait à la même gare, avec le quai à quelques pas en contrebas et la vieille ville qui grimpe sur la colline derrière : le premier choix consiste donc à savoir lequel des deux vous voulez au pied de votre hôtel.',
        de: 'Montreux liegt am Ufer des Genfersees, auf 396 Metern, zwischen Vevey und dem Schloss Chillon, und die Stadt erschliesst sich schrittweise: Der Zug ab dem Flughafen Genf braucht 1 Std. 14 mit dem direkten IR 90 oder 1 Std. 22 mit dem IR 95, und ab Lausanne sind es direkt nur 20 Minuten. Jede Ankunft erfolgt am selben Bahnhof, mit der Seepromenade wenige Schritte darunter und der Altstadt, die dahinter den Hügel hinaufsteigt: Die erste Entscheidung ist also, welches der beiden Sie vor der Hoteltür haben möchten.',
      },
      {
        en: 'Geography does the sorting for you. The quai runs from Territet to Clarens past the Casino, and this is where the Montreux Jazz Festival raises its stages every July: stay here for the water, the promenade and the festival crowds. Climb above the station instead and you reach the old town around Rue du Temple and Rue du Pont, quieter and closer to the trains than to the lake. Further south, Territet and Veytaux sit on the lake road towards Chillon Castle, with the Rochers-de-Naye cog railway climbing from the station through Glion and Caux above this stretch of shore.',
        fr: 'La géographie fait le tri. Le quai relie Territet à Clarens en passant devant le Casino, et c’est là que le Montreux Jazz Festival dresse ses scènes chaque juillet : on y loge pour l’eau, la promenade et l’animation du festival. En montant au-dessus de la gare, on rejoint la vieille ville, autour de la rue du Temple et de la rue du Pont, plus calme et plus proche des trains que du lac. Plus au sud, Territet et Veytaux longent la route du lac vers le château de Chillon, avec le train à crémaillère des Rochers-de-Naye qui grimpe depuis la gare, via Glion et Caux, au-dessus de ce tronçon de rive.',
        de: 'Die Geografie übernimmt die Sortierung. Die Promenade verbindet Territet mit Clarens und führt am Casino vorbei, und genau dort errichtet das Montreux Jazz Festival jeden Juli seine Bühnen: Hier wohnt man wegen des Wassers, der Promenade und des Festivaltrubels. Wer stattdessen oberhalb des Bahnhofs hinaufsteigt, erreicht die Altstadt rund um die Rue du Temple und die Rue du Pont, ruhiger und näher an den Zügen als am See. Weiter südlich liegen Territet und Veytaux an der Seestrasse Richtung Schloss Chillon, mit der Rochers-de-Naye-Zahnradbahn, die vom Bahnhof über Glion und Caux oberhalb dieses Uferabschnitts hinaufsteigt.',
      },
      {
        en: 'The hotels span a similar range, from the Fairmont Le Montreux Palace, a Belle Époque house on the quai dating to 1906, down to smaller family addresses like the Tralala in the old town and the Hôtel Bon Port near the centre. Our dated Booking prices place Hôtel Bon Port as the least expensive address in this selection across every date checked. Most of the smaller hotels cost a little more in winter than in summer, but at the Fairmont it runs the other way, with the higher nights falling in summer.',
        fr: 'L’offre hôtelière suit le même éventail, du Fairmont Le Montreux Palace, maison Belle Époque du quai fondée en 1906, à des adresses familiales plus modestes comme le Tralala dans la vieille ville ou l’Hôtel Bon Port près du centre. Nos prix Booking datés placent l’Hôtel Bon Port comme l’adresse la moins chère de cette sélection, à chaque date vérifiée. La plupart des petits hôtels coûtent un peu plus cher en hiver qu’en été, mais c’est l’inverse au Fairmont, où les nuits les plus chères tombent en été.',
        de: 'Das Hotelangebot spannt einen ähnlichen Bogen, vom Fairmont Le Montreux Palace, einem 1906 gegründeten Belle-Époque-Haus an der Promenade, bis zu kleineren Familienadressen wie dem Tralala in der Altstadt oder dem Hôtel Bon Port nahe dem Zentrum. Unsere datierten Booking-Preise weisen das Hôtel Bon Port an jedem geprüften Datum als die günstigste Adresse dieser Auswahl aus. Die meisten kleineren Hotels kosten im Winter etwas mehr als im Sommer, beim Fairmont ist es jedoch umgekehrt: Dort fallen die teuersten Nächte in den Sommer.',
      },
      {
        en: 'The Montreux Jazz Festival fills the quai from 2 to 17 July 2027, its 61st edition since 1967, and this is when the town is busiest. Outside that window, plan around the Rochers-de-Naye cog railway, closed for works from 14 September to 17 October 2026 and again from 1 April to 21 May 2027. From the same station, the GoldenPass Express reaches Interlaken in 3 h 15 without changing trains, and Geneva airport is 1 h 14 away by direct train, which makes Montreux an easy add-on to a longer Swiss trip rather than a destination that needs its own long haul.',
        fr: 'Le Montreux Jazz Festival occupe le quai du 2 au 17 juillet 2027, pour sa 61e édition depuis 1967, et c’est la période la plus animée de la ville. En dehors de ces dates, il faut composer avec le train à crémaillère des Rochers-de-Naye, fermé pour travaux du 14 septembre au 17 octobre 2026 puis à nouveau du 1er avril au 21 mai 2027. Depuis la même gare, le GoldenPass Express rejoint Interlaken en 3 h 15 sans changement, et l’aéroport de Genève n’est qu’à 1 h 14 en train direct, ce qui fait de Montreux une étape facile à ajouter à un séjour suisse plus large plutôt qu’une destination à elle seule.',
        de: 'Das Montreux Jazz Festival belegt die Promenade vom 2. bis 17. Juli 2027, zu seiner 61. Ausgabe seit 1967, und das ist die geschäftigste Zeit der Stadt. Ausserhalb dieser Tage muss man die Rochers-de-Naye-Zahnradbahn einplanen, die vom 14. September bis 17. Oktober 2026 und erneut vom 1. April bis 21. Mai 2027 wegen Bauarbeiten geschlossen ist. Vom selben Bahnhof aus erreicht der GoldenPass Express Interlaken in 3 Std. 15 ohne Umsteigen, und der Flughafen Genf liegt nur 1 Std. 14 mit dem direkten Zug entfernt, was Montreux zu einer einfachen Ergänzung einer längeren Schweizreise macht statt zu einem eigenen Fernziel.',
      },
    ],
  },
  stats: [
    { value: '61', label: { en: 'edition of the Montreux Jazz Festival, 2 to 17 July 2027, founded in 1967', fr: 'édition du Montreux Jazz Festival, du 2 au 17 juillet 2027, fondé en 1967', de: 'Ausgabe des Montreux Jazz Festival, 2. bis 17. Juli 2027, gegründet 1967' } },
    { value: '2042', label: { en: 'metres, the summit of Rochers-de-Naye, reached by cog railway from Montreux station in 55 minutes', fr: 'mètres, le sommet des Rochers-de-Naye, atteint en crémaillère depuis la gare de Montreux en 55 minutes', de: 'Meter, der Gipfel der Rochers-de-Naye, mit der Zahnradbahn ab dem Bahnhof Montreux in 55 Minuten erreicht' } },
    { value: '3 h 15', label: { en: 'GoldenPass Express to Interlaken, no change of train, running since December 2022', fr: 'GoldenPass Express jusqu’à Interlaken, sans changement de train, en service depuis décembre 2022', de: 'GoldenPass Express nach Interlaken, ohne Umsteigen, im Einsatz seit Dezember 2022' } },
  ],
  hero: {
    photo: '/photos/montreux.jpg',
    caption: { en: 'Montreux and Lake Geneva, seen from Clarens, with the Rochers-de-Naye ridge behind.', fr: 'Montreux et le Léman, vus depuis Clarens, avec la crête des Rochers-de-Naye en arrière-plan.', de: 'Montreux und der Genfersee, von Clarens aus gesehen, mit dem Grat der Rochers-de-Naye im Hintergrund.' },
    credit: { author: 'Florian Pépellin', license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/', source: 'https://commons.wikimedia.org/wiki/File:Panorama_Montreux_et_L%C3%A9man_depuis_Clarens_(juin_2019).JPG' },
  },
  sectors: [
    {
      title: { en: 'The lakefront and the Casino', fr: 'Le quai et le Casino', de: 'Seepromenade und Casino' },
      walk: { en: 'The quai from Territet to Clarens', fr: 'Le quai, de Territet à Clarens', de: 'Die Promenade von Territet bis Clarens' },
      text: {
        en: 'The quai runs from Territet to Clarens past the Casino, with Fairmont Le Montreux Palace and Hôtel Helvétie, at Avenue du Casino 32, both sitting directly on it. The Montreux Jazz Festival stages rise on and around this front every July, and MONA Montreux stands one street back, at Grand-Rue 81.',
        fr: 'Le quai relie Territet à Clarens en passant devant le Casino, avec le Fairmont Le Montreux Palace et l’Hôtel Helvétie, au 32 avenue du Casino, tous deux installés directement dessus. Les scènes du Montreux Jazz Festival s’élèvent sur ce front et à ses abords chaque mois de juillet, et MONA Montreux se trouve une rue plus loin, au 81 Grand-Rue.',
        de: 'Die Promenade verbindet Territet mit Clarens und führt am Casino vorbei, wobei das Fairmont Le Montreux Palace und das Hôtel Helvétie, an der Avenue du Casino 32, beide direkt daran liegen. Die Bühnen des Montreux Jazz Festival entstehen jeden Juli auf und um diese Promenade, und MONA Montreux liegt eine Strasse weiter, an der Grand-Rue 81.',
      },
      points: [
        { en: 'The Fairmont Le Montreux Palace and Hôtel Helvétie both sit on the lakefront quai', fr: 'Le Fairmont Le Montreux Palace et l’Hôtel Helvétie se trouvent tous deux sur le quai', de: 'Das Fairmont Le Montreux Palace und das Hôtel Helvétie liegen beide an der Seepromenade' },
        { en: 'The Montreux Jazz Festival stages rise on and around this front every July', fr: 'Les scènes du Montreux Jazz Festival s’élèvent sur ce front et à ses abords chaque juillet', de: 'Die Bühnen des Montreux Jazz Festival entstehen jeden Juli auf und um diese Promenade' },
      ],
      story: {
        en: 'This is Montreux at its most social, the quai lined with grand hotels and, every July, with the Montreux Jazz Festival stages themselves. Stay here for the water and the festival crowds, whether at the Fairmont Le Montreux Palace or the Hôtel Helvétie, both directly on the front. The trade-off is that this is also the busiest stretch of town, especially during the festival, and the quietest addresses lie further back or up the hill.',
        fr: 'C’est le Montreux le plus animé, le quai bordé de grands hôtels et, chaque juillet, des scènes mêmes du Montreux Jazz Festival. On y loge pour l’eau et l’effervescence du festival, que ce soit au Fairmont Le Montreux Palace ou à l’Hôtel Helvétie, tous deux installés directement dessus. En contrepartie, c’est aussi le tronçon le plus fréquenté de la ville, surtout pendant le festival, les adresses plus calmes se trouvant en retrait ou sur la colline.',
        de: 'Das ist Montreux in seiner geselligsten Form, die Promenade gesäumt von Grandhotels und, jeden Juli, von den Bühnen des Montreux Jazz Festival selbst. Hier wohnt man wegen des Wassers und des Festivaltrubels, sei es im Fairmont Le Montreux Palace oder im Hôtel Helvétie, beide direkt daran gelegen. Der Nachteil: Das ist zugleich der belebteste Abschnitt der Stadt, besonders während des Festivals, ruhigere Adressen liegen weiter zurück oder oben am Hügel.',
      },
    },
    {
      title: { en: 'The old town', fr: 'La vieille ville', de: 'Die Altstadt' },
      walk: { en: 'Rue du Temple and Rue du Pont', fr: 'Rue du Temple et Rue du Pont', de: 'Rue du Temple und Rue du Pont' },
      text: {
        en: 'Montreux’s old quarter sits above the station and is reached on foot from the lake, quieter than the quai and closer to the trains than to the water. Tralala Hôtel stands at Rue du Temple 2, and the Restaurant du Pont at Rue du Pont 12.',
        fr: 'Le vieux quartier de Montreux se trouve au-dessus de la gare et se rejoint à pied depuis le lac, plus calme que le quai et plus proche des trains que de l’eau. Le Tralala Hôtel se trouve au 2 rue du Temple, et le Restaurant du Pont au 12 rue du Pont.',
        de: 'Das alte Quartier von Montreux liegt oberhalb des Bahnhofs und ist zu Fuss vom See aus erreichbar, ruhiger als die Promenade und näher an den Zügen als am Wasser. Das Tralala Hôtel steht an der Rue du Temple 2, das Restaurant du Pont an der Rue du Pont 12.',
      },
      points: [
        { en: 'Tralala Hôtel Montreux stands at Rue du Temple 2', fr: 'Le Tralala Hôtel Montreux se trouve au 2 rue du Temple', de: 'Das Tralala Hôtel Montreux steht an der Rue du Temple 2' },
        { en: 'Quieter than the quai, and closer to the station than to the water', fr: 'Plus calme que le quai, et plus proche de la gare que de l’eau', de: 'Ruhiger als die Promenade und näher am Bahnhof als am Wasser' },
      ],
      story: {
        en: 'Above the station, the old town trades the lake view for quiet streets and an easy walk to the trains. The Tralala Hôtel sits right in this quarter, at Rue du Temple 2, which suits a stay built around trains and day trips rather than lounging on the quai. What you give up is the front-row lake access that the promenade hotels offer.',
        fr: 'Au-dessus de la gare, la vieille ville échange la vue sur le lac contre des rues tranquilles et un accès facile aux trains. Le Tralala Hôtel se trouve en plein cœur de ce quartier, au 2 rue du Temple, ce qui convient à un séjour organisé autour des trains et des excursions plutôt que du farniente sur le quai. En échange, on renonce à l’accès direct au lac qu’offrent les hôtels de la promenade.',
        de: 'Oberhalb des Bahnhofs tauscht die Altstadt den Seeblick gegen ruhige Gassen und einen kurzen Weg zu den Zügen. Das Tralala Hôtel liegt mitten in diesem Quartier, an der Rue du Temple 2, was zu einem Aufenthalt passt, der sich um Züge und Tagesausflüge dreht statt um Musse am Ufer. Dafür verzichtet man auf den direkten Seezugang, den die Hotels an der Promenade bieten.',
      },
    },
    {
      title: { en: 'Territet and Veytaux', fr: 'Territet et Veytaux', de: 'Territet und Veytaux' },
      walk: { en: 'Towards Chillon Castle', fr: 'Vers le château de Chillon', de: 'Richtung Schloss Chillon' },
      text: {
        en: 'The southern end of the commune, on the lake road towards Villeneuve. Chillon Castle stands at Avenue de Chillon 21, in Veytaux, with both the train and CGN boats stopping nearby, and the Rochers-de-Naye cog railway climbs from Montreux station through Glion and Caux above this stretch of shore.',
        fr: 'L’extrémité sud de la commune, sur la route du lac en direction de Villeneuve. Le château de Chillon se trouve au 21 avenue de Chillon, à Veytaux, avec le train et les bateaux de la CGN qui s’arrêtent à proximité, et le train à crémaillère des Rochers-de-Naye grimpe depuis la gare de Montreux, via Glion et Caux, au-dessus de ce tronçon de rive.',
        de: 'Das südliche Ende der Gemeinde, an der Seestrasse Richtung Villeneuve. Das Schloss Chillon steht an der Avenue de Chillon 21, in Veytaux, wobei sowohl der Zug als auch die CGN-Schiffe in der Nähe halten, und die Rochers-de-Naye-Zahnradbahn steigt vom Bahnhof Montreux über Glion und Caux oberhalb dieses Uferabschnitts.',
      },
      points: [
        { en: 'Chillon Castle stands at Avenue de Chillon 21, in Veytaux', fr: 'Le château de Chillon se trouve au 21 avenue de Chillon, à Veytaux', de: 'Das Schloss Chillon steht an der Avenue de Chillon 21, in Veytaux' },
        { en: 'The Rochers-de-Naye cog railway climbs from Montreux station through Glion and Caux', fr: 'Le train à crémaillère des Rochers-de-Naye grimpe depuis la gare de Montreux, via Glion et Caux', de: 'Die Rochers-de-Naye-Zahnradbahn steigt vom Bahnhof Montreux über Glion und Caux' },
      ],
      story: {
        en: 'The southern end of the commune puts Chillon Castle and the CGN boat stop within easy reach, and it is also where the Rochers-de-Naye cog railway begins its climb through Glion and Caux. It suits a stay built around the castle and the mountain above it, at the cost of being further from the Casino and the Jazz Festival stages to the north.',
        fr: 'L’extrémité sud de la commune met le château de Chillon et l’embarcadère CGN à portée immédiate, et c’est aussi de là que le train à crémaillère des Rochers-de-Naye entame sa montée, via Glion et Caux. Ce secteur convient à un séjour construit autour du château et de la montagne au-dessus, au prix d’un éloignement du Casino et des scènes du Jazz Festival, plus au nord.',
        de: 'Am südlichen Ende der Gemeinde liegen das Schloss Chillon und die CGN-Anlegestelle in unmittelbarer Nähe, und von hier aus beginnt auch die Rochers-de-Naye-Zahnradbahn ihren Aufstieg über Glion und Caux. Das Viertel eignet sich für einen Aufenthalt rund um das Schloss und den Berg darüber, auf Kosten der Entfernung zum Casino und den Bühnen des Jazz Festival weiter nördlich.',
      },
    },
  ],
  hotels: [
    {
      slug: 'mo-fairmont-montreux-palace',
      name: 'Fairmont Le Montreux Palace',
      photo: '/photos/hotels/mo-fairmont-montreux-palace.jpg',
      url: 'https://www.fairmont.com/en/hotels/montreux/fairmont-le-montreux-palace.html',
      sector: { en: 'The lakefront quai', fr: 'Le quai', de: 'Die Seepromenade' },
      facts: [
        { en: 'Belle Époque house established in 1906', fr: 'Établissement Belle Époque fondé en 1906', de: 'Belle-Époque-Haus, gegründet 1906' },
        { en: '236 rooms and suites', fr: '236 chambres et suites', de: '236 Zimmer und Suiten' },
        { en: 'Fairmont Spa of 2000 m2', fr: 'Fairmont Spa de 2000 m2', de: 'Fairmont Spa auf 2000 m2' },
      ],
      blurb: {
        en: 'A Belle Époque palace on the lakefront quai, established in 1906 with 236 rooms and suites and a 2000 m2 spa. It suits a stay built around the Montreux Jazz Festival, whose stages rise right along this front each July, and our dated prices place it as the most expensive address in this selection, especially in summer.',
        fr: 'Un palace Belle Époque sur le quai, fondé en 1906, avec 236 chambres et suites et un spa de 2000 m2. Il convient à un séjour organisé autour du Montreux Jazz Festival, dont les scènes s’élèvent sur ce front même chaque juillet, et nos prix datés en font l’adresse la plus chère de cette sélection, surtout l’été.',
        de: 'Ein Belle-Époque-Palast an der Seepromenade, 1906 gegründet, mit 236 Zimmern und Suiten sowie einem 2000 m2 grossen Spa. Er eignet sich für einen Aufenthalt rund um das Montreux Jazz Festival, dessen Bühnen jeden Juli genau an dieser Promenade entstehen, und unsere datierten Preise weisen ihn als die teuerste Adresse dieser Auswahl aus, vor allem im Sommer.',
      },
    },
    {
      slug: 'mo-mona',
      name: 'MONA Montreux',
      photo: '/photos/hotels/mo-mona.jpg',
      url: 'https://www.mona-montreux.ch/',
      sector: { en: 'Grand-Rue, town centre', fr: 'Grand-Rue, centre-ville', de: 'Grand-Rue, Stadtzentrum' },
      facts: [
        { en: 'Grand-Rue 81, one street back from the quai', fr: '81 Grand-Rue, une rue en retrait du quai', de: 'Grand-Rue 81, eine Strasse hinter der Promenade' },
      ],
      blurb: {
        en: 'One street back from the quai, at Grand-Rue 81, MONA Montreux gives up the direct lake view for a central position within easy walking reach of both the Casino front and the old town. It suits a stay that mixes the two areas rather than committing to either.',
        fr: 'Une rue en retrait du quai, au 81 Grand-Rue, MONA Montreux renonce à la vue directe sur le lac au profit d’une position centrale, à distance de marche du front du Casino comme de la vieille ville. Il convient à un séjour qui mêle les deux secteurs plutôt que de s’installer dans l’un ou l’autre.',
        de: 'Eine Strasse hinter der Promenade, an der Grand-Rue 81, verzichtet MONA Montreux auf den direkten Seeblick zugunsten einer zentralen Lage, zu Fuss erreichbar sowohl von der Casino-Promenade als auch von der Altstadt. Passend für einen Aufenthalt, der beide Viertel verbindet, statt sich für eines zu entscheiden.',
      },
    },
    {
      slug: 'mo-helvetie',
      name: 'Hôtel Helvétie',
      photo: '/photos/hotels/mo-helvetie.jpg',
      url: 'https://helvetie.ch/',
      sector: { en: 'Avenue du Casino, lakefront', fr: 'Avenue du Casino, quai', de: 'Avenue du Casino, Seepromenade' },
      facts: [
        { en: 'Avenue du Casino 32, on the Casino avenue', fr: '32 avenue du Casino, sur l’avenue du Casino', de: 'Avenue du Casino 32, an der Casino-Allee' },
        { en: 'The house dates its origin to the 18th century', fr: 'La maison fait remonter ses origines au XVIIIe siècle', de: 'Das Haus führt seine Ursprünge auf das 18. Jahrhundert zurück' },
      ],
      blurb: {
        en: 'On Avenue du Casino, directly on the lakefront quai, the Hôtel Helvétie traces its origin to the 18th century. It puts guests on the water within a short walk of the Casino and the Jazz Festival stages, and our dated prices show it costing about the same whichever season you book.',
        fr: 'Sur l’avenue du Casino, directement sur le quai, l’Hôtel Helvétie fait remonter ses origines au XVIIIe siècle. Il place ses clients au bord de l’eau, à quelques pas du Casino et des scènes du Jazz Festival, et nos prix datés montrent un tarif quasiment identique quelle que soit la saison réservée.',
        de: 'An der Avenue du Casino, direkt an der Seepromenade, führt das Hôtel Helvétie seine Ursprünge auf das 18. Jahrhundert zurück. Es bringt seine Gäste ans Wasser, wenige Schritte vom Casino und den Bühnen des Jazz Festival entfernt, und unsere datierten Preise zeigen einen nahezu gleichen Tarif, unabhängig von der gebuchten Saison.',
      },
    },
    {
      slug: 'mo-bon-port',
      name: 'Hôtel Bon Port',
      photo: '/photos/hotels/mo-bon-port.jpg',
      url: 'https://www.hotelbonport.ch/',
      sector: { en: 'Rue du Théâtre, centre', fr: 'Rue du Théâtre, centre', de: 'Rue du Théâtre, Zentrum' },
      facts: [
        { en: 'Three-star house, Rue du Théâtre 4', fr: 'Établissement trois étoiles, 4 rue du Théâtre', de: 'Drei-Sterne-Haus, Rue du Théâtre 4' },
        { en: 'Described by the hotel as in the centre of Montreux, for business or leisure', fr: 'Présenté par l’hôtel comme au centre de Montreux, pour affaires ou loisirs', de: 'Vom Hotel als im Zentrum von Montreux gelegen beschrieben, für Geschäft oder Freizeit' },
      ],
      blurb: {
        en: 'A three-star house on Rue du Théâtre, described by the hotel itself as in the centre of Montreux for business or leisure. It is the least expensive address in this selection across every date we checked, making it the practical choice for a short or budget-minded stay near the station.',
        fr: 'Un établissement trois étoiles sur la rue du Théâtre, que l’hôtel présente lui-même comme au centre de Montreux, pour affaires ou loisirs. C’est l’adresse la moins chère de cette sélection à chacune des dates vérifiées, un choix pratique pour un séjour court ou plus serré, près de la gare.',
        de: 'Ein Drei-Sterne-Haus an der Rue du Théâtre, vom Hotel selbst als im Zentrum von Montreux gelegen beschrieben, für Geschäft oder Freizeit. An jedem geprüften Datum ist es die günstigste Adresse dieser Auswahl, eine praktische Wahl für einen kurzen oder preisbewussten Aufenthalt nahe dem Bahnhof.',
      },
    },
    {
      slug: 'mo-tralala',
      name: 'Tralala Hôtel Montreux',
      photo: '/photos/hotels/mo-tralala.jpg',
      url: 'https://www.tralalahotel.ch/',
      sector: { en: 'Rue du Temple, old town', fr: 'Rue du Temple, vieille ville', de: 'Rue du Temple, Altstadt' },
      facts: [
        { en: 'Rue du Temple 2, in the old quarter above the lake', fr: '2 rue du Temple, dans le vieux quartier au-dessus du lac', de: 'Rue du Temple 2, im alten Quartier oberhalb des Sees' },
      ],
      blurb: {
        en: 'In the old quarter above the lake, at Rue du Temple 2, the Tralala Hôtel puts guests among the quieter streets rather than on the busy quai. It suits a stay built around the station and day trips, with the Restaurant du Pont a short walk away on Rue du Pont.',
        fr: 'Dans le vieux quartier au-dessus du lac, au 2 rue du Temple, le Tralala Hôtel installe ses clients dans des rues plus calmes qu’en bordure du quai animé. Il convient à un séjour organisé autour de la gare et des excursions, avec le Restaurant du Pont à quelques pas, rue du Pont.',
        de: 'Im alten Quartier oberhalb des Sees, an der Rue du Temple 2, bringt das Tralala Hôtel seine Gäste in ruhigere Strassen statt an die belebte Promenade. Es eignet sich für einen Aufenthalt rund um den Bahnhof und Tagesausflüge, mit dem Restaurant du Pont wenige Schritte entfernt an der Rue du Pont.',
      },
    },
  ],
  hotelsNote: {
    en: 'Facts taken from each hotel’s own website on 16 September 2026. No ratings or reviews on this guide.',
    fr: 'Informations reprises du site de chaque hôtel le 16 septembre 2026. Aucune note ni aucun avis sur ce guide.',
    de: 'Angaben von der jeweiligen Hotel-Website, Stand 16. September 2026. Keine Bewertungen oder Rezensionen.',
  },
  practical: {
    title: { en: 'Montreux, in practice', fr: 'Montreux, en pratique', de: 'Montreux, in der Praxis' },
    items: [
      {
        title: { en: 'Chillon Castle', fr: 'Le château de Chillon', de: 'Schloss Chillon' },
        text: {
          en: 'Chillon Castle stands at Avenue de Chillon 21, in Veytaux, on the lake road south of town, reached by train, bus or CGN boat rather than on foot from the quai. Base yourself in Territet or Veytaux if the castle is the main reason for the trip, since it cuts that ride to a few minutes.',
          fr: 'Le château de Chillon se trouve au 21 avenue de Chillon, à Veytaux, sur la route du lac au sud de la ville, accessible en train, en bus ou en bateau CGN plutôt qu’à pied depuis le quai. Installez-vous à Territet ou à Veytaux si le château est le principal motif du séjour, le trajet se réduisant alors à quelques minutes.',
          de: 'Das Schloss Chillon steht an der Avenue de Chillon 21, in Veytaux, an der Seestrasse südlich der Stadt, erreichbar mit Zug, Bus oder CGN-Schiff statt zu Fuss vom Quai aus. Wohnen Sie in Territet oder Veytaux, wenn das Schloss der Hauptgrund der Reise ist, dann verkürzt sich die Fahrt auf wenige Minuten.',
        },
      },
      {
        title: { en: 'By car', fr: 'En voiture', de: 'Mit dem Auto' },
        text: {
          en: 'Montreux is reached by road with no car ban and no access permit, and paid town parking sits in the centre, near Rue de Bon-Port and Rue du Théâtre. Book a hotel close to these two streets if you are driving, since that is where the parking sits.',
          fr: 'Montreux se rejoint par la route, sans interdiction de circuler ni permis d’accès, et le stationnement payant de la ville se trouve dans le centre, près de la rue de Bon-Port et de la rue du Théâtre. Réservez un hôtel proche de ces deux rues si vous venez en voiture, puisque c’est là que se trouve le stationnement.',
          de: 'Montreux ist mit dem Auto erreichbar, ohne Fahrverbot und ohne Zufahrtsbewilligung, und das gebührenpflichtige Parkieren der Stadt liegt im Zentrum, nahe der Rue de Bon-Port und der Rue du Théâtre. Buchen Sie ein Hotel nahe diesen beiden Strassen, wenn Sie mit dem Auto kommen, denn dort befindet sich das Parkieren.',
        },
      },
      {
        title: { en: 'The GoldenPass Express', fr: 'Le GoldenPass Express', de: 'Der GoldenPass Express' },
        text: {
          en: 'Launched on 11 December 2022, two return services a day run Montreux to Interlaken in 3 h 15, switching from metre gauge to standard gauge at Zweisimmen with a variable-gauge bogie, without passengers changing trains. With only two departures each way, book the seat as soon as the date is fixed.',
          fr: 'Mis en service le 11 décembre 2022, deux allers-retours par jour relient Montreux à Interlaken en 3 h 15, en passant de la voie métrique à la voie normale à Zweisimmen grâce à un bogie à écartement variable, sans que les voyageurs changent de train. Avec seulement deux départs par sens, réservez la place dès que la date est fixée.',
          de: 'Seit dem 11. Dezember 2022 verkehren zwei Hin- und Rückfahrten täglich zwischen Montreux und Interlaken in 3 Std. 15, wobei in Zweisimmen dank eines Rollbocks mit variabler Spurweite von Meter- auf Normalspur gewechselt wird, ohne dass die Reisenden umsteigen. Bei nur zwei Abfahrten je Richtung reservieren Sie die Plätze am besten, sobald das Datum feststeht.',
        },
      },
      {
        title: { en: 'CGN boats', fr: 'Bateaux CGN', de: 'CGN-Schiffe' },
        text: {
          en: 'CGN boats call at both Montreux and Chillon, and the Swiss Travel Pass is valid on all CGN cruises except events, as are half-fare and GA travelcards. If you already hold one of these passes, the boat to Chillon costs nothing extra on top of the castle ticket.',
          fr: 'Les bateaux de la CGN font escale à Montreux comme à Chillon, et le Swiss Travel Pass est valable sur toutes les croisières CGN, sauf événements, tout comme les abonnements demi-tarif et AG. Si vous détenez déjà l’un de ces titres, le bateau jusqu’à Chillon ne coûte rien de plus que le billet du château.',
          de: 'Die CGN-Schiffe legen sowohl in Montreux als auch in Chillon an, und der Swiss Travel Pass gilt auf allen CGN-Kreuzfahrten ausser Events, ebenso wie Halbtax- und GA-Abonnemente. Wer bereits einen dieser Ausweise besitzt, zahlt für die Fahrt nach Chillon nichts zusätzlich zum Schlosseintritt.',
        },
      },
    ],
  },
  seasons: {
    summer: {
      title: { en: 'Summer in Montreux', fr: 'L’été à Montreux', de: 'Sommer in Montreux' },
      base: {
        en: 'With the Montreux Jazz Festival filling the lakefront and Chillon open until 19:00, the quai around the Casino is the base to book for summer, close to both. Leave the Rochers-de-Naye for early September, since the line stops for works from 14 September.',
        fr: 'Avec le Montreux Jazz Festival qui occupe le front de lac et Chillon ouvert jusqu’à 19h00, le quai autour du Casino est la base à réserver pour l’été, proche des deux. Prévoyez les Rochers-de-Naye avant début septembre, la ligne s’arrêtant pour travaux dès le 14 septembre.',
        de: 'Mit dem Montreux Jazz Festival an der Seepromenade und Chillon bis 19.00 Uhr geöffnet, ist die Promenade rund um das Casino die Basis, die Sie für den Sommer buchen sollten, nahe an beidem. Planen Sie die Rochers-de-Naye vor Anfang September ein, da die Linie ab dem 14. September wegen Bauarbeiten stillsteht.',
      },
      facts: [
        { value: '2 → 17.7.2027', label: { en: 'Montreux Jazz Festival, 61st edition', fr: 'Montreux Jazz Festival, 61e édition', de: 'Montreux Jazz Festival, 61. Ausgabe' } },
        { value: 'Apr → Sep', label: { en: 'Chillon Castle open 09:00 to 19:00, last entry 18:00', fr: 'château de Chillon ouvert de 09h00 à 19h00, dernière entrée à 18h00', de: 'Schloss Chillon geöffnet von 09.00 bis 19.00 Uhr, letzter Einlass 18.00 Uhr' } },
        { value: '14.9 → 17.10.2026', label: { en: 'Rochers-de-Naye cog railway closed for works', fr: 'train à crémaillère des Rochers-de-Naye fermé pour travaux', de: 'Rochers-de-Naye-Zahnradbahn wegen Bauarbeiten geschlossen' } },
      ],
      note: {
        en: 'Sources: montreuxjazzfestival.com, chillon.ch, montreuxriviera.com, checked 16 September 2026.',
        fr: 'Sources : montreuxjazzfestival.com, chillon.ch, montreuxriviera.com, vérifiées le 16 septembre 2026.',
        de: 'Quellen: montreuxjazzfestival.com, chillon.ch, montreuxriviera.com, geprüft am 16. September 2026.',
      },
    },
    winter: {
      title: { en: 'Winter in Montreux', fr: 'L’hiver à Montreux', de: 'Winter in Montreux' },
      base: {
        en: 'Chillon keeps shorter hours in winter and closes on 1 January and 25 December, while the CGN fleet reduces to four boats that still call at both Montreux and Chillon, so the quai stays the practical base even in the quiet season. Book ahead of 1 April 2027 too, when the Rochers-de-Naye line closes again for works until 21 May.',
        fr: 'Chillon garde des horaires réduits l’hiver et ferme le 1er janvier et le 25 décembre, tandis que la flotte CGN se réduit à quatre bateaux qui desservent toujours Montreux comme Chillon : le quai reste donc la base pratique, même en saison creuse. Anticipez aussi le 1er avril 2027, quand la ligne des Rochers-de-Naye ferme à nouveau pour travaux jusqu’au 21 mai.',
        de: 'Chillon hat im Winter kürzere Öffnungszeiten und schliesst am 1. Januar und 25. Dezember, während sich die CGN-Flotte auf vier Schiffe reduziert, die weiterhin sowohl Montreux als auch Chillon anlaufen: Die Promenade bleibt also auch in der ruhigen Saison die praktische Basis. Planen Sie auch den 1. April 2027 ein, wenn die Rochers-de-Naye-Linie bis zum 21. Mai erneut wegen Bauarbeiten schliesst.',
      },
      facts: [
        { value: 'Nov → Feb', label: { en: 'Chillon Castle open 10:00 to 17:00, closed 1 January and 25 December', fr: 'château de Chillon ouvert de 10h00 à 17h00, fermé le 1er janvier et le 25 décembre', de: 'Schloss Chillon geöffnet von 10.00 bis 17.00 Uhr, geschlossen am 1. Januar und 25. Dezember' } },
        { value: '4', label: { en: 'CGN Belle Époque boats sailing all year: Rhône, Savoie, Vevey, Italie', fr: 'bateaux Belle Époque CGN naviguant toute l’année : Rhône, Savoie, Vevey, Italie', de: 'ganzjährig fahrende CGN-Belle-Époque-Schiffe: Rhône, Savoie, Vevey, Italie' } },
      ],
      note: {
        en: 'Sources: chillon.ch, cgn.ch, montreuxriviera.com, checked 16 September 2026.',
        fr: 'Sources : chillon.ch, cgn.ch, montreuxriviera.com, vérifiées le 16 septembre 2026.',
        de: 'Quellen: chillon.ch, cgn.ch, montreuxriviera.com, geprüft am 16. September 2026.',
      },
    },
  },
  doing: {
    title: { en: 'What to do in Montreux', fr: 'Que faire à Montreux', de: 'Was man in Montreux unternimmt' },
    intro: {
      en: 'Montreux is compact enough to see on foot, but a few places give a stay its shape: the lake trail through Lavaux, the two trains that leave from the same station, Chillon Castle and the festival stages, and two addresses on the water for dinner. Names, times and figures come from Montreux Riviera tourism, the MOB and Chillon Castle itself, checked on their own pages.',
      fr: 'Montreux se parcourt aisément à pied, mais quelques lieux donnent sa forme à un séjour : le sentier du lac à travers Lavaux, les deux trains qui partent de la même gare, le château de Chillon et les scènes du festival, et deux adresses au bord de l’eau pour dîner. Noms, horaires et chiffres proviennent de Montreux Riviera, de la MOB et du château de Chillon lui-même, vérifiés sur leurs propres pages.',
      de: 'Montreux lässt sich gut zu Fuss erkunden, doch einige Orte prägen einen Aufenthalt: der Seenweg durch Lavaux, die zwei Züge, die vom selben Bahnhof abfahren, das Schloss Chillon mit den Festivalbühnen, und zwei Adressen am Wasser zum Abendessen. Namen, Zeiten und Zahlen stammen von Montreux Riviera, der MOB und dem Schloss Chillon selbst, auf deren eigenen Seiten geprüft.',
    },
    groups: [
      {
        kind: 'walk',
        title: { en: 'Vines and the mountain above', fr: 'Vignes et montagne', de: 'Reben und der Berg darüber' },
        items: [
          {
            name: 'Lavaux vineyard terraces, Lutry to Saint-Saphorin',
            meta: { en: '11.1 km · 3 h 15 · +369 m / -393 m · easy · reached via Vevey', fr: '11,1 km · 3 h 15 · +369 m / -393 m · facile · accessible via Vevey', de: '11,1 km · 3 Std. 15 · +369 m / -393 m · leicht · erreichbar via Vevey' },
            text: {
              en: 'Published by the Montreux Riviera tourist office itself, the route runs from Lutry to Saint-Saphorin through the Lavaux vineyard terraces in about three hours, an easy day trip reached from Montreux by train via Vevey rather than a walk that starts at your hotel door.',
              fr: 'Publié par l’office du tourisme Montreux Riviera lui-même, l’itinéraire va de Lutry à Saint-Saphorin à travers les terrasses viticoles de Lavaux en environ trois heures, une excursion facile qui se rejoint depuis Montreux en train via Vevey plutôt qu’une marche au départ de l’hôtel.',
              de: 'Vom Tourismusbüro Montreux Riviera selbst veröffentlicht, führt die Route von Lutry nach Saint-Saphorin durch die Weinbergterrassen von Lavaux in rund drei Stunden, ein einfacher Tagesausflug, den man ab Montreux mit dem Zug über Vevey erreicht, statt direkt vor der Hoteltür zu starten.',
            },
          },
          {
            name: { en: 'Rochers-de-Naye trails and via ferrata', fr: 'Sentiers et via ferrata des Rochers-de-Naye', de: 'Wanderwege und Via Ferrata der Rochers-de-Naye' },
            meta: { en: 'at the summit, reached by cog railway · closed 14 Sep-17 Oct 2026 and 1 Apr-21 May 2027', fr: 'au sommet, accessible en crémaillère · fermé du 14.09 au 17.10.2026 et du 1.04 au 21.05.2027', de: 'auf dem Gipfel, mit der Zahnradbahn erreichbar · geschlossen 14.09.-17.10.2026 und 1.04.-21.05.2027' },
            text: {
              en: 'At the summit, the operator lists hiking trails, a via ferrata, the Rambertia alpine botanical garden and two restaurants, the Buvette de Jaman and the panoramic Plein Roc, all open through the summer, so a full day up top needs no packed lunch. Check the closure dates first, since the line shuts for works from 14 September to 17 October 2026 and again the following spring.',
              fr: 'Au sommet, l’exploitant recense des sentiers de randonnée, une via ferrata, le jardin alpin botanique de la Rambertia et deux restaurants, la Buvette de Jaman et le panoramique Plein Roc, ouverts tout l’été : une journée complète là-haut ne demande donc pas de pique-nique. Vérifiez d’abord les dates de fermeture, la ligne s’arrêtant pour travaux du 14 septembre au 17 octobre 2026, puis de nouveau au printemps suivant.',
              de: 'Auf dem Gipfel führt der Betreiber Wanderwege, eine Via Ferrata, den alpinen botanischen Garten Rambertia sowie zwei den ganzen Sommer geöffnete Restaurants auf, die Buvette de Jaman und das Panoramarestaurant Plein Roc, sodass ein ganzer Tag oben ohne Lunchpaket auskommt. Prüfen Sie zuerst die Schliesstermine, da die Linie vom 14. September bis 17. Oktober 2026 und im folgenden Frühling erneut wegen Bauarbeiten stillsteht.',
            },
          },
        ],
      },
      {
        kind: 'ride',
        title: { en: 'Two trains from the same station', fr: 'Deux trains, la même gare', de: 'Zwei Züge, ein Bahnhof' },
        items: [
          {
            name: 'Montreux to Rochers-de-Naye cog railway',
            meta: { en: '2042 m · 55 min from Montreux', fr: '2042 m · 55 min depuis Montreux', de: '2042 m · 55 Min. ab Montreux' },
            text: {
              en: 'The line reaches 2042 m from the town’s own station in 55 minutes, with the alpine garden, the via ferrata and two restaurants waiting at the top in summer, so it works as a half-day trip rather than a quick detour. Book around the autumn and spring closures, when the line stops running altogether.',
              fr: 'La ligne atteint 2042 m depuis la gare même de la ville en 55 minutes, avec le jardin alpin, la via ferrata et deux restaurants qui attendent au sommet en été : une sortie d’une demi-journée plutôt qu’un simple détour. Organisez-vous autour des fermetures d’automne et de printemps, quand la ligne s’arrête complètement.',
              de: 'Die Linie erreicht ab dem eigenen Bahnhof der Stadt in 55 Minuten 2042 m, mit dem Alpengarten, der Via Ferrata und zwei Restaurants, die im Sommer oben warten, ein Ausflug für einen halben Tag statt nur einen kurzen Abstecher. Planen Sie um die Schliessungen im Herbst und Frühling herum, wenn die Linie ganz stillsteht.',
            },
          },
          {
            name: 'GoldenPass Express',
            meta: { en: 'Montreux → Interlaken · 3 h 15, no change · two return services a day', fr: 'Montreux → Interlaken · 3 h 15, sans changement · deux allers-retours par jour', de: 'Montreux → Interlaken · 3 Std. 15, ohne Umsteigen · zwei Hin- und Rückfahrten täglich' },
            text: {
              en: 'Launched on 11 December 2022, the train uses a variable-gauge bogie to switch from metre gauge to standard gauge at Zweisimmen without passengers changing trains, but only two return services run each day, so it is worth booking the seat well ahead of the date you want.',
              fr: 'Mis en service le 11 décembre 2022, le train passe de la voie métrique à la voie normale à Zweisimmen grâce à un bogie à écartement variable, sans que les voyageurs changent de train, mais seulement deux allers-retours circulent chaque jour : mieux vaut réserver sa place bien avant la date voulue.',
              de: 'Seit dem 11. Dezember 2022 wechselt der Zug dank eines Rollbocks mit variabler Spurweite in Zweisimmen von Meter- auf Normalspur, ohne dass die Reisenden umsteigen, doch es verkehren nur zwei Hin- und Rückfahrten pro Tag, weshalb sich eine frühzeitige Reservierung lohnt.',
            },
          },
        ],
      },
      {
        kind: 'local',
        title: { en: 'Chillon and the festival stages', fr: 'Chillon et les scènes du festival', de: 'Chillon und die Festivalbühnen' },
        items: [
          {
            name: 'Chillon Castle',
            meta: { en: 'Avenue de Chillon 21, Veytaux · CHF 15 adults, CHF 7 children', fr: '21 avenue de Chillon, Veytaux · 15 CHF adultes, 7 CHF enfants', de: 'Avenue de Chillon 21, Veytaux · CHF 15 Erwachsene, CHF 7 Kinder' },
            text: {
              en: 'Described by the castle itself as Switzerland’s most visited historical monument, it is reached from Montreux by train, bus or CGN boat along the lake road, and entry is free with a Swiss Travel Pass carrying the Swiss Museum Pass option, worth checking before you pay at the door.',
              fr: 'Présenté par le château lui-même comme le monument historique le plus visité de Suisse, il se rejoint depuis Montreux en train, en bus ou en bateau CGN, le long de la route du lac, et l’entrée est gratuite avec un Swiss Travel Pass incluant l’option Swiss Museum Pass, à vérifier avant de payer sur place.',
              de: 'Vom Schloss selbst als meistbesuchtes historisches Baudenkmal der Schweiz bezeichnet, erreicht man es ab Montreux mit Zug, Bus oder CGN-Schiff entlang der Seestrasse, und der Eintritt ist mit einem Swiss Travel Pass mit der Option Swiss Museum Pass kostenlos, was sich vor der Kasse zu prüfen lohnt.',
            },
          },
          {
            name: 'Montreux Jazz Festival',
            meta: { en: '2 to 17 July 2027 · 61st edition', fr: '2 au 17 juillet 2027 · 61e édition', de: '2. bis 17. Juli 2027 · 61. Ausgabe' },
            text: {
              en: 'Founded in 1967 by Claude Nobs, the festival stages rise on and around the lakefront quai each July, and with the 61st edition running from 2 to 17 July 2027, rooms along that same stretch of quai are the first to fill, so book the dates early if the festival is the reason for the trip.',
              fr: 'Fondé en 1967 par Claude Nobs, le festival dresse ses scènes sur le quai et à ses abords chaque mois de juillet, et avec la 61e édition prévue du 2 au 17 juillet 2027, les chambres de ce même tronçon de quai se remplissent en premier : mieux vaut réserver tôt si le festival est le motif du séjour.',
              de: 'Das 1967 von Claude Nobs gegründete Festival errichtet seine Bühnen jeden Juli auf und um die Seepromenade, und da die 61. Ausgabe vom 2. bis 17. Juli 2027 läuft, sind die Zimmer entlang genau dieses Promenadenabschnitts zuerst ausgebucht: Wer wegen des Festivals kommt, bucht die Daten am besten früh.',
            },
          },
        ],
      },
      {
        kind: 'table',
        title: { en: 'Where to eat', fr: 'Où manger', de: 'Wo essen' },
        items: [
          {
            name: 'Le Palais Oriental',
            meta: { en: 'on the lake', fr: 'au bord du lac', de: 'am See' },
            text: {
              en: 'Its own site describes a Moorish building on the shore of Lake Geneva, serving the cooking of Iran, Lebanon and Morocco, an easy choice for an evening on the quai without walking far from a lakefront hotel.',
              fr: 'Son propre site décrit un bâtiment mauresque au bord du Léman, avec une cuisine d’Iran, du Liban et du Maroc, un choix facile pour une soirée sur le quai sans s’éloigner d’un hôtel du front de lac.',
              de: 'Die eigene Website beschreibt ein maurisches Gebäude am Ufer des Genfersees, mit Küche aus dem Iran, dem Libanon und Marokko, eine einfache Wahl für einen Abend an der Promenade, ohne weit von einem Hotel am See zu laufen.',
            },
          },
          {
            name: 'Brasserie J5',
            meta: { en: '12:00-22:00, continuous service', fr: '12h00-22h00, service continu', de: '12.00-22.00 Uhr, durchgehend geöffnet' },
            text: {
              en: 'On the lake, the restaurant publishes continuous service from midday to 22:00 and a seasonal market-based menu, with booking advised, which makes it a useful option outside the usual lunch and dinner windows.',
              fr: 'Au bord du lac, le restaurant annonce un service continu de midi à 22h00 et une carte de saison inspirée du marché, réservation conseillée, une option utile en dehors des horaires habituels du déjeuner et du dîner.',
              de: 'Am See wirbt das Restaurant mit durchgehendem Service von mittags bis 22.00 Uhr und einer saisonalen, marktinspirierten Karte, Reservierung empfohlen, eine nützliche Option ausserhalb der üblichen Mittags- und Abendzeiten.',
            },
          },
        ],
      },
    ],
    note: {
      en: 'Figures and hours from Montreux Riviera tourism, MOB and Chillon Castle, checked on 16 September 2026. We publish no ratings and no route descriptions: check conditions on the spot before you set off.',
      fr: 'Chiffres et horaires provenant de Montreux Riviera, de la MOB et du château de Chillon, vérifiés le 16 septembre 2026. Nous ne publions ni notes ni descriptifs d’itinéraires : renseignez-vous sur place avant de partir.',
      de: 'Zahlen und Öffnungszeiten von Montreux Riviera, der MOB und dem Schloss Chillon, geprüft am 16. September 2026. Wir veröffentlichen keine Bewertungen und keine Routenbeschreibungen: Erkundigen Sie sich vor Ort, bevor Sie losgehen.',
    },
  },
  faq: [
    {
      q: { en: 'How long is the train from Geneva airport to Montreux?', fr: 'Combien de temps dure le train depuis l’aéroport de Genève ?', de: 'Wie lange dauert die Zugfahrt ab dem Flughafen Genf?' },
      a: {
        en: 'The direct IR 90 takes 1 h 14 and the direct IR 95 takes 1 h 22, and no change of train is needed either way. You can stay in your seat from the airport to Montreux, which makes a late arrival with luggage simple.',
        fr: 'L’IR 90 direct met 1 h 14 et l’IR 95 direct 1 h 22, sans aucun changement de train dans les deux cas. On reste assis de l’aéroport jusqu’à Montreux, ce qui simplifie une arrivée tardive avec des bagages.',
        de: 'Der direkte IR 90 braucht 1 Std. 14, der direkte IR 95 1 Std. 22, in beiden Fällen ohne Umsteigen. Man bleibt vom Flughafen bis Montreux sitzen, was eine späte Ankunft mit Gepäck einfach macht.',
      },
    },
    {
      q: { en: 'When is the Montreux Jazz Festival?', fr: 'Quand a lieu le Montreux Jazz Festival ?', de: 'Wann findet das Montreux Jazz Festival statt?' },
      a: {
        en: 'The 61st edition runs from 2 to 17 July 2027, continuing a festival founded in 1967 by Claude Nobs. Rooms along the lakefront quai, where the stages themselves rise, fill first, so book those dates well ahead if the festival is the reason for your stay.',
        fr: 'La 61e édition se déroule du 2 au 17 juillet 2027, dans la continuité d’un festival fondé en 1967 par Claude Nobs. Les chambres du quai, où s’élèvent les scènes elles-mêmes, se remplissent en premier : réservez ces dates bien à l’avance si le festival motive votre séjour.',
        de: 'Die 61. Ausgabe findet vom 2. bis 17. Juli 2027 statt, als Fortsetzung eines 1967 von Claude Nobs gegründeten Festivals. Zimmer entlang der Seepromenade, wo die Bühnen selbst entstehen, sind zuerst ausgebucht: Reservieren Sie diese Termine frühzeitig, wenn das Festival der Grund Ihres Aufenthalts ist.',
      },
    },
    {
      q: { en: 'Is Chillon Castle in Montreux?', fr: 'Le château de Chillon est-il à Montreux ?', de: 'Liegt das Schloss Chillon in Montreux?' },
      a: {
        en: 'It stands at Avenue de Chillon 21, in Veytaux, at the southern end of the Montreux Riviera, reached by train, bus or CGN boat rather than on foot from the centre. Adults pay CHF 15, or nothing with a Swiss Travel Pass carrying the Swiss Museum Pass option, worth checking before you buy a ticket at the door.',
        fr: 'Il se trouve au 21 avenue de Chillon, à Veytaux, à l’extrémité sud de la Riviera montreusienne, accessible en train, en bus ou en bateau CGN plutôt qu’à pied depuis le centre. Les adultes paient 15 CHF, ou rien avec un Swiss Travel Pass incluant l’option Swiss Museum Pass, à vérifier avant d’acheter un billet sur place.',
        de: 'Es steht an der Avenue de Chillon 21, in Veytaux, am südlichen Ende der Montreux Riviera, erreichbar mit Zug, Bus oder CGN-Schiff statt zu Fuss vom Zentrum aus. Erwachsene zahlen CHF 15, oder nichts mit einem Swiss Travel Pass mit der Option Swiss Museum Pass, was sich vor dem Kauf an der Kasse zu prüfen lohnt.',
      },
    },
    {
      q: { en: 'Can I go up the Rochers-de-Naye?', fr: 'Peut-on monter aux Rochers-de-Naye ?', de: 'Kann man auf die Rochers-de-Naye fahren?' },
      a: {
        en: 'The cog railway reaches 2042 m in 55 minutes from Montreux, but the line is closed for works from 14 September to 17 October 2026 and again from 1 April to 21 May 2027. Check those dates before you plan a trip to the top, since no alternative route is offered during the closures.',
        fr: 'Le train à crémaillère atteint 2042 m en 55 minutes depuis Montreux, mais la ligne est fermée pour travaux du 14 septembre au 17 octobre 2026, puis à nouveau du 1er avril au 21 mai 2027. Vérifiez ces dates avant de prévoir une montée au sommet, aucun itinéraire de remplacement n’étant proposé pendant les fermetures.',
        de: 'Die Zahnradbahn erreicht ab Montreux in 55 Minuten 2042 m, aber die Linie ist vom 14. September bis 17. Oktober 2026 und erneut vom 1. April bis 21. Mai 2027 wegen Bauarbeiten geschlossen. Prüfen Sie diese Daten, bevor Sie eine Fahrt zum Gipfel planen, da während der Schliessungen keine Ersatzstrecke angeboten wird.',
      },
    },
    {
      q: { en: 'Can I reach Interlaken without changing trains?', fr: 'Peut-on rejoindre Interlaken sans changer de train ?', de: 'Kann man Interlaken ohne Umsteigen erreichen?' },
      a: {
        en: 'Yes. The GoldenPass Express runs Montreux to Interlaken in 3 h 15 with no change, using a variable-gauge bogie at Zweisimmen. It started on 11 December 2022 and runs only twice each way a day, so reserve the seat as soon as your dates are set.',
        fr: 'Oui. Le GoldenPass Express relie Montreux à Interlaken en 3 h 15 sans changement, grâce à un bogie à écartement variable à Zweisimmen. Il est entré en service le 11 décembre 2022 et ne circule que deux fois par jour dans chaque sens : réservez la place dès que vos dates sont fixées.',
        de: 'Ja. Der GoldenPass Express fährt ohne Umsteigen in 3 Std. 15 von Montreux nach Interlaken, dank eines Rollbocks mit variabler Spurweite in Zweisimmen. Er verkehrt seit dem 11. Dezember 2022 und nur zweimal täglich in jede Richtung, reservieren Sie die Plätze also, sobald Ihre Daten feststehen.',
      },
    },
  ],
  neighbours: ['vevey', 'lausanne', 'chateau-d-oex', 'gstaad'],
}
