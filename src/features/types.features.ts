export type WidgetNames = 'Home' | 'Education' | 'Experience' | 'Projects' | 'Skills' | 'Languages' | 'Certificates';
export type EducationNames = 'AAUP' | 'UU';
export type ExperienceNames = 'AAUP' | 'Jawwal' | 'UATS' | 'Spinnel';
export type ProjectNames = 'Aluminum' | 'Portfolio' | 'Static Portfolio';
export type SkillNames = 'React.js' | 'Next.js' | 'Typescript' | 'ASP.NET' | 'SQL Server' | 'Javascript';

export type Skill = {
    name: SkillNames;
    logo: string;
    educations?: EducationNames[];
    experiences?: ExperienceNames[];
    projects?: ProjectNames[];
    certificates?: ProjectNames[];
}