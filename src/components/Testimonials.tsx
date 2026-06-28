import { motion } from "motion/react";
import { Star } from "lucide-react";

const reviews = [
    { name: "John Doe", review: "Exceptional experience, truly professional team.", location: "Mumbai" },
    { name: "Jane Smith", review: "Found my dream villa within my budget.", location: "Pune" },
];

export default function Testimonials() {
  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-10 md:mb-16 text-center">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {reviews.map((r, i) => (
                <motion.div key={i} whileHover={{ y: -10 }} className="bg-[#F8F6F2] p-6 md:p-8 rounded-[28px] shadow-lg border border-white hover:shadow-2xl transition-all">
                    <div className="flex text-accent mb-3 md:mb-4">
                        {[...Array(5)].map((_, j) => <Star key={j} fill="currentColor" size={16} />)}
                    </div>
                    <p className="text-sm md:text-lg text-gray-700 mb-4 md:mb-6 leading-relaxed italic">"{r.review}"</p>
                    <div className="font-bold text-primary text-sm md:text-base">{r.name}</div>
                    <div className="text-gray-500 text-xs md:text-sm">{r.location}</div>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
