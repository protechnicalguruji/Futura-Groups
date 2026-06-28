import { motion } from "motion/react";
import { Phone, MessageCircle, CheckCircle, Target, Award, Users, Briefcase, Zap } from "lucide-react";

export default function AboutPage() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-32 pb-20 bg-background">
            {/* Hero */}
            <section className="relative px-8 pb-16 h-[500px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center" />
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative max-w-7xl mx-auto text-center text-white">
                    <h1 className="text-7xl font-display font-bold mb-6">About Elite Real Estate</h1>
                    <p className="text-xl max-w-2xl mx-auto">Redefining luxury living for the discerning few with unparalleled architectural excellence and service.</p>
                </div>
            </section>

            {/* Story */}
            <section className="px-8 py-16 bg-white">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl font-display font-bold text-primary mb-6">Our Journey</h2>
                        <p className="text-gray-600 mb-6">Established with a vision to create landmarks, Elite Real Estate has been transforming skylines for over 15 years.</p>
                        <p className="text-gray-600">Our commitment to transparency, quality, and customer-centricity defines us.</p>
                    </div>
                    <div className="h-96 overflow-hidden rounded-[40px]">
                        <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80" alt="About Elite" className="w-full h-full object-cover" />
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="px-8 py-16">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
                    <div className="bg-[#F8F6F2] p-10 rounded-[32px] border border-white shadow-lg">
                        <Target className="text-accent mb-6" size={48} />
                        <h3 className="text-3xl font-bold text-primary mb-4">Our Mission</h3>
                        <p className="text-gray-600">To deliver exceptional real estate experiences through innovation and integrity.</p>
                    </div>
                    <div className="bg-[#F8F6F2] p-10 rounded-[32px] border border-white shadow-lg">
                        <Zap className="text-accent mb-6" size={48} />
                        <h3 className="text-3xl font-bold text-primary mb-4">Our Vision</h3>
                        <p className="text-gray-600">To be the most trusted name in luxury real estate globally.</p>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="px-8 py-16 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-display font-bold text-primary mb-12 text-center">Why Choose Us</h2>
                    <div className="grid md:grid-cols-4 gap-6">
                        {["Verified Projects", "RERA Approved", "Trusted Developers", "Expert Consultants", "Transparent Pricing", "High ROI"].map(item => (
                            <div key={item} className="p-8 bg-[#F8F6F2] rounded-[24px] border border-white shadow-lg text-center">
                                <CheckCircle className="text-accent mx-auto mb-4" />
                                <h4 className="font-bold">{item}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="px-8 py-24 text-center">
                <div className="max-w-5xl mx-auto bg-primary text-white p-16 rounded-[40px]">
                    <h2 className="text-5xl font-bold mb-8">Ready to Find Your Dream Property?</h2>
                    <div className="flex gap-4 justify-center">
                        <a href="tel:+917224935780" className="px-8 py-4 bg-accent text-primary rounded-[18px] font-bold flex items-center gap-2"><Phone size={20} /> Call Now</a>
                        <a href="https://wa.me/917224935780?text=Hello, I am interested in your real estate projects. Please contact me." target="_blank" className="px-8 py-4 bg-white/10 text-white rounded-[18px] font-bold flex items-center gap-2"><MessageCircle size={20} /> WhatsApp</a>
                    </div>
                </div>
            </section>
        </motion.div>
    );
}

