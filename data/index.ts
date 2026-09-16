import { destinations, regionNames } from './destinations'
import { wengen } from './guides/wengen'
import { murren } from './guides/murren'
import { grindelwald } from './guides/grindelwald'
import { lauterbrunnen } from './guides/lauterbrunnen'
import { interlaken } from './guides/interlaken'
import { zermatt } from './guides/zermatt'
import { saasFee } from './guides/saas-fee'
import { verbier } from './guides/verbier'
import { lucerne } from './guides/lucerne'
import { zurich } from './guides/zurich'
import { bern } from './guides/bern'
import { davos } from './guides/davos'
import { stMoritz } from './guides/st-moritz'
import { pontresina } from './guides/pontresina'
import { gstaad } from './guides/gstaad'
import { adelboden } from './guides/adelboden'
import { kandersteg } from './guides/kandersteg'
import { locarno } from './guides/locarno'
import { ascona } from './guides/ascona'
import { lugano } from './guides/lugano'
import { lausanne } from './guides/lausanne'
import { montreux } from './guides/montreux'
import { vevey } from './guides/vevey'
import { geneva } from './guides/geneva'
import { basel } from './guides/basel'
import { stGallen } from './guides/st-gallen'
import { berneseOberland } from './regions/bernese-oberland'
import { valais } from './regions/valais'
import { graubunden } from './regions/graubunden'
import type { DestinationGuide, Region } from './types'

export { destinations, regionNames }

/**
 * Published pages. Anti scaled-content rule: ONE rich page per destination, a guide ships
 * only once its facts are sourced (data/SOURCES.md). Never generate pages combinatorially.
 */
const GUIDES: DestinationGuide[] = [wengen, murren, grindelwald, lauterbrunnen, interlaken, zermatt, saasFee, verbier, lucerne, zurich, bern, davos, stMoritz, pontresina, gstaad, adelboden, kandersteg, locarno, ascona, lugano, lausanne, montreux, vevey, geneva, basel, stGallen]
const REGIONS: Region[] = [berneseOberland, valais, graubunden]

export const publishedGuides = () => GUIDES
export const publishedRegions = () => REGIONS
export const hasGuide = (slug: string) => GUIDES.some((g) => g.slug === slug)
export const getGuide = (slug: string) => GUIDES.find((g) => g.slug === slug)
export const getRegion = (slug: string) => REGIONS.find((r) => r.slug === slug)
export const getDestination = (slug: string) => destinations.find((d) => d.slug === slug)
