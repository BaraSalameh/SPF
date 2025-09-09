'use client';

import { Card, ResponsiveIcon, Text, Link, Modal } from "@/components/ui";
import React from "react";
import { File, Star } from "lucide-react";
import { mapSkillsToWidget } from "../utils/mapSkillsToWidget";
import { widget } from "@/styles";
import { commonCertificateAtts } from "./static";
import { useCertificate, useDescription, useVisit } from "./hooks";
import { CertificateProps } from "./types.certificate";

export const Certificate = () => {
    const certificates = useCertificate();
    const commonAtts = commonCertificateAtts;
    const visit = useVisit();
    const description = useDescription();

    const certificateSkills = mapSkillsToWidget("Certificates");

    return(
        <div className={widget()}>
            <Card
                title={certificates["AXSOS Academy"].name}
                subTitle={certificates["AXSOS Academy"].position}
                logoUrl={commonAtts["AXSOS Academy"].logoUrl}
                content={
                    <Cte
                        description={
                            <Modal
                                title={description}
                                icon={'/file.svg'}
                                content={certificates["AXSOS Academy"].desciption}
                            />
                        }
                        skills={certificateSkills["AXSOS Academy"]}
                        website={commonAtts["AXSOS Academy"].website}
                        label={visit}
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
            <Text size='xs'>
                <ResponsiveIcon icon={Star} />
                {skills?.map((item: string, idx: number) => idx < skills.length - 1 ? `${item} | ` : item)}
            </Text>
        }
        <div className="flex flex-wrap justify-center gap-5">
            <Link label={label} to={website} icon="/globe.svg"/>
        </div>
    </React.Fragment>