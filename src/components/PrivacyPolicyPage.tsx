import React from 'react';
import { 
  ShieldCheck, 
  Lock, 
  Eye, 
  FileText, 
  CheckCircle2, 
  Building2, 
  Mail, 
  Phone, 
  ArrowLeft,
  Sparkles
} from 'lucide-react';

interface PrivacyPolicyPageProps {
  onNavigate: (page: string) => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onNavigate }) => {
  return (
    <div className="py-12 bg-[#F8F7F4] min-h-screen text-[#1A1A1A]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between border-b border-[#DCD9D1] pb-4">
          <div className="flex items-center gap-2 text-xs tracking-widest uppercase text-[#7D776E]">
            <a 
              href="/"
              onClick={(e) => { e.preventDefault(); onNavigate('home'); }}
              className="hover:text-[#8F704D] transition-colors"
            >
              Simplex Atelier
            </a>
            <span>/</span>
            <span className="text-[#1A1A1A] font-semibold">Privacy Policy</span>
          </div>

          <a
            href="/"
            onClick={(e) => { e.preventDefault(); onNavigate('home'); }}
            className="text-xs font-semibold uppercase tracking-wider text-[#8F704D] hover:text-[#1A1A1A] flex items-center gap-1.5 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return Home</span>
          </a>
        </div>

        {/* Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFFFFF] border border-[#DCD9D1] text-[#8F704D] text-[11px] font-semibold tracking-[0.2em] uppercase shadow-xs">
            <ShieldCheck className="w-3.5 h-3.5" />
            Client Confidentiality & Data Governance
          </div>
          <h1 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#1A1A1A]">
            Privacy Policy 
          </h1>
          <p className="text-xs text-[#7D776E] tracking-wider uppercase font-mono">
            Effective Date: March 2026 • Compliant with DPDP Act (India) & International Privacy Standards
          </p>
        </div>

        {/* Content Box */}
        <div className="bg-[#FFFFFF] border border-[#DCD9D1] rounded-3xl p-8 sm:p-12 shadow-sm space-y-10 text-xs sm:text-sm text-[#4A463F] leading-relaxed font-light">
          
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="font-cinzel text-xl font-bold text-[#1A1A1A] flex items-center gap-2">
              <span className="text-[#8F704D] font-mono text-sm">01.</span>
              Executive Commitment to Confidentiality
            </h2>
            <p>
              Simplex Marble & Architectural Surfaces Pvt. Ltd. ("Simplex", "we", "our", or "us") operates as a bespoke purveyor of imported Italian marble, structural granite, and rare gemological quartzites for discerning architects, developers, and private residential patrons across Mumbai and India.
            </p>
            <p>
              We treat client identities, architectural blueprints, site addresses, bill-of-quantities (BOQ), and custom slab specifications with extreme discretion and strict confidentiality.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="font-cinzel text-xl font-bold text-[#1A1A1A] flex items-center gap-2">
              <span className="text-[#8F704D] font-mono text-sm">02.</span>
              Information We Collect
            </h2>
            <p>
              When you interact with our digital atelier, request sample swatch boxes, visit our Worli Experience Center or Navi Mumbai Stockyard, or submit trade inquiries, we may collect:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-[#5C574F]">
              <li><strong>Contact Particulars:</strong> Full name, professional designation (Architect, Interior Designer, Estate Owner, PMC), firm name, phone number, and corporate email.</li>
              <li><strong>Project Specifications:</strong> Site location city, estimated square footage, preferred stone varieties, bookmatching preferences, and target procurement timelines.</li>
              <li><strong>Architectural CAD & Drawings:</strong> Floor layouts, elevations, or 3D visualizer renderings uploaded voluntarily for vein-matching simulations and yield optimization.</li>
              <li><strong>Commercial & Invoicing Records:</strong> GST identification numbers (GSTIN), registered billing addresses, and corporate tax information necessary for 18% Input Tax Credit (ITC) tax invoicing.</li>
              <li><strong>Digital Interaction Data:</strong> Slabs saved in your spec tray/moodboard, comparison sessions, lighting visualizer settings, and general browser analytics.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="font-cinzel text-xl font-bold text-[#1A1A1A] flex items-center gap-2">
              <span className="text-[#8F704D] font-mono text-sm">03.</span>
              Purpose of Data Utilization
            </h2>
            <p>
              We process personal and architectural project data strictly for legitimate trade and customer service purposes:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#F8F7F4] border border-[#DCD9D1]">
                <div className="font-semibold text-[#1A1A1A] mb-1">Quarry Sourcing & Allocation</div>
                <p className="text-xs text-[#7D776E]">Reserving consecutive gangsaw slab bundles at European and global quarries matching your project's chromatic consistency.</p>
              </div>
              <div className="p-4 rounded-xl bg-[#F8F7F4] border border-[#DCD9D1]">
                <div className="font-semibold text-[#1A1A1A] mb-1">Pan-India Logistics & Delivery</div>
                <p className="text-xs text-[#7D776E]">Coordinating dedicated heavy-payload crane transport from our JNPT stockyard directly to your residential or commercial site.</p>
              </div>
              <div className="p-4 rounded-xl bg-[#F8F7F4] border border-[#DCD9D1]">
                <div className="font-semibold text-[#1A1A1A] mb-1">Sample Swatch Courier</div>
                <p className="text-xs text-[#7D776E]">Dispatching customized 10×10cm calibrated stone swatches and specification monographs to your architecture studio.</p>
              </div>
              <div className="p-4 rounded-xl bg-[#F8F7F4] border border-[#DCD9D1]">
                <div className="font-semibold text-[#1A1A1A] mb-1">Private Atelier Appointments</div>
                <p className="text-xs text-[#7D776E]">Scheduling exclusive gantry crane viewing slots and confidential material consultations at our Worli Pavilion.</p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="font-cinzel text-xl font-bold text-[#1A1A1A] flex items-center gap-2">
              <span className="text-[#8F704D] font-mono text-sm">04.</span>
              Architectural Non-Disclosure & Blueprint Safety
            </h2>
            <p>
              We honor formal Non-Disclosure Agreements (NDAs) executed with architectural firms and private estate owners. Blueprints, CAD files, and interior schedules shared with Simplex are stored in access-controlled repositories and are accessible only to our senior stone inspectors, quantity surveyors, and technical fabrication specialists.
            </p>
            <p>
              Simplex does <strong>not sell, rent, lease, or monetize</strong> client personal information or project data to any third-party marketing companies.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="font-cinzel text-xl font-bold text-[#1A1A1A] flex items-center gap-2">
              <span className="text-[#8F704D] font-mono text-sm">05.</span>
              Cookies & Local Spec Tray Storage
            </h2>
            <p>
              Our web platform utilizes local storage (`localStorage`) solely to preserve your curated architectural moodboards and stone comparison trays between browsing sessions. You may clear your browser storage or moodboard at any time through the spec tray drawer interface.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="font-cinzel text-xl font-bold text-[#1A1A1A] flex items-center gap-2">
              <span className="text-[#8F704D] font-mono text-sm">06.</span>
              Data Protection Rights & Grievance Officer
            </h2>
            <p>
              Under the Digital Personal Data Protection Act, 2023, you retain the right to review, rectify, or request the deletion of your contact records and architectural files from our active trade databases.
            </p>
            <div className="pt-4 border-t border-[#EAE7DF] space-y-1 text-xs">
              <div><strong>Data Governance Officer:</strong> Legal & Compliance Desk</div>
              <div><strong>Registered Office:</strong> Simplex Pavilion, Dr. Annie Besant Road, Worli, Mumbai 400018, Maharashtra, India</div>
              <div><strong>Direct Inquiries:</strong> privacy@simplexstone.in • +91 (022) 6940 8800</div>
            </div>
          </section>

        </div>

        {/* Bottom CTA */}
        <div className="p-8 rounded-3xl bg-[#FFFFFF] border border-[#DCD9D1] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div>
            <h3 className="font-cinzel text-lg font-bold text-[#1A1A1A]">Have Questions Regarding Legal Compliance?</h3>
            <p className="text-xs text-[#7D776E] mt-0.5">Our trade desk is available for corporate agreements and NDA executions.</p>
          </div>
          <a
            href="/contact?topic=Legal%20%26%20Privacy%20Inquiry"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('contact');
            }}
            className="px-6 py-3 rounded-full bg-[#1A1A1A] hover:bg-[#33302B] text-white text-xs font-bold uppercase tracking-wider transition-all shrink-0 cursor-pointer shadow-sm"
          >
            Contact Legal Desk
          </a>
        </div>

      </div>
    </div>
  );
};
