'use client';

import { useParams } from "next/navigation";
import { Language } from "@/components/types";
import { arNavigator, enNavigator, trNavigator } from "../../static";

export const useTitle = () => {
    const { lang } = useParams<{ lang: Language }>();

    switch (lang) {
        case "en":
            return enNavigator.Languages;
        case "ar":
            return arNavigator.Languages;
        case "tr":
            return trNavigator.Languages;
        default:
            return enNavigator.Languages;
    }
}