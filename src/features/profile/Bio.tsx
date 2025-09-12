'use client';

import { Text } from "@/components/ui";
import { useLanguage } from "@/lib/hooks";

export const Bio = () => {
    const lang = useLanguage();
    const bio = lang.userLanguage.profile.information.bio

    return (
        <Text size='sm'>
            {bio}
        </Text>
    )
}
    