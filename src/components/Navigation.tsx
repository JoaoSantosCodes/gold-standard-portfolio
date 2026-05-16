import { Home, BookOpen, Mail, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { icon: Home, label: "Início", href: "#" },
    { icon: BookOpen, label: "Blog", href: "#blog" },
    { icon: Mail, label: "Contato", href: "#contato" },
  ];

  const scrollToSection = (href: string) => {
    setIsMenuOpen(false);
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); scrollToSection("#"); }}
          className="flex items-center gap-2 group"
        >
          <span className="text-2xl font-serif text-gold-gradient font-semibold tracking-wide">
            Jonh C.
          </span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300 gold-underline py-1"
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-muted-foreground hover:text-primary transition-colors duration-300"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-md"
          >
            <ul className="container mx-auto px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-300 py-2"
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
