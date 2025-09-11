import { Card, ResponsiveIcon } from "@/components/ui";
import React, { useContext } from "react";
import { Text } from '@/components/ui';
import { Calendar } from "lucide-react";
import { Link } from '@/components/ui';
import { widget } from "@/styles";
import { LanguageContext } from "@/lib/contexts/LanguageContext";
import { userCommon } from "@/content/user";
import { UniversityProps } from "./types.education";

export const University = () => {
    const lang = useContext(LanguageContext);
    const universities = lang.userLanguage.education;
    const label = lang.systemLanguage.education.linkLabel;
    const commonAtts = userCommon.education;

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
                        linkLabel={label as string}
                        linkUrl={commonAtts.AAUP.path}
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