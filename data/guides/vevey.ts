import type { DestinationGuide } from '../types'

// Sources in data/SOURCES-vevey.md (checked 16/09/2026). No number without a source.
export const vevey: DestinationGuide = {
  slug: 'vevey',
  stamp: 'generic',
  updated: '2026-09-16',
  meta: {
    title: { en: 'Where to stay in Vevey: the Grande Place or the station', fr: 'Où dormir à Vevey : la Grande Place ou la gare', de: 'Wo übernachten in Vevey: Grande Place oder Bahnhof' },
    description: {
      en: 'Vevey area by area: the market square on the lake, the railway station and the slopes towards Chaplin’s World, with real hotels and the Lavaux terraces.',
      fr: 'Vevey secteur par secteur : la place du marché au bord du lac, la gare et les hauteurs vers Chaplin’s World, avec de vraies adresses et Lavaux.',
      de: 'Vevey Ortsteil für Ortsteil: der Marktplatz am See, der Bahnhof und die Hänge Richtung Chaplin’s World, mit echten Adressen und den Terrassen von Lavaux.',
    },
  },
  eyebrow: { en: 'Lake Geneva · Vevey', fr: 'Lac Léman · Vevey', de: 'Genfersee · Vevey' },
  title: { en: 'Where to stay in Vevey', fr: 'Où dormir à Vevey', de: 'Wo übernachten in Vevey' },
  intro: {
    en: 'A lakeside town at 383 m, 14 minutes from Lausanne and 6 from Montreux by direct train, with its market held every Tuesday and Saturday on the Grande Place by the lake. The Fête des Vignerons, held in Vevey, has been on the UNESCO Representative List of the Intangible Cultural Heritage of Humanity since 1 December 2016. Above the lakefront, Chaplin’s World occupies a four-hectare estate at Corsier-sur-Vevey, reached by bus in about 15 minutes from the station.',
    fr: 'Ville au bord du Léman, à 383 m, à 14 minutes de Lausanne et 6 de Montreux en train direct, avec son marché tenu chaque mardi et samedi sur la Grande Place, au bord du lac. La Fête des Vignerons, qui se tient à Vevey, est inscrite sur la Liste représentative du patrimoine culturel immatériel de l’humanité de l’UNESCO depuis le 1er décembre 2016. Au-dessus du front de lac, Chaplin’s World occupe un domaine de quatre hectares à Corsier-sur-Vevey, accessible en bus en environ 15 minutes depuis la gare.',
    de: 'Eine Stadt am Ufer des Genfersees, auf 383 m, 14 Minuten von Lausanne und 6 von Montreux mit dem direkten Zug entfernt, mit ihrem Markt, der jeden Dienstag und Samstag auf der Grande Place am See stattfindet. Das in Vevey abgehaltene Fête des Vignerons steht seit dem 1. Dezember 2016 auf der Repräsentativen Liste des immateriellen Kulturerbes der Menschheit der UNESCO. Oberhalb der Seepromenade erstreckt sich Chaplin’s World auf einem vier Hektar grossen Anwesen in Corsier-sur-Vevey, ab dem Bahnhof in rund 15 Minuten mit dem Bus erreichbar.',
  },
  quickAnswer: {
    en: 'Stay in Vevey for a market town on the lake, with Chaplin’s World in the hills above and the Lavaux vineyard terraces starting at its western edge. For the Montreux Jazz Festival and Chillon Castle, stay in Montreux instead, and for a full lake city with the Olympic Museum, choose Lausanne.',
    fr: 'Dormez à Vevey pour une ville de marché au bord du lac, avec Chaplin’s World dans les hauteurs et les terrasses viticoles de Lavaux qui débutent à sa lisière ouest. Pour le Montreux Jazz Festival et le château de Chillon, préférez Montreux, et pour une ville lacustre complète avec le Musée olympique, choisissez Lausanne.',
    de: 'Übernachten Sie in Vevey für eine Marktstadt am See, mit Chaplin’s World in den Hügeln darüber und den Weinbergterrassen von Lavaux, die an ihrem westlichen Rand beginnen. Für das Montreux Jazz Festival und das Schloss Chillon übernachten Sie stattdessen in Montreux, und für eine vollständige Seestadt mit dem Olympischen Museum wählen Sie Lausanne.',
  },
  snapshot: {
    why: {
      en: 'Because the market square, the Lavaux vineyard terraces and Chaplin’s World are all within reach of the same lakefront station, you can base yourself in one hotel and cover a market town, a vineyard landscape and a museum estate without changing address.',
      fr: 'Parce que la place du marché, les terrasses de Lavaux et Chaplin’s World sont tous à portée de la même gare, au bord du lac, vous pouvez loger dans un seul hôtel et couvrir une ville de marché, un paysage viticole et un domaine muséal sans changer d’adresse.',
      de: 'Weil Marktplatz, die Lavaux-Terrassen und Chaplin’s World alle in Reichweite desselben Bahnhofs am See liegen, genügt ein Hotel in Vevey, um eine Marktstadt, eine Weinberglandschaft und ein Museumsanwesen zu erleben, ohne die Adresse zu wechseln.',
    },
    where: {
      en: 'For the market and the lake: the Grande Place and the lakefront. For the shortest ride onward to Montreux or Lausanne: around the railway station. Looking for a quieter, hillside base: the slopes towards Blonay and Corsier.',
      fr: 'Pour le marché et le lac : la Grande Place et le front de lac. Pour la liaison la plus courte vers Montreux ou Lausanne : les abords de la gare. En quête d’une base plus calme, à flanc de coteau : les hauteurs vers Blonay et Corsier.',
      de: 'Für Markt und See: die Grande Place und die Seepromenade. Für die kürzeste Verbindung nach Montreux oder Lausanne: rund um den Bahnhof. Auf der Suche nach einer ruhigeren Basis am Hang: die Hänge Richtung Blonay und Corsier.',
    },
    watch: {
      en: 'No date has yet been published for the next Fête des Vignerons, the winegrowers’ festival held in Vevey and listed by UNESCO since 2016; the previous edition ran from 18 July to 11 August 2019. Check for an announced date before you build a trip around it.',
      fr: 'Aucune date n’est encore publiée pour la prochaine Fête des Vignerons, la fête viticole qui se tient à Vevey et inscrite par l’UNESCO depuis 2016 ; la précédente édition s’est déroulée du 18 juillet au 11 août 2019. Vérifiez qu’une date a été annoncée avant de construire un séjour autour de cet événement.',
      de: 'Für das nächste Fête des Vignerons, das in Vevey abgehaltene Winzerfest, das seit 2016 auf der UNESCO-Liste steht, ist noch kein Datum veröffentlicht; die letzte Ausgabe fand vom 18. Juli bis 11. August 2019 statt. Prüfen Sie vor der Planung, ob inzwischen ein Termin angekündigt wurde.',
    },
  },
  story: {
    title: { en: 'Vevey, before you book', fr: 'Vevey, avant de réserver', de: 'Vevey, bevor Sie buchen' },
    paragraphs: [
      {
        en: 'Vevey is a market town on the shore of Lake Geneva, at 383 metres, built around a square that opens straight onto the water. Trains put it close to its neighbours: fourteen minutes from Lausanne on the direct RE 33, six minutes from Montreux, and about an hour and seven minutes from Geneva Airport on the direct IR 90. Arrival is by rail, into a station that serves three sides of the town: the lakefront and its market, and the slopes that climb behind it towards Blonay and Corsier.',
        fr: 'Vevey est une ville de marché au bord du Léman, à 383 mètres, construite autour d’une place qui s’ouvre directement sur l’eau. Le train la rapproche de ses voisines : quatorze minutes de Lausanne en RE 33 direct, six minutes de Montreux, et environ une heure sept depuis l’aéroport de Genève en IR 90 direct. On arrive par le rail, dans une gare qui dessert trois facettes de la ville : le front de lac et son marché, et les hauteurs qui grimpent derrière vers Blonay et Corsier.',
        de: 'Vevey ist eine Marktstadt am Ufer des Genfersees, auf 383 Metern, rund um einen Platz gebaut, der sich direkt zum Wasser hin öffnet. Der Zug bringt sie nahe an ihre Nachbarn heran: vierzehn Minuten von Lausanne mit dem direkten RE 33, sechs Minuten von Montreux, und rund eine Stunde sieben ab dem Flughafen Genf mit dem direkten IR 90. Die Ankunft erfolgt mit der Bahn, an einem Bahnhof, der drei Seiten der Stadt erschliesst: die Seepromenade mit ihrem Markt und die Hänge, die dahinter Richtung Blonay und Corsier ansteigen.',
      },
      {
        en: 'Three sectors decide where to sleep. The Grande Place and the lakefront sit right on the water, with the market, the Alimentarium and the Fork sculpture all on the same front. The railway station stands apart from the lake, the departure point for trains to Lausanne and Montreux and for bus 212 towards Chaplin’s World. Behind both, the ground climbs towards Blonay, Mont-Pèlerin and Corsier-sur-Vevey, where Chaplin’s World occupies its four-hectare estate above the town.',
        fr: 'Trois secteurs déterminent où dormir. La Grande Place et le front de lac se trouvent directement au bord de l’eau, avec le marché, l’Alimentarium et la sculpture de la Fourchette sur ce même front. La gare se tient à l’écart du lac, point de départ des trains vers Lausanne et Montreux et du bus 212 vers Chaplin’s World. Derrière les deux, le terrain grimpe vers Blonay, le Mont-Pèlerin et Corsier-sur-Vevey, où Chaplin’s World occupe son domaine de quatre hectares au-dessus de la ville.',
        de: 'Drei Ortsteile bestimmen, wo man schläft. Die Grande Place und die Seepromenade liegen direkt am Wasser, mit Markt, Alimentarium und der Gabel-Skulptur an derselben Promenade. Der Bahnhof liegt abseits des Sees, Ausgangspunkt der Züge nach Lausanne und Montreux und des Busses 212 Richtung Chaplin’s World. Dahinter steigt das Gelände Richtung Blonay, Mont-Pèlerin und Corsier-sur-Vevey an, wo Chaplin’s World sein vier Hektar grosses Anwesen oberhalb der Stadt hat.',
      },
      {
        en: 'The five hotels in this selection split across those three sectors: Grand Hôtel du Lac and Hôtel des Trois Couronnes face the water, Astra Hôtel Vevey stands by the station, and Hôtel Le Léman and Modern Times Hotel sit on the slopes above town, the second of the two actually in Blonay-Saint-Légier rather than Vevey itself. Our dated price samples put Hôtel des Trois Couronnes as the most expensive of the five, and Modern Times Hotel as the least expensive, in both the winter and summer samples we recorded.',
        fr: 'Les cinq hôtels de cette sélection se répartissent entre ces trois secteurs : le Grand Hôtel du Lac et l’Hôtel des Trois Couronnes font face à l’eau, l’Astra Hôtel Vevey se tient près de la gare, et l’Hôtel Le Léman et le Modern Times Hotel se trouvent sur les hauteurs, le second des deux se situant en réalité à Blonay-Saint-Légier plutôt qu’à Vevey même. Nos relevés de prix datés placent l’Hôtel des Trois Couronnes comme le plus cher des cinq, et le Modern Times Hotel comme le moins cher, aussi bien dans les échantillons d’hiver que d’été relevés.',
        de: 'Die fünf Hotels dieser Auswahl verteilen sich auf diese drei Ortsteile: das Grand Hôtel du Lac und das Hôtel des Trois Couronnes liegen am Wasser, das Astra Hôtel Vevey beim Bahnhof, und das Hôtel Le Léman sowie das Modern Times Hotel an den Hängen über der Stadt, wobei Letzteres tatsächlich in Blonay-Saint-Légier liegt und nicht in Vevey selbst. Unsere datierten Preisstichproben zeigen das Hôtel des Trois Couronnes als das teuerste der fünf und das Modern Times Hotel als das günstigste, sowohl in den Winter- als auch in den Sommerstichproben.',
      },
      {
        en: 'The Grande Place market runs every Tuesday and Saturday, all year, and the Fête des Vignerons, held in Vevey and listed by UNESCO since 2016, has no announced date for its next edition after the 2019 run. Allow fourteen minutes from Lausanne, six from Montreux, or about an hour and seven minutes from Geneva Airport by direct train, whichever direction you are travelling from.',
        fr: 'Le marché de la Grande Place a lieu chaque mardi et samedi, toute l’année, et la Fête des Vignerons, qui se tient à Vevey et est inscrite par l’UNESCO depuis 2016, n’a pas de date annoncée pour sa prochaine édition après celle de 2019. Comptez quatorze minutes depuis Lausanne, six depuis Montreux, ou environ une heure sept depuis l’aéroport de Genève en train direct, selon d’où vous venez.',
        de: 'Der Markt auf der Grande Place findet jeden Dienstag und Samstag, ganzjährig, statt, und für das in Vevey abgehaltene, seit 2016 von der UNESCO gelistete Fête des Vignerons ist nach der Ausgabe von 2019 noch kein Termin für die nächste angekündigt. Rechnen Sie mit vierzehn Minuten ab Lausanne, sechs ab Montreux oder rund einer Stunde sieben ab dem Flughafen Genf mit dem direkten Zug, je nachdem, von wo Sie anreisen.',
      },
    ],
  },
  stats: [
    { value: '2016', label: { en: 'year the Fête des Vignerons, held in Vevey, entered the UNESCO Intangible Cultural Heritage list', fr: 'année d’inscription de la Fête des Vignerons, tenue à Vevey, au patrimoine culturel immatériel de l’UNESCO', de: 'Jahr, in dem das in Vevey abgehaltene Fête des Vignerons in die Liste des immateriellen Kulturerbes der UNESCO aufgenommen wurde' } },
    { value: '4', label: { en: 'hectares, the Chaplin’s World estate at Corsier-sur-Vevey', fr: 'hectares, le domaine de Chaplin’s World à Corsier-sur-Vevey', de: 'Hektar, das Anwesen von Chaplin’s World in Corsier-sur-Vevey' } },
    { value: '2', label: { en: 'market days a week, Tuesday and Saturday, on the lakefront Grande Place', fr: 'jours de marché par semaine, le mardi et le samedi, sur la Grande Place au bord du lac', de: 'Markttage pro Woche, Dienstag und Samstag, auf der Grande Place am See' } },
  ],
  hero: {
    photo: '/photos/vevey.jpg',
    caption: { en: 'The Vevey lakefront, with the Dent de Jaman ridge behind.', fr: 'Le front de lac de Vevey, avec la Dent de Jaman en arrière-plan.', de: 'Die Seepromenade von Vevey, mit dem Grat der Dent de Jaman im Hintergrund.' },
    credit: { author: 'JoachimKohler-HB', license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/', source: 'https://commons.wikimedia.org/wiki/File:Vevey_am_Genfersee_(2014).jpg' },
  },
  sectors: [
    {
      title: { en: 'The Grande Place and the lakefront', fr: 'La Grande Place et le front de lac', de: 'Die Grande Place und die Seepromenade' },
      walk: { en: 'Place du Marché', fr: 'La place du Marché', de: 'Place du Marché' },
      text: {
        en: 'The market square opens directly onto the lake, and hosts a market every Tuesday and Saturday with local produce. The Alimentarium and the Fork sculpture standing in the water are on this same front, with Grand Hôtel du Lac and Hôtel des Trois Couronnes both facing the lake.',
        fr: 'La place du marché s’ouvre directement sur le lac, et accueille un marché chaque mardi et samedi, avec des produits locaux. L’Alimentarium et la sculpture de la Fourchette plantée dans l’eau se trouvent sur ce même front, avec le Grand Hôtel du Lac et l’Hôtel des Trois Couronnes, tous deux face au lac.',
        de: 'Der Marktplatz öffnet sich direkt zum See und beherbergt jeden Dienstag und Samstag einen Markt mit regionalen Produkten. Das Alimentarium und die im Wasser stehende Gabel-Skulptur liegen an derselben Promenade, mit dem Grand Hôtel du Lac und dem Hôtel des Trois Couronnes, beide mit Blick auf den See.',
      },
      points: [
        { en: 'The market is held every Tuesday and Saturday on the Grande Place', fr: 'Le marché a lieu chaque mardi et samedi sur la Grande Place', de: 'Der Markt findet jeden Dienstag und Samstag auf der Grande Place statt' },
        { en: 'The giant Fork sculpture stands in the lake in front of the Alimentarium', fr: 'La sculpture géante de la Fourchette se dresse dans le lac, devant l’Alimentarium', de: 'Die riesige Gabel-Skulptur steht im See, vor dem Alimentarium' },
      ],
      story: {
        en: 'The market square sits directly on the water, with the Tuesday and Saturday market, the Alimentarium and the Fork sculpture all on the same front, which suits a stay built around the lake rather than day trips into the hills. Chaplin’s World is reached by bus 212 from the railway station rather than from here, so a market-square address means walking to the station first for that trip.',
        fr: 'La place du marché se trouve directement au bord de l’eau, avec le marché du mardi et du samedi, l’Alimentarium et la sculpture de la Fourchette sur ce même front, ce qui convient à un séjour organisé autour du lac plutôt qu’à des excursions dans les hauteurs. Chaplin’s World se rejoint par le bus 212 depuis la gare et non depuis ce secteur, si bien qu’une adresse sur la place du marché implique de rejoindre d’abord la gare pour cette sortie.',
        de: 'Der Marktplatz liegt direkt am Wasser, mit dem Markt vom Dienstag und Samstag, dem Alimentarium und der Gabel-Skulptur an derselben Promenade, was sich für einen Aufenthalt rund um den See eignet statt für Ausflüge in die Hänge. Chaplin’s World erreicht man mit dem Bus 212 ab dem Bahnhof und nicht von hier aus, eine Adresse am Marktplatz bedeutet also, für diesen Ausflug zuerst zum Bahnhof zu gehen.',
      },
    },
    {
      title: { en: 'Around the railway station', fr: 'Autour de la gare', de: 'Rund um den Bahnhof' },
      walk: { en: '14 minutes from Lausanne, 6 from Montreux', fr: 'à 14 minutes de Lausanne, 6 de Montreux', de: '14 Minuten von Lausanne, 6 von Montreux' },
      text: {
        en: 'Vevey station is where bus 212 for Chaplin’s World departs. Astra Hotel Vevey stands on the site of the 19th-century Hôtel de la Gare, which became the Pavillon des Voyageurs in 1912 and later the Hôtel Pavillon, before the Ming family bought the Buffet de la Gare in 1950.',
        fr: 'La gare de Vevey est le point de départ du bus 212 pour Chaplin’s World. L’Astra Hôtel Vevey occupe le site de l’Hôtel de la Gare du XIXe siècle, devenu le Pavillon des Voyageurs en 1912 puis l’Hôtel Pavillon, avant que la famille Ming ne rachète le Buffet de la Gare en 1950.',
        de: 'Der Bahnhof Vevey ist der Ausgangspunkt des Busses 212 nach Chaplin’s World. Das Astra Hotel Vevey steht auf dem Gelände des Hôtel de la Gare aus dem 19. Jahrhundert, das 1912 zum Pavillon des Voyageurs und später zum Hôtel Pavillon wurde, bevor die Familie Ming 1950 das Buffet de la Gare übernahm.',
      },
      points: [
        { en: 'Astra Hotel Vevey stands on the site of the 19th-century Hôtel de la Gare', fr: 'L’Astra Hôtel Vevey occupe le site de l’Hôtel de la Gare du XIXe siècle', de: 'Das Astra Hotel Vevey steht auf dem Gelände des Hôtel de la Gare aus dem 19. Jahrhundert' },
        { en: 'Bus 212 to Chaplin’s World leaves from the station, about 15 minutes', fr: 'Le bus 212 vers Chaplin’s World part de la gare, environ 15 minutes de trajet', de: 'Der Bus 212 nach Chaplin’s World fährt ab dem Bahnhof, rund 15 Minuten Fahrzeit' },
      ],
      story: {
        en: 'Vevey station is the departure point for trains to Lausanne and Montreux and for bus 212 towards Chaplin’s World, which makes this side practical if onward travel matters more than a lake view. Astra Hôtel Vevey stands here, on a site that has taken guests since the 19th-century Hôtel de la Gare; the trade-off is a stay set back from the lakefront and the market on the Grande Place.',
        fr: 'La gare de Vevey est le point de départ des trains vers Lausanne et Montreux et du bus 212 vers Chaplin’s World, ce qui rend ce côté pratique quand la suite du trajet compte plus que la vue sur le lac. L’Astra Hôtel Vevey s’y trouve, sur un site qui accueille des voyageurs depuis l’Hôtel de la Gare du XIXe siècle ; en contrepartie, le séjour se fait en retrait du front de lac et du marché de la Grande Place.',
        de: 'Der Bahnhof Vevey ist Ausgangspunkt der Züge nach Lausanne und Montreux sowie des Busses 212 Richtung Chaplin’s World, was diese Seite praktisch macht, wenn die Weiterreise wichtiger ist als der Blick auf den See. Das Astra Hotel Vevey steht hier, auf einem Gelände, das seit dem Hôtel de la Gare aus dem 19. Jahrhundert Gäste empfängt; der Nachteil ist ein Aufenthalt abseits der Seepromenade und des Marktes auf der Grande Place.',
      },
    },
    {
      title: { en: 'The slopes above town', fr: 'Les hauteurs de la ville', de: 'Die Hänge über der Stadt' },
      walk: { en: 'Towards Blonay and Corsier', fr: 'Vers Blonay et Corsier', de: 'Richtung Blonay und Corsier' },
      text: {
        en: 'Residential ground climbs from the lake towards Mont-Pèlerin, Blonay and Corsier-sur-Vevey, where Chaplin’s World occupies its four-hectare estate. Hôtel Le Léman stands at Route de Blonay 20, on the Vaud Riviera close to the centre of Vevey.',
        fr: 'Le terrain résidentiel grimpe depuis le lac vers le Mont-Pèlerin, Blonay et Corsier-sur-Vevey, où Chaplin’s World occupe son domaine de quatre hectares. L’Hôtel Le Léman se trouve au 20 route de Blonay, sur la Riviera vaudoise, à proximité du centre de Vevey.',
        de: 'Das Wohngebiet steigt vom See in Richtung Mont-Pèlerin, Blonay und Corsier-sur-Vevey an, wo Chaplin’s World sein vier Hektar grosses Anwesen hat. Das Hôtel Le Léman steht an der Route de Blonay 20, an der Waadtländer Riviera, nahe dem Zentrum von Vevey.',
      },
      points: [
        { en: 'Chaplin’s World occupies a four-hectare estate at Corsier-sur-Vevey', fr: 'Chaplin’s World occupe un domaine de quatre hectares à Corsier-sur-Vevey', de: 'Chaplin’s World hat ein vier Hektar grosses Anwesen in Corsier-sur-Vevey' },
        { en: 'Hôtel Le Léman stands at Route de Blonay 20, close to the centre of Vevey', fr: 'L’Hôtel Le Léman se trouve au 20 route de Blonay, à proximité du centre de Vevey', de: 'Das Hôtel Le Léman steht an der Route de Blonay 20, nahe dem Zentrum von Vevey' },
      ],
      story: {
        en: 'Ground climbs from the lake towards Mont-Pèlerin, Blonay and Corsier-sur-Vevey, where Chaplin’s World occupies its four-hectare estate, which suits a quieter, hillside stay close to that estate. Hôtel Le Léman stands on the Route de Blonay on this side; in exchange for the quiet, you are away from the lakefront market and the boats on the water.',
        fr: 'Le terrain grimpe depuis le lac vers le Mont-Pèlerin, Blonay et Corsier-sur-Vevey, où Chaplin’s World occupe son domaine de quatre hectares, ce qui convient à un séjour plus calme, à flanc de coteau, proche de ce domaine. L’Hôtel Le Léman se trouve route de Blonay, de ce côté ; en échange de ce calme, on s’éloigne du marché du front de lac et des bateaux sur l’eau.',
        de: 'Das Gelände steigt vom See Richtung Mont-Pèlerin, Blonay und Corsier-sur-Vevey an, wo Chaplin’s World sein vier Hektar grosses Anwesen hat, was sich für einen ruhigeren Aufenthalt am Hang, nahe diesem Anwesen, eignet. Das Hôtel Le Léman steht auf dieser Seite an der Route de Blonay; im Tausch gegen die Ruhe liegt man abseits vom Markt an der Seepromenade und von den Schiffen auf dem Wasser.',
      },
    },
  ],
  hotels: [
    {
      slug: 've-grand-hotel-du-lac',
      name: 'Grand Hôtel du Lac',
      photo: '/photos/hotels/ve-grand-hotel-du-lac.jpg',
      url: 'https://www.ghdl.ch/',
      sector: { en: 'The Grande Place, lakefront', fr: 'La Grande Place, front de lac', de: 'Grande Place, Seepromenade' },
      facts: [
        { en: 'Gourmet restaurant Emotions by Guy Ravet, Wednesday to Sunday, dinner only', fr: 'Restaurant gastronomique Emotions by Guy Ravet, du mercredi au dimanche, dîner uniquement', de: 'Gourmetrestaurant Emotions by Guy Ravet, Mittwoch bis Sonntag, nur abends' },
        { en: 'The Veranda, a "brasserie chic", open every day', fr: 'The Veranda, une « brasserie chic », ouverte tous les jours', de: 'The Veranda, eine „Brasserie chic“, täglich geöffnet' },
      ],
      blurb: {
        en: 'Grand Hôtel du Lac stands on the lakefront by the Grande Place, with a gourmet table, Emotions by Guy Ravet, open Wednesday to Sunday for dinner only, and The Veranda, its brasserie chic, open every day. It suits a stay built around the lake and the market rather than the slopes above town.',
        fr: 'Le Grand Hôtel du Lac se trouve sur le front de lac, près de la Grande Place, avec une table gastronomique, Emotions by Guy Ravet, ouverte du mercredi au dimanche, dîner uniquement, et The Veranda, sa brasserie chic, ouverte tous les jours. Il convient à un séjour organisé autour du lac et du marché plutôt que des hauteurs de la ville.',
        de: 'Das Grand Hôtel du Lac steht an der Seepromenade, nahe der Grande Place, mit einem Gourmetrestaurant, Emotions by Guy Ravet, Mittwoch bis Sonntag nur abends geöffnet, und The Veranda, seiner Brasserie chic, täglich geöffnet. Es eignet sich für einen Aufenthalt rund um See und Markt statt für die Hänge über der Stadt.',
      },
    },
    {
      slug: 've-trois-couronnes',
      name: 'Hôtel des Trois Couronnes',
      photo: '/photos/hotels/ve-trois-couronnes.jpg',
      url: 'https://www.hoteltroiscouronnes.ch/',
      sector: { en: 'Lakefront', fr: 'Front de lac', de: 'Seepromenade' },
      facts: [
        { en: '34 rooms facing Lake Geneva', fr: '34 chambres avec vue sur le Léman', de: '34 Zimmer mit Blick auf den Genfersee' },
      ],
      blurb: {
        en: 'Hôtel des Trois Couronnes faces Lake Geneva directly, with 34 rooms looking onto the water, on the same lakefront as the Grande Place. Of the five hotels in this selection, its dated prices are the highest, in both the winter and summer samples.',
        fr: 'L’Hôtel des Trois Couronnes fait face au Léman, avec 34 chambres donnant sur l’eau, sur le même front de lac que la Grande Place. Parmi les cinq hôtels de cette sélection, ses prix datés sont les plus élevés, aussi bien dans les échantillons d’hiver que d’été.',
        de: 'Das Hôtel des Trois Couronnes liegt direkt am Genfersee, mit 34 Zimmern mit Blick aufs Wasser, an derselben Seepromenade wie die Grande Place. Von den fünf Hotels dieser Auswahl sind seine datierten Preise die höchsten, sowohl in den Winter- als auch in den Sommerstichproben.',
      },
    },
    {
      slug: 've-astra',
      name: 'Astra Hôtel Vevey',
      photo: '/photos/hotels/ve-astra.jpg',
      url: 'https://astra-hotel.ch/',
      sector: { en: 'By the station', fr: 'Près de la gare', de: 'Beim Bahnhof' },
      facts: [
        { en: 'The Ming family took over the Buffet de la Gare in 1950, starting with an 11-room house; the complex was renamed Astra Hôtel Vevey in 2005', fr: 'La famille Ming reprend le Buffet de la Gare en 1950, avec une maison de 11 chambres ; l’ensemble devient l’Astra Hôtel Vevey en 2005', de: 'Die Familie Ming übernahm 1950 das Buffet de la Gare mit einem Haus mit 11 Zimmern; die Anlage wurde 2005 in Astra Hôtel Vevey umbenannt' },
        { en: 'Brasserie La Coupole 1912 preserves 1927 Fête des Vignerons frescoes and stained glass by Michel Delanoë', fr: 'La brasserie La Coupole 1912 conserve des fresques de la Fête des Vignerons de 1927 et des vitraux de Michel Delanoë', de: 'Die Brasserie La Coupole 1912 bewahrt Fresken des Fête des Vignerons von 1927 und Glasfenster von Michel Delanoë' },
      ],
      blurb: {
        en: 'Astra Hôtel Vevey stands by the railway station, on a site that has taken guests since the 19th-century Hôtel de la Gare; the Ming family took it over in 1950 with an 11-room house and renamed it Astra in 2005. Its brasserie, La Coupole 1912, keeps frescoes from the 1927 Fête des Vignerons and stained glass by Michel Delanoë, and suits a stay that leans on the trains to Lausanne and Montreux.',
        fr: 'L’Astra Hôtel Vevey se tient près de la gare, sur un site qui accueille des voyageurs depuis l’Hôtel de la Gare du XIXe siècle ; la famille Ming en prend la suite en 1950 avec une maison de 11 chambres, rebaptisée Astra en 2005. Sa brasserie, La Coupole 1912, conserve des fresques de la Fête des Vignerons de 1927 et des vitraux de Michel Delanoë, et convient à un séjour qui s’appuie sur les trains vers Lausanne et Montreux.',
        de: 'Das Astra Hotel Vevey steht beim Bahnhof, auf einem Gelände, das seit dem Hôtel de la Gare aus dem 19. Jahrhundert Gäste empfängt; die Familie Ming übernahm es 1950 mit einem Haus mit 11 Zimmern und benannte es 2005 in Astra um. Seine Brasserie, La Coupole 1912, bewahrt Fresken des Fête des Vignerons von 1927 und Glasfenster von Michel Delanoë, und eignet sich für einen Aufenthalt, der sich auf die Züge nach Lausanne und Montreux stützt.',
      },
    },
    {
      slug: 've-le-leman',
      name: 'Hôtel Le Léman',
      photo: '/photos/hotels/ve-le-leman.jpg',
      url: 'https://www.hotel-leleman.ch/',
      sector: { en: 'Route de Blonay, above town', fr: 'Route de Blonay, sur les hauteurs', de: 'Route de Blonay, über der Stadt' },
      facts: [
        { en: 'Route de Blonay 20, on the Vaud Riviera close to the centre of Vevey', fr: '20 route de Blonay, sur la Riviera vaudoise, à proximité du centre de Vevey', de: 'Route de Blonay 20, an der Waadtländer Riviera, nahe dem Zentrum von Vevey' },
        { en: 'Hotel and restaurant in the same house', fr: 'Hôtel et restaurant dans la même maison', de: 'Hotel und Restaurant im selben Haus' },
      ],
      blurb: {
        en: 'Hôtel Le Léman stands at Route de Blonay 20, on the slopes above the lakefront, with its restaurant in the same house. It suits a quieter stay, closer to Corsier-sur-Vevey and Chaplin’s World than to the market on the Grande Place.',
        fr: 'L’Hôtel Le Léman se trouve au 20 route de Blonay, sur les hauteurs au-dessus du front de lac, avec son restaurant dans la même maison. Il convient à un séjour plus calme, plus proche de Corsier-sur-Vevey et de Chaplin’s World que du marché de la Grande Place.',
        de: 'Das Hôtel Le Léman steht an der Route de Blonay 20, an den Hängen über der Seepromenade, mit seinem Restaurant im selben Haus. Es eignet sich für einen ruhigeren Aufenthalt, näher bei Corsier-sur-Vevey und Chaplin’s World als beim Markt auf der Grande Place.',
      },
    },
    {
      slug: 've-modern-times',
      name: 'Modern Times Hotel',
      photo: '/photos/hotels/ve-modern-times.jpg',
      url: 'https://www.moderntimeshotel.ch/',
      sector: { en: 'Blonay-Saint-Légier, above Vevey', fr: 'Blonay-Saint-Légier, au-dessus de Vevey', de: 'Blonay-Saint-Légier, über Vevey' },
      facts: [
        { en: 'Chemin du Genevrier 20, 1806 Blonay-Saint-Légier, part of Marriott’s Tribute Portfolio', fr: '20 chemin du Genevrier, 1806 Blonay-Saint-Légier, membre du Tribute Portfolio de Marriott', de: 'Chemin du Genevrier 20, 1806 Blonay-Saint-Légier, Teil von Marriotts Tribute Portfolio' },
      ],
      blurb: {
        en: 'Modern Times Hotel stands at Chemin du Genevrier 20 in Blonay-Saint-Légier, above Vevey rather than in the town itself, and belongs to Marriott’s Tribute Portfolio. Of the five hotels in this selection, its dated prices are the lowest, in both the winter and summer samples.',
        fr: 'Le Modern Times Hotel se trouve au 20 chemin du Genevrier, à Blonay-Saint-Légier, au-dessus de Vevey plutôt que dans la ville elle-même, et appartient au Tribute Portfolio de Marriott. Parmi les cinq hôtels de cette sélection, ses prix datés sont les plus bas, aussi bien dans les échantillons d’hiver que d’été.',
        de: 'Das Modern Times Hotel steht am Chemin du Genevrier 20 in Blonay-Saint-Légier, oberhalb von Vevey statt in der Stadt selbst, und gehört zu Marriotts Tribute Portfolio. Von den fünf Hotels dieser Auswahl sind seine datierten Preise die niedrigsten, sowohl in den Winter- als auch in den Sommerstichproben.',
      },
    },
  ],
  hotelsNote: {
    en: 'Facts taken from each hotel’s own website on 16 September 2026. No ratings or reviews on this guide.',
    fr: 'Informations reprises du site de chaque hôtel le 16 septembre 2026. Aucune note ni aucun avis sur ce guide.',
    de: 'Angaben von der jeweiligen Hotel-Website, Stand 16. September 2026. Keine Bewertungen oder Rezensionen.',
  },
  practical: {
    title: { en: 'Vevey, in practice', fr: 'Vevey, en pratique', de: 'Vevey, in der Praxis' },
    items: [
      {
        title: { en: 'Getting to Chaplin’s World', fr: 'Se rendre à Chaplin’s World', de: 'Anreise zu Chaplin’s World' },
        text: {
          en: 'Take the bus if you would rather not drive: bus 212 leaves Vevey SBB station for the "Chaplin" stop in about 15 minutes. Parking on the estate costs CHF 5 a day with admission and includes two EV charging points, so driving stays an easy backup if you prefer it.',
          fr: 'Prenez le bus si vous préférez ne pas conduire : le bus 212 relie la gare de Vevey CFF à l’arrêt « Chaplin » en environ 15 minutes. Le stationnement sur le domaine coûte 5 CHF par jour, admission comprise, avec deux bornes de recharge électrique, une solution de repli simple si vous préférez la voiture.',
          de: 'Nehmen Sie den Bus, wenn Sie nicht selbst fahren möchten: Der Bus 212 verbindet den Bahnhof Vevey SBB in rund 15 Minuten mit der Haltestelle „Chaplin“. Das Parkieren auf dem Anwesen kostet CHF 5 pro Tag inklusive Eintritt, mit zwei E-Ladestationen, eine einfache Alternative, wenn Sie lieber mit dem Auto kommen.',
        },
      },
      {
        title: { en: 'The market', fr: 'Le marché', de: 'Der Markt' },
        text: {
          en: 'Plan around Tuesday and Saturday if the market matters to your stay: it runs all year, right on the lakefront Grande Place, so a hotel near the square puts the stalls within a short walk on those two mornings.',
          fr: 'Prévoyez votre séjour autour du mardi et du samedi si le marché compte pour vous : il se tient toute l’année, directement sur la Grande Place au bord du lac, si bien qu’un hôtel proche de la place met les étals à quelques pas ces deux matins-là.',
          de: 'Planen Sie rund um Dienstag und Samstag, falls Ihnen der Markt wichtig ist: Er findet ganzjährig direkt auf der Grande Place am See statt, sodass ein Hotel nahe dem Platz die Stände an diesen beiden Morgen in wenigen Gehminuten erreichbar macht.',
        },
      },
      {
        title: { en: 'CGN boats', fr: 'Bateaux CGN', de: 'CGN-Schiffe' },
        text: {
          en: 'Factor a Belle Époque crossing into your stay if you already hold a Swiss Travel Pass, a half-fare card or a GA travelcard: CGN calls at Vevey, one of its boats is even named "Vevey", and the pass covers all its cruises except events at no extra cost.',
          fr: 'Prévoyez une traversée à bord d’un bateau Belle Époque si vous possédez déjà un Swiss Travel Pass, un abonnement demi-tarif ou un AG : la CGN fait escale à Vevey, l’un de ses bateaux porte même le nom « Vevey », et le pass couvre toutes ses croisières, sauf événements, sans frais supplémentaires.',
          de: 'Planen Sie eine Fahrt mit einem Belle-Époque-Schiff ein, wenn Sie bereits einen Swiss Travel Pass, ein Halbtax oder ein GA besitzen: Die CGN legt in Vevey an, eines ihrer Schiffe trägt sogar den Namen „Vevey“, und der Pass deckt alle ihre Kreuzfahrten ausser Events ohne Aufpreis ab.',
        },
      },
      {
        title: { en: 'By car', fr: 'En voiture', de: 'Mit dem Auto' },
        text: {
          en: 'Driving in needs no special planning: no car ban and no access permit are published for Vevey, so you can arrive and park by car without applying for anything in advance.',
          fr: 'Venir en voiture ne demande aucune démarche particulière : aucune interdiction de circuler ni permis d’accès n’est publié pour Vevey, vous pouvez donc arriver et stationner sans rien demander à l’avance.',
          de: 'Die Anreise mit dem Auto erfordert keine besondere Planung: Für Vevey ist weder ein Fahrverbot noch eine Zufahrtsbewilligung veröffentlicht, Sie können also anreisen und parkieren, ohne im Voraus etwas beantragen zu müssen.',
        },
      },
    ],
  },
  seasons: {
    summer: {
      title: { en: 'Summer in Vevey', fr: 'L’été à Vevey', de: 'Sommer in Vevey' },
      base: {
        en: 'Base yourself around the Grande Place and the lakefront in summer: the Alimentarium stays open until 18:00 and extra CGN boats join the lake, so you are close to both the market and the boat pier when the days are long.',
        fr: 'Installez-vous autour de la Grande Place et du front de lac l’été : l’Alimentarium reste ouvert jusqu’à 18h00 et des bateaux CGN supplémentaires rejoignent le lac, ce qui vous rapproche à la fois du marché et de l’embarcadère quand les journées s’allongent.',
        de: 'Wählen Sie im Sommer eine Basis rund um die Grande Place und die Seepromenade: Das Alimentarium bleibt bis 18.00 Uhr geöffnet, und zusätzliche CGN-Schiffe verkehren auf dem See, sodass Sie sowohl dem Markt als auch der Schiffsanlegestelle nahe sind, wenn die Tage lang werden.',
      },
      facts: [
        { value: 'Apr → Sep', label: { en: 'Alimentarium open 10:00 to 18:00', fr: 'Alimentarium ouvert de 10h00 à 18h00', de: 'Alimentarium geöffnet von 10.00 bis 18.00 Uhr' } },
        { value: 'mi-avr → mi-oct', label: { en: 'the Belle Époque boats La Suisse and Montreux join the CGN fleet', fr: 'les bateaux Belle Époque La Suisse et Montreux rejoignent la flotte CGN', de: 'die Belle-Époque-Schiffe La Suisse und Montreux ergänzen die CGN-Flotte' } },
      ],
      note: {
        en: 'Sources: alimentarium.org, cgn.ch, checked 16 September 2026.',
        fr: 'Sources : alimentarium.org, cgn.ch, vérifiées le 16 septembre 2026.',
        de: 'Quellen: alimentarium.org, cgn.ch, geprüft am 16. September 2026.',
      },
    },
    winter: {
      title: { en: 'Winter in Vevey', fr: 'L’hiver à Vevey', de: 'Winter in Vevey' },
      base: {
        en: 'In winter, staying near the railway station or the Grande Place keeps your options open: the Alimentarium keeps shorter hours and the CGN fleet reduces to four boats, but the market continues every Tuesday and Saturday, and the station puts Lausanne and Montreux within a few minutes for the days you want a change of scene.',
        fr: 'L’hiver, loger près de la gare ou de la Grande Place garde toutes les options ouvertes : l’Alimentarium pratique des horaires réduits et la flotte CGN se limite à quatre bateaux, mais le marché se poursuit chaque mardi et samedi, et la gare place Lausanne et Montreux à quelques minutes pour les jours où vous voulez changer d’air.',
        de: 'Im Winter hält eine Unterkunft nahe dem Bahnhof oder der Grande Place alle Optionen offen: Das Alimentarium hat kürzere Öffnungszeiten und die CGN-Flotte reduziert sich auf vier Schiffe, doch der Markt läuft weiter jeden Dienstag und Samstag, und der Bahnhof bringt Sie an Tagen für einen Tapetenwechsel in wenigen Minuten nach Lausanne oder Montreux.',
      },
      facts: [
        { value: 'Oct → Mar', label: { en: 'Alimentarium open 10:00 to 17:00', fr: 'Alimentarium ouvert de 10h00 à 17h00', de: 'Alimentarium geöffnet von 10.00 bis 17.00 Uhr' } },
        { value: '4', label: { en: 'CGN Belle Époque boats sailing all year: Rhône, Savoie, Vevey, Italie', fr: 'bateaux Belle Époque CGN naviguant toute l’année : Rhône, Savoie, Vevey, Italie', de: 'ganzjährig fahrende CGN-Belle-Époque-Schiffe: Rhône, Savoie, Vevey, Italie' } },
      ],
      note: {
        en: 'Sources: alimentarium.org, cgn.ch, checked 16 September 2026.',
        fr: 'Sources : alimentarium.org, cgn.ch, vérifiées le 16 septembre 2026.',
        de: 'Quellen: alimentarium.org, cgn.ch, geprüft am 16. September 2026.',
      },
    },
  },
  doing: {
    title: { en: 'What to do in Vevey', fr: 'Que faire à Vevey', de: 'Was man in Vevey unternimmt' },
    intro: {
      en: 'This is not a trail guide, but a set of named places that give a stay in Vevey its shape, from the market square to the Lavaux terraces and Chaplin’s World. The figures below come from Montreux Riviera tourism, Lavaux UNESCO and Chaplin’s World, checked on their own pages.',
      fr: 'Ce n’est pas un guide de randonnée, mais un ensemble de lieux nommés qui donnent sa forme à un séjour à Vevey, de la place du marché aux terrasses de Lavaux et à Chaplin’s World. Les chiffres ci-dessous proviennent de Montreux Riviera, de Lavaux UNESCO et de Chaplin’s World, vérifiés sur leurs propres pages.',
      de: 'Das ist kein Wanderführer, sondern eine Reihe benannter Orte, die einem Aufenthalt in Vevey seine Form geben, vom Marktplatz über die Lavaux-Terrassen bis zu Chaplin’s World. Die Zahlen unten stammen von Montreux Riviera, Lavaux UNESCO und Chaplin’s World, auf deren eigenen Seiten geprüft.',
    },
    groups: [
      {
        kind: 'walk',
        title: { en: 'Through the Lavaux terraces', fr: 'À travers les terrasses de Lavaux', de: 'Durch die Lavaux-Terrassen' },
        items: [
          {
            name: 'Lavaux vineyard terraces, Lutry to Saint-Saphorin',
            meta: { en: '11.1 km · 3 h 15 · +369 m / -393 m · easy · ends at Saint-Saphorin', fr: '11,1 km · 3 h 15 · +369 m / -393 m · facile · arrivée à Saint-Saphorin', de: '11,1 km · 3 Std. 15 · +369 m / -393 m · leicht · Ziel Saint-Saphorin' },
            text: {
              en: 'This route reaches its eastern end at Saint-Saphorin, the end nearest Vevey, after 11.1 km through the Lavaux vineyard terraces from Lutry, so from a Vevey base you are closer to the finish than to the start. Allow the full three hours and fifteen minutes the operator publishes if you plan to walk it end to end.',
              fr: 'Cet itinéraire atteint son extrémité orientale à Saint-Saphorin, du côté de Vevey, après 11,1 km à travers les terrasses viticoles de Lavaux depuis Lutry : depuis Vevey, vous êtes plus près de l’arrivée que du départ. Comptez les trois heures et quart annoncées par l’exploitant pour le parcourir en entier.',
              de: 'Diese Route erreicht ihr östliches Ende in Saint-Saphorin, auf der Seite von Vevey, nach 11,1 km durch die Weinbergterrassen von Lavaux ab Lutry: Von Vevey aus sind Sie näher am Ziel als am Start. Rechnen Sie mit den vom Betreiber angegebenen drei Stunden und fünfzehn Minuten für die gesamte Strecke.',
            },
          },
          {
            name: 'La Route des Grands Crus de Lavaux',
            meta: { en: '3 km · through the terraces', fr: '3 km · à travers les terrasses', de: '3 km · durch die Terrassen' },
            text: {
              en: 'Published by Lavaux UNESCO, this three-kilometre route runs through the vineyard terraces that begin at the western edge of Vevey, so you can start walking straight from town without a transfer. It is a shorter outing than the Lutry to Saint-Saphorin route, useful if half a day is all you have.',
              fr: 'Publié par Lavaux UNESCO, cet itinéraire de trois kilomètres traverse les terrasses viticoles qui débutent à la lisière ouest de Vevey, ce qui permet de partir à pied directement depuis la ville, sans correspondance. C’est une sortie plus courte que celle de Lutry à Saint-Saphorin, utile si vous ne disposez que d’une demi-journée.',
              de: 'Von Lavaux UNESCO veröffentlicht, führt diese drei Kilometer lange Route durch die Weinbergterrassen, die am westlichen Rand von Vevey beginnen, sodass man direkt ab der Stadt loslaufen kann, ohne Umsteigen. Das ist ein kürzerer Ausflug als jener von Lutry nach Saint-Saphorin, praktisch, wenn nur ein halber Tag zur Verfügung steht.',
            },
          },
        ],
      },
      {
        kind: 'local',
        title: { en: 'On the lakefront', fr: 'Sur le front de lac', de: 'An der Seepromenade' },
        items: [
          {
            name: 'Chaplin’s World',
            meta: { en: 'Route de Fenil 2, Corsier-sur-Vevey · four hectares · bus 212 from Vevey SBB, about 15 min', fr: '2 route de Fenil, Corsier-sur-Vevey · quatre hectares · bus 212 depuis Vevey CFF, environ 15 min', de: 'Route de Fenil 2, Corsier-sur-Vevey · vier Hektar · Bus 212 ab Vevey SBB, rund 15 Min.' },
            text: {
              en: 'The estate covers four hectares at Corsier-sur-Vevey, reached from the station by bus 212 in about 15 minutes, so staying near the station shortens the trip. Parking on site costs CHF 5 a day with admission and includes two EV charging points, for anyone who prefers to drive.',
              fr: 'Le domaine s’étend sur quatre hectares à Corsier-sur-Vevey, accessible depuis la gare par le bus 212 en environ 15 minutes : loger près de la gare raccourcit donc le trajet. Le stationnement sur place coûte 5 CHF par jour, admission comprise, avec deux bornes de recharge électrique, pour qui préfère venir en voiture.',
              de: 'Das Anwesen erstreckt sich über vier Hektar in Corsier-sur-Vevey, ab dem Bahnhof mit dem Bus 212 in rund 15 Minuten erreichbar: Wer nahe dem Bahnhof wohnt, verkürzt damit die Fahrt. Das Parkieren vor Ort kostet CHF 5 pro Tag inklusive Eintritt und bietet zwei E-Ladestationen, für alle, die lieber mit dem Auto kommen.',
            },
          },
          {
            name: 'The Alimentarium',
            meta: { en: 'lakefront, former Nestlé head office · Oct-Mar 10:00-17:00, Apr-Sep 10:00-18:00 · CHF 15 adults', fr: 'front de lac, ancien siège de Nestlé · oct-mars 10h00-17h00, avr-sept 10h00-18h00 · 15 CHF adultes', de: 'Seepromenade, ehemaliger Nestlé-Hauptsitz · Okt-Mär 10.00-17.00, Apr-Sep 10.00-18.00 · CHF 15 Erwachsene' },
            text: {
              en: 'Described by itself as the world’s first food museum, and open for over 35 years, the Alimentarium keeps shorter winter hours than summer ones, so check the season before you plan your visit. The giant Fork sculpture planted in the lake in front of it marks the museum’s 10th anniversary.',
              fr: 'Présenté comme le premier musée de l’alimentation au monde et ouvert depuis plus de 35 ans, l’Alimentarium pratique des horaires d’hiver plus courts qu’en été : vérifiez donc la saison avant de planifier votre visite. La sculpture géante de la Fourchette, plantée dans le lac devant le musée, marque son 10e anniversaire.',
              de: 'Bezeichnet sich selbst als das weltweit erste Ernährungsmuseum und seit über 35 Jahren geöffnet, hat das Alimentarium im Winter kürzere Öffnungszeiten als im Sommer: Prüfen Sie also die Saison, bevor Sie Ihren Besuch planen. Die riesige Gabel-Skulptur, die davor im See steht, erinnert an das 10-jährige Bestehen des Museums.',
            },
          },
        ],
      },
      {
        kind: 'table',
        title: { en: 'Where to eat', fr: 'Où manger', de: 'Wo essen' },
        items: [
          {
            name: 'La Coupole 1912',
            meta: { en: 'Astra Hotel Vevey, by the station', fr: 'Astra Hôtel Vevey, près de la gare', de: 'Astra Hotel Vevey, beim Bahnhof' },
            text: {
              en: 'The Astra Hotel’s brasserie preserves frescoes from the 1927 Fête des Vignerons and stained glass by Michel Delanoë, so a meal here doubles as a look at a piece of the festival’s history. It sits by the station, an easy stop before or after a train.',
              fr: 'La brasserie de l’Astra Hôtel conserve des fresques de la Fête des Vignerons de 1927 et des vitraux de Michel Delanoë : un repas ici vaut donc aussi un aperçu d’un pan de l’histoire de la fête. Elle se trouve près de la gare, une halte facile avant ou après un train.',
              de: 'Die Brasserie des Astra Hotels bewahrt Fresken des Fête des Vignerons von 1927 und Glasfenster von Michel Delanoë: Ein Essen hier ist also zugleich ein Blick auf ein Stück Festgeschichte. Sie liegt beim Bahnhof, ein einfacher Halt vor oder nach einer Zugfahrt.',
            },
          },
          {
            name: 'The Veranda',
            meta: { en: 'Grand Hôtel du Lac, open daily', fr: 'Grand Hôtel du Lac, ouvert tous les jours', de: 'Grand Hôtel du Lac, täglich geöffnet' },
            text: {
              en: 'The hotel’s "brasserie chic", open every day, sits alongside its gourmet restaurant Emotions by Guy Ravet, open Wednesday to Sunday for dinner only, so The Veranda is the fallback on the days the gourmet room is closed. Both look out over the lakefront.',
              fr: 'La « brasserie chic » de l’hôtel, ouverte tous les jours, voisine avec son restaurant gastronomique Emotions by Guy Ravet, ouvert du mercredi au dimanche, dîner uniquement : The Veranda est donc la solution les jours où la table gastronomique est fermée. Les deux donnent sur le front de lac.',
              de: 'Die „Brasserie chic“ des Hotels, täglich geöffnet, liegt neben dem Gourmetrestaurant Emotions by Guy Ravet, Mittwoch bis Sonntag nur abends geöffnet: The Veranda ist damit die Alternative an den Tagen, an denen das Gourmetrestaurant geschlossen ist. Beide blicken auf die Seepromenade.',
            },
          },
        ],
      },
    ],
    note: {
      en: 'Figures and hours from Montreux Riviera tourism, Lavaux UNESCO and Chaplin’s World, checked on 16 September 2026. We publish no ratings and no route descriptions: check conditions on the spot before you set off.',
      fr: 'Chiffres et horaires provenant de Montreux Riviera, de Lavaux UNESCO et de Chaplin’s World, vérifiés le 16 septembre 2026. Nous ne publions ni notes ni descriptifs d’itinéraires : renseignez-vous sur place avant de partir.',
      de: 'Zahlen und Öffnungszeiten von Montreux Riviera, Lavaux UNESCO und Chaplin’s World, geprüft am 16. September 2026. Wir veröffentlichen keine Bewertungen und keine Routenbeschreibungen: Erkundigen Sie sich vor Ort, bevor Sie losgehen.',
    },
  },
  faq: [
    {
      q: { en: 'How far is Vevey from Lausanne?', fr: 'À quelle distance Vevey se trouve-t-elle de Lausanne ?', de: 'Wie weit ist Vevey von Lausanne entfernt?' },
      a: {
        en: 'Lausanne is fourteen minutes away on the direct RE 33 train, close enough for an easy day trip in either direction. From Geneva Airport, allow one hour and seven minutes on the direct IR 90, a single train straight to Vevey station.',
        fr: 'Lausanne se trouve à quatorze minutes en train direct RE 33, assez proche pour un aller-retour facile dans la journée. Depuis l’aéroport de Genève, comptez une heure sept en IR 90 direct, un seul train jusqu’à la gare de Vevey.',
        de: 'Lausanne ist mit dem direkten RE 33 vierzehn Minuten entfernt, nah genug für einen einfachen Tagesausflug in beide Richtungen. Ab dem Flughafen Genf rechnen Sie mit einer Stunde und sieben Minuten mit dem direkten IR 90, einem einzigen Zug bis zum Bahnhof Vevey.',
      },
    },
    {
      q: { en: 'When is the Vevey market?', fr: 'Quand a lieu le marché de Vevey ?', de: 'Wann findet der Markt von Vevey statt?' },
      a: {
        en: 'The market runs every Tuesday and Saturday, all year, on the Grande Place, the square that opens onto the lake. Book a hotel near the square if browsing the stalls before breakfast matters to you, since the market sits right at the water’s edge.',
        fr: 'Le marché a lieu chaque mardi et samedi, toute l’année, sur la Grande Place, la place qui s’ouvre sur le lac. Réservez un hôtel proche de la place si flâner entre les étals avant le petit-déjeuner vous tient à cœur, puisque le marché se tient au bord de l’eau.',
        de: 'Der Markt findet jeden Dienstag und Samstag, ganzjährig, auf der Grande Place statt, dem Platz, der sich zum See hin öffnet. Buchen Sie ein Hotel nahe dem Platz, wenn Ihnen ein Bummel über die Stände vor dem Frühstück wichtig ist, denn der Markt liegt direkt am Ufer.',
      },
    },
    {
      q: { en: 'How do I get to Chaplin’s World?', fr: 'Comment se rendre à Chaplin’s World ?', de: 'Wie kommt man zu Chaplin’s World?' },
      a: {
        en: 'Bus 212 leaves Vevey SBB station for the "Chaplin" stop in about 15 minutes, so a hotel near the station makes the trip shortest. The estate itself sits at Route de Fenil 2, Corsier-sur-Vevey, and covers four hectares, with on-site parking at CHF 5 a day including admission for anyone who prefers to drive.',
        fr: 'Le bus 212 quitte la gare de Vevey CFF pour l’arrêt « Chaplin » en environ 15 minutes, ce qui rend le trajet le plus court depuis un hôtel proche de la gare. Le domaine lui-même se trouve au 2 route de Fenil, à Corsier-sur-Vevey, et s’étend sur quatre hectares, avec un stationnement sur place à 5 CHF par jour, admission comprise, pour qui préfère venir en voiture.',
        de: 'Der Bus 212 fährt ab dem Bahnhof Vevey SBB in rund 15 Minuten zur Haltestelle „Chaplin“, sodass ein Hotel nahe dem Bahnhof die kürzeste Fahrt bietet. Das Anwesen selbst liegt an der Route de Fenil 2 in Corsier-sur-Vevey und umfasst vier Hektar, mit Parkplätzen vor Ort für CHF 5 pro Tag inklusive Eintritt für alle, die lieber mit dem Auto kommen.',
      },
    },
    {
      q: { en: 'When is the next Fête des Vignerons?', fr: 'Quand aura lieu la prochaine Fête des Vignerons ?', de: 'Wann findet das nächste Fête des Vignerons statt?' },
      a: {
        en: 'No date is published, so do not plan a trip around it yet. The last edition ran from 18 July to 11 August 2019, and the festival, held in Vevey, has been on the UNESCO Representative List of the Intangible Cultural Heritage of Humanity since 1 December 2016; check for an announced date before you book.',
        fr: 'Aucune date n’est publiée, ne construisez donc pas encore un séjour autour de cet événement. La dernière édition s’est tenue du 18 juillet au 11 août 2019, et la fête, qui se tient à Vevey, est inscrite sur la Liste représentative du patrimoine culturel immatériel de l’humanité de l’UNESCO depuis le 1er décembre 2016 ; vérifiez qu’une date a été annoncée avant de réserver.',
        de: 'Es ist kein Datum veröffentlicht, planen Sie also noch keine Reise darum. Die letzte Ausgabe fand vom 18. Juli bis 11. August 2019 statt, und das in Vevey abgehaltene Fest steht seit dem 1. Dezember 2016 auf der Repräsentativen Liste des immateriellen Kulturerbes der Menschheit der UNESCO; prüfen Sie vor der Buchung, ob ein Termin angekündigt wurde.',
      },
    },
    {
      q: { en: 'Is Vevey in the Lavaux World Heritage area?', fr: 'Vevey fait-elle partie du site classé de Lavaux ?', de: 'Gehört Vevey zum Welterbegebiet Lavaux?' },
      a: {
        en: 'The inscribed landscape covers ten communes, among them Corseaux, Corsier-sur-Vevey, Chardonne and Jongny, on the Vevey side, and the terraces have been on the UNESCO list since 2007. A stay in Vevey already sits inside that listed landscape, and the Route des Grands Crus de Lavaux, a three-kilometre walk through the terraces, starts right at the town’s western edge.',
        fr: 'Le paysage inscrit couvre dix communes, dont Corseaux, Corsier-sur-Vevey, Chardonne et Jongny, du côté de Vevey, et les terrasses sont inscrites à l’UNESCO depuis 2007. Un séjour à Vevey se déroule donc déjà dans ce paysage classé, et la Route des Grands Crus de Lavaux, une marche de trois kilomètres à travers les terrasses, débute juste à la lisière ouest de la ville.',
        de: 'Die eingetragene Landschaft umfasst zehn Gemeinden, darunter Corseaux, Corsier-sur-Vevey, Chardonne und Jongny auf der Seite von Vevey, und die Terrassen stehen seit 2007 auf der UNESCO-Liste. Ein Aufenthalt in Vevey liegt damit bereits in dieser geschützten Landschaft, und die Route des Grands Crus de Lavaux, ein drei Kilometer langer Weg durch die Terrassen, beginnt direkt am westlichen Stadtrand.',
      },
    },
  ],
  neighbours: ['montreux', 'lausanne', 'geneva', 'gruyeres'],
}
