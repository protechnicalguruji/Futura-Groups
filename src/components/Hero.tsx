import { motion } from "motion/react";
import WhatsAppLeadForm from "./WhatsAppLeadForm";

export default function Hero({ onNavigate }: { onNavigate: (page: string, scrollToId?: string) => void }) {
  return (
    <section id="hero" className="relative min-h-[70vh] lg:h-[620px] w-full flex items-center py-10 md:py-16 lg:py-12 px-6 md:px-8 overflow-hidden bg-primary text-white">
      <div className="absolute inset-0 bg-black/40 z-10" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center z-0" />
      
      <div className="relative z-20 flex flex-col justify-center w-full max-w-7xl mx-auto py-8 md:py-0">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-16 lg:gap-12">
          <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left items-center md:items-start">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-accent font-sans font-semibold mb-3 md:mb-4 tracking-wider uppercase text-xs md:text-base">Where Trust Meets Tomorrow</motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-4 md:mb-5">
              Trusted Real Estate <span className="text-accent">Solutions</span> for Your Future.
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-base md:text-xl lg:text-base text-gray-200 mb-6 md:mb-7 max-w-lg">
              Helping you make informed long-term property investment decisions in Bengaluru since 2000.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4">
              <button onClick={() => onNavigate('projects')} aria-label="Explore our projects" className="px-5 md:px-7 py-2.5 md:py-3.5 bg-accent text-primary rounded-[18px] font-sans font-bold hover:bg-white transition-all text-xs md:text-base">Explore Projects</button>
              <button onClick={() => onNavigate('contact', 'contact-form')} aria-label="Book a consultation" className="px-5 md:px-7 py-2.5 md:py-3.5 bg-white/10 text-white border border-white/30 rounded-[18px] font-sans font-bold hover:bg-white/20 transition-all text-xs md:text-base">Book Consultation</button>
            </motion.div>
          </div>

          <WhatsAppLeadForm />
        </div>
      </div>
    </section>
  );
}
