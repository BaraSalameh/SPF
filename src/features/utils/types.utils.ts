import { EducationNames, ExperienceNames, ProjectNames } from "../types.features";


export type SkillMapping = {
    Education: { // widget name
        prop: "educations"; // property name in skill
        key: EducationNames; 
    };
    Experience: {
        prop: "experiences";
        key: ExperienceNames; 
    };
    Projects: {
        prop: "projects";
        key: ProjectNames; 
    };
};