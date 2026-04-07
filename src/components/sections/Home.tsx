import { motion } from 'motion/react';
import { Section } from '../../types';
import { User, BookOpen, Lightbulb, PlayCircle, ArrowRight, Star, TrendingUp, Users } from 'lucide-react';
import { cn } from '../../lib/utils';

interface HomeProps {
  onSectionChange: (section: Section) => void;
}

export default function Home({ onSectionChange }: HomeProps) {
  return (
    <div className="flex flex-col justify-center space-y-8 py-12">
      {/* Welcome Card */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="relative overflow-hidden rounded-[3rem] bg-slate-800 p-12 text-white shadow-2xl border border-slate-700"
      >
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-indigo-500/10 blur-[100px]" />
        <div className="relative z-10 max-w-3xl">
          <div className="mb-6 flex items-center gap-4">
            <Star className="fill-amber-400 text-amber-400" size={20} />
            <span className="text-xs font-black uppercase tracking-[0.4em] text-slate-400">Giriş Bölümü</span>
          </div>
          <h2 className="text-5xl font-black leading-tight tracking-tighter">
            "Türkleşmek, İslamlaşmak, Muasırlaşmak..."
          </h2>
          <p className="mt-6 text-xl text-slate-400 leading-relaxed font-medium">
            Ziya Gökalp'in fikir dünyasına ve Türk milliyetçiliğinin temellerine yolculuk yapmaya hazır mısın?
          </p>
          <div className="mt-8 flex items-center gap-6">
            <button 
              onClick={() => onSectionChange('life')}
              className="flex items-center gap-4 rounded-2xl bg-indigo-600 px-10 py-5 text-lg font-black text-white transition-all hover:bg-indigo-500 hover:scale-105 active:scale-95 shadow-xl shadow-indigo-900/40"
            >
              Sunuma Başla <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-4 gap-6">
        {[
          { icon: TrendingUp, label: 'Öğrenci Aktif', val: '100+', color: 'text-blue-400', bg: 'bg-blue-400/10' },
          { icon: Users, label: 'Doğru Bilgi', val: '10/10', color: 'text-purple-400', bg: 'bg-purple-400/10' },
          { icon: BookOpen, label: 'Eser Kayıtlı', val: '50+', color: 'text-emerald-400', bg: 'bg-emerald-400/10' },
          { icon: PlayCircle, label: 'Animasyon', val: '4', color: 'text-rose-400', bg: 'bg-rose-400/10' },
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className="rounded-3xl bg-slate-800/50 p-6 border border-slate-700/50 text-center"
          >
            <div className={cn("mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl", stat.bg, stat.color)}>
              <stat.icon size={24} />
            </div>
            <div className="text-2xl font-black text-white">{stat.val}</div>
            <div className="mt-1 text-[10px] font-bold uppercase tracking-widest text-slate-500">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
