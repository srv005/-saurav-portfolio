"use client";

import { ArrowRight, FileText } from "lucide-react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import Avatar from "./Avatar";

export default function Hero() {
  return (
    <section
      id="home"
      className="w-full min-h-screen pt-32 pb-16 bg-app-bg transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-10">

        <div className="flex-1">
          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-heading-color mb-3"
          >
            Saurav Agrawal
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl md:text-2xl font-semibold text-app-fg mb-4 font-mono"
          >
            CS Student & Full Stack Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base md:text-lg text-text-muted max-w-2xl mb-8 leading-relaxed"
          >
            Building scalable systems with intelligence and performance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-start gap-4"
          >
            <a
              href="#projects"
              className="px-5 py-2.5 bg-app-fg text-app-bg font-mono text-sm font-bold rounded flex items-center gap-2"
            >
              <span>View Projects</span>
              <ArrowRight size={16} />
            </a>

            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 border border-border-color rounded flex items-center gap-2"
            >
              <FileText size={16} />
              <span>Resume</span>
            </a>
          </motion.div>
        </div>

        <div className="w-[500px] h-[600px]">
        <Canvas camera={{ position: [0, 0, 8], fov: 38 }}>
  <ambientLight intensity={0.7} />
  <directionalLight position={[5, 5, 5]} intensity={1.5} />
  <Avatar />
</Canvas>
        </div>

      </div>
    </section>
  );
}