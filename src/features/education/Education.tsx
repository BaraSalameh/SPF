'use client';

import { Title, NavigateHome } from '@/components/shared';
import { container, narrowSection, wideSection } from "@/styles";
import { University } from ".";
import { useChart, useTitle } from "./hooks";

export const Education = () => 
    <main id="education" className={container()}>
        <div className={wideSection()}>
            <Title title={useTitle} />
            <University />
            <NavigateHome />
        </div>
        <div className={narrowSection()}>
            {useChart()}
        </div>
    </main>