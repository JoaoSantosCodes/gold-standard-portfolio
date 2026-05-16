import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import CommandCenter from "@/components/CommandCenter";
import SkillsAccordion from "@/components/SkillsAccordion";
import Timeline from "@/components/Timeline";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import BackgroundParticles from "@/components/BackgroundParticles";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background elements */}
      <BackgroundParticles />
      <div className="fixed inset-0 cyber-grid pointer-events-none opacity-[0.03]" />
      <div className="fixed inset-0 mask-radial pointer-events-none bg-background/20" />
      
      {/* Noise overlay for texture */}
      <div className="noise-overlay" />
      
      {/* Main content */}
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <CommandCenter />
        <SkillsAccordion />
        <Timeline />
        <ContactForm />
        <Footer />
      </div>
    </div>
  );
};


export default Index;

