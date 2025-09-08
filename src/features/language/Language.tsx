'use client'

import { Card } from "@/components/ui";
import React from "react";
import { useLanguage } from "./hooks";
import { commonLanguageAtts } from "./static";
import { widget } from "@/styles";

export const Language = () => {
    const languages = useLanguage();
    const commonAtts = commonLanguageAtts;

    return(
        <div className={widget()}>
            <Card
                title={languages.Arabic.name}
                subTitle={languages.Arabic.proficiency}
                logoUrl={commonAtts.Arabic.logoUrl}
            />
            <Card
                title={languages.English.name}
                subTitle={languages.English.proficiency}
                logoUrl={commonAtts.English.logoUrl}
            />
            <Card
                title={languages.Turkish.name}
                subTitle={languages.Turkish.proficiency}
                logoUrl={commonAtts.Turkish.logoUrl}
            />
            <Card
                title={languages.Spanish.name}
                subTitle={languages.Spanish.proficiency}
                logoUrl={commonAtts.Spanish.logoUrl}
            />
        </div>
    )
}