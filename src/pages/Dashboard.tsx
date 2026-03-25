import { useState } from 'react';
import { 
  Compass, Gavel, FileText, BarChart3, LogOut,
  Search, Bell, Target, TrendingUp, Menu, X, ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router-dom';

// --- Mock Data ---
const tenders = [
  { id: '1', agency: 'Defense Health Agency', solicitationNumber: 'W81XWH-26-R-0047', title: 'Medical Supply Logistics - Global Response', value: '$12.4M', hsCode: '3004.90', region: 'North America', status: 'High Value', type: 'RFP', deadline: '28 Apr 2026' },
  { id: '2', agency: 'Ministry of Health (India)', solicitationNumber: 'MOH-IND-24-PH-09', title: 'Rural Vaccination Cold Chain Infrastructure', value: '$4.8M', hsCode: '8418.69', region: 'South Asia', status: 'New Match', type: 'ITT', deadline: '15 Jul 2024' },
  { id: '3', agency: 'UNICEF', solicitationNumber: 'UN-9022-TEXT', title: 'Protective Apparel for Emergency Responders', value: '$2.1M', hsCode: '6210.10', region: 'Global', status: 'Verified', type: 'RFQ', deadline: '02 Jun 2024' },
];

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen bg-surface-container-low text-on-surface font-sans overflow-x-hidden">
      
      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside 
        initial={false}
        animate={{ x: sidebarOpen ? 0 : '-100%' }}
        transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
        className={`fixed md:sticky top-0 left-0 bg-surface-container-low md:bg-[#f3f4f2] h-screen w-64 flex flex-col border-r border-outline-variant/20 z-50 md:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:transition-none`}
      >
        <div className="p-6 mb-8 flex justify-between items-center bg-[#f3f4f2]">
          <div>
            <div className="text-lg font-black text-primary tracking-tighter" onClick={() => navigate('/')} style={{cursor:'pointer'}}>Export Intelligence</div>
            <div className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold mt-1">Premium Tier</div>
          </div>
          <button className="md:hidden text-on-surface-variant p-1" onClick={() => setSidebarOpen(false)}>
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="flex-1 space-y-1 pr-4 pb-6 overflow-y-auto">
          <a href="#" className="flex items-center gap-3 px-6 py-3 bg-[#e1e3e1] text-primary font-bold rounded-r-md"><Compass className="w-5 h-5 fill-primary" /> Discovery</a>
          <a href="#" className="flex items-center gap-3 px-6 py-3 text-on-surface-variant hover:bg-[#e1e3e1]/50 transition-all font-medium"><Gavel className="w-5 h-5" /> Bidding Tools</a>
          <a href="#" className="flex items-center gap-3 px-6 py-3 text-on-surface-variant hover:bg-[#e1e3e1]/50 transition-all font-medium"><FileText className="w-5 h-5" /> My Tenders</a>
        </nav>
        
        <div className="p-4 border-t border-outline-variant/20 mt-auto">
          <button onClick={() => navigate('/')} className="flex items-center gap-3 px-2 py-3 text-on-surface-variant font-medium w-full hover:text-primary transition-colors text-sm">
            <LogOut className="w-5 h-5" /> Log Out
          </button>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col w-full min-w-0">
        <header className="sticky top-0 bg-white/80 backdrop-blur-md flex items-center justify-between px-4 md:px-8 py-3 border-b border-outline-variant/20 z-30">
          <div className="flex items-center gap-3">
            <button className="md:hidden text-primary p-2 -ml-2" onClick={() => setSidebarOpen(true)}>
              <Menu className="w-6 h-6" />
            </button>
            <div className="text-lg md:text-xl font-bold text-primary tracking-tighter">Sovereign Ledger</div>
          </div>
          <div className="flex items-center gap-3 md:gap-4">
            <button className="p-2 text-on-surface-variant hover:text-primary transition-colors relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-2 w-2 h-2 bg-error rounded-full block border border-white"></span>
            </button>
            <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xs shadow-sm ring-2 ring-primary/20 cursor-pointer">
              RK
            </div>
          </div>
        </header>

        <div className="p-4 sm:p-6 md:p-8 space-y-6 md:space-y-8 max-w-[1400px] mx-auto w-full">
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-primary">Good morning, Rajesh 👋</h1>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <div className="bg-white p-4 md:p-6 rounded-xl border-l-4 border-primary shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-[9px] md:text-[10px] font-bold uppercase text-on-surface-variant">New Tenders</div>
                  <div className="text-xl md:text-2xl font-black mt-1 text-primary">1,284</div>
                </div>
                <div className="bg-primary/10 p-2 rounded-lg hidden sm:block">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 md:p-6 rounded-xl border-l-4 border-secondary shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-[9px] md:text-[10px] font-bold uppercase text-on-surface-variant">Active Bids</div>
                  <div className="text-xl md:text-2xl font-black mt-1 text-on-surface">12</div>
                </div>
                <div className="bg-secondary/10 p-2 rounded-lg hidden sm:block">
                  <Gavel className="w-5 h-5 text-secondary" />
                </div>
              </div>
            </div>

            <div className="bg-white p-4 md:p-6 rounded-xl border-l-4 border-tertiary shadow-sm hover:shadow-md transition-shadow col-span-2 sm:col-span-1">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-[9px] md:text-[10px] font-bold uppercase text-on-surface-variant">Win Potential</div>
                  <div className="text-xl md:text-2xl font-black mt-1 text-on-surface">68%</div>
                </div>
                <div className="bg-tertiary/10 p-2 rounded-lg hidden lg:block">
                  <TrendingUp className="w-5 h-5 text-tertiary" />
                </div>
              </div>
            </div>

            <div className="bg-white p-4 md:p-6 rounded-xl border-l-4 border-outline shadow-sm hover:shadow-md transition-shadow col-span-2 sm:col-span-1">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-[9px] md:text-[10px] font-bold uppercase text-on-surface-variant">Pipeline Value</div>
                  <div className="text-xl md:text-2xl font-black mt-1 text-on-surface">$19.2M</div>
                </div>
                <div className="bg-outline/10 p-2 rounded-lg hidden lg:block">
                  <BarChart3 className="w-5 h-5 text-outline" />
                </div>
              </div>
            </div>
          </div>

          <section className="bg-white rounded-xl shadow-sm border border-outline-variant/20 flex shadow-sm overflow-hidden flex-col">
            <div className="px-4 md:px-8 py-5 md:py-6 bg-[#f3f4f2]/30 border-b border-outline-variant/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <h2 className="text-lg md:text-xl font-extrabold flex items-center gap-2">
                <Target className="w-5 h-5 md:w-6 md:h-6 text-primary" /> Tender Matches
              </h2>
              <div className="relative w-full sm:w-auto">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">
                  <Search className="w-4 h-4" />
                </span>
                <input 
                  type="text" 
                  placeholder="Search matches..." 
                  className="w-full sm:w-64 pl-9 pr-4 py-2 text-sm bg-white border border-outline-variant/30 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-on-surface-variant/50"
                  />
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left whitespace-nowrap md:whitespace-normal">
                <thead className="bg-[#f3f4f2] text-[10px] md:text-[11px] uppercase font-black text-on-surface-variant">
                  <tr>
                    <th className="px-4 md:px-6 py-3 md:py-4">Agency</th>
                    <th className="px-4 md:px-6 py-3 md:py-4 min-w-[200px]">Title</th>
                    <th className="px-4 md:px-6 py-3 md:py-4">Value</th>
                    <th className="px-4 md:px-6 py-3 md:py-4">Deadline</th>
                    <th className="px-4 md:px-6 py-3 md:py-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {tenders.map((t, idx) => (
                    <tr key={t.id} className={`border-b border-outline-variant/10 hover:bg-[#f3f4f2]/50 transition-colors ${idx === tenders.length - 1 ? 'border-b-0' : ''}`}>
                      <td className="px-4 md:px-6 py-3 md:py-4 font-bold text-xs md:text-sm text-on-surface max-w-[150px] md:max-w-[200px] truncate">{t.agency}</td>
                      <td className="px-4 md:px-6 py-3 md:py-4 text-xs md:text-sm text-on-surface-variant truncate max-w-[200px] md:max-w-xs xl:max-w-md">{t.title}</td>
                      <td className="px-4 md:px-6 py-3 md:py-4 font-bold text-primary text-xs md:text-sm">{t.value}</td>
                      <td className="px-4 md:px-6 py-3 md:py-4 text-[11px] md:text-xs text-on-surface-variant font-medium">{t.deadline}</td>
                      <td className="px-4 md:px-6 py-3 md:py-4 text-right">
                        <button className="text-[10px] md:text-xs font-bold bg-primary/10 text-primary px-3 py-1.5 md:px-4 md:py-2 rounded-lg hover:bg-primary hover:text-white transition-colors">
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Mobile-only View More button if needed */}
            <div className="md:hidden bg-[#f3f4f2]/30 p-4 text-center border-t border-outline-variant/10">
              <button className="text-primary text-xs font-bold flex items-center justify-center gap-1 w-full mx-auto">
                Scroll to view more <ChevronRight className="w-3 h-3" />
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
