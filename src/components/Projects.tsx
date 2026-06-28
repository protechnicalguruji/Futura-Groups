import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { projects } from "../data";

const categories = ["All", "Luxury Apartments", "Villas", "Commercial", "Plots"];

export default function Projects({ onSelect, onNavigate }: { onSelect: (p: any) => void; onNavigate: (page: string) => void }) {
  const [active, setActive] = useState("All");
  const filtered = (active === "All" ? projects : projects.filter(p => p.category === active)).slice(0, 6);

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <h2 className="text-5xl font-display font-bold text-primary">Featured Projects</h2>
          <div className="flex gap-2 p-1 bg-gray-100 rounded-full overflow-x-auto max-w-full">
            {categories.map(c => (
              <button key={c} onClick={() => setActive(c)} className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${active === c ? "bg-white shadow-md text-primary" : "text-gray-500"}`}>{c}</button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.div key={p.id} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} className="bg-white rounded-[28px] shadow-sm hover:shadow-xl transition-all overflow-hidden border border-gray-100">
                <div className="h-64 overflow-hidden">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-primary">{p.name}</h3>
                  <p className="text-gray-500 mb-4">{p.location}</p>
                  <div className="text-xl font-bold text-accent mb-6">{p.price}</div>
                  <div className="flex gap-4">
                    <button onClick={() => onSelect(p)} className="flex-1 px-4 py-3 border border-primary text-primary rounded-[18px] font-bold hover:bg-primary hover:text-white transition-all">Details</button>
                    <a href="tel:+917224935780" className="flex-1 px-4 py-3 bg-primary text-white rounded-[18px] font-bold hover:bg-secondary transition-all text-center">Call Now</a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <div className="mt-12 text-center">
            <button onClick={() => onNavigate('projects')} className="px-10 py-4 bg-primary text-white rounded-[18px] font-bold hover:bg-secondary transition-all hover:scale-105 shadow-md">Show More Projects</button>
        </div>
      </div>
    </section>
  );
}
