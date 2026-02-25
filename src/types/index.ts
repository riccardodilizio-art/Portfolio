import type { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  id: string;
}

export interface Stat {
  number: string;
  label: string;
  suffix: string;
}

export interface FeatureCard {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export interface Achievement {
  text: string;
}

export interface ExperienceItem {
  icon: LucideIcon;
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
}

export interface SkillCategory {
  icon: LucideIcon;
  title: string;
  skills: string[];
}

export interface EducationItem {
  icon: LucideIcon;
  degree: string;
  institution: string;
  status: string;
  period: string;
  gradient: string;
}

export interface ValueItem {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
}

export interface ContactMethod {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string;
  gradient: string;
}
