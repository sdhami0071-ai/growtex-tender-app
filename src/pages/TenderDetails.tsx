import { useParams, useNavigate } from 'react-router-dom';
import { 
  Building2, MapPin, Calendar, FileText, CheckCircle, 
  ArrowLeft, Info, FileStack, Zap, Lock, Globe 
} from 'lucide-react';

export default function TenderDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mocked details based on ID (or fallback)
  const isMatch = id !== 'archive';

  return (
    <div className="flex min-h-screen bg-[#fcfdfa] text-on-surface font-body pb-12">
      <main className="flex-1 flex flex-col w-full">
        {/* Navigation Bar */}
        <header className="bg-primary text-white px-6 md:px-12 py-4 flex justify-between items-center shadow-md sticky top-0 z-50">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => navigate(-1)} 
              className="hover:bg-white/10 p-2 rounded-full transition-colors flex items-center justify-center cursor-pointer"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="font-headline font-bold text-xl flex items-center gap-2 tracking-tighter cursor-pointer" onClick={() => navigate('/')}>
              <Globe className="w-5 h-5" /> GrowteX
            </div>
          </div>
          <button onClick={() => navigate('/dashboard')} className="text-xs font-semibold bg-white/20 px-4 py-2 rounded-full hover:bg-white/30 transition-colors">
            Back to Dashboard
          </button>
        </header>

        <div className="w-full max-w-5xl mx-auto px-4 md:px-8 mt-8 space-y-6">
          {/* AI Match Banner (if applicable) */}
          {isMatch && (
            <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-start md:items-center gap-4 shadow-sm">
              <div className="bg-green-500 text-white rounded-full p-2 shrink-0 mt-1 md:mt-0">
                <Zap className="w-5 h-5 fill-current" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-green-900 text-sm md:text-base">98% Match with your MSME Profile</h3>
                <p className="text-green-800/80 text-xs md:text-sm font-medium mt-0.5">
                  GrowteX AI identified this tender matches your HS Code (3004.90) and historical production capacities.
                </p>
              </div>
            </div>
          )}

          {/* Tender Header Card */}
          <div className="bg-white rounded-2xl border border-outline-variant/30 shadow-sm p-6 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
            
            <div className="flex flex-col md:flex-row justify-between items-start gap-6">
              <div className="space-y-4 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="bg-surface-container-high text-on-surface-variant text-[10px] md:text-xs font-bold px-3 py-1.5 rounded uppercase tracking-wider">RFP / Solicitation</span>
                  <span className="flex items-center gap-1 text-[11px] md:text-xs font-bold text-primary bg-primary/10 px-3 py-1.5 rounded">
                    <MapPin className="w-3 h-3" /> United States
                  </span>
                  <span className="text-[10px] md:text-xs text-outline font-bold bg-surface-container-low px-3 py-1.5 rounded border border-outline-variant/20">
                    ID: W81XWH-26-R-0047
                  </span>
                </div>
                
                <h1 className="font-headline text-2xl md:text-4xl font-extrabold text-primary leading-tight">
                  Medical Supply Logistics - Global Response Framework
                </h1>
                
                <div className="flex items-center gap-2 text-on-surface-variant text-sm md:text-base font-semibold">
                  <Building2 className="w-4 h-4 md:w-5 md:h-5 text-outline" /> Defense Health Agency
                </div>
              </div>

              {/* Action Sidebar inside header */}
              <div className="w-full md:w-auto bg-surface-container-lowest border border-outline-variant/20 rounded-xl p-5 shadow-sm text-center shrink-0">
                <div className="text-[10px] uppercase tracking-widest text-outline font-bold mb-1">Estimated Value</div>
                <div className="text-3xl font-black text-primary mb-4">$12.4M</div>
                
                <div className="text-[10px] uppercase tracking-widest text-outline font-bold mb-1 flex justify-center items-center gap-1">
                  <Calendar className="w-3 h-3" /> Deadline
                </div>
                <div className="text-sm font-bold text-error mb-6">28 April 2026, 17:00 EST</div>
                
                <button className="w-full bg-tertiary-fixed text-on-tertiary-fixed font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity whitespace-nowrap text-sm shadow-md border border-tertiary-container/20">
                  GrowteX: Bid on My Behalf
                </button>
              </div>
            </div>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Left Column (Full Details) */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* Scope of Work */}
              <div className="bg-white rounded-xl border border-outline-variant/20 shadow-sm p-6 md:p-8">
                <h2 className="font-headline text-lg font-bold text-primary mb-4 border-b border-outline-variant/10 pb-3 flex items-center gap-2">
                  <Info className="w-5 h-5" /> Scope of Work / Background
                </h2>
                <div className="text-sm text-on-surface-variant leading-relaxed space-y-4 font-medium">
                  <p>
                    The Defense Health Agency is seeking qualified global manufacturers and logistics partners to establish a robust supply chain for critical medical supplies (HS Code 3004.90). This includes but is not limited to: generic pharmaceuticals, emergency surgical kits, and specialized protective apparel.
                  </p>
                  <p>
                    The awardee will be responsible for rapid-deployment manufacturing capabilities with a mandated 14-day supply turnaround to global distribution nodes. Indian MSMEs with WHO-GMP certification are highly encouraged to participate through allied sovereign partnerships.
                  </p>
                  <ul className="list-disc pl-5 mt-4 space-y-1 text-on-surface">
                    <li>Minimum capacity: 50,000 units per month.</li>
                    <li>Required Certifications: ISO 13485, WHO-GMP.</li>
                    <li>Contract Duration: Base 2 years + 3 option years.</li>
                  </ul>
                </div>
              </div>

              {/* Documents */}
              <div className="bg-white rounded-xl border border-outline-variant/20 shadow-sm p-6">
                <h2 className="font-headline text-lg font-bold text-primary mb-4 border-b border-outline-variant/10 pb-3 flex items-center gap-2">
                  <FileStack className="w-5 h-5" /> Attached Documents
                </h2>
                <div className="space-y-3">
                  {[
                    { name: 'Solicitation_Package_W81XWH.pdf', size: '2.4 MB' },
                    { name: 'Technical_Specifications_Annex_A.pdf', size: '840 KB' },
                    { name: 'Pricing_Matrix_Template.xlsx', size: '1.2 MB' }
                  ].map((doc, idx) => (
                    <div key={idx} className="flex flex-col sm:flex-row justify-between sm:items-center p-4 rounded-lg bg-surface-container-low border border-outline-variant/10 hover:border-primary/30 transition-colors group cursor-pointer" onClick={() => navigate('/signup')}>
                      <div className="flex items-center gap-3 mb-2 sm:mb-0">
                        <FileText className="w-5 h-5 text-primary" />
                        <div>
                          <p className="text-xs font-bold text-on-surface group-hover:text-primary transition-colors">{doc.name}</p>
                          <p className="text-[10px] text-outline font-medium">{doc.size}</p>
                        </div>
                      </div>
                      <button className="flex items-center justify-center gap-1 text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/5 px-3 py-1.5 rounded sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                        <Lock className="w-3 h-3" /> Unlock Doc
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column (Sidebar metrics) */}
            <div className="space-y-6">
              
              {/* Buyer Information */}
              <div className="bg-surface-container-low rounded-xl border border-outline-variant/20 p-6">
                <h3 className="font-headline text-[13px] uppercase font-bold text-on-surface-variant tracking-widest mb-4">
                  Buyer Information
                </h3>
                <div className="space-y-4">
                  <div>
                    <span className="block text-[10px] font-bold uppercase text-outline mb-0.5">Agency Name</span>
                    <span className="block text-sm font-bold text-primary">Defense Health Agency</span>
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold uppercase text-outline mb-0.5">Location</span>
                    <span className="block text-sm font-bold text-on-surface flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> Washington, D.C., USA</span>
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold uppercase text-outline mb-0.5">Contact Officer</span>
                    <span className="block text-sm font-bold text-on-surface">Col. Sarah Jenkins</span>
                    <span className="block text-xs font-semibold text-primary underline mt-0.5 cursor-pointer" onClick={() => navigate('/signup')}>Unlock Contact Email</span>
                  </div>
                </div>
              </div>

              {/* Requirements */}
              <div className="bg-white rounded-xl border border-outline-variant/20 shadow-sm p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-[100px]"></div>
                <h3 className="font-headline text-[13px] uppercase font-bold text-on-surface-variant tracking-widest mb-4 relative z-10">
                  Key Requirements
                </h3>
                <ul className="space-y-3 text-xs font-semibold text-on-surface relative z-10">
                  <li className="flex gap-2 items-start">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0" /> Local distribution partner required
                  </li>
                  <li className="flex gap-2 items-start">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0" /> Financial bonding ($1M+)
                  </li>
                  <li className="flex gap-2 items-start">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0" /> Past performance in NA regions
                  </li>
                </ul>
                <div className="mt-5 pt-4 border-t border-outline-variant/20 flex flex-col gap-2 relative z-10">
                   <p className="text-[11px] font-medium text-on-surface-variant">Don't have these? GrowteX can act as your proxy bidder.</p>
                   <button onClick={() => navigate('/signup')} className="text-xs font-bold text-tertiary-container uppercase tracking-wide hover:underline text-left">
                     Learn about Proxy Bidding →
                   </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
