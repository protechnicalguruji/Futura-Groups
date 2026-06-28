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
        <section className="py-24 bg-background">
            <div className="max-w-3xl mx-auto px-8">
                <h2 className="text-5xl font-display font-bold text-primary mb-16 text-center">Frequently Asked Questions</h2>
                {faqs.map((f, i) => (
                    <div key={i} className="mb-4 bg-white p-6 rounded-[24px] border border-gray-100 shadow-sm cursor-pointer" onClick={() => setOpen(open === i ? null : i)}>
                        <div className="flex justify-between items-center font-bold text-primary">
                            {f.q}
                            <ChevronDown className={`transition-transform ${open === i ? "rotate-180" : ""}`} />
                        </div>
                        <AnimatePresence>
                            {open === i && <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden text-gray-600 mt-2">{f.a}</motion.div>}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </section>
    );
}
