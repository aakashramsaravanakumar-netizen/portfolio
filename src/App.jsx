import { useState } from 'react';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import ParticleCanvas from './components/ParticleCanvas';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import AwardsSection from './components/AwardsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import PlaygroundModal from './components/PlaygroundModal';
import Toast from './components/Toast';

export default function App() {
  const [isPlaygroundOpen, setIsPlaygroundOpen] = useState(false);
  const [playgroundInitialTab, setPlaygroundInitialTab] = useState('number-game');
  const [toast, setToast] = useState(null);

  const showToast = (title, message = '', type = 'success') => {
    setToast({ title, message, type });
    setTimeout(() => {
      setToast(null);
    }, 3500);
  };

  const handleOpenPlayground = (tab = 'number-game') => {
    setPlaygroundInitialTab(tab);
    setIsPlaygroundOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-[#090D16] text-slate-100 overflow-x-hidden">
      {/* Sleek Top Neon Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Trailing Magnetic Glowing Cursor */}
      <CustomCursor />

      {/* Interactive Constellation / Particle Canvas Background */}
      <ParticleCanvas />

      {/* Subtle Background Cyber Grid Overlay */}
      <div className="fixed inset-0 bg-grid-pattern opacity-60 pointer-events-none z-0" />

      {/* Main App Layout */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Floating Glassmorphic Pill Navbar */}
        <Navbar onOpenPlayground={() => handleOpenPlayground('number-game')} />

        {/* 1. Hero Section */}
        <HeroSection onOpenPlayground={() => handleOpenPlayground('number-game')} />

        {/* 2. About & Education Section */}
        <AboutSection onCopyToast={showToast} />

        {/* 3. Featured Projects Section */}
        <ProjectsSection onTriggerPlayground={handleOpenPlayground} />

        {/* 4. Technical Skills Section */}
        <SkillsSection />

        {/* 5. Hackathons & Awards Section */}
        <AwardsSection />

        {/* 6. Contact Section */}
        <ContactSection onToast={showToast} />

        {/* Footer */}
        <Footer />
      </div>

      {/* Live Interactive "AI & Code Playground" Modal */}
      <PlaygroundModal
        isOpen={isPlaygroundOpen}
        onClose={() => setIsPlaygroundOpen(false)}
        initialTab={playgroundInitialTab}
      />

      {/* Toast Notification Container */}
      <Toast toast={toast} onClose={() => setToast(null)} />
    </div>
  );
}
