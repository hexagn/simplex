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
              <span className="text-xs uppercase font-mono tracking-widest text-[#C5A880]">The Simplex Monograph</span>
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
            <div 
              onClick={() => onNavigate('home')} 
              className="flex items-center gap-2 cursor-pointer group"
            >
              <div className="w-8 h-8 rounded-lg bg-[#C5A880] flex items-center justify-center text-[#1A1A1A] font-cinzel font-bold text-lg shadow-sm">
                S
              </div>
              <span className="font-cinzel text-xl font-bold tracking-[0.25em] text-[#F8F7F4] group-hover:text-[#C5A880] transition-colors">
                SIMPLEX
              </span>
            </div>

            <p className="text-xs text-[#A8A298] font-light leading-relaxed max-w-sm">
              Mumbai's premier purveyor of imported Italian marble, structural magmatic granite, large-format sintered porcelain, and translucent gemological quartzites since 1988.
            </p>

            <div className="pt-2 text-xs text-[#8A847A] space-y-1">
              <div><strong>Mumbai Flagship:</strong> The Pavilion, Dr. Annie Besant Rd, Worli, Mumbai 400018</div>
              <div><strong>Central Selection Yard:</strong> Shed 4B, JNPT Logistics Corridor, Navi Mumbai 410206</div>
              <div><strong>Direct Trade Desk:</strong> +91 (022) 6940 8800 • mumbai@simplexstone.in</div>
            </div>
          </div>

          {/* Col 2: Stone Collections */}
          <div className="space-y-3 text-xs">
            <h4 className="font-cinzel text-sm font-bold text-[#C5A880] tracking-wider uppercase">
              Stone Collections
            </h4>
            <ul className="space-y-2 text-[#C4BDAF]">
              <li>
                <button 
                  onClick={() => { onSelectCategory('marble'); onNavigate('catalog'); }}
                  className="hover:text-[#C5A880] transition-colors cursor-pointer"
                >
                  Italian & Heritage Marble (50 Slabs)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onSelectCategory('granite'); onNavigate('catalog'); }}
                  className="hover:text-[#C5A880] transition-colors cursor-pointer"
                >
                  Exotic & Indian Granite (50 Slabs)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onSelectCategory('tiles'); onNavigate('catalog'); }}
                  className="hover:text-[#C5A880] transition-colors cursor-pointer"
                >
                  Sintered Architectural Tiles (50 Slabs)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onSelectCategory('quartzite_onyx'); onNavigate('catalog'); }}
                  className="hover:text-[#C5A880] transition-colors cursor-pointer"
                >
                  Quartzite & Translucent Onyx (50 Slabs)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onSelectCategory('all'); onNavigate('catalog'); }}
                  className="hover:text-[#C5A880] transition-colors cursor-pointer text-[#C5A880] font-medium"
                >
                  View Complete 200 Slab Catalog →
                </button>
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
                <button 
                  onClick={() => onNavigate('home')}
                  className="hover:text-[#C5A880] transition-colors cursor-pointer"
                >
                  Bookmatch Symmetry Simulator
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('projects')}
                  className="hover:text-[#C5A880] transition-colors cursor-pointer"
                >
                  Indian Architectural Projects
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('contact')}
                  className="hover:text-[#C5A880] transition-colors cursor-pointer"
                >
                  Sample Swatch Box Courier (Pan-India)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('blogs')}
                  className="hover:text-[#C5A880] transition-colors cursor-pointer"
                >
                  Indian Architectural Monographs
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#C5A880] transition-colors cursor-pointer"
                >
                  Mumbai Flagship & JNPT Yard
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Mumbai Flagship Store */}
          <div className="space-y-3 text-xs">
            <h4 className="font-cinzel text-sm font-bold text-[#C5A880] tracking-wider uppercase">
              Mumbai Experience
            </h4>
            <div className="space-y-2 text-[#C4BDAF]">
              <div><strong>Worli Atelier:</strong> +91 (022) 6940 8800</div>
              <div><strong>WhatsApp VIP Line:</strong> +91 98200 45890</div>
              <div><strong>JNPT Stockyard Desk:</strong> +91 98200 45892</div>
              <div><strong>Pan-India Logistics:</strong> Direct Crane Delivery</div>
              <div><strong>GST Compliant:</strong> 18% ITC Invoicing</div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-[#2E2B26] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8A847A]">
          <div>
            © {new Date().getFullYear()} Simplex Marble & Architectural Surfaces Pvt. Ltd. (Mumbai, India). All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-[#C5A880] cursor-pointer">GST Invoicing Terms</span>
            <span className="hover:text-[#C5A880] cursor-pointer">Architectural Sample Protocol</span>
            <span className="hover:text-[#C5A880] cursor-pointer">IS 1121 & CE Stone Compliance</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
