"use client";

import { useState } from "react";
import { Mail, Copy, Check } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText("agrawalsaurav546@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-16 bg-app-bg border-t border-border-color pb-24 transition-colors duration-300">
      <motion.div 
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-4xl mx-auto px-6"
      >
        <h2 className="text-xl font-bold text-heading-color mb-6 font-mono tracking-tight transition-colors duration-200">
          04. CONTACT
        </h2>

        <div className="space-y-4">
          <p className="text-sm text-text-muted leading-relaxed max-w-xl transition-colors duration-200">
            My inbox is always open. Feel free to reach out for questions, collaborations, or just to say hello.
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 pt-4 font-mono text-sm">
            <div className="flex items-center gap-2 group/email relative">
              <a
                href="mailto:agrawalsaurav546@gmail.com"
                className="flex items-center gap-2 text-text-muted hover:text-heading-color hover:translate-x-0.5 active:scale-[0.98] active:translate-x-0 transition-all duration-200 transform"
              >
                <Mail size={16} />
                <span>agrawalsaurav546@gmail.com</span>
              </a>
              <button
                onClick={handleCopy}
                className="p-1 text-text-muted hover:text-heading-color rounded hover:bg-card-hover transition-all duration-200 cursor-pointer active:scale-75 flex items-center justify-center border border-transparent hover:border-border-color"
                title="Copy to clipboard"
                aria-label="Copy Email"
              >
                {copied ? (
                  <Check size={12} className="text-green-500" />
                ) : (
                  <Copy size={12} className="opacity-0 group-hover/email:opacity-100 transition-opacity duration-200" />
                )}
              </button>

              <AnimatePresence>
                {copied && (
                  <motion.span
                    initial={{ opacity: 0, y: 8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.95 }}
                    className="absolute left-0 bottom-full mb-2 px-2 py-0.5 text-[10px] font-mono font-semibold bg-heading-color text-app-bg border border-border-color rounded shadow-lg whitespace-nowrap pointer-events-none transition-colors duration-200"
                  >
                    Copied to clipboard!
                  </motion.span>
                )}
              </AnimatePresence>
            </div>

            <a
              href="https://github.com/srv005"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-text-muted hover:text-heading-color hover:translate-x-0.5 active:scale-[0.98] active:translate-x-0 transition-all duration-200 transform"
            >
              <FaGithub size={16} />
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/saurav-ag/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-text-muted hover:text-heading-color hover:translate-x-0.5 active:scale-[0.98] active:translate-x-0 transition-all duration-200 transform"
            >
              <FaLinkedin size={16} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
