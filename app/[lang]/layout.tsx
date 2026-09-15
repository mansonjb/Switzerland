import type { Metadata } from 'next'
import Script from 'next/script'
import { Barlow_Condensed, Noto_Sans } from 'next/font/google'
import { notFound } from 'next/navigation'
import { LOCALES, hasLocale } from '@/lib/i18n'
import { SITE_URL, SITE_NAME, STAY22_LMA_ID, GA_ID, CLARITY_ID } from '@/lib/site'
import '../globals.css'

const barlow = Barlow_Condensed({ subsets: ['latin'], weight: ['400', '600', '700'], variable: '--font-barlow', display: 'swap' })
const noto = Noto_Sans({ subsets: ['latin'], weight: ['400', '500', '700'], variable: '--font-noto', display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_NAME, template: `%s | ${SITE_NAME}` },
  applicationName: SITE_NAME,
}

export const dynamicParams = false

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }))
}

export default async function RootLayout({ children, params }: LayoutProps<'/[lang]'>) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()

  return (
    <html lang={lang} className={`${barlow.variable} ${noto.variable}`}>
      <body className="flex min-h-screen flex-col">
        {children}
        {STAY22_LMA_ID && (
          <Script
            id="stay22-lma"
            strategy="lazyOnload"
            dangerouslySetInnerHTML={{
              __html: `(function(s,t,a,y,twenty,two){s.Stay22=s.Stay22||{};s.Stay22.params={lmaID:'${STAY22_LMA_ID}'};twenty=t.createElement(a);two=t.getElementsByTagName(a)[0];twenty.async=1;twenty.src=y;two.parentNode.insertBefore(twenty,two)})(window,document,'script','https://scripts.stay22.com/letmeallez.js');`,
            }}
          />
        )}
        {GA_ID && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
            <Script id="ga4" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${GA_ID}');`}</Script>
          </>
        )}
        {CLARITY_ID && (
          <Script id="clarity" strategy="lazyOnload">{`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y)})(window,document,"clarity","script","${CLARITY_ID}");`}</Script>
        )}
      </body>
    </html>
  )
}
