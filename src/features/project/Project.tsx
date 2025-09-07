'use client';

import { Card, ResponsiveIcon, Text, Link, Modal } from "@/components/ui";
import React from "react";
import { useDescription, useProject, useVisitLive, useVisitSource } from "./hooks";
import { commonProjectsAtts } from "./static";
import { ProjectProps } from "./types.project";
import { File, Star } from "lucide-react";

export const Project = () => {
    const projects = useProject();
    const commonAtts = commonProjectsAtts;
    const visitLiveLabel = useVisitLive();
    const visitSourceLabel = useVisitSource();
    const description = useDescription();

    return(
        <div className="flex flex-wrap sm:flex-nowrap gap-5">
            <Card
                title={projects.staticPortfolio.name}
                logoUrl="/spf.png"
                children={
                    <Pjt
                        description={
                            <Modal
                                title={description}
                                icon={File}
                                content={projects.staticPortfolio.desciption}
                            />
                        }
                        skills={commonAtts.staticPortfolio.skills}
                        website={commonAtts.staticPortfolio.website}
                        liveLabel={visitLiveLabel}
                        source={commonAtts.staticPortfolio.source}
                        sourceLabel={visitSourceLabel}
                    />
                }
            />
            <Card
                title={projects.portfolio.name}
                logoUrl="/portfolio.png"
                children={
                    <Pjt
                        description={
                            <Modal
                                title={description}
                                icon={File}
                                content={projects.portfolio.desciption}
                            />
                        }
                        skills={commonAtts.portfolio.skills}
                        website={commonAtts.portfolio.website}
                        liveLabel={visitLiveLabel}
                        source={commonAtts.portfolio.source}
                        sourceLabel={visitSourceLabel}
                    />
                }
            />
            <Card
                title={projects.aluminum.name}
                logoUrl="/aluminum.png"
                children={
                    <Pjt
                        description={
                            <Modal
                                title={description}
                                icon={File}
                                content={projects.aluminum.desciption}
                            />
                        }
                        skills={commonAtts.aluminum.skills}
                        website={commonAtts.aluminum.website}
                        liveLabel={visitLiveLabel}
                        source={commonAtts.aluminum.source}
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
            {skills.map((item: string, idx: number) => idx < skills.length - 1 ? `${item} | ` : item)}
        </Text>
        <Link label={liveLabel} to={website} icon="/globe.svg"/>
        <Link label={sourceLabel} to={source} icon="/globe.svg"/>
    </React.Fragment>