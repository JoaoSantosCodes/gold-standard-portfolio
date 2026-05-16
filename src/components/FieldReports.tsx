import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Calendar, Clock, ShieldAlert, X, ChevronRight, Terminal, Share2 } from "lucide-react";
import TextDecode from "./TextDecode";

interface Report {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  classification: "UNCLASSIFIED" | "RESTRICTED" | "CONFIDENTIAL";
  excerpt: string;
  content: string[];
}

const reportsData: Report[] = [
  {
    id: "rep-01",
    title: "Deploying Zero-Downtime CI/CD Pipelines via GitHub Actions",
    category: "DevOps / Infrastructure",
    date: "14.MAI.2026",
    readTime: "5 MIN READ",
    classification: "RESTRICTED",
    excerpt: "Technical analysis on architecting resilient workflow automation without service interruptions in cloud infrastructure.",
    content: [
      "A entrega contínua (CD) tornou-se a espinha dorsal de infraestruturas resilientes. No entanto, o verdadeiro desafio reside em garantir deploys sem qualquer indisponibilidade (Zero-Downtime).",
      "Neste relatório, dissecamos a criação de pipelines no GitHub Actions integrados com estratégias de implantação Blue-Green e Canary, utilizando clusters gerenciados de containers.",
      "1. Estruturação da Pipeline: Isolamos os estágios de validação estática (linting), testes unitários e build em ambientes ephemeral e paralelos.",
      "2. Gestão de Secrets e Segurança: A integração nativa com cofres de chaves descentralizados evita o vazamento de tokens sensíveis nos runners.",
      "3. Execução do Deploy: Através de hooks e health-checks robustos, a pipeline valida o novo nó (Green) antes de redirecionar a carga de rede do nó antigo (Blue). Caso o healthcheck falhe, o rollback é instantâneo e automatizado."
    ]
  },
  {
    id: "rep-02",
    title: "High-Performance Observability: Zabbix + Grafana Stack Analysis",
    category: "Monitoring / Security",
    date: "02.MAI.2026",
    readTime: "7 MIN READ",
    classification: "UNCLASSIFIED",
    excerpt: "Exploring metrics aggregation, real-time trigger alarms, and visually strategic operational dashboards.",
    content: [
      "Observabilidade não é apenas acumular logs; é extrair inteligência acionável em tempo real. A união entre a capacidade profunda de coleta do Zabbix e o poder visual do Grafana cria uma central de comando invencível.",
      "Este dossiê detalha a configuração de templates avançados de SNMP e a criação de painéis executivos que prevêem picos de uso antes de virarem incidentes.",
      "A chave para uma infraestrutura nominal está no mapeamento preciso de gatilhos (triggers) baseados em desvios estatísticos de comportamento (baselines), e não apenas em valores estáticos fixos."
    ]
  },
  {
    id: "rep-03",
    title: "Modern Infrastructure as Code (IaC) with Terraform Blueprinting",
    category: "Architecture",
    date: "18.ABR.2026",
    readTime: "6 MIN READ",
    classification: "CONFIDENTIAL",
    excerpt: "Architecting modular, state-secure environments with reusable blueprints across multi-cloud networks.",
    content: [
      "Mapear infraestrutura manualmente no console de nuvem é um erro crítico. Terraform nos permite traduzir redes inteiras em blocos limpos, versionáveis e testáveis de código.",
      "Analisamos aqui as melhores práticas de gerenciamento de State Files remotos criptografados e a criação de módulos encapsulados para microserviços redundantes.",
      "Definir a arquitetura via IaC elimina falhas humanas de configuração e garante que os ambientes de Homologação e Produção sejam réplicas exatas, blindando o ecossistema corporativo."
    ]
  }
];

const FieldReports: React.FC = () => {
  const [selectedReport, setSelectedReport] = useState<Report | null>(null);

  return (
    <section id="intel" className="py-24 px-6 relative overflow-hidden bg-black/40">
      <div className="absolute inset-0 cyber-grid opacity-[0.02] pointer-events-none" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16"
        >
          <div className="space-y-4">
            <h3 className="text-[10px] uppercase tracking-[0.5em] text-primary/60 font-mono">
              <TextDecode text="Intelligence_Reports" />
            </h3>
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-gold-gradient">
              Field <span className="text-primary">Logs</span>
            </h2>
            <div className="w-20 h-1 bg-primary/20 rounded-full" />
          </div>
          <p className="text-xs text-muted-foreground font-mono max-w-sm border-l border-primary/20 pl-4 leading-relaxed">
             Dossiês técnicos, análises de infraestrutura e insights práticos sobre DevOps, automação e arquitetura de sistemas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reportsData.map((report, index) => (
            <motion.div
              key={report.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedReport(report)}
              className="glass-tactical p-6 rounded-sm border-primary/5 hover:border-primary/30 transition-all duration-500 cursor-pointer group relative flex flex-col justify-between h-96 overflow-hidden border-beam"
            >
              <div className="space-y-6">
                {/* Meta details */}
                <div className="flex justify-between items-center text-[9px] font-mono text-muted-foreground">
                  <span className="flex items-center gap-1.5 uppercase">
                    <Calendar size={10} className="text-primary" /> {report.date}
                  </span>
                  <span className={`px-2 py-0.5 border text-[8px] font-bold rounded-sm ${
                    report.classification === "CONFIDENTIAL" ? "border-red-500/40 text-red-400 bg-red-950/20" :
                    report.classification === "RESTRICTED" ? "border-amber-500/40 text-amber-400 bg-amber-950/20" :
                    "border-green-500/40 text-green-400 bg-green-950/20"
                  }`}>
                    {report.classification}
                  </span>
                </div>

                <div className="space-y-3">
                  <span className="text-[10px] text-primary/80 uppercase font-mono tracking-widest">{report.category}</span>
                  <h3 className="text-xl font-serif text-foreground group-hover:text-primary transition-colors leading-snug line-clamp-3">
                    {report.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                    {report.excerpt}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-4 border-t border-primary/10 flex justify-between items-center mt-6">
                <span className="text-[9px] font-mono text-muted-foreground flex items-center gap-1">
                  <Clock size={10} /> {report.readTime}
                </span>
                <span className="text-[9px] uppercase tracking-widest text-primary flex items-center gap-1 group-hover:translate-x-1 transition-transform duration-300 font-bold">
                  Decrypt Log <ChevronRight size={10} />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Report Reader Slide-Over */}
      <AnimatePresence>
        {selectedReport && (
          <div className="fixed inset-0 z-[100] flex justify-end p-4 md:p-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedReport(null)}
              className="absolute inset-0 bg-background/80 backdrop-blur-md"
            />
            
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full max-w-2xl bg-background/95 border-l border-primary/20 h-full p-8 md:p-12 flex flex-col justify-between overflow-y-auto z-10 glass-tactical"
            >
              <div>
                {/* Header controls */}
                <div className="flex justify-between items-center mb-12">
                  <span className="text-[9px] font-mono text-primary/60 flex items-center gap-1.5 uppercase">
                    <Terminal size={12} /> SECURE_DATA_ARCHIVE // {selectedReport.id}
                  </span>
                  <button 
                    onClick={() => setSelectedReport(null)}
                    className="p-2 border border-primary/20 rounded-full text-primary hover:bg-primary hover:text-black transition-colors"
                  >
                    <X size={16} />
                  </button>
                </div>

                {/* Classification and Meta */}
                <div className="flex items-center gap-4 mb-6">
                  <span className={`px-2 py-0.5 border text-[9px] font-bold rounded-sm ${
                    selectedReport.classification === "CONFIDENTIAL" ? "border-red-500/40 text-red-400 bg-red-950/20" :
                    selectedReport.classification === "RESTRICTED" ? "border-amber-500/40 text-amber-400 bg-amber-950/20" :
                    "border-green-500/40 text-green-400 bg-green-950/20"
                  }`}>
                    {selectedReport.classification}_REPORT
                  </span>
                  <span className="text-[10px] text-muted-foreground font-mono">{selectedReport.date}</span>
                  <span className="text-[10px] text-muted-foreground font-mono">•</span>
                  <span className="text-[10px] text-muted-foreground font-mono">{selectedReport.readTime}</span>
                </div>

                {/* Article Content */}
                <div className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-serif text-white leading-tight neon-gold">
                    {selectedReport.title}
                  </h2>
                  <div className="w-16 h-1 bg-primary/20 rounded-full" />
                  
                  <div className="space-y-6 text-sm text-muted-foreground leading-relaxed pt-6 font-mono text-justify">
                    {selectedReport.content.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action buttons at bottom */}
              <div className="pt-8 border-t border-primary/10 mt-12 flex gap-4">
                <button className="flex-1 py-4 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-[0.3em] rounded-sm hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
                  <Terminal size={14} /> Download Decrypted PDF
                </button>
                <button className="px-4 py-4 border border-primary/30 text-primary rounded-sm hover:bg-primary/10 transition-colors">
                  <Share2 size={14} />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default FieldReports;
