'use client';

import { Company } from ".";
import { container, narrowSection, wideSection } from "@/styles/container";
import { Title } from "@/components/shared";
import { useChart } from "./hooks";
import { useContext } from "react";
import { LanguageContext } from "@/lib/contexts/LanguageContext";

export const Experience = () => {
    const lang = useContext(LanguageContext);
    const title = lang.systemLanguage.navigation.Experience;

    return (
        <main id="experience" className={container()}>
            <div className={narrowSection()}>
                {useChart()}
            </div>
            <div className={wideSection()}>
                <Title title={title} />
                <Company />
            </div>
        </main>
    )
}