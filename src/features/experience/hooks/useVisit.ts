'use client';

import { useParams } from "next/navigation";
import { Language } from "@/components/types";
import { arVisitCompany, enVisitCompany, trVisitCompany } from "../static";

export const useVisit = () => {
    const { lang } = useParams<{ lang: Language }>();

    switch (lang) {
        case "en":
            return enVisitCompany;
        case "ar":
            return arVisitCompany;
        case "tr":
            return trVisitCompany;
        default:
            return enVisitCompany;
    }
}