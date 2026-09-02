import { BlogPost } from '../types';

export const blogPosts: BlogPost[] = [
  {
    id: 'blog-01',
    title: 'The Anatomy of Carrara: How to Specify Rare Italian White Marbles in 2025',
    slug: 'the-anatomy-of-carrara-specifying-white-marbles',
    excerpt: 'A comprehensive specification masterclass comparing Calacatta Borghini, Statuario Extra, and Bianco Carrara C for luxury residential architecture.',
    readTime: '7 min read',
    date: 'August 24, 2025',
    category: 'Architectural Spec Guide',
    coverImage: 'https://cdn.shopify.com/s/files/1/0423/9520/5787/products/imported-marble-statuario-extra-elegant-marbles-ltd-31821588496539.jpg?v=1627982366',
    author: {
      name: 'Dr. Leonardo Castiglioni & Aarav Merchant',
      role: 'Chief Geologist & Mumbai Atelier Director, Simplex',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    },
    content: [
      'For over two millennia, the white metamorphic limestone beds of the Apuan Alps have supplied the global pinnacle of architectural expression. Yet in modern ultra-luxury interior design, the distinction between a standard commercial slab and an "Exclusive Reserve" block can define the entire aura of a penthouse or estate.',
      'Calacatta Borghini is defined by its warm eggshell-to-ivory crystalline field pierced by broad ribbons of amber-gold, taupe, and deep charcoal. Unlike Statuario, which exhibits cooler pure-white calcitic structures with high-contrast anthracite lightning veining, Borghini brings an unmistakable golden warmth that softens minimalist concrete and bronze joinery.',
      'When specifying slabs for 4-way diamond bookmatching, architects must verify that consecutive slab numbers (e.g. Block #892, Slabs 14A and 14B) were extracted sequentially from the gangsaw with matching mirror faces. Simplex provides digital dry-lay photogrammetry before slabs leave our Verona atelier, ensuring zero surprises during installation.'
    ],
    keyTakeaways: [
      'Calacatta features warm amber/gold undertones, while Statuario features cool ice-white ground with anthracite veins.',
      'Always request gangsaw sequence numbers (A/B pairs) to ensure flawless bookmatch vein continuity.',
      'Specify 20mm or 30mm thickness based on edge profile overhangs and structural cantilever requirements.'
    ],
    featuredStoneIds: ['mar-01', 'mar-02', 'mar-04']
  },
  {
    id: 'blog-02',
    title: 'Honed vs Polished vs Leathered: The Sensory Tactile Landscape of Stone Finishes',
    slug: 'honed-vs-polished-vs-leathered-stone-finishes',
    excerpt: 'Exploring how microscopic surface topography alters light reflection, depth perception, slip resistance, and maintenance protocols.',
    readTime: '6 min read',
    date: 'July 18, 2025',
    category: 'Material Science',
    coverImage: 'https://cdn.shopify.com/s/files/1/0423/9520/5787/products/imported-marble-van-gogh-elegant-marbles-ltd-20685932986523.jpg?v=1622800603',
    author: {
      name: 'Camilla Valenti',
      role: 'Director of Architectural Finishes',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80'
    },
    content: [
      'While mirror-polished stone has historically dominated European palazzos, contemporary architectural aesthetics increasingly favor tactile, non-glare finishes that engage touch as well as sight.',
      'The Leathered Finish (often created via diamond-embedded abrasive brushes) delicately erodes softer calcitic veins while preserving harder mineral ridges, resulting in a gentle, warm undulating texture reminiscent of weathered antique leather.',
      'For heavy culinary countertops and master bathroom vanities, leathered and honed surfaces diffuse fingerprints, water spots, and micro-etching far more gracefully than high-gloss polished surfaces, creating a living patina that matures gracefully with the home.'
    ],
    keyTakeaways: [
      'Polished surfaces maximize color depth and light bounce in dark or compact rooms.',
      'Honed finishes eliminate glare and provide modern, museum-like velvety calm.',
      'Leathered surfaces offer superior grip, tactile warmth, and camouflage daily micro-wear.'
    ],
    featuredStoneIds: ['gra-04', 'qua-02', 'til-03']
  },
  {
    id: 'blog-03',
    title: 'Illuminating Translucent Geology: Engineering Backlit Onyx & Quartzite Features',
    slug: 'illuminating-translucent-geology-backlit-onyx',
    excerpt: 'Architectural details, diffusion panels, Kelvin color temperatures, and maintenance access for breathtaking illuminated stone walls.',
    readTime: '8 min read',
    date: 'June 05, 2025',
    category: 'Engineering & Lighting',
    coverImage: 'https://cdn.shopify.com/s/files/1/0423/9520/5787/products/onyx-onyx-aurora-green-onyx-elegant-marbles-ltd-18195692683419.jpg?v=1622667505',
    author: {
      name: 'Gianluca Rossi',
      role: 'Senior Project Engineering Lead',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
    },
    content: [
      'Natural onyx and crystalline quartzites like Patagonia possess an optical translucency that transforms solid geological mass into a radiant, warm luminous sculpture when backlit.',
      'Achieving uniform illumination without visible LED "hotspots" requires precise engineering: a minimum 60mm cavity depth between the LED matrix and stone, coupled with optical-grade opal acrylic light diffusers and dimmable 2400K–3000K high-CRI LED sheets.',
      'For cantilevered bar counters and islands, composite glass or aluminum honeycomb backings ensure structural rigidity while preserving 92% light transmission through the stone.'
    ],
    keyTakeaways: [
      'Maintain at least 50–75mm cavity depth behind translucent slabs for seamless light diffusion.',
      'Use tunable white LED sheets (2200K to 4000K) to shift mood from intimate twilight warmth to crisp architectural daylight.',
      'Always design concealed service access panels for transformer maintenance.'
    ],
    featuredStoneIds: ['qua-01', 'qua-03', 'gra-01']
  }
];
