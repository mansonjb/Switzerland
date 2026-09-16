import type { L } from '@/lib/i18n'

export const home = {
  meta: {
    title: { en: 'Stays in Switzerland: where to stay, village by village', fr: 'Stays in Switzerland : où dormir en Suisse, village par village', de: 'Stays in Switzerland: wo übernachten in der Schweiz, Ort für Ort' } as L,
    description: {
      en: 'An independent guide to choosing where to sleep in Switzerland: the right village or area, with travel times, Swiss Travel Pass coverage, seasonal closures and car-free access.',
      fr: 'Un guide indépendant pour choisir où dormir en Suisse : le bon village ou le bon secteur, avec temps de trajet, couverture du Swiss Travel Pass, fermetures de saison et accès sans voiture.',
      de: 'Ein unabhängiger Reiseführer für die Wahl der Unterkunft in der Schweiz: der richtige Ort oder Ortsteil, mit Reisezeiten, Swiss Travel Pass, saisonalen Schliessungen und autofreiem Zugang.',
    } as L,
  },
  title: { en: 'Where to stay in Switzerland, no guesswork', fr: 'Où dormir en Suisse, sans hésiter', de: 'Wo übernachten in der Schweiz, ohne zu zögern' } as L,
  intro: {
    en: 'The exact village or area to drop your bags in, and the numbers that settle it: travel times, Swiss Travel Pass, seasonal closures, car-free access. Pages go live one by one, once every fact is checked.',
    fr: 'Le village ou le secteur exact où poser ses bagages, et les chiffres qui tranchent : trajets, Swiss Travel Pass, fermetures de saison, accès sans voiture. Les pages sont publiées une à une, une fois chaque fait vérifié.',
    de: 'Der genaue Ort oder Ortsteil für Ihr Gepäck und die Zahlen, die entscheiden: Reisezeiten, Swiss Travel Pass, saisonale Schliessungen, autofreier Zugang. Die Seiten erscheinen nacheinander, sobald jede Angabe geprüft ist.',
  } as L,
  sheetTitle: { en: 'The sheet', fr: 'La planche', de: 'Der Bogen' } as L,
  sheetNote: { en: 'Altitude of the village in metres', fr: 'Altitude du village en mètres', de: 'Höhe des Ortes in Metern' } as L,
  regionsTitle: { en: 'By region', fr: 'Par région', de: 'Nach Region' } as L,
  regions: [
    {
      slug: 'bernese-oberland',
      name: { en: 'Bernese Oberland', fr: 'Oberland bernois', de: 'Berner Oberland' } as L,
      bases: { en: 'Interlaken, Lauterbrunnen, Wengen, Mürren, Grindelwald', fr: 'Interlaken, Lauterbrunnen, Wengen, Mürren, Grindelwald', de: 'Interlaken, Lauterbrunnen, Wengen, Mürren, Grindelwald' } as L,
      fromZurich: '≈ 2 h',
      why: { en: 'Steep valleys, car-free villages, the Jungfraujoch', fr: 'Vallées encaissées, villages sans voiture, Jungfraujoch', de: 'Steile Täler, autofreie Dörfer, Jungfraujoch' } as L,
    },
    {
      slug: 'valais',
      name: { en: 'Valais', fr: 'Valais', de: 'Wallis' } as L,
      bases: { en: 'Zermatt, Saas-Fee', fr: 'Zermatt, Saas-Fee', de: 'Zermatt, Saas-Fee' } as L,
      fromZurich: '≈ 3 h 30',
      why: { en: 'High mountains and two car-free resorts', fr: 'Haute montagne et deux stations sans voiture', de: 'Hochgebirge und zwei autofreie Ferienorte' } as L,
    },
    {
      slug: 'graubunden',
      name: { en: 'Graubünden', fr: 'Grisons', de: 'Graubünden' } as L,
      bases: { en: 'St. Moritz', fr: 'Saint-Moritz', de: 'St. Moritz' } as L,
      fromZurich: '≈ 3 h 20',
      why: { en: 'Engadine lakes and a high-altitude resort town', fr: "Lacs de l'Engadine et station d'altitude", de: 'Engadiner Seen und ein hochgelegener Kurort' } as L,
    },
  ],
  regionsNote: {
    en: 'Typical fastest train times from Zurich main station, 2026 timetable: direct to Interlaken Ost, change at Visp for Zermatt, change at Chur for St. Moritz. Check sbb.ch for your date.',
    fr: 'Temps de train les plus courts habituels depuis la gare centrale de Zurich, horaire 2026 : direct pour Interlaken Ost, changement à Viège pour Zermatt, à Coire pour Saint-Moritz. Vérifiez sur sbb.ch pour votre date.',
    de: 'Übliche schnellste Zugzeiten ab Zürich HB, Fahrplan 2026: direkt nach Interlaken Ost, Umsteigen in Visp nach Zermatt, in Chur nach St. Moritz. Für Ihr Datum auf sbb.ch prüfen.',
  } as L,
  carFreeText: {
    en: 'Five villages on the sheet keep private cars out: Zermatt, Wengen, Mürren, Saas-Fee and Gimmelwald. You arrive by train, bus or cable car, and every destination here can be reached by public transport.',
    fr: 'Cinq villages de la planche sont fermés aux voitures privées : Zermatt, Wengen, Mürren, Saas-Fee et Gimmelwald. On y arrive en train, en bus ou en téléphérique, et toutes les destinations se rejoignent en transports publics.',
    de: 'Fünf Orte auf dem Bogen sind für Privatautos gesperrt: Zermatt, Wengen, Mürren, Saas-Fee und Gimmelwald. Man reist mit Bahn, Bus oder Seilbahn an, und alle Reiseziele sind mit dem öffentlichen Verkehr erreichbar.',
  } as L,
  passText: {
    en: 'In the Jungfrau region the Swiss Travel Pass covers the trains as far as Wengen and Grindelwald, then gives 25% off the climb to the Jungfraujoch. Each destination page shows what is included, leg by leg.',
    fr: "Dans la région de la Jungfrau, le Swiss Travel Pass couvre les trains jusqu'à Wengen et Grindelwald, puis donne 25 % de réduction sur la montée au Jungfraujoch. Chaque page destination détaille ce qui est inclus, tronçon par tronçon.",
    de: 'In der Jungfrauregion deckt der Swiss Travel Pass die Züge bis Wengen und Grindelwald und gibt danach 25 % Ermässigung auf die Fahrt zum Jungfraujoch. Jede Reiseziel-Seite zeigt Strecke für Strecke, was inbegriffen ist.',
  } as L,
  faq: [
    {
      q: { en: 'How are the destinations chosen?', fr: 'Comment les destinations sont-elles choisies ?', de: 'Wie werden die Reiseziele ausgewählt?' } as L,
      a: {
        en: 'On access by public transport, services open outside the peak season, and how clearly the choice of area can be explained. The full methodology is published.',
        fr: "Sur l'accès en transports publics, les services ouverts hors pleine saison et la clarté du choix de secteur. La méthodologie complète est publiée.",
        de: 'Nach Erreichbarkeit mit dem öffentlichen Verkehr, Angeboten ausserhalb der Hochsaison und danach, wie klar sich die Wahl des Ortsteils erklären lässt. Die vollständige Methodik ist veröffentlicht.',
      } as L,
    },
    {
      q: { en: 'Where do the hotel prices come from?', fr: 'D’où viennent les prix des hôtels ?', de: 'Woher stammen die Hotelpreise?' } as L,
      a: {
        en: 'From Booking.com: the lowest and the average nightly rate for 2 adults, seen on several winter and summer dates, with the date they were collected. They are indicative; the live map and the buttons show the real price for your dates. We publish no ratings or reviews.',
        fr: 'De Booking.com : le tarif le plus bas et la moyenne par nuit pour 2 adultes, relevés sur plusieurs dates d’hiver et d’été, avec la date du relevé. Ils sont indicatifs ; la carte en direct et les boutons donnent le vrai prix pour vos dates. Nous ne publions ni notes ni avis.',
        de: 'Von Booking.com: der tiefste und der durchschnittliche Nachtpreis für 2 Erwachsene an mehreren Winter- und Sommerdaten, mit Erhebungsdatum. Richtwerte; die Live-Karte und die Schaltflächen zeigen den echten Preis für Ihre Daten. Bewertungen oder Rezensionen veröffentlichen wir nicht.',
      } as L,
    },
    {
      q: { en: 'Is this guide linked to the Swiss authorities?', fr: 'Le guide est-il lié aux autorités suisses ?', de: 'Ist dieser Reiseführer mit den Schweizer Behörden verbunden?' } as L,
      a: {
        en: 'No. It is an independent guide, not affiliated with the Swiss authorities or Switzerland Tourism.',
        fr: 'Non. Guide indépendant, sans lien avec les autorités suisses ni avec Suisse Tourisme.',
        de: 'Nein. Es ist ein unabhängiger Reiseführer ohne Verbindung zu den Schweizer Behörden oder Schweiz Tourismus.',
      } as L,
    },
    {
      q: { en: 'How is the site funded?', fr: 'Comment le site est-il financé ?', de: 'Wie finanziert sich die Website?' } as L,
      a: {
        en: 'Through affiliate links to booking platforms. They are flagged on every destination page and do not change the selection.',
        fr: "Par des liens d'affiliation vers les plateformes de réservation. Ils sont signalés sur chaque page destination et ne modifient pas la sélection.",
        de: 'Über Affiliate-Links zu Buchungsplattformen. Sie sind auf jeder Reiseziel-Seite gekennzeichnet und ändern die Auswahl nicht.',
      } as L,
    },
  ],
}
