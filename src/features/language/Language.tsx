'use client'

import { Card } from "@/components/ui";
import React from "react";
import { widget } from "@/styles";
import { userCommon } from "@/content/user";
import { useLanguage } from "@/lib/hooks";

export const Language = () => {
    const lang = useLanguage();
    const commonAtts = userCommon;

    return(
        <div className={widget()}>
            <Card
                title={lang.userLanguage.language.Arabic.name}
                subTitle={lang.userLanguage.language.Arabic.proficiency}
                logoUrl={commonAtts.language.Arabic.logoUrl}
            />
            <Card
                title={lang.userLanguage.language.English.name}
                subTitle={lang.userLanguage.language.English.proficiency}
                logoUrl={commonAtts.language.English.logoUrl}
            />
            <Card
                title={lang.userLanguage.language.Turkish.name}
                subTitle={lang.userLanguage.language.Turkish.proficiency}
                logoUrl={commonAtts.language.Turkish.logoUrl}
            />
            <Card
                title={lang.userLanguage.language.Spanish.name}
                subTitle={lang.userLanguage.language.Spanish.proficiency}
                logoUrl={commonAtts.language.Spanish.logoUrl}
            />
        </div>
    )
}