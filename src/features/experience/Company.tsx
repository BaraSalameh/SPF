import { Card, List, ResponsiveIcon } from "@/components/ui";
import React from "react";
import { Text } from '@/components/ui';
import { Calendar, Star } from "lucide-react";
import { AchivementProps, CompanyProps } from "./types.experience";
import { widget } from "@/styles";
import { userCommon } from "@/content/user";
import { useLanguage } from "@/lib/hooks";
import { mapSkillsToWidget } from "../utils";

export const  Company = () => {
    const lang = useLanguage();
    const companies = lang.userLanguage.experience;
    const commonAtts = userCommon.experience;

    const projectSkills = mapSkillsToWidget("Experience");

    return(
        <div className={widget()}>
            <Card
                title={companies.AAUP.name}
                subTitle={companies.AAUP.location}
                logoUrl="/AAUP.png"
                link={commonAtts.AAUP.path}
                content={
                    <Cpy
                        description={<RA achivements={companies.AAUP.achievement} />}
                        position={companies.AAUP.position}
                        startDate={commonAtts.AAUP.startDate}
                        endDate={commonAtts.AAUP.endDate}
                        skills={projectSkills.AAUP}
                    />
                }
            />
            <Card
                title={companies.Spinnel.name}
                subTitle={companies.Spinnel.location}
                logoUrl="/spinnel.png"
                link={commonAtts.Spinnel.path}
                content={
                    <Cpy
                        description={<RA achivements={companies.Spinnel.achievement} />}
                        position={companies.Spinnel.position}
                        startDate={commonAtts.Spinnel.startDate}
                        endDate={commonAtts.Spinnel.endDate}
                        skills={projectSkills.Spinnel}
                    />
                }
            />
            <Card
                title={companies.UATS.name}
                subTitle={companies.UATS.location}
                logoUrl="/uats.png"
                link={commonAtts.UATS.path}
                content={
                    <Cpy
                        description={<RA achivements={companies.UATS.achievement} />}
                        position={companies.UATS.position}
                        startDate={commonAtts.UATS.startDate}
                        endDate={commonAtts.UATS.endDate}
                        skills={projectSkills.UATS}
                    />
                }
            />
        </div>
    )
}

const Cpy = ({ description, position, startDate, endDate, skills }: CompanyProps) =>
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
        {description}
    </React.Fragment>

const RA = ({ achivements }: AchivementProps) => // RA => responsibility and achievement
    <React.Fragment>
        {achivements &&
            <List as='ul' size="xs">
                {achivements?.map((achivement, idx) => <li key={idx}>{achivement}</li>)}
            </List>
        }
    </React.Fragment>