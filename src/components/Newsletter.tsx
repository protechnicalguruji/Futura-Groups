import { Mail } from "lucide-react";
import { motion } from "motion/react";

export default function Newsletter() {
  return (
    <section className="py-24 px-8">
      <div className="max-w-7xl mx-auto bg-white/70 backdrop-blur-lg rounded-[40px] p-16 text-center border border-white/40 shadow-xl">
        <h2 className="text-4xl font-display font-bold text-primary mb-6">Stay Updated with Elite Estates</h2>
        <p className="text-gray-600 mb-10 max-w-lg mx-auto">Subscribe to our exclusive newsletter for the latest luxury listings and market insights.</p>
        <form className="flex flex-col md:flex-row gap-4 justify-center max-w-xl mx-auto">
          <input type="email" placeholder="Your Email Address" className="p-4 rounded-[18px] border border-gray-200 flex-grow" required />
          <button className="px-8 py-4 bg-primary text-white rounded-[18px] font-bold hover:bg-secondary transition-all">Subscribe</button>
        </form>
      </div>
    </section>
  );
}
