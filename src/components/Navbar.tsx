import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, MessageCircle, CalendarDays, Menu, X } from "lucide-react";

export default function Navbar({ onNavigate }: { onNavigate: (page: string, scrollToId?: string) => void }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-5 left-1/2 -translate-x-1/2 w-[92%] h-[76px] z-50 flex items-center justify-between px-8 bg-white/60 backdrop-blur-md border border-white/40 rounded-full shadow-lg"
    >
      <div className="font-display text-2xl font-bold text-primary cursor-pointer" onClick={() => onNavigate('home')}>ELITE</div>
      <div className="hidden md:flex gap-8 font-sans font-medium text-primary">
        {["Home", "Projects", "Services", "About", "Contact", "Investment"].map((item) => (
          <button key={item} onClick={() => onNavigate(item.toLowerCase())} className="hover:text-accent transition-colors">
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
      <button className="md:hidden text-primary" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X /> : <Menu />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 w-full bg-white/90 backdrop-blur-lg border border-white/40 rounded-[28px] shadow-2xl p-6 md:hidden flex flex-col gap-4"
          >
            {["Home", "Projects", "Services", "About", "Contact", "Investment"].map((item) => (
              <button key={item} onClick={() => { onNavigate(item.toLowerCase()); setIsOpen(false); }} className="text-left font-bold text-primary hover:text-accent">
                {item}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
