import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, MessageCircle, CalendarDays, Menu, X } from "lucide-react";

export default function Navbar({ onNavigate }: { onNavigate: (page: string, scrollToId?: string) => void }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-3 md:top-5 left-1/2 -translate-x-1/2 w-[92%] h-[60px] md:h-[76px] z-50 flex items-center justify-between px-6 md:px-8 bg-white/60 backdrop-blur-md border border-white/40 rounded-full shadow-lg"
    >
      <div className="font-display text-xl md:text-2xl font-bold text-primary cursor-pointer" onClick={() => onNavigate('home')}>ELITE</div>
      <div className="hidden md:flex gap-4 lg:gap-8 font-sans font-medium text-primary">
        {["Home", "Projects", "Services", "About", "Contact", "Investment"].map((item) => (
          <button key={item} onClick={() => onNavigate(item.toLowerCase())} className="hover:text-accent transition-colors whitespace-nowrap">
            {item}
          </button>
        ))}
      </div>
      <div className="hidden md:flex gap-4">
        <a href="tel:+917224935780" aria-label="Call Us" className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-[18px] font-sans font-medium hover:bg-secondary transition-all hover:scale-105 shadow-md">
          <Phone size={18} /> Call
        </a>
        <a href="https://wa.me/917224935780?text=Hello, I am interested in your real estate projects. Please contact me." target="_blank" aria-label="Book a consultation" className="flex items-center gap-2 px-6 py-3 bg-accent text-primary rounded-[18px] font-sans font-medium hover:bg-opacity-90 transition-all hover:scale-105 shadow-md">
          <CalendarDays size={18} /> Book
        </a>
      </div>
      <button className="md:hidden text-primary p-2" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-16 md:top-20 left-0 w-full bg-white/95 backdrop-blur-lg border border-white/40 rounded-[28px] shadow-2xl p-5 md:hidden flex flex-col gap-3"
          >
            {["Home", "Projects", "Services", "About", "Contact", "Investment"].map((item) => (
              <button key={item} onClick={() => { onNavigate(item.toLowerCase()); setIsOpen(false); }} className="text-left font-bold text-primary hover:text-accent py-2.5 border-b border-gray-100 last:border-0 text-sm md:text-base">
                {item}
              </button>
            ))}
            <div className="flex flex-col gap-2 mt-2">
                <a href="tel:+917224935780" className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-[18px] font-bold text-sm">
                    <Phone size={16} /> Call Us
                </a>
                <a href="https://wa.me/917224935780" target="_blank" className="flex items-center justify-center gap-2 px-6 py-3 bg-accent text-primary rounded-[18px] font-bold text-sm">
                    <CalendarDays size={16} /> Book Visit
                </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
