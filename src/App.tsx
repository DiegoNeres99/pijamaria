import Header from './components/Header'
import Hero from './components/Hero'
import Catalog from './components/Catalog'
import Gallery from './components/Gallery'
import HowToBuy from './components/HowToBuy'
import Footer from './components/Footer'
import FloatingWhatsapp from './components/FloatingWhatsapp'
import RevealSection from './components/RevealSection'

// ⚙️ Número e Instagram para seções internas — altere também nos componentes individuais
const WHATSAPP_NUMBER = '+55 43 9692-7336'
const INSTAGRAM_URL = 'https://www.instagram.com/usepijamaria_'

const benefits = [
  { icon: '🌸', title: 'Tecidos delicados', description: 'Malhas e tecidos selecionados para máximo conforto e maciez na pele.' },
  { icon: '🌙', title: 'Conforto total', description: 'Modelagens pensadas para você dormir e relaxar com total liberdade.' },
  { icon: '✨', title: 'Modelos femininos', description: 'Designs delicados e elegantes que valorizam cada silhueta.' },
  { icon: '📦', title: 'Pronta entrega', description: 'Grande variedade disponível para pronta entrega ou sob consulta.' },
  { icon: '💬', title: 'Atendimento direto', description: 'Fale diretamente com a gente pelo WhatsApp ou Instagram.' },
  { icon: '💝', title: 'Ótimo presente', description: 'Presente perfeito para quem você ama.' },
]

const categoryItems = [
  { label: 'Infantil', icon: '🧸', detail: 'Macia e delicada', href: '#catalogo' },
  { label: 'Inverno', icon: '❄️', detail: 'Quentinhos e elegantes', href: '#catalogo' },
  { label: 'Verão', icon: '☀️', detail: 'Leves e fresquinhos', href: '#catalogo' },
  { label: 'Conjuntos', icon: '💗', detail: 'Peças que combinam', href: '#catalogo' },
]

export default function App() {
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá!%20Vi%20o%20catálogo%20da%20Use%20Pijamaria%20e%20gostaria%20de%20saber%20mais.`

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      {/* Barra de topo (scroll fixo) */}
      <Header />

      {/* === HERO === */}
      <Hero />

      {/* === FRASE DESTAQUE EDITORIAL === */}
      <RevealSection>
        <section className="w-full py-20 bg-[#fdf6f0] border-y border-rose-100 overflow-hidden">
          <div className="relative w-full px-8 sm:px-16 lg:px-32 text-center">

            {/* Aspas decorativas gigantes */}
            <div
              aria-hidden="true"
              className="absolute -top-6 left-4 sm:left-12 font-serif text-[10rem] sm:text-[14rem] leading-none text-rose-100 select-none pointer-events-none"
            >
              &ldquo;
            </div>
            <div
              aria-hidden="true"
              className="absolute -bottom-6 right-4 sm:right-12 font-serif text-[10rem] sm:text-[14rem] leading-none text-rose-100 select-none pointer-events-none"
            >
              &rdquo;
            </div>

            {/* Linha decorativa lateral esquerda */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-1">
              <div className="w-px h-16 bg-gradient-to-b from-transparent via-rose-300 to-transparent" />
            </div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-1">
              <div className="w-px h-16 bg-gradient-to-b from-transparent via-rose-300 to-transparent" />
            </div>

            {/* Texto */}
            <div className="relative z-10">
              <p className="font-serif text-2xl sm:text-3xl lg:text-4xl text-stone-700 font-light italic leading-relaxed max-w-3xl mx-auto">
                Pijamas confortáveis, delicados e perfeitos para{' '}
                <span className="text-rose-400 font-semibold not-italic">seus momentos de descanso.</span>
              </p>
              {/* Assinatura da marca */}
              <div className="mt-8 flex items-center justify-center gap-4">
                <div className="h-px w-14 bg-gradient-to-r from-transparent to-rose-300" />
                <span className="font-serif text-rose-400 text-sm tracking-widest italic">Use Pijamaria</span>
                <div className="h-px w-14 bg-gradient-to-l from-transparent to-rose-300" />
              </div>
            </div>
          </div>
        </section>
      </RevealSection>

      {/* === CATEGORIAS === */}
      <RevealSection>
      <section className="w-full py-16 sm:py-20 bg-white">
        <div className="w-full px-4 sm:px-8 lg:px-16 min-h-[60vh] flex items-center justify-center">
          <div className="w-full max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-800 mb-2">
              Nossas Categorias
            </h2>
            <p className="text-stone-500 text-sm">Explore tudo que temos para você</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {categoryItems.map((cat) => (
              <a
                key={cat.label}
                href={cat.href}
                className="group rounded-3xl border border-rose-100 bg-gradient-to-br from-rose-50 via-white to-stone-50 px-4 py-8 sm:px-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center"
              >
                <span className="text-3xl sm:text-4xl block mb-3">{cat.icon}</span>
                <span className="block font-serif text-stone-800 text-lg sm:text-xl font-semibold">
                  {cat.label}
                </span>
                <span className="block mt-2 text-xs sm:text-sm text-stone-500">
                  {cat.detail}
                </span>
              </a>
            ))}
          </div>
          </div>
        </div>
      </section>
      </RevealSection>

      {/* === CATÁLOGO === */}
      <Catalog />

      {/* === GALERIA === */}
      <RevealSection><Gallery /></RevealSection>

      {/* === BENEFÍCIOS === */}
      <RevealSection>
      <section className="w-full py-20 bg-white">
        <div className="w-full px-4 sm:px-8 lg:px-16">
          <div className="text-center mb-12">
            <span className="text-rose-300 text-xs tracking-widest uppercase font-medium">
              — Por que nos escolher —
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-800 mt-2 mb-4">
              Nossos Diferenciais
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="flex gap-4 p-6 bg-rose-50/60 rounded-3xl border border-rose-100 hover:bg-rose-50 transition-colors"
              >
                <span className="text-3xl flex-shrink-0">{b.icon}</span>
                <div>
                  <h3 className="font-serif text-base font-semibold text-stone-800 mb-1">{b.title}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed">{b.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </RevealSection>    

      {/* === COMO COMPRAR === */}
      <RevealSection><HowToBuy /></RevealSection>

      {/* === SOBRE === */}
      <RevealSection>
      <section id="sobre" className="w-full py-20 bg-[#fdf6f0]">
        <div className="w-full px-4 sm:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Imagem */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-xl">
                {/* ⚙️ Substitua pela foto real da marca */}
                <img
                  src="/galerias/logo/logo.png"
                  alt="Use Pijamaria - Nossa história"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decoração */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-rose-100 rounded-full -z-10" />
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-rose-200/50 rounded-full -z-10" />
            </div>

            {/* Texto */}
            <div>
              <span className="text-rose-300 text-xs tracking-widest uppercase font-medium">
                — Nossa história —
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-800 mt-2 mb-6">
                Sobre a Use Pijamaria 💗
              </h2>
              <div className="space-y-4 text-stone-600 leading-relaxed">
                <p>
                  A <strong className="text-rose-400">Use Pijamaria</strong> nasceu do amor por peças que combinam conforto, feminilidade e delicadeza. Acreditamos que um bom pijama transforma a forma como você descansa.
                </p>
                <p>
                  Cada peça é cuidadosamente selecionada para garantir tecidos de qualidade, modelagens confortáveis e designs que você vai amar usar do anoitecer ao amanhecer.
                </p>
                <p>
                  Do verão ao inverno — temos a peça certa para cada momento e cada pessoa.
                </p>
              </div>

              {/* Links de contato */}
              <div className="flex flex-wrap gap-4 mt-8">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-rose-400 hover:bg-rose-500 text-white font-semibold px-6 py-3 rounded-full transition-colors shadow-sm text-sm"
                >
                  💬 WhatsApp
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border-2 border-rose-400 text-rose-400 hover:bg-rose-50 font-semibold px-6 py-3 rounded-full transition-colors text-sm"
                >
                  📸 Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      </RevealSection>

      {/* === FOOTER === */}
      <Footer />

      {/* === BOTÃO FLUTUANTE WHATSAPP === */}
      <FloatingWhatsapp />
    </div>
  )
}
