'use client'

import { useState } from "react";
import { ResponsiveIcon } from "./ResponsiveIcon";
import { Text } from '@/components/ui'
import { NavButtonProps } from "./types.ui";

export const NavButton = ({ navigateTo, label, icon}: NavButtonProps) => {
    const [hovered, setHovered] = useState(false);

    return (
        <a
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            href={`#${navigateTo}`}
            className={`
                flex items-center gap-2
                bg-light-component dark:bg-dark-component
                rounded-full px-4 py-2
                transition-all duration-1000 ease-in-out
                overflow-hidden
                ${hovered ? "max-w-[20rem]" : "max-w-[3.5rem]"}
            `}
        >
            <Text className="flex-shrink-0">{<ResponsiveIcon icon={icon} />}</Text>
            <Text
                className={`whitespace-nowrap transition-opacity duration-200 ${
                hovered ? "opacity-100" : "opacity-0"
                }`}
            >
                {label}
            </Text>
        </a>
    )
}