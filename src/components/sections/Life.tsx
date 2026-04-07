import { motion } from 'motion/react';
import { LIFE_INFO } from '../../constants';
import { Calendar, MapPin, GraduationCap, Sword, Book, User, ChevronDown } from 'lucide-react';

export default function Life() {
  const icons = [GraduationCap, Sword, Book, MapPin, Calendar];

  return (
    <div className="flex flex-col space-y-12 pb-20">
      {/* Profile Header - Slide 1 */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="min-h-[50vh] flex flex-col items-center justify-center text-center space-y-6"
      >
        <div className="relative">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-8 rounded-full border-4 border-dashed border-indigo-500/20"
          />
          <div className="h-40 w-40 flex items-center justify-center rounded-full bg-indigo-600 text-white shadow-[0_0_60px_rgba(79,70,229,0.3)] border-[8px] border-slate-900">
            <User size={80} />
          </div>
        </div>
        <div>
          <h2 className="text-7xl font-black text-white tracking-tighter uppercase leading-none">Ziya Gökalp</h2>
          <p className="mt-4 text-2xl font-black uppercase tracking-[0.4em] text-indigo-400">Türkçülüğün Babası</p>
          
          <div className="mt-8 flex justify-center gap-8">
            <div className="rounded-3xl bg-slate-800 px-8 py-4 shadow-xl border-2 border-slate-700 flex items-center gap-4">
              <Calendar size={24} className="text-indigo-400" />
              <span className="text-xl font-black text-slate-200 uppercase tracking-widest">1876 - 1924</span>
            </div>
            <div className="rounded-3xl bg-slate-800 px-8 py-4 shadow-xl border-2 border-slate-700 flex items-center gap-4">
              <MapPin size={24} className="text-indigo-400" />
              <span className="text-xl font-black text-slate-200 uppercase tracking-widest">Diyarbakır / İstanbul</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Summary - Slide 2 */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ margin: "-50px" }}
        className="flex items-center justify-center"
      >
        <div className="rounded-[3rem] bg-slate-800 p-12 shadow-2xl border-4 border-indigo-500/20 max-w-6xl relative overflow-hidden">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-indigo-500/10 blur-2xl" />
          <div className="text-3xl leading-[1.4] text-slate-200 font-bold text-center">
            <span className="block text-6xl font-black text-indigo-500 mb-6 uppercase tracking-tighter">Kimdir?</span>
            <p className="text-2xl leading-relaxed">{LIFE_INFO.summary}</p>
          </div>
        </div>
      </motion.div>

      {/* Timeline - Slide 3+ */}
      <div className="space-y-6 max-w-5xl mx-auto w-full">
        <h3 className="text-4xl font-black text-white uppercase tracking-tighter text-center mb-12">Hayat Yolculuğu</h3>
        {LIFE_INFO.details.map((detail, index) => {
          const Icon = icons[index % icons.length];
          return (
            <motion.div
              key={index}
              initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ margin: "-20px" }}
              className="flex items-center gap-8 group"
            >
              <div className="flex-shrink-0 h-20 w-20 flex items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-xl group-hover:scale-110 transition-transform border-2 border-white/10">
                <Icon size={32} />
              </div>
              <div className="flex-1 rounded-3xl bg-slate-800/50 p-6 border-2 border-slate-700/50 backdrop-blur-xl group-hover:border-indigo-500/30 transition-colors">
                <p className="text-lg text-slate-200 leading-relaxed font-bold">{detail}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
