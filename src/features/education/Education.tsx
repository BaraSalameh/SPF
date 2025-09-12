'use client';

import { Title } from '@/components/shared';
import { container, narrowSection, wideSection } from "@/styles";
import { University } from ".";
import { useChart } from "./hooks";
import { useLanguage } from '@/lib/hooks';

export const Education = () => {

    const lang = useLanguage();
    const title = lang.systemLanguage.navigation.Education;

    return (
        <main id="education" className={container()}>
            <div className={wideSection()}>
                <Title title={title} />
                <University />
            </div>
            <div className={narrowSection()}>
                {useChart()}
            </div>
        </main>
    )
}