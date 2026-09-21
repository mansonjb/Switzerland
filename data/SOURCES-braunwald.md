# Sources: Braunwald guide

Checked 16/09/2026. Official sources only: Switzerland Tourism (myswitzerland.com) and each hotel's own site.
braunwald.ch and glarnerland.ch returned HTTP 403 to every fetch and could not be used. Full dossier in
data/research/braunwald.md.

- Altitude 1256 m, canton Glarus, postal code 8784 Braunwald | VERIFIED | https://www.panoramahotel-braunwald.ch/ and https://www.hotel-cristal.ch/
- Car-free resort | VERIFIED | https://www.myswitzerland.com/en-us/destinations/braunwald/, confirmed by panoramahotel-braunwald.ch, maerchenhotel.ch and hotel-toediblick.ch
- Braunwaldbahn funicular from Linthal, 7 minutes | VERIFIED | https://www.myswitzerland.com/en-us/destinations/braunwald/ and https://www.panoramahotel-braunwald.ch/
- Linthal about an hour and a half (1.5 h) from Zurich by train | VERIFIED | https://www.myswitzerland.com/en-us/destinations/braunwald/
- Gondola to Grotzenbüel via the Hüttenberg mid-station | VERIFIED | https://www.hotel-cristal.ch/
- GlarnerlandPass: unlimited public transport across canton Glarus for the length of the stay, given to overnight guests | VERIFIED | https://www.myswitzerland.com/en-us/destinations/braunwald/ and https://www.panoramahotel-braunwald.ch/
- Horse-drawn carriages used within the resort | VERIFIED | https://www.myswitzerland.com/en-us/destinations/braunwald/
- Braunwald-Oberblegisee-Weg, into the Glärnisch massif, views of the Tödi (3613 m) and the Ortstock | VERIFIED | https://www.myswitzerland.com/en-us/destinations/braunwald/
- Four-peak via ferrata route, named summer route | VERIFIED | https://www.myswitzerland.com/en-us/destinations/braunwald/
- Bartli, dwarf-themed children's forest trail | VERIFIED | https://www.myswitzerland.com/en-us/destinations/braunwald/
- Alpinmuseum Braunwald, the resort's own alpine museum | VERIFIED | https://www.myswitzerland.com/en-us/destinations/braunwald/
- Sledging and winter sports named among Braunwald's activities | VERIFIED | https://www.myswitzerland.com/en-us/destinations/braunwald/
- Panoramahotel Braunwald: Dorfstrasse 3, 1256 m, 4-star, 32 rooms and 3 suites, sauna/steam bath/relaxation room, Summit Bar, official Swiss Esports House, free GlarnerlandPass | VERIFIED | https://www.panoramahotel-braunwald.ch/
- Märchenhotel Braunwald: Dorfstrasse 24, 4-star superior, Standard/Exklusiv/Paradies family suites, "Märliland" children's area, adults-only rooftop "Wellness on the top", heated outdoor pool, member of Swiss Family Hotels | VERIFIED | https://www.maerchenhotel.ch/
- Hotel Tödiblick: Schwändibergstrasse 19, 17 rooms, family-run over 100 years, third generation, larch-wood beds and Riposa mattresses made in the Glarus region, regional-sourcing restaurant | VERIFIED | https://www.hotel-toediblick.ch/
- Hotel Cristal: at the Hüttenberg mid-station of the Grotzenbüel gondola, 5 to 10 minutes' walk from the village centre, close to ski facilities and the Swiss Schneesport School, restaurant with seasonal menu and mountain-view terrace | VERIFIED | https://www.hotel-cristal.ch/
- All four hotel URLs re-checked in this session: curl -sL -o /dev/null -w '%{http_code}' returned 200 for panoramahotel-braunwald.ch, maerchenhotel.ch, hotel-toediblick.ch and hotel-cristal.ch; postal code 8784 Braunwald confirmed on each site's own contact/schema data.
- Hero photo: Braunwald, view toward the Hüttenberg cliffs in autumn | VERIFIED | https://commons.wikimedia.org/wiki/File:2005-Braunwald-Huettenberg.jpg

## UNVERIFIED (not used in the guide)
- braunwald.ch and glarnerland.ch: HTTP 403 in every fetch attempted; would likely hold the funicular's exact
  ascent in metres, track length, opening year and current timetable, plus a fuller hotel list. Not used.
- 1907 as the funicular's opening year: Wikipedia only, not an official page. Not used.
- Population and municipal area of Braunwald / Glarus Süd: not found on any page fetched. Not used.
- 2026/2027 seasonal opening and closing dates for the funicular and the Grotzenbüel gondola: not published
  on the pages fetched. Not used (no `calendar` block in the guide).
- Swiss Travel Pass coverage for the Braunwaldbahn: not published on any page fetched. Not used (no `pass`
  block in the guide).
- Only four hotels found with a working official site and a confirmed 8784 Braunwald address; the template's
  5-10 target was not reached, in line with the task's own "at least 4 hotels" minimum.
