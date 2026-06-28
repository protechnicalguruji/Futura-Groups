import { useState } from "react";
import { motion } from "motion/react";
import { projects } from "../data";

export default function InvestmentPage({ onSelect }: { onSelect: (p: any) => void }) {
  const [config, setConfig] = useState("All");
  const [priceRange, setPriceRange] = useState(60);

  const filtered = projects.filter(p => 
    (config === "All" || p.configuration === config) &&
    p.priceVal <= priceRange
  );

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-32 px-6 md:px-8 pb-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-primary mb-10">Investment Opportunities</h1>
        <div className="bg-white/80 backdrop-blur-lg p-6 rounded-[28px] border border-gray-100 shadow-sm mb-10">
          <div className="flex gap-4 mb-6 overflow-x-auto pb-4 no-scrollbar">
            {["All", "2 BHK", "3 BHK", "4 BHK", "5 BHK"].map(c => (
              <button key={c} onClick={() => setConfig(c)} className={`px-6 py-3 rounded-full font-bold whitespace-nowrap transition-all ${config === c ? 'bg-primary text-white shadow-lg' : 'bg-background hover:bg-gray-100'}`}>{c}</button>
            ))}
          </div>
          <div className="space-y-4">
            <input type="range" min="3" max="60" value={priceRange} onChange={e => setPriceRange(Number(e.target.value))} className="w-full accent-accent" />
            <p className="font-bold text-primary">Max Price: {priceRange} Cr</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {filtered.map(p => (
                <div key={p.id} className="bg-white rounded-[28px] shadow-sm overflow-hidden border border-gray-100">
                    <div className="h-48 md:h-64 bg-gray-200" />
                    <div className="p-5 md:p-6">
                        <h3 className="text-xl md:text-2xl font-bold text-primary leading-tight">{p.name}</h3>
                        <p className="text-sm md:text-base text-gray-500 mb-4">{p.location}</p>
                        <div className="text-lg md:text-xl font-bold text-accent mb-4 md:mb-6">{p.price}</div>
                        <div className="flex gap-3 md:gap-4">
                            <button onClick={() => onSelect(p)} className="flex-1 px-3 md:px-4 py-2.5 md:py-3 border border-primary text-primary rounded-[18px] font-bold text-xs md:text-base">Details</button>
                            <a href="tel:+917224935780" className="flex-1 px-3 md:px-4 py-2.5 md:py-3 bg-primary text-white rounded-[18px] font-bold text-center text-xs md:text-base">Call Now</a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </motion.div>
  );
}
