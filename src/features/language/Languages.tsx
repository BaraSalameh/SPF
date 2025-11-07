'use client'

import { Title } from "@/components/shared";
import { container, wideSection } from "@/styles";
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
        </main> 
    )
}