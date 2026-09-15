export const LOCALES = ['en', 'de', 'fr'] as const
export type Locale = (typeof LOCALES)[number]
export const DEFAULT_LOCALE: Locale = 'en'

export const hasLocale = (value: string): value is Locale =>
  (LOCALES as readonly string[]).includes(value)

/** Localized string. `de` stays optional during rollout, it falls back to `en`. */
export type L = { en: string; fr: string; de?: string }

export function t(value: L, locale: Locale): string {
  return value[locale] ?? value.en
}

/** Public path for a locale. English lives at the root, other locales are prefixed. */
export function localePath(locale: Locale, path = '/'): string {
  const clean = path === '/' ? '' : path.startsWith('/') ? path : `/${path}`
  if (locale === DEFAULT_LOCALE) return clean || '/'
  return `/${locale}${clean}`
}

/** hreflang map for Metadata.alternates.languages */
export function languageAlternates(path = '/'): Record<string, string> {
  const map: Record<string, string> = {}
  for (const l of LOCALES) map[l] = localePath(l, path)
  map['x-default'] = localePath(DEFAULT_LOCALE, path)
  return map
}
