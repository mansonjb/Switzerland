import { destinations, regionNames } from './destinations'
import { wengen } from './guides/wengen'
import { murren } from './guides/murren'
import { grindelwald } from './guides/grindelwald'
import { lauterbrunnen } from './guides/lauterbrunnen'
import { interlaken } from './guides/interlaken'
import { berneseOberland } from './regions/bernese-oberland'
import type { DestinationGuide, Region } from './types'

export { destinations, regionNames }

/**
 * Published pages. Anti scaled-content rule: ONE rich page per destination, a guide ships
 * only once its facts are sourced (data/SOURCES.md). Never generate pages combinatorially.
 */
const GUIDES: DestinationGuide[] = [wengen, murren, grindelwald, lauterbrunnen, interlaken]
const REGIONS: Region[] = [berneseOberland]

export const publishedGuides = () => GUIDES
export const publishedRegions = () => REGIONS
export const hasGuide = (slug: string) => GUIDES.some((g) => g.slug === slug)
export const getGuide = (slug: string) => GUIDES.find((g) => g.slug === slug)
export const getRegion = (slug: string) => REGIONS.find((r) => r.slug === slug)
export const getDestination = (slug: string) => destinations.find((d) => d.slug === slug)
