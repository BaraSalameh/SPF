'use client';

import { useParams, useRouter } from "next/navigation";
import { Language } from '../types';
import { Text } from './Text';

export const LangToggle = () => {
    const router = useRouter();
    const params = useParams<{ lang: Language }>();
    
    const { lang } = params;

    const handleLanguageUpdate = (nextLanguage: string) => {
        if (lang === nextLanguage) return;
        
        const currentHash = window.location.hash;

        router.push(`/${nextLanguage}${currentHash}`);
    }

    const langMap: Record<Language, Record<string, string>> = {
        en: { next: "ar", label: "En" },
        ar: { next: "tr", label: "ع" },
        tr: { next: "en", label: "Tr" },
    } as const;

    return (
        <Text
            onClick={() => handleLanguageUpdate(langMap[lang].next)}
            className='cursor-pointer '
        >{langMap[lang].label}</Text>
    );
};
