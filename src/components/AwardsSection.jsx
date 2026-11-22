import { motion } from 'framer-motion';
import { awardsAndHackathons } from '../data/portfolioData';
import { Trophy, Star, Award, Sparkles, Users, Calendar, CheckCircle2 } from 'lucide-react';

const iconMap = {
  Trophy,
  Star,
  Award,
  Sparkles,
  Users,
};

export default function AwardsSection() {
  return (
    <section id="awards" className="relative py-24 px-4 max-w-5xl mx-auto">
      {/* Background glow halo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
          <Trophy className="w-3.5 h-3.5" />
          <span>achievements.milestones.verify</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-100">
          Hackathons, Honors &{' '}
          <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
            Leadership
          </span>
        </h2>
        <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
          Proven track record in high-stakes hackathons, competitive engineering sprints, and technical team leadership.
        </p>
      </motion.div>

      {/* Vertical Animated Timeline */}
      <div className="relative">
        {/* Glowing vertical line */}
        <div className="absolute top-2 bottom-2 left-4 sm:left-1/2 sm:-translate-x-1/2 w-0.5 bg-gradient-to-b from-cyan-500 via-emerald-400 to-cyan-500 opacity-30" />

        <div className="space-y-10 sm:space-y-12">
          {awardsAndHackathons.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Trophy;
            const isEven = index % 2 === 0;
            const isCyan = item.color === 'cyan';

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col sm:flex-row items-start sm:items-center ${
                  isEven ? 'sm:flex-row-reverse' : ''
                } gap-6 sm:gap-12 pl-12 sm:pl-0`}
              >
                {/* Milestone Node on Center Line */}
                <div className="absolute left-2.5 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#090D16] border-2 border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.6)] flex items-center justify-center z-10">
                  <span
                    className={`w-2.5 h-2.5 rounded-full ${
                      isCyan ? 'bg-cyan-400' : 'bg-emerald-400'
                    }`}
                  />
                </div>

                {/* Content Card (Left or Right on desktop) */}
                <div className="w-full sm:w-[calc(50%-2rem)]">
                  <div className="group rounded-2xl bg-[#0B111E] border border-white/10 hover:border-cyan-500/40 p-6 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(6,182,212,0.15)] relative overflow-hidden">
                    {/* Top Accent Line */}
                    <div
                      className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${
                        isCyan ? 'from-cyan-400 to-sky-500' : 'from-emerald-400 to-teal-500'
                      }`}
                    />

                    <div className="flex items-center justify-between gap-3 mb-3">
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold border ${
                          isCyan
                            ? 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30'
                            : 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30'
                        }`}
                      >
                        <IconComponent className="w-3.5 h-3.5" />
                        <span>{item.badge}</span>
                      </span>

                      <span className="text-xs font-mono font-bold text-slate-400 bg-slate-800/80 px-2.5 py-1 rounded-md border border-white/5">
                        {item.year}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-100 group-hover:text-cyan-300 transition-colors mb-1">
                      {item.title}
                    </h3>

                    <p className="text-xs font-medium text-emerald-400 mb-3">
                      {item.organization}
                    </p>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Empty placeholder spacer for the opposite column on desktop */}
                <div className="hidden sm:block w-[calc(50%-2rem)]" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

