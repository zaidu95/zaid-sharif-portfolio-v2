import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import { ProjectCard } from '../components/ProjectCard';
import { ProjectModal } from '../components/ProjectModal';
import { ProjectItem } from '../types';
import { FolderGit2, Info } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'individual' | 'college'>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects = projectsData.filter((project) => {
    if (filter === 'individual') return project.projectType === 'Individual Project';
    if (filter === 'college') return project.projectType !== 'Individual Project';
    return true;
  });

  return (
    <section id="projects" className="py-20 md:py-28 border-b border-slate-200/80 dark:border-slate-800/80 bg-slate-100/30 dark:bg-slate-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold tracking-wider uppercase text-indigo-600 dark:text-indigo-400">
              Selected Work
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-2">
              Featured Projects & Practical Applications
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
              Showcase of individual and collaborative college projects built to solve practical problems. Each project clearly indicates verified features and individual versus group contributions.
            </p>
          </div>

          {/* Filter Segmented Control */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-900 rounded-xl border border-slate-200/60 dark:border-slate-800 self-start md:self-end">
            <button
              onClick={() => setFilter('all')}
              type="button"
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-indigo-500 ${
                filter === 'all'
                  ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs font-semibold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              All Projects ({projectsData.length})
            </button>
            <button
              onClick={() => setFilter('individual')}
              type="button"
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-indigo-500 ${
                filter === 'individual'
                  ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs font-semibold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Individual Projects
            </button>
            <button
              onClick={() => setFilter('college')}
              type="button"
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-indigo-500 ${
                filter === 'college'
                  ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs font-semibold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              College & Group
            </button>
          </div>
        </div>

        {/* Verification Banner */}
        <div className="mt-8 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800/70 text-xs text-slate-600 dark:text-slate-400 flex items-center gap-2">
          <Info className="w-4 h-4 text-indigo-500 shrink-0" />
          <span>
            <strong className="text-slate-800 dark:text-slate-200">Strict Project Authenticity:</strong> All descriptions adhere strictly to verifiable functionality. Click "Project Details" on any card to view detailed architectural notes.
          </span>
        </div>

        {/* Projects Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={(p) => setSelectedProject(p)}
            />
          ))}
        </div>
      </div>

      {/* Modal Dialog */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
