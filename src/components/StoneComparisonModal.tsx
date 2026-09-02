import React from 'react';
import { X, Sliders, Check, Trash2, Send, Bookmark } from 'lucide-react';
import { StoneProduct } from '../types';

interface StoneComparisonModalProps {
  isOpen: boolean;
  onClose: () => void;
  stones: StoneProduct[];
  onRemoveStone: (id: string) => void;
  onClearAll: () => void;
  onSelectProduct: (stone: StoneProduct) => void;
  onAddToMoodboard: (stone: StoneProduct) => void;
  onRequestQuote: (stones: StoneProduct[]) => void;
}

export const StoneComparisonModal: React.FC<StoneComparisonModalProps> = ({
  isOpen,
  onClose,
  stones,
  onRemoveStone,
  onClearAll,
  onSelectProduct,
  onAddToMoodboard,
  onRequestQuote
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-md animate-in fade-in duration-300">
      <div 
        className="relative w-full max-w-5xl max-h-[92vh] flex flex-col bg-[#FFFFFF] border border-[#DCD9D1] rounded-3xl overflow-hidden shadow-2xl text-[#1A1A1A]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-[#DCD9D1] bg-[#F8F7F4] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Sliders className="w-5 h-5 text-[#8F704D]" />
            <div>
              <h2 className="font-cinzel text-xl font-bold text-[#1A1A1A]">
                Side-by-Side Slab Comparison
              </h2>
              <span className="text-xs text-[#7D776E]">
                Comparing {stones.length} of 3 maximum architectural stone varieties
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {stones.length > 0 && (
              <button
                onClick={onClearAll}
                className="text-xs text-[#7D776E] hover:text-rose-600 cursor-pointer font-medium"
              >
                Clear All
              </button>
            )}
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-[#FFFFFF] hover:bg-[#1A1A1A] text-[#7D776E] hover:text-white border border-[#DCD9D1] transition-all cursor-pointer shadow-xs"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Comparison Grid */}
        <div className="overflow-y-auto flex-1 p-6 space-y-6 bg-[#FFFFFF]">
          {stones.length === 0 ? (
            <div className="py-20 text-center space-y-3">
              <Sliders className="w-12 h-12 text-[#B3AEA3] mx-auto" />
              <h3 className="font-cinzel text-lg font-bold text-[#1A1A1A]">No Stones Selected for Comparison</h3>
              <p className="text-xs text-[#7D776E] max-w-sm mx-auto">
                Click the compare icon on any stone slab in the catalog to evaluate vein patterns, compressive strengths, and water absorption rates side-by-side.
              </p>
            </div>
          ) : (
            <div className={`grid grid-cols-${stones.length} gap-4`}>
              {stones.map((stone) => (
                <div key={stone.id} className="p-4 rounded-2xl bg-[#F8F7F4] border border-[#DCD9D1] space-y-4 shadow-xs">
                  {/* Top Image & Remove */}
                  <div className="relative h-48 rounded-xl overflow-hidden bg-[#1A1A1A] group">
                    <img src={stone.image} alt={stone.name} className="w-full h-full object-cover" />
                    <button
                      onClick={() => onRemoveStone(stone.id)}
                      className="absolute top-2 right-2 p-1.5 rounded-full bg-black/60 hover:bg-rose-500 text-white transition-colors cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div>
                    <span className="text-[10px] text-[#8F704D] uppercase tracking-wider font-semibold">
                      {stone.categoryLabel}
                    </span>
                    <h3 className="font-cinzel text-base font-bold text-[#1A1A1A] mt-0.5 truncate">
                      {stone.name}
                    </h3>
                    <div className="text-xs text-[#7D776E]">{stone.originRegion}, {stone.originCountry}</div>
                  </div>

                  {/* Spec Comparisons */}
                  <div className="space-y-2 text-xs border-t border-[#DCD9D1] pt-3">
                    <div className="flex justify-between py-1 border-b border-[#EAE7DF]">
                      <span className="text-[#7D776E]">Rarity Tier:</span>
                      <span className="text-[#8F704D] font-medium">{stone.rarity}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-[#EAE7DF]">
                      <span className="text-[#7D776E]">Water Absorption:</span>
                      <span className="text-[#1A1A1A] font-medium">{stone.specs.waterAbsorption}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-[#EAE7DF]">
                      <span className="text-[#7D776E]">Compressive Load:</span>
                      <span className="text-[#1A1A1A] font-medium">{stone.specs.compressiveStrength}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-[#EAE7DF]">
                      <span className="text-[#7D776E]">Flexural Strength:</span>
                      <span className="text-[#1A1A1A] font-medium">{stone.specs.flexuralStrength}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-[#EAE7DF]">
                      <span className="text-[#7D776E]">Bookmatch Ready:</span>
                      <span className={stone.bookmatchCompatible ? 'text-emerald-700 font-semibold' : 'text-[#7D776E]'}>
                        {stone.bookmatchCompatible ? 'Yes (Sequential)' : 'No'}
                      </span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-[#EAE7DF]">
                      <span className="text-[#7D776E]">Translucency:</span>
                      <span className={stone.translucent ? 'text-amber-800 font-semibold' : 'text-[#7D776E]'}>
                        {stone.translucent ? 'Backlit Capable' : 'Solid Opaque'}
                      </span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-[#7D776E]">In-Stock Slabs:</span>
                      <span className="text-emerald-700 font-medium">{stone.inStockSlabs} Available</span>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-col gap-2">
                    <button
                      onClick={() => onSelectProduct(stone)}
                      className="w-full py-2.5 rounded-xl bg-[#FFFFFF] hover:bg-[#1A1A1A] hover:text-white text-[#1A1A1A] border border-[#DCD9D1] text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer shadow-xs"
                    >
                      View Full Details
                    </button>
                  </div>

                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {stones.length > 0 && (
          <div className="p-6 border-t border-[#DCD9D1] bg-[#F8F7F4] flex items-center justify-between">
            <span className="text-xs text-[#7D776E]">Need help selecting between these stones?</span>
            <button
              onClick={() => onRequestQuote(stones)}
              className="px-6 py-3 rounded-xl bg-[#1A1A1A] hover:bg-[#33302B] text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-xs"
            >
              <Send className="w-4 h-4" />
              <span>Request Quote for Compared Stones</span>
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
