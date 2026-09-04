import React, { useState, useMemo } from 'react';
import { 
  Search, 
  SlidersHorizontal, 
  X, 
  Grid3X3, 
  LayoutList, 
  Bookmark, 
  Sliders, 
  Check, 
  ChevronRight, 
  Eye, 
  Sparkles,
  ArrowUpDown,
  Filter,
  CheckCircle2,
  PackagePlus,
  RefreshCw
} from 'lucide-react';
import { StoneProduct, StoneCategory, StoneColor, StoneTexture, StoneFinish } from '../types';
import { allProducts, allColors, allTextures, allFinishes, categoryMeta } from '../data/products';

interface CatalogPageProps {
  selectedCategory: string;
  setSelectedCategory: (category: any) => void;
  onSelectProduct: (product: StoneProduct) => void;
  onAddToMoodboard: (product: StoneProduct) => void;
  onToggleCompare: (product: StoneProduct) => void;
  comparisonStones: StoneProduct[];
  moodboardIds: string[];
  onRequestSample: (product: StoneProduct) => void;
}

export const CatalogPage: React.FC<CatalogPageProps> = ({
  selectedCategory,
  setSelectedCategory,
  onSelectProduct,
  onAddToMoodboard,
  onToggleCompare,
  comparisonStones,
  moodboardIds,
  onRequestSample
}) => {
  // Filter States
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedColor, setSelectedColor] = useState<string>('all');
  const [selectedTexture, setSelectedTexture] = useState<string>('all');
  const [selectedFinish, setSelectedFinish] = useState<string>('all');
  const [selectedRarity, setSelectedRarity] = useState<string>('all');
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);
  const [bookmatchOnly, setBookmatchOnly] = useState<boolean>(false);
  const [translucentOnly, setTranslucentOnly] = useState<boolean>(false);
  
  // Layout & Sort States
  const [viewMode, setViewMode] = useState<'grid' | 'editorial'>('grid');
  const [sortBy, setSortBy] = useState<'featured' | 'name' | 'rarity' | 'stock'>('featured');
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);

  // Pagination / Page Limit
  const [visibleCount, setVisibleCount] = useState<number>(24);

  // Filter Logic
  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      // Category filter
      if (selectedCategory !== 'all' && product.category !== selectedCategory) {
        return false;
      }

      // Search Query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesItalian = product.italianName?.toLowerCase().includes(query);
        const matchesOrigin = product.originCountry.toLowerCase().includes(query) || product.originRegion.toLowerCase().includes(query);
        const matchesColor = product.color.toLowerCase().includes(query);
        const matchesTexture = product.texture.toLowerCase().includes(query);
        if (!matchesName && !matchesItalian && !matchesOrigin && !matchesColor && !matchesTexture) {
          return false;
        }
      }

      // Color filter
      if (selectedColor !== 'all' && product.color !== selectedColor) {
        return false;
      }

      // Texture filter
      if (selectedTexture !== 'all' && product.texture !== selectedTexture) {
        return false;
      }

      // Finish filter
      if (selectedFinish !== 'all') {
        const hasFinish = product.finishes.some(f => f.toLowerCase().includes(selectedFinish.toLowerCase().split(' ')[0]));
        if (!hasFinish) return false;
      }

      // Rarity filter
      if (selectedRarity !== 'all' && product.rarity !== selectedRarity) {
        return false;
      }

      // Toggles
      if (inStockOnly && product.inStockSlabs <= 0) return false;
      if (bookmatchOnly && !product.bookmatchCompatible) return false;
      if (translucentOnly && !product.translucent) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      if (sortBy === 'stock') return b.inStockSlabs - a.inStockSlabs;
      if (sortBy === 'rarity') {
        const rarityWeights: Record<string, number> = {
          'Exclusive Reserve': 4,
          'Exotic Sintered': 3,
          'Signature Selection': 2,
          'Heritage Classic': 1
        };
        return (rarityWeights[b.rarity] || 0) - (rarityWeights[a.rarity] || 0);
      }
      // 'featured'
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return 0;
    });
  }, [
    selectedCategory,
    searchQuery,
    selectedColor,
    selectedTexture,
    selectedFinish,
    selectedRarity,
    inStockOnly,
    bookmatchOnly,
    translucentOnly,
    sortBy
  ]);

  const activeFilterCount = [
    selectedColor !== 'all',
    selectedTexture !== 'all',
    selectedFinish !== 'all',
    selectedRarity !== 'all',
    inStockOnly,
    bookmatchOnly,
    translucentOnly
  ].filter(Boolean).length;

  const handleResetFilters = () => {
    setSelectedColor('all');
    setSelectedTexture('all');
    setSelectedFinish('all');
    setSelectedRarity('all');
    setInStockOnly(false);
    setBookmatchOnly(false);
    setTranslucentOnly(false);
    setSearchQuery('');
  };

  const currentCategoryInfo = selectedCategory !== 'all' && selectedCategory in categoryMeta 
    ? categoryMeta[selectedCategory as keyof typeof categoryMeta]
    : null;

  return (
    <div className="py-12 bg-[#F8F7F4] min-h-screen text-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Breadcrumb & Heading */}
        <div className="mb-10 space-y-4">
          <div className="flex items-center gap-2 text-xs tracking-widest uppercase text-[#7D776E]">
            <span>Simplex Marble Granite</span>
            <span>/</span>
            <span className="text-[#8F704D] font-medium">Stone Catalog</span>
            {selectedCategory !== 'all' && (
              <>
                <span>/</span>
                <span className="text-[#1A1A1A] font-semibold">{selectedCategory.replace('_', ' & ')}</span>
              </>
            )}
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#1A1A1A]">
                {currentCategoryInfo ? currentCategoryInfo.title : 'Architectural Stone Slabs'}
              </h1>
              <p className="text-[#5C574F] text-sm sm:text-base font-light mt-2 max-w-2xl leading-relaxed">
                {currentCategoryInfo
                  ? currentCategoryInfo.description
                  : `Explore ${allProducts.length} consecutive quarried slabs across Italian marble, structural granite, sintered architectural porcelain, and exotic quartzites.`}
              </p>
            </div>

            {/* Quick Status / Total Slabs */}
            <div className="bg-[#FFFFFF] px-4 py-3 rounded-xl border border-[#DCD9D1] flex items-center gap-3 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span className="text-xs text-[#5C574F]">
                <strong className="text-[#1A1A1A] font-semibold">{filteredProducts.length}</strong> Slabs Matching Specifications
              </span>
            </div>
          </div>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 border-b border-[#DCD9D1] scrollbar-none">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase whitespace-nowrap transition-all cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-[#1A1A1A] text-white shadow-sm'
                : 'bg-[#FFFFFF] text-[#5C574F] hover:bg-[#EAE7DF] border border-[#DCD9D1]'
            }`}
          >
            All Collections ({allProducts.length})
          </button>
          <button
            onClick={() => setSelectedCategory('marble')}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase whitespace-nowrap transition-all cursor-pointer ${
              selectedCategory === 'marble'
                ? 'bg-[#1A1A1A] text-white shadow-sm'
                : 'bg-[#FFFFFF] text-[#5C574F] hover:bg-[#EAE7DF] border border-[#DCD9D1]'
            }`}
          >
            Italian Marble ({categoryMeta.marble.count})
          </button>
          <button
            onClick={() => setSelectedCategory('granite')}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase whitespace-nowrap transition-all cursor-pointer ${
              selectedCategory === 'granite'
                ? 'bg-[#1A1A1A] text-white shadow-sm'
                : 'bg-[#FFFFFF] text-[#5C574F] hover:bg-[#EAE7DF] border border-[#DCD9D1]'
            }`}
          >
            Exotic Granite ({categoryMeta.granite.count})
          </button>
          <button
            onClick={() => setSelectedCategory('tiles')}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase whitespace-nowrap transition-all cursor-pointer ${
              selectedCategory === 'tiles'
                ? 'bg-[#1A1A1A] text-white shadow-sm'
                : 'bg-[#FFFFFF] text-[#5C574F] hover:bg-[#EAE7DF] border border-[#DCD9D1]'
            }`}
          >
            Architectural Tiles ({categoryMeta.tiles.count})
          </button>
          <button
            onClick={() => setSelectedCategory('quartzite_onyx')}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase whitespace-nowrap transition-all cursor-pointer ${
              selectedCategory === 'quartzite_onyx'
                ? 'bg-[#1A1A1A] text-white shadow-sm'
                : 'bg-[#FFFFFF] text-[#5C574F] hover:bg-[#EAE7DF] border border-[#DCD9D1]'
            }`}
          >
            Quartzite & Onyx ({categoryMeta.quartzite_onyx.count})
          </button>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="bg-[#FFFFFF] p-4 sm:p-5 rounded-2xl border border-[#DCD9D1] space-y-4 mb-8 shadow-xs">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            
            {/* Instant Search Bar */}
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 text-[#7D776E] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by stone name, country, quarry, vein..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#F8F7F4] border border-[#DCD9D1] text-xs text-[#1A1A1A] placeholder-[#7D776E] focus:outline-none focus:border-[#8F704D] transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#7D776E] hover:text-[#1A1A1A]"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Quick Filter Pill Controls & View Mode */}
            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto justify-between md:justify-end">
              
              {/* Filter Drawer Toggle */}
              <button
                onClick={() => setIsFilterDrawerOpen(!isFilterDrawerOpen)}
                className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-medium border transition-all cursor-pointer ${
                  activeFilterCount > 0 || isFilterDrawerOpen
                    ? 'bg-[#1A1A1A] text-white border-[#1A1A1A] font-semibold'
                    : 'bg-[#F8F7F4] text-[#1A1A1A] border-[#DCD9D1] hover:bg-[#EAE7DF]'
                }`}
              >
                <Filter className="w-3.5 h-3.5" />
                <span>Filters</span>
                {activeFilterCount > 0 && (
                  <span className="bg-[#8F704D] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                    {activeFilterCount}
                  </span>
                )}
              </button>

              {/* Sort Dropdown */}
              <div className="flex items-center gap-2 bg-[#F8F7F4] px-3 py-1.5 rounded-xl border border-[#DCD9D1] text-xs">
                <ArrowUpDown className="w-3.5 h-3.5 text-[#7D776E]" />
                <span className="text-[#7D776E] hidden sm:inline">Sort:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-transparent text-[#1A1A1A] focus:outline-none cursor-pointer text-xs font-medium"
                >
                  <option value="featured">Featured Reserves</option>
                  <option value="name">Stone Name (A-Z)</option>
                  <option value="rarity">Rarity Tier</option>
                  <option value="stock">Slabs Available</option>
                </select>
              </div>

              {/* View Layout Toggle */}
              <div className="flex items-center bg-[#F8F7F4] p-1 rounded-xl border border-[#DCD9D1]">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                    viewMode === 'grid' ? 'bg-[#FFFFFF] text-[#8F704D] shadow-xs' : 'text-[#7D776E] hover:text-[#1A1A1A]'
                  }`}
                  title="Grid View"
                >
                  <Grid3X3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('editorial')}
                  className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                    viewMode === 'editorial' ? 'bg-[#FFFFFF] text-[#8F704D] shadow-xs' : 'text-[#7D776E] hover:text-[#1A1A1A]'
                  }`}
                  title="Editorial Luxury View"
                >
                  <LayoutList className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>

          {/* Expandable Advanced Filter Panel */}
          {isFilterDrawerOpen && (
            <div className="pt-5 border-t border-[#E5E2DA] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs">
              
              {/* Color Palette Filter */}
              <div className="space-y-2">
                <label className="text-[#8F704D] font-medium uppercase tracking-wider text-[11px] block">
                  Color Palette
                </label>
                <select
                  value={selectedColor}
                  onChange={(e) => setSelectedColor(e.target.value)}
                  className="w-full p-2.5 rounded-lg bg-[#F8F7F4] border border-[#DCD9D1] text-[#1A1A1A] focus:outline-none focus:border-[#8F704D]"
                >
                  <option value="all">All Stone Colors</option>
                  {allColors.map((color) => (
                    <option key={color} value={color}>{color}</option>
                  ))}
                </select>
              </div>

              {/* Vein / Texture Pattern Filter */}
              <div className="space-y-2">
                <label className="text-[#8F704D] font-medium uppercase tracking-wider text-[11px] block">
                  Texture & Pattern
                </label>
                <select
                  value={selectedTexture}
                  onChange={(e) => setSelectedTexture(e.target.value)}
                  className="w-full p-2.5 rounded-lg bg-[#F8F7F4] border border-[#DCD9D1] text-[#1A1A1A] focus:outline-none focus:border-[#8F704D]"
                >
                  <option value="all">All Vein & Texture Types</option>
                  {allTextures.map((tex) => (
                    <option key={tex} value={tex}>{tex}</option>
                  ))}
                </select>
              </div>

              {/* Surface Finish Type */}
              <div className="space-y-2">
                <label className="text-[#8F704D] font-medium uppercase tracking-wider text-[11px] block">
                  Surface Finish
                </label>
                <select
                  value={selectedFinish}
                  onChange={(e) => setSelectedFinish(e.target.value)}
                  className="w-full p-2.5 rounded-lg bg-[#F8F7F4] border border-[#DCD9D1] text-[#1A1A1A] focus:outline-none focus:border-[#8F704D]"
                >
                  <option value="all">All Architectural Finishes</option>
                  {allFinishes.map((finish) => (
                    <option key={finish} value={finish}>{finish}</option>
                  ))}
                </select>
              </div>

              {/* Rarity Tier */}
              <div className="space-y-2">
                <label className="text-[#8F704D] font-medium uppercase tracking-wider text-[11px] block">
                  Rarity Grade
                </label>
                <select
                  value={selectedRarity}
                  onChange={(e) => setSelectedRarity(e.target.value)}
                  className="w-full p-2.5 rounded-lg bg-[#F8F7F4] border border-[#DCD9D1] text-[#1A1A1A] focus:outline-none focus:border-[#8F704D]"
                >
                  <option value="all">All Rarity Grades</option>
                  <option value="Exclusive Reserve">Exclusive Reserve (Top 2%)</option>
                  <option value="Signature Selection">Signature Selection</option>
                  <option value="Heritage Classic">Heritage Classic</option>
                  <option value="Exotic Sintered">Exotic Sintered</option>
                </select>
              </div>

              {/* Quick Spec Toggles */}
              <div className="sm:col-span-2 lg:col-span-4 pt-3 flex flex-wrap items-center justify-between gap-4 border-t border-[#E5E2DA]">
                <div className="flex flex-wrap items-center gap-4">
                  <label className="flex items-center gap-2 cursor-pointer text-[#5C574F]">
                    <input
                      type="checkbox"
                      checked={bookmatchOnly}
                      onChange={(e) => setBookmatchOnly(e.target.checked)}
                      className="accent-[#8F704D] w-4 h-4 rounded"
                    />
                    <span>Bookmatch Compatible Only</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer text-[#5C574F]">
                    <input
                      type="checkbox"
                      checked={translucentOnly}
                      onChange={(e) => setTranslucentOnly(e.target.checked)}
                      className="accent-[#8F704D] w-4 h-4 rounded"
                    />
                    <span>Backlit Translucent Only</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer text-[#5C574F]">
                    <input
                      type="checkbox"
                      checked={inStockOnly}
                      onChange={(e) => setInStockOnly(e.target.checked)}
                      className="accent-[#8F704D] w-4 h-4 rounded"
                    />
                    <span>Ready Gangsaw Slabs in Stock</span>
                  </label>
                </div>

                {activeFilterCount > 0 && (
                  <button
                    onClick={handleResetFilters}
                    className="text-[#8F704D] hover:text-[#1A1A1A] flex items-center gap-1.5 cursor-pointer font-medium"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Reset All Filters</span>
                  </button>
                )}
              </div>

            </div>
          )}
        </div>

        {/* Active Filters Badges */}
        {activeFilterCount > 0 && (
          <div className="flex flex-wrap items-center gap-2 mb-6 text-xs">
            <span className="text-[#7D776E]">Active Filters:</span>
            {selectedColor !== 'all' && (
              <span className="px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#DCD9D1] text-[#8F704D] flex items-center gap-1.5 font-medium shadow-xs">
                Color: {selectedColor}
                <X className="w-3 h-3 cursor-pointer" onClick={() => setSelectedColor('all')} />
              </span>
            )}
            {selectedTexture !== 'all' && (
              <span className="px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#DCD9D1] text-[#8F704D] flex items-center gap-1.5 font-medium shadow-xs">
                Texture: {selectedTexture}
                <X className="w-3 h-3 cursor-pointer" onClick={() => setSelectedTexture('all')} />
              </span>
            )}
            {selectedFinish !== 'all' && (
              <span className="px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#DCD9D1] text-[#8F704D] flex items-center gap-1.5 font-medium shadow-xs">
                Finish: {selectedFinish.split(' ')[0]}
                <X className="w-3 h-3 cursor-pointer" onClick={() => setSelectedFinish('all')} />
              </span>
            )}
            {bookmatchOnly && (
              <span className="px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#DCD9D1] text-[#8F704D] flex items-center gap-1.5 font-medium shadow-xs">
                Bookmatch Only
                <X className="w-3 h-3 cursor-pointer" onClick={() => setBookmatchOnly(false)} />
              </span>
            )}
            {translucentOnly && (
              <span className="px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#DCD9D1] text-[#8F704D] flex items-center gap-1.5 font-medium shadow-xs">
                Translucent Only
                <X className="w-3 h-3 cursor-pointer" onClick={() => setTranslucentOnly(false)} />
              </span>
            )}
          </div>
        )}

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="py-24 text-center space-y-4 bg-[#FFFFFF] rounded-2xl border border-[#DCD9D1] shadow-sm">
            <Search className="w-12 h-12 text-[#7D776E] mx-auto" />
            <h3 className="font-cinzel text-xl font-bold text-[#1A1A1A]">No Stone Slabs Match Your Query</h3>
            <p className="text-xs text-[#5C574F] max-w-md mx-auto">
              Try adjusting your color palette, texture filter, or search keywords. Our geologists source bespoke blocks upon trade request.
            </p>
            <button
              onClick={handleResetFilters}
              className="px-6 py-2.5 rounded-full bg-[#1A1A1A] text-white font-semibold text-xs tracking-wider uppercase cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        )}

        {/* Products Grid View */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.slice(0, visibleCount).map((product) => {
              const isSavedInMoodboard = moodboardIds.includes(product.id);
              const isCompared = comparisonStones.some(s => s.id === product.id);

              return (
                <div
                  key={product.id}
                  className="group rounded-2xl overflow-hidden bg-[#FFFFFF] border border-[#DCD9D1] hover:border-[#8F704D] transition-all duration-300 flex flex-col justify-between shadow-md hover:shadow-xl"
                >
                  {/* Image Container with 4:3 Aspect */}
                  <div className="relative h-64 w-full overflow-hidden bg-[#1A1A1A]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                      <span className="px-2.5 py-0.5 rounded-full bg-[#FFFFFF]/90 backdrop-blur-md text-[#8F704D] text-[9px] font-semibold tracking-wider uppercase border border-[#DCD9D1]">
                        {product.rarity.split(' ')[0]}
                      </span>
                      {/* <span className="px-2 py-0.5 rounded-full bg-[#FFFFFF]/90 backdrop-blur-md text-[#1A1A1A] text-[9px] tracking-wider uppercase border border-[#DCD9D1] font-medium">
                        {product.inStockSlabs} Slabs
                      </span> */}
                    </div>

                    {/* Floating Action Overlay */}
                    <div className="absolute top-3 right-3 flex flex-col gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={(e) => { e.stopPropagation(); onAddToMoodboard(product); }}
                        className={`p-2 rounded-full backdrop-blur-md border transition-all cursor-pointer shadow-md ${
                          isSavedInMoodboard
                            ? 'bg-[#8F704D] text-white border-[#8F704D]'
                            : 'bg-[#FFFFFF]/90 text-[#1A1A1A] hover:bg-[#8F704D] hover:text-white border-[#DCD9D1]'
                        }`}
                        title={isSavedInMoodboard ? 'Saved in Moodboard' : 'Add to Moodboard'}
                      >
                        <Bookmark className="w-3.5 h-3.5" />
                      </button>

                      <button
                        onClick={(e) => { e.stopPropagation(); onToggleCompare(product); }}
                        className={`p-2 rounded-full backdrop-blur-md border transition-all cursor-pointer shadow-md ${
                          isCompared
                            ? 'bg-[#8F704D] text-white border-[#8F704D]'
                            : 'bg-[#FFFFFF]/90 text-[#1A1A1A] hover:bg-[#8F704D] hover:text-white border-[#DCD9D1]'
                        }`}
                        title="Compare Stone"
                      >
                        <Sliders className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Bookmatch Indicator Chip */}
                    {product.bookmatchCompatible && (
                      <div className="absolute bottom-3 left-3 bg-[#FFFFFF]/85 backdrop-blur-md px-2 py-0.5 rounded text-[9px] text-[#1A1A1A] border border-[#DCD9D1] font-medium">
                        Bookmatch Ready
                      </div>
                    )}
                  </div>

                  {/* Stone Info Card Body */}
                  <div className="p-5 space-y-3 flex-1 flex flex-col justify-between bg-[#FFFFFF]">
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-widest text-[#8F704D] font-semibold">
                        {product.originCountry} • {product.color.split('&')[0]}
                      </div>
                      <h3 
                        onClick={() => onSelectProduct(product)}
                        className="font-cinzel text-base font-bold text-[#1A1A1A] group-hover:text-[#8F704D] transition-colors cursor-pointer mt-0.5 line-clamp-1"
                      >
                        {product.name}
                      </h3>
                      <p className="text-[11px] text-[#5C574F] line-clamp-2 mt-1 leading-relaxed font-light">
                        {product.description}
                      </p>
                    </div>

                    {/* Card Actions */}
                    <div className="pt-2 flex items-center gap-2">
                      <button
                        onClick={() => onSelectProduct(product)}
                        className="flex-1 py-2.5 rounded-xl bg-[#F8F7F4] hover:bg-[#1A1A1A] hover:text-white text-[#1A1A1A] text-[11px] font-semibold tracking-wider uppercase transition-all flex items-center justify-center gap-1.5 cursor-pointer border border-[#DCD9D1]"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Specs & Visualizer</span>
                      </button>

                      <button
                        onClick={() => onRequestSample(product)}
                        className="p-2.5 rounded-xl bg-[#F8F7F4] hover:bg-[#EAE7DF] text-[#8F704D] border border-[#DCD9D1] cursor-pointer"
                        title="Order Sample Swatch"
                      >
                        <PackagePlus className="w-4 h-4" />
                      </button>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Editorial Luxury View */}
        {viewMode === 'editorial' && (
          <div className="space-y-8">
            {filteredProducts.slice(0, visibleCount).map((product) => {
              const isSavedInMoodboard = moodboardIds.includes(product.id);
              const isCompared = comparisonStones.some(s => s.id === product.id);

              return (
                <div
                  key={product.id}
                  className="rounded-2xl overflow-hidden bg-[#FFFFFF] border border-[#DCD9D1] hover:border-[#8F704D] transition-all p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-md hover:shadow-xl"
                >
                  <div className="lg:col-span-5 h-72 sm:h-80 rounded-xl overflow-hidden relative group bg-[#1A1A1A]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#FFFFFF]/90 backdrop-blur-md text-[#8F704D] text-[10px] font-semibold tracking-wider uppercase border border-[#DCD9D1]">
                      {product.rarity}
                    </span>
                  </div>

                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-xs font-mono uppercase tracking-widest text-[#8F704D] font-semibold">
                          {product.categoryLabel} • {product.originRegion}, {product.originCountry}
                        </div>
                        <h3 className="font-cinzel text-2xl font-bold text-[#1A1A1A] mt-1">
                          {product.name}
                        </h3>
                        {product.italianName && (
                          <div className="text-xs italic text-[#7D776E] font-cormorant">{product.italianName}</div>
                        )}
                      </div>
                      {/* <span className="text-base font-bold text-[#8F704D]">{product.priceTier}</span> */}
                    </div>

                    <p className="text-xs sm:text-sm text-[#5C574F] font-light leading-relaxed">
                      {product.description}
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-3 border-y border-[#E5E2DA] text-xs">
                      <div>
                        <span className="text-[#7D776E] text-[10px] uppercase block">Veining</span>
                        <span className="font-medium text-[#1A1A1A]">{product.texture}</span>
                      </div>
                      <div>
                        <span className="text-[#7D776E] text-[10px] uppercase block">Absorption</span>
                        <span className="font-medium text-[#1A1A1A]">{product.specs.waterAbsorption}</span>
                      </div>
                      <div>
                        <span className="text-[#7D776E] text-[10px] uppercase block">Compressive Load</span>
                        <span className="font-medium text-[#1A1A1A]">{product.specs.compressiveStrength}</span>
                      </div>
                      <div>
                        <span className="text-[#7D776E] text-[10px] uppercase block">In-Stock</span>
                        <span className="font-medium text-emerald-600">{product.inStockSlabs} Slabs Ready</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <button
                        onClick={() => onSelectProduct(product)}
                        className="px-6 py-3 rounded-xl bg-[#1A1A1A] hover:bg-[#33302B] text-white text-xs font-bold tracking-wider uppercase transition-all cursor-pointer shadow-sm"
                      >
                        Inspect Specifications & Visualizer
                      </button>

                      <button
                        onClick={() => onAddToMoodboard(product)}
                        className={`px-4 py-3 rounded-xl border text-xs font-medium tracking-wider uppercase transition-all flex items-center gap-2 cursor-pointer ${
                          isSavedInMoodboard
                            ? 'bg-[#8F704D] text-white border-[#8F704D]'
                            : 'bg-[#F8F7F4] text-[#1A1A1A] border-[#DCD9D1] hover:bg-[#EAE7DF]'
                        }`}
                      >
                        <Bookmark className="w-3.5 h-3.5" />
                        <span>{isSavedInMoodboard ? 'Saved in Moodboard' : 'Add to Moodboard'}</span>
                      </button>

                      <button
                        onClick={() => onToggleCompare(product)}
                        className="px-4 py-3 rounded-xl bg-[#F8F7F4] hover:bg-[#EAE7DF] text-[#1A1A1A] border border-[#DCD9D1] text-xs font-medium tracking-wider uppercase transition-all flex items-center gap-2 cursor-pointer"
                      >
                        <Sliders className="w-3.5 h-3.5" />
                        <span>{isCompared ? 'Compared' : 'Compare'}</span>
                      </button>

                      <button
                        onClick={() => onRequestSample(product)}
                        className="px-4 py-3 rounded-xl bg-[#F8F7F4] hover:bg-[#EAE7DF] text-[#8F704D] border border-[#DCD9D1] text-xs font-medium tracking-wider uppercase transition-all flex items-center gap-2 cursor-pointer"
                      >
                        <PackagePlus className="w-3.5 h-3.5" />
                        <span>Order Sample Swatch</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Load More Slabs Button */}
        {visibleCount < filteredProducts.length && (
          <div className="mt-14 text-center">
            <button
              onClick={() => setVisibleCount((prev) => prev + 24)}
              className="px-8 py-4 rounded-full bg-[#FFFFFF] hover:bg-[#F3F1EC] text-[#1A1A1A] border border-[#DCD9D1] hover:border-[#8F704D] text-xs font-semibold tracking-[0.16em] uppercase transition-all cursor-pointer shadow-xs"
            >
              Load More Stone Slabs ({filteredProducts.length - visibleCount} Remaining)
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
