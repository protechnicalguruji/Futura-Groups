import { motion } from "motion/react";
import { ArrowRight, Building2, Home, BarChart3, Landmark, FileText, Briefcase } from "lucide-react";

const services = [
  { icon: Building2, title: "Property Buying", desc: "Expert guidance in finding your dream home." },
  { icon: Home, title: "Property Selling", desc: "Maximize value for your luxury assets." },
  { icon: BarChart3, title: "Investment", desc: "Strategic portfolio management." },
  { icon: Landmark, title: "Home Loans", desc: "Hassle-free financing solutions." },
  { icon: FileText, title: "Legal Check", desc: "Complete documentation assistance." },
  { icon: Briefcase, title: "Management", desc: "Professional property care." },
];

export default function Services() {
  return (
    <section id="services" className="py-12 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-10 md:mb-16 text-center">Premium Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {services.map((s, i) => (
            <motion.div key={i} whileHover={{ y: -5 }} className="bg-white p-6 md:p-8 rounded-[28px] border border-gray-100 shadow-sm flex flex-col gap-3 md:gap-4 group">
              <s.icon className="text-accent" size={24} />
              <h3 className="text-xl md:text-2xl font-bold text-primary">{s.title}</h3>
              <p className="text-sm md:text-base text-gray-600 flex-grow leading-relaxed">{s.desc}</p>
              <div className="text-primary font-bold flex items-center gap-2 group-hover:gap-4 transition-all text-sm md:text-base">Explore <ArrowRight size={18} /></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
