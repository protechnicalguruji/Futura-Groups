import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { User, Phone, Mail, Calendar, Clock, MessageSquare, ArrowLeft } from "lucide-react";
import { projects } from "../data";

export default function ProjectDetails({ project, onBack, onSelect }: { project: any; onBack: () => void; onSelect: (p: any) => void }) {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", date: "", time: "", message: "" });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [project]);

  const suggested = projects.filter(p => p.id !== project.id).slice(0, 3);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !/^[6-9]\d{9}$/.test(formData.phone)) return;
    
    const msg = `Hello,
I am interested in this property.
Project: ${project.name}
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Preferred Date: ${formData.date}
Preferred Time: ${formData.time}
Message: ${formData.message}
Please contact me regarding this project.`;
    window.open(`https://wa.me/917224935780?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-24 bg-background min-h-screen relative">
      <button onClick={onBack} className="fixed bottom-8 right-8 md:top-28 md:left-8 md:bottom-auto md:right-auto z-50 flex items-center gap-2 bg-white p-4 md:p-3 rounded-full shadow-2xl md:shadow-md transition-transform hover:scale-110 active:scale-95"><ArrowLeft size={20} /> <span className="hidden md:inline">Back</span></button>
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-16">
        <h1 className="text-4xl md:text-6xl font-display font-bold text-primary mb-4 leading-tight">{project.name}</h1>
        <p className="text-lg md:text-xl text-gray-500 mb-8">{project.location} | {project.price}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
                <div className="h-64 md:h-96 overflow-hidden rounded-[24px] md:rounded-[28px] mb-4 md:mb-8">
                    <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
                </div>
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                    <div className="h-32 md:h-48 overflow-hidden rounded-[24px] md:rounded-[28px]">
                        <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80" alt="Detail 1" className="w-full h-full object-cover" />
                    </div>
                    <div className="h-32 md:h-48 overflow-hidden rounded-[24px] md:rounded-[28px]">
                        <img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80" alt="Detail 2" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
            <form onSubmit={handleSubmit} className="bg-surface p-5 md:p-8 rounded-[28px] border border-gray-100 dark:border-white/10 shadow-xl space-y-3 md:space-y-4">
                <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Schedule a Call</h3>
                <input type="text" placeholder="Full Name" className="w-full p-3 md:p-4 rounded-[18px] border border-gray-200 text-sm md:text-base" onChange={e => setFormData({...formData, name: e.target.value})} required />
                <input type="text" placeholder="Phone Number" className="w-full p-3 md:p-4 rounded-[18px] border border-gray-200 text-sm md:text-base" onChange={e => setFormData({...formData, phone: e.target.value})} required />
                <input type="email" placeholder="Email Address" className="w-full p-3 md:p-4 rounded-[18px] border border-gray-200 text-sm md:text-base" onChange={e => setFormData({...formData, email: e.target.value})} />
                <div className="flex gap-3 md:gap-4">
                    <input type="date" className="w-full p-3 md:p-4 rounded-[18px] border border-gray-200 text-sm md:text-base" onChange={e => setFormData({...formData, date: e.target.value})} />
                    <input type="time" className="w-full p-3 md:p-4 rounded-[18px] border border-gray-200 text-sm md:text-base" onChange={e => setFormData({...formData, time: e.target.value})} />
                </div>
                <textarea placeholder="Message" className="w-full p-3 md:p-4 rounded-[18px] border border-gray-200 text-sm md:text-base" onChange={e => setFormData({...formData, message: e.target.value})} />
                <button className="w-full p-3 md:p-4 bg-primary text-white rounded-[18px] font-bold hover:bg-secondary text-sm md:text-base">Schedule Call</button>
            </form>
            </div>
            <div className="mt-12 md:mt-16 space-y-12 md:space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                <div className="bg-surface p-6 md:p-8 rounded-[28px] border border-gray-100 dark:border-white/10 shadow-sm">
                    <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Contact Agent</h3>
                    <div className="h-20 w-20 md:h-24 md:w-24 overflow-hidden rounded-full mb-4">
                        <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80" alt="Agent" className="w-full h-full object-cover" />
                    </div>
                    <div className="font-bold text-lg md:text-xl">Siddharth Sharma</div>
                    <div className="text-xs md:text-sm text-gray-500 mb-4 md:mb-6">Property Consultant</div>
                    <a href="tel:+918884544588" className="block w-full p-3 mb-2 bg-primary text-white rounded-[18px] font-bold text-center text-sm md:text-base">Call Now</a>
                    <a href="https://wa.me/918884544588?text=Hello Futura Groups, I am interested in this property. Please contact me." className="block w-full p-3 bg-accent text-primary rounded-[18px] font-bold text-center text-sm md:text-base">WhatsApp</a>
                </div>
                <div className="md:col-span-2 bg-white p-6 md:p-8 rounded-[28px] border border-gray-100 shadow-sm">
                    <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Property Information</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                        {["Type", "Price", "Config", "Area", "Floors", "Status"].map(label => (
                            <div key={label} className="p-3 md:p-4 bg-background rounded-[18px]"><div className="text-xs md:text-sm text-gray-500">{label}</div><div className="font-bold text-sm md:text-base">Value</div></div>
                        ))}
                    </div>
                </div>
            </div>
            <div>
                <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8">Premium Amenities</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                    {["Club House", "Pool", "Gym", "Garden"].map(item => (
                        <div key={item} className="p-4 md:p-6 bg-white rounded-[24px] border border-gray-100 shadow-sm text-center font-bold text-primary text-sm md:text-base">{item}</div>
                    ))}
                </div>
            </div>
            <div>
                <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8">Suggested Properties</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {suggested.map(p => (
                        <div key={p.id} className="bg-surface rounded-[28px] shadow-sm overflow-hidden border border-gray-100 dark:border-white/10">
                          <div className="h-48 md:h-64 overflow-hidden">
                            <img src={p.image} alt={p.name} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" loading="lazy" />
                          </div>
                          <div className="p-5 md:p-6">
                            <h3 className="text-xl md:text-2xl font-bold text-primary leading-tight">{p.name}</h3>
                            <p className="text-sm md:text-base text-gray-500 mb-4">{p.location}</p>
                            <div className="text-lg md:text-xl font-bold text-accent mb-4 md:mb-6">{p.price}</div>
                            <div className="flex gap-3 md:gap-4">
                              <button onClick={() => onSelect(p)} className="flex-1 px-3 md:px-4 py-2.5 md:py-3 border border-primary text-primary rounded-[18px] font-bold hover:bg-primary hover:text-white transition-all text-center text-xs md:text-base">Details</button>
                              <a href="tel:+918884544588" className="flex-1 px-3 md:px-4 py-2.5 md:py-3 bg-primary text-white rounded-[18px] font-bold text-center hover:bg-secondary text-xs md:text-base">Call Now</a>
                            </div>
                          </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-primary text-white p-8 md:p-16 rounded-[40px] text-center">
                <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">Need Expert Guidance?</h3>
                <p className="mb-10 text-gray-300">Talk to our experts for personalized advice.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="px-8 py-4 bg-accent text-primary rounded-[18px] font-bold hover:scale-105 transition-transform">Schedule Call</button>
                    <button className="px-8 py-4 bg-white/10 text-white rounded-[18px] font-bold hover:bg-white/20 transition-all">Call Now</button>
                </div>
            </div>
        </div>
      </div>
    </motion.div>
  );
}
