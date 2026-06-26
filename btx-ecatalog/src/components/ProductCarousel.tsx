import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Layers, Tag, Boxes } from 'lucide-react'
import type { ProductVariant } from '../data/products'
import PlaceholderImage from './PlaceholderImage'

interface ProductCarouselProps {
  items: ProductVariant[]
  icon?: string
  /** Auto-advance interval in ms (0 disables) */
  interval?: number
}

const variants = {
  enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 80 : -80 }),
  center: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -80 : 80 }),
}

/**
 * Interactive product carousel: arrows, dots, thumbnail rail, auto-play with
 * pause-on-hover, and animated slide transitions. Used on every category page.
 */
export default function ProductCarousel({
  items,
  icon = 'Image',
  interval = 6000,
}: ProductCarouselProps) {
  const [[index, dir], setState] = useState<[number, number]>([0, 0])
  const [paused, setPaused] = useState(false)

  const paginate = useCallback(
    (next: number) => {
      setState(([cur]) => {
        const total = items.length
        const target = (next + total) % total
        return [target, next > cur || (cur === total - 1 && target === 0) ? 1 : -1]
      })
    },
    [items.length],
  )

  const goTo = (i: number) => setState(([cur]) => [i, i > cur ? 1 : -1])

  useEffect(() => {
    if (!interval || paused) return
    const id = setInterval(() => paginate(index + 1), interval)
    return () => clearInterval(id)
  }, [index, interval, paused, paginate])

  const active = items[index]
  const Icon = icon

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-card">
        <div className="grid lg:grid-cols-2">
          {/* Image side */}
          <div className="relative aspect-[4/3] overflow-hidden bg-brand-50 lg:aspect-auto lg:min-h-[460px]">
            <AnimatePresence custom={dir} mode="popLayout">
              <motion.div
                key={index}
                custom={dir}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                <PlaceholderImage
                  src={active.image}
                  alt={active.name}
                  icon={Icon}
                  label={active.name}
                />
              </motion.div>
            </AnimatePresence>
            <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-brand-700 shadow-sm backdrop-blur">
              {index + 1} / {items.length}
            </span>
          </div>

          {/* Content side */}
          <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="eyebrow">{active.material}</span>
                <h3 className="mt-4 font-display text-2xl font-extrabold text-ink sm:text-3xl">
                  {active.name}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-ink-soft">
                  {active.description}
                </p>

                <div className="mt-6 space-y-4">
                  <Detail icon={Tag} label="Material">
                    {active.material}
                  </Detail>
                  <Detail icon={Layers} label="Variations">
                    <span className="flex flex-wrap gap-1.5">
                      {active.variations.map((v) => (
                        <span
                          key={v}
                          className="rounded-md bg-brand-50 px-2 py-0.5 text-xs font-medium text-brand-700"
                        >
                          {v}
                        </span>
                      ))}
                    </span>
                  </Detail>
                  <Detail icon={Boxes} label="Applications">
                    {active.applications.join(' · ')}
                  </Detail>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="mt-8 flex items-center justify-between">
              <div className="flex gap-2">
                <button
                  onClick={() => paginate(index - 1)}
                  aria-label="Previous"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-100 text-brand-700 transition-all hover:bg-brand-50 hover:-translate-x-0.5"
                >
                  <ArrowLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={() => paginate(index + 1)}
                  aria-label="Next"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-gradient text-white shadow-card transition-all hover:translate-x-0.5"
                >
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
              <div className="flex gap-2">
                {items.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === index
                        ? 'w-7 bg-brand-600'
                        : 'w-2 bg-brand-200 hover:bg-brand-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Thumbnail rail */}
      <div className="mt-5 flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
        {items.map((item, i) => (
          <button
            key={item.name}
            onClick={() => goTo(i)}
            className={`group relative flex shrink-0 items-center gap-3 rounded-xl border p-2 pr-4 text-left transition-all ${
              i === index
                ? 'border-brand-300 bg-brand-50'
                : 'border-gray-100 bg-white hover:border-brand-200'
            }`}
          >
            <span className="h-12 w-12 overflow-hidden rounded-lg">
              <PlaceholderImage src={item.image} alt={item.name} icon={Icon} />
            </span>
            <span
              className={`text-sm font-semibold ${
                i === index ? 'text-brand-700' : 'text-ink-soft'
              }`}
            >
              {item.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}

function Detail({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof Tag
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="flex items-start gap-3">
      <Icon className="mt-0.5 h-4.5 w-4.5 shrink-0 text-brand-500" />
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft">
          {label}
        </p>
        <div className="mt-1 text-sm text-ink">{children}</div>
      </div>
    </div>
  )
}
