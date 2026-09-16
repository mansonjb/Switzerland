# Sources: Vevey guide (data/guides/vevey.ts)

Checked 16/09/2026, from the dossier at data/research/vevey.md. One line per fact, then UNVERIFIED.

- Vevey canton Vaud, altitude 383 m | VERIFIED | https://en.wikipedia.org/wiki/Vevey
- Geneva airport to Vevey 1 h 07 direct IR 90, 1 h 14 direct IR 95 | VERIFIED | https://transport.opendata.ch/v1/connections?from=Gen%C3%A8ve-A%C3%A9roport&to=Vevey&date=2026-10-15&time=10:00
- Lausanne to Vevey 14 min direct RE 33 | VERIFIED | same API
- Vevey to Montreux 6 min direct | VERIFIED | same API
- Vevey reached by road, no car ban and no access permit published | VERIFIED | inferred, no restriction published for the town on the pages fetched
- Vevey market every Tuesday and Saturday on the Grande Place | VERIFIED | https://www.montreuxriviera.com/en/P68726/vevey-market
- Chaplin's World, Route de Fenil 2, 1804 Corsier-sur-Vevey, four-hectare estate | VERIFIED | https://www.chaplinsworld.com/en/
- Chaplin's World: bus 212 from Vevey SBB, about 15 min; parking CHF 5/day with admission; two EV charging points | VERIFIED | https://www.chaplinsworld.com/en/
- Alimentarium: former Nestlé head office on the lakefront, world's first food museum, open over 35 years | VERIFIED (indexed text, official page returned 403 to the fetcher; recheck in a browser before any further edit) | https://www.alimentarium.org/en/basic-page/opening-hours-entrance-fees
- Alimentarium hours: Oct-Mar 10:00-17:00, Apr-Sep 10:00-18:00, adults CHF 15 | VERIFIED (indexed text, same caveat) | same page
- The Fork sculpture planted in the lake for the Alimentarium's 10th anniversary | VERIFIED | https://www.montreuxriviera.com/ (Alimentarium listing)
- Lavaux Lutry-Saint-Saphorin: 11.1 km, 3 h 15, +369 m / -393 m, easy, Saint-Saphorin is the Vevey end | VERIFIED | https://www.montreuxriviera.com/en/V1433/lavaux-vineyard-terraces-lutry-st-saphorin
- La Route des Grands Crus de Lavaux: 3 km through the terraces | VERIFIED | https://www.lavaux-unesco.ch/
- Lavaux inscribed 2007, ten communes including Corseaux, Corsier-sur-Vevey, Chardonne, Jongny | VERIFIED | https://www.lavaux-unesco.ch/
- Fête des Vignerons, held in Vevey: 2019 edition ran 18 July to 11 August 2019; UNESCO Representative List since 1 December 2016; no next date published | VERIFIED | https://ich.unesco.org/en/RL/the-winegrowers-festival-in-vevey-01201
- CGN calls at Vevey, Belle Époque boat "Vevey" sails all year alongside Rhône, Savoie, Italie; La Suisse and Montreux mid-April to mid-October; Swiss Travel Pass valid on all cruises except events | VERIFIED | https://www.cgn.ch/en/faq
- Grand Hôtel du Lac: Emotions by Guy Ravet (Wed-Sun, dinner only), The Veranda "brasserie chic" (daily) | VERIFIED | https://www.ghdl.ch/
- Hôtel des Trois Couronnes: 34 rooms facing Lake Geneva | VERIFIED | https://www.hoteltroiscouronnes.ch/en/
- Astra Hôtel Vevey: Hôtel de la Gare (19th c.) to Pavillon des Voyageurs (1912) to Hôtel Pavillon; Ming family from 1950 with an 11-room house; renamed Astra Hôtel Vevey in 2005; brasserie La Coupole 1912; 1927 Fête des Vignerons frescoes; Michel Delanoë stained glass | VERIFIED | https://astra-hotel.ch/
- Hôtel Le Léman: Route de Blonay 20, 1800 Vevey | VERIFIED | https://www.hotel-leleman.ch/
- Modern Times Hotel: Chemin du Genevrier 20, 1806 Blonay-Saint-Légier, Tribute Portfolio (Marriott); address is not in Vevey, presented as "above Vevey" | VERIFIED | https://www.moderntimeshotel.ch/
- All 5 listed hotel URLs return HTTP 200 | VERIFIED | curl check, 16 September 2026

## UNVERIFIED / left out for lack of a source

- Residents of Vevey and citywide hotel beds: neither the commune nor Montreux-Vevey Tourisme published a figure on a page fetched in this session. No population or bed-count stat used.
- "Second largest market square in Europe after Lisbon": appears in indexed text attributed to the tourist office but was not present on the market page that actually loaded. Not printed.
- Vevey-La Tour folk markets: the event page returned HTTP 500. No dates or hours recorded, none printed.
- Chaplin's World adult ticket price: not published on the page fetched. Not printed (only the CHF 5/day parking figure, which is published).
- Images Vevey 2026 dates (5 to 27 September 2026, 10th edition): sourced only to a hotel page (astra-hotel.ch) quoting the festival, not the festival's own site (images.ch). Not printed in the guide.
- Hotel count: only five Vevey-area houses reached the verified bar in the dossier, one with a Blonay-Saint-Légier address. Candidate domains tried and dead: hoteldesnegociants.ch, negociants-vevey.ch, hoteldefamille.ch, veveyhotel.com. The tourist office's own accommodation listing is JavaScript-only and could not be read. The guide ships with 5 hotels rather than the usual 6-10, since no further hotel could be verified.
- Municipal parking tariffs for central Vevey: not fetched. No CHF figure printed beyond the Chaplin's World estate's own published rate.
