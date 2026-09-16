'use client'

import { useEffect, useState } from 'react'

/** In-page navigation pinned under the top of the screen, highlights the section in view. */
export function SectionNav({ items }: { items: { id: string; label: string }[] }) {
  const [active, setActive] = useState(items[0]?.id)

  useEffect(() => {
    const els = items.map((i) => document.getElementById(i.id)).filter(Boolean) as HTMLElement[]
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: '-80px 0px -60% 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [items])

  return (
    <nav className="sticky top-0 z-30 border-b border-rule bg-paper/95 backdrop-blur" aria-label="On this page">
      <div className="mx-auto flex max-w-[1280px] gap-1 overflow-x-auto px-4 [scrollbar-width:none] md:gap-2 md:px-8 [&::-webkit-scrollbar]:hidden">
        {items.map((i) => (
          <a
            key={i.id}
            href={`#${i.id}`}
            className={`shrink-0 border-b-2 px-2 py-3 font-display text-[15px] font-semibold uppercase tracking-[0.06em] no-underline transition-colors md:px-3 md:py-4 md:text-base ${
              active === i.id ? 'border-lake text-lake-dark' : 'border-transparent text-muted hover:text-ink'
            }`}
          >
            {i.label}
          </a>
        ))}
      </div>
    </nav>
  )
}
