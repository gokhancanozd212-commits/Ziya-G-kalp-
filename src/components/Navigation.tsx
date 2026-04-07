import { motion } from 'motion/react';
import { Home, User, BookOpen, Lightbulb, PlayCircle } from 'lucide-react';
import { Section } from '../types';
import { cn } from '../lib/utils';

interface NavigationProps {
  activeSection: Section;
  onSectionChange: (section: Section) => void;
  layout?: 'horizontal' | 'vertical';
}

export default function Navigation({ activeSection, onSectionChange, layout = 'horizontal' }: NavigationProps) {
  const items = [
    { id: 'home', icon: Home, label: 'Ana Sayfa' },
    { id: 'life', icon: User, label: 'Hayatı' },
    { id: 'turkism', icon: Lightbulb, label: 'Anlayışı' },
    { id: 'works', icon: BookOpen, label: 'Eserleri' },
  ];

  if (layout === 'vertical') {
    return (
      <nav className="flex flex-col gap-2">
        {items.map((item) => {
          const isActive = activeSection === item.id;
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              onClick={() => onSectionChange(item.id as Section)}
              className={cn(
                "group relative flex items-center gap-4 rounded-2xl p-4 transition-all duration-300",
                isActive ? "bg-indigo-600 text-white shadow-lg shadow-indigo-100" : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
              )}
            >
              <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
              <span className="text-sm font-bold tracking-tight">{item.label}</span>
              {isActive && (
                <motion.div
                  layoutId="active-nav-indicator"
                  className="absolute right-4 h-1.5 w-1.5 rounded-full bg-white"
                />
              )}
            </button>
          );
        })}
      </nav>
    );
  }

  return (
    <nav className="fixed bottom-6 left-1/2 z-40 w-[95%] -translate-x-1/2 overflow-hidden rounded-[2.5rem] bg-white/70 p-2 shadow-2xl backdrop-blur-2xl border border-white/40 lg:hidden">
      <div className="flex items-center justify-around">
        {items.map((item) => {
          const isActive = activeSection === item.id;
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              onClick={() => onSectionChange(item.id as Section)}
              className={cn(
                "relative flex flex-col items-center gap-1 p-3 transition-all duration-300",
                isActive ? "text-indigo-600 scale-110" : "text-gray-400 hover:text-gray-600"
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="active-nav"
                  className="absolute inset-0 -z-10 rounded-2xl bg-indigo-50"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <Icon size={22} strokeWidth={isActive ? 2.5 : 2} />
              <span className="text-[8px] font-black uppercase tracking-widest">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
