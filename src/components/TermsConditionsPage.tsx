import React from 'react';
import { 
  FileCheck2, 
  Scale, 
  AlertCircle, 
  Truck, 
  Gem, 
  ShieldAlert, 
  Building2, 
  CheckCircle2, 
  ArrowLeft 
} from 'lucide-react';

interface TermsConditionsPageProps {
  onNavigate: (page: string) => void;
}

export const TermsConditionsPage: React.FC<TermsConditionsPageProps> = ({ onNavigate }) => {
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
            <span className="text-[#1A1A1A] font-semibold">Terms & Conditions</span>
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
            <Scale className="w-3.5 h-3.5" />
            Trade Governance & Procurement Protocols
          </div>
          <h1 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#1A1A1A]">
            Terms & Conditions
          </h1>
          <p className="text-xs text-[#7D776E] tracking-wider uppercase font-mono">
            Standard Architectural Trade Agreement • Simplex Marble Granite (Mumbai)
          </p>
        </div>

        {/* Content Box */}
        <div className="bg-[#FFFFFF] border border-[#DCD9D1] rounded-3xl p-8 sm:p-12 shadow-sm space-y-10 text-xs sm:text-sm text-[#4A463F] leading-relaxed font-light">
          
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="font-cinzel text-xl font-bold text-[#1A1A1A] flex items-center gap-2">
              <span className="text-[#8F704D] font-mono text-sm">01.</span>
              Scope & Commercial Application
            </h2>
            <p>
              These Terms and Conditions govern all quotations, orders, proforma invoices, sales contracts, and deliveries entered into between Simplex Marble Granite ("Simplex") and the purchasing entity, architect, contractor, PMC, or private client ("Buyer").
            </p>
            <p>
              Issuance of a formal purchase order, remittance of an initial advance deposit, or physical sign-off on gangsaw slab lots constitutes unconditional acceptance of these terms.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="font-cinzel text-xl font-bold text-[#1A1A1A] flex items-center gap-2">
              <span className="text-[#8F704D] font-mono text-sm">02.</span>
              Geological Characteristics & Natural Variations
            </h2>
            <div className="p-4 rounded-2xl bg-[#F8F7F4] border border-[#DCD9D1] space-y-2">
              <div className="flex items-center gap-2 font-semibold text-[#1A1A1A]">
                <Gem className="w-4 h-4 text-[#8F704D]" />
                <span>Inherent Nature of Quarried Stone</span>
              </div>
              <p className="text-xs text-[#5C574F]">
                Natural marble, volcanic granite, and quartzite are geological materials formed over millions of years. Chromatic variations, mineral veins, calcite crystallization, micro-fossils, dry seams, and natural fissures are inherent signatures of genuine natural stone and shall not be deemed defects.
              </p>
            </div>
            <p>
              Physical sample swatches (e.g. 10×10cm or 20×20cm) represent general chromatic tonality and veining style. Full gangsaw slabs (average size 2800×1800mm) may display broader vein movements and tonal shifts characteristic of sequential block extraction.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="font-cinzel text-xl font-bold text-[#1A1A1A] flex items-center gap-2">
              <span className="text-[#8F704D] font-mono text-sm">03.</span>
              Stockyard Inspection & Slab Approval Protocol
            </h2>
            <p>
              Prior to packaging and dispatch from our Mumbai selection facility:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-[#5C574F]">
              <li><strong>Physical Inspection:</strong> Buyers and consulting architects are strongly encouraged to inspect consecutive slabs in person under our calibrated daylight gantry crane bays.</li>
              <li><strong>High-Resolution Dry-Lay Sign-off:</strong> For outstation projects across India, Simplex Marble Granite provides 4K calibrated dry-lay photography and laser vein-matching documentation for formal electronic approval prior to loading.</li>
              <li><strong>Finality of Approval:</strong> Once slab lots have been approved and sliced or loaded onto transport vehicles, no claims regarding natural aesthetics or surface veining will be entertained.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="font-cinzel text-xl font-bold text-[#1A1A1A] flex items-center gap-2">
              <span className="text-[#8F704D] font-mono text-sm">04.</span>
              Commercial Terms, Payments & 18% GST Invoicing
            </h2>
            <p>
              All prices quoted are in Indian Rupees (INR). Unless explicitly agreed in a customized written contract:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-[#5C574F]">
              <li><strong>Payment Milestones:</strong> Standard payment structure requires a 50% advance deposit upon block/slab reservation, and the remaining 50% balance cleared prior to transport vehicle dispatch.</li>
              <li><strong>GST Compliance:</strong> All transactions are subject to 18% GST (HSN Chapter 6802/2515) with formal B2B electronic tax invoicing for full Input Tax Credit (ITC) eligibility.</li>
              <li><strong>Holding Period:</strong> Reserved sequential slab bundles are held free of warehousing charges for up to 45 calendar days following payment of advance deposit.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="font-cinzel text-xl font-bold text-[#1A1A1A] flex items-center gap-2">
              <span className="text-[#8F704D] font-mono text-sm">05.</span>
              Logistics, Pan-India Transport & Site Offloading
            </h2>
            <div className="p-4 rounded-2xl bg-[#F8F7F4] border border-[#DCD9D1] space-y-2">
              <div className="flex items-center gap-2 font-semibold text-[#1A1A1A]">
                <Truck className="w-4 h-4 text-[#8F704D]" />
                <span>Heavy-Payload Transit & Crane Protocols</span>
              </div>
              <p className="text-xs text-[#5C574F]">
                Slabs are loaded onto specialized steel A-frames with foam cushioning and secured with heavy-duty ratchet straps. Slabs are transported under comprehensive Marine/Transit Insurance covering vehicular accidents and catastrophic transit loss.
              </p>
            </div>
            <p>
              The Buyer is responsible for ensuring clear heavy-vehicle approach roads and crane/hoisting arrangements at the delivery site. Offloading from transport trucks must be executed by experienced stone handling crews using certified vacuum lifters or safety web slings.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="font-cinzel text-xl font-bold text-[#1A1A1A] flex items-center gap-2">
              <span className="text-[#8F704D] font-mono text-sm">06.</span>
              Installation, Sealing & Technical Specifications
            </h2>
            <p>
              Natural stone must be installed using high-grade, polymer-modified adhesives and water-resistant backing sealers suitable for Indian climatic conditions.
            </p>
            <p>
              Simplex Marble Granite certifies raw slab compliance with international standards (IS 1121 compressive strength, IS 1124 water absorption, and CE dimensional tolerance). Simplex Marble Granite does not assume liability for damages arising from improper structural sub-base preparation, defective mortar mixtures, acidic cleaning agents, or third-party installation craftsmanship.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="font-cinzel text-xl font-bold text-[#1A1A1A] flex items-center gap-2">
              <span className="text-[#8F704D] font-mono text-sm">07.</span>
              Arbitration & Mumbai Judicial Jurisdiction
            </h2>
            <p>
              Any disputes or claims arising under or in connection with supply contracts shall be governed by the laws of India and submitted to exclusive arbitration in Mumbai, Maharashtra, under the Indian Arbitration and Conciliation Act, 1996.
            </p>
            <p>
              The courts located in Mumbai, Maharashtra, shall possess sole and exclusive territorial jurisdiction.
            </p>
          </section>

        </div>

        {/* Bottom CTA */}
        <div className="p-8 rounded-3xl bg-[#FFFFFF] border border-[#DCD9D1] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div>
            <h3 className="font-cinzel text-lg font-bold text-[#1A1A1A]">Need Architectural Procurement Documentation?</h3>
            <p className="text-xs text-[#7D776E] mt-0.5">We provide formal proforma estimates, HSN tax schedules, and quarry certificates.</p>
          </div>
          <a
            href="/contact?topic=Trade%20Estimate%20%26%20Terms%20Request"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('contact');
            }}
            className="px-6 py-3 rounded-full bg-[#1A1A1A] hover:bg-[#33302B] text-white text-xs font-bold uppercase tracking-wider transition-all shrink-0 cursor-pointer shadow-sm"
          >
            Request Trade Proforma
          </a>
        </div>

      </div>
    </div>
  );
};
