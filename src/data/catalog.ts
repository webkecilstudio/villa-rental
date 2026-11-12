export type Villa = {
  slug: string
  name: string
  location: string
  guests: string
  price: number
  image: string
  features: string
  description: string
}

export type Destination = {
  slug: string
  name: string
  note: string
  image: string
  description: string
  highlights: string[]
}

export const villas: Villa[] = [
  {
    slug: 'villa-senja',
    name: 'Villa Senja',
    location: 'Ubud, Bali',
    guests: '6 guests',
    price: 320,
    image: 'photo-1600607687920-4e2a09cf159d.jpg',
    features: '3 bedrooms · Private pool',
    description:
      'A quiet hillside hideaway surrounded by rice fields, designed for slow mornings and long evenings by the pool.',
  },
  {
    slug: 'casa-ombak',
    name: 'Casa Ombak',
    location: 'Canggu, Bali',
    guests: '4 guests',
    price: 245,
    image: 'photo-1600566753190-17f0baa2a6c3.jpg',
    features: '2 bedrooms · Garden view',
    description:
      'A warm, intimate stay close to Canggu’s surf and cafés, with a leafy garden made for unhurried afternoons.',
  },
  {
    slug: 'the-nusa-residence',
    name: 'The Nusa Residence',
    location: 'Nusa Dua, Bali',
    guests: '8 guests',
    price: 560,
    image: 'photo-1600607687939-ce8a6c25118c.jpg',
    features: '4 bedrooms · Ocean view',
    description:
      'A spacious ocean-facing residence for families and friends, pairing generous rooms with a private sense of calm.',
  },
]

export const destinations: Destination[] = [
  {
    slug: 'ubud',
    name: 'Ubud',
    note: 'Jungle & soul',
    image: 'photo-1537996194471-e657df975ab4.jpg',
    description:
      'Move at the pace of the jungle. Ubud brings together lush valleys, thoughtful food, and a creative spirit that rewards wandering.',
    highlights: ['Rice terrace walks', 'Wellness and yoga', 'Artisan studios'],
  },
  {
    slug: 'canggu',
    name: 'Canggu',
    note: 'Surf & slow days',
    image: 'photo-1539367628448-4bc5c9d171c8.jpg',
    description:
      'A coastal rhythm of early surf, good coffee, and sunset dinners, with enough space to make every day your own.',
    highlights: ['Beach mornings', 'Independent cafés', 'Sunset sessions'],
  },
  {
    slug: 'seminyak',
    name: 'Seminyak',
    note: 'Style & sunsets',
    image: 'photo-1537225228614-56cc3556d7ed.jpg',
    description:
      'Polished yet easygoing, Seminyak is where design-led stays meet beach clubs, boutiques, and memorable sunsets.',
    highlights: ['Design and shopping', 'Beachfront dining', 'Golden-hour drinks'],
  },
  {
    slug: 'uluwatu',
    name: 'Uluwatu',
    note: 'Cliffs & ocean',
    image: 'photo-1516690561799-46d8f74f9abf.jpg',
    description:
      'Perched above the Indian Ocean, Uluwatu is made for dramatic coastlines, quiet coves, and wide-open horizons.',
    highlights: ['Clifftop views', 'World-class surf', 'Hidden beaches'],
  },
  {
    slug: 'nusa-dua',
    name: 'Nusa Dua',
    note: 'Calm & considered',
    image: 'photo-1540541338287-41700207dee6.jpg',
    description:
      'A gentler side of the island, with calm water, considered hospitality, and room to truly switch off.',
    highlights: ['Calm beaches', 'Water activities', 'Restful resorts'],
  },
]
