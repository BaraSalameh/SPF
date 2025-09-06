'use client';

import { CoverImage, NavigateHome } from "@/components/ui";
import { Title } from "./Title";
import { container, narrowSection, wideSection } from "@/styles/container";

export const Experience = () =>
    <main id="experience" className={container()}>
        <div className={wideSection()}>
            <Title />
            <NavigateHome />
        </div>
        <div className={narrowSection()}>
            <CoverImage name="education" alt="Education" />
        </div>
    </main>