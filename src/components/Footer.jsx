import { ArrowUp, Heart, Terminal, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#070A12] py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand & Tagline */}
        <div className="text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-sm font-bold font-mono text-slate-200">
              {personalInfo.name}
            </span>
            <span className="text-xs text-cyan-400 font-mono">// Portfolio</span>
          </div>
          <p className="text-xs text-slate-400">
            Crafted with React, Tailwind CSS, Framer Motion & Lucide Icons.
          </p>
        </div>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="group flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-white/10 hover:border-cyan-400 text-xs font-mono text-slate-300 hover:text-cyan-300 transition-all hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]"
          title="Return to top of page"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-white/5 text-center text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p>© {new Date().getFullYear()} {personalInfo.fullName}. All rights reserved.</p>
        <p className="flex items-center gap-1.5 font-mono">
          <span>Melur, Madurai, Tamil Nadu, India</span>
          <span className="text-slate-600">•</span>
          <span className="text-emerald-400">60 FPS Cyber Experience</span>
        </p>
      </div>
    </footer>
  );
}

