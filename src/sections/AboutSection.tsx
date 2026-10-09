import React from 'react';
import { CheckCircle2, BookOpen, Laptop, Code2, University, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-semibold tracking-wider uppercase text-indigo-600 dark:text-indigo-400">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-2">
            Computer Applications student building practical web solutions.
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">
            Currently in my 5th semester of the Bachelor of Computer Applications program at Akash Group of Institutions, Bangalore, focusing on core programming, modern web technologies, and practical software projects.
          </p>
        </div>

        {/* Content Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Narrative Column */}
          <div className="lg:col-span-7 space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
            {personalInfo.aboutBio.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}

            {/* Core Areas of Interest */}
            <div className="pt-4">
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4">
                Primary Academic & Technical Interests:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {personalInfo.interests.map((interest, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800/70"
                  >
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400 mt-0.5 shrink-0" />
                    <span className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-200">
                      {interest}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Academic & Profile Summary Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800/90 p-6 sm:p-7 shadow-xs space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
                <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400">
                  <University className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    Academic Summary
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Akash Group of Institutions · Bangalore
                  </p>
                </div>
              </div>

              {/* Key Details List */}
              <div className="space-y-4 text-xs sm:text-sm">
                <div>
                  <span className="text-xs text-slate-500 dark:text-slate-400 block font-mono">
                    Institution / College
                  </span>
                  <p className="font-semibold text-slate-800 dark:text-slate-200 mt-0.5">
                    Akash Group of Institutions
                  </p>
                </div>

                <div>
                  <span className="text-xs text-slate-500 dark:text-slate-400 block font-mono">
                    Program & Specialization
                  </span>
                  <p className="font-semibold text-slate-800 dark:text-slate-200 mt-0.5">
                    Bachelor of Computer Applications (BCA)
                  </p>
                </div>

                <div>
                  <span className="text-xs text-slate-500 dark:text-slate-400 block font-mono">
                    Current Semester
                  </span>
                  <p className="font-semibold text-slate-800 dark:text-slate-200 mt-0.5">
                    5th Semester (Final Year)
                  </p>
                </div>

                <div>
                  <span className="text-xs text-slate-500 dark:text-slate-400 block font-mono">
                    Location
                  </span>
                  <p className="font-semibold text-slate-800 dark:text-slate-200 mt-0.5">
                    Bangalore, Karnataka, India
                  </p>
                </div>

                <div>
                  <span className="text-xs text-slate-400 dark:text-slate-500 block font-mono">
                    Primary Tools & Languages
                  </span>
                  <p className="font-semibold text-slate-800 dark:text-slate-200 mt-0.5">
                    Python · JavaScript · TypeScript · HTML · CSS · Supabase · Git · GitHub
                  </p>
                </div>
              </div>

              {/* Developer Mindset Box */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                <div className="flex items-center gap-1.5 font-semibold text-slate-900 dark:text-white mb-1">
                  <Laptop className="w-3.5 h-3.5 text-indigo-500" />
                  <span>College Presentation & Viva Ready</span>
                </div>
                Projects in this portfolio are built with clear modular architectures so each component, state transition, and schema choice can be walked through during academic evaluation.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
