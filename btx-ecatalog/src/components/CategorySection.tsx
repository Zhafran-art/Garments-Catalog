import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { categories } from '../data/products'
import { importCategoryPage, prefetch } from '../lib/prefetch'
import { getIcon } from './icons'
import PlaceholderImage from './PlaceholderImage'

/**
 * Homepage "Featured Products" grid of interactive category cards with
 * hover animations. Links through to each dedicated category page.
 */
export default function CategorySection() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {categories.map((cat, i) => {
        const Icon = getIcon(cat.icon)
        return (
          <motion.div
            key={cat.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className={i === 0 ? 'sm:col-span-2 lg:col-span-1' : ''}
          >
            <Link
              to={`/${cat.slug}`}
              onMouseEnter={() => prefetch(importCategoryPage)}
              onFocus={() => prefetch(importCategoryPage)}
              className="card group relative flex h-full flex-col overflow-hidden hover:border-brand-200 hover:shadow-card-hover"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <div className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-110">
                  <PlaceholderImage alt={cat.name} icon={cat.icon} label={cat.name} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/90 text-brand-600 shadow-card backdrop-blur transition-transform duration-500 group-hover:scale-110">
                  <Icon className="h-5 w-5" strokeWidth={1.8} />
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-500">
                  {cat.tagline}
                </p>
                <h3 className="mt-2 font-display text-xl font-bold text-ink">
                  {cat.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
                  {cat.blurb}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
                  View Collection
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </motion.div>
        )
      })}
    </div>
  )
}
