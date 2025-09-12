import { ReactNode } from "react";

export interface ProjectProps {
    description: ReactNode;
    skills: string[];
    website: string;
    liveLabel: string;
    source: string;
    sourceLabel: string;
}