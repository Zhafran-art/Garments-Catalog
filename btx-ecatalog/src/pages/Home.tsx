import { Link } from 'react-router-dom'
import {
  ArrowRight,
  ShieldCheck,
  Lightbulb,
  Factory,
  Globe2,
  Quote,
} from 'lucide-react'
import HeroSection from '../components/HeroSection'
import CategorySection from '../components/CategorySection'
import Reveal from '../components/Reveal'
import { COMPANY } from '../data/products'

const values = [
  {
    icon: ShieldCheck,
    title: 'Uncompromising Quality',
    text: 'Every trim is produced under rigorous quality control to meet international apparel standards.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation-Driven',
    text: 'Continuous material and finishing development keeps your collections ahead of the curve.',
  },
  {
    icon: Factory,
    title: 'Manufacturing Expertise',
    text: 'Two decades of precision manufacturing across buttons, zippers, labels and hardware.',
  },
  {
    icon: Globe2,
    title: 'Global Reliability',
    text: 'Consistent supply and on-time delivery trusted by buyers across 30+ markets.',
  },
]

export default function Home() {
  return (
    <>
      <HeroSection
        eyebrow="PT BTX Garment Trims Indonesia"
        title="Premium Garment Trims Solutions"
        subtitle="PT BTX Garment Trims Indonesia engineers high-quality garment accessories — buttons, zippers, labels, buckles and trims — for apparel brands and manufacturers worldwide."
        primaryCta={{ label: 'Explore Products', to: '/buttons' }}
        secondaryCta={{ label: 'Contact Us', to: '/contact' }}
        icon="Shirt"
      />

      {/* Logo marquee / trust strip */}
      <section className="border-y border-gray-100 bg-gray-50/60 py-8">
        <div className="container-px">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-ink-soft">
            Trusted by apparel manufacturers &amp; brands worldwide
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-60">
            {['Denim Co.', 'Atelier Nord', 'UrbanThread', 'Maison Lux', 'ActiveFit', 'EcoWear'].map(
              (brand) => (
                <span
                  key={brand}
                  className="font-display text-lg font-bold tracking-tight text-ink-soft"
                >
                  {brand}
                </span>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Company introduction */}
      <section className="section">
        <div className="container-px grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow">About BTX</span>
            <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Crafting the details that <span className="text-gradient">complete</span> every
              garment
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink-soft">
              Founded in {COMPANY.founded}, {COMPANY.name} has grown into a trusted
              manufacturer of premium garment trims. We combine precision
              engineering, refined finishing, and dependable supply to help apparel
              brands bring their vision to life — down to the last button.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-soft">
              From everyday production essentials to fully bespoke, branded
              hardware, our catalog is built around quality, innovation, and
              manufacturing expertise that international buyers can rely on.
            </p>
            <Link to="/about" className="btn-outline mt-8">
              Learn more about us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="card h-full p-6 hover:-translate-y-1 hover:shadow-card-hover">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <v.icon className="h-6 w-6" strokeWidth={1.7} />
                  </span>
                  <h3 className="mt-4 font-display text-base font-bold text-ink">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {v.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="section bg-gray-50/60">
        <div className="container-px">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Our Catalog</span>
            <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Featured Product Categories
            </h2>
            <p className="mt-4 text-base text-ink-soft">
              Explore our full range of premium garment trims — each category
              crafted to elevate your apparel.
            </p>
          </Reveal>
          <div className="mt-14">
            <CategorySection />
          </div>
        </div>
      </section>

      {/* Quality / testimonial band */}
      <section className="section">
        <div className="container-px">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-brand-gradient px-8 py-14 text-center text-white shadow-card-hover sm:px-16 sm:py-20">
              <div className="absolute inset-0 grid-bg opacity-20" aria-hidden />
              <Quote className="mx-auto h-10 w-10 text-white/40" />
              <p className="relative mx-auto mt-6 max-w-3xl font-display text-xl font-semibold leading-relaxed sm:text-2xl">
                “BTX delivers the consistency and finish quality we need for our
                international collections. Reliable trims, on time, every season.”
              </p>
              <p className="relative mt-6 text-sm text-white/70">
                Sourcing Director · International Apparel Brand
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="pb-24">
        <div className="container-px">
          <Reveal>
            <div className="flex flex-col items-center justify-between gap-6 rounded-3xl border border-brand-100 bg-brand-50/60 p-10 text-center sm:flex-row sm:text-left">
              <div>
                <h2 className="font-display text-2xl font-extrabold text-ink">
                  Ready to source premium trims?
                </h2>
                <p className="mt-2 text-ink-soft">
                  Browse the catalog or reach out to discuss your requirements.
                </p>
              </div>
              <div className="flex shrink-0 gap-3">
                <Link to="/zippers" className="btn-outline">
                  Explore Products
                </Link>
                <Link to="/contact" className="btn-primary">
                  Contact Us
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
