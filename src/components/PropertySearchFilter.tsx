import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { motion } from "motion/react";

export default function PropertySearchFilter({ projects, onFilter }: { projects: any[], onFilter: (f: any[]) => void }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [type, setType] = useState("All Types");
  const [city, setCity] = useState("All Cities");
  const [priceRange, setPriceRange] = useState(50);
  const [selectedBhk, setSelectedBhk] = useState<string | null>(null);

  useEffect(() => {
    const filtered = projects.filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) || p.location.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = type === "All Types" || p.category === type;
      const matchesCity = city === "All Cities" || p.location === city;
      const matchesPrice = p.priceVal <= priceRange;
      const matchesBhk = !selectedBhk || (p.bedrooms > 0 && p.bedrooms === parseInt(selectedBhk));
      
      return matchesSearch && matchesType && matchesCity && matchesPrice && matchesBhk;
    });
    onFilter(filtered);
  }, [searchTerm, type, city, priceRange, selectedBhk, projects, onFilter]);

  const bhkOptions = ["1", "2", "3", "4", "5"];

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
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:outline-none focus:border-accent text-gray-700"
            />
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1 flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <select value={type} onChange={(e) => setType(e.target.value)} className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:border-accent bg-white text-gray-700 appearance-none">
                  <option>All Types</option>
                  <option>Luxury Apartments</option>
                  <option>Villas</option>
                  <option>Plots</option>
                  <option>Commercial</option>
                </select>
              </div>
              <div className="flex-1">
                <select value={city} onChange={(e) => setCity(e.target.value)} className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:border-accent bg-white text-gray-700 appearance-none">
                  <option>All Cities</option>
                  <option>North Bengaluru</option>
                  <option>Nagawara</option>
                  <option>Hebbal</option>
                  <option>Yelahanka</option>
                  <option>Whitefield</option>
                  <option>Electronic City</option>
                  <option>Devenahalli</option>
                </select>
              </div>
            </div>

            <div className="flex-1 bg-gray-50 p-6 rounded-xl border border-gray-200">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-bold tracking-widest uppercase text-accent">Max Price</span>
                <span className="font-bold text-primary">₹{priceRange} Cr</span>
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
                  {bhk} BHK
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
