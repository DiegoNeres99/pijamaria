import { useRef } from 'react'
import { products, catalogSections } from '../data/products'
import type { CatalogSection } from '../data/products'
import ProductCard from './ProductCard'

// paleta por categoria
const sectionTheme: Record<string, {
  ghost: string
  pill: string
  pillText: string
  line: string
  dot: string
}> = {
  Inverno: {
    ghost: 'text-violet-100',
    pill: 'bg-violet-50 text-violet-500 ring-1 ring-violet-200',
    pillText: 'Coleção',
    line: 'from-violet-200 via-rose-200 to-transparent',
    dot: 'bg-violet-300',
  },
  Verão: {
    ghost: 'text-amber-100',
    pill: 'bg-amber-50 text-amber-600 ring-1 ring-amber-200',
    pillText: 'Novidades',
    line: 'from-amber-200 via-rose-200 to-transparent',
    dot: 'bg-amber-400',
  },
  Feminino: {
    ghost: 'text-rose-100',
    pill: 'bg-rose-50 text-rose-400 ring-1 ring-rose-200',
    pillText: 'Sempre em alta',
    line: 'from-rose-200 via-pink-200 to-transparent',
    dot: 'bg-rose-300',
  },
}

// ── Cabeçalho editorial de cada seção ──────────────────────
function SectionHeader({ section }: { section: CatalogSection }) {
  const t = sectionTheme[section.category] ?? sectionTheme['Feminino']

  return (
    <div className="relative mb-10 mt-2 overflow-hidden">
      {/* Texto fantasma decorativo */}
      <span
        aria-hidden
        className={`absolute -top-3 left-0 text-[clamp(4.5rem,14vw,9rem)] font-black uppercase leading-none
          select-none pointer-events-none ${t.ghost} opacity-80 tracking-tight`}
      >
        {section.category}
      </span>

      {/* Conteúdo principal */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-end gap-3 sm:gap-6 pt-6 pb-1">
        <div className="flex flex-col gap-2">
          <span className={`self-start text-[10px] uppercase tracking-[0.22em] font-bold px-3 py-1 rounded-full ${t.pill}`}>
            {t.pillText}
          </span>
          <h3 className="font-serif font-bold text-stone-800 text-3xl sm:text-4xl leading-tight">
            {section.title}
          </h3>
          {section.subtitle && (
            <p className="text-stone-400 text-sm font-light">{section.subtitle}</p>
          )}
        </div>

        {/* Linha decorativa */}
        <div className="flex-1 flex items-center gap-2 pb-1 hidden sm:flex">
          <div className={`h-px flex-1 bg-gradient-to-r ${t.line}`} />
          <span className={`w-1.5 h-1.5 rounded-full ${t.dot} opacity-60`} />
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
      <SectionHeader section={section} />

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
      <div className="flex items-center gap-4 mt-16 mb-16">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent to-stone-200" />
        <span className="text-stone-300 text-[10px] tracking-[0.3em] uppercase font-medium">✦</span>
        <div className="flex-1 h-px bg-gradient-to-l from-transparent to-stone-200" />
      </div>
    </div>
  )
}

export default function Catalog() {
  return (
    <section id="catalogo" className="w-full py-20 bg-white">
      <div className="w-full px-6 sm:px-10 lg:px-20">

        {/* Título principal */}
        <div className="relative text-center mb-20 overflow-hidden">
          {/* Blob decorativo de fundo */}
          <div
            aria-hidden
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <div className="w-[32rem] h-40 rounded-full bg-rose-50 blur-3xl opacity-70" />
          </div>

          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] font-bold text-rose-400 mb-3">
              <span className="w-6 h-px bg-rose-300" />
              Nossos Produtos
              <span className="w-6 h-px bg-rose-300" />
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-800 leading-tight">
              Catálogo
            </h2>
            <p className="text-stone-400 max-w-lg mx-auto text-base mt-4 leading-relaxed">
              Cada peça pensada para te deixar confortável, delicada e aconchegante em qualquer momento.
            </p>
          </div>
        </div>

        {catalogSections.map((section) => (
          <CategoryCarousel key={section.category} section={section} />
        ))}
      </div>
    </section>
  )
}
