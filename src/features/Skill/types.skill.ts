import { CompanyName, EducationAtts, ExperienceAtts, ProjectName, ProjectsAtts, UniversityName } from "@/content/user/types.user";
import { useCertificate } from "../certificate/hooks";
import { CertificateName } from "../types.features";

type LanguageMap = {
    educations: EducationAtts;
    experiences: ExperienceAtts;
    projects: ProjectsAtts;
    certificates: ReturnType<typeof useCertificate>;
}

export interface SkillProps {
    languageMap: LanguageMap;
    educations?: UniversityName[];
    experiences?: CompanyName[];
    projects?: ProjectName[];
    certificates?: CertificateName[];
}