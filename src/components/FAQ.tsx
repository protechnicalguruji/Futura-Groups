import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

const faqs = [
    { q: "What is RERA?", a: "RERA stands for Real Estate Regulatory Authority." },
    { q: "Are the prices negotiable?", a: "We maintain transparent pricing for all our clients." },
    { q: "Can I take a home loan?", a: "Yes, we work with all leading banks." },
    { q: "Is the location safe?", a: "All our projects are in secure, premium neighborhoods." },
    { q: "What is the ROI?", a: "Historically, our projects yield 12-15% annually." },
];

export default function FAQ() {
    const [open, setOpen] = useState<number | null>(null);
    return (
        <section className="py-12 md:py-24 bg-background">
            <div className="max-w-3xl mx-auto px-6 md:px-8">
                <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-10 md:mb-16 text-center">Frequently Asked Questions</h2>
                {faqs.map((f, i) => (
                    <motion.div key={i} whileHover={{ y: -5 }} className="mb-3 md:mb-4 bg-[#F8F6F2] p-5 md:p-6 rounded-[24px] border border-white shadow-lg cursor-pointer hover:shadow-xl transition-all" onClick={() => setOpen(open === i ? null : i)}>
                        <div className="flex justify-between items-center font-bold text-primary text-sm md:text-base">
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
