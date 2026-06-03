"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-16 bg-[#0f0f0f] border-t border-[#2e2e2e]">
      <motion.div 
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-4xl mx-auto px-6"
      >
        <h2 className="text-xl font-bold text-white mb-6 font-mono tracking-tight">
          01. ABOUT ME
        </h2>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-4 text-[#a0a0a0] text-sm md:text-base leading-relaxed">
            <p>
              I am a <strong className="text-[#e0e0e0]">pre-final year CSE student (2027 batch)</strong> at SRM IST Delhi NCR, currently holding a CGPA of 8.24.
            </p>
            <p>
              My true passion lies in building <strong className="text-[#e0e0e0]">production-ready systems</strong>. From robust full-stack architectures to seamless AI integrations, I focus on solving real-world problems with clean, high-performance code.
            </p>
            <p>
              I don't just write code; I architect solutions that are structured, simple, and designed to perform.
            </p>
          </div>

          <div className="border-l border-[#2e2e2e] pl-6 space-y-6">
            <div>
              <h3 className="text-sm font-bold text-[#e0e0e0] font-mono">B.Tech in Computer Science</h3>
              <p className="text-xs text-[#a0a0a0] font-mono mt-0.5">2023 — 2027</p>
              <p className="text-xs text-[#a0a0a0] mt-1">SRM IST Delhi NCR</p>
              <p className="text-xs text-[#a0a0a0] mt-0.5">CGPA: 8.24</p>
            </div>
            
            <div>
              <h3 className="text-sm font-bold text-[#e0e0e0] font-mono">High School Education</h3>
              <p className="text-xs text-[#a0a0a0] font-mono mt-0.5">Completed 2023</p>
              <p className="text-xs text-[#a0a0a0] mt-1">Focused on PCM and foundational computer science.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
