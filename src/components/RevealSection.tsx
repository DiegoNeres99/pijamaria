// ============================================================
// RevealSection - Wrapper que anima elementos ao entrar na tela
// Usa IntersectionObserver para fade+slide suave
// ============================================================
import { useEffect, useRef, type ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
  /** Atraso em ms antes da animação iniciar (para escalonar elementos) */
  delay?: number
}

export default function RevealSection({ children, className = '', delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay > 0) {
            setTimeout(() => el.classList.add('sr-visible'), delay)
          } else {
            el.classList.add('sr-visible')
          }
          observer.disconnect()
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -48px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div ref={ref} className={`sr-hidden ${className}`}>
      {children}
    </div>
  )
}
