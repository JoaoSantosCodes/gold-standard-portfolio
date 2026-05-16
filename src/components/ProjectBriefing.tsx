import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Cpu, Globe, Github, Layers, Zap } from "lucide-react";

interface ProjectBriefingProps {
  project: any;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectBriefing: React.FC<ProjectBriefingProps> = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-background/80 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-4xl glass-tactical border-primary/30 rounded-sm overflow-hidden flex flex-col md:flex-row"
          >
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-primary hover:bg-primary/10 rounded-full transition-colors z-20"
            >
              <X size={20} />
            </button>

            {/* Visual Side */}
            <div className="md:w-1/2 relative bg-black/40 border-r border-primary/10">
               <div className="absolute inset-0 cyber-grid opacity-10" />
               <div className="relative h-48 md:h-full p-8 flex flex-col justify-end">
                  <div className="space-y-4">
                    <span className="px-3 py-1 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-widest">Lvl {project.level} Complexity</span>
                    <h2 className="text-3xl md:text-5xl font-serif text-white neon-gold">{project.title}</h2>
                    <div className="flex gap-4">
                      {project.github && <a href={project.github} className="text-primary hover:text-white transition-colors"><Github size={20} /></a>}
                      {project.demo && <a href={project.demo} className="text-primary hover:text-white transition-colors"><Globe size={20} /></a>}
                    </div>
                  </div>
               </div>
            </div>

            {/* Info Side */}
            <div className="md:w-1/2 p-8 space-y-8 overflow-y-auto max-h-[60vh] md:max-h-none">
              <div className="space-y-4">
                <h3 className="text-[10px] uppercase tracking-[0.3em] text-primary/60 font-mono">Mission_Objective</h3>
                <p className="text-sm text-muted-foreground leading-relaxed italic">
                   {project.description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                   <h3 className="text-[10px] uppercase tracking-[0.3em] text-primary/60 font-mono flex items-center gap-2">
                     <Layers size={12} /> Tech_Stack
                   </h3>
                   <div className="flex flex-wrap gap-2">
                     {project.tags.map((tag: string) => (
                       <span key={tag} className="text-[9px] border border-primary/20 px-2 py-0.5 rounded-sm text-primary/80">{tag}</span>
                     ))}
                   </div>
                </div>
                <div className="space-y-2">
                   <h3 className="text-[10px] uppercase tracking-[0.3em] text-primary/60 font-mono flex items-center gap-2">
                     <Zap size={12} /> Status
                   </h3>
                   <span className="text-xs uppercase text-white font-bold tracking-widest flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                      {project.status}
                   </span>
                </div>
              </div>

              <div className="space-y-4 border-t border-primary/10 pt-6">
                <h3 className="text-[10px] uppercase tracking-[0.3em] text-primary/60 font-mono">Architecture_Roadmap</h3>
                <div className="space-y-3">
                   {project.roadmap.map((step: string, i: number) => (
                     <div key={i} className="flex gap-4 items-start">
                        <span className="text-primary/40 font-mono text-[10px]">0{i+1}</span>
                        <p className="text-[11px] text-muted-foreground">{step}</p>
                     </div>
                   ))}
                </div>
              </div>

              <button className="w-full py-4 bg-primary/10 border border-primary/40 text-primary text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-primary hover:text-primary-foreground transition-all duration-500">
                 Initialize Full Component Analysis
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectBriefing;
