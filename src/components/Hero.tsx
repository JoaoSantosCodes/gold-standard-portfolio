import React, { useState, useEffect } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ChevronDown, Download } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";

const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = ({ clientX, clientY, currentTarget }: React.MouseEvent) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  const scrollToExperience = () => {
    document.getElementById("experiencia")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="min-h-screen flex flex-col items-center justify-center relative px-6 pt-20 group/hero"
    >
      {/* Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 group-hover/hero:opacity-100 transition duration-300 z-10"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(212, 175, 55, 0.07),
              transparent 80%
            )
          `,
        }}
      />

      <div className="container mx-auto max-w-6xl relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center lg:justify-end order-1 lg:order-1"
          >
            <div className="relative group/image">
              {/* Outer decorative frame */}
              <div className="absolute -inset-4 border border-primary/20 rounded-sm" />
              <div className="absolute -inset-8 border border-primary/10 rounded-sm" />
              
              {/* Main gold frame - 0.5px border */}
              <div className="absolute -inset-1 border-[0.5px] border-primary rounded-sm" />
              
              {/* Profile image container */}
              <div className="relative w-64 h-80 sm:w-72 sm:h-96 lg:w-80 lg:h-[28rem] overflow-hidden rounded-sm gold-glow">
                <img 
                  src={profilePhoto}
                  alt="Jonh C. - Arquiteto de Sistemas"
                  className="w-full h-full object-cover object-top grayscale contrast-110 group-hover/image:grayscale-0 transition-all duration-700"
                />
                {/* Subtle gold tint overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-primary/5" />
              </div>

              {/* Corner accents */}
              <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-primary" />
              <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-primary" />
              <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-primary" />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-primary" />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-center lg:text-left order-2 lg:order-2"
          >
            {/* Tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-block mb-6"
            >
              <span className="px-4 py-2 text-xs uppercase tracking-[0.3em] text-primary border border-primary/40 rounded-sm bg-primary/5">
                Infraestrutura & Automação
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-serif font-medium mb-6"
            >
              <span className="text-gold-gradient neon-gold">Jonh C.</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="w-20 h-px bg-gradient-to-r from-primary via-accent to-primary/50 mx-auto lg:mx-0 mb-6 origin-left"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-lg sm:text-xl text-foreground font-serif italic mb-4 leading-relaxed"
            >
              Arquiteto de Sistemas, <span className="text-primary/80">Narrador de Mundos</span>.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0 mb-8"
            >
              Projetando infraestruturas robustas enquanto componho a trilha sonora da inovação. 
              Especialista em automação, monitoramento e gestão de ambientes críticos.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                href="/CV-JoaoSantos-Portugues-Profissional.pdf"
                download
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium text-sm uppercase tracking-wider rounded-sm hover:bg-primary/90 transition-all duration-300 group gold-pulse"
              >
                <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform duration-300" />
                <span>Download CV</span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                href="#contato"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-primary/50 text-primary font-medium text-sm uppercase tracking-wider rounded-sm hover:bg-primary/10 transition-all duration-300 glass-tactical"
              >
                <span>Entre em Contato</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <button
          onClick={scrollToExperience}
          className="group flex flex-col items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-300"
        >
          <span className="text-[10px] uppercase tracking-[0.25em] font-medium">
            Explorar
          </span>
          <div className="relative h-16 w-px overflow-hidden">
            <div className="absolute inset-0 bg-border" />
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary to-transparent"
              animate={{
                height: ["0%", "100%", "0%"],
                top: ["0%", "0%", "100%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
          <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;

