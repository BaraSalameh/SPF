'use client';

import { Globe, Languages, X } from 'lucide-react';
import { useParams, useRouter } from "next/navigation";
import { Language } from '../types';
import { NavButton } from './NavButton';
import { useContext, useState } from 'react';
import { LanguageContext } from '@/lib/contexts/LanguageContext';

export const LangToggle = () => {
    
    const applang = useContext(LanguageContext);
    const router = useRouter();
    const params = useParams<{ lang: Language }>();
    
    const [ showLanguages, setShowLanguages ] = useState(false);
    
    const label = applang.systemLanguage.setting.language.label;
    const { lang } = params;

    const handleLanguageUpdate = (nextLanguage: string) => {
        if (lang === nextLanguage) return;
        
        const currentHash = window.location.hash;

        router.push(`/${nextLanguage}${currentHash}`);
    }

    const langMap: Record<Language, Record<string, string>> = {
        en: { next: "en", label: "English" },
        ar: { next: "ar", label: "العربية" },
        tr: { next: "tr", label: "Türkçe" },
    } as const;

    return (
        <div className={`flex flex-col gap-2`}>
            <NavButton
                hoverable={false}
                onClick={() => setShowLanguages(!showLanguages)}
                icon={showLanguages ? X : Globe}
                label={label}
            />
            {showLanguages &&
                <div className="flex flex-col gap-2 px-10">      
                    <NavButton
                        hoverable={false}
                        onClick={() => handleLanguageUpdate(langMap.en.next)}
                        icon={Languages}
                        label={langMap.en.label}
                    />
                    <NavButton
                        hoverable={false}
                        onClick={() => handleLanguageUpdate(langMap.ar.next)}
                        icon={Languages}
                        label={langMap.ar.label}
                    />
                    <NavButton
                        hoverable={false}
                        onClick={() => handleLanguageUpdate(langMap.tr.next)}
                        icon={Languages}
                        label={langMap.tr.label}
                    />
                </div>
            }
        </div>
    );
};
