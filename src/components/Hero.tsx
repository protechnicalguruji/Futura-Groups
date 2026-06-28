import { motion } from "motion/react";
import WhatsAppLeadForm from "./WhatsAppLeadForm";

export default function Hero({ onNavigate }: { onNavigate: (page: string, scrollToId?: string) => void }) {
  return (
    <section id="hero" className="relative min-h-screen w-full flex items-center py-20 px-8 overflow-hidden bg-primary text-white">
      <div className="absolute inset-0 bg-black/40 z-10" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center z-0" />
      
      <div className="relative z-20 flex flex-col justify-center w-full max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-accent font-sans font-semibold mb-4 tracking-wider uppercase">Luxury Living Since 2012</motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="font-display text-5xl md:text-8xl font-bold leading-tight mb-6">
              Redefining <span className="text-accent">Opulence</span> in Every Detail.
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-xl text-gray-200 mb-8 max-w-lg">
              Experience unparalleled sophistication and architectural mastery in the most prestigious locations.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="flex gap-4">
              <button onClick={() => onNavigate('projects')} aria-label="Explore our projects" className="px-8 py-4 bg-accent text-primary rounded-[18px] font-sans font-bold hover:bg-white transition-all">Explore Projects</button>
              <button onClick={() => onNavigate('contact', 'contact-form')} aria-label="Book a consultation" className="px-8 py-4 bg-white/10 text-white border border-white/30 rounded-[18px] font-sans font-bold hover:bg-white/20 transition-all">Book Consultation</button>
            </motion.div>
          </div>

          <WhatsAppLeadForm />
        </div>
      </div>
    </section>
  );
}
