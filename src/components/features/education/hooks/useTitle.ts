'use client';

import { useParams } from "next/navigation";
import { Language } from "@/components/types";
import { arNavigator, enNavigator, trNavigator } from "../../static";

export const useTitle = () => {
    const { lang } = useParams<{ lang: Language }>();

    switch (lang) {
        case "en":
            return enNavigator.education;
        case "ar":
            return arNavigator.education;
        case "tr":
            return trNavigator.education;
        default:
            return enNavigator.education;
    }
}