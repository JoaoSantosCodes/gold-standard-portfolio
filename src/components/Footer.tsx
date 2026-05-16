import { Github, Linkedin, Mail, Heart, Instagram, Youtube } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com/in/joaocsantosoficial", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/joaocsantosoficial", label: "GitHub" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Mail, href: "mailto:joaocsantosoficial@gmail.com", label: "Email" },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-border bg-card/30">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center space-y-8"
        >
          {/* Logo */}
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="text-2xl font-serif text-gold-gradient font-semibold hover:opacity-80 transition-opacity"
          >
            Jonh C.
          </a>

          {/* Tagline */}
          <p className="text-sm text-muted-foreground text-center max-w-md">
            Arquiteto de Sistemas & Especialista em Infraestrutura de TI
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={link.label}
                className="group p-3 rounded-full border border-border hover:border-primary hover:bg-primary/5 transition-all duration-300"
              >
                <link.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full max-w-xs h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          {/* Copyright */}
          <div className="text-center space-y-2">
            <p className="text-xs text-muted-foreground flex items-center justify-center gap-1.5">
              Desenvolvido com <Heart className="w-3 h-3 text-primary fill-primary" /> por João Carlos Santos
            </p>
            <p className="text-[10px] text-muted-foreground/60">
              © {currentYear} Jonh C. — Todos os direitos reservados.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
