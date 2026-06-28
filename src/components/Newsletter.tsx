import { Mail } from "lucide-react";
import { motion } from "motion/react";

export default function Newsletter() {
  return (
    <section className="py-12 md:py-24 px-6 md:px-8">
      <div className="max-w-7xl mx-auto bg-white/70 backdrop-blur-lg rounded-[40px] p-6 md:p-16 text-center border border-white/40 shadow-xl">
        <h2 className="text-2xl md:text-4xl font-display font-bold text-primary mb-4 md:mb-6 leading-tight">Stay Updated with Elite Estates</h2>
        <p className="text-sm md:text-base text-gray-600 mb-6 md:mb-10 max-w-lg mx-auto">Subscribe to our exclusive newsletter for the latest luxury listings and market insights.</p>
        <form className="flex flex-col md:flex-row gap-3 md:gap-4 justify-center max-w-xl mx-auto">
          <input type="email" placeholder="Your Email Address" className="p-3 md:p-4 rounded-[18px] border border-gray-200 flex-grow text-sm md:text-base" required />
          <button className="px-6 md:px-8 py-3 md:py-4 bg-primary text-white rounded-[18px] font-bold hover:bg-secondary transition-all text-sm md:text-base">Subscribe</button>
        </form>
      </div>
    </section>
  );
}
