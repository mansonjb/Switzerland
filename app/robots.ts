import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'

/** Commercial crawlers with no SEO or GEO value (backlink tools, data scrapers). Same list as the sister sites. */
const COST_HOSTILE_BOTS = [
  'AhrefsBot', 'SemrushBot', 'MJ12bot', 'DotBot', 'BLEXBot', 'DataForSeoBot', 'Barkrowler', 'SeekportBot',
  'serpstatbot', 'ZoominfoBot', 'MegaIndex.ru', 'SiteAuditBot', 'Bytespider', 'PetalBot', 'ImagesiftBot',
  'magpie-crawler', 'YisouSpider', 'VelenPublicWebCrawler', 'Timpibot', 'Diffbot', 'omgili', 'omgilibot',
  'TurnitinBot', 'SEOkicks', 'linkdexbot', 'spbot', 'trendictionbot', 'AwarioBot',
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: ['Googlebot', 'Bingbot'], allow: '/', disallow: '/*opengraph-image' },
      // AI search crawlers are welcome: we want to be cited.
      { userAgent: ['GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'PerplexityBot', 'ClaudeBot', 'Claude-SearchBot', 'Google-Extended', 'Applebot-Extended'], allow: '/' },
      { userAgent: COST_HOSTILE_BOTS, disallow: '/' },
      { userAgent: '*', allow: '/' },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
