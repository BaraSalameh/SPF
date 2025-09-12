import { userCommon } from "@/content/user";
import { SkillMapping } from "./types.utils";

export const mapSkillCountToWidget = <T extends keyof SkillMapping>(to: T) => {

    const skillsGroup = userCommon.skill;
    
    const skillPropMap: { [K in keyof SkillMapping]: SkillMapping[K]["prop"] } = {
        Education: 'educations',
        Experience: 'experiences',
        Projects: "projects",
        Certificates: "certificates"
    };

    const prop = skillPropMap[to];

    const uniqueSkills = Object.values(skillsGroup).reduce((acc, skill) => {
        // if the skill has this property and it's not empty, count it
        if (skill[prop]?.length) {
            acc.add(skill.name); // store skill name in set
        }
        return acc;
    }, new Set<string>());

    return {
        [to]: uniqueSkills.size
    } as Record<T, number>;
};
