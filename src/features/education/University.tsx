import { Card, ResponsiveIcon } from "@/components/ui";
import { useUniversity } from "./hooks/useUniversity"
import React from "react";
import { Text } from '@/components/ui';
import { Calendar } from "lucide-react";
import { Link } from '@/components/ui';

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

    return (
        <React.Fragment>
            <Text size='sm'>
                {universities.aaup.major}
            </Text>
            <Text size='xs'>
                <ResponsiveIcon icon={Calendar} />
                10/2016 - 02/2021
            </Text>
            <Link label={universities.visit} to="https://www.aaup.edu" icon="/globe.svg"/>
        </React.Fragment>
    )
}

const UU = () => {
    const universities = useUniversity();

    return (
        <React.Fragment>
            <Text size='sm'>
                {universities.uu.major}
            </Text>
            <Text size='xs'>
                <ResponsiveIcon icon={Calendar} />
                10/2021 - 10/2023
            </Text>
            <Link label={universities.visit} to="https://uskudar.edu.tr/en" icon="/globe.svg"/>
        </React.Fragment>
    )
}