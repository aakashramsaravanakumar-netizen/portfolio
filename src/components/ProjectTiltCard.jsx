import { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink, Play, Sparkles, Layers, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectTiltCard({ project, onSelect, onTriggerPlayground }) {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [spotlightPos, setSpotlightPos] = useState({ x: -100, y: -100 });

  // Mouse tilt values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 220, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 220, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['9deg', '-9deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-9deg', '9deg']);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    setSpotlightPos({ x: mouseX, y: mouseY });

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const isCyan = project.color === 'cyan';

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className="relative rounded-2xl bg-[#0B111E] border border-white/10 hover:border-cyan-500/40 p-6 flex flex-col justify-between transition-colors duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.5)] group overflow-hidden"
    >
      {/* Radial Spotlight Glow that tracks mouse */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        style={{
          background: `radial-gradient(450px circle at ${spotlightPos.x}px ${spotlightPos.y}px, ${
            isCyan ? 'rgba(6, 182, 212, 0.16)' : 'rgba(16, 185, 129, 0.16)'
          }, transparent 70%)`,
        }}
      />

      {/* Animated Glowing Accent Border Highlight */}
      <div
        className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${
          isCyan ? 'from-cyan-500 via-sky-400 to-transparent' : 'from-emerald-500 via-teal-400 to-transparent'
        } opacity-70 group-hover:opacity-100 transition-opacity`}
      />

      <div style={{ transform: 'translateZ(25px)' }} className="relative z-20">
        {/* Category & Action Trigger Header */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span
            className={`px-3 py-1 rounded-full text-xs font-mono font-medium border ${
              isCyan
                ? 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30'
                : 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30'
            }`}
          >
            {project.badge}
          </span>

          <div className="flex items-center gap-1.5">
            {project.id === 'number-guessing' && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onTriggerPlayground('number-game');
                }}
                className="px-2.5 py-1 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/40 text-xs font-semibold flex items-center gap-1 shadow-[0_0_12px_rgba(16,185,129,0.3)] animate-pulse"
                title="Play Interactive Live Demo"
              >
                <Play className="w-3 h-3 fill-emerald-300" />
                <span>Play Live</span>
              </button>
            )}

            {project.id === 'agro-ai' && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onTriggerPlayground('agro-ai');
                }}
                className="px-2.5 py-1 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/40 text-xs font-semibold flex items-center gap-1"
                title="Simulate Vision Scanner"
              >
                <Sparkles className="w-3 h-3 text-emerald-300" />
                <span>Simulate AI</span>
              </button>
            )}

            {project.id === 'talent-track' && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onTriggerPlayground('talent-track');
                }}
                className="px-2.5 py-1 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 text-xs font-semibold flex items-center gap-1"
                title="Simulate Pose Analysis"
              >
                <Sparkles className="w-3 h-3 text-cyan-300" />
                <span>Pose Sim</span>
              </button>
            )}

            <button
              onClick={() => onSelect(project)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              title="View Project Architecture & Details"
            >
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Project Title */}
        <h3
          onClick={() => onSelect(project)}
          className="text-lg sm:text-xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors cursor-pointer mb-2.5 flex items-center justify-between"
        >
          <span>{project.title}</span>
        </h3>

        {/* Description */}
        <p className="text-sm text-slate-300 leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Highlights */}
        <div className="space-y-1.5 mb-6 text-xs text-slate-400">
          {project.highlights.slice(0, 2).map((highlight, idx) => (
            <div key={idx} className="flex items-start gap-2">
              <span className={isCyan ? 'text-cyan-400 font-bold' : 'text-emerald-400 font-bold'}>
                ▹
              </span>
              <span>{highlight}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack Pills & Bottom Actions */}
      <div style={{ transform: 'translateZ(30px)' }} className="relative z-20 pt-4 border-t border-white/10">
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-900/90 text-slate-300 border border-white/5"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-1">
          <button
            onClick={() => onSelect(project)}
            className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
          >
            <span>Architecture & Specs</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          <div className="flex items-center gap-2">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              aria-label={`GitHub repo for ${project.title}`}
              className="p-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-cyan-300 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <button
              onClick={() => onSelect(project)}
              className="p-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-emerald-300 transition-colors"
              title="Quick Preview"
            >
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
