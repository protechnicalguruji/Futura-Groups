import { motion } from "motion/react";
import { ShieldCheck, MapPin, BarChart3, Users, TrendingUp, Headphones } from "lucide-react";

const reasons = [
  { icon: ShieldCheck, title: "Trust-Based Approach", desc: "Built on a foundation of trust and transparency in every transaction." },
  { icon: MapPin, title: "Premium Branding", desc: "Exclusive real estate solutions with a focus on premium quality." },
  { icon: BarChart3, title: "Long-Term Guidance", desc: "Expert advice to help you make informed investment decisions." },
  { icon: Users, title: "B2B & B2C Expertise", desc: "Serving both individual buyers and corporate developers with precision." },
  { icon: TrendingUp, title: "Diversified Services", desc: "From land parcels to property management, we cover all your needs." },
  { icon: Headphones, title: "Dedicated Support", desc: "A team of experts committed to your long-term success." },
];

export default function WhyChooseUs() {
  return (
    <section className="py-12 md:py-20 lg:py-12 bg-background">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10 md:mb-12 lg:mb-10 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
                <h2 className="text-3xl md:text-4xl lg:text-3xl font-display font-bold text-primary mb-4 md:mb-5">Where Trust Meets Tomorrow</h2>
                <p className="text-lg md:text-lg lg:text-base text-gray-600 max-w-2xl">We focus on delivering trusted real estate solutions while helping clients make informed long-term property investment decisions in Bengaluru.</p>
            </div>
            <div className="h-64 md:h-72 overflow-hidden rounded-[32px]">
                <img src="https://images.unsplash.com/photo-1577412647305-991150c7d163?auto=format&fit=crop&w=1000&q=80" alt="Why Choose Us" className="w-full h-full object-cover" />
            </div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {reasons.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-surface p-6 md:p-7 lg:p-5 rounded-[28px] border border-white shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 bg-primary/5 text-primary rounded-2xl flex items-center justify-center mb-4 md:mb-5">
                <item.icon size={26} className="md:w-7 md:h-7" />
              </div>
              <h3 className="text-xl md:text-xl lg:text-lg font-bold text-primary mb-2 md:mb-3">{item.title}</h3>
              <p className="text-sm md:text-base lg:text-sm text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
