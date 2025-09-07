'use client';

import { useParams } from "next/navigation";
import { Language } from "@/components/types";
import { arVisitSourceProject, enVisitSourceProject, trVisitSourceProject } from "../static";

export const useVisitSource = () => {
    const { lang } = useParams<{ lang: Language }>();

    switch (lang) {
        case "en":
            return enVisitSourceProject;
        case "ar":
            return arVisitSourceProject;
        case "tr":
            return trVisitSourceProject;
        default:
            return enVisitSourceProject;
    }
}