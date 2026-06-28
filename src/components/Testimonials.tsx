import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const reviews = [
    { 
        name: "Siddharth K.", 
        review: "Futura Groups provided exceptional guidance for my land investment in North Bengaluru. Their trust-based approach is refreshing.", 
        location: "Bengaluru",
        photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
        rating: 5
    },
    { 
        name: "Anjali M.", 
        review: "As an NRI, property management was a major concern. Futura Groups has been managing my portfolio with absolute professionalism.", 
        location: "London",
        photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
        rating: 5
    },
    { 
        name: "Rajesh V.", 
        review: "The commercial property insights provided by Siddharth and his team helped us secure a prime office space in Hebbal. Highly recommended.", 
        location: "Bengaluru",
        photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
        rating: 5
    }
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % reviews.length);
  const prev = () => setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <section className="py-20 lg:py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
            <h2 className="text-accent font-sans font-bold tracking-widest uppercase text-sm mb-4">Client Feedback</h2>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-primary">Voices of Satisfaction</h2>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
            <div className="absolute -top-12 -left-12 text-accent/10">
                <Quote size={120} />
            </div>

            <AnimatePresence mode="wait">
                <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                    className="relative z-10 bg-surface p-10 md:p-16 rounded-[40px] shadow-2xl border border-gray-100 flex flex-col items-center text-center"
                >
                    <div className="w-24 h-24 rounded-full overflow-hidden mb-8 border-4 border-white shadow-xl">
                        <img src={reviews[index].photo} alt={reviews[index].name} className="w-full h-full object-cover" />
                    </div>

                    <div className="flex text-accent mb-6">
                        {[...Array(reviews[index].rating)].map((_, j) => <Star key={j} fill="currentColor" size={20} />)}
                    </div>

                    <p className="text-xl md:text-2xl text-gray-700 mb-10 leading-relaxed font-sans italic">
                        "{reviews[index].review}"
                    </p>

                    <div>
                        <div className="font-bold text-primary text-xl">{reviews[index].name}</div>
                        <div className="text-gray-500 font-medium tracking-wide uppercase text-xs mt-1">{reviews[index].location}</div>
                    </div>
                </motion.div>
            </AnimatePresence>

            <div className="flex justify-center gap-6 mt-12">
                <button onClick={prev} className="p-4 rounded-full border border-gray-200 text-primary hover:bg-primary hover:text-white transition-all shadow-md">
                    <ChevronLeft size={24} />
                </button>
                <button onClick={next} className="p-4 rounded-full border border-gray-200 text-primary hover:bg-primary hover:text-white transition-all shadow-md">
                    <ChevronRight size={24} />
                </button>
            </div>
            
            <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-3">
                    <img src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png" alt="Google" className="w-6 h-6" />
                    <span className="font-bold text-gray-600">4.9/5 Based on 150+ Reviews</span>
                </div>
                <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => <Star key={i} fill="#FBBC05" color="#FBBC05" size={20} />)}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
