import React from 'react';
import { ArrowDown, Github, FolderGit2, Mail, MapPin, GraduationCap, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="top"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-slate-200/80 dark:border-slate-800/80"
    >
      {/* Subtle Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Information & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Academic Credential Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50/80 dark:bg-indigo-950/40 border border-indigo-200/60 dark:border-indigo-800/60 text-xs font-semibold text-indigo-700 dark:text-indigo-300 shadow-2xs">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Bachelor of Computer Applications (BCA) · 5th Semester</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.12] text-balance">
                Hi, I'm <span className="bg-gradient-to-r from-indigo-600 to-indigo-500 dark:from-indigo-400 dark:to-indigo-300 bg-clip-text text-transparent">{personalInfo.name}</span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-slate-600 dark:text-slate-300 tracking-tight">
                {personalInfo.institution} · Bangalore, India
              </p>
            </div>

            {/* Student Introduction */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl font-normal text-pretty">
              {personalInfo.heroIntro}
            </p>

            {/* Quick Unboxed Academic Metadata */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-500 dark:text-slate-400 font-mono pt-1">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                Bangalore, India
              </span>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
              <span>Akash Group of Institutions</span>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
              <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-medium font-sans">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Open for Student Internships
              </span>
            </div>

            {/* Call to Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-3.5">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-indigo-500"
              >
                <FolderGit2 className="w-4 h-4" />
                <span>View Projects</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-850 shadow-xs hover:shadow-sm hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-indigo-500"
              >
                <Mail className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                <span>Contact Me</span>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-300 bg-slate-100/70 hover:bg-slate-100 dark:bg-slate-800/60 dark:hover:bg-slate-800 border border-slate-200/60 dark:border-slate-700/60 hover:border-slate-300 dark:hover:border-slate-600 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Profile</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Frame */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-xs sm:max-w-sm lg:max-w-md">
              {/* Subtle ambient card backdrop glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 to-indigo-500/0 rounded-3xl blur-xl opacity-60 dark:opacity-40 -z-10" />

              {/* Outer Framed Container with clean border and subtle shadow */}
              <div className="relative rounded-2xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800/90 shadow-xl shadow-slate-200/50 dark:shadow-slate-950/50 ring-1 ring-slate-900/5 dark:ring-white/5 transition-all duration-300 group">
                <div className="aspect-4/5 sm:aspect-3/4 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img
                    src={personalInfo.profileImage}
                    alt="Zaid Sharif - BCA Student Profile Photo"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback to public root path if needed
                      const target = e.currentTarget;
                      if (!target.src.endsWith('/profile.jpg')) {
                        target.src = '/profile.jpg';
                      }
                    }}
                    className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                  />
                </div>

                {/* Overlaid Student Profile Card at bottom */}
                <div className="p-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-100 dark:border-slate-800/80">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-sm font-bold text-slate-900 dark:text-white">
                        Zaid Sharif
                      </h2>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        BCA 5th Sem · Akash Group of Institutions
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-[11px] font-mono text-indigo-600 dark:text-indigo-400 font-semibold block">
                        github.com/zaidu95
                      </span>
                      <span className="text-[11px] text-slate-400 dark:text-slate-500">Bangalore, IN</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Corner Accent */}
              <div className="hidden sm:flex absolute -bottom-3 -left-3 items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-slate-900 rounded-lg shadow-md border border-slate-200/90 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 font-medium">
                <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
                <span>BCA Student · Bangalore</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 text-center flex justify-center">
          <a
            href="#about"
            className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
          >
            <span>Explore Portfolio</span>
            <ArrowDown className="w-3 h-3 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};
