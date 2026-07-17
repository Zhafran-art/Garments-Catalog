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
  const [loaded, setLoaded] = useState(false)
  const Icon = getIcon(icon)

  if (src && !failed) {
    // Progressive loading: the photo is decoded off the main thread and only
    // fetched near the viewport, then fades in over a soft brand-tinted panel
    // so it eases into place instead of popping in once decoded.
    return (
      <div className="relative h-full w-full overflow-hidden bg-brand-50/60">
        <img
          // A cached image can finish before React attaches onLoad, so reconcile
          // the loaded state from the element itself when the ref is set.
          ref={(node) => {
            if (node?.complete && node.naturalWidth > 0) setLoaded(true)
          }}
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          className={`h-full w-full object-cover transition-opacity duration-500 ease-out ${
            loaded ? 'opacity-100' : 'opacity-0'
          } ${className}`}
        />
      </div>
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
