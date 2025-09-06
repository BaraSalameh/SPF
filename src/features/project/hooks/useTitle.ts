'use client';

import { useParams } from "next/navigation";
import { Language } from "@/components/types";
import { arNavigator, enNavigator, trNavigator } from "../../static";

export const useTitle = () => {
    const { lang } = useParams<{ lang: Language }>();

    switch (lang) {
        case "en":
            return enNavigator.project;
        case "ar":
            return arNavigator.project;
        case "tr":
            return trNavigator.project;
        default:
            return enNavigator.project;
    }
}