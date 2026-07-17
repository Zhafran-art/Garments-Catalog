import { Suspense, lazy } from 'react'
import { importGalleryModal } from '../lib/prefetch'
import type { ProductGalleryModalProps } from './ProductGalleryModal'

// The gallery modal (and the portal / animation code it pulls in) is only
// needed once a shopper actually opens a product, so it lives in its own chunk.
// Callers prefetch this chunk on hover (see prefetch()) so the first open still
// feels instant.
const GalleryModal = lazy(importGalleryModal)

/** Drop-in, code-split replacement for <ProductGalleryModal />. */
export default function LazyProductGalleryModal(props: ProductGalleryModalProps) {
  return (
    <Suspense fallback={null}>
      <GalleryModal {...props} />
    </Suspense>
  )
}
