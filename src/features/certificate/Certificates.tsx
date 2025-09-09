'use client'

import { NavigateHome, Title } from "@/components/shared";
import { container, narrowSection, wideSection } from "@/styles";
import { useChart, useTitle } from "./hooks";
import { Certificate } from "./Certificate";

export const Certificates = () =>
    <main id="certificate" className={container()}>
        <div className={narrowSection()}>
            {useChart()}
        </div>
        <div className={wideSection()}>
            <Title title={useTitle} />
            <Certificate />
            <NavigateHome />
        </div>
    </main>