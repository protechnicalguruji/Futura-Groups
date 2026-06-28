import { motion } from "motion/react";

export default function BrochureCTA() {
  return (
    <section className="py-24 px-8">
      <div className="max-w-7xl mx-auto bg-accent rounded-[40px] p-16 text-center text-primary">
            <h2 className="text-4xl font-display font-bold mb-6">Download Our Exclusive Brochure</h2>
            <p className="mb-10 text-lg opacity-90">Discover floor plans, amenities, and investment potential.</p>
            <form className="flex flex-col md:flex-row gap-4 justify-center max-w-xl mx-auto">
                <input type="email" placeholder="Your Email" className="p-4 rounded-[18px] border-none flex-grow" />
                <button className="px-8 py-4 bg-primary text-white rounded-[18px] font-bold">Download Now</button>
            </form>
      </div>
    </section>
  );
}
