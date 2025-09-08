import { Card, ResponsiveIcon } from "@/components/ui";
import React from "react";
import { Text } from '@/components/ui';
import { Calendar } from "lucide-react";
import { useCompany } from "./hooks/useCompany";
import { Link } from '@/components/ui';
import { useVisit } from "./hooks";
import { commonCompanyAtts } from "./static";
import { CompanyProps } from "./types.experience";

export const  Company = () => {
    const compamies = useCompany();
    const visit = useVisit();
    const commonAtts = commonCompanyAtts;

    return(
        <div className="flex flex-wrap justify-center gap-5">
            <Card
                title={compamies.aaup.name}
                subTitle={compamies.aaup.location}
                logoUrl="/AAUP.png"
                content={
                    <Cpy
                        position={compamies.aaup.position}
                        startDate={commonAtts.aaup.startDate}
                        endDate={commonAtts.aaup.endDate}
                        linkLabel={visit}
                        linkUrl={commonAtts.aaup.website}
                    />
                }
            />
            <Card
                title={compamies.erpEasy.name}
                subTitle={compamies.erpEasy.location}
                logoUrl="/spinnel.png"
                content={
                    <Cpy
                        position={compamies.erpEasy.position}
                        startDate={commonAtts.erpEasy.startDate}
                        endDate={commonAtts.erpEasy.endDate}
                        linkLabel={visit}
                        linkUrl={commonAtts.erpEasy.website}
                    />
                }
            />
            <Card
                title={compamies.jawwal.name}
                subTitle={compamies.jawwal.location}
                logoUrl="/jawwal.jpg"
                content={
                    <Cpy
                        position={compamies.jawwal.position}
                        startDate={commonAtts.jawwal.startDate}
                        endDate={commonAtts.jawwal.endDate}
                        linkLabel={visit}
                        linkUrl={commonAtts.jawwal.website}
                    />
                }
            />
            <Card
                title={compamies.ulitimitats.name}
                subTitle={compamies.ulitimitats.location}
                logoUrl="/uats.png"
                content={
                    <Cpy
                        position={compamies.ulitimitats.position}
                        startDate={commonAtts.ulitimitats.startDate}
                        endDate={commonAtts.ulitimitats.endDate}
                        linkLabel={visit}
                        linkUrl={commonAtts.ulitimitats.website}
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