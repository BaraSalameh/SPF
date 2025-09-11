import { ReactNode } from "react";

export interface ProjectProps {
    description: ReactNode;
    website: string;
    liveLabel: string;
    source: string;
    sourceLabel: string;
    skills: string[];
}