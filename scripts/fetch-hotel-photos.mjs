#!/usr/bin/env node
/**
 * Adds the hotel's own lead photo from Booking.com to each priced hotel of a guide.
 * No extra scrape: the photo URL is already in the raw Booking scrape (field `image`).
 *
 *   node scripts/fetch-hotel-photos.mjs --raw-dir <scratch>/prices lugano geneva ...
 *
 * For every hotel of data/prices/<slug>.json that has no photo yet in data/guides/<slug>.ts,
 * it finds the scraped listing by its Booking URL, saves the image to
 * public/photos/hotels/<hotel-slug>.jpg (recompressed with sips) and inserts the
 * `photo:` line after the hotel's `name:` line. Hotels without a price match are left alone.
 */
import fs from 'node:fs'
import path from 'node:path'
import { execFileSync } from 'node:child_process'

const args = process.argv.slice(2)
const i = args.indexOf('--raw-dir')
if (i < 0) throw new Error('--raw-dir is required')
const rawDir = args[i + 1]
const slugs = args.filter((_, k) => k !== i && k !== i + 1)

const key = (u) => (u ? new URL(u).pathname.replace(/\.[a-z-]+\.html$/, '').replace(/\.html$/, '') : '')

// Index every scraped listing by its Booking path, across all raw files (a hotel can sit in another scrape).
const images = new Map()
for (const f of fs.readdirSync(rawDir).filter((f) => f.endsWith('-booking-raw.json'))) {
  const raw = JSON.parse(fs.readFileSync(path.join(rawDir, f), 'utf8'))
  for (const items of Object.values(raw)) for (const it of items) if (it?.url && it.image && !images.has(key(it.url))) images.set(key(it.url), it.image)
}

const outDir = 'public/photos/hotels'
fs.mkdirSync(outDir, { recursive: true })

for (const slug of slugs) {
  const priceFile = `data/prices/${slug}.json`
  const guideFile = `data/guides/${slug}.ts`
  if (!fs.existsSync(priceFile)) { console.log(`${slug}: no price file, skipped`); continue }
  let guide = fs.readFileSync(guideFile, 'utf8')
  const { hotels } = JSON.parse(fs.readFileSync(priceFile, 'utf8'))
  let added = 0
  const missing = []
  for (const h of hotels) {
    const block = new RegExp(`(\\n(\\s+)slug: '${h.slug}',\\n\\s+name: [^\\n]+\\n)(?!\\s+photo:)`)
    if (!block.test(guide)) continue
    const img = images.get(key(h.bookingUrl))
    if (!img) { missing.push(h.slug); continue }
    const file = `${outDir}/${h.slug}.jpg`
    const res = await fetch(img.replace(/max\d+x\d+|max\d+/, 'max1280x900'))
    if (!res.ok) { missing.push(`${h.slug} (HTTP ${res.status})`); continue }
    fs.writeFileSync(file, Buffer.from(await res.arrayBuffer()))
    execFileSync('sips', ['-Z', '1000', '-s', 'format', 'jpeg', '-s', 'formatOptions', '62', file, '--out', file], { stdio: 'ignore' })
    guide = guide.replace(block, (_, head, indent) => `${head}${indent}photo: '/photos/hotels/${h.slug}.jpg',\n`)
    added++
  }
  fs.writeFileSync(guideFile, guide)
  console.log(`${slug}: ${added} photos added${missing.length ? `, none for ${missing.join(', ')}` : ''}`)
}
