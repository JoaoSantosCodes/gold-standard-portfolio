import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Github, Linkedin, Mail, Twitter, Globe, Search, BookOpen, Clock, Calendar, Shield, Share2, X, Terminal, ChevronRight } from "lucide-react";
import TacticalCursor from "@/components/TacticalCursor";
import BackgroundParticles from "@/components/BackgroundParticles";
import TextDecode from "@/components/TextDecode";

interface BlogPost {
  id: string;
  title: string;
  category: "POSTAGEM" | "ANÁLISE" | "RECOMENDAÇÕES";
  date: string;
  readTime: string;
  classification: "UNCLASSIFIED" | "RESTRICTED" | "CONFIDENTIAL";
  excerpt: string;
  content: string[];
}

const blogPosts: BlogPost[] = [
  {
    id: "blog-01",
    title: "Zero-Downtime Deployments with GitHub Actions & Blue-Green Deployments",
    category: "ANÁLISE",
    date: "14.MAI.2026",
    readTime: "5 MIN READ",
    classification: "RESTRICTED",
    excerpt: "Dossiê tático sobre como criar uma pipeline robusta no GitHub Actions para realizar deploys sem queda de serviço.",
    content: [
      "No cenário tecnológico moderno, qualquer segundo de inatividade pode custar caro. O deploy Blue-Green minimiza esse risco direcionando o tráfego do usuário entre dois ambientes idênticos rodando versões diferentes da sua aplicação.",
      "Com o GitHub Actions, podemos automatizar este processo integrando health-checks rigorosos que validam o novo ambiente (Green) antes de desligar o tráfego do antigo (Blue).",
      "Caso ocorra qualquer anomalia nos testes automatizados pós-deploy, a pipeline reverte a rota de rede instantaneamente, garantindo estabilidade total aos utilizadores finais."
    ]
  },
  {
    id: "blog-02",
    title: "A Importância da Governança e Melhores Práticas em Projetos DevOps",
    category: "POSTAGEM",
    date: "10.MAI.2026",
    readTime: "4 MIN READ",
    classification: "UNCLASSIFIED",
    excerpt: "Como alinhar a gestão de TI com a velocidade das entregas contínuas em ambientes escaláveis.",
    content: [
      "DevOps não é apenas sobre ferramentas automáticas de integração; é principalmente uma mudança cultural e estratégica nas organizações.",
      "Unir uma governança forte à velocidade do ciclo de vida do desenvolvimento permite que empresas entreguem valor sem comprometer a segurança da informação ou a conformidade com frameworks de mercado como ITIL."
    ]
  },
  {
    id: "blog-03",
    title: "Minhas Recomendações de Livros e Ferramentas para se tornar um Arquiteto de Software",
    category: "RECOMENDAÇÕES",
    date: "28.ABR.2026",
    readTime: "6 MIN READ",
    classification: "CONFIDENTIAL",
    excerpt: "Minha curadoria de frameworks de infraestrutura, metodologias de design de sistemas e leituras essenciais.",
    content: [
      "1. Arquitetura de Software Prática: Recomendo a leitura obrigatória de 'Designing Data-Intensive Applications' de Martin Kleppmann.",
      "2. Infrastructure as Code (IaC): Domine o Terraform e adote a infraestrutura declarativa para provisionamento idempotente em nuvem.",
      "3. Padrões de Microserviços: Entenda a fundo mensageria assíncrona (RabbitMQ, Kafka) e estratégias de isolamento de bases de dados."
    ]
  }
];

const Blog = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState<string>("ALL");
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const filteredPosts = blogPosts.filter(
    (post) => filter === "ALL" || post.category === filter
  );

  return (
    <div className="min-h-screen bg-background relative overflow-hidden text-foreground">
      <TacticalCursor />
      <BackgroundParticles />
      <div className="fixed inset-0 cyber-grid pointer-events-none opacity-[0.03]" />
      <div className="noise-overlay" />

      {/* Header Bar */}
      <header className="relative z-10 border-b border-primary/10 bg-background/50 backdrop-blur-md px-6 py-4">
        <div className="container mx-auto max-w-6xl flex justify-between items-center">
          <button 
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-xs uppercase tracking-widest text-primary hover:text-white transition-colors font-mono"
          >
            <ArrowLeft size={16} /> Return_To_Command_Center
          </button>
          <span className="text-[10px] font-mono text-muted-foreground uppercase">
            System_Node: Intel_Archive_v1.0
          </span>
        </div>
      </header>

      <main className="relative z-10 container mx-auto max-w-6xl px-6 py-16 flex flex-col lg:flex-row gap-12">
        {/* Left Side: Articles */}
        <div className="flex-1 space-y-12">
          {/* Header Title */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-serif text-gold-gradient">
              <TextDecode text="Tactical Intel" />
            </h1>
            <div className="w-20 h-1 bg-primary/20 rounded-full" />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 border-b border-primary/10 pb-6">
            {["ALL", "POSTAGEM", "ANÁLISE", "RECOMENDAÇÕES"].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 text-[10px] font-mono uppercase tracking-widest rounded-sm border transition-all duration-300 ${
                  filter === cat
                    ? "border-primary bg-primary/10 text-primary shadow-[0_0_10px_rgba(212,175,55,0.2)]"
                    : "border-primary/20 hover:border-primary/50 text-muted-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid list of articles */}
          <div className="grid gap-6">
            {filteredPosts.map((post) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                onClick={() => setSelectedPost(post)}
                className="glass-tactical p-6 rounded-sm border-primary/5 hover:border-primary/30 transition-all duration-500 cursor-pointer group border-beam flex flex-col md:flex-row justify-between gap-6"
              >
                <div className="space-y-4 flex-1">
                  <div className="flex justify-between items-center text-[9px] font-mono text-muted-foreground">
                    <span className="text-primary uppercase">{post.category}</span>
                    <span className="flex items-center gap-1"><Calendar size={10} /> {post.date}</span>
                  </div>
                  
                  <h3 className="text-2xl font-serif text-foreground group-hover:text-primary transition-colors leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="flex gap-4 pt-2 text-[9px] font-mono text-muted-foreground">
                    <span className="flex items-center gap-1"><Clock size={10} /> {post.readTime}</span>
                    <span>Classification: <span className="text-primary font-bold">{post.classification}</span></span>
                  </div>
                </div>

                <div className="flex items-end justify-end shrink-0">
                  <button className="p-3 border border-primary/20 rounded-sm text-primary hover:bg-primary hover:text-black transition-all group-hover:translate-x-1 duration-300">
                    <ChevronRight size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Side: Social Matrix / Network Info */}
        <aside className="w-full lg:w-80 space-y-8">
          <div className="glass-tactical p-6 rounded-sm border-primary/10 space-y-6">
            <h3 className="text-sm font-serif border-b border-primary/10 pb-3 flex items-center gap-2">
              <Shield size={16} className="text-primary" /> Active_Social_Matrix
            </h3>

            {/* Social Grid */}
            <div className="grid gap-3">
              {[
                { name: "GitHub", icon: Github, href: "https://github.com/JoaoSantosCodes", color: "hover:bg-zinc-800" },
                { name: "LinkedIn", icon: Linkedin, href: "#", color: "hover:bg-blue-900/30" },
                { name: "Twitter / X", icon: Twitter, href: "#", color: "hover:bg-sky-950/30" },
                { name: "Email Secure", icon: Mail, href: "#", color: "hover:bg-primary/20" },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 p-3 border border-primary/5 rounded-sm hover:border-primary/40 transition-all font-mono text-xs ${social.color}`}
                >
                  <social.icon size={16} className="text-primary" />
                  <span>{social.name}</span>
                  <span className="ml-auto text-[9px] text-green-500 uppercase font-bold tracking-tighter">ONLINE</span>
                </a>
              ))}
            </div>
          </div>

          {/* Telemetry panel */}
          <div className="glass-tactical p-6 rounded-sm border-primary/10 space-y-4 font-mono text-[9px] text-muted-foreground">
            <h3 className="text-[10px] text-primary/80 uppercase font-serif tracking-widest border-b border-primary/10 pb-2">Network_Telemetry</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Core Node:</span>
                <span className="text-white">Active (Port 8091)</span>
              </div>
              <div className="flex justify-between">
                <span>Signal Strength:</span>
                <span className="text-green-400">99.8%</span>
              </div>
              <div className="flex justify-between">
                <span>Encryption Algorithm:</span>
                <span className="text-primary">AES_256_GCM</span>
              </div>
            </div>
          </div>
        </aside>
      </main>

      {/* Slide-over Post Reader */}
      <AnimatePresence>
        {selectedPost && (
          <div className="fixed inset-0 z-[100] flex justify-end p-4 md:p-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPost(null)}
              className="absolute inset-0 bg-background/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full max-w-2xl bg-background/95 border-l border-primary/20 h-full p-8 md:p-12 flex flex-col justify-between overflow-y-auto z-10 glass-tactical"
            >
              <div>
                <div className="flex justify-between items-center mb-12">
                  <span className="text-[9px] font-mono text-primary/60 flex items-center gap-1.5 uppercase">
                    <Terminal size={12} /> SECURE_DATA_ARCHIVE // {selectedPost.id}
                  </span>
                  <button 
                    onClick={() => setSelectedPost(null)}
                    className="p-2 border border-primary/20 rounded-full text-primary hover:bg-primary hover:text-black transition-colors"
                  >
                    <X size={16} />
                  </button>
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <span className="px-2 py-0.5 border border-primary/20 text-[9px] font-bold text-primary rounded-sm uppercase bg-primary/5">
                    {selectedPost.category}
                  </span>
                  <span className="text-[10px] text-muted-foreground font-mono">{selectedPost.date}</span>
                  <span className="text-[10px] text-muted-foreground font-mono">•</span>
                  <span className="text-[10px] text-muted-foreground font-mono">{selectedPost.readTime}</span>
                </div>

                <div className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-serif text-white leading-tight neon-gold">
                    {selectedPost.title}
                  </h2>
                  <div className="w-16 h-1 bg-primary/20 rounded-full" />
                  
                  <div className="space-y-6 text-sm text-muted-foreground leading-relaxed pt-6 font-mono text-justify">
                    {selectedPost.content.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>

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
    </div>
  );
};

export default Blog;
