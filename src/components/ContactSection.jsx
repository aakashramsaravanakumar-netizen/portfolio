import { useState } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import MagneticButton from './MagneticButton';
import confetti from 'canvas-confetti';
import {
  Phone,
  Mail,
  MapPin,
  Send,
  Check,
  Copy,
  Sparkles,
  MessageSquare
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function ContactSection({ onToast }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedKey, setCopiedKey] = useState(null);

  const handleCopy = (text, key, label) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    if (onToast) {
      onToast('Copied to Clipboard!', `${label} has been copied.`);
    }
    setTimeout(() => {
      setCopiedKey(null);
    }, 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });

      // Trigger Confetti explosion
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#06B6D4', '#10B981', '#38BDF8', '#34D399'],
      });

      if (onToast) {
        onToast(
          'Message Dispatched Successfully!',
          'Thank you for reaching out, Aakashram will get back to you shortly.'
        );
      }
    }, 800);
  };

  return (
    <section id="contact" className="relative py-24 px-4 max-w-6xl mx-auto">
      {/* Background glow accents */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[500px] h-[400px] bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>communication.channel.open</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-100">
          Let’s Build Something{' '}
          <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
            Extraordinary
          </span>
        </h2>
        <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
          Open for full-stack engineering roles, computer vision research projects, hackathons, and collaborative opportunities.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Info & Click-to-copy badges */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 space-y-6"
        >
          <div className="p-6 rounded-2xl bg-[#0B111E] border border-white/10 backdrop-blur-xl">
            <h3 className="text-xl font-bold text-slate-100 mb-2">Direct Contact Nodes</h3>
            <p className="text-xs text-slate-400 mb-6">
              Click any badge below to instantly copy details to your clipboard.
            </p>

            <div className="space-y-3">
              {/* Phone Badge */}
              <div
                onClick={() => handleCopy(personalInfo.phone, 'phone', 'Phone Number')}
                className="group p-3.5 rounded-xl bg-slate-900/80 border border-white/5 hover:border-cyan-500/40 cursor-pointer transition-all flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 group-hover:scale-110 transition-transform">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 block">CALL / WHATSAPP</span>
                    <span className="text-xs sm:text-sm font-mono font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors">
                      {personalInfo.phone}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 group-hover:text-cyan-400">
                  {copiedKey === 'phone' ? (
                    <span className="text-emerald-400 flex items-center gap-1">
                      <Check className="w-3.5 h-3.5" /> Copied!
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 opacity-60 group-hover:opacity-100">
                      <Copy className="w-3.5 h-3.5" /> Copy
                    </span>
                  )}
                </div>
              </div>

              {/* Email Badge */}
              <div
                onClick={() => handleCopy(personalInfo.email, 'email', 'Email Address')}
                className="group p-3.5 rounded-xl bg-slate-900/80 border border-white/5 hover:border-emerald-500/40 cursor-pointer transition-all flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 group-hover:scale-110 transition-transform">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 block">PRIMARY EMAIL</span>
                    <span className="text-xs sm:text-sm font-mono font-semibold text-slate-200 group-hover:text-emerald-300 transition-colors">
                      {personalInfo.email}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 group-hover:text-emerald-400">
                  {copiedKey === 'email' ? (
                    <span className="text-emerald-400 flex items-center gap-1">
                      <Check className="w-3.5 h-3.5" /> Copied!
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 opacity-60 group-hover:opacity-100">
                      <Copy className="w-3.5 h-3.5" /> Copy
                    </span>
                  )}
                </div>
              </div>

              {/* Location Badge */}
              <div
                onClick={() => handleCopy(personalInfo.location, 'location', 'Location')}
                className="group p-3.5 rounded-xl bg-slate-900/80 border border-white/5 hover:border-cyan-500/40 cursor-pointer transition-all flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 group-hover:scale-110 transition-transform">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 block">BASE LOCATION</span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors">
                      {personalInfo.shortLocation}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 group-hover:text-cyan-400">
                  {copiedKey === 'location' ? (
                    <span className="text-emerald-400 flex items-center gap-1">
                      <Check className="w-3.5 h-3.5" /> Copied!
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 opacity-60 group-hover:opacity-100">
                      <Copy className="w-3.5 h-3.5" /> Copy
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Social Network Badges */}
            <div className="mt-6 pt-5 border-t border-white/10 grid grid-cols-2 gap-3">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-white/5 hover:border-cyan-400/50 flex items-center gap-2.5 text-xs font-semibold text-slate-200 transition-all hover:shadow-[0_0_15px_rgba(6,182,212,0.25)]"
              >
                <LinkedinIcon className="w-4 h-4 text-cyan-400" />
                <span>LinkedIn</span>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-white/5 hover:border-emerald-400/50 flex items-center gap-2.5 text-xs font-semibold text-slate-200 transition-all hover:shadow-[0_0_15px_rgba(16,185,129,0.25)]"
              >
                <GithubIcon className="w-4 h-4 text-emerald-400" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Glassmorphic Contact Card with Floating Labels */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7"
        >
          <div className="p-6 sm:p-8 rounded-2xl bg-[#0B111E] border border-cyan-500/25 backdrop-blur-xl shadow-[0_15px_40px_rgba(0,0,0,0.6)] relative overflow-hidden">
            {/* Top glowing line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-500" />

            <h3 className="text-xl sm:text-2xl font-bold text-slate-100 mb-2">
              Send an Encrypted Message
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mb-8">
              Fill out the form below to transmit an inquiry directly to my inbox.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Floating Name Input */}
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder=" "
                  className="peer w-full px-4 pt-6 pb-2 rounded-xl bg-slate-900/90 border border-white/10 text-slate-100 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                />
                <label
                  htmlFor="name"
                  className="absolute left-4 top-2 text-[11px] font-mono uppercase tracking-wider text-slate-400 peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-slate-500 peer-focus:top-2 peer-focus:text-[11px] peer-focus:text-cyan-400 transition-all pointer-events-none"
                >
                  Your Full Name
                </label>
              </div>

              {/* Floating Email Input */}
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder=" "
                  className="peer w-full px-4 pt-6 pb-2 rounded-xl bg-slate-900/90 border border-white/10 text-slate-100 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                />
                <label
                  htmlFor="email"
                  className="absolute left-4 top-2 text-[11px] font-mono uppercase tracking-wider text-slate-400 peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-slate-500 peer-focus:top-2 peer-focus:text-[11px] peer-focus:text-cyan-400 transition-all pointer-events-none"
                >
                  Email Address
                </label>
              </div>

              {/* Floating Message Input */}
              <div className="relative">
                <textarea
                  id="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder=" "
                  className="peer w-full px-4 pt-6 pb-2 rounded-xl bg-slate-900/90 border border-white/10 text-slate-100 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all resize-none"
                />
                <label
                  htmlFor="message"
                  className="absolute left-4 top-2 text-[11px] font-mono uppercase tracking-wider text-slate-400 peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-slate-500 peer-focus:top-2 peer-focus:text-[11px] peer-focus:text-cyan-400 transition-all pointer-events-none"
                >
                  Your Project or Inquiry Message
                </label>
              </div>

              {/* Magnetic Submit Button */}
              <MagneticButton
                strength={0.25}
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl font-bold text-sm bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 text-slate-950 shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] transition-all flex items-center justify-center gap-2 group disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                    Transmitting...
                  </span>
                ) : (
                  <>
                    <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                    <span>Transmit Message</span>
                  </>
                )}
              </MagneticButton>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
