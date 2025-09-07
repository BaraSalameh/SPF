import { ReactNode } from "react";

type ProjectAtts = {
    name: string;
    desciption: string;
}

type CommonProjectAtts = {
    website: string;
    source: string;
    skills: string[]
}

export interface ProjectsAtts {
    staticPortfolio: ProjectAtts;
    portfolio: ProjectAtts;
    aluminum: ProjectAtts
}

export interface CommonProjectsAtts {
    staticPortfolio: CommonProjectAtts;
    portfolio: CommonProjectAtts;
    aluminum: CommonProjectAtts
}

export interface ProjectProps {
    description: ReactNode;
    website: string;
    liveLabel: string;
    source: string;
    sourceLabel: string;
    skills: string[];
}