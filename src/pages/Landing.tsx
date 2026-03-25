import { Globe, Search, ArrowRight, LayoutDashboard } from 'lucide-react';
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
          <button className="text-white/70 hover:text-white transition-colors text-xs md:text-sm font-semibold" onClick={() => navigate('/dashboard')}>
            Login
          </button>
          <button 
            onClick={() => navigate('/signup')}
            className="bg-secondary px-4 py-2 md:px-5 md:py-2 rounded-full text-white text-xs md:text-sm font-bold flex items-center gap-2 hover:bg-secondary-container hover:text-on-secondary-container transition-all"
          >
            Start Free Trial <ArrowRight size={16} />
          </button>
        </div>
      </header>

      {/* Sidebar - Hidden on extreme mobile, static otherwise */}
      <aside className="fixed left-0 top-16 h-full w-0 md:w-64 bg-surface-container-low flex-col py-8 border-r border-outline-variant/10 hidden md:flex">
        <div className="px-6 mb-8">
          <h2 className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-4 opacity-60">Discover</h2>
          <nav className="space-y-1">
            <button onClick={() => navigate('/dashboard')} className="w-full flex items-center gap-3 px-3 py-2.5 bg-surface-container-high text-primary font-bold border-r-4 border-primary transition-colors">
              <LayoutDashboard size={18} /> <span className="text-xs uppercase tracking-wider">Dashboard</span>
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2.5 text-on-surface-variant hover:bg-surface-container-high hover:text-primary transition-colors">
              <Globe size={18} /> <span className="text-xs uppercase tracking-wider">Search Tenders</span>
            </button>
          </nav>
        </div>
        <div className="mt-auto px-6 pb-24">
          <div className="p-4 rounded-xl bg-primary text-white text-center shadow-lg">
            <p className="text-xs font-bold mb-2">Upgrade to Premium</p>
            <button onClick={() => navigate('/signup')} className="w-full py-2 bg-tertiary-fixed text-on-tertiary-fixed text-[10px] font-bold uppercase rounded hover:opacity-90 transition-opacity">
              Get Full Access
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="md:ml-64 mt-16 p-4 md:p-8 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-headline text-2xl md:text-3xl font-extrabold text-primary mb-2">Global Trade Ledger</h1>
          <p className="text-on-surface-variant mb-6 md:mb-8 font-medium text-sm md:text-base">Empowering Indian Manufacturers with Sovereign Intelligence.</p>

          {/* Subscription Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-12">
            <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/20 shadow-sm relative">
              <span className="absolute top-3 right-3 bg-tertiary-container text-on-tertiary-container text-[10px] font-bold px-3 py-1 rounded-full uppercase">Starter</span>
              <h3 className="font-headline text-xl font-bold text-primary mb-1">India Select</h3>
              <div className="text-2xl font-bold mb-6">₹99 <span className="text-sm font-normal text-on-surface-variant">/month</span></div>
              <button onClick={() => navigate('/signup')} className="w-full py-3 bg-surface-container-high text-primary font-bold rounded-lg hover:bg-surface-container-highest transition-colors">Select Plan</button>
            </div>
            <div className="bg-primary p-6 rounded-xl relative shadow-xl ring-2 ring-tertiary-container text-white">
              <span className="absolute top-3 right-3 bg-tertiary-fixed text-on-tertiary-fixed text-[10px] font-bold px-3 py-1 rounded-full uppercase">Most Popular</span>
              <h3 className="font-headline text-xl font-bold mb-1">GrowteX Global</h3>
              <div className="text-2xl font-bold mb-6">₹499 <span className="text-sm font-normal text-white/70">/month</span></div>
              <button onClick={() => navigate('/signup')} className="w-full py-3 bg-tertiary-fixed text-on-tertiary-fixed font-bold rounded-lg hover:opacity-90 transition-opacity text-primary">Upgrade Now</button>
            </div>
          </div>

          {/* Tender Table */}
          <div className="overflow-x-auto w-full">
            <div className="min-w-[600px]">
              <div className="bg-surface-container-low rounded-t-xl p-4 grid grid-cols-12 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                <div className="col-span-3">Industry</div>
                <div className="col-span-3">Requirement</div>
                <div className="col-span-2">Value</div>
                <div className="col-span-4 text-right">Action</div>
              </div>
              <div className="bg-white border-x border-b border-outline-variant/10 rounded-b-xl overflow-hidden">
                <div className="grid grid-cols-12 p-4 md:p-5 items-center border-b border-outline-variant/5 hover:bg-surface-container-low/50 transition-colors">
                  <div className="col-span-3 text-xs font-bold text-primary truncate pr-2">Pharmaceuticals</div>
                  <div className="col-span-3 text-xs truncate pr-2">Generic Medicines Supply</div>
                  <div className="col-span-2 text-xs font-bold">₹3.2 Cr</div>
                  <div className="col-span-4 text-right">
                    <button onClick={() => navigate('/signup')} className="bg-primary text-white text-[10px] font-bold px-3 py-2 md:px-4 md:py-2 rounded-full hover:bg-primary-container transition-colors">Unlock Tender</button>
                  </div>
                </div>
                <div className="grid grid-cols-12 p-4 md:p-5 items-center border-b border-outline-variant/5 hover:bg-surface-container-low/50 transition-colors">
                  <div className="col-span-3 text-xs font-bold text-primary truncate pr-2">Infrastructure</div>
                  <div className="col-span-3 text-xs truncate pr-2">Highway Construction Material</div>
                  <div className="col-span-2 text-xs font-bold">₹15.8 Cr</div>
                  <div className="col-span-4 text-right">
                    <button onClick={() => navigate('/signup')} className="bg-primary text-white text-[10px] font-bold px-3 py-2 md:px-4 md:py-2 rounded-full hover:bg-primary-container transition-colors">Unlock Tender</button>
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
