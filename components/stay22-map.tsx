'use client'

import { useEffect, useRef, useState } from 'react'

/** Stay22 map iframe, mounted only when scrolled near, to keep it off the LCP path. */
export function Stay22Map({ src, title, loadLabel }: { src: string; title: string; loadLabel: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || visible) return
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true)
          io.disconnect()
        }
      },
      { rootMargin: '400px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [visible])

  return (
    <div ref={ref} className="hatch flex h-[420px] items-center justify-center border border-rule">
      {visible ? (
        <iframe src={src} title={title} className="block h-full w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
      ) : (
        <button type="button" onClick={() => setVisible(true)} className="cursor-pointer border border-ink bg-white px-5 py-3 text-[15px] font-medium text-ink hover:border-swiss hover:bg-swiss hover:text-white">
          {loadLabel}
        </button>
      )}
    </div>
  )
}
