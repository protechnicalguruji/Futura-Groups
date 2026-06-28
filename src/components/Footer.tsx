import { Instagram, Linkedin, Twitter, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-20 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <div className="font-display text-3xl font-bold text-accent">ELITE</div>
          <p className="text-gray-400">Crafting premium living experiences since 2012. Redefining opulence, one project at a time.</p>
          <div className="flex gap-4">
            <Instagram size={20} className="hover:text-accent cursor-pointer" />
            <Linkedin size={20} className="hover:text-accent cursor-pointer" />
            <Twitter size={20} className="hover:text-accent cursor-pointer" />
            <Facebook size={20} className="hover:text-accent cursor-pointer" />
          </div>
        </div>
        <div>
          <h4 className="font-bold text-xl mb-6">Quick Links</h4>
          <ul className="space-y-4 text-gray-400">
            {["Home", "Projects", "Services", "Investment", "About", "Contact"].map(link => <li key={link} className="hover:text-accent cursor-pointer">{link}</li>)}
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-xl mb-6">Featured Projects</h4>
          <ul className="space-y-4 text-gray-400">
            {["Luxury Apartments", "Premium Villas", "Commercial Spaces", "Plots"].map(link => <li key={link} className="hover:text-accent cursor-pointer">{link}</li>)}
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-xl mb-6">Contact</h4>
          <ul className="space-y-4 text-gray-400">
            <li>123 Luxury Avenue, Business District</li>
            <li>+91 99999 99999</li>
            <li>contact@eliteestates.com</li>
            <li>10:00 AM - 7:00 PM</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
        © 2026 Elite Estates. All Rights Reserved. Designed with elegance.
      </div>
    </footer>
  );
}
