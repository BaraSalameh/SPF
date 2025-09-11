'use client';

import { useParams } from "next/navigation";
import { Language } from "@/components/types";
import { systemAr, systemEn, systemTr } from "@/content/system";

export const useTitle = () => {
    const { lang } = useParams<{ lang: Language }>();

    switch (lang) {
        case "en":
            return systemEn.navigation.Certificates;
        case "ar":
            return systemAr.navigation.Certificates;
        case "tr":
            return systemTr.navigation.Certificates;
        default:
            return systemEn.navigation.Certificates;
    }
}