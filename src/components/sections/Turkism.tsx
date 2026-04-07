import { motion } from 'motion/react';
import { TURKISM_PRINCIPLES } from '../../constants';
import { Lightbulb, ChevronDown, CheckCircle2 } from 'lucide-react';

export default function Turkism() {
  return (
    <div className="space-y-16 pb-20">
      {/* Hero Header Slide */}
      <section className="min-h-[50vh] flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ scale: 0, rotate: -20 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          className="mb-8 h-24 w-24 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-600 shadow-xl shadow-amber-100/50"
        >
          <Lightbulb size={48} />
        </motion.div>
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-6xl font-black text-slate-900 mb-6 tracking-tight"
        >
          Türkçülük Anlayışı
        </motion.h2>
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-2xl text-slate-500 max-w-3xl font-medium leading-relaxed"
        >
          Ziya Gökalp'in sistemleştirdiği Türkçülük, sadece bir siyasi akım değil, bir milletin her alanda yeniden doğuş reçetesidir.
        </motion.p>
      </section>

      {/* Principles Slides */}
      <div className="space-y-20">
        {TURKISM_PRINCIPLES.map((principle, index) => (
          <motion.section
            key={principle.title}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
          >
            <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
              <div className="flex items-center gap-6">
                <span className="text-6xl">{principle.icon}</span>
                <h3 className="text-4xl font-black text-slate-900 tracking-tight">
                  {principle.title}
                </h3>
              </div>
              <p className="text-xl text-slate-600 leading-relaxed font-medium bg-white p-6 rounded-3xl shadow-lg border border-slate-100">
                {principle.content}
              </p>
              
              {principle.details && (
                <div className="grid grid-cols-1 gap-3">
                  {principle.details.map((detail, dIdx) => (
                    <motion.div
                      key={dIdx}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + dIdx * 0.05 }}
                      className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100"
                    >
                      <CheckCircle2 className="text-emerald-500 shrink-0 mt-1" size={18} />
                      <p className="text-base text-slate-700 font-semibold">{detail}</p>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
            
            <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
              <motion.div
                whileHover={{ scale: 1.02, rotate: index % 2 === 0 ? 1 : -1 }}
                className="aspect-video rounded-3xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center p-10 shadow-inner"
              >
                <div className="text-[8rem] opacity-10 grayscale select-none">
                  {principle.icon}
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-1/2 h-1/2 border-2 border-dashed border-slate-300 rounded-2xl animate-[spin_30s_linear_infinite]" />
                </div>
              </motion.div>
            </div>
          </motion.section>
        ))}
      </div>

      {/* Final Quote Slide */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="min-h-[40vh] flex items-center justify-center"
      >
        <div className="bg-slate-900 p-12 rounded-[3rem] text-center relative overflow-hidden shadow-2xl w-full max-w-4xl">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-500/10 to-purple-500/10 pointer-events-none" />
          <motion.p
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="text-4xl font-black text-white italic leading-tight mb-8 relative z-10"
          >
            "Türkleşmek, İslamlaşmak, Muasırlaşmak!"
          </motion.p>
          <p className="text-xl text-indigo-400 font-bold tracking-[0.2em] uppercase relative z-10">
            — Ziya Gökalp
          </p>
        </div>
      </motion.section>
    </div>
  );
}
