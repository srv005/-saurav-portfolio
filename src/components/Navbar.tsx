"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-[#0f0f0f] border-b border-[#2e2e2e] py-4"
    >
      <div className="max-w-4xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="font-mono text-base font-bold text-[#ffffff] tracking-tight hover:text-[#a0a0a0] transition-colors duration-200">
          saurav_agrawal
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-[#a0a0a0] hover:text-[#ffffff] transition-colors duration-200 text-sm font-mono relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-[#e0e0e0] focus:outline-none hover:text-white transition-colors duration-200"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0f0f0f] border-b border-[#2e2e2e] flex flex-col items-start py-4 px-6 gap-4 md:hidden">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#a0a0a0] hover:text-[#ffffff] text-sm font-mono w-full transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </motion.nav>
  );
}
