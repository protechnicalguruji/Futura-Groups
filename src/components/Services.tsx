import { motion } from "motion/react";
import { ArrowRight, Building2, Home, BarChart3, Landmark, FileText, Briefcase } from "lucide-react";

const services = [
  { icon: Building2, title: "Premium Land", desc: "Expert land aggregation and premium land parcels for development." },
  { icon: Home, title: "Residential", desc: "Curated residential properties and plots for your dream home." },
  { icon: BarChart3, title: "Investment Consulting", desc: "Strategic advice for informed long-term property investments." },
  { icon: Landmark, title: "Joint Ventures", desc: "Facilitating successful real estate joint ventures and partnerships." },
  { icon: Briefcase, title: "Management", desc: "Professional property and NRI property management services." },
  { icon: FileText, title: "Commercial Leasing", desc: "End-to-end solutions for commercial leasing and land aggregation." },
];

export default function Services() {
  return (
    <section id="services" className="py-12 md:py-24 lg:py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <h2 className="text-3xl md:text-5xl lg:text-4xl font-display font-bold text-primary mb-10 md:mb-16 lg:mb-12 text-center">Premium Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-5">
          {services.map((s, i) => (
            <motion.div key={i} whileHover={{ y: -5 }} className="bg-white p-6 md:p-8 lg:p-6 rounded-[28px] border border-gray-100 shadow-sm flex flex-col gap-3 md:gap-4 lg:gap-3 group">
              <s.icon className="text-accent" size={24} />
              <h3 className="text-xl md:text-2xl lg:text-xl font-bold text-primary">{s.title}</h3>
              <p className="text-sm md:text-base lg:text-sm text-gray-600 flex-grow leading-relaxed">{s.desc}</p>
              <div className="text-primary font-bold flex items-center gap-2 group-hover:gap-4 transition-all text-sm md:text-base lg:text-sm">Explore <ArrowRight size={18} /></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
