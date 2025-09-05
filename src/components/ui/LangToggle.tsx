'use client';

import { Languages } from 'lucide-react';
import { Text } from './Text';
import { ResponsiveIcon } from './ResponsiveIcon';
import { redirect, useParams } from "next/navigation";
import { Language } from '../types';

export const LangToggle = () => {
    
    const params = useParams<{ lang: Language }>();
    const { lang } = params;

    const handleLanguageUpdate = (nextLanguage: string) => {
        redirect(`/${nextLanguage}`);
    }

    const langMap: Record<string, Record<string, string>> = {
        en: { next: "ar", label: "English" },
        ar: { next: "tr", label: "العربية" },
        tr: { next: "en", label: "Türkçe" },
    } as const;

    const nextLang = langMap[lang]?.next ?? "en";
    const label = langMap[lang]?.label ?? "English";

    return (
        <Text onClick={() => handleLanguageUpdate(nextLang)}>
            <ResponsiveIcon icon={Languages} />
            {label}
        </Text>
    );
};
