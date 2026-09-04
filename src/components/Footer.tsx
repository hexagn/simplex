import React, { useState } from 'react';
import { 
  Sparkles, 
  MapPin, 
  Phone, 
  Mail, 
  ArrowUpRight, 
  ShieldCheck, 
  Check, 
  Send 
} from 'lucide-react';
import { allProducts } from '../data/products';

interface FooterProps {
  onNavigate: (page: string) => void;
  onSelectCategory: (category: any) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onSelectCategory }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
      setSubscribed(false);
    }, 4000);
  };

  return (
    <footer className="bg-[#1A1A1A] text-[#F8F7F4] border-t border-[#2E2B26]">
      {/* Top Monograph VIP Newsletter Strip */}
      <div className="border-b border-[#2E2B26] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-2">
              <span className="text-xs uppercase font-mono tracking-widest text-[#C5A880]">The Simplex Marble Granite Monograph</span>
              <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#F8F7F4]">
                Receive Quarterly Geological Reserves
              </h3>
              <p className="text-xs text-[#A8A298] font-light leading-relaxed">
                Curated quarry releases, rare block extraction notices, and confidential trade pricing delivered to registered architects.
              </p>
            </div>

            <div className="lg:col-span-6">
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your architecture firm email..."
                  className="flex-1 px-4 py-3.5 rounded-xl bg-[#24221E] border border-[#3D3933] text-xs text-white placeholder-[#8A847A] focus:outline-none focus:border-[#C5A880]"
                />
                <button
                  type="submit"
                  className="px-6 py-3.5 rounded-xl bg-[#C5A880] hover:bg-[#D4BC98] text-[#1A1A1A] text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0 shadow-sm"
                >
                  {subscribed ? <Check className="w-4 h-4" /> : <Send className="w-4 h-4" />}
                  <span>{subscribed ? 'Subscribed' : 'Join Trade Registry'}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1: Brand (Col 2 span) */}
          <div className="lg:col-span-2 space-y-4">
            <a 
              href="/"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('home');
              }} 
              className="flex items-center gap-2 cursor-pointer group inline-flex"
            >
              <div className="w-8 h-8 rounded-lg bg-[#C5A880] flex items-center justify-center text-[#1A1A1A] font-cinzel font-bold text-lg shadow-sm">
                S
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-cinzel text-lg sm:text-xl font-bold tracking-[0.25em] text-[#F8F7F4] group-hover:text-[#C5A880] transition-colors">
                    SIMPLEX
                  </span>
                  {/* <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]"></span> */}
                </div>
                <span className="text-[8px] tracking-[0.35em] uppercase text-[#A8A298] font-medium font-outfit">
                  marble • granite • tiles
                </span>
              </div>
            </a>

            <p className="text-xs text-[#A8A298] font-light leading-relaxed max-w-sm">
              Mumbai's premier purveyor of imported Italian marble, structural magmatic granite, large-format sintered porcelain, and translucent gemological quartzites since 1988.
            </p>

            <div className="pt-2 text-xs text-[#8A847A] space-y-1">
              <div><strong>Mumbai Selection Gallery:</strong> Marble Market, Service Road, Near Jay Apartment, W.E. Highway, Vile Parle (E), Mumbai - 400057</div>
              <div><strong>Direct Trade Desk:</strong> <a href="tel:+919967374940" className="hover:text-white transition-colors">+91 99673 74940</a> / <a href="tel:+919967733305" className="hover:text-white transition-colors">+91 99677 33305</a> • <a href="mailto:ddv25@yahoo.com" className="hover:text-white transition-colors">ddv25@yahoo.com</a></div>
            </div>
          </div>

          {/* Col 2: Stone Collections */}
          <div className="space-y-3 text-xs">
            <h4 className="font-cinzel text-sm font-bold text-[#C5A880] tracking-wider uppercase">
              Stone Collections
            </h4>
            <ul className="space-y-2 text-[#C4BDAF]">
              <li>
                <a 
                  href="/catalog?category=marble"
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectCategory('marble');
                    onNavigate('catalog');
                  }}
                  className="hover:text-[#C5A880] transition-colors cursor-pointer block"
                >
                  Italian & Heritage Marble (50 Slabs)
                </a>
              </li>
              <li>
                <a 
                  href="/catalog?category=granite"
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectCategory('granite');
                    onNavigate('catalog');
                  }}
                  className="hover:text-[#C5A880] transition-colors cursor-pointer block"
                >
                  Exotic & Indian Granite (50 Slabs)
                </a>
              </li>
              <li>
                <a 
                  href="/catalog?category=tiles"
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectCategory('tiles');
                    onNavigate('catalog');
                  }}
                  className="hover:text-[#C5A880] transition-colors cursor-pointer block"
                >
                  Sintered Architectural Tiles (50 Slabs)
                </a>
              </li>
              <li>
                <a 
                  href="/catalog?category=quartzite_onyx"
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectCategory('quartzite_onyx');
                    onNavigate('catalog');
                  }}
                  className="hover:text-[#C5A880] transition-colors cursor-pointer block"
                >
                  Quartzite & Translucent Onyx (50 Slabs)
                </a>
              </li>
              <li>
                <a 
                  href="/catalog"
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectCategory('all');
                    onNavigate('catalog');
                  }}
                  className="hover:text-[#C5A880] transition-colors cursor-pointer text-[#C5A880] font-medium block"
                >
                  View Complete {allProducts.length} Slab Catalog →
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Architectural Services */}
          <div className="space-y-3 text-xs">
            <h4 className="font-cinzel text-sm font-bold text-[#C5A880] tracking-wider uppercase">
              Atelier Services
            </h4>
            <ul className="space-y-2 text-[#C4BDAF]">
              <li>
                <a 
                  href="/visualizer"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('visualizer');
                  }}
                  className="hover:text-[#C5A880] transition-colors cursor-pointer block"
                >
                  Bookmatch Symmetry Simulator
                </a>
              </li>
              <li>
                <a 
                  href="/projects"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('projects');
                  }}
                  className="hover:text-[#C5A880] transition-colors cursor-pointer block"
                >
                  Indian Architectural Projects
                </a>
              </li>
              <li>
                <a 
                  href="/contact"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('contact');
                  }}
                  className="hover:text-[#C5A880] transition-colors cursor-pointer block"
                >
                  Sample Swatch Box Courier (Pan-India)
                </a>
              </li>
              <li>
                <a 
                  href="/blogs"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('blogs');
                  }}
                  className="hover:text-[#C5A880] transition-colors cursor-pointer block"
                >
                  Indian Architectural Monographs
                </a>
              </li>
              <li>
                <a 
                  href="/about"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('about');
                  }}
                  className="hover:text-[#C5A880] transition-colors cursor-pointer block"
                >
                  Mumbai Selection Gallery & Atelier
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Mumbai Selection Gallery */}
          <div className="space-y-3 text-xs">
            <h4 className="font-cinzel text-sm font-bold text-[#C5A880] tracking-wider uppercase">
              Mumbai Atelier
            </h4>
            <div className="space-y-2 text-[#C4BDAF]">
              <div><strong>Vile Parle Gallery:</strong> <a href="tel:+919967374940" className="hover:text-white transition-colors">+91 99673 74940</a></div>
              <div><strong>WhatsApp VIP Line:</strong> <a href="https://wa.me/919967733305" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">+91 99677 33305</a></div>
              <div><strong>Direct Trade Desk:</strong> <a href="tel:+919967733305" className="hover:text-white transition-colors">+91 99677 33305</a></div>
              <div><strong>Pan-India Logistics:</strong> Direct Crane Delivery</div>
              <div><strong>GST Compliant:</strong> 18% ITC Invoicing</div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-[#2E2B26] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8A847A]">
          <div>
            © {new Date().getFullYear()} Simplex Marble Granite (Mumbai, India). All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a
              href="/privacy-policy"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('privacy-policy');
              }}
              className="hover:text-[#C5A880] transition-colors cursor-pointer"
            >
              Privacy Policy
            </a>
            <span className="text-[#4A453C]">•</span>
            <a
              href="/terms-and-conditions"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('terms-and-conditions');
              }}
              className="hover:text-[#C5A880] transition-colors cursor-pointer"
            >
              Terms & Conditions
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
