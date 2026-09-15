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

const ART: Record<DestinationGuide['stamp'], () => React.JSX.Element> = {
  wengen: WengenArt,
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
