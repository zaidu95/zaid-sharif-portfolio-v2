import React, { useState, useEffect, useRef } from 'react';
import { Camera, Upload, User, Check, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface ProfilePhotoProps {
  className?: string;
}

export const ProfilePhoto: React.FC<ProfilePhotoProps> = ({ className = '' }) => {
  const [photoSrc, setPhotoSrc] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // 1. Check local storage for uploaded photo
    const stored = localStorage.getItem('zaid_portfolio_profile_photo');
    if (stored) {
      setPhotoSrc(stored);
      return;
    }

    // 2. Try default path /profile.jpg
    const img = new Image();
    img.src = personalInfo.profileImagePath;
    img.onload = () => {
      setPhotoSrc(personalInfo.profileImagePath);
    };
    img.onerror = () => {
      // Keep null to show clean professional placeholder
      setPhotoSrc(null);
    };
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      setPhotoSrc(result);
      localStorage.setItem('zaid_portfolio_profile_photo', result);
      setIsUploading(false);
    };
    reader.onerror = () => {
      setIsUploading(false);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className={`relative group ${className}`}>
      {/* Outer Glow & Ambient Ring */}
      <div className="absolute -inset-1.5 bg-gradient-to-tr from-indigo-500/20 via-sky-500/20 to-purple-500/20 rounded-3xl blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Main Photo Container */}
      <div className="relative w-full aspect-4/5 sm:aspect-square max-w-sm mx-auto rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-900 border-2 border-slate-200/90 dark:border-slate-800 shadow-xl">
        {photoSrc ? (
          <img
            src={photoSrc}
            alt={personalInfo.name}
            className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
          />
        ) : (
          /* Professional Placeholder with Student Silhouette and Clean Badge */
          <div className="w-full h-full flex flex-col items-center justify-between p-6 bg-gradient-to-b from-slate-50 via-slate-100 to-slate-200 dark:from-slate-900 dark:via-slate-800 dark:to-slate-950 text-center">
            <div className="w-full flex items-center justify-between">
              <span className="text-[11px] font-mono text-indigo-600 dark:text-indigo-400 font-semibold px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/60 dark:border-indigo-800/60">
                BCA 5th Sem
              </span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                Akash Group
              </span>
            </div>

            <div className="my-auto flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-indigo-500/10 dark:bg-indigo-400/10 border-2 border-indigo-500/30 dark:border-indigo-400/30 flex items-center justify-center text-indigo-600 dark:text-indigo-300 font-bold text-3xl shadow-inner mb-3">
                ZS
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                {personalInfo.name}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-[200px]">
                Akash Group of Institutions
              </p>
            </div>

            {/* Quick Upload Action */}
            <div className="w-full pt-3 border-t border-slate-200/60 dark:border-slate-700/60">
              <button
                onClick={() => fileInputRef.current?.click()}
                type="button"
                className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 text-xs font-semibold rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white shadow-xs transition-colors"
              >
                <Camera className="w-3.5 h-3.5" />
                <span>Upload Profile Photo</span>
              </button>
            </div>
          </div>
        )}

        {/* Change Photo Overlay Button when photo is loaded */}
        {photoSrc && (
          <button
            onClick={() => fileInputRef.current?.click()}
            type="button"
            title="Change profile photo"
            className="absolute bottom-3 right-3 p-2 rounded-xl bg-slate-900/80 hover:bg-slate-900 text-white backdrop-blur-md shadow-md border border-white/20 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
          >
            <Camera className="w-4 h-4" />
          </button>
        )}

        {/* Hidden File Input for User Upload */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />
      </div>

      {/* Floating Status Indicator */}
      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white dark:bg-slate-900 px-3.5 py-1.5 rounded-full shadow-lg border border-slate-200/90 dark:border-slate-700/80 text-xs font-medium text-slate-700 dark:text-slate-200 flex items-center gap-2 whitespace-nowrap">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span>BCA Student · Bangalore</span>
      </div>
    </div>
  );
};
