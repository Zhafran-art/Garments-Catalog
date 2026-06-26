import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, Menu, X } from 'lucide-react'
import Logo from './Logo'
import { categories } from '../data/products'
import { getIcon } from './icons'

const simpleLinks = [
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false)
  const location = useLocation()
  const dropdownRef = useRef<HTMLLIElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menus on route change
  useEffect(() => {
    setOpen(false)
    setProductsOpen(false)
    setMobileProductsOpen(false)
  }, [location.pathname])

  // Close desktop dropdown on outside click
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProductsOpen(false)
      }
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [])

  const onProductsPage = categories.some((c) => location.pathname === `/${c.slug}`)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-gray-100 bg-white/80 shadow-[0_8px_30px_-12px_rgba(95,43,134,0.15)] backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-px flex h-20 items-center justify-between py-3">
        <Link to="/" aria-label="Home" className="shrink-0">
          <Logo />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-0.5 lg:flex">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive ? 'text-brand-700' : 'text-ink-soft hover:text-brand-700'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  Home
                  {isActive && <ActivePill />}
                </>
              )}
            </NavLink>
          </li>

          {/* Products dropdown */}
          <li className="relative" ref={dropdownRef}>
            <button
              onClick={() => setProductsOpen((v) => !v)}
              className={`relative flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-200 ${
                onProductsPage || productsOpen
                  ? 'text-brand-700'
                  : 'text-ink-soft hover:text-brand-700'
              }`}
              aria-expanded={productsOpen}
            >
              Products
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-300 ${
                  productsOpen ? 'rotate-180' : ''
                }`}
              />
              {onProductsPage && <ActivePill />}
            </button>

            <AnimatePresence>
              {productsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.98 }}
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute left-1/2 top-full mt-3 w-[34rem] -translate-x-1/2 rounded-2xl border border-gray-100 bg-white p-3 shadow-card-hover"
                >
                  <div className="grid grid-cols-2 gap-1">
                    {categories.map((cat) => {
                      const Icon = getIcon(cat.icon)
                      return (
                        <NavLink
                          key={cat.slug}
                          to={`/${cat.slug}`}
                          className={({ isActive }) =>
                            `group flex items-start gap-3 rounded-xl p-3 transition-colors ${
                              isActive ? 'bg-brand-50' : 'hover:bg-gray-50'
                            }`
                          }
                        >
                          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-100">
                            <Icon className="h-4.5 w-4.5" strokeWidth={1.8} />
                          </span>
                          <span>
                            <span className="block text-sm font-semibold text-ink">
                              {cat.name}
                            </span>
                            <span className="block text-xs text-ink-soft">
                              {cat.tagline}
                            </span>
                          </span>
                        </NavLink>
                      )
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>

          {simpleLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive ? 'text-brand-700' : 'text-ink-soft hover:text-brand-700'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive && <ActivePill />}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Link to="/contact" className="btn-primary !px-5 !py-2.5">
            Request a Quote
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-100 bg-white text-brand-700 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="max-h-[80vh] overflow-y-auto border-t border-gray-100 bg-white lg:hidden"
          >
            <ul className="container-px flex flex-col gap-1 py-4">
              <li>
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) =>
                    `block rounded-xl px-4 py-3 text-base font-medium ${
                      isActive ? 'bg-brand-50 text-brand-700' : 'text-ink-soft hover:bg-gray-50'
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>

              {/* Mobile collapsible products */}
              <li>
                <button
                  onClick={() => setMobileProductsOpen((v) => !v)}
                  className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-base font-medium text-ink-soft hover:bg-gray-50"
                  aria-expanded={mobileProductsOpen}
                >
                  Products
                  <ChevronDown
                    className={`h-5 w-5 transition-transform duration-300 ${
                      mobileProductsOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {mobileProductsOpen && (
                    <motion.ul
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden pl-2"
                    >
                      {categories.map((cat) => {
                        const Icon = getIcon(cat.icon)
                        return (
                          <li key={cat.slug}>
                            <NavLink
                              to={`/${cat.slug}`}
                              className={({ isActive }) =>
                                `flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium ${
                                  isActive
                                    ? 'bg-brand-50 text-brand-700'
                                    : 'text-ink-soft hover:bg-gray-50'
                                }`
                              }
                            >
                              <Icon className="h-4.5 w-4.5 text-brand-500" strokeWidth={1.8} />
                              {cat.name}
                            </NavLink>
                          </li>
                        )
                      })}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>

              {simpleLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `block rounded-xl px-4 py-3 text-base font-medium ${
                        isActive
                          ? 'bg-brand-50 text-brand-700'
                          : 'text-ink-soft hover:bg-gray-50'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
              <li className="mt-2">
                <Link to="/contact" className="btn-primary w-full">
                  Request a Quote
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

function ActivePill() {
  return (
    <motion.span
      layoutId="nav-pill"
      className="absolute inset-0 -z-10 rounded-full bg-brand-50"
      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
    />
  )
}
