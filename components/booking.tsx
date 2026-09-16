'use client'

import { useEffect, useRef, useState, useSyncExternalStore } from 'react'
import { allezHotelLink, allezPlaceLink, stay22MapSrc, type StayDates } from '@/lib/site'

/* ------------------------------------------------------------------ */
/* Shared stay dates: one value for the whole page (search bar, map,   */
/* hotel buttons, sticky bar), kept for the session.                   */
/* ------------------------------------------------------------------ */

const KEY = 'sis:dates'

const iso = (d: Date) => d.toISOString().slice(0, 10)
const addDays = (d: Date, n: number) => new Date(d.getTime() + n * 86400000)

/** Tiny session store read through useSyncExternalStore (no setState in effects, no hydration mismatch). */
function createStore<T>(init: () => T) {
  let value: T | undefined
  const listeners = new Set<() => void>()
  return {
    get: () => (value === undefined ? (value = init()) : value),
    set: (v: T) => {
      value = v
      listeners.forEach((l) => l())
    },
    subscribe: (l: () => void) => {
      listeners.add(l)
      return () => listeners.delete(l)
    },
  }
}

const datesStore = createStore<StayDates>(() => {
  const start = addDays(new Date(), 30)
  const fallback = { checkin: iso(start), checkout: iso(addDays(start, 3)) }
  try {
    const saved = JSON.parse(sessionStorage.getItem(KEY) || 'null')
    if (saved?.checkin && saved?.checkout && saved.checkin >= iso(new Date())) return saved
  } catch {}
  return fallback
})

export function useStayDates(): [StayDates | null, (d: StayDates) => void] {
  const dates = useSyncExternalStore(datesStore.subscribe, datesStore.get, () => null)
  const set = (d: StayDates) => {
    try {
      sessionStorage.setItem(KEY, JSON.stringify(d))
    } catch {}
    datesStore.set(d)
  }
  return [dates, set]
}

const barClosedStore = createStore<boolean>(() => {
  try {
    return sessionStorage.getItem('sis:bar-closed') === '1'
  } catch {
    return false
  }
})

const nights = (d: StayDates | null) => (d ? Math.max(0, Math.round((Date.parse(d.checkout) - Date.parse(d.checkin)) / 86400000)) : 0)

function formatRange(d: StayDates | null, lang: string) {
  if (!d) return ''
  const f = new Intl.DateTimeFormat(lang, { day: 'numeric', month: 'short' })
  return `${f.format(new Date(`${d.checkin}T12:00`))} → ${f.format(new Date(`${d.checkout}T12:00`))}`
}

export type BookingLabels = {
  where: string
  checkin: string
  checkout: string
  search: string
  nights: string
  trust: string
}

/** href: '#hotels' style anchor on the same page, or a page URL (dates travel with the session). */
type Place = { value: string; label: string; href: string }

/** Search bar: destination (optional select) + dates. It does not leave the site: it scrolls to the
 *  hotels (or opens the guide), and the dates then apply to every hotel button and the map. */
export function StayFinder({ places, labels, lang, tone = 'light' }: { places: Place[]; labels: BookingLabels; lang: string; tone?: 'light' | 'dark' }) {
  const [dates, setDates] = useStayDates()
  const [place, setPlace] = useState(places[0].value)
  const today = iso(new Date())
  const field = 'block w-full rounded-xl border border-rule bg-white px-3.5 py-3 text-[15px] text-ink outline-none transition-colors focus:border-lake focus:ring-2 focus:ring-lake/20'
  const lab = `mb-1 block font-display text-[13px] font-semibold uppercase tracking-[0.08em] ${tone === 'dark' ? 'text-white/80' : 'text-muted'}`
  const target = places.find((p) => p.value === place) ?? places[0]
  const sameAnchor = target.href.startsWith('#')

  return (
    <div>
      <div className={`grid gap-3 md:items-end ${places.length > 1 ? 'md:grid-cols-[1.3fr_1fr_1fr_auto]' : 'md:grid-cols-[1fr_1fr_auto]'}`}>
        {places.length > 1 && (
          <label className="block">
            <span className={lab}>{labels.where}</span>
            <select value={place} onChange={(e) => setPlace(e.target.value)} className={`${field} cursor-pointer appearance-none`}>
              {places.map((p) => (
                <option key={p.value} value={p.value}>{p.label}</option>
              ))}
            </select>
          </label>
        )}
        <div className="grid grid-cols-2 gap-3 md:contents">
          <label className="block">
            <span className={lab}>{labels.checkin}</span>
            <input
              type="date"
              min={today}
              value={dates?.checkin ?? ''}
              onChange={(e) => {
                const checkin = e.target.value
                if (!checkin) return
                const checkout = dates && dates.checkout > checkin ? dates.checkout : iso(addDays(new Date(`${checkin}T12:00`), 3))
                setDates({ checkin, checkout })
              }}
              className={field}
            />
          </label>
          <label className="block">
            <span className={lab}>{labels.checkout}</span>
            <input
              type="date"
              min={dates?.checkin ?? today}
              value={dates?.checkout ?? ''}
              onChange={(e) => e.target.value && dates && setDates({ checkin: dates.checkin, checkout: e.target.value })}
              className={field}
            />
          </label>
        </div>
        <a
          href={target.href}
          onClick={(e) => {
            if (!sameAnchor) return
            const el = document.getElementById(target.href.slice(1))
            if (!el) return
            e.preventDefault()
            el.scrollIntoView({ behavior: 'smooth', block: 'start' })
            history.replaceState(null, '', target.href)
          }}
          className="flex items-center justify-center gap-2 rounded-full bg-lake px-6 py-3.5 text-center text-[15px] font-bold text-white no-underline shadow-[0_6px_16px_rgba(14,95,110,0.25)] transition-colors hover:bg-lake-dark md:py-[13px]"
        >
          {labels.search}
          <span aria-hidden>{sameAnchor ? '↓' : '→'}</span>
        </a>
      </div>
      <p className={`mb-0 mt-3 text-[13px] ${tone === 'dark' ? 'text-white/80' : 'text-muted'}`}>
        {nights(dates) > 0 && (
          <span className="font-medium">
            {nights(dates)} {labels.nights} · {formatRange(dates, lang)} ·{' '}
          </span>
        )}
        {labels.trust}
      </p>
    </div>
  )
}

/** Button to one hotel, carrying the page dates. */
export function HotelButton({ hotel, place, label, primary = true }: { hotel: string; place: string; label: string; primary?: boolean }) {
  const [dates] = useStayDates()
  return (
    <a
      href={allezHotelLink(hotel, place, 'hotel-card', dates)}
      target="_blank"
      rel="sponsored nofollow noopener"
      className={
        primary
          ? 'mt-auto flex items-center justify-center gap-2 rounded-full bg-lake px-4 py-3 text-center text-[15px] font-bold text-white no-underline transition-colors hover:bg-lake-dark'
          : 'mt-auto block rounded-full border border-rule px-4 py-3 text-center text-[15px] font-medium text-ink no-underline transition-colors hover:border-lake hover:bg-lake hover:text-white'
      }
    >
      {label}
      {primary && <span aria-hidden>→</span>}
    </a>
  )
}

/** Button to every place to stay in a destination, carrying the page dates. */
export function PlaceButton({ place, placement, label, variant = 'red' }: { place: string; placement: string; label: string; variant?: 'red' | 'outline' | 'white' }) {
  const [dates] = useStayDates()
  const cls = {
    red: 'bg-lake text-white shadow-[0_6px_16px_rgba(14,95,110,0.22)] hover:bg-lake-dark',
    outline: 'border border-rule text-ink hover:border-lake hover:bg-lake hover:text-white',
    white: 'bg-white text-ink hover:bg-lake hover:text-white',
  }[variant]
  return (
    <a href={allezPlaceLink(place, placement, dates)} target="_blank" rel="sponsored nofollow noopener" className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[15px] font-bold no-underline transition-colors ${cls}`}>
      {label}
      <span aria-hidden>→</span>
    </a>
  )
}

/** Stay22 map following the page dates. Mounted when close to the viewport. */
export function LiveMap({ lat, lng, placement, lang, title, loadLabel, zoom, height = 560 }: { lat: number; lng: number; placement: string; lang: string; title: string; loadLabel: string; zoom?: number; height?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [dates] = useStayDates()

  useEffect(() => {
    const el = ref.current
    if (!el || visible) return
    const io = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) {
        setVisible(true)
        io.disconnect()
      }
    }, { rootMargin: '600px' })
    io.observe(el)
    return () => io.disconnect()
  }, [visible])

  return (
    <div ref={ref} className="hatch flex items-center justify-center border border-ink" style={{ height }}>
      {visible && dates ? (
        <iframe key={`${dates.checkin}-${dates.checkout}`} src={stay22MapSrc(lat, lng, placement, lang, dates, zoom)} title={title} className="block h-full w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
      ) : (
        <button type="button" onClick={() => setVisible(true)} className="cursor-pointer rounded-full border border-rule bg-white px-5 py-3 text-[15px] font-medium text-ink transition-colors hover:border-lake hover:bg-lake hover:text-white">
          {loadLabel}
        </button>
      )}
    </div>
  )
}

/** Booking bar pinned to the bottom once the hero has scrolled away. */
export function StickyBookingBar({ place, placement, title, cta, lang, watchId, closeLabel }: { place: string; placement: string; title: string; cta: string; lang: string; watchId: string; closeLabel: string }) {
  const [dates] = useStayDates()
  const [show, setShow] = useState(false)
  const closed = useSyncExternalStore(barClosedStore.subscribe, barClosedStore.get, () => false)

  useEffect(() => {
    const target = document.getElementById(watchId)
    if (!target) return
    const io = new IntersectionObserver(([e]) => setShow(!e.isIntersecting && e.boundingClientRect.top < 0))
    io.observe(target)
    return () => io.disconnect()
  }, [watchId])

  if (closed) return null

  return (
    <div className={`fixed inset-x-0 bottom-0 z-40 transition-transform duration-300 ${show ? 'translate-y-0' : 'translate-y-full'}`} aria-hidden={!show}>
      <div className="bg-ink text-white shadow-[0_-6px_18px_rgba(19,27,34,0.25)]">
        <div className="mx-auto flex max-w-[1280px] items-center gap-3 px-4 py-3 md:gap-6 md:px-8">
          <div className="min-w-0 flex-1">
            <div className="truncate font-display text-lg font-bold uppercase leading-tight tracking-[0.01em] md:text-xl">{title}</div>
            <div className="truncate text-[13px] text-white/75">{formatRange(dates, lang)}</div>
          </div>
          <a href={allezPlaceLink(place, `${placement}-sticky`, dates)} target="_blank" rel="sponsored nofollow noopener" tabIndex={show ? 0 : -1} className="shrink-0 rounded-full bg-lake px-4 py-2.5 text-sm font-bold text-white no-underline transition-colors hover:bg-lake-dark md:px-6 md:py-3 md:text-[15px]">
            {cta} <span aria-hidden>→</span>
          </a>
          <button
            type="button"
            tabIndex={show ? 0 : -1}
            onClick={() => {
              try {
                sessionStorage.setItem('sis:bar-closed', '1')
              } catch {}
              barClosedStore.set(true)
            }}
            className="shrink-0 cursor-pointer px-1 text-xl leading-none text-white/70 hover:text-white"
            aria-label={closeLabel}
          >
            ×
          </button>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Season: follows the chosen dates (December to April = winter)      */
/* unless the visitor picks a tab.                                     */
/* ------------------------------------------------------------------ */

export type Season = 'summer' | 'winter'

const seasonPick = createStore<Season | null>(() => null)

export function seasonOf(d: StayDates | null): Season {
  if (!d) return 'summer'
  const m = Number(d.checkin.slice(5, 7))
  return m === 12 || m <= 4 ? 'winter' : 'summer'
}

export function useSeason(): [Season, (s: Season) => void] {
  const [dates] = useStayDates()
  const picked = useSyncExternalStore(seasonPick.subscribe, seasonPick.get, () => null)
  return [picked ?? seasonOf(dates), (s: Season) => seasonPick.set(s)]
}

export function SeasonTabs({ labels, tone = 'light' }: { labels: Record<Season, string>; tone?: 'light' | 'dark' }) {
  const [season, setSeason] = useSeason()
  return (
    <div className={`inline-flex rounded-full border p-1 ${tone === 'dark' ? 'border-white/40' : 'border-rule bg-sand'}`} role="tablist">
      {(['summer', 'winter'] as Season[]).map((s) => (
        <button
          key={s}
          type="button"
          role="tab"
          aria-selected={season === s}
          onClick={() => setSeason(s)}
          className={`cursor-pointer rounded-full px-4 py-2 font-display text-[15px] font-semibold uppercase tracking-[0.06em] transition-colors ${
            season === s ? 'bg-ink text-white' : tone === 'dark' ? 'text-white hover:bg-white/10' : 'bg-white text-ink hover:bg-mist'
          }`}
        >
          {s === 'summer' ? '☀ ' : '❄ '}
          {labels[s]}
        </button>
      ))}
    </div>
  )
}

type SeasonContent = { title: string; base: string; facts: { value: string; label: string }[]; note: string }

export function SeasonPanel({ content, baseLabel }: { content: Record<Season, SeasonContent>; baseLabel: string }) {
  const [season] = useSeason()
  const c = content[season]
  return (
    <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_1.4fr] lg:gap-12" role="tabpanel">
      <div className={`rounded-2xl border border-rule p-5 md:p-7 ${season === 'winter' ? 'bg-lake-soft' : 'bg-sand'}`}>
        <h3 className="m-0 font-display text-[28px] font-bold uppercase leading-none text-ink md:text-[34px]">{c.title}</h3>
        <div className="mt-4 font-display text-sm font-semibold uppercase tracking-[0.08em] text-muted">{baseLabel}</div>
        <p className="mb-0 mt-1.5 text-base leading-relaxed text-ink md:text-lg">{c.base}</p>
      </div>
      <div className="grid grid-cols-2 gap-x-6 gap-y-5 self-start">
        {c.facts.map((f, i) => (
          <div key={i} className="rounded-xl border border-rule bg-white p-4">
            <div className="font-display text-[30px] font-bold leading-none tabular-nums text-ink md:text-[40px]">{f.value}</div>
            <div className="mt-1.5 text-[14px] leading-snug text-muted md:text-[15px]">{f.label}</div>
          </div>
        ))}
        <p className="col-span-2 m-0 text-[13px] leading-normal text-muted md:text-sm">{c.note}</p>
      </div>
    </div>
  )
}
