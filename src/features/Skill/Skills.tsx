'use client'

import { Title } from "@/components/shared";
import { container, narrowSection, wideSection } from "@/styles";
import { useChart } from "./hooks";
import { Skill } from "./Skill";
import { useLanguage } from "@/lib/hooks";

export const Skills = () => {
    const lang = useLanguage();
    const title = lang.systemLanguage.navigation.Skills;

    return (
        <main id="skill" className={container()}>
            <div className={narrowSection()}>
                {useChart()}
            </div>
            <div className={wideSection()}>
                <Title title={title} />
                <Skill />
            </div>
        </main>
    )
}