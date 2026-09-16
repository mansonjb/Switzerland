# Brief: rewrite ONE destination guide as advice in real prose (EN, FR, DE)

Project root: `/Users/jean-baptistemanson/Desktop/CLAUDE NEW SESSION/staysinswitzerland`.
You work on ONE file, `data/guides/<slug>.ts`, named in your task. Do it yourself: NEVER launch sub-agents.
The file may already be partly rewritten by an earlier attempt: keep what is done and good, finish the rest.

## Read first
1. `data/GUIDE-TEMPLATE.md`, section "Writing: advice in real sentences".
2. `data/guides/zermatt.ts`: the finished MODEL. Match its tone, length and structure (fields `story`,
   `sectors[].story`, `hotels[].blurb`, rewritten `snapshot`, `quickAnswer`, `doing` texts, `seasons.*.base`,
   `practical` texts, `faq` answers, `pass.note`).
3. Facts for your guide: `data/research/<slug>.md` and `data/SOURCES-<slug>.md` when they exist, plus
   `data/SOURCES-doing.md`. For wengen, grindelwald, lauterbrunnen, interlaken (no dossier) use `data/SOURCES.md`,
   `data/SOURCES-oberland.md`, `data/SOURCES-oberland-2.md`, `data/SOURCES-seasons.md`. `data/prices/<slug>.json`
   (if present) holds dated Booking prices: you may say which address is the least expensive of the selection,
   or that winter costs more than summer if the data shows it, but never write a price figure in prose. Call a hotel "the least expensive" only if it has BOTH the lowest
   `all.from` and the lowest `all.avg`; otherwise name the hotels that share the lowest prices.

## What to do
- Add `story: { title, paragraphs: [4 paragraphs of 60 to 90 words] }` right after `snapshot`
  (title "<Place>, before you book" / "<Place>, avant de réserver" / "<Place>, bevor Sie buchen").
  1) character of the place and how you arrive, 2) the geography that decides where to sleep,
  3) the range of hotels and what the dated prices show, 4) when to go and how long it takes to get there.
- `snapshot.why` must ANSWER why go: start "Because ..." / "Parce que ..." / "Weil ..." and say what it changes
  for the traveller. Listing two funiculars and their altitudes is NOT an answer.
  `snapshot.where`: one base per traveller profile ("First stay: ... Looking for quiet: ...").
  `snapshot.watch`: a concrete warning plus what to do about it.
- `quickAnswer`: advice in 2 or 3 sentences.
- Every sector gets `story` (one paragraph: what it is like, who it suits, the trade-off). Keep `text`, `points`.
- EVERY hotel gets `blurb` (2 or 3 sentences: what it is, where, who it suits). Keep `facts`, `slug`, `name`,
  `url`, `photo`, `sector` unchanged.
- Rewrite `doing.intro` and each doing item `text` as flowing sentences (keep `name`, `meta`, `kind`).
  Rewrite `seasons.winter.base` / `seasons.summer.base` as advice, `practical.items[].text` as sentences,
  every `faq[].a` as a full 2 or 3 sentence answer with the practical consequence, `pass.note` if clumsy,
  `meta.description` if it reads like a list.
- NO SKIPPING: you MUST rewrite ALL faq answers, ALL practical texts, ALL doing item texts and both seasons bases,
  whatever their current state. Earlier agents wrongly judged terse lines "already in Zermatt style". Test: an FAQ
  answer must be 2 or 3 sentences AND end with what it means for the traveller (budget this, book that, choose
  this base); a practical text must advise, not just state a capacity or a timetable.
- Work with Edit on the existing file (or one Write of the whole file). Keep every other field as it is.

## Hard rules
- NO INVENTED FACTS. Every number, date, altitude, duration, name, season and claim must already be in the guide
  or its sources/dossier. No distances, years, history or superlatives from memory. Never change an existing
  number. Items marked UNVERIFIED must not be used. If a sentence needs a fact you do not have, drop the fact.
- No rhetorical absolutes beyond the sources ("has never closed its roads" when the source only says the town is
  not car-free, "always", "the only", "most people do X", "the one base that", "one of the few resorts", "unlike most resorts"). Comparisons with other
  places are only allowed when the other places are named and the fact is in the sources. No transport mode that is not in the sources (no "tram" in a
  town that has buses).
- Geography and logic must hold: a place at a higher altitude than the village is UP from it; the old town,
  lake, station positions must match the dossier; advice must actually change something for the traveller.
- Editorial judgment that follows from the facts is welcome. Never an opinion on food, service or comfort,
  no ratings, no "best", no unverifiable superlatives.
- Remove hedges ("per the operator", "by its own count") from body copy unless the claim is a superlative or a
  self-description.
- EN, FR, DE each written natively. Swiss German spelling (ss, never ß). French keeps a normal space before : ; ? !
  Use the typographic apostrophe ’ in all three languages inside the single-quoted strings.
- NEVER an em dash (—) or en dash (–) anywhere in the file.
- Every L object has en, fr and de.
- Touch no other file. No dev server, no build, no git.

## Check, then report in 5 lines max
Run from the project root:
`node scripts/check-prose.mjs <slug>`
It must print OK (it flags missing story/blurbs, missing languages, dashes, ß, and numbers absent from the sources:
reword any flagged number that you introduced). Also `npx tsc --noEmit` must show no error in your file.
Report: done or not, facts dropped for lack of source, any error spotted in the existing data.
