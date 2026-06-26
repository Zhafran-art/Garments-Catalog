import { Link } from 'react-router-dom'
import {
  ArrowRight,
  ShieldCheck,
  Cog,
  Recycle,
  Award,
  Users,
  Target,
} from 'lucide-react'
import HeroSection from '../components/HeroSection'
import Reveal from '../components/Reveal'
import PlaceholderImage from '../components/PlaceholderImage'
import { COMPANY } from '../data/products'

const milestones = [
  { year: '2005', title: 'Founded', text: 'BTX begins manufacturing garment trims in Indonesia.' },
  { year: '2012', title: 'Export Growth', text: 'Expanded supply to international apparel markets.' },
  { year: '2018', title: 'Capacity Scale-Up', text: 'New facilities and broadened product range.' },
  { year: 'Today', title: 'Trusted Partner', text: 'Serving 30+ markets with premium trims.' },
]

const capabilities = [
  { icon: Cog, title: 'Precision Manufacturing', text: 'Modern machinery and tight tolerances across every product line.' },
  { icon: ShieldCheck, title: 'Quality Control', text: 'Multi-stage inspection ensures export-grade consistency.' },
  { icon: Recycle, title: 'Responsible Sourcing', text: 'Eco-conscious material options and sustainable practices.' },
  { icon: Award, title: 'Compliance Ready', text: 'Trims that meet international apparel and safety standards.' },
  { icon: Users, title: 'Dedicated Support', text: 'Experienced team guiding you from sample to bulk production.' },
  { icon: Target, title: 'Custom Development', text: 'Bespoke trims engineered to your exact brand specification.' },
]

export default function About() {
  return (
    <>
      <HeroSection
        variant="page"
        eyebrow="About Us"
        title="Manufacturing Excellence in Garment Trims"
        subtitle={`${COMPANY.name} is a premium manufacturer of garment accessories, combining two decades of expertise with a commitment to quality, innovation, and reliable global supply.`}
        primaryCta={{ label: 'Contact Our Team', to: '/contact' }}
        icon="Factory"
      />

      {/* Company profile */}
      <section className="section">
        <div className="container-px grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white shadow-card-hover">
              <PlaceholderImage alt="BTX manufacturing facility" icon="Factory" label="Our Facility" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="eyebrow">Company Profile</span>
            <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Two decades of trims expertise
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink-soft">
              Since {COMPANY.founded}, {COMPANY.name} has specialized in producing
              high-quality buttons, zippers, labels, buckles, and accessories for
              the global apparel industry. Our integrated manufacturing approach
              gives us full control over quality, lead times, and customization.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-soft">
              We partner with brands and manufacturers who value precision,
              consistency, and dependable service — delivering the finishing
              details that define a finished garment.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6 border-t border-gray-100 pt-8">
              {[
                { value: '20+', label: 'Years' },
                { value: '500+', label: 'Variations' },
                { value: '30+', label: 'Markets' },
              ].map((s) => (
                <div key={s.label}>
                  <p className="font-display text-3xl font-extrabold text-brand-700">
                    {s.value}
                  </p>
                  <p className="mt-1 text-xs text-ink-soft">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section bg-gray-50/60">
        <div className="container-px">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Our Expertise</span>
            <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Manufacturing &amp; Quality Capabilities
            </h2>
            <p className="mt-4 text-base text-ink-soft">
              An end-to-end capability set built for demanding international buyers.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.06}>
                <div className="card h-full p-7 hover:-translate-y-1 hover:shadow-card-hover">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <c.icon className="h-6 w-6" strokeWidth={1.7} />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold text-ink">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {c.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section">
        <div className="container-px">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Our Journey</span>
            <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Industry Experience
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {milestones.map((m, i) => (
              <Reveal key={m.year} delay={i * 0.08}>
                <div className="relative h-full rounded-2xl border border-gray-100 bg-white p-6 shadow-card">
                  <span className="font-display text-2xl font-extrabold text-gradient">
                    {m.year}
                  </span>
                  <h3 className="mt-3 font-display text-base font-bold text-ink">
                    {m.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {m.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quality commitment CTA */}
      <section className="pb-24">
        <div className="container-px">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-brand-gradient px-8 py-14 text-white shadow-card-hover sm:px-16">
              <div className="absolute inset-0 grid-bg opacity-20" aria-hidden />
              <div className="relative flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
                <div className="max-w-2xl">
                  <h2 className="font-display text-2xl font-extrabold sm:text-3xl">
                    Our commitment to quality
                  </h2>
                  <p className="mt-3 text-white/80">
                    Every order is backed by rigorous quality assurance and a team
                    dedicated to getting the details right — season after season.
                  </p>
                </div>
                <Link
                  to="/contact"
                  className="btn shrink-0 bg-white text-brand-700 hover:-translate-y-0.5"
                >
                  Work With Us
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
