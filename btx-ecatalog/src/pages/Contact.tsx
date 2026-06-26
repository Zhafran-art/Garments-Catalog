import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Linkedin,
  Instagram,
  Facebook,
} from 'lucide-react'
import HeroSection from '../components/HeroSection'
import Reveal from '../components/Reveal'
import { categories, COMPANY } from '../data/products'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Frontend-only demo: no backend. Show a success state.
    setSent(true)
    e.currentTarget.reset()
    setTimeout(() => setSent(false), 5000)
  }

  const info = [
    { icon: MapPin, label: 'Address', value: COMPANY.address },
    { icon: Phone, label: 'Phone', value: COMPANY.phone, href: `tel:${COMPANY.phone}` },
    { icon: Mail, label: 'Email', value: COMPANY.email, href: `mailto:${COMPANY.email}` },
    { icon: Clock, label: 'Hours', value: 'Mon – Fri · 09:00 – 17:00 WIB' },
  ]

  return (
    <>
      <HeroSection
        variant="page"
        eyebrow="Contact Us"
        title="Let's Build Together"
        subtitle="Have a project, sample request, or sourcing question? Our team is ready to help you find the right garment trims for your collection."
        icon="MessageSquare"
      />

      <section className="section">
        <div className="container-px grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          {/* Info column */}
          <Reveal className="space-y-6">
            <div>
              <span className="eyebrow">Get in Touch</span>
              <h2 className="mt-5 font-display text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
                Company Information
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink-soft">
                Reach out through any channel below — we typically respond within one
                business day.
              </p>
            </div>

            <div className="space-y-4">
              {info.map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-card transition-all hover:border-brand-200"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm font-medium text-ink hover:text-brand-700"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-ink">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft">
                Follow Us
              </p>
              <div className="mt-3 flex gap-3">
                {[Linkedin, Instagram, Facebook].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    aria-label="Social media"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-100 text-brand-700 transition-all hover:-translate-y-0.5 hover:bg-brand-50"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Form column */}
          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-gray-100 bg-white p-7 shadow-card sm:p-9">
              <h3 className="font-display text-xl font-bold text-ink">
                Send us a message
              </h3>
              <p className="mt-2 text-sm text-ink-soft">
                Tell us about your requirements and we'll get back to you.
              </p>

              <form onSubmit={handleSubmit} className="mt-7 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Full Name" name="name" placeholder="Your name" required />
                  <Field
                    label="Company"
                    name="company"
                    placeholder="Company name"
                  />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    required
                  />
                  <Field label="Phone" name="phone" placeholder="+62 ..." />
                </div>

                <div>
                  <label
                    htmlFor="interest"
                    className="mb-1.5 block text-sm font-semibold text-ink"
                  >
                    Product Interest
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
                  >
                    <option value="">Select a category</option>
                    {categories.map((c) => (
                      <option key={c.slug} value={c.slug}>
                        {c.name}
                      </option>
                    ))}
                    <option value="other">Other / Multiple</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-semibold text-ink"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Describe your project or request..."
                    className="w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary w-full"
                >
                  {sent ? (
                    <>
                      <CheckCircle2 className="h-4 w-4" />
                      Message Sent
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </motion.button>

                {sent && (
                  <motion.p
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-xl bg-brand-50 px-4 py-3 text-center text-sm font-medium text-brand-700"
                  >
                    Thank you! This is a demo form — connect it to your backend or
                    email service to receive submissions.
                  </motion.p>
                )}
              </form>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Location / map placeholder */}
      <section className="pb-24">
        <div className="container-px">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-gray-100 shadow-card">
              <div className="relative flex aspect-[21/9] items-center justify-center bg-gradient-to-br from-brand-100 via-brand-50 to-white">
                <div className="absolute inset-0 grid-bg opacity-60" aria-hidden />
                <div className="relative text-center">
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-brand-600 shadow-card">
                    <MapPin className="h-7 w-7" />
                  </span>
                  <p className="mt-4 font-display text-lg font-bold text-ink">
                    {COMPANY.address}
                  </p>
                  <p className="mt-1 text-sm text-ink-soft">
                    Map placeholder — embed Google Maps here
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}

function Field({
  label,
  name,
  type = 'text',
  placeholder,
  required,
}: {
  label: string
  name: string
  type?: string
  placeholder?: string
  required?: boolean
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-semibold text-ink">
        {label}
        {required && <span className="text-brand-500"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-gray-400 focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
      />
    </div>
  )
}
