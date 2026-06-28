import { motion } from "motion/react";

export default function FinalCTA() {
  return (
    <section className="py-12 lg:py-16 px-6 md:px-8 bg-primary text-white">
      <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-2xl md:text-6xl lg:text-4xl font-display font-bold mb-6 md:mb-8 lg:mb-6 leading-tight">Your Trust, Our Tomorrow.</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-6 lg:gap-4">
                <a href="https://wa.me/918884544588" target="_blank" className="px-6 md:px-10 lg:px-8 py-3 md:py-5 lg:py-3 bg-accent text-primary rounded-[18px] font-bold text-base md:text-lg lg:text-base hover:scale-105 transition-all text-center">Book Consultation</a>
                <a href="tel:+918884544588" className="px-6 md:px-10 lg:px-8 py-3 md:py-5 lg:py-3 bg-white/10 text-white rounded-[18px] font-bold text-base md:text-lg lg:text-base hover:bg-white/20 transition-all text-center">Call Now</a>
            </div>
      </div>
    </section>
  );
}
