import type { MetadataRoute } from 'next'
import { LOCALES, localePath } from '@/lib/i18n'
import { SITE_URL } from '@/lib/site'
import { publishedGuides, publishedRegions } from '@/data'

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: { path: string; lastModified?: string; priority: number }[] = [
    { path: '/', priority: 1 },
    ...publishedRegions().map((r) => ({ path: `/regions/${r.slug}`, lastModified: r.updated, priority: 0.9 })),
    ...publishedGuides().map((g) => ({ path: `/${g.slug}`, lastModified: g.updated, priority: 0.9 })),
    { path: '/about', priority: 0.3 },
  ]
  return entries.flatMap((e) =>
    LOCALES.map((l) => ({
      url: `${SITE_URL}${localePath(l, e.path)}`,
      lastModified: e.lastModified,
      priority: e.priority,
      alternates: { languages: Object.fromEntries(LOCALES.map((x) => [x, `${SITE_URL}${localePath(x, e.path)}`])) },
    })),
  )
}
