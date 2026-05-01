"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-dark-bg">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            <span className="text-neon-purple">04.</span> INITIATE CONTACT
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-purple to-neon-blue rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Let's build something extraordinary.</h3>
            <p className="text-white/70 mb-10 text-lg">
              Whether you have a question, a project idea, or just want to connect, feel free to reach out. My inbox is always open.
            </p>

            <div className="space-y-6">
              <a href="mailto:agrawalsaurav546@gmail.com" className="flex items-center gap-4 text-white/80 hover:text-neon-blue transition-colors group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-neon-blue/10 group-hover:glow-blue transition-all">
                  <Mail size={20} />
                </div>
                <span className="text-lg">agrawalsaurav546@gmail.com</span>
              </a>
              
              <a href="tel:7983137042" className="flex items-center gap-4 text-white/80 hover:text-neon-purple transition-colors group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-neon-purple/10 group-hover:glow-purple transition-all">
                  <Phone size={20} />
                </div>
                <span className="text-lg">+91 7983137042</span>
              </a>

              <div className="flex items-center gap-4 text-white/80 group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-all">
                  <MapPin size={20} />
                </div>
                <span className="text-lg">Delhi, India</span>
              </div>
            </div>

            <div className="flex gap-6 mt-12">
              <a href="#" className="text-white/50 hover:text-neon-blue hover:scale-110 transition-all hover:glow-blue rounded-full p-2">
                <FaGithub size={28} />
              </a>
              <a href="#" className="text-white/50 hover:text-neon-purple hover:scale-110 transition-all hover:glow-purple rounded-full p-2">
                <FaLinkedin size={28} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass p-8 rounded-2xl"
          >
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-white/60 text-sm mb-2" htmlFor="name">NAME</label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-dark-bg/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-blue focus:glow-blue transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-white/60 text-sm mb-2" htmlFor="email">EMAIL</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-dark-bg/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-purple focus:glow-purple transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-white/60 text-sm mb-2" htmlFor="message">MESSAGE</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-dark-bg/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-blue focus:glow-blue transition-all resize-none"
                  placeholder="Let's build..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="group relative w-full py-4 bg-white/5 text-white font-bold tracking-widest rounded-lg overflow-hidden flex items-center justify-center gap-2 hover:bg-white/10 transition-colors border border-white/10 hover:border-neon-blue"
              >
                <span>SEND MESSAGE</span>
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
