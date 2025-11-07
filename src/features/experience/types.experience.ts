import { ReactNode } from "react";

export interface CompanyProps {
    description: ReactNode;
    position: string;
    startDate: string;
    endDate: string;
    skills: string[];
}

export interface AchivementProps {
    achivements?: string[];
}