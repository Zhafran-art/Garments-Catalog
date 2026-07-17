import { COMPANY } from '../data/products'

interface LogoProps {
  /** Use light text for dark backgrounds (e.g. the footer) */
  variant?: 'dark' | 'light'
  className?: string
}

export default function Logo({ variant = 'dark', className = '' }: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-white p-1 shadow-card ring-1 ring-brand-100">
        <img
          src="/images/bentex-emblem.webp"
          alt={COMPANY.name}
          className="h-full w-full object-contain"
        />
      </span>
      <div className="leading-tight">
        <span
          className={`block font-display text-base font-extrabold tracking-tight ${
            variant === 'light' ? 'text-white' : 'text-ink'
          }`}
        >
          BTX
        </span>
        <span
          className={`block text-[0.62rem] font-semibold uppercase tracking-[0.2em] ${
            variant === 'light' ? 'text-white/60' : 'text-brand-600'
          }`}
        >
          Garment Trims
        </span>
      </div>
      <span className="sr-only">{COMPANY.name}</span>
    </div>
  )
}
