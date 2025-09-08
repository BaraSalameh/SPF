import { useCertificate } from "../certificate/hooks";
import { useUniversity } from "../education/hooks";
import { useCompany } from "../experience/hooks";
import { useProject } from "../project/hooks";
import { CertificateName, CompanyName, ProjectName, UniversityName } from "../types.features";

type LanguageMap = {
    educations: ReturnType<typeof useUniversity>;
    experiences: ReturnType<typeof useCompany>;
    projects: ReturnType<typeof useProject>;
    certificates: ReturnType<typeof useCertificate>;
}

export interface SkillProps {
    languageMap: LanguageMap;
    educations?: UniversityName[];
    experiences?: CompanyName[];
    projects?: ProjectName[];
    certificates?: CertificateName[];
}