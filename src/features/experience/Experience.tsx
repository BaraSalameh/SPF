'use client';

import { CoverImage } from "@/components/ui";
import { Company } from ".";
import { container, narrowSection, wideSection } from "@/styles/container";
import { Title, NavigateHome } from "@/components/shared";
import { useTitle } from "./hooks";

export const Experience = () =>
    <main id="experience" className={container()}>
        <div className={narrowSection()}>
            <CoverImage name="experience" alt="Education" />
        </div>
        <div className={wideSection()}>
            <Title title={useTitle} />
            <Company />
            <NavigateHome />
        </div>
    </main>