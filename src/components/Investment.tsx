import { motion } from "motion/react";

const highlights = [
    { title: "Projected ROI", value: "14%+" },
    { title: "Rental Yield", value: "5%+" },
    { title: "Infrastructure", value: "Upcoming" },
];

export default function Investment() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-5xl font-display font-bold text-primary mb-16">Investment Highlights</h2>
        <div className="flex gap-6 overflow-x-auto pb-6">
            {highlights.map((h, i) => (
                <div key={i} className="min-w-[300px] bg-primary text-white p-8 rounded-[28px] shadow-lg flex flex-col justify-between h-48">
                    <div className="text-gray-400 font-sans">{h.title}</div>
                    <div className="text-4xl font-bold text-accent">{h.value}</div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
