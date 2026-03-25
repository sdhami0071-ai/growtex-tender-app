import { Star, ArrowRight, Lock } from 'lucide-react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

export default function Success() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 md:p-12 relative overflow-hidden bg-background">
      {/* Background Decoration */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-20">
        <div className="absolute top-[-10%] right-[-10%] w-[60%] md:w-[40%] h-[60%] bg-primary-container/20 blur-[100px] md:blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[60%] md:w-[40%] h-[60%] bg-tertiary-container/10 blur-[100px] md:blur-[120px] rounded-full"></div>
      </div>

      <main className="relative z-10 w-full max-w-2xl flex flex-col items-center text-center">
        {/* Header Section */}
        <header className="mb-8 md:mb-10 flex flex-col items-center">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-16 h-16 md:w-20 md:h-20 mb-4 md:mb-6 flex items-center justify-center rounded-full bg-secondary-container/30"
          >
            <svg className="w-8 h-8 md:w-12 md:h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path 
                className="checkmark-animation" 
                d="M5 13l4 4L19 7" 
                strokeLinecap="square" 
                strokeLinejoin="miter" 
                strokeWidth="3" 
              />
            </svg>
          </motion.div>
          
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="font-headline text-2xl md:text-4xl font-extrabold text-primary tracking-tight mb-2 md:mb-3"
          >
            Your Account is Ready!
          </motion.h1>
          
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="font-body text-on-surface-variant text-base md:text-lg max-w-md px-4"
          >
            Welcome to India's Foreign Tender Intelligence Platform
          </motion.p>
        </header>

        {/* Account Details Card */}
        <motion.section 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="w-full max-w-[500px] bg-secondary-container/10 border border-outline-variant/20 rounded-xl p-6 md:p-8 mb-8 md:mb-10 text-left relative overflow-hidden shadow-sm"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-tertiary-container/40"></div>
          
          <div className="space-y-5 md:space-y-6">
            {/* ID Row */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end border-b border-outline-variant/10 pb-4 gap-2">
              <span className="font-body text-[10px] md:text-xs uppercase tracking-widest text-on-surface-variant font-semibold">Account ID</span>
              <span className="font-mono text-primary font-bold text-base md:text-lg tracking-tighter">GVT-MFG-00247</span>
            </div>

            {/* Grid Data */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 md:gap-x-8">
              <div>
                <span className="block font-body text-[9px] md:text-[10px] uppercase tracking-wider text-outline mb-1 font-bold">Account Holder</span>
                <span className="block font-headline text-xs md:text-sm font-bold text-on-surface">Rajesh Kumar</span>
              </div>
              <div>
                <span className="block font-body text-[9px] md:text-[10px] uppercase tracking-wider text-outline mb-1 font-bold">Company Entity</span>
                <span className="block font-headline text-xs md:text-sm font-bold text-on-surface">Apex Industrial Solutions</span>
              </div>
              <div>
                <span className="block font-body text-[9px] md:text-[10px] uppercase tracking-wider text-outline mb-1 font-bold">Contact Mobile</span>
                <span className="block font-headline text-xs md:text-sm font-bold text-on-surface">+91 98765 43210</span>
              </div>
              <div>
                <span className="block font-body text-[9px] md:text-[10px] uppercase tracking-wider text-outline mb-1 font-bold">Primary Email</span>
                <span className="block font-headline text-xs md:text-sm font-bold text-on-surface truncate">rajesh@apexindustrial.in</span>
              </div>
            </div>

            {/* Plan Detail */}
            <div className="pt-3 md:pt-4 mt-2 border-t border-outline-variant/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="block font-body text-[9px] md:text-[10px] uppercase tracking-wider text-outline mb-1 font-bold">Tier / Subscription</span>
                <div className="flex items-center gap-1 md:gap-2">
                  <Star className="w-4 h-4 md:w-5 md:h-5 text-primary fill-primary" />
                  <span className="font-headline text-sm md:text-base font-extrabold text-primary">GrowteX Global</span>
                </div>
              </div>
              <div className="sm:text-right">
                <span className="block font-body text-[9px] md:text-[10px] uppercase tracking-wider text-outline mb-1 font-bold">Current Status</span>
                <div className="inline-flex items-center px-2 py-1 md:px-3 bg-tertiary-container text-on-tertiary-container rounded-sm text-[10px] md:text-[11px] font-bold uppercase tracking-tighter shadow-sm">
                  Active — Trial
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Action Section */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full justify-center"
        >
          <button onClick={() => navigate('/dashboard')} className="w-full sm:w-auto bg-primary text-on-primary px-6 py-3 md:px-8 md:py-4 font-headline font-bold text-sm tracking-tight rounded-xl hover:bg-primary-container active:scale-95 transition-all flex items-center justify-center group cursor-pointer shadow-lg shadow-primary/20">
            Go to Dashboard 
            <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button onClick={() => navigate('/')} className="w-full sm:w-auto bg-surface-container-high text-primary px-6 py-3 md:px-8 md:py-4 font-headline font-bold text-sm tracking-tight rounded-xl hover:bg-surface-container-highest active:scale-95 transition-all flex items-center justify-center cursor-pointer border border-outline-variant/20">
            Back to Home
          </button>
        </motion.div>

        {/* Footer */}
        <motion.footer 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="mt-10 md:mt-12 w-full px-4"
        >
          <p className="font-body text-[10px] md:text-xs text-on-surface-variant/70 italic flex items-center justify-center gap-2">
            <Lock className="w-3 h-3 md:w-3.5 md:h-3.5 fill-current shrink-0" />
            <span>Your account data is securely stored on certified regional servers.</span>
          </p>
        </motion.footer>
      </main>

      {/* Decorative Image / Iconography (Asymmetric) */}
      <div className="absolute bottom-5 right-5 md:bottom-10 md:right-10 hidden sm:block opacity-5 pointer-events-none">
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-24 h-24 md:w-32 md:h-32 text-primary">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
        </svg>
      </div>
    </div>
  );
}
