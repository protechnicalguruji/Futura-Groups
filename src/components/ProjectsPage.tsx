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
            <h1 className="text-6xl font-bold mb-10 text-primary">Projects</h1>
            <div className="bg-white/80 backdrop-blur-lg p-6 rounded-[28px] border border-gray-100 shadow-sm mb-10 space-y-6">
                <div className="flex gap-4 overflow-x-auto pb-2">
                    {["All", "2 BHK", "3 BHK", "4 BHK", "5 BHK"].map(c => (
                        <button key={c} onClick={() => setConfig(c)} className={`px-6 py-3 rounded-full font-bold whitespace-nowrap ${config === c ? 'bg-primary text-white' : 'bg-background'}`}>{c}</button>
                    ))}
                </div>
                <div className="flex gap-4">
                    <input type="text" placeholder="Search by name or location..." className="flex-1 p-4 rounded-[18px] border" onChange={e => setSearch(e.target.value)} />
                    <select className="p-4 rounded-[18px] border" onChange={e => setSort(e.target.value)}>
                        <option>Newest</option>
                        <option>Price: Low to High</option>
                        <option>Price: High to Low</option>
                        <option>Most Popular</option>
                    </select>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {filtered.map(p => (
                    <div key={p.id} className="bg-white rounded-[28px] shadow-sm overflow-hidden border border-gray-100">
                        <div className="h-64 overflow-hidden">
                            <img src={p.image} alt={p.name} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" loading="lazy" />
                        </div>
                        <div className="p-6">
                            <h3 className="text-2xl font-bold text-primary mb-2">{p.name}</h3>
                            <p className="text-gray-500 mb-2">{p.location}</p>
                            <p className="text-sm text-gray-400 mb-4">{p.configuration} | {p.area} | {p.status}</p>
                            <div className="text-xl font-bold text-accent mb-6">{p.price}</div>
                            <div className="flex gap-4">
                                <button onClick={() => onSelect(p)} className="flex-1 px-4 py-3 border border-primary text-primary rounded-[18px] font-bold">Details</button>
                                <a href="tel:+917224935780" className="flex-1 px-4 py-3 bg-primary text-white rounded-[18px] font-bold text-center">Call Now</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </motion.div>;
}
