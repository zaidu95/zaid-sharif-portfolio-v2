import React, { useState } from 'react';
import { skillsData } from '../data/portfolioData';
import { SkillCard } from '../components/SkillCard';
import { SkillCategory } from '../types';
import { Terminal, Layout, Database, Wrench, Layers } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | SkillCategory>('all');

  const categories: { id: 'all' | SkillCategory; label: string; icon: React.ReactNode }[] = [
    { id: 'all', label: 'All Technologies', icon: <Layers className="w-3.5 h-3.5" /> },
    { id: 'programming', label: 'Programming', icon: <Terminal className="w-3.5 h-3.5" /> },
    { id: 'frontend', label: 'Frontend UI', icon: <Layout className="w-3.5 h-3.5" /> },
    { id: 'backend', label: 'Backend & Database', icon: <Database className="w-3.5 h-3.5" /> },
    { id: 'tools', label: 'Tools & Workflow', icon: <Wrench className="w-3.5 h-3.5" /> },
  ];

  const filteredSkills =
    activeCategory === 'all'
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20 md:py-28 border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold tracking-wider uppercase text-indigo-600 dark:text-indigo-400">
              Technical Stack
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-2">
              Skills & Practical Technologies
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
              Curated overview of core programming languages, web fundamentals, database tools, and developer workflows practiced in BCA coursework and projects.
            </p>
          </div>

          {/* Academic Integrity Note */}
          <div className="px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 text-xs text-slate-600 dark:text-slate-300 self-start md:self-end">
            <span className="font-semibold text-slate-800 dark:text-slate-200">No inflated statistics:</span> Each skill represents practical coursework and active project code.
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="mt-10 flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-100 dark:bg-slate-900 rounded-xl border border-slate-200/60 dark:border-slate-800 w-fit">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              type="button"
              className={`inline-flex items-center gap-2 px-3.5 py-2 text-xs font-medium rounded-lg transition-all focus-visible:outline-2 focus-visible:outline-indigo-500 whitespace-nowrap ${
                activeCategory === cat.id
                  ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs font-semibold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {cat.icon}
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredSkills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};
