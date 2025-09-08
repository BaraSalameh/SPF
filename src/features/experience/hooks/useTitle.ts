'use client';

import { useParams } from "next/navigation";
import { Language } from "@/components/types";
import { arNavigator, enNavigator, trNavigator } from "../../static";

export const useTitle = () => {
    const { lang } = useParams<{ lang: Language }>();

    switch (lang) {
        case "en":
            return enNavigator.Experience;
        case "ar":
            return arNavigator.Experience;
        case "tr":
            return trNavigator.Experience;
        default:
            return enNavigator.Experience;
    }
}