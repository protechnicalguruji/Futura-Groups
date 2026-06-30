import { motion, useScroll, useSpring } from "motion/react";
import { MessageCircle, Phone, ArrowUp } from "lucide-react";

export default function FloatingElements() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    return (
        <>
            <motion.div className="fixed top-0 left-0 right-0 h-1 bg-accent origin-left z-50" style={{ scaleX }} />
            <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-40">
                <a href="https://wa.me/918884544588" target="_blank" rel="noopener noreferrer" className="hidden md:flex p-4 bg-green-500 text-white rounded-full shadow-lg hover:scale-110 transition-transform" id="desktop-whatsapp-floating"><MessageCircle /></a>
                <a href="tel:+918884544588" className="hidden md:flex p-4 bg-primary text-white rounded-full shadow-lg hover:scale-110 transition-transform" id="desktop-phone-floating"><Phone /></a>
                <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="p-4 bg-white text-primary rounded-full shadow-lg border border-gray-100 hover:scale-110 transition-transform" id="scroll-to-top"><ArrowUp /></button>
            </div>
        </>
    );
}
