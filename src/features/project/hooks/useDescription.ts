'use client';

import { useParams } from "next/navigation";
import { Language } from "@/components/types";
import { arDescription, enDescription, trDescription } from "../static";

export const useDescription = () => {
    const { lang } = useParams<{ lang: Language }>();

    switch (lang) {
        case "en":
            return enDescription;
        case "ar":
            return arDescription;
        case "tr":
            return trDescription;
        default:
            return enDescription;
    }
}