import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Sparkles, 
  Layers
} from 'lucide-react';
import { StoneProduct } from '../types';
import { allProducts } from '../data/products';

interface HeroSectionProps {
  onExploreCatalog?: (category?: string) => void;
  onExploreCollections?: () => void;
  onOpenVisualizer?: () => void;
  onBookConsultation?: () => void;
  onSelectProduct?: (product: StoneProduct) => void;
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
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.defaultMuted = true;
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section className="relative min-h-[88vh] flex flex-col justify-center overflow-hidden pt-12 pb-10 lg:pt-20 lg:pb-16 border-b border-[#2E2B26] bg-[#141414]">
      {/* Background Marble Video with Cinematic Black Overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <video
          ref={videoRef}
          src="/videos/simplex-marbles.mp4"
          autoPlay
          loop
          muted
          playsInline
          poster="/images/banners/banner-2.jpg"
          onLoadedMetadata={(e) => {
            e.currentTarget.muted = true;
            e.currentTarget.play().catch(() => {});
          }}
          className="w-full h-full object-cover"
        />
        {/* Light Transparent Black Overlay - Video Is Clearly Visible */}
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-black/15 to-transparent pointer-events-none" />
      </div>

      {/* Background Architectural Grid & Subtle Amber Diffuse */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[550px] bg-radial from-[#C5A880]/10 via-transparent to-transparent blur-3xl"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:5rem_5rem]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        {/* Left Column Content: Full Width / Hero Grandeur */}
        <div className="max-w-3xl space-y-6 text-center lg:text-left">
          
          {/* Monograph Eyebrow Tag */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-3"
          >
            <span className="inline-flex items-center gap-1.5 py-1 px-3.5 rounded-full bg-black/40 backdrop-blur-md border border-[#C5A880]/30 text-[#C5A880] text-[10px] font-semibold tracking-[0.22em] uppercase font-outfit shadow-sm">
              <Sparkles className="w-3 h-3 text-[#C5A880]" />
              Mumbai Flagship Selection Gallery
            </span>
            <span className="text-[#8C8579] text-xs hidden sm:inline">•</span>
            <span className="text-[#D6D0C5] text-[11px] tracking-[0.16em] uppercase font-medium font-outfit">
              Marble Market, Vile Parle (E), Mumbai - 400057
            </span>
          </motion.div>

          {/* Architectural Display Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-cinzel text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-semibold tracking-[-0.02em] text-[#FFFFFF] leading-[1.1] drop-shadow-sm"
          >
            Masterpieces of the Earth. <br />
            <span className="font-cormorant italic font-normal text-[#C5A880] tracking-normal">
              Curated for India's Timeless
            </span>{' '}
            Spaces.
          </motion.h1>

          {/* Editorial Lead Paragraph */}
          <motion.p 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-[#E0DDD5] text-sm sm:text-base max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed font-sans-luxury drop-shadow-xs"
          >
            Direct quarry shipments to our Mumbai selection gallery in Vile Parle (E). Bookmatched consecutive slabs of rare Italian marble, 
            volcanic granites, Brazilian quartzites, and Indian heritage stones for prestigious architectural commissions across Mumbai and India.
          </motion.p>

          {/* Action Triggers */}
          <motion.div 
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2"
          >
            <a
              href="/catalog"
              onClick={(e) => {
                e.preventDefault();
                if (onExploreCatalog) onExploreCatalog();
                else onExploreCollections?.();
              }}
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#C5A880] hover:bg-[#D4B991] text-[#1A1A1A] font-semibold text-[11px] tracking-[0.2em] uppercase font-outfit flex items-center justify-center gap-2.5 transition-all transform hover:-translate-y-0.5 shadow-md cursor-pointer"
            >
              <span>View {allProducts.length}+ Slabs In Mumbai Yard</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            <a
              href="/visualizer"
              onClick={(e) => {
                e.preventDefault();
                if (onOpenVisualizer) onOpenVisualizer();
              }}
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/25 backdrop-blur-md font-medium text-[11px] tracking-[0.2em] uppercase font-outfit flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs"
            >
              <Layers className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>Bookmatch Simulator</span>
            </a>
          </motion.div>

          {/* Architectural Trust Strip */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="pt-6 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center lg:text-left max-w-2xl"
          >
            <div>
              <div className="font-cinzel text-xl sm:text-2xl font-bold text-[#FFFFFF]">3,400+</div>
              <div className="text-[10px] text-[#A8A298] uppercase tracking-[0.16em] font-outfit mt-0.5">Slabs in Mumbai Stock</div>
            </div>
            <div>
              <div className="font-cinzel text-xl sm:text-2xl font-bold text-[#FFFFFF]">48</div>
              <div className="text-[10px] text-[#A8A298] uppercase tracking-[0.16em] font-outfit mt-0.5">Global Quarries</div>
            </div>
            <div>
              <div className="font-cinzel text-xl sm:text-2xl font-bold text-[#FFFFFF]">100%</div>
              <div className="text-[10px] text-[#A8A298] uppercase tracking-[0.16em] font-outfit mt-0.5">Ultrasonic Inspected</div>
            </div>
            <div>
              <div className="font-cinzel text-xl sm:text-2xl font-bold text-[#C5A880]">250+</div>
              <div className="text-[10px] text-[#A8A298] uppercase tracking-[0.16em] font-outfit mt-0.5">Indian Estates Realized</div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
