'use client';

import { useParams } from "next/navigation";
import { Language } from "@/components/types";
import { arNavigator, enNavigator, trNavigator } from "../../static";

export const useTitle = () => {
    const { lang } = useParams<{ lang: Language }>();

    switch (lang) {
        case "en":
            return enNavigator.languages;
        case "ar":
            return arNavigator.languages;
        case "tr":
            return trNavigator.languages;
        default:
            return enNavigator.languages;
    }
}