'use client';

import { Text } from "@/components/ui";
import { LanguageContext } from "@/lib/contexts/LanguageContext";
import { useContext } from "react";

export const Bio = () => {
    const lang = useContext(LanguageContext);
    const bio = lang.userLanguage.profile.information.bio

    return (
        <Text size='sm'>
            {bio}
        </Text>
    )
}
    