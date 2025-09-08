'use client'

import { NavigateHome, Title } from "@/components/shared";
import { container, narrowSection, wideSection } from "@/styles";
import { useChart, useTitle } from "./hooks";
import { Skill } from "./Skill";

export const Skills = () =>
    <main id="skill" className={container()}>
        <div className={narrowSection()}>
            {useChart()}
        </div>
        <div className={wideSection()}>
            <Title title={useTitle} />
            <Skill />
            <NavigateHome />
        </div>
    </main>