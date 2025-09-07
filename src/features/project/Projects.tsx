'use client';

import { NavigateHome, Title } from "@/components/shared";
import { container, narrowSection, wideSection } from "@/styles";
import { useChart, useTitle } from "./hooks";
import { Project } from "./Project";

export const Projects = () =>
    <main id="project" className={container()}>
        <div className={wideSection()}>
            <Title title={useTitle} />
            <Project />
            <NavigateHome />
        </div>
        <div className={narrowSection()}>
            {useChart()}
        </div>
    </main>