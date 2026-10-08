import React, { useState } from 'react';
import { Download, FileText, Check, Copy, ExternalLink, Calendar, MapPin, Briefcase, GraduationCap } from 'lucide-react';
import { personalInfo, educationData, skillsData, projectsData } from '../data/portfolioData';

export const ResumeSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopySummary = () => {
    const summary = `Zaid Sharif - BCA Student Portfolio Summary
Degree: Bachelor of Computer Applications (5th Sem)
College: Akash Group of Institutions
University: Bangalore City University (BCU), Bangalore, India
GitHub: ${personalInfo.github}
Key Skills: Python, JavaScript, TypeScript, React, Tailwind CSS, SQL, Supabase/PostgreSQL, Git
Projects: Home Bite (Cloud Kitchen Platform), Club Attendance Portal (College QR Attendance), AI Study Assistant (Group Project)`;

    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="resume" className="py-20 md:py-28 border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold tracking-wider uppercase text-indigo-600 dark:text-indigo-400">
              Curriculum Vitae
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-2">
              Academic & Technical Resume
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
              Complete student profile summary optimized for internship applications, technical interviews, and college viva presentations.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <button
              onClick={handleCopySummary}
              type="button"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-colors shadow-xs"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span>Summary Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-500" />
                  <span>Copy Text Summary</span>
                </>
              )}
            </button>

            <a
              href="/resume.pdf"
              download="Zaid_Sharif_BCA_Resume.pdf"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors shadow-xs"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume (PDF)</span>
            </a>
          </div>
        </div>

        {/* Structured Resume Preview Card */}
        <div className="mt-12 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-800/90 shadow-xs overflow-hidden">
          {/* Document Header bar */}
          <div className="px-6 sm:px-8 py-5 border-b border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/60 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Resume Preview: {personalInfo.name}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                  Standard Format · Target File: /resume.pdf
                </p>
              </div>
            </div>

            <div className="text-xs text-slate-500 dark:text-slate-400">
              Expected Location: <code className="font-mono text-indigo-600 dark:text-indigo-400">/resume.pdf</code>
            </div>
          </div>

          {/* Document Body */}
          <div className="p-6 sm:p-10 space-y-8 divide-y divide-slate-100 dark:divide-slate-800">
            {/* 1. Header Information */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div>
                <h4 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  {personalInfo.name}
                </h4>
                <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mt-1">
                  BCA 5th Semester Student · Akash Group of Institutions
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 max-w-xl leading-relaxed">
                  {personalInfo.heroIntro}
                </p>
              </div>

              <div className="text-xs text-slate-600 dark:text-slate-400 space-y-1.5 font-mono">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>Bangalore, Karnataka, India</span>
                </div>
                <div>
                  GitHub: <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:underline">github.com/zaidu95</a>
                </div>
                <div className="text-slate-400 italic">
                  Email & LinkedIn: [See Contact Section Placeholders]
                </div>
              </div>
            </div>

            {/* 2. Education Section */}
            <div className="pt-8">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
                <GraduationCap className="w-4 h-4 text-indigo-500" />
                <span>Education</span>
              </div>

              <div className="bg-slate-50 dark:bg-slate-800/40 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h5 className="text-base font-bold text-slate-900 dark:text-white">
                    {educationData.degree}
                  </h5>
                  <span className="text-xs font-mono text-indigo-600 dark:text-indigo-400 font-medium">
                    {educationData.currentSemester} · Present
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 mt-1">
                  {educationData.institution} · {educationData.university} — {educationData.location}
                </p>
                <div className="mt-3 text-xs text-slate-600 dark:text-slate-400">
                  <strong className="text-slate-700 dark:text-slate-300">Coursework: </strong>
                  {educationData.keySubjects.join(' · ')}
                </div>
              </div>
            </div>

            {/* 3. Technical Skills */}
            <div className="pt-8">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
                <Briefcase className="w-4 h-4 text-indigo-500" />
                <span>Technical Skills</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-3.5 rounded-lg border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30">
                  <span className="font-semibold text-slate-800 dark:text-slate-200 block mb-1">
                    Programming Languages
                  </span>
                  <span className="text-slate-600 dark:text-slate-400">
                    Python, JavaScript, TypeScript
                  </span>
                </div>

                <div className="p-3.5 rounded-lg border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30">
                  <span className="font-semibold text-slate-800 dark:text-slate-200 block mb-1">
                    Frontend Engineering
                  </span>
                  <span className="text-slate-600 dark:text-slate-400">
                    HTML5, CSS3, React, Tailwind CSS
                  </span>
                </div>

                <div className="p-3.5 rounded-lg border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30">
                  <span className="font-semibold text-slate-800 dark:text-slate-200 block mb-1">
                    Database & Backend Tools
                  </span>
                  <span className="text-slate-600 dark:text-slate-400">
                    SQL, Supabase, PostgreSQL, REST APIs
                  </span>
                </div>

                <div className="p-3.5 rounded-lg border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30">
                  <span className="font-semibold text-slate-800 dark:text-slate-200 block mb-1">
                    Development Tools
                  </span>
                  <span className="text-slate-600 dark:text-slate-400">
                    Git, GitHub, VS Code, Google AI Studio
                  </span>
                </div>
              </div>
            </div>

            {/* 4. Academic Projects Summary */}
            <div className="pt-8">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
                <FileText className="w-4 h-4 text-indigo-500" />
                <span>Featured Academic Projects</span>
              </div>

              <div className="space-y-4">
                {projectsData.map((project) => (
                  <div
                    key={project.id}
                    className="p-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 text-xs sm:text-sm"
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <div className="font-bold text-slate-900 dark:text-white">
                        {project.name}
                        <span className="text-xs font-normal text-slate-500 dark:text-slate-400 ml-2">
                          ({project.projectType})
                        </span>
                      </div>
                      <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                        {project.technologies.join(', ')}
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                      {project.description}
                    </p>

                    {project.notes && (
                      <p className="mt-1.5 text-[11px] text-slate-500 italic">
                        {project.notes}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
