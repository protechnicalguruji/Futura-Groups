import { motion } from "motion/react";
import WhatsAppLeadForm from "./WhatsAppLeadForm";

export default function Hero({ onNavigate }: { onNavigate: (page: string, scrollToId?: string) => void }) {
  return (
    <section id="hero" className="relative min-h-screen w-full flex items-center py-20 px-6 md:px-8 overflow-hidden bg-primary text-white">
      <div className="absolute inset-0 bg-black/50 z-10" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center z-0 scale-105 animate-slow-zoom" />
      
      <div className="relative z-20 flex flex-col justify-center w-full max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12 md:gap-16 lg:gap-20">
          <div className="w-full lg:w-3/5 flex flex-col justify-center text-center lg:text-left items-center lg:items-start">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              className="text-accent font-sans font-bold mb-4 tracking-[0.2em] uppercase text-xs md:text-sm"
            >
              Where Trust Meets Tomorrow
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.2, duration: 0.8 }} 
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6 md:mb-8"
            >
              Exquisite Real Estate <span className="text-accent italic font-serif">Solutions</span> for Your Legacy.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.4 }} 
              className="text-lg md:text-xl text-gray-200 mb-8 md:mb-10 max-w-2xl leading-relaxed"
            >
              Empowering your future with informed property investment decisions in Bengaluru since 2000. Discover the pinnacle of luxury and trust.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.6 }} 
              className="flex flex-wrap justify-center lg:justify-start gap-4"
            >
              <button 
                onClick={() => onNavigate('projects')} 
                className="px-8 py-4 bg-accent text-primary rounded-full font-sans font-bold hover:bg-white hover:scale-105 transition-all shadow-xl text-sm md:text-base"
              >
                Explore Properties
              </button>
              <button 
                onClick={() => onNavigate('contact')} 
                className="px-8 py-4 bg-white/10 text-white border border-white/30 rounded-full font-sans font-bold hover:bg-white/20 hover:scale-105 transition-all backdrop-blur-md text-sm md:text-base"
              >
                Contact Us
              </button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="w-full lg:w-auto"
          >
            <WhatsAppLeadForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
