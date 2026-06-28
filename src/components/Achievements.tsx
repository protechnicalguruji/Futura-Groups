import { motion } from "motion/react";
import { useEffect, useRef } from "react";
import { animate } from "motion/react";

function Counter({ value }: { value: number }) {
  const nodeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const controls = animate(0, value, {
      duration: 2,
      onUpdate: (latest) => {
        if (nodeRef.current) nodeRef.current.textContent = Math.floor(latest).toString();
      },
    });
    return () => controls.stop();
  }, [value]);

  return <span ref={nodeRef} />;
}

const stats = [
  { label: "Years in Business", value: 24, suffix: "+" },
  { label: "Core Services", value: 10, suffix: "" },
  { label: "Property Managed", value: 100, suffix: "+" },
  { label: "Team Experts", value: 10, suffix: "" },
];

export default function Achievements() {
  return (
    <section className="py-12 md:py-24 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-6">
        {stats.map((s, i) => (
            <div key={i} className="bg-background p-8 lg:p-6 rounded-[28px] border border-gray-100 text-center">
                <div className="text-4xl lg:text-3xl font-bold text-primary mb-2"><Counter value={s.value} />{s.suffix}</div>
                <div className="text-gray-500 lg:text-sm font-sans">{s.label}</div>
            </div>
        ))}
      </div>
    </section>
  );
}
