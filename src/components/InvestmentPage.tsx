import { useState } from "react";
import { motion } from "motion/react";
import { projects } from "../data";

import { Check, Plus } from "lucide-react";

export default function InvestmentPage({ onSelect, compareList, onToggleCompare }: { onSelect: (p: any) => void; compareList: any[]; onToggleCompare: (p: any) => void }) {
  const [config, setConfig] = useState("All");
  const [priceRange, setPriceRange] = useState(60);

  const filtered = projects.filter(p => 
    (config === "All" || p.configuration === config) &&
    p.priceVal <= priceRange
  );

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-32 px-6 md:px-8 pb-16">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-4xl lg:text-3xl font-display font-bold text-primary mb-8 md:mb-10 lg:mb-8">Investment Opportunities</h1>
        <div className="bg-white/80 backdrop-blur-lg p-6 lg:p-5 rounded-[28px] border border-gray-100 shadow-sm mb-8 md:mb-10 lg:mb-8">
          <div className="flex gap-4 mb-5 lg:mb-4 overflow-x-auto pb-4 no-scrollbar">
            {["All", "2 BHK", "3 BHK", "4 BHK", "5 BHK"].map(c => (
              <button key={c} onClick={() => setConfig(c)} className={`px-5 py-2.5 lg:px-4 lg:py-2 rounded-full font-bold whitespace-nowrap transition-all ${config === c ? 'bg-primary text-white shadow-lg' : 'bg-background hover:bg-gray-100'}`}>{c}</button>
            ))}
          </div>
          <div className="space-y-4 lg:space-y-3">
            <input type="range" min="3" max="60" value={priceRange} onChange={e => setPriceRange(Number(e.target.value))} className="w-full accent-accent" />
            <p className="font-bold text-primary lg:text-sm">Max Price: {priceRange} Cr</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-6">
            {filtered.map(p => {
                const isCompared = compareList.some(item => item.id === p.id);
                return (
                    <div key={p.id} className="group bg-surface rounded-[28px] shadow-sm overflow-hidden border border-gray-100">
                        <div className="h-48 md:h-60 lg:h-52 overflow-hidden relative">
                            <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                            <button 
                                onClick={(e) => { e.stopPropagation(); onToggleCompare(p); }}
                                className={`absolute top-4 right-4 p-2 rounded-full backdrop-blur-md border transition-all z-20 ${isCompared ? 'bg-accent text-primary border-accent' : 'bg-black/20 text-white border-white/40 opacity-0 group-hover:opacity-100'}`}
                                title={isCompared ? "Remove from comparison" : "Add to comparison"}
                            >
                                {isCompared ? <Check size={18} /> : <Plus size={18} />}
                            </button>
                        </div>
                        <div className="p-5 md:p-6 lg:p-5">
                            <h3 className="text-xl md:text-xl lg:text-lg font-bold text-primary leading-tight">{p.name}</h3>
                            <p className="text-sm md:text-base lg:text-sm text-gray-500 mb-4 lg:mb-3">{p.location}</p>
                            <div className="text-lg md:text-xl lg:text-lg font-bold text-accent mb-4 md:mb-5 lg:mb-4">{p.price}</div>
                            <div className="flex gap-3 md:gap-4 lg:gap-3">
                                <button onClick={() => onSelect(p)} className="flex-1 px-3 md:px-4 lg:px-3 py-2.5 md:py-3 lg:py-2 border border-primary text-primary rounded-[18px] font-bold text-xs md:text-base lg:text-sm">Details</button>
                                <a href="tel:+918884544588" className="flex-1 px-3 md:px-4 py-2.5 md:py-3 lg:py-2 bg-primary text-white rounded-[18px] font-bold text-center text-xs md:text-base lg:text-sm">Call Now</a>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
      </div>
    </motion.div>
  );
}
