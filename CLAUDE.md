@AGENTS.md

# Stays in Switzerland

Independent affiliate guide "where to stay in Switzerland". Domain staysinswitzerland.com (via NEXT_PUBLIC_SITE_URL). Repo mansonjb/Switzerland. Stay22 (aid `eijeanbaptistemanson`, lmaID `6aa966fbda41f0b09452de67`). Design: `../STAYSINSWITZERLAND-DESIGN-BRIEF.md` (Swiss admin grammar + stamp system). Strategy: `../STAYSINSWITZERLAND-BRIEF.md`.

## Rules that override everything
1. **One rich page per destination** (`/[slug]`) plus a few region pages. ZERO combinatorial pages (months, durations, budgets, themes x places). Sister site perfectcitybreak.com was demoted by Google for scaled content in July 2026.
2. **No invented facts.** Every number (altitude, minutes, CHF, dates) has a source in `data/SOURCES.md`. No ratings or reviews, ever. Hotel prices ONLY from `data/prices/*.json` (real Booking.com scrape, dated, via `scripts/scrape-booking-prices.mjs`), shown as indicative "from" + average, split winter/summer. Hotels mix three tiers (budget, mid, premium) chosen from the scraped averages. If a fact cannot be verified, reword or drop it. The `doing` block (what to do) follows the same rule: named places only, times and seasons from operators or tourist offices, sources in `data/SOURCES-doing.md`, never a trail description and never an opinion on a restaurant.
3. A guide ships only when added to `GUIDES` in `data/index.ts`. Unpublished destinations stay on the sheet without a link.
4. **Never imitate admin.ch**: no Swiss coat of arms (shield), no "Confédération suisse" header. Footer keeps "Independent guide, not affiliated...".
5. No em dash in any copy. English, French, German written natively (no calques).
6. Photos: destinations from Wikimedia Commons (author + licence in `data/destinations.ts`, listed on /legal). Hotels from their Google Maps listing via Apify (`scripts/fetch-hotel-photos-apify.mjs`, never the Google Places API). Check every subject visually.
7. GA / Clarity stay empty until a consent banner exists.
8. One deploy per day max (global hooks ask before push/deploy).

## Tech
Next 16.3 App Router, Tailwind v4 tokens in `app/globals.css`, fonts Barlow Condensed + Noto Sans. Locales en (root, via `proxy.ts` rewrite), de, fr under `app/[lang]`. `L` strings in `lib/i18n.ts` (`de` optional, falls back to en). Static (SSG, dynamicParams false). Dev port 3093.

## Page structure (sales logic, mirrors hotelswithpets.com)
Destination: photo hero + verdict + booking bar (dates) → sticky in-page nav → LIVE MAP (right after hero) → snapshot cards → summer/winter switch → hotels by tier with dated prices + red CTA → areas → what to do (`doing`) → Swiss Travel Pass → CTA band → seasons → car-free → FAQ → sister sites → nearby. Sticky booking bar after the hero. Dates are shared by every Stay22 link and the map (`components/booking.tsx`). Keep this order for every new guide.
