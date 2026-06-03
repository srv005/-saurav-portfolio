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
  return (
    <section id="projects" className="py-16 bg-[#0f0f0f] border-t border-[#2e2e2e]">
      <motion.div 
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-4xl mx-auto px-6"
      >
        <h2 className="text-xl font-bold text-white mb-6 font-mono tracking-tight">
          03. PROJECTS
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="p-5 rounded bg-[#1a1a1a] border border-[#2e2e2e] flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-[#404040]"
            >
              <div>
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-base font-bold text-white font-mono">
                    {project.title}
                  </h3>
                  <div className="flex gap-3 text-[#a0a0a0]">
                    <a href={project.github} className="hover:text-white hover:-translate-y-0.5 hover:translate-x-0.5 transition-all duration-200 transform" target="_blank" rel="noreferrer" aria-label="GitHub">
                      <FaGithub size={18} />
                    </a>
                    <a href={project.demo} className="hover:text-white hover:-translate-y-0.5 hover:translate-x-0.5 transition-all duration-200 transform" target="_blank" rel="noreferrer" aria-label="Live Demo">
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>

                <p className="text-sm text-[#a0a0a0] mb-4 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-auto">
                {project.tech.map((tech, techIdx) => (
                  <span
                    key={techIdx}
                    className="text-[10px] font-mono text-[#a0a0a0] bg-[#0f0f0f] border border-[#2e2e2e] px-2 py-0.5 rounded hover:text-white hover:border-[#404040] hover:-translate-y-0.5 hover:scale-105 transition-all duration-200 transform cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
