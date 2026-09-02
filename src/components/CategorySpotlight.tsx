import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Sparkles, Gem, Box, Flame } from 'lucide-react';
import { categoryMeta } from '../data/products';

interface CategorySpotlightProps {
  onSelectCategory: (category: 'marble' | 'granite' | 'tiles' | 'quartzite_onyx') => void;
}

export const CategorySpotlight: React.FC<CategorySpotlightProps> = ({ onSelectCategory }) => {
  const categories = [
    {
      key: 'marble' as const,
      title: 'Italian & Global Marble',
      subtitle: 'Calacatta, Statuario, Portoro & Rare European Metamorphic Slabs',
      count: `${categoryMeta.marble.count} Curated Slabs`,
      icon: Gem,
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=85',
      highlights: ['Calacatta Borghini', 'Statuario Extra', 'Nero Portoro Gold', 'Arabescato Corchia'],
      rarity: 'Heritage Reserve'
    },
    {
      key: 'granite' as const,
      title: 'Exotic & Structural Granite',
      subtitle: 'High-Density Magmatic Formations with Extreme Scratch & Thermal Resilience',
      count: `${categoryMeta.granite.count} Curated Slabs`,
      icon: Flame,
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=85',
      highlights: ['Blue Bahia Imperial', 'Cosmic Black Gold', 'Lemurian Blue Labradorite', 'Nero Zimbabwe'],
      rarity: 'Volcanic Batholith'
    },
    {
      key: 'tiles' as const,
      title: 'Architectural Tiles & Sintered Slabs',
      subtitle: 'Large-Format Maxima Slabs (1600×3200mm), Terrazzo & Fluted 3D Reliefs',
      count: `${categoryMeta.tiles.count} Curated Slabs`,
      icon: Box,
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85',
      highlights: ['Sintered Calacatta Luxe', 'Terrazzo Veneziano', 'Basaltina Fluted 3D', 'Artisan Zellige'],
      rarity: 'Precision Calibrated'
    },
    {
      key: 'quartzite_onyx' as const,
      title: 'Exotic Quartzite & Translucent Onyx',
      subtitle: 'Gemological Natural Formations with High Translucency & Diamond Hardness',
      count: `${categoryMeta.quartzite_onyx.count} Curated Slabs`,
      icon: Sparkles,
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=85',
      highlights: ['Patagonia Translucent', 'Taj Mahal Royale', 'Onice Verde Esmeralda', 'Blue Roma'],
      rarity: 'Backlit Translucent'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F8F7F4] relative border-b border-[#DCD9D1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-2 text-[#8F704D] text-[10px] font-semibold tracking-[0.22em] uppercase font-outfit">
              <span className="w-5 h-px bg-[#8F704D]"></span>
              <span>Categorical Architecture</span>
            </div>
            <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1A1A1A] mt-2.5 tracking-tight">
              Curated Stone Collections
            </h2>
          </div>
          <p className="text-[#59544C] text-xs sm:text-sm max-w-md font-light leading-relaxed font-sans-luxury">
            50 distinct hand-selected varieties per category, quarried across 48 geological basins and graded for luxury residential and commercial specifications.
          </p>
        </div>

        {/* 4 Category Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => onSelectCategory(cat.key)}
                className="group relative rounded-2xl overflow-hidden bg-[#FFFFFF] border border-[#DCD9D1] hover:border-[#8F704D] transition-all duration-300 cursor-pointer shadow-xs hover:shadow-md flex flex-col justify-between"
              >
                {/* Background Image with Zoom & Dark Gradient */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#1A1A1A]">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  
                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-full bg-[#FFFFFF]/90 backdrop-blur-md text-[#8F704D] text-[9px] font-semibold tracking-[0.2em] uppercase border border-[#DCD9D1] flex items-center gap-1.5 shadow-xs font-outfit">
                      <Icon className="w-3 h-3 text-[#8F704D]" />
                      {cat.rarity}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-[#FFFFFF]/90 backdrop-blur-md text-[#1A1A1A] text-[9px] font-semibold tracking-[0.14em] uppercase border border-[#DCD9D1] shadow-xs font-outfit">
                      {cat.count}
                    </span>
                  </div>

                  {/* Highlight Floating Chips */}
                  <div className="absolute bottom-3.5 left-4 right-4 flex flex-wrap gap-1.5 pointer-events-none">
                    {cat.highlights.map((stone, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded-md bg-[#FFFFFF]/90 backdrop-blur-sm text-[10px] text-[#1A1A1A] font-medium border border-[#DCD9D1] font-outfit"
                      >
                        {stone}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-5 sm:p-6 space-y-3 bg-[#FFFFFF] flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#1A1A1A] group-hover:text-[#8F704D] transition-colors flex items-center justify-between">
                      <span>{cat.title}</span>
                      <ArrowUpRight className="w-4 h-4 text-[#8F704D] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </h3>
                    <p className="text-xs text-[#59544C] font-light leading-relaxed mt-1.5">
                      {cat.subtitle}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#EAE7DF] flex items-center justify-between text-[11px] text-[#8F704D] font-medium tracking-[0.16em] uppercase font-outfit">
                    <span>Explore 50 Slabs</span>
                    <span className="group-hover:translate-x-1 transition-transform font-bold">→</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
