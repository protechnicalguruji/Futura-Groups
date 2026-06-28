/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { X } from "lucide-react";
import Lenis from "lenis";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import WhyChooseUs from "./components/WhyChooseUs";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import Partners from "./components/Partners";
import Achievements from "./components/Achievements";
import CTA from "./components/CTA";
import Calculators from "./components/Calculators";
import SiteVisitForm from "./components/SiteVisitForm";
import BrochureCTA from "./components/BrochureCTA";
import LocationAdvantages from "./components/LocationAdvantages";
import MapSection from "./components/MapSection";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import FloatingElements from "./components/FloatingElements";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
import ProjectDetails from "./components/ProjectDetails";
import CompareModal from "./components/CompareModal";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import ProjectsPage from "./components/ProjectsPage";
import InvestmentPage from "./components/InvestmentPage";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [currentPage, setCurrentPage] = useState('home');
  const [compareList, setCompareList] = useState<any[]>([]);
  const [showCompare, setShowCompare] = useState(false);

  const toggleCompare = (project: any) => {
    setCompareList(prev => {
      const exists = prev.find(p => p.id === project.id);
      if (exists) return prev.filter(p => p.id !== project.id);
      if (prev.length >= 4) return prev;
      return [...prev, project];
    });
  };

  const handleNavigate = (page: string, scrollToId?: string) => {
    setSelectedProject(null);
    setCurrentPage(page);
    setTimeout(() => {
        if (scrollToId) {
            document.getElementById(scrollToId)?.scrollIntoView({ behavior: 'smooth' });
        } else if (page === 'home') {
            document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
        } else if (page === 'services') {
            document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
        }
    }, 200);
  }

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      <main className="bg-background min-h-screen overflow-x-hidden w-full relative">
        <Navbar onNavigate={handleNavigate} />
        {selectedProject ? (
          <ProjectDetails project={selectedProject} onBack={() => setSelectedProject(null)} onSelect={setSelectedProject} />
        ) : (
          currentPage === 'home' ? (
            <>
              <FloatingElements />
              <Hero onNavigate={handleNavigate} />
              <Stats />
              <WhyChooseUs />
              <Projects 
                onSelect={setSelectedProject} 
                onNavigate={handleNavigate} 
                compareList={compareList}
                onToggleCompare={toggleCompare}
              />
              <Services />
              <Process />
              <Testimonials />
              <Partners />
              <Achievements />
              <CTA onNavigate={handleNavigate} />
              <Calculators />
              <LocationAdvantages />
              <SiteVisitForm />
              <MapSection />
              <FAQ />
              <BrochureCTA />
              <FinalCTA />
              <Newsletter />
              <Footer />
            </>
          ) : currentPage === 'projects' ? (
            <ProjectsPage 
              onSelect={setSelectedProject} 
              compareList={compareList}
              onToggleCompare={toggleCompare}
            />
          ) : currentPage === 'about' ? (
            <AboutPage />
          ) : currentPage === 'contact' ? (
            <ContactPage />
          ) : currentPage === 'investment' ? (
            <InvestmentPage 
              onSelect={setSelectedProject} 
              compareList={compareList}
              onToggleCompare={toggleCompare}
            />
          ) : null
        )}

        {/* Floating Compare Bar */}
        {compareList.length > 0 && (
          <motion.div 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[90] bg-primary text-white px-6 py-4 rounded-full shadow-2xl flex items-center gap-6 border border-white/10"
          >
            <div className="flex -space-x-3 overflow-hidden">
              {compareList.map(p => (
                <div key={p.id} className="w-10 h-10 rounded-full border-2 border-primary overflow-hidden">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="hidden sm:block text-sm font-medium">
              {compareList.length} properties selected to compare
            </div>
            <div className="flex gap-3">
              <button 
                onClick={() => setShowCompare(true)}
                className="px-6 py-2 bg-accent text-primary rounded-full font-bold text-sm hover:scale-105 transition-all"
              >
                Compare Now
              </button>
              <button 
                onClick={() => setCompareList([])}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
                title="Clear comparison"
              >
                <X size={20} />
              </button>
            </div>
          </motion.div>
        )}

        <CompareModal 
          isOpen={showCompare} 
          onClose={() => setShowCompare(false)} 
          projects={compareList}
          onRemove={toggleCompare}
        />
      </main>
    </>
  );
}
