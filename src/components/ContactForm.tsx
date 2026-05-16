import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MessageSquare, Phone, Mail, MapPin } from "lucide-react";

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
    // Redirect to WhatsApp with message
    const message = encodeURIComponent(
      `Olá João! Meu nome é ${formData.name}.\n\n${formData.message}\n\nE-mail: ${formData.email}`
    );
    window.open(`https://wa.me/5511999999999?text=${message}`, "_blank");
  };

  return (
    <section id="contato" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Vamos Conversar
          </p>
          <h2 className="text-4xl sm:text-5xl font-serif font-medium text-gold-gradient mb-6">
            Entre em Contato
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Interessado em colaborar ou discutir oportunidades? 
            Envie uma mensagem e retornarei o mais breve possível.
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
                className="flex items-center gap-4 p-4 border border-border rounded-sm bg-card/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group"
              >
                <div className="p-3 rounded-sm bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-0.5">E-mail</p>
                  <p className="text-sm text-foreground">joaocsantosoficial@gmail.com</p>
                </div>
              </a>

              <a 
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 border border-border rounded-sm bg-card/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group"
              >
                <div className="p-3 rounded-sm bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-0.5">WhatsApp</p>
                  <p className="text-sm text-foreground">+55 (11) 99999-9999</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 border border-border rounded-sm bg-card/50">
                <div className="p-3 rounded-sm bg-primary/10 text-primary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-0.5">Localização</p>
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
                  <label htmlFor="name" className="text-[10px] uppercase tracking-wider text-muted-foreground">
                    Nome *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-card border border-border rounded-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all duration-300"
                    placeholder="Seu nome"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="whatsapp" className="text-[10px] uppercase tracking-wider text-muted-foreground">
                    WhatsApp
                  </label>
                  <input
                    type="tel"
                    id="whatsapp"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-card border border-border rounded-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all duration-300"
                    placeholder="(11) 99999-9999"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-[10px] uppercase tracking-wider text-muted-foreground">
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-card border border-border rounded-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all duration-300"
                  placeholder="seu@email.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-[10px] uppercase tracking-wider text-muted-foreground">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-card border border-border rounded-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all duration-300 resize-none"
                  placeholder="Descreva seu projeto ou oportunidade..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-primary text-primary-foreground font-medium uppercase tracking-wider text-sm rounded-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background transition-all duration-300 group"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Enviar Mensagem</span>
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
