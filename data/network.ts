import type { L, Locale } from '@/lib/i18n'

/** Sister sites of the network (backlinks). Only URLs checked as live (15/09/2026). */
type NetworkLink = { site: string; url: (l: Locale) => string; title: L; text: L }

const bshLocale = (l: Locale) => (l === 'fr' ? 'fr' : 'en') // BestSnowHotels has no German
const hwpLocale = (l: Locale) => l // HotelsWithPets has en, fr, de

const LINKS: Record<string, NetworkLink[]> = {
  wengen: [
    {
      site: 'BestSnowHotels',
      url: (l) => `https://www.bestsnowhotels.com/${bshLocale(l)}/destinations/wengen`,
      title: { en: 'Skiing in Wengen', fr: 'Skier à Wengen', de: 'Skifahren in Wengen' },
      text: { en: 'The ski hotels and the slopes of the Jungfrau ski region, season by season.', fr: 'Les hôtels au ski et les pistes de la région de la Jungfrau, saison par saison.', de: 'Skihotels und Pisten der Jungfrau-Skiregion, Saison für Saison.' },
    },
  ],
  murren: [
    {
      site: 'BestSnowHotels',
      url: (l) => `https://www.bestsnowhotels.com/${bshLocale(l)}/destinations/murren`,
      title: { en: 'Skiing in Mürren', fr: 'Skier à Mürren', de: 'Skifahren in Mürren' },
      text: { en: 'The ski hotels of the Mürren to Schilthorn area, season by season.', fr: 'Les hôtels au ski du domaine Mürren-Schilthorn, saison par saison.', de: 'Skihotels im Gebiet Mürren-Schilthorn, Saison für Saison.' },
    },
  ],
  grindelwald: [
    {
      site: 'HotelsWithPets',
      url: (l) => `https://www.hotelswithpets.com/${hwpLocale(l)}/destinations/grindelwald`,
      title: { en: 'Grindelwald with a dog', fr: 'Grindelwald avec un chien', de: 'Grindelwald mit Hund' },
      text: { en: 'Pet-friendly hotels and walks around Grindelwald.', fr: 'Hôtels acceptant les animaux et balades autour de Grindelwald.', de: 'Haustierfreundliche Hotels und Spaziergänge rund um Grindelwald.' },
    },
    {
      site: 'BestSnowHotels',
      url: (l) => `https://www.bestsnowhotels.com/${bshLocale(l)}/destinations/grindelwald`,
      title: { en: 'Skiing in Grindelwald', fr: 'Skier à Grindelwald', de: 'Skifahren in Grindelwald' },
      text: { en: 'Ski hotels and the slopes of the Grindelwald to Wengen area.', fr: 'Hôtels au ski et pistes du domaine Grindelwald-Wengen.', de: 'Skihotels und Pisten im Gebiet Grindelwald-Wengen.' },
    },
  ],
  interlaken: [
    {
      site: 'HotelsWithPets',
      url: (l) => `https://www.hotelswithpets.com/${hwpLocale(l)}/destinations/interlaken`,
      title: { en: 'Interlaken with a dog', fr: 'Interlaken avec un chien', de: 'Interlaken mit Hund' },
      text: { en: 'Pet-friendly hotels, walks and practical rules in Interlaken.', fr: 'Hôtels acceptant les animaux, balades et règles pratiques à Interlaken.', de: 'Haustierfreundliche Hotels, Spaziergänge und praktische Regeln in Interlaken.' },
    },
    {
      site: 'BestSnowHotels',
      url: (l) => `https://www.bestsnowhotels.com/${bshLocale(l)}/destinations/interlaken`,
      title: { en: 'Interlaken as a ski base', fr: 'Interlaken comme base de ski', de: 'Interlaken als Skibasis' },
      text: { en: 'What the valley hub offers skiers heading up to the Jungfrau region.', fr: 'Ce que le carrefour de la vallée offre aux skieurs qui montent dans la région de la Jungfrau.', de: 'Was der Talknoten Skifahrern auf dem Weg in die Jungfrauregion bietet.' },
    },
  ],
  zermatt: [
    {
      site: 'BestSnowHotels',
      url: (l) => `https://www.bestsnowhotels.com/${bshLocale(l)}/destinations/zermatt`,
      title: { en: 'Skiing in Zermatt', fr: 'Skier à Zermatt', de: 'Skifahren in Zermatt' },
      text: { en: 'Ski hotels under the Matterhorn, season by season.', fr: 'Les hôtels au ski sous le Cervin, saison par saison.', de: 'Skihotels unter dem Matterhorn, Saison für Saison.' },
    },
    {
      site: 'HotelsWithPets',
      url: (l) => `https://www.hotelswithpets.com/${hwpLocale(l)}/destinations/zermatt`,
      title: { en: 'Zermatt with a dog', fr: 'Zermatt avec un chien', de: 'Zermatt mit Hund' },
      text: { en: 'Pet-friendly hotels and the rules on the mountain railways.', fr: 'Hôtels acceptant les animaux et règles dans les trains de montagne.', de: 'Haustierfreundliche Hotels und Regeln in den Bergbahnen.' },
    },
  ],
  'saas-fee': [
    {
      site: 'BestSnowHotels',
      url: (l) => `https://www.bestsnowhotels.com/${bshLocale(l)}/destinations/saas-fee`,
      title: { en: 'Skiing in Saas-Fee', fr: 'Skier à Saas-Fee', de: 'Skifahren in Saas-Fee' },
      text: { en: 'Ski hotels in the car-free village under the glaciers.', fr: 'Les hôtels au ski du village sans voiture, sous les glaciers.', de: 'Skihotels im autofreien Dorf unter den Gletschern.' },
    },
    {
      site: 'HotelsWithPets',
      url: (l) => `https://www.hotelswithpets.com/${hwpLocale(l)}/destinations/saas-fee`,
      title: { en: 'Saas-Fee with a dog', fr: 'Saas-Fee avec un chien', de: 'Saas-Fee mit Hund' },
      text: { en: 'Pet-friendly hotels and walks in the Saas valley.', fr: 'Hôtels acceptant les animaux et balades dans la vallée de Saas.', de: 'Haustierfreundliche Hotels und Spaziergänge im Saastal.' },
    },
  ],
  verbier: [
    {
      site: 'BestSnowHotels',
      url: (l) => `https://www.bestsnowhotels.com/${bshLocale(l)}/destinations/verbier`,
      title: { en: 'Skiing in Verbier', fr: 'Skier à Verbier', de: 'Skifahren in Verbier' },
      text: { en: 'Ski hotels at the gate of the 4 Vallées.', fr: 'Les hôtels au ski à la porte des 4 Vallées.', de: 'Skihotels am Eingang zu den 4 Vallées.' },
    },
    {
      site: 'HotelsWithPets',
      url: (l) => `https://www.hotelswithpets.com/${hwpLocale(l)}/destinations/verbier`,
      title: { en: 'Verbier with a dog', fr: 'Verbier avec un chien', de: 'Verbier mit Hund' },
      text: { en: 'Pet-friendly hotels and summer walks above Le Châble.', fr: 'Hôtels acceptant les animaux et balades d’été au-dessus du Châble.', de: 'Haustierfreundliche Hotels und Sommerwege über Le Châble.' },
    },
  ],
  davos: [
    {
      site: 'BestSnowHotels',
      url: (l) => `https://www.bestsnowhotels.com/${bshLocale(l)}/destinations/davos`,
      title: { en: 'Skiing in Davos', fr: 'Skier à Davos', de: 'Skifahren in Davos' },
      text: { en: 'Ski hotels for Parsenn and Jakobshorn.', fr: 'Les hôtels au ski pour le Parsenn et le Jakobshorn.', de: 'Skihotels für Parsenn und Jakobshorn.' },
    },
    {
      site: 'HotelsWithPets',
      url: (l) => `https://www.hotelswithpets.com/${hwpLocale(l)}/destinations/davos`,
      title: { en: 'Davos with a dog', fr: 'Davos avec un chien', de: 'Davos mit Hund' },
      text: { en: 'Pet-friendly hotels and the lake path.', fr: 'Hôtels acceptant les animaux et le tour du lac.', de: 'Haustierfreundliche Hotels und der Seeweg.' },
    },
  ],
  'st-moritz': [
    {
      site: 'BestSnowHotels',
      url: (l) => `https://www.bestsnowhotels.com/${bshLocale(l)}/destinations/st-moritz`,
      title: { en: 'Skiing in St. Moritz', fr: 'Skier à Saint-Moritz', de: 'Skifahren in St. Moritz' },
      text: { en: 'Ski hotels for Corviglia and the Engadin slopes.', fr: 'Les hôtels au ski pour Corviglia et les pistes d’Engadine.', de: 'Skihotels für Corviglia und die Engadiner Pisten.' },
    },
    {
      site: 'HotelsWithPets',
      url: (l) => `https://www.hotelswithpets.com/${hwpLocale(l)}/destinations/st-moritz`,
      title: { en: 'St. Moritz with a dog', fr: 'Saint-Moritz avec un chien', de: 'St. Moritz mit Hund' },
      text: { en: 'Pet-friendly hotels by the lake.', fr: 'Hôtels acceptant les animaux au bord du lac.', de: 'Haustierfreundliche Hotels am See.' },
    },
  ],
  pontresina: [
    {
      site: 'BestSnowHotels',
      url: (l) => `https://www.bestsnowhotels.com/${bshLocale(l)}/destinations/pontresina`,
      title: { en: 'Skiing in Pontresina', fr: 'Skier à Pontresina', de: 'Skifahren in Pontresina' },
      text: { en: 'Ski hotels at the mouth of the Roseg valley.', fr: 'Les hôtels au ski à l’entrée du val Roseg.', de: 'Skihotels am Eingang zum Val Roseg.' },
    },
    {
      site: 'HotelsWithPets',
      url: (l) => `https://www.hotelswithpets.com/${hwpLocale(l)}/destinations/pontresina`,
      title: { en: 'Pontresina with a dog', fr: 'Pontresina avec un chien', de: 'Pontresina mit Hund' },
      text: { en: 'Pet-friendly hotels and valley walks in the Engadin.', fr: 'Hôtels acceptant les animaux et balades en Engadine.', de: 'Haustierfreundliche Hotels und Talwege im Engadin.' },
    },
  ],
  gstaad: [
    {
      site: 'BestSnowHotels',
      url: (l) => `https://www.bestsnowhotels.com/${bshLocale(l)}/destinations/gstaad`,
      title: { en: 'Skiing in Gstaad', fr: 'Skier à Gstaad', de: 'Skifahren in Gstaad' },
      text: { en: 'Ski hotels across the Gstaad valleys.', fr: 'Les hôtels au ski dans les vallées de Gstaad.', de: 'Skihotels in den Tälern um Gstaad.' },
    },
    {
      site: 'HotelsWithPets',
      url: (l) => `https://www.hotelswithpets.com/${hwpLocale(l)}/destinations/gstaad`,
      title: { en: 'Gstaad with a dog', fr: 'Gstaad avec un chien', de: 'Gstaad mit Hund' },
      text: { en: 'Pet-friendly hotels and the Promenade.', fr: 'Hôtels acceptant les animaux et la Promenade.', de: 'Haustierfreundliche Hotels und die Promenade.' },
    },
  ],
  adelboden: [
    {
      site: 'BestSnowHotels',
      url: (l) => `https://www.bestsnowhotels.com/${bshLocale(l)}/destinations/adelboden`,
      title: { en: 'Skiing in Adelboden', fr: 'Skier à Adelboden', de: 'Skifahren in Adelboden' },
      text: { en: 'Ski hotels for the Adelboden and Lenk slopes.', fr: 'Les hôtels au ski pour les pistes d’Adelboden et de la Lenk.', de: 'Skihotels für die Pisten von Adelboden und Lenk.' },
    },
    {
      site: 'HotelsWithPets',
      url: (l) => `https://www.hotelswithpets.com/${hwpLocale(l)}/destinations/adelboden`,
      title: { en: 'Adelboden with a dog', fr: 'Adelboden avec un chien', de: 'Adelboden mit Hund' },
      text: { en: 'Pet-friendly hotels and the Engstligen falls.', fr: 'Hôtels acceptant les animaux et les chutes de l’Engstligen.', de: 'Haustierfreundliche Hotels und die Engstligenfälle.' },
    },
  ],
  kandersteg: [
    {
      site: 'HotelsWithPets',
      url: (l) => `https://www.hotelswithpets.com/${hwpLocale(l)}/destinations/kandersteg`,
      title: { en: 'Kandersteg with a dog', fr: 'Kandersteg avec un chien', de: 'Kandersteg mit Hund' },
      text: { en: 'Pet-friendly hotels and the walk to the Oeschinensee.', fr: 'Hôtels acceptant les animaux et la montée à l’Oeschinensee.', de: 'Haustierfreundliche Hotels und der Weg zum Oeschinensee.' },
    },
  ],
  lucerne: [
    {
      site: 'HotelsWithPets',
      url: (l) => `https://www.hotelswithpets.com/${hwpLocale(l)}/destinations/lucerne`,
      title: { en: 'Lucerne with a dog', fr: 'Lucerne avec un chien', de: 'Luzern mit Hund' },
      text: { en: 'Pet-friendly hotels, the lake shore and the boats.', fr: 'Hôtels acceptant les animaux, les quais et les bateaux.', de: 'Haustierfreundliche Hotels, Seeufer und Schiffe.' },
    },
  ],
  zurich: [
    {
      site: 'HotelsWithPets',
      url: (l) => `https://www.hotelswithpets.com/${hwpLocale(l)}/destinations/zurich`,
      title: { en: 'Zurich with a dog', fr: 'Zurich avec un chien', de: 'Zürich mit Hund' },
      text: { en: 'Pet-friendly hotels and the lake baths.', fr: 'Hôtels acceptant les animaux et les bains du lac.', de: 'Haustierfreundliche Hotels und die Badis am See.' },
    },
  ],
  bern: [
    {
      site: 'HotelsWithPets',
      url: (l) => `https://www.hotelswithpets.com/${hwpLocale(l)}/destinations/bern`,
      title: { en: 'Bern with a dog', fr: 'Berne avec un chien', de: 'Bern mit Hund' },
      text: { en: 'Pet-friendly hotels and the Aare paths.', fr: 'Hôtels acceptant les animaux et les chemins de l’Aar.', de: 'Haustierfreundliche Hotels und die Aarewege.' },
    },
  ],
  'bernese-oberland': [
    {
      site: 'HotelsWithPets',
      url: (l) => `https://www.hotelswithpets.com/${hwpLocale(l)}/destinations/interlaken`,
      title: { en: 'Interlaken with a dog', fr: 'Interlaken avec un chien', de: 'Interlaken mit Hund' },
      text: { en: 'Pet-friendly hotels, walks and practical rules in Interlaken.', fr: 'Hôtels acceptant les animaux, balades et règles pratiques à Interlaken.', de: 'Haustierfreundliche Hotels, Spaziergänge und praktische Regeln in Interlaken.' },
    },
    {
      site: 'HotelsWithPets',
      url: (l) => `https://www.hotelswithpets.com/${hwpLocale(l)}/destinations/grindelwald`,
      title: { en: 'Grindelwald with a dog', fr: 'Grindelwald avec un chien', de: 'Grindelwald mit Hund' },
      text: { en: 'Pet-friendly hotels and walks around Grindelwald.', fr: 'Hôtels acceptant les animaux et balades autour de Grindelwald.', de: 'Haustierfreundliche Hotels und Spaziergänge rund um Grindelwald.' },
    },
    {
      site: 'BestSnowHotels',
      url: (l) => `https://www.bestsnowhotels.com/${bshLocale(l)}/destinations/wengen`,
      title: { en: 'Skiing in the Jungfrau region', fr: 'Skier dans la région de la Jungfrau', de: 'Skifahren in der Jungfrauregion' },
      text: { en: 'Ski hotels in Wengen and the slopes above Lauterbrunnen.', fr: 'Hôtels au ski à Wengen et pistes au-dessus de Lauterbrunnen.', de: 'Skihotels in Wengen und Pisten über Lauterbrunnen.' },
    },
  ],
}

export const networkLinks = (key: string) => LINKS[key] ?? []
