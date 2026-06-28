import { motion } from "motion/react";
import { Phone, Mail, Clock, MapPin } from "lucide-react";

export default function MapSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="h-[400px] bg-gray-200 rounded-[28px]" />
        <div className="space-y-6">
            <h2 className="text-4xl font-display font-bold text-primary">Visit Our Corporate Office</h2>
            <div className="flex items-center gap-4 text-gray-600"><MapPin /> 123 Luxury Avenue, Business District</div>
            <div className="flex items-center gap-4 text-gray-600"><Phone /> +91 99999 99999</div>
            <div className="flex items-center gap-4 text-gray-600"><Mail /> contact@eliteestates.com</div>
            <div className="flex items-center gap-4 text-gray-600"><Clock /> 10:00 AM - 7:00 PM</div>
        </div>
      </div>
    </section>
  );
}
