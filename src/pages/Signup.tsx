import { useState } from 'react';
import { 
  Globe, 
  Filter, 
  Gavel, 
  HelpCircle, 
  ChevronDown, 
  ArrowRight, 
  Lock,
  Check,
  Menu,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const [selectedPlan, setSelectedPlan] = useState<'india' | 'global'>('india');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/success');
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="w-full sticky top-0 z-50 bg-surface-container-lowest flex items-center justify-between px-4 md:px-8 py-4 border-b border-outline-variant/10">
        <div className="flex items-center gap-2">
          <span className="text-xl font-extrabold text-primary tracking-tighter cursor-pointer" onClick={() => navigate('/')}>GrowteX</span>
          <div className="hidden sm:block h-4 w-px bg-outline-variant/30 mx-2"></div>
          <span className="hidden sm:block text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Sovereign Ledger</span>
        </div>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden text-primary" onClick={() => setMobileMenuOpen(true)}>
          <Menu className="w-6 h-6" />
        </button>

        <div className="hidden md:flex items-center gap-8">
          <nav className="flex gap-8">
            <a className="text-sm font-semibold text-on-surface-variant hover:text-primary transition-colors" href="#">Market Intelligence</a>
            <a className="text-sm font-semibold text-on-surface-variant hover:text-primary transition-colors" href="#">Trade Data</a>
          </nav>
          <div className="flex items-center gap-4">
            <HelpCircle className="w-5 h-5 text-on-surface-variant cursor-pointer hover:text-primary transition-colors" />
            <button className="bg-primary text-on-primary px-5 py-2 text-sm font-bold rounded-lg hover:bg-primary-container transition-all active:scale-95" onClick={() => navigate('/dashboard')}>
              Log In
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-[60] bg-surface flex flex-col p-6"
          >
            <div className="flex justify-between items-center mb-8">
              <span className="text-xl font-extrabold text-primary tracking-tighter">GrowteX</span>
              <button className="p-2 text-on-surface-variant" onClick={() => setMobileMenuOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="flex flex-col gap-6 text-lg font-bold">
              <a href="#" className="border-b border-outline/10 pb-4">Market Intelligence</a>
              <a href="#" className="border-b border-outline/10 pb-4">Trade Data</a>
              <a href="#" className="border-b border-outline/10 pb-4">Help Center</a>
              <button className="mt-4 bg-primary text-on-primary py-4 rounded-xl shadow-lg active:scale-95" onClick={() => { setMobileMenuOpen(false); navigate('/dashboard'); }}>
                Go to Dashboard (Login)
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow flex flex-col md:flex-row">
        {/* Left Panel: Value Proposition */}
        <section className="w-full md:w-[40%] bg-primary text-on-primary p-6 md:p-16 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <img 
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000" 
              alt="abstract tech pattern" 
              className="w-full h-full object-cover mix-blend-overlay"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="relative z-10 my-8 md:my-0">
            <div className="mb-12 md:mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-4">GrowteX</h2>
              <p className="text-on-primary-container font-medium text-lg md:text-xl leading-snug max-w-md">
                Empowering Indian Enterprises in the Global Public Sector.
              </p>
            </div>

            <div className="space-y-8 md:space-y-10">
              <div className="flex gap-4 md:gap-5 items-start">
                <div className="bg-primary-container/40 p-2.5 rounded-xl shrink-0">
                  <Globe className="w-6 h-6 text-on-primary-container" />
                </div>
                <div>
                  <h3 className="font-bold text-base md:text-lg mb-1">Access 190+ country government tenders</h3>
                  <p className="text-on-primary-container/80 text-xs md:text-sm leading-relaxed">
                    Tap into a trillion-dollar global market from a single dashboard.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 md:gap-5 items-start">
                <div className="bg-primary-container/40 p-2.5 rounded-xl shrink-0">
                  <Filter className="w-6 h-6 text-on-primary-container" />
                </div>
                <div>
                  <h3 className="font-bold text-base md:text-lg mb-1">Matched to your exact product category</h3>
                  <p className="text-on-primary-container/80 text-xs md:text-sm leading-relaxed">
                    No noise. Only relevant opportunities filtered by our AI ledger.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 md:gap-5 items-start">
                <div className="bg-primary-container/40 p-2.5 rounded-xl shrink-0">
                  <Gavel className="w-6 h-6 text-on-primary-container" />
                </div>
                <div>
                  <h3 className="font-bold text-base md:text-lg mb-1">We submit bids on your behalf</h3>
                  <p className="text-on-primary-container/80 text-xs md:text-sm leading-relaxed">
                    Our regulatory experts handle the paperwork and compliance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="hidden md:block relative z-10 mt-20 p-8 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10"
          >
            <p className="italic text-primary-container font-medium text-lg mb-6 leading-relaxed">
              "GrowteX helped us find our first UAE government contract in 3 weeks. The data density is unmatched."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20 bg-gray-200"></div>
              <div>
                <p className="font-bold text-white">Rajesh K.</p>
                <p className="text-xs text-white/60 font-semibold uppercase tracking-wider">CEO, Apex Industrial Solutions</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Right Panel: Registration Form */}
        <section className="w-full md:w-[60%] bg-surface flex items-center justify-center p-6 md:p-16">
          <div className="max-w-2xl w-full">
            <div className="mb-10 content-center text-center pl-2 pr-2 md:text-left md:pl-0 md:pr-0">
              <h1 className="text-3xl md:text-4xl font-extrabold text-on-surface tracking-tight mb-3">Create Your Account</h1>
              <p className="text-on-surface-variant font-medium text-base md:text-lg">Join the network of sovereign trade intelligence.</p>
            </div>

            <form className="space-y-6 md:space-y-8" onSubmit={handleSignup}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="space-y-1">
                  <label className="block text-[10px] font-black text-on-surface-variant uppercase tracking-[0.2em]">Full Name</label>
                  <input className="ledger-input" placeholder="e.g. Rajesh Kumar" type="text" required />
                </div>
                <div className="space-y-1">
                  <label className="block text-[10px] font-black text-on-surface-variant uppercase tracking-[0.2em]">Mobile Number</label>
                  <div className="flex items-center gap-3 border-b border-outline/30 focus-within:border-primary transition-all">
                    <span className="text-on-surface font-bold py-2">+91</span>
                    <input required className="w-full bg-transparent border-0 focus:ring-0 px-0 py-2 text-on-surface placeholder:text-outline/50 font-medium outline-none" placeholder="98765 43210" type="tel" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="space-y-1">
                  <label className="block text-[10px] font-black text-on-surface-variant uppercase tracking-[0.2em]">Company Name</label>
                  <input className="ledger-input" placeholder="Apex Industrial Solutions" type="text" required />
                </div>
                <div className="space-y-1">
                  <label className="block text-[10px] font-black text-on-surface-variant uppercase tracking-[0.2em]">Company Email</label>
                  <input className="ledger-input" placeholder="rajesh@apexindustrial.in" type="email" required />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
                <div className="space-y-1">
                  <label className="block text-[10px] font-black text-on-surface-variant uppercase tracking-[0.2em]">Country</label>
                  <div className="py-2 border-b border-outline/30 text-on-surface font-bold flex items-center justify-between">
                    India <Lock className="w-3 h-3 text-outline/50" />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="block text-[10px] font-black text-on-surface-variant uppercase tracking-[0.2em]">State</label>
                  <div className="relative">
                    <select required className="ledger-input appearance-none bg-transparent">
                      <option value="" disabled selected>Select State</option>
                      <option>Maharashtra</option>
                      <option>Karnataka</option>
                      <option>Delhi</option>
                      <option>Gujarat</option>
                    </select>
                    <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-outline/50 pointer-events-none" />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="block text-[10px] font-black text-on-surface-variant uppercase tracking-[0.2em]">City</label>
                  <input required className="ledger-input" placeholder="Mumbai" type="text" />
                </div>
              </div>

              <div className="pt-4 pb-2">
                <label className="block text-[10px] font-black text-on-surface-variant uppercase tracking-[0.2em] mb-4">Select Access Tier</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div 
                    onClick={() => setSelectedPlan('india')}
                    className={`relative flex flex-col p-5 rounded-2xl cursor-pointer border-2 transition-all group ${
                      selectedPlan === 'india' ? 'bg-surface-container-lowest border-primary shadow-lg shadow-primary/5' : 'bg-surface-container-low border-transparent hover:border-outline-variant/50'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <span className={`font-bold ${selectedPlan === 'india' ? 'text-primary' : 'text-on-surface'}`}>India Select</span>
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${selectedPlan === 'india' ? 'bg-primary border-primary' : 'border-outline-variant'}`}>
                        {selectedPlan === 'india' && <Check className="w-3 h-3 text-white" strokeWidth={4} />}
                      </div>
                    </div>
                    <p className="text-2xl font-extrabold text-primary mb-1">₹99<span className="text-[10px] font-normal text-on-surface-variant ml-1">/mo</span></p>
                    <p className="text-[11px] text-on-surface-variant font-medium leading-relaxed">Access to all domestic Indian government tenders.</p>
                  </div>

                  <div 
                    onClick={() => setSelectedPlan('global')}
                    className={`relative flex flex-col p-5 rounded-2xl cursor-pointer border-2 transition-all group ${
                      selectedPlan === 'global' ? 'bg-surface-container-lowest border-primary shadow-lg shadow-primary/5' : 'bg-surface-container-low border-transparent hover:border-outline-variant/50'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-2">
                        <span className={`font-bold ${selectedPlan === 'global' ? 'text-primary' : 'text-on-surface'}`}>GrowteX Global</span>
                        <span className="text-[8px] bg-tertiary-container text-on-tertiary px-1.5 py-0.5 rounded font-black tracking-tighter uppercase">Elite</span>
                      </div>
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${selectedPlan === 'global' ? 'bg-primary border-primary' : 'border-outline-variant'}`}>
                        {selectedPlan === 'global' && <Check className="w-3 h-3 text-white" strokeWidth={4} />}
                      </div>
                    </div>
                    <p className="text-2xl font-extrabold text-primary mb-1">₹499<span className="text-[10px] font-normal text-on-surface-variant ml-1">/mo</span></p>
                    <p className="text-[11px] text-on-surface-variant font-medium leading-relaxed">Access to global tenders from 190+ countries.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button className="w-full bg-primary text-on-primary font-bold py-4 rounded-xl hover:bg-primary-container active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-xl shadow-primary/10 group" type="submit">
                  <span className="text-sm md:text-base">Create My Account</span>
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-center text-[10px] md:text-[11px] text-outline mt-4 px-4 md:px-12 leading-relaxed font-medium">
                  By creating an account, you agree to our <a className="underline font-bold hover:text-primary transition-colors" href="#">TOS</a> and <a className="underline font-bold hover:text-primary transition-colors" href="#">Privacy Policy</a>. Data accuracy is governed by sovereign ledger protocols.
                </p>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
