import React from 'react';
import { GraduationCap, MapPin, Calendar, BookOpen, CheckCircle } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 md:py-28 border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl">
          <span className="text-xs font-semibold tracking-wider uppercase text-indigo-600 dark:text-indigo-400">
            Academic Background
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-2">
            Education & University Curriculum
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
            Formal computer applications foundation, emphasizing algorithmic problem solving, software engineering lifecycle, and database administration.
          </p>
        </div>

        {/* Education Highlight Card */}
        <div className="mt-12 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-800/90 p-6 sm:p-8 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Degree & Institution */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-100 dark:border-indigo-800/60 text-xs font-semibold text-indigo-700 dark:text-indigo-300">
                <GraduationCap className="w-4 h-4" />
                <span>{educationData.status}</span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                  {educationData.degree}
                </h3>
                <p className="text-base font-semibold text-slate-700 dark:text-slate-300 mt-1">
                  {educationData.institution}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Affiliated to {educationData.university}
                </p>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-mono">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-indigo-500 shrink-0" />
                  <span>Current Status: {educationData.currentSemester}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-indigo-500 shrink-0" />
                  <span>{educationData.location}</span>
                </div>
              </div>

              <div className="pt-2 text-xs text-slate-500 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800">
                Coursework integrates practical laboratory sessions, software design theory, database querying, and final year project development.
              </div>
            </div>

            {/* Right Column: Key Academic Coursework & Core Subjects */}
            <div className="lg:col-span-7 bg-slate-50 dark:bg-slate-800/50 rounded-xl p-5 sm:p-6 border border-slate-200/70 dark:border-slate-800">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-slate-700 dark:text-slate-300 mb-4">
                <BookOpen className="w-4 h-4 text-indigo-500" />
                <span>Key Subjects & Technical Curriculum</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {educationData.keySubjects.map((subject, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-700/60 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium"
                  >
                    <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                    <span>{subject}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span>Bangalore City University (BCU) Regulations</span>
                <span className="font-mono text-indigo-600 dark:text-indigo-400 font-semibold">
                  Semester 5 Active
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
