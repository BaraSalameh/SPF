'use client';

import { useParams } from "next/navigation";
import { Language } from "@/components/types";
import { systemAr, systemEn, systemTr } from "@/content/system";

export const useSystemLanguage = () => {
    const { lang } = useParams<{ lang: Language }>();

    switch (lang) {
        case "en":
            return systemEn;
        case "ar":
            return systemAr;
        case "tr":
            return systemTr;
        default:
            return systemEn;
    }
}