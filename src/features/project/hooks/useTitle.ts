'use client';

import { useParams } from "next/navigation";
import { Language } from "@/components/types";
import { arNavigator, enNavigator, trNavigator } from "../../static";

export const useTitle = () => {
    const { lang } = useParams<{ lang: Language }>();

    switch (lang) {
        case "en":
            return enNavigator.Projects;
        case "ar":
            return arNavigator.Projects;
        case "tr":
            return trNavigator.Projects;
        default:
            return enNavigator.Projects;
    }
}