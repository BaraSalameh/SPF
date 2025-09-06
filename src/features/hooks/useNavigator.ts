'use client';

import { useParams } from "next/navigation";
import { arNavigator, enNavigator, trNavigator } from "../static";
import { Language } from "@/components/types";

export const useNavigator = () => {
    const { lang } = useParams<{ lang: Language }>();

    switch (lang) {
        case "en":
            return enNavigator;
        case "ar":
            return arNavigator;
        case "tr":
            return trNavigator;
        default:
            return enNavigator;
    }
}