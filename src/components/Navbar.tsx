"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
        scrolled ? "bg-dark-surface/80 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-white tracking-tighter">
          SAURAV<span className="text-neon-blue">.DEV</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-8">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-white/70 hover:text-white hover:text-shadow-glow transition-colors text-sm uppercase tracking-widest relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-neon-blue transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>
          
          <div className="flex items-center gap-4 pl-6 border-l border-white/20">
            <a
              href="https://github.com/srv005"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-neon-blue transition-colors hover:scale-110 duration-200"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/saurav-ag/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-neon-blue transition-colors hover:scale-110 duration-200"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {mobileMenuOpen && (
        <motion.div
          className="absolute top-full left-0 w-full bg-dark-surface/95 backdrop-blur-lg border-b border-white/10 flex flex-col items-center py-8 gap-6 md:hidden shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-white/80 hover:text-neon-blue text-lg uppercase tracking-widest transition-colors"
            >
              {link.name}
            </a>
          ))}
          
          <div className="flex gap-6 mt-4">
            <a
              href="https://github.com/srv005"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 rounded-full border border-white/10 text-white/70 hover:text-neon-blue hover:border-neon-blue hover:bg-neon-blue/10 transition-all"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/saurav-ag/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 rounded-full border border-white/10 text-white/70 hover:text-neon-blue hover:border-neon-blue hover:bg-neon-blue/10 transition-all"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
