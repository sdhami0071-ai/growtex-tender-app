import { 
  Globe, Search, ArrowRight, LayoutDashboard, 
  Activity, Clock, Archive, PieChart, Building2, 
  Award, Users, MapPin, Grid, Lock, Mail
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background font-body text-on-surface">
      {/* Top Bar */}
      <header className="fixed top-0 w-full z-50 h-16 bg-primary flex justify-between items-center px-4 md:px-6 shadow-md">
        <div className="flex items-center gap-4 md:gap-8">
          <div className="text-xl md:text-2xl font-bold tracking-tighter text-white flex items-center gap-2 font-headline cursor-pointer" onClick={() => navigate('/')}>
            <Globe className="w-5 h-5 md:w-6 md:h-6" />
            <span>GrowteX</span>
          </div>
          <span className="hidden lg:block text-white/70 text-[10px] font-semibold uppercase tracking-widest border-l border-white/20 pl-6">
            India's Foreign Tender Intelligence Platform
          </span>
        </div>
        <div className="hidden md:block flex-1 max-w-xl px-8">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-white/50">
              <Search size={18} />
            </span>
            <input 
              className="block w-full bg-white/10 border-none rounded-lg py-2 pl-10 pr-3 text-sm text-white placeholder-white/50 outline-none focus:ring-1 focus:ring-white/30" 
              placeholder="Search Global Tenders..." 
              type="text" 
            />
          </div>
        </div>
        <div className="flex items-center gap-4 md:gap-6">
          <button className="text-white/70 hover:text-white transition-colors text-xs md:text-sm font-semibold hidden sm:block" onClick={() => navigate('/dashboard')}>
            Login
          </button>
          <button 
            onClick={() => navigate('/signup')}
            className="bg-tertiary-fixed text-on-tertiary-fixed px-4 py-2 md:px-5 md:py-2 rounded-full text-xs md:text-sm font-bold flex items-center gap-2 hover:opacity-90 transition-all shadow-lg text-nowrap"
          >
            <Lock size={14} className="hidden sm:block" /> 
            <span className="hidden sm:inline">Unlock 1-Month Premium Free Trial</span>
            <span className="sm:hidden">1-Month Trial</span>
          </button>
        </div>
      </header>

      {/* Sidebar */}
      <aside className="fixed left-0 top-16 h-full w-0 md:w-64 bg-surface-container-low flex-col py-8 border-r border-outline-variant/10 hidden md:flex">
        <div className="px-6 mb-8">
          <h2 className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-4 opacity-60">Discover</h2>
          <nav className="space-y-1">
            <button onClick={() => navigate('/dashboard')} className="w-full flex items-center gap-3 px-3 py-2.5 bg-surface-container-high text-primary font-bold border-r-4 border-primary transition-colors">
              <LayoutDashboard size={18} /> <span className="text-xs uppercase tracking-wider">Dashboard</span>
            </button>
            <button onClick={() => navigate('/search')} className="w-full flex items-center gap-3 px-3 py-2.5 text-on-surface-variant hover:bg-surface-container-high hover:text-primary transition-colors">
              <Globe size={18} /> <span className="text-xs uppercase tracking-wider">Search Tenders</span>
            </button>
          </nav>
        </div>
        <div className="mt-auto px-6 pb-24">
          <div className="p-4 rounded-xl bg-primary text-white text-center shadow-lg border border-primary-container">
            <p className="text-xs font-bold mb-2">GrowteX Global</p>
            <button onClick={() => navigate('/signup')} className="w-full py-2 bg-tertiary-fixed text-on-tertiary-fixed text-[10px] font-bold uppercase rounded hover:opacity-90 transition-opacity">
              Start Free Trial Now
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="md:ml-64 mt-16 p-4 md:p-8 min-h-screen bg-[#fcfdfa]">
        <div className="max-w-7xl mx-auto space-y-8 md:space-y-10">
          
          {/* Free Trial Banner */}
          <div className="bg-secondary-container/40 border border-secondary-container/60 rounded-xl p-3 md:p-4 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm w-full mt-2">
            <div className="flex items-center gap-3 text-on-secondary-container font-medium text-sm sm:text-base">
              <Mail className="w-5 h-5 text-secondary shrink-0" />
              <span>Only curious? Unlock <strong>1-Month Premium Free Trial Plan!</strong></span>
            </div>
            <button onClick={() => navigate('/signup')} className="w-full sm:w-auto bg-white text-secondary font-bold px-6 py-2.5 rounded-lg text-sm border border-secondary/20 hover:bg-secondary hover:text-white transition-colors shadow-sm whitespace-nowrap">
              Start now
            </button>
          </div>

          {/* Header Area */}
          <div className="pt-2 md:pt-4">
            <h1 className="font-headline text-3xl md:text-4xl font-extrabold text-primary mb-3">Global Trade Ledger</h1>
            <p className="text-on-surface-variant font-medium text-base md:text-lg max-w-2xl">
              Empowering Indian MSME Manufacturers with Sovereign Intelligence. Unlock global government contracts without the complexity.
            </p>
          </div>

          {/* Quick Metrics Grid (TendersGo style converted for MSMEs) */}
          <div>
            <h2 className="text-xs md:text-sm font-bold uppercase tracking-widest text-outline mb-4 flex items-center gap-2">
              <Activity size={16} /> Platform Intelligence Overview
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
              <div className="bg-white p-4 md:p-5 rounded-xl border border-outline-variant/20 shadow-sm flex flex-col items-center justify-center text-center hover:border-primary/30 transition-colors">
                <Activity className="w-5 h-5 md:w-6 md:h-6 text-primary mb-2" />
                <div className="text-xl md:text-2xl font-black text-on-surface">145,200+</div>
                <div className="text-[10px] md:text-[11px] font-bold text-on-surface-variant uppercase tracking-widest mt-1">Live Tenders Right Now</div>
              </div>
              <div className="bg-white p-4 md:p-5 rounded-xl border border-outline-variant/20 shadow-sm flex flex-col items-center justify-center text-center hover:border-primary/30 transition-colors">
                <Clock className="w-5 h-5 md:w-6 md:h-6 text-tertiary-container mb-2" />
                <div className="text-xl md:text-2xl font-black text-on-surface">3,450</div>
                <div className="text-[10px] md:text-[11px] font-bold text-on-surface-variant uppercase tracking-widest mt-1">New Orders Today</div>
              </div>
              <div className="bg-white p-4 md:p-5 rounded-xl border border-outline-variant/20 shadow-sm flex flex-col items-center justify-center text-center hover:border-primary/30 transition-colors">
                <Archive className="w-5 h-5 md:w-6 md:h-6 text-outline mb-2" />
                <div className="text-xl md:text-2xl font-black text-on-surface">2.4M+</div>
                <div className="text-[10px] md:text-[11px] font-bold text-on-surface-variant uppercase tracking-widest mt-1">Past Completed Tenders</div>
              </div>
              <div className="bg-white p-4 md:p-5 rounded-xl border border-outline-variant/20 shadow-sm flex flex-col items-center justify-center text-center hover:border-primary/30 transition-colors">
                <PieChart className="w-5 h-5 md:w-6 md:h-6 text-primary mb-2" />
                <div className="text-xl md:text-2xl font-black text-on-surface">58M+</div>
                <div className="text-[10px] md:text-[11px] font-bold text-on-surface-variant uppercase tracking-widest mt-1">Total Tenders Tracked</div>
              </div>
              <div className="bg-white p-4 md:p-5 rounded-xl border border-outline-variant/20 shadow-sm flex flex-col items-center justify-center text-center hover:border-primary/30 transition-colors">
                <Building2 className="w-5 h-5 md:w-6 md:h-6 text-primary mb-2" />
                <div className="text-xl md:text-2xl font-black text-on-surface">45,000+</div>
                <div className="text-[10px] md:text-[11px] font-bold text-on-surface-variant uppercase tracking-widest mt-1">Government Buyers</div>
              </div>
              <div className="bg-white p-4 md:p-5 rounded-xl border border-outline-variant/20 shadow-sm flex flex-col items-center justify-center text-center hover:border-primary/30 transition-colors">
                <Award className="w-5 h-5 md:w-6 md:h-6 text-on-tertiary-container mb-2" />
                <div className="text-xl md:text-2xl font-black text-on-surface">890,000+</div>
                <div className="text-[10px] md:text-[11px] font-bold text-on-surface-variant uppercase tracking-widest mt-1">Contracts Awarded</div>
              </div>
              <div className="bg-primary text-white p-4 md:p-5 rounded-xl border border-primary-container shadow-xl flex flex-col items-center justify-center text-center col-span-2 relative overflow-hidden group">
                <Users className="w-6 h-6 md:w-8 md:h-8 text-tertiary-fixed mb-2 relative z-10 group-hover:scale-110 transition-transform" />
                <div className="text-2xl md:text-3xl font-black relative z-10">12,500+</div>
                <div className="text-[10px] md:text-xs font-bold uppercase tracking-widest mt-1 text-white/80 relative z-10">Registered MSME Vendors</div>
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {/* Popular Countries */}
            <div className="bg-surface-container-low p-5 md:p-6 rounded-xl border border-outline-variant/20">
              <div className="flex items-center gap-2 mb-5 md:mb-6">
                <MapPin className="w-5 h-5 text-primary" />
                <h3 className="font-headline text-lg font-bold text-primary">High-Demand Countries</h3>
              </div>
              <div className="space-y-3 md:space-y-4">
                {[
                  { name: 'United States', volume: '105,200 Live', val: 100 },
                  { name: 'United Kingdom', volume: '45,800 Live', val: 60 },
                  { name: 'United Arab Emirates', volume: '12,450 Live', val: 40 },
                  { name: 'Saudi Arabia', volume: '8,900 Live', val: 30 },
                  { name: 'Singapore', volume: '3,200 Live', val: 15 }
                ].map(country => (
                  <div key={country.name} className="flex flex-col gap-1.5 border-b border-outline-variant/10 pb-3 last:border-0 last:pb-0">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm text-on-surface">{country.name}</span>
                      <span className="text-[10px] md:text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded">{country.volume}</span>
                    </div>
                    {/* Visual bar */}
                    <div className="w-full bg-outline-variant/20 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-primary h-full rounded-full" style={{ width: `${country.val}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
              <button onClick={() => navigate('/signup')} className="w-full mt-6 text-xs text-primary font-bold uppercase tracking-widest hover:underline flex justify-center items-center gap-1 group">
                View All Countries <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform"/>
              </button>
            </div>

            {/* Popular Sections (Industries) */}
            <div className="bg-surface-container-low p-5 md:p-6 rounded-xl border border-outline-variant/20">
              <div className="flex items-center gap-2 mb-5 md:mb-6">
                <Grid className="w-5 h-5 text-primary" />
                <h3 className="font-headline text-lg font-bold text-primary">Top MSME Sectors</h3>
              </div>
              <div className="space-y-3 md:space-y-4">
                {[
                  { name: 'Medical & Pharmaceuticals', code: 'HS 3004', trend: '+14%' },
                  { name: 'Defense & Tactical Gear', code: 'HS 6210', trend: '+22%' },
                  { name: 'Construction & Infrastructure Materials', code: 'HS 7308', trend: '+8%' },
                  { name: 'IT Hardware & Electronics', code: 'HS 8471', trend: '+35%' },
                  { name: 'Agri-Business & Processed Foods', code: 'HS 1006', trend: '+11%' }
                ].map(sector => (
                  <div key={sector.name} className="flex items-center justify-between border-b border-outline-variant/10 pb-3 md:pb-3.5 last:border-0 last:pb-0 group">
                    <div>
                      <span className="block font-bold text-sm text-on-surface group-hover:text-primary transition-colors">{sector.name}</span>
                      <span className="text-[10px] md:text-xs text-on-surface-variant font-medium">{sector.code}</span>
                    </div>
                    <span className="text-xs font-bold text-green-700 bg-green-100 px-2 py-1 rounded">{sector.trend}</span>
                  </div>
                ))}
              </div>
              <button onClick={() => navigate('/signup')} className="w-full mt-6 text-xs text-primary font-bold uppercase tracking-widest hover:underline flex justify-center items-center gap-1 group">
                Explore All Sectors <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform"/>
              </button>
            </div>
          </div>

          {/* Latest Live Tenders Table */}
          <div>
            <h2 className="text-xs md:text-sm font-bold uppercase tracking-widest text-outline mb-4 flex justify-between items-center">
              <span>Latest Live Tenders</span>
              <button onClick={() => navigate('/dashboard')} className="text-primary hover:underline text-[10px] md:text-xs flex items-center gap-1">
                See more <ArrowRight size={12}/>
              </button>
            </h2>
            <div className="overflow-x-auto w-full pb-8">
              <div className="min-w-[700px]">
                <div className="bg-surface-container-high rounded-t-xl p-4 grid grid-cols-12 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant border-x border-t border-outline-variant/20">
                  <div className="col-span-3">Country / Agency</div>
                  <div className="col-span-4">Requirement / Title</div>
                  <div className="col-span-2">Est. Value</div>
                  <div className="col-span-3 text-right">Action</div>
                </div>
                <div className="bg-white border-x border-b border-outline-variant/20 rounded-b-xl overflow-hidden shadow-sm">
                  <div className="grid grid-cols-12 p-4 md:p-5 items-center border-b border-outline-variant/10 hover:bg-surface-container-low/50 transition-colors">
                    <div className="col-span-3">
                      <div className="font-bold text-xs text-primary">UAE Govt</div>
                      <div className="text-[10px] text-on-surface-variant">Dubai Health Auth.</div>
                    </div>
                    <div className="col-span-4 text-xs font-semibold pr-4 text-on-surface">Supply of Speciality Pharmaceutical Devices</div>
                    <div className="col-span-2 text-xs font-bold text-on-surface">AED 5.2M</div>
                    <div className="col-span-3 text-right flex justify-end">
                      <button onClick={() => navigate('/signup')} className="bg-primary text-white text-[10px] font-bold px-4 py-2 rounded-full flex items-center gap-1 hover:bg-primary-container transition-all">
                        <Lock size={12} /> Unlock Tender
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 p-4 md:p-5 items-center hover:bg-surface-container-low/50 transition-colors">
                    <div className="col-span-3">
                      <div className="font-bold text-xs text-primary">United States</div>
                      <div className="text-[10px] text-on-surface-variant">Dept. of Defense</div>
                    </div>
                    <div className="col-span-4 text-xs font-semibold pr-4 text-on-surface">Global Logistics Response - Tents & Shelters</div>
                    <div className="col-span-2 text-xs font-bold text-on-surface">$12.4M</div>
                    <div className="col-span-3 text-right flex justify-end">
                      <button onClick={() => navigate('/signup')} className="bg-primary text-white text-[10px] font-bold px-4 py-2 rounded-full flex items-center gap-1 hover:bg-primary-container transition-all">
                        <Lock size={12} /> Unlock Tender
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </main>
    </div>
  );
}
