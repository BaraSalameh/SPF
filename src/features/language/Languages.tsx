'use client'

import { NavigateHome, Title } from "@/components/shared";
import { container, narrowSection, wideSection } from "@/styles";
import { useChart, useTitle } from "./hooks";
import { Language } from "./Language";

export const Languages = () =>
    <main id="language" className={container()}>
        <div className={wideSection()}>
            <Title title={useTitle} />
            <Language />
            <NavigateHome />
        </div>
        <div className={narrowSection()}>
            {useChart()}
        </div>
    </main>