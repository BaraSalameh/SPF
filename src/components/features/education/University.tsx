import Image from "next/image";
import { ResponsiveIcon, Text } from '@/components/ui';
import { Calendar } from "lucide-react";
import { useUniversity } from "./hooks/useUniversity";
import { UniversityProps } from "./types.education";

export const University = ({
    name,
    logoUrl,
    location,
    major,
    startDate,
    endDate = 'Present',
    website,
}: UniversityProps) => {
    const visitLabel = useUniversity();

    return (
        <div className="max-w-sm w-full rounded-2xl shadow-md bg-light-component dark:bg-dark-component p-4 flex flex-col gap-4 transition hover:shadow-xl">
        {/* Logo + Name */}
            <div className="flex items-center gap-3">
                <div className="relative w-20 h-20">
                    <Image
                        src={logoUrl}
                        alt={`${name} logo`}
                        fill
                        className="object-contain rounded-full border"
                    />
                </div>
                <div>
                    <Text>
                        {name}
                    </Text>
                    <Text size='sm' intent='secondary'>
                        {location}
                    </Text>
                </div>
            </div>

            {/* Field of study */}
            <Text size='sm'>
                {major}
            </Text>

            {/* Dates */}
            <Text size='xs'>
                <ResponsiveIcon icon={Calendar} />
                {startDate} - {endDate}
            </Text>
            

            {/* Website link */}
            <a
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href={website}
                target="_blank"
                rel="noopener noreferrer"
            >
            <Image
                aria-hidden
                src="/globe.svg"
                alt={`${name} logo`}
                width={16}
                height={16}
            />
                {visitLabel.visit}
            </a>
        </div>
    );
}
