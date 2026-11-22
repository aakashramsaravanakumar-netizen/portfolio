import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Sparkles, X } from 'lucide-react';

export default function Toast({ toast, onClose }) {
  if (!toast) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.9 }}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
        className="fixed bottom-6 right-6 z-[9999] flex items-center gap-3 px-5 py-3.5 rounded-xl bg-slate-900/90 backdrop-blur-xl border border-cyan-500/40 shadow-[0_0_30px_rgba(6,182,212,0.3)] text-white"
      >
        <div className="p-1 rounded-lg bg-cyan-500/20 text-cyan-400">
          {toast.type === 'success' ? (
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
          ) : (
            <Sparkles className="w-5 h-5 text-cyan-400" />
          )}
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-100">{toast.title}</p>
          {toast.message && (
            <p className="text-xs text-slate-400 mt-0.5">{toast.message}</p>
          )}
        </div>
        <button
          onClick={onClose}
          className="ml-3 p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
}

