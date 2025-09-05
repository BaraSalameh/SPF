'use client';

import { useParams } from "next/navigation";
import { Language } from "@/components/types";
import { arUniversity, enUniversity, trUniversity } from "../static";

export const useUniversity = () => {
    const { lang } = useParams<{ lang: Language }>();

    switch (lang) {
        case "en":
            return enUniversity;
        case "ar":
            return arUniversity;
        case "tr":
            return trUniversity;
        default:
            return enUniversity;
    }
}