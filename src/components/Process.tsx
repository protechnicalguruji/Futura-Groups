import { motion } from "motion/react";

const steps = ["Discover", "Consult", "Visit", "Choose", "Book", "Own"];

export default function Process() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-5xl font-display font-bold text-primary mb-16 text-center">Our Process</h2>
        <div className="relative flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 hidden md:block -z-0" />
            {steps.map((step, i) => (
                <motion.div key={i} className="relative z-10 flex flex-col items-center gap-4">
                    <div className="w-16 h-16 bg-white border-2 border-accent rounded-full flex items-center justify-center font-bold text-primary shadow-md">0{i+1}</div>
                    <div className="font-bold text-primary">{step}</div>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
