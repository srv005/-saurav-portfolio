"use client";

import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "dark" | "light" | null;
    const initialTheme = savedTheme || "dark";
    setTheme(initialTheme);
    if (initialTheme === "light") {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
  }, []);

  useEffect(() => {
    const sections = ["about", "skills", "projects", "contact"];
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: "-30% 0px -60% 0px" }
      );
      observer.observe(el);
      return { observer, el };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) obs.observer.unobserve(obs.el);
      });
    };
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    if (nextTheme === "light") {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
  };

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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-app-bg/80 backdrop-blur-md border-b border-border-color/80 py-3"
          : "bg-app-bg border-b border-border-color py-4"
      }`}
    >
      <div className="max-w-4xl mx-auto px-6 flex justify-between items-center">
        <a
          href="#"
          className="font-mono text-base font-bold text-heading-color tracking-tight hover:text-text-muted transition-all duration-200 active:scale-[0.98]"
        >
          saurav_agrawal
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-6">
            {navLinks.map((link, index) => {
              const linkId = link.href.substring(1);
              const isActive = activeSection === linkId;
              return (
                <a
                  key={index}
                  href={link.href}
                  className={`relative py-1 text-sm font-mono transition-all duration-200 active:scale-[0.98] ${
                    isActive ? "text-heading-color" : "text-text-muted hover:text-heading-color"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[1px] bg-heading-color"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          <button
            onClick={toggleTheme}
            className="p-1.5 rounded hover:bg-card-hover border border-border-color text-text-muted hover:text-heading-color transition-colors duration-200 active:scale-90 flex items-center justify-center cursor-pointer"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-1.5 rounded hover:bg-card-hover border border-border-color text-text-muted hover:text-heading-color transition-colors duration-200 active:scale-90 flex items-center justify-center cursor-pointer"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
          </button>

          <button
            className="text-app-fg focus:outline-none hover:text-heading-color transition-colors duration-200 cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-app-bg border-b border-border-color flex flex-col items-start py-4 px-6 gap-4 md:hidden">
          {navLinks.map((link, index) => {
            const linkId = link.href.substring(1);
            const isActive = activeSection === linkId;
            return (
              <a
                key={index}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm font-mono w-full transition-all duration-200 active:scale-[0.98] ${
                  isActive ? "text-heading-color pl-2 border-l-2 border-heading-color" : "text-text-muted hover:text-heading-color"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>
      )}
    </motion.nav>
  );
}
