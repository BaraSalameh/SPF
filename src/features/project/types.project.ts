import { ReactNode } from "react";

export interface ProjectProps {
    features: ReactNode;
    skills: string[];
    source: string;
    sourceLabel: string;
}

export interface FeatureProps {
    features?: string[];
}