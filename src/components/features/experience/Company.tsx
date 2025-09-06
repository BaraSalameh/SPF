import { Card, ResponsiveIcon } from "@/components/ui";
import React from "react";
import { Text } from '@/components/ui';
import { Calendar } from "lucide-react";
import Image from "next/image";
import { useCompany } from "./hooks/useCompany";

export const  Company = () => {
    const compamies = useCompany();

    return(
        <div className="flex flex-wrap sm:flex-nowrap gap-5">
            <Card
                title={compamies.ulitimitats.name}
                subTitle={compamies.ulitimitats.location}
                logoUrl="/uats.png"
                children={<UATS />}
            />
            <Card
                title={compamies.jawwal.name}
                subTitle={compamies.jawwal.location}
                logoUrl="/jawwal.jpg"
                children={<Jawwal />}
            />
            <Card
                title={compamies.erpEasy.name}
                subTitle={compamies.erpEasy.location}
                logoUrl="/spinnel.png"
                children={<ERP />}
            />
            <Card
                title={compamies.aaup.name}
                subTitle={compamies.aaup.location}
                logoUrl="/AAUP.png"
                children={<AAUP />}
            />
        </div>
    )
}

const UATS = () => {
    const compamies = useCompany();

    return (
        <React.Fragment>
            <Text size='sm'>
                {compamies.ulitimitats.position}
            </Text>
            <Text size='xs'>
                <ResponsiveIcon icon={Calendar} />
                05/2022 - 08/2022
            </Text>
            <a
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="https://www.ultimitats.com/"
                target="_blank"
                rel="noopener noreferrer"
            >
            <Image
                aria-hidden
                src="/globe.svg"
                alt={`${compamies.ulitimitats.name} logo`}
                width={16}
                height={16}
            />
                {compamies.visit}
            </a>
        </React.Fragment>
    )
}

const Jawwal = () => {
    const compamies = useCompany();

    return (
        <React.Fragment>
            <Text size='sm'>
                {compamies.jawwal.position}
            </Text>
            <Text size='xs'>
                <ResponsiveIcon icon={Calendar} />
                10/2023 - 02/2024
            </Text>
            <a
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="https://www.jawwal.ps/"
                target="_blank"
                rel="noopener noreferrer"
            >
            <Image
                aria-hidden
                src="/globe.svg"
                alt={`${compamies.jawwal.name} logo`}
                width={16}
                height={16}
            />
                {compamies.visit}
            </a>
        </React.Fragment>
    )
}

const ERP = () => {
    const compamies = useCompany();

    return (
        <React.Fragment>
            <Text size='sm'>
                {compamies.erpEasy.position}
            </Text>
            <Text size='xs'>
                <ResponsiveIcon icon={Calendar} />
                02/2024 - 05/2024
            </Text>
            <a
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="https://spineltechnology.com/"
                target="_blank"
                rel="noopener noreferrer"
            >
            <Image
                aria-hidden
                src="/globe.svg"
                alt={`${compamies.erpEasy.name} logo`}
                width={16}
                height={16}
            />
                {compamies.visit}
            </a>
        </React.Fragment>
    )
}

const AAUP = () => {
    const compamies = useCompany();

    return (
        <React.Fragment>
            <Text size='sm'>
                {compamies.aaup.position}
            </Text>
            <Text size='xs'>
                <ResponsiveIcon icon={Calendar} />
                10/2024 - 02/2025
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
                alt={`${compamies.aaup.name} logo`}
                width={16}
                height={16}
            />
                {compamies.visit}
            </a>
        </React.Fragment>
    )
}