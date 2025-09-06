'use client';

import { Text } from "@/components/ui";
import React from "react";
import { TitleProps } from "./types.shared";

export const Title = ({title}: TitleProps) => {
    const result = typeof title === 'function' ? title() : title;

    return (    
        <Text size='huge'>
            {result}
        </Text>
    )
}