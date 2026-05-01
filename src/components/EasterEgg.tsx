"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const konamiCode = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

export default function EasterEgg() {
  const [inputSequence, setInputSequence] = useState<string[]>([]);
  const [activated, setActivated] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activated) return;
      
      const key = e.key;
      const newSequence = [...inputSequence, key];
      
      // Keep only the last N keys where N is konamiCode length
      if (newSequence.length > konamiCode.length) {
        newSequence.shift();
      }
      
      setInputSequence(newSequence);

      if (newSequence.join(",") === konamiCode.join(",")) {
        setActivated(true);
        setTimeout(() => setActivated(false), 5000); // Deactivate after 5 seconds
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [inputSequence, activated]);

  return (
    <AnimatePresence>
      {activated && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[99999] bg-black/90 flex flex-col items-center justify-center pointer-events-none"
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1], rotate: [0, -5, 5, 0] }}
            transition={{ repeat: Infinity, duration: 0.5 }}
            className="text-neon-blue font-mono text-4xl md:text-6xl font-black drop-shadow-[0_0_20px_rgba(0,240,255,1)]"
          >
            SYSTEM OVERRIDDEN
          </motion.div>
          <p className="text-neon-purple mt-4 font-mono text-xl animate-pulse">
            God Mode Activated.
          </p>
          
          {/* Matrix raining characters effect simplified */}
          <div className="absolute inset-0 overflow-hidden opacity-30">
             {Array.from({ length: 50 }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ y: -100, x: Math.random() * window.innerWidth }}
                  animate={{ y: window.innerHeight + 100 }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 1 + Math.random() * 2,
                    delay: Math.random() * 2,
                    ease: "linear"
                  }}
                  className="absolute text-neon-blue font-mono text-xs"
                >
                  {Math.random() > 0.5 ? "1" : "0"}
                </motion.div>
             ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
