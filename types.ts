
export interface NavLinkItem {
  label: string;
  path: string;
}

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  icon?: React.ReactNode;
  path?: string;
}

export interface ProblemPoint {
  id: string;
  text: string;
  icon?: React.ReactNode;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  company: string;
  logoUrl?: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  client?: string;
  problem: string;
  solution: string;
  results: string;
  imageUrl?: string;
  tags?: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  imageUrl?: string;
  bio?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  author: string;
  date: string;
  imageUrl?: string;
  path: string;
  tags?: string[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface ServiceSectionDetail {
  title: string;
  description: string;
  benefits?: string[];
  useCases?: { title: string; items: string[] }[];
  subSections?: { title: string; content: string }[];
}
