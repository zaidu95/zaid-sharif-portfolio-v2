import { ProjectItem, SkillItem, EducationItem } from '../types';

export const personalInfo = {
  name: 'Zaid Sharif',
  role: 'BCA 5th Semester Student',
  degree: 'Bachelor of Computer Applications (BCA)',
  semester: '5th Semester',
  institution: 'Akash Group of Institutions',
  university: 'Bangalore City University (BCU)',
  location: 'Bangalore, India',
  heroIntro:
    'I am a BCA student passionate about software development, web technologies, and building practical projects using modern tools.',
  aboutBio: [
    'I am a 5th-semester Bachelor of Computer Applications (BCA) student based in Bangalore, India, studying at Akash Group of Institutions (affiliated to Bangalore City University). My primary academic and technical focus centers on web development, software fundamentals, and practical application building.',
    'Throughout my BCA coursework and self-directed projects, I have worked with Python, JavaScript, TypeScript, React, and modern database tools. I enjoy exploring how modern developer tools and AI-assisted workflows can help prototype and deliver functional, user-centric web applications.',
    'As a student preparing for upcoming internships and campus evaluations, I prioritize building realistic, maintainable applications and understanding software principles from code structure to deployment.',
  ],
  interests: [
    'Web development & responsive UI engineering',
    'Software development & algorithm fundamentals',
    'Python scripting & backend logic',
    'Modern web technologies & React ecosystem',
    'AI-assisted development & modern developer tooling',
    'Building practical academic and personal projects',
  ],
  github: 'https://github.com/zaidu95',
  email: 'ziozaid78@gmail.com',
  linkedin: 'https://www.linkedin.com/in/zaid-sharif-1800a7324?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  // Placeholders strictly labeled as instructed
  emailPlaceholder: 'zaid.sharif.contact@example.com',
  isEmailPlaceholder: true,
  linkedinPlaceholder: 'https://linkedin.com/in/zaid-sharif-placeholder',
  isLinkedinPlaceholder: true,
  resumePath: '/resume.pdf',
  profileImage: '/src/assets/images/zaid_sharif_student_photo_1791476414331.jpg',
  profileImagePath: '/profile.jpg',
};

export const skillsData: SkillItem[] = [
  // Programming
  {
    name: 'Python',
    category: 'programming',
    description: 'Core syntax, data structures, scripting, and backend programming fundamentals.',
  },
  {
    name: 'JavaScript',
    category: 'programming',
    description: 'Modern ES6+ syntax, asynchronous programming, DOM manipulation, and web APIs.',
  },
  {
    name: 'TypeScript',
    category: 'programming',
    description: 'Static typing and interfaces applied in portfolio projects (Home Bite & Club Attendance Portal).',
  },

  // Frontend
  {
    name: 'HTML',
    category: 'frontend',
    description: 'Semantic document structure, elements, markup, and accessibility fundamentals.',
  },
  {
    name: 'CSS',
    category: 'frontend',
    description: 'Modern styling, layouts, responsive design, and styling fundamentals.',
  },

  // Backend / Database
  {
    name: 'Supabase',
    category: 'backend',
    description: 'Backend database service, table management, and data integration for projects.',
  },

  // Tools
  {
    name: 'Git',
    category: 'tools',
    description: 'Version control workflow, commits, branching, merging, and change tracking.',
  },
  {
    name: 'GitHub',
    category: 'tools',
    description: 'Remote repository management, project code hosting, and version collaboration.',
  },
  {
    name: 'Google AI Studio',
    category: 'tools',
    description: 'AI-assisted developer workspace and rapid application prototyping environment.',
  },
];

export const educationData: EducationItem = {
  degree: 'Bachelor of Computer Applications (BCA)',
  institution: 'Akash Group of Institutions',
  university: 'Bangalore City University (BCU)',
  location: 'Bangalore, India',
  currentSemester: '5th Semester',
  status: 'Currently Pursuing (Final Year)',
  keySubjects: [
    'Database Management Systems (DBMS) & SQL',
    'Web Technologies & Internet Programming',
    'Object-Oriented Programming (OOPs)',
    'Data Structures & Algorithms',
    'Software Engineering & System Analysis',
    'Computer Networks & Operating Systems',
  ],
};

export const projectsData: ProjectItem[] = [
  {
    id: 'home-bite',
    name: 'Home Bite',
    tagline: 'Cloud Kitchen to Customer Discovery Platform',
    description:
      'Home Bite is a platform that connects cloud kitchens with customers. Customers can explore and view delicious homestyle meals offered by registered cloud kitchens.',
    projectType: 'Individual Project',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Google AI Studio'],
    keyFeatures: [
      'Cloud kitchen meal discovery and dish catalog viewing',
      'Categorized meal browsing for customers',
      'Clean order summary and selection interface',
      'Responsive design across mobile and desktop devices',
    ],
    notes:
      'Platform Architecture Note: Home Bite does not have an internal delivery fleet or driver management module; order dispatch is handled via third-party delivery services.',
    liveUrl: 'https://ai.studio/apps/191ad39b-c627-49e4-97ab-180f4aaf043a',
    githubUrl: 'https://github.com/zaidu95',
    imageUrl: '/src/assets/images/preview_homebite_platform_1791467251285.jpg',
    status: 'Live',
  },
  {
    id: 'club-attendance-portal',
    name: 'Club Attendance Portal',
    tagline: 'College Club Attendance & Activity Management System',
    description:
      'A college project designed for managing club member attendance and related academic club activities with digital check-ins.',
    projectType: 'College Project',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'PostgreSQL', 'QR Code'],
    keyFeatures: [
      'Student check-in by student registration number',
      'QR code-based check-in verification for club meetings',
      'Attendance records and session history tracking',
      'Club coordinator session overview and member lists',
    ],
    notes:
      'Developed as an academic college project addressing manual paper attendance sheets in student clubs.',
    githubUrl: 'https://github.com/zaidu95',
    imageUrl: '/src/assets/images/preview_attendance_portal_1791467202344.jpg',
    status: 'Academic Project',
  },
  {
    id: 'ai-study-assistant',
    name: 'AI Study Assistant',
    tagline: 'Collaborative Academic Study Support Platform',
    description:
      'Group project developed by a team of 4 members. Detailed project information and demonstration link will be added after the project implementation is verified.',
    projectType: 'Group Project (4 Members)',
    technologies: ['React', 'TypeScript', 'Web APIs', 'Collaborative Tools'],
    keyFeatures: [
      'Collaborative coursework project between 4 student teammates',
      'Shared study material organization and academic notes workspace',
      'Final verification and live demonstration in progress',
    ],
    notes:
      'Safe preliminary profile: Specific model implementations and production links will be updated upon final team review.',
    imageUrl: '/src/assets/images/preview_study_assistant_1791467218791.jpg',
    status: 'In Development',
  },
];
