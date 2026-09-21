import Link from 'next/link'
import { LOCALES, localePath, t, type Locale } from '@/lib/i18n'
import { getDict } from '@/lib/dict'
import { regionNames, destinations, publishedGuides, publishedRegions } from '@/data'

export function Logo({ small = false }: { small?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <span className={`relative shrink-0 rounded-[6px] bg-swiss ${small ? 'h-[27px] w-[22px]' : 'h-8 w-[26px]'}`} aria-hidden>
        <span className={`cross-window absolute bg-white ${small ? 'left-1 top-[5px] size-3.5' : 'left-[5px] top-1.5 size-4'}`} />
      </span>
      <span className={`font-display font-bold uppercase leading-none tracking-[0.02em] text-ink ${small ? 'text-[17px]' : 'text-[21px]'}`}>
        Stays in Switzerland
      </span>
    </span>
  )
}

export function Header({ locale, path }: { locale: Locale; path: string }) {
  const d = getDict(locale)
  const links = [
    { href: localePath(locale, '/#destinations'), label: d.nav.destinations },
    { href: localePath(locale, '/regions'), label: d.nav.regions },
    { href: localePath(locale, '/#car-free'), label: d.nav.carFree },
    { href: localePath(locale, '/#swiss-travel-pass'), label: d.nav.pass },
    { href: localePath(locale, '/car-rental'), label: d.nav.carRental },
  ]
  return (
    <header className="border-b border-rule bg-paper">
      <div className="mx-auto flex h-[60px] max-w-[1280px] items-center justify-between gap-6 px-4 md:h-[76px] md:px-8">
        <Link href={localePath(locale)} aria-label="Stays in Switzerland" className="no-underline">
          <span className="md:hidden"><Logo small /></span>
          <span className="hidden md:inline"><Logo /></span>
        </Link>
        <div className="flex items-center gap-8">
          <nav className="hidden items-center gap-[26px] lg:flex">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="text-[15px] font-medium text-ink no-underline hover:text-lake">
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2.5 lg:border-l lg:border-rule lg:pl-8">
            {LOCALES.map((l) =>
              l === locale ? (
                <span key={l} className="rounded-full bg-lake-soft px-2.5 py-1 text-[13px] font-bold uppercase text-lake-dark md:text-sm">
                  {l}
                </span>
              ) : (
                <Link key={l} href={localePath(l, path)} hrefLang={l} className="rounded-full px-2.5 py-1 text-[13px] uppercase text-muted no-underline transition-colors hover:bg-mist hover:text-lake md:text-sm">
                  {l}
                </Link>
              ),
            )}
          </div>
          <details className="group relative lg:hidden">
            <summary className="flex w-[22px] cursor-pointer list-none flex-col gap-[5px] [&::-webkit-details-marker]:hidden" aria-label={d.nav.menu}>
              <span className="h-0.5 bg-ink" />
              <span className="h-0.5 bg-ink" />
              <span className="h-0.5 bg-ink" />
            </summary>
            <nav className="absolute right-0 top-10 z-20 flex w-60 flex-col border border-rule bg-paper p-2 shadow-[0_5px_12px_rgba(19,27,34,0.12)]">
              {links.map((l) => (
                <Link key={l.href} href={l.href} className="px-3 py-3 text-[15px] font-medium text-ink no-underline hover:text-lake">
                  {l.label}
                </Link>
              ))}
            </nav>
          </details>
        </div>
      </div>
    </header>
  )
}

export function Footer({ locale }: { locale: Locale }) {
  const d = getDict(locale)
  const regions = publishedRegions()
  const guides = publishedGuides()
  const col = 'flex flex-col gap-3'
  const head = 'font-display text-lg font-semibold uppercase tracking-[0.04em] text-white'
  const link = 'text-[15px] text-rule no-underline hover:text-white'
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-[1280px] px-4 pb-8 pt-10 md:px-8 md:pb-10 md:pt-16">
        <div className="grid grid-cols-2 gap-7 md:grid-cols-4 md:gap-10">
          <div className={col}>
            <div className={head}>{d.footer.regions}</div>
            {regions.map((r) => (
              <Link key={r.slug} href={localePath(locale, `/regions/${r.slug}`)} className={link}>
                {t(regionNames[r.key], locale)}
              </Link>
            ))}
          </div>
          <div className={col}>
            <div className={head}>{d.footer.destinations}</div>
            {guides.map((g) => {
              const dest = destinations.find((x) => x.slug === g.slug)!
              return (
                <Link key={g.slug} href={localePath(locale, `/${g.slug}`)} className={link}>
                  {t(dest.name, locale)}
                </Link>
              )
            })}
          </div>
          <div className={col}>
            <div className={head}>{d.footer.guides}</div>
            <Link href={localePath(locale, '/#swiss-travel-pass')} className={link}>{d.nav.pass}</Link>
            <Link href={localePath(locale, '/#car-free')} className={link}>{d.nav.carFree}</Link>
          </div>
          <div className={col}>
            <div className={head}>{d.footer.about}</div>
            <Link href={localePath(locale, '/about')} className={link}>{d.methodology}</Link>
            <Link href={localePath(locale, '/about#affiliate')} className={link}>{d.footer.affiliation}</Link>
            <Link href={localePath(locale, '/legal')} className={link}>{d.footer.legal}</Link>
          </div>
        </div>
        <div className="mb-6 mt-10 h-px bg-white/20" />
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:gap-10">
          <p className="m-0 max-w-[620px] text-[13px] leading-relaxed text-white md:text-sm">{d.footer.independent}</p>
          <div className="flex flex-wrap gap-4 md:gap-6">
            <Link href={localePath(locale, '/legal')} className="text-[13px] text-faint no-underline hover:text-white md:text-sm">{d.footer.legal}</Link>
            <Link href={localePath(locale, '/legal#privacy')} className="text-[13px] text-faint no-underline hover:text-white md:text-sm">{d.footer.privacy}</Link>
            <Link href={localePath(locale, '/about#affiliate')} className="text-[13px] text-faint no-underline hover:text-white md:text-sm">{d.footer.affiliation}</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
