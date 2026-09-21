import { SITE_URL, SITE_NAME } from '@/lib/site'
import { publishedGuides, publishedRegions, destinations } from '@/data'

/** Plain text map of the site for AI crawlers and answer engines (llmstxt.org convention). */
export const dynamic = 'force-static'

export function GET() {
  const guides = publishedGuides()
  const line = (slug: string, title: string) => `- [${title}](${SITE_URL}/${slug})`
  const body = `# ${SITE_NAME}

> Independent guide to where to stay in Switzerland: one page per destination, comparing the areas of
> each village or town, with travel times, Swiss Travel Pass coverage, seasonal closures, car-free
> access and a short hotel selection with dated Booking.com prices. English, French and German.

Facts come from the operators (SBB, mountain railways), the federal map service swisstopo and each
hotel's own site, with the date they were checked. No ratings, no reviews, no sponsored placements.
The site is funded by affiliate links. Method: ${SITE_URL}/about

## Destination guides (${guides.length})
${guides
  .map((g) => {
    const d = destinations.find((x) => x.slug === g.slug)
    return line(g.slug, `Where to stay in ${d ? d.name.en : g.slug}`)
  })
  .join('\n')}

## Regions
- [All regions compared](${SITE_URL}/regions)
${publishedRegions()
  .map((r) => `- [${r.name.en}](${SITE_URL}/regions/${r.slug})`)
  .join('\n')}

## Practical
- [Swiss Travel Pass: 2026 prices and what it covers](${SITE_URL}/swiss-travel-pass)
- [Car rental in Switzerland](${SITE_URL}/car-rental)
- [Methodology](${SITE_URL}/about)

Each guide is also published in French at ${SITE_URL}/fr/<slug> and in German at ${SITE_URL}/de/<slug>.
`
  return new Response(body, { headers: { 'content-type': 'text/plain; charset=utf-8' } })
}
