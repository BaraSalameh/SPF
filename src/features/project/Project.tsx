'use client';

import { Card, ResponsiveIcon, Text, Link, Modal } from "@/components/ui";
import React from "react";
import { useDescription, useProject, useVisitLive, useVisitSource } from "./hooks";
import { commonProjectsAtts } from "./static";
import { ProjectProps } from "./types.project";
import { Star } from "lucide-react";
import { mapSkillsToWidget } from "../utils/mapSkillsToWidget";
import { widget } from "@/styles";

export const Project = () => {
    const projects = useProject();
    const commonAtts = commonProjectsAtts;
    const visitLiveLabel = useVisitLive();
    const visitSourceLabel = useVisitSource();
    const description = useDescription();

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
                                title={description}
                                icon={'/file.svg'}
                                content={projects["Static Portfolio"].desciption}
                            />
                        }
                        skills={projectSkills["Static Portfolio"]}
                        website={commonAtts["Static Portfolio"].website}
                        liveLabel={visitLiveLabel}
                        source={commonAtts["Static Portfolio"].source}
                        sourceLabel={visitSourceLabel}
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
                                title={description}
                                icon={'/file.svg'}
                                content={projects.Portfolio.desciption}
                            />
                        }
                        skills={projectSkills.Portfolio}
                        website={commonAtts.Portfolio.website}
                        liveLabel={visitLiveLabel}
                        source={commonAtts.Portfolio.source}
                        sourceLabel={visitSourceLabel}
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
                                title={description}
                                icon={'/file.svg'}
                                content={projects.Aluminum.desciption}
                            />
                        }
                        skills={projectSkills.Aluminum}
                        website={commonAtts.Aluminum.website}
                        liveLabel={visitLiveLabel}
                        source={commonAtts.Aluminum.source}
                        sourceLabel={visitSourceLabel}
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