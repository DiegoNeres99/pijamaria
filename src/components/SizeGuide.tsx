// ============================================================
// SizeGuide - Tabela de tamanhos
// ============================================================

const sizes = [
  { label: 'P', bust: '82–86 cm', waist: '62–66 cm', hip: '88–92 cm' },
  { label: 'M', bust: '87–91 cm', waist: '67–71 cm', hip: '93–97 cm' },
  { label: 'G', bust: '92–96 cm', waist: '72–76 cm', hip: '98–102 cm' },
  { label: 'GG', bust: '97–102 cm', waist: '77–82 cm', hip: '103–108 cm' },
  { label: 'G1', bust: '103–108 cm', waist: '83–88 cm', hip: '109–114 cm' },
  { label: 'G2', bust: '109–114 cm', waist: '89–94 cm', hip: '115–120 cm' },
  { label: 'G3', bust: '115–122 cm', waist: '95–102 cm', hip: '121–128 cm' },
]

const childSizes = [
  { label: '2', age: '1–2 anos', height: '85–92 cm' },
  { label: '4', age: '3–4 anos', height: '98–104 cm' },
  { label: '6', age: '5–6 anos', height: '110–116 cm' },
  { label: '8', age: '7–8 anos', height: '122–128 cm' },
  { label: '10', age: '9–10 anos', height: '134–140 cm' },
]

export default function SizeGuide() {
  return (
    <section id="tamanhos" className="w-full py-20 bg-rose-50/60">
      <div className="w-full px-4 sm:px-8 lg:px-16">
        {/* Cabeçalho */}
        <div className="text-center mb-12">
          <span className="text-rose-300 text-xs tracking-widest uppercase font-medium">
            — Encontre o seu —
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-800 mt-2 mb-4">
            Guia de Tamanhos
          </h2>
          <p className="text-stone-500 max-w-xl mx-auto text-base sm:text-lg">
            Confira as medidas para escolher o tamanho ideal e aproveitar o máximo conforto.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Tabela adulto */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-rose-100">
            <div className="bg-rose-400 px-6 py-4">
              <h3 className="font-serif text-lg font-semibold text-white">Tamanhos Adulto &amp; Plus Size</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-rose-50">
                    <th className="text-left px-5 py-3 text-stone-600 font-semibold">Tam.</th>
                    <th className="text-left px-5 py-3 text-stone-600 font-semibold">Busto</th>
                    <th className="text-left px-5 py-3 text-stone-600 font-semibold">Cintura</th>
                    <th className="text-left px-5 py-3 text-stone-600 font-semibold">Quadril</th>
                  </tr>
                </thead>
                <tbody>
                  {sizes.map((s, i) => (
                    <tr
                      key={s.label}
                      className={`border-t border-stone-100 ${i % 2 === 0 ? '' : 'bg-rose-50/40'}`}
                    >
                      <td className="px-5 py-3">
                        <span className="bg-rose-400 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                          {s.label}
                        </span>
                      </td>
                      <td className="px-5 py-3 text-stone-600">{s.bust}</td>
                      <td className="px-5 py-3 text-stone-600">{s.waist}</td>
                      <td className="px-5 py-3 text-stone-600">{s.hip}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Tabela infantil */}
          <div className="flex flex-col gap-6">
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-rose-100">
              <div className="bg-rose-300 px-6 py-4">
                <h3 className="font-serif text-lg font-semibold text-white">Tamanhos Infantil</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-rose-50">
                      <th className="text-left px-5 py-3 text-stone-600 font-semibold">Tam.</th>
                      <th className="text-left px-5 py-3 text-stone-600 font-semibold">Faixa Etária</th>
                      <th className="text-left px-5 py-3 text-stone-600 font-semibold">Altura</th>
                    </tr>
                  </thead>
                  <tbody>
                    {childSizes.map((s, i) => (
                      <tr
                        key={s.label}
                        className={`border-t border-stone-100 ${i % 2 === 0 ? '' : 'bg-rose-50/40'}`}
                      >
                        <td className="px-5 py-3">
                          <span className="bg-rose-300 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                            {s.label}
                          </span>
                        </td>
                        <td className="px-5 py-3 text-stone-600">{s.age}</td>
                        <td className="px-5 py-3 text-stone-600">{s.height}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Dica */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-rose-100">
              <h4 className="font-serif text-base font-semibold text-stone-800 mb-2">💡 Dica</h4>
              <p className="text-stone-500 text-sm leading-relaxed">
                Em caso de dúvida entre dois tamanhos, recomendamos o maior para maior conforto. Ficou na dúvida? Fale conosco pelo WhatsApp!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
