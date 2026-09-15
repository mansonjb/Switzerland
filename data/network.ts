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
