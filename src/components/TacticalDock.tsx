import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, LayoutDashboard, Terminal, MessageSquare, User, Briefcase, Database, GraduationCap } from "lucide-react";

const sections = [
  { id: "inicio", name: "Início", icon: Home, href: "#" },
  { id: "command-center", name: "Status", icon: Terminal, href: "#command-center" },
  { id: "project-lab", name: "Lab", icon: Database, href: "#project-lab" },
  { id: "experiencia", name: "Skills", icon: LayoutDashboard, href: "#experiencia" },
  { id: "academia", name: "Academy", icon: GraduationCap, href: "#academia" },
  { id: "jornada", name: "Jornada", icon: Briefcase, href: "#jornada" },
  { id: "contato", name: "Contato", icon: MessageSquare, href: "#contato" },
];



const TacticalDock: React.FC = () => {
  const [activeSection, setActiveSection] = useState("inicio");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
      
      const current = sections.find(section => {
        const el = document.getElementById(section.id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top >= 0 && rect.top <= window.innerHeight / 2;
      });
      if (current) setActiveSection(current.id);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 px-4">
      <motion.nav
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="glass-tactical px-6 py-3 rounded-full flex items-center gap-4 border border-primary/20 shadow-[0_0_20px_rgba(212,175,55,0.1)]"
      >
        {sections.map((section) => (
          <a
            key={section.id}
            href={section.href}
            onClick={(e) => {
              if (section.href === "#") {
                window.scrollTo({ top: 0, behavior: "smooth" });
              } else {
                e.preventDefault();
                document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="relative p-2 group"
          >
            <section.icon 
              className={`w-5 h-5 transition-colors duration-300 ${
                activeSection === section.id ? "text-primary" : "text-muted-foreground hover:text-primary/60"
              }`}
            />
            
            {/* Tooltip */}
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-primary text-primary-foreground text-[10px] uppercase tracking-widest rounded-sm opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              {section.name}
            </span>

            {/* Active Indicator */}
            {activeSection === section.id && (
              <motion.div
                layoutId="active-pill"
                className="absolute inset-0 bg-primary/10 rounded-full -z-10"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
          </a>
        ))}
      </motion.nav>
    </div>
  );
};

export default TacticalDock;
