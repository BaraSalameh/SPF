'use client';

import { Languages } from 'lucide-react';
import { redirect, useParams } from "next/navigation";
import { Language } from '../types';
import { useSetting } from '@/features/hooks';
import { NavButton } from './NavButton';

export const LangToggle = () => {
    
    const settings = useSetting();
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

    return (
        <NavButton
            onClick={() => handleLanguageUpdate(nextLang)}
            icon={Languages}
            label={settings.language}
        />
    );
};
