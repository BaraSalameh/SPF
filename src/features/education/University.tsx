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
                title={universities.uu.name}
                subTitle={universities.uu.location}
                logoUrl="/UU.jpg"
                children={
                    <Usy
                        major={universities.uu.major}
                        startDate={commonAtts.uu.startDate}
                        endDate={commonAtts.uu.endDate}
                        linkLabel={visitLabel}
                        linkUrl={commonAtts.uu.website}
                    />
                }
            />
            <Card
                title={universities.aaup.name}
                subTitle={universities.aaup.location}
                logoUrl="/AAUP.png"
                children={
                    <Usy
                        major={universities.aaup.major}
                        startDate={commonAtts.aaup.startDate}
                        endDate={commonAtts.aaup.endDate}
                        linkLabel={visitLabel}
                        linkUrl={commonAtts.aaup.website}
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