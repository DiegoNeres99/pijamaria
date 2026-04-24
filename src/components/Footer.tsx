// ============================================================
// Footer - Rodapé redesenhado — editorial & elegante
// ⚙️ Troque WHATSAPP_NUMBER e INSTAGRAM_URL pelos dados reais
// ============================================================

// ⚙️ Configuração de contato
const WHATSAPP_NUMBER = '5511999999999'
const INSTAGRAM_URL = 'https://www.instagram.com/usepijamaria_'

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Catálogo', href: '#catalogo' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Tamanhos', href: '#tamanhos' },
  { label: 'Como Comprar', href: '#como-comprar' },
  { label: 'Sobre', href: '#sobre' },
]

export default function Footer() {
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá!%20Vi%20o%20catálogo%20da%20Use%20Pijamaria%20e%20gostaria%20de%20saber%20mais.`

  return (
    <footer className="w-full" style={{ background: 'linear-gradient(160deg, #120d10 0%, #1c1318 60%, #0f0b0d 100%)' }}>

      {/* ── CTA PRINCIPAL ────────────────────────────────────── */}
      <div className="relative overflow-hidden w-full px-6 sm:px-12 lg:px-20 py-24 text-center">
        {/* Glare decorativo */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-rose-900/25 rounded-full blur-3xl" />
        </div>

        {/* Tag decorativa */}
        <div className="relative z-10 flex items-center justify-center gap-3 mb-6">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-rose-500/60" />
          <span className="text-rose-400/80 text-xs tracking-[0.3em] uppercase font-light">Fale conosco</span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-rose-500/60" />
        </div>

        <h2 className="relative z-10 font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
          Pronta para se sentir
          <span className="block text-rose-300 italic font-light">aconchegante?</span>
        </h2>

        <p className="relative z-10 text-stone-400 text-base sm:text-lg mb-10 max-w-md mx-auto leading-relaxed">
          Encontre o pijama perfeito ou surpreenda quem você ama com um presente delicado.
        </p>

        <div className="relative z-10 flex flex-wrap justify-center gap-4">
          {/* WhatsApp — preenchido */}
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-xl"
            style={{ background: 'linear-gradient(135deg, #10b981, #16a34a)', boxShadow: '0 6px 24px rgba(16,185,129,0.35)' }}
          >
            <WhatsAppIcon size={18} />
            Falar no WhatsApp
          </a>
          {/* Instagram — outline */}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 border border-rose-400/60 text-rose-300 hover:bg-rose-400/10 font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
          >
            <InstagramIcon size={18} />
            Ver Instagram
          </a>
        </div>
      </div>

      {/* ── DIVISOR DECORATIVO ───────────────────────────────── */}
      <div className="flex items-center gap-4 px-6 sm:px-12 lg:px-20">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-rose-900/60 to-transparent" />
        <span className="text-rose-700/60 text-lg select-none">✦</span>
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-rose-900/60 to-transparent" />
      </div>

      {/* ── GRID INFO ────────────────────────────────────────── */}
      <div className="w-full px-6 sm:px-12 lg:px-20 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Coluna 1 — Marca */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <h3 className="font-serif text-2xl font-bold text-white tracking-wide">Use Pijamaria</h3>
              <p className="text-xs text-rose-400/70 tracking-[0.25em] uppercase mt-0.5">conforto &amp; delicadeza</p>
            </div>
            <p className="text-stone-500 text-sm leading-relaxed max-w-xs">
              Pijamas artesanais e selecionados com amor, para quem merece o melhor nos momentos de descanso. Qualidade, conforto e feminilidade em cada peça.
            </p>
            {/* Ícones sociais */}
            <div className="flex gap-3 mt-6">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full border border-stone-700 flex items-center justify-center text-stone-500 hover:border-green-500 hover:text-green-400 hover:bg-green-500/10 transition-all duration-200"
              >
                <WhatsAppIcon size={15} />
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-stone-700 flex items-center justify-center text-stone-500 hover:border-rose-400 hover:text-rose-300 hover:bg-rose-400/10 transition-all duration-200"
              >
                <InstagramIcon size={15} />
              </a>
            </div>
          </div>

          {/* Coluna 2 — Navegação */}
          <div>
            <h4 className="text-white/90 font-semibold text-xs uppercase tracking-[0.2em] mb-5 flex items-center gap-2">
              <span className="w-4 h-px bg-rose-500/60 inline-block" />
              Navegação
            </h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group text-stone-500 hover:text-rose-300 transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-rose-400 transition-all duration-300 inline-block" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3 — Contato */}
          <div>
            <h4 className="text-white/90 font-semibold text-xs uppercase tracking-[0.2em] mb-5 flex items-center gap-2">
              <span className="w-4 h-px bg-rose-500/60 inline-block" />
              Contato
            </h4>
            <div className="flex flex-col gap-4">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-stone-500 hover:text-green-400 transition-colors"
              >
                <span className="w-8 h-8 rounded-full bg-stone-800 border border-stone-700 flex items-center justify-center group-hover:border-green-600 group-hover:bg-green-900/30 transition-all flex-shrink-0">
                  <WhatsAppIcon size={13} />
                </span>
                <div>
                  <p className="text-[10px] text-stone-600 uppercase tracking-wider">WhatsApp</p>
                  {/* ⚙️ Exibição do número formatado */}
                  <p className="text-sm">(11) 99999-9999</p>
                </div>
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-stone-500 hover:text-rose-300 transition-colors"
              >
                <span className="w-8 h-8 rounded-full bg-stone-800 border border-stone-700 flex items-center justify-center group-hover:border-rose-500 group-hover:bg-rose-900/30 transition-all flex-shrink-0">
                  <InstagramIcon size={13} />
                </span>
                <div>
                  <p className="text-[10px] text-stone-600 uppercase tracking-wider">Instagram</p>
                  <p className="text-sm">@usepijamaria_</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── COPYRIGHT ────────────────────────────────────────── */}
      <div className="relative border-t border-stone-800/80 px-6 sm:px-12 lg:px-20 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* Linha rose no topo */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-rose-600/40 to-transparent" />

        <p className="text-stone-600 text-xs tracking-wide">
          © {new Date().getFullYear()} <span className="text-stone-500">Use Pijamaria</span>. Todos os direitos reservados.
        </p>
        <p className="text-stone-700 text-xs flex items-center gap-1.5">
          Feito com
          <span className="text-rose-600/70">♥</span>
          para você
        </p>
      </div>
    </footer>
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

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  )
}
