'use client';

import { useParams } from "next/navigation";
import { Language } from "@/components/types";
import { arCompany, enCompany, trCompany } from "..";

export const useCompany = () => {
    const { lang } = useParams<{ lang: Language }>();

    switch (lang) {
        case "en":
            return enCompany;
        case "ar":
            return arCompany;
        case "tr":
            return trCompany;
        default:
            return enCompany;
    }
}