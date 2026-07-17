// ---------------------------------------------------------------------------
// Chunk prefetching helpers
// ---------------------------------------------------------------------------
// Centralizes the dynamic imports for code-split routes and the gallery modal
// so their JS chunks can be warmed ahead of time — during browser idle time
// after first paint, or on hover/focus just before the user navigates. Because
// the module graph is cached, prefetching means navigation and opening the
// gallery feel instant instead of triggering a Suspense fallback.
// ---------------------------------------------------------------------------

type Importer = () => Promise<unknown>

// Dynamic importers are declared once and shared between React.lazy() and the
// prefetchers below, so warming and rendering resolve to the exact same chunk.
export const importAboutPage = () => import('../pages/About')
export const importContactPage = () => import('../pages/Contact')
export const importCategoryPage = () => import('../pages/CategoryPage')
export const importGalleryModal = () => import('../components/ProductGalleryModal')

const warmed = new WeakSet<Importer>()

/** Kick off a dynamic import at most once; failures are allowed to retry later. */
export function prefetch(importer: Importer): void {
  if (warmed.has(importer)) return
  warmed.add(importer)
  importer().catch(() => warmed.delete(importer))
}

/** Run non-critical work when the browser is idle (with a graceful fallback). */
export function onIdle(cb: () => void): void {
  if (typeof window === 'undefined') return
  const ric = window.requestIdleCallback
  if (typeof ric === 'function') ric(cb, { timeout: 2000 })
  else window.setTimeout(cb, 200)
}
