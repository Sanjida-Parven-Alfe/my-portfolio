export interface SocialLinks {
  github: string;
  linkedin: string;
  facebook: string;
  whatsapp?: string;
}

export interface PersonalInfo {
  name: string;
  designation: string;
  about: string;
  resumeLink: string;
  email: string;
  phone: string;
  socials: SocialLinks;
  highlights: string[];
}

export interface Skill {
  name: string;
  icon?: string;
  category?: string;
  percentage?: string;
}

export type SkillCategory = Record<string, Skill[]>;

export interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  details: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  year: string;
  details: string;
}

export interface Certificate {
  title: string;
  issuer: string;
  year: string;
  link?: string;
}

export interface Project {
  id: number;
  title: string;
  image: string;
  stack: string[];
  description: string;
  challenges: string;
  improvements: string;
  liveLink: string;
  githubLink: string;
  featured?: boolean;
}
