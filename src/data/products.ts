import { StoneProduct, StoneCategory, StoneColor, StoneTexture, StoneFinish } from '../types';
import { marbleProducts } from './marbleProducts';
import { graniteProducts } from './graniteProducts';
import { tilesProducts } from './tilesProducts';
import { quartziteOnyxProducts } from './quartziteOnyxProducts';

export const allProducts: StoneProduct[] = [
  ...marbleProducts,
  ...graniteProducts,
  ...tilesProducts,
  ...quartziteOnyxProducts
];

export const categoryMeta = {
  marble: {
    title: 'Italian & Global Marble',
    subtitle: 'Timeless Calacatta, Statuario & Heritage Metamorphic Masterpieces',
    count: marbleProducts.length,
    description: 'Sourced from the historic Apuan Alps of Carrara, Verona, and exclusive Mediterranean quarries.'
  },
  granite: {
    title: 'Exotic & Structural Granite',
    subtitle: 'High-Density Magmatic Formations with Extreme Thermal & Scratch Resilience',
    count: graniteProducts.length,
    description: 'Extracted from volcanic batholiths in Brazil, Scandinavia, and ancient geological shields.'
  },
  tiles: {
    title: 'Architectural Tiles & Sintered Slabs',
    subtitle: 'Large-Format Maxima Slabs (1600×3200mm), Terrazzo & Fluted 3D Reliefs',
    count: tilesProducts.length,
    description: 'Precision Italian sintered porcelain and bespoke terrazzo for continuous architectural flow.'
  },
  quartzite_onyx: {
    title: 'Exotic Quartzite & Translucent Onyx',
    subtitle: 'Gemological Natural Formations with High Translucency & Diamond-Grade Hardness',
    count: quartziteOnyxProducts.length,
    description: 'Backlit statement stones exhibiting vibrant mineral coloration and crystalline luminosity.'
  }
};

export const allColors: StoneColor[] = [
  'White & Calacatta',
  'Black & Nero',
  'Gold & Amber',
  'Emerald & Green',
  'Blue & Cobalt',
  'Grey & Anthracite',
  'Beige & Travertine',
  'Rose & Burgundy'
];

export const allTextures: StoneTexture[] = [
  'Bookmatched',
  'Dramatic Veined',
  'Linear & Striated',
  'Crystalline',
  'Fossilized',
  'Speckled & Granular',
  'Clouded & Soft'
];

export const allFinishes: StoneFinish[] = [
  'Polished (Mirror Lustre)',
  'Honed (Matte Velvet)',
  'Leathered (Textured Satin)',
  'Fluted (Ribbed 3D)',
  'Bush-Hammered (Raw Architectural)',
  'Silk Sintered'
];

export function getProductById(id: string): StoneProduct | undefined {
  return allProducts.find(p => p.id === id);
}

export function getProductByName(name: string): StoneProduct | undefined {
  const query = name.toLowerCase();
  return allProducts.find(p => p.name.toLowerCase().includes(query) || p.slug.toLowerCase().includes(query));
}

export function getProductBySlug(slug: string): StoneProduct | undefined {
  return allProducts.find(p => p.slug === slug);
}

export function getFeaturedProducts(): StoneProduct[] {
  return allProducts.filter(p => p.featured);
}
