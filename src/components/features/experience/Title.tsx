'use client';

import { Text } from "@/components/ui";
import { useTitle } from "./hooks/useTitle";

export const Title = () => 
    <Text size='huge'>
        {useTitle()}
    </Text>