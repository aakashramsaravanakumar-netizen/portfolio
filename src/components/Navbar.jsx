import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { Menu, X, FileText, Sparkles, Terminal } from 'lucide-react';
import MagneticButton from './MagneticButton';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Awards', href: '#awards' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ onOpenPlayground }) {
  const [activeSection, setActiveSection] = useState('about');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Section spy
      const sections = ['about', 'projects', 'skills', 'awards', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href) => {
    setMobileMenuOpen(false);
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex justify-center px-4 pt-4 sm:pt-6">
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`w-full max-w-5xl transition-all duration-300 rounded-full px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between ${
          isScrolled
            ? 'bg-[#0D1322]/85 backdrop-blur-xl border border-cyan-500/25 shadow-[0_8px_32px_rgba(0,0,0,0.6)] shadow-cyan-950/30'
            : 'bg-[#0D1322]/50 backdrop-blur-md border border-white/10'
        }`}
      >
        {/* Brand / Logo */}
        <a
          href="#"
          className="group flex items-center gap-2.5 text-slate-100 font-semibold tracking-wide"
        >
          <div className="relative flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-tr from-cyan-500/30 via-slate-800 to-emerald-500/20 border border-cyan-400/40 group-hover:border-cyan-300 transition-colors shadow-[0_0_15px_rgba(6,182,212,0.3)]">
            <span className="font-mono text-xs font-bold text-cyan-300">AS</span>
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-400 animate-ping opacity-75" />
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-400" />
          </div>
          <div className="hidden sm:block">
            <span className="text-sm font-bold bg-gradient-to-r from-slate-100 via-cyan-100 to-emerald-300 bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
            <span className="block text-[10px] font-mono text-cyan-400/80 -mt-0.5">
              &lt;developer /&gt;
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1 rounded-full border border-white/5">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace('#', '');
            return (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className={`relative px-4 py-1.5 text-xs font-medium rounded-full transition-colors duration-200 ${
                  isActive ? 'text-cyan-300 font-semibold' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="navbar-active-pill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 border border-cyan-400/50 shadow-[0_0_12px_rgba(6,182,212,0.3)]"
                    transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* Actions: AI Playground & Resume */}
        <div className="hidden sm:flex items-center gap-2.5">
          <MagneticButton
            strength={0.25}
            onClick={onOpenPlayground}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 transition-all hover:shadow-[0_0_15px_rgba(16,185,129,0.3)]"
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>AI Playground</span>
          </MagneticButton>

          <MagneticButton
            strength={0.25}
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('#contact');
            }}
            className="group relative flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_25px_rgba(6,182,212,0.6)] transition-all"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </MagneticButton>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenPlayground}
            className="p-2 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs"
            title="Open AI Playground"
          >
            <Sparkles className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full bg-slate-800/80 text-slate-200 border border-white/10"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-20 left-4 right-4 p-4 rounded-2xl bg-[#0D1322]/95 backdrop-blur-2xl border border-cyan-500/30 shadow-[0_15px_40px_rgba(0,0,0,0.8)] z-50 flex flex-col gap-2 md:hidden"
          >
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium text-slate-200 hover:text-cyan-300 hover:bg-slate-800/60 transition-colors"
              >
                <span>{item.label}</span>
                <span className="text-xs font-mono text-cyan-400/60">#</span>
              </button>
            ))}
            <div className="pt-2 mt-1 border-t border-white/10 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPlayground();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 text-sm font-medium"
              >
                <Sparkles className="w-4 h-4" />
                <span>Launch AI & Code Playground</span>
              </button>
              <button
                onClick={() => scrollTo('#contact')}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 text-sm font-semibold shadow-lg shadow-cyan-500/20"
              >
                <FileText className="w-4 h-4" />
                <span>Resume / Contact</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

