import React, { useState } from 'react';
import { 
  BookOpen, 
  Calendar, 
  Clock, 
  User, 
  ArrowRight, 
  X, 
  Tag, 
  Share2, 
  Check, 
  Sparkles 
} from 'lucide-react';
import { BlogPost, StoneProduct } from '../types';
import { blogPosts } from '../data/blogs';

interface BlogsPageProps {
  onSelectStoneByName: (stoneName: string) => void;
  onRequestConsultation: (topic: string) => void;
}

export const BlogsPage: React.FC<BlogsPageProps> = ({
  onSelectStoneByName,
  onRequestConsultation
}) => {
  const [selectedTag, setSelectedTag] = useState<string>('all');
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);
  const [isCopied, setIsCopied] = useState(false);

  const allTags = ['all', 'Architectural Spec Guide', 'Material Science', 'Illumination Engineering', 'Sustainable Design'];

  const filteredPosts = blogPosts.filter(post => 
    selectedTag === 'all' || post.category === selectedTag || post.tags?.includes(selectedTag)
  );

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="py-12 bg-[#F8F7F4] min-h-screen text-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Heading */}
        <div className="mb-12 space-y-4">
          <div className="flex items-center gap-2 text-xs tracking-widest uppercase text-[#7D776E]">
            <span>Simplex Atelier</span>
            <span>/</span>
            <span className="text-[#8F704D] font-medium">Monographs & Journal</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#1A1A1A]">
                Architectural Stone Insights
              </h1>
              <p className="text-[#5C574F] text-sm sm:text-base font-light mt-2 max-w-2xl leading-relaxed">
                Geological field notes, bookmatching guidelines, and material durability essays authored by Simplex master stone inspectors and consulting architects.
              </p>
            </div>
          </div>
        </div>

        {/* Tag Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 border-b border-[#DCD9D1] scrollbar-none">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase whitespace-nowrap transition-all cursor-pointer ${
                selectedTag === tag
                  ? 'bg-[#1A1A1A] text-white shadow-xs'
                  : 'bg-[#FFFFFF] text-[#5C574F] hover:bg-[#EAE7DF] border border-[#DCD9D1]'
              }`}
            >
              {tag === 'all' ? 'All Monographs' : tag}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              onClick={() => setActiveArticle(post)}
              className="group rounded-3xl overflow-hidden bg-[#FFFFFF] border border-[#DCD9D1] hover:border-[#8F704D] transition-all duration-400 cursor-pointer shadow-xs flex flex-col justify-between"
            >
              {/* Image */}
              <div className="relative h-60 w-full overflow-hidden bg-[#1A1A1A]">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#FFFFFF]/90 backdrop-blur-md text-[#8F704D] text-[10px] font-semibold tracking-wider uppercase border border-[#DCD9D1] shadow-xs">
                  {post.category}
                </span>
              </div>

              {/* Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-xs text-[#7D776E]">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date || post.publishedDate}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="font-cinzel text-xl font-bold text-[#1A1A1A] group-hover:text-[#8F704D] transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs text-[#5C574F] font-light leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#DCD9D1] flex items-center justify-between text-xs text-[#8F704D] font-semibold tracking-wider uppercase">
                  <span>Read Monograph</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Article Reader Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-md animate-in fade-in duration-300">
          <div 
            className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-[#FFFFFF] border border-[#DCD9D1] rounded-3xl overflow-hidden shadow-2xl text-[#1A1A1A]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-6 border-b border-[#DCD9D1] bg-[#F8F7F4] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-[#FFFFFF] text-[#8F704D] text-[10px] font-semibold tracking-wider uppercase border border-[#DCD9D1] shadow-xs">
                  {activeArticle.category}
                </span>
                <span className="text-xs text-[#7D776E]">•</span>
                <span className="text-xs text-[#7D776E]">{activeArticle.readTime}</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleShare}
                  className="p-2 rounded-lg bg-[#FFFFFF] hover:bg-[#EAE7DF] text-[#5C574F] hover:text-[#1A1A1A] border border-[#DCD9D1] transition-colors cursor-pointer text-xs flex items-center gap-1 shadow-xs"
                >
                  {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
                  <span className="hidden sm:inline font-medium">Share</span>
                </button>
                <button
                  onClick={() => setActiveArticle(null)}
                  className="p-2 rounded-full bg-[#FFFFFF] hover:bg-[#1A1A1A] text-[#7D776E] hover:text-white border border-[#DCD9D1] transition-all cursor-pointer shadow-xs"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Article Content */}
            <div className="overflow-y-auto flex-1 p-6 sm:p-10 space-y-8 bg-[#FFFFFF]">
              
              <div>
                <h1 className="font-cinzel text-2xl sm:text-4xl font-bold text-[#1A1A1A] leading-tight">
                  {activeArticle.title}
                </h1>
                <div className="flex items-center gap-3 text-xs text-[#7D776E] mt-3">
                  <span>
                    Written by <strong className="text-[#1A1A1A]">{typeof activeArticle.author === 'object' ? activeArticle.author.name : activeArticle.author}</strong> ({typeof activeArticle.author === 'object' ? activeArticle.author.role : (activeArticle.authorRole || 'Stone Specialist')})
                  </span>
                  <span>•</span>
                  <span>{activeArticle.date || activeArticle.publishedDate}</span>
                </div>
              </div>

              <div className="h-80 rounded-2xl overflow-hidden bg-[#1A1A1A]">
                <img src={activeArticle.coverImage} alt={activeArticle.title} className="w-full h-full object-cover" />
              </div>

              {/* Article Paragraphs */}
              <div className="space-y-6 text-sm sm:text-base text-[#5C574F] font-light leading-relaxed">
                {activeArticle.content.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              {/* Key Takeaways */}
              {activeArticle.keyTakeaways && activeArticle.keyTakeaways.length > 0 && (
                <div className="p-6 rounded-2xl bg-[#F8F7F4] border border-[#DCD9D1] space-y-3">
                  <span className="text-xs uppercase font-semibold text-[#8F704D] tracking-wider block">
                    Architectural Key Takeaways:
                  </span>
                  <ul className="space-y-2 text-xs text-[#5C574F]">
                    {activeArticle.keyTakeaways.map((takeaway, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#8F704D] font-bold">•</span>
                        <span>{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            </div>

            {/* Article Footer */}
            <div className="p-6 border-t border-[#DCD9D1] bg-[#F8F7F4] flex items-center justify-between">
              <span className="text-xs text-[#7D776E]">Have questions on material specification?</span>
              <button
                onClick={() => {
                  const title = activeArticle.title;
                  setActiveArticle(null);
                  onRequestConsultation(title);
                }}
                className="px-6 py-3 rounded-xl bg-[#1A1A1A] hover:bg-[#33302B] text-white text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-xs"
              >
                Consult Stone Specialist
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
