'use client';

import { CoverImage, NavigateHome } from "@/components/ui";
import { Title, Company } from ".";
import { container, narrowSection, wideSection } from "@/styles/container";

export const Experience = () =>
    <main id="experience" className={container()}>
        <div className={narrowSection()}>
            <CoverImage name="experience" alt="Education" />
        </div>
        <div className={wideSection()}>
            <Title />
            <Company />
            <NavigateHome />
        </div>
    </main>