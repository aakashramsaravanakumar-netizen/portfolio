import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/portfolioData';
import ProjectTiltCard from './ProjectTiltCard';
import ProjectModal from './ProjectModal';
import { Code2, Filter, Sparkles } from 'lucide-react';

const projectFilters = ['All', 'AI / ML', 'Full-Stack', 'Core'];

export default function ProjectsSection({ onTriggerPlayground }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'All') return true;
    return project.category === activeFilter;
  });

  return (
    <section id="projects" className="relative py-24 px-4 max-w-6xl mx-auto">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
          <Code2 className="w-3.5 h-3.5" />
          <span>featured.engineering.projects</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-100">
          Featured{' '}
          <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
            Software & AI Projects
          </span>
        </h2>
        <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
          Interactive full-stack applications, deep learning vision models, and engineering prototypes with dynamic 3D tilt physics.
        </p>
      </motion.div>

      {/* Filter Tabs with Framer Motion layoutId */}
      <div className="flex items-center justify-center mb-12">
        <div className="flex items-center gap-1.5 p-1.5 rounded-full bg-slate-900/80 border border-white/10 backdrop-blur-md">
          {projectFilters.map((tab) => {
            const isActive = activeFilter === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`relative px-4 py-1.5 text-xs sm:text-sm font-medium rounded-full transition-colors ${
                  isActive ? 'text-slate-950 font-bold' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="projects-active-pill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 shadow-[0_0_15px_rgba(6,182,212,0.5)]"
                    transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
      >
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              key={project.id}
            >
              <ProjectTiltCard
                project={project}
                onSelect={setSelectedProject}
                onTriggerPlayground={onTriggerPlayground}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Project Quick-Preview / Specs Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onOpenPlayground={onTriggerPlayground}
        />
      )}
    </section>
  );
}

