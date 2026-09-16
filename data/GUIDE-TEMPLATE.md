# How to turn a dossier into a guide file

Input: `data/research/<slug>.md` (facts, each with a source).
Output: `data/guides/<slug>.ts` exporting `export const <camelSlug>: DestinationGuide = { ... }`.

Read `data/types.ts` for the exact type and `data/guides/wengen.ts` (mountain village),
`data/guides/murren.ts` (car-free village) or `data/guides/interlaken.ts` (town) as the model.
Never register the guide yourself: the maintainer adds it to `data/index.ts`.

## Non negotiable
1. Every figure in the file must exist in the dossier with a source. Nothing else gets written.
   If the dossier has a gap, drop that sentence, do not fill it from memory.
2. No ratings, no reviews, no superlatives you cannot source ("best", "most beautiful", "charming").
3. No em dash (the character "—"). Use a comma, a colon or a full stop.
4. Three languages in every `L` object: `en`, `fr`, `de`. Write each one natively, do not translate
   word for word. French: no anglicisms ("ailes de saison", not "épaules de saison"). German: Swiss
   usage, "Strasse" not "Straße".
5. Never invent a hotel, a price or a photo path. Hotels come from the dossier, with their real name.
   Prices are never written in the guide file: they live in `data/prices/<slug>.json`.
6. `updated` is today's date in `YYYY-MM-DD`.

## Fields, in order
- `slug`, `stamp: 'generic'` (unless a dedicated stamp exists), `updated`.
- `meta.title`: "Where to stay in X: <the two things that decide it>", under 60 characters where possible.
  `meta.description`: one sentence, what the page actually delivers, under 160 characters.
- `eyebrow`: "Region · nearest hub".
- `title`: "Where to stay in X".
- `intro`: 3 to 4 sentences with the numbers that frame the place (altitude, residents, beds, access).
- `quickAnswer`: 2 sentences. Who should sleep there, and who should sleep somewhere else instead.
  Name the alternative village.
- `snapshot.why` / `.where` / `.watch`: one short paragraph each. `watch` is the honest warning
  (closures, transfers, noise, a season with nothing open).
- `stats`: exactly 3, `value` short ("1274", "12 min", "0"), `label` explains and cites the holder of
  the figure when useful ("minutes by train from Lauterbrunnen").
- `hero`: `/photos/<slug>-hero.jpg` if a dedicated hero exists, otherwise the sheet photo
  `/photos/<slug>.jpg`, with `caption` and the `credit` object from the dossier.
- `sectors`: 3 areas. `title`, `walk` (where it sits), `text` (2 to 3 sentences), `points` (2 facts).
- `hotels`: 6 to 10, each `{ slug: '<dest-slug>-<hotel-slug>', name, url, sector, facts }`.
  `facts`: 2 or 3 lines from the hotel's own site. `photo` only if a file really exists in
  `public/photos/hotels/`, otherwise leave it out.
- `hotelsNote`: what the hotel list is and is not (used when no price file exists yet).
- `pass`: only if the dossier has official coverage rows and one published fare. Otherwise omit.
- `calendar`: only if the dossier has published opening months. `months` is 12 entries of
  'o' (open), 'r' (partly closed), 'x' (closed).
- `practical`: 4 short items, the things that trip people up (luggage, parking, last train, dogs).
- `seasons.summer` / `.winter`: `title`, `base` (where to sleep that season and why), 2 to 3 `facts`
  with `value` + `label`, and a `note`.
- `doing`: see `data/SOURCES-doing.md` for the rules. 3 or 4 groups of 2 items, kinds
  'walk' | 'ride' | 'local' | 'table'. Group titles must not repeat the kind label.
  Items: `name` (a plain string for a proper noun, an `L` object when the name is descriptive),
  `meta` (short repere: time, season, altitude), `text` (2 sentences, no route description).
  `note`: where the facts come from and the date they were checked.
- `faq`: 5 questions, real search questions, factual answers with the figure inside.
- `neighbours`: 3 or 4 slugs that exist in `data/destinations.ts`.

## Writing: advice in real sentences (since 16/09/2026, model: data/guides/zermatt.ts)

The facts stay sourced, but the page must read like a knowledgeable friend giving advice, not a fact sheet.
- Every card answers its own question. `snapshot.why` starts with the reason to go ("Because ...") and says
  what it changes for the traveller; listing two funiculars and their altitudes does not answer "why".
  `snapshot.where` gives one base per profile ("First stay: ... Looking for quiet: ..."). `snapshot.watch`
  is a concrete warning with what to do about it.
- `story`: 4 paragraphs of 60 to 90 words. 1) the character of the place and how you arrive, 2) the
  geography that decides where to sleep, 3) the range of hotels and what the dated prices show, 4) when
  to go and how long it takes to get there. No bullet points, no list of names.
- `sectors[].story`: one paragraph: what the area is like, who it suits, the trade-off in exchange.
- `hotels[].blurb`: 2 or 3 sentences: what the place is, where it stands, who it suits. Keep the
  `facts` array (source record) but the page shows the blurb.
- FAQ answers: a full answer in 2 or 3 sentences, with the practical consequence.
- Remove hedges from body copy ("per the operator", "by its own count") unless the claim is a
  superlative or a self-description; attribution belongs in the notes.
- Editorial judgment is welcome when it follows from the facts (a hotel 3 minutes from the funicular
  suits skiers). Never an opinion on food or service, never an unverifiable superlative.
- French and German are written natively, not translated sentence by sentence. No em dash.

## Sources
Append your source list to `data/SOURCES-<slug>.md`: one line per fact, "fact | VERIFIED | url",
then an UNVERIFIED section for everything you dropped.

## Check before you finish
- `npx tsc --noEmit` passes.
- No "—" anywhere in the file.
- Every `L` object has en, fr and de.
- Every hotel URL opens.
