import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CategorySpotlight } from './components/CategorySpotlight';
import { InteractiveVisualizerSection } from './components/InteractiveVisualizerSection';
import { CatalogPage } from './components/CatalogPage';
import { ProjectGalleryPage } from './components/ProjectGalleryPage';
import { AboutPage } from './components/AboutPage';
import { BlogsPage } from './components/BlogsPage';
import { ContactPage } from './components/ContactPage';
import { ProductDetailModal } from './components/ProductDetailModal';
import { MoodboardDrawer } from './components/MoodboardDrawer';
import { StoneComparisonModal } from './components/StoneComparisonModal';
import { Footer } from './components/Footer';

import { StoneProduct, MoodboardItem } from './types';
import { allProducts, getProductById, getProductByName } from './data/products';
import { projectCaseStudies } from './data/projects';
import { blogPosts } from './data/blogs';

export function App() {
  // Navigation State
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Interactive Product Modal State
  const [activeModalProduct, setActiveModalProduct] = useState<StoneProduct | null>(null);

  // Moodboard State with Local Storage persistence
  const [moodboard, setMoodboard] = useState<MoodboardItem[]>(() => {
    try {
      const saved = localStorage.getItem('simplex_moodboard');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error(e);
    }
    // Default initial curated selections
    return [
      {
        stone: allProducts[0], // Calacatta Borghini
        quantitySqFt: 650,
        allocatedRoom: 'Master Bathroom & Vanities',
        notes: 'Requested 2x Bookmatched sequential slabs for master shower feature wall.'
      },
      {
        stone: allProducts[150], // Patagonia Quartzite
        quantitySqFt: 380,
        allocatedRoom: 'Gourmet Waterfall Island',
        notes: 'LED backlight sub-assembly for translucent crystal zone.'
      }
    ];
  });

  const [isMoodboardOpen, setIsMoodboardOpen] = useState(false);

  // Comparison Stones State (Max 3)
  const [comparisonStones, setComparisonStones] = useState<StoneProduct[]>([]);
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);

  // Pre-filled RFQ context
  const [prefilledStoneForQuote, setPrefilledStoneForQuote] = useState<StoneProduct | null>(null);
  const [prefilledStonesForQuote, setPrefilledStonesForQuote] = useState<StoneProduct[]>([]);
  const [prefilledTopicForContact, setPrefilledTopicForContact] = useState<string>('');

  // Persist moodboard to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('simplex_moodboard', JSON.stringify(moodboard));
    } catch (e) {
      console.error(e);
    }
  }, [moodboard]);

  // Scroll to top on navigation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  // Moodboard actions
  const handleAddToMoodboard = (product: StoneProduct) => {
    setMoodboard((prev) => {
      const exists = prev.find(item => item.stone.id === product.id);
      if (exists) {
        // Toggle remove if already in moodboard
        return prev.filter(item => item.stone.id !== product.id);
      }
      return [
        ...prev,
        {
          stone: product,
          quantitySqFt: 500,
          allocatedRoom: 'Living Room Feature Wall'
        }
      ];
    });
  };

  const handleRemoveFromMoodboard = (stoneId: string) => {
    setMoodboard(prev => prev.filter(item => item.stone.id !== stoneId));
  };

  const handleUpdateMoodboardItem = (stoneId: string, updates: Partial<MoodboardItem>) => {
    setMoodboard(prev => prev.map(item => {
      if (item.stone.id === stoneId) {
        return { ...item, ...updates };
      }
      return item;
    }));
  };

  // Compare actions
  const handleToggleCompare = (product: StoneProduct) => {
    setComparisonStones((prev) => {
      const exists = prev.find(s => s.id === product.id);
      if (exists) {
        return prev.filter(s => s.id !== product.id);
      }
      if (prev.length >= 3) {
        alert('You can compare up to 3 stone varieties simultaneously.');
        return prev;
      }
      const updated = [...prev, product];
      setIsCompareModalOpen(true);
      return updated;
    });
  };

  const handleRemoveCompareStone = (stoneId: string) => {
    setComparisonStones(prev => prev.filter(s => s.id !== stoneId));
  };

  // Quick RFQ Triggers
  const handleRequestQuote = (product: StoneProduct) => {
    setPrefilledStoneForQuote(product);
    setPrefilledStonesForQuote([]);
    setActiveModalProduct(null);
    setCurrentPage('contact');
  };

  const handleRequestSample = (product: StoneProduct) => {
    setPrefilledStoneForQuote(product);
    setPrefilledStonesForQuote([]);
    setActiveModalProduct(null);
    setCurrentPage('contact');
  };

  const handleSubmitMoodboardTradeInquiry = (stones: StoneProduct[]) => {
    setPrefilledStonesForQuote(stones);
    setPrefilledStoneForQuote(null);
    setIsMoodboardOpen(false);
    setCurrentPage('contact');
  };

  const handleRequestCompareQuote = (stones: StoneProduct[]) => {
    setPrefilledStonesForQuote(stones);
    setPrefilledStoneForQuote(null);
    setIsCompareModalOpen(false);
    setCurrentPage('contact');
  };

  const handleRequestConsultation = (topic: string) => {
    setPrefilledTopicForContact(topic);
    setPrefilledStoneForQuote(null);
    setPrefilledStonesForQuote([]);
    setCurrentPage('contact');
  };

  const handleSelectStoneByName = (name: string) => {
    const found = getProductByName(name);
    if (found) {
      setActiveModalProduct(found);
    } else {
      setCurrentPage('catalog');
    }
  };

  const handleSelectCategoryAndNavigate = (cat: any) => {
    setSelectedCategory(cat);
    setCurrentPage('catalog');
  };

  return (
    <div className="min-h-screen bg-[#F8F7F4] text-[#1A1A1A] font-sans selection:bg-[#8F704D] selection:text-white">
      
      {/* Top Fixed Navigation */}
      <Navbar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        moodboardCount={moodboard.length}
        onOpenMoodboard={() => setIsMoodboardOpen(true)}
        onOpenCompare={() => setIsCompareModalOpen(true)}
        comparisonCount={comparisonStones.length}
        onRequestConsultation={() => handleRequestConsultation('General Private Consultation')}
      />

      {/* Main Content View Switcher */}
      <main className="pt-20">
        
        {/* HOMEPAGE */}
        {currentPage === 'home' && (
          <div>
            {/* GSAP Fluid Hero Section */}
            <HeroSection
              onExploreCollections={() => setCurrentPage('catalog')}
              onBookConsultation={() => handleRequestConsultation('Private Showroom & Yard Viewing')}
              onSelectProduct={(product) => setActiveModalProduct(product)}
            />

            {/* 4 Categorical Stone Bento Spotlight */}
            <CategorySpotlight
              onSelectCategory={(cat) => handleSelectCategoryAndNavigate(cat)}
            />

            {/* Interactive Bookmatch & Kelvin Lighting Studio */}
            <InteractiveVisualizerSection
              onSelectProduct={(product) => setActiveModalProduct(product)}
              onAddToMoodboard={handleAddToMoodboard}
              onRequestQuote={handleRequestQuote}
            />

            {/* Featured Catalog Slabs Grid Preview */}
            <section className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#DCD9D1]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                  <div>
                    <div className="text-xs uppercase font-semibold tracking-[0.2em] text-[#8F704D]">
                      Simplex Vault Reserve
                    </div>
                    <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1A1A1A] mt-2">
                      Masterpiece Slabs in Stock
                    </h2>
                  </div>
                  <button
                    onClick={() => { setSelectedCategory('all'); setCurrentPage('catalog'); }}
                    className="px-6 py-3 rounded-full bg-[#FFFFFF] hover:bg-[#F8F7F4] text-[#1A1A1A] border border-[#DCD9D1] text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer shadow-xs"
                  >
                    View All 200 Curated Slabs →
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {allProducts.filter(p => p.featured).slice(0, 8).map((stone) => (
                    <div
                      key={stone.id}
                      onClick={() => setActiveModalProduct(stone)}
                      className="group rounded-2xl overflow-hidden bg-[#F8F7F4] border border-[#DCD9D1] hover:border-[#8F704D] transition-all cursor-pointer shadow-xs flex flex-col justify-between"
                    >
                      <div className="relative h-60 w-full overflow-hidden bg-[#1A1A1A]">
                        <img
                          src={stone.image}
                          alt={stone.name}
                          className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                        <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-[#FFFFFF]/90 backdrop-blur-md text-[#8F704D] text-[9px] font-semibold tracking-wider uppercase border border-[#DCD9D1] shadow-xs">
                          {stone.rarity.split(' ')[0]}
                        </span>
                      </div>

                      <div className="p-5 space-y-2">
                        <div className="text-[10px] font-mono uppercase tracking-widest text-[#8F704D] font-semibold">
                          {stone.originCountry} • {stone.categoryLabel}
                        </div>
                        <h3 className="font-cinzel text-base font-bold text-[#1A1A1A] group-hover:text-[#8F704D] transition-colors truncate">
                          {stone.name}
                        </h3>
                        <p className="text-[11px] text-[#5C574F] line-clamp-2 leading-relaxed font-light">
                          {stone.description}
                        </p>
                        <div className="pt-2 border-t border-[#DCD9D1] flex items-center justify-between text-xs text-[#8F704D]">
                          <span className="text-[11px] text-[#7D776E]">{stone.inStockSlabs} Slabs Ready</span>
                          <span className="font-semibold group-hover:translate-x-1 transition-transform">Inspect →</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Architectural Projects Preview Strip */}
            <section className="py-20 bg-[#F8F7F4] border-b border-[#DCD9D1]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                  <div>
                    <div className="text-xs uppercase font-semibold tracking-[0.2em] text-[#8F704D]">
                      Installed Realizations
                    </div>
                    <h2 className="font-cinzel text-3xl sm:text-4xl font-semibold text-[#1A1A1A] mt-2">
                      Recent Architectural Case Studies
                    </h2>
                  </div>
                  <button
                    onClick={() => setCurrentPage('projects')}
                    className="px-6 py-3 rounded-full bg-[#FFFFFF] hover:bg-[#F8F7F4] text-[#1A1A1A] border border-[#DCD9D1] text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer shadow-xs"
                  >
                    Explore All Project Case Studies →
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {projectCaseStudies.slice(0, 3).map((proj) => (
                    <div
                      key={proj.id}
                      onClick={() => setCurrentPage('projects')}
                      className="group rounded-2xl overflow-hidden bg-[#FFFFFF] border border-[#DCD9D1] hover:border-[#8F704D] transition-all cursor-pointer shadow-xs flex flex-col justify-between"
                    >
                      <div className="relative h-64 w-full overflow-hidden bg-[#1A1A1A]">
                        <img
                          src={proj.heroImage}
                          alt={proj.title}
                          className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                        <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#FFFFFF]/90 backdrop-blur-md text-[#8F704D] text-[10px] font-semibold tracking-wider uppercase border border-[#DCD9D1] shadow-xs">
                          {proj.location}
                        </span>
                      </div>

                      <div className="p-6 space-y-2">
                        <div className="text-xs text-[#7D776E]">{proj.category} • {proj.architect}</div>
                        <h3 className="font-cinzel text-lg font-bold text-[#1A1A1A] group-hover:text-[#8F704D] transition-colors leading-snug">
                          {proj.title}
                        </h3>
                        <p className="text-xs text-[#5C574F] font-light line-clamp-2 mt-1">
                          {proj.subtitle}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        )}

        {/* CATALOG PAGE */}
        {currentPage === 'catalog' && (
          <CatalogPage
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            onSelectProduct={(product) => setActiveModalProduct(product)}
            onAddToMoodboard={handleAddToMoodboard}
            onToggleCompare={handleToggleCompare}
            comparisonStones={comparisonStones}
            moodboardIds={moodboard.map(m => m.stone.id)}
            onRequestSample={handleRequestSample}
          />
        )}

        {/* PROJECT GALLERY PAGE */}
        {currentPage === 'projects' && (
          <ProjectGalleryPage
            onSelectProductByName={handleSelectStoneByName}
            onRequestConsultation={handleRequestConsultation}
          />
        )}

        {/* ABOUT PAGE */}
        {currentPage === 'about' && (
          <AboutPage
            onBookConsultation={() => handleRequestConsultation('Private Atelier & Quarry Visit')}
            onExploreCatalog={() => setCurrentPage('catalog')}
          />
        )}

        {/* BLOGS / JOURNAL PAGE */}
        {currentPage === 'blogs' && (
          <BlogsPage
            onSelectStoneByName={handleSelectStoneByName}
            onRequestConsultation={handleRequestConsultation}
          />
        )}

        {/* CONTACT & LEAD CAPTURE PAGE */}
        {currentPage === 'contact' && (
          <ContactPage
            prefilledStone={prefilledStoneForQuote}
            prefilledStones={prefilledStonesForQuote}
            prefilledTopic={prefilledTopicForContact}
          />
        )}

      </main>

      {/* FOOTER */}
      <Footer
        onNavigate={(page) => setCurrentPage(page)}
        onSelectCategory={(cat) => handleSelectCategoryAndNavigate(cat)}
      />

      {/* PRODUCT DETAIL MODAL (HIGH-RES INSPECTOR & ROOM VISUALIZER) */}
      <ProductDetailModal
        product={activeModalProduct}
        onClose={() => setActiveModalProduct(null)}
        onAddToMoodboard={handleAddToMoodboard}
        onToggleCompare={handleToggleCompare}
        onRequestQuote={handleRequestQuote}
        onRequestSample={handleRequestSample}
        onSelectRelated={(product) => setActiveModalProduct(product)}
        isSavedInMoodboard={activeModalProduct ? moodboard.some(m => m.stone.id === activeModalProduct.id) : false}
        isCompared={activeModalProduct ? comparisonStones.some(s => s.id === activeModalProduct.id) : false}
      />

      {/* DESIGNER MOODBOARD SPEC DRAWER */}
      <MoodboardDrawer
        isOpen={isMoodboardOpen}
        onClose={() => setIsMoodboardOpen(false)}
        moodboard={moodboard}
        onRemoveFromMoodboard={handleRemoveFromMoodboard}
        onUpdateMoodboardItem={handleUpdateMoodboardItem}
        onSelectProduct={(product) => {
          setIsMoodboardOpen(false);
          setActiveModalProduct(product);
        }}
        onSubmitTradeInquiry={handleSubmitMoodboardTradeInquiry}
      />

      {/* STONE COMPARISON SIDE-BY-SIDE MODAL */}
      <StoneComparisonModal
        isOpen={isCompareModalOpen}
        onClose={() => setIsCompareModalOpen(false)}
        stones={comparisonStones}
        onRemoveStone={handleRemoveCompareStone}
        onClearAll={() => setComparisonStones([])}
        onSelectProduct={(stone) => {
          setIsCompareModalOpen(false);
          setActiveModalProduct(stone);
        }}
        onAddToMoodboard={handleAddToMoodboard}
        onRequestQuote={handleRequestCompareQuote}
      />

    </div>
  );
}
export default App;
