'use client';

import { useParams } from "next/navigation";
import { Language } from "@/components/types";
import { arVisit, enVisit, trVisit } from "../static";

export const useVisit = () => {
    const { lang } = useParams<{ lang: Language }>();

    switch (lang) {
        case "en":
            return enVisit;
        case "ar":
            return arVisit;
        case "tr":
            return trVisit;
        default:
            return enVisit;
    }
}