'use client';

import { useParams } from "next/navigation";
import { Language } from "@/components/types";
import { arProjects, enProjects, trProjects } from "../static";

export const useProject = () => {
    const { lang } = useParams<{ lang: Language }>();

    switch (lang) {
        case "en":
            return enProjects;
        case "ar":
            return arProjects;
        case "tr":
            return trProjects;
        default:
            return enProjects;
    }
}