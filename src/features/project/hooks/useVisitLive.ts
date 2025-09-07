'use client';

import { useParams } from "next/navigation";
import { Language } from "@/components/types";
import { arVisitLiveProject, enVisitLiveProject, trVisitLiveProject } from "../static";

export const useVisitLive = () => {
    const { lang } = useParams<{ lang: Language }>();

    switch (lang) {
        case "en":
            return enVisitLiveProject;
        case "ar":
            return arVisitLiveProject;
        case "tr":
            return trVisitLiveProject;
        default:
            return enVisitLiveProject;
    }
}