import type { Season } from './types'
import wengen from './prices/wengen.json'
import murren from './prices/murren.json'
import grindelwald from './prices/grindelwald.json'
import lauterbrunnen from './prices/lauterbrunnen.json'
import interlaken from './prices/interlaken.json'
import zermatt from './prices/zermatt.json'
import saasFee from './prices/saas-fee.json'
import verbier from './prices/verbier.json'
import lucerne from './prices/lucerne.json'
import zurich from './prices/zurich.json'
import bern from './prices/bern.json'
import lausanne from './prices/lausanne.json'
import montreux from './prices/montreux.json'
import andermatt from './prices/andermatt.json'
import ascona from './prices/ascona.json'
import engelberg from './prices/engelberg.json'
import locarno from './prices/locarno.json'
import vevey from './prices/vevey.json'
import weggis from './prices/weggis.json'
import lugano from './prices/lugano.json'
import geneva from './prices/geneva.json'
import basel from './prices/basel.json'
import stGallen from './prices/st-gallen.json'
import stMoritz from './prices/st-moritz.json'
import davos from './prices/davos.json'
import gstaad from './prices/gstaad.json'
import cransMontana from './prices/crans-montana.json'
import laax from './prices/laax.json'
import arosa from './prices/arosa.json'
import klosters from './prices/klosters.json'
import lenzerheide from './prices/lenzerheide.json'
import adelboden from './prices/adelboden.json'
import grachen from './prices/grachen.json'
import leukerbad from './prices/leukerbad.json'
import pontresina from './prices/pontresina.json'
import kandersteg from './prices/kandersteg.json'
import meiringen from './prices/meiringen.json'
import scuol from './prices/scuol.json'
import brienz from './prices/brienz.json'
import flims from './prices/flims.json'
import thun from './prices/thun.json'
import appenzell from './prices/appenzell.json'
import wildhaus from './prices/wildhaus.json'
import sion from './prices/sion.json'
import champery from './prices/champery.json'
import spiez from './prices/spiez.json'
import bettmeralp from './prices/bettmeralp.json'
import riederalp from './prices/riederalp.json'
import zinal from './prices/zinal.json'
import gruyeres from './prices/gruyeres.json'
import fribourg from './prices/fribourg.json'
import neuchatel from './prices/neuchatel.json'
import schaffhausen from './prices/schaffhausen.json'
import steinAmRhein from './prices/stein-am-rhein.json'

/** Real nightly prices scraped from Booking.com on dated samples (2 adults, 1 room, 1 night).
 *  Regenerate with scripts/scrape-booking-prices.mjs, never edit numbers by hand. */
export type PriceStat = { from: number; avg: number; samples: number } | null
export type HotelPrice = { slug: string; tier: 'budget' | 'mid' | 'premium'; stars: number | null; all: PriceStat } & Record<Season, PriceStat>
export type PriceFile = { scrapedOn: string; source: string; winterDates: string[]; summerDates: string[]; hotels: HotelPrice[] }

const FILES: Record<string, PriceFile> = {
  wengen: wengen as unknown as PriceFile,
  murren: murren as unknown as PriceFile,
  grindelwald: grindelwald as unknown as PriceFile,
  lauterbrunnen: lauterbrunnen as unknown as PriceFile,
  interlaken: interlaken as unknown as PriceFile,
  zermatt: zermatt as unknown as PriceFile,
  'saas-fee': saasFee as unknown as PriceFile,
  verbier: verbier as unknown as PriceFile,
  lucerne: lucerne as unknown as PriceFile,
  zurich: zurich as unknown as PriceFile,
  bern: bern as unknown as PriceFile,
  lausanne: lausanne as unknown as PriceFile,
  montreux: montreux as unknown as PriceFile,
  andermatt: andermatt as unknown as PriceFile,
  ascona: ascona as unknown as PriceFile,
  engelberg: engelberg as unknown as PriceFile,
  locarno: locarno as unknown as PriceFile,
  vevey: vevey as unknown as PriceFile,
  weggis: weggis as unknown as PriceFile,
  lugano: lugano as unknown as PriceFile,
  geneva: geneva as unknown as PriceFile,
  basel: basel as unknown as PriceFile,
  'st-gallen': stGallen as unknown as PriceFile,
  'st-moritz': stMoritz as unknown as PriceFile,
  davos: davos as unknown as PriceFile,
  gstaad: gstaad as unknown as PriceFile,
  'crans-montana': cransMontana as unknown as PriceFile,
  laax: laax as unknown as PriceFile,
  arosa: arosa as unknown as PriceFile,
  klosters: klosters as unknown as PriceFile,
  lenzerheide: lenzerheide as unknown as PriceFile,
  adelboden: adelboden as unknown as PriceFile,
  grachen: grachen as unknown as PriceFile,
  leukerbad: leukerbad as unknown as PriceFile,
  pontresina: pontresina as unknown as PriceFile,
  kandersteg: kandersteg as unknown as PriceFile,
  meiringen: meiringen as unknown as PriceFile,
  scuol: scuol as unknown as PriceFile,
  brienz: brienz as unknown as PriceFile,
  flims: flims as unknown as PriceFile,
  thun: thun as unknown as PriceFile,
  appenzell: appenzell as unknown as PriceFile,
  wildhaus: wildhaus as unknown as PriceFile,
  sion: sion as unknown as PriceFile,
  champery: champery as unknown as PriceFile,
  spiez: spiez as unknown as PriceFile,
  bettmeralp: bettmeralp as unknown as PriceFile,
  riederalp: riederalp as unknown as PriceFile,
  zinal: zinal as unknown as PriceFile,
  gruyeres: gruyeres as unknown as PriceFile,
  fribourg: fribourg as unknown as PriceFile,
  neuchatel: neuchatel as unknown as PriceFile,
  schaffhausen: schaffhausen as unknown as PriceFile,
  'stein-am-rhein': steinAmRhein as unknown as PriceFile,
}

export const getPriceFile = (destination: string): PriceFile | undefined => FILES[destination]
export const getHotelPrice = (destination: string, hotel: string) => FILES[destination]?.hotels.find((h) => h.slug === hotel)
