// ============================================================
// ProductCard - Card de produto estilo catálogo com avaliação,
// preço riscado, desconto e botão direto no WhatsApp
// ⚙️ Troque WHATSAPP_NUMBER pelo número real
// ============================================================

import { useEffect, useRef, useState } from 'react'
import type { Product } from '../data/products'

const WHATSAPP_NUMBER = '+554396927336' // ⚙️ Número real aqui

interface ProductCardProps {
  product: Product
}

// Renderiza estrelas preenchidas/vazias
function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`Avaliação: ${rating} de 5`}>
      {[1, 2, 3, 4, 5].map((star) => {
        const filled = rating >= star
        const half = !filled && rating >= star - 0.5
        return (
          <svg key={star} width="14" height="14" viewBox="0 0 24 24" className="flex-shrink-0">
            {half ? (
              <>
                <defs>
                  <linearGradient id={`half-${star}`}>
                    <stop offset="50%" stopColor="#c6973f" />
                    <stop offset="50%" stopColor="#d1d5db" />
                  </linearGradient>
                </defs>
                <path
                  fill={`url(#half-${star})`}
                  d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                />
              </>
            ) : (
              <path
                fill={filled ? '#c6973f' : '#d1d5db'}
                d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
              />
            )}
          </svg>
        )
      })}
    </div>
  )
}

export default function ProductCard({ product }: ProductCardProps) {
  const photos = product.images && product.images.length > 0 ? product.images : [product.image]
  const cardRef = useRef<HTMLDivElement>(null)
  const [current, setCurrent] = useState(0)
  const [shouldPreload, setShouldPreload] = useState(false)

  useEffect(() => {
    const el = cardRef.current
    if (!el || photos.length <= 1) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldPreload(true)
          observer.disconnect()
        }
      },
      { rootMargin: '300px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [photos.length])

  useEffect(() => {
    if (!shouldPreload || photos.length <= 1) return

    const nextIndex = (current + 1) % photos.length
    const prevIndex = (current - 1 + photos.length) % photos.length
    ;[photos[nextIndex], photos[prevIndex]].forEach((src) => {
      const img = new Image()
      img.src = src
    })
  }, [current, photos, shouldPreload])

  const prev = (e: React.MouseEvent) => {
    e.preventDefault()
    setCurrent((i) => (i - 1 + photos.length) % photos.length)
  }
  const next = (e: React.MouseEvent) => {
    e.preventDefault()
    setCurrent((i) => (i + 1) % photos.length)
  }

  const message = encodeURIComponent(
    `Olá! Tenho interesse em comprar o *${product.name}*.\n\n` +
    `💰 Preço: ${product.price}${product.pixLabel ? ' ' + product.pixLabel : ''}\n` +
    `📏 Tamanhos disponíveis: ${product.sizes.join(', ')}\n\n` +
    `Poderia me informar a disponibilidade e formas de pagamento? 😊`
  )
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`

  return (
    <div ref={cardRef} className="group relative rounded-2xl p-px shadow-sm hover:shadow-xl transition-all duration-300 bg-stone-100 hover:bg-gradient-to-br hover:from-rose-200 hover:via-rose-100 hover:to-amber-100">
      <div className="bg-white rounded-[14px] overflow-hidden flex flex-col h-full">

      {/* Imagem / Carrossel */}
      <div className="relative overflow-hidden aspect-[3/4]">
        <img
          src={photos[current]}
          alt={`${product.name} - foto ${current + 1}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          decoding="async"
        />

        {/* Badge de desconto */}
        {product.discount && (
          <span className="absolute top-3 right-3 text-white text-xs font-bold px-2.5 py-1 rounded-md shadow-md" style={{ background: '#c6973f' }}>
            -{product.discount}%
          </span>
        )}

        {/* Setas do carrossel (só aparece se tiver múltiplas fotos) */}
        {photos.length > 1 && (
          <>
            <button
              type="button"
              onClick={prev}
              aria-label="Foto anterior"
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-7 sm:h-7 flex items-center justify-center bg-white/85 hover:bg-white active:bg-white text-stone-700 rounded-full shadow transition-opacity duration-200 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 focus-visible:opacity-100"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Próxima foto"
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-7 sm:h-7 flex items-center justify-center bg-white/85 hover:bg-white active:bg-white text-stone-700 rounded-full shadow transition-opacity duration-200 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 focus-visible:opacity-100"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
            </button>

            {/* Bolinhas indicadoras */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
              {photos.map((_, i) => (
                <button
                  type="button"
                  key={i}
                  onClick={(e) => { e.preventDefault(); setCurrent(i) }}
                  aria-label={`Ver foto ${i + 1}`}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${i === current ? 'bg-white scale-125' : 'bg-white/50'}`}
                />
              ))}
            </div>
          </>
        )}

        {/* Botão WhatsApp flutuante na imagem (aparece no hover desktop) */}
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Comprar ${product.name} via WhatsApp`}
          className="absolute bottom-3 right-3 flex items-center justify-center w-10 h-10 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-all duration-200 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0"
        >
          <WhatsAppIcon size={20} />
        </a>
      </div>

      {/* Conteúdo */}
      <div className="flex flex-col flex-1 px-4 pt-3 pb-4 gap-2">

        {/* Nome */}
        <h3 className="font-semibold text-stone-800 text-sm leading-snug line-clamp-2 min-h-[2.5rem]">
          {product.name}
        </h3>

        {/* Avaliação */}
        <div className="flex items-center gap-1.5">
          <Stars rating={product.rating} />
          <span className="text-stone-400 text-xs">({product.reviews})</span>
        </div>

        {/* Tamanhos */}
        <div className="flex flex-wrap gap-1">
          {product.sizes.map((size) => (
            <span
              key={size}
              className="bg-rose-50 text-rose-400 text-[11px] font-semibold px-2 py-0.5 rounded border border-rose-100"
            >
              {size}
            </span>
          ))}
        </div>

        {/* Preços */}
        <div className="mt-auto pt-1">
          {product.originalPrice && (
            <p className="text-stone-400 text-xs line-through leading-none mb-0.5">
              {product.originalPrice}
            </p>
          )}
          <p className="text-green-600 font-bold text-lg leading-tight">
            {product.price}
            {product.pixLabel && (
              <span className="text-green-500 text-xs font-normal ml-1">{product.pixLabel}</span>
            )}
          </p>
          {product.installments && (
            <p className="text-stone-500 text-[11px] mt-0.5">{product.installments}</p>
          )}
        </div>

        {/* Botão WhatsApp principal */}
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 active:bg-green-700 text-white font-semibold text-sm py-2.5 rounded-xl transition-colors shadow-sm"
        >
          <WhatsAppIcon size={17} />
          Quero comprar
        </a>
      </div>
    </div>
    </div>
  )
}

function WhatsAppIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M11.997 0C5.373 0 0 5.373 0 11.997c0 2.117.554 4.103 1.523 5.824L.054 23.777a.5.5 0 0 0 .614.639l6.134-1.607A11.944 11.944 0 0 0 11.997 24C18.62 24 24 18.627 24 12.003 24 5.373 18.62 0 11.997 0zm0 21.818a9.816 9.816 0 0 1-5.003-1.37l-.359-.213-3.722.976.994-3.627-.234-.373A9.808 9.808 0 0 1 2.18 12.003c0-5.415 4.403-9.818 9.817-9.818 5.415 0 9.821 4.403 9.821 9.818 0 5.412-4.406 9.815-9.821 9.815z" />
    </svg>
  )
}
