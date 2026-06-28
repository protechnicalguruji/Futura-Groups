import { motion } from "motion/react";

export default function FinalCTA() {
  return (
    <section className="py-24 px-6 md:px-8 bg-primary text-white">
      <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-6xl font-display font-bold mb-8 leading-tight">Secure Your Legacy Today.</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
                <a href="https://wa.me/917224935780" target="_blank" className="px-8 md:px-10 py-4 md:py-5 bg-accent text-primary rounded-[18px] font-bold text-lg hover:scale-105 transition-all text-center">Book Consultation</a>
                <a href="tel:+917224935780" className="px-8 md:px-10 py-4 md:py-5 bg-white/10 text-white rounded-[18px] font-bold text-lg hover:bg-white/20 transition-all text-center">Call Now</a>
            </div>
      </div>
    </section>
  );
}
