#!/usr/bin/env node
/**
 * Submits URLs to IndexNow (Bing, Yandex, Seznam, Naver share submissions).
 * Reads the sitemap from the local build output, never from the live site
 * (polling production trips Vercel's security checkpoint).
 *
 *   npm run build && node scripts/indexnow.mjs              all sitemap URLs
 *   node scripts/indexnow.mjs --only zermatt,brunnen          just these slugs, in every locale
 *   node scripts/indexnow.mjs --dry                           print, send nothing
 *
 * The key file public/<KEY>.txt must already be deployed before a submission.
 */
import { readFile } from 'node:fs/promises'

const KEY = '72bed310a941166e3ebececb709f3b75'
const HOST = 'www.staysinswitzerland.com'
const argv = process.argv.slice(2)
const dry = argv.includes('--dry')
const onlyArg = argv.indexOf('--only') >= 0 ? argv[argv.indexOf('--only') + 1] : ''
const only = onlyArg ? onlyArg.split(',').filter(Boolean) : []

const xml = await readFile(new URL('../.next/server/app/sitemap.xml.body', import.meta.url), 'utf8')
let urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
if (only.length) urls = urls.filter((u) => only.some((s) => new RegExp(`/${s}$`).test(u)))
urls = [...new Set(urls)].filter((u) => new URL(u).host === HOST)

console.log(`${urls.length} URLs`)
if (dry) {
  console.log(urls.join('\n'))
  process.exit(0)
}

// The protocol accepts up to 10,000 URLs per request.
for (let i = 0; i < urls.length; i += 10000) {
  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'content-type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList: urls.slice(i, i + 10000) }),
  })
  console.log(`IndexNow ${res.status} ${res.statusText} (${Math.min(i + 10000, urls.length)}/${urls.length})`)
}
