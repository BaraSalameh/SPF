import { ReactNode } from "react";

export type ProjectAtts = {
    name: string;
    desciption: string;
}

export type CommonProjectAtts = {
    website: string;
    source: string;
}

export interface ProjectProps {
    description: ReactNode;
    website: string;
    liveLabel: string;
    source: string;
    sourceLabel: string;
    skills: string[];
}