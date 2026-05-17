export interface Social {
  github: string;
  instagram: string;
  linkedin: string;
  email: string;
  phone: string;
  whatsapp: string;
  website: string;
}

export interface FreelanceInfo {
  headline: string;
  summary: string;
  services: string[];
}

export interface Profile {
  name: string;
  shortName: string;
  tagline: string;
  role: string;
  specialization: string;
  location: string;
  yearsOfExperience: string;
  bio: string;
  avatarImage: string;
  availableForFreelance?: boolean;
  availableForFullTime?: boolean;
  freelance?: FreelanceInfo;
  social: Social;
}

export interface SkillCategory {
  name: string;
  items: string[];
}

export interface Skills {
  categories: SkillCategory[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
}

export interface ServiceItem {
  title: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  stack: string[];
  role: string;
  year: string;
  link: string;
  image: string;
  highlight: boolean;
}

export interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  details: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  avatarColor: string;
  relationship: string;
  image?: string;
}

export interface CoreSkill {
  title: string;
  items: string;
}

export interface Portfolio {
  profile: Profile;
  skills: Skills;
  coreSkills: CoreSkill[];
  experience: ExperienceItem[];
  services: ServiceItem[];
  projects: Project[];
  education: EducationItem[];
  testimonials: Testimonial[];
  achievements: string[];
}
