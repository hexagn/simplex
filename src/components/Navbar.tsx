import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Layers, 
  Search, 
  Bookmark, 
  Calendar, 
  Menu, 
  X, 
  ChevronRight
} from 'lucide-react';
import { MoodboardItem, StoneProduct } from '../types';

interface NavbarProps {
  currentPage?: string;
  setCurrentPage?: (page: string) => void;
  currentView?: string;
  setCurrentView?: (view: string) => void;
  selectedCategory?: string;
  setSelectedCategory?: (category: any) => void;
  moodboard?: MoodboardItem[];
  moodboardCount?: number;
  setIsMoodboardOpen?: (open: boolean) => void;
  onOpenMoodboard?: () => void;
  setIsSearchModalOpen?: (open: boolean) => void;
  setIsAppointmentModalOpen?: (open: boolean) => void;
  comparisonStones?: StoneProduct[];
  comparisonCount?: number;
  setIsComparisonOpen?: (open: boolean) => void;
  onOpenCompare?: () => void;
  onRequestConsultation?: (topic?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  setCurrentPage,
  currentView,
  setCurrentView,
  setSelectedCategory,
  moodboard = [],
  moodboardCount,
  setIsMoodboardOpen,
  onOpenMoodboard,
  setIsSearchModalOpen,
  setIsAppointmentModalOpen,
  comparisonStones = [],
  comparisonCount,
  setIsComparisonOpen,
  onOpenCompare,
  onRequestConsultation
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const activeView = currentPage || currentView || 'home';
  const handleViewChange = (view: string) => {
    if (view === 'catalog' && setSelectedCategory) {
      setSelectedCategory('all');
    }
    if (setCurrentPage) setCurrentPage(view);
    if (setCurrentView) setCurrentView(view);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenMoodboard = () => {
    if (onOpenMoodboard) onOpenMoodboard();
    else if (setIsMoodboardOpen) setIsMoodboardOpen(true);
  };

  const handleOpenCompare = () => {
    if (onOpenCompare) onOpenCompare();
    else if (setIsComparisonOpen) setIsComparisonOpen(true);
  };

  const handleOpenConsultation = (topic = 'Private Atelier & Yard Consultation') => {
    if (onRequestConsultation) onRequestConsultation(topic);
    else if (setIsAppointmentModalOpen) setIsAppointmentModalOpen(true);
    else handleViewChange('contact');
  };

  const totalMoodboard = moodboardCount !== undefined ? moodboardCount : moodboard.length;
  const totalCompare = comparisonCount !== undefined ? comparisonCount : comparisonStones.length;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Simplified and smaller menu items for high-end luxury feel
  const navLinks = [
    { label: 'Collection', view: 'catalog', code: '01', href: '/collection' },
    { label: 'Visualizer', view: 'visualizer', code: '02', href: '/visualizer' },
    { label: 'Projects', view: 'projects', code: '03', href: '/projects' },
    { label: 'About', view: 'about', code: '04', href: '/about' },
    { label: 'Journal', view: 'blogs', code: '05', href: '/journal' },
    { label: 'Contact', view: 'contact', code: '06', href: '/contact' },
  ];

  return (
    <>
      {/* Top Whisper-Quiet Editorial Bar */}
      <div className="bg-[#F4F1EB] border-b border-[#E3DFC] text-[#6E685F] text-[10px] py-1.5 px-4 font-outfit">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 text-center sm:text-left">
          <div className="flex items-center gap-2 justify-center sm:justify-start">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#8F704D]"></span>
            <span className="tracking-[0.22em] uppercase font-semibold text-[#8F704D]">
              Reserve Slabs:
            </span>
            <span className="hidden md:inline text-[#7A746B] tracking-wide">
              New Calacatta Borghini Extra & Patagonia Translucent extraction arrivals
            </span>
          </div>
          <div className="flex items-center gap-4 text-[10px] tracking-[0.2em] uppercase text-[#7A746B]">
            <span className="hidden sm:inline">MARBLE MARKET • VILE PARLE (E), MUMBAI</span>
            <button
              onClick={() => handleOpenConsultation('Mumbai Atelier Visit')}
              className="text-[#8F704D] hover:text-[#1A1A1A] font-semibold underline underline-offset-4 cursor-pointer transition-colors"
            >
              Visit Selection Gallery
            </button>
          </div>
        </div>
      </div>

      {/* Main Luxury Minimal Header */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`sticky top-0 z-40 transition-all duration-400 ${
          isScrolled
            ? 'bg-[#F8F7F4]/95 backdrop-blur-xl border-b border-[#DCD9D1] shadow-xs py-3'
            : 'bg-[#F8F7F4]/90 backdrop-blur-md border-b border-[#E8E5DD] py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo - Sculptural & Elegant */}
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                handleViewChange('home');
              }}
              className="group flex flex-col items-center text-center cursor-pointer focus:outline-none"
            >
              <div className="flex items-center justify-center gap-1.5">
                <span className="font-cinzel text-xl sm:text-2xl font-bold tracking-[0.3em] text-[#1A1A1A] group-hover:text-[#8F704D] transition-colors">
                  SIMPLEX
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#8F704D]"></span>
              </div>
              <span className="text-[8px] tracking-[0.35em] uppercase text-[#8C8579] font-medium font-outfit">
                marble • granite • tiles
              </span>
            </a>

            {/* Desktop Navigation - Smaller, Simpler, Crisp Tracking */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => {
                const isActive = activeView === link.view;
                return (
                  <a
                    key={link.view}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleViewChange(link.view);
                    }}
                    className={`relative text-[11px] tracking-[0.2em] uppercase font-medium font-outfit transition-all duration-200 py-1 cursor-pointer ${
                      isActive
                        ? 'text-[#1A1A1A] font-semibold'
                        : 'text-[#615B52] hover:text-[#1A1A1A]'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeNavUnderline"
                        className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#8F704D]"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Compact Action Bar */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              {/* Moodboard Swatch Tray */}
              <button
                onClick={handleOpenMoodboard}
                className="relative flex items-center gap-1.5 py-1.5 px-3 rounded-full bg-[#FFFFFF] hover:bg-[#F3F1EC] border border-[#DCD9D1] text-[#1A1A1A] transition-all cursor-pointer text-[11px] font-medium font-outfit shadow-xs"
              >
                <Bookmark className="w-3 h-3 text-[#8F704D]" />
                <span className="hidden sm:inline tracking-[0.14em] uppercase text-[10px]">Tray</span>
                {totalMoodboard > 0 && (
                  <span className="bg-[#1A1A1A] text-white font-bold text-[9px] px-1.5 py-0.2 rounded-full">
                    {totalMoodboard}
                  </span>
                )}
              </button>

              {/* Inquire Button */}
              <a
                href="/contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleOpenConsultation();
                }}
                className="hidden md:flex items-center gap-1.5 py-1.5 px-3.5 rounded-full bg-[#1A1A1A] hover:bg-[#33302B] text-white text-[10px] font-semibold tracking-[0.18em] uppercase font-outfit transition-all shadow-xs cursor-pointer"
              >
                <span>Inquire</span>
              </a>

              {/* Mobile Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-1.5 rounded-md text-[#1A1A1A] hover:bg-[#EAE7E0] transition-colors cursor-pointer"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Animated Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="lg:hidden overflow-hidden bg-[#FFFFFF] border-b border-[#DCD9D1] px-4 pt-3 pb-5 space-y-2 shadow-lg"
            >
              <div className="space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.view}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleViewChange(link.view);
                    }}
                    className={`w-full text-left px-3 py-2.5 rounded-lg flex items-center justify-between cursor-pointer font-outfit ${
                      activeView === link.view
                        ? 'bg-[#F4F1EB] text-[#8F704D] font-semibold'
                        : 'text-[#2C2A26] hover:bg-[#F8F7F4]'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] text-[#8C8579] font-mono">{link.code}</span>
                      <span className="text-xs tracking-[0.18em] uppercase">{link.label}</span>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-[#8F704D]" />
                  </a>
                ))}
              </div>

              <div className="pt-2 border-t border-[#DCD9D1]">
                <a
                  href="/contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleOpenConsultation();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full py-2.5 rounded-full bg-[#1A1A1A] text-white font-medium text-[11px] tracking-[0.2em] uppercase font-outfit flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Atelier Consultation</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};
