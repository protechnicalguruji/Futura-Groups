import { motion } from "motion/react";

export default function CTA({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <section className="py-12 lg:py-16 px-6 md:px-8">
      <div className="max-w-7xl mx-auto bg-primary rounded-[40px] p-6 md:p-16 lg:p-12 text-center text-white relative overflow-hidden">
        <div className="relative z-10">
            <h2 className="text-2xl md:text-6xl lg:text-4xl font-display font-bold mb-6 md:mb-8 leading-tight">Where Trust Meets Tomorrow.</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-6 lg:gap-4">
                <button onClick={() => onNavigate('projects')} className="px-6 md:px-10 lg:px-8 py-3 md:py-5 lg:py-3 bg-accent text-primary rounded-[18px] font-bold text-base md:text-lg lg:text-base hover:scale-105 transition-all">Explore Projects</button>
                <button onClick={() => onNavigate('contact')} className="px-6 md:px-10 lg:px-8 py-3 md:py-5 lg:py-3 bg-white/10 border border-white/20 text-white rounded-[18px] font-bold text-base md:text-lg lg:text-base hover:bg-white/20 transition-all">Free Consultation</button>
            </div>
        </div>
      </div>
    </section>
  );
}
