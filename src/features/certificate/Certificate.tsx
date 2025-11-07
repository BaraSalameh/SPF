'use client';

import { Card, ResponsiveIcon, Text } from "@/components/ui";
import React from "react";
import { Star } from "lucide-react";
import { mapSkillsToWidget } from "../utils/mapSkillsToWidget";
import { widget } from "@/styles";
import { CertificateProps } from "./types.certificate";
import { useLanguage } from "@/lib/hooks";
import { userCommon } from "@/content/user";

export const Certificate = () => {
    const lang = useLanguage();
    const certificates =lang.userLanguage.certificate;
    const commonAtts = userCommon.certificate;
    const certificateSkills = mapSkillsToWidget("Certificates");

    return(
        <div className={widget()}>
            <Card
                title={certificates["AXSOS Academy"].name}
                subTitle={certificates["AXSOS Academy"].position}
                logoUrl={commonAtts["AXSOS Academy"].icon}
                link={commonAtts["AXSOS Academy"].path}
                content={
                    <Cte
                        description={<Text size={"xs"}>{certificates["AXSOS Academy"].description}</Text>}
                        skills={certificateSkills["AXSOS Academy"]}
                    />
                }
            />
        </div>
    )
}

const Cte = ({ description, skills }: CertificateProps) =>
    <React.Fragment>
        {skills &&
            <div className="grid grid-cols-10 items-center">
                <ResponsiveIcon icon={Star} />
                <Text size='xs' className="col-span-9">
                    {skills?.map((item: string, idx: number) => idx < skills.length - 1 ? `${item} | ` : item)}
                </Text>
            </div>
        }
        {description}
    </React.Fragment>