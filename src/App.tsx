import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Splash from './components/Splash';
import Home from './components/sections/Home';
import Life from './components/sections/Life';
import Turkism from './components/sections/Turkism';
import Works from './components/sections/Works';
import Thanks from './components/sections/Thanks';
import { Section } from './types';
import { Star, Heart, Zap, Sparkles, Moon, Sun, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const SECTIONS: Section[] = ['home', 'life', 'turkism', 'works', 'thanks'];

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [activeSection, setActiveSection] = useState<Section>('home');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const mainRef = useRef<HTMLElement>(null);

  const handleSectionChange = useCallback((section: Section) => {
    if (section === activeSection) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveSection(section);
      if (mainRef.current) {
        mainRef.current.scrollTop = 0;
      }
      setTimeout(() => setIsTransitioning(false), 600);
    }, 400);
  }, [activeSection]);

  const nextSection = useCallback(() => {
    const currentIndex = SECTIONS.indexOf(activeSection);
    const nextIndex = (currentIndex + 1) % SECTIONS.length;
    handleSectionChange(SECTIONS[nextIndex]);
  }, [activeSection, handleSectionChange]);

  const prevSection = useCallback(() => {
    const currentIndex = SECTIONS.indexOf(activeSection);
    const prevIndex = (currentIndex - 1 + SECTIONS.length) % SECTIONS.length;
    handleSectionChange(SECTIONS[prevIndex]);
  }, [activeSection, handleSectionChange]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        nextSection();
      } else if (e.key === 'ArrowLeft') {
        prevSection();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSection, prevSection]);

  const renderSection = () => {
    switch (activeSection) {
      case 'home': return <Home onSectionChange={handleSectionChange} />;
      case 'life': return <Life />;
      case 'turkism': return <Turkism />;
      case 'works': return <Works />;
      case 'thanks': return <Thanks />;
      default: return <Home onSectionChange={handleSectionChange} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-white selection:bg-indigo-500 selection:text-white flex overflow-hidden">
      <AnimatePresence>
        {showSplash && <Splash onFinish={() => setShowSplash(false)} />}
      </AnimatePresence>

      {!showSplash && (
        <div className="flex-1 flex flex-col h-screen overflow-hidden relative">
          {/* Stickers / Floating Elements */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-10">
            <motion.div animate={{ y: [0, -40, 0], rotate: [0, 15, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-20 left-20 text-indigo-500"><Star size={120} fill="currentColor" /></motion.div>
            <motion.div animate={{ y: [0, 50, 0], rotate: [0, -20, 0] }} transition={{ duration: 8, repeat: Infinity }} className="absolute bottom-40 right-20 text-rose-500"><Heart size={100} fill="currentColor" /></motion.div>
            <motion.div animate={{ x: [0, 60, 0], scale: [1, 1.3, 1] }} transition={{ duration: 7, repeat: Infinity }} className="absolute top-1/2 left-1/3 text-amber-500"><Zap size={80} fill="currentColor" /></motion.div>
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="absolute top-1/4 right-1/4 text-emerald-500"><Sparkles size={150} fill="currentColor" /></motion.div>
            <motion.div animate={{ scale: [1, 1.6, 1], opacity: [0.3, 0.7, 0.3] }} transition={{ duration: 9, repeat: Infinity }} className="absolute bottom-20 left-1/4 text-purple-500"><Moon size={90} fill="currentColor" /></motion.div>
            <motion.div animate={{ y: [0, -30, 0], x: [0, 30, 0] }} transition={{ duration: 10, repeat: Infinity }} className="absolute top-1/3 right-10 text-cyan-500"><Sun size={110} fill="currentColor" /></motion.div>
          </div>

          {/* Transition Explosion */}
          <AnimatePresence>
            {isTransitioning && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] pointer-events-none flex items-center justify-center overflow-hidden"
              >
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0, x: 0, y: 0, opacity: 0 }}
                    animate={{ 
                      scale: [0, 5, 0], 
                      x: (Math.random() - 0.5) * 2000, 
                      y: (Math.random() - 0.5) * 2000,
                      opacity: [0, 1, 0]
                    }}
                    transition={{ duration: 0.6, ease: "circOut" }}
                    className={`absolute h-32 w-32 rounded-full blur-2xl ${
                      ['bg-indigo-500', 'bg-rose-500', 'bg-amber-500', 'bg-emerald-500', 'bg-purple-500', 'bg-cyan-500'][i % 6]
                    }`}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Content Area */}
          <main ref={mainRef} className="flex-1 overflow-y-auto p-8 custom-scrollbar relative z-10">
            <div className="max-w-6xl mx-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSection}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  {renderSection()}
                </motion.div>
              </AnimatePresence>
            </div>
          </main>

          {/* Navigation Controls */}
          <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevSection}
              className="h-14 w-14 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-xl text-white border border-white/20 hover:bg-white/20 transition-all"
            >
              <ChevronLeft size={32} />
            </motion.button>
            
            <div className="flex gap-2 bg-white/10 backdrop-blur-xl px-6 py-3 rounded-full border border-white/20">
              {SECTIONS.map((s, i) => (
                <div 
                  key={s} 
                  className={`h-3 w-3 rounded-full transition-all duration-300 ${activeSection === s ? 'bg-indigo-500 w-8' : 'bg-white/30'}`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextSection}
              className="flex items-center gap-3 rounded-full bg-indigo-600 px-8 py-4 text-xl font-black uppercase tracking-widest text-white shadow-2xl border-2 border-white/20 hover:bg-indigo-500 transition-all"
            >
              Sonraki
              <ArrowRight size={28} />
            </motion.button>
          </div>
        </div>
      )}
    </div>
  );
}
