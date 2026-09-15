import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// English is served at the root. /en/* is an internal path only:
// public /x is rewritten to /en/x, and a direct hit on /en/x redirects to /x.
const PREFIXED = ['de', 'fr']

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (pathname === '/en' || pathname.startsWith('/en/')) {
    const url = request.nextUrl.clone()
    url.pathname = pathname.slice(3) || '/'
    return NextResponse.redirect(url, 308)
  }

  if (PREFIXED.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`))) {
    return NextResponse.next()
  }

  const url = request.nextUrl.clone()
  url.pathname = `/en${pathname === '/' ? '' : pathname}`
  return NextResponse.rewrite(url)
}

export const config = {
  // Skip Next internals and any path with a file extension (photos, robots.txt, sitemap.xml, icons)
  matcher: ['/((?!_next|.*\\..*).*)'],
}
