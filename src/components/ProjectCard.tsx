import React, { useState } from 'react';
import { ExternalLink, Github, ChevronRight, Layers, Users, User } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectCardProps {
  project: ProjectItem;
  onSelect: (project: ProjectItem) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <article className="group flex flex-col bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-800/90 hover:border-slate-300 dark:hover:border-slate-700 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden ring-1 ring-slate-900/5 dark:ring-white/5">
      {/* Visual Header / Preview */}
      <div className="relative aspect-video w-full bg-slate-100 dark:bg-slate-800 overflow-hidden border-b border-slate-100 dark:border-slate-800/80">
        {!imageError && project.imageUrl ? (
          <img
            src={project.imageUrl}
            alt={`${project.name} preview`}
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
            className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-radial from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900">
            <Layers className="w-8 h-8 text-indigo-500 mb-2 opacity-80" />
            <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
              {project.name}
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              {project.projectType}
            </span>
          </div>
        )}

        {/* Ambient top vignette for badge contrast */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/25 via-black/10 to-transparent" />

        {/* Project Type overlay */}
        <div className="absolute top-3 left-3 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md px-2.5 py-1 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-200 shadow-xs border border-slate-200/70 dark:border-slate-800/70 flex items-center gap-1.5">
          {project.projectType.includes('Group') ? (
            <Users className="w-3.5 h-3.5 text-indigo-500" />
          ) : (
            <User className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
          )}
          <span>{project.projectType}</span>
        </div>

        {/* Status Tag */}
        <div className="absolute top-3 right-3 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md px-2.5 py-1 rounded-lg text-xs font-semibold shadow-xs border border-slate-200/70 dark:border-slate-800/70">
          <span
            className={
              project.status === 'Live'
                ? 'text-emerald-600 dark:text-emerald-400'
                : project.status === 'Academic Project'
                ? 'text-indigo-600 dark:text-indigo-400'
                : 'text-amber-600 dark:text-amber-400'
            }
          >
            {project.status}
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Unboxed Metadata (Zero-Pill Discipline) */}
          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-2">
            <span>BCA Practical Project</span>
            <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
            <span className="font-mono text-indigo-600 dark:text-indigo-400 font-medium">
              {project.technologies.slice(0, 3).join(', ')}
            </span>
          </div>

          {/* Project Title */}
          <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
            {project.name}
          </h3>

          <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-1">
            {project.tagline}
          </p>

          {/* Description */}
          <p className="text-sm text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
            {project.description}
          </p>

          {/* Key Features Highlights */}
          <div className="mt-4 pt-3.5 border-t border-slate-100 dark:border-slate-800/80">
            <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-2">
              Key Capabilities:
            </span>
            <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
              {project.keyFeatures.slice(0, 3).map((feat, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-indigo-500 font-bold shrink-0">›</span>
                  <span className="line-clamp-1">{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Limitation Note preview if applicable */}
          {project.notes && (
            <p className="mt-3 text-[11px] leading-normal text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/50 p-2.5 rounded-lg border border-slate-100 dark:border-slate-800">
              <span className="font-semibold text-slate-700 dark:text-slate-300">Note: </span>
              {project.notes}
            </p>
          )}
        </div>

        {/* Card Footer & Interactive Actions */}
        <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-2">
          <button
            onClick={() => onSelect(project)}
            type="button"
            className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 transition-colors focus-visible:outline-2 focus-visible:outline-indigo-500"
          >
            <span>Project Details</span>
            <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>

          <div className="flex items-center gap-1.5">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.name} on GitHub`}
                className="p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 border border-transparent hover:border-slate-200 dark:hover:border-slate-700 transition-all duration-200"
                title="GitHub Repository"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-slate-900 dark:bg-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 rounded-lg shadow-xs hover:shadow-sm hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <span>Live App</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};
