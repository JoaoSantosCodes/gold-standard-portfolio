import React from "react";
import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Award, CheckCircle, ExternalLink, School } from "lucide-react";
import TextDecode from "./TextDecode";

const education = {
  degrees: [
    {
      title: "Análise e Desenvolvimento de Sistemas",
      institution: "Universidade Estácio",
      period: "2023 — 2025",
      status: "Em Andamento",
      details: "Foco em arquitetura de software e desenvolvimento full-stack."
    },
    {
      title: "Gestão de Tecnologia da Informação",
      institution: "Universidade Estácio",
      period: "2010 — 2013",
      status: "Concluído",
      details: "Formação em gestão estratégica de TI, governança e processos de negócio."
    }
  ],
  postGrad: [
    {
      title: "Pós-Graduação em Arquitetura de Software",
      institution: "Faculdade XP / IGTI",
      period: "Previsto 2025",
      status: "Planejado",
      details: "Especialização em sistemas distribuídos e microserviços."
    }
  ],
  certifications: [
    { title: "Zabbix Certified Specialist", issuer: "Zabbix SIA", year: "2024" },
    { title: "Linux Administrator (LPIC-1)", issuer: "Linux Professional Institute", year: "2024" },
    { title: "Shell Scripting & SysAdmin", issuer: "Udemy Certified", year: "2023" },
    { title: "GitHub Actions & CI/CD", issuer: "DevOps Academy", year: "2024" },
    { title: "Docker & Kubernetes (K8s)", issuer: "Udemy Professional", year: "2024" },
    { title: "Git & Version Control", issuer: "GitHub Lab", year: "2023" },
    { title: "Terraform Associate (IaC)", issuer: "HashiCorp", year: "2024" },
    { title: "ITIL v4 Foundation", issuer: "Axelos", year: "2022" },
    { title: "Azure Fundamentals (AZ-900)", issuer: "Microsoft", year: "2023" },
    { title: "AWS Cloud Practitioner", issuer: "Amazon", year: "2023" },
  ]
};



const AcademicLab = () => {
  return (
    <section id="academia" className="py-24 px-6 relative overflow-hidden bg-black/20">
      <div className="absolute inset-0 cyber-grid opacity-[0.03] pointer-events-none" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-[10px] uppercase tracking-[0.5em] text-primary/60 font-mono mb-4">
            <TextDecode text="Academic_Records_v2.1" />
          </h3>
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-gold-gradient">
            Academy <span className="text-primary">&</span> Intel
          </h2>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Column 1: Degrees */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="text-primary" size={24} />
              <h3 className="text-xl font-serif">Faculdade</h3>
            </div>
            {education.degrees.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="p-6 glass-tactical border-primary/10 relative group"
              >
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10">
                  <School size={40} />
                </div>
                <span className="text-[9px] uppercase tracking-widest text-primary/60 font-mono">{item.period}</span>
                <h4 className="text-lg font-serif mt-2 mb-1 group-hover:text-primary transition-colors">{item.title}</h4>
                <p className="text-sm text-primary/80 font-medium">{item.institution}</p>
                <p className="text-xs text-muted-foreground mt-4 leading-relaxed">{item.details}</p>
                <div className="mt-4 flex items-center gap-2 text-[9px] uppercase tracking-tighter text-green-500 font-bold">
                  <CheckCircle size={10} /> {item.status}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Column 2: Post-Grad */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-8">
              <BookOpen className="text-primary" size={24} />
              <h3 className="text-xl font-serif">Pós-graduação</h3>
            </div>
            {education.postGrad.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="p-6 glass-tactical border-primary/10 relative group border-dashed"
              >
                <span className="text-[9px] uppercase tracking-widest text-primary/60 font-mono">{item.period}</span>
                <h4 className="text-lg font-serif mt-2 mb-1 group-hover:text-primary transition-colors">{item.title}</h4>
                <p className="text-sm text-primary/80 font-medium">{item.institution}</p>
                <p className="text-xs text-muted-foreground mt-4 leading-relaxed">{item.details}</p>
                <div className="mt-4 flex items-center gap-2 text-[9px] uppercase tracking-tighter text-amber-500 font-bold">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" /> {item.status}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Column 3: Courses & Certs */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-8">
              <Award className="text-primary" size={24} />
              <h3 className="text-xl font-serif">Certificações</h3>
            </div>
            <div className="grid gap-3">
              {education.certifications.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center justify-between p-4 glass-tactical border-primary/5 hover:border-primary/30 transition-all group"
                >
                  <div>
                    <h4 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{item.title}</h4>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-widest">{item.issuer} • {item.year}</p>
                  </div>
                  <ExternalLink size={14} className="text-primary/40 group-hover:text-primary transition-colors cursor-pointer" />
                </motion.div>
              ))}
            </div>
            <button className="w-full py-4 border border-dashed border-primary/20 text-[10px] uppercase tracking-[0.3em] text-primary/60 hover:bg-primary/5 transition-all">
              Load_More_Intelligence
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicLab;
