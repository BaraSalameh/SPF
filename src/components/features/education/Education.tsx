'use client';

import { CoverImage } from "@/components/ui";
import { Navigator } from "./Navigator";
import { Title } from "./Title";
import { container, narrowSection, wideSection } from "@/styles/container";
import { Universities } from "./Universities";

export const Education = () =>
    <main id="education" className={container()}>
        <div className={wideSection()}>
            <Title />
            <Universities />
            <Navigator />
        </div>
        <div className={narrowSection()}>
            <CoverImage name="education" alt="Education" />
        </div>
    </main>