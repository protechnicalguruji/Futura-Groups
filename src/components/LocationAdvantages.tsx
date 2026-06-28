import { motion } from "motion/react";
import { GraduationCap, Hospital, Train, Plane, ShoppingBag, Car } from "lucide-react";

const advantages = [
    { icon: GraduationCap, title: "Top Schools", dist: "5 mins" },
    { icon: Hospital, title: "Multi-specialty Hospitals", dist: "10 mins" },
    { icon: Train, title: "Metro Station", dist: "8 mins" },
    { icon: Plane, title: "International Airport", dist: "20 mins" },
    { icon: ShoppingBag, title: "Premium Malls", dist: "12 mins" },
    { icon: Car, title: "Major Highways", dist: "2 mins" },
];

export default function LocationAdvantages() {
  return (
    <section className="py-12 md:py-24 lg:py-16 bg-background">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-3xl md:text-5xl lg:text-4xl font-display font-bold text-primary mb-10 md:mb-16 lg:mb-12 text-center">Unmatched Connectivity</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-4">
            {advantages.map((a, i) => (
                <motion.div key={i} whileHover={{ y: -5 }} className="bg-white p-5 md:p-6 lg:p-5 rounded-[24px] border border-gray-100 shadow-sm flex items-center gap-4">
                    <div className="p-3 bg-accent/10 text-accent rounded-xl"><a.icon size={24} /></div>
                    <div>
                        <div className="font-bold text-primary">{a.title}</div>
                        <div className="text-sm text-gray-500">{a.dist} away</div>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
