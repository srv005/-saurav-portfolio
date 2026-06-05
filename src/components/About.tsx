"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface CellData {
  level: number;
  dateStr: string;
  commits: string;
}

export default function About() {
  const [mounted, setMounted] = useState(false);
  const [contributionData, setContributionData] = useState<CellData[]>([]);

  useEffect(() => {
    setMounted(true);
    const data: CellData[] = [];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
    for (let weekIdx = 0; weekIdx < 24; weekIdx++) {
      for (let dayIdx = 0; dayIdx < 7; dayIdx++) {
        const hash = (weekIdx * 7 + dayIdx) % 17;
        const level = hash === 0 ? 0 : hash % 5 === 0 ? 3 : hash % 3 === 0 ? 1 : hash % 4 === 0 ? 2 : 0;
        const commits = level === 0 ? "No" : (level * 2 + 1).toString();
        
        const dateObj = new Date(Date.now() - (168 - (weekIdx * 7 + dayIdx)) * 24 * 60 * 60 * 1000);
        const dateStr = `${months[dateObj.getMonth()]} ${dateObj.getDate()}`;
        
        data.push({ level, dateStr, commits });
      }
    }
    setContributionData(data);
  }, []);

  return (
    <section id="about" className="py-16 bg-app-bg border-t border-border-color transition-colors duration-300">
      <motion.div 
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-4xl mx-auto px-6"
      >
        <h2 className="text-xl font-bold text-heading-color mb-6 font-mono tracking-tight transition-colors duration-200">
          01. ABOUT ME
        </h2>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-4 text-text-muted text-sm md:text-base leading-relaxed transition-colors duration-200">
            <p>
              I am a <strong className="text-app-fg transition-colors duration-200">pre-final year CSE student (2027 batch)</strong> at SRM IST Delhi NCR, currently holding a CGPA of 8.24.
            </p>
            <p>
              My true passion lies in building <strong className="text-app-fg transition-colors duration-200">production-ready systems</strong>. From robust full-stack architectures to seamless AI integrations, I focus on solving real-world problems with clean, high-performance code.
            </p>
            <p>
              I don't just write code; I architect solutions that are structured, simple, and designed to perform.
            </p>
          </div>

          <div className="border-l border-border-color pl-6 space-y-6 transition-colors duration-200">
            <div>
              <h3 className="text-sm font-bold text-app-fg font-mono transition-colors duration-200">B.Tech in Computer Science</h3>
              <p className="text-xs text-text-muted font-mono mt-0.5 transition-colors duration-200">2023 — 2027</p>
              <p className="text-xs text-text-muted mt-1 transition-colors duration-200">SRM IST Delhi NCR</p>
              <p className="text-xs text-text-muted mt-0.5 transition-colors duration-200">CGPA: 8.24</p>
            </div>
            
            <div>
              <h3 className="text-sm font-bold text-app-fg font-mono transition-colors duration-200">High School Education</h3>
              <p className="text-xs text-text-muted font-mono mt-0.5 transition-colors duration-200">Completed 2023</p>
              <p className="text-xs text-text-muted mt-1 transition-colors duration-200">Focused on PCM and foundational computer science.</p>
            </div>
          </div>
        </div>

        {/* Interactive GitHub Contributions Grid */}
        <div className="mt-12 pt-10 border-t border-border-color transition-colors duration-300">
          <h3 className="text-xs font-bold text-heading-color font-mono mb-4 tracking-wider flex items-center gap-2 transition-colors duration-200">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
            RECENT ACTIVITY (MOCK COMMITS)
          </h3>
          <div className="flex flex-col gap-2 p-4 bg-card-bg border border-border-color rounded relative overflow-hidden transition-all duration-300">
            <div className="flex justify-between items-center text-[10px] text-text-muted font-mono mb-2 transition-colors duration-200">
              <span>1,248 contributions in the last year</span>
              <span className="hidden sm:inline">srv005 / activity-graph</span>
            </div>
            
            <div className="flex gap-1 overflow-x-auto py-1 scrollbar-none">
              {Array.from({ length: 24 }).map((_, weekIdx) => (
                <div key={weekIdx} className="flex flex-col gap-1 flex-shrink-0">
                  {Array.from({ length: 7 }).map((_, dayIdx) => {
                    const cellIdx = weekIdx * 7 + dayIdx;
                    const cellData = contributionData[cellIdx];
                    
                    const level = cellData ? cellData.level : 0;
                    const commitsCount = cellData ? cellData.commits : "No";
                    const mockDate = cellData ? cellData.dateStr : "";

                    const bgClass =
                      level === 0
                        ? "bg-app-bg hover:bg-heading-color/30"
                        : level === 1
                        ? "bg-heading-color/10 hover:bg-heading-color/40"
                        : level === 2
                        ? "bg-heading-color/30 hover:bg-heading-color/60"
                        : level === 3
                        ? "bg-heading-color/50 hover:bg-heading-color/80"
                        : "bg-heading-color/70 hover:bg-heading-color";

                    return (
                      <div
                        key={dayIdx}
                        className={`w-2.5 h-2.5 rounded-sm border border-border-color/30 transition-all duration-150 cursor-crosshair hover:scale-125 relative group ${bgClass}`}
                      >
                        {mounted && mockDate && (
                          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 hidden group-hover:block z-20 px-2 py-0.5 text-[8px] font-mono font-semibold bg-heading-color text-app-bg border border-border-color rounded shadow-lg whitespace-nowrap pointer-events-none transition-colors duration-200">
                            {commitsCount} commits on {mockDate}
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>

            <div className="flex justify-end items-center gap-1.5 mt-2 text-[9px] text-text-muted font-mono transition-colors duration-200">
              <span>Less</span>
              <div className="w-2 h-2 rounded-sm bg-app-bg border border-border-color/30 transition-colors duration-200"></div>
              <div className="w-2 h-2 rounded-sm bg-heading-color/10 border border-border-color/30 transition-colors duration-200"></div>
              <div className="w-2 h-2 rounded-sm bg-heading-color/30 border border-border-color/30 transition-colors duration-200"></div>
              <div className="w-2 h-2 rounded-sm bg-heading-color/50 border border-border-color/30 transition-colors duration-200"></div>
              <div className="w-2 h-2 rounded-sm bg-heading-color/70 border border-border-color/30 transition-colors duration-200"></div>
              <span>More</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
