"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-dark-surface/50 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            <span className="text-neon-blue">01.</span> THE DEVELOPER
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-white/80 text-lg leading-relaxed"
          >
            <p>
              I am a <strong className="text-white">pre-final year CSE student (2027 batch)</strong> at SRM IST Delhi NCR, currently holding a CGPA of 8.24. But numbers only tell part of the story.
            </p>
            <p>
              My true passion lies in building <strong className="text-white text-shadow-glow">production-ready systems</strong>. From robust full-stack architectures (MERN / Next.js) to seamless AI integrations, I focus on solving real-world problems with high-performance code.
            </p>
            <p>
              I don't just write code; I architect solutions that are scalable, intelligent, and designed to perform at the highest levels.
            </p>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative border-l-2 border-white/10 pl-8 space-y-10"
          >
            <div className="relative">
              <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-dark-bg border-2 border-neon-blue shadow-[0_0_10px_rgba(0,240,255,0.8)]" />
              <h3 className="text-xl font-bold text-white">B.Tech in Computer Science</h3>
              <p className="text-neon-blue text-sm font-mono mt-1 mb-2">2023 - 2027</p>
              <p className="text-white/70">SRM IST Delhi NCR</p>
              <p className="text-white/50 text-sm mt-1">CGPA: 8.24</p>
            </div>
            
            <div className="relative">
              <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-dark-bg border-2 border-neon-purple shadow-[0_0_10px_rgba(176,38,255,0.8)]" />
              <h3 className="text-xl font-bold text-white">High School Education</h3>
              <p className="text-neon-purple text-sm font-mono mt-1 mb-2">2023</p>
              <p className="text-white/70">Focused on PCM and foundational computer science.</p>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -mr-48 -mt-48 w-96 h-96 bg-neon-blue/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-48 -mb-48 w-96 h-96 bg-neon-purple/5 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
}
