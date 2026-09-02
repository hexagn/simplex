import React from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  ShieldCheck, 
  Globe2, 
  Layers, 
  ArrowRight, 
  Award, 
  Building2, 
  MapPin, 
  CheckCircle2,
  Compass
} from 'lucide-react';

interface AboutSectionProps {
  onLearnMore?: () => void;
  onBookConsultation?: () => void;
  onExploreCatalog?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onLearnMore,
  onBookConsultation,
  onExploreCatalog
}) => {
  const pillars = [
    {
      num: '01',
      title: 'Direct Quarry Concessions',
      desc: 'Exclusive block reservations across 48 heritage quarries in Carrara, Espírito Santo, Volakas, and Rajasthan.',
      icon: Globe2
    },
    {
      num: '02',
      title: 'Diamond Wire Gangsaw Precision',
      desc: 'Tension-controlled 20mm & 30mm sequential slicing ensuring flawless bookmatching and millimeter calibration.',
      icon: Layers
    },
    {
      num: '03',
      title: 'Mumbai Gantry Crane Viewing',
      desc: 'Experience 3,400+ consecutive slabs under calibrated natural daylight in our Worli Atelier & Navi Mumbai yard.',
      icon: Building2
    },
    {
      num: '04',
      title: 'Pan-India Insured Logistics',
      desc: 'Dedicated heavy-payload crane trucks with transit insurance dispatched directly to luxury residences nationwide.',
      icon: ShieldCheck
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#DCD9D1] relative overflow-hidden">
      
      {/* Background Decorative Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#8F704D]/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F8F7F4] border border-[#DCD9D1] text-[#8F704D] text-[11px] font-semibold tracking-[0.2em] uppercase font-outfit shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#8F704D]" />
              The Simplex Legacy • Mumbai, India
            </div>

            <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#1A1A1A] leading-tight">
              The Mastery of Natural Stone
            </h2>

            <p className="text-sm sm:text-base text-[#59544C] font-light leading-relaxed">
              Headquartered in Mumbai, Simplex connects the world’s most celebrated natural quarries with private residential estates, high-end penthouses, and bespoke hospitality retreats across India. Every slab in our stockyard is an unrepeatable work of art sculpted over millions of years.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <a
              href="/about"
              onClick={(e) => {
                e.preventDefault();
                onLearnMore?.();
              }}
              className="px-6 py-3.5 rounded-full bg-[#1A1A1A] hover:bg-[#33302B] text-white text-xs font-semibold uppercase tracking-[0.16em] font-outfit transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Our Full Story & Heritage</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            <a
              href="/contact"
              onClick={(e) => {
                e.preventDefault();
                onBookConsultation?.();
              }}
              className="px-6 py-3.5 rounded-full bg-[#F8F7F4] hover:bg-[#EAE7DF] text-[#1A1A1A] border border-[#DCD9D1] text-xs font-semibold uppercase tracking-[0.16em] font-outfit transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
            >
              <span>Book Mumbai Viewing</span>
            </a>
          </div>
        </div>

        {/* 2-Column Split: Visual Showcase & Four Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Visual Showcase Card */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl overflow-hidden bg-[#F8F7F4] border border-[#DCD9D1] p-6 sm:p-8 shadow-xs relative">
            <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden bg-[#1A1A1A] mb-6">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85"
                alt="Simplex Atelier Mumbai Marble Masterpiece"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              
              <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-[#FFFFFF]/90 backdrop-blur-md text-[#8F704D] text-[10px] font-semibold tracking-wider uppercase border border-[#DCD9D1] shadow-xs">
                Flagship Atelier • Worli, Mumbai
              </div>

              <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between text-white text-xs">
                <span className="font-cinzel font-bold text-sm tracking-wide">3,400+ Slabs Ready in Stock</span>
                <span className="text-[10px] text-[#C5A880] uppercase tracking-wider font-mono">100% Ultrasonic Inspected</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="text-xs font-mono uppercase tracking-widest text-[#8F704D] font-semibold">
                Direct Quarry-to-Site Protocol
              </div>
              <h3 className="font-cinzel text-xl font-bold text-[#1A1A1A] leading-snug">
                Direct Quarry Sourcing & Purity
              </h3>
              <p className="text-xs text-[#5C574F] font-light leading-relaxed">
                By maintaining direct concession stakes in Italy and Brazil, we eliminate multiple trade markups and ensure that every lot arriving at JNPT port is chronologically sequenced from identical quarry benches for flawless vein transitions.
              </p>

              <div className="pt-4 border-t border-[#DCD9D1] flex items-center justify-between text-xs text-[#8F704D]">
                <span className="text-[#7D776E] flex items-center gap-1.5 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-[#8F704D]" />
                  Worli Pavilion & JNPT Yard
                </span>
                <a
                  href="/catalog"
                  onClick={(e) => {
                    e.preventDefault();
                    onExploreCatalog?.();
                  }}
                  className="font-bold hover:underline cursor-pointer flex items-center gap-1"
                >
                  <span>Explore Vault</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Pillars Bento Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.num}
                  className="p-6 sm:p-7 rounded-2xl bg-[#F8F7F4] border border-[#DCD9D1] hover:border-[#8F704D] hover:bg-[#FFFFFF] transition-all duration-300 shadow-xs flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-cinzel text-2xl font-bold text-[#8F704D]/50 group-hover:text-[#8F704D] transition-colors">
                        {pillar.num}
                      </span>
                      <div className="w-9 h-9 rounded-full bg-[#FFFFFF] border border-[#DCD9D1] group-hover:border-[#8F704D] flex items-center justify-center text-[#8F704D] shadow-2xs transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <h4 className="font-cinzel text-base font-bold text-[#1A1A1A] group-hover:text-[#8F704D] transition-colors leading-snug">
                      {pillar.title}
                    </h4>

                    <p className="text-xs text-[#5C574F] font-light leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#EAE7DF] flex items-center gap-2 text-[10px] text-[#8F704D] uppercase tracking-wider font-semibold font-outfit">
                    <CheckCircle2 className="w-3 h-3 text-[#8F704D]" />
                    <span>Simplex Certified Standard</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Bottom Trust & Metric Counters */}
        <div className="mt-12 pt-8 border-t border-[#DCD9D1] grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-1">
            <div className="font-cinzel text-3xl sm:text-4xl font-bold text-[#1A1A1A]">37+</div>
            <div className="text-[11px] text-[#7D776E] uppercase tracking-[0.16em] font-outfit font-medium">Years of Stone Mastery</div>
          </div>
          <div className="space-y-1">
            <div className="font-cinzel text-3xl sm:text-4xl font-bold text-[#1A1A1A]">3,400+</div>
            <div className="text-[11px] text-[#7D776E] uppercase tracking-[0.16em] font-outfit font-medium">Slabs in Mumbai Stock</div>
          </div>
          <div className="space-y-1">
            <div className="font-cinzel text-3xl sm:text-4xl font-bold text-[#8F704D]">48</div>
            <div className="text-[11px] text-[#7D776E] uppercase tracking-[0.16em] font-outfit font-medium">Global Quarry Concessions</div>
          </div>
          <div className="space-y-1">
            <div className="font-cinzel text-3xl sm:text-4xl font-bold text-[#1A1A1A]">250+</div>
            <div className="text-[11px] text-[#7D776E] uppercase tracking-[0.16em] font-outfit font-medium">Landmark Indian Estates</div>
          </div>
        </div>

      </div>
    </section>
  );
};
