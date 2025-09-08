export type WidgetName = 'Home' | 'Education' | 'Experience' | 'Projects' | 'Skills' | 'Languages' | 'Certificates';
export type UniversityName = 'AAUP' | 'UU';
export type CompanyName = 'AAUP' | 'Jawwal' | 'UATS' | 'Spinnel';
export type ProjectName = 'Aluminum' | 'Portfolio' | 'Static Portfolio';
export type SkillName = 'React.js' | 'Next.js' | 'Typescript' | 'ASP.NET' | 'SQL Server' | 'Javascript';
export type CertificateName = 'AXSOS Academy';

export type Skill = {
    name: SkillName;
    logo: string;
    educations?: UniversityName[];
    experiences?: CompanyName[];
    projects?: ProjectName[];
    certificates?: CertificateName[];
}