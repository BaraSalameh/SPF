import { CertificateName, CompanyName, ProjectName, UniversityName } from "@/content/user/types.user";

export type SkillMapping = {
    Education: { // widget name
        prop: "educations"; // property name in skill
        key: UniversityName; 
    };
    Experience: {
        prop: "experiences";
        key: CompanyName; 
    };
    Projects: {
        prop: "projects";
        key: ProjectName; 
    };
    Certificates: {
        prop: "certificates";
        key: CertificateName; 
    };
};