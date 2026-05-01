"use client";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/5 bg-dark-bg text-center">
      <p className="text-white/40 text-sm font-mono">
        © {new Date().getFullYear()} Saurav Agrawal. Built with Next.js & Framer Motion.
      </p>
      <div className="mt-2 text-white/20 text-xs">
        <span className="hidden">↑↑↓↓←→←→BA</span>
      </div>
    </footer>
  );
}
