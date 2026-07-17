import { Suspense, lazy, useEffect, type ReactNode } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import PageTransition from './components/PageTransition'
import Home from './pages/Home'
import {
  importAboutPage,
  importCategoryPage,
  importContactPage,
  onIdle,
  prefetch,
} from './lib/prefetch'

// The landing page (Home) ships in the initial bundle so first paint is
// immediate. Every other route is code-split and only downloaded when needed,
// then quietly warmed on idle so navigation still feels instant.
const About = lazy(importAboutPage)
const Contact = lazy(importContactPage)
const CategoryPage = lazy(importCategoryPage)

/**
 * Suspense placeholder for a route whose chunk hasn't loaded yet. Reserves
 * viewport height so the footer doesn't jump while a (usually already
 * prefetched) chunk resolves. Kept intentionally blank — the surrounding
 * PageTransition provides the entrance animation.
 */
function RouteFallback() {
  return <div className="min-h-screen" aria-hidden />
}

/** Route element wrapper: keeps the page-transition animation synchronous while
 *  the lazy page chunk streams in behind its own Suspense boundary. */
function LazyRoute({ children }: { children: ReactNode }) {
  return (
    <PageTransition>
      <Suspense fallback={<RouteFallback />}>{children}</Suspense>
    </PageTransition>
  )
}

export default function App() {
  const location = useLocation()

  // Warm the off-route chunks during idle time so the first navigation to any
  // page resolves instantly (no Suspense flash, exit animations preserved).
  useEffect(() => {
    onIdle(() => {
      prefetch(importCategoryPage)
      prefetch(importAboutPage)
      prefetch(importContactPage)
    })
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Navbar />
      <div className="flex-1">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageTransition>
                  <Home />
                </PageTransition>
              }
            />
            <Route
              path="/about"
              element={
                <LazyRoute>
                  <About />
                </LazyRoute>
              }
            />
            <Route
              path="/contact"
              element={
                <LazyRoute>
                  <Contact />
                </LazyRoute>
              }
            />
            {/* Single reusable page handles every product category by slug */}
            <Route
              path="/:slug"
              element={
                <LazyRoute>
                  <CategoryPage />
                </LazyRoute>
              }
            />
          </Routes>
        </AnimatePresence>
      </div>
      <Footer />
    </div>
  )
}
