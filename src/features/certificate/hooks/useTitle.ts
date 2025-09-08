'use client';

import { useParams } from "next/navigation";
import { Language } from "@/components/types";
import { arNavigator, enNavigator, trNavigator } from "../../static";

export const useTitle = () => {
    const { lang } = useParams<{ lang: Language }>();

    switch (lang) {
        case "en":
            return enNavigator.Certificates;
        case "ar":
            return arNavigator.Certificates;
        case "tr":
            return trNavigator.Certificates;
        default:
            return enNavigator.Certificates;
    }
}