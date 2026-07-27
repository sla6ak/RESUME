export type Language = 'en' | 'ua' | 'ru';

export interface Translation {
  heroSubtitle: string;
  heroTitle: string;
  heroDescription: string;
  sectionTitleSkills: string;
  skillCategoryTechStack: string;
  techSkillList: string[];
  skillCategorySoftSkills: string;
  softSkillList: string[];
  skillCategoryLanguages: string;
  languageValues: { english: string; russian: string; ukrainian: string };
  skillCategoryExperience: string;
  experienceText: string;
  sectionTitleProjects: string;
  projectTitles: Record<string, string>;
  projectDescriptions: Record<string, string>;
  projectTags: string[];
  viewAllProjects: string;
  sectionTitleEducation: string;
  timelineDate: Record<string, string>;
  timelineTitles: Record<string, string>;
  timelineCompanies: Record<string, string>;
  timelineDescriptions: {
    fullstackDeveloper: string;
    selfEducation: string;
    electrician: string;
    aboutMe: string;
    aboutMeBullets: Array<{ labelEn: string; labelUa: string; labelRu: string; valueEn: string; valueUa: string; valueRu: string }>;
  };
  footerNotice: string;
  cityLinkText: string;
  languageItems: Record<Language, string>;
}

export interface TimelineItem {
  date: string;
  title: string;
  company: string;
  description: string;
  bullets?: Array<{ label: string; value: string }>;
  isAboutMe?: boolean;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  imageGradient: string;
  link: string;
}

export interface SkillCard {
  category: string;
  items: string[];
  type: 'tech' | 'soft' | 'language' | 'experience';
}
