import React, { useState } from 'react';
import { 
  X, 
  Layers, 
  Sparkles, 
  ZoomIn, 
  Bookmark, 
  Sliders, 
  Download, 
  Check, 
  Send, 
  Calendar, 
  Box, 
  ShieldCheck, 
  Building2, 
  Compass, 
  Maximize2,
  PackagePlus,
  Share2,
  ArrowRight
} from 'lucide-react';
import { StoneProduct } from '../types';
import { allProducts } from '../data/products';

interface ProductDetailModalProps {
  product: StoneProduct | null;
  onClose: () => void;
  onAddToMoodboard: (product: StoneProduct) => void;
  onToggleCompare: (product: StoneProduct) => void;
  onRequestQuote: (product: StoneProduct) => void;
  onRequestSample: (product: StoneProduct) => void;
  onSelectRelated: (product: StoneProduct) => void;
  isSavedInMoodboard: boolean;
  isCompared: boolean;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToMoodboard,
  onToggleCompare,
  onRequestQuote,
  onRequestSample,
  onSelectRelated,
  isSavedInMoodboard,
  isCompared
}) => {
  if (!product) return null;

  const [activeTab, setActiveTab] = useState<'slab' | 'bookmatch' | 'room' | 'specs'>('slab');
  const [activeFinish, setActiveFinish] = useState<string>(product.finishes[0]);
  const [activeRoom, setActiveRoom] = useState<'Living Room' | 'Bathroom' | 'Kitchen Island' | 'Facade'>('Bathroom');
  const [copiedLink, setCopiedLink] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  // Find related stones from same category or complementary colors
  const relatedStones = allProducts
    .filter(p => p.id !== product.id && (p.category === product.category || p.color === product.color))
    .slice(0, 3);

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleDownloadBIM = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  const roomImages = {
    'Bathroom': 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
    'Living Room': 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85',
    'Kitchen Island': 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85',
    'Facade': 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1200&q=85'
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto bg-black/60 backdrop-blur-md animate-in fade-in duration-300">
      <div 
        className="relative w-full max-w-6xl max-h-[92vh] flex flex-col bg-[#FFFFFF] border border-[#DCD9D1] rounded-3xl overflow-hidden shadow-2xl text-[#1A1A1A]"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#DCD9D1] bg-[#F8F7F4]">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-[#FFFFFF] text-[#8F704D] text-[10px] font-semibold tracking-wider uppercase border border-[#DCD9D1] shadow-xs">
              {product.categoryLabel}
            </span>
            <span className="text-xs text-[#7D776E] hidden sm:inline">•</span>
            <span className="text-xs font-mono text-[#7D776E] hidden sm:inline">
              Quarry ID: SMP-{product.id.toUpperCase()}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleShare}
              className="p-2 rounded-lg bg-[#FFFFFF] hover:bg-[#EAE7DF] text-[#5C574F] hover:text-[#1A1A1A] border border-[#DCD9D1] transition-colors cursor-pointer text-xs flex items-center gap-1.5 shadow-xs"
              title="Share Stone Link"
            >
              {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline font-medium">Share</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-[#FFFFFF] hover:bg-[#1A1A1A] text-[#7D776E] hover:text-white border border-[#DCD9D1] transition-all cursor-pointer shadow-xs"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto flex-1 p-6 sm:p-8 space-y-8 bg-[#FFFFFF]">
          
          {/* Main Visualizer Stage + Key Stone Info */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Interactive Visualizer & Slabs (Col 7) */}
            <div className="lg:col-span-7 space-y-4">
              
              {/* Visualizer Mode Tabs */}
              <div className="flex items-center gap-2 border-b border-[#DCD9D1] pb-3 text-xs">
                <button
                  onClick={() => setActiveTab('slab')}
                  className={`pb-1 px-2 font-medium tracking-wider uppercase transition-colors cursor-pointer ${
                    activeTab === 'slab' ? 'text-[#8F704D] border-b-2 border-[#8F704D]' : 'text-[#7D776E] hover:text-[#1A1A1A]'
                  }`}
                >
                  High-Res Slab
                </button>
                {product.bookmatchCompatible && (
                  <button
                    onClick={() => setActiveTab('bookmatch')}
                    className={`pb-1 px-2 font-medium tracking-wider uppercase transition-colors cursor-pointer ${
                      activeTab === 'bookmatch' ? 'text-[#8F704D] border-b-2 border-[#8F704D]' : 'text-[#7D776E] hover:text-[#1A1A1A]'
                    }`}
                  >
                    2x Bookmatch Mirror
                  </button>
                )}
                <button
                  onClick={() => setActiveTab('room')}
                  className={`pb-1 px-2 font-medium tracking-wider uppercase transition-colors cursor-pointer ${
                    activeTab === 'room' ? 'text-[#8F704D] border-b-2 border-[#8F704D]' : 'text-[#7D776E] hover:text-[#1A1A1A]'
                  }`}
                >
                  Room Application
                </button>
                <button
                  onClick={() => setActiveTab('specs')}
                  className={`pb-1 px-2 font-medium tracking-wider uppercase transition-colors cursor-pointer ${
                    activeTab === 'specs' ? 'text-[#8F704D] border-b-2 border-[#8F704D]' : 'text-[#7D776E] hover:text-[#1A1A1A]'
                  }`}
                >
                  Technical Sheet
                </button>
              </div>

              {/* Viewport Frame */}
              <div className="relative h-[340px] sm:h-[440px] w-full rounded-2xl overflow-hidden bg-[#F4F2EE] border border-[#DCD9D1] flex items-center justify-center shadow-inner">
                
                {/* 1. Single Slab View */}
                {activeTab === 'slab' && (
                  <div className="w-full h-full relative group">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                    <div className="absolute bottom-3 left-3 bg-[#FFFFFF]/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#DCD9D1] text-[10px] text-[#1A1A1A] font-medium shadow-xs">
                      Average Gangsaw Sizing: 3200mm × 1950mm × 20mm
                    </div>
                  </div>
                )}

                {/* 2. Bookmatch Mirror View */}
                {activeTab === 'bookmatch' && (
                  <div className="w-full h-full grid grid-cols-2">
                    <div className="w-full h-full overflow-hidden border-r border-[#DCD9D1]">
                      <img src={product.image} alt="Slab A" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-full h-full overflow-hidden scale-x-[-1]">
                      <img src={product.image} alt="Slab B" className="w-full h-full object-cover" />
                    </div>
                  </div>
                )}

                {/* 3. Room Application 3D Preview */}
                {activeTab === 'room' && (
                  <div className="w-full h-full relative">
                    <img
                      src={roomImages[activeRoom]}
                      alt={activeRoom}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                    {/* Room Type Switcher Chips */}
                    <div className="absolute top-4 left-4 right-4 flex flex-wrap gap-2">
                      {(['Bathroom', 'Living Room', 'Kitchen Island', 'Facade'] as const).map((room) => (
                        <button
                          key={room}
                          onClick={() => setActiveRoom(room)}
                          className={`px-3 py-1 rounded-full text-[10px] font-medium tracking-wider uppercase transition-all cursor-pointer ${
                            activeRoom === room
                              ? 'bg-[#1A1A1A] text-white font-bold shadow-xs'
                              : 'bg-[#FFFFFF]/90 text-[#1A1A1A] backdrop-blur-md border border-[#DCD9D1]'
                          }`}
                        >
                          {room}
                        </button>
                      ))}
                    </div>

                    <div className="absolute bottom-4 left-4 text-xs text-white">
                      <div className="font-semibold text-[#DFB98A]">{activeRoom} Simulation</div>
                      <div className="text-[11px] text-[#D4CFC5]">Custom bookmatched monolithic installation</div>
                    </div>
                  </div>
                )}

                {/* 4. Technical Specs Tab */}
                {activeTab === 'specs' && (
                  <div className="w-full h-full p-6 bg-[#F8F7F4] overflow-y-auto space-y-4">
                    <h4 className="font-cinzel text-lg font-bold text-[#8F704D]">Geological & Lab Test Metrics</h4>
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="p-3 rounded-xl bg-[#FFFFFF] border border-[#DCD9D1] shadow-xs">
                        <span className="text-[#7D776E] block text-[10px] uppercase font-semibold">Bulk Density</span>
                        <span className="font-semibold text-[#1A1A1A]">{product.specs.density}</span>
                      </div>
                      <div className="p-3 rounded-xl bg-[#FFFFFF] border border-[#DCD9D1] shadow-xs">
                        <span className="text-[#7D776E] block text-[10px] uppercase font-semibold">Water Absorption</span>
                        <span className="font-semibold text-[#1A1A1A]">{product.specs.waterAbsorption}</span>
                      </div>
                      <div className="p-3 rounded-xl bg-[#FFFFFF] border border-[#DCD9D1] shadow-xs">
                        <span className="text-[#7D776E] block text-[10px] uppercase font-semibold">Compressive Strength</span>
                        <span className="font-semibold text-[#1A1A1A]">{product.specs.compressiveStrength}</span>
                      </div>
                      <div className="p-3 rounded-xl bg-[#FFFFFF] border border-[#DCD9D1] shadow-xs">
                        <span className="text-[#7D776E] block text-[10px] uppercase font-semibold">Flexural Strength</span>
                        <span className="font-semibold text-[#1A1A1A]">{product.specs.flexuralStrength}</span>
                      </div>
                      <div className="p-3 rounded-xl bg-[#FFFFFF] border border-[#DCD9D1] shadow-xs">
                        <span className="text-[#7D776E] block text-[10px] uppercase font-semibold">Quarry Provenance</span>
                        <span className="font-semibold text-[#1A1A1A]">{product.specs.quarryOrigin}</span>
                      </div>
                      <div className="p-3 rounded-xl bg-[#FFFFFF] border border-[#DCD9D1] shadow-xs">
                        <span className="text-[#7D776E] block text-[10px] uppercase font-semibold">Porosity Rating</span>
                        <span className="font-semibold text-[#1A1A1A]">{product.specs.porosity}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Surface Finish Switcher Chips */}
              <div className="flex items-center justify-between gap-2 pt-2">
                <span className="text-[11px] text-[#7D776E] uppercase tracking-wider font-semibold">Available Finishes:</span>
                <div className="flex flex-wrap gap-1.5">
                  {product.finishes.map((finish) => (
                    <button
                      key={finish}
                      onClick={() => setActiveFinish(finish)}
                      className={`px-3 py-1 rounded-lg text-[10px] font-medium tracking-wider uppercase transition-all cursor-pointer ${
                        activeFinish === finish
                          ? 'bg-[#1A1A1A] text-white font-bold shadow-xs'
                          : 'bg-[#F8F7F4] text-[#5C574F] border border-[#DCD9D1] hover:bg-[#EAE7DF]'
                      }`}
                    >
                      {finish.split(' ')[0]}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Stone Title, Descriptions, CTAs (Col 5) */}
            <div className="lg:col-span-5 space-y-6">
              
              <div>
                <div className="text-xs font-mono uppercase tracking-widest text-[#8F704D] font-semibold">
                  {product.originCountry} • {product.originRegion}
                </div>
                <h2 className="font-cinzel text-3xl font-bold text-[#1A1A1A] mt-1">
                  {product.name}
                </h2>
                {product.italianName && (
                  <p className="text-sm italic text-[#7D776E] font-cormorant mt-0.5">
                    {product.italianName}
                  </p>
                )}
              </div>

              {/* Badges & Stock Status */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-[#FFFFFF] text-[#8F704D] text-xs font-semibold border border-[#DCD9D1] shadow-xs">
                  {product.rarity}
                </span>
                <span className="px-3 py-1 rounded-full bg-[#FFFFFF] text-emerald-600 text-xs font-medium border border-emerald-500/20 flex items-center gap-1.5 shadow-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                  {product.inStockSlabs} Slabs in Stock
                </span>
                <span className="px-3 py-1 rounded-full bg-[#FFFFFF] text-[#5C574F] text-xs border border-[#DCD9D1] shadow-xs">
                  Price Tier: {product.priceTier}
                </span>
              </div>

              {/* Description & Architectural Notes */}
              <div className="space-y-3 text-xs sm:text-sm text-[#5C574F] font-light leading-relaxed">
                <p>{product.description}</p>
                <div className="p-3.5 rounded-xl bg-[#F8F7F4] border border-[#DCD9D1] space-y-1">
                  <div className="text-[10px] uppercase font-semibold text-[#8F704D] tracking-wider">
                    Architectural Specification Note
                  </div>
                  <p className="text-xs text-[#5C574F]">{product.architecturalNotes}</p>
                </div>
              </div>

              {/* Recommended Applications */}
              <div>
                <span className="text-[11px] text-[#7D776E] uppercase tracking-wider block mb-2 font-semibold">
                  Recommended Architectural Uses:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {product.specs.recommendedApplications.map((use, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md bg-[#F8F7F4] text-[11px] text-[#5C574F] border border-[#DCD9D1]"
                    >
                      {use}
                    </span>
                  ))}
                </div>
              </div>

              {/* Primary Call to Action Buttons */}
              <div className="space-y-3 pt-2">
                
                {/* 1. Request Trade Quotation */}
                <button
                  onClick={() => onRequestQuote(product)}
                  className="w-full py-4 rounded-xl bg-[#1A1A1A] hover:bg-[#33302B] text-white text-xs font-bold tracking-[0.16em] uppercase transition-all shadow-md flex items-center justify-center gap-2.5 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Request Trade Quotation & Slab Allocation</span>
                </button>

                {/* 2. Order Sample Kit */}
                <button
                  onClick={() => onRequestSample(product)}
                  className="w-full py-3.5 rounded-xl bg-[#FFFFFF] hover:bg-[#F8F7F4] text-[#1A1A1A] border border-[#DCD9D1] hover:border-[#8F704D] text-xs font-semibold tracking-wider uppercase transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <PackagePlus className="w-4 h-4 text-[#8F704D]" />
                  <span>Order 150×150mm Hand-Polished Sample Box</span>
                </button>

                {/* Secondary Action Grid */}
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => onAddToMoodboard(product)}
                    className={`py-2.5 rounded-lg text-[11px] font-medium tracking-wider uppercase border transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-xs ${
                      isSavedInMoodboard
                        ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]'
                        : 'bg-[#FFFFFF] text-[#5C574F] border-[#DCD9D1] hover:bg-[#F8F7F4]'
                    }`}
                  >
                    <Bookmark className="w-3.5 h-3.5" />
                    <span className="truncate">{isSavedInMoodboard ? 'Saved' : 'Moodboard'}</span>
                  </button>

                  <button
                    onClick={() => onToggleCompare(product)}
                    className="py-2.5 rounded-lg bg-[#FFFFFF] hover:bg-[#F8F7F4] text-[#5C574F] border border-[#DCD9D1] text-[11px] font-medium tracking-wider uppercase transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <Sliders className="w-3.5 h-3.5" />
                    <span>{isCompared ? 'Comparing' : 'Compare'}</span>
                  </button>

                  <button
                    onClick={handleDownloadBIM}
                    className="py-2.5 rounded-lg bg-[#FFFFFF] hover:bg-[#F8F7F4] text-[#5C574F] border border-[#DCD9D1] text-[11px] font-medium tracking-wider uppercase transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                    title="Download High-Res 4K Seamless Texture & BIM Specs"
                  >
                    {downloadSuccess ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Download className="w-3.5 h-3.5" />}
                    <span>{downloadSuccess ? 'Downloaded' : 'BIM / 4K'}</span>
                  </button>
                </div>

              </div>

            </div>

          </div>

          {/* Related / Complementary Stone Recommendations */}
          <div className="pt-8 border-t border-[#DCD9D1] space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-cinzel text-lg font-bold text-[#1A1A1A]">
                Complementary Stone Pairings
              </h3>
              <span className="text-xs text-[#7D776E]">Selected by Senior Architects</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedStones.map((stone) => (
                <div
                  key={stone.id}
                  onClick={() => onSelectRelated(stone)}
                  className="group p-3 rounded-xl bg-[#F8F7F4] border border-[#DCD9D1] hover:border-[#8F704D] transition-all cursor-pointer flex items-center gap-3 shadow-xs"
                >
                  <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0 bg-[#1A1A1A]">
                    <img src={stone.image} alt={stone.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-[10px] text-[#8F704D] uppercase tracking-wider font-semibold">{stone.categoryLabel}</div>
                    <div className="font-cinzel text-xs font-bold text-[#1A1A1A] truncate mt-0.5">{stone.name}</div>
                    <div className="text-[11px] text-[#7D776E]">{stone.originCountry}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
