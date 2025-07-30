export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  images?: string[]; // Optional array for multiple images
  video?: string; // Optional video file
  period?: string;
  overview: string;
  role: string;
  technologies: string[];
  details: string[];
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  gpa?: string;
  achievements: string[];
  description: string;
}

export interface Skill {
  name: string;
  icon: JSX.Element;
}

export interface NavItem {
  icon: JSX.Element;
  label: string;
  onClick: () => void;
}