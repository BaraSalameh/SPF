import { CertificateName, CompanyName, ProjectName, UniversityName } from "@/content/user/types.user";


export type SkillName = 'React.js' | 'Next.js' | 'Typescript' | 'ASP.NET' | 'SQL Server' | 'Javascript';


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
    openSettings: string;
    openLanguages: string;
}