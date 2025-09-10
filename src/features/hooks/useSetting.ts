'use client';

import { useParams } from "next/navigation";
import { arSettings, enSettings, trSettings } from "../static";
import { Language } from "@/components/types";

export const useSetting = () => {
    const { lang } = useParams<{ lang: Language }>();

    switch (lang) {
        case "en":
            return enSettings;
        case "ar":
            return arSettings;
        case "tr":
            return trSettings;
        default:
            return enSettings;
    }
}