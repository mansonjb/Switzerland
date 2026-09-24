import type { L } from '@/lib/i18n'

/** Every number in this copy arrives through fill() from lib/price-index, so the
 *  prose cannot drift from the scraped data when the prices are refreshed. */
export const copy = {
  meta: {
    title: {
      en: 'Hotel prices in Switzerland: what a night costs, town by town',
      fr: 'Prix des hôtels en Suisse : ce que coûte une nuit, ville par ville',
      de: 'Hotelpreise in der Schweiz: was eine Nacht kostet, Ort für Ort',
    } as L,
    description: {
      en: 'Real nightly rates for {hotels} hotels in {towns} Swiss towns, gathered from {samples} dated Booking.com samples in winter and summer. The typical night, the cheapest bases, and where the winter premium bites.',
      fr: 'Tarifs réels de {hotels} hôtels dans {towns} villes suisses, relevés sur {samples} échantillons datés de Booking.com en hiver et en été. La nuit type, les bases les moins chères, et où la surcote d’hiver se fait sentir.',
      de: 'Echte Übernachtungspreise von {hotels} Hotels in {towns} Schweizer Orten, aus {samples} datierten Booking.com-Stichproben in Winter und Sommer. Die typische Nacht, die günstigsten Standorte und wo der Winterzuschlag zuschlägt.',
    } as L,
  },

  eyebrow: { en: 'Price index', fr: 'Indice des prix', de: 'Preisindex' } as L,

  h1: {
    en: 'What a hotel night costs in Switzerland',
    fr: 'Ce que coûte une nuit d’hôtel en Suisse',
    de: 'Was eine Hotelnacht in der Schweiz kostet',
  } as L,

  intro: {
    en: 'Switzerland has a reputation for being expensive, and the averages you find online rarely say expensive where. This page puts {towns} towns side by side on the same measure: what two adults actually pay for one room, one night, on dated samples in winter and in summer.',
    fr: 'La Suisse a une réputation de cherté, et les moyennes que l’on trouve en ligne disent rarement chère où. Cette page met {towns} villes côte à côte sur la même mesure : ce que deux adultes paient réellement pour une chambre, une nuit, sur des dates relevées en hiver et en été.',
    de: 'Die Schweiz gilt als teuer, und die Durchschnittswerte im Netz sagen selten, wo genau. Diese Seite stellt {towns} Orte nach demselben Maß nebeneinander: was zwei Erwachsene tatsächlich für ein Zimmer und eine Nacht zahlen, an festen Stichtagen im Winter und im Sommer.',
  } as L,

  quickAnswer: {
    en: 'Across the {towns} towns measured here, the typical night falls at CHF {typical}. The spread is what matters: {cheapest} sits at CHF {cheapestPrice} and {dearest} at CHF {dearestPrice}, so the town you pick moves the bill further than the week you pick. Prices are samples, not an average of the whole market.',
    fr: 'Sur les {towns} villes mesurées ici, la nuit type ressort à {typical} CHF. C’est l’écart qui compte : {cheapest} est à {cheapestPrice} CHF et {dearest} à {dearestPrice} CHF, si bien que la ville choisie pèse plus sur la note que la semaine choisie. Ces prix sont des échantillons, pas une moyenne de tout le marché.',
    de: 'Über die {towns} hier gemessenen Orte liegt die typische Nacht bei CHF {typical}. Entscheidend ist die Spannweite: {cheapest} liegt bei CHF {cheapestPrice}, {dearest} bei CHF {dearestPrice}. Der gewählte Ort bewegt die Rechnung also stärker als die gewählte Woche. Die Preise sind Stichproben, kein Durchschnitt des gesamten Marktes.',
  } as L,

  table: {
    title: { en: 'Every town, cheapest first', fr: 'Toutes les villes, de la moins chère à la plus chère', de: 'Alle Orte, günstigste zuerst' } as L,
    lead: {
      en: 'Typical is the middle price among the hotels sampled in that town, so one palace hotel cannot pull the figure up on its own. From is the lowest single night found there.',
      fr: 'La colonne Type est le prix médian parmi les hôtels relevés dans la ville : un palace ne peut donc pas tirer le chiffre à lui seul. La colonne Dès est la nuit la moins chère trouvée sur place.',
      de: 'Typisch ist der mittlere Preis unter den erhobenen Hotels des Ortes, ein einzelnes Luxushaus kann den Wert also nicht allein nach oben ziehen. Ab ist die günstigste dort gefundene Einzelnacht.',
    } as L,
    town: { en: 'Town', fr: 'Ville', de: 'Ort' } as L,
    typical: { en: 'Typical night', fr: 'Nuit type', de: 'Typische Nacht' } as L,
    from: { en: 'From', fr: 'Dès', de: 'Ab' } as L,
    winter: { en: 'Winter', fr: 'Hiver', de: 'Winter' } as L,
    summer: { en: 'Summer', fr: 'Été', de: 'Sommer' } as L,
    hotels: { en: 'Hotels', fr: 'Hôtels', de: 'Hotels' } as L,
    none: { en: 'Too few', fr: 'Trop peu', de: 'Zu wenige' } as L,
    noneTitle: {
      en: 'Fewer than {min} hotels priced for that season, so no figure is shown.',
      fr: 'Moins de {min} hôtels avec un prix pour cette saison, aucun chiffre n’est affiché.',
      de: 'Weniger als {min} Hotels mit Preis für diese Saison, daher wird kein Wert gezeigt.',
    } as L,
    carFree: { en: 'car-free', fr: 'sans voiture', de: 'autofrei' } as L,
  },

  region: {
    title: { en: 'By region', fr: 'Par région', de: 'Nach Region' } as L,
    lead: {
      en: 'Averaged over its towns, one region is not far from the next. The interesting number is the spread inside each one, which is where the saving actually lives.',
      fr: 'Moyennée sur ses villes, une région se distingue peu de la suivante. Le chiffre intéressant est l’écart interne à chacune : c’est là que se loge vraiment l’économie.',
      de: 'Über ihre Orte gemittelt liegt eine Region nahe bei der nächsten. Interessant ist die Spanne innerhalb jeder einzelnen, denn dort steckt die eigentliche Ersparnis.',
    } as L,
    range: { en: 'from CHF {min} to CHF {max}', fr: 'de {min} à {max} CHF', de: 'von CHF {min} bis CHF {max}' } as L,
    towns: { en: '{n} towns', fr: '{n} villes', de: '{n} Orte' } as L,
  },

  season: {
    title: { en: 'Winter or summer, depending on the town', fr: 'Hiver ou été, selon la ville', de: 'Winter oder Sommer, je nach Ort' } as L,
    lead: {
      en: 'There is no Swiss high season, only local ones pointing in opposite directions. The steepest winter premium here belongs to {topWinter}, {topWinterPct}% above its own summer rate, and the top of that list is ski resorts. The steepest move the other way belongs to {topSummer}, {topSummerPct}% dearer in summer, and that list opens with the lake towns. Between the two ends most places shift by a few percent either way, so the season decides less than the town.',
      fr: 'Il n’existe pas de haute saison suisse, seulement des hautes saisons locales qui pointent dans des directions opposées. La plus forte surcote d’hiver revient à {topWinter}, {topWinterPct}% au-dessus de son propre tarif d’été, et le haut de cette liste est occupé par les stations de ski. Le plus fort mouvement inverse revient à {topSummer}, {topSummerPct}% plus cher en été, et cette liste s’ouvre sur les villes des lacs. Entre ces deux extrêmes, la plupart des lieux bougent de quelques pour cent, si bien que la saison décide moins que la ville.',
      de: 'Eine schweizweite Hochsaison gibt es nicht, nur lokale, die in gegensätzliche Richtungen zeigen. Den höchsten Winterzuschlag trägt hier {topWinter} mit {topWinterPct}% über dem eigenen Sommertarif, und oben auf dieser Liste stehen Skiorte. Die stärkste Bewegung in die andere Richtung trägt {topSummer}, im Sommer {topSummerPct}% teurer, und diese Liste beginnt mit den Seeorten. Zwischen beiden Enden bewegen sich die meisten Orte um wenige Prozent, die Saison entscheidet also weniger als der Ort.',
    } as L,
    winterUp: { en: 'Dearer in winter', fr: 'Plus chères en hiver', de: 'Im Winter teurer' } as L,
    summerUp: { en: 'Dearer in summer', fr: 'Plus chères en été', de: 'Im Sommer teurer' } as L,
    note: {
      en: 'Only the {n} towns with enough hotels priced in both seasons appear here.',
      fr: 'Seules les {n} villes disposant d’assez d’hôtels tarifés dans les deux saisons figurent ici.',
      de: 'Hier erscheinen nur die {n} Orte mit genügend Hotels in beiden Saisons.',
    } as L,
  },

  swap: {
    title: { en: 'Sleep next door and save', fr: 'Dormir à côté et payer moins', de: 'Nebenan schlafen und sparen' } as L,
    lead: {
      en: 'The expensive resorts sit beside cheaper ones. Each pair below is a town and a neighbour already listed on its guide page, meaning a swap the trip survives, not simply the nearest dot on a map.',
      fr: 'Les stations chères côtoient des stations moins chères. Chaque paire ci-dessous associe une ville et un voisin déjà cité sur sa page guide : un échange que le voyage supporte, et pas seulement le point le plus proche sur une carte.',
      de: 'Die teuren Orte liegen neben günstigeren. Jedes Paar unten verbindet einen Ort mit einem Nachbarn, der bereits auf dessen Reiseführerseite steht: ein Tausch, den die Reise verträgt, und nicht bloß der nächste Punkt auf der Karte.',
    } as L,
    insteadOf: { en: 'Instead of {place}', fr: 'Plutôt que {place}', de: 'Statt {place}' } as L,
    save: { en: '{n}% less', fr: '{n}% de moins', de: '{n}% weniger' } as L,
    caveat: {
      en: 'A cheaper base costs time instead of money: you pay for the journey and you lose the early start. It is worth it for a long stay, rarely for two nights.',
      fr: 'Une base moins chère se paie en temps plutôt qu’en argent : le trajet est à payer et le départ matinal est perdu. Cela vaut le coup sur un long séjour, rarement sur deux nuits.',
      de: 'Ein günstigerer Standort kostet Zeit statt Geld: Die Anfahrt ist zu bezahlen, der frühe Start entfällt. Bei langem Aufenthalt lohnt es sich, bei zwei Nächten selten.',
    } as L,
  },

  method: {
    title: { en: 'How these prices were gathered', fr: 'Comment ces prix ont été relevés', de: 'Wie diese Preise erhoben wurden' } as L,
    body: {
      en: 'Between {scrapedFrom} and {scrapedTo} we read {samples} dated prices for {hotels} hotels across {towns} towns on Booking.com, always for {occupancy}. Winter figures come from {winterDates}, summer figures from {summerDates}. A town needs {min} hotels priced for a column before that column is filled in, which is why some cells are empty.',
      fr: 'Entre le {scrapedFrom} et le {scrapedTo}, nous avons relevé {samples} prix datés pour {hotels} hôtels répartis dans {towns} villes sur Booking.com, toujours pour {occupancy}. Les chiffres d’hiver portent sur {winterDates}, ceux d’été sur {summerDates}. Une ville doit compter {min} hôtels tarifés pour qu’une colonne soit remplie, d’où les cases vides.',
      de: 'Zwischen dem {scrapedFrom} und dem {scrapedTo} haben wir {samples} datierte Preise für {hotels} Hotels in {towns} Orten auf Booking.com erhoben, stets für {occupancy}. Die Winterwerte stammen vom {winterDates}, die Sommerwerte vom {summerDates}. Ein Ort braucht {min} Hotels mit Preis, bevor eine Spalte gefüllt wird, daher die leeren Felder.',
    } as L,
    limits: {
      en: 'Read them as a comparison between towns, not as a quote. They cover the hotels we track in each place rather than its whole market, they are a snapshot of the day they were read, and your own dates, room and cancellation terms will land somewhere else.',
      fr: 'À lire comme une comparaison entre villes, pas comme un devis. Ils portent sur les hôtels que nous suivons dans chaque lieu et non sur tout son marché, ils figent la journée du relevé, et vos propres dates, chambre et conditions d’annulation donneront un autre montant.',
      de: 'Zu lesen als Vergleich zwischen Orten, nicht als Angebot. Sie umfassen die Hotels, die wir je Ort verfolgen, nicht dessen gesamten Markt, sie halten den Tag der Erhebung fest, und Ihre eigenen Daten, Zimmer und Stornobedingungen ergeben einen anderen Betrag.',
    } as L,
  },

  faq: {
    title: { en: 'Questions about Swiss hotel prices', fr: 'Questions sur les prix des hôtels suisses', de: 'Fragen zu Schweizer Hotelpreisen' } as L,
    items: [
      {
        q: { en: 'How much is a hotel night in Switzerland?', fr: 'Combien coûte une nuit d’hôtel en Suisse ?', de: 'Was kostet eine Hotelnacht in der Schweiz?' } as L,
        a: {
          en: 'Across the {towns} towns measured here, the middle figure is CHF {typical} for two adults in one room. Below CHF 200 you are in the smaller towns and the valley bases, above CHF 400 you are in the famous resorts and in Zurich.',
          fr: 'Sur les {towns} villes mesurées ici, la valeur médiane est de {typical} CHF pour deux adultes en chambre double. Sous 200 CHF, vous êtes dans les petites villes et les bases de vallée ; au-dessus de 400 CHF, dans les stations célèbres et à Zurich.',
          de: 'Über die {towns} hier gemessenen Orte liegt der mittlere Wert bei CHF {typical} für zwei Erwachsene im Doppelzimmer. Unter CHF 200 sind Sie in den kleineren Orten und Talstandorten, über CHF 400 in den bekannten Resorts und in Zürich.',
        } as L,
      },
      {
        q: { en: 'Is Switzerland cheaper in winter or in summer?', fr: 'La Suisse est-elle moins chère en hiver ou en été ?', de: 'Ist die Schweiz im Winter oder im Sommer günstiger?' } as L,
        a: {
          en: 'It depends entirely on where you sleep. In this sample the ski resorts cost more between December and February, while the lake towns and the cities cost more in summer. Picking the season without picking the town first tells you nothing.',
          fr: 'Cela dépend entièrement du lieu où vous dormez. Dans cet échantillon, les stations de ski coûtent plus cher entre décembre et février, tandis que les villes des lacs et les grandes villes coûtent plus cher en été. Choisir la saison sans choisir d’abord la ville n’apprend rien.',
          de: 'Das hängt ganz davon ab, wo Sie übernachten. In dieser Stichprobe kosten die Skiorte zwischen Dezember und Februar mehr, die Seeorte und Städte dagegen im Sommer. Die Saison zu wählen, ohne zuerst den Ort zu wählen, sagt nichts aus.',
        } as L,
      },
      {
        q: { en: 'Which is the cheapest base for a Swiss trip?', fr: 'Quelle est la base la moins chère pour un séjour en Suisse ?', de: 'Welcher Standort ist für eine Schweiz-Reise am günstigsten?' } as L,
        a: {
          en: 'Of the towns here, {cheapest} is the lowest at CHF {cheapestPrice}. More useful than the outright cheapest is the cheaper neighbour: several of the famous resorts sit beside a town that costs a third less for the same region.',
          fr: 'Parmi les villes retenues, {cheapest} est la moins chère à {cheapestPrice} CHF. Plus utile que le minimum absolu : le voisin moins cher. Plusieurs stations célèbres jouxtent une ville qui coûte un tiers de moins pour la même région.',
          de: 'Von den hier erfassten Orten ist {cheapest} mit CHF {cheapestPrice} der günstigste. Nützlicher als der absolute Tiefstwert ist der günstigere Nachbar: Mehrere bekannte Resorts liegen neben einem Ort, der für dieselbe Region ein Drittel weniger kostet.',
        } as L,
      },
      {
        q: { en: 'Why do these figures differ from what I see on Booking.com?', fr: 'Pourquoi ces chiffres diffèrent-ils de ce que je vois sur Booking.com ?', de: 'Warum weichen diese Zahlen von dem ab, was ich auf Booking.com sehe?' } as L,
        a: {
          en: 'Because they are fixed samples. Each one was read on a set date for {occupancy}, between {scrapedFrom} and {scrapedTo}. Swiss hotel prices move with the day of the week, the snow and the events calendar, so treat the table as a ranking of towns and check your own dates for the real number.',
          fr: 'Parce que ce sont des échantillons figés. Chacun a été relevé à une date donnée pour {occupancy}, entre le {scrapedFrom} et le {scrapedTo}. Les prix suisses varient avec le jour de la semaine, l’enneigement et le calendrier des événements : lisez le tableau comme un classement de villes et vérifiez vos propres dates pour le montant réel.',
          de: 'Weil es feste Stichproben sind. Jede wurde an einem bestimmten Datum für {occupancy} erhoben, zwischen dem {scrapedFrom} und dem {scrapedTo}. Schweizer Hotelpreise bewegen sich mit Wochentag, Schneelage und Veranstaltungskalender. Lesen Sie die Tabelle als Rangliste der Orte und prüfen Sie für den echten Betrag Ihre eigenen Daten.',
        } as L,
      },
      {
        q: { en: 'Which Swiss region is the cheapest to sleep in?', fr: 'Quelle région suisse est la moins chère pour dormir ?', de: 'In welcher Schweizer Region übernachtet man am günstigsten?' } as L,
        a: {
          en: 'Among the regions with enough towns to compare, {cheapRegion} comes out lowest at CHF {cheapRegionPrice} and {dearRegion} highest at CHF {dearRegionPrice}. The gap inside a region is wider than the gap between regions, so the region is a starting point and the town is the decision.',
          fr: 'Parmi les régions comptant assez de villes pour être comparées, {cheapRegion} ressort la plus basse à {cheapRegionPrice} CHF et {dearRegion} la plus haute à {dearRegionPrice} CHF. L’écart à l’intérieur d’une région dépasse l’écart entre régions : la région est un point de départ, la ville est la décision.',
          de: 'Unter den Regionen mit genügend vergleichbaren Orten liegt {cheapRegion} mit CHF {cheapRegionPrice} am niedrigsten und {dearRegion} mit CHF {dearRegionPrice} am höchsten. Die Spanne innerhalb einer Region ist größer als die zwischen den Regionen: Die Region ist der Ausgangspunkt, der Ort ist die Entscheidung.',
        } as L,
      },
    ],
  },

  ctaTitle: {
    en: 'Know your budget? Find the town that fits it.',
    fr: 'Votre budget est fixé ? Trouvez la ville qui lui correspond.',
    de: 'Budget steht? Finden Sie den passenden Ort.',
  } as L,

  breadcrumb: { en: 'Hotel prices', fr: 'Prix des hôtels', de: 'Hotelpreise' } as L,
}
