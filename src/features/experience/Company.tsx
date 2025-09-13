import { Card, ResponsiveIcon } from "@/components/ui";
import React from "react";
import { Text } from '@/components/ui';
import { Calendar, Star } from "lucide-react";
import { Link } from '@/components/ui';
import { CompanyProps } from "./types.experience";
import { widget } from "@/styles";
import { userCommon } from "@/content/user";
import { useLanguage } from "@/lib/hooks";
import { mapSkillsToWidget } from "../utils";

export const  Company = () => {
    const lang = useLanguage();
    const compamies = lang.userLanguage.experience;
    const visit = lang.systemLanguage.experience.linkLabel;
    const commonAtts = userCommon.experience;

    const projectSkills = mapSkillsToWidget("Experience");

    return(
        <div className={widget()}>
            <Card
                title={compamies.AAUP.name}
                subTitle={compamies.AAUP.location}
                logoUrl="/AAUP.png"
                content={
                    <Cpy
                        position={compamies.AAUP.position}
                        startDate={commonAtts.AAUP.startDate}
                        endDate={commonAtts.AAUP.endDate}
                        skills={projectSkills.AAUP}
                        linkLabel={visit as string}
                        linkUrl={commonAtts.AAUP.path}
                    />
                }
            />
            <Card
                title={compamies.Spinnel.name}
                subTitle={compamies.Spinnel.location}
                logoUrl="/spinnel.png"
                content={
                    <Cpy
                        position={compamies.Spinnel.position}
                        startDate={commonAtts.Spinnel.startDate}
                        endDate={commonAtts.Spinnel.endDate}
                        skills={projectSkills.Spinnel}
                        linkLabel={visit as string}
                        linkUrl={commonAtts.Spinnel.path}
                    />
                }
            />
            <Card
                title={compamies.Jawwal.name}
                subTitle={compamies.Jawwal.location}
                logoUrl="/jawwal.jpg"
                content={
                    <Cpy
                        position={compamies.Jawwal.position}
                        startDate={commonAtts.Jawwal.startDate}
                        endDate={commonAtts.Jawwal.endDate}
                        skills={projectSkills.Jawwal}
                        linkLabel={visit as string}
                        linkUrl={commonAtts.Jawwal.path}
                    />
                }
            />
            <Card
                title={compamies.UATS.name}
                subTitle={compamies.UATS.location}
                logoUrl="/uats.png"
                content={
                    <Cpy
                        position={compamies.UATS.position}
                        startDate={commonAtts.UATS.startDate}
                        endDate={commonAtts.UATS.endDate}
                        skills={projectSkills.UATS}
                        linkLabel={visit as string}
                        linkUrl={commonAtts.UATS.path}
                    />
                }
            />
        </div>
    )
}

const Cpy = ({ position, startDate, endDate, skills, linkLabel, linkUrl }: CompanyProps) =>
    <React.Fragment>
        <Text size='sm'>
            {position}
        </Text>
        <Text size='xs'>
            <ResponsiveIcon icon={Calendar} />
            {startDate} - {endDate}
        </Text>
        {skills &&
            <div className="grid grid-cols-10 items-center">
                <ResponsiveIcon icon={Star} />
                <Text size='xs' className="col-span-9">
                    {skills?.map((item: string, idx: number) => idx < skills.length - 1 ? `${item} | ` : item)}
                </Text>
            </div>
        }
        <Link label={linkLabel} to={linkUrl} icon="/globe.svg"/>
    </React.Fragment>