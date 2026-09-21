'use client'

import { useEffect, useState } from 'react'

/**
 * Google Analytics and Microsoft Clarity run only after an explicit yes (GDPR and the Swiss FADP).
 * Nothing from either is loaded before that: no script, no cookie, no ping.
 * The choice sits in localStorage; ConsentReset on the legal page lets a visitor change it.
 */
const KEY = 'sis-consent'
const REOPEN = 'sis-consent-reopen'

type Copy = { text: string; accept: string; decline: string; more: string; moreHref: string }

function read(): string | null {
  try {
    return window.localStorage.getItem(KEY)
  } catch {
    return null
  }
}

function write(v: 'granted' | 'denied') {
  try {
    window.localStorage.setItem(KEY, v)
  } catch {}
}

function loadClarity(id: string) {
  const w = window as unknown as { clarity?: unknown }
  if (!id || w.clarity) return
  ;(function (c: any, l: Document, a: string, r: string, i: string) {
    c[a] = c[a] || function () {
      // eslint-disable-next-line prefer-rest-params
      ;(c[a].q = c[a].q || []).push(arguments)
    }
    const t = l.createElement(r) as HTMLScriptElement
    t.async = true
    t.src = 'https://www.clarity.ms/tag/' + i
    const y = l.getElementsByTagName(r)[0]
    y.parentNode!.insertBefore(t, y)
  })(window, document, 'clarity', 'script', id)
}

function loadAll(gaId: string, clarityId: string) {
  if (gaId) loadGa(gaId)
  loadClarity(clarityId)
}

function loadGa(id: string) {
  const w = window as unknown as { dataLayer: unknown[]; gtag?: (...a: unknown[]) => void }
  if (w.gtag) return
  w.dataLayer = w.dataLayer || []
  w.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    w.dataLayer.push(arguments)
  }
  w.gtag('js', new Date())
  w.gtag('config', id, { anonymize_ip: true })
  const s = document.createElement('script')
  s.async = true
  s.src = `https://www.googletagmanager.com/gtag/js?id=${id}`
  document.head.appendChild(s)
}

export function Consent({ gaId, clarityId, copy }: { gaId: string; clarityId: string; copy: Copy }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const v = read()
    if (v === 'granted') loadAll(gaId, clarityId)
    else if (v !== 'denied') setOpen(true)
    const reopen = () => setOpen(true)
    window.addEventListener(REOPEN, reopen)
    return () => window.removeEventListener(REOPEN, reopen)
  }, [gaId, clarityId])

  if (!open) return null

  const choose = (v: 'granted' | 'denied') => {
    write(v)
    setOpen(false)
    if (v === 'granted') loadAll(gaId, clarityId)
    // Withdrawing after GA ran: reload so the script is gone from the page.
    else if ((window as unknown as { gtag?: unknown; clarity?: unknown }).gtag || (window as unknown as { clarity?: unknown }).clarity) window.location.reload()
  }

  return (
    <div role="dialog" aria-live="polite" aria-label={copy.more} className="fixed inset-x-0 bottom-0 z-50 p-3 md:bottom-4 md:left-4 md:right-auto md:max-w-md md:p-0">
      <div className="rounded-lg border border-black/10 bg-white p-4 text-[14px] leading-snug text-neutral-800 shadow-lg">
        <p className="m-0">
          {copy.text}{' '}
          <a href={copy.moreHref} className="underline">
            {copy.more}
          </a>
        </p>
        <div className="mt-3 flex gap-2">
          <button type="button" onClick={() => choose('denied')} className="flex-1 cursor-pointer rounded-md border border-neutral-300 bg-white px-3 py-2 font-medium text-neutral-800 hover:bg-neutral-50">
            {copy.decline}
          </button>
          <button type="button" onClick={() => choose('granted')} className="flex-1 cursor-pointer rounded-md border border-neutral-900 bg-neutral-900 px-3 py-2 font-medium text-white hover:bg-neutral-700">
            {copy.accept}
          </button>
        </div>
      </div>
    </div>
  )
}

export function ConsentReset({ label }: { label: string }) {
  return (
    <button type="button" onClick={() => window.dispatchEvent(new Event(REOPEN))} className="cursor-pointer rounded-md border border-neutral-300 bg-white px-3 py-2 text-[14px] font-medium hover:bg-neutral-50">
      {label}
    </button>
  )
}
