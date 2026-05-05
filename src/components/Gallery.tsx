import { useState } from 'react'
import { galleryImages } from '../data/products'

const INITIAL_COUNT = 8

export default function Gallery() {
  const [lightbox, setLightbox] = useState<string | null>(null)
  const [showAll, setShowAll] = useState(false)

  const visibleImages = showAll ? galleryImages : galleryImages.slice(0, INITIAL_COUNT)
  const hasMore = galleryImages.length > INITIAL_COUNT

  return (
    <section id="galeria" className="w-full py-20 bg-[#faf7f2]">
      <div className="w-full px-4 sm:px-8 lg:px-16">
        {/* Cabeçalho */}
        <div className="text-center mb-12">
          <span className="text-rose-300 text-xs tracking-widest uppercase font-medium">
            — Momentos —
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-800 mt-2 mb-4">
            Galeria
          </h2>
          <p className="text-stone-500 max-w-xl mx-auto text-base sm:text-lg">
            Inspire-se e veja a delicadeza de cada peça em detalhes.
          </p>
        </div>

        {/* Grid da galeria */}
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3">
          {visibleImages.map((src, index) => (
            <button
              key={index}
              onClick={() => setLightbox(src)}
              className="group relative overflow-hidden rounded-xl aspect-square focus:outline-none focus:ring-2 focus:ring-rose-300"
              aria-label={`Ver foto ${index + 1}`}
            >
              <img
                src={src}
                alt={`Foto galeria ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-rose-900/0 group-hover:bg-rose-900/20 transition-colors duration-300 flex items-center justify-center">
                <svg
                  className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                </svg>
              </div>
            </button>
          ))}
        </div>

        {/* Botão Ver mais / Ver menos */}
        {hasMore && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowAll((v) => !v)}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-rose-300 text-rose-500 text-sm font-medium hover:bg-rose-50 transition-colors duration-200"
            >
              {showAll ? (
                <>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 15l-6-6-6 6"/></svg>
                  Ver menos
                </>
              ) : (
                <>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
                  Ver mais fotos ({galleryImages.length - INITIAL_COUNT})
                </>
              )}
            </button>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 text-white/80 hover:text-white"
            onClick={() => setLightbox(null)}
            aria-label="Fechar"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
          <img
            src={lightbox}
            alt="Foto ampliada"
            className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}
