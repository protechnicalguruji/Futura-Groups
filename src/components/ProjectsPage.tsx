import { useState } from "react";
import { motion } from "motion/react";
import { projects } from "../data";

export default function ProjectsPage({ onSelect }: { onSelect: (p: any) => void }) {
    const [config, setConfig] = useState("All");
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("Newest");

    let filtered = projects.filter(p => 
        (config === "All" || p.configuration === config) &&
        (p.name.toLowerCase().includes(search.toLowerCase()) || p.location.toLowerCase().includes(search.toLowerCase()))
    );

    if (sort === "Price: Low to High") filtered.sort((a, b) => a.priceVal - b.priceVal);
    if (sort === "Price: High to Low") filtered.sort((a, b) => b.priceVal - a.priceVal);

    return <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-32 px-8 pb-20 bg-background min-h-screen">
        <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-4xl font-bold mb-10 lg:mb-8 text-primary">Projects</h1>
            <div className="bg-white/80 backdrop-blur-lg p-6 lg:p-5 rounded-[28px] border border-gray-100 shadow-sm mb-10 lg:mb-8 space-y-6 lg:space-y-4">
                <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
                    {["All", "2 BHK", "3 BHK", "4 BHK", "5 BHK"].map(c => (
                        <button key={c} onClick={() => setConfig(c)} className={`px-6 py-3 lg:px-5 lg:py-2 rounded-full font-bold whitespace-nowrap transition-all ${config === c ? 'bg-primary text-white shadow-lg' : 'bg-background hover:bg-gray-100'}`}>{c}</button>
                    ))}
                </div>
                <div className="flex flex-col md:flex-row gap-4 lg:gap-3">
                    <input type="text" placeholder="Search by name or location..." className="flex-1 p-4 lg:p-3 rounded-[18px] border border-gray-200 focus:outline-none focus:border-accent" onChange={e => setSearch(e.target.value)} />
                    <select className="p-4 lg:p-3 rounded-[18px] border border-gray-200 focus:outline-none focus:border-accent bg-white" onChange={e => setSort(e.target.value)}>
                        <option>Newest</option>
                        <option>Price: Low to High</option>
                        <option>Price: High to Low</option>
                        <option>Most Popular</option>
                    </select>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6">
                {filtered.map(p => (
                    <div key={p.id} className="bg-[#F8F6F2] rounded-[28px] shadow-lg overflow-hidden border border-white">
                        <div className="h-64 lg:h-56 overflow-hidden">
                            <img src={p.image} alt={p.name} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" loading="lazy" />
                        </div>
                        <div className="p-6 lg:p-5">
                            <h3 className="text-2xl lg:text-xl font-bold text-primary mb-2 lg:mb-1">{p.name}</h3>
                            <p className="text-gray-500 mb-2 lg:mb-1 lg:text-sm">{p.location}</p>
                            <p className="text-sm text-gray-400 mb-4 lg:mb-3 lg:text-xs">{p.configuration} | {p.area} | {p.status}</p>
                            <div className="text-xl lg:text-lg font-bold text-accent mb-6 lg:mb-4">{p.price}</div>
                            <div className="flex gap-4 lg:gap-3">
                                <button onClick={() => onSelect(p)} className="flex-1 px-4 py-3 lg:py-2 border border-primary text-primary rounded-[18px] font-bold lg:text-sm">Details</button>
                                <a href="tel:+918884544588" className="flex-1 px-4 py-3 lg:py-2 bg-primary text-white rounded-[18px] font-bold text-center lg:text-sm">Call Now</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </motion.div>;
}
