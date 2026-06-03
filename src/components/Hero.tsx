"use client";

import { ArrowRight, FileText } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="w-full min-h-[60vh] pt-32 pb-16 flex items-center justify-start bg-[#0f0f0f]">
      <div className="max-w-4xl mx-auto px-6 w-full flex flex-col items-start text-left">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-3">
          Saurav Agrawal
        </h1>

        <h2 className="text-xl md:text-2xl font-semibold text-[#e0e0e0] mb-4 font-mono">
          CS Student & Full Stack Developer
        </h2>

        <p className="text-base md:text-lg text-[#a0a0a0] max-w-2xl mb-8 leading-relaxed">
          Building scalable systems with intelligence and performance.
        </p>

        <div className="flex flex-col sm:flex-row items-start gap-4 w-full sm:w-auto">
          <a
            href="#projects"
            className="px-5 py-2.5 bg-[#e0e0e0] text-[#0f0f0f] font-mono text-sm font-bold rounded hover:bg-[#ffffff] transition-colors flex items-center gap-2 w-full sm:w-auto justify-center"
          >
            <span>View Projects</span>
            <ArrowRight size={16} />
          </a>
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-transparent text-[#e0e0e0] border border-[#2e2e2e] font-mono text-sm font-bold rounded hover:border-[#e0e0e0] hover:text-[#ffffff] transition-colors flex items-center gap-2 w-full sm:w-auto justify-center"
          >
            <FileText size={16} />
            <span>Resume</span>
          </a>
        </div>
      </div>
    </section>
  );
}
