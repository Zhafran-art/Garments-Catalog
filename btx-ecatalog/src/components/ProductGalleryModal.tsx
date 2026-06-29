import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { X, Tag } from 'lucide-react'
import type { ProductVariant } from '../data/products'
import PlaceholderImage from './PlaceholderImage'

interface ProductGalleryModalProps {
  /** When non-null the modal is open and shows this product's variations */
  product: ProductVariant | null
  icon?: string
  onClose: () => void
}

/**
 * Pop-out gallery: clicking a product image opens this modal, which lays out
 * every variation of the product as a grid of image squares (up to 6 per row).
 * Shared by the carousel and product cards, so it works for every category.
 *
 * Rendered through a portal to document.body so the fixed overlay always fills
 * the viewport — escaping any transformed ancestor (e.g. Framer Motion reveal
 * wrappers) that would otherwise trap a position:fixed element in its box.
 *
 * Each square currently shows a branded placeholder labelled with the variation
 * name; assign real images per variation later by extending the data layer.
 */
export default function ProductGalleryModal({
  product,
  icon = 'Image',
  onClose,
}: ProductGalleryModalProps) {
  // Close on Escape + lock background scroll while open
  useEffect(() => {
    if (!product) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [product, onClose])

  // Prefer real photos (gallery) when available; otherwise fall back to the
  // generic variation labels (which render as branded placeholders).
  const tiles =
    product?.gallery ??
    product?.variations.map((v) => ({ label: v, image: '' })) ??
    []

  const overlay = (
    <AnimatePresence>
      {product && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto p-4 sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`${product.name} variations`}
        >
          {/* Backdrop */}
          <div className="fixed inset-0 bg-brand-950/60 backdrop-blur-sm" />

          {/* Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 12 }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative z-10 my-auto flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl bg-white shadow-card-hover"
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-4 border-b border-gray-100 p-5 sm:p-7">
              <div className="min-w-0">
                <span className="eyebrow">
                  <Tag className="h-3.5 w-3.5" />
                  {product.material}
                </span>
                <h3 className="mt-3 font-display text-xl font-extrabold text-ink sm:text-2xl">
                  {product.name}
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-soft">
                  {product.description}
                </p>
              </div>
              <button
                onClick={onClose}
                aria-label="Close gallery"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-100 text-ink-soft transition-all hover:bg-brand-50 hover:text-brand-700"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Gallery grid */}
            <div className="overflow-y-auto p-5 sm:p-7">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-ink-soft">
                {tiles.length} {product.gallery ? 'designs' : 'variations'}
              </p>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-5">
                {tiles.map((tile, i) => (
                  <motion.div
                    key={tile.label}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: Math.min(i, 12) * 0.04, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-card-hover"
                  >
                    <div className="aspect-square w-full overflow-hidden">
                      <div className="h-full w-full transition-transform duration-500 ease-out group-hover:scale-110">
                        <PlaceholderImage
                          src={tile.image}
                          alt={`${product.name} — ${tile.label}`}
                          icon={icon}
                          label={tile.label}
                        />
                      </div>
                    </div>
                    <div className="flex flex-1 items-center justify-center p-3 text-center">
                      <p className="text-sm font-semibold leading-tight text-ink">
                        {tile.label}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Applications */}
              <div className="mt-7 border-t border-gray-100 pt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-soft">
                  Typical applications
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {product.applications.map((app) => (
                    <span
                      key={app}
                      className="rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )

  return createPortal(overlay, document.body)
}
