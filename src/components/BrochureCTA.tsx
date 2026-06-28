import { motion } from "motion/react";

export default function BrochureCTA() {
  return (
    <section className="py-12 md:py-24 px-6 md:px-8">
      <div className="max-w-7xl mx-auto bg-accent rounded-[40px] p-6 md:p-16 text-center text-primary">
            <h2 className="text-2xl md:text-4xl font-display font-bold mb-4 md:mb-6 leading-tight">Download Our Exclusive Brochure</h2>
            <p className="mb-6 md:mb-10 text-base md:text-lg opacity-90">Discover floor plans, amenities, and investment potential.</p>
            <form className="flex flex-col md:flex-row gap-3 md:gap-4 justify-center max-w-xl mx-auto">
                <input type="email" placeholder="Your Email" className="p-3 md:p-4 rounded-[18px] border-none flex-grow text-sm md:text-base" />
                <button className="px-6 md:px-8 py-3 md:py-4 bg-primary text-white rounded-[18px] font-bold text-sm md:text-base">Download Now</button>
            </form>
      </div>
    </section>
  );
}
