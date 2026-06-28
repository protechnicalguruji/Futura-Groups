import { Instagram, Linkedin, Twitter, Facebook, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-20 pb-12 px-6 md:px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
        <div className="space-y-8">
          <div className="font-display text-3xl font-bold text-accent">FUTURA GROUPS</div>
          <p className="text-gray-400 leading-relaxed">Where Trust Meets Tomorrow. Delivering trusted real estate solutions and helping you make informed investment decisions in Bengaluru since 2000.</p>
          <div className="flex gap-4">
            {[Instagram, Linkedin, Twitter, Facebook].map((Icon, i) => (
                <button key={i} className="p-3 rounded-full bg-white/5 hover:bg-accent hover:text-primary transition-all">
                    <Icon size={20} />
                </button>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-bold text-xl mb-8">Quick Navigation</h4>
          <ul className="space-y-4 text-gray-400">
            {["Home", "Projects", "Services", "Investment", "About", "Contact"].map(link => (
                <li key={link}>
                    <button className="hover:text-accent transition-colors flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" /> {link}
                    </button>
                </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-xl mb-8">Contact Info</h4>
          <ul className="space-y-6 text-gray-400">
            <li className="flex items-start gap-4">
                <MapPin className="text-accent shrink-0" size={24} />
                <span>Nagawara Main Road, Bengaluru North, Karnataka, India</span>
            </li>
            <li className="flex items-center gap-4">
                <Phone className="text-accent shrink-0" size={24} />
                <span>+91 88845 44588</span>
            </li>
            <li className="flex items-center gap-4">
                <Mail className="text-accent shrink-0" size={24} />
                <span>contact@futuragroups.com</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-xl mb-8">Our Location</h4>
          <div className="w-full h-48 rounded-3xl overflow-hidden grayscale invert opacity-80 hover:grayscale-0 hover:invert-0 hover:opacity-100 transition-all duration-700">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62193.30397573984!2d77.58156173007425!3d13.030528224536737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae171f16597155%3A0xb366b6c167b53874!2sNagawara%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1711200000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 text-sm">
        <p>© 2026 Futura Groups. All Rights Reserved. Where Trust Meets Tomorrow.</p>
        <div className="flex gap-8">
            <button className="hover:text-white transition-colors">Privacy Policy</button>
            <button className="hover:text-white transition-colors">Terms & Conditions</button>
        </div>
      </div>
    </footer>
  );
}
