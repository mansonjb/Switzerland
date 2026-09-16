// Checks rewritten guides: structure, languages, dashes, and numbers that appear nowhere in the sources.
// Usage (from project root): node <this> slug1 slug2 ...
import fs from 'node:fs'
import { execSync } from 'node:child_process'

const slugs = process.argv.slice(2)
const sourceText = (slug) => {
  const files = [`data/research/${slug}.md`, `data/SOURCES-${slug}.md`, 'data/SOURCES-doing.md', 'data/SOURCES.md', 'data/SOURCES-oberland.md', 'data/SOURCES-oberland-2.md', 'data/SOURCES-seasons.md', `data/prices/${slug}.json`]
  let t = files.filter((f) => fs.existsSync(f)).map((f) => fs.readFileSync(f, 'utf8')).join('\n')
  try { t += execSync(`git show 6e1612f:data/guides/${slug}.ts`, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }) } catch {}
  return t
}
const words = { one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10, twelve: 12, fifteen: 15, twenty: 20, thirty: 30, forty: 40, fifty: 50, hundred: 100 }

for (const slug of slugs) {
  const file = `data/guides/${slug}.ts`
  const s = fs.readFileSync(file, 'utf8')
  const problems = []
  // TS file: parse with a light transform instead of importing
  const js = s.replace(/^import type[^\n]*\n/m, '').replace(/export const (\w+): \w+ =/, 'module.exports =')
  let g
  try { g = eval(`(()=>{const module={};${js};return module.exports})()`) } catch (e) { problems.push(`parse: ${e.message}`) }
  if (g) {
    if (!g.story || g.story.paragraphs.length !== 4) problems.push(`story paragraphs: ${g.story?.paragraphs.length ?? 0}`)
    g.sectors.forEach((x, i) => { if (!x.story) problems.push(`sector ${i} no story`) })
    g.hotels.forEach((h) => { if (!h.blurb) problems.push(`hotel ${h.slug} no blurb`) })
    const walk = (o, path) => {
      if (o && typeof o === 'object') {
        if ('en' in o && typeof o.en === 'string') { for (const l of ['fr', 'de']) if (typeof o[l] !== 'string' || !o[l]) problems.push(`missing ${l} at ${path}`) }
        for (const [k, v] of Object.entries(o)) walk(v, `${path}.${k}`)
      }
    }
    walk(g, slug)
    const wc = (t) => t.split(/\s+/).length
    g.faq.forEach((f, i) => { if (wc(f.a.en) < 28) problems.push(`faq ${i} terse (${wc(f.a.en)}w)`) })
    g.practical?.items.forEach((x, i) => { if (wc(x.text.en) < 25) problems.push(`practical ${i} terse (${wc(x.text.en)}w)`) })
    g.doing?.groups.forEach((gr, j) => gr.items.forEach((x, i) => { if (wc(x.text.en) < 15) problems.push(`doing ${j}.${i} terse (${wc(x.text.en)}w)`) }))
  }
  if (/[—–]/.test(s)) problems.push(`dash x${(s.match(/[—–]/g) || []).length}`)
  if (/ß/.test(s)) problems.push('ß found')
  const straight = (s.match(/[A-Za-zÀ-ÿ]'[A-Za-zÀ-ÿ]/g) || []).length
  if (straight) problems.push(`straight apostrophes x${straight}`)
  const gen = s.match(/most (people|visitors|travellers|guests)|the only (base|village|place)|la plupart des (gens|visiteurs|voyageurs)|die meisten (Besucher|Leute|Gäste|Reisenden)/gi)
  if (gen) problems.push(`generalizations: ${[...new Set(gen)].join(', ')}`)
  // numbers in new prose absent from sources and old file
  const src = sourceText(slug)
  const prose = [...s.matchAll(/(?:story|blurb|why|where|watch|quickAnswer|base|text|a|intro|note|description|paragraphs)[\s\S]*?\{[^}]*?en: '((?:[^'\\]|\\.)*)'/g)].map((m) => m[1]).join(' ')
  const nums = new Set((s.match(/\b\d[\d'.,]*\d\b|\b\d\b/g) || []).map((n) => n.replace(/[',]/g, '')))
  const srcNums = new Set((src.match(/\b\d[\d'.,]*\d\b|\b\d\b/g) || []).map((n) => n.replace(/[',]/g, '')))
  for (const t of src.match(/\b\d{1,2}:\d{2}\b/g) || []) { const [h, m] = t.split(':'); srcNums.add(`${+h}.${m}`); srcNums.add(`${h}.${m}`) }
  const unknown = [...nums].filter((n) => !srcNums.has(n) && !srcNums.has(n.replace(/\.0+$/, '')) && n.length > 1)
  if (unknown.length) problems.push(`numbers not in sources: ${unknown.join(', ')}`)
  console.log(`${slug.padEnd(14)} ${problems.length ? problems.join(' | ') : 'OK'}`)
}
