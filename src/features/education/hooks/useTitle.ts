'use client';

import { useParams } from "next/navigation";
import { Language } from "@/components/types";
import { arNavigator, enNavigator, trNavigator } from "../../static";

export const useTitle = () => {
    const { lang } = useParams<{ lang: Language }>();

    switch (lang) {
        case "en":
            return enNavigator.Education;
        case "ar":
            return arNavigator.Education;
        case "tr":
            return trNavigator.Education;
        default:
            return enNavigator.Education;
    }
}