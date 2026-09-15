import type { L } from '@/lib/i18n'
import type { Destination, RegionKey } from './types'

export const regionNames: Record<RegionKey, L> = {
  'bernese-oberland': { en: 'Bernese Oberland', fr: 'Oberland bernois', de: 'Berner Oberland' },
  valais: { en: 'Valais', fr: 'Valais', de: 'Wallis' },
  graubunden: { en: 'Graubünden', fr: 'Grisons', de: 'Graubünden' },
  central: { en: 'Central Switzerland', fr: 'Suisse centrale', de: 'Zentralschweiz' },
  eastern: { en: 'Eastern Switzerland', fr: 'Suisse orientale', de: 'Ostschweiz' },
  mittelland: { en: 'Bern region', fr: 'Région de Berne', de: 'Region Bern' },
  zurich: { en: 'Zurich region', fr: 'Région de Zurich', de: 'Region Zürich' },
  'lake-geneva': { en: 'Lake Geneva region', fr: 'Région lémanique', de: 'Genferseegebiet' },
  ticino: { en: 'Ticino', fr: 'Tessin', de: 'Tessin' },
}

/**
 * Stamp sheet, in display order. Altitudes and photo credits: see data/SOURCES.md.
 * Coordinates: village centre / main station.
 */
export const destinations: Destination[] = [
  { slug: 'zermatt', name: { en: 'Zermatt', fr: 'Zermatt', de: 'Zermatt' }, region: 'valais', altitude: 1608, photo: '/photos/zermatt.jpg', credit: { author: 'Jérémy Toma', license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/', source: 'https://commons.wikimedia.org/wiki/File:Zermatt_%28VS%29.jpg' }, lat: 46.0207, lng: 7.7491, carFree: true },
  { slug: 'wengen', name: { en: 'Wengen', fr: 'Wengen', de: 'Wengen' }, region: 'bernese-oberland', altitude: 1274, photo: '/photos/wengen.jpg', credit: { author: 'Parchaco', license: 'CC0 1.0', licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/', source: 'https://commons.wikimedia.org/wiki/File:Wengen_viewed_from_Isenfluh%2C_in_the_background%2C_the_Eiger%2C_M%C3%B6nch%2C_and_Jungfrau_peaks_rise.jpg' }, lat: 46.6053, lng: 7.9214, carFree: true },
  { slug: 'murren', name: { en: 'Mürren', fr: 'Mürren', de: 'Mürren' }, region: 'bernese-oberland', altitude: 1638, photo: '/photos/murren.jpg', credit: { author: 'Chensiyuan', license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/', source: 'https://commons.wikimedia.org/wiki/File:1_M%C3%BCrren_2022.jpg' }, lat: 46.5588, lng: 7.8928, carFree: true },
  { slug: 'grindelwald', name: { en: 'Grindelwald', fr: 'Grindelwald', de: 'Grindelwald' }, region: 'bernese-oberland', altitude: 1034, photo: '/photos/grindelwald.jpg', credit: { author: 'Cristo Vlahos', license: 'CC BY-SA 3.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/', source: 'https://commons.wikimedia.org/wiki/File:Grindelwald_View_02.jpg' }, lat: 46.6242, lng: 8.0414, carFree: false },
  { slug: 'lauterbrunnen', name: { en: 'Lauterbrunnen', fr: 'Lauterbrunnen', de: 'Lauterbrunnen' }, region: 'bernese-oberland', altitude: 796, photo: '/photos/lauterbrunnen.jpg', credit: { author: 'Yesuitus2001', license: 'CC BY-SA 2.5', licenseUrl: 'https://creativecommons.org/licenses/by-sa/2.5/', source: 'https://commons.wikimedia.org/wiki/File:Lauterbrunnen3.JPG' }, lat: 46.5935, lng: 7.9091, carFree: false },
  { slug: 'interlaken', name: { en: 'Interlaken', fr: 'Interlaken', de: 'Interlaken' }, region: 'bernese-oberland', altitude: 567, photo: '/photos/interlaken.jpg', credit: { author: 'Tinelot Wittermans', license: 'CC BY-SA 3.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/', source: 'https://commons.wikimedia.org/wiki/File:Interlaken%2C_Zwitserland.jpg' }, lat: 46.6863, lng: 7.8632, carFree: false },
  { slug: 'saas-fee', name: { en: 'Saas-Fee', fr: 'Saas-Fee', de: 'Saas-Fee' }, region: 'valais', altitude: 1800, photo: '/photos/saasfee.jpg', credit: { author: 'Jamcib', license: 'Public domain', licenseUrl: 'https://commons.wikimedia.org/wiki/Commons:Licensing', source: 'https://commons.wikimedia.org/wiki/File:Vue_sur_Saas-Fee.JPG' }, lat: 46.1081, lng: 7.9280, carFree: true },
  { slug: 'st-moritz', name: { en: 'St. Moritz', fr: 'Saint-Moritz', de: 'St. Moritz' }, region: 'graubunden', altitude: 1822, photo: '/photos/stmoritz.jpg', credit: { author: 'ProjectManager', license: 'Public domain', licenseUrl: 'https://commons.wikimedia.org/wiki/Commons:Licensing', source: 'https://commons.wikimedia.org/wiki/File:St._Moritz_2007.jpg' }, lat: 46.4908, lng: 9.8355, carFree: false },
  { slug: 'gimmelwald', name: { en: 'Gimmelwald', fr: 'Gimmelwald', de: 'Gimmelwald' }, region: 'bernese-oberland', altitude: 1363, photo: '/photos/gimmelwald.jpg', credit: { author: 'Hansueli Krapf', license: 'CC BY-SA 3.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/', source: 'https://commons.wikimedia.org/wiki/File:Gimmelwald-Gr%C3%BCtschalp_29.07.2009_14-13-24.JPG' }, lat: 46.5462, lng: 7.8914, carFree: true },
  { slug: 'appenzell', name: { en: 'Appenzell', fr: 'Appenzell', de: 'Appenzell' }, region: 'eastern', altitude: 777, photo: '/photos/appenzell.jpg', credit: { author: 'Adrian Michael', license: 'Public domain', licenseUrl: 'https://commons.wikimedia.org/wiki/Commons:Licensing', source: 'https://commons.wikimedia.org/wiki/File:Appenzell_2022.JPG' }, lat: 47.3313, lng: 9.4094, carFree: false },
  { slug: 'lucerne', name: { en: 'Lucerne', fr: 'Lucerne', de: 'Luzern' }, region: 'central', altitude: 435, photo: '/photos/lucerne.jpg', credit: { author: 'Samuel Ferrara', license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/', source: 'https://commons.wikimedia.org/wiki/File:Kapellbr%C3%BCcke_Dawn.jpg' }, lat: 47.0502, lng: 8.3093, carFree: false },
  { slug: 'bern', name: { en: 'Bern', fr: 'Berne', de: 'Bern' }, region: 'mittelland', altitude: 542, photo: '/photos/berne.jpg', credit: { author: 'H. Helmlechner', license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/', source: 'https://commons.wikimedia.org/wiki/File:Bern_Panorama_07.jpg' }, lat: 46.948, lng: 7.4474, carFree: false },
  { slug: 'zurich', name: { en: 'Zurich', fr: 'Zurich', de: 'Zürich' }, region: 'zurich', altitude: 408, photo: '/photos/zurich.jpg', credit: { author: 'Chensiyuan', license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/', source: 'https://commons.wikimedia.org/wiki/File:1_zurich_panorama_grossmunster_limmat_river_2012.jpg' }, lat: 47.3769, lng: 8.5417, carFree: false },
  { slug: 'geneva', name: { en: 'Geneva', fr: 'Genève', de: 'Genf' }, region: 'lake-geneva', altitude: 375, photo: '/photos/geneve.jpg', credit: { author: 'Pmau', license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/', source: 'https://commons.wikimedia.org/wiki/File:Views_of_Geneva_2.jpg' }, lat: 46.2044, lng: 6.1432, carFree: false },
  { slug: 'lugano', name: { en: 'Lugano', fr: 'Lugano', de: 'Lugano' }, region: 'ticino', altitude: 273, photo: '/photos/lugano.jpg', credit: { author: 'Aconcagua', license: 'CC BY-SA 3.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/', source: 'https://commons.wikimedia.org/wiki/File:Lugano_from_Sighignola.jpg' }, lat: 46.0037, lng: 8.9511, carFree: false },
]
