import { Card, ResponsiveIcon } from "@/components/ui";
import React from "react";
import { Text } from '@/components/ui';
import { Calendar } from "lucide-react";
import { useCompany } from "./hooks/useCompany";
import { Link } from '@/components/ui';
import { useVisit } from "./hooks";
import { commonCompanyAtts } from "./static";
import { CompanyProps } from "./types.experience";
import { widget } from "@/styles";

export const  Company = () => {
    const compamies = useCompany();
    const visit = useVisit();
    const commonAtts = commonCompanyAtts;

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
                        linkLabel={visit}
                        linkUrl={commonAtts.AAUP.website}
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
                        linkLabel={visit}
                        linkUrl={commonAtts.Spinnel.website}
                    />
                }
            />
            <Card
                title={compamies.Jawwal.name}
                subTitle={compamies.Jawwal.location}
                logoUrl="/Jawwal.jpg"
                content={
                    <Cpy
                        position={compamies.Jawwal.position}
                        startDate={commonAtts.Jawwal.startDate}
                        endDate={commonAtts.Jawwal.endDate}
                        linkLabel={visit}
                        linkUrl={commonAtts.Jawwal.website}
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
                        linkLabel={visit}
                        linkUrl={commonAtts.UATS.website}
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