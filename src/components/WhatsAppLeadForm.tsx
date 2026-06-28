import React, { useState } from "react";
import { motion } from "motion/react";
import { User, Phone, Mail, Building, Wallet, MessageSquare } from "lucide-react";

export default function WhatsAppLeadForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    project: "Premium Land Parcels",
    budget: "50L - 1 Cr",
    message: ""
  });
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !/^[6-9]\d{9}$/.test(formData.phone)) {
      setError("Please provide a valid Name and 10-digit Indian Phone Number.");
      return;
    }
    setError("");
    
    const msg = `Hello,

I am interested in your real estate projects.

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Preferred Project: ${formData.project}
Budget: ${formData.budget}
Message: ${formData.message}

Please contact me regarding available properties.`;

    window.open(`https://wa.me/918884544588?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const inputClasses = "w-full p-4 pl-12 rounded-[20px] bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:border-accent transition-all";

  return (
    <motion.form 
      initial={{ opacity: 0, scale: 0.9 }} 
      animate={{ opacity: 1, scale: 1 }} 
      transition={{ delay: 0.8 }} 
      onSubmit={handleSubmit}
      className="w-full max-w-[450px] mx-auto md:mx-0 mt-6 md:mt-20 bg-white/10 backdrop-blur-xl border border-white/20 rounded-[28px] p-5 md:p-8 space-y-3 md:space-y-4 shadow-2xl"
    >
      <h3 className="text-xl md:text-2xl font-bold mb-1">Get in Touch</h3>
      <p className="text-xs md:text-sm text-gray-200 mb-4 md:mb-6">Fill in your details and our team will contact you shortly on WhatsApp.</p>
      
      {error && <p className="text-red-400 text-sm">{error}</p>}

      <div className="relative"><User className="absolute left-4 top-3 md:top-4 text-gray-300" size={18} /><input type="text" placeholder="Full Name" className={`${inputClasses} p-3 md:p-4 text-sm md:text-base`} value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} required /></div>
      <div className="relative"><Phone className="absolute left-4 top-3 md:top-4 text-gray-300" size={18} /><input type="text" placeholder="Phone Number" className={`${inputClasses} p-3 md:p-4 text-sm md:text-base`} value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} required /></div>
      <div className="relative"><Mail className="absolute left-4 top-3 md:top-4 text-gray-300" size={18} /><input type="email" placeholder="Email Address" className={`${inputClasses} p-3 md:p-4 text-sm md:text-base`} value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} /></div>
      <div className="relative"><Building className="absolute left-4 top-3 md:top-4 text-gray-300" size={18} /><select className={`${inputClasses} p-3 md:p-4 text-sm md:text-base`} value={formData.project} onChange={e => setFormData({...formData, project: e.target.value})}>
        <option>Premium Land Parcels</option>
        <option>Residential Properties</option>
        <option>Commercial Properties</option>
        <option>Joint Ventures</option>
      </select></div>
      <div className="relative"><Wallet className="absolute left-4 top-3 md:top-4 text-gray-300" size={18} /><select className={`${inputClasses} p-3 md:p-4 text-sm md:text-base`} value={formData.budget} onChange={e => setFormData({...formData, budget: e.target.value})}>
        <option>Below 50L</option>
        <option>50L - 1 Cr</option>
        <option>1 Cr - 5 Cr</option>
        <option>Above 5 Cr</option>
      </select></div>
      <div className="relative"><MessageSquare className="absolute left-4 top-3 md:top-4 text-gray-300" size={18} /><textarea placeholder="Message" className={`${inputClasses} p-3 md:p-4 text-sm md:text-base`} rows={2} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} /></div>
      
      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full py-3 md:py-4 bg-gradient-to-r from-accent to-yellow-600 text-primary rounded-[18px] font-bold shadow-lg mt-2 md:mt-4 text-sm md:text-base"
      >
        Send on WhatsApp
      </motion.button>
    </motion.form>
  );
}
