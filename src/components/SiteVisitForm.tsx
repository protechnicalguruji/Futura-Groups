import { motion } from "motion/react";

export default function SiteVisitForm() {
  return (
    <section className="py-12 md:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
        <div>
            <h2 className="text-2xl md:text-5xl font-display font-bold text-primary mb-4 md:mb-6 leading-tight">Schedule Your Exclusive Site Visit</h2>
            <p className="text-base md:text-xl text-gray-600 mb-6 md:mb-8">Discover the potential of your next investment. Our team will guide you through our premium land parcels and properties in Bengaluru.</p>
        </div>
        <form className="bg-background p-5 md:p-8 rounded-[28px] border border-gray-100 shadow-xl space-y-3 md:space-y-6">
            <input type="text" placeholder="Name" className="w-full p-3 md:p-4 rounded-[18px] border border-gray-200 focus:outline-none focus:border-accent text-sm md:text-base" />
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <input type="text" placeholder="Phone" className="flex-1 p-3 md:p-4 rounded-[18px] border border-gray-200 focus:outline-none focus:border-accent text-sm md:text-base" />
                <input type="email" placeholder="Email" className="flex-1 p-3 md:p-4 rounded-[18px] border border-gray-200 focus:outline-none focus:border-accent text-sm md:text-base" />
            </div>
            <button className="w-full p-3 md:p-4 bg-primary text-white rounded-[18px] font-bold hover:bg-secondary transition-all shadow-lg text-sm md:text-base">Submit Request</button>
        </form>
      </div>
    </section>
  );
}
