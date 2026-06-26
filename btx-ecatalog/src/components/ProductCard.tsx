import { motion } from 'framer-motion'
import { Layers, Tag, Boxes } from 'lucide-react'
import type { ProductVariant } from '../data/products'
import PlaceholderImage from './PlaceholderImage'

interface ProductCardProps {
  product: ProductVariant
  icon?: string
}

/**
 * Catalog card showing image, name, material, variations and applications.
 * No price / cart — this is an e-catalog, not a store.
 */
export default function ProductCard({ product, icon = 'Image' }: ProductCardProps) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      className="card group flex h-full flex-col overflow-hidden hover:border-brand-200 hover:shadow-card-hover"
    >
      {/* Image with zoom-on-hover */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <div className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-110">
          <PlaceholderImage
            src={product.image}
            alt={product.name}
            icon={icon}
            label={product.name}
          />
        </div>
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-brand-700 shadow-sm backdrop-blur">
          {product.material}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-bold text-ink">{product.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft">
          {product.description}
        </p>

        <div className="mt-5 space-y-4 border-t border-gray-100 pt-5">
          <div className="flex items-start gap-2.5">
            <Tag className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft">
                Material
              </p>
              <p className="text-sm text-ink">{product.material}</p>
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <Layers className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft">
                Variations
              </p>
              <div className="mt-1.5 flex flex-wrap gap-1.5">
                {product.variations.map((v) => (
                  <span
                    key={v}
                    className="rounded-md bg-brand-50 px-2 py-0.5 text-xs font-medium text-brand-700"
                  >
                    {v}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <Boxes className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft">
                Applications
              </p>
              <p className="text-sm text-ink">{product.applications.join(' · ')}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  )
}
