import { Phone, MessageCircle } from "lucide-react";

export default function MobileActionBar() {
  return (
    <div 
      className="md:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200/80 shadow-[0_-8px_30px_rgba(0,0,0,0.08)] px-4 pt-3 pb-[calc(12px+env(safe-area-inset-bottom))] z-[99] flex gap-3"
      id="mobile-action-bar"
    >
      <a 
        href="tel:+918884544588" 
        className="flex-1 bg-primary text-white font-display font-bold rounded-[18px] py-3.5 px-4 flex items-center justify-center gap-2 shadow-sm active:scale-95 transition-all text-sm uppercase tracking-wider"
        id="mobile-call-now"
      >
        <Phone size={18} />
        <span>Call Now</span>
      </a>
      <a 
        href="https://wa.me/918884544588" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="flex-1 bg-[#25D366] text-white font-display font-bold rounded-[18px] py-3.5 px-4 flex items-center justify-center gap-2 shadow-sm active:scale-95 transition-all text-sm uppercase tracking-wider"
        id="mobile-whatsapp"
      >
        <MessageCircle size={18} />
        <span>WhatsApp</span>
      </a>
    </div>
  );
}
