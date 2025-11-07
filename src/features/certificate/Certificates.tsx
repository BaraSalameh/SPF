'use client'

import { Title } from "@/components/shared";
import { container, wideSection } from "@/styles";
import { Certificate } from "./Certificate";
import { useLanguage } from "@/lib/hooks";

export const Certificates = () => {
    const lang = useLanguage();
    const title = lang.systemLanguage.navigation.Certificates;

    return (
        <main id="certificate" className={container()}>
            <div className={wideSection()}>
                <Title title={title} />
                <Certificate />
            </div>
        </main>
    )
}
    