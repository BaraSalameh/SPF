import { skillsGroup } from "../static";
import { Skill, SkillName } from "../types.features";

export const mapWidgetsToSkill = <T extends keyof Skill>(
    field: T
): Record<SkillName, NonNullable<Skill[T]>> => {
    const skills = skillsGroup;

    const result: Record<SkillName, NonNullable<Skill[T]>> =
        {} as Record<SkillName, NonNullable<Skill[T]>>;

    Object.values(skills).forEach(skill => {
        const items = skill[field];
        if (items) {
            result[skill.name] = items as NonNullable<Skill[T]>;
        }
    });

    return result;
};
