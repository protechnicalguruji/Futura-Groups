import { motion, useSpring, useTransform, animate } from "motion/react";
import { useEffect, useRef } from "react";

function Counter({ value }: { value: number }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const count = useSpring(0, { duration: 2000, bounce: 0 });

  useEffect(() => {
    animate(0, value, {
      duration: 2,
      onUpdate: (latest) => {
        if (nodeRef.current) nodeRef.current.textContent = Math.floor(latest).toString();
      },
    });
  }, [value]);

  return <span ref={nodeRef} />;
}

const stats = [
  { label: "Projects Delivered", value: 25, suffix: "+" },
  { label: "Happy Families", value: 5000, suffix: "+" },
  { label: "Sq Ft Delivered", value: 10, suffix: "M+" },
  { label: "Years Experience", value: 15, suffix: "+" },
];

export default function Stats() {
  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-4 md:p-8 rounded-[28px] shadow-sm text-center border border-gray-100"
          >
            <div className="text-2xl md:text-4xl font-bold text-primary mb-1 md:mb-2">
                <Counter value={stat.value} />{stat.suffix}
            </div>
            <div className="text-xs md:text-base text-gray-500 font-sans">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
