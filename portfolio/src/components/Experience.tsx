"use client";

import { motion } from "framer-motion";
import { Trophy, HeartHandshake } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-dark-surface/30 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            IMPACT & <span className="text-neon-blue">ACHIEVEMENTS</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Achievement Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-neon-blue/20 blur-xl rounded-2xl group-hover:bg-neon-blue/30 transition-colors duration-500" />
            <div className="glass p-8 rounded-2xl relative h-full border border-neon-blue/50 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-neon-blue/10 flex items-center justify-center mb-6 border border-neon-blue glow-blue">
                <Trophy className="text-neon-blue" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">CodeWizard 2025</h3>
              <p className="text-neon-blue font-mono mb-4">Hackathon Participant</p>
              <p className="text-white/70">
                Competed with top developers, building rapid prototypes and demonstrating problem-solving skills under high-pressure scenarios.
              </p>
            </div>
          </motion.div>

          {/* Experience Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-neon-purple/20 blur-xl rounded-2xl group-hover:bg-neon-purple/30 transition-colors duration-500" />
            <div className="glass p-8 rounded-2xl relative h-full border border-neon-purple/50 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-neon-purple/10 flex items-center justify-center mb-6 border border-neon-purple glow-purple">
                <HeartHandshake className="text-neon-purple" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Volunteer Educator</h3>
              <p className="text-neon-purple font-mono mb-4">Umang Bal Vikas Organization</p>
              <p className="text-white/70 italic">
                "Contributed to accessible education for differently-abled students"
              </p>
              <p className="text-white/60 mt-4 text-sm">
                Leveraged communication and teaching skills to make a real-world impact in the community.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
