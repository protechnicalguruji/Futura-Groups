import { motion } from "motion/react";

export default function Partners() {
    const partners = ["Developer A", "Bank B", "Partner C", "Developer D", "Bank E", "Partner F"];
    return (
      <section className="py-12 md:py-20 lg:py-16 bg-background">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <div className="flex flex-wrap justify-center gap-12 md:gap-16 lg:gap-12 opacity-60">
              {partners.map(p => (
                  <motion.div key={p} whileHover={{ opacity: 1, scale: 1.1 }} className="text-2xl font-bold text-gray-400">{p}</motion.div>
              ))}
          </div>
        </div>
      </section>
    );
  }
