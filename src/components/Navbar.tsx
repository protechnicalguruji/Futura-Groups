import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, MessageCircle, CalendarDays, Menu, X, Sun, Moon } from "lucide-react";

export default function Navbar({ onNavigate, isDarkMode, onToggleDarkMode }: { onNavigate: (page: string, scrollToId?: string) => void; isDarkMode: boolean; onToggleDarkMode: () => void }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-3 md:top-5 left-1/2 -translate-x-1/2 w-[92%] h-[60px] md:h-[76px] lg:h-[68px] z-50 flex items-center justify-between px-6 md:px-8 lg:px-6 bg-white/60 dark:bg-background/60 backdrop-blur-md border border-white/40 dark:border-white/10 rounded-full shadow-lg transition-colors duration-500"
    >
      <div className="font-display text-xl md:text-2xl lg:text-xl font-bold text-primary cursor-pointer" onClick={() => onNavigate('home')}>FUTURA GROUPS</div>
      <div className="hidden md:flex gap-4 lg:gap-6 font-sans font-medium text-primary lg:text-sm">
        {["Home", "Projects", "Services", "About", "Contact", "Investment"].map((item) => (
          <button key={item} onClick={() => onNavigate(item.toLowerCase())} className="hover:text-accent transition-colors whitespace-nowrap">
            {item}
          </button>
        ))}
      </div>
      <div className="hidden md:flex items-center gap-4 lg:gap-3">
        <button 
          onClick={onToggleDarkMode}
          className="p-2 md:p-3 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 text-primary transition-all"
          title="Toggle Theme"
        >
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <a href="tel:+918884544588" aria-label="Call Us" className="flex items-center gap-2 px-6 py-3 lg:px-5 lg:py-2.5 bg-primary text-secondary rounded-[18px] font-sans font-medium hover:bg-secondary hover:text-white transition-all hover:scale-105 shadow-md lg:text-sm">
          <Phone size={18} className="lg:w-4 lg:h-4" /> Call
        </a>
        <a href="https://wa.me/918884544588?text=Hello Futura Groups, I am interested in your real estate services. Please contact me." target="_blank" aria-label="Book a consultation" className="flex items-center gap-2 px-6 py-3 lg:px-5 lg:py-2.5 bg-accent text-primary rounded-[18px] font-sans font-medium hover:bg-opacity-90 transition-all hover:scale-105 shadow-md lg:text-sm">
          <CalendarDays size={18} className="lg:w-4 lg:h-4" /> Book
        </a>
      </div>
      <div className="flex md:hidden items-center gap-2">
        <button 
          onClick={onToggleDarkMode}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 text-primary transition-all"
        >
          {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <button className="text-primary p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-16 md:top-20 left-0 w-full bg-white/95 dark:bg-primary/95 backdrop-blur-lg border border-white/40 dark:border-white/10 rounded-[28px] shadow-2xl p-5 md:hidden flex flex-col gap-3"
          >
            {["Home", "Projects", "Services", "About", "Contact", "Investment"].map((item) => (
              <button key={item} onClick={() => { onNavigate(item.toLowerCase()); setIsOpen(false); }} className="text-left font-bold text-primary hover:text-accent py-2.5 border-b border-gray-100 last:border-0 text-sm md:text-base">
                {item}
              </button>
            ))}
            <div className="flex flex-col gap-2 mt-2">
                <a href="tel:+918884544588" className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-[18px] font-bold text-sm">
                    <Phone size={16} /> Call Us
                </a>
                <a href="https://wa.me/918884544588" target="_blank" className="flex items-center justify-center gap-2 px-6 py-3 bg-accent text-primary rounded-[18px] font-bold text-sm">
                    <CalendarDays size={16} /> Book Visit
                </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
