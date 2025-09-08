import { skillsGroup } from "../static";
import { SkillName } from "../types.features";
import { SkillMapping } from "./types.utils";

export const mapSkillsToWidget = <T extends keyof SkillMapping>(to: T) => {
    const skills = skillsGroup;

    const mappedSkills: Record<SkillMapping[T]["key"], SkillName[]> =
        {} as Record<SkillMapping[T]["key"], SkillName[]>;

        const skillPropMap: { [K in keyof SkillMapping]: SkillMapping[K]["prop"] } = {
            Education: 'educations',
            Experience: 'experiences',
            Projects: "projects",
            Certificates: "certificates"
        };

    Object.values(skills).forEach(value => {
        const items = value[skillPropMap[to]] as | SkillMapping[T]["key"][] | undefined;

        items?.forEach(item => {
            if (!mappedSkills[item]) {
                mappedSkills[item] = [];
            }
            mappedSkills[item].push(value.name);
        });
    });

    return mappedSkills;
};