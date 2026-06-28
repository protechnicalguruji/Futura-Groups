import { motion } from "motion/react";

export default function SiteVisitForm() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
            <h2 className="text-5xl font-display font-bold text-primary mb-6">Schedule Your Exclusive Site Visit</h2>
            <p className="text-xl text-gray-600 mb-8">Experience the elegance firsthand. Our dedicated concierge will guide you through our flagship developments.</p>
        </div>
        <form className="bg-background p-8 rounded-[28px] border border-gray-100 shadow-sm space-y-6">
            <input type="text" placeholder="Name" className="w-full p-4 rounded-[18px] border border-gray-200" />
            <div className="flex gap-4">
                <input type="text" placeholder="Phone" className="flex-1 p-4 rounded-[18px] border border-gray-200" />
                <input type="email" placeholder="Email" className="flex-1 p-4 rounded-[18px] border border-gray-200" />
            </div>
            <button className="w-full p-4 bg-primary text-white rounded-[18px] font-bold hover:bg-secondary transition-all">Submit Request</button>
        </form>
      </div>
    </section>
  );
}
