import { useState } from 'react'
import { getIcon } from './icons'

interface PlaceholderImageProps {
  /** Real image path; when omitted (or it fails to load) a branded placeholder shows */
  src?: string
  alt: string
  /** lucide-react icon name used in the placeholder */
  icon?: string
  className?: string
  /** Short label shown inside the placeholder */
  label?: string
}

/**
 * Displays a real image when `src` is provided, otherwise renders an elegant
 * branded gradient placeholder. This keeps the catalog fully functional offline
 * and makes swapping in real photography a one-line change in the data file.
 */
export default function PlaceholderImage({
  src,
  alt,
  icon = 'Image',
  className = '',
  label,
}: PlaceholderImageProps) {
  const [failed, setFailed] = useState(false)
  const Icon = getIcon(icon)

  if (src && !failed) {
    return (
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onError={() => setFailed(true)}
        className={`h-full w-full object-cover ${className}`}
      />
    )
  }

  return (
    <div
      role="img"
      aria-label={alt}
      className={`relative flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-br from-brand-100 via-brand-50 to-white ${className}`}
    >
      {/* decorative pattern */}
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div
        className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-200/40 blur-2xl"
        aria-hidden
      />
      <div
        className="absolute -bottom-12 -left-8 h-44 w-44 rounded-full bg-brand-300/30 blur-2xl"
        aria-hidden
      />
      <div className="relative flex flex-col items-center gap-3 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/80 text-brand-600 shadow-card backdrop-blur">
          <Icon className="h-8 w-8" strokeWidth={1.6} />
        </span>
        {label && (
          <span className="max-w-[12rem] text-sm font-semibold text-brand-700/80">
            {label}
          </span>
        )}
      </div>
    </div>
  )
}
