"use client";

import { motion } from "framer-motion";

const skills = [
  {
    category: "Languages",
    items: ["C++", "JavaScript", "Python", "Java", "SQL"],
  },
  {
    category: "Web Technologies",
    items: ["React", "Node.js", "Express", "Tailwind CSS", "Next.js"],
  },
  {
    category: "AI & Data",
    items: ["Pandas", "NumPy", "OpenAI APIs"],
  },
  {
    category: "Databases & Tools",
    items: ["MongoDB", "MySQL", "Git", "GitHub", "VS Code", "Postman"],
  },
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="skills" className="py-16 bg-app-bg border-t border-border-color transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-xl font-bold text-heading-color mb-6 font-mono tracking-tight transition-colors duration-200"
        >
          02. SKILLS
        </motion.h2>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 gap-8"
        >
          {skills.map((skillGroup, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="p-5 rounded bg-card-bg border border-border-color transition-all duration-300 hover:-translate-y-0.5 hover:border-heading-color hover:bg-card-hover"
            >
              <h3 className="text-sm font-bold mb-4 text-app-fg font-mono transition-colors duration-200">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item, itemIdx) => (
                  <span
                    key={itemIdx}
                    className="px-2.5 py-1 bg-app-bg border border-border-color rounded text-xs text-text-muted font-mono hover:text-heading-color hover:border-heading-color hover:-translate-y-0.5 hover:scale-105 transition-all duration-200 transform inline-block cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
