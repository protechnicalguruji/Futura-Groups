import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { projects } from "../data";
import { ChevronLeft, ChevronRight, MapPin, Ruler, Bed } from "lucide-react";

export default function PropertySlider({ projects, onSelect }: { projects: any[], onSelect: (p: any) => void }) {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-accent font-sans font-bold tracking-[0.2em] uppercase text-sm mb-4"
            >
              Curated Selection
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-display font-bold text-primary"
            >
              Exclusive Listings
            </motion.h3>
          </div>
          <div className="hidden md:flex gap-4">
            <button 
              onClick={scrollLeft}
              className="p-4 rounded-full border border-gray-200 text-primary hover:bg-primary hover:text-white transition-all shadow-md group"
            >
              <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={scrollRight}
              className="p-4 rounded-full border border-gray-200 text-primary hover:bg-primary hover:text-white transition-all shadow-md group"
            >
              <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        <div 
          ref={containerRef}
          className="flex gap-8 overflow-x-auto pb-12 no-scrollbar snap-x snap-mandatory"
        >
          {projects.map((project, i) => (
            <div
              key={project.id}
              className="min-w-[320px] md:min-w-[420px] bg-white rounded-[32px] overflow-hidden shadow-xl border border-gray-100 snap-center group cursor-pointer transition-transform duration-300 hover:-translate-y-2"
              onClick={() => onSelect(project)}
            >
              <div className="h-64 md:h-80 relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute top-6 left-6 px-4 py-2 bg-primary/90 backdrop-blur-md text-white text-xs font-bold rounded-full">
                  {project.category}
                </div>
                <div className="absolute top-6 right-6 px-4 py-2 bg-accent text-primary text-xs font-bold rounded-full">
                  {project.status}
                </div>
              </div>

              <div className="p-8">
                <h4 className="text-2xl font-display font-bold text-primary mb-2">{project.name}</h4>
                <div className="flex items-center gap-2 text-gray-500 mb-6">
                  <MapPin size={18} className="text-accent" />
                  <span className="text-sm font-medium">{project.location}</span>
                </div>

                <div className="grid grid-cols-3 gap-4 py-6 border-y border-gray-100 mb-6">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2 text-gray-400">
                      <Ruler size={16} />
                      <span className="text-[10px] uppercase font-bold tracking-widest">Area</span>
                    </div>
                    <span className="text-sm font-bold text-primary">{project.area.split(' ')[0]} <span className="text-[10px] text-gray-400 uppercase">sqft</span></span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2 text-gray-400">
                      <Bed size={16} />
                      <span className="text-[10px] uppercase font-bold tracking-widest">Type</span>
                    </div>
                    <span className="text-sm font-bold text-primary">{project.configuration.split(' ')[0]}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2 text-gray-400">
                      <Bed size={16} />
                      <span className="text-[10px] uppercase font-bold tracking-widest">Beds</span>
                    </div>
                    <span className="text-sm font-bold text-primary">{project.bedrooms || '—'}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="text-2xl font-bold text-accent">{project.price}</div>
                  <button className="px-6 py-2.5 bg-primary text-white rounded-full text-sm font-bold hover:bg-secondary transition-all">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
