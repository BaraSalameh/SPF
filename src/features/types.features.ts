export type WidgetNames = 'Home' | 'Education' | 'Experience' | 'Projects' | 'Skills' | 'Languages' | 'Certificates';
export type UniversityNames = 'AAUP' | 'UU';
export type ExperienceNames = 'AAUP' | 'Jawwal' | 'UATS' | 'Spinnel';
export type ProjectNames = 'Aluminum' | 'Portfolio' | 'Static Portfolio';
export type SkillNames = 'React.js' | 'Next.js' | 'Typescript' | 'ASP.NET' | 'SQL Server' | 'Javascript';

export type Skill = {
    name: SkillNames;
    logo: string;
    educations?: UniversityNames[];
    experiences?: ExperienceNames[];
    projects?: ProjectNames[];
    certificates?: ProjectNames[];
}