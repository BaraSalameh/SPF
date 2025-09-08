'use client';

import { useParams } from "next/navigation";
import { Language } from "@/components/types";
import { arNavigator, enNavigator, trNavigator } from "../../static";

export const useTitle = () => {
    const { lang } = useParams<{ lang: Language }>();

    switch (lang) {
        case "en":
            return enNavigator.Skills;
        case "ar":
            return arNavigator.Skills;
        case "tr":
            return trNavigator.Skills;
        default:
            return enNavigator.Skills;
    }
}