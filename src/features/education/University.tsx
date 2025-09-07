import { Card, ResponsiveIcon } from "@/components/ui";
import { useUniversity } from "./hooks/useUniversity"
import React from "react";
import { Text } from '@/components/ui';
import { Calendar } from "lucide-react";
import { Link } from '@/components/ui';
import { useVisit } from "./hooks";
import { commonUniversityAtts } from "./static";

export const University = () => {
    const universities = useUniversity();

    return(
        <div className="flex flex-wrap sm:flex-nowrap gap-5">
            <Card
                title={universities.aaup.name}
                subTitle={universities.aaup.location}
                logoUrl="/AAUP.png"
                children={<AAUP />}
            />
            <Card
                title={universities.uu.name}
                subTitle={universities.uu.location}
                logoUrl="/UU.jpg"
                children={<UU />}
            />
        </div>
    )
}

const AAUP = () => {
    const universities = useUniversity();
    const visitLabel = useVisit();
    const commonAtts = commonUniversityAtts;

    return (
        <React.Fragment>
            <Text size='sm'>
                {universities.aaup.major}
            </Text>
            <Text size='xs'>
                <ResponsiveIcon icon={Calendar} />
                {commonAtts.aaup.startDate} - {commonAtts.aaup.endDate}
            </Text>
            <Link label={visitLabel} to={commonAtts.aaup.website} icon="/globe.svg"/>
        </React.Fragment>
    )
}

const UU = () => {
    const universities = useUniversity();
    const visitLabel = useVisit();
    const commonAtts = commonUniversityAtts;

    return (
        <React.Fragment>
            <Text size='sm'>
                {universities.uu.major}
            </Text>
            <Text size='xs'>
                <ResponsiveIcon icon={Calendar} />
                {commonAtts.uu.startDate} - {commonAtts.uu.endDate}
            </Text>
            <Link label={visitLabel} to={commonAtts.uu.website} icon="/globe.svg"/>
        </React.Fragment>
    )
}