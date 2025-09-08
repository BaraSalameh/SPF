'use client';

import { useParams } from "next/navigation";
import { Language } from "@/components/types";
import { arLanguage, enLanguage, trLanguage } from "../static";

export const useLanguage = () => {
    const { lang } = useParams<{ lang: Language }>();

    switch (lang) {
        case "en":
            return enLanguage;
        case "ar":
            return arLanguage;
        case "tr":
            return trLanguage;
        default:
            return enLanguage;
    }
}