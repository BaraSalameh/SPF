'use client';

import { Card, ResponsiveIcon, Text, Link, Modal } from "@/components/ui";
import React, { useContext } from "react";
import { ProjectProps } from "./types.project";
import { Star } from "lucide-react";
import { mapSkillsToWidget } from "../utils/mapSkillsToWidget";
import { widget } from "@/styles";
import { userCommon } from "@/content/user";
import { useLanguage } from "@/lib/hooks";

export const Project = () => {
    const lang = useLanguage();
    const projects = lang.userLanguage.project;
    const commonAtts = userCommon.project;
    const labels =lang.systemLanguage.project;
    const liveLabel = labels.linkLabel;
    const sourceLabel = labels.sourceLabel;
    const description = lang.systemLanguage.project.description;

    const projectSkills = mapSkillsToWidget("Projects");

    return(
        <div className={widget()}>
            <Card
                title={projects["Static Portfolio"].name}
                logoUrl="/spf.png"
                content={
                    <Pjt
                        description={
                            <Modal
                                title={description as string}
                                icon={'/file.svg'}
                                content={projects["Static Portfolio"].description}
                            />
                        }
                        skills={projectSkills["Static Portfolio"]}
                        website={commonAtts["Static Portfolio"].path}
                        liveLabel={liveLabel as string}
                        source={commonAtts["Static Portfolio"].source}
                        sourceLabel={sourceLabel as string}
                    />
                }
            />
            <Card
                title={projects.Portfolio.name}
                logoUrl="/portfolio.png"
                content={
                    <Pjt
                        description={
                            <Modal
                                title={description as string}
                                icon={'/file.svg'}
                                content={projects.Portfolio.description}
                            />
                        }
                        skills={projectSkills.Portfolio}
                        website={commonAtts.Portfolio.path}
                        liveLabel={liveLabel as string}
                        source={commonAtts.Portfolio.source}
                        sourceLabel={sourceLabel as string}
                    />
                }
            />
            <Card
                title={projects.Aluminum.name}
                logoUrl="/aluminum.png"
                content={
                    <Pjt
                        description={
                            <Modal
                                title={description as string}
                                icon={'/file.svg'}
                                content={projects.Aluminum.description}
                            />
                        }
                        skills={projectSkills.Aluminum}
                        website={commonAtts.Aluminum.path}
                        liveLabel={liveLabel as string}
                        source={commonAtts.Aluminum.source}
                        sourceLabel={sourceLabel as string}
                    />
                }
            />
        </div>
    )
}

const Pjt = ({ description, website, liveLabel, source, sourceLabel, skills }: ProjectProps) =>
    <React.Fragment>
        {description}
        <Text size='xs'>
            <ResponsiveIcon icon={Star} />
            {skills?.map((item: string, idx: number) => idx < skills.length - 1 ? `${item} | ` : item)}
        </Text>
        <div className="flex flex-wrap justify-center gap-5">
            <Link label={liveLabel} to={website} icon="/globe.svg"/>
            <Link label={sourceLabel} to={source} icon="/globe.svg"/>
        </div>
    </React.Fragment>