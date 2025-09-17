import { ReactNode } from "react";

export interface CompanyProps {
    description: ReactNode;
    position: string;
    startDate: string;
    endDate: string;
    skills: string[];
    linkLabel: string;
    linkUrl: string;
}

export interface ResponsibilityAndAchivementProps {
    responsibilityLabel?: string;
    achivementLabel?: string;
    responsibilities?: string[];
    achivements?: string[];
}