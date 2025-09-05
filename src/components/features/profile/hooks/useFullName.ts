'use client';

import { useParams } from "next/navigation";
import { arFullName, enFullName, trFullName } from "../static";
import { Language } from "@/components/types";

export const useFullName = () => {
    const { lang } = useParams<{ lang: Language }>();

    switch (lang) {
        case "en":
            return enFullName;
        case "ar":
            return arFullName;
        case "tr":
            return trFullName;
        default:
            return enFullName;
    }
}