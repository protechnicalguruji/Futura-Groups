import { motion } from "motion/react";
import { useState } from "react";
import { X, Maximize2 } from "lucide-react";

const images = [
    { url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80", title: "Luxury Penthouse" },
    { url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80", title: "Modern Villa" },
    { url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80", title: "Commercial Center" },
    { url: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=800&q=80", title: "Premium Plots" },
    { url: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80", title: "Elite Residency" },
    { url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80", title: "The Grand Estate" }
];

export default function Gallery() {
    const [selected, setSelected] = useState<string | null>(null);

    return (
        <section className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                <div className="mb-16 text-center">
                    <h2 className="text-accent font-sans font-bold tracking-widest uppercase text-sm mb-4">Visual Portfolio</h2>
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-primary">Property Gallery</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {images.map((img, i) => (
                        <motion.div 
                            key={i}
                            whileHover={{ y: -10 }}
                            className="relative aspect-square overflow-hidden rounded-[32px] group cursor-pointer shadow-lg"
                            onClick={() => setSelected(img.url)}
                        >
                            <img src={img.url} alt={img.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white">
                                <Maximize2 size={32} className="mb-4" />
                                <span className="font-bold text-xl">{img.title}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {selected && (
                <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 md:p-10" onClick={() => setSelected(null)}>
                    <button className="absolute top-10 right-10 text-white hover:text-accent transition-colors">
                        <X size={40} />
                    </button>
                    <motion.img 
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        src={selected} 
                        className="max-w-full max-h-full rounded-2xl shadow-2xl" 
                    />
                </div>
            )}
        </section>
    );
}
