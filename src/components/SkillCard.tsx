import React from 'react';
import { Terminal, Layout, Database, Wrench, Code2 } from 'lucide-react';
import { SkillItem } from '../types';

interface SkillCardProps {
  skill: SkillItem;
}

export const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  const getCategoryDetails = () => {
    switch (skill.category) {
      case 'programming':
        return {
          icon: <Terminal className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />,
          label: 'Programming',
          badgeBg: 'bg-emerald-50 dark:bg-emerald-950/50 border-emerald-100 dark:border-emerald-900/50',
        };
      case 'frontend':
        return {
          icon: <Layout className="w-4 h-4 text-sky-600 dark:text-sky-400" />,
          label: 'Frontend UI',
          badgeBg: 'bg-sky-50 dark:bg-sky-950/50 border-sky-100 dark:border-sky-900/50',
        };
      case 'backend':
        return {
          icon: <Database className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />,
          label: 'Backend & Data',
          badgeBg: 'bg-indigo-50 dark:bg-indigo-950/50 border-indigo-100 dark:border-indigo-900/50',
        };
      case 'tools':
        return {
          icon: <Wrench className="w-4 h-4 text-violet-600 dark:text-violet-400" />,
          label: 'Developer Tooling',
          badgeBg: 'bg-violet-50 dark:bg-violet-950/50 border-violet-100 dark:border-violet-900/50',
        };
      default:
        return {
          icon: <Code2 className="w-4 h-4 text-slate-600 dark:text-slate-400" />,
          label: 'Technology',
          badgeBg: 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700',
        };
    }
  };

  const { icon, label, badgeBg } = getCategoryDetails();

  return (
    <div className="group p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800/90 hover:border-slate-300 dark:hover:border-slate-700 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between ring-1 ring-slate-900/5 dark:ring-white/5">
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className={`p-2 rounded-xl border ${badgeBg} shadow-2xs`}>
            {icon}
          </div>
          <span className="text-[11px] font-medium text-slate-400 dark:text-slate-500 font-mono">
            {label}
          </span>
        </div>
        <h4 className="text-base font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
          {skill.name}
        </h4>
        <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
          {skill.description}
        </p>
      </div>

      <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
        <span className="text-slate-400 dark:text-slate-500">Coursework & Projects</span>
        <span className="text-emerald-600 dark:text-emerald-400 font-medium">Applied in Code</span>
      </div>
    </div>
  );
};
