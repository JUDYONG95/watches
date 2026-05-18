import { Watch } from '@/types/watch'

export const watches: Watch[] = [
  {
    id: 'cartier-tank',
    name: 'Tank',
    brand: 'Cartier',
    year: '1917',
    origin: 'France',
    notableFor: 'Inspired by the aerial view of Renault tanks from WWI',
    description:
      "A revolutionary design that broke away from round watch cases with its clean lines and Roman numeral dial. The Tank is perhaps the most iconic rectangular watch ever created — a true symbol of understated elegance worn by style icons from Jackie Kennedy to Andy Warhol.",
    imageSrc: '/images/cartier-tank.jpg',
  },
  {
    id: 'cartier-crash',
    name: 'Crash',
    brand: 'Cartier',
    year: '1967',
    origin: 'London',
    notableFor: 'Deliberately distorted case — a surrealist masterpiece',
    description:
      "Born in the creative ferment of Swinging London, the Crash features a deliberately distorted, melting case that challenges conventional watchmaking. Its asymmetrical, almost organic form makes it one of the most avant-garde and collectible designs in horology.",
    imageSrc: '/images/cartier-crash.jpg',
  },
  {
    id: 'jlc-reverso',
    name: 'Reverso',
    brand: 'Jaeger-LeCoultre',
    year: '1931',
    origin: 'Switzerland',
    notableFor: 'Swiveling case designed for polo players',
    description:
      "Originally created for British polo players in India who needed to protect their watch crystals during matches, the Reverso features an ingenious swiveling case that flips to reveal a solid metal back. Its Art Deco lines remain instantly recognizable nearly a century later.",
    imageSrc: '/images/jlc-reverso.jpg',
  },
]
