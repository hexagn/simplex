import React, { useState } from 'react';
import { 
  X, 
  Trash2, 
  Send, 
  Layers, 
  FileSpreadsheet, 
  Check, 
  Plus, 
  PackagePlus, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { MoodboardItem, StoneProduct } from '../types';

interface MoodboardDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  moodboard: MoodboardItem[];
  onRemoveFromMoodboard: (stoneId: string) => void;
  onUpdateMoodboardItem: (stoneId: string, updates: Partial<MoodboardItem>) => void;
  onSelectProduct: (product: StoneProduct) => void;
  onSubmitTradeInquiry: (selectedStones: StoneProduct[]) => void;
}

export const MoodboardDrawer: React.FC<MoodboardDrawerProps> = ({
  isOpen,
  onClose,
  moodboard,
  onRemoveFromMoodboard,
  onUpdateMoodboardItem,
  onSelectProduct,
  onSubmitTradeInquiry
}) => {
  if (!isOpen) return null;

  const [projectName, setProjectName] = useState('Villa Panorama - Master Suite');
  const [exportedSuccess, setExportedSuccess] = useState(false);

  const roomOptions = [
    'Master Bathroom & Vanities',
    'Gourmet Waterfall Island',
    'Living Room Feature Wall',
    'Grand Foyer & Staircase',
    'Outdoor Terrace & Pool',
    'Executive Boardroom',
    'Wine Cellar & Tasting Bar'
  ];

  const totalEstimatedSqFt = moodboard.reduce((sum, item) => sum + (item.quantitySqFt || 450), 0);

  const handleExportSpecSheet = () => {
    setExportedSuccess(true);
    setTimeout(() => setExportedSuccess(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/50 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div 
          className="w-screen max-w-xl bg-[#FFFFFF] border-l border-[#DCD9D1] shadow-2xl flex flex-col text-[#1A1A1A]"
          onClick={(e) => e.stopPropagation()}
        >
          
          {/* Header */}
          <div className="p-6 border-b border-[#DCD9D1] bg-[#F8F7F4] flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8F704D]">
                <Layers className="w-3.5 h-3.5" />
                <span>Designer Spec Tray</span>
              </div>
              <h2 className="font-cinzel text-xl font-bold text-[#1A1A1A] mt-1">
                Project Stone Moodboard
              </h2>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-[#FFFFFF] hover:bg-[#1A1A1A] text-[#7D776E] hover:text-white border border-[#DCD9D1] transition-all cursor-pointer shadow-xs"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Project Details Top Bar */}
          <div className="px-6 py-4 bg-[#F8F7F4] border-b border-[#DCD9D1] space-y-2">
            <label className="text-[10px] uppercase font-semibold text-[#7D776E] tracking-wider block">
              Project Name / Reference:
            </label>
            <input
              type="text"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-[#FFFFFF] border border-[#DCD9D1] text-xs text-[#1A1A1A] focus:outline-none focus:border-[#8F704D] shadow-xs"
            />
          </div>

          {/* Scrollable Swatches Tray */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-[#FFFFFF]">
            {moodboard.length === 0 ? (
              <div className="py-20 text-center space-y-4">
                <Layers className="w-12 h-12 text-[#B3AEA3] mx-auto" />
                <h3 className="font-cinzel text-lg font-bold text-[#1A1A1A]">Your Moodboard is Empty</h3>
                <p className="text-xs text-[#7D776E] max-w-xs mx-auto font-light leading-relaxed">
                  Browse our catalog and click "Add to Moodboard" to collect candidate slabs, assign room zones, and request sample boxes.
                </p>
              </div>
            ) : (
              moodboard.filter(item => item && item.stone && item.stone.id).map((item) => (
                <div
                  key={item.stone.id}
                  className="p-4 rounded-2xl bg-[#F8F7F4] border border-[#DCD9D1] space-y-3 relative group shadow-xs"
                >
                  <div className="flex items-start gap-3">
                    {/* Thumbnail */}
                    <div 
                      onClick={() => onSelectProduct(item.stone)}
                      className="w-20 h-20 rounded-xl overflow-hidden shrink-0 bg-[#1A1A1A] cursor-pointer border border-[#DCD9D1]"
                    >
                      <img src={item.stone.image} alt={item.stone.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                    </div>

                    {/* Stone Info */}
                    <div className="flex-1 overflow-hidden">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <span className="text-[10px] text-[#8F704D] uppercase tracking-wider font-semibold">
                            {item.stone.categoryLabel}
                          </span>
                          <h4 
                            onClick={() => onSelectProduct(item.stone)}
                            className="font-cinzel text-sm font-bold text-[#1A1A1A] hover:text-[#8F704D] transition-colors cursor-pointer truncate"
                          >
                            {item.stone.name}
                          </h4>
                          <div className="text-[11px] text-[#7D776E]">{item.stone.originCountry} • {item.stone.rarity}</div>
                        </div>

                        <button
                          onClick={() => onRemoveFromMoodboard(item.stone.id)}
                          className="text-[#7D776E] hover:text-rose-600 p-1 transition-colors cursor-pointer"
                          title="Remove from tray"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Room Allocation & Estimated SqFt */}
                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#DCD9D1] text-xs">
                    <div>
                      <label className="text-[9px] text-[#7D776E] uppercase font-semibold block mb-1">Allocated Zone:</label>
                      <select
                        value={item.allocatedRoom || roomOptions[0]}
                        onChange={(e) => onUpdateMoodboardItem(item.stone.id, { allocatedRoom: e.target.value })}
                        className="w-full p-1.5 rounded-lg bg-[#FFFFFF] border border-[#DCD9D1] text-[11px] text-[#1A1A1A] focus:outline-none shadow-xs"
                      >
                        {roomOptions.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="text-[9px] text-[#7D776E] uppercase font-semibold block mb-1">Estimated Sq.Ft:</label>
                      <input
                        type="number"
                        value={item.quantitySqFt || 450}
                        onChange={(e) => onUpdateMoodboardItem(item.stone.id, { quantitySqFt: Number(e.target.value) })}
                        className="w-full p-1.5 rounded-lg bg-[#FFFFFF] border border-[#DCD9D1] text-[11px] text-[#1A1A1A] focus:outline-none shadow-xs"
                        step="50"
                        min="50"
                      />
                    </div>
                  </div>

                </div>
              ))
            )}
          </div>

          {/* Footer Summary & CTAs */}
          {moodboard.length > 0 && (
            <div className="p-6 border-t border-[#DCD9D1] bg-[#F8F7F4] space-y-4">
              
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#7D776E]">Total Curated Stones:</span>
                <span className="font-semibold text-[#1A1A1A]">{moodboard.filter(m => m && m.stone).length} Varieties</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#7D776E]">Estimated Total Surface:</span>
                <span className="font-bold text-[#8F704D] font-mono">{totalEstimatedSqFt.toLocaleString()} sq.ft</span>
              </div>

              <div className="space-y-2 pt-2">
                <button
                  onClick={() => onSubmitTradeInquiry(moodboard.filter(m => m && m.stone).map(m => m.stone))}
                  className="w-full py-3.5 rounded-xl bg-[#1A1A1A] hover:bg-[#33302B] text-white text-xs font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Moodboard For Trade Quote</span>
                </button>

                <button
                  onClick={handleExportSpecSheet}
                  className="w-full py-3 rounded-xl bg-[#FFFFFF] hover:bg-[#EAE7DF] text-[#1A1A1A] border border-[#DCD9D1] text-xs font-medium tracking-wider uppercase transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  {exportedSuccess ? <Check className="w-4 h-4 text-emerald-600" /> : <FileSpreadsheet className="w-4 h-4 text-[#8F704D]" />}
                  <span>{exportedSuccess ? 'Spec Sheet PDF Generated' : 'Export Architectural Schedule'}</span>
                </button>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
};
