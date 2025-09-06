'use client';

import { useParams } from "next/navigation";
import { Language } from "@/components/types";
import { arNavigator, enNavigator, trNavigator } from "../../static";

export const useTitle = () => {
    const { lang } = useParams<{ lang: Language }>();

    switch (lang) {
        case "en":
            return enNavigator.skills;
        case "ar":
            return arNavigator.skills;
        case "tr":
            return trNavigator.skills;
        default:
            return enNavigator.skills;
    }
}