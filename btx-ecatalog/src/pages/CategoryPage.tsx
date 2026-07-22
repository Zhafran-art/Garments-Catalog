import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowRight, ChevronRight } from 'lucide-react'
import HeroSection from '../components/HeroSection'
import ProductCarousel from '../components/ProductCarousel'
import ProductCard from '../components/ProductCard'
import Reveal from '../components/Reveal'
import { categories, getCategory, getCategoryCover } from '../data/products'

/**
 * Single reusable page that renders any product category by URL slug.
 * Every category gets: hero, interactive carousel, and a full card grid.
 */
export default function CategoryPage() {
  const { slug } = useParams<{ slug: string }>()
  const category = slug ? getCategory(slug) : undefined

  if (!category) return <Navigate to="/" replace />

  const others = categories.filter((c) => c.slug !== category.slug)

  return (
    <>
      <HeroSection
        variant="page"
        eyebrow={category.tagline}
        title={category.heroTitle}
        subtitle={category.heroSubtitle}
        primaryCta={{ label: 'Request a Quote', to: '/contact' }}
        image={getCategoryCover(category)}
        icon={category.icon}
      />

      {/* Breadcrumb */}
      <div className="border-b border-gray-100 bg-white">
        <div className="container-px flex items-center gap-2 py-4 text-sm text-ink-soft">
          <Link to="/" className="hover:text-brand-700">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="font-semibold text-brand-700">{category.name}</span>
        </div>
      </div>

      {/* Interactive carousel */}
      <section className="section">
        <div className="container-px">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Explore the Range</span>
            <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              {category.name} Collection
            </h2>
            <p className="mt-4 text-base text-ink-soft">
              Browse every {category.name.toLowerCase().replace(/s$/, '')} type in our
              interactive showcase.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="mt-12">
            <ProductCarousel items={category.variants} icon={category.icon} />
          </Reveal>
        </div>
      </section>

      {/* Full card grid */}
      <section className="section bg-gray-50/60">
        <div className="container-px">
          <Reveal className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="eyebrow">Full Selection</span>
              <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
                All {category.name}
              </h2>
            </div>
            <p className="max-w-md text-sm text-ink-soft">
              Each option is available in multiple variations and finishes, and can
              be fully customized to your brand.
            </p>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {category.variants.map((product, i) => (
              <Reveal key={product.name} delay={i * 0.06}>
                <ProductCard product={product} icon={category.icon} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Explore other categories */}
      <section className="section">
        <div className="container-px">
          <Reveal className="mb-10 text-center">
            <h2 className="font-display text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
              Explore Other Categories
            </h2>
          </Reveal>
          <div className="flex flex-wrap justify-center gap-3">
            {others.map((c) => (
              <Link
                key={c.slug}
                to={`/${c.slug}`}
                className="group inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white px-5 py-2.5 text-sm font-semibold text-brand-700 transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:bg-brand-50"
              >
                {c.name}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
