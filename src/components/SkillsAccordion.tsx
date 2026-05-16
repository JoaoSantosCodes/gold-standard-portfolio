import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Server, Monitor, Database, Activity, Shield, Cloud } from "lucide-react";

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  id: string;
  title: string;
  icon: React.ElementType;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    id: "suporte",
    title: "Suporte Técnico",
    icon: Server,
    skills: [
      { name: "Service Now", level: 75 },
      { name: "ISM", level: 60 },
      { name: "Active Directory", level: 30 },
      { name: "PowerShell & Batch", level: 65 },
      { name: "ERP SAP", level: 50 },
      { name: "Virtualização de Servidores", level: 70 },
    ],
  },
  {
    id: "sistemas",
    title: "Sistemas Operacionais",
    icon: Monitor,
    skills: [
      { name: "Windows 7, 10, 11", level: 90 },
      { name: "Linux (Ubuntu/Mint)", level: 30 },
      { name: "macOS", level: 10 },
    ],
  },
  {
    id: "banco",
    title: "Banco de Dados",
    icon: Database,
    skills: [
      { name: "Oracle", level: 75 },
      { name: "MySQL", level: 40 },
      { name: "MongoDB", level: 20 },
    ],
  },
  {
    id: "monitoramento",
    title: "Monitoramento & Observabilidade",
    icon: Activity,
    skills: [
      { name: "Zabbix", level: 70 },
      { name: "Grafana", level: 65 },
      { name: "Datadog", level: 60 },
      { name: "Kibana / ELK Stack", level: 45 },
    ],
  },
  {
    id: "infra",
    title: "Infraestrutura & Cloud",
    icon: Cloud,
    skills: [
      { name: "Linux Server Administration", level: 55 },
      { name: "VMware / Hyper-V", level: 65 },
      { name: "Azure Fundamentals", level: 35 },
      { name: "Docker Basics", level: 30 },
    ],
  },
  {
    id: "seguranca",
    title: "Segurança da Informação",
    icon: Shield,
    skills: [
      { name: "Políticas de Segurança", level: 60 },
      { name: "Backup & Disaster Recovery", level: 70 },
      { name: "Firewall & VPN", level: 50 },
      { name: "LGPD & Compliance", level: 45 },
    ],
  },
];

const ProgressBar = ({ level, isVisible }: { level: number; isVisible: boolean }) => {
  return (
    <div className="relative h-2 bg-muted/50 rounded-full overflow-hidden">
      <motion.div
        className="absolute inset-y-0 left-0 progress-gold rounded-full"
        initial={{ width: 0 }}
        animate={{ width: isVisible ? `${level}%` : 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
      />
      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
        initial={{ x: "-100%" }}
        animate={{ x: isVisible ? "100%" : "-100%" }}
        transition={{ duration: 1.2, delay: 0.5, ease: "easeInOut" }}
      />
    </div>
  );
};

const SkillItem = ({ skill, isVisible, index }: { skill: Skill; isVisible: boolean; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: index * 0.08 }}
      className="space-y-2"
    >
      <div className="flex justify-between items-center text-sm">
        <span className="text-foreground/90">{skill.name}</span>
        <span className="text-primary font-semibold tabular-nums">{skill.level}%</span>
      </div>
      <ProgressBar level={skill.level} isVisible={isVisible} />
    </motion.div>
  );
};

const SkillsAccordion = () => {
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const toggleCategory = (id: string) => {
    setOpenCategory(openCategory === id ? null : id);
  };

  return (
    <section id="experiencia" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Competências Técnicas
          </p>
          <h2 className="text-4xl sm:text-5xl font-serif font-medium text-gold-gradient mb-6">
            Minha Experiência
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Clique em cada categoria para explorar minhas habilidades e níveis de proficiência.
          </p>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {skillCategories.map((category, categoryIndex) => {
            const isOpen = openCategory === category.id;
            const Icon = category.icon;

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: categoryIndex * 0.08 }}
                viewport={{ once: true }}
                className={`border border-border rounded-sm overflow-hidden bg-card/50 backdrop-blur-sm transition-all duration-300 ${
                  isOpen ? "md:col-span-2 gold-glow" : "card-hover"
                }`}
              >
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-muted/20 transition-colors duration-300"
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-sm transition-colors duration-300 ${
                      isOpen ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-base font-serif text-foreground">
                      {category.title}
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-primary"
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-2 space-y-4 border-t border-border/50">
                        {category.skills.map((skill, index) => (
                          <SkillItem
                            key={skill.name}
                            skill={skill}
                            isVisible={isOpen}
                            index={index}
                          />
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsAccordion;
