"use client";

import { motion } from "framer-motion";
import Background3D from "./Background3D";
import { ArrowRight, Terminal, FileText } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Hero() {
  const [text, setText] = useState("");
  const fullText = "Building scalable systems with intelligence and performance";

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section id="home" className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <Background3D />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col items-center md:items-start text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neon-blue/30 bg-neon-blue/10 text-neon-blue text-sm mb-6"
        >
          <Terminal size={14} />
          <span>SYS_ONLINE</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white mb-4"
        >
          Hi, I'm <br className="md:hidden" />
          <span className="text-gradient drop-shadow-lg">Saurav Agrawal</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-2xl md:text-3xl font-bold text-white/90 mb-6"
        >
          Full Stack Developer <span className="text-neon-purple">|</span> AI Integrator
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="h-8 md:h-10 text-white/60 text-lg md:text-xl font-mono max-w-2xl mb-10"
        >
          {text}<span className="animate-pulse">_</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-8"
        >
          <a
            href="#projects"
            className="group relative px-8 py-4 bg-neon-blue text-black font-bold uppercase tracking-widest rounded-lg overflow-hidden flex items-center justify-center gap-2 glow-blue transition-all hover:scale-105 w-full sm:w-auto"
          >
            <span>View Projects</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 bg-transparent text-white border border-white/20 font-bold uppercase tracking-widest rounded-lg hover:border-neon-purple hover:text-neon-purple transition-all flex items-center justify-center gap-2 hover:glow-purple w-full sm:w-auto"
          >
            <FileText size={18} />
            <span>Resume</span>
          </a>
        </motion.div>


      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="text-xs tracking-widest uppercase text-white/50">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
      </motion.div>
    </section>
  );
}
