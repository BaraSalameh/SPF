'use client';

import { useParams } from "next/navigation";
import { arBio, enBio, trBio } from "../static";
import { Language } from "@/components/types";

export const useBio = () => {
    const { lang } = useParams<{ lang: Language }>();

    switch (lang) {
        case "en":
            return enBio;
        case "ar":
            return arBio;
        case "tr":
            return trBio;
        default:
            return enBio;
    }
}