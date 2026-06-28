import { motion } from "motion/react";
import { ShieldCheck, MapPin, BarChart3, Users, TrendingUp, Headphones } from "lucide-react";

const reasons = [
  { icon: ShieldCheck, title: "Verified Projects", desc: "All our projects are RERA-certified and thoroughly vetted." },
  { icon: MapPin, title: "Premium Locations", desc: "Strategically located in the most sought-after neighborhoods." },
  { icon: BarChart3, title: "Transparent Pricing", desc: "No hidden costs, just absolute clarity in every transaction." },
  { icon: Users, title: "Expert Guidance", desc: "Personalized advice from industry veterans." },
  { icon: TrendingUp, title: "High ROI Potential", desc: "Curated properties with exceptional appreciation rates." },
  { icon: Headphones, title: "End-to-End Support", desc: "Seamless experience from site visit to final possession." },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 grid md:grid-cols-2 gap-12 items-center">
            <div>
                <h2 className="text-5xl font-display font-bold text-primary mb-6">Why Discerning Clients Choose Us</h2>
                <p className="text-xl text-gray-600 max-w-2xl">We bridge the gap between luxury aspirations and reality, delivering homes that redefine standards of living.</p>
            </div>
            <div className="h-80 overflow-hidden rounded-[40px]">
                <img src="https://images.unsplash.com/photo-1577412647305-991150c7d163?auto=format&fit=crop&w=1000&q=80" alt="Why Choose Us" className="w-full h-full object-cover" />
            </div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reasons.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-[#F8F6F2] p-8 rounded-[28px] border border-white shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="w-14 h-14 bg-primary/5 text-primary rounded-2xl flex items-center justify-center mb-6">
                <item.icon size={28} />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
