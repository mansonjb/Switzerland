import type { DestinationGuide } from '../types'

// Sources in data/SOURCES-einsiedeln.md and data/research/einsiedeln.md (checked 16/09/2026, hotel URLs checked 21/09/2026). No number without a source.
export const einsiedeln: DestinationGuide = {
  slug: 'einsiedeln',
  stamp: 'generic',
  updated: '2026-09-21',
  meta: {
    title: { en: 'Where to stay in Einsiedeln: the abbey square', fr: 'Où dormir à Einsiedeln : la place du couvent', de: 'Wo übernachten in Einsiedeln: der Klosterplatz' },
    description: {
      en: 'Where to sleep in Einsiedeln, from the Klosterplatz by the abbey to the village centre and the Sihlsee, with hotel facts and abbey visiting hours.',
      fr: 'Où dormir à Einsiedeln, de la Klosterplatz près du couvent au centre du village et au Sihlsee, avec des faits d’hôtels sourcés et les horaires du couvent.',
      de: 'Wo übernachten in Einsiedeln, vom Klosterplatz beim Kloster über das Dorfzentrum bis zur Sihlsee-Seite, mit Hotelfakten und den Besuchszeiten des Klosters.',
    },
  },
  eyebrow: { en: 'Central Switzerland · Schwyz', fr: 'Suisse centrale · Schwyz', de: 'Zentralschweiz · Schwyz' },
  title: { en: 'Where to stay in Einsiedeln', fr: 'Où dormir à Einsiedeln', de: 'Wo übernachten in Einsiedeln' },
  intro: {
    en: 'Einsiedeln sits at 882 m in canton Schwyz, home to 16,621 residents as of 20 January 2026 across 110.4 km2. The village is built around Kloster Einsiedeln, a Benedictine community of about 40 monks that calls itself Switzerland’s most important pilgrimage site. Südostbahn (SOB) trains run a half-hourly schedule from Zurich, and the A3 motorway has exits at Richterswil and Schindellegi, both under 15 minutes away by car. Einsiedeln itself is not car-free.',
    fr: 'Einsiedeln se trouve à 882 m dans le canton de Schwyz, avec 16’621 habitants au 20 janvier 2026 sur 110,4 km2. Le village s’organise autour du Kloster Einsiedeln, une communauté bénédictine d’environ 40 moines qui se présente comme le lieu de pèlerinage le plus important de Suisse. Les trains du Südostbahn (SOB) circulent selon un horaire à la demi-heure depuis Zurich, et l’autoroute A3 compte des sorties à Richterswil et Schindellegi, toutes deux à moins de 15 minutes en voiture. Einsiedeln elle-même n’est pas sans voiture.',
    de: 'Einsiedeln liegt auf 882 m im Kanton Schwyz, mit 16’621 Einwohnenden per 20. Januar 2026 auf 110,4 km2. Das Dorf ist um das Kloster Einsiedeln herum gebaut, eine benediktinische Gemeinschaft von rund 40 Mönchen, die sich selbst als bedeutendsten Wallfahrtsort der Schweiz bezeichnet. Die Südostbahn (SOB) fährt im Halbstundentakt ab Zürich, und die Autobahn A3 hat Ausfahrten in Richterswil und Schindellegi, beide in weniger als 15 Minuten mit dem Auto erreichbar. Einsiedeln selbst ist nicht autofrei.',
  },
  quickAnswer: {
    en: 'Stay in Einsiedeln if the abbey and its pilgrimage history are the reason for the trip: Kloster Einsiedeln stands at the centre of the village, and the half-hourly train from Zurich makes it an easy day trip or a short stay. For lake views and boat trips instead, sleep in Brunnen.',
    fr: 'Dormez à Einsiedeln si le couvent et son histoire de pèlerinage sont la raison du voyage : le Kloster Einsiedeln se dresse au centre du village, et le train à la demi-heure depuis Zurich en fait une excursion facile ou un court séjour. Pour la vue sur le lac et les bateaux, dormez plutôt à Brunnen.',
    de: 'Übernachten Sie in Einsiedeln, wenn das Kloster und seine Wallfahrtsgeschichte der Grund der Reise sind: Das Kloster Einsiedeln steht im Zentrum des Dorfes, und der Halbstundentakt ab Zürich macht es zu einem einfachen Tagesausflug oder Kurzaufenthalt. Für Seeblick und Schiffsfahrten übernachten Sie besser in Brunnen.',
  },
  snapshot: {
    why: {
      en: 'Because the abbey is still a living community, home to about 40 monks, and it calls itself Switzerland’s most important pilgrimage site. Public guided tours run daily except Sunday, and 2026 itself marks 500 years since the abbey’s revival, after it was nearly extinguished in 1526.',
      fr: 'Parce que le couvent reste une communauté vivante, avec environ 40 moines, et qu’il se présente comme le lieu de pèlerinage le plus important de Suisse. Des visites guidées publiques ont lieu tous les jours sauf le dimanche, et 2026 marque justement 500 ans depuis le renouveau du couvent, après qu’il eut failli disparaître en 1526.',
      de: 'Weil das Kloster eine lebendige Gemeinschaft von rund 40 Mönchen bleibt und sich selbst als bedeutendsten Wallfahrtsort der Schweiz bezeichnet. Öffentliche Führungen finden täglich ausser sonntags statt, und 2026 markiert 500 Jahre seit dem Wiederaufblühen des Klosters, nachdem es 1526 beinahe ausgestorben wäre.',
    },
    where: {
      en: 'On the Klosterplatz itself: Boutique Hotel St. Georg, less than 50 m from the abbey. Also on the square: Hotel Drei Könige, at its top end. In the village centre: Hotel Linde. Toward the Sihlsee: Hotel Allegro, on the way to the free Sihlseebadi Roblosen lido.',
      fr: 'Sur la Klosterplatz elle-même : le Boutique Hotel St. Georg, à moins de 50 m du couvent. Sur la place aussi : l’Hôtel Drei Könige, tout en haut. Au centre du village : l’Hôtel Linde. Vers le Sihlsee : l’Hôtel Allegro, en direction de la Sihlseebadi Roblosen, la plage gratuite.',
      de: 'Direkt am Klosterplatz: das Boutique Hotel St. Georg, weniger als 50 m vom Kloster entfernt. Ebenfalls am Platz: das Hotel Drei Könige, zuoberst. Im Dorfzentrum: das Hotel Linde. Richtung Sihlsee: das Hotel Allegro, auf dem Weg zur kostenlosen Sihlseebadi Roblosen.',
    },
    watch: {
      en: 'Sihlseebadi Roblosen, the free lakeside lido on the way to the Sihlsee, keeps set opening times only from May to mid-August; by September its hours depend on the weather, and it closes altogether in poor or cold conditions. If swimming is part of the plan, check the current hours before you build a day around it.',
      fr: 'La Sihlseebadi Roblosen, la plage gratuite au bord du lac en direction du Sihlsee, ne garde des horaires fixes que de mai à mi-août ; dès septembre, ses horaires dépendent de la météo, et elle ferme complètement par mauvais temps ou par froid. Si la baignade fait partie du programme, vérifiez les horaires en cours avant d’organiser une journée autour d’elle.',
      de: 'Die Sihlseebadi Roblosen, das kostenlose Seebad Richtung Sihlsee, hat nur von Mai bis Mitte August feste Öffnungszeiten; ab September hängen ihre Zeiten vom Wetter ab, und bei schlechtem oder kaltem Wetter bleibt sie ganz geschlossen. Wer baden will, sollte die aktuellen Zeiten prüfen, bevor er einen Tag darum plant.',
    },
  },
  story: {
    title: { en: 'Einsiedeln, before you book', fr: 'Einsiedeln, avant de réserver', de: 'Einsiedeln, bevor Sie buchen' },
    paragraphs: [
      {
        en: 'Einsiedeln sits at 882 metres in canton Schwyz, and the village still turns on its abbey. Südostbahn trains run a half-hourly schedule from Zurich, the hourly Voralpen-Express links it to eastern Switzerland and the greater Lucerne area, and the A3 motorway has exits at Richterswil and Schindellegi, both under 15 minutes away by car. Kloster Einsiedeln itself is home to about 40 monks and calls itself Switzerland’s most important pilgrimage site.',
        fr: 'Einsiedeln se trouve à 882 mètres dans le canton de Schwyz, et le village tourne toujours autour de son couvent. Les trains du Südostbahn circulent à la demi-heure depuis Zurich, le Voralpen-Express horaire le relie à la Suisse orientale et à la région élargie de Lucerne, et l’autoroute A3 compte des sorties à Richterswil et Schindellegi, toutes deux à moins de 15 minutes en voiture. Le Kloster Einsiedeln lui-même abrite environ 40 moines et se présente comme le lieu de pèlerinage le plus important de Suisse.',
        de: 'Einsiedeln liegt auf 882 Metern im Kanton Schwyz, und das Dorf dreht sich noch immer um sein Kloster. Die Südostbahn fährt im Halbstundentakt ab Zürich, der stündliche Voralpen-Express verbindet es mit der Ostschweiz und dem weiteren Raum Luzern, und die Autobahn A3 hat Ausfahrten in Richterswil und Schindellegi, beide in weniger als 15 Autominuten erreichbar. Das Kloster Einsiedeln selbst beherbergt rund 40 Mönche und bezeichnet sich als bedeutendste Wallfahrtsort der Schweiz.',
      },
      {
        en: 'The main street tells you how the village is organised: it runs from the station straight up to the Klosterplatz, where the abbey faces the square. Sleep on the square itself for the shortest walk to a guided tour, on the Hauptstrasse for the ordinary village centre, or head out toward the Sihlsee, past the free Sihlseebadi Roblosen lido, for a quieter, more outdoor-facing stay. Hotel guests receive a free ÖV-Karte for local public transport, whichever side they choose.',
        fr: 'La rue principale dit à elle seule comment le village est organisé : elle part de la gare et monte tout droit jusqu’à la Klosterplatz, où le couvent fait face à la place. On dort sur la place elle-même pour le plus court chemin vers une visite guidée, sur la Hauptstrasse pour le centre ordinaire du village, ou en direction du Sihlsee, en passant par la Sihlseebadi Roblosen gratuite, pour un séjour plus calme et plus tourné vers le plein air. Les clients des hôtels reçoivent une ÖV-Karte gratuite pour les transports publics locaux, quel que soit le côté choisi.',
        de: 'Die Hauptstrasse zeigt allein schon, wie das Dorf aufgebaut ist: Sie führt vom Bahnhof geradewegs hinauf zum Klosterplatz, wo das Kloster der Platz gegenübersteht. Wer den kürzesten Weg zu einer Führung will, wohnt auf dem Platz selbst, wer das gewöhnliche Dorfzentrum sucht, an der Hauptstrasse, und wer es ruhiger und naturnaher mag, wohnt Richtung Sihlsee, vorbei an der kostenlosen Sihlseebadi Roblosen. Hotelgäste erhalten, egal für welche Seite sie sich entscheiden, eine gratis ÖV-Karte für den lokalen öffentlichen Verkehr.',
      },
      {
        en: 'The choice of hotels is modest rather than wide. Boutique Hotel St. Georg stands within 50 metres of the abbey and Hotel Drei Könige at the top of the same square, Hotel Linde sits in the village centre under a KunstHotel concept, and Hotel Allegro lies toward the Sihlsee with 14 conference halls and a rooftop bar. Two guesthouses often listed under Einsiedeln, St. Meinrad on the Etzel pass and Brunni in Alpthal, are outside the village, so check the address before you book.',
        fr: 'Le choix d’hôtels est modeste plutôt que vaste. Le Boutique Hotel St. Georg se trouve à moins de 50 mètres du couvent et l’Hôtel Drei Könige en haut de la même place, l’Hôtel Linde se tient au centre du village avec son concept de KunstHotel, et l’Hôtel Allegro se trouve en direction du Sihlsee, avec 14 salles de conférence et un bar sur le toit. Deux auberges souvent rangées sous Einsiedeln, St. Meinrad au col de l’Etzel et Brunni à Alpthal, sont en dehors du village : vérifiez l’adresse avant de réserver.',
        de: 'Die Hotelauswahl ist eher bescheiden als gross. Das Boutique Hotel St. Georg liegt weniger als 50 Meter vom Kloster entfernt und das Hotel Drei Könige zuoberst am selben Platz, das Hotel Linde steht mit seinem KunstHotel-Konzept im Dorfzentrum, und das Hotel Allegro liegt Richtung Sihlsee, mit 14 Konferenzräumen und einer Dachbar. Zwei Gasthäuser, die oft unter Einsiedeln laufen, St. Meinrad auf dem Etzel und Brunni in Alpthal, liegen ausserhalb des Dorfs: vor der Buchung die Adresse prüfen.',
      },
      {
        en: 'Guided tours of the abbey run daily at 2pm, except Sundays and public holidays, so a Sunday-only visit misses that one fixed appointment. 2026 itself is a notable year to come: it marks 500 years since the abbey’s revival, after the community was nearly extinguished in 1526. Outside the abbey, the Panoramaweg Sihlsee, a 9.4 km loop of about 2 h 34, gives a full look at the lake in a single afternoon.',
        fr: 'Les visites guidées du couvent ont lieu tous les jours à 14 heures, sauf les dimanches et jours fériés : une visite limitée au dimanche rate donc ce seul rendez-vous fixe. 2026 est d’ailleurs une année particulière : elle marque 500 ans depuis le renouveau du couvent, après que la communauté eut failli disparaître en 1526. En dehors du couvent, le Panoramaweg Sihlsee, une boucle de 9,4 km d’environ 2 h 34, offre un tour complet du lac en une seule après-midi.',
        de: 'Führungen im Kloster finden täglich um 14 Uhr statt, ausser sonntags und an Feiertagen, ein Besuch nur am Sonntag verpasst also genau diesen einen festen Termin. 2026 ist zudem ein bemerkenswertes Jahr für einen Besuch: Es markiert 500 Jahre seit dem Wiederaufblühen des Klosters, nachdem die Gemeinschaft 1526 beinahe ausgestorben wäre. Ausserhalb des Klosters bietet der Panoramaweg Sihlsee, eine 9,4 km lange Runde von rund 2 Std. 34, an einem einzigen Nachmittag den vollen Blick auf den See.',
      },
    ],
  },
  stats: [
    { value: '882', label: { en: 'metres above sea level', fr: 'mètres d’altitude', de: 'Meter über Meer' } },
    { value: '16621', label: { en: 'residents, as of 20 January 2026', fr: 'habitants, au 20 janvier 2026', de: 'Einwohnende, per 20. Januar 2026' } },
    { value: '15', label: { en: 'minutes from the A3 motorway exits at Richterswil or Schindellegi', fr: 'minutes depuis les sorties d’autoroute A3 de Richterswil ou Schindellegi', de: 'Minuten von den A3-Ausfahrten Richterswil oder Schindellegi' } },
  ],
  hero: {
    photo: '/photos/einsiedeln.jpg',
    caption: { en: 'Kloster Einsiedeln and the Klosterplatz, canton Schwyz, at 882 m.', fr: 'Le Kloster Einsiedeln et la Klosterplatz, canton de Schwyz, à 882 m.', de: 'Kloster Einsiedeln und der Klosterplatz, Kanton Schwyz, auf 882 m.' },
    credit: { author: 'Markus Bernet', license: 'CC BY-SA 2.5', licenseUrl: 'https://creativecommons.org/licenses/by-sa/2.5/', source: 'https://commons.wikimedia.org/wiki/File:Kloster_Einsiedeln_001.jpg' },
  },
  sectors: [
    {
      title: { en: 'Klosterplatz, directly by the abbey', fr: 'Klosterplatz, directement près du couvent', de: 'Klosterplatz, direkt beim Kloster' },
      walk: { en: 'On the square itself, facing Kloster Einsiedeln', fr: 'Sur la place elle-même, face au Kloster Einsiedeln', de: 'Direkt am Platz, gegenüber dem Kloster Einsiedeln' },
      text: {
        en: 'Boutique Hotel St. Georg stands less than 50 m from Kloster Einsiedeln, with tastefully furnished rooms. Hotel Drei Könige stands at the top of the square, its front turned towards the abbey, and half its rooms have a balcony facing either the abbey or the ski jumps.',
        fr: 'Le Boutique Hotel St. Georg se trouve à moins de 50 m du Kloster Einsiedeln, avec des chambres décorées avec goût. L’Hôtel Drei Könige se dresse en haut de la place, sa façade tournée vers le couvent, et la moitié de ses chambres ont un balcon côté couvent ou côté tremplins de saut.',
        de: 'Das Boutique Hotel St. Georg liegt weniger als 50 m vom Kloster Einsiedeln entfernt, mit geschmackvoll eingerichteten Zimmern. Das Hotel Drei Könige steht zuoberst am Platz, die Front dem Kloster zugewandt, und die Hälfte seiner Zimmer hat einen Balkon mit Sicht aufs Kloster oder auf die Skisprungschanzen.',
      },
      points: [
        { en: 'Boutique Hotel St. Georg is less than 50 m from Kloster Einsiedeln', fr: 'Le Boutique Hotel St. Georg est à moins de 50 m du Kloster Einsiedeln', de: 'Das Boutique Hotel St. Georg liegt weniger als 50 m vom Kloster Einsiedeln' },
        { en: 'Hotel Drei Könige stands at the top of the Klosterplatz, half its rooms with a balcony', fr: 'L’Hôtel Drei Könige se dresse en haut de la Klosterplatz, la moitié des chambres avec balcon', de: 'Das Hotel Drei Könige steht zuoberst am Klosterplatz, die Hälfte der Zimmer mit Balkon' },
      ],
      story: {
        en: 'This is the address for the abbey itself: Boutique Hotel St. Georg stands less than 50 metres from Kloster Einsiedeln, close enough that the guided tour is a walk rather than a trip. Hotel Drei Könige sits at the top of the same square, and a balcony on its abbey side puts the facade in front of you at breakfast. Choose this side for the abbey itself, and expect the square to fill with visitors during the day.',
        fr: 'C’est l’adresse pour le couvent lui-même : le Boutique Hotel St. Georg se trouve à moins de 50 mètres du Kloster Einsiedeln, assez proche pour que la visite guidée soit une simple marche plutôt qu’un déplacement. L’Hôtel Drei Könige se dresse en haut de la même place, et un balcon côté couvent met la façade face à vous au petit-déjeuner. On choisit ce côté pour le couvent lui-même, en sachant que la place se remplit de visiteurs dans la journée.',
        de: 'Das ist die Adresse für das Kloster selbst: Das Boutique Hotel St. Georg liegt weniger als 50 Meter vom Kloster Einsiedeln entfernt, nah genug, dass die Führung eher ein Spaziergang als ein Ausflug ist. Das Hotel Drei Könige steht zuoberst am selben Platz, und ein Balkon auf der Klosterseite rückt die Fassade beim Frühstück vor Augen. Diese Seite wählt man wegen des Klosters selbst, im Wissen, dass sich der Platz tagsüber mit Besuchern füllt.',
      },
    },
    {
      title: { en: 'Hauptstrasse and the village centre', fr: 'Hauptstrasse et le centre du village', de: 'Hauptstrasse und das Dorfzentrum' },
      walk: { en: 'The main street between the station and the Klosterplatz', fr: 'La rue principale entre la gare et la Klosterplatz', de: 'Die Hauptstrasse zwischen Bahnhof und Klosterplatz' },
      text: {
        en: 'Hotel Linde, on Schmiedenstrasse, is styled as a KunstHotel with its own restaurant and rooms from simple pilgrim rooms to a junior suite.',
        fr: 'L’Hôtel Linde, sur la Schmiedenstrasse, se présente comme un KunstHotel avec son propre restaurant et des chambres allant de simples chambres de pèlerin à une junior suite.',
        de: 'Das Hotel Linde an der Schmiedenstrasse versteht sich als KunstHotel mit eigenem Restaurant und Zimmern vom einfachen Pilgerzimmer bis zur Junior Suite.',
      },
      points: [
        { en: 'Hotel Linde is a KunstHotel with its own restaurant, rooms from pilgrim rooms to a junior suite', fr: 'L’Hôtel Linde est un KunstHotel avec restaurant propre, chambres de pèlerin à junior suite', de: 'Das Hotel Linde ist ein KunstHotel mit eigenem Restaurant, Zimmer vom Pilgerzimmer bis zur Junior Suite' },
      ],
      story: {
        en: 'Step off the Klosterplatz and down the Hauptstrasse, and Einsiedeln becomes an ordinary village centre rather than a pilgrimage square. Hotel Linde leans into that with an art-hotel concept and its own restaurant, with rooms that start at a simple pilgrim room. This side suits a stay built around the village itself, a short walk from the abbey rather than at its door.',
        fr: 'En quittant la Klosterplatz et en descendant la Hauptstrasse, Einsiedeln redevient un centre de village ordinaire plutôt qu’une place de pèlerinage. L’Hôtel Linde joue cette carte avec un concept de KunstHotel et son propre restaurant, et des chambres qui commencent à la simple chambre de pèlerin. Ce côté convient à un séjour organisé autour du village lui-même, à deux pas du couvent plutôt qu’à sa porte.',
        de: 'Tritt man vom Klosterplatz weg und die Hauptstrasse hinunter, wird Einsiedeln zu einem gewöhnlichen Dorfzentrum statt zu einem Wallfahrtsplatz. Das Hotel Linde setzt darauf mit einem KunstHotel-Konzept und eigenem Restaurant, mit Zimmern ab dem einfachen Pilgerzimmer. Diese Seite passt zu einem Aufenthalt rund um das Dorf selbst, wenige Gehminuten vom Kloster statt direkt davor.',
      },
    },
    {
      title: { en: 'Toward the Sihlsee', fr: 'Vers le Sihlsee', de: 'Richtung Sihlsee' },
      walk: { en: 'Downhill from the village, on the way to the lake', fr: 'En contrebas du village, en direction du lac', de: 'Talwärts vom Dorf, Richtung See' },
      text: {
        en: 'Hotel Allegro, on Lincolnweg, is a 3-star hotel with the budget Allegro Alpin Lodge, 14 conference halls, a restaurant and a rooftop bar. The same direction leads to the free Sihlseebadi Roblosen lido.',
        fr: 'L’Hôtel Allegro, sur le Lincolnweg, est un hôtel 3 étoiles avec l’Allegro Alpin Lodge plus économique, 14 salles de conférence, un restaurant et un bar sur le toit. La même direction mène à la Sihlseebadi Roblosen, la plage gratuite.',
        de: 'Das Hotel Allegro am Lincolnweg ist ein 3-Sterne-Hotel mit der günstigeren Allegro Alpin Lodge, 14 Konferenzräumen, einem Restaurant und einer Dachbar. Dieselbe Richtung führt zur kostenlosen Sihlseebadi Roblosen.',
      },
      points: [
        { en: 'Hotel Allegro has 14 conference halls, a restaurant and a rooftop bar', fr: 'L’Hôtel Allegro compte 14 salles de conférence, un restaurant et un bar sur le toit', de: 'Das Hotel Allegro hat 14 Konferenzräume, ein Restaurant und eine Dachbar' },
        { en: 'This direction leads to the free Sihlseebadi Roblosen lido', fr: 'Cette direction mène à la Sihlseebadi Roblosen, la plage gratuite', de: 'Diese Richtung führt zur kostenlosen Sihlseebadi Roblosen' },
      ],
      story: {
        en: 'Head away from the Klosterplatz in this direction and the village opens toward the Sihlsee. Hotel Allegro is the biggest address in this selection, built for groups with its 14 conference halls. The reward for sleeping here is proximity to the free Sihlseebadi Roblosen lido; the trade-off is more distance back to the abbey.',
        fr: 'En partant de la Klosterplatz dans cette direction, le village s’ouvre vers le Sihlsee. L’Hôtel Allegro est la plus grande adresse de cette sélection, pensée pour les groupes avec ses 14 salles de conférence. La récompense d’y dormir : la proximité de la Sihlseebadi Roblosen gratuite ; la contrepartie : davantage de distance pour revenir au couvent.',
        de: 'Geht man vom Klosterplatz aus in diese Richtung, öffnet sich das Dorf zum Sihlsee hin. Das Hotel Allegro ist die grösste Adresse dieser Auswahl, mit seinen 14 Konferenzräumen auf Gruppen ausgerichtet. Der Lohn fürs Wohnen hier ist die Nähe zur kostenlosen Sihlseebadi Roblosen, der Nachteil ein weiterer Weg zurück zum Kloster.',
      },
    },
  ],
  hotels: [
    {
      slug: 'einsiedeln-allegro',
      name: 'Hotel Allegro Einsiedeln',
      photo: '/photos/hotels/einsiedeln-allegro.jpg',
      url: 'https://www.hotel-allegro.ch/',
      sector: { en: 'Toward the Sihlsee', fr: 'Vers le Sihlsee', de: 'Richtung Sihlsee' },
      facts: [
        { en: 'Lincolnweg 23, 3-star hotel plus the budget Allegro Alpin Lodge and two group houses of 48 and 46 beds', fr: 'Lincolnweg 23, hôtel 3 étoiles avec l’Allegro Alpin Lodge économique et deux maisons de groupe de 48 et 46 lits', de: 'Lincolnweg 23, 3-Sterne-Hotel mit der günstigeren Allegro Alpin Lodge und zwei Gruppenhäusern mit 48 und 46 Betten' },
        { en: '14 conference halls', fr: '14 salles de conférence', de: '14 Konferenzräume' },
        { en: 'Restaurant Allegrino and a rooftop bar', fr: 'Restaurant Allegrino et un bar sur le toit', de: 'Restaurant Allegrino und eine Dachbar' },
      ],
      blurb: {
        en: 'Hotel Allegro stands on Lincolnweg, a 3-star house that also runs the budget Allegro Alpin Lodge and two group houses of 48 and 46 beds. With 14 conference halls, it is built as much for groups and events as for individual guests, and dinner or a drink can stay on site at Restaurant Allegrino or the rooftop bar.',
        fr: 'L’Hôtel Allegro se dresse sur le Lincolnweg, un établissement 3 étoiles qui gère aussi l’Allegro Alpin Lodge, plus économique, et deux maisons de groupe de 48 et 46 lits. Avec 14 salles de conférence, il est pensé autant pour les groupes et les événements que pour les hôtes individuels, et l’on peut dîner ou prendre un verre sur place, au Restaurant Allegrino ou au bar sur le toit.',
        de: 'Das Hotel Allegro steht am Lincolnweg, ein 3-Sterne-Haus, das zusätzlich die günstigere Allegro Alpin Lodge und zwei Gruppenhäuser mit 48 und 46 Betten führt. Mit 14 Konferenzräumen ist es ebenso auf Gruppen und Anlässe wie auf Einzelgäste ausgerichtet, und Abendessen oder ein Drink lassen sich im Haus selbst nehmen, im Restaurant Allegrino oder an der Dachbar.',
      },
    },
    {
      slug: 'einsiedeln-linde',
      name: 'Hotel Linde',
      photo: '/photos/hotels/einsiedeln-linde.jpg',
      url: 'https://www.linde-einsiedeln.ch/',
      sector: { en: 'Hauptstrasse and the village centre', fr: 'Hauptstrasse et le centre du village', de: 'Hauptstrasse und das Dorfzentrum' },
      facts: [
        { en: 'Schmiedenstrasse 28, a ‘KunstHotel’ concept', fr: 'Schmiedenstrasse 28, un concept de « KunstHotel »', de: 'Schmiedenstrasse 28, ein «KunstHotel»-Konzept' },
        { en: 'Rooms from simple pilgrim rooms to a junior suite', fr: 'Chambres allant de simples chambres de pèlerin à une junior suite', de: 'Zimmer vom einfachen Pilgerzimmer bis zur Junior Suite' },
        { en: 'Own restaurant, garni (breakfast-only) service style', fr: 'Restaurant propre, service en formule garni (petit-déjeuner uniquement)', de: 'Eigenes Restaurant, Garni-Betrieb (nur Frühstück)' },
      ],
      blurb: {
        en: 'Hotel Linde, on Schmiedenstrasse, builds its identity around art as much as accommodation, under a ‘KunstHotel’ concept. Rooms range from simple pilgrim rooms to a junior suite, run on a garni, breakfast-only basis, with its own restaurant for other meals.',
        fr: 'L’Hôtel Linde, sur la Schmiedenstrasse, construit son identité autant autour de l’art que de l’hébergement, avec un concept de « KunstHotel ». Les chambres vont de simples chambres de pèlerin à une junior suite, en formule garni, petit-déjeuner uniquement, avec son propre restaurant pour les autres repas.',
        de: 'Das Hotel Linde an der Schmiedenstrasse baut seine Identität ebenso auf Kunst wie auf Unterkunft, mit einem «KunstHotel»-Konzept. Die Zimmer reichen vom einfachen Pilgerzimmer bis zur Junior Suite, geführt als Garni-Betrieb mit nur Frühstück, mit eigenem Restaurant für die übrigen Mahlzeiten.',
      },
    },
    {
      slug: 'einsiedeln-st-georg',
      name: 'Boutique Hotel St. Georg',
      photo: '/photos/hotels/einsiedeln-st-georg.jpg',
      url: 'https://www.hotel-stgeorg.ch/en',
      sector: { en: 'Klosterplatz, directly by the abbey', fr: 'Klosterplatz, directement près du couvent', de: 'Klosterplatz, direkt beim Kloster' },
      facts: [
        { en: 'Less than 50 m from Kloster Einsiedeln', fr: 'À moins de 50 m du Kloster Einsiedeln', de: 'Weniger als 50 m vom Kloster Einsiedeln' },
        { en: 'Tastefully furnished rooms', fr: 'Chambres décorées avec goût', de: 'Geschmackvoll eingerichtete Zimmer' },
      ],
      blurb: {
        en: 'Boutique Hotel St. Georg stands less than 50 metres from Kloster Einsiedeln, close enough that a guided tour of the abbey starts almost at the door. Its tastefully furnished rooms make it the closest booking option to the Klosterplatz in this list.',
        fr: 'Le Boutique Hotel St. Georg se trouve à moins de 50 mètres du Kloster Einsiedeln, assez proche pour qu’une visite guidée du couvent commence presque à la porte. Ses chambres décorées avec goût en font, dans cette liste, l’option la plus proche de la Klosterplatz.',
        de: 'Das Boutique Hotel St. Georg liegt weniger als 50 Meter vom Kloster Einsiedeln entfernt, nah genug, dass eine Klosterführung fast direkt vor der Tür beginnt. Mit seinen geschmackvoll eingerichteten Zimmern ist es in dieser Liste die Adresse am nächsten am Klosterplatz.',
      },
    },
    {
      slug: 'einsiedeln-drei-koenige',
      name: 'Hotel Drei Könige',
      photo: '/photos/hotels/einsiedeln-drei-koenige.jpg',
      url: 'https://www.hotel-dreikoenige.ch/',
      sector: { en: 'Klosterplatz, directly by the abbey', fr: 'Klosterplatz, directement près du couvent', de: 'Klosterplatz, direkt beim Kloster' },
      facts: [
        { en: 'Paracelsuspark 1, at the top of the Klosterplatz', fr: 'Paracelsuspark 1, tout en haut de la Klosterplatz', de: 'Paracelsuspark 1, zuoberst am Klosterplatz' },
        { en: '36 double rooms, 5 single rooms and 8 junior suites, all reached by lift', fr: '36 chambres doubles, 5 simples et 8 junior suites, toutes desservies par ascenseur', de: '36 Doppelzimmer, 5 Einzelzimmer und 8 Juniorsuiten, alle mit dem Lift erreichbar' },
        { en: 'Half the rooms have a balcony facing the abbey or the ski jumps', fr: 'La moitié des chambres ont un balcon côté couvent ou côté tremplins de saut', de: 'Die Hälfte der Zimmer hat einen Balkon mit Sicht aufs Kloster oder auf die Skisprungschanzen' },
      ],
      blurb: {
        en: 'Hotel Drei Könige stands at the top of the Klosterplatz, on a site the house traces back to around 1600, with its front turned towards the abbey. Of its 36 double rooms, 5 singles and 8 junior suites, half have a balcony looking either at the abbey or at the ski jumps, so ask for the abbey side when you book.',
        fr: 'L’Hôtel Drei Könige se dresse tout en haut de la Klosterplatz, sur un emplacement que la maison fait remonter à 1600 environ, sa façade tournée vers le couvent. Sur ses 36 chambres doubles, 5 simples et 8 junior suites, la moitié ont un balcon donnant soit sur le couvent, soit sur les tremplins de saut : demandez le côté couvent en réservant.',
        de: 'Das Hotel Drei Könige steht zuoberst am Klosterplatz, an einer Stelle, die das Haus bis um 1600 zurückverfolgt, die Front dem Kloster zugewandt. Von den 36 Doppelzimmern, 5 Einzelzimmern und 8 Juniorsuiten hat die Hälfte einen Balkon mit Sicht entweder aufs Kloster oder auf die Skisprungschanzen, also bei der Buchung die Klosterseite verlangen.',
      },
    },
  ],
  hotelsNote: {
    en: 'Facts taken from Einsiedeln-Ybrig-Zürichsee Tourismus (eyz.swiss) and each hotel’s own website, checked 16 September 2026; hotel website links rechecked 21 September 2026. No ratings or reviews on this guide. Hotel Drei Könige and Gasthaus Meinradsberg are named in the dossier but are not listed here: Drei Könige’s own domain no longer resolves to the hotel, and Meinradsberg offers its rooms in cooperation with Hotel Drei Könige rather than as an independent booking.',
    fr: 'Faits relevés auprès d’Einsiedeln-Ybrig-Zürichsee Tourismus (eyz.swiss) et sur le site propre de chaque hôtel, vérifiés le 16 septembre 2026 ; les liens des sites d’hôtels ont été revérifiés le 21 septembre 2026. Aucune note ni aucun avis sur ce guide. L’Hôtel Drei Könige et le Gasthaus Meinradsberg figurent dans le dossier mais ne sont pas listés ici : le domaine propre du Drei Könige ne mène plus à l’hôtel, et le Meinradsberg propose ses chambres en coopération avec l’Hôtel Drei Könige plutôt que comme une réservation indépendante.',
    de: 'Fakten von Einsiedeln-Ybrig-Zürichsee Tourismus (eyz.swiss) und von der eigenen Website jedes Hotels, geprüft am 16. September 2026; die Links zu den Hotel-Websites wurden am 21. September 2026 erneut geprüft. Keine Bewertungen oder Rezensionen. Hotel Drei Könige und Gasthaus Meinradsberg werden im Dossier genannt, erscheinen hier aber nicht: Die eigene Domain des Drei Könige führt nicht mehr zum Hotel, und das Meinradsberg bietet seine Zimmer in Zusammenarbeit mit dem Hotel Drei Könige an statt als eigenständige Buchung.',
  },
  practical: {
    title: { en: 'Getting to Einsiedeln, in practice', fr: 'Se rendre à Einsiedeln, en pratique', de: 'Anreise nach Einsiedeln, in der Praxis' },
    items: [
      {
        title: { en: 'By train, half-hourly from Zurich', fr: 'En train, à la demi-heure depuis Zurich', de: 'Mit dem Zug, im Halbstundentakt ab Zürich' },
        text: {
          en: 'Südostbahn (SOB) runs a half-hourly schedule from Zurich to Einsiedeln, and the hourly Voralpen-Express, on the Romanshorn to Lucerne line, calls here too, useful if you are coming from eastern Switzerland or the greater Lucerne area instead.',
          fr: 'Le Südostbahn (SOB) circule selon un horaire à la demi-heure entre Zurich et Einsiedeln, et le Voralpen-Express horaire, sur la ligne Romanshorn-Lucerne, dessert aussi le village, utile si vous venez plutôt de Suisse orientale ou de la région élargie de Lucerne.',
          de: 'Die Südostbahn (SOB) fährt im Halbstundentakt zwischen Zürich und Einsiedeln, und der stündliche Voralpen-Express auf der Linie Romanshorn-Luzern hält hier ebenfalls, nützlich, wenn Sie eher aus der Ostschweiz oder dem weiteren Raum Luzern anreisen.',
        },
      },
      {
        title: { en: 'By car, under 15 minutes from the motorway', fr: 'En voiture, à moins de 15 minutes de l’autoroute', de: 'Mit dem Auto, unter 15 Minuten ab der Autobahn' },
        text: {
          en: 'The A3 motorway has exits at Richterswil and Schindellegi, both under 15 minutes from the village, with public parking available including the Parkhaus Brüel once you arrive.',
          fr: 'L’autoroute A3 compte des sorties à Richterswil et à Schindellegi, toutes deux à moins de 15 minutes du village, avec du stationnement public à l’arrivée, dont le Parkhaus Brüel.',
          de: 'Die Autobahn A3 hat Ausfahrten in Richterswil und Schindellegi, beide weniger als 15 Minuten vom Dorf entfernt, mit öffentlichen Parkplätzen vor Ort, darunter das Parkhaus Brüel.',
        },
      },
      {
        title: { en: 'From the station to the Klosterplatz', fr: 'De la gare à la Klosterplatz', de: 'Vom Bahnhof zur Klosterplatz' },
        text: {
          en: 'The Hauptstrasse leads straight from the station through the village to the Klosterplatz, so the walk to a hotel or to the abbey rarely needs directions. Hotel guests also receive a free ÖV-Karte for local public transport during their stay.',
          fr: 'La Hauptstrasse mène directement de la gare, à travers le village, jusqu’à la Klosterplatz : la marche jusqu’à un hôtel ou jusqu’au couvent demande rarement de s’orienter. Les clients des hôtels reçoivent aussi une ÖV-Karte gratuite pour les transports publics locaux pendant leur séjour.',
          de: 'Die Hauptstrasse führt vom Bahnhof direkt durchs Dorf zur Klosterplatz, der Weg zu einem Hotel oder zum Kloster braucht also kaum eine Wegbeschreibung. Hotelgäste erhalten zudem während ihres Aufenthalts eine gratis ÖV-Karte für den lokalen öffentlichen Verkehr.',
        },
      },
      {
        title: { en: 'Guided tours run daily, but not every day', fr: 'Les visites guidées ont lieu tous les jours, sauf exception', de: 'Führungen finden täglich statt, aber nicht jeden Tag' },
        text: {
          en: 'Public guided tours of the abbey run daily at 2pm, except Sundays and public holidays, so a stay built around a Sunday visit alone would miss that fixed appointment entirely. Plan the abbey tour for another day of your stay if you arrive at the weekend.',
          fr: 'Les visites guidées publiques du couvent ont lieu tous les jours à 14 heures, sauf les dimanches et jours fériés : un séjour organisé uniquement autour d’une visite le dimanche raterait donc entièrement ce rendez-vous fixe. Prévoyez la visite du couvent un autre jour de votre séjour si vous arrivez le week-end.',
          de: 'Öffentliche Führungen im Kloster finden täglich um 14 Uhr statt, ausser sonntags und an Feiertagen: Wer den Aufenthalt allein um einen Sonntagsbesuch plant, verpasst diesen festen Termin ganz. Planen Sie die Klosterführung an einem anderen Tag Ihres Aufenthalts ein, wenn Sie am Wochenende anreisen.',
        },
      },
    ],
  },
  doing: {
    title: { en: 'What to do in Einsiedeln', fr: 'Que faire à Einsiedeln', de: 'Was man in Einsiedeln unternimmt' },
    intro: {
      en: 'Einsiedeln is not short of things to do, but a few places give a stay its shape: the abbey and its fountain, a loop around the Sihlsee, and the story of the hermit the village is named for. These are the ones named by the abbey, the tourist office and the operators, with the figures they publish.',
      fr: 'Les activités ne manquent pas à Einsiedeln, mais quelques lieux donnent sa forme à un séjour : le couvent et sa fontaine, une boucle autour du Sihlsee, et l’histoire de l’ermite qui a donné son nom au village. Voici ceux que nomment le couvent, l’office du tourisme et les exploitants, avec les chiffres qu’ils publient.',
      de: 'An Aktivitäten fehlt es in Einsiedeln nicht, doch einige Orte prägen einen Aufenthalt besonders: das Kloster und sein Brunnen, eine Runde um den Sihlsee und die Geschichte des Einsiedlers, dem das Dorf seinen Namen verdankt. Das sind jene, die vom Kloster, dem Tourismusbüro und den Betreibern genannt werden, mit den Zahlen, die sie veröffentlichen.',
    },
    groups: [
      {
        kind: 'walk',
        title: { en: 'Two paths around the Sihlsee', fr: 'Deux chemins autour du Sihlsee', de: 'Zwei Wege rund um den Sihlsee' },
        items: [
          {
            name: 'Panoramaweg Sihlsee',
            meta: { en: '9.4 km · about 2 h 34 · 146 m ascent', fr: '9,4 km · environ 2 h 34 · 146 m de montée', de: '9,4 km · rund 2 Std. 34 · 146 Hm im Aufstieg' },
            text: {
              en: 'This 9.4 km loop starts at the Adlermättli information board in front of Kloster Einsiedeln, passes the old Marstall and a statue of St. Benedict, and reaches Birchli with a view back over the monastery and the Sihlsee. It then descends to the shore and returns through forest trails and the Galgenchappeli chapel, an easy grade of about 2 h 34 with 146 m of ascent.',
              fr: 'Cette boucle de 9,4 km part du panneau d’information Adlermättli devant le Kloster Einsiedeln, passe par l’ancien Marstall et une statue de saint Benoît, et atteint Birchli avec une vue en retour sur le couvent et le Sihlsee. Elle redescend ensuite vers la rive et revient par des sentiers forestiers et la chapelle Galgenchappeli, une pente facile d’environ 2 h 34 avec 146 m de montée.',
              de: 'Diese 9,4 km lange Runde beginnt bei der Infotafel Adlermättli vor dem Kloster Einsiedeln, führt am alten Marstall und einer Statue des heiligen Benedikt vorbei und erreicht Birchli mit Blick zurück auf Kloster und Sihlsee. Danach steigt sie zum Ufer ab und kehrt über Waldwege und die Galgenchappeli zurück, leichte Wanderung von rund 2 Std. 34 mit 146 Hm im Aufstieg.',
            },
          },
          {
            name: { en: 'The Sihlsee shore to Roblosen', fr: 'La rive du Sihlsee jusqu’à Roblosen', de: 'Das Sihlsee-Ufer bis Roblosen' },
            meta: { en: 'lakeside section · to the free Sihlseebadi Roblosen', fr: 'section au bord du lac · jusqu’à la Sihlseebadi Roblosen gratuite', de: 'Uferabschnitt · bis zur kostenlosen Sihlseebadi Roblosen' },
            text: {
              en: 'The lakeside stretch of the Panoramaweg follows the Sihlsee past its sailing area to the free Sihlseebadi Roblosen lido. It links central Einsiedeln to the lake without needing the full loop.',
              fr: 'Le tronçon au bord du lac du Panoramaweg longe le Sihlsee au-delà de sa zone de voile jusqu’à la Sihlseebadi Roblosen, plage gratuite. Il relie le centre d’Einsiedeln au lac sans qu’il soit nécessaire de faire la boucle complète.',
              de: 'Der Uferabschnitt des Panoramawegs folgt dem Sihlsee an seinem Segelgebiet vorbei bis zur kostenlosen Sihlseebadi Roblosen. Er verbindet das Zentrum von Einsiedeln mit dem See, ohne die ganze Runde zu erfordern.',
            },
          },
        ],
      },
      {
        kind: 'local',
        title: { en: 'The abbey and the Klosterplatz fountain', fr: 'Le couvent et la fontaine de la Klosterplatz', de: 'Kloster und Klosterplatz-Brunnen' },
        items: [
          {
            name: 'Kloster Einsiedeln',
            meta: { en: 'guided tours daily 2pm, except Sundays and holidays', fr: 'visites guidées tous les jours à 14 h, sauf dimanches et jours fériés', de: 'Führungen täglich 14 Uhr, ausser sonntags und feiertags' },
            text: {
              en: 'Home to the Black Madonna in the Gnadenkapelle, Kloster Einsiedeln calls itself Switzerland’s most important pilgrimage site. Public guided tours of the Klosterkirche and the Gnadenkapelle run daily at 2pm, except Sundays and public holidays.',
              fr: 'Abritant la Vierge noire dans la Gnadenkapelle, le Kloster Einsiedeln se présente comme le lieu de pèlerinage le plus important de Suisse. Des visites guidées publiques de la Klosterkirche et de la Gnadenkapelle ont lieu tous les jours à 14 h, sauf les dimanches et jours fériés.',
              de: 'Mit der Schwarzen Madonna in der Gnadenkapelle bezeichnet sich das Kloster Einsiedeln als bedeutendste Wallfahrtsort der Schweiz. Öffentliche Führungen durch Klosterkirche und Gnadenkapelle finden täglich um 14 Uhr statt, ausser sonntags und an Feiertagen.',
            },
          },
          {
            name: 'Marienbrunnen',
            meta: { en: 'current fountain from 1752 · 14 spouts', fr: 'fontaine actuelle de 1752 · 14 becs', de: 'heutiger Brunnen von 1752 · 14 Ausflüsse' },
            text: {
              en: 'The fountain on the Klosterplatz dates from 1752 and carries a statue of the Immaculata by the Italian sculptor Domenico Pozzi, with 14 spouts. During the French revolutionary invasion of 1798, a local resident, Helene Gyr, bought it to save it from destruction and later returned it to the monastery.',
              fr: 'La fontaine de la Klosterplatz date de 1752 et porte une statue de l’Immaculée par le sculpteur italien Domenico Pozzi, avec 14 becs. Lors de l’invasion révolutionnaire française de 1798, une habitante du lieu, Helene Gyr, l’acheta pour la sauver de la destruction avant de la rendre plus tard au couvent.',
              de: 'Der Brunnen auf dem Klosterplatz stammt von 1752 und trägt eine Statue der Immaculata des italienischen Bildhauers Domenico Pozzi, mit 14 Ausflüssen. Während des französischen Revolutionseinfalls von 1798 kaufte ihn eine Einheimische, Helene Gyr, um ihn vor der Zerstörung zu retten, und gab ihn später dem Kloster zurück.',
            },
          },
        ],
      },
      {
        kind: 'local',
        title: { en: 'The hermit’s story and three museums', fr: 'L’histoire de l’ermite et trois musées', de: 'Die Geschichte des Einsiedlers und drei Museen' },
        items: [
          {
            name: { en: 'The founding of the abbey', fr: 'La fondation du couvent', de: 'Die Gründung des Klosters' },
            meta: { en: 'around 835 to 934', fr: 'de 835 à 934 environ', de: 'rund 835 bis 934' },
            text: {
              en: 'Around 835, the hermit Meinrad, a monk of Reichenau abbey, settled on the site of today’s Gnadenkapelle and was killed there by two robbers on 21 January 861. Other hermits carried on at his site until 934, when Eberhard, provost of Strasbourg cathedral, gathered them into a Benedictine community under the Rule of St Benedict.',
              fr: 'Vers 835, l’ermite Meinrad, moine de l’abbaye de Reichenau, s’installa sur le site de l’actuelle Gnadenkapelle et y fut tué par deux brigands le 21 janvier 861. D’autres ermites poursuivirent sur ce site jusqu’en 934, quand Eberhard, prévôt de la cathédrale de Strasbourg, les rassembla en une communauté bénédictine sous la règle de saint Benoît.',
              de: 'Um 835 liess sich der Einsiedler Meinrad, ein Mönch der Reichenauer Abtei, an der Stelle der heutigen Gnadenkapelle nieder und wurde dort am 21. Januar 861 von zwei Räubern getötet. Weitere Einsiedler führten die Tradition an dieser Stätte fort, bis Eberhard, Propst des Strassburger Münsters, sie 934 zu einer benediktinischen Gemeinschaft nach der Regel des heiligen Benedikt zusammenschloss.',
            },
          },
          {
            name: { en: 'The museums on the Klosterplatz', fr: 'Les musées de la Klosterplatz', de: 'Die Museen am Klosterplatz' },
            meta: { en: 'Panorama painting · Museum Fram · gingerbread museum', fr: 'peinture panoramique · Museum Fram · musée du pain d’épices', de: 'Panoramagemälde · Museum Fram · Lebkuchenmuseum' },
            text: {
              en: 'The tourist office names a panorama painting, Museum Fram and a gingerbread museum among Einsiedeln’s sights on the Klosterplatz. Together they give the square a second reason to linger beyond the abbey itself.',
              fr: 'L’office du tourisme cite une peinture panoramique, le Museum Fram et un musée du pain d’épices parmi les curiosités d’Einsiedeln sur la Klosterplatz. Ensemble, ils donnent à la place une seconde raison de s’y attarder au-delà du couvent lui-même.',
              de: 'Das Tourismusbüro nennt ein Panoramagemälde, das Museum Fram und ein Lebkuchenmuseum unter den Sehenswürdigkeiten Einsiedelns am Klosterplatz. Zusammen geben sie dem Platz einen zweiten Grund zum Verweilen, über das Kloster selbst hinaus.',
            },
          },
        ],
      },
      {
        kind: 'table',
        title: { en: 'Where to eat', fr: 'Où manger', de: 'Wo essen' },
        items: [
          {
            name: 'Gasthaus Meinradsberg',
            meta: { en: 'Ilgenweidstrasse 3 · open Wednesday to Sunday', fr: 'Ilgenweidstrasse 3 · ouvert du mercredi au dimanche', de: 'Ilgenweidstrasse 3 · Mittwoch bis Sonntag geöffnet' },
            text: {
              en: 'Gasthaus Meinradsberg serves seasonal, mostly regional produce, with a summer garden under the trees and a fireside indoor room in winter. It is open Wednesday to Sunday, so it is worth checking the day of the week before you plan a meal there.',
              fr: 'Le Gasthaus Meinradsberg sert une cuisine saisonnière, en majorité de produits régionaux, avec un jardin d’été sous les arbres et une salle au coin du feu en hiver. Il est ouvert du mercredi au dimanche, mieux vaut donc vérifier le jour de la semaine avant d’y prévoir un repas.',
              de: 'Das Gasthaus Meinradsberg serviert saisonale, überwiegend regionale Produkte, mit einem Sommergarten unter den Bäumen und einer Stube am Kamin im Winter. Es ist Mittwoch bis Sonntag geöffnet, vor einem Essen dort lohnt sich also ein Blick auf den Wochentag.',
            },
          },
          {
            name: 'Restaurant Allegrino',
            meta: { en: 'at Hotel Allegro, Lincolnweg 23', fr: 'à l’Hôtel Allegro, Lincolnweg 23', de: 'im Hotel Allegro, Lincolnweg 23' },
            text: {
              en: 'Restaurant Allegrino, at Hotel Allegro on Lincolnweg, serves regional cuisine, and the same address adds a rooftop bar with live music. It works as an easy dinner stop toward the Sihlsee side of the village.',
              fr: 'Le Restaurant Allegrino, à l’Hôtel Allegro sur le Lincolnweg, sert une cuisine régionale, et la même adresse ajoute un bar sur le toit avec musique live. C’est une halte facile pour dîner du côté du Sihlsee dans le village.',
              de: 'Das Restaurant Allegrino im Hotel Allegro am Lincolnweg serviert regionale Küche, und dieselbe Adresse bietet zusätzlich eine Dachbar mit Live-Musik. Ein einfacher Ort zum Abendessen auf der Sihlsee-Seite des Dorfes.',
            },
          },
        ],
      },
    ],
    note: {
      en: 'Places, hours and figures come from Kloster Einsiedeln, Bezirk Einsiedeln, Einsiedeln-Ybrig-Zürichsee Tourismus and outdoor-schwyz.ch, checked 16 September 2026. We publish no ratings and no route descriptions: check conditions on the spot before you set off.',
      fr: 'Lieux, horaires et chiffres viennent du Kloster Einsiedeln, du Bezirk Einsiedeln, d’Einsiedeln-Ybrig-Zürichsee Tourismus et d’outdoor-schwyz.ch, vérifiés le 16 septembre 2026. Nous ne publions ni notes ni descriptifs d’itinéraires : renseignez-vous sur place avant de partir.',
      de: 'Orte, Zeiten und Zahlen stammen vom Kloster Einsiedeln, dem Bezirk Einsiedeln, Einsiedeln-Ybrig-Zürichsee Tourismus und outdoor-schwyz.ch, geprüft am 16. September 2026. Wir veröffentlichen keine Bewertungen und keine Routenbeschreibungen: Erkundigen Sie sich vor Ort, bevor Sie losgehen.',
    },
  },
  faq: [
    {
      q: { en: 'How do you get from Zurich to Einsiedeln?', fr: 'Comment se rend-on de Zurich à Einsiedeln ?', de: 'Wie kommt man von Zürich nach Einsiedeln?' },
      a: {
        en: 'Südostbahn (SOB) trains run a half-hourly schedule from Zurich to Einsiedeln, and the hourly Voralpen-Express links it to eastern Switzerland and the greater Lucerne area on its way between Romanshorn and Lucerne. By car, the A3 motorway has exits at Richterswil and Schindellegi, both under 15 minutes from the village, so a stay here works with or without a car.',
        fr: 'Les trains du Südostbahn (SOB) circulent selon un horaire à la demi-heure entre Zurich et Einsiedeln, et le Voralpen-Express horaire relie le village à la Suisse orientale et à la région élargie de Lucerne sur son trajet entre Romanshorn et Lucerne. En voiture, l’autoroute A3 compte des sorties à Richterswil et Schindellegi, toutes deux à moins de 15 minutes du village : un séjour ici fonctionne donc avec ou sans voiture.',
        de: 'Die Südostbahn (SOB) fährt im Halbstundentakt zwischen Zürich und Einsiedeln, und der stündliche Voralpen-Express verbindet das Dorf auf seiner Strecke zwischen Romanshorn und Luzern mit der Ostschweiz und dem weiteren Raum Luzern. Mit dem Auto hat die Autobahn A3 Ausfahrten in Richterswil und Schindellegi, beide weniger als 15 Minuten vom Dorf entfernt: Ein Aufenthalt hier funktioniert also mit und ohne Auto.',
      },
    },
    {
      q: { en: 'Can you visit the abbey and see the Black Madonna?', fr: 'Peut-on visiter le couvent et voir la Vierge noire ?', de: 'Kann man das Kloster besuchen und die Schwarze Madonna sehen?' },
      a: {
        en: 'Yes: Kloster Einsiedeln runs public guided tours daily at 2pm, except Sundays and public holidays, and the Black Madonna sits inside the Gnadenkapelle within the abbey church. Plan around that one weekly gap if Sunday is the only day of your stay you have free.',
        fr: 'Oui : le Kloster Einsiedeln propose des visites guidées publiques tous les jours à 14 h, sauf les dimanches et jours fériés, et la Vierge noire se trouve dans la Gnadenkapelle, à l’intérieur de l’église du couvent. Tenez compte de cette seule fermeture hebdomadaire si le dimanche est le seul jour libre de votre séjour.',
        de: 'Ja: Das Kloster Einsiedeln bietet täglich um 14 Uhr öffentliche Führungen an, ausser sonntags und an Feiertagen, und die Schwarze Madonna steht in der Gnadenkapelle innerhalb der Klosterkirche. Wer als einzigen freien Tag den Sonntag hat, sollte diese eine wöchentliche Lücke einplanen.',
      },
    },
    {
      q: { en: 'What is the origin of Einsiedeln Abbey?', fr: 'Quelle est l’origine du couvent d’Einsiedeln ?', de: 'Wie entstand das Kloster Einsiedeln?' },
      a: {
        en: 'The hermit Meinrad, a monk of Reichenau abbey, settled on the site of today’s Gnadenkapelle around 835 and was killed there by two robbers on 21 January 861. Other hermits continued at his site until 934, when Eberhard, provost of Strasbourg cathedral, gathered them into the formal Benedictine community that still occupies the same spot.',
        fr: 'L’ermite Meinrad, moine de l’abbaye de Reichenau, s’installa vers 835 sur le site de l’actuelle Gnadenkapelle et y fut tué par deux brigands le 21 janvier 861. D’autres ermites poursuivirent sur ce site jusqu’en 934, quand Eberhard, prévôt de la cathédrale de Strasbourg, les rassembla en une communauté bénédictine officielle, toujours établie au même endroit.',
        de: 'Der Einsiedler Meinrad, ein Mönch der Reichenauer Abtei, liess sich um 835 an der Stelle der heutigen Gnadenkapelle nieder und wurde dort am 21. Januar 861 von zwei Räubern getötet. Weitere Einsiedler führten die Tradition an dieser Stätte fort, bis Eberhard, Propst des Strassburger Münsters, sie 934 zur formellen benediktinischen Gemeinschaft zusammenschloss, die bis heute denselben Ort besetzt.',
      },
    },
    {
      q: { en: 'What is there to do at the Sihlsee?', fr: 'Que faire au bord du Sihlsee ?', de: 'Was gibt es am Sihlsee zu tun?' },
      a: {
        en: 'The Panoramaweg Sihlsee is a 9.4 km loop from the monastery, about 2 h 34 of walking with 146 m of ascent, and its lakeside section passes the free Sihlseebadi Roblosen lido. That lido only keeps set opening hours from May to mid-August, so check the current times before you plan a swim later in the season.',
        fr: 'Le Panoramaweg Sihlsee est une boucle de 9,4 km depuis le couvent, environ 2 h 34 de marche avec 146 m de montée, et sa section au bord du lac passe devant la Sihlseebadi Roblosen, plage gratuite. Celle-ci ne garde des horaires fixes que de mai à mi-août : vérifiez donc les horaires en cours avant de prévoir une baignade plus tard dans la saison.',
        de: 'Der Panoramaweg Sihlsee ist eine 9,4 km lange Runde ab dem Kloster, rund 2 Std. 34 Gehzeit mit 146 Hm im Aufstieg, und sein Uferabschnitt führt an der kostenlosen Sihlseebadi Roblosen vorbei. Diese hat nur von Mai bis Mitte August feste Öffnungszeiten, prüfen Sie also die aktuellen Zeiten, bevor Sie später in der Saison ein Bad einplanen.',
      },
    },
    {
      q: { en: 'What is 2026’s anniversary at the abbey?', fr: 'Quel anniversaire le couvent marque-t-il en 2026 ?', de: 'Welches Jubiläum feiert das Kloster 2026?' },
      a: {
        en: '2026 marks 500 years since the abbey’s revival: in 1526 the community was, in its own words, almost extinct, and the year is marked as ‘500 Jahre Wiederaufblühen’, 500 years of revival. It makes 2026 a fitting year to time a pilgrimage stay around, alongside the abbey’s regular daily tours.',
        fr: '2026 marque 500 ans depuis le renouveau du couvent : en 1526, la communauté était, selon ses propres mots, presque éteinte, et l’année est célébrée comme « 500 Jahre Wiederaufblühen », 500 ans de renouveau. Cela fait de 2026 une année particulièrement adaptée pour un séjour de pèlerinage, en plus des visites quotidiennes habituelles du couvent.',
        de: '2026 markiert 500 Jahre seit dem Wiederaufblühen des Klosters: 1526 war die Gemeinschaft nach eigenen Worten beinahe ausgestorben, und das Jahr wird als «500 Jahre Wiederaufblühen» begangen. Das macht 2026 zu einem passenden Jahr für einen Wallfahrtsaufenthalt, neben den gewöhnlichen täglichen Führungen des Klosters.',
      },
    },
  ],
  neighbours: ['brunnen', 'zug', 'lucerne', 'zurich'],
}
