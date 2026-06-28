import { motion } from "motion/react";

export default function CTA() {
  return (
    <section className="py-12 md:py-24 px-6 md:px-8">
      <div className="max-w-7xl mx-auto bg-primary rounded-[40px] p-6 md:p-16 text-center text-white relative overflow-hidden">
        <div className="relative z-10">
            <h2 className="text-2xl md:text-6xl font-display font-bold mb-6 md:mb-8 leading-tight">Ready to Elevate Your Lifestyle?</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-6">
                <button className="px-6 md:px-10 py-3 md:py-5 bg-accent text-primary rounded-[18px] font-bold text-base md:text-lg hover:scale-105 transition-all">Explore Projects</button>
                <button className="px-6 md:px-10 py-3 md:py-5 bg-white/10 border border-white/20 text-white rounded-[18px] font-bold text-base md:text-lg hover:bg-white/20 transition-all">Schedule Consultation</button>
            </div>
        </div>
      </div>
    </section>
  );
}
