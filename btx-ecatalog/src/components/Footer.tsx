import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone, Linkedin, Instagram, Facebook } from 'lucide-react'
import Logo from './Logo'
import { categories, COMPANY } from '../data/products'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative overflow-hidden bg-brand-950 text-white">
      <div className="absolute inset-0 bg-brand-radial opacity-40" aria-hidden />
      <div className="container-px relative grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <Logo variant="light" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
            Premium garment trims and accessories, engineered in Indonesia for
            apparel brands and manufacturers worldwide.
          </p>
          <div className="mt-6 flex gap-3">
            {[Linkedin, Instagram, Facebook].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social media"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all hover:border-white/40 hover:bg-white/10 hover:text-white"
              >
                <Icon className="h-4.5 w-4.5" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/50">
            Products
          </h4>
          <ul className="mt-5 space-y-3">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link
                  to={`/${c.slug}`}
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/50">
            Company
          </h4>
          <ul className="mt-5 space-y-3">
            {[
              { to: '/about', label: 'About Us' },
              { to: '/contact', label: 'Contact' },
              { to: '/', label: 'Home' },
            ].map((l) => (
              <li key={l.label}>
                <Link
                  to={l.to}
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/50">
            Get in Touch
          </h4>
          <ul className="mt-5 space-y-4 text-sm text-white/70">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4.5 w-4.5 shrink-0 text-brand-300" />
              <span>{COMPANY.address}</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4.5 w-4.5 shrink-0 text-brand-300" />
              <a href={`tel:${COMPANY.phone}`} className="hover:text-white">
                {COMPANY.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4.5 w-4.5 shrink-0 text-brand-300" />
              <a href={`mailto:${COMPANY.email}`} className="hover:text-white">
                {COMPANY.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-px relative flex flex-col items-center justify-between gap-3 border-t border-white/10 py-6 text-xs text-white/50 sm:flex-row">
        <p>
          © {year} {COMPANY.name}. All rights reserved.
        </p>
        <p>Premium garment trims · E-Catalog</p>
      </div>
    </footer>
  )
}
