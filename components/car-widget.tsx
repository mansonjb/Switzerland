'use client'
import { useEffect, useRef } from 'react'

const SRC = 'https://tp.media/content?campaign_id=222&promo_id=8813&shmarker=730118&trs=575253'

/** GetRentacar search form (Travelpayouts). The script renders the form next to itself, so it is injected on the client. */
export function CarWidget() {
  const box = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = box.current
    if (!el || el.childElementCount) return
    const s = document.createElement('script')
    s.src = SRC
    s.charset = 'utf-8'
    s.async = true
    el.appendChild(s)
    return () => { el.innerHTML = '' }
  }, [])
  return <div ref={box} className="min-h-[320px]" />
}
