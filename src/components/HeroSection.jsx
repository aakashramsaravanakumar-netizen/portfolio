import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import MagneticButton from './MagneticButton';
import {
  ArrowRight,
  Send,
  MapPin,
  Sparkles,
  Trophy,
  Brain,
  Code2,
  Terminal,
  ExternalLink
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function HeroSection({ onOpenPlayground }) {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const roles = personalInfo.roles;
    const currentFullText = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentFullText.substring(0, displayedText.length + 1));
        if (displayedText.length === currentFullText.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayedText(currentFullText.substring(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRoleIndex]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', damping: 20, stiffness: 200 },
    },
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 overflow-hidden">
      {/* Background radial gradient halos */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[350px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Status & Location Pill */}
          <motion.div variants={itemVariants} className="mb-6 flex flex-wrap items-center justify-center gap-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-emerald-500/30 backdrop-blur-md shadow-[0_0_15px_rgba(16,185,129,0.2)]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-xs font-semibold text-emerald-300 tracking-wide">
                {personalInfo.availability}
              </span>
            </div>

            <div className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-white/10 backdrop-blur-md text-xs text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              <span>{personalInfo.location}</span>
            </div>
          </motion.div>

          {/* Greeting & Name */}
          <motion.div variants={itemVariants} className="space-y-2 mb-4">
            <span className="text-sm sm:text-base font-mono text-cyan-400 tracking-widest uppercase">
              // HELLO WORLD, I AM
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight">
              <span className="text-slate-100">Aakashram </span>
              <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(6,182,212,0.4)]">
                S
              </span>
            </h1>
            <p className="text-xs sm:text-sm font-mono text-slate-400 tracking-wide">
              ({personalInfo.fullName})
            </p>
          </motion.div>

          {/* Typewriter Role Container */}
          <motion.div
            variants={itemVariants}
            className="h-14 sm:h-16 flex items-center justify-center mb-6"
          >
            <div className="px-5 py-2 rounded-xl bg-slate-900/70 border border-cyan-500/30 backdrop-blur-md shadow-[0_0_25px_rgba(6,182,212,0.15)] flex items-center gap-2">
              <Terminal className="w-4 h-4 text-cyan-400 animate-pulse" />
              <span className="text-lg sm:text-2xl md:text-3xl font-mono font-bold text-slate-100">
                {displayedText}
              </span>
              <span className="inline-block w-2 sm:w-2.5 h-6 sm:h-8 bg-cyan-400 animate-pulse ml-0.5" />
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="max-w-2xl text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed mb-8 px-4"
          >
            {personalInfo.tagline}
          </motion.p>

          {/* Magnetic Primary Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10"
          >
            <MagneticButton
              strength={0.3}
              onClick={() => scrollTo('projects')}
              className="px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.7)] transition-all flex items-center gap-2 group"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </MagneticButton>

            <MagneticButton
              strength={0.3}
              onClick={() => scrollTo('contact')}
              className="px-6 py-3.5 rounded-xl font-semibold text-sm bg-slate-900/90 text-slate-200 border border-cyan-500/40 hover:border-cyan-400 hover:bg-slate-800/80 transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.15)] hover:shadow-[0_0_25px_rgba(6,182,212,0.3)]"
            >
              <Send className="w-4 h-4 text-cyan-400" />
              <span>Let's Connect</span>
            </MagneticButton>

            <MagneticButton
              strength={0.3}
              onClick={onOpenPlayground}
              className="px-5 py-3.5 rounded-xl font-semibold text-sm bg-emerald-500/10 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-500/20 transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.15)] hover:shadow-[0_0_25px_rgba(16,185,129,0.3)]"
            >
              <Sparkles className="w-4 h-4 text-emerald-400 animate-spin-slow" />
              <span>AI & Code Lab</span>
            </MagneticButton>

            {/* Social Links */}
            <div className="flex items-center gap-2 pl-2">
              <MagneticButton
                strength={0.35}
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="w-12 h-12 rounded-xl bg-slate-900/80 border border-white/10 hover:border-cyan-400 text-slate-300 hover:text-cyan-300 flex items-center justify-center transition-all hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]"
              >
                <GithubIcon className="w-5 h-5" />
              </MagneticButton>

              <MagneticButton
                strength={0.35}
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="w-12 h-12 rounded-xl bg-slate-900/80 border border-white/10 hover:border-emerald-400 text-slate-300 hover:text-emerald-300 flex items-center justify-center transition-all hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]"
              >
                <LinkedinIcon className="w-5 h-5" />
              </MagneticButton>
            </div>
          </motion.div>

          {/* Quick Credential Badges */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-3xl"
          >
            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/50 border border-white/5 backdrop-blur-sm text-left">
              <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <Trophy className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-200">SIH Winner 2026 & 2025</p>
                <p className="text-[11px] text-slate-400">Smart India Hackathon Champion</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/50 border border-white/5 backdrop-blur-sm text-left">
              <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <Brain className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-200">Computer Vision & AI</p>
                <p className="text-[11px] text-slate-400">OpenCV, TensorFlow, CNN/RNN</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/50 border border-white/5 backdrop-blur-sm text-left">
              <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <Code2 className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-200">Full-Stack Architect</p>
                <p className="text-[11px] text-slate-400">Node, Express, Mongo & SQL</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
