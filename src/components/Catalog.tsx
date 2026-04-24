// ============================================================
// Catalog - Banners promocionais + seções tituladas com carrossel
// ============================================================

import { useRef } from 'react'
import { products, catalogSections } from '../data/products'
import type { CatalogSection, CatalogBanner } from '../data/products'
import ProductCard from './ProductCard'

// ── Banner promocional full-width entre seções ─────────────
function PromoBanner({ b }: { b: CatalogBanner }) {
  return (
    <div className={`w-full rounded-2xl overflow-hidden mb-10 ${b.bg}`}>
      <div className="flex flex-col sm:flex-row items-center justify-between px-8 sm:px-14 py-10 sm:py-12 gap-6">
        {/* Texto */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <span className={`text-xs uppercase tracking-widest font-medium mb-1 opacity-80 ${b.textColor}`}>
            {b.tag}
          </span>
          <div className="flex items-baseline gap-3 flex-wrap justify-center sm:justify-start">
            <span className={`font-sans text-3xl sm:text-4xl font-light ${b.textColor}`}>{b.title}</span>
            <span className={`font-serif text-5xl sm:text-7xl font-bold italic leading-none ${b.accentColor}`}>
              {b.highlight}
            </span>
          </div>
          <p className={`text-sm mt-2 opacity-70 ${b.textColor}`}>estilo e conforto</p>
        </div>

        {/* Decoração central */}
        <div className="hidden sm:flex flex-col items-center opacity-20">
          <div className="w-px h-24 bg-white" />
          <span className="text-white text-4xl mt-2">✦</span>
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center gap-3">
          <a
            href={b.ctaHref}
            className={`px-8 py-3 rounded-full font-semibold text-sm transition-all shadow-md ${b.btnClass}`}
          >
            {b.cta}
          </a>
        </div>
      </div>
    </div>
  )
}

// ── Carrossel individual por categoria ──────────────────────
function CategoryCarousel({ section }: { section: CatalogSection }) {
  const scrollRef = useRef<HTMLDivElement>(null)

  const sectionProducts = products.filter((p) => p.category === section.category)
  if (sectionProducts.length === 0) return null

  function scroll(direction: 'left' | 'right') {
    if (!scrollRef.current) return
    const amount = scrollRef.current.clientWidth * 0.8
    scrollRef.current.scrollBy({ left: direction === 'left' ? -amount : amount, behavior: 'smooth' })
  }

  return (
    <div className="mb-4">
      {/* Banner antes da seção */}
      {section.banner && <PromoBanner b={section.banner} />}

      {/* Título da seção */}
      <div className="text-center mb-8">
        <h3 className="font-serif font-bold text-stone-800 text-xl sm:text-2xl tracking-wider uppercase">
          {section.title}
        </h3>
        {/* Linha decorativa com gradiente */}
        <div className="flex items-center justify-center gap-2 mt-2 mb-1">
          <div className="h-px w-10 bg-gradient-to-r from-transparent to-rose-400" />
          <span className="text-rose-300 text-xs">✦</span>
          <div className="h-px w-10 bg-gradient-to-l from-transparent to-rose-400" />
        </div>
        {section.subtitle && (
          <p className="text-stone-400 text-sm mt-1 italic">{section.subtitle}</p>
        )}
      </div>

      {/* Carrossel */}
      <div className="relative group/carousel">
        <button
          onClick={() => scroll('left')}
          aria-label={`Anterior - ${section.title}`}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 z-10 w-10 h-10 bg-white hover:bg-rose-50 border border-stone-200 rounded-full shadow-lg flex items-center justify-center transition-all opacity-0 group-hover/carousel:opacity-100 focus:opacity-100"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scroll-smooth pb-3"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {sectionProducts.map((product) => (
            <div key={product.id} className="flex-none w-[220px] sm:w-[250px] lg:w-[260px]">
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll('right')}
          aria-label={`Próximo - ${section.title}`}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 z-10 w-10 h-10 bg-white hover:bg-rose-50 border border-stone-200 rounded-full shadow-lg flex items-center justify-center transition-all opacity-0 group-hover/carousel:opacity-100 focus:opacity-100"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      <p className="text-center text-stone-400 text-xs mt-3 sm:hidden">← Deslize para ver mais →</p>

      {/* Divisor entre seções */}
      <div className="border-b border-stone-100 mt-14 mb-14" />
    </div>
  )
}

export default function Catalog() {
  return (
    <section id="catalogo" className="w-full py-20 bg-white">
      <div className="w-full px-6 sm:px-10 lg:px-20">

        {/* Título principal */}
        <div className="text-center mb-14">
          <span className="text-rose-300 text-xs tracking-widest uppercase font-medium">
            — Nossos produtos —
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-800 mt-2 mb-4">
            Catálogo
          </h2>
          <p className="text-stone-500 max-w-xl mx-auto text-base sm:text-lg">
            Cada peça pensada para te deixar confortável, delicada e aconchegante em qualquer momento.
          </p>
        </div>

        {catalogSections.map((section) => (
          <CategoryCarousel key={section.category} section={section} />
        ))}
      </div>
    </section>
  )
}
