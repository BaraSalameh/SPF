import { UniversityNames, ExperienceNames, ProjectNames } from "../types.features";


export type SkillMapping = {
    Education: { // widget name
        prop: "educations"; // property name in skill
        key: UniversityNames; 
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