'use client';

import { useParams } from "next/navigation";
import { Language } from "@/components/types";
import { systemEn } from "@/content/system/en";
import { systemAr } from "@/content/system/ar";
import { systemTr } from "@/content/system/tr";

export const useTitle = () => {
    const { lang } = useParams<{ lang: Language }>();

    switch (lang) {
        case "en":
            return systemEn.navigation.Skills;
        case "ar":
            return systemAr.navigation.Skills;
        case "tr":
            return systemTr.navigation.Skills;
        default:
            return systemEn.navigation.Skills;
    }
}