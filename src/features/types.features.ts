export type WidgetName = 'Home' | 'Education' | 'Experience' | 'Projects' | 'Skills' | 'Languages' | 'Certificates';
export type UniversityName = 'AAUP' | 'UU';
export type CompanyName = 'AAUP' | 'Jawwal' | 'UATS' | 'Spinnel';
export type ProjectName = 'Aluminum' | 'Portfolio' | 'Static Portfolio';
export type SkillName = 'React.js' | 'Next.js' | 'Typescript' | 'ASP.NET' | 'SQL Server' | 'Javascript';
export type CertificateName = 'AXSOS Academy';
export type LanguageName = 'English' | 'Arabic' | 'Turkish' | 'Spanish';

export type NavigationKey = 'Open' | 'Close';

export type Skill = {
    name: SkillName;
    logo: string;
    educations?: UniversityName[];
    experiences?: CompanyName[];
    projects?: ProjectName[];
    certificates?: CertificateName[];
}

type Theme = {
    dark: string;
    light: string;
}
export interface SettingAtts {
    language: string;
    theme: Theme
    open: string;
    close: string
}