export type StoneCategory = 'marble' | 'granite' | 'tiles' | 'quartzite_onyx';

export type StoneColor = 
  | 'White & Calacatta'
  | 'Black & Nero'
  | 'Gold & Amber'
  | 'Emerald & Green'
  | 'Blue & Cobalt'
  | 'Grey & Anthracite'
  | 'Beige & Travertine'
  | 'Rose & Burgundy';

export type StoneTexture = 
  | 'Bookmatched'
  | 'Dramatic Veined'
  | 'Linear & Striated'
  | 'Crystalline'
  | 'Fossilized'
  | 'Speckled & Granular'
  | 'Clouded & Soft';

export type StoneFinish = 
  | 'Polished (Mirror Lustre)'
  | 'Honed (Matte Velvet)'
  | 'Leathered (Textured Satin)'
  | 'Fluted (Ribbed 3D)'
  | 'Bush-Hammered (Raw Architectural)'
  | 'Silk Sintered';

export type RarityTier = 'Exclusive Reserve' | 'Signature Selection' | 'Heritage Classic' | 'Exotic Sintered';

export interface StoneSpecs {
  density: string; // e.g. "2,710 kg/m³"
  waterAbsorption: string; // e.g. "0.12%"
  compressiveStrength: string; // e.g. "135 MPa"
  flexuralStrength: string; // e.g. "14.2 MPa"
  porosity: string; // e.g. "Low"
  quarryOrigin: string; // e.g. "Carrara, Apuan Alps, Italy"
  recommendedApplications: string[]; // e.g. ["Master Bathrooms", "Bookmatched Accent Walls", "Executive Islands"]
  availableThicknesses: string[]; // e.g. ["18mm", "20mm", "30mm"]
  availableFinishes: StoneFinish[];
}

export interface StoneProduct {
  id: string;
  name: string;
  italianName?: string;
  slug: string;
  category: StoneCategory;
  categoryLabel: string;
  color: StoneColor;
  texture: StoneTexture;
  finishes: StoneFinish[];
  rarity: RarityTier;
  originCountry: string;
  originRegion: string;
  description: string;
  architecturalNotes: string;
  image: string;
  closeupImage: string;
  applicationImage: string;
  roomType: 'Bathroom' | 'Living Room' | 'Kitchen Island' | 'Facade' | 'Executive Lobby';
  specs: StoneSpecs;
  priceTier: '$$$$$' | '$$$$' | '$$$';
  pricePerSqFtINR?: string; // e.g. "₹2,850 - ₹4,500 / sq.ft"
  inStockSlabs: number;
  featured?: boolean;
  bookmatchCompatible: boolean;
  translucent?: boolean; // Can be backlit (e.g. Onyx, Quartzite)
}

export interface ProjectCaseStudy {
  id: string;
  title: string;
  subtitle: string;
  category: 'Residential Villa' | 'Penthouse' | 'Luxury Hospitality' | 'Boutique Retail' | 'Superyacht & Jet';
  location: string;
  year: number;
  architect: string;
  interiorDesigner: string;
  stonesUsed: string[];
  heroImage: string;
  galleryImages: string[];
  challenge: string;
  solution: string;
  quote: string;
  quoteAuthor: string;
  sqFtSupplied: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  readTime: string;
  date: string;
  publishedDate?: string;
  category: string;
  coverImage: string;
  tags?: string[];
  relatedStones?: string[];
  author: {
    name: string;
    role: string;
    avatar?: string;
  } | string;
  authorRole?: string;
  content: string[];
  keyTakeaways?: string[];
  featuredStoneIds?: string[];
}

export interface InquiryFormData {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  role: 'Architect' | 'Interior Designer' | 'General Contractor' | 'Real Estate Developer' | 'Private Client';
  projectType: 'Private Residential Villa' | 'Penthouse / Apartment' | 'Luxury Hospitality & Resort' | 'Commercial & Retail Flagship' | 'Superyacht / Aviation';
  estimatedSqFt: string;
  timeline: string;
  preferredCategory: StoneCategory;
  specificStone: string;
  message: string;
  sampleKitRequested: boolean;
  atelierVisitRequested: boolean;
  preferredAtelier: string;
}

export interface LeadInquiry {
  id?: string;
  fullName: string;
  email: string;
  phone: string;
  companyName?: string;
  clientType: 'Architect' | 'Interior Designer' | 'Luxury Homeowner' | 'General Contractor' | 'Real Estate Developer';
  projectType: string;
  timeline: string;
  estimatedSqFt: string;
  targetCategories: StoneCategory[];
  selectedStones: string[];
  sampleKitRequested: boolean;
  appointmentType?: 'Private Atelier Visit' | 'Virtual 4K Slab Tour' | 'On-Site Architectural Consultation';
  preferredShowroom: string;
  notes: string;
  submittedAt?: string;
}

export interface MoodboardItem {
  stone: StoneProduct;
  customNote?: string;
  notes?: string;
  allocatedRoom?: string;
  quantitySqFt?: number;
}
