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
              Simplex Marble Granite
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
            Client Confidentiality & Data Governance Charter
          </div>
          <h1 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#1A1A1A]">
            Privacy Policy & Trade Governance
          </h1>
          <p className="text-xs text-[#7D776E] tracking-wider uppercase font-mono">
            Simplex Marble Granite • Compliant with DPDP Act, 2023 (India) & IT Act, 2000
          </p>
        </div>

        {/* Content Box */}
        <div className="bg-[#FFFFFF] border border-[#DCD9D1] rounded-3xl p-8 sm:p-12 shadow-sm space-y-10 text-xs sm:text-sm text-[#4A463F] leading-relaxed font-light">
          
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="font-cinzel text-xl font-bold text-[#1A1A1A] flex items-center gap-2">
              <span className="text-[#8F704D] font-mono text-sm">01.</span>
              Executive Commitment to Client Confidentiality
            </h2>
            <p>
              Simplex Marble Granite, having its registered gallery at Marble Market, Service Road, Near Jay Apartment, W.E. Highway, Vile Parle (E), Mumbai - 400057, Maharashtra, India ("Simplex", "Company", "we", "our", or "us"), operates as India's premier direct importer and stockist of curated Italian marble, exotic Brazilian quartzites, structural granite, and sintered architectural surfaces since 1988.
            </p>
            <p>
              This Privacy Policy governs how we safeguard patron identities, architectural blueprints, bill-of-quantities (BOQ), cutting schedules, site GPS coordinates, and commercial records collected through our digital atelier (simplexstone.in) and private viewings at our Vile Parle Selection Gallery, in strict adherence to the Digital Personal Data Protection Act, 2023 (DPDP Act) and the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="font-cinzel text-xl font-bold text-[#1A1A1A] flex items-center gap-2">
              <span className="text-[#8F704D] font-mono text-sm">02.</span>
              Information We Collect
            </h2>
            <p>
              When you interact with our digital atelier, request custom swatch boxes, visit our Mumbai Selection Gallery in Vile Parle (E), or submit trade inquiries, we may collect:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-[#5C574F]">
              <li><strong>Patron & Professional Credentials:</strong> Full legal name, Council of Architecture (COA) registration or IIID membership number (for architects and interior designers), architectural firm name, professional designation, WhatsApp business contact, verified email, and studio dispatch address.</li>
              <li><strong>Project Specifications & Stone Schedules:</strong> Project site city, estimated square footage, preferred stone classifications (Italian Marble, Magmatic Granite, Translucent Quartzite), bookmatching pattern preferences, and target procurement and installation schedules.</li>
              <li><strong>Architectural CAD & BIM Deliverables:</strong> AutoCAD (.dwg, .dxf), Revit (.rvt), SketchUp models, elevation schedules, or 3D visualizer renderings uploaded voluntarily for vein-continuity simulations, yield optimization, and CNC waterjet precision fabrication.</li>
              <li><strong>Commercial & Statutory Invoicing Records:</strong> 15-digit Goods and Services Tax Identification Number (GSTIN), Permanent Account Number (PAN), registered billing entities, e-Way bill consignment data, and banking transaction references required for 18% Input Tax Credit (ITC) tax invoicing.</li>
              <li><strong>Digital Atelier Interaction Telemetry:</strong> Slabs bookmarked in your Specification Tray, bookmatch comparison sessions, Kelvin lighting visualizer preferences (3000K Warm Alabaster to 6000K Daylight), and general browser performance telemetry.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="font-cinzel text-xl font-bold text-[#1A1A1A] flex items-center gap-2">
              <span className="text-[#8F704D] font-mono text-sm">03.</span>
              Purpose of Data Utilization
            </h2>
            <p>
              We process personal and architectural project data strictly for verified trade operations, order fulfillment, and patron service purposes:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#F8F7F4] border border-[#DCD9D1]">
                <div className="font-semibold text-[#1A1A1A] mb-1">Global Quarry Allocation & Block Reservations</div>
                <p className="text-xs text-[#7D776E]">Reserving consecutive gangsaw slab bundles at European and global partner quarries (Carrara, Verona, Espírito Santo) to preserve chromatic and textural continuity across your floorplate.</p>
              </div>
              <div className="p-4 rounded-xl bg-[#F8F7F4] border border-[#DCD9D1]">
                <div className="font-semibold text-[#1A1A1A] mb-1">Pan-India Freight Logistics & Port Clearance</div>
                <p className="text-xs text-[#7D776E]">Coordinating customs clearance at Nhava Sheva (JNPT), generating mandatory GST e-Way bills, and dispatching hydraulic crane-equipped flatbed trailers directly to your project site.</p>
              </div>
              <div className="p-4 rounded-xl bg-[#F8F7F4] border border-[#DCD9D1]">
                <div className="font-semibold text-[#1A1A1A] mb-1">Calibrated Swatch Courier & Provenance Dossiers</div>
                <p className="text-xs text-[#7D776E]">Dispatching customized 10×10cm laser-cut stone swatches, compressive strength technical certificates, and quarry origin monographs via express courier to your architecture studio.</p>
              </div>
              <div className="p-4 rounded-xl bg-[#F8F7F4] border border-[#DCD9D1]">
                <div className="font-semibold text-[#1A1A1A] mb-1">Private Atelier & Gallery Appointments</div>
                <p className="text-xs text-[#7D776E]">Scheduling private material viewing slots and dry-lay inspections at our Vile Parle Selection Gallery in Mumbai.</p>
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
              We routinely execute formal bilateral Non-Disclosure Agreements (NDAs) with leading architecture practices, family offices, and developers on ultra-luxury residences, hospitality landmarks, and corporate headquarters.
            </p>
            <p>
              All architectural blueprints, CAD drawings, material schedules, and bespoke cutting schedules shared with Simplex Marble Granite are retained in encrypted, access-controlled repositories. Access is restricted exclusively to our senior stone inspectors, quantity surveyors, and technical fabrication specialists assigned to your project.
            </p>
            <p>
              Simplex Marble Granite maintains a strict institutional guarantee: we do <strong>not sell, rent, lease, trade, or monetize</strong> client personal data, firm credentials, or architectural project schedules to any external marketing agencies, advertising brokers, or tile dealers.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="font-cinzel text-xl font-bold text-[#1A1A1A] flex items-center gap-2">
              <span className="text-[#8F704D] font-mono text-sm">05.</span>
              Cookies & Local Spec Tray Storage
            </h2>
            <p>
              Our web platform is engineered with privacy-by-default standards. We do not deploy third-party advertising trackers, invasive profiling pixels, or cross-site fingerprinting cookies.
            </p>
            <p>
              We utilize browser Local Storage (`localStorage`) solely to preserve your curated architectural moodboards, slab comparison trays, and custom bookmatching configurations across your browser sessions without forcing you to log in. You may clear your browser storage or moodboard at any time through the spec tray drawer interface on this website or via your browser settings.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="font-cinzel text-xl font-bold text-[#1A1A1A] flex items-center gap-2">
              <span className="text-[#8F704D] font-mono text-sm">06.</span>
              Data Protection Rights & Grievance Officer
            </h2>
            <p>
              Under Sections 11, 12, and 13 of the Digital Personal Data Protection Act, 2023 (DPDP Act) and Rule 5(9) of the Information Technology Rules, 2011, you possess enforceable statutory rights to access a summary of your data, correct inaccuracies, request the erasure of your contact records and CAD files upon project handover (subject to statutory tax retention laws), or file a formal grievance.
            </p>
            <div className="pt-4 border-t border-[#EAE7DF] space-y-1.5 text-xs">
              <div><strong>Designated Grievance Redressal Officer:</strong> Compliance & Grievance Desk, Simplex Marble Granite</div>
              <div><strong>Corporate Entity:</strong> Simplex Marble Granite</div>
              <div><strong>Registered Address & Selection Gallery:</strong> Marble Market, Service Road, Near Jay Apartment, W.E. Highway, Vile Parle (E), Mumbai - 400057, Maharashtra, India</div>
              <div><strong>Direct Inquiries:</strong> <a href="mailto:ddv25@yahoo.com" className="hover:underline text-[#8F704D]">ddv25@yahoo.com</a> • Phone: <a href="tel:+919967374940" className="hover:underline">+91 99673 74940</a> / <a href="tel:+919967733305" className="hover:underline">+91 99677 33305</a></div>
              <div className="text-[11px] text-[#7D776E] pt-1"><strong>Statutory Resolution Timeline:</strong> Grievance acknowledgments are dispatched within 24 business hours, with full inquiry resolution completed within 15 calendar days.</div>
            </div>
          </section>

        </div>

        {/* Bottom CTA */}
        <div className="p-8 rounded-3xl bg-[#FFFFFF] border border-[#DCD9D1] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div>
            <h3 className="font-cinzel text-lg font-bold text-[#1A1A1A]">Require a Tailored Mutual NDA for Your Project?</h3>
            <p className="text-xs text-[#7D776E] mt-0.5">Our legal and compliance desk coordinates directly with architectural project principals to execute project-specific confidentiality charters.</p>
          </div>
          <a
            href="/contact?topic=Corporate%20NDA%20%26%20Legal"
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
