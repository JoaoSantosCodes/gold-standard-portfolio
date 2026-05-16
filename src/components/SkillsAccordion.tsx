import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Server, Monitor, Database, Activity, Shield, Cloud } from "lucide-react";
import TextDecode from "./TextDecode";


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
    id: "infra",
    title: "Infraestrutura & Automação",
    icon: Server,
    skills: [
      { name: "PowerShell & Python Scripting", level: 85 },
      { name: "Windows/Linux Server Admin", level: 80 },
      { name: "Infrastructure as Code (Terraform)", level: 45 },
      { name: "CI/CD Pipelines (GitHub Actions)", level: 60 },
      { name: "Virtualização (VMware/Hyper-V)", level: 75 },
    ],
  },
  {
    id: "monitoramento",
    title: "Monitoramento & Observabilidade",
    icon: Activity,
    skills: [
      { name: "CI/CD & Pipelines", level: 85 },
      { name: "Git & GitHub Actions", level: 90 },
      { name: "Docker & K8s", level: 75 },
      { name: "ELK Stack (Kibana)", level: 50 },
    ],
  },
  {
    id: "desenvolvimento",
    title: "Desenvolvimento Frontend",
    icon: Monitor,
    skills: [
      { name: "React & TypeScript", level: 70 },
      { name: "Next.js Framework", level: 65 },
      { name: "Tailwind CSS & Framer Motion", level: 80 },
      { name: "Shadcn/UI & Design Systems", level: 75 },
    ],
  },
  {
    id: "dados",
    title: "Banco de Dados & Storage",
    icon: Database,
    skills: [
      { name: "Oracle SQL & PL/SQL", level: 70 },
      { name: "PostgreSQL & Supabase", level: 60 },
      { name: "MongoDB", level: 40 },
    ],
  },
  {
    id: "seguranca",
    title: "Segurança & Compliance",
    icon: Shield,
    skills: [
      { name: "Políticas de Segurança (LGPD)", level: 65 },
      { name: "Backup & Disaster Recovery", level: 85 },
      { name: "Firewall (Fortigate/PFSense)", level: 55 },
      { name: "Access Control (AD/IAM)", level: 70 },
    ],
  },
];


const ProgressBar = ({ level, isVisible }: { level: number; isVisible: boolean }) => {
  const segments = 20;
  const activeSegments = Math.round((level / 100) * segments);

  return (
    <div className="flex gap-1 h-3 w-full">
      {Array.from({ length: segments }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ 
            opacity: isVisible ? (i < activeSegments ? 1 : 0.1) : 0,
            scaleY: isVisible ? 1 : 0,
            backgroundColor: i < activeSegments ? "hsl(43, 45%, 55%)" : "rgba(255, 255, 255, 0.1)"
          }}
          transition={{ 
            duration: 0.3, 
            delay: i * 0.02,
            backgroundColor: { duration: 0.5, delay: i * 0.02 }
          }}
          className={`flex-1 rounded-[1px] ${i < activeSegments ? "gold-glow shadow-[0_0_8px_hsla(43,45%,55%,0.4)]" : ""}`}
        />
      ))}
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
            <TextDecode text="Technical_Capabilities_Matrix" />
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
