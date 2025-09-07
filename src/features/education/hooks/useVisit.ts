'use client';

import { useParams } from "next/navigation";
import { Language } from "@/components/types";
import { arVisitUniversity, enVisitUniversity, trVisitUniversity } from "../static";

export const useVisit = () => {
    const { lang } = useParams<{ lang: Language }>();

    switch (lang) {
        case "en":
            return enVisitUniversity;
        case "ar":
            return arVisitUniversity;
        case "tr":
            return trVisitUniversity;
        default:
            return enVisitUniversity;
    }
}