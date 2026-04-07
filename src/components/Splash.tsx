import { motion, AnimatePresence } from 'motion/react';
import { GraduationCap, Sparkles, Star, Heart, Circle, Play } from 'lucide-react';
import { useState, useEffect } from 'react';

interface SplashProps {
  onFinish: () => void;
}

const COLORS = [
  'text-red-400', 'text-blue-400', 'text-yellow-400', 'text-green-400', 
  'text-purple-400', 'text-pink-400', 'text-orange-400', 'text-cyan-400',
  'text-white'
];

const BG_COLORS = [
  'bg-indigo-600', 'bg-rose-500', 'bg-emerald-500', 'bg-amber-500'
];

export default function Splash({ onFinish }: SplashProps) {
  const [step, setStep] = useState<'credits' | 'explosion'>('credits');

  useEffect(() => {
    // Step 1: Show Credits (3 seconds)
    const creditsTimer = setTimeout(() => {
      setStep('explosion');
      
      // Step 2: Show Explosion and then Finish automatically (after 3 more seconds)
      const finishTimer = setTimeout(() => {
        onFinish();
      }, 3000);

      return () => clearTimeout(finishTimer);
    }, 3000);

    return () => clearTimeout(creditsTimer);
  }, [onFinish]);

  const particles = [...Array(30)].map((_, i) => {
    const type = i % 4;
    const Icon = type === 0 ? Star : type === 1 ? Heart : type === 2 ? Circle : Sparkles;
    return {
      id: i,
      Icon,
      color: COLORS[i % COLORS.length],
      delay: Math.random() * 1,
      duration: 1 + Math.random() * 1,
      x: (Math.random() - 0.5) * 1500,
      y: (Math.random() - 0.5) * 1500,
      scale: 0.8 + Math.random() * 1.2,
      rotate: Math.random() * 360
    };
  });

  return (
    <motion.div
      initial={{ opacity: 1 }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-950 overflow-hidden"
    >
      <AnimatePresence mode="wait">
        {step === 'credits' ? (
          <motion.div
            key="credits"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.5, filter: "blur(20px)" }}
            transition={{ duration: 1 }}
            className="relative z-50 max-w-5xl text-center px-12"
          >
            <div className="bg-white/5 backdrop-blur-3xl p-16 rounded-[4rem] border-2 border-white/10 shadow-2xl">
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-12 flex justify-center"
              >
                <div className="h-32 w-32 rounded-3xl bg-indigo-600 flex items-center justify-center text-white shadow-2xl">
                  <GraduationCap size={64} />
                </div>
              </motion.div>
              <h2 className="text-5xl font-black text-white leading-tight tracking-tight">
                Gökhan Can Özdemir, Zeynep Güngör ve Zeynep Çetinkaya tarafından <span className="text-indigo-400">özenle</span> oluşturulmuştur.
              </h2>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="explosion"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative w-full h-full flex flex-col items-center justify-center"
          >
            {/* Background Glows */}
            <div className="absolute inset-0 z-0">
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={`glow-${i}`}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ 
                    scale: [0, 6, 10], 
                    opacity: [0, 0.3, 0],
                    x: (Math.random() - 0.5) * 1500,
                    y: (Math.random() - 0.5) * 1500
                  }}
                  transition={{ 
                    duration: 3, 
                    delay: Math.random() * 1, 
                    ease: "circOut",
                    repeat: Infinity,
                  }}
                  className={`absolute h-96 w-96 rounded-full blur-[100px] ${BG_COLORS[i % BG_COLORS.length]}`}
                />
              ))}
            </div>

            {/* Bursting Particles */}
            <div className="absolute inset-0 z-10 pointer-events-none">
              {particles.map((p) => (
                <motion.div
                  key={p.id}
                  initial={{ x: 0, y: 0, scale: 0, opacity: 0, rotate: 0 }}
                  animate={{ 
                    x: p.x, 
                    y: p.y, 
                    scale: p.scale, 
                    opacity: [0, 1, 0],
                    rotate: p.rotate
                  }}
                  transition={{ 
                    duration: p.duration, 
                    delay: p.delay, 
                    ease: "circOut",
                    repeat: Infinity,
                  }}
                  className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${p.color}`}
                >
                  <p.Icon size={40 + Math.random() * 30} fill={p.id % 2 === 0 ? "currentColor" : "none"} strokeWidth={2} />
                </motion.div>
              ))}
            </div>

            {/* Center Content */}
            <div className="relative z-30 flex flex-col items-center">
              <motion.div
                initial={{ scale: 0, rotate: -180, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                className="mb-12"
              >
                <div className="relative h-64 w-64 flex items-center justify-center rounded-[4rem] bg-white text-indigo-600 shadow-[0_0_80px_rgba(255,255,255,0.3)] border-8 border-indigo-500/20">
                  <GraduationCap size={120} />
                </div>
              </motion.div>

              <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-center"
              >
                <h1 className="text-9xl font-black text-white tracking-tighter uppercase mb-6 drop-shadow-2xl">
                  Ziya Gökalp
                </h1>
                <div className="flex items-center justify-center gap-6">
                  <Sparkles size={48} className="text-yellow-400 animate-pulse" />
                  <p className="text-5xl font-black uppercase tracking-[0.6em] text-indigo-400">
                    Dijital Miras
                  </p>
                  <Sparkles size={48} className="text-yellow-400 animate-pulse" />
                </div>
              </motion.div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
