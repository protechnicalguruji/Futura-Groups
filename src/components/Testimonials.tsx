import { motion } from "motion/react";
import { Star } from "lucide-react";

const reviews = [
    { name: "John Doe", review: "Exceptional experience, truly professional team.", location: "Mumbai" },
    { name: "Jane Smith", review: "Found my dream villa within my budget.", location: "Pune" },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-5xl font-display font-bold text-primary mb-16 text-center">Testimonials</h2>
        <div className="flex gap-8 overflow-x-auto pb-8">
            {reviews.map((r, i) => (
                <div key={i} className="min-w-[400px] bg-background p-8 rounded-[28px] border border-gray-100">
                    <div className="flex text-accent mb-4">
                        {[...Array(5)].map((_, j) => <Star key={j} fill="currentColor" size={20} />)}
                    </div>
                    <p className="text-lg text-gray-700 mb-6">"{r.review}"</p>
                    <div className="font-bold text-primary">{r.name}</div>
                    <div className="text-gray-500">{r.location}</div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
