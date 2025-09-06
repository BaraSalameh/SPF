import { Card, ResponsiveIcon } from "@/components/ui";
import { useUniversity } from "./hooks/useUniversity"
import React from "react";
import { Text } from '@/components/ui';
import { Calendar } from "lucide-react";
import Image from "next/image";

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
            <a
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="https://www.aaup.edu"
                target="_blank"
                rel="noopener noreferrer"
            >
            <Image
                aria-hidden
                src="/globe.svg"
                alt={`${universities.aaup.name} logo`}
                width={16}
                height={16}
            />
                {universities.visit}
            </a>
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
            <a
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="https://uskudar.edu.tr/en"
                target="_blank"
                rel="noopener noreferrer"
            >
            <Image
                aria-hidden
                src="/globe.svg"
                alt={`${universities.uu.name} logo`}
                width={16}
                height={16}
            />
                {universities.visit}
            </a>
        </React.Fragment>
    )
}