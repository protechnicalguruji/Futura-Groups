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
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-5xl font-display font-bold text-primary mb-16 text-center">Unmatched Connectivity</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {advantages.map((a, i) => (
                <motion.div key={i} whileHover={{ y: -5 }} className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-sm flex items-center gap-4">
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
