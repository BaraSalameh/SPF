'use client';

import { useParams } from "next/navigation";
import { Language } from "@/components/types";
import { arChartTitle, enChartTitle, trChartTitle } from "../static";

export const useChartTitle = () => {
    const { lang } = useParams<{ lang: Language }>();

    switch (lang) {
        case "en":
            return enChartTitle;
        case "ar":
            return arChartTitle;
        case "tr":
            return trChartTitle;
        default:
            return enChartTitle;
    }
}