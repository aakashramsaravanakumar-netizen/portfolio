import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] bg-slate-900/60 z-50 pointer-events-none">
      <motion.div
        className="h-full bg-gradient-to-r from-cyan-500 via-emerald-400 to-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.8)] origin-left"
        style={{ scaleX }}
      />
    </div>
  );
}

