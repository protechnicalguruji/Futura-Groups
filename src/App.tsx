/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from "react";
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
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import ProjectsPage from "./components/ProjectsPage";
import InvestmentPage from "./components/InvestmentPage";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [currentPage, setCurrentPage] = useState('home');

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
              <Projects onSelect={setSelectedProject} onNavigate={handleNavigate} />
              <Services />
              <Process />
              <Testimonials />
              <Partners />
              <Achievements />
              <CTA />
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
            <ProjectsPage onSelect={setSelectedProject} />
          ) : currentPage === 'about' ? (
            <AboutPage />
          ) : currentPage === 'contact' ? (
            <ContactPage />
          ) : currentPage === 'investment' ? (
            <InvestmentPage onSelect={setSelectedProject} />
          ) : null
        )}
      </main>
    </>
  );
}
