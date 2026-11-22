import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { technicalSkills, skillCategories, marqueeSkills } from '../data/portfolioData';
import {
  Code2,
  Terminal,
  Cpu,
  Coffee,
  Globe,
  Palette,
  Server,
  Layers,
  Compass,
  Brain,
  Eye,
  Bot,
  Network,
  Activity,
  Database,
  HardDrive,
  Flame,
  GitBranch,
  Boxes,
  FolderArchive,
  Share2,
  Sparkles,
  Zap
} from 'lucide-react';

const iconMap = {
  Coffee,
  Terminal,
  Cpu,
  Code2,
  Globe,
  Palette,
  Server,
  Layers,
  Compass,
  Brain,
  Eye,
  Bot,
  Network,
  Activity,
  Database,
  HardDrive,
  Flame,
  GitBranch,
  Boxes,
  FolderArchive,
  Share2,
};

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = technicalSkills.filter((skill) => {
    if (activeCategory === 'all') return true;
    return skill.category === activeCategory;
  });

  return (
    <section id="skills" className="relative py-24 px-4 max-w-6xl mx-auto overflow-hidden">
      {/* Background glow accent */}
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono mb-3">
          <Zap className="w-3.5 h-3.5" />
          <span>skills.matrix.inspect</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-100">
          Technical Arsenal &{' '}
          <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
            Core Competencies
          </span>
        </h2>
        <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
          Specialized in modern full-stack development, deep learning computer vision architectures, and robust computer science fundamentals.
        </p>
      </motion.div>

      {/* Category Filter Tabs with LayoutId */}
      <div className="flex items-center justify-center mb-10 overflow-x-auto pb-2">
        <div className="flex items-center gap-1.5 p-1.5 rounded-full bg-slate-900/80 border border-white/10 backdrop-blur-md">
          {skillCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative px-4 py-1.5 text-xs sm:text-sm font-medium rounded-full transition-colors whitespace-nowrap ${
                  isActive ? 'text-slate-950 font-bold' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="skills-active-pill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 shadow-[0_0_15px_rgba(16,185,129,0.5)]"
                    transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Bento Grid Skills Cards */}
      <motion.div
        layout
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-4 mb-16"
      >
        <AnimatePresence>
          {filteredSkills.map((skill) => {
            const IconComponent = iconMap[skill.icon] || Code2;
            return (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.25 }}
                key={skill.name}
                className="group relative rounded-xl bg-[#0B111D] border border-white/5 hover:border-cyan-500/40 p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(6,182,212,0.15)] flex flex-col justify-between"
              >
                {/* Glow dot */}
                <div
                  className="absolute top-3 right-3 w-2 h-2 rounded-full opacity-60 group-hover:opacity-100 transition-opacity"
                  style={{ backgroundColor: skill.color }}
                />

                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center border transition-transform group-hover:scale-110"
                    style={{
                      backgroundColor: `${skill.color}15`,
                      borderColor: `${skill.color}40`,
                      color: skill.color,
                    }}
                  >
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-100 group-hover:text-cyan-300 transition-colors leading-tight">
                      {skill.name}
                    </h3>
                    <span className="text-[10px] font-mono uppercase text-slate-500">
                      {skill.category}
                    </span>
                  </div>
                </div>

                {/* Level Badge */}
                <div className="pt-2 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[11px] font-medium text-slate-400">Proficiency</span>
                  <span className="text-[11px] font-mono text-emerald-400 font-semibold">
                    {skill.level}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Infinite Smooth-Scrolling Marquee Ticker */}
      <div className="relative rounded-2xl bg-slate-900/40 border border-white/5 p-4 overflow-hidden backdrop-blur-sm">
        {/* Side fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#090D16] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#090D16] to-transparent z-10 pointer-events-none" />

        <div className="marquee-track flex gap-4 items-center">
          {[...marqueeSkills, ...marqueeSkills].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/60 border border-white/10 text-xs font-mono text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors whitespace-nowrap shadow-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

