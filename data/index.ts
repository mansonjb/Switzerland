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
import { engelberg } from './guides/engelberg'
import { andermatt } from './guides/andermatt'
import { weggis } from './guides/weggis'
import { cransMontana } from './guides/crans-montana'
import { leukerbad } from './guides/leukerbad'
import { grachen } from './guides/grachen'
import { laax } from './guides/laax'
import { flims } from './guides/flims'
import { scuol } from './guides/scuol'
import { brienz } from './guides/brienz'
import { meiringen } from './guides/meiringen'
import { thun } from './guides/thun'
import { arosa } from './guides/arosa'
import { klosters } from './guides/klosters'
import { lenzerheide } from './guides/lenzerheide'
import { appenzell } from './guides/appenzell'
import { schaffhausen } from './guides/schaffhausen'
import { steinAmRhein } from './guides/stein-am-rhein'
import { wildhaus } from './guides/wildhaus'
import { fribourg } from './guides/fribourg'
import { neuchatel } from './guides/neuchatel'
import { sion } from './guides/sion'
import { gruyeres } from './guides/gruyeres'
import { zinal } from './guides/zinal'
import { champery } from './guides/champery'
import { bettmeralp } from './guides/bettmeralp'
import { riederalp } from './guides/riederalp'
import { berneseOberland } from './regions/bernese-oberland'
import { valais } from './regions/valais'
import { graubunden } from './regions/graubunden'
import { central } from './regions/central'
import { ticino } from './regions/ticino'
import { eastern } from './regions/eastern'
import { mittelland } from './regions/mittelland'
import { lakeGeneva } from './regions/lake-geneva'
import type { DestinationGuide, Region } from './types'

export { destinations, regionNames }

/**
 * Published pages. Anti scaled-content rule: ONE rich page per destination, a guide ships
 * only once its facts are sourced (data/SOURCES.md). Never generate pages combinatorially.
 */
const GUIDES: DestinationGuide[] = [wengen, murren, grindelwald, lauterbrunnen, interlaken, zermatt, saasFee, verbier, lucerne, zurich, bern, davos, stMoritz, pontresina, gstaad, adelboden, kandersteg, locarno, ascona, lugano, lausanne, montreux, vevey, geneva, basel, stGallen, engelberg, andermatt, weggis, cransMontana, leukerbad, grachen, laax, flims, scuol, brienz, meiringen, thun, arosa, klosters, lenzerheide, appenzell, schaffhausen, steinAmRhein, wildhaus, fribourg, neuchatel, sion, gruyeres, zinal, champery, bettmeralp, riederalp]
const REGIONS: Region[] = [berneseOberland, valais, graubunden, central, lakeGeneva, ticino, eastern, mittelland]

/** A registered guide goes live only once enough of its hotels have a photo. Until then the
 *  destination card says "Coming soon" and no page is built. Hotels without a photo are not shown. */
export const MIN_HOTELS_WITH_PHOTO = 4
const LIVE = GUIDES.filter((g) => g.hotels.filter((h) => h.photo).length >= MIN_HOTELS_WITH_PHOTO)

export const publishedGuides = () => LIVE
export const comingSoonGuides = () => GUIDES.filter((g) => !LIVE.includes(g))
export const publishedRegions = () => REGIONS
export const hasGuide = (slug: string) => LIVE.some((g) => g.slug === slug)
export const getGuide = (slug: string) => LIVE.find((g) => g.slug === slug)
export const getRegion = (slug: string) => REGIONS.find((r) => r.slug === slug)
export const getDestination = (slug: string) => destinations.find((d) => d.slug === slug)
