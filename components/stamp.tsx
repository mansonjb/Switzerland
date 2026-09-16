import type { DestinationGuide } from '@/data/types'

/** Flat illustration seen through the cross window. One per destination, same visual series. */
function WengenArt() {
  const abs = 'absolute'
  return (
    <>
      <div className={`${abs} tri bottom-[20%] left-[-8%] h-[38%] w-[54%] bg-st-rock-light`} />
      <div className={`${abs} tri bottom-[20%] right-[-6%] h-[30%] w-[46%] bg-st-rock-light`} />
      <div className={`${abs} tri bottom-[20%] left-[20%] h-[64%] w-[60%] bg-st-rock`} />
      <div className={`${abs} bottom-[20%] left-[20%] h-[64%] w-[60%] bg-st-rock-dark [clip-path:polygon(50%_0,100%_100%,50%_100%)]`} />
      <div className={`${abs} bottom-[20%] left-[20%] h-[64%] w-[60%] bg-st-snow [clip-path:polygon(50%_0,74%_46%,64%_39%,55%_50%,45%_38%,35%_47%,26%_41%)]`} />
      <div className={`${abs} inset-x-0 bottom-0 h-[20%] bg-st-meadow`} />
      <div className={`${abs} tri bottom-[14%] left-[35%] h-[19%] w-[9%] bg-st-fir`} />
      <div className={`${abs} tri bottom-[12%] left-[43%] h-[14%] w-[7%] bg-st-fir-light`} />
      <div className={`${abs} tri bottom-[13%] left-[55%] h-[20%] w-[10%] bg-st-fir`} />
      <div className={`${abs} tri bottom-[11%] left-[49%] h-[13%] w-[7%] bg-st-fir-light`} />
    </>
  )
}


/** Lauterbrunnen: vertical cliffs and the waterfall. */
function LauterbrunnenArt() {
  const abs = 'absolute'
  return (
    <>
      <div className={`${abs} bottom-[20%] left-0 h-[72%] w-[34%] bg-st-rock`} />
      <div className={`${abs} bottom-[20%] right-0 h-[64%] w-[30%] bg-st-rock-light`} />
      <div className={`${abs} bottom-[20%] left-[30%] h-[80%] w-[3%] bg-st-snow`} />
      <div className={`${abs} bottom-[20%] left-[26%] h-[10%] w-[12%] bg-st-snow opacity-70`} />
      <div className={`${abs} inset-x-0 bottom-0 h-[20%] bg-st-meadow`} />
      <div className={`${abs} tri bottom-[16%] left-[52%] h-[20%] w-[10%] bg-st-fir`} />
      <div className={`${abs} tri bottom-[14%] left-[62%] h-[15%] w-[8%] bg-st-fir-light`} />
      <div className={`${abs} tri bottom-[20%] left-[40%] h-[46%] w-[26%] bg-st-rock-dark`} />
    </>
  )
}

/** Grindelwald: the Eiger wall over meadows. */
function GrindelwaldArt() {
  const abs = 'absolute'
  return (
    <>
      <div className={`${abs} bottom-[22%] left-[-4%] h-[54%] w-[58%] bg-st-rock-dark [clip-path:polygon(0_100%,58%_0,100%_100%)]`} />
      <div className={`${abs} bottom-[22%] left-[36%] h-[70%] w-[64%] bg-st-rock [clip-path:polygon(0_100%,46%_0,100%_100%)]`} />
      <div className={`${abs} bottom-[22%] left-[36%] h-[70%] w-[64%] bg-st-snow [clip-path:polygon(46%_0,66%_40%,56%_33%,46%_44%,36%_32%,28%_38%)]`} />
      <div className={`${abs} inset-x-0 bottom-0 h-[22%] bg-st-meadow`} />
      <div className={`${abs} bottom-[22%] left-[10%] h-[8%] w-[16%] bg-st-fir-light`} />
      <div className={`${abs} tri bottom-[18%] left-[70%] h-[16%] w-[8%] bg-st-fir`} />
    </>
  )
}

/** Mürren: the Schilthorn ridge seen from the terrace. */
function MurrenArt() {
  const abs = 'absolute'
  return (
    <>
      <div className={`${abs} tri bottom-[26%] left-[-6%] h-[44%] w-[50%] bg-st-rock-light`} />
      <div className={`${abs} tri bottom-[26%] left-[24%] h-[62%] w-[52%] bg-st-rock`} />
      <div className={`${abs} tri bottom-[26%] right-[-6%] h-[48%] w-[46%] bg-st-rock-light`} />
      <div className={`${abs} bottom-[26%] left-[24%] h-[62%] w-[52%] bg-st-snow [clip-path:polygon(50%_0,72%_44%,62%_37%,52%_48%,42%_36%,32%_45%)]`} />
      <div className={`${abs} inset-x-0 bottom-0 h-[26%] bg-st-meadow`} />
      <div className={`${abs} bottom-[20%] left-[18%] h-[10%] w-[20%] bg-st-rock-dark`} />
      <div className={`${abs} tri bottom-[22%] left-[60%] h-[14%] w-[7%] bg-st-fir`} />
    </>
  )
}

/** Interlaken: the lake between two shoulders. */
function InterlakenArt() {
  const abs = 'absolute'
  return (
    <>
      <div className={`${abs} tri bottom-[34%] left-[-8%] h-[40%] w-[56%] bg-st-rock`} />
      <div className={`${abs} tri bottom-[34%] right-[-8%] h-[46%] w-[58%] bg-st-rock-light`} />
      <div className={`${abs} bottom-[34%] left-[28%] h-[30%] w-[44%] bg-st-snow [clip-path:polygon(50%_0,100%_100%,0_100%)]`} />
      <div className={`${abs} inset-x-0 bottom-0 h-[34%] bg-st-lake`} />
      <div className={`${abs} bottom-[30%] left-0 right-0 h-[6%] bg-st-meadow`} />
      <div className={`${abs} bottom-[10%] left-[18%] h-[4%] w-[26%] bg-white opacity-70`} />
      <div className={`${abs} bottom-[18%] left-[56%] h-[3%] w-[20%] bg-white opacity-60`} />
    </>
  )
}

const ART: Record<DestinationGuide['stamp'], () => React.JSX.Element> = {
  wengen: WengenArt,
  lauterbrunnen: LauterbrunnenArt,
  grindelwald: GrindelwaldArt,
  murren: MurrenArt,
  interlaken: InterlakenArt,
  generic: WengenArt,
}

export function Stamp({ name, subtitle, altitude, art }: { name: string; subtitle: string; altitude: number; art: DestinationGuide['stamp'] }) {
  const Art = ART[art]
  return (
    <div className="relative aspect-[4/5] w-full bg-st-red shadow-[0_5px_12px_rgba(19,27,34,0.16)] [container-type:inline-size]" role="img" aria-label={`${name}, ${altitude} m`}>
      <div className="cross-window absolute left-[19%] top-[8%] aspect-square w-[62%] overflow-hidden bg-st-sky">
        <Art />
      </div>
      <div className="absolute inset-x-[9%] bottom-[6%]" aria-hidden>
        <div className="font-display text-[11cqw] font-bold uppercase leading-[0.9] tracking-[0.01em] text-ink [overflow-wrap:break-word]">{name}</div>
        <div className="mt-[1.5cqw] flex items-end justify-between gap-[4%]">
          <div className="min-w-0 text-[4.6cqw] leading-tight text-ink">{subtitle}</div>
          <div className="flex shrink-0 items-baseline gap-[0.8cqw]">
            <div className="font-display text-[15cqw] font-bold leading-[0.85] tabular-nums text-white">{altitude}</div>
            <div className="font-display text-[5.5cqw] font-semibold leading-none text-white">m</div>
          </div>
        </div>
      </div>
      <div className="perf-x absolute inset-x-0 -top-[5px] h-2.5" aria-hidden />
      <div className="perf-x absolute inset-x-0 -bottom-[5px] h-2.5" aria-hidden />
      <div className="perf-y absolute inset-y-0 -left-[5px] w-2.5" aria-hidden />
      <div className="perf-y absolute inset-y-0 -right-[5px] w-2.5" aria-hidden />
    </div>
  )
}
