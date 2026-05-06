// ============================================================
// FloatingWhatsapp - Botão flutuante fixo no canto inferior direito
// ⚙️ Troque WHATSAPP_NUMBER pelo número real
// ============================================================

// ⚙️ Número de WhatsApp real
const WHATSAPP_NUMBER = '+554396927336'

export default function FloatingWhatsapp() {
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá!%20Vi%20o%20catálogo%20da%20Use%20Pijamaria%20e%20gostaria%20de%20saber%20mais.`

  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      {/* Pulse animation */}
      <span className="absolute inset-0 rounded-full bg-green-400 opacity-30 group-hover:opacity-0 animate-ping" />

      <span className="relative flex items-center justify-center w-14 h-14 text-white rounded-full shadow-lg transition-transform duration-300 group-hover:scale-110" style={{ background: 'linear-gradient(135deg, #10b981, #16a34a)', boxShadow: '0 4px 20px rgba(16,185,129,0.45)' }}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M11.997 0C5.373 0 0 5.373 0 11.997c0 2.117.554 4.103 1.523 5.824L.054 23.777a.5.5 0 0 0 .614.639l6.134-1.607A11.944 11.944 0 0 0 11.997 24C18.62 24 24 18.627 24 12.003 24 5.373 18.62 0 11.997 0zm0 21.818a9.816 9.816 0 0 1-5.003-1.37l-.359-.213-3.722.976.994-3.627-.234-.373A9.808 9.808 0 0 1 2.18 12.003c0-5.415 4.403-9.818 9.817-9.818 5.415 0 9.821 4.403 9.821 9.818 0 5.412-4.406 9.815-9.821 9.815z" />
        </svg>
      </span>

      {/* Tooltip */}
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-stone-800 text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
        Fale conosco!
      </span>
    </a>
  )
}
