import { motion, useScroll, useSpring } from "motion/react";
import { MessageCircle, Phone, ArrowUp } from "lucide-react";

export default function FloatingElements() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    return (
        <>
            <motion.div className="fixed top-0 left-0 right-0 h-1 bg-accent origin-left z-50" style={{ scaleX }} />
            <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-40">
                <button className="p-4 bg-green-500 text-white rounded-full shadow-lg"><MessageCircle /></button>
                <button className="p-4 bg-primary text-white rounded-full shadow-lg"><Phone /></button>
                <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="p-4 bg-white text-primary rounded-full shadow-lg border border-gray-100"><ArrowUp /></button>
            </div>
        </>
    );
}
