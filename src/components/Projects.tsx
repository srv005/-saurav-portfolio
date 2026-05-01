"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "AI Helpdesk System",
    description: "An intelligent issue classification system with priority assignment based on AI. Features role-based dashboards for users and admins, and a real-time chat-based communication system.",
    tech: ["Node.js", "Express", "MongoDB", "AI APIs"],
    demo: "#",
    github: "#",
    featured: true
  },
  {
    title: "Social Media Platform",
    description: "A full-fledged social platform with posts, likes, comments, and follow mechanics. Built with secure JWT authentication and protected routes.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    demo: "#",
    github: "#",
    featured: false
  },
  {
    title: "Real-Time Chat App",
    description: "Instant messaging application with a highly responsive UI, robust session handling, and efficient database storage for chat history.",
    tech: ["React", "Socket.io", "Node.js", "MongoDB"],
    demo: "#",
    github: "#",
    featured: false
  },
  {
    title: "URL Shortener",
    description: "Lightning-fast URL generation and redirection service powered by REST APIs and MongoDB mapping.",
    tech: ["Node.js", "Express", "MongoDB"],
    demo: "#",
    github: "#",
    featured: false
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-dark-bg">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            <span className="text-neon-blue">03.</span> FEATURED WORK
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`glass p-8 rounded-2xl relative group overflow-hidden border ${
                project.featured ? "border-neon-blue/30 lg:col-span-2" : "border-white/5"
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 to-neon-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-neon-blue transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-4">
                    <a href={project.github} className="text-white/50 hover:text-white transition-colors" target="_blank" rel="noreferrer">
                      <FaGithub size={24} />
                    </a>
                    <a href={project.demo} className="text-white/50 hover:text-neon-blue transition-colors" target="_blank" rel="noreferrer">
                      <ExternalLink size={24} />
                    </a>
                  </div>
                </div>

                <p className="text-white/70 text-lg mb-8 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mt-auto">
                  {project.tech.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="text-sm font-mono text-neon-purple bg-neon-purple/10 px-3 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Decorative hover effect */}
              <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-neon-blue/20 blur-2xl group-hover:bg-neon-purple/30 transition-colors duration-700 rounded-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
