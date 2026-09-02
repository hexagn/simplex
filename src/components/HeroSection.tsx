import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  Sparkles, 
  Layers, 
  ChevronRight,
  Eye,
  CheckCircle2,
  Maximize2
} from 'lucide-react';
import { StoneProduct } from '../types';
import { getFeaturedProducts } from '../data/products';

interface HeroSectionProps {
  onExploreCatalog?: (category?: string) => void;
  onExploreCollections?: () => void;
  onOpenVisualizer?: () => void;
  onBookConsultation?: () => void;
  onSelectProduct: (product: StoneProduct) => void;
  onRequestSampleKit?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreCatalog,
  onExploreCollections,
  onOpenVisualizer,
  onBookConsultation,
  onSelectProduct,
  onRequestSampleKit
}) => {
  const featuredStones = getFeaturedProducts().slice(0, 4);
  const [activeStoneIdx, setActiveStoneIdx] = useState(0);
  const activeStone = featuredStones[activeStoneIdx] || featuredStones[0];

  return (
    <section className="relative min-h-[88vh] flex flex-col justify-center overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-20 border-b border-[#DCD9D1] bg-[#F8F7F4]">
      {/* Background Architectural Grid & Subtle Light Diffuse */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[550px] bg-radial from-[#8F704D]/6 via-transparent to-transparent blur-3xl"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:5rem_5rem]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Typographic Grandeur */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Monograph Eyebrow Tag */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3"
            >
              <span className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full bg-[#FFFFFF] border border-[#DCD9D1] text-[#8F704D] text-[10px] font-semibold tracking-[0.22em] uppercase font-outfit shadow-xs">
                <Sparkles className="w-3 h-3 text-[#8F704D]" />
                Mumbai Flagship Atelier & Stockyard
              </span>
              <span className="text-[#C4BEB3] text-xs hidden sm:inline">•</span>
              <span className="text-[#7A746B] text-[11px] tracking-[0.16em] uppercase font-medium font-outfit">
                Worli Experience Gallery • JNPT Port Stockyard
              </span>
            </motion.div>

            {/* Architectural Display Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-cinzel text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-semibold tracking-[-0.02em] text-[#1A1A1A] leading-[1.1]"
            >
              Masterpieces of the Earth. <br />
              <span className="font-cormorant italic font-normal text-[#8F704D] tracking-normal">
                Curated for India's Timeless
              </span>{' '}
              Spaces.
            </motion.h1>

            {/* Editorial Lead Paragraph */}
            <motion.p 
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-[#59544C] text-sm sm:text-base max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed font-sans-luxury"
            >
              Direct quarry shipments to our Mumbai stockyard in Worli & Navi Mumbai. Bookmatched consecutive slabs of rare Italian marble, 
              volcanic granites, Brazilian quartzites, and Indian heritage stones for prestigious architectural commissions across Mumbai and India.
            </motion.p>

            {/* Action Triggers */}
            <motion.div 
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2"
            >
              <button
                onClick={() => onExploreCatalog ? onExploreCatalog() : onExploreCollections?.()}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#1A1A1A] hover:bg-[#33302B] text-white font-medium text-[11px] tracking-[0.2em] uppercase font-outfit flex items-center justify-center gap-2.5 transition-all transform hover:-translate-y-0.5 shadow-sm cursor-pointer"
              >
                <span>View 200+ Slabs In Mumbai Yard</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={onOpenVisualizer}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#FFFFFF] hover:bg-[#F3F1EC] text-[#1A1A1A] border border-[#DCD9D1] hover:border-[#8F704D] font-medium text-[11px] tracking-[0.2em] uppercase font-outfit flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs"
              >
                <Layers className="w-3.5 h-3.5 text-[#8F704D]" />
                <span>Bookmatch Simulator</span>
              </button>
            </motion.div>

            {/* Architectural Trust Strip */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="pt-6 border-t border-[#DCD9D1] grid grid-cols-2 sm:grid-cols-4 gap-4 text-center lg:text-left"
            >
              <div>
                <div className="font-cinzel text-xl sm:text-2xl font-bold text-[#1A1A1A]">3,400+</div>
                <div className="text-[10px] text-[#7D776E] uppercase tracking-[0.16em] font-outfit mt-0.5">Slabs in Mumbai Stock</div>
              </div>
              <div>
                <div className="font-cinzel text-xl sm:text-2xl font-bold text-[#1A1A1A]">48</div>
                <div className="text-[10px] text-[#7D776E] uppercase tracking-[0.16em] font-outfit mt-0.5">Global Quarries</div>
              </div>
              <div>
                <div className="font-cinzel text-xl sm:text-2xl font-bold text-[#1A1A1A]">100%</div>
                <div className="text-[10px] text-[#7D776E] uppercase tracking-[0.16em] font-outfit mt-0.5">Ultrasonic Inspected</div>
              </div>
              <div>
                <div className="font-cinzel text-xl sm:text-2xl font-bold text-[#8F704D]">250+</div>
                <div className="text-[10px] text-[#7D776E] uppercase tracking-[0.16em] font-outfit mt-0.5">Indian Estates Realized</div>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Hero Showcase Card with Smooth Transitions */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              
              {/* Active Slab Monolith Card */}
              <div className="relative rounded-2xl overflow-hidden bg-[#FFFFFF] border border-[#DCD9D1] shadow-lg group">
                
                {/* Image Container with Animated Switch */}
                <div className="relative h-80 sm:h-92 w-full overflow-hidden bg-[#1A1A1A]">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeStone.id}
                      src={activeStone.image}
                      alt={activeStone.name}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="w-full h-full object-cover object-center"
                    />
                  </AnimatePresence>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent pointer-events-none"></div>

                  {/* Badges Over Image */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                    <span className="px-2.5 py-1 rounded-full bg-[#FFFFFF]/95 backdrop-blur-md text-[#8F704D] text-[9px] font-semibold tracking-[0.2em] uppercase border border-[#DCD9D1] font-outfit">
                      {activeStone.rarity.split(' ')[0]} Reserve
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-[#FFFFFF]/95 backdrop-blur-md text-[#1A1A1A] text-[9px] tracking-[0.14em] uppercase border border-[#DCD9D1] flex items-center gap-1.5 font-medium font-outfit">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      {activeStone.inStockSlabs} Slabs Ready
                    </span>
                  </div>

                  {/* Direct Inspection Action */}
                  <div className="absolute bottom-4 right-4 flex items-center gap-2">
                    <button
                      onClick={() => onSelectProduct(activeStone)}
                      className="p-2.5 rounded-full bg-[#FFFFFF]/90 hover:bg-[#8F704D] text-[#1A1A1A] hover:text-white backdrop-blur-md border border-[#DCD9D1] transition-all cursor-pointer shadow-md"
                      title="Inspect Technical Dossier"
                    >
                      <Eye className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={onOpenVisualizer}
                      className="p-2.5 rounded-full bg-[#FFFFFF]/90 hover:bg-[#8F704D] text-[#1A1A1A] hover:text-white backdrop-blur-md border border-[#DCD9D1] transition-all cursor-pointer shadow-md"
                      title="Launch Bookmatch Studio"
                    >
                      <Layers className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Card Information */}
                <div className="p-5 sm:p-6 space-y-3.5 bg-[#FFFFFF]">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#8F704D] font-semibold">
                        {activeStone.categoryLabel} • {activeStone.originCountry}
                      </div>
                      <h3 className="font-cinzel text-lg sm:text-xl font-bold text-[#1A1A1A] mt-0.5">
                        {activeStone.name}
                      </h3>
                      {activeStone.italianName && (
                        <p className="text-xs italic text-[#7A746B] font-cormorant">
                          {activeStone.italianName}
                        </p>
                      )}
                    </div>
                    <span className="text-xs font-semibold tracking-widest text-[#8F704D] font-mono">
                      {activeStone.priceTier}
                    </span>
                  </div>

                  <p className="text-xs text-[#59544C] line-clamp-2 leading-relaxed font-light">
                    {activeStone.description}
                  </p>

                  {/* Micro Specs */}
                  <div className="grid grid-cols-3 gap-2 pt-2 border-t border-[#EAE7DF] text-[10px] font-outfit">
                    <div className="bg-[#F8F7F4] p-2 rounded-lg border border-[#DCD9D1]">
                      <div className="text-[#8C8579] uppercase tracking-wider text-[8px]">Basin</div>
                      <div className="text-[#1A1A1A] font-medium truncate">{activeStone.originRegion.split(',')[0]}</div>
                    </div>
                    <div className="bg-[#F8F7F4] p-2 rounded-lg border border-[#DCD9D1]">
                      <div className="text-[#8C8579] uppercase tracking-wider text-[8px]">Density</div>
                      <div className="text-[#1A1A1A] font-medium">{activeStone.specs.density}</div>
                    </div>
                    <div className="bg-[#F8F7F4] p-2 rounded-lg border border-[#DCD9D1]">
                      <div className="text-[#8C8579] uppercase tracking-wider text-[8px]">Thickness</div>
                      <div className="text-[#1A1A1A] font-medium">{activeStone.specs.availableThicknesses[0]}</div>
                    </div>
                  </div>

                  {/* Interactive Button */}
                  <button
                    onClick={() => onSelectProduct(activeStone)}
                    className="w-full py-2.5 rounded-xl bg-[#F8F7F4] hover:bg-[#1A1A1A] hover:text-white text-[#1A1A1A] text-[10px] font-semibold tracking-[0.2em] uppercase font-outfit transition-all flex items-center justify-center gap-2 cursor-pointer border border-[#DCD9D1]"
                  >
                    <span>Inspect Slab Dossier & Bookmatch</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Stone Selection Thumbnails */}
              <div className="mt-3 flex items-center justify-between gap-3">
                <span className="text-[10px] text-[#7A746B] uppercase tracking-[0.2em] font-medium font-outfit">
                  Select Reserve:
                </span>
                <div className="flex gap-2">
                  {featuredStones.map((stone, idx) => (
                    <button
                      key={stone.id}
                      onClick={() => setActiveStoneIdx(idx)}
                      className={`relative w-11 h-11 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                        activeStoneIdx === idx
                          ? 'border-[#8F704D] scale-105 shadow-sm'
                          : 'border-[#DCD9D1] opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={stone.image} alt={stone.name} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
