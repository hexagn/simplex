import React from 'react';
import { 
  Award, 
  Globe2, 
  ShieldCheck, 
  Sparkles, 
  MapPin, 
  CheckCircle2, 
  Layers, 
  Quote, 
  ArrowRight,
  Compass
} from 'lucide-react';

interface AboutPageProps {
  onBookConsultation: () => void;
  onExploreCatalog: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onBookConsultation,
  onExploreCatalog
}) => {
  const craftSteps = [
    {
      num: '01',
      title: 'Quarry Block Selection',
      desc: 'Our stone inspectors travel directly to private extraction concessions in the Apuan Alps of Carrara, Espírito Santo, Greece, and Rajasthan to reserve sound monolithic blocks with immaculate chromatic consistency.'
    },
    {
      num: '02',
      title: 'Diamond Gangsaw Slicing',
      desc: 'Blocks are sliced into consecutive 20mm and 30mm sheets using tension-controlled diamond wire gangsaw technology to maintain strict millimeter thickness calibration.'
    },
    {
      num: '03',
      title: 'Calibrated Italian Polishing',
      desc: 'Automated multi-head polishing lines refine the surface through progressively fine diamond resin abrasives, achieving velvet honed or deep mirror lustre finishes.'
    },
    {
      num: '04',
      title: 'Mumbai Stockyard Dry-Lay',
      desc: 'Upon direct vessel discharge at JNPT port, consecutive slabs are dry-laid and laser-scanned at our Navi Mumbai yard, providing architects with full 3D vein alignment simulations before installation.'
    }
  ];

  const mumbaiLocations = [
    { 
      type: 'Flagship Experience Atelier', 
      name: 'Simplex Design Pavilion (Worli)',
      address: 'The Pavilion, Dr. Annie Besant Road, Worli, Mumbai 400018, Maharashtra', 
      phone: '+91 (022) 6940 8800',
      hours: 'Mon – Sat: 10:00 AM – 7:30 PM (Sun by Private Appointment)',
      desc: 'Curated 1:1 bookmatched gallery, material library, and private architect consultation suites.'
    },
    { 
      type: 'Master Slab Stockyard & Crane Facility', 
      name: 'Simplex Central Selection Yard (JNPT Corridor)',
      address: 'Shed 4B, Panvel Industrial Hub / JNPT Logistics Corridor, Navi Mumbai 410206', 
      phone: '+91 98200 45890',
      hours: 'Mon – Sat: 9:00 AM – 6:30 PM',
      desc: '3,400+ consecutive slabs in temperature-stabilized indoor gantry crane viewing bays.'
    }
  ];

  return (
    <div className="py-12 bg-[#F8F7F4] min-h-screen text-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Hero Banner */}
        <div className="space-y-6 text-center max-w-3xl mx-auto pt-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFFFFF] border border-[#DCD9D1] text-[#8F704D] text-[11px] font-medium tracking-[0.2em] uppercase shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#8F704D]" />
            Heritage & Craftsmanship • Mumbai, India
          </div>
          <h1 className="font-cinzel text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#1A1A1A]">
            The Art of Natural Stone in India
          </h1>
          <p className="text-[#5C574F] text-base sm:text-lg font-light leading-relaxed">
            Headquartered exclusively in Mumbai, Simplex bridges the world’s most pristine geological quarries with timeless luxury architectural residences and private estates across India.
          </p>
        </div>

        {/* Editorial Story Split Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-[#8F704D] font-semibold">Our Mumbai Heritage</span>
            <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-[#1A1A1A]">
              Direct Quarry Imports, Tailored for Indian Architecture.
            </h2>
            <p className="text-xs sm:text-sm text-[#5C574F] font-light leading-relaxed">
              Natural stone is not merely a decorative building surface; it is millions of years of continental pressure, thermal crystallization, and Earth's poetry frozen in solid mineral form.
            </p>
            <p className="text-xs sm:text-sm text-[#5C574F] font-light leading-relaxed">
              At Simplex Mumbai, we import directly from exclusive concession partnerships across 48 heritage quarries in Italy, Brazil, Greece, and Spain, complemented by Rajasthan's rare royal white marbles. Every single slab arriving at our Mumbai stockyard undergoes ultrasonic testing for structural soundness and moisture calibration for India's diverse climatic zones.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 text-xs">
              <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#DCD9D1] shadow-xs">
                <div className="font-cinzel text-2xl font-bold text-[#8F704D]">37+ Years</div>
                <div className="text-[11px] text-[#7D776E] uppercase mt-0.5 font-medium">Stone Mastery & Direct Imports</div>
              </div>
              <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#DCD9D1] shadow-xs">
                <div className="font-cinzel text-2xl font-bold text-[#8F704D]">100% Zero-Crack</div>
                <div className="text-[11px] text-[#7D776E] uppercase mt-0.5 font-medium">Ultrasonic Flaw Inspection</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden bg-[#1A1A1A] border border-[#DCD9D1] shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85"
                alt="Simplex Atelier Mumbai Selection Gallery"
                className="w-full h-[450px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-[#FFFFFF] border border-[#DCD9D1] p-5 rounded-2xl shadow-lg hidden sm:block max-w-xs">
              <div className="flex items-center gap-2 text-xs text-[#8F704D] font-semibold uppercase tracking-wider mb-1">
                <ShieldCheck className="w-4 h-4" />
                <span>Mumbai Quality Protocol</span>
              </div>
              <p className="text-[11px] text-[#5C574F] font-light">
                Digital photogrammetry & dry-lay vein tracking at our Mumbai central yard.
              </p>
            </div>
          </div>
        </div>

        {/* 4-Step Craft Process */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-mono uppercase tracking-widest text-[#8F704D] font-semibold">The 4-Stage Precision Protocol</span>
            <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-[#1A1A1A] mt-2">
              From Italian & Global Quarries to Indian Estates
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {craftSteps.map((step) => (
              <div
                key={step.num}
                className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#DCD9D1] space-y-4 relative shadow-xs hover:border-[#8F704D] transition-colors"
              >
                <div className="font-cinzel text-3xl font-bold text-[#8F704D]/40">{step.num}</div>
                <h3 className="font-cinzel text-lg font-bold text-[#1A1A1A]">{step.title}</h3>
                <p className="text-xs text-[#5C574F] font-light leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mumbai Flagship & Stockyard Location */}
        <div className="space-y-8 p-8 sm:p-12 rounded-3xl bg-[#FFFFFF] border border-[#DCD9D1] shadow-sm">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#8F704D] font-semibold">Flagship Atelier & Yard in Mumbai</span>
              <h2 className="font-cinzel text-3xl font-bold text-[#1A1A1A] mt-1">
                Our Mumbai Experience Spaces
              </h2>
              <p className="text-xs text-[#5C574F] max-w-lg mt-1 font-light">
                We operate our physical atelier and master slab inventory exclusively in Mumbai, offering private gantry crane viewings for architects, designers, and homeowners.
              </p>
            </div>
            <button
              onClick={onBookConsultation}
              className="px-6 py-3 rounded-full bg-[#1A1A1A] hover:bg-[#33302B] text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-sm"
            >
              Schedule Mumbai Viewing
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            {mumbaiLocations.map((loc, i) => (
              <div key={i} className="p-6 rounded-2xl bg-[#F8F7F4] border border-[#DCD9D1] space-y-3">
                <div className="flex items-center gap-2 text-[#8F704D] text-xs font-semibold uppercase tracking-wider">
                  <MapPin className="w-4 h-4" />
                  <span>{loc.type}</span>
                </div>
                <h3 className="font-cinzel text-lg font-bold text-[#1A1A1A]">{loc.name}</h3>
                <p className="text-xs text-[#5C574F] leading-relaxed">{loc.address}</p>
                <p className="text-xs text-[#7D776E] italic font-light">{loc.desc}</p>
                <div className="pt-2 border-t border-[#EAE7DF] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                  <span className="font-mono text-[#1A1A1A] font-semibold">{loc.phone}</span>
                  <span className="text-[11px] text-[#7D776E]">{loc.hours}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
