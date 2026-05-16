import React, { useState } from "react";
import { motion } from "framer-motion";
import { Folder, Database, Shield, Zap, Search, LayoutGrid } from "lucide-react";
import ProjectBriefing from "./ProjectBriefing";

const projects = [
  {
    id: "mediashelf",
    title: "MediaShelf Creative OS",
    description: "Plataforma centralizada de gestão criativa com arquitetura modular e integração multicloud.",
    level: 4,
    status: "BETA_V2",
    tags: ["Next.js", "Supabase", "Tailwind", "Radix"],
    roadmap: ["MVP: Gestão de arquivos básica", "V1: Integração com OAuth e Storage", "V2: Dashboard modular e Colaboração", "V3: Engine de IA integrada"],
    github: "#",
    demo: "#"
  },
  {
    id: "obsidian-brain",
    title: "Digital Brain Architecture",
    description: "Framework de automação para Obsidian focado em gestão de infraestrutura de TI e worldbuilding.",
    level: 5,
    status: "PRODUCTION",
    tags: ["Obsidian", "TypeScript", "Automation", "Markdown"],
    roadmap: ["MVP: Template de notas", "V1: Automação de logs via API", "V2: Mapeamento de infra em grafos", "V3: Sincronização em tempo real"],
    github: "#",
    demo: "#"
  },
  {
    id: "tactical-ui",
    title: "Tactical HUD Component Library",
    description: "Biblioteca de componentes React inspirada em interfaces de comando tático e ficção científica.",
    level: 3,
    status: "MVP",
    tags: ["React", "Framer Motion", "Tailwind", "Canvas"],
    roadmap: ["MVP: Componentes básicos de HUD", "V1: Sistema de cursor interativo", "V2: Modais de briefing", "V3: Exportação de NPM"],
    github: "#",
    demo: "#"
  },
  {
    id: "infra-monitor",
    title: "Project Zero Monitor",
    description: "Dashboard de monitoramento leve para ambientes de borda e dispositivos IoT.",
    level: 2,
    status: "ALPHA",
    tags: ["Python", "SQLite", "Chart.js", "MQTT"],
    roadmap: ["MVP: Coleta de dados via SNMP", "V1: Visualização em tempo real", "V2: Alertas via Telegram", "V3: Multi-tenant dashboard"],
    github: "#",
    demo: "#"
  }
];

const ComplexityGauge = ({ level }: { level: number }) => {
  return (
    <div className="flex gap-0.5 mt-2">
      {[1, 2, 3, 4, 5].map((i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0.1 }}
          whileInView={{ opacity: i <= level ? 1 : 0.1 }}
          className={`h-1 flex-1 rounded-full ${i <= level ? "bg-primary" : "bg-white/10"}`}
        />
      ))}
    </div>
  );
};

const ProjectLab = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <section id="project-lab" className="py-24 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16"
        >
          <div className="space-y-4">
            <h3 className="text-[10px] uppercase tracking-[0.5em] text-primary/60 font-mono">Module_Archive</h3>
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-gold-gradient">
              Project <span className="text-primary">Lab</span>
            </h2>
            <div className="w-20 h-1 bg-primary/20 rounded-full" />
          </div>
          <div className="flex gap-4 glass-tactical p-2 rounded-sm border-primary/10">
             <button className="p-2 bg-primary/10 text-primary rounded-sm"><LayoutGrid size={18} /></button>
             <button className="p-2 text-muted-foreground hover:text-primary transition-colors"><Search size={18} /></button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedProject(project)}
              className="glass-tactical p-6 rounded-sm border-primary/5 hover:border-primary/40 transition-all duration-500 cursor-pointer group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                 <Folder size={40} />
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                   <span className="text-[9px] uppercase tracking-widest text-primary/60 font-mono">{project.status}</span>
                   <span className="text-[9px] uppercase tracking-widest text-white/40 font-mono">0{index + 1}</span>
                </div>
                
                <h3 className="text-xl font-serif text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                   {project.description}
                </p>

                <div className="pt-4 border-t border-primary/10">
                   <div className="flex justify-between items-center mb-1">
                      <span className="text-[9px] uppercase tracking-widest text-primary/60 font-mono">Complexity_Lvl</span>
                      <span className="text-[9px] text-primary font-bold">0{project.level}/05</span>
                   </div>
                   <ComplexityGauge level={project.level} />
                </div>

                <div className="flex flex-wrap gap-1 pt-2">
                   {project.tags.slice(0, 3).map(tag => (
                     <span key={tag} className="text-[8px] bg-white/5 px-1.5 py-0.5 rounded-sm border border-white/5">{tag}</span>
                   ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ProjectBriefing 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};

export default ProjectLab;
