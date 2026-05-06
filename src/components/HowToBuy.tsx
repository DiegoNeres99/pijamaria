// ============================================================
// HowToBuy - Seção "Como Comprar"
// ============================================================

// ⚙️ Troque pelo número real
const WHATSAPP_NUMBER = '+554396927336'

const steps = [
  {
    number: '01',
    icon: '👗',
    title: 'Escolha o modelo',
    description: 'Navegue pelo catálogo acima e encontre o pijama perfeito para você.',
  },
  {
    number: '02',
    icon: '📏',
    title: 'Confira o tamanho',
    description: 'Use a tabela de tamanhos para encontrar o seu número ideal.',
  },
  {
    number: '03',
    icon: '💬',
    title: 'Chame no WhatsApp',
    description: 'Entre em contato informando o modelo e tamanho desejado.',
  },
  {
    number: '04',
    icon: '✅',
    title: 'Finalize com a gente',
    description: 'Combinamos entrega, forma de pagamento e você recebe seu pijama.',
  },
]

export default function HowToBuy() {
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá!%20Quero%20fazer%20um%20pedido%20na%20Use%20Pijamaria.`

  return (
    <section id="como-comprar" className="w-full py-20 bg-white">
      <div className="w-full px-4 sm:px-8 lg:px-16">
        {/* Cabeçalho */}
        <div className="text-center mb-14">
          <span className="text-rose-300 text-xs tracking-widest uppercase font-medium">
            — Simples assim —
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-800 mt-2 mb-4">
            Como Comprar
          </h2>
          <p className="text-stone-500 max-w-xl mx-auto text-base sm:text-lg">
            Sem complicação! Escolha seu pijama favorito e fale diretamente com a gente.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center">
              {/* Linha conectora (desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-1/2 w-full h-px bg-rose-100 z-0" />
              )}

              {/* Ícone */}
              <div className="relative z-10 w-20 h-20 rounded-full bg-rose-50 border-2 border-rose-200 flex items-center justify-center text-3xl mb-4 shadow-sm">
                {step.icon}
              </div>

              {/* Número */}
              <span className="text-xs text-rose-300 font-bold tracking-widest mb-2">
                {step.number}
              </span>

              <h3 className="font-serif text-lg font-semibold text-stone-800 mb-2">
                {step.title}
              </h3>
              <p className="text-stone-500 text-sm leading-relaxed max-w-48 mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-rose-400 hover:bg-rose-500 text-white font-semibold px-8 py-4 rounded-full transition-colors shadow-lg text-base"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M11.997 0C5.373 0 0 5.373 0 11.997c0 2.117.554 4.103 1.523 5.824L.054 23.777a.5.5 0 0 0 .614.639l6.134-1.607A11.944 11.944 0 0 0 11.997 24C18.62 24 24 18.627 24 12.003 24 5.373 18.62 0 11.997 0zm0 21.818a9.816 9.816 0 0 1-5.003-1.37l-.359-.213-3.722.976.994-3.627-.234-.373A9.808 9.808 0 0 1 2.18 12.003c0-5.415 4.403-9.818 9.817-9.818 5.415 0 9.821 4.403 9.821 9.818 0 5.412-4.406 9.815-9.821 9.815z" />
            </svg>
            Fazer meu pedido agora
          </a>
        </div>
      </div>
    </section>
  )
}
