import { userCommon } from "@/content/user";
import { Skill, SkillName } from "@/content/user/types.user";


export const mapWidgetsToSkill = <T extends keyof Skill>(
    field: T
): Record<SkillName, NonNullable<Skill[T]>> => {
    const skills = userCommon.skill;

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
