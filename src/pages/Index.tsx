import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import CommandCenter from "@/components/CommandCenter";
import SkillsAccordion from "@/components/SkillsAccordion";
import Timeline from "@/components/Timeline";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import BackgroundParticles from "@/components/BackgroundParticles";
import BootSequence from "@/components/BootSequence";
import TacticalCursor from "@/components/TacticalCursor";
import ScrollProgress from "@/components/ScrollProgress";
import TacticalDock from "@/components/TacticalDock";
import ProjectLab from "@/components/ProjectLab";
import AcademicLab from "@/components/AcademicLab";
import FieldReports from "@/components/FieldReports";

const Index = () => {
  const [isBooted, setIsBooted] = useState(false);

  return (
    <>
      <AnimatePresence>
        {!isBooted && <BootSequence onComplete={() => setIsBooted(true)} />}
      </AnimatePresence>

      <div id="inicio" className={`min-h-screen bg-background relative overflow-hidden transition-opacity duration-1000 ${isBooted ? "opacity-100" : "opacity-0"}`}>
        <TacticalCursor />
        <ScrollProgress />
        <TacticalDock />
        
        {/* Background elements */}
        <BackgroundParticles />
        <div className="fixed inset-0 cyber-grid pointer-events-none opacity-[0.03]" />
        <div className="fixed inset-0 mask-radial pointer-events-none bg-background/20" />
        
        {/* Noise overlay for texture */}
        <div className="noise-overlay" />
        
        {/* Main content */}
        <div className="relative z-10 h-screen overflow-y-auto snap-container">
          <Navigation />
          <div className="snap-section"><Hero /></div>
          <div className="snap-section"><CommandCenter /></div>
          <div className="snap-section"><ProjectLab /></div>
          <div className="snap-section"><AcademicLab /></div>
          <div className="snap-section"><SkillsAccordion /></div>
          <div className="snap-section"><FieldReports /></div>
          <div className="snap-section"><Timeline /></div>
          <div className="snap-section"><ContactForm /></div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Index;


