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
            <section className="relative px-8 pb-16 min-h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center" />
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative text-center text-white px-4">
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold mb-6">Contact Us</h1>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto">Get in touch for expert real estate guidance and personalized property solutions.</p>
                </div>
            </section>

            {/* Contact Info & Form */}
            <section className="px-6 md:px-8 py-12 md:py-16 bg-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
                    <form id="contact-form" onSubmit={handleSubmit} className="space-y-4 md:space-y-6 bg-[#F8F6F2] p-5 md:p-10 rounded-[32px] border border-white shadow-lg">
                        <h3 className="text-2xl md:text-3xl font-bold">Send us a Message</h3>
                        <div className="space-y-1">
                            <input type="text" placeholder="Full Name" value={formData.fullName} onChange={e => setFormData({...formData, fullName: e.target.value})} className={`w-full p-3 md:p-4 border ${errors.fullName ? 'border-red-500' : 'border-gray-200'} rounded-2xl text-sm md:text-base`} />
                            {errors.fullName && <p className="text-red-500 text-xs">{errors.fullName}</p>}
                        </div>

                        <div className="space-y-1">
                            <input type="tel" placeholder="Phone Number" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className={`w-full p-3 md:p-4 border ${errors.phone ? 'border-red-500' : 'border-gray-200'} rounded-2xl text-sm md:text-base`} />
                            {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
                        </div>

                        <div className="space-y-1">
                            <input type="email" placeholder="Email Address" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className={`w-full p-3 md:p-4 border ${errors.email ? 'border-red-500' : 'border-gray-200'} rounded-2xl text-sm md:text-base`} />
                            {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
                        </div>

                        <input type="text" placeholder="Subject" value={formData.subject} onChange={e => setFormData({...formData, subject: e.target.value})} className="w-full p-3 md:p-4 border border-gray-200 rounded-2xl text-sm md:text-base" />
                        <input type="text" placeholder="Preferred Project" value={formData.preferredProject} onChange={e => setFormData({...formData, preferredProject: e.target.value})} className="w-full p-3 md:p-4 border border-gray-200 rounded-2xl text-sm md:text-base" />
                        <input type="text" placeholder="Budget" value={formData.budget} onChange={e => setFormData({...formData, budget: e.target.value})} className="w-full p-3 md:p-4 border border-gray-200 rounded-2xl text-sm md:text-base" />
                        
                        <textarea placeholder="Message" value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} className="w-full p-3 md:p-4 border border-gray-200 rounded-2xl h-24 md:h-32 text-sm md:text-base" />
                        
                        <button type="submit" disabled={loading} className="w-full px-6 md:px-8 py-3 md:py-4 bg-primary text-white rounded-2xl font-bold flex items-center justify-center gap-2 text-sm md:text-base">
                            {loading && <Loader2 className="animate-spin" size={18} />}
                            {loading ? "Sending..." : "Submit Request"}
                        </button>
                    </form>
                    
                    <div className="space-y-6 md:space-y-8">
                        <h3 className="text-2xl md:text-3xl font-bold">Get In Touch</h3>
                        <div className="flex items-start gap-3 md:gap-4 p-5 md:p-6 bg-[#F8F6F2] rounded-[24px] shadow-lg">
                            <MapPin className="text-accent mt-1 w-5 h-5 md:w-6 md:h-6" /> 
                            <div><h4 className="font-bold text-sm md:text-base">Our Office</h4><p className="text-xs md:text-sm text-gray-600">123, Luxury Avenue, Mumbai</p></div>
                        </div>
                        <div className="flex items-start gap-3 md:gap-4 p-5 md:p-6 bg-[#F8F6F2] rounded-[24px] shadow-lg">
                            <Phone className="text-accent mt-1 w-5 h-5 md:w-6 md:h-6" /> 
                            <div><h4 className="font-bold text-sm md:text-base">Call Us</h4><a href="tel:+917224935780" className="text-xs md:text-sm text-gray-600 hover:text-primary">+91 7224935780</a></div>
                        </div>
                        <div className="flex items-start gap-3 md:gap-4 p-5 md:p-6 bg-[#F8F6F2] rounded-[24px] shadow-lg">
                            <Clock className="text-accent mt-1 w-5 h-5 md:w-6 md:h-6" /> 
                            <div><h4 className="font-bold text-sm md:text-base">Working Hours</h4><p className="text-xs md:text-sm text-gray-600">Mon - Sat: 9 AM - 8 PM</p></div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Gallery */}
            <section className="px-6 md:px-8 py-12 md:py-16">
                <div className="max-w-7xl mx-auto">
                    <h3 className="text-2xl md:text-4xl font-bold mb-8 md:mb-10">Our Office</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                        {[1, 2, 3, 4, 5, 6].map(i => (
                            <div key={i} className="h-48 md:h-64 rounded-[24px] overflow-hidden">
                                <img src={`https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=600&q=80`} alt="Office" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="px-6 md:px-8 py-16 md:py-24 text-center">
                <div className="max-w-5xl mx-auto bg-primary text-white p-8 md:p-16 rounded-[40px]">
                    <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">Need Expert Guidance?</h2>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="tel:+917224935780" className="px-8 py-4 bg-accent text-primary rounded-[18px] font-bold flex items-center justify-center gap-2 transition-transform hover:scale-105"><Phone size={20} /> Call Now</a>
                        <a href="https://wa.me/917224935780" target="_blank" className="px-8 py-4 bg-white/10 text-white border border-white/20 rounded-[18px] font-bold flex items-center justify-center gap-2 transition-transform hover:scale-105"><MessageCircle size={20} /> WhatsApp</a>
                    </div>
                </div>
            </section>
        </motion.div>
    );
}

