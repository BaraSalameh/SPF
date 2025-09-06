import { Card, ResponsiveIcon } from "@/components/ui";
import React from "react";
import { Text } from '@/components/ui';
import { Calendar } from "lucide-react";
import { useCompany } from "./hooks/useCompany";
import { Link } from '@/components/ui';

export const  Company = () => {
    const compamies = useCompany();

    return(
        <div className="flex flex-wrap sm:flex-nowrap gap-5">
            <Card
                title={compamies.aaup.name}
                subTitle={compamies.aaup.location}
                logoUrl="/AAUP.png"
                children={<AAUP />}
            />
            <Card
                title={compamies.erpEasy.name}
                subTitle={compamies.erpEasy.location}
                logoUrl="/spinnel.png"
                children={<ERP />}
            />
            <Card
                title={compamies.jawwal.name}
                subTitle={compamies.jawwal.location}
                logoUrl="/jawwal.jpg"
                children={<Jawwal />}
            />
            <Card
                title={compamies.ulitimitats.name}
                subTitle={compamies.ulitimitats.location}
                logoUrl="/uats.png"
                children={<UATS />}
            />
        </div>
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
            <Link label={compamies.visit} to="https://www.aaup.edu" icon="/globe.svg"/>
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
            <Link label={compamies.visit} to="https://spineltechnology.com/" icon="/globe.svg"/>
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
            <Link label={compamies.visit} to="https://www.jawwal.ps/" icon="/globe.svg"/>
        </React.Fragment>
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
            <Link label={compamies.visit} to="https://www.ultimitats.com/" icon="/globe.svg"/>
        </React.Fragment>
    )
}