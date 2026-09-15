import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { Footer, Header } from './chrome'
import { Container } from './blocks'

/** Simple text page (methodology, legal): same grid, reading measure 68ch. */
export function ProsePage({ locale, path, title, updated, children }: { locale: Locale; path: string; title: string; updated: string; children: ReactNode }) {
  return (
    <>
      <Header locale={locale} path={path} />
      <main className="flex-1">
        <Container className="pb-16 pt-10 md:pb-[104px] md:pt-16">
          <h1 className="m-0 font-display text-[40px] font-bold uppercase leading-[0.98] tracking-[0.01em] text-ink md:text-[72px] md:leading-[0.96]">{title}</h1>
          <div className="mt-6 h-px bg-rule" />
          <div className="prose-body mt-8">{children}</div>
          <p className="mt-10 text-[13px] text-muted md:text-sm">{updated}</p>
        </Container>
      </main>
      <Footer locale={locale} />
    </>
  )
}

export function H2({ id, children }: { id?: string; children: ReactNode }) {
  return (
    <h2 id={id} className="mb-3 mt-10 scroll-mt-6 font-display text-[28px] font-semibold uppercase leading-[1.05] tracking-[0.01em] text-ink first:mt-0 md:text-[34px]">
      {children}
    </h2>
  )
}

export function P({ children }: { children: ReactNode }) {
  return <p className="mb-4 mt-0 text-base leading-relaxed text-ink md:text-[17px]">{children}</p>
}
