'use client';

import { Card, ResponsiveIcon, Text, Link, List } from "@/components/ui";
import React from "react";
import { FeatureProps, ProjectProps } from "./types.project";
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
    const sourceLabel = labels.sourceLabel;

    const projectSkills = mapSkillsToWidget("Projects");

    return(
        <div className={widget()}>
            <Card
                title={projects["Static Portfolio"].name}
                logoUrl="/spf.png"
                link={commonAtts["Static Portfolio"].path}
                content={
                    <Pjt
                        features={<FRE features={projects["Static Portfolio"].feature} />}
                        skills={projectSkills["Static Portfolio"]}
                        source={commonAtts["Static Portfolio"].source}
                        sourceLabel={sourceLabel as string}
                    />
                }
            />
            <Card
                title={projects.Portfolio.name}
                logoUrl="/portfolio.png"
                link={commonAtts.Portfolio.path}
                content={
                    <Pjt
                        features={<FRE features={projects.Portfolio.feature} />}
                        skills={projectSkills.Portfolio}
                        source={commonAtts.Portfolio.source}
                        sourceLabel={sourceLabel as string}
                    />
                }
            />
            <Card
                title={projects.Aluminum.name}
                logoUrl="/aluminum.png"
                link={commonAtts.Aluminum.path}
                content={
                    <Pjt
                        features={<FRE features={projects.Aluminum.feature} />}
                        skills={projectSkills.Aluminum}
                        source={commonAtts.Aluminum.source}
                        sourceLabel={sourceLabel as string}
                    />
                }
            />
        </div>
    )
}

const Pjt = ({ features, skills, source, sourceLabel }: ProjectProps) =>
    <React.Fragment>
        <Link label={sourceLabel} to={source} icon="/globe.svg"/>
        {skills &&
            <div className="grid grid-cols-10 items-center">
                <ResponsiveIcon icon={Star} />
                <Text size='xs' className="col-span-9">
                    {skills?.map((item: string, idx: number) => idx < skills.length - 1 ? `${item} | ` : item)}
                </Text>
            </div>
        }
        {features}
    </React.Fragment>

const FRE = ({ features } : FeatureProps) => // FRE => Feature
    <React.Fragment>
        {features &&
            <List as='ul' size="xs">
                {features?.map((feature, idx) => <li key={idx}>{feature}</li>)}
            </List>
        }
    </React.Fragment>