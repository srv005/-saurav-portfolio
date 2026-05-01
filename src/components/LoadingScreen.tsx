"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500); // Small delay before hiding
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  if (!loading) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-dark-bg"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="text-neon-blue font-mono text-2xl mb-4 glow-blue">
        INITIALIZING_SYSTEM...
      </div>
      <div className="w-64 h-2 bg-dark-surface rounded-full overflow-hidden relative border border-white/10">
        <motion.div
          className="absolute top-0 left-0 h-full bg-neon-purple glow-purple"
          initial={{ width: "0%" }}
          animate={{ width: `${progress}%` }}
          transition={{ ease: "linear" }}
        />
      </div>
      <div className="mt-4 text-white/50 font-mono text-sm">
        {progress}%
      </div>
    </motion.div>
  );
}
