import { useState } from "react";
import { motion } from "motion/react";
import { User, Phone, Mail, Building, Wallet, MessageSquare } from "lucide-react";

export default function WhatsAppLeadForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    project: "Skyline Residences",
    budget: "5 Cr - 10 Cr",
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

    window.open(`https://wa.me/917224935780?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const inputClasses = "w-full p-4 pl-12 rounded-[20px] bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:border-accent transition-all";

  return (
    <motion.form 
      initial={{ opacity: 0, scale: 0.9 }} 
      animate={{ opacity: 1, scale: 1 }} 
      transition={{ delay: 0.8 }} 
      onSubmit={handleSubmit}
      className="w-full md:w-[450px] mt-10 md:mt-20 bg-white/10 backdrop-blur-xl border border-white/20 rounded-[28px] p-6 md:p-8 space-y-4"
    >
      <h3 className="text-2xl font-bold mb-1">Get in Touch</h3>
      <p className="text-sm text-gray-200 mb-6">Fill in your details and our team will contact you shortly on WhatsApp.</p>
      
      {error && <p className="text-red-400 text-sm">{error}</p>}

      <div className="relative"><User className="absolute left-4 top-4 text-gray-300" size={20} /><input type="text" placeholder="Full Name" className={inputClasses} value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} required /></div>
      <div className="relative"><Phone className="absolute left-4 top-4 text-gray-300" size={20} /><input type="text" placeholder="Phone Number" className={inputClasses} value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} required /></div>
      <div className="relative"><Mail className="absolute left-4 top-4 text-gray-300" size={20} /><input type="email" placeholder="Email Address" className={inputClasses} value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} /></div>
      <div className="relative"><Building className="absolute left-4 top-4 text-gray-300" size={20} /><select className={inputClasses} value={formData.project} onChange={e => setFormData({...formData, project: e.target.value})}>
        <option>Skyline Residences</option>
        <option>The Emerald Villas</option>
      </select></div>
      <div className="relative"><Wallet className="absolute left-4 top-4 text-gray-300" size={20} /><select className={inputClasses} value={formData.budget} onChange={e => setFormData({...formData, budget: e.target.value})}>
        <option>5 Cr - 10 Cr</option>
        <option>10 Cr - 20 Cr</option>
      </select></div>
      <div className="relative"><MessageSquare className="absolute left-4 top-4 text-gray-300" size={20} /><textarea placeholder="Message" className={inputClasses} rows={2} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} /></div>
      
      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full py-4 bg-gradient-to-r from-accent to-yellow-600 text-primary rounded-[18px] font-bold shadow-lg mt-4"
      >
        Send on WhatsApp
      </motion.button>
    </motion.form>
  );
}
