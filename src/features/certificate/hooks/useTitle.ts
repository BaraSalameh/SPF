'use client';

import { useParams } from "next/navigation";
import { Language } from "@/components/types";
import { arNavigator, enNavigator, trNavigator } from "../../static";

export const useTitle = () => {
    const { lang } = useParams<{ lang: Language }>();

    switch (lang) {
        case "en":
            return enNavigator.certificates;
        case "ar":
            return arNavigator.certificates;
        case "tr":
            return trNavigator.certificates;
        default:
            return enNavigator.certificates;
    }
}