import { useState } from 'react';
import { 
  Search, Filter, MapPin, Building2, Calendar, 
  ChevronDown, ArrowRight, LayoutDashboard, Globe
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const mockResults = [
  { id: '1', agency: 'Defense Health Agency', country: 'United States', title: 'Medical Supply Logistics - Global Response', value: '$12.4M', deadline: '28 Apr 2026', type: 'RFP' },
  { id: '2', agency: 'Ministry of Health', country: 'UAE', title: 'Speciality Pharmaceutical Devices', value: 'AED 5.2M', deadline: '15 Jul 2024', type: 'ITT' },
  { id: '3', agency: 'UNICEF', country: 'Global', title: 'Protective Apparel for Emergency Responders', value: '$2.1M', deadline: '02 Jun 2024', type: 'RFQ' },
  { id: '4', agency: 'Department of Transportation', country: 'United Kingdom', title: 'Highway Infrastructure and Bridges Maintenance', value: '£4.5M', deadline: '10 Aug 2024', type: 'RFP' },
  { id: '5', agency: 'Ministry of Defense', country: 'Saudi Arabia', title: 'Tactical Gear and Advanced Textiles Supply', value: 'SAR 18.5M', deadline: '05 Sep 2024', type: 'ITT' },
];

export default function SearchTenders() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="flex min-h-screen bg-[#fcfdfa] text-on-surface font-body">
      {/* Sidebar - Matching Dashboard/Landing style */}
      <aside className="bg-surface-container-low h-screen sticky left-0 w-0 md:w-64 flex-col border-r border-outline-variant/20 hidden md:flex">
        <div className="p-6 mb-8 cursor-pointer" onClick={() => navigate('/')}>
          <div className="text-xl font-black text-primary tracking-tighter flex items-center gap-2">
            <Globe className="w-5 h-5" /> GrowteX
          </div>
          <div className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold mt-1">Sovereign Ledger</div>
        </div>
        <nav className="flex-1 space-y-1">
          <button onClick={() => navigate('/dashboard')} className="w-full flex items-center gap-3 px-6 py-3 text-on-surface-variant hover:bg-surface-container-high transition-all">
            <LayoutDashboard className="w-5 h-5" /> <span className="text-sm font-bold">Dashboard</span>
          </button>
          <button className="w-full flex items-center gap-3 px-6 py-3 bg-surface-container-high text-primary font-bold border-r-4 border-primary">
            <Search className="w-5 h-5" /> <span className="text-sm font-bold">Search Tenders</span>
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col w-full">
        {/* Mobile Header */}
        <header className="md:hidden bg-primary text-white p-4 flex justify-between items-center sticky top-0 z-50 shadow-md">
          <div className="font-headline font-bold flex items-center gap-2" onClick={() => navigate('/')}>
            <Globe className="w-5 h-5" /> GrowteX
          </div>
          <button onClick={() => navigate('/dashboard')} className="text-xs font-semibold bg-white/20 px-3 py-1.5 rounded">Dashboard</button>
        </header>

        <div className="p-4 md:p-8 space-y-6 max-w-7xl mx-auto w-full">
          {/* Search Header */}
          <div className="bg-primary rounded-2xl p-6 md:p-10 text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-tertiary-container/30 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <h1 className="text-2xl md:text-3xl font-extrabold font-headline mb-3">Global Tender Search Hub</h1>
              <p className="text-white/80 font-medium text-sm md:text-base mb-8 max-w-2xl">
                Discover lucrative foreign government contracts filtered explicitly for Indian MSME capabilities and compliance matrix.
              </p>
              
              <div className="flex flex-col md:flex-row gap-3">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant w-5 h-5" />
                  <input 
                    type="text" 
                    placeholder="Search by keywords, HS Code, or agency..." 
                    className="w-full pl-12 pr-4 py-4 rounded-xl text-on-surface font-semibold focus:outline-none focus:ring-4 focus:ring-tertiary-container/50 bg-white shadow-inner"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <button className="bg-tertiary-fixed text-on-tertiary-fixed font-bold px-8 py-4 rounded-xl hover:opacity-90 transition-opacity whitespace-nowrap hidden md:block">
                  Search Now
                </button>
              </div>
            </div>
          </div>

          {/* Filters & Results Area */}
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Filters Sidebar */}
            <div className="w-full lg:w-64 space-y-6">
              <div className="bg-white p-5 rounded-xl border border-outline-variant/20 shadow-sm">
                <div className="flex items-center justify-between mb-4 border-b border-outline-variant/10 pb-3">
                  <span className="font-bold text-sm tracking-wide flex items-center gap-2"><Filter className="w-4 h-4" /> Filters</span>
                  <span className="text-[10px] text-primary font-bold uppercase cursor-pointer">Clear</span>
                </div>
                
                <div className="space-y-5">
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-widest text-outline mb-2">Target Country</span>
                    <select className="w-full p-2 border border-outline-variant/30 rounded-lg text-sm font-medium bg-surface-container-lowest text-on-surface appearance-none outline-none focus:border-primary">
                      <option>All Countries</option>
                      <option>United States</option>
                      <option>United Kingdom</option>
                      <option>United Arab Emirates</option>
                    </select>
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-widest text-outline mb-2">Industry Sector</span>
                    <select className="w-full p-2 border border-outline-variant/30 rounded-lg text-sm font-medium bg-surface-container-lowest text-on-surface appearance-none outline-none focus:border-primary">
                      <option>All Sectors</option>
                      <option>Medical & Pharma</option>
                      <option>Infrastructure</option>
                      <option>Defense</option>
                    </select>
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-widest text-outline mb-2">Estimated Value</span>
                    <select className="w-full p-2 border border-outline-variant/30 rounded-lg text-sm font-medium bg-surface-container-lowest text-on-surface appearance-none outline-none focus:border-primary">
                      <option>Any Value</option>
                      <option>Under $1 Million</option>
                      <option>$1M - $10M</option>
                      <option>Over $10M</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Results Grid */}
            <div className="flex-1 space-y-4">
              <div className="flex justify-between items-center px-1">
                <h2 className="text-sm font-bold">Search Results <span className="text-outline font-normal">({mockResults.length} matches)</span></h2>
                <div className="text-xs font-semibold text-on-surface-variant flex items-center gap-1 cursor-pointer">
                  Sort by: Relevance <ChevronDown className="w-3 h-3" />
                </div>
              </div>

              {mockResults.map((tender) => (
                <div key={tender.id} className="bg-white rounded-xl border border-outline-variant/20 shadow-sm hover:shadow-md transition-shadow p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 group cursor-pointer" onClick={() => navigate(`/tender/${tender.id}`)}>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="bg-surface-container-high text-on-surface-variant text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">{tender.type}</span>
                      <span className="flex items-center gap-1 text-[11px] font-bold text-primary bg-primary/10 px-2 py-1 rounded">
                        <MapPin className="w-3 h-3" /> {tender.country}
                      </span>
                    </div>
                    <h3 className="font-headline font-bold text-LG text-on-surface group-hover:text-primary transition-colors mb-1">
                      {tender.title}
                    </h3>
                    <div className="text-xs font-medium text-on-surface-variant flex items-center gap-1">
                      <Building2 className="w-3.5 h-3.5" /> {tender.agency}
                    </div>
                  </div>

                  <div className="flex flex-row md:flex-col justify-between items-center md:items-end gap-3 md:gap-1 border-t md:border-t-0 border-outline-variant/10 pt-3 md:pt-0">
                    <div className="text-left md:text-right">
                      <div className="text-xs text-outline font-semibold mb-0.5">Est. Value</div>
                      <div className="text-base font-black text-primary">{tender.value}</div>
                    </div>
                    <div className="text-left md:text-right">
                      <div className="text-[10px] text-outline font-semibold uppercase flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> Deadline
                      </div>
                      <div className="text-xs font-bold text-on-surface">{tender.deadline}</div>
                    </div>
                    <button className="hidden md:flex ml-4 bg-surface-container-low text-primary text-xs font-bold px-4 py-2 rounded group-hover:bg-primary group-hover:text-white transition-colors items-center gap-1 mt-2">
                      View Details <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
