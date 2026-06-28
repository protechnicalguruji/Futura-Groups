import { motion } from "motion/react";

export default function Trust() {
  const partners = ["Developer A", "Bank B", "Partner C", "Developer D", "Bank E"];
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8 text-center">
        <h2 className="text-sm font-bold text-accent uppercase mb-12 tracking-widest">Trusted Partners</h2>
        <div className="flex flex-wrap justify-center gap-16 opacity-60">
            {partners.map(p => (
                <motion.div key={p} whileHover={{ opacity: 1, scale: 1.1 }} className="text-xl font-bold text-gray-400">{p}</motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
