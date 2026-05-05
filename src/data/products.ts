export interface Product {
  id: number
  name: string
  price: string           // preço atual (ex: 'R$ 58,10')
  originalPrice?: string  // preço de antes riscado (ex: 'R$ 75,90')
  discount?: number       // percentual de desconto (ex: 21)
  rating: number          // nota de 0 a 5
  reviews: number         // quantidade de avaliações
  installments?: string   // texto de parcelas (ex: '2x de R$ 37,45 s/ juros')
  pixLabel?: string       // label ao lado do preço (ex: 'no PIX')
  sizes: string[]
  description: string
  category: string
  image: string
}

export const products: Product[] = [

  // ── INVERNO ─────────────────────────────────────────────
  {
    id: 1,
    name: 'Pijama Americano Longo Coraçãozinho',
    price: 'R$ 129,99',
    originalPrice: 'R$ 159,99',
    discount: 18.76,
    rating: 5,
    reviews: 14,
    pixLabel: 'no PIX',
    installments: '2x de R$ 64,95 no cartão s/ juros',
    sizes: ['M','G'],
    description: 'Estampa xadrez clássica com detalhes em pink. Muito aconchegante para o frio.',
    category: 'Inverno',
    image: '/galerias/inverno/longo1_G.JPG',
  },
  {
    id: 2,
    name: 'Pijama Americano Longo Preto Coração',
    price: 'R$ 129,99',
    originalPrice: 'R$ 159,99',
    discount: 18.76,
    rating: 5,
    reviews: 29,
    pixLabel: 'no PIX',
    installments: '2x de R$ 64,95 no cartão s/ juros',
    sizes: ['M','G'],
    description: 'Abertura com botões, estampa animal print moderna. Conjunto calça e blusa.',
    category: 'Inverno',
    image: '/galerias/inverno/longo2_G.JPG',
  },
  {
    id: 3,
    name: 'Pijama Americano Longo Margarida',
    price: 'R$ 129,99',
    originalPrice: 'R$ 159,99',
    discount: 18.76,
    rating: 5,
    reviews: 52,
    pixLabel: 'no PIX',
    installments: '2x de R$ 64,95 no cartão s/ juros',
    sizes: ['M','G'],
    description: 'Flanela macia com listras delicadas. Ideal para noites bem frias.',
    category: 'Inverno',
    image: '/galerias/inverno/longo3_G.JPG',
  },
  {
    id: 4,
    name: 'Pijama Americano Longo Azul com Coração ',
    price: 'R$ 129,99',
    originalPrice: 'R$ 159,99',
    discount: 18.76,
    rating: 5,
    reviews: 241,
    pixLabel: 'no PIX',
    installments: '2x de R$ 64,95 no cartão s/ juros',
    sizes: ['M','G'],
    description: 'Calça oncinha com blusa preta estampada. O clássico que nunca sai de moda.',
    category: 'Inverno',
    image: '/galerias/inverno/longo4_G.JPG',
  },
   {
    id: 5,
    name: 'Pijama Manguinha Laço Listras',
    price: 'R$ 99,99',
    originalPrice: 'R$ 129,99',
    discount: 23.09,
    rating: 5,
    reviews: 241,
    pixLabel: 'no PIX',
    installments: '2x de R$ 49,95 no cartão s/ juros',
    sizes: ['M'],
    description: 'Calça oncinha com blusa preta estampada. O clássico que nunca sai de moda.',
    category: 'Inverno',
    image: '/galerias/inverno/longo5_M.JPG',
  },
  
  // ── VERÃO ────────────────────────────────────────────────
  {
    id: 7,
    name: 'Pijama Curto Floral Verão',
    price: 'R$ 99,99',
    originalPrice: 'R$ 129,99',
    discount: 23.09,
    rating: 5,
    reviews: 729,
    pixLabel: 'no PIX',
    installments: '2x de R$ 49,95 no cartão s/ juros',
    sizes: ['G'],
    description: 'Shortinho e camiseta florida, super fresquinha para noites quentes.',
    category: 'Verão',
    image: '/galerias/verao/curto1_G.JPG',
  },
  {
    id: 8,
    name: 'Pijama Americano Curto Coração Preto e Branco ',
    price: 'R$ 99,99',
    originalPrice: 'R$ 129,99',
    discount: 23.09,
    rating: 5,
    reviews: 266,
    pixLabel: 'no PIX',
    installments: '2x de R$ 49,95 no cartão s/ juros',
    sizes: ['G'],
    description: 'Baby doll com detalhe de laço. Leve, delicado e feminino.',
    category: 'Verão',
    image: '/galerias/verao/curto2_G.JPG',
  },
  {
    id: 9,
    name: 'Pijama Americano Curto Xadrez',
    price: 'R$ 99,99',
    originalPrice: 'R$ 129,99',
    discount: 23.09,
    rating: 5,
    reviews: 283,
    pixLabel: 'no PIX',
    installments: '2x de R$ 49,95 no cartão s/ juros',
    sizes: ['M','G'],
    description: 'Shortão estampado com blusa básica. Conforto máximo para o verão.',
    category: 'Verão',
    image: '/galerias/verao/curto3_G.JPG',
  },
  {
    id: 10,
    name: 'Pijama Americano Curto Coração Colorido ',
    price: 'R$ 99,99',
    originalPrice: 'R$ 129,99',
    discount: 23.09,
    rating: 5,
    reviews: 145,
    pixLabel: 'no PIX',
    installments: '2x de R$ 49,95 no cartão s/ juros',
    sizes: ['M','G'],
    description: 'Regata alça fina com short básico. A dupla perfeita para o calor.',
    category: 'Verão',
    image: '/galerias/verao/curto4_G.JPG',
  },
  {
    id: 11,
    name: 'Pijama Americano Curto Margarida',
    price: 'R$ 99,99',
    originalPrice: 'R$ 129,99',
    discount: 23.09,
    rating: 5,
    reviews: 88,
    pixLabel: 'no PIX',
    installments: '2x de R$ 49,95 no cartão s/ juros',
    sizes: ['G'],
    description: 'Tecido viscose premium, lisinho e muito macio na pele.',
    category: 'Verão',
    image: '/galerias/verao/curto5_G.JPG',
  },
  // ── TAMANHOS UNICO ─────────────────────────────────────────────
  {
    id: 12,
    name: 'Pijama Americano Curto Oncinha',
    price: 'R$ 99,99',
    originalPrice: 'R$ 129,99',
    discount: 23.09,
    rating: 5,
    reviews: 178,
    pixLabel: 'no PIX',
    installments: '2x de R$ 49,95 no cartão s/ juros',
    sizes: ['Tamanho Único', '38 a 44'],
    description: 'Animal print moderno com tecido leve e macio. Estilo e conforto para qualquer estação.',
    category: 'Feminino',
    image: '/galerias/tamanho_unico/tamanho_unico1.JPG',
  },
  {
    id: 13,
    name: 'Pijama Americano Curto Vaquinha',
    price: 'R$ 99,99',
    originalPrice: 'R$ 129,99',
    discount: 23.09,
    rating: 5,
    reviews: 241,
    pixLabel: 'no PIX',
    installments: '2x de R$ 49,95 no cartão s/ juros',
    sizes: ['Tamanho Único','38 a 44'],
    description: 'Conjunto leve e confortável para noites tranquilas. Estampa floral delicada.',
    category: 'Feminino',
    image: '/galerias/tamanho_unico/tamanho_unico2.JPG',
  },
  {
    id: 14,
    name: 'Pijama Manguinha Colorido',
    price: 'R$ 74,99',
    originalPrice: 'R$ 89,99',
    discount: 16.69,
    rating: 5,
    reviews: 56,
    pixLabel: 'no PIX',
    installments: '2x de R$ 37,45 no cartão s/ juros',
    sizes: ['Tamanho Único','38 a 44'],
    description: 'Camisola com detalhes em renda. Peça leve, feminina e sofisticada.',
    category: 'Feminino',
    image: '/galerias/tamanho_unico/tamanho_unico3.jpg',
  },
  {
    id: 15,
    name: 'Pijama Manguinha Listra Colorido',
    price: 'R$ 74,99',
    originalPrice: 'R$ 89,99',
    discount: 16.69,
    rating: 5,
    reviews: 103,
    pixLabel: 'no PIX',
    installments: '2x de R$ 37,45 no cartão s/ juros',
    sizes: ['Tamanho Único','38 a 44'],
    description: 'Conjunto rosê com calça e blusa combinando. Delicado e elegante.',
    category: 'Feminino',
    image: '/galerias/tamanho_unico/tamanho_unico4.jpg',
  },
  
]

// ============================================================
// Categorias exibidas na seção de filtros
// Adicione ou remova categorias conforme necessário
// ============================================================
export const categories = ['Todos', 'Inverno', 'Verão', 'Feminino']

// ============================================================
// Seções do catálogo — cada item vira uma seção com título
// próprio + carrossel. Altere title e category conforme a coleção.
// ============================================================
export interface CatalogBanner {
  tag: string          // ex: 'novidades'
  title: string        // ex: 'Inverno 2026'
  highlight: string    // texto em destaque grande
  cta: string          // texto do botão
  ctaHref: string      // link do botão
  bg: string           // classes Tailwind de fundo
  textColor: string    // classes de cor do texto
  accentColor: string  // classe de cor do highlight
  btnClass: string     // classes do botão
}

export interface CatalogSection {
  title: string
  subtitle?: string
  category: string
  // Banner exibido ANTES desta seção (opcional)
  banner?: CatalogBanner
}

export const catalogSections: CatalogSection[] = [
  {
    title: 'Inverno 2026',
    subtitle: 'Peças aconchegantes para noites frias',
    category: 'Inverno',
    banner: {
      tag: 'coleção',
      title: 'Inverno',
      highlight: '2026',
      cta: 'Ver coleção',
      ctaHref: '#catalogo',
      bg: 'bg-gradient-to-r from-stone-800 via-stone-700 to-stone-600',
      textColor: 'text-white',
      accentColor: 'text-rose-300',
      btnClass: 'bg-rose-400 hover:bg-rose-500 text-white',
    },
  },
  {
    title: 'Verão 2026',
    subtitle: 'Leves, fresquinhos e cheios de estilo',
    category: 'Verão',
    banner: {
      tag: 'novidades',
      title: 'Verão',
      highlight: '2026',
      cta: 'Ver coleção',
      ctaHref: '#catalogo',
      bg: 'bg-gradient-to-r from-sky-400 via-cyan-400 to-teal-400',
      textColor: 'text-white',
      accentColor: 'text-white',
      btnClass: 'bg-rose-400 hover:bg-rose-500 text-white',
    },
  },
  {
    title: 'Feminino',
    subtitle: 'Delicadeza e conforto em cada peça',
    category: 'Feminino',
    banner: {
      tag: 'sempre em alta',
      title: 'Linha',
      highlight: 'Feminina',
      cta: 'Explorar',
      ctaHref: '#catalogo',
      bg: 'bg-gradient-to-r from-rose-300 via-pink-300 to-rose-200',
      textColor: 'text-white',
      accentColor: 'text-white',
      btnClass: 'bg-white text-rose-500 hover:bg-rose-50',
    },
  },
]

// ============================================================
// Fotos da galeria
// Substitua as URLs por fotos reais da marca
// ============================================================
export const galleryImages: string[] = [
  // Inverno
  '/galerias/inverno/longo1_G.JPG',
  '/galerias/inverno/longo2_G.JPG',
  '/galerias/inverno/longo3_G.JPG',
  '/galerias/inverno/longo4_G.JPG',
  '/galerias/inverno/longo5_M.JPG',
  // Verão
  '/galerias/verao/curto1_G.JPG',
  '/galerias/verao/curto2_G.JPG',
  '/galerias/verao/curto3_G.JPG',
  '/galerias/verao/curto4_G.JPG',
  '/galerias/verao/curto5_G.JPG',
  // Feminino / Tamanho Único
  '/galerias/tamanho_unico/tamanho_unico1.JPG',
  '/galerias/tamanho_unico/tamanho_unico2.JPG',
  '/galerias/tamanho_unico/tamanho_unico3.jpg',
  '/galerias/tamanho_unico/tamanho_unico4.jpg',
]
