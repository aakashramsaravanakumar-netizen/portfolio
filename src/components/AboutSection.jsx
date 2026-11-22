import { useState } from 'react';
import { motion } from 'framer-motion';
import { personalInfo, education, languages, stats } from '../data/portfolioData';
import {
  GraduationCap,
  Globe2,
  Copy,
  Check,
  Terminal,
  FileCode,
  Sparkles,
  Award,
  BookOpen,
  MapPin,
  Calendar
} from 'lucide-react';

export default function AboutSection({ onCopyToast }) {
  const [activeTab, setActiveTab] = useState('json');
  const [copied, setCopied] = useState(false);

  const jsonString = JSON.stringify(personalInfo.codeBio, null, 2);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(jsonString);
    setCopied(true);
    if (onCopyToast) onCopyToast('Code Snippet Copied', 'Bio JSON copied to clipboard');
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="about" className="relative py-24 px-4 max-w-6xl mx-auto">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
          <Terminal className="w-3.5 h-3.5" />
          <span>system.manifest.about</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-100">
          Engineering Intelligence &{' '}
          <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            Scalable Systems
          </span>
        </h2>
        <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
          A deep dive into my background, academic credentials, and software engineering philosophy.
        </p>
      </motion.div>

      {/* Split Layout: Code Editor Bio on Left + Education & Languages on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Interactive Code Editor Bio */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 rounded-2xl bg-[#0B101D] border border-cyan-500/20 shadow-[0_10px_35px_rgba(0,0,0,0.6)] overflow-hidden"
        >
          {/* Editor Header Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#080C16] border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="ml-2 text-xs font-mono text-slate-400">~/aakashram/profile</span>
            </div>

            {/* Editor Tabs */}
            <div className="flex items-center gap-1">
              <button
                onClick={() => setActiveTab('json')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded text-xs font-mono transition-colors ${
                  activeTab === 'json'
                    ? 'bg-slate-800 text-cyan-300 border border-cyan-500/30'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <FileCode className="w-3.5 h-3.5" />
                <span>aakashram.json</span>
              </button>
              <button
                onClick={() => setActiveTab('terminal')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded text-xs font-mono transition-colors ${
                  activeTab === 'terminal'
                    ? 'bg-slate-800 text-emerald-300 border border-emerald-500/30'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Terminal className="w-3.5 h-3.5" />
                <span>mission.sh</span>
              </button>
            </div>

            {/* Copy snippet button */}
            <button
              onClick={handleCopyCode}
              className="p-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-cyan-300 transition-colors text-xs flex items-center gap-1"
              title="Copy JSON to clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-[10px] text-emerald-400 font-mono">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span className="text-[10px] font-mono">Copy</span>
                </>
              )}
            </button>
          </div>

          {/* Editor Body */}
          <div className="p-5 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto max-h-[460px] scrollbar-thin">
            {activeTab === 'json' ? (
              <pre className="text-slate-300">
                <code>
                  <span className="text-slate-500">1</span>  {'{'}{'\n'}
                  <span className="text-slate-500">2</span>    <span className="text-cyan-400">"developer"</span>: <span className="text-emerald-300">"Aakashram S"</span>,{'\n'}
                  <span className="text-slate-500">3</span>    <span className="text-cyan-400">"degree"</span>: <span className="text-emerald-300">"B.E. Computer Science & Engineering"</span>,{'\n'}
                  <span className="text-slate-500">4</span>    <span className="text-cyan-400">"institution"</span>: <span className="text-emerald-300">"PSNA College of Engg & Tech, Dindigul"</span>,{'\n'}
                  <span className="text-slate-500">5</span>    <span className="text-cyan-400">"location"</span>: <span className="text-emerald-300">"Melur, Madurai, Tamil Nadu, India"</span>,{'\n'}
                  <span className="text-slate-500">6</span>    <span className="text-cyan-400">"coreSpecialties"</span>: [{'\n'}
                  <span className="text-slate-500">7</span>      <span className="text-amber-300">"Full-Stack Web Architectures (MERN / Node)"</span>,{'\n'}
                  <span className="text-slate-500">8</span>      <span className="text-amber-300">"Computer Vision & Deep Learning (OpenCV, CNN)"</span>,{'\n'}
                  <span className="text-slate-500">9</span>      <span className="text-amber-300">"Agentic AI & Neural Pipelines"</span>,{'\n'}
                  <span className="text-slate-500">10</span>     <span className="text-amber-300">"Relational & Distributed DBs (MySQL, MongoDB)"</span>{'\n'}
                  <span className="text-slate-500">11</span>   ],{'\n'}
                  <span className="text-slate-500">12</span>   <span className="text-cyan-400">"hackathonRecord"</span>: <span className="text-emerald-300">"2x Smart India Hackathon Winner (2025, 2026)"</span>,{'\n'}
                  <span className="text-slate-500">13</span>   <span className="text-cyan-400">"status"</span>: <span className="text-emerald-400">"Open for Software Engineering & AI Roles"</span>,{'\n'}
                  <span className="text-slate-500">14</span>   <span className="text-cyan-400">"passions"</span>: [{'\n'}
                  <span className="text-slate-500">15</span>     <span className="text-slate-300">"Building real-time computer vision inference systems"</span>,{'\n'}
                  <span className="text-slate-500">16</span>     <span className="text-slate-300">"Leading cross-functional engineering hackathon teams"</span>,{'\n'}
                  <span className="text-slate-500">17</span>     <span className="text-slate-300">"Designing 60fps GPU-accelerated interactive software"</span>{'\n'}
                  <span className="text-slate-500">18</span>   ]{'\n'}
                  <span className="text-slate-500">19</span> {'}'}
                </code>
              </pre>
            ) : (
              <div className="space-y-3 text-slate-300">
                <div className="flex items-center gap-2 text-cyan-400">
                  <span className="text-emerald-400">visitor@aakashram-sys:~$</span>
                  <span>./execute_vision.sh --verbose</span>
                </div>
                <p className="text-slate-400">
                  &gt; Initializing neural models for AgroAI & Talent Track... [OK]
                </p>
                <p className="text-slate-400">
                  &gt; Connecting to Node.js backend cluster & OpenCV streams... [OK]
                </p>
                <p className="text-emerald-300">
                  &gt; [SYSTEM STATUS]: Ready to craft high-impact production software and solve challenging full-stack engineering challenges.
                </p>
                <div className="pt-2 text-cyan-300 flex items-center gap-2">
                  <span className="animate-pulse">❯</span>
                  <span>Feel free to test the interactive AI & Code Playground!</span>
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Right Column: Education, Languages & Quick Stats */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-5 flex flex-col gap-6"
        >
          {/* Education Card */}
          <div className="rounded-2xl p-6 bg-slate-900/70 border border-cyan-500/20 backdrop-blur-xl shadow-lg relative overflow-hidden group hover:border-cyan-500/40 transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 mb-2">
                  Academic Degree
                </span>
                <h3 className="text-lg font-bold text-slate-100">{education.degree}</h3>
                <p className="text-sm font-medium text-emerald-400 mt-1">
                  {education.institution}
                </p>
                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 mt-2">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    {education.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    {education.period}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-white/10 space-y-2">
              {education.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-2 text-xs text-slate-300">
                  <span className="text-emerald-400 mt-0.5 font-bold">✓</span>
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Languages Badges */}
          <div className="rounded-2xl p-6 bg-slate-900/70 border border-emerald-500/20 backdrop-blur-xl shadow-lg">
            <div className="flex items-center gap-2 mb-4 text-emerald-400">
              <Globe2 className="w-5 h-5" />
              <h4 className="text-sm font-semibold tracking-wide text-slate-100 uppercase">
                Language Proficiencies
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {languages.map((lang) => (
                <div
                  key={lang.name}
                  className="p-3 rounded-xl bg-slate-800/60 border border-white/5 flex flex-col justify-between hover:border-emerald-500/30 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-slate-200">{lang.name}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {lang.level}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1.5">{lang.proficiency}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {stats.map((s, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-slate-900/50 border border-white/5 text-center"
              >
                <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                  {s.value}
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5 leading-tight">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

