import { Instagram, Linkedin, Twitter, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12 lg:py-16 px-6 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 lg:gap-8">
        <div className="space-y-4 md:space-y-6 lg:space-y-4">
          <div className="font-display text-2xl md:text-3xl lg:text-2xl font-bold text-accent">FUTURA GROUPS</div>
          <p className="text-sm md:text-base lg:text-sm text-gray-400">Where Trust Meets Tomorrow. Delivering trusted real estate solutions since 2000.</p>
          <div className="flex gap-4">
            <Instagram size={18} className="hover:text-accent cursor-pointer" />
            <Linkedin size={18} className="hover:text-accent cursor-pointer" />
            <Twitter size={18} className="hover:text-accent cursor-pointer" />
            <Facebook size={18} className="hover:text-accent cursor-pointer" />
          </div>
        </div>
        <div>
          <h4 className="font-bold text-lg md:text-xl mb-4 md:mb-6">Quick Links</h4>
          <ul className="space-y-2 md:space-y-4 text-sm md:text-base text-gray-400">
            {["Home", "Projects", "Services", "Investment", "About", "Contact"].map(link => <li key={link} className="hover:text-accent cursor-pointer">{link}</li>)}
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-lg md:text-xl mb-4 md:mb-6">Featured Services</h4>
          <ul className="space-y-2 md:space-y-4 text-sm md:text-base text-gray-400">
            {["Premium Land Parcels", "Residential Properties", "Commercial Leasing", "Property Management"].map(link => <li key={link} className="hover:text-accent cursor-pointer">{link}</li>)}
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-lg md:text-xl mb-4 md:mb-6">Contact</h4>
          <ul className="space-y-2 md:space-y-4 text-sm md:text-base text-gray-400">
            <li>Nagawara Main Road, Bengaluru North, Karnataka</li>
            <li>+91 88845 44588</li>
            <li>Operating Since 2000</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 md:mt-16 pt-8 border-t border-white/10 text-center text-gray-500 text-xs">
        © 2026 Futura Groups. All Rights Reserved. Where Trust Meets Tomorrow.
      </div>
    </footer>
  );
}
