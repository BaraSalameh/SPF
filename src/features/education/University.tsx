import { Card, ResponsiveIcon } from "@/components/ui";
import { useUniversity } from "./hooks/useUniversity"
import React from "react";
import { Text } from '@/components/ui';
import { Calendar } from "lucide-react";
import { Link } from '@/components/ui';
import { useVisit } from "./hooks";
import { commonUniversityAtts } from "./static";
import { UniversityProps } from "./types.education";

export const University = () => {
    const universities = useUniversity();
    const commonAtts = commonUniversityAtts;
    const visitLabel = useVisit();

    return(
        <div className="flex flex-wrap sm:flex-nowrap gap-5">
            <Card
                title={universities.UU.name}
                subTitle={universities.UU.location}
                logoUrl="/UU.jpg"
                content={
                    <Usy
                        major={universities.UU.major}
                        startDate={commonAtts.UU.startDate}
                        endDate={commonAtts.UU.endDate}
                        linkLabel={visitLabel}
                        linkUrl={commonAtts.UU.website}
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
                        linkLabel={visitLabel}
                        linkUrl={commonAtts.AAUP.website}
                    />
                }
            />
        </div>
    )
}

const Usy = ({ major, startDate, endDate, linkLabel, linkUrl }: UniversityProps) =>
    <React.Fragment>
        <Text size='sm'>
            {major}
        </Text>
        <Text size='xs'>
            <ResponsiveIcon icon={Calendar} />
            {startDate} - {endDate}
        </Text>
        <Link label={linkLabel} to={linkUrl} icon="/globe.svg"/>
    </React.Fragment>