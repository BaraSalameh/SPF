'use client'

import { Title } from "@/components/shared";
import { container, narrowSection, wideSection } from "@/styles";
import { useChart } from "./hooks";
import { Language } from "./Language";
import { useLanguage } from "@/lib/hooks";

export const Languages = () => {
    const lang = useLanguage();
    const title = lang.systemLanguage.navigation.Languages;

    return (
        <main id="language" className={container()}>
            <div className={wideSection()}>
                <Title title={title} />
                <Language />
            </div>
            <div className={narrowSection()}>
                {useChart()}
            </div>
        </main> 
    )
}