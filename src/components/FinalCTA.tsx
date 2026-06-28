import { motion } from "motion/react";

export default function FinalCTA() {
  return (
    <section className="py-24 px-8 bg-primary text-white">
      <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-6xl font-display font-bold mb-8">Secure Your Legacy Today.</h2>
            <div className="flex justify-center gap-6">
                <a href="https://wa.me/917224935780?text=Hello, I am interested in your real estate projects. Please contact me." target="_blank" className="px-10 py-5 bg-accent text-primary rounded-[18px] font-bold text-lg hover:scale-105 transition-all">Book Consultation</a>
                <a href="tel:+917224935780" className="px-10 py-5 bg-white/10 text-white rounded-[18px] font-bold text-lg hover:bg-white/20 transition-all">Call Now</a>
            </div>
      </div>
    </section>
  );
}
