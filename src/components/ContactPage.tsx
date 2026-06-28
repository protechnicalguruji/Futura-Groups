import React, { useState } from "react";
import { motion } from "motion/react";
import { Phone, Mail, MapPin, MessageCircle, Clock, Loader2 } from "lucide-react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        fullName: "",
        phone: "",
        email: "",
        subject: "",
        preferredProject: "",
        budget: "",
        message: ""
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [loading, setLoading] = useState(false);

    const validate = () => {
        const newErrors: Record<string, string> = {};
        if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
        if (!/^[6-9]\d{9}$/.test(formData.phone)) newErrors.phone = "Valid 10-digit Indian phone number required";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Valid email is required";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;
        
        setLoading(true);
        // Simulate processing
        await new Promise(resolve => setTimeout(resolve, 500));
        setLoading(false);

        const message = `Hello,\n\nI would like to get in touch regarding your real estate services.\n\nName: ${formData.fullName}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nSubject: ${formData.subject}\nPreferred Project: ${formData.preferredProject}\nBudget: ${formData.budget}\nMessage: ${formData.message}\n\nPlease contact me at your earliest convenience.\n\nThank you.`;
        
        window.open(`https://wa.me/917224935780?text=${encodeURIComponent(message)}`, "_blank");
    };

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-32 pb-20 bg-background">
            {/* Hero */}
            <section className="px-8 pb-16 text-center">
                <h1 className="text-7xl font-display font-bold text-primary mb-6">Contact Us</h1>
                <p className="text-xl text-gray-500 max-w-2xl mx-auto">Get in touch for expert real estate guidance and personalized property solutions.</p>
            </section>

            {/* Contact Info & Form */}
            <section className="px-8 py-16 bg-white">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
                    <form id="contact-form" onSubmit={handleSubmit} className="space-y-6 bg-background p-10 rounded-[32px] border border-gray-100">
                        <h3 className="text-3xl font-bold">Send us a Message</h3>
                        <div className="space-y-1">
                            <input type="text" placeholder="Full Name" value={formData.fullName} onChange={e => setFormData({...formData, fullName: e.target.value})} className={`w-full p-4 border ${errors.fullName ? 'border-red-500' : 'border-gray-200'} rounded-2xl`} />
                            {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
                        </div>

                        <div className="space-y-1">
                            <input type="tel" placeholder="Phone Number" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className={`w-full p-4 border ${errors.phone ? 'border-red-500' : 'border-gray-200'} rounded-2xl`} />
                            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                        </div>

                        <div className="space-y-1">
                            <input type="email" placeholder="Email Address" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className={`w-full p-4 border ${errors.email ? 'border-red-500' : 'border-gray-200'} rounded-2xl`} />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                        </div>

                        <input type="text" placeholder="Subject" value={formData.subject} onChange={e => setFormData({...formData, subject: e.target.value})} className="w-full p-4 border border-gray-200 rounded-2xl" />
                        <input type="text" placeholder="Preferred Project" value={formData.preferredProject} onChange={e => setFormData({...formData, preferredProject: e.target.value})} className="w-full p-4 border border-gray-200 rounded-2xl" />
                        <input type="text" placeholder="Budget" value={formData.budget} onChange={e => setFormData({...formData, budget: e.target.value})} className="w-full p-4 border border-gray-200 rounded-2xl" />
                        
                        <textarea placeholder="Message" value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} className="w-full p-4 border border-gray-200 rounded-2xl h-32" />
                        
                        <button type="submit" disabled={loading} className="w-full px-8 py-4 bg-primary text-white rounded-2xl font-bold flex items-center justify-center gap-2">
                            {loading && <Loader2 className="animate-spin" size={20} />}
                            {loading ? "Sending..." : "Submit Request"}
                        </button>
                    </form>
                    
                    <div className="space-y-8">
                        <h3 className="text-3xl font-bold">Get In Touch</h3>
                        <div className="flex items-start gap-4 p-6 bg-background rounded-[24px]">
                            <MapPin className="text-accent mt-1" /> 
                            <div><h4 className="font-bold">Our Office</h4><p className="text-gray-600">123, Luxury Avenue, Mumbai</p></div>
                        </div>
                        <div className="flex items-start gap-4 p-6 bg-background rounded-[24px]">
                            <Phone className="text-accent mt-1" /> 
                            <div><h4 className="font-bold">Call Us</h4><a href="tel:+917224935780" className="text-gray-600 hover:text-primary">+91 7224935780</a></div>
                        </div>
                        <div className="flex items-start gap-4 p-6 bg-background rounded-[24px]">
                            <Clock className="text-accent mt-1" /> 
                            <div><h4 className="font-bold">Working Hours</h4><p className="text-gray-600">Mon - Sat: 9 AM - 8 PM</p></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="px-8 py-24 text-center">
                <div className="max-w-5xl mx-auto bg-primary text-white p-16 rounded-[40px]">
                    <h2 className="text-5xl font-bold mb-8">Need Expert Guidance?</h2>
                    <div className="flex gap-4 justify-center">
                        <a href="tel:+917224935780" className="px-8 py-4 bg-accent text-primary rounded-[18px] font-bold flex items-center gap-2"><Phone size={20} /> Call Now</a>
                        <a href="https://wa.me/917224935780?text=Hello, I am interested in your real estate projects. Please contact me." target="_blank" className="px-8 py-4 bg-white/10 text-white rounded-[18px] font-bold flex items-center gap-2"><MessageCircle size={20} /> WhatsApp</a>
                    </div>
                </div>
            </section>
        </motion.div>
    );
}

