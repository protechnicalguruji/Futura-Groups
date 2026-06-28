import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

const faqs = [
    { q: "What is Futura Groups' primary focus?", a: "We focus on delivering trusted real estate solutions and helping clients make informed long-term property investment decisions." },
    { q: "What areas do you operate in?", a: "We primarily operate in Bengaluru, with a strong presence in North Bengaluru and Nagawara." },
    { q: "Do you offer NRI services?", a: "Yes, we specialize in NRI Property Management and Investment Consulting." },
    { q: "What types of properties do you handle?", a: "Our portfolio includes Premium Land Parcels, Residential and Commercial properties, and Industrial land." },
    { q: "Since when has Futura Groups been active?", a: "We have been operating in the real estate sector since 2000." },
];

export default function FAQ() {
    const [open, setOpen] = useState<number | null>(null);
    return (
        <section className="py-12 md:py-20 lg:py-12 bg-background">
            <div className="max-w-3xl mx-auto px-6 md:px-8">
                <h2 className="text-3xl md:text-4xl lg:text-3xl font-display font-bold text-primary mb-10 md:mb-12 lg:mb-10 text-center">Frequently Asked Questions</h2>
                {faqs.map((f, i) => (
                    <motion.div key={i} whileHover={{ y: -5 }} className="mb-3 md:mb-4 bg-surface p-5 md:p-5 lg:p-3.5 rounded-[24px] border border-white shadow-lg cursor-pointer hover:shadow-xl transition-all" onClick={() => setOpen(open === i ? null : i)}>
                        <div className="flex justify-between items-center font-bold text-primary text-sm md:text-base lg:text-sm">
                            {f.q}
                            <ChevronDown className={`transition-transform w-4 h-4 md:w-5 md:h-5 ${open === i ? "rotate-180" : ""}`} />
                        </div>
                        <AnimatePresence>
                            {open === i && <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden text-gray-600 mt-2 md:mt-3 text-xs md:text-sm leading-relaxed">{f.a}</motion.div>}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
