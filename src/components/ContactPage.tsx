import React, { useState, useEffect } from 'react';
import { 
  Send, 
  CheckCircle2, 
  MapPin, 
  Phone, 
  Mail, 
  Calendar, 
  Building2, 
  Clock, 
  Sparkles, 
  FileText,
  ShieldCheck
} from 'lucide-react';
import { InquiryFormData, StoneProduct } from '../types';

interface ContactPageProps {
  prefilledStone?: StoneProduct | null;
  prefilledStones?: StoneProduct[];
  prefilledTopic?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  prefilledStone,
  prefilledStones,
  prefilledTopic
}) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    role: 'Interior Designer',
    projectType: 'Private Residential Villa',
    estimatedSqFt: '500 - 2,000 sq.ft',
    timeline: 'Within 1-3 Months',
    preferredCategory: prefilledStone ? prefilledStone.category : 'marble',
    specificStone: prefilledStone ? prefilledStone.name : '',
    message: prefilledTopic ? `Inquiry regarding: ${prefilledTopic}` : '',
    sampleKitRequested: false,
    atelierVisitRequested: false,
    preferredAtelier: 'Milano (HQ)'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [inquiryRefId, setInquiryRefId] = useState('');

  useEffect(() => {
    if (prefilledStone) {
      setFormData(prev => ({
        ...prev,
        specificStone: prefilledStone.name,
        preferredCategory: prefilledStone.category,
        message: `I would like to request gangsaw slab availability, high-res photos of current lots, and price specifications for ${prefilledStone.name}.`
      }));
    } else if (prefilledStones && prefilledStones.length > 0) {
      const names = prefilledStones.map(s => s.name).join(', ');
      setFormData(prev => ({
        ...prev,
        specificStone: names,
        message: `I would like to receive trade quotation for the following curated stone selections: ${names}.`
      }));
    }
  }, [prefilledStone, prefilledStones]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate luxury API processing
    setTimeout(() => {
      const randomId = 'SMP-' + Math.floor(100000 + Math.random() * 900000);
      setInquiryRefId(randomId);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <div className="py-12 bg-[#F8F7F4] min-h-screen text-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="mb-12 space-y-4 max-w-3xl">
          <div className="flex items-center gap-2 text-xs tracking-widest uppercase text-[#7D776E]">
            <span>Simplex Atelier</span>
            <span>/</span>
            <span className="text-[#8F704D] font-medium">Trade Desk & Concierge</span>
          </div>

          <h1 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#1A1A1A]">
            Bespoke Architectural Inquiries
          </h1>
          <p className="text-[#5C574F] text-sm sm:text-base font-light leading-relaxed">
            Direct access for architects, interior designers, general contractors, and private estate developers seeking slab allocations, customized sample boxes, or private viewing appointments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Atelier Concierge Info (Col 4) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Direct Line Card */}
            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#DCD9D1] shadow-xs space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8F704D]">
                <Sparkles className="w-4 h-4" />
                <span>Mumbai VIP Trade Concierge</span>
              </div>

              <div className="space-y-3 text-xs text-[#5C574F]">
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#8F704D] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#7D776E] block">Direct Mumbai Desk</span>
                    <a href="tel:+919967374940" className="font-mono text-[#1A1A1A] text-sm font-medium hover:text-[#8F704D] transition-colors">+91 99673 74940</a>
                    <a href="https://wa.me/919967733305" target="_blank" rel="noopener noreferrer" className="text-[10px] text-[#8F704D] block font-mono hover:underline">WhatsApp: +91 99677 33305</a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#8F704D] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#7D776E] block">Specifications & Inquiries</span>
                    <a href="mailto:ddv25@yahoo.com" className="font-mono text-[#1A1A1A] text-sm font-medium hover:text-[#8F704D] transition-colors">ddv25@yahoo.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#8F704D] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#7D776E] block">Response Guarantee</span>
                    <span className="text-[#1A1A1A] font-medium">Under 2 Hours (Mon–Sat: 10 AM – 7:30 PM IST)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mumbai Location */}
            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#DCD9D1] shadow-xs space-y-4">
              <h3 className="font-cinzel text-base font-bold text-[#1A1A1A]">
                Mumbai Selection Gallery
              </h3>

              <div className="space-y-3 text-xs text-[#5C574F]">
                <div className="pb-2 border-b border-[#EAE7DF]">
                  <strong className="text-[#8F704D] block font-cinzel font-semibold">Flagship Gallery & Selection Yard</strong>
                  <span>Marble Market, Service Road, Near Jay Apartment, W.E. Highway, Vile Parle (E), Mumbai - 400057</span>
                </div>
                <div>
                  <strong className="text-[#8F704D] block font-cinzel font-semibold">Pan-India White-Glove Dispatch</strong>
                  <span>Direct crane truck transport to Mumbai, Delhi NCR, Bangalore, Goa, Alibaug, Hyderabad & all states.</span>
                </div>
              </div>
            </div>

            {/* Quality Guarantee Box */}
            <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#DCD9D1] shadow-xs space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#8F704D]">
                <ShieldCheck className="w-4 h-4" />
                <span>Simplex Mumbai Quality Assurance</span>
              </div>
              <p className="text-[11px] text-[#5C574F] font-light leading-relaxed">
                All slab consignments include Italian & Brazilian origin certificates, ultrasonic structural density tests, GST 18% ITC invoices, and sequential slab bookmatch maps.
              </p>
            </div>

          </div>

          {/* Right Column: Lead Capture System Form (Col 8) */}
          <div className="lg:col-span-8 bg-[#FFFFFF] p-6 sm:p-10 rounded-3xl border border-[#DCD9D1] shadow-md">
            
            {isSubmitted ? (
              <div className="py-12 text-center space-y-6 animate-in fade-in duration-500">
                <div className="w-16 h-16 bg-[#8F704D]/10 border border-[#8F704D] rounded-full flex items-center justify-center mx-auto text-[#8F704D]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-widest text-[#8F704D] font-mono font-semibold">Inquiry Confirmed</span>
                  <h2 className="font-cinzel text-3xl font-bold text-[#1A1A1A]">
                    Thank You, {formData.fullName}
                  </h2>
                  <p className="text-xs sm:text-sm text-[#5C574F] max-w-md mx-auto leading-relaxed">
                    Your architectural specification inquiry has been routed to our senior stone consultants. A dedicated dossier with slab availability and pricing will be emailed to <strong className="text-[#1A1A1A]">{formData.email}</strong>.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#F8F7F4] border border-[#DCD9D1] max-w-sm mx-auto text-xs">
                  <span className="text-[#7D776E] block">Reference Dossier ID:</span>
                  <span className="font-mono text-base font-bold text-[#8F704D] tracking-wider">{inquiryRefId}</span>
                </div>

                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-8 py-3 rounded-full bg-[#1A1A1A] hover:bg-[#33302B] text-white text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer shadow-xs"
                >
                  Submit Another Project Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="border-b border-[#DCD9D1] pb-4">
                  <h2 className="font-cinzel text-xl font-bold text-[#1A1A1A]">
                    Project Specifications & RFQ Form
                  </h2>
                  <p className="text-xs text-[#5C574F] mt-1 font-light">
                    Complete the details below for customized slab allocations, sample boxes, or bespoke quarry sourcing.
                  </p>
                </div>

                {/* Row 1: Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs text-[#1A1A1A] uppercase tracking-wider font-semibold">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Ar. Rajesh Mehta / Ananya Singhania"
                      className="w-full px-4 py-3 rounded-xl bg-[#F8F7F4] border border-[#DCD9D1] text-xs text-[#1A1A1A] placeholder-[#8A847A] focus:outline-none focus:border-[#8F704D]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs text-[#1A1A1A] uppercase tracking-wider font-semibold">
                      Corporate / Professional Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="design@mehta-architects.in"
                      className="w-full px-4 py-3 rounded-xl bg-[#F8F7F4] border border-[#DCD9D1] text-xs text-[#1A1A1A] placeholder-[#8A847A] focus:outline-none focus:border-[#8F704D]"
                    />
                  </div>
                </div>

                {/* Row 2: Phone & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs text-[#1A1A1A] uppercase tracking-wider font-semibold">
                      Phone / Mobile * (WhatsApp Enabled)
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 99673 74940"
                      className="w-full px-4 py-3 rounded-xl bg-[#F8F7F4] border border-[#DCD9D1] text-xs text-[#1A1A1A] placeholder-[#8A847A] focus:outline-none focus:border-[#8F704D]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs text-[#1A1A1A] uppercase tracking-wider font-semibold">
                      Company / Studio Name
                    </label>
                    <input
                      type="text"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      placeholder="Studio Mumbai Designs"
                      className="w-full px-4 py-3 rounded-xl bg-[#F8F7F4] border border-[#DCD9D1] text-xs text-[#1A1A1A] placeholder-[#8A847A] focus:outline-none focus:border-[#8F704D]"
                    />
                  </div>
                </div>

                {/* Row 3: Professional Role & Project Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs text-[#1A1A1A] uppercase tracking-wider font-semibold">
                      Professional Discipline
                    </label>
                    <select
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value as any })}
                      className="w-full px-4 py-3 rounded-xl bg-[#F8F7F4] border border-[#DCD9D1] text-xs text-[#1A1A1A] focus:outline-none focus:border-[#8F704D]"
                    >
                      <option value="Architect">Architect / Architectural Firm</option>
                      <option value="Interior Designer">Interior Designer / Studio</option>
                      <option value="General Contractor">General Contractor / Builder</option>
                      <option value="Real Estate Developer">Luxury Real Estate Developer</option>
                      <option value="Private Client">Private Estate Owner</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs text-[#1A1A1A] uppercase tracking-wider font-semibold">
                      Project Typology
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value as any })}
                      className="w-full px-4 py-3 rounded-xl bg-[#F8F7F4] border border-[#DCD9D1] text-xs text-[#1A1A1A] focus:outline-none focus:border-[#8F704D]"
                    >
                      <option value="Private Residential Villa">Private Residential Villa / Estate</option>
                      <option value="Penthouse / Apartment">High-End Penthouse</option>
                      <option value="Luxury Hospitality & Resort">Luxury Hospitality & 5-Star Hotel</option>
                      <option value="Commercial & Retail Flagship">Commercial & Retail Flagship</option>
                      <option value="Superyacht / Aviation">Superyacht / Bespoke Interior</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs text-[#1A1A1A] uppercase tracking-wider font-semibold">
                    Project Requirements
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide details on bookmatch preferences, finish types (Honed/Polished), edge profiles, or specific quarry origins..."
                    className="w-full px-4 py-3 rounded-xl bg-[#F8F7F4] border border-[#DCD9D1] text-xs text-[#1A1A1A] placeholder-[#8A847A] focus:outline-none focus:border-[#8F704D]"
                  />
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-[#1A1A1A] hover:bg-[#33302B] text-white text-xs font-bold tracking-[0.16em] uppercase transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Allocating Stone Dossier...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Trade RFQ & Request Slabs</span>
                    </>
                  )}
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
    </div>
  );
};
