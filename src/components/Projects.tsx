"use client";

import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const projects = [
  {
    title: "AI Helpdesk System",
    description: "An intelligent issue classification system with priority assignment based on AI. Features role-based dashboards and real-time chat.",
    tech: ["Node.js", "Express", "MongoDB", "AI APIs"],
    demo: "#",
    github: "#",
  },
  {
    title: "Social Media Platform",
    description: "A full-fledged social platform with posts, likes, comments, follow mechanics, and secure JWT authentication.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    demo: "#",
    github: "#",
  },
  {
    title: "Real-Time Chat App",
    description: "Instant messaging application with a highly responsive UI, robust session handling, and database message history.",
    tech: ["React", "Socket.io", "Node.js", "MongoDB"],
    demo: "#",
    github: "#",
  },
  {
    title: "URL Shortener",
    description: "Lightning-fast URL generation and redirection service powered by REST APIs and MongoDB mapping.",
    tech: ["Node.js", "Express", "MongoDB"],
    demo: "#",
    github: "#",
  }
];

export default function Projects() {
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
    hidden: { opacity: 0, y: 12 },
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
    <section id="projects" className="py-16 bg-app-bg border-t border-border-color transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-xl font-bold text-heading-color mb-6 font-mono tracking-tight transition-colors duration-200"
        >
          03. PROJECTS
        </motion.h2>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-6"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="p-5 rounded bg-card-bg border border-border-color flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-heading-color hover:bg-card-hover"
            >
              <div>
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-base font-bold text-heading-color font-mono transition-colors duration-200">
                    {project.title}
                  </h3>
                  <div className="flex gap-3 text-text-muted transition-colors duration-200">
                    <a 
                      href={project.github} 
                      className="hover:text-heading-color hover:-translate-y-0.5 hover:translate-x-0.5 active:scale-90 transition-all duration-200 transform cursor-pointer" 
                      target="_blank" 
                      rel="noreferrer" 
                      aria-label="GitHub"
                    >
                      <FaGithub size={18} />
                    </a>
                    <a 
                      href={project.demo} 
                      className="hover:text-heading-color hover:-translate-y-0.5 hover:translate-x-0.5 active:scale-90 transition-all duration-200 transform cursor-pointer" 
                      target="_blank" 
                      rel="noreferrer" 
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>

                <p className="text-sm text-text-muted mb-4 leading-relaxed transition-colors duration-200">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-auto">
                {project.tech.map((tech, techIdx) => (
                  <span
                    key={techIdx}
                    className="text-[10px] font-mono text-text-muted bg-app-bg border border-border-color px-2 py-0.5 rounded hover:text-heading-color hover:border-heading-color hover:-translate-y-0.5 hover:scale-105 transition-all duration-200 transform cursor-default"
                  >
                    {tech}
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
