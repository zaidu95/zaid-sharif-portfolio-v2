export type SkillCategory = 'programming' | 'frontend' | 'backend' | 'tools';

export interface SkillItem {
  name: string;
  category: SkillCategory;
  description: string;
  iconName?: string;
}

export interface ProjectItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  projectType: 'Individual Project' | 'College Project' | 'Group Project (4 Members)';
  technologies: string[];
  keyFeatures: string[];
  notes?: string;
  liveUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
  status: 'Live' | 'Academic Project' | 'In Development';
}

export interface EducationItem {
  degree: string;
  specialization?: string;
  institution: string;
  university: string;
  location: string;
  currentSemester: string;
  status: string;
  keySubjects: string[];
}
