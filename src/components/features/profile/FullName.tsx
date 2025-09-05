'use client';

import { Text } from "@/components/ui";
import { useFullName } from "./hooks/useFullName";

export const FullName = () => 
    <Text size='huge'>
        {useFullName()}
    </Text>