import { Card, ResponsiveIcon } from "@/components/ui";
import React from "react";
import { Text } from '@/components/ui';
import { Calendar, Star } from "lucide-react";
import { Link } from '@/components/ui';
import { widget } from "@/styles";
import { userCommon } from "@/content/user";
import { UniversityProps } from "./types.education";
import { useLanguage } from "@/lib/hooks";
import { mapSkillsToWidget } from "../utils";

export const University = () => {
    const lang = useLanguage();
    const universities = lang.userLanguage.education;
    const label = lang.systemLanguage.education.linkLabel;
    const commonAtts = userCommon.education;

    const educationSkills = mapSkillsToWidget("Education");

    return(
        <div className={widget()}>
            <Card
                title={universities.UU.name}
                subTitle={universities.UU.location}
                logoUrl="/UU.jpg"
                content={
                    <Usy
                        major={universities.UU.major}
                        startDate={commonAtts.UU.startDate}
                        endDate={commonAtts.UU.endDate}
                        skills={educationSkills["UU"]}
                        linkLabel={label as string}
                        linkUrl={commonAtts.UU.path}
                    />
                }
            />
            <Card
                title={universities.AAUP.name}
                subTitle={universities.AAUP.location}
                logoUrl="/AAUP.png"
                content={
                    <Usy
                        major={universities.AAUP.major}
                        startDate={commonAtts.AAUP.startDate}
                        endDate={commonAtts.AAUP.endDate}
                        skills={educationSkills["AAUP"]}
                        linkLabel={label as string}
                        linkUrl={commonAtts.AAUP.path}
                    />
                }
            />
        </div>
    )
}

const Usy = ({ major, startDate, endDate, skills, linkLabel, linkUrl }: UniversityProps) =>
    <React.Fragment>
        <Text size='sm'>
            {major}
        </Text>
        <Text size='xs'>
            <ResponsiveIcon icon={Calendar} />
            {startDate} - {endDate}
        </Text>
        {skills &&
            <Text size='xs'>
                <ResponsiveIcon icon={Star} />
                {skills?.map((item: string, idx: number) => idx < skills.length - 1 ? `${item} | ` : item)}
            </Text>
        }
        <Link label={linkLabel} to={linkUrl} icon="/globe.svg"/>
    </React.Fragment>