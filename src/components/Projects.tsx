import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { projects } from "../data";
import { Check, Plus } from "lucide-react";

const categories = ["All", "Luxury Apartments", "Villas", "Commercial", "Plots"];

export default function Projects({ onSelect, onNavigate, compareList, onToggleCompare }: { onSelect: (p: any) => void; onNavigate: (page: string) => void; compareList: any[]; onToggleCompare: (p: any) => void }) {
  const [active, setActive] = useState("All");
  const filtered = (active === "All" ? projects : projects.filter(p => p.category === active)).slice(0, 6);

  return (
    <section id="projects" className="py-12 md:py-20 lg:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 md:mb-10 lg:mb-8 gap-4 md:gap-6">
          <h2 className="text-3xl md:text-4xl lg:text-3xl font-display font-bold text-primary">Featured Projects</h2>
          <div className="flex gap-2 p-1 bg-gray-100 rounded-full overflow-x-auto max-w-full no-scrollbar pb-1 md:pb-0">
            {categories.map(c => (
              <button key={c} onClick={() => setActive(c)} className={`px-4 md:px-6 lg:px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all whitespace-nowrap ${active === c ? "bg-white shadow-md text-primary" : "text-gray-500 hover:text-primary"}`}>{c}</button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => {
              const isCompared = compareList.some(item => item.id === p.id);
              return (
                <motion.div key={p.id} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} className="group bg-surface rounded-[28px] shadow-lg hover:shadow-2xl transition-all overflow-hidden border border-white">
                  <div className="h-48 md:h-64 lg:h-52 overflow-hidden relative">
                      <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                      <button 
                        onClick={(e) => { e.stopPropagation(); onToggleCompare(p); }}
                        className={`absolute top-4 right-4 p-2 rounded-full backdrop-blur-md border transition-all z-20 ${isCompared ? 'bg-accent text-primary border-accent' : 'bg-black/20 text-white border-white/40 opacity-0 group-hover:opacity-100'}`}
                        title={isCompared ? "Remove from comparison" : "Add to comparison"}
                      >
                        {isCompared ? <Check size={18} /> : <Plus size={18} />}
                      </button>
                  </div>
                  <div className="p-5 md:p-6 lg:p-4">
                    <h3 className="text-xl md:text-xl lg:text-lg font-bold text-primary leading-tight">{p.name}</h3>
                    <p className="text-sm md:text-base lg:text-sm text-gray-500 mb-2">{p.location}</p>
                    <div className="flex items-center gap-3 text-xs text-gray-400 mb-4">
                        <span>{p.area}</span>
                        <span>•</span>
                        <span>{p.status}</span>
                        {p.bedrooms > 0 && (
                            <>
                                <span>•</span>
                                <span>{p.bedrooms} Bedrooms</span>
                            </>
                        )}
                    </div>
                    <div className="text-lg md:text-xl lg:text-lg font-bold text-accent mb-4 md:mb-5 lg:mb-4">{p.price}</div>
                    <div className="flex gap-3 md:gap-4 lg:gap-3">
                      <button onClick={() => onSelect(p)} className="flex-1 px-3 md:px-4 lg:px-3 py-2.5 md:py-3 lg:py-2 border border-primary text-primary rounded-[18px] font-bold hover:bg-primary hover:text-white transition-all text-xs md:text-base lg:text-sm">Details</button>
                      <a href="tel:+918884544588" className="flex-1 px-3 md:px-4 lg:px-3 py-2.5 md:py-3 lg:py-2 bg-primary text-white rounded-[18px] font-bold hover:bg-secondary transition-all text-center text-xs md:text-base lg:text-sm">Call Now</a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
        <div className="mt-8 md:mt-10 text-center">
            <button onClick={() => onNavigate('projects')} className="px-8 md:px-9 py-3 md:py-3.5 bg-primary text-white rounded-[18px] font-bold hover:bg-secondary transition-all hover:scale-105 shadow-md text-sm md:text-base">Show More Projects</button>
        </div>
      </div>
    </section>
  );
}
