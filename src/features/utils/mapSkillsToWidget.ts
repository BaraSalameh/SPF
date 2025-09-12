import { userCommon } from "@/content/user";
import { SkillMapping } from "./types.utils";
import { SkillName } from "@/content/user/types.user";

export const mapSkillsToWidget = <T extends keyof SkillMapping>(to: T) => {
    const skills = userCommon.skill;

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