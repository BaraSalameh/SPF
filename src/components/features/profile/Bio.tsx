'use client';

import { Size } from "@/components/types";
import { Text } from "@/components/ui";
import { useBio } from "./hooks/useBio";

export const Bio = () => {
    const preferredSize: Size = "sm";

    return (
        <div className="space-y-2">
            <Text size={preferredSize}>
                {useBio()}
            </Text>
        </div>
    )
}