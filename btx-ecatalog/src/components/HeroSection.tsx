import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, BadgeCheck, Sparkles } from 'lucide-react'
import PlaceholderImage from './PlaceholderImage'

interface HeroSectionProps {
  eyebrow?: string
  title: string
  subtitle: string
  /** Primary CTA */
  primaryCta?: { label: string; to: string }
  /** Secondary CTA */
  secondaryCta?: { label: string; to: string }
  image?: string
  icon?: string
  /** Compact variant used on inner category pages */
  variant?: 'home' | 'page'
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

export default function HeroSection({
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  image,
  icon = 'Sparkles',
  variant = 'home',
}: HeroSectionProps) {
  const Sparkle = Sparkles
  const isHome = variant === 'home'

  return (
    <section
      className={`relative overflow-hidden bg-brand-radial ${
        isHome ? 'pt-32 pb-20 sm:pt-36 lg:pt-40' : 'pt-32 pb-16 sm:pt-36'
      }`}
    >
      <div className="absolute inset-0 grid-bg opacity-50" aria-hidden />
      <div
        className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-brand-200/40 blur-3xl"
        aria-hidden
      />

      <div className="container-px relative">
        <div
          className={`grid items-center gap-12 ${
            isHome ? 'lg:grid-cols-2 lg:gap-16' : 'lg:grid-cols-[1.1fr_0.9fr]'
          }`}
        >
          <motion.div variants={container} initial="hidden" animate="show">
            {eyebrow && (
              <motion.span variants={item} className="eyebrow">
                <Sparkle className="h-3.5 w-3.5" />
                {eyebrow}
              </motion.span>
            )}
            <motion.h1
              variants={item}
              className={`mt-5 font-display font-extrabold tracking-tight text-ink ${
                isHome
                  ? 'text-4xl sm:text-5xl lg:text-6xl'
                  : 'text-3xl sm:text-4xl lg:text-5xl'
              }`}
            >
              {title.split(' ').map((word, i) =>
                i === 1 ? (
                  <span key={i} className="text-gradient">
                    {word}{' '}
                  </span>
                ) : (
                  <span key={i}>{word} </span>
                ),
              )}
            </motion.h1>
            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg"
            >
              {subtitle}
            </motion.p>

            {(primaryCta || secondaryCta) && (
              <motion.div variants={item} className="mt-9 flex flex-wrap gap-4">
                {primaryCta && (
                  <Link to={primaryCta.to} className="btn-primary">
                    {primaryCta.label}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                )}
                {secondaryCta && (
                  <Link to={secondaryCta.to} className="btn-outline">
                    {secondaryCta.label}
                  </Link>
                )}
              </motion.div>
            )}

            {isHome && (
              <motion.div
                variants={item}
                className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-gray-100 pt-8"
              >
                {[
                  { value: '20+', label: 'Years Expertise' },
                  { value: '500+', label: 'Trim Variations' },
                  { value: '30+', label: 'Export Markets' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="font-display text-2xl font-extrabold text-brand-700 sm:text-3xl">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs text-ink-soft">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
            )}
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white shadow-card-hover">
              <PlaceholderImage
                src={image}
                alt={title}
                icon={icon}
                label="Premium Garment Trims"
              />
            </div>
            {/* floating accent card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-6 -left-4 hidden rounded-2xl border border-gray-100 bg-white/90 p-4 shadow-card backdrop-blur sm:block"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <BadgeCheck className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">Quality Assured</p>
                  <p className="text-xs text-ink-soft">Export-grade trims</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
