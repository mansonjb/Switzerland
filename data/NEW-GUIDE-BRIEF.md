# Brief: write ONE new destination guide from its dossier (EN, FR, DE)

Project root: `/Users/jean-baptistemanson/Desktop/CLAUDE NEW SESSION/staysinswitzerland`.
You write ONE file, `data/guides/<slug>.ts`, for the slug named in your task. Do it yourself: NEVER launch sub-agents.

## Read first, in this order
1. `data/GUIDE-TEMPLATE.md` in full, including the section "Writing: advice in real sentences".
2. `data/guides/zermatt.ts`: the finished model for a mountain village. For a town, also look at
   `data/guides/thun.ts`. Match their structure, tone and length.
3. `data/types.ts` for the exact type.
4. Your facts: `data/research/<slug>.md`, plus `data/SOURCES-doing.md` for the rules on the `doing` block.
   Nothing outside those files may become a fact on the page.

## What to produce
`export const <camelSlug>: DestinationGuide = { ... }` with every field the template lists, in that order,
including the prose layer: `story` (4 paragraphs of 60 to 90 words, right after `snapshot`),
`sectors[].story` (one paragraph each), `hotels[].blurb` (2 or 3 sentences each), FAQ answers of
2 or 3 sentences ending on the practical consequence, `practical` items that advise rather than state,
`doing` item texts in flowing sentences, `seasons.*.base` as advice.

Hotels: take every hotel the dossier lists with its own website, 5 to 10 of them, slug `<dest>-<hotel>`.
Never write a `photo:` line: the maintainer adds photos after a scrape. Never write a price anywhere.

## Hard rules
- NO INVENTED FACTS. Every number, date, altitude, duration, name, season and claim must be in the dossier.
  Items marked UNVERIFIED are unusable. If a sentence needs a fact you do not have, drop the fact.
- No rhetorical absolutes beyond the sources ("the only village", "one of the few resorts", "most visitors",
  "always"). A comparison with another place is allowed only when that place is named and the fact is sourced.
- Geography and logic must hold: higher altitude means up, the station and the lake sit where the dossier says.
- No opinion on food, service or comfort, no ratings, no "best".
- EN, FR and DE each written natively. Swiss German spelling (ss, never ß). French keeps a normal space
  before : ; ? ! Use the typographic apostrophe ’ inside the single-quoted strings.
- NEVER an em dash (—) or en dash (–) anywhere in the file.
- Every L object has en, fr and de. `updated` is today's date.
- Touch no other file except `data/SOURCES-<slug>.md` (append your source list, one line per fact,
  "fact | VERIFIED | url", then an UNVERIFIED section). Never edit `data/index.ts`: the maintainer registers
  the guide. No dev server, no build, no git.

## Check, then report in 5 lines max
From the project root:
- `npx tsc --noEmit` must show no error in your file.
- `node scripts/check-prose.mjs <slug>` must print OK (it flags a missing story, missing blurbs, a missing
  language, dashes, ß, straight apostrophes, generalizations and numbers that appear in no source: reword
  any number it flags that you introduced).
Report: done or not, the facts you dropped for lack of a source, anything wrong you spotted in the dossier.
