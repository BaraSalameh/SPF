import { CertificateName, CompanyName, ProjectName, UniversityName } from "@/content/user/types.user";
import { useLanguage } from "@/lib/hooks";

export interface SkillProps {
    languageMap: ReturnType<typeof useLanguage>;
    educations?: UniversityName[];
    experiences?: CompanyName[];
    projects?: ProjectName[];
    certificates?: CertificateName[];
}