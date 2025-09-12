'use client';

import { Title } from "@/components/shared";
import { container, narrowSection, wideSection } from "@/styles";
import { useChart } from "./hooks";
import { Project } from "./Project";
import { useLanguage } from "@/lib/hooks";

export const Projects = () => {
    const lang = useLanguage();
    const title = lang.systemLanguage.navigation.Projects;

    return (
        <main id="project" className={container()}>
            <div className={wideSection()}>
                <Title title={title} />
                <Project />
            </div>
            <div className={narrowSection()}>
                {useChart()}
            </div>
        </main>
    )
}