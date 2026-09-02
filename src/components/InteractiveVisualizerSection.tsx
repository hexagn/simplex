import React, { useState, useRef } from 'react';
import { 
  Layers, 
  Sparkles, 
  Sun, 
  Moon, 
  ZoomIn, 
  RotateCcw, 
  Maximize2, 
  Check, 
  Bookmark, 
  Share2, 
  ChevronRight,
  Sliders,
  FileText
} from 'lucide-react';
import { StoneProduct } from '../types';
import { marbleProducts } from '../data/marbleProducts';
import { quartziteOnyxProducts } from '../data/quartziteOnyxProducts';

interface InteractiveVisualizerProps {
  onSelectProduct: (product: StoneProduct) => void;
  onAddToMoodboard: (product: StoneProduct) => void;
  onRequestQuote: (product: StoneProduct) => void;
}

export const InteractiveVisualizerSection: React.FC<InteractiveVisualizerProps> = ({
  onSelectProduct,
  onAddToMoodboard,
  onRequestQuote
}) => {
  const candidateStones = [
    marbleProducts[0], // Calacatta Borghini
    marbleProducts[1], // Statuario Venato
    quartziteOnyxProducts[0], // Patagonia Quartzite
    quartziteOnyxProducts[3], // Blue Roma
    marbleProducts[2], // Nero Portoro
    marbleProducts[4], // Verde Alpi
    quartziteOnyxProducts[2], // Onice Verde
  ].filter(Boolean);

  const [selectedStone, setSelectedStone] = useState<StoneProduct>(candidateStones[0]);
  const [bookmatchMode, setBookmatchMode] = useState<'single' | 'vertical_2x' | 'horizontal_2x' | 'diamond_4x'>('vertical_2x');
  const [lightingMode, setLightingMode] = useState<'gallery_4000k' | 'warm_2700k' | 'backlit_led'>('gallery_4000k');
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [panPosition, setPanPosition] = useState({ x: 0, y: 0 });
  const [isCopied, setIsCopied] = useState(false);

  // Lighting overlay styling
  const getLightingStyle = () => {
    switch (lightingMode) {
      case 'warm_2700k':
        return 'mix-blend-color-dodge bg-amber-500/15';
      case 'backlit_led':
        return selectedStone.translucent || selectedStone.category === 'quartzite_onyx'
          ? 'mix-blend-screen bg-gradient-to-r from-emerald-500/30 via-amber-300/40 to-cyan-500/30 filter brightness-125'
          : 'mix-blend-overlay bg-cyan-500/10';
      case 'gallery_4000k':
      default:
        return 'mix-blend-normal bg-transparent';
    }
  };

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <section className="py-20 lg:py-28 bg-[#F8F7F4] text-[#1A1A1A] relative overflow-hidden border-b border-[#DCD9D1]">
      
      {/* Background Architectural Accent Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[#8F704D]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFFFFF] border border-[#DCD9D1] text-[#8F704D] text-[11px] font-semibold tracking-[0.2em] uppercase mb-4 shadow-xs">
            <Layers className="w-3.5 h-3.5 text-[#8F704D]" />
            Interactive Stone Atelier
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1A1A1A] tracking-tight">
            Bookmatch & Surface Simulator
          </h2>
          <p className="text-[#5C574F] text-sm sm:text-base font-light mt-3 leading-relaxed">
            Test consecutive gangsaw slab mirror symmetries, inspect micro-crystalline mineral structures, and simulate lighting temperatures in real-time.
          </p>
        </div>

        {/* Main Interactive Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls & Stone Selector Sidebar (Col 4) */}
          <div className="lg:col-span-4 space-y-6 order-2 lg:order-1">
            
            {/* 1. Stone Selector */}
            <div className="bg-[#FFFFFF] p-5 rounded-2xl border border-[#DCD9D1] space-y-3 shadow-sm">
              <label className="text-xs uppercase tracking-wider text-[#8F704D] font-semibold flex items-center justify-between">
                <span>1. Select Curated Slab</span>
                <span className="text-[10px] text-[#7D776E]">{candidateStones.length} Available</span>
              </label>
              
              <div className="grid grid-cols-3 gap-2">
                {candidateStones.map((stone) => (
                  <button
                    key={stone.id}
                    onClick={() => setSelectedStone(stone)}
                    className={`relative rounded-xl overflow-hidden aspect-square border-2 transition-all cursor-pointer group ${
                      selectedStone.id === stone.id
                        ? 'border-[#8F704D] ring-2 ring-[#8F704D]/30 scale-102 shadow-xs'
                        : 'border-[#DCD9D1] opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={stone.image} alt={stone.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-1 left-1 right-1 text-[9px] font-medium text-white truncate">
                      {stone.name.split(' ')[0]}
                    </div>
                  </button>
                ))}
              </div>
              <div className="pt-2">
                <div className="font-cinzel text-sm font-bold text-[#1A1A1A]">{selectedStone.name}</div>
                <div className="text-[11px] text-[#7D776E]">{selectedStone.originRegion} • {selectedStone.specs.quarryOrigin}</div>
              </div>
            </div>

            {/* 2. Bookmatch Symmetry Mode */}
            <div className="bg-[#FFFFFF] p-5 rounded-2xl border border-[#DCD9D1] space-y-3 shadow-sm">
              <label className="text-xs uppercase tracking-wider text-[#8F704D] font-semibold flex items-center justify-between">
                <span>2. Bookmatch Pattern</span>
                <span className="text-[10px] text-[#7D776E]">Mirror Veins</span>
              </label>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <button
                  onClick={() => setBookmatchMode('single')}
                  className={`py-2.5 px-3 rounded-lg border text-center transition-all cursor-pointer font-medium ${
                    bookmatchMode === 'single'
                      ? 'bg-[#1A1A1A] text-white border-[#1A1A1A] font-semibold shadow-xs'
                      : 'bg-[#F8F7F4] text-[#5C574F] border-[#DCD9D1] hover:bg-[#EAE7DF]'
                  }`}
                >
                  Single Slab (1x)
                </button>
                <button
                  onClick={() => setBookmatchMode('vertical_2x')}
                  className={`py-2.5 px-3 rounded-lg border text-center transition-all cursor-pointer font-medium ${
                    bookmatchMode === 'vertical_2x'
                      ? 'bg-[#1A1A1A] text-white border-[#1A1A1A] font-semibold shadow-xs'
                      : 'bg-[#F8F7F4] text-[#5C574F] border-[#DCD9D1] hover:bg-[#EAE7DF]'
                  }`}
                >
                  2-Way Vertical (A|B)
                </button>
                <button
                  onClick={() => setBookmatchMode('horizontal_2x')}
                  className={`py-2.5 px-3 rounded-lg border text-center transition-all cursor-pointer font-medium ${
                    bookmatchMode === 'horizontal_2x'
                      ? 'bg-[#1A1A1A] text-white border-[#1A1A1A] font-semibold shadow-xs'
                      : 'bg-[#F8F7F4] text-[#5C574F] border-[#DCD9D1] hover:bg-[#EAE7DF]'
                  }`}
                >
                  2-Way Horizontal
                </button>
                <button
                  onClick={() => setBookmatchMode('diamond_4x')}
                  className={`py-2.5 px-3 rounded-lg border text-center transition-all cursor-pointer font-medium ${
                    bookmatchMode === 'diamond_4x'
                      ? 'bg-[#1A1A1A] text-white border-[#1A1A1A] font-semibold shadow-xs'
                      : 'bg-[#F8F7F4] text-[#5C574F] border-[#DCD9D1] hover:bg-[#EAE7DF]'
                  }`}
                >
                  4-Way Diamond
                </button>
              </div>
            </div>

            {/* 3. Architectural Lighting Simulator */}
            <div className="bg-[#FFFFFF] p-5 rounded-2xl border border-[#DCD9D1] space-y-3 shadow-sm">
              <label className="text-xs uppercase tracking-wider text-[#8F704D] font-semibold flex items-center justify-between">
                <span>3. Lighting Environment</span>
                <span className="text-[10px] text-[#7D776E]">Kelvin Temp</span>
              </label>

              <div className="grid grid-cols-3 gap-2 text-[11px]">
                <button
                  onClick={() => setLightingMode('gallery_4000k')}
                  className={`py-2 px-2 rounded-lg border text-center transition-all cursor-pointer ${
                    lightingMode === 'gallery_4000k'
                      ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]'
                      : 'bg-[#F8F7F4] text-[#5C574F] border-[#DCD9D1]'
                  }`}
                >
                  <Sun className="w-3.5 h-3.5 mx-auto mb-1 text-sky-500" />
                  <span>4000K Studio</span>
                </button>
                <button
                  onClick={() => setLightingMode('warm_2700k')}
                  className={`py-2 px-2 rounded-lg border text-center transition-all cursor-pointer ${
                    lightingMode === 'warm_2700k'
                      ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]'
                      : 'bg-[#F8F7F4] text-[#5C574F] border-[#DCD9D1]'
                  }`}
                >
                  <Sun className="w-3.5 h-3.5 mx-auto mb-1 text-amber-500" />
                  <span>2700K Warm</span>
                </button>
                <button
                  onClick={() => setLightingMode('backlit_led')}
                  className={`py-2 px-2 rounded-lg border text-center transition-all cursor-pointer ${
                    lightingMode === 'backlit_led'
                      ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]'
                      : 'bg-[#F8F7F4] text-[#5C574F] border-[#DCD9D1]'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5 mx-auto mb-1 text-emerald-500" />
                  <span>Backlit LED</span>
                </button>
              </div>
            </div>

            {/* Quick Action Spec Bar */}
            <div className="flex flex-col gap-2.5">
              <button
                onClick={() => onAddToMoodboard(selectedStone)}
                className="w-full py-3.5 rounded-xl bg-[#FFFFFF] hover:bg-[#F3F1EC] text-[#1A1A1A] text-xs font-semibold tracking-wider uppercase border border-[#DCD9D1] hover:border-[#8F704D] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <Bookmark className="w-4 h-4 text-[#8F704D]" />
                <span>Save Bookmatch to Moodboard</span>
              </button>

              <button
                onClick={() => onRequestQuote(selectedStone)}
                className="w-full py-3.5 rounded-xl bg-[#1A1A1A] hover:bg-[#33302B] text-white text-xs font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>Request Slab Allocation & Specs</span>
              </button>
            </div>

          </div>

          {/* Interactive Slab Canvas Visualizer Stage (Col 8) */}
          <div className="lg:col-span-8 order-1 lg:order-2 space-y-4">
            
            {/* Main Stage Frame */}
            <div className="relative rounded-2xl overflow-hidden bg-[#FFFFFF] border border-[#DCD9D1] shadow-xl p-4 sm:p-6">
              
              {/* Top Canvas Bar Controls */}
              <div className="flex items-center justify-between pb-4 border-b border-[#E5E2DA] text-xs text-[#5C574F]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="font-mono text-[#1A1A1A] font-semibold">{selectedStone.name}</span>
                  <span className="text-[#DCD9D1]">|</span>
                  <span className="capitalize">{bookmatchMode.replace('_', ' ')} Mode</span>
                </div>

                <div className="flex items-center gap-3">
                  {/* Zoom controller */}
                  <div className="hidden sm:flex items-center gap-1.5 bg-[#F8F7F4] px-2.5 py-1 rounded-lg border border-[#DCD9D1]">
                    <span className="text-[11px] text-[#7D776E]">Zoom:</span>
                    <button
                      onClick={() => setZoomLevel(Math.max(1, zoomLevel - 0.25))}
                      className="px-1.5 py-0.5 text-xs text-[#8F704D] hover:text-[#1A1A1A] font-bold"
                    >
                      -
                    </button>
                    <span className="font-mono text-[11px] text-[#1A1A1A] font-medium">{(zoomLevel * 100).toFixed(0)}%</span>
                    <button
                      onClick={() => setZoomLevel(Math.min(2.5, zoomLevel + 0.25))}
                      className="px-1.5 py-0.5 text-xs text-[#8F704D] hover:text-[#1A1A1A] font-bold"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => { setZoomLevel(1); setPanPosition({ x: 0, y: 0 }); }}
                    className="p-1.5 rounded-lg bg-[#F8F7F4] hover:bg-[#EAE7DF] text-[#5C574F] hover:text-[#1A1A1A] border border-[#DCD9D1] cursor-pointer"
                    title="Reset Zoom"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={handleShare}
                    className="p-1.5 rounded-lg bg-[#F8F7F4] hover:bg-[#EAE7DF] text-[#5C574F] hover:text-[#1A1A1A] border border-[#DCD9D1] cursor-pointer"
                    title="Share Configuration"
                  >
                    {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Dynamic Slabs Rendering Viewport */}
              <div className="relative h-[380px] sm:h-[480px] w-full mt-4 rounded-xl overflow-hidden bg-[#1A1A1A] border border-[#DCD9D1] flex items-center justify-center">
                
                {/* Lighting Filter Overlay Layer */}
                <div className={`absolute inset-0 z-20 pointer-events-none transition-all duration-700 ${getLightingStyle()}`}></div>

                {/* Simulated Wall Shadow / Architectural Reveal */}
                <div className="absolute inset-0 bg-radial from-transparent via-[#000000]/10 to-[#000000]/70 pointer-events-none z-10"></div>

                {/* Slabs Grid based on Bookmatch Mode */}
                <div 
                  className="w-full h-full grid transition-transform duration-300"
                  style={{
                    transform: `scale(${zoomLevel}) translate(${panPosition.x}px, ${panPosition.y}px)`
                  }}
                >
                  {/* Single Slab Mode */}
                  {bookmatchMode === 'single' && (
                    <div className="w-full h-full overflow-hidden">
                      <img
                        src={selectedStone.image}
                        alt="Slab"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}

                  {/* 2-Way Vertical Bookmatch (Left / Right Mirror) */}
                  {bookmatchMode === 'vertical_2x' && (
                    <div className="w-full h-full grid grid-cols-2">
                      <div className="w-full h-full overflow-hidden border-r border-[#ffffff15]">
                        <img
                          src={selectedStone.image}
                          alt="Slab A"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="w-full h-full overflow-hidden scale-x-[-1]">
                        <img
                          src={selectedStone.image}
                          alt="Slab B"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  )}

                  {/* 2-Way Horizontal Bookmatch (Top / Bottom Mirror) */}
                  {bookmatchMode === 'horizontal_2x' && (
                    <div className="w-full h-full grid grid-rows-2">
                      <div className="w-full h-full overflow-hidden border-b border-[#ffffff15]">
                        <img
                          src={selectedStone.image}
                          alt="Slab A"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="w-full h-full overflow-hidden scale-y-[-1]">
                        <img
                          src={selectedStone.image}
                          alt="Slab B"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  )}

                  {/* 4-Way Diamond Bookmatch */}
                  {bookmatchMode === 'diamond_4x' && (
                    <div className="w-full h-full grid grid-cols-2 grid-rows-2">
                      {/* Top Left: Normal */}
                      <div className="w-full h-full overflow-hidden border-r border-b border-[#ffffff15]">
                        <img src={selectedStone.image} alt="Slab 1" className="w-full h-full object-cover" />
                      </div>
                      {/* Top Right: Flipped X */}
                      <div className="w-full h-full overflow-hidden border-b border-[#ffffff15] scale-x-[-1]">
                        <img src={selectedStone.image} alt="Slab 2" className="w-full h-full object-cover" />
                      </div>
                      {/* Bottom Left: Flipped Y */}
                      <div className="w-full h-full overflow-hidden border-r border-[#ffffff15] scale-y-[-1]">
                        <img src={selectedStone.image} alt="Slab 3" className="w-full h-full object-cover" />
                      </div>
                      {/* Bottom Right: Flipped X & Y */}
                      <div className="w-full h-full overflow-hidden scale-x-[-1] scale-y-[-1]">
                        <img src={selectedStone.image} alt="Slab 4" className="w-full h-full object-cover" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Dimension Overlay Indicator */}
                <div className="absolute bottom-3 left-3 z-30 bg-[#FFFFFF]/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#DCD9D1] text-[10px] font-mono text-[#1A1A1A] font-medium shadow-xs">
                  Estimated Panel Dimensions: 3200mm × 2000mm (20mm Calibrated)
                </div>

                {/* Inspect Details Quick Trigger */}
                <button
                  onClick={() => onSelectProduct(selectedStone)}
                  className="absolute bottom-3 right-3 z-30 bg-[#FFFFFF]/95 hover:bg-[#8F704D] text-[#1A1A1A] hover:text-white px-3.5 py-1.5 rounded-lg border border-[#DCD9D1] text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer shadow-md"
                >
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span>Full Tech Specs</span>
                </button>
              </div>

              {/* Bottom Quick Feature Highlights */}
              <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-[11px]">
                <div className="bg-[#F8F7F4] p-3 rounded-xl border border-[#DCD9D1]">
                  <div className="text-[#7D776E] uppercase text-[9px]">Quarry Location</div>
                  <div className="text-[#1A1A1A] font-medium truncate">{selectedStone.originRegion}</div>
                </div>
                <div className="bg-[#F8F7F4] p-3 rounded-xl border border-[#DCD9D1]">
                  <div className="text-[#7D776E] uppercase text-[9px]">Absorption Rate</div>
                  <div className="text-[#1A1A1A] font-medium">{selectedStone.specs.waterAbsorption}</div>
                </div>
                <div className="bg-[#F8F7F4] p-3 rounded-xl border border-[#DCD9D1]">
                  <div className="text-[#7D776E] uppercase text-[9px]">Gangsaw Slabs In-Stock</div>
                  <div className="text-emerald-600 font-medium">{selectedStone.inStockSlabs} Matching Slabs</div>
                </div>
                <div className="bg-[#F8F7F4] p-3 rounded-xl border border-[#DCD9D1]">
                  <div className="text-[#7D776E] uppercase text-[9px]">Compressive Load</div>
                  <div className="text-[#1A1A1A] font-medium">{selectedStone.specs.compressiveStrength}</div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
