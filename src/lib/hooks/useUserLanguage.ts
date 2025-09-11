'use client';

import { useParams } from "next/navigation";
import { Language } from "@/components/types";
import { userAr, userEn, userTr } from "@/content/user";

export const useUserLanguage = () => {
    const { lang } = useParams<{ lang: Language }>();

    switch (lang) {
        case "en":
            return userEn;
        case "ar":
            return userAr;
        case "tr":
            return userTr;
        default:
            return userEn;
    }
}