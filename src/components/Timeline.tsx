import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Briefcase, GraduationCap, Server, TrendingUp, Target } from "lucide-react";

interface TimelineItem {
  id: string;
  type: "work" | "education";
  title: string;
  company: string;
  period: string;
  description: string;
  highlights?: string[];
}

const timelineData: TimelineItem[] = [
  // ... (keeping existing data)
  {
    id: "drogaria",
    type: "work",
    title: "Analista de Infraestrutura de TI",
    company: "Drogaria São Paulo S.A.",
    period: "2024 — Atual",
    description: "Gestão de infraestrutura crítica e automação de processos.",
    highlights: [
      "Automação de scripts (PowerShell, Batch)",
      "Gerenciamento de servidores Windows/Linux",
      "Monitoramento com Zabbix, Grafana e Datadog",
      "Gestão de ambientes virtualizados",
    ],
  },
  {
    id: "fujitsu",
    type: "work",
    title: "Analista de Suporte Jr → Field Service & Projetos",
    company: "Fujitsu do Brasil",
    period: "2016 — 2023",
    description: "Evolução de Agente de Service Desk a Analista de Suporte com foco em Field Service e Projetos.",
    highlights: [
      "Service Desk N1/N2 e suporte presencial",
      "Gestão de incidentes via Service Now e ISM",
      "Projetos de rollout e migração",
      "Suporte a ERP SAP e aplicações Citrix",
    ],
  },
  {
    id: "zatix",
    type: "work",
    title: "Analista de Dados Jr",
    company: "Zatix Tecnologia",
    period: "2014 — 2016",
    description: "Análise de dados e suporte a sistemas de monitoramento veicular.",
    highlights: [
      "Extração e análise de dados Oracle",
      "Relatórios gerenciais e dashboards",
      "Suporte técnico a clientes corporativos",
    ],
  },
  {
    id: "estacio",
    type: "education",
    title: "Análise e Desenvolvimento de Sistemas",
    company: "Universidade Estácio",
    period: "2023 — 2025",
    description: "Graduação em tecnologia com foco em desenvolvimento de sistemas e arquitetura de software.",
  },
  {
    id: "senac",
    type: "education",
    title: "Técnico em Redes de Computadores",
    company: "Senac São Paulo",
    period: "Concluído",
    description: "Formação técnica em infraestrutura de redes, protocolos e segurança.",
  },
  {
    id: "estacio-gestao",
    type: "education",
    title: "Gestão de Tecnologia da Informação",
    company: "Universidade Estácio",
    period: "2010 — 2013",
    description: "Formação focada em gestão de serviços, governança e infraestrutura de TI.",
  },
];


const Timeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="jornada" className="py-24 px-6 bg-card/10 relative" ref={containerRef}>
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Trajetória
          </p>
          <h2 className="text-4xl sm:text-5xl font-serif font-medium text-gold-gradient mb-6">
            Experiência Profissional
          </h2>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Central line background */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-white/5 lg:-translate-x-1/2" />
          
          {/* Central line progress */}
          <motion.div 
            className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent lg:-translate-x-1/2 origin-top z-10"
            style={{ scaleY }}
          />

          <div className="space-y-8 lg:space-y-12">
            {timelineData.map((item, index) => {
              const isLeft = index % 2 === 0;
              const Icon = item.type === "work" ? (item.id === "drogaria" ? Server : Briefcase) : GraduationCap;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`relative flex items-start gap-8 ${
                    isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 lg:left-1/2 -translate-x-1/2 z-20">
                    <motion.div 
                      whileInView={{ scale: [0, 1.2, 1] }}
                      className="w-4 h-4 rounded-full bg-background border-2 border-primary gold-glow"
                    >
                      <div className="absolute inset-1 rounded-full bg-primary animate-pulse" />
                    </motion.div>
                  </div>

                  {/* Content card */}
                  <div
                    className={`ml-16 lg:ml-0 lg:w-[calc(50%-2rem)] ${
                      isLeft ? "lg:pr-12 lg:text-right" : "lg:pl-12 lg:text-left"
                    }`}
                  >
                    <div className="p-6 glass-tactical rounded-sm card-hover relative group">
                      <div className="absolute inset-0 cyber-grid opacity-[0.02] pointer-events-none" />
                      
                      {/* Header */}
                      <div className={`flex items-start gap-4 mb-4 ${isLeft ? "lg:flex-row-reverse" : ""}`}>
                        <div className="p-3 rounded-sm bg-primary/10 text-primary shrink-0 group-hover:scale-110 transition-transform">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className={`flex-1 ${isLeft ? "lg:text-right" : ""}`}>
                          <span className="inline-block px-3 py-1 text-[10px] uppercase tracking-wider text-primary border border-primary/20 bg-primary/5 rounded-sm mb-2 neon-gold">
                            {item.period}
                          </span>
                          <h3 className="text-xl font-serif text-foreground leading-tight group-hover:text-primary transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-sm text-primary/80 mt-1 font-medium italic">
                            {item.company}
                          </p>
                        </div>
                      </div>
                      
                      {/* Description */}
                      <p className={`text-sm text-muted-foreground mb-4 leading-relaxed ${isLeft ? "lg:text-right" : ""}`}>
                        {item.description}
                      </p>

                      {/* Highlights */}
                      {item.highlights && (
                        <div className={`flex flex-wrap gap-2 ${isLeft ? "lg:justify-end" : ""}`}>
                          {item.highlights.map((highlight, i) => (
                            <span 
                              key={i} 
                              className="text-[9px] uppercase tracking-tighter text-primary/70 border border-primary/10 px-2 py-1 bg-white/5 rounded-sm flex items-center gap-1"
                            >
                              <Target className="w-2 h-2" />
                              {highlight}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden lg:block lg:w-[calc(50%-2rem)]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
