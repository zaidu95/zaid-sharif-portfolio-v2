import React from 'react';
import { Terminal, Layout, Database, Wrench, Code2 } from 'lucide-react';
import { SkillItem } from '../types';

interface SkillCardProps {
  skill: SkillItem;
}

export const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  const getCategoryTheme = () => {
    switch (skill.category) {
      case 'programming':
        return {
          icon: <Terminal className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />,
          bg: 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200/60 dark:border-emerald-800/40',
          label: 'Programming',
          accent: 'text-emerald-600 dark:text-emerald-400',
        };
      case 'frontend':
        return {
          icon: <Layout className="w-4 h-4 text-blue-600 dark:text-blue-400" />,
          bg: 'bg-blue-50 dark:bg-blue-950/40 border-blue-200/60 dark:border-blue-800/40',
          label: 'Frontend UI',
          accent: 'text-blue-600 dark:text-blue-400',
        };
      case 'backend':
        return {
          icon: <Database className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />,
          bg: 'bg-indigo-50 dark:bg-indigo-950/40 border-indigo-200/60 dark:border-indigo-800/40',
          label: 'Database & Backend',
          accent: 'text-indigo-600 dark:text-indigo-400',
        };
      case 'tools':
        return {
          icon: <Wrench className="w-4 h-4 text-purple-600 dark:text-purple-400" />,
          bg: 'bg-purple-50 dark:bg-purple-950/40 border-purple-200/60 dark:border-purple-800/40',
          label: 'Tools & Workflow',
          accent: 'text-purple-600 dark:text-purple-400',
        };
      default:
        return {
          icon: <Code2 className="w-4 h-4 text-slate-600 dark:text-slate-400" />,
          bg: 'bg-slate-50 dark:bg-slate-800/40 border-slate-200/60 dark:border-slate-700/40',
          label: 'Technology',
          accent: 'text-slate-600 dark:text-slate-400',
        };
    }
  };

  const theme = getCategoryTheme();

  return (
    <div className="group p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800/90 hover:border-indigo-500/40 dark:hover:border-indigo-500/40 shadow-xs hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className={`p-2 rounded-xl border ${theme.bg}`}>
            {theme.icon}
          </div>
          <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
            {theme.label}
          </span>
        </div>

        <h4 className="text-base font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
          {skill.name}
        </h4>
        <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
          {skill.description}
        </p>
      </div>

      <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 font-mono">
        <span>BCA 5th Sem Coursework</span>
        <span className="text-indigo-600 dark:text-indigo-400 font-medium">Verified Skill</span>
      </div>
    </div>
  );
};
