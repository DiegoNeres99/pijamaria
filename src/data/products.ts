// ============================================================
// Dados dos produtos - Use Pijamaria
// Troque os campos abaixo conforme os produtos reais da marca.
// Para as imagens, substitua a URL em `image` por fotos reais.
// ============================================================

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
    name: 'Pijama Longo Inverno Xadrez',
    price: 'R$ 74,90',
    originalPrice: 'R$ 89,90',
    discount: 17,
    rating: 4.9,
    reviews: 14,
    pixLabel: 'no PIX',
    installments: '2x de R$ 44,95 no cartão s/ juros',
    sizes: ['P', 'M', 'G', 'GG'],
    description: 'Estampa xadrez clássica com detalhes em pink. Muito aconchegante para o frio.',
    category: 'Inverno',
    image: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=600&q=80',
  },
  {
    id: 2,
    name: 'Pijama Americano Animal Print',
    price: 'R$ 72,65',
    originalPrice: 'R$ 89,90',
    discount: 17,
    rating: 4.8,
    reviews: 29,
    pixLabel: 'no PIX',
    installments: '2x de R$ 37,45 no cartão s/ juros',
    sizes: ['P', 'M', 'G', 'GG'],
    description: 'Abertura com botões, estampa animal print moderna. Conjunto calça e blusa.',
    category: 'Inverno',
    image: 'https://images.unsplash.com/photo-1601233749202-5a0c4b8db6e1?w=600&q=80',
  },
  {
    id: 3,
    name: 'Pijama Flanela Listrado',
    price: 'R$ 68,90',
    originalPrice: 'R$ 84,90',
    discount: 19,
    rating: 4.7,
    reviews: 52,
    pixLabel: 'no PIX',
    installments: '2x de R$ 42,45 no cartão s/ juros',
    sizes: ['P', 'M', 'G'],
    description: 'Flanela macia com listras delicadas. Ideal para noites bem frias.',
    category: 'Inverno',
    image: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=600&q=80',
  },
  {
    id: 4,
    name: 'Pijama Manga Longa Amour',
    price: 'R$ 58,10',
    originalPrice: 'R$ 75,90',
    discount: 21,
    rating: 4.8,
    reviews: 241,
    pixLabel: 'no PIX',
    installments: '1x de R$ 69,90 no cartão s/ juros',
    sizes: ['P', 'M', 'G', 'GG'],
    description: 'Calça oncinha com blusa preta estampada. O clássico que nunca sai de moda.',
    category: 'Inverno',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=80',
  },
  {
    id: 5,
    name: 'Pijama Soft Pelúcia',
    price: 'R$ 96,90',
    originalPrice: 'R$ 119,90',
    discount: 19,
    rating: 5.0,
    reviews: 67,
    pixLabel: 'no PIX',
    installments: '3x de R$ 37,97 no cartão s/ juros',
    sizes: ['P', 'M', 'G', 'GG'],
    description: 'Tecido soft supermacio, quentinho e com acabamento pelúcia premium.',
    category: 'Inverno',
    image: 'https://images.unsplash.com/photo-1615397349754-cfa2066a298e?w=600&q=80',
  },
  {
    id: 6,
    name: 'Pijama Tricot com Calça',
    price: 'R$ 84,90',
    originalPrice: 'R$ 99,90',
    discount: 15,
    rating: 4.6,
    reviews: 33,
    pixLabel: 'no PIX',
    installments: '2x de R$ 49,95 no cartão s/ juros',
    sizes: ['P', 'M', 'G'],
    description: 'Blusa estilo tricot combinando com calça confort. Elegante e quentinho.',
    category: 'Inverno',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
  },

  // ── VERÃO ────────────────────────────────────────────────
  {
    id: 7,
    name: 'Pijama Curto Floral Verão',
    price: 'R$ 38,70',
    originalPrice: 'R$ 47,90',
    discount: 17,
    rating: 4.5,
    reviews: 729,
    pixLabel: 'no PIX',
    installments: '1x de R$ 39,90 no cartão s/ juros',
    sizes: ['P', 'M', 'G'],
    description: 'Shortinho e camiseta florida, super fresquinha para noites quentes.',
    category: 'Verão',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80',
  },
  {
    id: 8,
    name: 'Pijama Baby Doll Laço',
    price: 'R$ 38,70',
    originalPrice: 'R$ 47,90',
    discount: 17,
    rating: 4.9,
    reviews: 266,
    pixLabel: 'no PIX',
    installments: '1x de R$ 39,90 no cartão s/ juros',
    sizes: ['P', 'M', 'G', 'GG'],
    description: 'Baby doll com detalhe de laço. Leve, delicado e feminino.',
    category: 'Verão',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&q=80',
  },
  {
    id: 9,
    name: 'Pijama Short Estampado',
    price: 'R$ 38,70',
    originalPrice: 'R$ 47,90',
    discount: 17,
    rating: 4.7,
    reviews: 283,
    pixLabel: 'no PIX',
    installments: '1x de R$ 39,90 no cartão s/ juros',
    sizes: ['P', 'M', 'G'],
    description: 'Shortão estampado com blusa básica. Conforto máximo para o verão.',
    category: 'Verão',
    image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600&q=80',
  },
  {
    id: 10,
    name: 'Pijama Regata com Short',
    price: 'R$ 44,90',
    originalPrice: 'R$ 54,90',
    discount: 18,
    rating: 4.6,
    reviews: 145,
    pixLabel: 'no PIX',
    installments: '2x de R$ 27,45 no cartão s/ juros',
    sizes: ['P', 'M', 'G', 'GG'],
    description: 'Regata alça fina com short básico. A dupla perfeita para o calor.',
    category: 'Verão',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80',
  },
  {
    id: 11,
    name: 'Pijama Viscose Liso',
    price: 'R$ 52,90',
    originalPrice: 'R$ 62,90',
    discount: 16,
    rating: 4.8,
    reviews: 88,
    pixLabel: 'no PIX',
    installments: '2x de R$ 31,45 no cartão s/ juros',
    sizes: ['P', 'M', 'G'],
    description: 'Tecido viscose premium, lisinho e muito macio na pele.',
    category: 'Verão',
    image: 'https://images.unsplash.com/photo-1631194758628-71ec7c35137e?w=600&q=80',
  },
  {
    id: 12,
    name: 'Pijama Poá Candy',
    price: 'R$ 41,90',
    originalPrice: 'R$ 49,90',
    discount: 16,
    rating: 4.9,
    reviews: 312,
    pixLabel: 'no PIX',
    installments: '1x de R$ 49,90 no cartão s/ juros',
    sizes: ['P', 'M', 'G', 'GG'],
    description: 'Estampa de poá colorida em tons candy. Fofo, fresquinho e delicioso.',
    category: 'Verão',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
  },

  // ── FEMININO ─────────────────────────────────────────────
  {
    id: 13,
    name: 'Pijama Feminino Floral Longo',
    price: 'R$ 58,10',
    originalPrice: 'R$ 75,90',
    discount: 21,
    rating: 4.8,
    reviews: 241,
    pixLabel: 'no PIX',
    installments: '1x de R$ 69,90 no cartão s/ juros',
    sizes: ['P', 'M', 'G', 'GG'],
    description: 'Conjunto leve e confortável para noites tranquilas. Estampa floral delicada.',
    category: 'Feminino',
    image: 'https://images.unsplash.com/photo-1631194758628-71ec7c35137e?w=600&q=80',
  },
  {
    id: 14,
    name: 'Camisola Delicada Renda',
    price: 'R$ 41,90',
    originalPrice: 'R$ 49,90',
    discount: 16,
    rating: 4.7,
    reviews: 56,
    pixLabel: 'no PIX',
    installments: '1x de R$ 49,90 no cartão s/ juros',
    sizes: ['P', 'M', 'G'],
    description: 'Camisola com detalhes em renda. Peça leve, feminina e sofisticada.',
    category: 'Feminino',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&q=80',
  },
  {
    id: 15,
    name: 'Conjunto Feminino Rosê',
    price: 'R$ 64,90',
    originalPrice: 'R$ 79,90',
    discount: 19,
    rating: 4.9,
    reviews: 103,
    pixLabel: 'no PIX',
    installments: '2x de R$ 37,45 no cartão s/ juros',
    sizes: ['P', 'M', 'G', 'GG'],
    description: 'Conjunto rosê com calça e blusa combinando. Delicado e elegante.',
    category: 'Feminino',
    image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600&q=80',
  },
  {
    id: 16,
    name: 'Pijama Cetim Feminino',
    price: 'R$ 72,90',
    originalPrice: 'R$ 89,90',
    discount: 19,
    rating: 4.8,
    reviews: 77,
    pixLabel: 'no PIX',
    installments: '2x de R$ 44,95 no cartão s/ juros',
    sizes: ['P', 'M', 'G'],
    description: 'Cetim leve e brilhante, sensação de luxo e conforto ao mesmo tempo.',
    category: 'Feminino',
    image: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=600&q=80',
  },
  {
    id: 17,
    name: 'Pijama Liganete Feminino',
    price: 'R$ 54,90',
    originalPrice: 'R$ 64,90',
    discount: 15,
    rating: 4.5,
    reviews: 44,
    pixLabel: 'no PIX',
    installments: '1x de R$ 64,90 no cartão s/ juros',
    sizes: ['P', 'M', 'G', 'GG'],
    description: 'Liganete fresquinho com estampa exclusiva. Perfeito para qualquer estação.',
    category: 'Feminino',
    image: 'https://images.unsplash.com/photo-1615397349754-cfa2066a298e?w=600&q=80',
  },

  // ── PLUS SIZE ────────────────────────────────────────────
  {
    id: 18,
    name: 'Pijama Plus Size Floral',
    price: 'R$ 78,90',
    originalPrice: 'R$ 94,90',
    discount: 17,
    rating: 4.6,
    reviews: 38,
    pixLabel: 'no PIX',
    installments: '2x de R$ 47,45 no cartão s/ juros',
    sizes: ['G1', 'G2', 'G3'],
    description: 'Estampa floral com corte generoso. Conforto e estilo para todos os tamanhos.',
    category: 'Plus Size',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80',
  },
  {
    id: 19,
    name: 'Conjunto Plus Size Listrado',
    price: 'R$ 84,90',
    originalPrice: 'R$ 99,90',
    discount: 15,
    rating: 4.8,
    reviews: 61,
    pixLabel: 'no PIX',
    installments: '3x de R$ 33,30 no cartão s/ juros',
    sizes: ['G1', 'G2', 'G3'],
    description: 'Listras horizontais modernas com caimento perfeito. Valoriza toda a silhueta.',
    category: 'Plus Size',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
  },
  {
    id: 20,
    name: 'Camisola Plus Size Renda',
    price: 'R$ 64,90',
    originalPrice: 'R$ 79,90',
    discount: 19,
    rating: 4.7,
    reviews: 29,
    pixLabel: 'no PIX',
    installments: '2x de R$ 39,95 no cartão s/ juros',
    sizes: ['G1', 'G2', 'G3'],
    description: 'Camisola com detalhe em renda e alças confortáveis. Feminina e delicada.',
    category: 'Plus Size',
    image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600&q=80',
  },
  {
    id: 21,
    name: 'Pijama Plus Size Inverno',
    price: 'R$ 96,90',
    originalPrice: 'R$ 114,90',
    discount: 16,
    rating: 4.9,
    reviews: 45,
    pixLabel: 'no PIX',
    installments: '3x de R$ 38,30 no cartão s/ juros',
    sizes: ['G1', 'G2', 'G3'],
    description: 'Soft quentinho e aconchegante. Modelagem ampla para máximo conforto no frio.',
    category: 'Plus Size',
    image: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=600&q=80',
  },

  // ── INFANTIL ─────────────────────────────────────────────
  {
    id: 22,
    name: 'Pijama Infantil Unicórnio',
    price: 'R$ 45,90',
    originalPrice: 'R$ 54,90',
    discount: 16,
    rating: 5.0,
    reviews: 29,
    pixLabel: 'no PIX',
    installments: '2x de R$ 27,45 no cartão s/ juros',
    sizes: ['2', '4', '6', '8', '10'],
    description: 'Estampa de unicórnio encantada. Tecido suave e seguro para pele sensível.',
    category: 'Infantil',
    image: 'https://images.unsplash.com/photo-1522771930-78848d9293e8?w=600&q=80',
  },
  {
    id: 23,
    name: 'Pijama Infantil Dinossauro',
    price: 'R$ 42,90',
    originalPrice: 'R$ 52,90',
    discount: 19,
    rating: 4.8,
    reviews: 114,
    pixLabel: 'no PIX',
    installments: '2x de R$ 26,45 no cartão s/ juros',
    sizes: ['2', '4', '6', '8'],
    description: 'Dinossauros coloridos em tecido macio. Os pequenos vão adorar!',
    category: 'Infantil',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
  },
  {
    id: 24,
    name: 'Pijama Infantil Estrelinhas',
    price: 'R$ 39,90',
    originalPrice: 'R$ 48,90',
    discount: 18,
    rating: 4.9,
    reviews: 87,
    pixLabel: 'no PIX',
    installments: '1x de R$ 48,90 no cartão s/ juros',
    sizes: ['2', '4', '6', '8', '10'],
    description: 'Fundo azul com estrelinhas brilhantes. Perfeito para sonhar alto!',
    category: 'Infantil',
    image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600&q=80',
  },
  {
    id: 25,
    name: 'Pijama Infantil Princesa',
    price: 'R$ 47,90',
    originalPrice: 'R$ 57,90',
    discount: 17,
    rating: 4.7,
    reviews: 63,
    pixLabel: 'no PIX',
    installments: '2x de R$ 28,95 no cartão s/ juros',
    sizes: ['4', '6', '8', '10'],
    description: 'Rosa e cheio de detalhes de princesa. Para pequenas que adoram se sentir especiais.',
    category: 'Infantil',
    image: 'https://images.unsplash.com/photo-1615397349754-cfa2066a298e?w=600&q=80',
  },
]

// ============================================================
// Categorias exibidas na seção de filtros
// Adicione ou remova categorias conforme necessário
// ============================================================
export const categories = ['Todos', 'Feminino', 'Infantil', 'Inverno', 'Verão', 'Plus Size']

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
  {
    title: 'Plus Size',
    subtitle: 'Conforto e estilo em todos os tamanhos',
    category: 'Plus Size',
    banner: {
      tag: 'para todas',
      title: 'Coleção',
      highlight: 'Plus Size',
      cta: 'Ver modelos',
      ctaHref: '#catalogo',
      bg: 'bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400',
      textColor: 'text-white',
      accentColor: 'text-yellow-200',
      btnClass: 'bg-white text-purple-600 hover:bg-purple-50',
    },
  },
  {
    title: 'Infantil',
    subtitle: 'Sonhos gostosos para os pequenos',
    category: 'Infantil',
    banner: {
      tag: 'para os pequenos',
      title: 'Coleção',
      highlight: 'Infantil',
      cta: 'Ver modelos',
      ctaHref: '#catalogo',
      bg: 'bg-gradient-to-r from-amber-300 via-yellow-300 to-orange-300',
      textColor: 'text-stone-800',
      accentColor: 'text-stone-800',
      btnClass: 'bg-stone-800 text-white hover:bg-stone-700',
    },
  },
]

// ============================================================
// Fotos da galeria
// Substitua as URLs por fotos reais da marca
// ============================================================
export const galleryImages: string[] = [
  'https://images.unsplash.com/photo-1631194758628-71ec7c35137e?w=800&q=80',
  'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80',
  'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=800&q=80',
  'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=80',
  'https://images.unsplash.com/photo-1522771930-78848d9293e8?w=800&q=80',
  'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
  'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800&q=80',
  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
]
