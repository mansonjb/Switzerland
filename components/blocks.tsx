import Image from 'next/image'
import type { ReactNode } from 'react'
import { t, type L, type Locale } from '@/lib/i18n'
import { getDict } from '@/lib/dict'
import { HotelButton } from './booking'
import type { DestinationGuide, MonthState, PhotoCredit } from '@/data/types'
import { networkLinks } from '@/data/network'

export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-[1280px] px-4 md:px-8 ${className}`}>{children}</div>
}

export function Section({ id, title, children, gap = 'mb-6 md:mb-10', aside }: { id?: string; title: string; children: ReactNode; gap?: string; aside?: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-12 pt-10 md:pt-[104px]">
      <Container>
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
          <h2 className="m-0 font-display text-[28px] font-semibold uppercase leading-[1.05] tracking-[0.01em] text-ink md:text-[40px]">{title}</h2>
          {aside}
        </div>
        <div className={`mt-4 h-px bg-rule md:mt-6 ${gap}`} />
        {children}
      </Container>
    </section>
  )
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <div className="text-[13px] font-medium uppercase tracking-[0.08em] text-muted md:text-sm">{children}</div>
}

export function QuickAnswer({ locale, children }: { locale: Locale; children: ReactNode }) {
  return (
    <div className="border-l-4 border-swiss bg-mist px-[18px] py-4 md:px-7 md:py-6">
      <div className="mb-1.5 font-display text-[13px] font-semibold uppercase tracking-[0.08em] text-muted md:mb-2 md:text-[15px]">{getDict(locale).quickAnswer}</div>
      <p className="m-0 text-lg leading-normal text-ink md:text-xl">{children}</p>
    </div>
  )
}

export function Stats({ items, locale, big = false }: { items: { value: string; label: L }[]; locale: Locale; big?: boolean }) {
  return (
    <div className="flex flex-wrap gap-6 border-t border-rule pt-4 md:gap-10 md:pt-5">
      {items.map((s, i) => (
        <div key={i}>
          <div className={`font-display font-bold leading-none tabular-nums text-ink ${big ? 'text-[48px]' : 'text-[32px] md:text-[40px]'}`}>{s.value}</div>
          <div className="mt-1 text-[13px] text-muted md:text-sm">{t(s.label, locale)}</div>
        </div>
      ))}
    </div>
  )
}

export function SquareBullet({ children, red = false }: { children: ReactNode; red?: boolean }) {
  return (
    <li className="flex items-start gap-2.5">
      <span className={`mt-[7px] shrink-0 ${red ? 'size-[7px] bg-swiss' : 'size-1.5 bg-ink'}`} aria-hidden />
      <span className="text-[15px] leading-normal text-ink">{children}</span>
    </li>
  )
}

export function Credit({ credit, caption }: { credit?: PhotoCredit; caption?: string }) {
  return (
    <p className="mt-3 text-[13px] leading-normal text-muted md:text-sm">
      {caption}
      {credit && (
        <>
          {caption ? ' ' : ''}
          Photo:{' '}
          <a href={credit.source} className="text-muted underline" rel="nofollow noopener" target="_blank">
            {credit.author}
          </a>
          ,{' '}
          <a href={credit.licenseUrl} className="text-muted underline" rel="nofollow noopener" target="_blank">
            {credit.license}
          </a>
        </>
      )}
    </p>
  )
}

export function HotelCard({ hotel, place, locale }: { hotel: DestinationGuide['hotels'][number]; place: string; locale: Locale }) {
  const d = getDict(locale)
  return (
    <article className="group flex flex-col border border-rule bg-white transition-colors hover:border-ink">
      <div className="hatch relative aspect-[3/2] overflow-hidden">
        {hotel.photo && <Image src={hotel.photo} alt={hotel.name} fill sizes="(min-width:1024px) 300px, (min-width:640px) 50vw, 100vw" className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]" />}
        <div className="absolute left-0 top-0 bg-white px-2.5 py-1.5 font-display text-xs font-semibold uppercase tracking-[0.08em] text-ink">{t(hotel.sector, locale)}</div>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-4 md:p-5">
        <h3 className="m-0 font-display text-2xl font-bold uppercase leading-none tracking-[0.01em] text-ink">{hotel.name}</h3>
        <ul className="m-0 flex list-none flex-col gap-2 p-0">
          {hotel.facts.map((f, i) => (
            <SquareBullet key={i}>{t(f, locale)}</SquareBullet>
          ))}
        </ul>
        <div className="mt-auto pt-2">
          <HotelButton hotel={hotel.name} place={place} label={d.sell.checkPrices} />
        </div>
      </div>
    </article>
  )
}

export function PassTable({ pass, locale }: { pass: NonNullable<DestinationGuide['pass']>; locale: Locale }) {
  const d = getDict(locale)
  const head = 'font-display text-sm font-semibold uppercase tracking-[0.06em] text-ink md:text-[17px]'
  return (
    <div className="tabular-nums">
      <div className="grid grid-cols-[1fr_110px] gap-2 border-b border-ink pb-2.5 md:grid-cols-[1fr_300px] md:gap-0 md:pb-0">
        <div className={`${head} md:px-4 md:py-3`}>{d.pass.section}</div>
        <div className={`${head} text-right md:px-4 md:py-3`}>{d.pass.coverage}</div>
      </div>
      {pass.rows.map((r, i) => (
        <div key={i} className={`grid grid-cols-[1fr_110px] items-baseline gap-2 border-b border-rule py-3 md:grid-cols-[1fr_300px] md:gap-0 md:py-0 ${i % 2 ? 'bg-mist' : ''}`}>
          <div className="text-sm leading-snug text-ink md:px-4 md:py-3.5 md:text-base">{t(r.section, locale)}</div>
          <div className={`text-right font-display text-xl font-bold uppercase md:px-4 md:py-3.5 md:text-2xl ${r.coverage === 'included' ? 'text-open' : 'text-ink'}`}>
            {r.coverage === 'included' ? d.pass.included : d.pass.discount25}
          </div>
        </div>
      ))}

      <div className="mt-8 grid grid-cols-[1fr_76px_76px] gap-2 border-b border-ink pb-2.5 md:mt-10 md:grid-cols-[1fr_220px_220px] md:gap-0 md:pb-0">
        <div className={`${head} md:px-4 md:py-3`}>{d.pass.fare}</div>
        <div className={`${head} text-right md:px-4 md:py-3`}>
          <span className="md:hidden">{d.pass.withoutShort}</span>
          <span className="hidden md:inline">{d.pass.without}</span>
        </div>
        <div className={`${head} text-right md:px-4 md:py-3`}>
          <span className="md:hidden">{d.pass.withShort}</span>
          <span className="hidden md:inline">{d.pass.with}</span>
        </div>
      </div>
      <div className="grid grid-cols-[1fr_76px_76px] items-baseline gap-2 border-b border-ink py-3.5 md:grid-cols-[1fr_220px_220px] md:gap-0 md:py-0">
        <div className="text-sm font-bold leading-snug text-ink md:px-4 md:py-[18px] md:text-base">{t(pass.fare.label, locale)}</div>
        <div className="text-right font-display text-[22px] font-bold text-ink md:px-4 md:py-[18px] md:text-[28px]">{pass.fare.without}</div>
        <div className="text-right font-display text-[22px] font-bold text-open md:px-4 md:py-[18px] md:text-[28px]">{pass.fare.with}</div>
      </div>
      <p className="mt-3 text-[13px] leading-normal text-muted md:mt-4 md:text-sm">{t(pass.note, locale)}</p>
    </div>
  )
}

function cellClass(s: MonthState) {
  if (s === 'o') return 'bg-open'
  if (s === 'r') return 'bg-caution'
  return 'closed-hatch'
}

export function OpeningCalendar({ calendar, locale }: { calendar: NonNullable<DestinationGuide['calendar']>; locale: Locale }) {
  const d = getDict(locale)
  const stateLabel = { o: d.open, r: d.reduced, x: d.closed }
  return (
    <div>
      {/* relative: keeps the absolutely positioned sr-only labels inside the scroll box */}
      <div className="relative overflow-x-auto">
        <table className="w-full min-w-[520px] border-collapse">
          <thead>
            <tr>
              <th className="w-[170px] md:w-[300px]" />
              {d.months.map((m, i) => (
                <th key={i} scope="col" className="pb-1.5 text-center font-display text-[13px] font-semibold tracking-[0.06em] text-muted md:text-[15px]">
                  {m}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {calendar.rows.map((row, i) => (
              <tr key={i} className="border-t border-rule">
                <th scope="row" className="py-1.5 pr-3 text-left text-sm font-normal text-ink md:py-2 md:pr-6 md:text-base">{t(row.name, locale)}</th>
                {row.months.map((s, m) => (
                  <td key={m} className="px-[1.5px] py-1.5 md:px-0.5 md:py-2">
                    <div className={`h-[22px] border border-rule md:h-[26px] ${cellClass(s)}`} title={stateLabel[s]}>
                      <span className="sr-only">{stateLabel[s]}</span>
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex flex-wrap gap-4 border-t border-rule pt-4 md:mt-6 md:gap-7">
        <Legend swatch="bg-open" label={d.open} />
        <Legend swatch="bg-caution" label={d.reduced} />
        <Legend swatch="closed-hatch border border-rule" label={d.closed} />
      </div>
      <p className="mt-3 text-[13px] leading-normal text-muted md:text-sm">{t(calendar.note, locale)}</p>
    </div>
  )
}

function Legend({ swatch, label }: { swatch: string; label: string }) {
  return (
    <div className="flex items-center gap-2">
      <div className={`size-3.5 md:size-[18px] ${swatch}`} />
      <div className="text-[13px] text-ink md:text-sm">{label}</div>
    </div>
  )
}

/** What to do: named walks, mountain rides, local things and tables. Never a trail guide. */
export function ThingsToDo({ doing, locale }: { doing: NonNullable<DestinationGuide['doing']>; locale: Locale }) {
  const d = getDict(locale)
  return (
    <div>
      <p className="mb-0 mt-0 max-w-none text-base leading-relaxed text-ink md:text-lg">{t(doing.intro, locale)}</p>
      <div className="mt-7 grid gap-x-8 gap-y-8 md:mt-10 md:grid-cols-2 md:gap-y-12">
        {doing.groups.map((g, i) => (
          <div key={i} className="min-w-0 border-t-2 border-ink pt-3.5 md:pt-5">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="bg-swiss px-2 py-1 font-display text-xs font-semibold uppercase tracking-[0.08em] text-white">{d.sell.doing.kinds[g.kind]}</span>
              <h3 className="m-0 font-display text-[22px] font-bold uppercase tracking-[0.01em] text-ink md:text-[26px]">{t(g.title, locale)}</h3>
            </div>
            <ul className="m-0 mt-4 flex list-none flex-col gap-4 p-0 md:gap-5">
              {g.items.map((it, k) => (
                <li key={k} className="flex gap-3 border-b border-rule pb-4 last:border-0 last:pb-0">
                  <span className="mt-[9px] size-[7px] shrink-0 bg-ink" aria-hidden />
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-baseline gap-x-3">
                      <span className="text-[17px] font-bold leading-snug text-ink">{typeof it.name === 'string' ? it.name : t(it.name, locale)}</span>
                      {it.meta && <span className="text-[13px] tabular-nums text-muted md:text-sm">{t(it.meta, locale)}</span>}
                    </div>
                    <p className="mb-0 mt-1.5 text-[15px] leading-relaxed text-ink">{t(it.text, locale)}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="mb-0 mt-6 border-t border-rule pt-4 text-[13px] leading-normal text-muted md:text-sm">{t(doing.note, locale)}</p>
    </div>
  )
}

export function Faq({ items, locale }: { items: { q: L; a: L }[]; locale: Locale }) {
  return (
    <div>
      {items.map((f, i) => (
        <div key={i} className="grid gap-2 border-b border-rule py-5 md:grid-cols-[420px_1fr] md:gap-10 md:py-6">
          <h3 className="m-0 text-[17px] font-bold leading-[1.4] text-ink md:text-lg">{t(f.q, locale)}</h3>
          <p className="m-0 text-base leading-relaxed text-ink md:text-[17px]">{t(f.a, locale)}</p>
        </div>
      ))}
    </div>
  )
}

export function Squares({ n }: { n: number }) {
  return (
    <span className="flex gap-[3px]" aria-label={`${n}/5`} role="img">
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={`size-[11px] border ${i < n ? 'border-ink bg-ink' : 'border-faint'}`} />
      ))}
    </span>
  )
}

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }} />
}

/** Hero with a full-bleed photo, dark wash and white type. */
export function PhotoHero({ photo, alt, children, credit, id = 'hero' }: { photo: string; alt: string; children: ReactNode; credit?: PhotoCredit; id?: string }) {
  return (
    <section id={id} className="relative overflow-hidden bg-ink">
      <Image src={photo} alt={alt} fill priority sizes="100vw" className="object-cover opacity-60" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(19,27,34,0.92)_0%,rgba(19,27,34,0.72)_55%,rgba(19,27,34,0.35)_100%)]" />
      <div className="relative">
        <Container className="pb-8 pt-10 md:pb-14 md:pt-16">{children}</Container>
      </div>
      {credit && (
        <div className="absolute bottom-1.5 right-3 text-[11px] text-white/60">
          Photo: <a href={credit.source} target="_blank" rel="nofollow noopener" className="text-white/60 underline">{credit.author}</a>, {credit.license}
        </div>
      )}
    </section>
  )
}

/** White booking panel sitting inside a hero. */
export function BookingPanel({ children }: { children: ReactNode }) {
  return <div className="mt-6 border-t-4 border-swiss bg-white p-4 shadow-[0_10px_30px_rgba(0,0,0,0.25)] md:mt-8 md:p-6">{children}</div>
}

/** Full-width ink band with one call to action. */
export function CtaBand({ title, text, children }: { title: string; text: string; children: ReactNode }) {
  return (
    <section className="mt-10 bg-ink md:mt-[104px]">
      <Container className="flex flex-col items-start justify-between gap-5 py-10 md:flex-row md:items-center md:gap-10 md:py-14">
        <div className="flex-1">
          <h2 className="m-0 font-display text-[28px] font-bold uppercase leading-[1.05] tracking-[0.01em] text-white md:text-[40px]">{title}</h2>
          <p className="mb-0 mt-3 text-base leading-relaxed text-white/80">{text}</p>
        </div>
        <div className="shrink-0">{children}</div>
      </Container>
    </section>
  )
}

export function NetworkLinks({ keyName, locale, title }: { keyName: string; locale: Locale; title: string }) {
  const links = networkLinks(keyName)
  if (!links.length) return null
  return (
    <Section title={title}>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {links.map((l, i) => (
          <a key={i} href={l.url(locale)} target="_blank" rel="noopener" className="group block border-t-2 border-ink pt-4 no-underline">
            <div className="text-[13px] font-medium uppercase tracking-[0.08em] text-muted">{l.site}</div>
            <div className="mt-1 font-display text-2xl font-bold uppercase leading-none text-ink group-hover:text-swiss">{t(l.title, locale)} <span aria-hidden>→</span></div>
            <p className="mb-0 mt-2 text-[15px] leading-relaxed text-ink">{t(l.text, locale)}</p>
          </a>
        ))}
      </div>
    </Section>
  )
}
