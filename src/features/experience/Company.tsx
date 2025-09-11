import { Card, ResponsiveIcon } from "@/components/ui";
import React, { useContext } from "react";
import { Text } from '@/components/ui';
import { Calendar } from "lucide-react";
import { Link } from '@/components/ui';
import { CompanyProps } from "./types.experience";
import { widget } from "@/styles";
import { LanguageContext } from "@/lib/contexts/LanguageContext";
import { userCommon } from "@/content/user";

export const  Company = () => {
    const lang = useContext(LanguageContext);
    const compamies = lang.userLanguage.experience;
    const visit = lang.systemLanguage.experience.linkLabel;
    const commonAtts = userCommon.experience;

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
                        linkLabel={visit as string}
                        linkUrl={commonAtts.UATS.path}
                    />
                }
            />
        </div>
    )
}

const Cpy = ({ position, startDate, endDate, linkLabel, linkUrl }: CompanyProps) =>
    <React.Fragment>
        <Text size='sm'>
            {position}
        </Text>
        <Text size='xs'>
            <ResponsiveIcon icon={Calendar} />
            {startDate} - {endDate}
        </Text>
        <Link label={linkLabel} to={linkUrl} icon="/globe.svg"/>
    </React.Fragment>