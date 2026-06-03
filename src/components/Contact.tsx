"use client";

import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-[#0f0f0f] border-t border-[#2e2e2e] pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-xl font-bold text-white mb-6 font-mono tracking-tight">
          04. CONTACT
        </h2>

        <div className="space-y-4">
          <p className="text-sm text-[#a0a0a0] leading-relaxed max-w-xl">
            My inbox is always open. Feel free to reach out for questions, collaborations, or just to say hello.
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 pt-4 font-mono text-sm">
            <a
              href="mailto:agrawalsaurav546@gmail.com"
              className="flex items-center gap-2 text-[#a0a0a0] hover:text-white transition-colors"
            >
              <Mail size={16} />
              <span>agrawalsaurav546@gmail.com</span>
            </a>

            <a
              href="https://github.com/srv005"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#a0a0a0] hover:text-white transition-colors"
            >
              <FaGithub size={16} />
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/saurav-ag/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#a0a0a0] hover:text-white transition-colors"
            >
              <FaLinkedin size={16} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
