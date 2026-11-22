import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Sparkles, CheckCircle2, Play, Layers } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, onClose, onOpenPlayground }) {
  if (!project) return null;

  const isCyan = project.color === 'cyan';

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0D1424] border border-cyan-500/40 p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.8)] z-10 text-slate-100 scrollbar-thin"
        >
          {/* Top Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Badge & Category */}
          <div className="flex items-center gap-2 mb-3">
            <span
              className={`px-3 py-1 rounded-full text-xs font-mono font-medium border ${
                isCyan
                  ? 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30'
                  : 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30'
              }`}
            >
              {project.badge}
            </span>
            <span className="text-xs text-slate-400 font-mono">Category: {project.category}</span>
          </div>

          {/* Project Title */}
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mb-4">
            {project.title}
          </h3>

          {/* Deep Architectural Description */}
          <div className="p-4 rounded-xl bg-slate-900/80 border border-white/5 mb-6 text-sm text-slate-300 leading-relaxed">
            {project.longDescription}
          </div>

          {/* Key System Highlights */}
          <div className="mb-6">
            <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span>Engineering Highlights & Key Features</span>
            </h4>
            <div className="space-y-2.5">
              {project.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2.5 text-sm text-slate-200">
                  <CheckCircle2
                    className={`w-4 h-4 shrink-0 mt-0.5 ${
                      isCyan ? 'text-cyan-400' : 'text-emerald-400'
                    }`}
                  />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Stack Grid */}
          <div className="mb-8">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4" />
              <span>Technology Stack & Modules</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono bg-slate-800/80 text-cyan-300 border border-cyan-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
            <div className="flex items-center gap-3">
              {project.interactiveType && (
                <button
                  onClick={() => {
                    onClose();
                    onOpenPlayground(project.interactiveType);
                  }}
                  className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 flex items-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] transition-all"
                >
                  <Play className="w-4 h-4 fill-slate-950" />
                  <span>
                    {project.id === 'number-guessing'
                      ? 'Play Live Game Demo'
                      : 'Launch Interactive Simulator'}
                  </span>
                </button>
              )}
            </div>

            <div className="flex items-center gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-white/10 flex items-center gap-2 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
