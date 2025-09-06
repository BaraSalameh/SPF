'use client';

import { useParams } from "next/navigation";
import { Language } from "@/components/types";
import { arNavigator, enNavigator, trNavigator } from "../../static";

export const useTitle = () => {
    const { lang } = useParams<{ lang: Language }>();

    switch (lang) {
        case "en":
            return enNavigator.experience;
        case "ar":
            return arNavigator.experience;
        case "tr":
            return trNavigator.experience;
        default:
            return enNavigator.experience;
    }
}