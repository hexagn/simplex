import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Quote, 
  Star, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  Building2, 
  ShieldCheck, 
  MapPin, 
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

interface Testimonial {
  id: string;
  clientName: string;
  role: string;
  firm: string;
  location: string;
  projectType: string;
  stoneSpecified: string;
  rating: number;
  quote: string;
  highlight: string;
  year: string;
  image: string;
}

interface TestimonialSectionProps {
  onRequestConsultation?: (topic?: string) => void;
  onExploreProjects?: () => void;
}

export const TestimonialSection: React.FC<TestimonialSectionProps> = ({
  onRequestConsultation,
  onExploreProjects
}) => {
  const testimonials: Testimonial[] = [
    {
      id: '1',
      clientName: 'Ar. Rajesh Mehta',
      role: 'Principal Architect',
      firm: 'Mehta Architectural Studio',
      location: 'Worli Seaface, Mumbai',
      projectType: '14,000 sq.ft Private Penthouse',
      stoneSpecified: 'Calacatta Borghini Extra & Patagonia Crystal Quartzite',
      rating: 5,
      quote: 'Simplex is unparalleled in India for bookmatched marble precision. Their team at the JNPT yard dry-laid 28 sequential slabs under gantry cranes so my client and I could inspect every vein intersection before dispatch. The final installation in the double-height foyer is an architectural triumph.',
      highlight: 'Flawless 4-Way Bookmatching & Zero Vein Discontinuity',
      year: '2025 Realization',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85&stone=room&view=812'
    },
    {
      id: '2',
      clientName: 'Ananya Singhania',
      role: 'Founder & Design Director',
      firm: 'Singhania Atelier Interiors',
      location: 'Lutyens Bungalow Zone, New Delhi',
      projectType: 'Heritage Farmhouse Estate',
      stoneSpecified: 'Statuario Michelangelo & Verde Alpi Marble',
      rating: 5,
      quote: 'Finding monolithic 30mm Italian marble slabs with sound crystal density in India used to be an ordeal. With Simplex, the direct Italian quarry provenance and ultrasonic test certificates gave our structural consultants complete confidence. Their white-glove transport to Delhi was seamless.',
      highlight: 'Certified Italian Quarry Concession & Sound Density',
      year: '2025 Realization',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85&stone=room&view=813'
    },
    {
      id: '3',
      clientName: 'Vikramaditya Kulkarni',
      role: 'Partner & Senior Director',
      firm: 'Kulkarni & Associates Architecture',
      location: 'Candolim Coastline, Goa',
      projectType: '5-Star Luxury Boutique Resort',
      stoneSpecified: 'Titanium Gold Granite & Onyx Nuvolato (Backlit)',
      rating: 5,
      quote: 'For our resort’s floating cocktail pavilion, we required 45 backlit onyx panels and flamed granite surfaces that withstand coastal saline air. Simplex executed the CNC waterjet fabrication and provided sequential dry-lay maps that saved our site contractors three weeks of installation time.',
      highlight: 'Custom Waterjet Calibration & 3-Week Time Savings',
      year: '2026 Realization',
      image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=85&stone=room&view=814'
    },
    {
      id: '4',
      clientName: 'Pooja Chawla',
      role: 'Head of Interior Architecture',
      firm: 'Studio Vistara',
      location: 'Sadashivnagar, Bangalore',
      projectType: 'Contemporary Architectural Villa',
      stoneSpecified: 'Grigio Carnico & Arabescato Orobico Grey',
      rating: 5,
      quote: 'The level of curation at Simplex’s Worli atelier is unmatched. They don’t just sell stone; they act as geological consultants who understand architectural lighting, sealant chemistry, and bookmatched balance. My go-to partner for all marquee luxury projects.',
      highlight: 'Geological Advisory & Expert Lighting Integration',
      year: '2026 Realization',
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85&stone=room&view=815'
    },
    {
      id: '5',
      clientName: 'Kavita Sen',
      role: 'Founding Partner & Residential Lead',
      firm: 'Atelier Terra Architects',
      location: 'Jubilee Hills, Hyderabad',
      projectType: '18,000 sq.ft Modern Architectural Mansion',
      stoneSpecified: 'Nero Marquina & Botticino Classico Extra',
      rating: 5,
      quote: 'The chromatic consistency across 600 square meters of high-traffic flooring in our Jubilee Hills project was impeccable. Simplex provided moisture-resistant backing and calibrated edge-polishing that elevated the entire residence.',
      highlight: 'Impeccable Chromatic Consistency Across 6,500 Sq.Ft',
      year: '2026 Realization',
      image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=85&stone=room&view=816'
    },
    // {
    //   id: '6',
    //   clientName: 'Ar. Sameer Merchant',
    //   role: 'Chief Architect & Masterplanner',
    //   firm: 'Merchant & Partners',
    //   location: 'Awas Beach, Alibaug',
    //   projectType: 'Private Coastal Villa & Infinity Pavilion',
    //   stoneSpecified: 'Brazilian Blue Roma Quartzite & Flamed Granite',
    //   rating: 5,
    //   quote: 'Designing beachfront villas in Alibaug requires stone with extreme chemical density to endure coastal humidity. Simplex delivered vacuum-impregnated Blue Roma quartzite slabs with zero fissure risk and coordinated on-site crane offloading with clockwork efficiency.',
    //   highlight: 'Coastal Climate Durability & Zero Fissure Risk',
    //   year: '2025 Realization',
    //   image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80'
    // }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto slide every 3 seconds
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section 
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="py-20 lg:py-28 bg-[#F8F7F4] border-b border-[#DCD9D1] relative overflow-hidden"
    >
      
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#8F704D]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 -ml-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFFFFF] border border-[#DCD9D1] text-[#8F704D] text-[11px] font-semibold tracking-[0.2em] uppercase font-outfit shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#8F704D]" />
              Architectural Endorsements
            </div>
            
            <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1A1A1A] mt-3">
              Trusted by India's Top Architects
            </h2>

            <p className="text-xs sm:text-sm text-[#5C574F] font-light mt-2 max-w-xl leading-relaxed">
              Read how leading architectural studios, interior designers, and estate curators across Mumbai, Delhi, Bangalore, and Goa experience Simplex natural stone.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevTestimonial}
              className="w-11 h-11 rounded-full bg-[#FFFFFF] hover:bg-[#1A1A1A] hover:text-white text-[#1A1A1A] border border-[#DCD9D1] transition-all flex items-center justify-center cursor-pointer shadow-xs"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            {/* Slide Dots */}
            <div className="flex items-center gap-1.5 px-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === idx ? 'w-6 bg-[#8F704D]' : 'w-1.5 bg-[#DCD9D1] hover:bg-[#A0988A]'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-11 h-11 rounded-full bg-[#FFFFFF] hover:bg-[#1A1A1A] hover:text-white text-[#1A1A1A] border border-[#DCD9D1] transition-all flex items-center justify-center cursor-pointer shadow-xs"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Featured Testimonial Hero Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="rounded-3xl bg-[#FFFFFF] border border-[#DCD9D1] overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-0"
          >
            {/* Left Column: Testimonial Quote & Particulars (7 cols) */}
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 flex flex-col justify-between space-y-8">
              
              <div className="space-y-6">
                {/* Top Badges & Stars */}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-1 text-[#8F704D]">
                    {[...Array(current.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#8F704D]" />
                    ))}
                    <span className="text-xs font-bold text-[#1A1A1A] ml-1.5 font-outfit">5.0 Verified Spec</span>
                  </div>

                  <span className="px-3 py-1 rounded-full bg-[#F8F7F4] border border-[#DCD9D1] text-[10px] text-[#7D776E] uppercase tracking-wider font-mono">
                    {current.year}
                  </span>
                </div>

                {/* Highlight Chip */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#F8F7F4] border border-[#EAE7DF] text-[#8F704D] text-xs font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#8F704D]" />
                  <span>{current.highlight}</span>
                </div>

                {/* Main Quote */}
                <p className="font-cinzel text-base sm:text-lg lg:text-xl text-[#1A1A1A] leading-relaxed italic font-normal">
                  "{current.quote}"
                </p>

                {/* Project Stone Specification Tag */}
                <div className="p-3.5 rounded-xl bg-[#F8F7F4] border border-[#DCD9D1] space-y-1">
                  <div className="text-[10px] uppercase font-semibold text-[#8F704D] tracking-wider">
                    Material Specification
                  </div>
                  <div className="text-xs font-semibold text-[#1A1A1A]">
                    {current.stoneSpecified}
                  </div>
                </div>
              </div>

              {/* Client Info Strip */}
              <div className="pt-6 border-t border-[#EAE7DF] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h4 className="font-cinzel text-lg font-bold text-[#1A1A1A]">
                    {current.clientName}
                  </h4>
                  <div className="text-xs text-[#5C574F]">
                    {current.role} • <strong className="text-[#1A1A1A]">{current.firm}</strong>
                  </div>
                  <div className="text-[11px] text-[#7D776E] flex items-center gap-1 mt-0.5 font-light">
                    <MapPin className="w-3 h-3 text-[#8F704D]" />
                    <span>{current.location}</span>
                  </div>
                </div>

                <a
                  href="/contact?topic=Architectural%20Trade%20Consultation"
                  onClick={(e) => {
                    e.preventDefault();
                    onRequestConsultation?.(`Consultation for ${current.projectType}`);
                  }}
                  className="px-5 py-2.5 rounded-full bg-[#1A1A1A] hover:bg-[#33302B] text-white text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer shadow-xs inline-flex items-center justify-center gap-1.5 shrink-0"
                >
                  <span>Request RFQ</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>

            {/* Right Column: High-Res Project Photography (5 cols) */}
            <div className="lg:col-span-5 relative min-h-[320px] lg:min-h-[480px] bg-[#1A1A1A] overflow-hidden">
              <img
                src={current.image}
                alt={current.projectType}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

              {/* Bottom Overlay Card */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-[#FFFFFF]/90 backdrop-blur-md border border-[#DCD9D1] text-xs space-y-1 shadow-md">
                <div className="text-[10px] uppercase font-mono tracking-widest text-[#8F704D] font-semibold">
                  Installed Realization
                </div>
                <div className="font-cinzel text-sm font-bold text-[#1A1A1A]">
                  {current.projectType}
                </div>
                <div className="text-[11px] text-[#5C574F] font-light">
                  {current.location}
                </div>
              </div>
            </div>

          </motion.div>
        </AnimatePresence>

        {/* Secondary Testimonial Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {testimonials.map((t, idx) => (
            <div
              key={t.id}
              onClick={() => setCurrentIndex(idx)}
              className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-4 ${
                currentIndex === idx
                  ? 'bg-[#FFFFFF] border-[#8F704D] shadow-md ring-1 ring-[#8F704D]'
                  : 'bg-[#FFFFFF]/70 hover:bg-[#FFFFFF] border-[#DCD9D1] shadow-xs'
              }`}
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center text-[#8F704D]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-[#8F704D]" />
                    ))}
                  </div>
                  <span className="text-[10px] text-[#7D776E] font-mono">{t.year.split(' ')[0]}</span>
                </div>

                <p className="text-xs text-[#4A463F] line-clamp-3 font-light leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-3 border-t border-[#EAE7DF] flex items-center justify-between">
                <div>
                  <div className="font-cinzel text-xs font-bold text-[#1A1A1A]">{t.clientName}</div>
                  <div className="text-[10px] text-[#7D776E] truncate max-w-[180px]">{t.firm}</div>
                </div>
                <span className={`text-[11px] font-semibold ${currentIndex === idx ? 'text-[#8F704D]' : 'text-[#A0988A]'}`}>
                  {currentIndex === idx ? 'Viewing' : 'Inspect →'}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
