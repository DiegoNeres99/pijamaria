const HERO_IMAGE = '/galerias/logo/logo1.png' // Imagem de fundo do Hero, pode ser uma foto de pijamas ou um padrão delicado

const WHATSAPP_NUMBER = '+554396927336' // mesmo número do Header

export default function Hero() {
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá!%20Quero%20ver%20o%20catálogo%20da%20Use%20Pijamaria.`

  return (
    <section
      id="inicio"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Imagem de fundo */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE}
          alt="Use Pijamaria - Pijamas delicados e confortáveis"
          className="w-full h-full object-cover object-center"
        />
        {/* Overlay mais sofisticado: escuro → rose vinhoso suave */}
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900/75 via-rose-900/40 to-rose-900/10" />
      </div>

      {/* Glare decorativo (brilho difuso) */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-rose-300/15 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-amber-200/10 rounded-full blur-2xl pointer-events-none z-0" />

      {/* Conteúdo */}
      <div className="relative z-10 w-full px-6 sm:px-12 lg:px-20 py-32 flex flex-col items-start max-w-none">
        <div className="max-w-xl animate-fade-in-up">

          {/* Badge pulsante */}
          <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white text-xs tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 border border-white/25">
            <span className="w-2 h-2 bg-rose-300 rounded-full animate-pulse" />
            Novidades 2026
          </span>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Pijamas que abraçam
            <span className="block text-rose-200 italic">sua alma.</span>
          </h1>
          <p className="text-white/85 text-base sm:text-lg leading-relaxed mb-8 max-w-md">
            Pijamas confortáveis, delicados e perfeitos para seus momentos de descanso. Tecidos macios, modelos femininos e muita leveza.
          </p>

          {/* Linha decorativa abaixo do texto */}
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-16 bg-gradient-to-r from-rose-300 to-transparent" />
            <span className="text-rose-200/70 text-xs tracking-widest uppercase">Qualidade & Conforto</span>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="#catalogo"
              className="bg-white text-rose-500 hover:bg-rose-50 font-semibold px-7 py-3.5 rounded-full transition-all shadow-lg text-sm sm:text-base hover:scale-105 active:scale-100"
            >
              Ver Catálogo
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-rose-400/90 hover:bg-rose-500 text-white font-semibold px-7 py-3.5 rounded-full transition-all shadow-lg text-sm sm:text-base flex items-center gap-2 hover:scale-105 active:scale-100"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M11.997 0C5.373 0 0 5.373 0 11.997c0 2.117.554 4.103 1.523 5.824L.054 23.777a.5.5 0 0 0 .614.639l6.134-1.607A11.944 11.944 0 0 0 11.997 24C18.62 24 24 18.627 24 12.003 24 5.373 18.62 0 11.997 0zm0 21.818a9.816 9.816 0 0 1-5.003-1.37l-.359-.213-3.722.976.994-3.627-.234-.373A9.808 9.808 0 0 1 2.18 12.003c0-5.415 4.403-9.818 9.817-9.818 5.415 0 9.821 4.403 9.821 9.818 0 5.412-4.406 9.815-9.821 9.815z" />
              </svg>
              Fale Conosco
            </a>
          </div>
        </div>
      </div>

      {/* Seta de scroll */}
      <a
        href="#catalogo"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/70 hover:text-white transition-colors"
        aria-label="Rolar para baixo"
      >
        <span className="text-xs tracking-widest uppercase">Ver mais</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </a>
    </section>
  )
}
