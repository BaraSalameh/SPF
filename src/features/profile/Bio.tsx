'use client';

import { Text } from "@/components/ui";
import { useBio } from "./hooks/useBio";

export const Bio = () => 
    <Text size='sm'>
        {useBio()}
    </Text>