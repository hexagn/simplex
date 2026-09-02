import React, { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  Calendar, 
  Layers, 
  ArrowUpRight, 
  Sparkles, 
  Quote, 
  X, 
  ChevronRight,
  Maximize2
} from 'lucide-react';
import { ProjectCaseStudy, StoneProduct } from '../types';
import { projectCaseStudies } from '../data/projects';
import { allProducts } from '../data/products';

interface ProjectGalleryPageProps {
  onSelectProductByName: (stoneName: string) => void;
  onRequestConsultation: (projectType: string) => void;
}

export const ProjectGalleryPage: React.FC<ProjectGalleryPageProps> = ({
  onSelectProductByName,
  onRequestConsultation
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeCaseStudy, setActiveCaseStudy] = useState<ProjectCaseStudy | null>(null);

  const categories = [
    'all',
    'Residential Villa',
    'Penthouse',
    'Luxury Hospitality',
    'Boutique Retail'
  ];

  const filteredProjects = projectCaseStudies.filter(p => 
    selectedCategory === 'all' || p.category === selectedCategory
  );

  return (
    <div className="py-12 bg-[#F8F7F4] min-h-screen text-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="mb-12 space-y-4">
          <div className="flex items-center gap-2 text-xs tracking-widest uppercase text-[#7D776E]">
            <span>Simplex Atelier</span>
            <span>/</span>
            <span className="text-[#8F704D] font-medium">Architectural Gallery</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#1A1A1A]">
                Signature Architectural Case Studies
              </h1>
              <p className="text-[#5C574F] text-sm sm:text-base font-light mt-2 max-w-2xl leading-relaxed">
                A curated retrospective of award-winning private estates, Michelin-starred hospitality retreats, and luxury flagship boutiques realized with Simplex stone.
              </p>
            </div>

            <a
              href="/contact?topic=Architectural%20Project"
              onClick={(e) => {
                e.preventDefault();
                onRequestConsultation('Architectural Project');
              }}
              className="px-6 py-3.5 rounded-full bg-[#FFFFFF] hover:bg-[#1A1A1A] hover:text-white text-[#1A1A1A] border border-[#DCD9D1] text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer shadow-xs inline-flex items-center justify-center"
            >
              Submit Architectural RFQ
            </a>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 border-b border-[#DCD9D1] scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#1A1A1A] text-white shadow-sm'
                  : 'bg-[#FFFFFF] text-[#5C574F] hover:bg-[#EAE7DF] border border-[#DCD9D1]'
              }`}
            >
              {cat === 'all' ? 'All Architectural Projects' : cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveCaseStudy(project)}
              className="group rounded-3xl overflow-hidden bg-[#FFFFFF] border border-[#DCD9D1] hover:border-[#8F704D] transition-all duration-300 cursor-pointer shadow-md hover:shadow-xl flex flex-col justify-between"
            >
              {/* Hero Image */}
              <div className="relative h-80 sm:h-96 w-full overflow-hidden bg-[#1A1A1A]">
                <img
                  src={project.heroImage}
                  alt={project.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                {/* Location & Year Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-[#FFFFFF]/90 backdrop-blur-md text-[#8F704D] text-[10px] font-semibold tracking-wider uppercase border border-[#DCD9D1] flex items-center gap-1.5 shadow-xs">
                    <MapPin className="w-3 h-3 text-[#8F704D]" />
                    {project.location}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#FFFFFF]/90 backdrop-blur-md text-[#1A1A1A] text-[10px] tracking-wider uppercase border border-[#DCD9D1] font-medium shadow-xs">
                    {project.sqFtSupplied}
                  </span>
                </div>

                {/* Stones Used Tag Pills */}
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-1.5">
                  {project.stonesUsed.map((stone, idx) => (
                    <span
                      key={idx}
                      onClick={(e) => { e.stopPropagation(); onSelectProductByName(stone); }}
                      className="px-2.5 py-1 rounded-lg bg-[#FFFFFF]/90 hover:bg-[#8F704D] hover:text-white backdrop-blur-sm text-[10px] text-[#1A1A1A] border border-[#DCD9D1] transition-colors font-medium shadow-xs"
                    >
                      {stone}
                    </span>
                  ))}
                </div>
              </div>

              {/* Text Body */}
              <div className="p-7 space-y-4 flex-1 flex flex-col justify-between bg-[#FFFFFF]">
                <div>
                  <div className="flex items-center gap-2 text-xs text-[#7D776E]">
                    <span>{project.category}</span>
                    <span>•</span>
                    <span>{project.architect}</span>
                  </div>
                  <h3 className="font-cinzel text-2xl font-bold text-[#1A1A1A] group-hover:text-[#8F704D] transition-colors mt-1">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[#5C574F] font-light leading-relaxed mt-2 line-clamp-2">
                    {project.subtitle}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E5E2DA] flex items-center justify-between text-xs text-[#8F704D] font-semibold tracking-wider uppercase">
                  <span>View Case Study & Stone Specs</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Case Study Detailed Modal */}
      {activeCaseStudy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-md animate-in fade-in duration-300">
          <div 
            className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-[#FFFFFF] border border-[#DCD9D1] rounded-3xl overflow-hidden shadow-2xl text-[#1A1A1A]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-6 border-b border-[#DCD9D1] bg-[#F8F7F4] flex items-center justify-between">
              <div>
                <span className="text-xs font-mono uppercase text-[#8F704D] tracking-wider font-semibold">
                  {activeCaseStudy.category} • {activeCaseStudy.location}
                </span>
                <h2 className="font-cinzel text-2xl font-bold text-[#1A1A1A] mt-0.5">
                  {activeCaseStudy.title}
                </h2>
              </div>
              <button
                onClick={() => setActiveCaseStudy(null)}
                className="p-2 rounded-full bg-[#FFFFFF] hover:bg-[#1A1A1A] text-[#7D776E] hover:text-white border border-[#DCD9D1] transition-all cursor-pointer shadow-xs"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="overflow-y-auto flex-1 p-6 sm:p-8 space-y-6">
              
              {/* Hero Image */}
              <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden bg-[#1A1A1A]">
                <img src={activeCaseStudy.heroImage} alt={activeCaseStudy.title} className="w-full h-full object-cover" />
              </div>

              {/* Gallery Strip */}
              {activeCaseStudy.galleryImages.length > 0 && (
                <div className="grid grid-cols-3 gap-3">
                  {activeCaseStudy.galleryImages.map((img, i) => (
                    <div key={i} className="h-28 rounded-xl overflow-hidden bg-[#1A1A1A] border border-[#DCD9D1]">
                      <img src={img} alt="Gallery view" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              )}

              {/* Project Credits Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-[#F8F7F4] border border-[#DCD9D1] text-xs">
                <div>
                  <span className="text-[#7D776E] uppercase text-[10px] block">Architect</span>
                  <span className="font-medium text-[#1A1A1A]">{activeCaseStudy.architect}</span>
                </div>
                <div>
                  <span className="text-[#7D776E] uppercase text-[10px] block">Interior Design</span>
                  <span className="font-medium text-[#1A1A1A]">{activeCaseStudy.interiorDesigner}</span>
                </div>
                <div>
                  <span className="text-[#7D776E] uppercase text-[10px] block">Year Completed</span>
                  <span className="font-medium text-[#1A1A1A]">{activeCaseStudy.year}</span>
                </div>
                <div>
                  <span className="text-[#7D776E] uppercase text-[10px] block">Supplied Volume</span>
                  <span className="font-medium text-[#8F704D]">{activeCaseStudy.sqFtSupplied}</span>
                </div>
              </div>

              {/* Architectural Story: Challenge & Solution */}
              <div className="space-y-4 text-xs sm:text-sm text-[#5C574F] font-light leading-relaxed">
                <div>
                  <h4 className="font-cinzel text-base font-bold text-[#8F704D] mb-1">The Architectural Challenge</h4>
                  <p>{activeCaseStudy.challenge}</p>
                </div>
                <div>
                  <h4 className="font-cinzel text-base font-bold text-[#8F704D] mb-1">The Simplex Sourcing & Slicing Solution</h4>
                  <p>{activeCaseStudy.solution}</p>
                </div>
              </div>

              {/* Architect Quote */}
              <div className="p-5 rounded-2xl bg-[#F8F7F4] border border-[#DCD9D1] relative">
                <Quote className="w-8 h-8 text-[#8F704D]/20 absolute top-4 right-4" />
                <p className="font-cormorant italic text-lg sm:text-xl text-[#1A1A1A] leading-relaxed">
                  "{activeCaseStudy.quote}"
                </p>
                <div className="text-xs font-semibold text-[#8F704D] mt-3 uppercase tracking-wider">
                  — {activeCaseStudy.quoteAuthor}
                </div>
              </div>

            </div>

            {/* Footer CTA */}
            <div className="p-6 border-t border-[#DCD9D1] bg-[#F8F7F4] flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-[#7D776E]">Planning a similar estate or commercial project?</span>
              <button
                onClick={() => {
                  setActiveCaseStudy(null);
                  onRequestConsultation(activeCaseStudy.category);
                }}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#1A1A1A] hover:bg-[#33302B] text-white text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-sm"
              >
                Inquire About Custom Slab Allocation
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};
