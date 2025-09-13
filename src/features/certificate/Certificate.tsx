'use client';

import { Card, ResponsiveIcon, Text, Link, Modal } from "@/components/ui";
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
    const description = lang.systemLanguage.certificate.description;
    const label = lang.systemLanguage.certificate.linkLabel;

    const certificateSkills = mapSkillsToWidget("Certificates");

    return(
        <div className={widget()}>
            <Card
                title={certificates["AXSOS Academy"].name}
                subTitle={certificates["AXSOS Academy"].position}
                logoUrl={commonAtts["AXSOS Academy"].icon}
                content={
                    <Cte
                        description={
                            <Modal
                                title={description as string}
                                icon={'/file.svg'}
                                content={certificates["AXSOS Academy"].description}
                            />
                        }
                        skills={certificateSkills["AXSOS Academy"]}
                        website={commonAtts["AXSOS Academy"].path}
                        label={label as string}
                    />
                }
            />
        </div>
    )
}

const Cte = ({ label, description, website, skills }: CertificateProps) =>
    <React.Fragment>
        {description}
        {skills &&
            <div className="grid grid-cols-10 items-center">
                <ResponsiveIcon icon={Star} />
                <Text size='xs' className="col-span-9">
                    {skills?.map((item: string, idx: number) => idx < skills.length - 1 ? `${item} | ` : item)}
                </Text>
            </div>
        }
        <div className="flex flex-wrap justify-center gap-5">
            <Link label={label} to={website} icon="/globe.svg"/>
        </div>
    </React.Fragment>