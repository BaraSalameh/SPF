'use client';

import { useParams } from "next/navigation";
import { Language } from "@/components/types";
import { systemAr, systemEn, systemTr } from "@/content/system";

export const useTitle = () => {
    const { lang } = useParams<{ lang: Language }>();

    switch (lang) {
        case "en":
            return systemEn.navigation.Languages;
        case "ar":
            return systemAr.navigation.Languages;
        case "tr":
            return systemTr.navigation.Languages;
        default:
            return systemEn.navigation.Languages;
    }
}