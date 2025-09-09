'use client';

import { useParams } from "next/navigation";
import { arInformation, enInformation, trInformation } from "../static";
import { Language } from "@/components/types";

export const useInformation = () => {
    const { lang } = useParams<{ lang: Language }>();

    switch (lang) {
        case "en":
            return enInformation;
        case "ar":
            return arInformation;
        case "tr":
            return trInformation;
        default:
            return enInformation;
    }
}