import { useState } from "react";
import { Search } from "lucide-react";
import { motion } from "motion/react";

export default function PropertySearchFilter() {
  const [priceRange, setPriceRange] = useState(25);
  const [selectedBhk, setSelectedBhk] = useState<string | null>(null);

  const bhkOptions = ["1 BHK", "1.5 BHK", "2 BHK", "2.5 BHK", "3 BHK", "3.5 BHK", "4 BHK", "4.5 BHK", "5 BHK"];

  return (
    <section className="py-12 bg-gray-50 border-b border-gray-200 relative z-30">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="mb-8">
          <h2 className="text-3xl font-display font-bold text-primary mb-2">Explore Properties</h2>
          <p className="text-gray-500">Search through our curated collection of premium properties</p>
        </div>

        <div className="bg-white p-6 md:p-8 rounded-[24px] shadow-xl border border-gray-100 flex flex-col gap-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder="Search by project name, location..." 
              className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:outline-none focus:border-accent text-gray-700"
            />
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1 flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <select className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:border-accent bg-white text-gray-700 appearance-none">
                  <option>All Types</option>
                  <option>Apartments</option>
                  <option>Villas</option>
                  <option>Plots</option>
                  <option>Commercial</option>
                </select>
              </div>
              <div className="flex-1">
                <select className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:border-accent bg-white text-gray-700 appearance-none">
                  <option>All Cities</option>
                  <option>Bengaluru</option>
                  <option>Mumbai</option>
                  <option>Delhi</option>
                </select>
              </div>
            </div>

            <div className="flex-1 bg-gray-50 p-6 rounded-xl border border-gray-200">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-bold tracking-widest uppercase text-accent">Price Range</span>
                <span className="font-bold text-primary">₹0 - ₹{priceRange} Cr</span>
              </div>
              <input 
                type="range" 
                min="1" 
                max="50" 
                value={priceRange} 
                onChange={(e) => setPriceRange(Number(e.target.value))}
                className="w-full accent-accent h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <div className="flex flex-wrap gap-2 md:gap-3">
              {bhkOptions.map(bhk => (
                <button 
                  key={bhk}
                  onClick={() => setSelectedBhk(bhk === selectedBhk ? null : bhk)}
                  className={`px-4 py-2 border rounded-xl text-sm font-medium transition-all ${
                    selectedBhk === bhk 
                      ? 'bg-primary text-white border-primary' 
                      : 'bg-white text-gray-600 border-gray-200 hover:border-accent hover:text-accent'
                  }`}
                >
                  {bhk}
                </button>
              ))}
            </div>

            <button className="w-full lg:w-auto px-10 py-4 bg-[#c89b4f] hover:bg-[#b08845] text-white rounded-xl font-bold transition-all shadow-md">
              Search Properties
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
