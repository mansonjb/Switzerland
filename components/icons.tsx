import type { DoingKind } from '@/data/types'

/** Line icons drawn inline: no icon library, no extra request, they inherit the text colour. */
const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
}

export function BootIcon({ className = 'size-5' }: { className?: string }) {
  return (
    <svg {...base} className={className}>
      <path d="M7 3v9m0 0h3.2l2.6 3.4H19a2 2 0 0 1 2 2V21H5a2 2 0 0 1-2-2v-1.6c0-1 .5-1.9 1.3-2.5L7 12Z" />
      <path d="M3 18.5h18" />
    </svg>
  )
}

export function CableCarIcon({ className = 'size-5' }: { className?: string }) {
  return (
    <svg {...base} className={className}>
      <path d="M3 5.5 21 3" />
      <path d="M11 4.4V9" />
      <rect x="5" y="9" width="12" height="9" rx="2" />
      <path d="M5 13.5h12" />
      <path d="M8 21l2-3M14 21l-2-3" />
    </svg>
  )
}

export function StarPlaceIcon({ className = 'size-5' }: { className?: string }) {
  return (
    <svg {...base} className={className}>
      <path d="M12 3.5 14.4 9l5.6.5-4.3 3.9 1.3 5.6L12 16l-5 3 1.3-5.6L4 9.5 9.6 9Z" />
    </svg>
  )
}

export function ForkKnifeIcon({ className = 'size-5' }: { className?: string }) {
  return (
    <svg {...base} className={className}>
      <path d="M6 3v6a2 2 0 0 0 4 0V3" />
      <path d="M8 9v12" />
      <path d="M17 3c-1.5 1.6-2 3.4-2 5.4 0 1.6.7 2.6 2 3.1V21" />
    </svg>
  )
}

export function SunIcon({ className = 'size-[18px]' }: { className?: string }) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.5 1.5M17.6 17.6l1.5 1.5M2 12h2M20 12h2M4.9 19.1l1.5-1.5M17.6 6.4l1.5-1.5" />
    </svg>
  )
}

export function SnowIcon({ className = 'size-[18px]' }: { className?: string }) {
  return (
    <svg {...base} className={className}>
      <path d="M12 2v20M3.4 7l17.2 10M20.6 7 3.4 17" />
      <path d="M9.5 4.2 12 6.6l2.5-2.4M9.5 19.8 12 17.4l2.5 2.4" />
    </svg>
  )
}

/** Icon and colours for each kind of thing to do. */
export const doingStyle: Record<DoingKind, { Icon: (p: { className?: string }) => React.ReactElement; chip: string; strip: string; dot: string }> = {
  walk: { Icon: BootIcon, chip: 'bg-pine-soft text-pine', strip: 'bg-pine-soft', dot: 'bg-pine' },
  ride: { Icon: CableCarIcon, chip: 'bg-lake-soft text-lake-dark', strip: 'bg-lake-soft', dot: 'bg-lake' },
  local: { Icon: StarPlaceIcon, chip: 'bg-sun-soft text-sun', strip: 'bg-sun-soft', dot: 'bg-sun' },
  table: { Icon: ForkKnifeIcon, chip: 'bg-clay-soft text-clay', strip: 'bg-clay-soft', dot: 'bg-clay' },
}
