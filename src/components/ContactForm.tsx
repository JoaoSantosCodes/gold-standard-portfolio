import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MessageSquare, Phone, Mail, MapPin } from "lucide-react";
import TextDecode from "./TextDecode";


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Secure input sanitization (prevent script injections or HTML exploits)
    const sanitize = (val: string) => val.replace(/<[^>]*>/g, "").trim();
    
    const cleanName = sanitize(formData.name);
    const cleanEmail = sanitize(formData.email);
    const cleanMessage = sanitize(formData.message);

    // Redirect to WhatsApp with sanitized message parameters
    const message = encodeURIComponent(
      `Olá João! Meu nome é ${cleanName}.\n\n${cleanMessage}\n\nE-mail: ${cleanEmail}`
    );
    window.open(`https://wa.me/5511999999999?text=${message}`, "_blank");
  };


  return (
    <section id="contato" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-[0.02] pointer-events-none" />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-primary/20 rounded-full bg-primary/5 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-[10px] uppercase tracking-widest text-primary/80 font-mono">
              <TextDecode text="Secure_Connection_Active" />
            </span>

          </div>
          
          <h2 className="text-4xl sm:text-5xl font-serif font-medium text-gold-gradient mb-6">
            Estabelecer Contato
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto italic font-serif">
            "A arquitetura de uma conversa é o primeiro passo para a inovação."
          </p>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="space-y-4">
              <a 
                href="mailto:joaocsantosoficial@gmail.com"
                className="flex items-center gap-4 p-4 glass-tactical card-hover group border-beam"
              >
                <div className="p-3 rounded-sm bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-primary/60 mb-0.5 font-mono">Channel_01: E-mail</p>
                  <p className="text-sm text-foreground group-hover:text-primary transition-colors">joaocsantosoficial@gmail.com</p>
                </div>
              </a>

              <a 
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 glass-tactical card-hover group border-beam"
              >
                <div className="p-3 rounded-sm bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-primary/60 mb-0.5 font-mono">Channel_02: WhatsApp</p>
                  <p className="text-sm text-foreground group-hover:text-primary transition-colors">+55 (11) 99999-9999</p>
                </div>
              </a>


              <div className="flex items-center gap-4 p-4 glass-tactical">
                <div className="p-3 rounded-sm bg-primary/10 text-primary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-primary/60 mb-0.5 font-mono">Coordinates</p>
                  <p className="text-sm text-foreground">São Paulo, SP — Brasil</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-[10px] uppercase tracking-widest text-primary/60 font-mono flex items-center gap-2">
                    <div className="w-1 h-1 bg-primary rounded-full" /> Input_Origin
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/40 border border-primary/20 rounded-sm text-foreground placeholder:text-muted-foreground/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all duration-300"
                    placeholder="Identificação"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="whatsapp" className="text-[10px] uppercase tracking-widest text-primary/60 font-mono flex items-center gap-2">
                    <div className="w-1 h-1 bg-primary rounded-full" /> Input_Async
                  </label>
                  <input
                    type="tel"
                    id="whatsapp"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black/40 border border-primary/20 rounded-sm text-foreground placeholder:text-muted-foreground/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all duration-300"
                    placeholder="WhatsApp/Mobile"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-[10px] uppercase tracking-widest text-primary/60 font-mono flex items-center gap-2">
                  <div className="w-1 h-1 bg-primary rounded-full" /> Input_Return
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/40 border border-primary/20 rounded-sm text-foreground placeholder:text-muted-foreground/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all duration-300"
                  placeholder="seu@servidor.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-[10px] uppercase tracking-widest text-primary/60 font-mono flex items-center gap-2">
                  <div className="w-1 h-1 bg-primary rounded-full" /> Input_Data
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-black/40 border border-primary/20 rounded-sm text-foreground placeholder:text-muted-foreground/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all duration-300 resize-none"
                  placeholder="Descreva a missão ou oportunidade..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-primary text-primary-foreground font-bold uppercase tracking-widest text-xs rounded-sm hover:bg-primary/90 focus:outline-none transition-all duration-300 group neon-gold"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Transmitir Dados</span>
                <Send className="w-4 h-4 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>

  );
};

export default ContactForm;
