// Language Types
export interface UserLanguage {
    profile: ProfileAtts;
    education : EducationAtts;
    experience: ExperienceAtts;
    project: ProjectsAtts;
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
export type ExperienceAtts = Record<CompanyName, Record<CompanyAtts, string>>
export type CompanyName = 'AAUP' | 'Jawwal' | 'UATS' | 'Spinnel';
export type CompanyAtts = 'name' | 'location' | 'position';

// Project widget types
export type ProjectsAtts = Record<ProjectName, Record<ProjectAtts, string>>
export type ProjectName = 'Aluminum' | 'Portfolio' | 'Static Portfolio';
export type ProjectAtts = 'name' | 'description';


type CommonAtts = 'startDate' | 'endDate' | 'path';

// Common types
export interface UserCommonLanguage {
    profile: CommonProfileAtts;
    education: Record<UniversityName, Record<CommonAtts, string>>;
    experience: Record<CompanyName, Record<CommonAtts, string>>;
    project: Record<ProjectName, Record<ProjectCommonAtts, string>>;
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
    facebook?: Record<WebsiteAtts, string>;
    instagram?: Record<WebsiteAtts, string>;
    whatsapp?: Record<WebsiteAtts, string>;
    email?: Record<WebsiteAtts, string>;
}

// Project widget common types
type ProjectCommonAtts = 'path' | 'source';