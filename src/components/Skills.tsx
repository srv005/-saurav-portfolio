"use client";

import { motion } from "framer-motion";

const skills = [
  {
    category: "Languages",
    items: ["C++", "JavaScript", "Python", "Java", "SQL"],
    textColor: "text-neon-blue",
    bgColor: "bg-neon-blue/5"
  },
  {
    category: "Web Technologies",
    items: ["React", "Node.js", "Express", "Tailwind CSS", "Next.js"],
    textColor: "text-neon-purple",
    bgColor: "bg-neon-purple/5"
  },
  {
    category: "AI & Data",
    items: ["Pandas", "NumPy", "OpenAI APIs"],
    textColor: "text-neon-blue",
    bgColor: "bg-neon-blue/5"
  },
  {
    category: "Databases & Tools",
    items: ["MongoDB", "MySQL", "Git", "GitHub", "VS Code", "Postman"],
    textColor: "text-neon-purple",
    bgColor: "bg-neon-purple/5"
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-right"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            CORE ARSENAL <span className="text-neon-purple">.02</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-l from-neon-purple to-neon-blue rounded-full ml-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass p-8 rounded-2xl relative group hover:border-white/20 transition-colors"
            >
              <div
                className={`absolute inset-0 ${skillGroup.bgColor} opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none`}
              />
              <h3 className={`text-xl font-bold mb-6 ${skillGroup.textColor}`}>
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((item, itemIdx) => (
                  <span
                    key={itemIdx}
                    className="px-3 py-1 bg-dark-bg border border-white/10 rounded-md text-white/80 text-sm hover:text-white hover:border-white/30 transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
