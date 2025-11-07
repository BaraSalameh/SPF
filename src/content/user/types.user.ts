// Language Types
export interface UserLanguage {
    profile: ProfileAtts;
    education : EducationAtts;
    experience: ExperienceAtts;
    project: ProjectsAtts;
    language: LanguagesAtts;
    certificate: CertificatesAtts;
}

// Profile widget types
interface ProfileAtts {
    information: Record<InformationAtts, string>;
}

type InformationAtts = 'fullname' | 'bio' | 'gender';

// Education widget types
export type EducationAtts = Record<UniversityName, Record<universityAtts, string>>;

export type UniversityName = 'AAUP' | 'UU';
export type universityAtts = 'name' | 'location' | 'major';

// Experience widget types
export type ExperienceAtts = Record<CompanyName, CompanyAtts>
export type CompanyName = 'AAUP' | 'UATS' | 'Spinnel';
interface CompanyAtts {
    name: string;
    location: string;
    position: string;
    achievement?: string[];
}


// Project widget types
export type ProjectsAtts = Record<ProjectName, ProjectAtts>
export type ProjectName = 'Aluminum' | 'Portfolio' | 'Static Portfolio';
interface ProjectAtts {
    name: string;
    feature?: string[];
}

// Language widget types
type LanguagesAtts = Record<LanguageName, Record<LanguageAtts, string>>;
export type LanguageName = 'English' | 'Arabic' | 'Turkish' | 'Spanish';
type LanguageAtts = 'name' | 'proficiency';


// Certificate widget types
export type CertificatesAtts = Record<CertificateName, Record<CertificateAtts, string>>;
export type CertificateName = 'AXSOS Academy';
type CertificateAtts = 'name' | 'position' | 'description';



type CommonAtts = 'startDate' | 'endDate' | 'path';

// Common types
export interface UserCommonLanguage {
    profile: CommonProfileAtts;
    education: Record<UniversityName, Record<CommonAtts, string>>;
    experience: Record<CompanyName, Record<CommonAtts, string>>;
    project: Record<ProjectName, Record<ProjectCommonAtts, string>>;
    skill: Record<SkillName, Skill>;
    language: Record<LanguageName, LanguageCommonAtts>;
    certificate: Record<CertificateName, Record<WebsiteAtts, string>>
}

// Profile widget common types
interface CommonProfileAtts {
    resume: Record<WebsiteAtts, string>;
    personalInformation : Record<PersonalInformation, string>;
    contactInformaion: Record<ContactInformation, string>;
    socialMedia?: SocialMedia;
}

type WebsiteAtts = 'path' | 'icon';
type PersonalInformation = 'birthdate'
type ContactInformation = 'email' | 'mobile' | 'whatsapp';

interface SocialMedia {
    gitHub?: Record<WebsiteAtts, string>;
    linkedIn?: Record<WebsiteAtts, string>;
    facebook?: Record<WebsiteAtts, string>;
    instagram?: Record<WebsiteAtts, string>;
    whatsapp?: Record<WebsiteAtts, string>;
    email?: Record<WebsiteAtts, string>;
}

// Project widget common types
type ProjectCommonAtts = 'path' | 'source';

// Skill widget common types
export type SkillName = 'React.js' |'Next.js' | 'TypeScript' | 'ASP.NET' | 'SQL Server' | 'JavaScript' | 'C#' | 'Microsoft Azure' |
                        'Vercel' | 'JSON' | 'Visual Basic' | 'Leadership' | 'Express.js' | 'Bootstrap' | 'jQuery' | 'Yii' | 'Figma' |
                        'Time Management' | 'MongoDB' | 'Teamwork' | 'Microsoft Access' | 'Django' | 'Flask' | 'Spring Boot' | 'Redux.js'|
                        'Python' | 'Agile Development' | 'CSS' | 'HTML5' | 'Java' | 'Research' | 'Communication' | 'Problem Solving' | 'Tailwind';
export interface Skill {
    name: SkillName;
    logo: string;
    educations?: UniversityName[];
    experiences?: CompanyName[];
    projects?: ProjectName[];
    certificates?: CertificateName[];
}

// Language widget common types
interface LanguageCommonAtts {
    level: Level;
    logoUrl: string;
}

type Level = 1 | 2 | 3 | 4;