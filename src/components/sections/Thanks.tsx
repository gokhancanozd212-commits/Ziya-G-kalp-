import { motion } from 'motion/react';
import { Heart, Sparkles, Star } from 'lucide-react';

export default function Thanks() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center space-y-12 py-20">
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ 
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 0.2 
        }}
        className="relative"
      >
        <div className="absolute -inset-12 bg-indigo-500/20 blur-3xl rounded-full animate-pulse" />
        <div className="h-48 w-48 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-[0_0_80px_rgba(79,70,229,0.4)] border-8 border-slate-900 relative z-10">
          <Heart size={100} fill="currentColor" className="animate-bounce" />
        </div>
        
        {/* Decorative elements */}
        <motion.div 
          animate={{ y: [0, -20, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute -top-10 -right-10 text-amber-400"
        >
          <Sparkles size={40} />
        </motion.div>
        <motion.div 
          animate={{ y: [0, 20, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          className="absolute -bottom-10 -left-10 text-indigo-400"
        >
          <Star size={40} fill="currentColor" />
        </motion.div>
      </motion.div>

      <div className="space-y-6 max-w-4xl">
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-7xl font-black text-white tracking-tighter uppercase leading-tight"
        >
          Teşekkür Ederiz
        </motion.h2>
        
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="h-2 w-48 bg-gradient-to-r from-transparent via-indigo-500 to-transparent mx-auto"
        />

        <motion.p
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="text-3xl font-bold text-slate-300 tracking-wide"
        >
          Saygı ile dinleyenlere teşekkür ederiz.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="pt-12"
      >
        <p className="text-sm font-black uppercase tracking-[0.5em] text-slate-500">
          Ziya Gökalp Sunumu Sonu
        </p>
      </motion.div>
    </div>
  );
}
