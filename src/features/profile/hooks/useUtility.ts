'use client';

import { useParams } from "next/navigation";
import { arUtility, enUtility, trUtility } from "../static";
import { Language } from "@/components/types";

export const useUtility = () => {
    const { lang } = useParams<{ lang: Language }>();

    switch (lang) {
        case "en":
            return enUtility;
        case "ar":
            return arUtility;
        case "tr":
            return trUtility;
        default:
            return enUtility;
    }
}