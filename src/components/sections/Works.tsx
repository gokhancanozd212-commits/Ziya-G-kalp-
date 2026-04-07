import { motion, AnimatePresence } from 'motion/react';
import { WORKS } from '../../constants';
import { Book, Bookmark, X, Info, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../../lib/utils';

export default function Works() {
  const [selectedWork, setSelectedWork] = useState<typeof WORKS[0] | null>(null);

  return (
    <div className="flex flex-col space-y-12 pb-20">
      {/* Header - Slide 1 */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="min-h-[30vh] flex flex-col items-center justify-center text-center space-y-6"
      >
        <div className="h-20 w-20 flex items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-xl mb-4">
          <Book size={40} />
        </div>
        <div>
          <h2 className="text-6xl font-black text-white tracking-tighter uppercase leading-none">Kütüphane</h2>
          <p className="mt-4 text-2xl font-black uppercase tracking-[0.3em] text-emerald-400">Önemli Eserler ve Miras</p>
        </div>
      </motion.div>

      {/* Works Grid - Slide 2+ */}
      <div className="grid grid-cols-2 gap-6 max-w-6xl mx-auto w-full">
        {WORKS.map((work, index) => (
          <motion.button
            key={index}
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ margin: "-20px" }}
            onClick={() => setSelectedWork(work)}
            className="group relative flex flex-col items-center justify-center h-48 rounded-3xl bg-slate-800 shadow-xl border-2 border-slate-700 transition-all hover:scale-[1.02] hover:border-emerald-500 hover:bg-slate-700 p-6 overflow-hidden"
          >
            <div className="absolute -right-6 -bottom-6 text-emerald-500/5 group-hover:text-emerald-500/10 transition-colors">
              <Book size={120} />
            </div>
            <div className="absolute top-4 right-4 text-emerald-500/30 group-hover:text-emerald-500 transition-colors">
              <Info size={24} />
            </div>
            <h3 className="relative z-10 text-3xl font-black text-white tracking-tight text-center uppercase leading-tight">
              {work.title}
            </h3>
            <p className="relative z-10 mt-2 text-sm font-black uppercase tracking-widest text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity">
              Detayları Gör
            </p>
          </motion.button>
        ))}
      </div>

      {/* Detailed View Modal */}
      <AnimatePresence>
        {selectedWork && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 p-6 backdrop-blur-xl"
            onClick={() => setSelectedWork(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-[3rem] bg-slate-900 shadow-2xl border-2 border-slate-700"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 z-20 flex justify-end p-6 pointer-events-none">
                <button 
                  onClick={() => setSelectedWork(null)}
                  className="pointer-events-auto p-3 bg-white/5 hover:bg-white/10 rounded-full text-white backdrop-blur-xl transition-colors border border-white/10"
                >
                  <X size={32} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-10 pt-0 custom-scrollbar">
                <div className="flex flex-col gap-8">
                <div className="flex items-center gap-8">
                  <div className="h-24 w-24 flex items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-xl">
                    <Book size={48} />
                  </div>
                  <div>
                    <h3 className="text-4xl font-black text-white tracking-tighter uppercase leading-none">{selectedWork.title}</h3>
                    <div className="mt-4 flex gap-4">
                      <span className="rounded-full bg-emerald-500/20 px-6 py-2 text-sm font-black uppercase tracking-widest text-emerald-400 border border-emerald-500/30">
                        {selectedWork.category}
                      </span>
                      <span className="rounded-full bg-slate-800 px-6 py-2 text-sm font-black text-slate-400 border border-slate-700">
                        {selectedWork.year}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  <p className="text-xl leading-relaxed text-slate-300 font-medium italic">
                    "{selectedWork.description}"
                  </p>
                  
                  {selectedWork.details && (
                    <div className="space-y-4 pt-8 border-t-2 border-slate-800">
                      <h4 className="text-lg font-black uppercase tracking-[0.2em] text-emerald-500 mb-4">Eserin Önemi ve İçeriği</h4>
                      <div className="grid grid-cols-1 gap-3">
                        {selectedWork.details.map((detail, i) => (
                          <motion.div 
                            key={i}
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.1 + i * 0.05 }}
                            className="flex items-center gap-4 bg-slate-800/50 p-4 rounded-2xl border border-slate-700/50"
                          >
                            <div className="h-3 w-3 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.6)]" />
                            <p className="text-base font-bold text-slate-200">{detail}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <button
                  onClick={() => setSelectedWork(null)}
                  className="mt-6 w-full max-w-xs mx-auto rounded-2xl bg-emerald-600 py-4 text-xl font-black uppercase tracking-[0.4em] text-white shadow-xl transition-all hover:bg-emerald-500 active:scale-95 border-2 border-white/10"
                >
                  Kapat
                </button>
              </div>
            </div>
          </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
