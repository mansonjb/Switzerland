import Link from 'next/link'
import { Container } from '@/components/blocks'
import { Logo } from '@/components/chrome'

// Locale is unknown here (not-found cannot read params), so the page stays in English.
export default function NotFound() {
  return (
    <main className="flex-1">
      <div className="border-b border-rule">
        <Container className="flex h-[60px] items-center md:h-[76px]">
          <Link href="/" className="no-underline"><Logo /></Link>
        </Container>
      </div>
      <Container className="py-16 md:py-[104px]">
        <div className="font-display text-[96px] font-bold leading-none tabular-nums text-swiss">404</div>
        <h1 className="m-0 mt-4 font-display text-[40px] font-bold uppercase leading-none text-ink">Page not found</h1>
        <p className="mt-4 text-lg text-ink">This page does not exist or has moved.</p>
        <Link href="/" className="mt-6 inline-block border border-ink px-5 py-3 text-[15px] font-medium text-ink no-underline hover:border-swiss hover:bg-swiss hover:text-white">
          Back to the home page
        </Link>
      </Container>
    </main>
  )
}
